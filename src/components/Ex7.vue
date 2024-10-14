<template>
    <div :class="darkModeClass">
        <label>
        <input type="checkbox" v-model="darkMode" @change="toggleDarkMode" />
        {{ darkMode ? 'Tối' : 'Sáng' }}
        </label>
    </div>
</template>
    
<script setup>
    import { computed } from 'vue';
    import { useStore } from 'vuex';
    
    const store = useStore();
    
    const darkMode = computed(() => store.getters.darkMode);
    
    const toggleDarkMode = () => {
    store.commit('toggleDarkMode');
    };
    
    const darkModeClass = computed(() => (darkMode.value ? 'dark-mode' : 'light-mode'));
</script>  
<style>
    .light-mode {
    background-color: white;
    color: black;
    }
    
    .dark-mode {
    background-color: black;
    color: white;
    }
</style>