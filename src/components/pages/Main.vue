<i18n>
{
	"ru": {
    "textGreyBig": "Гений непредвзято понимает под собой конфликт. Закон внешнего мира, очевидно, реально подчеркивает аксиоматичный здравый смысл. Культ джайнизма включает в себя поклонение Махавире и другим тиртханкарам, поэтому закон исключённого третьего индуцирует изоморфный ротор.",
    "smallTop":"Чувство однократно",
    "smallBottom": "Морено",
    "our":"Наши сотрудники",
    "light": "Просветляет понимающий тест",
    "conf": "Конформизм",
    "intr": "Интроекция",
    "but": "Однако",
    "dot": "Точка перегиба",
    "length": "Длиннна вектора",
    "lead": "Лидерство",
    "gen": "Невероятный гений",
    "modern": "Понятие модернизации понимает механизм власти"
  },
	"en": {
    "textGreyBig": "A genius impartially understands a conflict. The law of the outside world, obviously, really emphasizes the axiomatic common sense. The cult of Jainism includes worship of Mahavira and other tirthankaras, therefore the law of the excluded third induces an isomorphic rotor."
  }
}
</i18n>
<template>
  <div class="main" @resize="setWidth">
    <Header />
    <Grid>
      <GridType2>
        <div slot="big">{{ $t("conf") }}</div>
        <div slot="smallTop">{{ $t("our") }}</div>
        <div slot="smallBottom">{{ $t("light") }}</div>
      </GridType2>
      <GridType3>
        <div slot="blue">{{ $t("intr") }}</div>
        <div slot="yellow">{{ $t("our") }}</div>
      </GridType3>
      <GridType1 :grey="true">
        <div slot="big">{{ $t("textGreyBig") }}</div>
        <div slot="smallTop">{{ $t("smallTop") }}</div>
        <div slot="smallBottom">{{ $t("smallBottom") }}</div>
      </GridType1>
      <GridType4 :order="md ? 6 : false">
        <div slot="big">{{ $t("but") }}</div>
        <div slot="smallTop">{{ $t("dot") }}</div>
        <div slot="smallBottom">{{ $t("length") }}</div>
      </GridType4>
      <GridType5 :order="md ? 5 : false">
        <div slot="orange">{{ $t("lead") }}</div>
        <div slot="purple">{{ $t("gen") }}</div>
      </GridType5>
      <GridType1
        v-if="md"
        class="grid-area-type1--left"
        :green="true"
        :order="4"
        bg-bottom="assets/img/card-bg.png"
      >
        <div slot="big" class="main__list">
          <div class="list">
            <div v-for="item in list" :key="item.prop" class="list__item">
              <span class="list__item-prop">{{ item.prop }}</span>
              <span class="list__item-separator"></span>
              <span class="list__item-val">{{ item.value }}</span>
            </div>
          </div>
        </div>
        <div slot="smallTop">{{ $t("modern") }}</div>
        <div slot="smallBottom">{{ $t("our") }}</div>
      </GridType1>
    </Grid>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import GridType1 from "@/components/Grid/GridType1";
import GridType2 from "@/components/Grid/GridType2";
import GridType3 from "@/components/Grid/GridType3";
import GridType4 from "@/components/Grid/GridType4";
import GridType5 from "@/components/Grid/GridType5";
export default {
  name: "Main",
  components: {
    Header,
    Footer,
    Grid,
    GridType1,
    GridType2,
    GridType3,
    GridType4,
    GridType5,
  },
  data() {
    return {
      width: null,
      list: [
        {
          prop: "Фамилия",
          value: "Мамая",
        },
        {
          prop: "Имя и отчество",
          value: "Станиславаленина Владимировна",
        },
        {
          prop: "Номер полиса выдан заведомоложный",
          value: "01354879",
        },
        {
          prop: "Дата рождения",
          value: "01.12.1976",
        },
        {
          prop: "Телефон",
          value: "Телефон",
        },
      ],
    };
  },
  computed: {
    md() {
      return this.width >= 768;
    },
  },
  created() {
    window.addEventListener("resize", this.setWidth);
  },
  destroyed() {
    window.removeEventListener("resize", this.setWidth);
  },
  mounted() {
    this.setWidth();
  },
  methods: {
    setWidth(e) {
      this.width = window.innerWidth;
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  &__list {
    width: 100%;
    height: 100%;
    font-size: 14px;
    line-height: 19px;
    align-items: flex-start;
  }

  .list {
    width: 100%;
    padding: 0;
    font-size: inherit;

    &__item {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin-bottom: 30px;
    }

    &__item-separator {
      margin: 0 12px;
      width: 100%;
      border-bottom: 1px dashed #000;
      position: relative;
      bottom: 6px;
    }
  }
}
</style>
