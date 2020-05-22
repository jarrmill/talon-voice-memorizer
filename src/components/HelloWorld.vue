<template>
  <div>
    <p>{{ currentQuestion.question }}</p>
    <p>{{ this.timer }}</p>
    <v-text-field
      v-model="answer"
      label="Answer"
    ></v-text-field>
  </div>
</template>

<script>
  import questions from '../problems/questions';
  import { getQuality } from '../helpers/util';
  import sm2 from '../helpers/sm2';

  export default {
    data() {
      return {
        questions,
        answer: '',
        questionIndex: 0,
        intervalId: null,
        timer: 0,
      }
    },
    computed: {
      currentQuestion() {
        const sorted = this.questions.slice().sort((a, b) => {
          return a.interval - b.interval;
        });
        console.log('Sorted: ', sorted);
        return sorted[0];
      },
    },
    watch: {
      answer: function(val) {
        if (val === this.currentQuestion.answer) {
          this.markAnswerCorrect();
        }
      }
    },
    methods: {
      startTimer: function() {
        const id = setInterval(() => {
          this.timer += 1;
        }, 1000);
        this.intervalId = id;
      },
      clearTimer: function() {
        clearInterval(this.intervalId);
        this.intervalId = null;
      },
      markAnswerCorrect: function() {
          let quality = getQuality(this.timer);
          let { interval, repetitions, easeFactor } = sm2(quality, this.currentQuestion.repetitions, this.currentQuestion.easeFactor, this.currentQuestion.interval);
          console.log( "new interval: ", interval, repetitions, easeFactor);
          // adjust question data according to sm2 feedback;
          this.currentQuestion.repetitions = repetitions;
          this.currentQuestion.interval = interval;
          this.currentQuestion.easeFactor = easeFactor;

          // clean up
          this.answer = '';
          this.timer = 0;
          this.clearTimer();
          this.startTimer();
      },
    },
    mounted() {
      this.startTimer();
    }
  }
</script>

<style lang="scss" scoped>

</style>