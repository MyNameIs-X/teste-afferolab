<script>
export default {
  name: 'button-action',

  props: {
    text: { type: String, required: true },
    type: { type: String, required: false, default: 'button' }
  }
}
</script>

<template>
    <button :type="type" class="button" @click="$emit('click')">{{ text }}</button>
</template>

<style lang="less" scoped>
  .button{
    cursor: pointer;
    display: block;
    font-weight: bold;
    color: white;
    background: rgb(201, 33, 52);
    background: linear-gradient(90deg, rgba(201, 33, 52, 1) 0%, rgba(120, 48, 135, 1) 100%);
    text-align: center;
    padding: 10px 15px;
    border-radius: 10px;
    font-size: 16px;
    text-decoration: none;
    font-family: 'Gilroy', sans-serif;

    &:hover {
      color: white;
      text-decoration: none;
    }
  }
</style>