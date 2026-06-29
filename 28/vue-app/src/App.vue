<script setup>
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

const isChecked = ref(false)
</script>

<template>
  <HelloWorld />
  
  <div style="margin: 10px; text-align: center;">
    <label style="cursor: pointer; font-size: 18px; color: yellow;">
      <input type="checkbox" v-model="isChecked" /> 
      Показати текст
    </label>

    <p v-if="isChecked" style="color: green; font-size: 20px; margin-top: 15px; font-weight: 700;">
      Секретна область розблокована
    </p>
  </div>
</template>