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
                <button class="btn_delete" id="search_delete" style="display: none;">검색어 삭제제</button>
                <button id="searchSubmit">검색</button>
            </div>
        </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import "../assets/css/HeaderInnerComponent.css";

export default defineComponent({
    name: "HeaderInnerComponent",
    components: {}
});
</script>