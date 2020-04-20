<template>
  <div class="grid-area-type1" :style="`order:${order};`">
    <div
      class="grid-area-type1__big grid-area-type1--grid-wrap grid--is-anime"
      :class="{
        'grid-area-type1--color-green': green,
        'grid-area-type1--color-grey': grey,
      }"
    >
      <slot name="big"></slot>
    </div>
    <div class="grid-area-type1__flex-small">
      <div
        class="grid-area-type1__small grid-area-type1--grid-wrap grid--is-anime"
        :class="{
          'grid-area-type1--color-green': green,
          'grid-area-type1--color-grey': grey,
          'grid-area-type1__small--is-image': bgTop,
        }"
      >
        <div
          class="grid-area-type1__inner"
          :style="
            bgTop
              ? { backgroundImage: 'url(' + require(`@/${bgTop}`) + ')' }
              : null
          "
        >
          <slot name="smallTop"></slot>
        </div>
      </div>

      <div
        class="grid-area-type1__small grid-area-type1--grid-wrap grid--is-anime"
        :class="{
          'grid-area-type1--color-green': green,
          'grid-area-type1--color-grey': grey,
          'grid-area-type1__small--is-image': bgBottom,
        }"
      >
        <div
          class="grid-area-type1__inner"
          :style="
            bgBottom
              ? { backgroundImage: 'url(' + require(`@/${bgBottom}`) + ')' }
              : null
          "
        >
          <slot name="smallBottom"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GridType1",
  props: {
    green: {
      type: Boolean,
      required: false,
    },
    grey: {
      type: Boolean,
      required: false,
      default: true,
    },
    order: {
      type: Number,
      required: false,
    },
    bgTop: {
      type: String,
      required: false,
    },
    bgBottom: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="scss">
.grid-area-type1 {
  @media screen and (min-width: 320px) {
    display: flex;
    justify-content: space-between;
    height: 211px;
    margin: 10px 0;
  }
  @media screen and (min-width: 768px) {
    order: 1;
    height: 492px;
    margin: 5px 0;
    width: 100%;
  }

  &--color-grey {
    background: #a2a9b7;
    color: #fff;
  }

  &--color-green {
    background: #e3ebd3;
    color: #000000;
  }

  &--left {
    flex-direction: row-reverse;
  }

  &--grid-wrap {
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: flex-end;
  }

  &__flex-small {
    @media screen and (min-width: 320px) {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      width: calc(33.3% - 10px / 2);
    }
  }

  &__small {
    background-position: center;
    background-size: cover;

    @media screen and (min-width: 320px) {
      //padding: 8px;
      height: 100%;
      margin-bottom: 6px;
      &:last-child {
        margin: 0;
      }
    }
    @media screen and (min-width: 768px) {
      //padding: 14px;
    }

    &--is-image {
      color: #fff;
      cursor: pointer;
      position: relative;
      overflow: hidden;

      &:before {
        opacity: 0;
        border-radius: 50%;
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: block;
        width: 61px;
        height: 61px;
        background-color: #fff;
        background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjEiIGhlaWdodD0iNjEiIHZpZXdCb3g9IjAgMCA2MSA2MSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIzMC41IiBjeT0iMzAuNSIgcj0iMzAuNSIgZmlsbD0id2hpdGUiLz48cGF0aCBkPSJNMzIuMDk5NiAzNi43NzU0SDI5LjE2NDFMMjguOTM1NSAxOC40MDYySDMyLjM0NTdMMzIuMDk5NiAzNi43NzU0Wk0yOC44MTI1IDQyLjM2NTJDMjguODEyNSA0MS44Mzc5IDI4Ljk3MDcgNDEuMzk4NCAyOS4yODcxIDQxLjA0NjlDMjkuNjE1MiA0MC42ODM2IDMwLjA5NTcgNDAuNTAyIDMwLjcyODUgNDAuNTAyQzMxLjM2MTMgNDAuNTAyIDMxLjg0MTggNDAuNjgzNiAzMi4xNjk5IDQxLjA0NjlDMzIuNDk4IDQxLjM5ODQgMzIuNjYyMSA0MS44Mzc5IDMyLjY2MjEgNDIuMzY1MkMzMi42NjIxIDQyLjg5MjYgMzIuNDk4IDQzLjMzMiAzMi4xNjk5IDQzLjY4MzZDMzEuODQxOCA0NC4wMjM0IDMxLjM2MTMgNDQuMTkzNCAzMC43Mjg1IDQ0LjE5MzRDMzAuMDk1NyA0NC4xOTM0IDI5LjYxNTIgNDQuMDIzNCAyOS4yODcxIDQzLjY4MzZDMjguOTcwNyA0My4zMzIgMjguODEyNSA0Mi44OTI2IDI4LjgxMjUgNDIuMzY1MloiIGZpbGw9IiNGNTVFNjIiLz48L3N2Zz4=);
        background-position: center;
        z-index: 100;
      }

      .grid-area-type1__inner {
        background-position: center;
        background-size: cover;
      }

      &:hover {
        .grid-area-type1__inner {
          filter: blur(15px);
        }
        &:before {
          opacity: 1;
        }
      }
    }
  }

  &__inner {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    transition: filter 0.4s ease;

    @media screen and (min-width: 320px) {
      padding: 8px;
    }
    @media screen and (min-width: 768px) {
      padding: 14px;
    }
  }

  &__big {
    @media screen and (min-width: 320px) {
      width: calc(69% - 10px);
      padding: 20px 20px 20px 10px;
      overflow-y: scroll;
      font-size: 18.1121px;
      line-height: 26px;
    }
    @media screen and (min-width: 768px) {
      padding: 30px 25px;
      width: calc(66.6% - 10px / 2);
      font-size: 18.1121px;
      line-height: 26px;
    }
  }
}
</style>
