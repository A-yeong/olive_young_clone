<template>
    <div class="header_inner">
            <h1>
                <a href="https://www.oliveyoung.co.kr/store/main/main.do?oy=0">
                    <img src="../assets/img/logo.png">
                </a>
            </h1>
            <div class="search_box" id="w_search_box">
                <input type="hidden" name="chkButton" id="chkButton" value>
                <input type="text" id="query" class="header_search_input" placeholder="상품, 브랜드, 성분 검색" autocomplete="off">
                <button class="btn_delete" id="search_delete" style="display: none;">검색어 삭제</button>
                <button id="searchSubmit">검색</button>
            </div>
            <ul class="mymenu_area">
                <li id="todayDeliveryContainer" class="delivery">
                    <a href="https://www.oliveyoung.co.kr/store/main/main.do?oy=0" id="tddlvr_header_today_icon" class="mymenu_layer" title="오늘드림 자세히 보기 열기/닫기">오늘드림</a>
                    <div class="tooltip" id="todayDeliveryTooltip" style="display: none;">오늘드림 상세 정보</div>
                </li>
                <li id="store">
                    <a href="https://www.oliveyoung.co.kr/store/main/main.do?oy=0" class="mymenu_layer" title="올영매장찾기 자세히보기 열기/닫기">올영매장찾기</a>
                    <div class="alim_box" id="store_alim_box" style="display: none;">
                        <p class="store_desc">
                            "지금 찾는 상품, "
                            <span>가까운 매장에서 재고 확인</span>
                            <br>
                            "올영매장에서 재고 확인하고, 빠르게 픽업 주문까지!"
                        </p>
                        <button class="mymenu_btn" onclick="">로그인</button>
                    </div>
                </li>
                <li id="recent">
                    <a onclick="" href="https://www.oliveyoung.co.kr/store/main/main.do?oy=0" class="mymenu_layer" title="최근 본 상품 자세히 보기 열기/닫기">최근 본 상품</a>
                    <!--
                    <div class="recent_prd_box" style="min-height: 510px;">
                        <p class="recent_tit">
                            "전체"
                            <span>0</span>
                            "개 "
                        </p>
                        <div class="no_data" style="display: none;">최근 본 상품이 없습니다.</div>
                    </div>
                    -->
                </li>
            </ul>
        </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import "../assets/css/HeaderInnerComponent.css";
import { setupEventListeners } from "@/assets/script/HeaderInnerComponent";

export default defineComponent({
    name: "HeaderInnerComponent",
    components: {},
    mounted() {
        setupEventListeners();
    }
});
</script>