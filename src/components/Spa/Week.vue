<template>
  <div class="week ml-3">
    <ul class="week__list list-group">
      <li
        v-for="(day, index) in weekDay"
        :key="index"
        class="week__item list-group-item"
        drag-target
        :style="index === 0 ? `order:${7};` : `order:${index};`"
        :class="{ active: day === selected, 'week__list-is-drag': dragData }"
        @drop="drop(index)"
        @click="changeDay(day, index)"
      >
        {{ day }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapState } from "vuex";
export default {
  name: "Week",
  data() {
    return {
      selected: null,
      indexDay: null,
    };
  },
  methods: {
    changeDay(newDay, dayIndex) {
      this.selected = newDay;
      this.indexDay = dayIndex;
      this.setSelectedDay(newDay);
      this.setSelectedDayIndex(dayIndex);
    },
    ...mapMutations("schedule", [
      "setSelectedDay",
      "changeData",
      "setSelectedDayIndex",
      "dragEnd",
    ]),
    drop: function (dayIndex) {
      this.changeData(dayIndex);
      this.dragEnd();
    },
  },
  computed: {
    currDay() {
      const d = new Date();
      const numberDay = d.getDay();
      return this.weekDay[numberDay];
    },
    curDayIndx() {
      return new Date().getDay();
    },
    ...mapGetters("schedule", ["weekDay"]),
    ...mapState("schedule", ["dragData"]),
  },
  mounted() {
    this.selected = this.currDay;
    this.indexDay = this.curDayIndx;
    this.setSelectedDay(this.currDay);
    this.setSelectedDayIndex(this.curDayIndx);
  },
};
</script>

<style lang="scss">
.week {
  &__list {
    list-style: none;
    display: flex;
    flex-direction: column;
  }

  &__list-is-drag.list-group-item {
    background-color: darkolivegreen;
    color: floralwhite;
    border: 1px dashed floralwhite;
  }

  &__item {
    cursor: pointer;

    &:hover {
      background: cornflowerblue;
    }
  }
}
</style>
