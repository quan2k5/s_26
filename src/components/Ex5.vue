<template>
    <div>
        <p>[{{ randomNumbers.join(', ') }}]</p>
        <button @click="generateRandomNumber">Generate Random Number</button>
    </div>
</template> 
<script setup>
import { computed } from 'vue';
    import { useStore } from 'vuex';
    const store = useStore();
    const randomNumbers = computed(() => store.getters.randomNumbers);
    const generateRandomNumber = () => {
    store.dispatch('generateRandomNumber');
    };
</script>
    
    <style>
</style>