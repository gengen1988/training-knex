利用 knex 管理数据库表结构版本
=======================

knex 是个 querybuild，它包含了管理数据库表结构的功能。可以追踪表结构的变化。

前置条件
----------

1. 安装 nodejs
2. 在全局安装 knex：`npm i -g knex`
3. 检出项目：`git clone`
4. 安装依赖：`npm i`
5. 有一个可以连接的数据库。没有的话，例子里有 docker-compose 可以直接建好
6. 确保 knexfile.js 的连接配置与目标数据库一致

第一步 建立表
-----------

数据库一开始应该是空的。利用以下文件可以建立需要的表

- migrations/20190122135708_accounts.js
- migrations/20190122135814_products.js
- migrations/20190122135911_stocks.js
- migrations/20190122135958_orders.js
- migrations/20190122140143_items-in-orders.js

```sh
git checkout step1
knex migrate:latest
```

这样就建好了表

第二步 修改已经存在的表
-------------

这个文件 `migrations/20190122140919_add-column.js` 包含对表的修改

```sh
git checkout step2
knex migrate:latest
```

这样表里就增加了字段
