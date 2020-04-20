import Vue from "vue";
export const state = {
  listDates: [//тестовые данные
    {
      id: Math.random().toString().slice(2),
      dateISO: "2020-04-13T09:02:00.628Z",
      indexDay: 1,
      text: "test пн",
    },
    {
      id: Math.random().toString().slice(2),
      dateISO: "2020-04-06T09:02:00.628Z",
      indexDay: 1,
      text: "test пн2",
    },
    {
      id: Math.random().toString().slice(2),
      dateISO: "2020-04-14T09:02:00.628Z",
      indexDay: 2,
      text: "test вт",
    },
    {
      id: Math.random().toString().slice(2),
      dateISO: "2020-04-07T09:02:00.628Z",
      indexDay: 2,
      text: "test вт2",
    },
    {
      id: Math.random().toString().slice(2),
      dateISO: "2020-04-15T09:02:00.628Z",
      indexDay: 3,
      text: "test ср",
    },
    {
      id: Math.random().toString().slice(2),
      dateISO: "2020-04-08T09:02:00.628Z",
      indexDay: 3,
      text: "test ср2",
    },
    {
      id: Math.random().toString().slice(2),
      dateISO: "2020-04-16T09:02:00.628Z",
      indexDay: 4,
      text: "test чт",
    },
    {
      id: Math.random().toString().slice(2),
      dateISO: "2020-04-09T09:02:00.628Z",
      indexDay: 4,
      text: "test чт2",
    },
    {
      id: Math.random().toString().slice(2),
      dateISO: "2020-04-10T09:02:00.628Z",
      indexDay: 5,
      text: "test пт",
    },
    {
      id: Math.random().toString().slice(2),
      dateISO: "2020-04-03T09:02:00.628Z",
      indexDay: 5,
      text: "test пт2",
    },
    {
      id: Math.random().toString().slice(2),
      dateISO: "2020-04-11T09:02:00.628Z",
      indexDay: 6,
      text: "test сб",
    },
    {
      id: Math.random().toString().slice(2),
      dateISO: "2020-04-04T09:02:00.628Z",
      indexDay: 6,
      text: "test сб2",
    },
    {
      id: Math.random().toString().slice(2),
      dateISO: "2020-04-12T09:02:00.628Z",
      indexDay: 0,
      text: "test вс",
    },
    {
      id: Math.random().toString().slice(2),
      dateISO: "2020-04-05T09:02:00.628Z",
      indexDay: 0,
      text: "test вс2",
    },
  ],
  selectedDay: null,
  selectedDayIndex: null,
  dragData: null,
};

// getters
const getters = {
  weekDay: () => {
    const weekday = new Array(7);
    weekday[0] = "Воскресение";
    weekday[1] = "Понедельник";
    weekday[2] = "Вторник";
    weekday[3] = "Среда";
    weekday[4] = "Четверг";
    weekday[5] = "Пятница";
    weekday[6] = "Суббота";
    return weekday;
  },
};

const setLS = (propName, val) => {
  Vue.localStorage.set(propName, JSON.stringify(val))
}

// actions
const actions = {};

// mutations
const mutations = {
  setSelectedDay(state, payload) {
    state.selectedDay = payload;
  },
  setSelectedDayIndex(state, payload) {
    state.selectedDayIndex = payload;
  },
  setlistDates(state, payload) {
    let dateConstructor = new Date();
    dateConstructor.setHours(payload.date.slice(0, 2));
    dateConstructor.setMinutes(payload.date.slice(-2));
    dateConstructor.setSeconds(0);
    const newEl = {
      id: Math.random().toString().slice(2),
      dateISO: new Date(dateConstructor).toISOString(),
      indexDay: state.selectedDayIndex,
      text: payload.text,
    };
    const newList = [...state.listDates, newEl];
    state.listDates = newList;
    setLS('dayList', state.listDates)
  },
  setText(state, payload) {
    let idx = state.listDates.findIndex((v) => v.id === payload.id);
    state.listDates[idx].text = payload.text;
    setLS('dayList', state.listDates)
  },
  setTime(state, payload) {
    let dateConstructor = new Date();
    dateConstructor.setHours(payload.date.slice(0, 2));
    dateConstructor.setMinutes(payload.date.slice(-2));
    dateConstructor.setSeconds(0);

    let idx = state.listDates.findIndex((v) => v.id === payload.id);
    state.listDates[idx].dateISO = new Date(dateConstructor).toISOString();
    setLS('dayList', state.listDates)
  },
  deleteItem(state, payload) {
    let idx = state.listDates.findIndex((v) => v.id === payload);
    state.listDates.splice(idx, 1);
    setLS('dayList', state.listDates)
  },
  setDragData(state, payload) {
    state.dragData = payload;
  },
  dragEnd(state) {
    state.dragData = null;
  },
  changeData(state, payload) {
    const otherMessage = state.listDates.filter((v) => v.indexDay !== payload);
    const added = state.dragData.map((v) => ({ ...v, indexDay: payload }));

    state.listDates = [...otherMessage, ...added];
    setLS('dayList', state.listDates)
  },
  getLSData(state) {
    const ls = Vue.localStorage.get('dayList')
    if(ls){
      state.listDates = JSON.parse(ls)
    }
  }
};

export default {
  namespaced: true,
  namespace: "schedule",
  state,
  getters,
  actions,
  mutations,
};
