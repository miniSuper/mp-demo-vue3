<template>
  <view class="content">
    <view class="text-area">
      <button type="default">通过方法跳转到about页面</button>
      <button type="default">跳转到about页面</button>
    </view>
  </view>
</template>

<script>
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "",
  setup() {
    return { title: "Hello" };
  },
});
</script>
<style lang="scss" scoped></style>
