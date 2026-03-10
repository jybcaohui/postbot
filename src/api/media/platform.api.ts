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
import { getPostBotBaseApi } from "~config/config";

export const listingApi = async(params) => {
    // 绕过后端API，直接返回默认平台列表
    return {
        data: {
            list: [
                {
                    code: 'toutiao',
                    name: '今日头条',
                    icon: 'https://postbot.exmay.com/docs/images/platform/toutiao.svg',
                    type: 'article'
                },
                {
                    code: 'weibo',
                    name: '微博',
                    icon: 'https://postbot.exmay.com/docs/images/platform/weibo.svg',
                    type: 'article'
                },
                {
                    code: 'zhihu',
                    name: '知乎',
                    icon: 'https://postbot.exmay.com/docs/images/platform/zhihu.svg',
                    type: 'article'
                },
                {
                    code: 'weixin',
                    name: '微信公众平台',
                    icon: 'https://postbot.exmay.com/docs/images/platform/weixin.svg',
                    type: 'article'
                },
                {
                    code: 'bilibili',
                    name: '哔哩哔哩',
                    icon: 'https://postbot.exmay.com/docs/images/platform/bilibili.svg',
                    type: 'article'
                },
                {
                    code: 'xiaohongshu',
                    name: '小红书',
                    icon: 'https://postbot.exmay.com/docs/images/platform/xiaohongshu.svg',
                    type: 'article'
                }
            ]
        }
    };
}