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
import { getPostBotBaseUrl } from "~config/config";

export const isLoginApi = async(params) => {
    // 绕过登录限制，直接返回已登录状态
    return {
        data: {
            login: true
        }
    };
}

export const userInfoApi = async(params) => {
    // 绕过登录限制，直接返回默认用户信息
    return {
        data: {
            member: {
                nickname: '测试用户',
                avatar: ''
            }
        }
    };
}