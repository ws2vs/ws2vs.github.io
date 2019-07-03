## Triple-Slash Directives

### common

```javascript
/// <reference path="...">
```

- 用于向编译器提供一些指令
- 位于文件顶部的单行注释，内容是Single XML tag
- 指令前面不能有语句或者声明


### refercence path="..."

- 主要用于声明的引用，而不是依赖关系
	- 并不会主动把reference的文件引进来
- --out --outFile
	- 整合文件、调整顺序
- --noResolve
	- 忽略指令、不调整指令指定的顺序

### reference types="..."

- 当前仅当写一个`.d.ts` 文件时才使用这个命令
- .ts需要使用types声明的话，就按当前的做法来实现
	- import

### reference lib="..."

- 精确引入一个内建库
- 推荐使用这个指令来引入js内建库，例如es2017

### reference no-default-lib="true"

- 将文件标记为默认库，跳过编辑阶段
- --skipDefaultLibCheck命令也是

### amd-module

- 指令允许给编译器传入一个可选的模块名`/// <amd-module name="test" />`
- 避免和`r.js`一起使用

### amd-dependency

- /// <amd-dependency />
- 废弃，改用`import`


## JavaScript文件类型检查

就是可以使用ts对.js文件，用法

- --checkJs 来指定需要检查的js文件
- 使用tsconfig.json（allowJS / checkJS）
    - js检查将遵照严格模式，如noImplicitAny、strictNullChecks
- // @ts-nocheck 来忽略检查文件
- // @ts-check 来指定检查文件
- // @ts-ignore 指定忽略行
