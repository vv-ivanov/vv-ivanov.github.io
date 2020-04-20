<i18n>
{
	"ru": {
    "headerText": "header"
	},
	"en": {
    "headerText": "header"
  }
}
</i18n>
<template>
  <div class="header">
    {{ $t("headerText") }}
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
  font-size: 24px;
  line-height: 20px;
  background: #c4c4c4;

  @media screen and (min-width: 320px) {
    height: 90px;
  }
}
</style>
