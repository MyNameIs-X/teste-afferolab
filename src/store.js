import Vue from 'vue';
import Vuex from 'vuex';
import axios from '@/plugins/axios';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    currentLoyalty: 0,
    currentQuestion: 0,
    currentSatisfaction: 0,
    optionSelected: 0,
    questions: [],
  },

  mutations: {
    currentLoyalty: (state, current) => state.totalSatisfaction = current,
    nextQuestion: (state) => state.currentQuestion++,
    currentSatisfaction: (state, current) => state.totalSatisfaction = current,
    optionSelected: (state, option) => state.optionSelected = option,
    questions: (state, questions) => state.questions = questions,
    reset: (state) => {
      state.currentLoyalty = 0;
      state.currentQuestion = 0;
      state.currentSatisfaction = 0;
      state.optionSelected = 0;
      state.questions = [];
    },
    updateIndicators: (state) => {
      const { questions, currentQuestion, optionSelected } = state;
      state.currentLoyalty += questions[currentQuestion].alternativas[optionSelected].impacto_indicadores.fidelizacao;
      state.currentSatisfaction += questions[currentQuestion].alternativas[optionSelected].impacto_indicadores.satisfacao;
      state.optionSelected = 0;
    }
  },

  getters: {
    currentLoyalty: state => state.currentLoyalty,
    currentQuestion: state => state.currentQuestion,
    currentSatisfaction: state => state.currentSatisfaction,
    questions: state => state.questions,
    totalLoyalty: state => {
      return state.questions.reduce((val, question) => {
        const loyateList = question.alternativas.map((item) => item.impacto_indicadores.fidelizacao);
        const loyatMax = loyateList.reduce((a, b) => Math.max(a, b));
        return val + loyatMax;
      }, 0) || 1;
    },
    totalSatisfaction: state => {
      return state.questions.reduce((val, question) => {
        const satisfactionList = question.alternativas.map((item) => item.impacto_indicadores.satisfacao);
        const satisfactionMax = satisfactionList.reduce((a, b) => Math.max(a, b));
        return val + satisfactionMax;
      }, 0) || 1;
    }
  },

  actions: {
    async getQuestions({commit}){
      try{
        const { data } = await axios({
          method: 'GET',
          url: '/database.json'
        });
  
        commit('questions', data.banco_questoes);
      }catch(e){
        console.log(`ERROR ${e.message}`);
      }
    },

    nextQuestion: ({commit}) => commit('nextQuestion'),
    switchOption: ({commit}, option) => commit('optionSelected', option),
    reset: ({commit}) => commit('reset'),
    updateIndicators: ({commit}) => commit('updateIndicators'),
  }

});

export default store;