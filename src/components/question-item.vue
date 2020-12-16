<script>
import { mapActions } from 'vuex';
export default {
  data: () => {
    return {
      alphabet: [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
      ],
      optionSelected: 0,
    };
  },
  name: "question-item",
  methods: {
    ...mapActions(['switchOption'])
  },
  props: {
    question: { required: true },
  },
};
</script>

<template>
  <li class="question">
    <h1 class="question__title">{{ question.pergunta }}</h1>

    <ol>
      <li
        class="question__options"
        v-for="(item, i) in question.alternativas"
        :key="i"
      >
        <input
          type="radio"
          :id="item.id"
          :name="`question-${question.id}`"
          :value="i"
          @change="switchOption($event.target.value)"
        />
        <label :for="item.id">
          <span class="question-select">{{ alphabet[i] }}</span>
          {{ item.descricao }}
        </label>
      </li>
    </ol>
  </li>
</template>

<style lang="less" scoped>
.question {
  margin-bottom: 20px;

  &__title {
    font-size: 18px;
    line-height: 22px;
    margin: 0 0 30px 0;
  }

  &__options {
    margin-bottom: 20px;

    input[type="radio"] {
      display: none;

      &:checked ~ label {
        span {
          background-color: purple;
          color: white;
        }
      }
    }

    label {
      display: flex;
      align-items: center;
      font-size: 14px;
      cursor: pointer;

      &:hover {
        span {
          background-color: rgba(128, 0, 128, 0.05);
        }
      }

      span {
        display: block;
        text-transform: uppercase;
        padding: 3px 10px;
        font-weight: bold;
        color: purple;
        border-radius: 4px;
        border: 1px solid purple;
        margin-right: 10px;
      }
    }
  }
}
</style>