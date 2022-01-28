---
sidebar_position: 6
---

# 统计(小游戏)

用于上报信息到行为统计服务器。该组件基于Redux框架开发。


## 使用

1. 将组件引入到工程中，具体操作请参考[指南-引入通用组件]。
2. 根据需求使用合适的[API](#api)上报。

::: tip 组件路径
 https://192.168.10.5/svn/pdragon/C2DXSDK_JS/
 CommonSDK/common/component/Statistics/Statistics.ts
:::

::: tip 上报API选用
统计组件的逻辑是每间隔一段时间会拉取数据上报。若用户在下次上报前退出了游戏，那么数据会存在缓存中，下次启动游戏会重新上传。使用`reportEvent`可以应对大多数情况，但是对于日活、留存这类的数据，很多新用户进入游戏后可能很快就退出了，也不一定会再次启动游戏，这种情况下使用`reportEventNow`方法可确保数据准确。
:::

::: warning 注意！
需酌情考虑`reportEventNow`的使用，滥用会对统计服务器造成巨大的压力。
:::



### 次数统计
次数统计直接调用上报API即可。
``` js{9}
// StartScene.js 

const Stat = require("Statistics");

cc.Class({
    extends: cc.Component,
    onLoad () {
        ...
        Stat.reportEvent("starttimes",`${玩法key值}`,"count") //上传玩法启动次数
        ...
    }
});
```

### 时间统计
时间统计需调用两次上报API。计时开始和结束分别调用一次。
``` js{8,11}
// StartScene.js 

const Stat = require("Statistics");

cc.Class({
    extends: cc.Component,
    onLoad () {
        Stat.reportEvent("playtime",`${玩法key值}`,"time") //开始计时
    },
    onDestroy () {
        Stat.reportEvent("playtime",`${玩法key值}`,"time") //结束计时,并上报
    }
});

```

### 用户来源统计
将来源统计模块引入到脚本，调用API即可获取来源信息并上报(该方法整个游戏周期只调用一次)。

``` js{9}
// StartScene.js 

const NewlyIncreased = require("NewlyIncreased");

cc.Class({
    extends: cc.Component,
    onLoad () {
        ...
        NewlyIncreased.statNew() //统计用户来源
        ...
    }
});
```



## 统计规范

目前的统计项有时长统计、开始次数、结束次数、玩过人数、视频次数、插屏次数、用户留存、af统计、用户来源统计、导量统计。

|统计事项 |   必加         | 备注  |
| :------------- |:-------------:| :-----|
[用户留存](#用户留存)|是|由统计组件自动上报
[af统计](#af统计)|是|由统计组件自动上报
[用户来源](#用户来源)|否|根据需求文档决定是否加入
[时长](#时长)|是|
[开始次数](#开始次数)|是|
[结束次数](#结束次数)|是|
[关卡](#关卡)|否|根据需求文档决定是否加入
[玩过人数](#玩过人数)|是|要去掉重复用户
[视频次数](#视频次数)|是|
[插屏次数](#插屏次数)|是|
[导量](#导量)|否|由导量组件自动上报

### 统计事件详细说明

#### <font size="4">**用户留存**</font>

统计用户留存信息。该功能已集成到统计组件中，无需单独上报。
<br></br>

<font color="gray">**参数列表**</font>

|事件名(event)| 标签(label)|类型(type)|功能|
| :------------- | :------------- | :-------- |:-------------|
user_days|day_启动天数_start|count|用户当天第一次启动时，上报启动天数。

<br></br>

#### <font size="4">**af统计**</font>

统计用户广告点击级别和时长累计级别。该功能已集成到统计组件中，无需单独上报。
<br></br>

<font color="gray">**参数列表**</font>

|事件名(event)| 标签(label)|类型(type)|功能|
| :------------- | :------------- | :------------- |:-------------|
af_ad_level_achieved| video_click_level_当前级别|count|广告点击级别事件
af_level_achieved|time_level_当前级别|count|时长累计级别

<br></br>

#### <font size="4">**用户来源**</font>

统计新增用户的来源途径。该功能已集成到[用户来源统计](#用户来源统计)模块中，自主调用即可上报。
<br></br>

<font color="gray">**参数列表**</font>

|事件名(event)| 标签(label)|类型(type)|功能|
| :------------- | :------------- | :------------- |:-------------|
NewUsers| 场景值|count|**新增**用户的来源途径

<br></br>

#### <font size="4">**时长**</font>

统计游戏时长。
<br></br>

<font color="gray">**参数列表**</font>

|事件名(event)| 标签(label)|类型(type)|功能|
| :------------- | :------------- | :------------- |:-------------|
playtime|玩法名|time|统计游戏时长

<br></br>

#### <font size="4">**开始次数**</font>

统计各个玩法的游戏开始的次数。
<br></br>

<font color="gray">**参数列表**</font>

|事件名(event)| 标签(label)|类型(type)|功能|
| :------------- | :------------- | :------------- |:-------------|
starttimes| 玩法名|count|游戏开始次数

<br></br>

#### <font size="4">**结束次数**</font>

统计各个玩法的游戏结束的次数。
<br></br>

<font color="gray">**参数列表**</font>

|事件名(event)| 标签(label)|类型(type)|功能|
| :------------- | :------------- | :------------- |:-------------|
overtimes|玩法名|count|游戏结束次数

<br></br>

#### <font size="4">**关卡**</font>

统计关卡类游戏各关卡的开始次数、结束次数和首次结束次数。
<br></br>

<font color="gray">**参数列表**</font>

|事件名(event)| 标签(label)|类型(type)|功能|
| :------------- | :------------- | :------------- |:-------------|
levelstarttimes_玩法名|难度_关卡数|count|关卡开始次数
levelovertimes_玩法名|难度_关卡数|count|关卡结束次数
levelFirststarttimes_玩法名|难度_关卡数|count|关卡**首次**开始次数
levelFirstovertimes_玩法名|难度_关卡数|count|关卡**首次**结束次数

<br></br>

#### <font size="4">**玩过人数**</font>

统计各个玩法首次进入的玩家数。
<br></br>

<font color="gray">**参数列表**</font>

|事件名(event)| 标签(label)|类型(type)|功能|
| :------------- | :------------- | :------------- |:-------------|
playpeople|玩法名|count|各个玩法**首次**进入的**人数**

<br></br>

#### <font size="4">**视频次数**</font>

统计视频播放完成次数。
<br></br>

<font color="gray">**参数列表**</font>

|事件名(event)| 标签(label)|类型(type)|功能|
| :------------- | :------------- | :------------- |:-------------|
video|玩法名|ad|该玩法总视频次数
video_玩法名|玩法名_道具名|ad|该玩法每个道具的次数

<br></br>

#### <font size="4">**插屏次数**</font>

统计插屏播放次数。
<br></br>

<font color="gray">**参数列表**</font>

|事件名(event)| 标签(label)|类型(type)|功能|
| :------------- | :------------- | :------------- |:-------------|
insertads|home_all|count|切换前后台插屏请求数
insertads|home_select|count|切换前后台插屏请求成功数
insertads|home_show|count|切换前后台插屏展示数
insertads|玩法名_all|count|游戏结束后插屏请求数
insertads|玩法名_select|count|游戏结束后插屏请求成功数
insertads|玩法名_show|count|游戏结束后插屏展示数

<br></br>

#### <font size="4">**导量**</font>

导量组件导量信息统计,导量组件自动处理该统计,无需单独上报。
<br></br>

<font color="gray">**参数列表**</font>

|事件名(event)| 标签(label)|类型(type)|功能|
| :------------- | :------------- | :------------- |:-------------|
clickIcon|导量游戏名|count|导量游戏icon点击**人数**
fail|导量游戏名|count|导量游戏icon跳转失败**人数**
success|导量游戏名|count|导量游戏icon跳转成功**人数**
show_time_界面|广告位_导量游戏名|count|导量游戏icon的曝光时间
click_people_界面|广告位_导量游戏名|count|导量游戏icon的点击**人数**
click_time_界面|广告位_导量游戏名|count|导量游戏icon的点击总次数
success_people_界面|广告位_导量游戏名|count|跳转游戏成功**人数**
fail_people_界面|广告位_导量游戏名|count|跳转游戏失败**人数**

<br></br>

::: warning 注意！
* 统计去重规则：与“**人数**”、“**首次**”和“**新增**”相关的统计项都需要去重（即每个客户端该统计事件只上报一次）。
* 玩法命名方式：用游戏**正式名称**的拼音，如果过长，就用**游戏玩法**的拼音。<br></br>
* 道具命名方式：用**道具名字**的拼音，如果过长，就用**道具名字简称**的拼音。<br></br>
**命名时尽量不要用英文或者拼音首字母**
:::

## API

### 索引
* [```reportEvent```](#reportevent-event-label-type) 事件上报，统计组件会每60S拉取事件列表进行上传。
* [```reportEventNow``` ](#reporteventnow-event-label) 立刻上报，调用该方法会立刻上报事件。


### 方法

<br></br>

#### <font size="4">**reportEvent(event, label, type)**</font>
上报统计事件，该方法上报的事件会进入到该方法专用事件列表中，组件会每60S拉取事件列表进行上报。

<font color="gray">**参数列表**</font>

* `event` [String][String]  统计事件名称
* `label`  [String][String]  统计标签
* `type`  [String][String]  统计类型。“count”为次数统计，“time”为时间统计，“ad”为广告统计（次数）。

#### <font size="4">**reportEventNow(event, label)**</font>
立刻上报统计事件，仅支持次数类的统计事件。

<font color="gray">**参数列表**</font>
* `event` [String][String]  统计事件名称
* `label`  [String][String]  统计标签





[String]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String