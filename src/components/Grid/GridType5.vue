<template>
  <div class="grid-area-type5" :style="`order:${order};`">
    <div
      class="grid-area-type5__small grid-area-type5--color-orange grid-area-type5--grid-wrap"
    >
      <slot name="orange"></slot>
    </div>
    <div
      class="grid-area-type5__small grid-area-type5--color-purple grid-area-type5--grid-wrap"
    >
      <slot name="purple"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "GridType5",
  props: {
    order: {
      type: Number,
      required: false,
    },
  },
};
</script>

<style lang="scss">
.grid-area-type5 {
  @media screen and (min-width: 320px) {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin: 10px 0;
  }
  @media screen and (min-width: 768px) {
    flex-direction: column;
    width: calc(33.3% - 10px / 2);
    margin: 5px 0;
  }

  &--color-orange {
    background: #ffaa87;
  }
  &--color-purple {
    background: #f55e62;
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
