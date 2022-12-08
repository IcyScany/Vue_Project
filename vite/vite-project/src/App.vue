<template>
  <div>
    <button @click="fun0">click</button>
    <div v-if="show">show</div>
    <hr>
    出生年份：
    <input type="text" v-model="birthday">
    <div>你现在{{ age }}岁啦</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      birthday: 2002
    };
  },

  methods: {
    fun0() {
      this.show = !this.show;
    },
  },

  // 计算函数
  // 注意是computed不是compute！！！
  computed: {
    age() {
      let nowyear = new Date().getFullYear()
      return (nowyear - this.birthday)
    }
  },

  // 监听函数
  watch: {
    show: {
      handler(newval, oldval) {
        console.log(newval, oldval)
      }
    }
  },
  // 是否深层监听
  deep: true
};
</script>

<style scoped></style>
