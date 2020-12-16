<script>
import buttonAction from "@/components/button-action.vue";
import headerIndicators from "@/components/header-indicators.vue";
import { mapGetters, mapActions } from "vuex";
import panel from "@/components/panel.vue";
import questionItem from '@/components/question-item.vue';

export default {
  components: {
    'button-action': buttonAction,
    'header-indicators': headerIndicators,
    'question-item': questionItem,
    panel: panel,
  },

  async created() {
    if(!this.questions.length)
      await this.getQuestions();
  },

  computed: {
    ...mapGetters(['questions', 'currentQuestion']),
  },

  methods: {
    ...mapActions(['getQuestions', 'nextQuestion', 'updateIndicators']),
    switchAction(e) {
      e.preventDefault();
      this.updateIndicators();
      e.target.reset();
      if(this.currentQuestion == this.questions.length - 1) {
        this.$router.push('/result');
      } else {
        this.nextQuestion();
      }
    },
  },
};
</script>

<template>
  <div class="app">
    <div class="app__questions">
      <header-indicators />
      <img src="../assets/images/arte_quiz.png" alt="Quiz" title="Quiz" class="app__questions__image">
      <panel color="white" class="panel">
        <form action="#" @submit="switchAction($event)" class="app__questions__form">
          <ul class="app__questions__list" v-if="questions.length">
            <question-item :question="questions[currentQuestion]" />
          </ul>
          <button-action
            text="CONFIRMAR"
            class="app__questions__button"
            type="submit"
          />
        </form>
      </panel>
    </div>
  </div>
</template>

<style lang="less" scoped>
.center(@top, @left){
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(@left, @top);
}

.app {
  min-height: 100vh;
  background-image: url("../assets/images/bg3.png");

  &__questions {
    padding-top: 50px;

    &__image{
      .center(-35%, -50%);
      max-height: 450px;
    }

    &__button {
      border: 1px solid #fff;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 50%);
    }

    &__form{
      min-height: 250px;
    }

    .panel {
      margin: 75px auto 0 auto;
      width: 800px;
      max-width: 100%;
      .center(-50%, -50%);
    }
  }
}
</style>