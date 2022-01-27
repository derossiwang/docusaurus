---
sidebar_position: 5
---

# 分享

实现分享，分享状态监听。

:::tip 组件路径

CommonSDK/components/Share.js

:::

## API

### 索引

- `initMsg`  初始化分享信息(从服务器获取)
- `onSystemShare` 添加右上角系统转发的监听
- `shareGameMsg` 主动调用分享
- `param` 分享平台参数实例

### 方法

<br></br>

#### <font size="4">**initMsg()**</font>

该方法首先会初始化本地share数据，随后从服务器拉取share信息并记录下服务器的分享审核标志(失败每秒自动重试)，最后调用`onSystemShare`添加右上角系统转发的监听。

<br></br>

#### <font size="4">**onSystemShare(key)**</font>

初始化页面的转发按钮，监听用户点击右上角菜单的「转发」按钮时触发的事件(兼容友盟SDK)，并添加右上角的分享到朋友圈功能

<font color="gray">**参数列表**</font>

* `key`  [String][String] 需要更换的玩法key

<br></br>

#### <font size="4">**shareGameMsg(obj)**</font>

主动调用分享，并在前后台监听分享成功与否

<font color="gray">**参数列表**</font>

* `obj`  [Object][Object] 
  * `key` [String(可选)][String] 指定的玩法key
  * `title` [String(可选)][String] 分享信息标题
  * `imageUrl` [String(可选)][String] 分享信息图片地址
  * `success` [Function(可选)][Function] 分享成功回调
  * `fail` [Function(可选)][Function] 分享失败回调
  * `err` [Function(可选)][Function] 分享错误回调(一般是审核开)
  * `regularTime` [Number(可选)][Number] 分享流程一般用时(分享成功失败用到)
  * `query` [String(可选)][String] ???????[并没有用到]
  * `showToast` [Boolean(可选)][boolean] 是否显示toast
  * `ignoreSH` [Boolean(可选)][boolean] 是否无视审核

:::tip 可使用分享的情况

1. 非激励分享
2. 无视审核的分享
3. 审核关 & 在线分享开关为开

:::

### 实例

<br></br>

<font size="4">**UtilParam**</font>

分享平台参数实例

- [Object][Object] 
  - `isSupport` [Boolean][Boolean] 是否支持分享
  - `isShareOpen` [Boolean][Boolean] 该游戏是否开放了分享成功与否的接口
  - `setTimeout` [Function(handler, timeout)][Function] 设置定时执行任务
  - `clearTimeout` [Function][Function] 清除定时执行任务

::: details 分享 & 分享成功与否接口 支持平台

**分享**：微信，手Q，头条，百度，UC，360，bilibili

**分享成功与否接口**：手Q，头条，百度，360，bilibili

:::



[any]: https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html#any
[Object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
[String]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
[Function]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
[Number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
[Boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
