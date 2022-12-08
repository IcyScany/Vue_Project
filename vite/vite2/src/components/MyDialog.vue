<template>
    <div>
      <div class="dialog_box">
        <!-- 插槽 -->
        <slot name="author" :author="author"></slot>
        <slot name="title" :title="title" data="yes"></slot>
        <input type="text" v-model="modelValue" @keyup.enter="submit" @keyup.esc="cancel">
        <br><br>
        <button @click="submit">确认</button>
        <button @click="cancel">cancel</button>
      </div>
    </div>
</template>

<script>
  export default{
    props:{
      author:{
        type:String,
        default:'Scany'
      },
      title:{
        type: String,
        default: ''
      },
      // modelValue:{
      //   type:String,
      //   default: ''
      // }
    },
    data(){
      return{
        modelValue: ''
      }
    },
    methods:{
      submit(){
        this.$emit('update:model-value', this.modelValue)
        this.$emit('cancel_dialog')
      },
      cancel(){
        // 事件抛出
        this.$emit('cancel_dialog')
      }
    }
  }
</script>

<style>
  .dialog_box{
    background-color: antiquewhite;
    height: 150px;
    width: 200px;
    border: 2px solid rgb(209, 136, 136);
  }
</style>
