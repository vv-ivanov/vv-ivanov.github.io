<template>
  <div class="grid-area-type2">
    <div
      class="grid-area-type2__small grid-area-type2--color-blue grid-area-type2--grid-wrap"
    >
      <slot name="smallTop"></slot>
    </div>
    <div
      class="grid-area-type2__small grid-area-type2--color-blue grid-area-type2--grid-wrap"
    >
      <slot name="smallBottom"></slot>
    </div>
    <div
      class="grid-area-type2__big grid-area-type2--color-blue grid-area-type2--grid-wrap"
    >
      <slot name="big"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "GridType2",
};
</script>

<style lang="scss">
.grid-area-type2 {
  @media screen and (min-width: 320px) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 10px 0;
  }
  @media screen and (min-width: 768px) {
    width: calc(66.6% - 10px / 2);
    height: 320px;
    order: 2;
    margin: 5px 0;
  }
  &--color-blue {
    background: #e8ebed;
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
      margin-bottom: 10px;
      &:last-child {
        margin: 0;
      }
    }
    @media screen and (min-width: 768px) {
      padding: 14px;
    }
  }

  &__big {
    @media screen and (min-width: 320px) {
      width: 100%;
      padding: 20px 20px 20px 10px;
    }
    @media screen and (min-width: 768px) {
      padding: 12px 17px;
    }
  }
}
</style>
