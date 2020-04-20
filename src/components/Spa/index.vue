<template>
  <div class="spa">
    <Schedule />
    <Week />
  </div>
</template>

<script>
import Week from "@/components/Spa/Week";
import Schedule from "@/components/Spa/Schedule";

export default {
  name: "Spa",
  components: {
    Week,
    Schedule
  },
};
</script>

<style lang="scss">
.spa {
  display: flex;
}
</style>
