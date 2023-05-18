## vue-input-ip

这是一个专门用于 IP 输入的组件，基于 vue3 模仿了微软 IP 输入的功能加以实现

## 示例

```html
<script setup lang="ts">
  import { ref} from "vue"
  import IpInput from "vue-ip-input"
  const state = reactive({
      port :8080
   ip: "125.0.0.1"
  })
  const handleChange = (ip: string, port: number) => {
    console.log(ip, port)
  }
</script>

<template>
  <div>
    <IpInput
      v-model:ip="state.ip"
      v-model:port="state.port"
      @change="handleChange"
    ></IpInput>
  </div>
</template>
```

## props 说明

ip: string // 传入的 IP 可以使用 v-model
port: string | undefined // 传入的 port 可以使用 v-model 传入 undefined 则隐藏 port 输入框

## emit 事件说明

change: (ip: string, port?: number) => void 数据改变的时候会调用这个方法用于传递回来最新的值
