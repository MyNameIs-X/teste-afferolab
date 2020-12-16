<script>
export default {
  name: 'button-link',

  props: {
    href: { type: String, required: true },
    text: { type: String, required: true }
  }
}
</script>

<template>
    <router-link :to="href" class="button">{{ text }}</router-link>
</template>

<style lang="less" scoped>
  .button{
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