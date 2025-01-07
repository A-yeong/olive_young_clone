<template>
  <div>
    <HeaderComponent/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import "../src/assets/css/App.css"
import HeaderComponent from './components/HeaderComponent.vue';

export default defineComponent({
  name: 'App',
  components: {
    HeaderComponent
  }
});
</script>