<template>
  <div>
    <div class="dialog_box">
      <!-- 插槽 -->
      <div>
        <slot name="title" :title="title"></slot>
      </div>
      <input type="text" v-model="modelValue" @keyup.enter="submit" @keyup.esc="cancel">
      <br><br>
      <button @click="submit">确认</button>
      <button @click="cancel">cancel</button>
    </div>
  </div>
</template>

<script setup>
import {ref, reactive} from 'vue'

const props = defineProps({
  title:{
    type:String,
    default:"",
  },
  
})

let modelValue = ref('dialog')

const emit = defineEmits({})

function submit() {
  emit('update:model-value', modelValue)
  emit('cancel')
}

function cancel(){
  emit('cancel')
}

</script>


<style>
.dialog_box {
      background-color: rgb(255, 248, 248);
      height: 150px;
      width: 200px;
      border: 2px solid rgb(209, 136, 136);
    }
</style>