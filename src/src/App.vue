<template>
  <div>
    <HeaderComponent/>
    <GnBComponent/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import "../src/assets/css/App.css"
import HeaderComponent from './components/HeaderComponent.vue';
import GnBComponent from './components/GnBComponent.vue';

export default defineComponent({
  name: 'App',
  components: {
    HeaderComponent,
    GnBComponent
  }
});
</script>