<template>
  <div class="table">
    <el-table ref="tableRef" :data="tableData">
      <el-table-column v-for="(item, index) in columns" :key="index" :prop="item.field" :label="item.title" :width="item.width">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'ElementTable',
  components: {},
  data() {
    return {
      // 初始化时间
      startTime: 0,
      tableData: [],
      columns: [
        {
          field: 'id',
          title: 'ID',
          width: 80,
          sort: true
        },
        {
          field: 'email1',
          title: 'email',
          width: 250,
          sort: true
        },
        {
          field: 'name',
          title: 'First Name',
          width: 120
        },
        {
          field: 'lastName',
          title: 'Last Name',
          width: 100
        },
        {
          field: 'hobbies',
          title: 'hobbies'
        },
        {
          field: 'birthday',
          title: 'birthday',
          width: 120
        },
        {
          field: 'sex',
          title: 'sex',
          width: 100
        },
        {
          field: 'tel',
          title: 'telephone',
          width: 150
        },
        {
          field: 'work',
          title: 'job',
          width: 200
        },
        {
          field: 'city',
          title: 'city',
          width: 150
        }
      ]
    };
  },
  mounted() {
    this.tableData = this.generatePersons(1000);
    this.$nextTick(() => {
      // 表格渲染完成后的回调
      this.onTableRenderComplete();
    });
  },
  methods: {
    onTableRenderComplete() {
      // 这个方法在表格渲染完成后被调用
      this.$nextTick(() => {
        // 在这里执行你需要的操作，比如计算表格的某些特性
        this.logRenderTime();
      });
    },
    logRenderTime() {
      const startTime = this.startTime;
      const endTime = typeof window !== 'undefined' ? window.performance.now() : 0;
      const time = (endTime - startTime).toFixed(2);
      console.log(`setRecords cost time ${time} ms`);
    },
    generatePersons(count) {
      let self = this;
      const arr = [];
      for (let i = 0; i < count; i++) {
        const first = self.generateRandomString(10);
        const last = self.generateRandomString(4);
        const item = {
          id: i + 1,
          email1: `${first}_${last}@xxx.com`,
          name: first,
          lastName: last,
          hobbies: self.generateRandomHobbies(),
          birthday: self.generateRandomBirthday(),
          tel: self.generateRandomPhoneNumber(),
          sex: i % 2 === 0 ? 'boy' : 'girl',
          work: i % 2 === 0 ? 'back-end engineer' : 'front-end engineer',
          city: 'beijing'
        };
        arr.push(item);
      }
      this.startTime = typeof window !== 'undefined' ? window.performance.now() : 0;

      return arr;
    },
    generateRandomString(length) {
      let result = '';
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return result;
    },
    generateRandomHobbies() {
      const hobbies = [
        'Reading books',
        'Playing video games',
        'Watching movies',
        'Cooking',
        'Hiking',
        'Traveling',
        'Photography',
        'Playing musical instruments',
        'Gardening',
        'Painting',
        'Writing',
        'Swimming'
      ];

      const numHobbies = Math.floor(Math.random() * 3) + 1; // 生成 1-3 之间的随机整数
      const selectedHobbies = [];

      for (let i = 0; i < numHobbies; i++) {
        const randomIndex = Math.floor(Math.random() * hobbies.length);
        const hobby = hobbies[randomIndex];
        selectedHobbies.push(hobby);
        hobbies.splice(randomIndex, 1); // 确保每个爱好只选一次
      }

      return selectedHobbies.join(', ');
    },
    generateRandomBirthday() {
      const start = new Date('1970-01-01');
      const end = new Date('2000-12-31');
      const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
      const year = randomDate.getFullYear();
      const month = randomDate.getMonth() + 1;
      const day = randomDate.getDate();
      return `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
    },
    generateRandomPhoneNumber() {
      const areaCode = [
        '130',
        '131',
        '132',
        '133',
        '134',
        '135',
        '136',
        '137',
        '138',
        '139',
        '150',
        '151',
        '152',
        '153',
        '155',
        '156',
        '157',
        '158',
        '159',
        '170',
        '176',
        '177',
        '178',
        '180',
        '181',
        '182',
        '183',
        '184',
        '185',
        '186',
        '187',
        '188',
        '189'
      ];
      const prefix = areaCode[Math.floor(Math.random() * areaCode.length)];
      const suffix = String(Math.random()).substr(2, 8);
      return prefix + suffix;
    }
  }
};
</script>

<style scoped>
.table {
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>
