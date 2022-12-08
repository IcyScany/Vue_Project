import {defineStore} from 'pinia'

export const Shopping_Cart =  defineStore('cart',{
  state: () => {
    return{
      mygoods: []
    }
  },
  actions: {
    add_good(good, count){
      let good_index = this.mygoods.findIndex((x)=>{return x.good.id == good.id})
      // 如商品已存在
      if(good_index>-1){
        let newnumber =  this.mygoods[good_index].number += count
        this.mygoods[good_index].number = newnumber ? newnumber : this.mygoods.splice(good_index, 1)
      }else{
        // 商品不存在
        this.mygoods.push({
          good: good,
          number: count
        })
      }
    },

    clear_goods(){
      this.mygoods = []
    }
  },

  getters: {
    total_price(state){
      let _total_price = 0
      for( let item of state.mygoods){
        _total_price += item.good.price * item.number
      }
      return _total_price
    }
  }
}
)