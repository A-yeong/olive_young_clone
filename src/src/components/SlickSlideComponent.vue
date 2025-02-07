<template>
    <div class="slick-slide" :data-slick-index=index aria-hidden="false" style="width: 1135px; position: relative; left: 0px; top: 0px; z-index: 999; opacity: 1;" tabindex="-1" role="option" aria-describedby="slick-slide01">
        <a onclick= "" href="" class="banner_link">
            <p class="banner_desc">
                <span class="tit" style="color: #fff;">{{ title }}</span>
                <strong style="color: #fff;">
                    {{ description1 }}
                </strong>
                <span style="color: #fff;">{{ description2 }}</span>
            </p>
            <img :src=imageSrc :alt=imgDesc>
        </a>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
    name: "SlickSlideComponent",
    props: {
        imageSrc: String,
        imgDesc: String,
        title: String,
        description1: String,
        description2: String,
        index: Number,
    }
});
</script>