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
<template>
  <div style="width: 200px; padding: 16px; text-align: center;">
    <h3 style="margin-bottom: 16px; color: #bd34fe;">PostBot 内容同步助手</h3>
    <button 
      style="
        width: 100%;
        padding: 8px 16px;
        background-color: #bd34fe;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 14px;
      "
      @click="openFullPage"
    >
      打开全页面
    </button>
  </div>
</template>

<script lang="ts" setup>
  const openFullPage = () => {
    // 打开一个新的标签页，加载sidepanel.html
    chrome.tabs.create({ 
      url: chrome.runtime.getURL('sidepanel.html') 
    });
  };

</script>

<style scoped>
/* 如果需要引入CSS，可以直接在这里写或者通过@import引入 */
@import '~style.css';
</style>