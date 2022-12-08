import { defineStore, storeToRefs } from "pinia";

export const testStore = defineStore('test',{
  state:()=>{
    return{
      count:0
    }
  },
  actions:{
    add() {
      this.count += 1
    }
  },
  getters:{

  }
})
