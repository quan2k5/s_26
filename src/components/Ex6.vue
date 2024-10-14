<template>
    <div>
        <p>Company: {{ company }}</p>
        <button @click="changeCompany">Change state</button>
    </div>
</template>
    
<script setup>
    import { computed } from 'vue';
    import { useStore } from 'vuex';
    const store = useStore(); 
    const company = computed(() => store.getters.company);
    const changeCompany = () => {
    store.commit('changeCompany'); 
    };
</script>
    
<style>
</style>