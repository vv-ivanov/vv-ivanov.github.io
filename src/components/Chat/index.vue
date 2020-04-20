<template>
  <div class="chat">
    <div class="chat__history">
      <div v-for="el in history" :key="Math.random()" class="chat__day-wrap">
        <div class="chat__date">{{ el.date }}</div>
        <div
          v-for="item in el.messages"
          class="chat__message-wrap"
          :class="{
            'chat__message-wrap--right': item.author === 'user',
            'chat__message-wrap--left': item.author !== 'user',
          }"
        >
          <Icon class="chat__icon" />
          <Message
            :key="Math.random()"
            :class="{
              'message--right': item.author === 'user',
              'message--left': item.author !== 'user',
            }"
            :text="item.message"
          />
        </div>
      </div>
    </div>

    <div class="chat__message">
      <Textarea class="chat__textarea" />
      <Button />
    </div>
  </div>
</template>

<script>
import Icon from "./Icon";
import Textarea from "@/components/Textarea";
import Button from "@/components/Button";
import Message from "./Message";
export default {
  name: "Chat",
  components: {
    Icon,
    Textarea,
    Button,
    Message,
  },
  props: {
    imageBg: {
      type: String,
      required: false,
    },
  },
  computed: {
    history() {
      return [
        {
          date: "19 октября 2017",
          messages: [
            {
              author: "Bill",
              message:
                "Это означает, что в Вашем доме, офисе, кабинете, мастерской хранятся ценности бóльшие, чем просто деньги или драгоценности, - культурные ценности. Произведения искусства, антиквариат, иные предметы коллекционирования – все это имущество, безусловно высокая стоимость которого. ",
            },
            {
              author: "user",
              message: "Это означает,",
            },
            {
              author: "Bill",
              message: "доме, офисе, кабинете, мастерской",
            },
          ],
        },
        {
          date: "20 октября 2017",
          messages: [
            {
              author: "Bill",
              message:
                "Это означает, что в Вашем доме, офисе, кабинете, мастерской хранятся ценности бóльшие, чем просто деньги или драгоценности, - культурные ценности. Произведения искусства, антиквариат, иные предметы коллекционирования – все это имущество, безусловно высокая стоимость которого. ",
            },
            {
              author: "user",
              message: "Это означает,",
            },
            {
              author: "Bill",
              message: "доме, офисе, кабинете, мастерской",
            },
          ],
        },
        {
          date: "21 октября 2017",
          messages: [
            {
              author: "user",
              message: "Это означает,",
            },
            {
              author: "Bill",
              message: "доме, офисе, кабинете, мастерской",
            },
          ],
        },
      ];
    },
  },
};
</script>

<style lang="scss">
.chat {
  width: 651px;
  height: 757px;
  background: url("~assets/img/bg.png");
  background-size: 117%;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &__message {
    padding: 20px 20px 30px;
    border-top: 1px solid #fff;
  }

  &__history {
    overflow-x: hidden;
    overflow-y: scroll;
  }

  &__history {
    padding: 10px 0 0;
  }

  &__day-wrap {
    padding: 10px 0;
    position: relative;
    &:after {
      position: absolute;
      top: 0;
      left: 0;
      width: 39%;
      max-width: 245px;
      display: block;
      content: "";
      background: #fff;
      height: 1px;
    }
    &:before {
      position: absolute;
      top: 0;
      right: 0;
      width: 39%;
      max-width: 245px;
      display: block;
      content: "";
      background: #fff;
      height: 1px;
    }
  }

  &__date {
    font-size: 14px;
    line-height: 24px;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &__message-wrap {
    display: flex;
    margin: 20px 0;
    padding: 0 15px;

    &--right {
      justify-content: flex-start;
      flex-direction: row-reverse;

      .chat__icon {
        margin-left: 20px;
      }
    }
    &--left {
      justify-content: flex-start;

      .chat__icon {
        margin-right: 20px;
      }
    }
  }

  &__textarea {
    margin-bottom: 20px;
  }
}
</style>
