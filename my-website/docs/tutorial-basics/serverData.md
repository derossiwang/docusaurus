---
sidebar_position: 4
---

# 服务器数据处理

与服务器进行数据交互，并处理本地缓存

:::tip 组件路径

CommonSDK/components/ServerData.js

:::

## API

### 索引

- `init`  获取服务器配置并设置自动上传
- `initLocalData` 重新初始化本地存储中丢失的服务器数据
- `registerKeys`  ？？？？？？注册keys
- `updateKeys` 将本地的一条数据条目更新到服务端
- `cancelKeys` 更新一条本地数据条目, 然后从本地删除
- `uploadData` 上传数据
- `getData` 从服务器获取数据
- `AutoUploadTimeLimit` 自动上传链接持续限时

### 方法

<br></br>

#### <font size="4">**init()**</font>

获取服务器配置, 并设置每5秒自动上传本地所有注册的数据

<br></br>

#### <font size="4">**initLocalData()**</font>

重新初始化本地存储中丢失的服务器数据. 该方法会遍历本地存储和文件系统中的用户缓存，然后对丢失的数据进行拉取和本地覆盖操作

<br></br>

#### <font size="4">**registerKeys(opt)**</font>

？？？？注册keys

<font color="gray">**参数列表**</font>

* `opt`  [Object ][Object] 
  * `auto` [String[ ][ ]][String] ?????字符串形式的二维数组，按数组序号从小到大，代表按照从小到大频率的需要自动更新的keys
  * `compare` [Function(可选)][Function] 拉取成功后，对比本地数据和拉取到的数据
  * `filter` [Function(可选)][Function]  过滤方程
  * `success`  [Function(可选)][Function] 拉取成功时的回调
  * `fail`  [Function(可选)][Function]  拉取失败时的回调

<br></br>

#### <font size="4">**updateKeys(index)**</font>

更新一条本地注册的数据到服务器

<font color="gray">**参数列表**</font>

* `index`  [Number][Number] 数据条目的key值

<br></br>

#### <font size="4">**cancelKeys(index)**</font>

更新一条本地注册的数据条目, 然后从本地删除

<font color="gray">**参数列表**</font>

* `index`  [Number][Number] 数据条目的key值

<br></br>

#### <font size="4">**uploadData(opt)**</font>

上传数据到服务器，成功后按照用户参数执行回调(如是否覆盖本地的数据)

<font color="gray">**参数列表**</font>

* `opt`  [Object ][Object] 
  * `data` [any][any] 待上传的数据
  * `isCover` [Boolean(可选)][Boolean] 是否覆盖服务器响应到本地存储和文件系统的用户缓存中
  * `success` [Function(可选)][Function] 上传成功的回调
  * `fail` [Function(可选)][Function] 上传失败的回调

<br></br>

#### <font size="4">**getData(opt)**</font>

从服务器获取数据， 然后按照用户参数执行回调和存储到本地

<font color="gray">**参数列表**</font>

* `opt`  [Object ][Object] 
  * `keys` [String][String] 待拉取的数据条目的key值
  * `isCover` [Boolean(可选)][Boolean] 是否覆盖服务器响应到本地存储和文件系统的用户缓存中
  * `success` [Function(可选)][Function] 拉取成功的回调
  * `fail` [Function(可选)][Function] 上拉取失败的回调

<br></br>

### 变量

<br></br>

#### <font size="4">**AutoUploadTimeLimit**</font>

处于自定上传阶段时的上传链接持续时间，默认为30秒。若用户手动触发上传而自动上传正在进行中，则用户上传会被跳过。



[any]: https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html#any
[Object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
[String]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
[Function]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
[Number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
[Boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
