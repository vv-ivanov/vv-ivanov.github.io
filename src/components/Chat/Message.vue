<template>
  <div class="message">{{ text }}</div>
</template>

<script>
export default {
  name: "Message",
  props: {
    text: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="scss">
.message {
  position: relative;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  background: #f1f3f5;
  border-radius: 5px;
  padding: 15px 15px 7px;
  color: #000;
  width: auto;
  max-width: 80%;

  &:after {
    content: "";
    display: inline-block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 12.5px 0 12.5px;
    border-color: #f1f3f5 transparent transparent transparent;
  }

  &--left:after {
    position: absolute;
    top: 5px;
    left: -9px;
  }

  &--right:after {
    position: absolute;
    top: 5px;
    right: -9px;
  }
}
</style>
