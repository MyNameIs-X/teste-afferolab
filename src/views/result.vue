<script>
import { mapGetters } from 'vuex';
import panel from '@/components/panel.vue';
import indicators from '@/components/indicators.vue';
export default {
  components: {
    indicators,
    panel
  },

  computed: {
    ...mapGetters(['currentLoyalty', 'currentSatisfaction', 'totalLoyalty', 'totalSatisfaction'])
  }
}
</script>

<template>
  <div class="app">
    <div class="app__filter"></div>
    <div class="app__result">
      <panel color="red" class="panel">
        <header class="app__result__title">
          <img src="../assets/images/arte_indicadores.png" alt="indicadores" title="indicadores" />
          <h1>Veja sua perfomace <br> em cada indicador:</h1>
        </header>
        <indicators 
          class="app__result__indicators"
          :currentLoyalty="currentLoyalty"
          :currentSatisfaction="currentSatisfaction"
          :totalLoyalty="totalLoyalty"
          :totalSatisfaction="totalSatisfaction"
        />
      </panel>
    </div>
  </div>
</template>

<style lang="less" scoped>
.app{
  height: 100vh;
  background-image: url('../assets/images/bg4.png');
  position: relative;

  &__filter{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    background: rgba(0, 0, 0, .4);
  }

  &__result{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &__title{
      display: grid;
      grid-template-columns: 1fr 4fr;
      margin-bottom: 30px;

      img{
        max-height: 100px;
      }

      h1{
        font-size: 22px;
        margin-top: 20px;
        line-height: 30px;
        font-weight: 700;
      }
    }

    &__indicators{
      max-width: 400px;
      margin: 50px 0 100px;
    }
  }

  .panel{
    width: 700px;
    max-width: 100%;
  }
}
</style>