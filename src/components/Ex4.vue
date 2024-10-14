<template>
    <div>
      <h4>Count: {{ counter }}</h4>
      <button @click="decrement">Decrement</button>
      <button @click="increment">Increment</button>
    </div>
  </template>
  
  <script setup>
  import { useStore } from 'vuex';
  import { computed } from 'vue';
  const store = useStore();
  const counter = computed(() =>tore.getters.counter);
  const increment = () => {
    store.commit('increment');
  };
  const decrement = () => {
    store.commit('decrement');
  };
  </script>
  
  <style>
  </style>
    