<template>
    <div id="Container">
        <div id="Contents">
            <div class = "main_full_banner">
                <div class="banner_wrap slick_slider slick-initialized slick-slider" id="mainFullSlider">
                    <button type="button" data-role = "none" class="slick-prev slick-arrow" aria-label="Previous" role="button" style="display: block;">이전 슬라이드</button>
                    <div aria-live="polite" class="slick-list draggable">
                        <div class="slick-track" role="listbox" style="opacity: 1; width: 19524px;"></div>
                    </div>
                    <button type="button" data-role = "none" class="slick-next slick-arrow" aria-label="Next" role="button" style="display: block;">다음 슬라이드</button>
                    <button id="mainSliderBtn">멈춤</button>
                    <p class="slick-paging">
                        <span class="cur_no">0</span>/12
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import SlickSlideComponent from "./SlickSlideComponent.vue";
import "../assets/css/ContainerComponent.css"

export default defineComponent({
    name: "ContainerComponent",
    components: {
        
    }
});
</script>