<template>
    <div id="Header">
        <div class="top_util">
        <ul class="menu_list" id="menu_list_header">
            <li class="join">
                <a href="https://www.oliveyoung.co.kr/store/main/main.do?oy=0&t_page=%EB%A1%9C%EA%B7%B8%EC%9D%B8&t_click=%ED%97%A4%EB%8D%94&t_header_type=%EB%A1%9C%EA%B3%A0">회원가입</a>
            </li>
            <li class="login">
                <a href="https://www.oliveyoung.co.kr/store/main/main.do?oy=0&t_page=%EB%A1%9C%EA%B7%B8%EC%9D%B8&t_click=%ED%97%A4%EB%8D%94&t_header_type=%EB%A1%9C%EA%B3%A0">로그인</a>
            </li>
            <li class="cart">
                <a href="https://www.oliveyoung.co.kr/store/main/main.do?oy=0&t_page=%EB%A1%9C%EA%B7%B8%EC%9D%B8&t_click=%ED%97%A4%EB%8D%94&t_header_type=%EB%A1%9C%EA%B3%A0">장바구니</a>
            </li>
            <li class="order">
                <a href="https://www.oliveyoung.co.kr/store/main/main.do?oy=0&t_page=%EB%A1%9C%EA%B7%B8%EC%9D%B8&t_click=%ED%97%A4%EB%8D%94&t_header_type=%EB%A1%9C%EA%B3%A0">주문배송</a>
            </li>
            <li class="customer">
                <a href="https://www.oliveyoung.co.kr/store/main/main.do?oy=0&t_page=%EB%A1%9C%EA%B7%B8%EC%9D%B8&t_click=%ED%97%A4%EB%8D%94&t_header_type=%EB%A1%9C%EA%B3%A0">고객센터</a>
            </li>
            <li class="store">
                <a href="https://www.oliveyoung.co.kr/store/main/main.do?oy=0&t_page=%EB%A1%9C%EA%B7%B8%EC%9D%B8&t_click=%ED%97%A4%EB%8D%94&t_header_type=%EB%A1%9C%EA%B3%A0">올영매장</a>
            </li>
            <li class="global">
                <a href="https://www.oliveyoung.co.kr/store/main/main.do?oy=0&t_page=%EB%A1%9C%EA%B7%B8%EC%9D%B8&t_click=%ED%97%A4%EB%8D%94&t_header_type=%EB%A1%9C%EA%B3%A0">Global</a>
            </li>
        </ul>
    </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import "../assets/css/HeaderComponent.css";

export default defineComponent({
    name: 'HeaderComponent',
    components: {
    }
})
</script>