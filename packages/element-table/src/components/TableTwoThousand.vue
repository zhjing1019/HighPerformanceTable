<template>
  <div class="layout">
    table2000
  </div>
</template>

<script>
export default {
  name: 'TableTwoThousand',
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.layout {
  display: flex;
  width: 100vw;
  height: 100vh;
}
.el-menu-vertical {
  height: 100%;
  padding: 24px;
}
.menu-main {
  width: 180px;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
}
.content {
  width: calc(100% - 180px);
  height: 100vh;
  padding: 24px;
}
</style>
