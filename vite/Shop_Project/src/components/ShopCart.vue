<template>

    <!-- 1 商品列表 -->
    <div class="goods_list">
      <div class="label">cart-list</div>
      <div>total price: {{cartStore.total_price}}</div>
      <button class="label" @click="cartStore.clear_goods()">清空购物车</button>

      <div class="good" v-for="(items, index) in cartStore.mygoods">
        <img class="good_img" :src=server_url+items.good.images alt="">

        <div class="good_info">
          <div>{{ items.good.id }}. {{ items.good.name }}</div>
          <div>单价：{{ items.good.price }}</div>
          <button @click="cartStore.add_good(items.good, -1)">-</button>
          <div>数量：{{ items.number }}</div>
          <button  @click="cartStore.add_good(items.good, 1)">+</button>
        </div>

      </div>

    </div>

</template>

<script setup>
import { ref, reactive } from 'vue'
import { Shopping_Cart } from '../stores/cart.js'

let cartStore = Shopping_Cart()

let server_url = 'http://43.139.171.246:80'



</script>

<style lang="scss" scoped>
// *{
//   border: 1px solid black;
// }

.label {
  width: fit-content;
  padding: 3px;
  margin: 5px;
  border: 3px solid black;
  border-radius: 5px;
}


  .goods_list{
    display: flex;
    flex-direction: column;
    width: 45%;
    height: auto;
    .good {
      display: flex;
      width: 150x;
      height: 300px;
      border: 3px solid black;

      .good_img {
        margin: 10px;
        width: 60%;
        height: 90%;
        object-fit: fill;
        position: relative;
      }

      .good_info {
        margin-top: 180px;
      }
    }
  }

</style>