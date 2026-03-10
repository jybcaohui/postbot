
/**
 * Copyright (c) 2025-2099 GitCoffee All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { getSelectionContent } from "~utils/content";

import { isLoginApi } from "~api/media/user.api";

export const initContextMenusEvent = () => {

  chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "syncMenuItem",
      title: "提取内容并同步",
      contexts: ["all"], // 你可以限制菜单项显示的上下文
    });
  });

  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "syncMenuItem") {
      // 在这里处理菜单项被点击时的操作
      console.log("提取内容并同步 菜单项被点击");

      handelSyncData(info, tab);

    }
  });

  const handelSyncData = async (info, tab) => {
    // 绕过登录检查，直接提取内容
    const url = info.linkUrl || info.frameUrl || info.pageUrl;

    try {
      chrome.tabs.sendMessage(tab.id, { action: "previewContent", tabTitle: tab.title, tabUrl: url }, (response) => {
        if (chrome.runtime.lastError) {
          console.error('Error sending message:', chrome.runtime.lastError);
          // 尝试打开发布页面
          chrome.tabs.create({ 
            url: chrome.runtime.getURL('sidepanel.html') 
          });
          return;
        }
        
        if (response && response.content) {
          console.log('Content received:', response.content);
          // 内容获取成功，打开发布页面
          chrome.tabs.create({ 
            url: chrome.runtime.getURL('sidepanel.html') 
          }, (newTab) => {
            // 页面打开后，等待一段时间，然后触发发布流程
            setTimeout(() => {
              chrome.tabs.sendMessage(newTab.id, {
                action: 'autoPublish'
              });
            }, 1000);
          });
        } else {
          console.error('No content received or response is undefined');
          // 没有获取到内容，仍然打开发布页面
          chrome.tabs.create({ 
            url: chrome.runtime.getURL('sidepanel.html') 
          });
        }
      });
    } catch (error) {
      console.error('Error in handelSyncData:', error);
      // 发生错误时，仍然打开发布页面
      chrome.tabs.create({ 
        url: chrome.runtime.getURL('sidepanel.html') 
      });
    }
  }
}