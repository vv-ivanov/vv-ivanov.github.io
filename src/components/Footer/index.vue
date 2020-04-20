<i18n>
{
	"ru": {
    "footerText": "footer"
	},
	"en": {
    "footerText": "footer"
  }
}
</i18n>
<template>
  <div class="footer">
    {{ $t("footerText") }}
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss">
.footer {
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
