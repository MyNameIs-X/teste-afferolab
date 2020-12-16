<script>
import buttonLink from '@/components/button-link.vue';
import indicators from '@/components/indicators.vue';
import panel from '@/components/panel.vue';
import headerIndicators from '@/components/header-indicators.vue';
import { mapActions } from 'vuex';

export default {
  name: 'presentation',
  components: {
    'button-link': buttonLink,
    indicators,
    'header-indicators': headerIndicators,
    panel
  },

  async created(){
    this.reset();
    await this.getQuestions();
  },

  methods: {
    ...mapActions([
      'getQuestions',
      'reset'
    ])
  }


}
</script>
    Indicators

<template>
  <div class="app">
    <div class="app__presentation">
      <header-indicators />
      <panel color="red" class="panel-component">
        <div class="app__presentation__panel">
          <div class="app__presentation__panel__text">
            <p>
              Ao lado, estão os três indicadores do game. Quando você tomar suas decisões, eles poderão aumentar ou diminuir. Por isso, acompanhe-os para saber sua evolução no jogo.
            </p>
            <p>
              Você iniciará o game com os indicadores zerados. No decorrer do jogo, eles serão impactados por todas as suas decisões. <br> Então, fique atento
            </p>
            <p>
              Antes de resolver cada situação, reflita como suas escolhas podem influenciar os indicadores.
            </p>
          </div>

          <div class="app__presentation__panel__indicators">
            <figure class="app__presentation__panel__indicators__image">
              <img src="../assets/images/arte_indicadores.png" alt="Indicadores" title="Indicadores" >
            </figure>
            <indicators
              class="app__presentation__panel__indicators__progress"
              :currentLoyalty="10"
              :currentSatisfaction="20"
              :totalLoyalty="100"
              :totalSatisfaction="100"
            />

          </div>
        </div>
        <button-link href="/questions" text="CONTINUAR" class="app__presentation__panel__button" />
      </panel>

    </div>
  </div>
</template>

<style lang="less" scoped>
  .app{
    min-height: 100vh;
    background-image: url('../assets/images/bg2.png');

    &__presentation{
      padding-top: 50px;

      &__panel{
        display: grid;
        grid-gap: 10px;
        grid-template-columns: 1.3fr 1fr;

        &__text p{
          margin-bottom: 10px;
          font-size: 15px;
          line-height: 20px;
        }

        &__indicators{
          &__image{
            text-align: center;
            margin-bottom: 20px;

            img{
              max-height: 100px;
              filter: invert(1)
            }
          }

          &__progress{
            width: 100%;
          }
        }

        &__button{
          border: 1px solid #fff;
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translate(-50%, 50%);
        }
      }

      .panel-component{
        max-width: 700px;
        margin-top: 30px;
        position: relative;
      }
    }
  }
</style>