<template>
    <div id="Container">
        <div id="Contents">
            <div class = "main_full_banner">
                <div class="banner_wrap slick_slider slick-initialized slick-slider" id="mainFullSlider">
                    <button type="button" data-role = "none" class="slick-prev slick-arrow" @click="prevSlide" aria-label="Previous" role="button" style="display: block;">이전 슬라이드</button>
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
                    <button type="button" data-role = "none" class="slick-next slick-arrow" @click="nextSlide" aria-label="Next" role="button" style="display: block;">다음 슬라이드</button>
                    <button id="mainSliderBtn" @click="toggleAutoSlide">{{ isPlaying ? '멈춤' : '재생' }}</button>
                    <p class="slick-paging">
                        <span class="cur_no">{{ currentIndex + 1 }}</span>/{{ slides.length }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, onUnmounted } from "vue";
import SlickSlideComponent from "./SlickSlideComponent.vue";
import "../assets/css/ContainerComponent.css"
import { setupSlider } from "@/assets/script/SliderControl";

export default defineComponent({
    name: "ContainerComponent",
    components: {
        SlickSlideComponent
    },
    setup() {
        const slides = ref([
            { image: "../assets/img/slick01.jpg", title: "올영PICK", description: "올리브영이 PICK한\n이 달의 브랜드\n4일 특가 & 올리브 키트 증정" },
            { image: "../assets/img/slick02.jpg", title: "스킨케어 추천", description: "촉촉한 겨울 피부를 위한\n베스트 스킨케어 제품" },
            { image: "../assets/img/slick03.jpg", title: "신상품 입고", description: "최신 트렌드 뷰티 제품\n올리브영에서 만나보세요" },
            { image: "../assets/img/slick04.jpg", title: "세일 이벤트", description: "한정 특가 세일!\n놓치면 후회할 가격" },
            { image: "../assets/img/slick05.jpg", title: "뷰티 트렌드", description: "2025년 최신 뷰티 트렌드\n올리브영에서 확인하세요" }
        ]);
        
        const currentIndex = ref(0);
        const isPlaying = true;

        const { nextSlide, prevSlide, startAutoSlide, stopAutoSlide, toggleAutoSlide } = setupSlider(
            slides.value.length,
            () => currentIndex.value,
            (index) => (currentIndex.value = index)
        );

        onMounted(() => startAutoSlide());
        onUnmounted(() => stopAutoSlide());

        return { slides, currentIndex, isPlaying, nextSlide, prevSlide, toggleAutoSlide };
    }
});
</script>