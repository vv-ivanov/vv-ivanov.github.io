<template>
  <div class="link">
    <div class="link--left">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.link {
  overflow: hidden;
  background-color: #f1f1f1;
  padding: 20px 10px;
}

.link a {
  float: left;
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
  border-radius: 4px;
  background: lightblue;
  margin-right: 10px;

  &:hover {
    background-color: #ddd;
    color: black;
  }
}

@media screen and (max-width: 500px) {
  .link a {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>
