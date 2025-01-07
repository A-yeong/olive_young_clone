<template>
    <div>
        <TopUtilComponent/>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import "../assets/css/HeaderComponent.css";
import TopUtilComponent from "./TopUtilComponent.vue";

export default defineComponent({
    name: 'HeaderComponent',
    components: {
        TopUtilComponent
    }
})
</script>