<template>
  <div class="layout">
    <!-- 导航部分 -->
    <div class="menu-main">
      <el-menu :default-active="current" class="el-menu-vertical" @open="handleOpen" @close="handleClose" @select="menuSelect">
        <el-menu-item v-for="(item, index) in layoutList" :key="index" :index="item.value">
          <span slot="title">{{ item.name }}</span>
        </el-menu-item>
      </el-menu>
    </div>
    <!-- 内容部分 -->
    <div class="content">
      <component :is="current"></component>
    </div>
  </div>
</template>

<script>
import ElementTable from './ElementTable.vue';
import TableTwoThousand from './TableTwoThousand.vue';
export default {
  name: 'LayoutVue',
  components: { ElementTable, TableTwoThousand },
  data() {
    return {
      current: 'ElementTable',
      layoutList: [
        {
          // 普通的element表格
          name: 'element-table',
          value: 'ElementTable'
        },
        {
          // 普通的element表格
          name: 'table-2000',
          value: 'TableTwoThousand'
        }
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    menuSelect(val) {
      this.current = val;
    }
  }
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
  overflow: hidden;
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
  padding: 40px;
}
</style>
