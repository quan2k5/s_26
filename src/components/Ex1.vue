<template>
    <div>
        <h4>Thông tin cá nhân</h4>
        <p>Id: {{ user.id }}</p>
        <p>Họ và tên: {{ user.userName }}</p>
        <p>Giới tính: {{ user.gender }}</p>
        <p>Ngày sinh: {{ user.dateOfBirth }}</p>
        <p>Địa chỉ: {{ user.address }}</p>
    </div>
</template>
<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
const store = useStore();
const user = computed(() => store.state.users[0]);
</script>
<style>
    
</style>