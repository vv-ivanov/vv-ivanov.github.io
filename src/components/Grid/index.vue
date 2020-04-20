<template>
  <div class="grid">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Grid",
};
</script>

<style lang="scss">
.grid {
  @media screen and (min-width: 320px) {
    padding: 0;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 5px 12px;
  }

  &-small {
    width: calc(100% / 3);
  }

  &-middle {
    width: calc(100% / 2);
  }

  &-big {
    width: 100%;
  }

  // &--is-anime {
  //   cursor: pointer;
  //   position: relative;

  //   &:before {
  //     //opacity: 0;
  //     border-radius: 50%;
  //     content: '';
  //     position: absolute;
  //     top: 50%;
  //     left: 50%;
  //     transform: translate( -50%, -50%);
  //     display: block;
  //     width: 61px;
  //     height: 61px;
  //     background-color: #fff;
  //     background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjEiIGhlaWdodD0iNjEiIHZpZXdCb3g9IjAgMCA2MSA2MSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIzMC41IiBjeT0iMzAuNSIgcj0iMzAuNSIgZmlsbD0id2hpdGUiLz48cGF0aCBkPSJNMzIuMDk5NiAzNi43NzU0SDI5LjE2NDFMMjguOTM1NSAxOC40MDYySDMyLjM0NTdMMzIuMDk5NiAzNi43NzU0Wk0yOC44MTI1IDQyLjM2NTJDMjguODEyNSA0MS44Mzc5IDI4Ljk3MDcgNDEuMzk4NCAyOS4yODcxIDQxLjA0NjlDMjkuNjE1MiA0MC42ODM2IDMwLjA5NTcgNDAuNTAyIDMwLjcyODUgNDAuNTAyQzMxLjM2MTMgNDAuNTAyIDMxLjg0MTggNDAuNjgzNiAzMi4xNjk5IDQxLjA0NjlDMzIuNDk4IDQxLjM5ODQgMzIuNjYyMSA0MS44Mzc5IDMyLjY2MjEgNDIuMzY1MkMzMi42NjIxIDQyLjg5MjYgMzIuNDk4IDQzLjMzMiAzMi4xNjk5IDQzLjY4MzZDMzEuODQxOCA0NC4wMjM0IDMxLjM2MTMgNDQuMTkzNCAzMC43Mjg1IDQ0LjE5MzRDMzAuMDk1NyA0NC4xOTM0IDI5LjYxNTIgNDQuMDIzNCAyOS4yODcxIDQzLjY4MzZDMjguOTcwNyA0My4zMzIgMjguODEyNSA0Mi44OTI2IDI4LjgxMjUgNDIuMzY1MloiIGZpbGw9IiNGNTVFNjIiLz48L3N2Zz4=);
  //     background-position: center;
  //     z-index: 100;
  //   }

  //   &:hover {
  //     filter: blur(15px);
  //     &:after{
  //       opacity: 1;
  //     }
  //   }

  // }
}
</style>
