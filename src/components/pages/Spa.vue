<template>
  <div class="page-spa">
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
    />
    <Spa />
  </div>
</template>

<script>
import Spa from "@/components/Spa";
import { mapMutations } from "vuex"
export default {
  name: "SpaPage",
  components: {
    Spa,
  },
  methods:{
    ...mapMutations("schedule", ["getLSData"])
  },
  mounted(){
    this.getLSData()
  }
};
</script>

<style lang="scss" scoped></style>
