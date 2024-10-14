<template>
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Tên sản phẩm</th>
            <th>Giá</th>
            <th>Số lượng(kg)</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td>{{ product.id }}</td>
            <td>{{ product.productName }}</td>
            <td>{{ product.price }} đ</td>
            <td>{{ product.quantity }}</td>
            <td>
              <button>Sửa</button>
              <button>Xóa</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>
  
<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
  
const store = useStore();
  
const products = computed(() => store.state.products);
</script>
  
<style>
</style>
  