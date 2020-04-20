<template>
  <div class="grid-area-type4" :style="`order:${order};`">
    <div
      class="grid-area-type4__big grid-area-type4--color-orange grid-area-type4--grid-wrap"
    >
      <slot name="big"></slot>
    </div>
    <div
      class="grid-area-type4__small grid-area-type4--color-orange grid-area-type4--grid-wrap"
    >
      <slot name="smallBottom"></slot>
    </div>
    <div
      class="grid-area-type4__small grid-area-type4--color-purple grid-area-type4--grid-wrap"
    >
      <slot name="smallTop"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "GridType4",
  props: {
    order: {
      type: Number,
      required: false,
    },
  },
};
</script>

<style lang="scss">
.grid-area-type4 {
  @media screen and (min-width: 320px) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 10px 0;
  }
  @media screen and (min-width: 768px) {
    width: calc(66.6% - 10px / 2);
    margin: 5px 0;
  }

  &--color-orange {
    background: #ffaa87;
  }
  &--color-purple {
    background: #c7abd4;
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
      padding: 10px;
      width: calc(50% - 10px / 2);
    }
  }

  &__big {
    @media screen and (min-width: 320px) {
      width: 100%;
      padding: 20px 20px 20px 10px;
      margin-bottom: 10px;
      &:last-child {
        margin: 0;
      }
    }
    @media screen and (min-width: 768px) {
      padding: 12px 14px;
      width: 100%;
    }
  }
}
</style>
