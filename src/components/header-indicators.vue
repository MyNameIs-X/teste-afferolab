<script>
import indicators from './indicators.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    indicators
  },

  computed: {
    ...mapGetters(['currentLoyalty', 'currentSatisfaction', 'totalLoyalty', 'totalSatisfaction'])
  },

  name: 'header-indicators'
}
</script>

<template>
  <header class="indicators">
    <div class="content">
      <figure>
        <img src="../assets/images/arte_indicadores.png" alt="Indicadores" title="Indicadores" class="indicators__image">
      </figure>
      <indicators 
        class="indicators__progress"
        :currentLoyalty="currentLoyalty"
        :currentSatisfaction="currentSatisfaction"
        :totalLoyalty="totalLoyalty"
        :totalSatisfaction="totalSatisfaction"
      />
    </div>
  </header>
</template>

<style lang="less" scoped>
  .indicators{
    &::after{
      content: ' ';
      display:  block;
      clear: both;
    }

    &__image{
      max-width: 100px;
      margin-right: 20px;
    }

    &__progress{
      background: #cb2031;
      color: white;
      padding: 10px;
      border-radius: 5px;
    }

    .content{
      float: right;
      // width: 600px;
      // background: white;
      display: grid;
      grid-template-columns: 1fr 2fr;
      grid-gap: 10px;
    
      figure{
        text-align: right;
      }
    }
  }
</style>