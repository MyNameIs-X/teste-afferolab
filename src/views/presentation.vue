<script>
import button from '@/components/button.vue';
import indicators from '@/components/indicators.vue';
import panel from '@/components/panel.vue';

export default {
  name: 'presentation',
  components: {
    'button-link': button,
    indicators,
    panel
  }
}
</script>
    Indicators

<template>
  <div class="app">
    <div class="app__presentation">
      <header class="app__presentation__indicators">
        <div class="content">
          <figure>
            <img src="../assets/images/arte_indicadores.png" alt="Indicadores" title="Indicadores" class="app__presentation__indicators__image">
          </figure>
          <indicators class="app__presentation__indicators__progress" />
        </div>
      </header>

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
  
      &__indicators{

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

      &__panel{
        display: grid;
        grid-gap: 10px;
        grid-template-columns: 3fr 2fr;

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
        max-width: 650px;
        margin-top: 30px;
        position: relative;
      }
    }
  }
</style>