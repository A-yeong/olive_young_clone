<template>
        <p class="sub_depth">
            <a href="">{{ title }}</a>
        </p>
        <ul>
            <li v-for="(item, index) in items" :key="index">
                <a href="">{{ item.name }}</a>
            </li>
        </ul>
</template>

<script lang="ts">
import "../assets/css/SubMenu.css";

export default {
    name: "SubMenu",
    props: {
        title: {
            type: String,
            required: true,
        },
        items: {
            type: Array,
            required: true
        }
    },
};
</script>