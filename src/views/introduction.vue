<template>
  <div class="app">
    <div class="app__introduction">
      <h1 class="app__introduction__title">Game Quiz</h1>
      <p class="app__introduction__text">Seja bem-vindo(a)! A partir de agora, você terá a oportunidade de colocar em prática tudo que já aprendeu. Para isso, será necessatio superar alguns desafios, tomando a <span>melhor decisão para você, para o cliente e para o negócio</span>. Está preparado?</p>

      <button-link href="/presentation" text="Clique aqui para aceitar o desafio!" />
    </div>
  </div>
</template>

<script>
import button from '@/components/button.vue';

export default {
  components: {
    'button-link': button
  },

  name: 'introduction'
}
</script>

<style lang="less" scoped>
.app{
  height: 100vh;
  background-image: url('../assets/images/bg1.png');
  display: flex;
  justify-content: left;
  align-items: center;

  &__introduction{
    max-width: 400px;
    font-family: 'Gilroy', sans-serif;

    &__title {
      margin-bottom: 20px;
      font-size: 40px;
      font-weight: bold;
      color: #783087;
    }

    &__text {
      margin-bottom: 20px;
      font-size: 14px;
      color: #6b6c71;
      font-size: 20px;

      span {
        color: #c92134;
        font-weight: bold;
      }
    }
  }
}
</style>