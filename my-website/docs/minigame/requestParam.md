---
sidebar_position: 3
---

# 服务器配置获取与审核

实现获取**服务器配置**和**审核开关检查**

:::tip 组件路径

CommonSDK/components/RequestParam.js

:::

## API

### 索引

- `getServCfg`  获取服务器配置
- `Examin` 通过审核开关控制多玩法是否显示

### 方法

<br></br>

#### <font size="4">**getServCfg(obj, reqOnce)**</font>

获取服务器配置。通过reqOnce参数控制是否拉取一次后,之后都从内存读取。

<font color="gray">**参数列表**</font>

* `obj`  [Object ][Object] 请求回调
  * `success` [Function][Function] 请求成功回调
  * `fail` [Function (可选)][Function] 请求失败回调
* `reqOnce` [Boolean (可选)][Boolean] 是否只拉取一次数据，之后都读取内存

<br></br>

### 实例对象

<br></br>

<font size="4">**Examin**</font>

通过审核开关控制多玩法是否显示

- `timeOut` [Boolean][Boolean] 服务器请求是否超时

- `switchState` [Number ][Number] 审核开关状态

- `areaLimit` [any][any] 地区审核(暂时无用)

- `init: function(obj)` [Function][Function] 获取审核开关状态并初始化多玩法和界面逻辑

  <font color="gray">参数列表</font>

  - obj [Object][Object] 
    - `duration` [Number(可选)][Number] 拉取重试间隔
    - `showLoading` [Function(可选)][Function] 展示加载界面
    - `isAreaLimit` [Boolean(可选)][Boolean] 是否进行地区审核
    - `off` [Function(可选)][Function] 审核状态为关时的回调
    - `on` [Function(可选)][Function] 审核状态为开时的回调

- `requestState: function (obj, onlyRequest)` [Function][Function] 

  <font color="gray">参数列表</font>

  - `obj` [Object][Object] 
    - `off` [Function][Function] 审核状态为关的回调
    - `on` [Function][Function] 审核状态为开的回调
  - `onlyRequest` [Boolean][Boolean] 仅发送请求而不检查获得审核状态

- `checkState: function (off, on)` [Function][Function] 检查审核状态, 并执行对应的状态回调

  <font color="gray">参数列表</font>

  - `off` [Function][Function] 审核状态为关的回调
  - `on` [Function][Function] 审核状态为开的回调

::: tip 审核规则 - 3步走

1. 进入游戏后，展示完版号界面后，首先向服务器请求审核开关状态，游戏首页所有界面元素都不显示，只显示首页背景图，之后分不同情况做不同的处理：

   - **3秒内（时间待定）拿到审核开关**：根据获取到的状态显示多玩法按钮，同时也显示所有其他界面元素，并且把审核开关状态写入本地存储
   - **3秒（时间待定）后还没有请求到审核开关状态**：
     - *本地存储有审核状态*：根据本地存储的当前的状态显示多玩法，同时也显示所有其他界面元素
     - *本地存储无审核状态*：默认审核开，只显示主玩法，同时也显示所有其他界面元素

2. 处理完步骤1后

   - 如果需要自动弹授权确认弹窗的，此时弹出

   - 拉到的是审核**开**的状态：开启一个定时任务，每隔1分钟重新请求审核开关状态，并写入本地存储
   - 拉到的是审核**关**的状态：在这个审核参数没有升级之前，都不再拉取审核参数

3. 从游戏界面返回首页，不再重新请求审核参数，直接读取本地存储展示界面

:::

[any]: https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html#any
[Object ]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
[Boolean ]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
[Function]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
[Number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
