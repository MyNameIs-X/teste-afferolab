<script>
import KProgress from "k-progress";

export default {
  components: {
    "k-progress": KProgress,
  },

  computed: {
    percentLoyalty(){
      return (this.currentLoyalty * 100) / this.totalLoyalty;
    },

    percentSatisfaction(){
      return (this.currentSatisfaction * 100) / this.totalSatisfaction
    }
  },

  props: {
    currentLoyalty: { type: Number, required: true, default: 0 },
    currentSatisfaction: { type: Number, required: true, default: 0 },
    totalLoyalty: { type: Number, required: true, default: 0 },
    totalSatisfaction: { type: Number, required: true, default: 0 },
  },
};
</script>

<template>
  <ul class="indicators">
    <li class="indicators__item">
      <p>
        Satisfação <br />
        do cliente
      </p>
      <k-progress 
        class="indicators__item__progress"
        :percent="percentSatisfaction"
        :show-text="false"
      />
    </li>

    <li class="indicators__item">
      <p>Fidelização</p>
      <k-progress 
        class="indicators__item__progress"
        :percent="percentLoyalty"
        :show-text="false"
      />
    </li>
  </ul>
</template>

<style lang="less" scoped>
.indicators {
  &__item{
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 3fr;
    margin: 10px 0;

    &__progress{
      margin-top: 5px;
      width: 100%;
    }
  }  
}
</style>