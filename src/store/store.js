import { createStore } from "vuex";

const store = createStore({
    state: {
        counter:0,
        randomNumbers: [],
        company: 'Rikkei Academy',
        darkMode: false,
        language: 'vi',
        translations: {
          vi: {
            greeting: 'Xin chào!',
            changeLanguage: 'Chuyển ngôn ngữ',
          },
          en: {
            greeting: 'Hello!',
            changeLanguage: 'Change Language',
          },
        },
        users:[
            {
                id: 1,
                userName: "lê anh quân",
                gender: "Nam",
                dateOfBirth: "21/02/2005",
                address: "HA NOI"
            },
            {
                id: 2,
                userName: "minh mạnh",
                gender: "Nam",
                dateOfBirth: "25/12/2005",
                address: "HÀ NOI"
            },
        ],
        products: [
            {
                id:1,
                productName: "Bưởi",
                price: 50000,
                quantity: 20
            },
            {
                id:2,
                productName: "Cam",
                price: 50300,
                quantity: 12
            },
        ],
    },
    mutations: {
        increment(state) {
          state.counter ++; 
        },
        decrement(state) {
          state.counter --;  
        },
        addRandomNumber(state, number) {
          state.randomNumbers.push(number);  
        },
        changeCompany(state) {
          state.company = 'RikkeiSoft';
        },
        toggleDarkMode(state) {
          state.darkMode = !state.darkMode;
        },
        setLanguage(state, language) {
          state.language = language;
        },
      },
      actions: {
        increment({ commit }) {
          commit('increment'); 
        },
        decrement({ commit }) {
          commit('decrement'); 
        },
        generateRandomNumber({ commit }) {
          const randomNumber = Math.floor(Math.random() * 100) + 1;  
          commit("addRandomNumber", randomNumber);
        }
      },
      getters: {
        counter: (state) => state.counter, 
        randomNumbers: (state) => state.randomNumbers,
        company: (state) => state.company,
        darkMode: (state) => state.darkMode,
        currentLanguage: (state) => state.language,
        currentTranslations: (state) => state.translations[state.language],
      },
});

export default store;