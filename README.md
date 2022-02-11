# vite-plugin-builded-force-exit

`vite` 打包后强制退出的插件

<br />

## 动机 🐇

在开发环境下，我们可能会在 `vite` 之外去注册一些监听，这些监听会让进程持续运行，例如 `chokidar` 的文件监听。  
但是在 `vite` 的生产打包过程中如果不去手动移除所有的监听，会让整个进程持续进行着，即使打包已经完成了。

<br />
<br />

## 使用 🦕

### 安装

```shell
pnpm i 

// 或者 npm i vite-plugin-builded-force-exit
// 或者 yarn add vite-plugin-builded-force-exit
```

<br />

### 配置

```ts
// vite.config.ts
// 或者 vite.config.js

import { defineConfig } from 'vite'
import BuildedForceExit from 'vite-plugin-builded-force-exit'

export default defineConfig({
    plugins: [
        // ...
        BuildedForceExit()
    ]
})
```

<br />

### 延迟退出

设置 `delay` 即可，单位为毫秒，类型为 `number`。

```ts
// vite.config.ts
// 或者 vite.config.js

import { defineConfig } from 'vite'
import BuildedForceExit from 'vite-plugin-builded-force-exit'

export default defineConfig({
    plugins: [
        // ...
        BuildedForceExit({
            delay: 5000 // 5秒后退出
        })
    ]
})
```


<br />
<br />

## License

Made with markthree

Published under [MIT License](./LICENSE).

<br />