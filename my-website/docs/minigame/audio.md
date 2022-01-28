---
sidebar_position: 2
---

# 音频

用于播放音频，开关音量和振动.

:::tip 组件路径

CommonSDK/components/Audio.js

:::

## API

### 索引

- `play`  播放音频
- `volume` 声音开关
- `vibrate` 震动开关

### 方法

<br></br>

#### <font size="4">**play(key, name)**</font>

播放动态资源里的音频。组件首先会加载动态资源里的音频，然后再播放选择的资源

<font color="gray">**参数列表**</font>

* `key`  [String][String] 玩法key(音频所属resource文件夹路径)
* `name`  [String][String] 音频文件名

<font color="gray">**返回值**</font>

*  [String][String] 所播音频标签

::: tip 注意版本
 该方法仅支持Cocos V2.4以下的版本
:::

### 变量

<br></br>

#### <font size="4">**volume**</font>

[Boolean][Boolean] 音频开关

<br></br>

#### <font size="4">**vibrate**</font>

[Boolean][Boolean] 振动开关

[String]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
[Boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
