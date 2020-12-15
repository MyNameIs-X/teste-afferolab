<script>
export default {
  props: {
    color: { type: String, required: true }
  },

  computed: {
    colorClass() {
      return 'panel--' + this.color
    }
  }
}
</script>

<template>
  <div class="panel" :class="colorClass">
    <div class="panel__content">
      <slot></slot>  
    </div>  
  </div>  
</template>

<style lang="less" scoped>
  .panel{
    padding: 5px;
    border-radius: 10px;

    &--red{
      border: 1px solid #cb2031;
    
      .panel__content{
        background: #cb2031;
        color: white;
        position: relative;
      }
    }

    &--white{

    }

    &__content{
      border-radius: 10px;
      padding: 20px 20px 30px;
    }
  }
</style>