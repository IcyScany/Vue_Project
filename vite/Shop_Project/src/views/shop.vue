<template>
  <!-- 标题 -->
  <div class="label">shop-page</div>
  
  <!-- 主视图 -->
  <div class="shop">

    <!-- 1 商品列表 -->
    <div class="goods_list">
      <div class="label">shop-list</div>

      <div class="good" v-for="(items, index) in goods">
        <img class="good_img" :src=server_url+items.images alt="">

        <div class="good_info">
          <div>{{items.id}}. {{items.name}}</div>
          <div>￥：{{items.price}}</div>
          <button @click="cartStore.add_good(items, 1)">加入购物车</button>
        </div>

      </div>
    </div>

    <!-- 2 购物车列表 -->
    <shop-cart></shop-cart>
  </div>
  

</template>

<script setup>
import { ref, reactive } from 'vue'
import ShopCart from '../components/ShopCart.vue'
import {Shopping_Cart} from '../stores/cart.js'

let server_url = 'http://43.139.171.246:80'

let cartStore = Shopping_Cart()

// 商品信息
const goods = reactive([
  {
    "id": 1001,
    "name": "baked_rice",
    "price": 13,
    "describe": "delicious baked_rice！",
    "images": "/img/baked_rice.jpg",
  },
  {
    "id": 1002,
    "name": "bbq",
    "price": 20,
    "describe": "delicious BBQ！",
    "images": "/img/bbq.jpg",
  },
  {
    "id": 1003,
    "name": "bread",
    "price": 7,
    "describe": "delicious bread！",
    "images": "/img/bread.jpg",
  },
  {
    "id": 1004,
    "name": "chicken",
    "price": 38,
    "describe": "delicious chicken！",
    "images": "/img/chicken.jpg",
  },
  {
    "id": 1005,
    "name": "french fries",
    "price": 14,
    "describe": "delicious french fries！",
    "images": "/img/french_fries.jpg",
  },
  {
    "id": 1006,
    "name": "ice-cream",
    "price": 8,
    "describe": "delicious ice-cream！",
    "images": "/img/ice-cream.jpg",
  },
])


</script>

<style lang="scss" scoped>
// *{
//   border: 1px solid black;
// }

.label{
  width: fit-content;
  padding: 3px; 
  margin: 5px; 
  border:3px solid black; 
  border-radius: 5px;
}

.shop{
  display: flex;
  padding: 10px 40px;
  // align-items: center;
  justify-content: space-between;

  .goods_list{
    display: flex;
    flex-direction: column;
    width: 45%;
    height: auto;

    .good{
      display: flex;
      width: 150x;
      height: 300px;
      overflow: hidden;
      border: 3px solid black;

      .good_img{
        margin: 10px;
        width: 60%;
        height: 90%;
        object-fit: fill;
        position: relative;
      }

      .good_info{
        margin-top: 180px;
      }
    }
  }
}
</style>