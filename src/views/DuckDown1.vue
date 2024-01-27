<script setup lang="ts"></script>

<template>
  <div class="container push-r">
    A
    <div class="medium">AA</div>
    <div class="medium">AB</div>
    <div class="medium">AC</div>
    <div class="medium">AD</div>
    <div class="medium">AE</div>
  </div>
  <div class="large">D</div>
  <div class="large">E</div>
  <div class="large">F</div>
</template>

<style>
#app div {
  background-image: linear-gradient(
    to bottom right,
    red,
    orange,
    yellow,
    green,
    blue,
    indigo,
    violet
  );
  border: 1px solid black;
  color: white;
}

.container {
  height: 800px;
  width: 400px;
  border: 1px solid black;
  position: relative;
}
.large {
  height: 400px;
  width: 300px;
}
.medium {
  height: 200px;
  width: 200px;
}
.small {
  height: 100px;
  width: 100px;
}
.tiny {
  height: 50px;
  width: 50px;
}

.absolute {
  position: absolute;
}

.relative {
  position: relative;
}

.fixed {
  position: fixed;
}

.push-r {
  left: 150px;
}

.nudge-dr {
  top: 50px;
  left: 50px;
}
</style>
