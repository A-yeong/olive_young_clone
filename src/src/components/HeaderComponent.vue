<template>
    <div id="Header">
        <TopUtilComponent/>
        <HeaderInnerComponent/>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import "../assets/css/HeaderComponent.css";
import TopUtilComponent from "./TopUtilComponent.vue";
import HeaderInnerComponent from "./HeaderInnerComponent.vue";

export default defineComponent({
    name: 'HeaderComponent',
    components: {
        TopUtilComponent,
        HeaderInnerComponent
    }
})
</script>