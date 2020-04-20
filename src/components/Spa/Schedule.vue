<i18n>
{
	"ru": {
    "info": "В этот день нет запланированных дел"
  },
	"en": {
    "info": "There are no scheduled activities on this day."
  }
}
</i18n>
<template>
  <div class="schedule">
    <template v-if="listBySelectedDay.length > 0">
      <span
        id="dragtarget"
        class="schedule__copy"
        draggable="true"
        @dragstart="dragStart"
        @dragend="endDrag"
        >*</span
      >

      <div class="schedule__list list-group">
        <transition-group :name="isAnim ? 'list' : null" tag="span">
          <div
            v-for="item in listBySelectedDay"
            :key="item.id"
            class="schedule__list-item list-group-item d-flex justify-content-between align-items-center"
            :class="{
              'text-danger':
                new Date(item.date).getTime() < new Date().getTime(),
            }"
          >
            <div v-show="isEditTime === item.id" class="schedule__edit-wrap">
              <input
                :ref="`timeInput_${item.id}`"
                :value="item.time"
                type="text"
                class="form-control schedule__edit"
                placeholder="Введите время"
                aria-label="Введите время"
                aria-describedby="basic-addon2"
              />
              <button
                type="button"
                class="btn btn-success"
                @click="saveTime(item.id)"
              >
                &#x2713;
              </button>
              <button
                type="button"
                class="btn btn-danger"
                @click="cancelEditTime"
              >
                x
              </button>
            </div>
            <div
              v-show="isEditTime !== item.id"
              class="schedule__list-item-time"
              @click="editTime(item.id)"
            >
              {{ item.time }}
            </div>
            <span class="schedule__list-item-date"
              >{{ pareseDate(item.date) }} -</span
            >

            <div v-show="isEditText === item.id" class="schedule__edit-wrap">
              <input
                :ref="`timeInputText_${item.id}`"
                :value="item.text"
                type="text"
                class="form-control schedule__text"
                placeholder="Введите текст"
                aria-label="Введите текст"
                aria-describedby="basic-addon2"
              />
              <button
                type="button"
                class="btn btn-success"
                @click="saveText(item.id)"
              >
                &#x2713;
              </button>
              <button
                type="button"
                class="btn btn-danger"
                @click="cancelEditText"
              >
                x
              </button>
            </div>
            <div
              v-show="isEditText !== item.id"
              class="schedule__list-item-text"
              @click="editText(item.id)"
            >
              {{ item.text }}
            </div>

            <button
              type="button"
              class="btn btn-danger"
              @click="deleteItem(item.id)"
            >
              x
            </button>
          </div>
        </transition-group>
      </div>
    </template>
    <template v-else>
      <div class="text-secondary">
        {{ $t("info") }}
      </div>
    </template>

    <form
      class="schedule__form input-group mt-3"
      @submit.prevent="onSaveHandler"
    >
      <input
        ref="timeInput"
        v-model="time"
        type="text"
        class="form-control schedule__time"
        placeholder="Введите время"
        aria-label="Введите время"
        aria-describedby="basic-addon2"
      />
      <input
        v-model="text"
        type="text"
        class="form-control schedule__text"
        placeholder="Введите текст"
        aria-label="Введите текст"
        aria-describedby="basic-addon2"
      />
      <button type="button" class="btn btn-primary" @click="onSaveHandler">
        +
      </button>
    </form>
  </div>
</template>

<script>
import Inputmask from "inputmask";
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  name: "Schedule",
  data() {
    return {
      time: null,
      text: null,
      isEditText: false,
      isEditTime: false,
      isAnim: false,
      listLength: null,
    };
  },
  methods: {
    setMask() {
      Inputmask("datetime", { inputFormat: "HH:MM" }).mask(
        this.$refs.timeInput
      );
      this.listBySelectedDay.forEach((v) => {
        Inputmask("datetime", { inputFormat: "HH:MM" }).mask(
          this.$refs[`timeInput_${v.id}`]
        );
      });
    },
    ...mapMutations("schedule", [
      "setlistDates",
      "setText",
      "setTime",
      "deleteItem",
      "setDragData",
      "triggerAnim",
      "dragEnd",
    ]),
    onSaveHandler() {
      const { time, text } = this;
      this.setlistDates({ date: time, text });
      this.resetData();
      this.triggerAnim("ADD_ELEMENT_LIST");
    },
    resetData() {
      this.time = null;
      this.text = null;
    },
    pareseDate(date) {
      return new Intl.DateTimeFormat("ru", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(date);
    },
    editTime(id) {
      this.isEditTime = id;
    },
    editText(id) {
      this.isEditText = id;
    },
    saveTime(id) {
      this.isEditTime = id;
      this.setTime({ id, date: this.$refs[`timeInput_${id}`][0].value });
      this.isEditTime = "";
    },
    saveText(id) {
      this.isEditText = id;
      this.setText({ id, text: this.$refs[`timeInputText_${id}`][0].value });
      this.isEditText = "";
    },
    cancelEditTime() {
      this.isEditTime = "";
    },
    cancelEditText() {
      this.isEditText = "";
    },
    dragStart: function (event) {
      const transferData = [...this.listBySelectedDay];
      this.setDragData(transferData);
    },
    endDrag: function (event) {
      if (!event.target.hasAttribute("drag-target")) {
        this.dragEnd();
      }
    },
  },
  computed: {
    ...mapState("schedule", ["listDates", "selectedDay", "selectedDayIndex"]),
    ...mapGetters("schedule", ["weekDay"]),
    listBySelectedDay() {
      const list = this.listDates
        .filter((v) => {
          if (this.selectedDayIndex === v.indexDay) {
            return v;
          }
        })
        .map((v) => {
          return {
            ...v,
            date: new Date(v.dateISO),
            time: new Intl.DateTimeFormat("ru", {
              hour: "numeric",
              minute: "numeric",
            }).format(new Date(v.dateISO)),
          };
        })
        .sort((a, b) => {
          return new Date(a.dateISO).getTime() - new Date(b.dateISO).getTime();
        });
      return list;
    },
  },
  watch: {
    selectedDayIndex: function (newV, oldV) {
      if (newV) {
        this.isAnim = false;
        this.listLength = this.listBySelectedDay.length;
      }
    },
    listBySelectedDay: function (newV, oldV) {
      if (newV.length > this.listLength) {
        this.isAnim = true;
      }
    },
  },
  mounted() {
    this.setMask();
  },
};
</script>

<style lang="scss">
.schedule {
  min-width: 250px;
  min-height: 250px;

  &__list-item-time {
    cursor: pointer;
  }
  &__list-item-text {
    cursor: pointer;
  }
  &__edit {
    width: 100px;
  }
  &__edit-wrap {
    display: flex;
    width: 150px;
  }
  &__copy {
    font-size: 40px;
    cursor: grabbing;
  }
}

.list-enter-active,
.list-leave-active {
  transition: all 400ms;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
