---
sidebar_position: 2
---

# 文件系统

存取信息到平台文件系统的用户缓存文件夹和本地存储中

:::tip 组件路径

CommonSDK/components/FileSystem.js

:::

### 索引

- `fs`  文件系统实例
- `init` 初始化文件系统
- `getItem` 从文件系统中的用户缓存或本地存储中读取信息
- `setItem` 向本地存储和文件系统中的用户缓存中添加信息
- `removeItem ` 从本地存储和文件系统中的用户缓存中删除信息

### 方法

<br></br>

#### <font size="4">**init()**</font>

初始化文件系统, 同时用户信息缓存文件夹中的文件(如有)

<br></br>

#### <font size="4">**getItem(key)**</font>

从文件系统中的用户缓存中读取key的信息，若没有，则会从本地存储中读取信息

<font color="gray">**参数列表**</font>

* `key`  [String][String] 信息的key值

<font color="gray">**返回值**</font>

*  [JSON String | String][String] 读取到的信息

<br></br>

#### <font size="4">**setItem(key, value)**</font>

存储key的信息到本地存储和文件系统中的用户缓存中

<font color="gray">**参数列表**</font>

* `key`  [String][String] 信息的key值
* `value` [any][any] 希望存储的信息

<br></br>

#### <font size="4">**removeItem(key)**</font>

从本地存储和文件系统中的用户缓存中删除key的信息

<font color="gray">**参数列表**</font>

* `key`  [String][String] 信息的key值

<br></br>

### 实例

<br></br>

<font size="4">**fs**</font>

- [Object][Object] 文件系统实例
  - `readdir`  [Function({uri, success, fail, complete})][Function] 读取文件夹
  - `reafFile` [Function({uri, encoding, success, fail, complete})][Function] 读取文件
  - `mkdir` [Function({uri, success, fail, complete})][Function] 创建文件夹
  - `writeFile` [Function({uri, text, encoding, success, fail, complete})][Function] 创建并写入文件
  - `unlink` [Function({uri, success, fail, complete})][Function] 删除文件

[Object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
[String]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
[Boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
[cc.Color]: https://docs.cocos.com/creator/2.3/api/zh/classes/Color.html?h=color
[Function]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
[any]: https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html#any
