<template>
    <div>
        <p>{{ translations.greeting }}</p>
        <button @click="changeLanguage">
        {{ translations.changeLanguage }}
        </button>
    </div>
</template> 
<script setup>
    import { computed } from 'vue';
    import { useStore } from 'vuex';
    
    const store = useStore();
    
    const translations = computed(() => store.getters.currentTranslations);
    
    const changeLanguage = () => {
    const newLanguage = store.getters.currentLanguage === 'vi' ? 'en' : 'vi';
    store.commit('setLanguage', newLanguage);
    };
</script> 
<style>
</style>