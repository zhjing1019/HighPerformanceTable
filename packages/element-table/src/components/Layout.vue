<template>
  <div class="layout">
    <!-- 导航部分 -->
    <div class=""></div>
    <!-- 内容部分 -->
  </div>
</template>

<script>
export default {
  name: 'LayoutVue',
  components: {},
  data() {
    return {
      current: 'ElementTable',
      layoutList: [
        {
          // 普通的element表格
          name: 'element-table',
          value: 'ElementTable'
        }
      ]
    };
  }
};
</script>

<style>
</style>
