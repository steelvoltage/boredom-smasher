<template>
  <div class="wrapper">
    <div class="container">
      <p>Brainstorm some fun activities for you to try!</p>
      <form @submit.prevent="addActivity">
        <input
          type="text"
          placeholder="Enter your own activity idea..."
          v-model="activity"
          v-validate="'min:3'"
          name="activity"
        >
        <transition
          name="alert-in"
          enter-active-class="animated flipInX"
          leave-active-class="animated flipOutX"
        >
          <p class="alert" v-if="errors.has('activity')">{{ errors.first('activity')}}</p>
          <p class="alert" v-if="oops">Already have that activity, try again!</p>
        </transition>
      </form>
      <button class="generate" v-on:click="addActivities">Generate An Activity!</button>
      <ul>
        <li v-for="(data, index) in activities" :key="index">
          {{data}}
          <button class="delete" v-on:click="deleteActivity">x</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { generateIdea } from "../data/all-activities";
export default {
  name: "Activities",
  data() {
    return {
      activity: "",
      activities: [],
      oops: false
    };
  },
  created: function() {
    const startingIdea = generateIdea([]);
    this.activities.unshift(startingIdea);
  },
  methods: {
    addActivity() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.activities.unshift(this.activity);
          this.activity = "";
        }
      });
    },
    addActivities() {
      this.oops = false;
      const generated = generateIdea(this.activities);
      if (generated) {
        this.activities.unshift(generated);
      } else {
        this.oops = true;
        setTimeout(() => (this.oops = false), 3000);
      }
    },
    deleteActivity(id) {
      this.activities.splice(id, 1);
    }
  }
};
</script>


<style scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css";

.wrapper {
  padding: 3rem;
}

.generate {
  background-color: #e9e1e1;
  display: block;
  margin: 1rem auto;
  border: 2px solid #801f1f;
  font-size: 1rem;
  padding: 0.5rem;
  color: #801f1f;
}

.generate:hover {
  background-color: #801f1f;
  color: #e9e1e1;
  border: 1px solid #e9e1e1;
}

.generate:active {
  background-color: #801f1f;
  color: #fafafa;
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
  max-height: 50vh;
  overflow-y: scroll;
}

ul li {
  padding: 20px;
  font-size: 1.3em;
  background-color: #e9e1e1;
  border-left: 5px solid #801f1f;
  margin-bottom: 2px;
  color: #3e5252;
}

p {
  text-align: center;
  padding: 30px 0;
  color: gray;
}

.container {
  box-shadow: 0px 0px 40px lightgray;
  padding: 1rem;
}

input {
  width: calc(100% - 40px);
  border: 0;
  padding: 20px;
  font-size: 1.3em;
  background-color: #cccccc;
  color: #4d3d3d;
  border: 2px solid #801f1f;
}

.alert {
  background: #fdf2ce;
  font-weight: bold;
  display: inline-block;
  padding: 5px;
  margin-top: -20px;
}

.alert-in-enter-active {
  animation: bounce-in 0.5s;
}

.alert-in-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

.delete {
  float: right;
  position: relative;
  top: 4px;
  border: none;
  background-color: transparent;
  color: #801f1f;
  font-weight: bolder;
  text-transform: uppercase;
}
.delete:hover {
  cursor: pointer;
}
</style>
