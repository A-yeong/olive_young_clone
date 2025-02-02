<template>
    <div id="Container">
        <div id="Contents">
            <div class = "main_full_banner">
                <div class="banner_wrap slick_slider slick-initialized slick-slider" id="mainFullSlider">
                    <button type="button" data-role = "none" class="slick-prev slick-arrow" aria-label="Previous" role="button" style="display: block;">이전 슬라이드</button>
                    <div aria-live="polite" class="slick-list draggable">
                        <div class="slick-track" role="listbox" style="opacity: 1; width: 19524px;">
                            <SlickSlideComponent
                                v-for="(slide, index) in slides"
                                :key="index"
                                :imageSrc="slide.image"
                                :title="slide.title"
                                :description="slide.description"
                                :isActive="currentIndex === index"
                                :index="index"/>
                        </div>
                    </div>
                    <button type="button" data-role = "none" class="slick-next slick-arrow" aria-label="Next" role="button" style="display: block;">다음 슬라이드</button>
                    <button id="mainSliderBtn">멈춤</button>
                    <p class="slick-paging">
                        <span class="cur_no">{{ currentIndex + 1 }}</span>/{{ slides.length }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { slides, defineComponent, ref, computed, onMounted, onUnmounted } from "vue";
import SlickSlideComponent from "./SlickSlideComponent.vue";
import "../assets/css/ContainerComponent.css"

export default defineComponent({
    name: "ContainerComponent",
    components: {
        SlickSlideComponent
    },
    setup() {
        const slides = ref([
            {
                image: "../assets/img/slick01.jpg",
                title: "올영PICK",
                description: "올리브영이 PICK한\n이 달의 브랜드\n4일 특가 & 올리브 키트 증정"
            },
            {
                image: "../assets/img/slick02.jpg",
                title: "올영PICK",
                description: "올리브영이 PICK한\n이 달의 브랜드\n4일 특가 & 올리브 키트 증정"
            },
            {
                image: "../assets/img/slick03.jpg",
                title: "올영PICK",
                description: "올리브영이 PICK한\n이 달의 브랜드\n4일 특가 & 올리브 키트 증정"
            },
            {
                image: "../assets/img/slick04.jpg",
                title: "올영PICK",
                description: "올리브영이 PICK한\n이 달의 브랜드\n4일 특가 & 올리브 키트 증정"
            },
            {
                image: "../assets/img/slick05.jpg",
                title: "올영PICK",
                description: "올리브영이 PICK한\n이 달의 브랜드\n4일 특가 & 올리브 키트 증정"
            },
        ])
    }
});
</script>