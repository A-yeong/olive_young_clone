<template>
    <div id="Gnb" class="main gen1">
        <div id="gnbWrap">
            <a href="#" id="btnGnbOpen">카테고리</a>
            <div class="layer_all_menu" id="gnbAllMenu">
                <ul class="all_menu_wrap">
                    <li>
                        <h2>뷰티</h2>
                        <div class="sub_menu_box">
                            <SubMenu
                                v-for="(subMenu, index) in beautyMenus1"
                                :key="index"
                                :title="subMenu.title"
                                :items="subMenu.items"
                            />
                        </div>
                        <div class="sub_menu_box">
                            <SubMenu
                                v-for="(subMenu, index) in beautyMenus2"
                                :key="index"
                                :title="subMenu.title"
                                :items="subMenu.items"
                            />
                        </div>
                        <div class="sub_menu_box">
                            <SubMenu
                                v-for="(subMenu, index) in beautyMenus3"
                                :key="index"
                                :title="subMenu.title"
                                :items="subMenu.items"
                            />
                        </div>
                    </li>
                    <li>
                        <h2>헬스&푸드</h2>
                        <div class="sub_menu_box">
                            <SubMenu
                                v-for="(subMenu, index) in healthMenus1"
                                :key="index"
                                :title="subMenu.title"
                                :items="subMenu.items"
                            />
                        </div>
                        <div class="sub_menu_box">
                            <SubMenu
                            v-for="(subMenu, index) in healthMenus2"
                            :key="index"
                            :title="subMenu.title"
                            :items="subMenu.items"
                            />
                        </div>
                    </li>
                    <li>
                        <h2>라이프</h2>
                        <div class="sub_menu_box">
                            <SubMenu
                                v-for="(subMenu, index) in lifeMenus"
                                :key="index"
                                :title="subMenu.title"
                                :items="subMenu.items"
                            />
                        </div>
                    </li>
                </ul>
                <button id="btnGnbClose"></button>
            </div>
            <ul class="gnb_menu_list">
                <li>
                    <a onclick="">
                        <span>오특</span>
                    </a>
                </li>
                <li>
                    <a onclick="">
                        <span>랭킹</span>
                    </a>
                </li>
                <li>
                    <a onclick="">
                        <span>헬스+</span>
                    </a>
                </li>
                <li>
                    <a onclick="">
                        <span>LUXE EDIT</span>
                    </a>
                </li>
                <li>
                    <a onclick="">
                        <span>기획전</span>
                    </a>
                </li>
                <li>
                    <a onclick="">
                        <span>세일</span>
                    </a>
                </li>
                <li>
                    <a onclick="">
                        <span>기프트카드</span>
                    </a>
                </li>
                <li>
                    <a onclick="">
                        <span>멤버십/쿠폰</span>
                    </a>
                </li>
                <li>
                    <a onclick="">
                        <span>이벤트</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import "../assets/css/GnBComponent.css";
import { setupEventListeners } from '../assets/script/GnBComponent';
import SubMenu from './SubMenu.vue';

export default defineComponent({
    name: 'GnBComponent',
    components:{
        SubMenu
    },
    mounted() {
        setupEventListeners()
    },
    data() {
        return{
            beautyMenus1: [
                {
                    title: "스킨케어",
                    items: [
                        { name: "스킨/토너", link: "#" },
                        { name: "에센스/세럼/앰플", link: "#" },
                        { name: "크림", link: "#" },
                        { name: "로션", link: "#" },
                        { name: "미스트/오일", link: "#" },
                        { name: "스킨케어세트", link: "#" },
                    ],
                },
                {
                    title: "마스크팩",
                    items: [
                        { name: "시트팩", link: "#" },
                        { name: "패드", link: "#" },
                        { name: "페이셜팩", link: "#" },
                        { name: "코팩", link: "#" },
                        { name: "패치", link: "#" },
                    ],
                },
                {
                    title: "클렌징",
                    items: [
                        { name: "클렌징폼/젤", link: "#" },
                        { name: "오일/밤", link: "#" },
                        { name: "워터/밀크", link: "#" },
                        { name: "필링&스크럽", link: "#" },
                        { name: "티슈/패드", link: "#" },
                        { name: "립&아이리무버", link: "#" },
                    ],
                },
                {
                    title: "선케어",
                    items: [
                        { name: "선크림", link: "#" },
                        { name: "선스틱", link: "#" },
                        { name: "선쿠션", link: "#" },
                        { name: "선스프레이/선패치", link: "#" },
                        { name: "태닝/애프터선", link: "#" },
                    ],
                },
            ],
            beautyMenus2: [
                {
                    title: "메이크업",
                    items: [
                        { name: "립메이크업", link: "#" },
                        { name: "베이스메이크업", link: "#" },
                        { name: "아이메이크업", link: "#" },
                    ],
                },
                {
                    title: "뷰티소품",
                    items: [
                        { name: "메이크업소품", link: "#" },
                        { name: "스킨케어소품", link: "#" },
                        { name: "아이소품", link: "#" },
                        { name: "헤어/바디소품", link: "#" },
                        { name: "괄사/네일소품", link: "#" },
                        { name: "뷰티디바이스", link: "#" },
                        { name: "뷰티잡화", link: "#" },
                    ],
                },
                {
                    title: "더모 코스메틱",
                    items: [
                        { name: "스킨케어", link: "#" },
                        { name: "바디케어", link: "#" },
                        { name: "클렌징", link: "#" },
                        { name: "선케어", link: "#" },
                        { name: "마스크팩", link: "#" },
                    ],
                },
                {
                    title: "맨즈케어",
                    items: [
                        { name: "스킨케어", link: "#" },
                        { name: "메이크업", link: "#" },
                        { name: "쉐이빙", link: "#" },
                        { name: "헤어케어", link: "#" },
                        { name: "바디케어", link: "#" },
                        { name: "프래그런스/라이프", link: "#"},
                    ],
                },
            ],
            beautyMenus3: [
                {
                    title: "헤어케어",
                    items: [
                        { name: "샴푸/린스", link: "#" },
                        { name: "트리트먼트/팩", link: "#" },
                        { name: "헤어에센스", link: "#" },
                        { name: "염색약/펌", link: "#" },
                        { name: "헤어기기/브러시", link: "#" },
                        { name: "스타일링", link: "#" },
                    ],
                },
                {
                    title: "바디케어",
                    items: [
                        { name: "로션/오일", link: "#" },
                        { name: "샤워/입욕", link: "#" },
                        { name: "립케어", link: "#" },
                        { name: "핸드케어", link: "#" },
                        { name: "바디미스트", link: "#" },
                        { name: "제모/왁싱", link: "#" },
                        { name: "데오드란트", link: "#" },
                        { name: "선물세트", link: "#" },
                        { name: "베이비", link: "#" },
                    ],
                },
                {
                    title: "향수/디퓨저",
                    items: [
                        { name: "여성향수", link: "#" },
                        { name: "남성향수", link: "#" },
                        { name: "유니섹스향수", link: "#" },
                        { name: "미니/고체향수", link: "#" },
                        { name: "홈프래그런스", link: "#" },
                    ],
                },
                {
                    title: "네일",
                    items: [
                        { name: "일반네일", link: "#" },
                        { name: "젤네일", link: "#" },
                        { name: "네일팁/스티커", link: "#" },
                        { name: "네일케어어", link: "#" },
                    ],
                },
            ],
            healthMenus1: [
                {
                    title: "건강식품",
                    items: [
                        { name: "비타민", link: "#" },
                        { name: "유산균", link: "#" },
                        { name: "영양제", link: "#" },
                        { name: "슬리밍", link: "#" },
                        { name: "이너뷰티", link: "#" },
                    ],
                },
                {
                    title: "푸드",
                    items: [
                        { name: "식단관리/이너뷰티", link: "#" },
                        { name: "과자/초콜릿/디저트", link: "#" },
                        { name: "생수/음료/커피", link: "#" },
                        { name: "간편식/요리", link: "#" },
                        { name: "베이비푸드", link: "#" },
                    ],
                },
            ],
            healthMenus2: [
                {
                    title: "구강용품",
                    items: [
                        { name: "칫솔", link: "#" },
                        { name: "치약", link: "#" },
                        { name: "애프터구강케어", link: "#" },
                        { name: "휴대용세트", link: "#" },
                        { name: "구강가전전", link: "#" },
                    ],
                },
                {
                    title: "헬스/건강용품품",
                    items: [
                        { name: "패치/겔", link: "#" },
                        { name: "눈 관리 용품", link: "#" },
                        { name: "생활/의료", link: "#" },
                        { name: "마사지/헬스용품", link: "#" },
                        { name: "풋케어", link: "#" },
                    ],
                },
                {
                    title: "여성용품",
                    items: [
                        { name: "생리/위생용품", link: "#" },
                        { name: "Y존케어", link: "#" },
                        { name: "성인용품", link: "#" },
                        { name: "마사지젤/오일", link: "#" },
                        { name: "테스트기", link: "#" },
                        { name: "성인용 기저귀", link: "#" },
                    ],
                },
            ],
            lifeMenus: [
                {
                    title: "패션",
                    items: [
                        { name: "언더웨어", link: "#" },
                        { name: "홈웨어", link: "#" },
                        { name: "액티브웨어", link: "#" },
                        { name: "패션잡화", link: "#" },
                    ],
                },
                {
                    title: "리빙/가전",
                    items: [
                        { name: "방향/탈취", link: "#" },
                        { name: "세제/청소", link: "#" },
                        { name: "홈데코/배스", link: "#" },
                        { name: "가전", link: "#" },
                        { name: "베이비", link: "#" },
                        { name: "제지류", link: "#" },
                        { name: "반려동물", link: "#" },
                    ],
                },
                {
                    title: "취미/팬시",
                    items: [
                        { name: "디지털/기기", link: "#" },
                        { name: "문구/팬시", link: "#" },
                        { name: "음반", link: "#" },
                    ],
                },
            ],
        }
    }

})
</script>