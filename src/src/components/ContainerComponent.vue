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
                                :imgDesc="slide.imgDesc"
                                :title="slide.title"
                                :description1="slide.description1"
                                :description2="slide.description2"
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
            { image: require('@/assets/img/slick01.jpg'), imgDesc: "올리브영키트 4일 특가", title: "올영PICK", description1 : "올리브영이 PICK한\n이 달의 브랜드\n4일 특가 & 올리브 키트 증정", description2: "4일 특가 & 올리브 키트 증정" },
            { image: require('@/assets/img/slick02.jpg'), imgDesc: "올리브영키트 4일 특가", title: "스킨케어 추천", description1: "촉촉한 겨울 피부를 위한\n베스트 스킨케어 제품", description2: "4일 특가 & 올리브 키트 증정"  },
            { image: require('@/assets/img/slick03.jpg'), imgDesc: "올리브영키트 4일 특가", title: "신상품 입고", description1: "최신 트렌드 뷰티 제품\n올리브영에서 만나보세요", description2: "4일 특가 & 올리브 키트 증정"  },
            { image: require('@/assets/img/slick04.jpg'), imgDesc: "올리브영키트 4일 특가", title: "세일 이벤트", description1: "한정 특가 세일!\n놓치면 후회할 가격", description2: "4일 특가 & 올리브 키트 증정"  },
            { image: require('@/assets/img/slick05.jpg'), imgDesc: "올리브영키트 4일 특가", title: "뷰티 트렌드", description1: "2025년 최신 뷰티 트렌드\n올리브영에서 확인하세요", description2: "4일 특가 & 올리브 키트 증정"  }
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