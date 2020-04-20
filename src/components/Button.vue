<i18n>
{
	"ru": {
    "text": "Отправть"
  },
	"en": {
    "text": "Send"
  }
}
</i18n>
<template>
  <button class="button">{{ $t("text") }}</button>
</template>

<script>
export default {
  name: "Button",
};
</script>

<style>
.button {
  cursor: pointer;
  width: 144px;
  height: 41px;
  color: #fff;
  background: #0f54b9;
  box-shadow: 0px 4px 6px rgba(15, 84, 185, 0.3);
  border-radius: 21px;
  border: 0;
}
</style>
