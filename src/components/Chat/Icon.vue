<template>
  <div class="icon">
    <img class="icon__image" :src="require('assets/img/icon.png')" alt="" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.icon {
  width: 47px;
  height: 47px;
  clip-path: polygon(50% 0%, 96% 38%, 82% 100%, 18% 100%, 0% 38%);
}
</style>
