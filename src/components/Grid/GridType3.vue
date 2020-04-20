<template>
  <div class="grid-area-type3">
    <div
      class="grid-area-type3__small grid-area-type3--color-blue grid-area-type3--grid-wrap"
    >
      <slot name="blue"></slot>
    </div>
    <div
      class="grid-area-type3__small grid-area-type3--color-yellow grid-area-type3--grid-wrap"
    >
      <slot name="yellow"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "GridType3",
};
</script>

<style lang="scss">
.grid-area-type3 {
  @media screen and (min-width: 320px) {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin: 10px 0;
  }
  @media screen and (min-width: 768px) {
    width: calc(33.3% - 10px / 2);
    height: 320px;
    order: 3;
    flex-direction: column;
    margin: 5px 0;
  }
  &--color-blue {
    background: #90bce8;
  }
  &--color-yellow {
    background: #febf26;
  }

  &--grid-wrap {
    color: #000;
    font-size: 14px;
    line-height: 20px;
    height: 155px;
    display: flex;
    align-items: flex-end;
  }

  &__small {
    @media screen and (min-width: 320px) {
      width: calc(50% - 10px / 2);
      padding: 15px;
    }
    @media screen and (min-width: 768px) {
      padding: 14px;
      width: 100%;
    }
  }

  &__big {
    @media screen and (min-width: 320px) {
      width: 100%;
      padding: 20px 20px 20px 10px;
    }
    @media screen and (min-width: 768px) {
      padding: 30px 25px;
      width: 100%;
    }
  }
}
</style>
