/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/styles/main.sass":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/styles/main.sass ***!
  \*******************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
html {
  overflow-x: hidden;
}

body {
  font-family: intro-geo, sans-serif;
  font-size: 16px;
  line-height: 1.65;
  color: #333;
  min-width: 320px;
  position: relative;
  overflow-x: hidden;
}

.container-xxl {
  max-width: 1310px;
}

.socials {
  display: flex;
}
.socials__items {
  display: flex;
  align-items: center;
}
.socials__item {
  display: block;
  padding: 5px 11px;
  line-height: 1;
}
.socials__icon {
  max-width: 24px;
}
.socials__hint {
  display: inline-block;
  position: relative;
  min-width: 162px;
  padding: 10px 15px 10px 15px;
  font-size: 14px;
  line-height: 1;
  color: #9CB7D9;
  text-align: center;
  border: 1px solid #4772A7;
  border-radius: 4px;
  margin-left: 14px;
}
.socials__hint::before, .socials__hint::after {
  content: "";
  display: block;
  position: absolute;
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-right: 8px solid #4772A7;
  border-bottom: 8px solid transparent;
}
.socials__hint::after {
  border-right-color: #002F55;
  right: calc(100% - 2px);
}
.socials_border .socials__item:not(:last-child) {
  border-right: 1px solid rgba(255, 255, 255, 0.33);
}

.btn {
  display: inline-block;
  background-color: #A62318;
  font-family: raleway-geo, sans-serif;
  font-size: 14px;
  font-weight: 800;
  line-height: 1.42;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #fff;
  border: 2px solid #fff;
  border-radius: 4px;
  padding: 15px 20px;
  text-decoration: none;
  transition: background-color 0.25s ease;
  text-align: center;
}
.btn:hover {
  background-color: #bc281b;
  color: #fff;
}
.btn_outline_secondary {
  border-color: #4772A7;
  background-color: transparent;
}
.btn_outline_secondary:hover {
  background-color: #4772A7;
}

.main-title {
  font-size: 60px;
  font-weight: 900;
  line-height: 1;
}

.section-title {
  font-size: 45px;
  font-weight: 900;
  letter-spacing: -0.03em;
  line-height: 1.17;
  margin-bottom: 10px;
  color: #000;
}

.section-description {
  font-family: raleway-geo, sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.15;
  color: #000;
}

.title {
  font-size: 21px;
  font-weight: 900;
  line-height: 1.23;
  letter-spacing: 0.01em;
  text-transform: uppercase;
}

.section {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 70px 0;
}
.section__headline {
  text-align: center;
  margin-bottom: 30px;
}
.section__spiral-wrap {
  margin-top: 30px;
}
.section_inverse {
  color: #fff;
}
.section_inverse .section-title, .section_inverse .section-description {
  color: #fff;
}

.slider {
  position: relative;
}
.slider__arrows {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: 0;
}
.slider__nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 41px;
  height: 79px;
  stroke: #4772A7;
  cursor: pointer;
  filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.4));
  padding: 12px;
}
.slider__nav_prev {
  left: -85px;
}
.slider__nav_next {
  right: -85px;
}
.slider_white .slider__nav {
  stroke: #fff;
}

.slider-showcase__arrows {
  position: relative;
  transform: none;
}
.slider-showcase__nav {
  top: auto;
  transform: none;
  bottom: 135px;
}
.slider-showcase__nav_prev {
  left: -12px;
}
.slider-showcase__nav_next {
  right: -12px;
}

.item-showcase {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 800px;
  color: #fff;
  text-align: center;
  padding-bottom: 115px;
}
.item-showcase__container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.section-benefits {
  position: relative;
  padding: 70px 0 163px;
}
.section-benefits::before {
  content: "";
  display: block;
  width: 95px;
  height: 159px;
  position: absolute;
  left: 50%;
  bottom: -66px;
  transform: translateX(-50%);
}
.section-benefits .benefits {
  position: relative;
  z-index: 2;
}

.benefits {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 -10px;
}
.benefits__item {
  padding: 0 10px;
  flex: 0 0 30%;
  max-width: 30%;
  margin-bottom: 20px;
}
.benefits__item.item-benefit_lg {
  flex: 0 0 40%;
  max-width: 40%;
}
.benefits__item:nth-child(1n) .item-benefit__inner {
  background-color: #4772A7;
}
.benefits__item:nth-child(2n) .item-benefit__inner {
  background-color: #002F55;
}
.benefits__item:nth-child(3n) .item-benefit__inner {
  background-color: #aba385;
}
.benefits__item:nth-child(4n) .item-benefit__inner {
  background-color: #606060;
}
.benefits__item:nth-child(5n) .item-benefit__inner {
  background-color: #A62318;
}

.item-benefit {
  min-height: 260px;
}
.item-benefit__inner {
  background-color: #4772A7;
  padding: 28px 10px 10px;
  border-radius: 4px;
  font-family: raleway-geo, sans-serif;
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.item-benefit__icon {
  max-width: 130px;
  margin: 0 auto 10px;
}
.item-benefit__title {
  color: #fff;
  margin-bottom: 10px;
}
.item-benefit__text {
  font-size: 17px;
  font-weight: 500;
  line-height: 1.23;
  color: #E4D8BC;
  margin-bottom: 10px;
}

.section-tours {
  padding-top: 96px;
}

.tours {
  margin-left: -10px;
  margin-right: -10px;
}
.tours__item {
  padding: 0 10px;
  margin-bottom: 20px;
}

.item-tour__inner {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: block;
  border-radius: 4px;
  overflow: hidden;
  text-decoration: none;
  min-height: 240px;
  position: relative;
}
.item-tour__inner:hover .item-tour__bg {
  transform: scale(1.1);
}
.item-tour__bg-wrap {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.item-tour__bg {
  object-fit: cover;
  width: 100%;
  transition: transform 0.5s ease;
}
.item-tour__content {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 10px 18px 17px 19px;
  width: 210px;
  background-color: rgba(0, 0, 0, 0.6);
  min-height: inherit;
  position: relative;
  z-index: 2;
  margin-left: auto;
}
.item-tour__title {
  color: #fff;
}
.item-tour__text {
  font-family: ibm-geo, sans-serif;
  font-style: italic;
  line-height: 1.25;
  color: #BDD0E8;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
}
.item-tour__text:last-child {
  margin-bottom: 0;
}
.item-tour__btn {
  align-self: flex-start;
}
.item-tour_stock .item-tour__inner {
  min-height: 300px;
}
.item-tour_stock .item-tour__content {
  width: 265px;
}

.link {
  display: inline-flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.03em;
  color: #4772A7;
  text-transform: uppercase;
  text-decoration: none;
  transition: color 0.25s ease;
}
.link:hover {
  color: #648cbd;
}
.link:hover .link__icon {
  stroke: #648cbd;
}
.link__icon {
  width: 16px;
  height: 16px;
  margin-right: 11px;
  fill: none;
  stroke: #4772A7;
  transition: stroke 0.25s ease;
}
.link_accent {
  color: #A62318;
}
.link_accent .link__icon {
  stroke: #A62318;
}
.link_accent:hover {
  color: #d32c1e;
}
.link_accent:hover .link__icon {
  stroke: #d32c1e;
}

.badge {
  display: inline-flex;
  align-items: center;
  background-color: #4772A7;
  padding: 7px 15px;
  font-family: ibm-geo, sans-serif;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.53;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #fff;
}
.badge_success {
  background-color: #0ab14a;
}
.badge_secondary-light {
  background-color: #BDD0E8;
}

.section-placing__link-wrap {
  margin-top: 20px;
}

.slider-placing .slick-list {
  margin: 0 -7.5px;
  padding-bottom: 15px;
}
.slider-placing__item {
  margin: 0 7.5px;
}

.item-placing {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  border-radius: 4px;
  color: #fff;
  height: 285px;
}
.item-placing:hover .item-placing__content {
  opacity: 1;
  visibility: visible;
}
.item-placing__content {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 4px;
  text-align: center;
  padding: 25px 25px 32px;
  height: 100%;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.25s ease, visibility 0.25s ease;
}
.item-placing__text {
  font-family: ibm-geo, sans-serif;
  font-style: italic;
  line-height: 1.25;
  margin-bottom: 13px;
}
.item-placing__badge {
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
}
.item-placing__link {
  font-weight: normal;
  color: #9CB7D9;
}
.item-placing__link .link__icon {
  margin-right: 7px;
  stroke: #9CB7D9;
}

.blog__items {
  margin-left: -10px;
  margin-right: -10px;
}
.blog__card {
  padding: 0 10px;
  margin-bottom: 20px;
}
.blog__link-wrap {
  margin-top: 10px;
}

.card-blog__inner {
  height: 100%;
  display: flex;
  flex-direction: column;
  color: #333;
  text-decoration: none;
  border-radius: 4px;
  overflow: hidden;
}
.card-blog__img-wrap {
  position: relative;
  display: flex;
}
.card-blog__img-wrap::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: linear-gradient(360deg, rgba(0, 0, 0, 0.63) 0%, rgba(0, 0, 0, 0) 54.39%);
}
.card-blog__img {
  width: 100%;
  height: 285px;
  object-fit: cover;
}
.card-blog__title {
  color: #fff;
  position: absolute;
  z-index: 2;
  bottom: 12px;
  left: 26px;
  right: 26px;
  margin-bottom: 0;
}
.card-blog__content {
  height: 100%;
  background-color: #f4f4f4;
  font-family: ibm-geo, sans-serif;
  font-style: italic;
  line-height: 1.25;
  color: #333;
  padding: 13px 26px 26px;
}

.form-mailing {
  max-width: 600px;
  margin: 0 auto;
}
.form-mailing__row {
  display: flex;
}
.form-mailing__control {
  margin-right: 20px;
}

.notice {
  text-align: center;
  background-color: #4772A7;
  color: #fff;
  padding: 10px;
  margin: 0 10px 15px;
}
.notice p {
  margin-bottom: 0;
}
.notice_success {
  background-color: #0ab14a;
}
.notice_danger {
  background-color: #A62318;
}

.follow-us {
  text-align: center;
}
.follow-us__text {
  font-family: raleway-geo, sans-serif;
  font-size: 20px;
  font-weight: 500;
  text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);
  margin-bottom: 25px;
}
.follow-us__socials {
  display: flex;
  justify-content: center;
}
.follow-us__item {
  margin: 0 15px;
}

.item-follow-us {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 4px;
  width: 90px;
  height: 90px;
  padding: 13px;
  transition: background-color 0.25s ease;
}
.item-follow-us:hover {
  background-color: rgba(0, 0, 0, 0.7);
}
.item-follow-us__icon {
  height: 63px;
}

.section-mailing .form-mailing {
  margin-bottom: 50px;
}

.section-places {
  padding: 0;
}

.item-place {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 100px 0 82px;
  color: #fff;
}
.item-place__container {
  position: relative;
  z-index: 2;
  text-align: center;
  font-family: raleway-geo, sans-serif;
}
.item-place__header {
  margin-bottom: 116px;
}
.item-place__title {
  text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);
  margin-bottom: 0;
}
.item-place__text {
  text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);
  font-size: 20px;
  font-weight: 500;
}
.item-place__subtitle {
  text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);
  font-weight: 900;
  font-size: 21px;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  margin-bottom: 15px;
}
.item-place_default {
  border-radius: 4px;
  min-height: 454px;
  display: flex;
  align-items: center;
  padding: 50px 10px;
}
.item-place_default::before {
  border-radius: 4px;
}
.item-place_default .item-place__container {
  width: 100%;
}
.item-place_default .item-place__text {
  font-size: 17px;
}

.banner {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 126px 0 30px;
  text-align: center;
  color: #fff;
}
.banner::before {
  background-color: rgba(0, 0, 0, 0.4);
}
.banner__title {
  margin-bottom: 0;
}
.banner__container {
  position: relative;
  z-index: 2;
}

.breadcrumbs__list {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.breadcrumbs__item {
  font-family: ibm-geo, sans-serif;
  font-style: italic;
  line-height: 1.25;
  display: inline;
}
.breadcrumbs__item + .breadcrumbs__item::before {
  content: "/";
  padding: 0 4px 0 1px;
}
.breadcrumbs a {
  color: #fff;
  text-decoration: none;
}

.filter__list {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.filter__item:hover a, .filter__item.filter__item_active a {
  background-color: #fff;
  color: #000;
}
.filter a {
  display: block;
  padding: 5px 10px;
  font-family: raleway-geo, sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-decoration: none;
  color: #4772A7;
  transition: background-color 0.25s ease, color 0.25s ease;
  outline: none;
}
.filter a:focus {
  background-color: #fff;
  color: #000;
}

.aside__block:not(:last-child) {
  margin-bottom: 70px;
}
.aside__divider {
  margin-bottom: 30px;
}

.page {
  background-color: #ebeff2;
  padding: 30px 0 70px;
}
.page.bg-white .card__spiral {
  fill: #ebebeb;
}
.page__filter {
  margin-bottom: 30px;
}
.page__pages {
  margin-bottom: 14px;
}
.page__navigation {
  margin-bottom: 14px;
}
.page__tabs {
  margin-bottom: 30px;
}
.page__title {
  letter-spacing: -0.03em;
  font-size: 32px;
  font-weight: 900;
  font-style: normal;
  margin-bottom: 30px;
}
.page__feedback {
  margin-top: 70px;
}
.page__block {
  margin-bottom: 30px;
}
.page__team {
  margin: 30px 0 0;
}
.page__slider-images {
  margin: 70px 0;
}
.page__super-map {
  margin-bottom: 70px;
}

.tabs {
  display: flex;
  flex-wrap: wrap;
}

.tab-btn {
  display: block;
  padding: 12px 20px;
  font-family: raleway-geo, sans-serif;
  font-size: 14px;
  font-weight: 800;
  line-height: 1.42;
  letter-spacing: 0.06em;
  color: #4772A7;
  text-decoration: none;
  text-transform: uppercase;
  transition: background-color 0.25s ease, color 0.25s ease;
  border-bottom: 1px solid #BDBDBD;
  outline: none;
}
.tab-btn:hover, .tab-btn.active, .tab-btn:focus {
  background-color: #F0F3F7;
  color: #000;
}

.tour-cards {
  margin-left: -10px;
  margin-right: -10px;
}
.tour-cards__card {
  padding: 0 10px;
  margin-bottom: 20px;
}

.card__inner {
  display: block;
  color: #000;
  text-decoration: none;
}
.card__inner:hover {
  color: #000;
}
.card__infos {
  display: flex;
  flex-wrap: wrap;
  margin-left: -10px;
  margin-right: -10px;
}
.card__info {
  margin: 0 10px 8px;
}
.card__img-wrap {
  margin-bottom: 10px;
}
.card__img {
  object-fit: cover;
  height: 202px;
  width: 100%;
  border-radius: 4px;
}
.card__content {
  margin-bottom: 20px;
}
.card__text-wrap {
  font-family: ibm-geo, sans-serif;
  font-style: italic;
  line-height: 1.25;
}
.card__text {
  margin-bottom: 8px;
}
.card_excursion .card__text-wrap {
  font-family: raleway-geo, sans-serif;
  font-style: normal;
  font-size: 17px;
}

.info-card {
  display: inline-flex;
  align-items: center;
  font-family: ibm-geo, sans-serif;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #828282;
}
.info-card__icon {
  margin-right: 10px;
}

.details-card {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -8px;
}
.details-card__item {
  font-family: raleway-geo, sans-serif;
  font-size: 17px;
  font-weight: 500;
  line-height: 1.23;
  padding: 0 8px;
}
.details-card__item:not(:last-child) {
  border-right: 1px solid #BDBDBD;
}
.details-card__icon {
  width: 15px;
}

.reviews__item {
  margin-bottom: 30px;
}
.reviews__item:last-child {
  margin-bottom: 10px;
}

.item-review__inner {
  display: flex;
  margin-bottom: 20px;
}
.item-review__img-wrap {
  flex: 0 0 180px;
  width: 180px;
  margin: 0 20px 0 0;
}
.item-review__img {
  height: 180px;
}
.item-review__infos {
  margin-bottom: 12px;
}
.item-review__title {
  margin-bottom: 10px;
}
.item-review__content {
  margin-bottom: 0;
}

.pages {
  font-family: ibm-geo, sans-serif;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #828282;
}
.pages__count {
  font-family: raleway-geo, sans-serif;
  font-size: 17px;
  font-weight: 500;
  text-transform: none;
  color: #000;
}

.page-navigation {
  font-family: raleway-geo, sans-serif;
}
.page-navigation__list {
  list-style-type: none;
  margin: 0 -13.5px;
  padding: 0;
  display: flex;
}
.page-navigation li {
  margin: 0 13.5px;
}
.page-navigation a {
  font-size: 17px;
  font-weight: 500;
  line-height: 1.23;
  color: #4772A7;
  text-decoration: none;
}
.page-navigation a:hover {
  text-decoration: underline;
}

.pagination {
  font-family: raleway-geo, sans-serif;
}
.pagination__list {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
}
.pagination li:hover a, .pagination li.active a {
  background-color: #fff;
  color: #000;
}
.pagination a {
  display: block;
  padding: 6px 13px 7px;
  font-size: 17px;
  font-weight: 500;
  line-height: 1.23;
  color: #4772A7;
  text-decoration: none;
  transition: background-color 0.25s ease, color 0.25s ease;
}

.links-page__item {
  margin-bottom: 30px;
}
.links-page__title {
  font-family: ibm-geo, sans-serif;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #000;
  margin-bottom: 20px;
}
.links-page__list {
  font-family: raleway-geo, sans-serif;
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.links-page li {
  font-size: 18px;
  font-weight: 900;
  letter-spacing: 0.01em;
  color: #4772A7;
  line-height: 1.25;
  text-transform: uppercase;
  overflow-wrap: break-word;
}
.links-page li:not(:last-child) {
  margin-bottom: 10px;
}
.links-page li.active a {
  color: #000;
}
.links-page a {
  color: #4772A7;
  text-decoration: none;
  transition: color 0.25s ease;
}
.links-page a:hover {
  color: #000;
}

.control, .select, .datepicker {
  width: 100%;
  background-color: #fff;
  padding: 8px 11px;
  border: 1px solid #bdbdbd;
  border-radius: 4px;
  font-family: raleway-geo, sans-serif;
  font-feature-settings: "lnum" 1;
  font-size: 17px;
  font-weight: 600;
  line-height: 1.24;
  color: #000;
  outline: none;
}

.control::placeholder {
  color: #828282;
}
.control_icon {
  padding: 8px 30px 8px 11px;
  background-repeat: no-repeat;
  background-position: calc(100% - 11px);
  background-size: auto 16px;
}
.control_mailing {
  padding: 15px 20px;
  border-color: #e0e0e0;
  font-size: 20px;
  font-weight: 500;
}
.control.error {
  border-color: #A62318;
}
.control.error::placeholder {
  color: #A62318;
}

.select {
  appearance: none;
  background-repeat: no-repeat;
  background-size: auto 16px;
  background-position: calc(100% - 11px);
  padding-right: 30px;
  cursor: pointer;
}

textarea {
  height: 150px;
  resize: none;
}

.file-selector {
  color: #A62318;
  cursor: pointer;
}
.file-selector__input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}
.file-selector_error {
  border-color: #A62318;
}

.file-img-wrap {
  display: flex;
  flex-direction: column;
  position: relative;
}
.file-img-wrap.selected {
  margin-bottom: 30px;
}
.file-img-wrap.selected .file-img {
  display: block;
}

.file-img {
  display: none;
  object-fit: cover;
  width: 60px;
  height: 60px;
  cursor: pointer;
  border-radius: 4px;
}

.file-text {
  font-family: raleway-geo, sans-serif;
  font-size: 17px;
  font-weight: 500;
  white-space: nowrap;
  color: #828282;
  position: absolute;
  top: calc(100% + 10px);
  margin-bottom: 0;
}

.checkbox {
  display: inline-flex;
  align-items: flex-start;
  position: relative;
  margin-bottom: 0;
  cursor: pointer;
}
.checkbox input {
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
}
.checkbox input:checked ~ .checkmark::before {
  opacity: 1;
}

.checkmark {
  display: flex;
  flex: 0 0 20px;
  width: 20px;
  height: 20px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: 1px solid #bdbdbd;
  border-radius: 4px;
  margin-right: 10px;
}
.checkmark::before {
  content: "";
  display: block;
  width: 14px;
  height: 14px;
  opacity: 0;
  transition: opacity 0.25s ease;
}

.label {
  display: block;
  font-family: ibm-geo, sans-serif;
  font-size: 16px;
  font-style: italic;
  line-height: 1.25;
  color: #828282;
  margin-bottom: 8px;
}

.counter {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 130px;
}
.counter__control {
  text-align: center;
  -moz-appearance: textfield;
  -webkit-appearance: none;
  width: 53px;
  padding-left: 8px;
  padding-right: 8px;
}
.counter__control::-webkit-outer-spin-button, .counter__control::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
.counter__btn {
  display: block;
  line-height: 20px;
  width: 24px;
  height: 24px;
  border-color: #A62318;
  color: #A62318;
  padding: 0;
}

.booking__header {
  background-color: #E4D8BC;
  padding: 14px 20px;
}
.booking__title {
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 0.06em;
  line-height: 1.42;
  text-transform: uppercase;
  color: #4f4f4f;
  margin-bottom: 0;
}
.booking__content {
  background-color: #f2ecde;
  padding: 20px 20px 18px;
}
.booking__controls {
  margin: 0 -5px;
}
.booking__group {
  position: relative;
  padding: 0 5px;
  margin-bottom: 20px;
}
.booking__group_less-margin {
  margin-bottom: 10px;
}
.booking__row {
  align-items: flex-end;
  margin-left: -10px;
  margin-right: -10px;
}
.booking__row_children {
  margin-bottom: 10px;
}
.booking__col {
  padding: 0 10px;
}
.booking__result {
  margin: 50px 0 30px;
}
.booking__btn {
  width: 100%;
}
.booking__duplicate {
  display: block;
  padding: 0;
  font-family: ibm-geo, sans-serif;
  font-size: 14px;
  font-style: italic;
  color: #A62318;
  text-decoration: underline;
  background: none;
  border: none;
  line-height: 1.42;
  transition: color 0.25s ease;
}
.booking__duplicate:hover {
  color: #d32c1e;
}
.booking .g-recaptcha {
  transform: scale(0.85);
  transform-origin: 0 0;
}

.result-booking__title {
  margin-bottom: 18px;
}
.result-booking__subtitle {
  font-family: ibm-geo, sans-serif;
  font-style: italic;
  font-size: 16px;
  font-weight: normal;
  line-height: 1.25;
  color: #828282;
}
.result-booking__item {
  margin-bottom: 10px;
}

.item-result {
  display: flex;
  align-items: flex-end;
  line-height: 1;
  color: #000;
}
.item-result__title {
  font-family: ibm-geo, sans-serif;
  font-style: italic;
  font-size: 16px;
}
.item-result__value {
  font-size: 17px;
  font-weight: 500;
}
.item-result__divider {
  flex-grow: 1;
  border-bottom: 1px dashed #828282;
  margin: 0 0 2px 7px;
}
.item-result_total {
  margin-top: 18px;
}
.item-result_total .item-result__value {
  font-size: 22px;
  font-weight: bold;
}

.slider-images-wrapper__inner {
  background-color: #000;
}

.slider-images-main__items {
  overflow: hidden;
}
.slider-images-main__items .slick-list {
  margin: 0 -10px;
  padding: 0 !important;
}
.slider-images-main__items .slider-images__item {
  margin: 0 10px 6px;
}
.slider-images-main__items_single .slider-images__item {
  margin-bottom: 0;
}
.slider-images-main__nav_prev {
  left: 0;
}
.slider-images-main__nav_next {
  right: 0;
}

.slider-images-thumbs__items {
  overflow: hidden;
  margin-bottom: -4px;
}
.slider-images-thumbs__items .slick-list {
  margin: 0 -5px;
  padding: 0 30px 0 0 !important;
}
.slider-images-thumbs__items .slider-images__item {
  margin: 0 1px;
}

.item-images {
  display: flex;
  color: #fff;
  text-decoration: none;
  position: relative;
}
.item-images:hover {
  color: #fff;
}
.item-images.slick-current, .item-images.slick-current-clone-animate {
  border-color: #4772A7;
}
.item-images__img {
  object-fit: cover;
  width: 100%;
  height: 455px;
  border-radius: 4px;
}
.item-images__title {
  position: absolute;
  left: 20px;
  right: 20px;
  bottom: 20px;
  text-align: center;
  z-index: 2;
  margin-bottom: 0;
}
.item-images_thumb {
  border: 4px solid transparent;
  border-radius: 8px;
  cursor: pointer;
  transition: border 0.25s ease;
}
.item-images_thumb .item-images__img {
  height: 120px;
}

.files-page__title {
  margin-bottom: 10px;
}
.files-page__text {
  font-family: raleway-geo, sans-serif;
  font-size: 17px;
  font-weight: 500;
  color: #000;
  line-height: 1.25;
  margin-bottom: 10px;
}
.files-page__item {
  margin-bottom: 12px;
}

.item-file__link {
  display: inline-flex;
  align-items: center;
  font-family: raleway-geo, sans-serif;
  font-size: 17px;
  font-weight: 600;
  line-height: 1.25;
  color: #000;
  transition: color 0.25s ease;
}
.item-file__link:hover {
  color: #A62318;
}
.item-file__icon {
  max-width: 13px;
  margin-right: 12px;
}

.feedback__row {
  display: flex;
  flex-wrap: wrap;
  margin-left: -10px;
  margin-right: -10px;
}
.feedback__col {
  margin-bottom: 20px;
  padding: 0 10px;
}
.feedback__col_file {
  flex: 0 0 173px;
  max-width: 173px;
}
.feedback__col_name, .feedback__col_program, .feedback__col_email {
  flex: 0 0 299px;
  max-width: 299px;
}
.feedback__col_season {
  flex: 0 0 155px;
  max-width: 155px;
}
.feedback__col_year {
  flex: 0 0 123px;
  max-width: 123px;
}
.feedback__col_phone {
  flex: 0 0 240px;
  max-width: 240px;
}
.feedback__col_textarea, .feedback__col_captcha {
  flex: 0 0 100%;
  max-width: 100%;
}
.feedback__btn {
  width: 279px;
}
.feedback__title {
  margin-bottom: 10px;
}

.section-map {
  position: relative;
}
.section-map__map {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.section-map__map iframe {
  border: none;
  width: 100%;
  height: 100%;
}
.section-map__container {
  z-index: 2;
  color: #fff;
}
.section-map__inner {
  max-width: 390px;
  position: relative;
  padding: 70px 30px 70px 0;
}
.section-map__inner::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  left: -9999px;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
}
.section-map__content {
  position: relative;
  z-index: 2;
}
.section-map__title, .section-map__text {
  color: #fff;
  text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);
}
.section-map__title {
  margin-bottom: 30px;
}
.section-map__text-wrap {
  margin-bottom: 43px;
}

.team__items {
  margin-bottom: -20px;
}
.team__title {
  margin-bottom: 30px;
}
.team__item {
  margin-bottom: 20px;
}
.team_lg .team__items {
  margin-left: -35px;
  margin-right: -35px;
  margin-bottom: -70px;
}
.team_lg .team__item {
  padding: 0 35px;
  margin-bottom: 70px;
}
.team_lg .item-team__inner {
  margin-bottom: 10px;
}
.team_lg .item-team__img-wrap {
  flex: 0 0 200px;
  width: 200px;
}
.team_lg .item-team__img {
  height: 200px;
}

.item-team__inner {
  display: flex;
  margin-bottom: 20px;
}
.item-team__img-wrap {
  display: flex;
  flex: 0 0 150px;
  width: 150px;
  margin: 0 20px 0 0;
}
.item-team__img {
  object-fit: cover;
  width: 100%;
  height: 150px;
}
.item-team__content {
  display: flex;
  flex-direction: column;
}
.item-team__title {
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;
}
.item-team__position {
  font-family: ibm-geo, sans-serif;
  font-size: 16px;
  font-style: italic;
  line-height: 1.25;
  margin-bottom: 10px;
}
.item-team__text-wrap {
  font-family: ibm-geo, sans-serif;
  font-size: 14px;
  font-style: italic;
  line-height: 1.42;
  color: #000;
}
.item-team__text:last-child {
  margin-bottom: 0;
}
.item-team__contacts {
  margin-top: auto;
}
.item-team__contact:not(:last-child) {
  margin-bottom: 10px;
}
.item-team__contact .item-contact__value {
  font-weight: 500;
}
.item-team__socials {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -5px 5px;
}
.item-team__social {
  display: block;
  flex: 0 0 17px;
  width: 17px;
  height: 17px;
  margin: 0 5px 5px;
}
.item-team__social-icon {
  vertical-align: top;
}

.custom-scrollbar-horizontal::-webkit-scrollbar-track {
  background: #fff;
}
.custom-scrollbar-horizontal::-webkit-scrollbar {
  height: 2px;
  width: 200px;
}
.custom-scrollbar-horizontal::-webkit-scrollbar-thumb {
  background: #A62318;
}
.custom-scrollbar-horizontal::-webkit-scrollbar-thumb:hover {
  background: #e0382a;
}

.table-wrap {
  overflow-x: auto;
  padding-bottom: 12px;
  margin-top: 30px;
}

.table {
  min-width: 900px;
  width: 100%;
}
.table thead td {
  font-family: raleway-geo, sans-serif;
  font-size: 20px;
  font-weight: 500;
  font-style: normal;
  text-align: center;
}
.table td {
  border: 1px solid #fff;
  padding: 10px;
}

.contacts__items {
  display: flex;
  flex-wrap: wrap;
  margin-left: -10px;
  margin-right: -10px;
}
.contacts__item {
  max-width: 300px;
  padding: 0 10px;
  margin-bottom: 20px;
}
.contacts__title {
  margin-bottom: 10px;
}

.item-contact {
  line-height: 1;
}
.item-contact__title {
  margin-bottom: 10px;
}
.item-contact__value {
  display: inline-flex;
  align-items: center;
  font-family: raleway-geo, sans-serif;
  font-feature-settings: "lnum" 1;
  font-size: 17px;
  font-weight: 600;
  line-height: 1.23;
  color: #000;
  text-decoration: none;
  transition: color 0.25s ease;
}
.item-contact__value:hover {
  color: #A62318;
}
.item-contact__icon {
  flex: 0 0 17px;
  width: 17px;
  margin-right: 10px;
}

.message {
  padding: 0;
  width: 500px;
  border-radius: 4px;
}
.message__inner {
  min-height: 376px;
  padding: 30px 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 2;
  color: #fff;
  text-align: center;
}
.message__title {
  font-family: raleway-geo, sans-serif;
  font-weight: 900;
  font-size: 32px;
  text-transform: none;
  letter-spacing: -0.03em;
}

.fancybox-message .fancybox-slide--html {
  padding: 0;
}

.fancybox-close-small {
  width: 68px;
  height: 68px;
}

.fancybox-slide--html .fancybox-close-small {
  color: #A62318;
}

.compensate-for-scrollbar {
  margin-right: 0 !important;
}

.content {
  font-family: ibm-geo, sans-serif;
  font-size: 18px;
  font-style: italic;
  line-height: 1.28;
}
.content h1, .content h2, .content h3, .content h4, .content h5, .content h6 {
  font-weight: 900;
  font-style: normal;
  letter-spacing: -0.03em;
  margin-bottom: 10px;
}
.content h1 {
  font-size: 36px;
}
.content h2 {
  font-size: 32px;
}
.content h3 {
  font-size: 26px;
}
.content h4 {
  font-size: 24px;
}
.content h5 {
  font-size: 22px;
}
.content h6 {
  font-size: 20px;
}
.content a {
  color: #A62318;
}
.content p {
  margin-bottom: 20px;
}
.content blockquote {
  margin-bottom: 30px;
}
.content .row p:last-child {
  margin-bottom: 0;
}

h1, h2, h3, h4, h5, h6 {
  font-family: raleway-geo, sans-serif;
}

blockquote {
  background-color: #fff;
  padding: 20px 46px;
  position: relative;
}
blockquote::before, blockquote::after {
  font-family: ibm-geo, sans-serif;
  font-size: 45px;
  font-style: italic;
  color: #A62318;
  position: absolute;
}
blockquote::before {
  content: "“";
  top: 5px;
  left: 10px;
}
blockquote::after {
  content: "”";
  bottom: -13px;
  right: 15px;
}

.footer {
  background-color: #002F55;
  color: #9CB7D9;
  padding: 70px 0 30px;
}
.footer__top {
  margin-bottom: 25px;
}
.footer__menu ul {
  margin: -5px -20px 0;
}
.footer__menu a {
  color: #fff;
}
.footer__menu li {
  margin: 5px 20px;
}
.footer__info {
  margin-bottom: 30px;
}
.footer__links {
  font-size: 15px;
  line-height: 1;
  margin-bottom: 0;
}
.footer__links a {
  color: #fff;
  text-decoration: none;
}
.footer__copyright {
  font-size: 15px;
  text-align: right;
  line-height: 1;
  margin-bottom: 0;
}

.info-footer__text {
  line-height: 1.31;
  margin-bottom: 0;
}
.info-footer__text a {
  color: #9CB7D9;
  text-decoration: none;
}

.cats-cards__row {
  margin-left: -10px;
  margin-right: -10px;
}
.cats-cards__card {
  padding: 0 10px;
  margin-bottom: 20px;
}

.card-cat__inner {
  color: #fff;
  text-decoration: none;
}
.card-cat__inner:hover {
  color: #fff;
}
.card-cat__img-wrap {
  display: flex;
}
.card-cat__img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
}
.card-cat__caption {
  background-color: #A62318;
  padding: 10px;
  text-align: center;
}
.card-cat__title {
  margin-bottom: 0;
}

.gallery__row {
  margin-left: -10px;
  margin-right: -10px;
}
.gallery__col {
  display: flex;
  flex-direction: column;
  padding: 0 10px;
}
.gallery__item {
  display: flex;
  margin-bottom: 20px;
  height: 100%;
}
.gallery__img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 4px;
}

.fancybox-bg {
  background: #000;
}

.parameters__item {
  margin-bottom: 20px;
}

.item-parameter__header {
  display: flex;
  align-items: flex-start;
  margin-bottom: 8px;
}
.item-parameter__icon {
  width: 20px;
  margin-right: 8px;
}
.item-parameter__title {
  font-size: 17px;
  margin-bottom: 0;
}
.item-parameter__list {
  padding-left: 25px;
  margin-bottom: 8px;
}
.item-parameter__badge {
  max-width: 130px;
  font-style: normal;
  padding: 2px 5px;
  margin-bottom: 2px;
}
.item-parameter__text-wrap {
  font-family: ibm-geo, sans-serif;
  font-size: 14px;
  font-style: italic;
  line-height: 1.43;
}

.conditions__block {
  margin-bottom: 20px;
}
.conditions__divider {
  margin-top: 0;
}
.conditions__items {
  margin-left: -10px;
  margin-right: -10px;
}
.conditions__item {
  padding: 0 10px;
  margin-bottom: 20px;
}

.item-condition__badge {
  display: flex;
  height: 100%;
  text-align: center;
  justify-content: center;
}

.parameters-booking__item {
  margin-bottom: 30px;
}

.item-parameters-booking__title {
  text-transform: none;
  margin-bottom: 10px;
}
.item-parameters-booking__text-wrap {
  font-family: ibm-geo, sans-serif;
  font-size: 18px;
  font-style: italic;
  line-height: 1.27;
}
.item-parameters-booking__text {
  margin-bottom: 10px;
}
.item-parameters-booking__text:last-child {
  margin-bottom: 0;
}

.stock__items {
  margin-left: -35px;
  margin-right: -35px;
}
.stock__item {
  padding: 0 35px;
  margin-bottom: 70px;
}

.super-map__inner {
  overflow-x: auto;
  padding-bottom: 12px;
  position: relative;
}
.super-map__text {
  text-align: center;
  line-height: 1.25;
  margin-bottom: 10px;
}
.super-map__element {
  position: absolute;
  display: block;
  cursor: pointer;
}
.super-map__img {
  user-select: none;
}

.element-super-map__balloon {
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.25s ease, visibility 0.25s ease;
  position: absolute;
  bottom: 100%;
  left: 50%;
}
.element-super-map.active .element-super-map__balloon {
  opacity: 1;
  visibility: visible;
}

.balloon {
  width: 280px;
  background-color: #fff;
  border: 1px solid #A62318;
  border-radius: 4px;
  padding: 10px;
  display: flex;
  flex-direction: column;
}
.balloon__text {
  font-family: ibm-geo, sans-serif;
  font-style: italic;
  line-height: 1.25;
  margin-bottom: 10px;
}
.balloon__img {
  object-fit: cover;
  width: 100%;
  height: 148px;
  border-radius: 4px;
}`, "",{"version":3,"sources":["webpack://./src/styles/main.sass","webpack://./src/styles/_config.sass"],"names":[],"mappings":"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","sourcesContent":["@import config\r\n// @import './blocks/**/*'\r\n\r\n.container-xxl\r\n\tmax-width: 1310px\r\n\r\n.socials\r\n\tdisplay: flex\r\n\t&__items\r\n\t\tdisplay: flex\r\n\t\talign-items: center\r\n\t&__item\r\n\t\tdisplay: block\r\n\t\tpadding: 5px 11px\r\n\t\tline-height: 1\r\n\t&__icon\r\n\t\tmax-width: 24px\r\n\t&__hint\r\n\t\tdisplay: inline-block\r\n\t\tposition: relative\r\n\t\tmin-width: 162px\r\n\t\tpadding: 10px 15px 10px 15px\r\n\t\tfont-size: 14px\r\n\t\tline-height: 1\r\n\t\tcolor: #9CB7D9\r\n\t\ttext-align: center\r\n\t\tborder: 1px solid $secondary\r\n\t\tborder-radius: 4px\r\n\t\tmargin-left: 14px\r\n\t\t&::before, &::after\r\n\t\t\tcontent: ''\r\n\t\t\tdisplay: block\r\n\t\t\tposition: absolute\r\n\t\t\tright: 100%\r\n\t\t\ttop: 50%\r\n\t\t\ttransform: translateY(-50%)\r\n\t\t\twidth: 0\r\n\t\t\theight: 0\r\n\t\t\tborder-top: 8px solid transparent\r\n\t\t\tborder-right: 8px solid $secondary\r\n\t\t\tborder-bottom: 8px solid transparent\r\n\t\t&::after\r\n\t\t\tborder-right-color: $secondaryDark\r\n\t\t\tright: calc(100% - 2px)\r\n\t&_border\r\n\t\t.socials__item:not(:last-child)\r\n\t\t\tborder-right: 1px solid rgba(#fff, .33)\r\n\r\n.btn\r\n\tdisplay: inline-block\r\n\tbackground-color: $accent\r\n\tfont-family: raleway-geo, sans-serif\r\n\tfont-size: 14px\r\n\tfont-weight: 800\r\n\tline-height: 1.42\r\n\tletter-spacing: 0.06em\r\n\ttext-transform: uppercase\r\n\tcolor: #fff\r\n\tborder: 2px solid #fff\r\n\tborder-radius: 4px\r\n\tpadding: 15px 20px\r\n\ttext-decoration: none\r\n\ttransition: background-color .25s ease\r\n\ttext-align: center\r\n\t&:hover\r\n\t\tbackground-color: lighten($accent, 5)\r\n\t\tcolor: #fff\r\n\t&_outline_secondary\r\n\t\tborder-color: $secondary\r\n\t\tbackground-color: transparent\r\n\t\t&:hover\r\n\t\t\tbackground-color: $secondary\r\n\r\n.main-title\r\n\tfont-size: 60px\r\n\tfont-weight: 900\r\n\tline-height: 1\r\n\r\n.section-title\r\n\tfont-size: 45px\r\n\tfont-weight: 900\r\n\tletter-spacing: -0.03em\r\n\tline-height: 1.17\r\n\tmargin-bottom: 10px\r\n\tcolor: #000\r\n\r\n.section-description\r\n\tfont-family: raleway-geo, sans-serif\r\n\tfont-size: 20px\r\n\tfont-weight: 500\r\n\tline-height: 1.15\r\n\tcolor: #000\r\n\r\n.title\r\n\tfont-size: 21px\r\n\tfont-weight: 900\r\n\tline-height: 1.23\r\n\tletter-spacing: 0.01em\r\n\ttext-transform: uppercase\r\n\r\n.section\r\n\tbackground-size: cover\r\n\tbackground-repeat: no-repeat\r\n\tbackground-position: center\r\n\tpadding: 70px 0\r\n\t&__headline\r\n\t\ttext-align: center\r\n\t\tmargin-bottom: 30px\r\n\t&__spiral-wrap\r\n\t\tmargin-top: 30px\r\n\t&_inverse\r\n\t\tcolor: #fff\r\n\t\t.section-title, .section-description\r\n\t\t\tcolor: #fff\r\n\r\n.slider\r\n\tposition: relative\r\n\t&__arrows\r\n\t\tposition: absolute\r\n\t\ttop: 50%\r\n\t\ttransform: translateY(-50%)\r\n\t\tleft: 0\r\n\t\tright: 0\r\n\t&__nav\r\n\t\tposition: absolute\r\n\t\ttop: 50%\r\n\t\ttransform: translateY(-50%)\r\n\t\twidth: 41px\r\n\t\theight: 79px\r\n\t\tstroke: $secondary\r\n\t\tcursor: pointer\r\n\t\tfilter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.4))\r\n\t\tpadding: 12px\r\n\t\t&_prev\r\n\t\t\tleft: -85px\r\n\t\t&_next\r\n\t\t\tright: -85px\r\n\t&_white\r\n\t\t.slider__nav\r\n\t\t\tstroke: #fff\r\n\r\n.slider-showcase\r\n\t&__arrows\r\n\t\tposition: relative\r\n\t\ttransform: none\r\n\t&__nav\r\n\t\ttop: auto\r\n\t\ttransform: none\r\n\t\tbottom: 135px\r\n\t\t&_prev\r\n\t\t\tleft: -12px\r\n\t\t&_next\r\n\t\t\tright: -12px\r\n\r\n.item-showcase\r\n\tbackground-repeat: no-repeat\r\n\tbackground-size: cover\r\n\tbackground-position: center\r\n\theight: 800px\r\n\tcolor: #fff\r\n\ttext-align: center\r\n\tpadding-bottom: 115px\r\n\t&__container\r\n\t\theight: 100%\r\n\t\tdisplay: flex\r\n\t\tflex-direction: column\r\n\t\tjustify-content: flex-end\r\n\r\n.section-benefits\r\n\tposition: relative\r\n\tpadding: 70px 0 163px\r\n\t&::before\r\n\t\tcontent: ''\r\n\t\tdisplay: block\r\n\t\twidth: 95px\r\n\t\theight: 159px\r\n\t\t// background: url(../images/dist/rhombus.svg) left / contain no-repeat\r\n\t\tposition: absolute\r\n\t\tleft: 50%\r\n\t\tbottom: -66px\r\n\t\ttransform: translateX(-50%)\r\n\t.benefits\r\n\t\tposition: relative\r\n\t\tz-index: 2\r\n\r\n.benefits\r\n\tdisplay: flex\r\n\tflex-wrap: wrap\r\n\tjustify-content: center\r\n\tmargin: 0 -10px\r\n\t&__item\r\n\t\tpadding: 0 10px\r\n\t\tflex: 0 0 30%\r\n\t\tmax-width: 30%\r\n\t\tmargin-bottom: 20px\r\n\t\t&.item-benefit_lg\r\n\t\t\tflex: 0 0 40%\r\n\t\t\tmax-width: 40%\r\n\t\t&:nth-child(1n)\r\n\t\t\t.item-benefit__inner\r\n\t\t\t\tbackground-color: $secondary\r\n\t\t&:nth-child(2n)\r\n\t\t\t.item-benefit__inner\r\n\t\t\t\tbackground-color: $secondaryDark\r\n\t\t&:nth-child(3n)\r\n\t\t\t.item-benefit__inner\r\n\t\t\t\tbackground-color: $alpha\r\n\t\t&:nth-child(4n)\r\n\t\t\t.item-benefit__inner\r\n\t\t\t\tbackground-color: $bravo\r\n\t\t&:nth-child(5n)\r\n\t\t\t.item-benefit__inner\r\n\t\t\t\tbackground-color: $accent\r\n\r\n.item-benefit\r\n\tmin-height: 260px\r\n\t&__inner\r\n\t\tbackground-color: $secondary\r\n\t\tpadding: 28px 10px 10px\r\n\t\tborder-radius: 4px\r\n\t\tfont-family: raleway-geo, sans-serif\r\n\t\ttext-align: center\r\n\t\theight: 100%\r\n\t\tdisplay: flex\r\n\t\tflex-direction: column\r\n\t\tjustify-content: space-between\r\n\t\talign-items: center\r\n\t&__icon\r\n\t\tmax-width: 130px\r\n\t\tmargin: 0 auto 10px\r\n\t&__title\r\n\t\tcolor: #fff\r\n\t\tmargin-bottom: 10px\r\n\t&__text\r\n\t\tfont-size: 17px\r\n\t\tfont-weight: 500\r\n\t\tline-height: 1.23\r\n\t\tcolor: #E4D8BC\r\n\t\tmargin-bottom: 10px\r\n\r\n.section-tours\r\n\tpadding-top: 96px\r\n\r\n.tours\r\n\tmargin-left: -10px\r\n\tmargin-right: -10px\r\n\t&__item\r\n\t\tpadding: 0 10px\r\n\t\tmargin-bottom: 20px\r\n\r\n.item-tour\r\n\t&__inner\r\n\t\tbackground-size: cover\r\n\t\tbackground-repeat: no-repeat\r\n\t\tbackground-position: center\r\n\t\tdisplay: block\r\n\t\tborder-radius: 4px\r\n\t\toverflow: hidden\r\n\t\ttext-decoration: none\r\n\t\tmin-height: 240px\r\n\t\tposition: relative\r\n\t\t&:hover\r\n\t\t\t.item-tour__bg\r\n\t\t\t\ttransform: scale(1.1)\r\n\t&__bg-wrap\r\n\t\tdisplay: flex\r\n\t\tposition: absolute\r\n\t\ttop: 0\r\n\t\tleft: 0\r\n\t\tright: 0\r\n\t\tbottom: 0\r\n\t&__bg\r\n\t\tobject-fit: cover\r\n\t\twidth: 100%\r\n\t\ttransition: transform .5s ease\r\n\t&__content\r\n\t\tdisplay: flex\r\n\t\tflex-direction: column\r\n\t\tjustify-content: flex-end\r\n\t\tpadding: 10px 18px 17px 19px\r\n\t\twidth: 210px\r\n\t\tbackground-color: rgba(#000, .6)\r\n\t\tmin-height: inherit\r\n\t\tposition: relative\r\n\t\tz-index: 2\r\n\t\tmargin-left: auto\r\n\t&__title\r\n\t\tcolor: #fff\r\n\t&__text\r\n\t\tfont-family: ibm-geo, sans-serif\r\n\t\tfont-style: italic\r\n\t\tline-height: 1.25\r\n\t\tcolor: #BDD0E8\r\n\t\toverflow: hidden\r\n\t\ttext-overflow: ellipsis\r\n\t\tdisplay: -webkit-box\r\n\t\t-webkit-line-clamp: 6\r\n\t\t-webkit-box-orient: vertical\r\n\t\t&:last-child\r\n\t\t\tmargin-bottom: 0\r\n\t&__btn\r\n\t\talign-self: flex-start\r\n\t&_stock\r\n\t\t.item-tour__inner\r\n\t\t\tmin-height: 300px\r\n\t\t.item-tour__content\r\n\t\t\twidth: 265px\r\n\r\n.link\r\n\tdisplay: inline-flex\r\n\talign-items: center\r\n\tfont-size: 14px\r\n\tfont-weight: 500\r\n\tletter-spacing: 0.03em\r\n\tcolor: $secondary\r\n\ttext-transform: uppercase\r\n\ttext-decoration: none\r\n\ttransition: color .25s ease\r\n\t&:hover\r\n\t\tcolor: lighten($secondary, 10)\r\n\t\t.link__icon\r\n\t\t\tstroke: lighten($secondary, 10)\r\n\t&__icon\r\n\t\twidth: 16px\r\n\t\theight: 16px\r\n\t\tmargin-right: 11px\r\n\t\tfill: none\r\n\t\tstroke: $secondary\r\n\t\ttransition: stroke .25s ease\r\n\t&_accent\r\n\t\tcolor: $accent\r\n\t\t.link__icon\r\n\t\t\tstroke: $accent\r\n\t\t&:hover\r\n\t\t\tcolor: lighten($accent, 10)\r\n\t\t\t.link__icon\r\n\t\t\t\tstroke: lighten($accent, 10)\r\n\r\n.badge\r\n\tdisplay: inline-flex\r\n\talign-items: center\r\n\tbackground-color: $secondary\r\n\tpadding: 7px 15px\r\n\tfont-family: ibm-geo, sans-serif\r\n\tfont-size: 13px\r\n\tfont-weight: 500\r\n\tline-height: 1.53\r\n\tletter-spacing: 0.03em\r\n\ttext-transform: uppercase\r\n\tcolor: #fff\r\n\t&_success\r\n\t\tbackground-color: $success\r\n\t&_secondary-light\r\n\t\tbackground-color: $secondaryLight\r\n\t\r\n.section-placing\r\n\t&__link-wrap\r\n\t\tmargin-top: 20px\r\n\r\n.slider-placing\r\n\t.slick-list\r\n\t\tmargin: 0 -7.5px\r\n\t\tpadding-bottom: 15px\r\n\t&__item\r\n\t\tmargin: 0 7.5px\r\n\r\n.item-placing\r\n\tbackground-size: cover\r\n\tbackground-repeat: no-repeat\r\n\tbackground-position: center\r\n\tposition: relative\r\n\tborder-radius: 4px\r\n\tcolor: #fff\r\n\theight: 285px\r\n\t&:hover\r\n\t\t.item-placing__content\r\n\t\t\topacity: 1\r\n\t\t\tvisibility: visible\r\n\t&__content\r\n\t\tdisplay: flex\r\n\t\tflex-direction: column\r\n\t\tjustify-content: flex-end\r\n\t\talign-items: center\r\n\t\tbackground-color: rgba(#000, .8)\r\n\t\tborder-radius: 4px\r\n\t\ttext-align: center\r\n\t\tpadding: 25px 25px 32px\r\n\t\theight: 100%\r\n\t\topacity: 0\r\n\t\tvisibility: hidden\r\n\t\ttransition: opacity .25s ease, visibility .25s ease\r\n\t&__text\r\n\t\tfont-family: ibm-geo, sans-serif\r\n\t\tfont-style: italic\r\n\t\tline-height: 1.25\r\n\t\tmargin-bottom: 13px\r\n\t&__badge\r\n\t\tposition: absolute\r\n\t\tbottom: -15px\r\n\t\tleft: 50%\r\n\t\ttransform: translateX(-50%)\r\n\t&__link\r\n\t\tfont-weight: normal\r\n\t\tcolor: #9CB7D9\r\n\t\t.link__icon\r\n\t\t\tmargin-right: 7px\r\n\t\t\tstroke: #9CB7D9\r\n\t\t\r\n.blog\r\n\t&__items\r\n\t\tmargin-left: -10px\r\n\t\tmargin-right: -10px\r\n\t&__card\r\n\t\tpadding: 0 10px\r\n\t\tmargin-bottom: 20px\r\n\t&__link-wrap\r\n\t\tmargin-top: 10px\r\n\r\n.card-blog\r\n\t&__inner\r\n\t\theight: 100%\r\n\t\tdisplay: flex\r\n\t\tflex-direction: column\r\n\t\tcolor: #333\r\n\t\ttext-decoration: none\r\n\t\tborder-radius: 4px\r\n\t\toverflow: hidden\r\n\t&__img-wrap\r\n\t\tposition: relative\r\n\t\tdisplay: flex\r\n\t\t&::before\r\n\t\t\tcontent: ''\r\n\t\t\tdisplay: block\r\n\t\t\tposition: absolute\r\n\t\t\ttop: 0\r\n\t\t\tright: 0\r\n\t\t\tleft: 0\r\n\t\t\tbottom: 0\r\n\t\t\tbackground: linear-gradient(360deg, rgba(0, 0, 0, 0.63) 0%, rgba(0, 0, 0, 0) 54.39%)\r\n\t&__img\r\n\t\twidth: 100%\r\n\t\theight: 285px\r\n\t\tobject-fit: cover\r\n\t&__title\r\n\t\tcolor: #fff\r\n\t\tposition: absolute\r\n\t\tz-index: 2\r\n\t\tbottom: 12px\r\n\t\tleft: 26px\r\n\t\tright: 26px\r\n\t\tmargin-bottom: 0\r\n\t&__content\r\n\t\theight: 100%\r\n\t\tbackground-color: #f4f4f4\r\n\t\tfont-family: ibm-geo, sans-serif\r\n\t\tfont-style: italic\r\n\t\tline-height: 1.25\r\n\t\tcolor: #333\r\n\t\tpadding: 13px 26px 26px\r\n\r\n.form-mailing\r\n\tmax-width: 600px\r\n\tmargin: 0 auto\r\n\t&__row\r\n\t\tdisplay: flex\r\n\t&__control\r\n\t\tmargin-right: 20px\r\n\r\n.notice\r\n\ttext-align: center\r\n\tbackground-color: $secondary\r\n\tcolor: #fff\r\n\tpadding: 10px\r\n\tmargin: 0 10px 15px\r\n\tp\r\n\t\tmargin-bottom: 0\r\n\t&_success\r\n\t\tbackground-color: $success\r\n\t&_danger\r\n\t\tbackground-color: $accent\r\n\r\n.follow-us\r\n\ttext-align: center\r\n\t&__text\r\n\t\tfont-family: raleway-geo, sans-serif\r\n\t\tfont-size: 20px\r\n\t\tfont-weight: 500\r\n\t\ttext-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3)\r\n\t\tmargin-bottom: 25px\r\n\t&__socials\r\n\t\tdisplay: flex\r\n\t\tjustify-content: center\r\n\t&__item\r\n\t\tmargin: 0 15px\r\n\r\n.item-follow-us\r\n\tdisplay: flex\r\n\tjustify-content: center\r\n\talign-items: center\r\n\tbackground-color: rgba(#000, .6)\r\n\tborder-radius: 4px\r\n\twidth: 90px\r\n\theight: 90px\r\n\tpadding: 13px\r\n\ttransition: background-color .25s ease\r\n\t&:hover\r\n\t\tbackground-color: rgba(#000, .7)\r\n\t&__icon\r\n\t\theight: 63px\r\n\r\n.section-mailing\r\n\t.form-mailing\r\n\t\tmargin-bottom: 50px\r\n\r\n.section-places\r\n\tpadding: 0\r\n\r\n.item-place\r\n\tbackground-repeat: no-repeat\r\n\tbackground-position: center\r\n\tbackground-size: cover\r\n\tpadding: 100px 0 82px\r\n\tcolor: #fff\r\n\t&__container\r\n\t\tposition: relative\r\n\t\tz-index: 2\r\n\t\ttext-align: center\r\n\t\tfont-family: raleway-geo, sans-serif\r\n\t&__header\r\n\t\tmargin-bottom: 116px\r\n\t&__title\r\n\t\ttext-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3)\r\n\t\tmargin-bottom: 0\r\n\t&__text\r\n\t\ttext-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3)\r\n\t\tfont-size: 20px\r\n\t\tfont-weight: 500\r\n\t&__subtitle\r\n\t\ttext-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3)\r\n\t\tfont-weight: 900\r\n\t\tfont-size: 21px\r\n\t\tletter-spacing: 0.01em\r\n\t\ttext-transform: uppercase\r\n\t\tmargin-bottom: 15px\r\n\t&_default\r\n\t\tborder-radius: 4px\r\n\t\tmin-height: 454px\r\n\t\tdisplay: flex\r\n\t\talign-items: center\r\n\t\tpadding: 50px 10px\r\n\t\t&::before\r\n\t\t\tborder-radius: 4px\r\n\t\t.item-place__container\r\n\t\t\twidth: 100%\r\n\t\t.item-place__text\r\n\t\t\tfont-size: 17px\r\n\r\n.banner\r\n\tbackground-size: cover\r\n\tbackground-repeat: no-repeat\r\n\tbackground-position: center\r\n\tpadding: 126px 0 30px\r\n\ttext-align: center\r\n\tcolor: #fff\r\n\t&::before\r\n\t\tbackground-color: rgba(#000, .4)\r\n\t&__title\r\n\t\tmargin-bottom: 0\r\n\t&__container\r\n\t\tposition: relative\r\n\t\tz-index: 2\r\n\r\n.breadcrumbs\r\n\t&__list\r\n\t\tlist-style-type: none\r\n\t\tmargin: 0\r\n\t\tpadding: 0\r\n\t&__item\r\n\t\tfont-family: ibm-geo, sans-serif\r\n\t\tfont-style: italic\r\n\t\tline-height: 1.25\r\n\t\tdisplay: inline\r\n\t\t& + .breadcrumbs__item::before\r\n\t\t\tcontent: '/'\r\n\t\t\tpadding: 0 4px 0 1px\r\n\ta\r\n\t\tcolor: #fff\r\n\t\ttext-decoration: none\r\n\r\n.filter\r\n\t&__list\r\n\t\tlist-style-type: none\r\n\t\tmargin: 0\r\n\t\tpadding: 0\r\n\t\tdisplay: flex\r\n\t\tflex-wrap: wrap\r\n\t\tjustify-content: center\r\n\t&__item\r\n\t\t&:hover, &.filter__item_active\r\n\t\t\ta\r\n\t\t\t\tbackground-color: #fff\r\n\t\t\t\tcolor: #000\r\n\ta\r\n\t\tdisplay: block\r\n\t\tpadding: 5px 10px\r\n\t\tfont-family: raleway-geo, sans-serif\r\n\t\tfont-size: 12px\r\n\t\tfont-weight: 600\r\n\t\tletter-spacing: 0.06em\r\n\t\ttext-transform: uppercase\r\n\t\ttext-decoration: none\r\n\t\tcolor: $secondary\r\n\t\ttransition: background-color .25s ease, color .25s ease\r\n\t\toutline: none\r\n\t\t&:focus\r\n\t\t\tbackground-color: #fff\r\n\t\t\tcolor: #000\r\n\r\n.aside\r\n\t&__block\r\n\t\t&:not(:last-child)\r\n\t\t\tmargin-bottom: 70px\r\n\t&__divider\r\n\t\tmargin-bottom: 30px\r\n\r\n.page\r\n\tbackground-color: #ebeff2\r\n\tpadding: 30px 0 70px\r\n\t&.bg-white\r\n\t\t.card__spiral\r\n\t\t\tfill: #ebebeb\r\n\t&__filter\r\n\t\tmargin-bottom: 30px\r\n\t&__pages\r\n\t\tmargin-bottom: 14px\r\n\t&__navigation\r\n\t\tmargin-bottom: 14px\r\n\t&__tabs\r\n\t\tmargin-bottom: 30px\r\n\t&__title\r\n\t\tletter-spacing: -0.03em\r\n\t\tfont-size: 32px\r\n\t\tfont-weight: 900\r\n\t\tfont-style: normal\r\n\t\tmargin-bottom: 30px\r\n\t&__feedback\r\n\t\tmargin-top: 70px\r\n\t&__block\r\n\t\tmargin-bottom: 30px\r\n\t&__team\r\n\t\tmargin: 30px 0 0\r\n\t&__slider-images\r\n\t\tmargin: 70px 0\r\n\t&__super-map\r\n\t\tmargin-bottom: 70px\r\n\r\n.tabs\r\n\tdisplay: flex\r\n\tflex-wrap: wrap\r\n\r\n.tab-btn\r\n\tdisplay: block\r\n\tpadding: 12px 20px\r\n\tfont-family: raleway-geo, sans-serif\r\n\tfont-size: 14px\r\n\tfont-weight: 800\r\n\tline-height: 1.42\r\n\tletter-spacing: 0.06em\r\n\tcolor: $secondary\r\n\ttext-decoration: none\r\n\ttext-transform: uppercase\r\n\ttransition: background-color .25s ease, color .25s ease\r\n\tborder-bottom: 1px solid #BDBDBD\r\n\toutline: none\r\n\t&:hover, &.active, &:focus\r\n\t\tbackground-color: #F0F3F7\r\n\t\tcolor: #000\r\n\r\n.tour-cards\r\n\tmargin-left: -10px\r\n\tmargin-right: -10px\r\n\t&__card\r\n\t\tpadding: 0 10px\r\n\t\tmargin-bottom: 20px\r\n\r\n.card\r\n\t&__inner\r\n\t\tdisplay: block\r\n\t\tcolor: #000\r\n\t\ttext-decoration: none\r\n\t\t&:hover\r\n\t\t\tcolor: #000\r\n\t&__infos\r\n\t\tdisplay: flex\r\n\t\tflex-wrap: wrap\r\n\t\tmargin-left: -10px\r\n\t\tmargin-right: -10px\r\n\t&__info\r\n\t\tmargin: 0 10px 8px\r\n\t&__img-wrap\r\n\t\tmargin-bottom: 10px\r\n\t&__img\r\n\t\tobject-fit: cover\r\n\t\theight: 202px\r\n\t\twidth: 100%\r\n\t\tborder-radius: 4px\r\n\t&__content\r\n\t\tmargin-bottom: 20px\r\n\t&__text-wrap\r\n\t\tfont-family: ibm-geo, sans-serif\r\n\t\tfont-style: italic\r\n\t\tline-height: 1.25\r\n\t&__text\r\n\t\tmargin-bottom: 8px\r\n\t&_excursion\r\n\t\t.card__text-wrap\r\n\t\t\tfont-family: raleway-geo, sans-serif\r\n\t\t\tfont-style: normal\r\n\t\t\tfont-size: 17px\r\n\r\n.info-card\r\n\tdisplay: inline-flex\r\n\talign-items: center\r\n\tfont-family: ibm-geo, sans-serif\r\n\tfont-size: 13px\r\n\tfont-weight: 500\r\n\tletter-spacing: 0.03em\r\n\ttext-transform: uppercase\r\n\tcolor: #828282\r\n\t&__icon\r\n\t\tmargin-right: 10px\r\n\r\n.details-card\r\n\tdisplay: flex\r\n\tflex-wrap: wrap\r\n\tmargin: 0 -8px\r\n\t&__item\r\n\t\tfont-family: raleway-geo, sans-serif\r\n\t\tfont-size: 17px\r\n\t\tfont-weight: 500\r\n\t\tline-height: 1.23\r\n\t\tpadding: 0 8px\r\n\t\t&:not(:last-child)\r\n\t\t\tborder-right: 1px solid #BDBDBD\r\n\t&__icon\r\n\t\twidth: 15px\r\n\r\n.reviews\r\n\t&__item\r\n\t\tmargin-bottom: 30px\r\n\t\t&:last-child\r\n\t\t\tmargin-bottom: 10px\r\n\r\n.item-review\r\n\t&__inner\r\n\t\tdisplay: flex\r\n\t\tmargin-bottom: 20px\r\n\t&__img-wrap\r\n\t\tflex: 0 0 180px\r\n\t\twidth: 180px\r\n\t\tmargin: 0 20px 0 0\r\n\t&__img\r\n\t\theight: 180px\r\n\t&__infos\r\n\t\tmargin-bottom: 12px\r\n\t&__title\r\n\t\tmargin-bottom: 10px\r\n\t&__content\r\n\t\tmargin-bottom: 0\r\n\r\n.pages\r\n\tfont-family: ibm-geo, sans-serif\r\n\tfont-size: 13px\r\n\tfont-weight: 500\r\n\tletter-spacing: 0.03em\r\n\ttext-transform: uppercase\r\n\tcolor: #828282\r\n\t&__count\r\n\t\tfont-family: raleway-geo, sans-serif\r\n\t\tfont-size: 17px\r\n\t\tfont-weight: 500\r\n\t\ttext-transform: none\r\n\t\tcolor: #000\r\n\r\n.page-navigation\r\n\tfont-family: raleway-geo, sans-serif\r\n\t&__list\r\n\t\tlist-style-type: none\r\n\t\tmargin: 0 -13.5px\r\n\t\tpadding: 0\r\n\t\tdisplay: flex\r\n\tli\r\n\t\tmargin: 0 13.5px\r\n\ta\r\n\t\tfont-size: 17px\r\n\t\tfont-weight: 500\r\n\t\tline-height: 1.23\r\n\t\tcolor: $secondary\r\n\t\ttext-decoration: none\r\n\t\t&:hover\r\n\t\t\ttext-decoration: underline\r\n\r\n.pagination\r\n\tfont-family: raleway-geo, sans-serif\r\n\t&__list\r\n\t\tlist-style-type: none\r\n\t\tmargin: 0\r\n\t\tpadding: 0\r\n\t\tdisplay: flex\r\n\t\tflex-wrap: wrap\r\n\tli\r\n\t\t&:hover, &.active\r\n\t\t\ta\r\n\t\t\t\tbackground-color: #fff\r\n\t\t\t\tcolor: #000\r\n\ta\r\n\t\tdisplay: block\r\n\t\tpadding: 6px 13px 7px\r\n\t\tfont-size: 17px\r\n\t\tfont-weight: 500\r\n\t\tline-height: 1.23\r\n\t\tcolor: $secondary\r\n\t\ttext-decoration: none\r\n\t\ttransition: background-color .25s ease, color .25s ease\r\n\r\n.links-page\r\n\t&__item\r\n\t\tmargin-bottom: 30px\r\n\t&__title\r\n\t\tfont-family: ibm-geo, sans-serif\r\n\t\tfont-size: 13px\r\n\t\tfont-weight: 500\r\n\t\tletter-spacing: 0.03em\r\n\t\ttext-transform: uppercase\r\n\t\tcolor: #000\r\n\t\tmargin-bottom: 20px\r\n\t&__list\r\n\t\tfont-family: raleway-geo, sans-serif\r\n\t\tlist-style-type: none\r\n\t\tmargin: 0\r\n\t\tpadding: 0\r\n\tli\r\n\t\tfont-size: 18px\r\n\t\tfont-weight: 900\r\n\t\tletter-spacing: 0.01em\r\n\t\tcolor: $secondary\r\n\t\tline-height: 1.25\r\n\t\ttext-transform: uppercase\r\n\t\toverflow-wrap: break-word\r\n\t\t&:not(:last-child)\r\n\t\t\tmargin-bottom: 10px\r\n\t\t&.active a\r\n\t\t\tcolor: #000\r\n\ta\r\n\t\tcolor: $secondary\r\n\t\ttext-decoration: none\r\n\t\ttransition: color .25s ease\r\n\t\t&:hover\r\n\t\t\tcolor: #000\r\n\r\n.control, .select, .datepicker\r\n\twidth: 100%\r\n\tbackground-color: #fff\r\n\tpadding: 8px 11px\r\n\tborder: 1px solid #bdbdbd\r\n\tborder-radius: 4px\r\n\tfont-family: raleway-geo, sans-serif\r\n\tfont-feature-settings: 'lnum' 1\r\n\tfont-size: 17px\r\n\tfont-weight: 600\r\n\tline-height: 1.24\r\n\tcolor: #000\r\n\toutline: none\r\n\r\n.control\r\n\t&::placeholder\r\n\t\tcolor: #828282\r\n\t&_icon\r\n\t\tpadding: 8px 30px 8px 11px\r\n\t\tbackground-repeat: no-repeat\r\n\t\tbackground-position: calc(100% - 11px)\r\n\t\tbackground-size: auto 16px\r\n\t\t&_user\r\n\t\t\t// background-image: url(../images/dist/icons/user.svg)\r\n\t\t&_calendar\r\n\t\t\t// background-image: url(../images/dist/icons/calendar_accent.svg)\r\n\t\t&_phone\r\n\t\t\t// background-image: url(../images/dist/icons/phone_accent.svg)\r\n\t\t&_email\r\n\t\t\t// background-image: url(../images/dist/icons/email_accent.svg)\r\n\t&_mailing\r\n\t\tpadding: 15px 20px\r\n\t\tborder-color: #e0e0e0\r\n\t\tfont-size: 20px\r\n\t\tfont-weight: 500\r\n\t&.error\r\n\t\tborder-color: $accent\r\n\t\t&::placeholder\r\n\t\t\tcolor: $accent\r\n\r\n.select\r\n\tappearance: none\r\n\t// background-image: url(../images/dist/icons/arrows.svg)\r\n\tbackground-repeat: no-repeat\r\n\tbackground-size: auto 16px\r\n\tbackground-position: calc(100% - 11px)\r\n\tpadding-right: 30px\r\n\tcursor: pointer\r\n\r\ntextarea\r\n\theight: 150px\r\n\tresize: none\r\n\r\n.file-selector\r\n\tcolor: $accent\r\n\tcursor: pointer\r\n\t&__input\r\n\t\tposition: absolute\r\n\t\topacity: 0\r\n\t\twidth: 0\r\n\t\theight: 0\r\n\t&_error\r\n\t\tborder-color: $accent\r\n\r\n.file-img-wrap\r\n\tdisplay: flex\r\n\tflex-direction: column\r\n\tposition: relative\r\n\t&.selected\r\n\t\tmargin-bottom: 30px\r\n\t\t.file-img\r\n\t\t\tdisplay: block\r\n\r\n.file-img\r\n\tdisplay: none\r\n\tobject-fit: cover\r\n\twidth: 60px\r\n\theight: 60px\r\n\tcursor: pointer\r\n\tborder-radius: 4px\r\n\r\n.file-text\r\n\tfont-family: raleway-geo, sans-serif\r\n\tfont-size: 17px\r\n\tfont-weight: 500\r\n\twhite-space: nowrap\r\n\tcolor: #828282\r\n\tposition: absolute\r\n\ttop: calc(100% + 10px)\r\n\tmargin-bottom: 0\r\n\r\n.checkbox\r\n\tdisplay: inline-flex\r\n\talign-items: flex-start\r\n\tposition: relative\r\n\tmargin-bottom: 0\r\n\tcursor: pointer\r\n\tinput\r\n\t\tposition: absolute\r\n\t\topacity: 0\r\n\t\theight: 0\r\n\t\twidth: 0\r\n\t\t&:checked \r\n\t\t\t~ .checkmark\r\n\t\t\t\t&::before\r\n\t\t\t\t\topacity: 1\r\n\r\n.checkmark\r\n\tdisplay: flex\r\n\tflex: 0 0 20px\r\n\twidth: 20px\r\n\theight: 20px\r\n\tjustify-content: center\r\n\talign-items: center\r\n\tbackground-color: #fff\r\n\tborder: 1px solid #bdbdbd\r\n\tborder-radius: 4px\r\n\tmargin-right: 10px\r\n\t&::before\r\n\t\tcontent: ''\r\n\t\tdisplay: block\r\n\t\twidth: 14px\r\n\t\theight: 14px\r\n\t\t// background: url(../images/dist/icons/check.svg) left / contain no-repeat\r\n\t\topacity: 0\r\n\t\ttransition: opacity .25s ease\r\n\r\n.label\r\n\tdisplay: block\r\n\tfont-family: ibm-geo, sans-serif\r\n\tfont-size: 16px\r\n\tfont-style: italic\r\n\tline-height: 1.25\r\n\tcolor: #828282\r\n\tmargin-bottom: 8px\r\n\r\n.counter\r\n\tdisplay: flex\r\n\talign-items: center\r\n\tjustify-content: space-between\r\n\tmax-width: 130px\r\n\t&__control\r\n\t\ttext-align: center\r\n\t\t-moz-appearance: textfield\r\n\t\t-webkit-appearance: none\r\n\t\twidth: 53px\r\n\t\tpadding-left: 8px\r\n\t\tpadding-right: 8px\r\n\t\t&::-webkit-outer-spin-button,\r\n\t\t&::-webkit-inner-spin-button\r\n\t\t\t-webkit-appearance: none\r\n\t&__btn\r\n\t\tdisplay: block\r\n\t\tline-height: 20px\r\n\t\twidth: 24px\r\n\t\theight: 24px\r\n\t\tborder-color: $accent\r\n\t\tcolor: $accent\r\n\t\tpadding: 0\r\n\r\n.booking\r\n\t&__header\r\n\t\tbackground-color: #E4D8BC\r\n\t\tpadding: 14px 20px\r\n\t&__title\r\n\t\tfont-size: 14px\r\n\t\tfont-weight: 800\r\n\t\tletter-spacing: 0.06em\r\n\t\tline-height: 1.42\r\n\t\ttext-transform: uppercase\r\n\t\tcolor: #4f4f4f\r\n\t\tmargin-bottom: 0\r\n\t&__content\r\n\t\tbackground-color: #f2ecde\r\n\t\tpadding: 20px 20px 18px\r\n\t&__controls\r\n\t\tmargin: 0 -5px\r\n\t&__group\r\n\t\tposition: relative\r\n\t\tpadding: 0 5px\r\n\t\tmargin-bottom: 20px\r\n\t\t&_less-margin\r\n\t\t\tmargin-bottom: 10px\r\n\t&__row\r\n\t\talign-items: flex-end\r\n\t\tmargin-left: -10px\r\n\t\tmargin-right: -10px\r\n\t\t&_children\r\n\t\t\tmargin-bottom: 10px\r\n\t&__col\r\n\t\tpadding: 0 10px\r\n\t&__result\r\n\t\tmargin: 50px 0 30px\r\n\t&__btn\r\n\t\twidth: 100%\r\n\t&__duplicate\r\n\t\tdisplay: block\r\n\t\tpadding: 0\r\n\t\tfont-family: ibm-geo, sans-serif\r\n\t\tfont-size: 14px\r\n\t\tfont-style: italic\r\n\t\tcolor: $accent\r\n\t\ttext-decoration: underline\r\n\t\tbackground: none\r\n\t\tborder: none\r\n\t\tline-height: 1.42\r\n\t\ttransition: color .25s ease\r\n\t\t&:hover\r\n\t\t\tcolor: lighten($accent, 10)\r\n\t.g-recaptcha\r\n\t\ttransform: scale(0.85)\r\n\t\ttransform-origin: 0 0\r\n\r\n.result-booking\r\n\t&__title\r\n\t\tmargin-bottom: 18px\r\n\t&__subtitle\r\n\t\tfont-family: ibm-geo, sans-serif\r\n\t\tfont-style: italic\r\n\t\tfont-size: 16px\r\n\t\tfont-weight: normal\r\n\t\tline-height: 1.25\r\n\t\tcolor: #828282\r\n\t&__item\r\n\t\tmargin-bottom: 10px\r\n\r\n.item-result\r\n\tdisplay: flex\r\n\talign-items: flex-end\r\n\tline-height: 1\r\n\tcolor: #000\r\n\t&__title\r\n\t\tfont-family: ibm-geo, sans-serif\r\n\t\tfont-style: italic\r\n\t\tfont-size: 16px\r\n\t&__value\r\n\t\tfont-size: 17px\r\n\t\tfont-weight: 500\r\n\t&__divider\r\n\t\tflex-grow: 1\r\n\t\tborder-bottom: 1px dashed #828282\r\n\t\tmargin: 0 0 2px 7px\r\n\t&_total\r\n\t\tmargin-top: 18px\r\n\t\t.item-result__value\r\n\t\t\tfont-size: 22px\r\n\t\t\tfont-weight: bold\r\n\r\n.slider-images-wrapper\r\n\t&__inner\r\n\t\tbackground-color: #000\r\n\r\n.slider-images-main\r\n\t&__items\r\n\t\toverflow: hidden\r\n\t\t.slick-list\r\n\t\t\tmargin: 0 -10px\r\n\t\t\tpadding: 0!important\r\n\t\t.slider-images__item\r\n\t\t\tmargin: 0 10px 6px\r\n\t\t&_single\r\n\t\t\t.slider-images__item\r\n\t\t\t\tmargin-bottom: 0\r\n\t&__nav\r\n\t\t&_prev\r\n\t\t\tleft: 0\r\n\t\t&_next\r\n\t\t\tright: 0\r\n\r\n.slider-images-thumbs\r\n\t&__items\r\n\t\toverflow: hidden\r\n\t\tmargin-bottom: -4px\r\n\t\t.slick-list\r\n\t\t\tmargin: 0 -5px\r\n\t\t\tpadding: 0 30px 0 0!important\r\n\t\t.slider-images__item\r\n\t\t\tmargin: 0 1px\r\n\r\n.item-images\r\n\tdisplay: flex\r\n\tcolor: #fff\r\n\ttext-decoration: none\r\n\tposition: relative\r\n\t&:hover\r\n\t\tcolor: #fff\r\n\t&.slick-current, &.slick-current-clone-animate\r\n\t\tborder-color: $secondary\r\n\t&__img\r\n\t\tobject-fit: cover\r\n\t\twidth: 100%\r\n\t\theight: 455px\r\n\t\tborder-radius: 4px\r\n\t&__title\r\n\t\tposition: absolute\r\n\t\tleft: 20px\r\n\t\tright: 20px\r\n\t\tbottom: 20px\r\n\t\ttext-align: center\r\n\t\tz-index: 2\r\n\t\tmargin-bottom: 0\r\n\t&_thumb\r\n\t\tborder: 4px solid transparent\r\n\t\tborder-radius: 8px\r\n\t\tcursor: pointer\r\n\t\ttransition: border .25s ease\r\n\t\t.item-images__img\r\n\t\t\theight: 120px\r\n\r\n.files-page\r\n\t&__title\r\n\t\tmargin-bottom: 10px\r\n\t&__text\r\n\t\tfont-family: raleway-geo, sans-serif\r\n\t\tfont-size: 17px\r\n\t\tfont-weight: 500\r\n\t\tcolor: #000\r\n\t\tline-height: 1.25\r\n\t\tmargin-bottom: 10px\r\n\t&__item\r\n\t\tmargin-bottom: 12px\r\n\r\n.item-file\r\n\t&__link\r\n\t\tdisplay: inline-flex\r\n\t\talign-items: center\r\n\t\tfont-family: raleway-geo, sans-serif\r\n\t\tfont-size: 17px\r\n\t\tfont-weight: 600\r\n\t\tline-height: 1.25\r\n\t\tcolor: #000\r\n\t\ttransition: color .25s ease\r\n\t\t&:hover\r\n\t\t\tcolor: $accent\r\n\t&__icon\r\n\t\tmax-width: 13px\r\n\t\tmargin-right: 12px\r\n\r\n.feedback\r\n\t&__row\r\n\t\tdisplay: flex\r\n\t\tflex-wrap: wrap\r\n\t\tmargin-left: -10px\r\n\t\tmargin-right: -10px\r\n\t&__col\r\n\t\tmargin-bottom: 20px\r\n\t\tpadding: 0 10px\r\n\t\t&_file\r\n\t\t\tflex: 0 0 173px\r\n\t\t\tmax-width: 173px\r\n\t\t&_name, &_program, &_email\r\n\t\t\tflex: 0 0 299px\r\n\t\t\tmax-width: 299px\r\n\t\t&_season\r\n\t\t\tflex: 0 0 155px\r\n\t\t\tmax-width: 155px\r\n\t\t&_year\r\n\t\t\tflex: 0 0 123px\r\n\t\t\tmax-width: 123px\r\n\t\t&_phone\r\n\t\t\tflex: 0 0 240px\r\n\t\t\tmax-width: 240px\r\n\t\t&_textarea, &_captcha\r\n\t\t\tflex: 0 0 100%\r\n\t\t\tmax-width: 100%\r\n\t&__btn\r\n\t\twidth: 279px\r\n\t&__title\r\n\t\tmargin-bottom: 10px\r\n\r\n.section-map\r\n\tposition: relative\r\n\t&__map\r\n\t\tposition: absolute\r\n\t\ttop: 0\r\n\t\tleft: 0\r\n\t\tright: 0\r\n\t\tbottom: 0\r\n\t\tiframe\r\n\t\t\tborder: none\r\n\t\t\twidth: 100%\r\n\t\t\theight: 100%\r\n\t&__container\r\n\t\tz-index: 2\r\n\t\tcolor: #fff\r\n\t&__inner\r\n\t\tmax-width: 390px\r\n\t\tposition: relative\r\n\t\tpadding: 70px 30px 70px 0\r\n\t\t&::before\r\n\t\t\tcontent: ''\r\n\t\t\tdisplay: block\r\n\t\t\tposition: absolute\r\n\t\t\ttop: 0\r\n\t\t\tright: 0\r\n\t\t\tleft: -9999px\r\n\t\t\tbottom: 0\r\n\t\t\tbackground-color: rgba(#000, .6)\r\n\t&__content\r\n\t\tposition: relative\r\n\t\tz-index: 2\r\n\t&__title, &__text\r\n\t\tcolor: #fff\r\n\t\ttext-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3)\r\n\t&__title\r\n\t\tmargin-bottom: 30px\r\n\t&__text-wrap\r\n\t\tmargin-bottom: 43px\r\n\r\n.team\r\n\t&__items\r\n\t\tmargin-bottom: -20px\r\n\t&__title\r\n\t\tmargin-bottom: 30px\r\n\t&__item\r\n\t\tmargin-bottom: 20px\r\n\t&_lg\r\n\t\t.team__items\r\n\t\t\tmargin-left: -35px\r\n\t\t\tmargin-right: -35px\r\n\t\t\tmargin-bottom: -70px\r\n\t\t.team__item\r\n\t\t\tpadding: 0 35px\r\n\t\t\tmargin-bottom: 70px\r\n\t\t.item-team__inner\r\n\t\t\tmargin-bottom: 10px\r\n\t\t.item-team__img-wrap\r\n\t\t\tflex: 0 0 200px\r\n\t\t\twidth: 200px\r\n\t\t.item-team__img\r\n\t\t\theight: 200px\r\n\r\n.item-team\r\n\t&__inner\r\n\t\tdisplay: flex\r\n\t\tmargin-bottom: 20px\r\n\t&__img-wrap\r\n\t\tdisplay: flex\r\n\t\tflex: 0 0 150px\r\n\t\twidth: 150px\r\n\t\tmargin: 0 20px 0 0\r\n\t&__img\r\n\t\tobject-fit: cover\r\n\t\twidth: 100%\r\n\t\theight: 150px\r\n\t&__content\r\n\t\tdisplay: flex\r\n\t\tflex-direction: column\r\n\t&__title\r\n\t\tfont-size: 20px\r\n\t\tfont-weight: 500\r\n\t\tmargin-bottom: 10px\r\n\t&__position\r\n\t\tfont-family: ibm-geo, sans-serif\r\n\t\tfont-size: 16px\r\n\t\tfont-style: italic\r\n\t\tline-height: 1.25\r\n\t\tmargin-bottom: 10px\r\n\t&__text-wrap\r\n\t\tfont-family: ibm-geo, sans-serif\r\n\t\tfont-size: 14px\r\n\t\tfont-style: italic\r\n\t\tline-height: 1.42\r\n\t\tcolor: #000\r\n\t&__text\r\n\t\t&:last-child\r\n\t\t\tmargin-bottom: 0\r\n\t&__contacts\r\n\t\tmargin-top: auto\r\n\t&__contact\r\n\t\t&:not(:last-child)\r\n\t\t\tmargin-bottom: 10px\r\n\t\t.item-contact__value\r\n\t\t\tfont-weight: 500\r\n\t&__socials\r\n\t\tdisplay: flex\r\n\t\tflex-wrap: wrap\r\n\t\tmargin: 0 -5px 5px\r\n\t&__social\r\n\t\tdisplay: block\r\n\t\tflex: 0 0 17px\r\n\t\twidth: 17px\r\n\t\theight: 17px\r\n\t\tmargin: 0 5px 5px\r\n\t&__social-icon\r\n\t\tvertical-align: top\r\n\r\n.custom-scrollbar-horizontal\r\n\t&::-webkit-scrollbar-track\r\n\t\tbackground: #fff\r\n\t&::-webkit-scrollbar\r\n\t\theight: 2px\r\n\t\twidth: 200px\r\n\t&::-webkit-scrollbar-thumb\r\n\t\tbackground: $accent\r\n\t&::-webkit-scrollbar-thumb:hover\r\n\t\tbackground: lighten($accent, 15)\r\n\r\n.table-wrap\r\n\toverflow-x: auto\r\n\tpadding-bottom: 12px\r\n\tmargin-top: 30px\r\n\r\n.table\r\n\tmin-width: 900px\r\n\twidth: 100%\r\n\tthead\r\n\t\ttd\r\n\t\t\tfont-family: raleway-geo, sans-serif\r\n\t\t\tfont-size: 20px\r\n\t\t\tfont-weight: 500\r\n\t\t\tfont-style: normal\r\n\t\t\ttext-align: center\r\n\ttd\r\n\t\tborder: 1px solid #fff\r\n\t\tpadding: 10px\r\n\r\n.contacts\r\n\t&__items\r\n\t\tdisplay: flex\r\n\t\tflex-wrap: wrap\r\n\t\tmargin-left: -10px\r\n\t\tmargin-right: -10px\r\n\t&__item\r\n\t\tmax-width: 300px\r\n\t\tpadding: 0 10px\r\n\t\tmargin-bottom: 20px\r\n\t&__title\r\n\t\tmargin-bottom: 10px\r\n\r\n.item-contact\r\n\tline-height: 1\r\n\t&__title\r\n\t\tmargin-bottom: 10px\r\n\t&__value\r\n\t\tdisplay: inline-flex\r\n\t\talign-items: center\r\n\t\tfont-family: raleway-geo, sans-serif\r\n\t\tfont-feature-settings: 'lnum' 1\r\n\t\tfont-size: 17px\r\n\t\tfont-weight: 600\r\n\t\tline-height: 1.23\r\n\t\tcolor: #000\r\n\t\ttext-decoration: none\r\n\t\ttransition: color .25s ease\r\n\t\t&:hover\r\n\t\t\tcolor: $accent\r\n\t&__icon\r\n\t\tflex: 0 0 17px\r\n\t\twidth: 17px\r\n\t\tmargin-right: 10px\r\n\r\n.message\r\n\t// background: url(../images/dist/bg_popup.jpg) center / cover no-repeat\r\n\tpadding: 0\r\n\twidth: 500px\r\n\tborder-radius: 4px\r\n\t&__inner\r\n\t\tmin-height: 376px\r\n\t\tpadding: 30px 50px\r\n\t\tdisplay: flex\r\n\t\talign-items: center\r\n\t\tflex-direction: column\r\n\t\tjustify-content: center\r\n\t\tposition: relative\r\n\t\tz-index: 2\r\n\t\tcolor: #fff\r\n\t\ttext-align: center\r\n\t&__title\r\n\t\tfont-family: raleway-geo, sans-serif\r\n\t\tfont-weight: 900\r\n\t\tfont-size: 32px\r\n\t\ttext-transform: none\r\n\t\tletter-spacing: -0.03em\r\n\r\n.fancybox-message\r\n\t.fancybox-slide--html\r\n\t\tpadding: 0\r\n\r\n.fancybox-close-small\r\n\twidth: 68px\r\n\theight: 68px\r\n\r\n.fancybox-slide--html .fancybox-close-small\r\n\tcolor: $accent\r\n\r\n.compensate-for-scrollbar\r\n\tmargin-right: 0!important\r\n\r\n.content\r\n\tfont-family: ibm-geo, sans-serif\r\n\tfont-size: 18px\r\n\tfont-style: italic\r\n\tline-height: 1.28\r\n\th1, h2, h3, h4, h5, h6\r\n\t\tfont-weight: 900\r\n\t\tfont-style: normal\r\n\t\tletter-spacing: -0.03em\r\n\t\tmargin-bottom: 10px\r\n\th1\r\n\t\tfont-size: 36px\r\n\th2\r\n\t\tfont-size: 32px\r\n\th3\r\n\t\tfont-size: 26px\r\n\th4\r\n\t\tfont-size: 24px\r\n\th5\r\n\t\tfont-size: 22px\r\n\th6\r\n\t\tfont-size: 20px\r\n\ta\r\n\t\tcolor: $accent\r\n\tp\r\n\t\tmargin-bottom: 20px\r\n\tblockquote\r\n\t\tmargin-bottom: 30px\r\n\t.row\r\n\t\tp:last-child\r\n\t\t\tmargin-bottom: 0\r\n\r\nh1, h2, h3, h4, h5, h6\r\n\tfont-family: raleway-geo, sans-serif\r\n\r\nblockquote\r\n\tbackground-color: #fff\r\n\tpadding: 20px 46px\r\n\tposition: relative\r\n\t&::before, &::after\r\n\t\tfont-family: ibm-geo, sans-serif\r\n\t\tfont-size: 45px\r\n\t\tfont-style: italic\r\n\t\tcolor: $accent\r\n\t\tposition: absolute\r\n\t&::before\r\n\t\tcontent: '“'\r\n\t\ttop: 5px\r\n\t\tleft: 10px\r\n\t&::after\r\n\t\tcontent: '”'\r\n\t\tbottom: -13px\r\n\t\tright: 15px\r\n\r\n.footer\r\n\tbackground-color: $secondaryDark\r\n\tcolor: #9CB7D9\r\n\tpadding: 70px 0 30px\r\n\t&__top\r\n\t\tmargin-bottom: 25px\r\n\t&__menu\r\n\t\tul\r\n\t\t\tmargin: -5px -20px 0\r\n\t\ta\r\n\t\t\tcolor: #fff\r\n\t\tli\r\n\t\t\tmargin: 5px 20px\r\n\t&__info\r\n\t\tmargin-bottom: 30px\r\n\t&__links\r\n\t\tfont-size: 15px\r\n\t\tline-height: 1\r\n\t\tmargin-bottom: 0\r\n\t\ta\r\n\t\t\tcolor: #fff\r\n\t\t\ttext-decoration: none\r\n\t&__copyright\r\n\t\tfont-size: 15px\r\n\t\ttext-align: right\r\n\t\tline-height: 1\r\n\t\tmargin-bottom: 0\r\n\r\n.info-footer\r\n\t&__text\r\n\t\tline-height: 1.31\r\n\t\tmargin-bottom: 0\r\n\t\ta\r\n\t\t\tcolor: #9CB7D9\r\n\t\t\ttext-decoration: none\r\n\r\n.cats-cards\r\n\t&__row\r\n\t\tmargin-left: -10px\r\n\t\tmargin-right: -10px\r\n\t&__card\r\n\t\tpadding: 0 10px\r\n\t\tmargin-bottom: 20px\r\n\r\n.card-cat\r\n\t&__inner\r\n\t\tcolor: #fff\r\n\t\ttext-decoration: none\r\n\t\t&:hover\r\n\t\t\tcolor: #fff\r\n\t&__img-wrap\r\n\t\tdisplay: flex\r\n\t&__img\r\n\t\twidth: 100%\r\n\t\theight: 200px\r\n\t\tobject-fit: cover\r\n\t\tborder-radius: 4px\r\n\t&__caption\r\n\t\tbackground-color: $accent\r\n\t\tpadding: 10px\r\n\t\ttext-align: center\r\n\t&__title\r\n\t\tmargin-bottom: 0\r\n\r\n.gallery\r\n\t&__row\r\n\t\tmargin-left: -10px\r\n\t\tmargin-right: -10px\r\n\t&__col\r\n\t\tdisplay: flex\r\n\t\tflex-direction: column\r\n\t\tpadding: 0 10px\r\n\t&__item\r\n\t\tdisplay: flex\r\n\t\tmargin-bottom: 20px\r\n\t\theight: 100%\r\n\t&__img\r\n\t\tobject-fit: cover\r\n\t\twidth: 100%\r\n\t\theight: 100%\r\n\t\tborder-radius: 4px\r\n\r\n.fancybox-bg\r\n\tbackground: #000\r\n\r\n.parameters\r\n\t&__item\r\n\t\tmargin-bottom: 20px\r\n\r\n.item-parameter\r\n\t&__header\r\n\t\tdisplay: flex\r\n\t\talign-items: flex-start\r\n\t\tmargin-bottom: 8px\r\n\t&__icon\r\n\t\twidth: 20px\r\n\t\tmargin-right: 8px\r\n\t&__title\r\n\t\tfont-size: 17px\r\n\t\tmargin-bottom: 0\r\n\t&__list\r\n\t\tpadding-left: 25px\r\n\t\tmargin-bottom: 8px\r\n\t&__badge\r\n\t\tmax-width: 130px\r\n\t\tfont-style: normal\r\n\t\tpadding: 2px 5px\r\n\t\tmargin-bottom: 2px\r\n\t&__text-wrap\r\n\t\tfont-family: ibm-geo, sans-serif\r\n\t\tfont-size: 14px\r\n\t\tfont-style: italic\r\n\t\tline-height: 1.43\r\n\r\n.conditions\r\n\t&__block\r\n\t\tmargin-bottom: 20px\r\n\t&__divider\r\n\t\tmargin-top: 0\r\n\t&__items\r\n\t\tmargin-left: -10px\r\n\t\tmargin-right: -10px\r\n\t&__item\r\n\t\tpadding: 0 10px\r\n\t\tmargin-bottom: 20px\r\n\r\n.item-condition\r\n\t&__badge\r\n\t\tdisplay: flex\r\n\t\theight: 100%\r\n\t\ttext-align: center\r\n\t\tjustify-content: center\r\n\r\n.parameters-booking\r\n\t&__item\r\n\t\tmargin-bottom: 30px\r\n\r\n.item-parameters-booking\r\n\t&__title\r\n\t\ttext-transform: none\r\n\t\tmargin-bottom: 10px\r\n\t&__text-wrap\r\n\t\tfont-family: ibm-geo, sans-serif\r\n\t\tfont-size: 18px\r\n\t\tfont-style: italic\r\n\t\tline-height: 1.27\r\n\t&__text\r\n\t\tmargin-bottom: 10px\r\n\t\t&:last-child\r\n\t\t\tmargin-bottom: 0\r\n\r\n.stock\r\n\t&__items\r\n\t\tmargin-left: -35px\r\n\t\tmargin-right: -35px\r\n\t&__item\r\n\t\tpadding: 0 35px\r\n\t\tmargin-bottom: 70px\r\n\r\n.super-map\r\n\t&__inner\r\n\t\toverflow-x: auto\r\n\t\tpadding-bottom: 12px\r\n\t\tposition: relative\r\n\t\t// cursor: url(../images/dist/icons/cursor.png), auto\r\n\t&__text\r\n\t\ttext-align: center\r\n\t\tline-height: 1.25\r\n\t\tmargin-bottom: 10px\r\n\t&__element\r\n\t\tposition: absolute\r\n\t\tdisplay: block\r\n\t\tcursor: pointer\r\n\t&__img\r\n\t\tuser-select: none\r\n\r\n.element-super-map\r\n\t// cursor: url(../images/dist/icons/cursor_accent.png), auto\r\n\t&__balloon\r\n\t\topacity: 0\r\n\t\tvisibility: hidden\r\n\t\ttransition: opacity .25s ease, visibility .25s ease\r\n\t\tposition: absolute\r\n\t\tbottom: 100%\r\n\t\tleft: 50%\r\n\t&.active\r\n\t\t.element-super-map__balloon\r\n\t\t\topacity: 1\r\n\t\t\tvisibility: visible\r\n\r\n.balloon\r\n\twidth: 280px\r\n\tbackground-color: #fff\r\n\tborder: 1px solid $accent\r\n\tborder-radius: 4px\r\n\tpadding: 10px\r\n\tdisplay: flex\r\n\tflex-direction: column\r\n\t&__text\r\n\t\tfont-family: ibm-geo, sans-serif\r\n\t\tfont-style: italic\r\n\t\tline-height: 1.25\r\n\t\tmargin-bottom: 10px\r\n\t&__img\r\n\t\tobject-fit: cover\r\n\t\twidth: 100%\r\n\t\theight: 148px\r\n\t\tborder-radius: 4px\r\n","// USER VARIABLES SECTION\r\n\r\n$accent: #A62318\r\n$success: #0ab14a\r\n$secondary: #4772A7\r\n$secondaryDark: #002F55\r\n$secondaryLight: #BDD0E8\r\n$alpha: #aba385\r\n$bravo: #606060\r\n$fontsize: 16px // Body Font Size\r\n$textcolor: #333 // Text Color\r\n$lineheight: 1.65 // Document Line Height\r\n$userfont: intro-geo, sans-serif // User Font Family\r\n$systemfont: -apple-system, BlinkMacSystemFont, Arial, sans-serif // System Font Family\r\n\r\n// Bootstrap compatible gutter variable => $gutter\r\n$grid-gutter-width: 30px\r\n$gutter: $grid-gutter-width\r\n\r\n$container-max-widths: (sm: 100%, md: 760px, lg: 970px, xl: 1150px)\r\n\r\n// IMPORT SECTION\r\n\r\n\r\nhtml\r\n\toverflow-x: hidden\r\n\r\nbody\r\n\tfont-family: $userfont\r\n\tfont-size: $fontsize\r\n\tline-height: $lineheight\r\n\tcolor: $textcolor\r\n\tmin-width: 320px\r\n\tposition: relative\r\n\toverflow-x: hidden\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.sass":
/*!******************************!*\
  !*** ./src/styles/main.sass ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_main_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./main.sass */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/styles/main.sass");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_main_sass__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_main_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }
  var p;
  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (a[p] !== b[p]) {
      return false;
    }
  }
  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (!a[p]) {
      return false;
    }
  }
  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_main_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_main_sass__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_main_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./main.sass */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/styles/main.sass",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_main_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./main.sass */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/styles/main.sass");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_main_sass__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_main_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_main_sass__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_main_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_main_sass__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_main_sass__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_main_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_main_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/entry.ts":
/*!*****************************!*\
  !*** ./src/assets/entry.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ../styles/main.sass */ "./src/styles/main.sass");
console.log("entry point");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("index." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("3beb9ef0a3bb4de58796")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "my-webpack-project:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatemy_webpack_project"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./src/assets/entry.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLG9JQUFvSSxPQUFPLFdBQVcsT0FBTyxNQUFNLFlBQVksWUFBWSxhQUFhLFlBQVksWUFBWSxXQUFXLFdBQVcsT0FBTyxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxZQUFZLFlBQVksTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsWUFBWSxZQUFZLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFlBQVksWUFBWSxNQUFNLE1BQU0sWUFBWSxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFlBQVksWUFBWSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsWUFBWSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxZQUFZLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsWUFBWSxZQUFZLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksUUFBUSxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxZQUFZLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxZQUFZLE9BQU8sTUFBTSxZQUFZLFFBQVEsTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsWUFBWSxhQUFhLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxZQUFZLGFBQWEsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxZQUFZLGFBQWEsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFlBQVksYUFBYSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFlBQVksYUFBYSxXQUFXLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sYUFBYSxPQUFPLE1BQU0sWUFBWSxRQUFRLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxPQUFPLE1BQU0sWUFBWSxZQUFZLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxhQUFhLFFBQVEsTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsYUFBYSxjQUFjLFlBQVksT0FBTyxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sYUFBYSxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sWUFBWSxPQUFPLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sYUFBYSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLE9BQU8sTUFBTSxZQUFZLFFBQVEsTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxZQUFZLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsWUFBWSxhQUFhLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLGFBQWEsWUFBWSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sYUFBYSxZQUFZLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLE1B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Q0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLElBQUk7V0FDSixHQUFHO1dBQ0g7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDcllBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLG1CQUFtQiwyQkFBMkI7V0FDOUM7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0Esa0JBQWtCLGNBQWM7V0FDaEM7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBLGNBQWMsTUFBTTtXQUNwQjtXQUNBO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGNBQWMsYUFBYTtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBLGlCQUFpQiw0QkFBNEI7V0FDN0M7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLElBQUk7V0FDSjtXQUNBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsSUFBSTtXQUNKOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0EsZ0JBQWdCLDRCQUE0QjtXQUM1QztXQUNBO1dBQ0E7O1dBRUE7V0FDQTs7V0FFQTtXQUNBOztXQUVBO1dBQ0E7O1dBRUE7V0FDQSxnQkFBZ0IsNEJBQTRCO1dBQzVDO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGtCQUFrQix1Q0FBdUM7V0FDekQ7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQSxtQkFBbUIsaUNBQWlDO1dBQ3BEO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxzQkFBc0IsdUNBQXVDO1dBQzdEO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHNCQUFzQixzQkFBc0I7V0FDNUM7V0FDQTtXQUNBLFNBQVM7V0FDVDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsV0FBVztXQUNYLFdBQVc7V0FDWDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLFlBQVk7V0FDWjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxVQUFVO1dBQ1Y7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsV0FBVztXQUNYO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0EsbUJBQW1CLHdDQUF3QztXQUMzRDtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU07V0FDTjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsUUFBUTtXQUNSLFFBQVE7V0FDUjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxTQUFTO1dBQ1Q7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsT0FBTztXQUNQO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxRQUFRO1dBQ1I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUUsSUFBSTtXQUNOO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxJQUFJO1dBQ0o7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQSxzQ0FBc0M7V0FDdEM7V0FDQTtXQUNBLEVBQUU7V0FDRjs7V0FFQTs7V0FFQTs7Ozs7V0M5ZkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvc3R5bGVzL21haW4uc2FzcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9zdHlsZXMvbWFpbi5zYXNzPzBiMjAiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvYXNzZXRzL2VudHJ5LnRzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2dldCBqYXZhc2NyaXB0IHVwZGF0ZSBjaHVuayBmaWxlbmFtZSIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2dldCB1cGRhdGUgbWFuaWZlc3QgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2xvYWQgc2NyaXB0Iiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaG90IG1vZHVsZSByZXBsYWNlbWVudCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAY2hhcnNldCBcIlVURi04XCI7XG5odG1sIHtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IGludHJvLWdlbywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMS42NTtcbiAgY29sb3I6ICMzMzM7XG4gIG1pbi13aWR0aDogMzIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4uY29udGFpbmVyLXh4bCB7XG4gIG1heC13aWR0aDogMTMxMHB4O1xufVxuXG4uc29jaWFscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uc29jaWFsc19faXRlbXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNvY2lhbHNfX2l0ZW0ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogNXB4IDExcHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuLnNvY2lhbHNfX2ljb24ge1xuICBtYXgtd2lkdGg6IDI0cHg7XG59XG4uc29jaWFsc19faGludCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4td2lkdGg6IDE2MnB4O1xuICBwYWRkaW5nOiAxMHB4IDE1cHggMTBweCAxNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjb2xvcjogIzlDQjdEOTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjNDc3MkE3O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbi1sZWZ0OiAxNHB4O1xufVxuLnNvY2lhbHNfX2hpbnQ6OmJlZm9yZSwgLnNvY2lhbHNfX2hpbnQ6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwMCU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci10b3A6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiA4cHggc29saWQgIzQ3NzJBNztcbiAgYm9yZGVyLWJvdHRvbTogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuLnNvY2lhbHNfX2hpbnQ6OmFmdGVyIHtcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjMDAyRjU1O1xuICByaWdodDogY2FsYygxMDAlIC0gMnB4KTtcbn1cbi5zb2NpYWxzX2JvcmRlciAuc29jaWFsc19faXRlbTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMzKTtcbn1cblxuLmJ0biB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI0E2MjMxODtcbiAgZm9udC1mYW1pbHk6IHJhbGV3YXktZ2VvLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjQyO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjI1cyBlYXNlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JjMjgxYjtcbiAgY29sb3I6ICNmZmY7XG59XG4uYnRuX291dGxpbmVfc2Vjb25kYXJ5IHtcbiAgYm9yZGVyLWNvbG9yOiAjNDc3MkE3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5idG5fb3V0bGluZV9zZWNvbmRhcnk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc3MkE3O1xufVxuXG4ubWFpbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbi5zZWN0aW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiA0NXB4O1xuICBmb250LXdlaWdodDogOTAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDNlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMTc7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4uc2VjdGlvbi1kZXNjcmlwdGlvbiB7XG4gIGZvbnQtZmFtaWx5OiByYWxld2F5LWdlbywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMS4xNTtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjM7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5zZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBwYWRkaW5nOiA3MHB4IDA7XG59XG4uc2VjdGlvbl9faGVhZGxpbmUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4uc2VjdGlvbl9fc3BpcmFsLXdyYXAge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuLnNlY3Rpb25faW52ZXJzZSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnNlY3Rpb25faW52ZXJzZSAuc2VjdGlvbi10aXRsZSwgLnNlY3Rpb25faW52ZXJzZSAuc2VjdGlvbi1kZXNjcmlwdGlvbiB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uc2xpZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNsaWRlcl9fYXJyb3dzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cbi5zbGlkZXJfX25hdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgd2lkdGg6IDQxcHg7XG4gIGhlaWdodDogNzlweDtcbiAgc3Ryb2tlOiAjNDc3MkE3O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDBweCA4cHggcmdiYSgwLCAwLCAwLCAwLjQpKTtcbiAgcGFkZGluZzogMTJweDtcbn1cbi5zbGlkZXJfX25hdl9wcmV2IHtcbiAgbGVmdDogLTg1cHg7XG59XG4uc2xpZGVyX19uYXZfbmV4dCB7XG4gIHJpZ2h0OiAtODVweDtcbn1cbi5zbGlkZXJfd2hpdGUgLnNsaWRlcl9fbmF2IHtcbiAgc3Ryb2tlOiAjZmZmO1xufVxuXG4uc2xpZGVyLXNob3djYXNlX19hcnJvd3Mge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zZm9ybTogbm9uZTtcbn1cbi5zbGlkZXItc2hvd2Nhc2VfX25hdiB7XG4gIHRvcDogYXV0bztcbiAgdHJhbnNmb3JtOiBub25lO1xuICBib3R0b206IDEzNXB4O1xufVxuLnNsaWRlci1zaG93Y2FzZV9fbmF2X3ByZXYge1xuICBsZWZ0OiAtMTJweDtcbn1cbi5zbGlkZXItc2hvd2Nhc2VfX25hdl9uZXh0IHtcbiAgcmlnaHQ6IC0xMnB4O1xufVxuXG4uaXRlbS1zaG93Y2FzZSB7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgaGVpZ2h0OiA4MDBweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDExNXB4O1xufVxuLml0ZW0tc2hvd2Nhc2VfX2NvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLnNlY3Rpb24tYmVuZWZpdHMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDcwcHggMCAxNjNweDtcbn1cbi5zZWN0aW9uLWJlbmVmaXRzOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDk1cHg7XG4gIGhlaWdodDogMTU5cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICBib3R0b206IC02NnB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG59XG4uc2VjdGlvbi1iZW5lZml0cyAuYmVuZWZpdHMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5iZW5lZml0cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMCAtMTBweDtcbn1cbi5iZW5lZml0c19faXRlbSB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgZmxleDogMCAwIDMwJTtcbiAgbWF4LXdpZHRoOiAzMCU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uYmVuZWZpdHNfX2l0ZW0uaXRlbS1iZW5lZml0X2xnIHtcbiAgZmxleDogMCAwIDQwJTtcbiAgbWF4LXdpZHRoOiA0MCU7XG59XG4uYmVuZWZpdHNfX2l0ZW06bnRoLWNoaWxkKDFuKSAuaXRlbS1iZW5lZml0X19pbm5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NzcyQTc7XG59XG4uYmVuZWZpdHNfX2l0ZW06bnRoLWNoaWxkKDJuKSAuaXRlbS1iZW5lZml0X19pbm5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDJGNTU7XG59XG4uYmVuZWZpdHNfX2l0ZW06bnRoLWNoaWxkKDNuKSAuaXRlbS1iZW5lZml0X19pbm5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhYmEzODU7XG59XG4uYmVuZWZpdHNfX2l0ZW06bnRoLWNoaWxkKDRuKSAuaXRlbS1iZW5lZml0X19pbm5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MDYwNjA7XG59XG4uYmVuZWZpdHNfX2l0ZW06bnRoLWNoaWxkKDVuKSAuaXRlbS1iZW5lZml0X19pbm5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNBNjIzMTg7XG59XG5cbi5pdGVtLWJlbmVmaXQge1xuICBtaW4taGVpZ2h0OiAyNjBweDtcbn1cbi5pdGVtLWJlbmVmaXRfX2lubmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ3NzJBNztcbiAgcGFkZGluZzogMjhweCAxMHB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1mYW1pbHk6IHJhbGV3YXktZ2VvLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLml0ZW0tYmVuZWZpdF9faWNvbiB7XG4gIG1heC13aWR0aDogMTMwcHg7XG4gIG1hcmdpbjogMCBhdXRvIDEwcHg7XG59XG4uaXRlbS1iZW5lZml0X190aXRsZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLml0ZW0tYmVuZWZpdF9fdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjM7XG4gIGNvbG9yOiAjRTREOEJDO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uc2VjdGlvbi10b3VycyB7XG4gIHBhZGRpbmctdG9wOiA5NnB4O1xufVxuXG4udG91cnMge1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gIG1hcmdpbi1yaWdodDogLTEwcHg7XG59XG4udG91cnNfX2l0ZW0ge1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5pdGVtLXRvdXJfX2lubmVyIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG1pbi1oZWlnaHQ6IDI0MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaXRlbS10b3VyX19pbm5lcjpob3ZlciAuaXRlbS10b3VyX19iZyB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cbi5pdGVtLXRvdXJfX2JnLXdyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbn1cbi5pdGVtLXRvdXJfX2JnIHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlO1xufVxuLml0ZW0tdG91cl9fY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHBhZGRpbmc6IDEwcHggMThweCAxN3B4IDE5cHg7XG4gIHdpZHRoOiAyMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBtaW4taGVpZ2h0OiBpbmhlcml0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuLml0ZW0tdG91cl9fdGl0bGUge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5pdGVtLXRvdXJfX3RleHQge1xuICBmb250LWZhbWlseTogaWJtLWdlbywgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBsaW5lLWhlaWdodDogMS4yNTtcbiAgY29sb3I6ICNCREQwRTg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiA2O1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xufVxuLml0ZW0tdG91cl9fdGV4dDpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5pdGVtLXRvdXJfX2J0biB7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG59XG4uaXRlbS10b3VyX3N0b2NrIC5pdGVtLXRvdXJfX2lubmVyIHtcbiAgbWluLWhlaWdodDogMzAwcHg7XG59XG4uaXRlbS10b3VyX3N0b2NrIC5pdGVtLXRvdXJfX2NvbnRlbnQge1xuICB3aWR0aDogMjY1cHg7XG59XG5cbi5saW5rIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcbiAgY29sb3I6ICM0NzcyQTc7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4yNXMgZWFzZTtcbn1cbi5saW5rOmhvdmVyIHtcbiAgY29sb3I6ICM2NDhjYmQ7XG59XG4ubGluazpob3ZlciAubGlua19faWNvbiB7XG4gIHN0cm9rZTogIzY0OGNiZDtcbn1cbi5saW5rX19pY29uIHtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMXB4O1xuICBmaWxsOiBub25lO1xuICBzdHJva2U6ICM0NzcyQTc7XG4gIHRyYW5zaXRpb246IHN0cm9rZSAwLjI1cyBlYXNlO1xufVxuLmxpbmtfYWNjZW50IHtcbiAgY29sb3I6ICNBNjIzMTg7XG59XG4ubGlua19hY2NlbnQgLmxpbmtfX2ljb24ge1xuICBzdHJva2U6ICNBNjIzMTg7XG59XG4ubGlua19hY2NlbnQ6aG92ZXIge1xuICBjb2xvcjogI2QzMmMxZTtcbn1cbi5saW5rX2FjY2VudDpob3ZlciAubGlua19faWNvbiB7XG4gIHN0cm9rZTogI2QzMmMxZTtcbn1cblxuLmJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NzcyQTc7XG4gIHBhZGRpbmc6IDdweCAxNXB4O1xuICBmb250LWZhbWlseTogaWJtLWdlbywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMS41MztcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICNmZmY7XG59XG4uYmFkZ2Vfc3VjY2VzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwYWIxNGE7XG59XG4uYmFkZ2Vfc2Vjb25kYXJ5LWxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0JERDBFODtcbn1cblxuLnNlY3Rpb24tcGxhY2luZ19fbGluay13cmFwIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLnNsaWRlci1wbGFjaW5nIC5zbGljay1saXN0IHtcbiAgbWFyZ2luOiAwIC03LjVweDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG4uc2xpZGVyLXBsYWNpbmdfX2l0ZW0ge1xuICBtYXJnaW46IDAgNy41cHg7XG59XG5cbi5pdGVtLXBsYWNpbmcge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgaGVpZ2h0OiAyODVweDtcbn1cbi5pdGVtLXBsYWNpbmc6aG92ZXIgLml0ZW0tcGxhY2luZ19fY29udGVudCB7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG4uaXRlbS1wbGFjaW5nX19jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMjVweCAyNXB4IDMycHg7XG4gIGhlaWdodDogMTAwJTtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzIGVhc2UsIHZpc2liaWxpdHkgMC4yNXMgZWFzZTtcbn1cbi5pdGVtLXBsYWNpbmdfX3RleHQge1xuICBmb250LWZhbWlseTogaWJtLWdlbywgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBsaW5lLWhlaWdodDogMS4yNTtcbiAgbWFyZ2luLWJvdHRvbTogMTNweDtcbn1cbi5pdGVtLXBsYWNpbmdfX2JhZGdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC0xNXB4O1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cbi5pdGVtLXBsYWNpbmdfX2xpbmsge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBjb2xvcjogIzlDQjdEOTtcbn1cbi5pdGVtLXBsYWNpbmdfX2xpbmsgLmxpbmtfX2ljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDdweDtcbiAgc3Ryb2tlOiAjOUNCN0Q5O1xufVxuXG4uYmxvZ19faXRlbXMge1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gIG1hcmdpbi1yaWdodDogLTEwcHg7XG59XG4uYmxvZ19fY2FyZCB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5ibG9nX19saW5rLXdyYXAge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uY2FyZC1ibG9nX19pbm5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgY29sb3I6ICMzMzM7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmNhcmQtYmxvZ19faW1nLXdyYXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uY2FyZC1ibG9nX19pbWctd3JhcDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzYwZGVnLCByZ2JhKDAsIDAsIDAsIDAuNjMpIDAlLCByZ2JhKDAsIDAsIDAsIDApIDU0LjM5JSk7XG59XG4uY2FyZC1ibG9nX19pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyODVweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4uY2FyZC1ibG9nX190aXRsZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDI7XG4gIGJvdHRvbTogMTJweDtcbiAgbGVmdDogMjZweDtcbiAgcmlnaHQ6IDI2cHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4uY2FyZC1ibG9nX19jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xuICBmb250LWZhbWlseTogaWJtLWdlbywgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBsaW5lLWhlaWdodDogMS4yNTtcbiAgY29sb3I6ICMzMzM7XG4gIHBhZGRpbmc6IDEzcHggMjZweCAyNnB4O1xufVxuXG4uZm9ybS1tYWlsaW5nIHtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uZm9ybS1tYWlsaW5nX19yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmZvcm0tbWFpbGluZ19fY29udHJvbCB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLm5vdGljZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ3NzJBNztcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMCAxMHB4IDE1cHg7XG59XG4ubm90aWNlIHAge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLm5vdGljZV9zdWNjZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBhYjE0YTtcbn1cbi5ub3RpY2VfZGFuZ2VyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0E2MjMxODtcbn1cblxuLmZvbGxvdy11cyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5mb2xsb3ctdXNfX3RleHQge1xuICBmb250LWZhbWlseTogcmFsZXdheS1nZW8sIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggOHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cbi5mb2xsb3ctdXNfX3NvY2lhbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5mb2xsb3ctdXNfX2l0ZW0ge1xuICBtYXJnaW46IDAgMTVweDtcbn1cblxuLml0ZW0tZm9sbG93LXVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB3aWR0aDogOTBweDtcbiAgaGVpZ2h0OiA5MHB4O1xuICBwYWRkaW5nOiAxM3B4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMjVzIGVhc2U7XG59XG4uaXRlbS1mb2xsb3ctdXM6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG59XG4uaXRlbS1mb2xsb3ctdXNfX2ljb24ge1xuICBoZWlnaHQ6IDYzcHg7XG59XG5cbi5zZWN0aW9uLW1haWxpbmcgLmZvcm0tbWFpbGluZyB7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbi5zZWN0aW9uLXBsYWNlcyB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5pdGVtLXBsYWNlIHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwYWRkaW5nOiAxMDBweCAwIDgycHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuLml0ZW0tcGxhY2VfX2NvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogcmFsZXdheS1nZW8sIHNhbnMtc2VyaWY7XG59XG4uaXRlbS1wbGFjZV9faGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTE2cHg7XG59XG4uaXRlbS1wbGFjZV9fdGl0bGUge1xuICB0ZXh0LXNoYWRvdzogMHB4IDBweCA4cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLml0ZW0tcGxhY2VfX3RleHQge1xuICB0ZXh0LXNoYWRvdzogMHB4IDBweCA4cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uaXRlbS1wbGFjZV9fc3VidGl0bGUge1xuICB0ZXh0LXNoYWRvdzogMHB4IDBweCA4cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBmb250LXdlaWdodDogOTAwO1xuICBmb250LXNpemU6IDIxcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uaXRlbS1wbGFjZV9kZWZhdWx0IHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtaW4taGVpZ2h0OiA0NTRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogNTBweCAxMHB4O1xufVxuLml0ZW0tcGxhY2VfZGVmYXVsdDo6YmVmb3JlIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLml0ZW0tcGxhY2VfZGVmYXVsdCAuaXRlbS1wbGFjZV9fY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uaXRlbS1wbGFjZV9kZWZhdWx0IC5pdGVtLXBsYWNlX190ZXh0IHtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4uYmFubmVyIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMjZweCAwIDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG59XG4uYmFubmVyOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG4uYmFubmVyX190aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4uYmFubmVyX19jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5icmVhZGNydW1ic19fbGlzdCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuLmJyZWFkY3J1bWJzX19pdGVtIHtcbiAgZm9udC1mYW1pbHk6IGlibS1nZW8sIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cbi5icmVhZGNydW1ic19faXRlbSArIC5icmVhZGNydW1ic19faXRlbTo6YmVmb3JlIHtcbiAgY29udGVudDogXCIvXCI7XG4gIHBhZGRpbmc6IDAgNHB4IDAgMXB4O1xufVxuLmJyZWFkY3J1bWJzIGEge1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uZmlsdGVyX19saXN0IHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uZmlsdGVyX19pdGVtOmhvdmVyIGEsIC5maWx0ZXJfX2l0ZW0uZmlsdGVyX19pdGVtX2FjdGl2ZSBhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICMwMDA7XG59XG4uZmlsdGVyIGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiByYWxld2F5LWdlbywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjNDc3MkE3O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMjVzIGVhc2UsIGNvbG9yIDAuMjVzIGVhc2U7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uZmlsdGVyIGE6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogIzAwMDtcbn1cblxuLmFzaWRlX19ibG9jazpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLWJvdHRvbTogNzBweDtcbn1cbi5hc2lkZV9fZGl2aWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5wYWdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViZWZmMjtcbiAgcGFkZGluZzogMzBweCAwIDcwcHg7XG59XG4ucGFnZS5iZy13aGl0ZSAuY2FyZF9fc3BpcmFsIHtcbiAgZmlsbDogI2ViZWJlYjtcbn1cbi5wYWdlX19maWx0ZXIge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLnBhZ2VfX3BhZ2VzIHtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbn1cbi5wYWdlX19uYXZpZ2F0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbn1cbi5wYWdlX190YWJzIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi5wYWdlX190aXRsZSB7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wM2VtO1xuICBmb250LXNpemU6IDMycHg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi5wYWdlX19mZWVkYmFjayB7XG4gIG1hcmdpbi10b3A6IDcwcHg7XG59XG4ucGFnZV9fYmxvY2sge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLnBhZ2VfX3RlYW0ge1xuICBtYXJnaW46IDMwcHggMCAwO1xufVxuLnBhZ2VfX3NsaWRlci1pbWFnZXMge1xuICBtYXJnaW46IDcwcHggMDtcbn1cbi5wYWdlX19zdXBlci1tYXAge1xuICBtYXJnaW4tYm90dG9tOiA3MHB4O1xufVxuXG4udGFicyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLnRhYi1idG4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMTJweCAyMHB4O1xuICBmb250LWZhbWlseTogcmFsZXdheS1nZW8sIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNDI7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA2ZW07XG4gIGNvbG9yOiAjNDc3MkE3O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4yNXMgZWFzZSwgY29sb3IgMC4yNXMgZWFzZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNCREJEQkQ7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4udGFiLWJ0bjpob3ZlciwgLnRhYi1idG4uYWN0aXZlLCAudGFiLWJ0bjpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMEYzRjc7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4udG91ci1jYXJkcyB7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcbn1cbi50b3VyLWNhcmRzX19jYXJkIHtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uY2FyZF9faW5uZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICMwMDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5jYXJkX19pbm5lcjpob3ZlciB7XG4gIGNvbG9yOiAjMDAwO1xufVxuLmNhcmRfX2luZm9zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gIG1hcmdpbi1yaWdodDogLTEwcHg7XG59XG4uY2FyZF9faW5mbyB7XG4gIG1hcmdpbjogMCAxMHB4IDhweDtcbn1cbi5jYXJkX19pbWctd3JhcCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uY2FyZF9faW1nIHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGhlaWdodDogMjAycHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4uY2FyZF9fY29udGVudCB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uY2FyZF9fdGV4dC13cmFwIHtcbiAgZm9udC1mYW1pbHk6IGlibS1nZW8sIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG59XG4uY2FyZF9fdGV4dCB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbi5jYXJkX2V4Y3Vyc2lvbiAuY2FyZF9fdGV4dC13cmFwIHtcbiAgZm9udC1mYW1pbHk6IHJhbGV3YXktZ2VvLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuLmluZm8tY2FyZCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LWZhbWlseTogaWJtLWdlbywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogIzgyODI4Mjtcbn1cbi5pbmZvLWNhcmRfX2ljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5kZXRhaWxzLWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbjogMCAtOHB4O1xufVxuLmRldGFpbHMtY2FyZF9faXRlbSB7XG4gIGZvbnQtZmFtaWx5OiByYWxld2F5LWdlbywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMS4yMztcbiAgcGFkZGluZzogMCA4cHg7XG59XG4uZGV0YWlscy1jYXJkX19pdGVtOm5vdCg6bGFzdC1jaGlsZCkge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjQkRCREJEO1xufVxuLmRldGFpbHMtY2FyZF9faWNvbiB7XG4gIHdpZHRoOiAxNXB4O1xufVxuXG4ucmV2aWV3c19faXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4ucmV2aWV3c19faXRlbTpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLml0ZW0tcmV2aWV3X19pbm5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uaXRlbS1yZXZpZXdfX2ltZy13cmFwIHtcbiAgZmxleDogMCAwIDE4MHB4O1xuICB3aWR0aDogMTgwcHg7XG4gIG1hcmdpbjogMCAyMHB4IDAgMDtcbn1cbi5pdGVtLXJldmlld19faW1nIHtcbiAgaGVpZ2h0OiAxODBweDtcbn1cbi5pdGVtLXJldmlld19faW5mb3Mge1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuLml0ZW0tcmV2aWV3X190aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uaXRlbS1yZXZpZXdfX2NvbnRlbnQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4ucGFnZXMge1xuICBmb250LWZhbWlseTogaWJtLWdlbywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogIzgyODI4Mjtcbn1cbi5wYWdlc19fY291bnQge1xuICBmb250LWZhbWlseTogcmFsZXdheS1nZW8sIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4ucGFnZS1uYXZpZ2F0aW9uIHtcbiAgZm9udC1mYW1pbHk6IHJhbGV3YXktZ2VvLCBzYW5zLXNlcmlmO1xufVxuLnBhZ2UtbmF2aWdhdGlvbl9fbGlzdCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luOiAwIC0xMy41cHg7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ucGFnZS1uYXZpZ2F0aW9uIGxpIHtcbiAgbWFyZ2luOiAwIDEzLjVweDtcbn1cbi5wYWdlLW5hdmlnYXRpb24gYSB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjM7XG4gIGNvbG9yOiAjNDc3MkE3O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4ucGFnZS1uYXZpZ2F0aW9uIGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLnBhZ2luYXRpb24ge1xuICBmb250LWZhbWlseTogcmFsZXdheS1nZW8sIHNhbnMtc2VyaWY7XG59XG4ucGFnaW5hdGlvbl9fbGlzdCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4ucGFnaW5hdGlvbiBsaTpob3ZlciBhLCAucGFnaW5hdGlvbiBsaS5hY3RpdmUgYSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbG9yOiAjMDAwO1xufVxuLnBhZ2luYXRpb24gYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiA2cHggMTNweCA3cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjM7XG4gIGNvbG9yOiAjNDc3MkE3O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4yNXMgZWFzZSwgY29sb3IgMC4yNXMgZWFzZTtcbn1cblxuLmxpbmtzLXBhZ2VfX2l0ZW0ge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLmxpbmtzLXBhZ2VfX3RpdGxlIHtcbiAgZm9udC1mYW1pbHk6IGlibS1nZW8sIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICMwMDA7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ubGlua3MtcGFnZV9fbGlzdCB7XG4gIGZvbnQtZmFtaWx5OiByYWxld2F5LWdlbywgc2Fucy1zZXJpZjtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG4ubGlua3MtcGFnZSBsaSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgY29sb3I6ICM0NzcyQTc7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xufVxuLmxpbmtzLXBhZ2UgbGk6bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ubGlua3MtcGFnZSBsaS5hY3RpdmUgYSB7XG4gIGNvbG9yOiAjMDAwO1xufVxuLmxpbmtzLXBhZ2UgYSB7XG4gIGNvbG9yOiAjNDc3MkE3O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMjVzIGVhc2U7XG59XG4ubGlua3MtcGFnZSBhOmhvdmVyIHtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5jb250cm9sLCAuc2VsZWN0LCAuZGF0ZXBpY2tlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA4cHggMTFweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2JkYmRiZDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LWZhbWlseTogcmFsZXdheS1nZW8sIHNhbnMtc2VyaWY7XG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogXCJsbnVtXCIgMTtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMS4yNDtcbiAgY29sb3I6ICMwMDA7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5jb250cm9sOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuLmNvbnRyb2xfaWNvbiB7XG4gIHBhZGRpbmc6IDhweCAzMHB4IDhweCAxMXB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjYWxjKDEwMCUgLSAxMXB4KTtcbiAgYmFja2dyb3VuZC1zaXplOiBhdXRvIDE2cHg7XG59XG4uY29udHJvbF9tYWlsaW5nIHtcbiAgcGFkZGluZzogMTVweCAyMHB4O1xuICBib3JkZXItY29sb3I6ICNlMGUwZTA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5jb250cm9sLmVycm9yIHtcbiAgYm9yZGVyLWNvbG9yOiAjQTYyMzE4O1xufVxuLmNvbnRyb2wuZXJyb3I6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNBNjIzMTg7XG59XG5cbi5zZWxlY3Qge1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGF1dG8gMTZweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2FsYygxMDAlIC0gMTFweCk7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxudGV4dGFyZWEge1xuICBoZWlnaHQ6IDE1MHB4O1xuICByZXNpemU6IG5vbmU7XG59XG5cbi5maWxlLXNlbGVjdG9yIHtcbiAgY29sb3I6ICNBNjIzMTg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5maWxlLXNlbGVjdG9yX19pbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbn1cbi5maWxlLXNlbGVjdG9yX2Vycm9yIHtcbiAgYm9yZGVyLWNvbG9yOiAjQTYyMzE4O1xufVxuXG4uZmlsZS1pbWctd3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5maWxlLWltZy13cmFwLnNlbGVjdGVkIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi5maWxlLWltZy13cmFwLnNlbGVjdGVkIC5maWxlLWltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZmlsZS1pbWcge1xuICBkaXNwbGF5OiBub25lO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5maWxlLXRleHQge1xuICBmb250LWZhbWlseTogcmFsZXdheS1nZW8sIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgY29sb3I6ICM4MjgyODI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiBjYWxjKDEwMCUgKyAxMHB4KTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmNoZWNrYm94IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jaGVja2JveCBpbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbiAgaGVpZ2h0OiAwO1xuICB3aWR0aDogMDtcbn1cbi5jaGVja2JveCBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyazo6YmVmb3JlIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmNoZWNrbWFyayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDAgMCAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2JkYmRiZDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uY2hlY2ttYXJrOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDE0cHg7XG4gIGhlaWdodDogMTRweDtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cyBlYXNlO1xufVxuXG4ubGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1mYW1pbHk6IGlibS1nZW8sIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBsaW5lLWhlaWdodDogMS4yNTtcbiAgY29sb3I6ICM4MjgyODI7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLmNvdW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1heC13aWR0aDogMTMwcHg7XG59XG4uY291bnRlcl9fY29udHJvbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgd2lkdGg6IDUzcHg7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG59XG4uY291bnRlcl9fY29udHJvbDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiwgLmNvdW50ZXJfX2NvbnRyb2w6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG4uY291bnRlcl9fYnRuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBib3JkZXItY29sb3I6ICNBNjIzMTg7XG4gIGNvbG9yOiAjQTYyMzE4O1xuICBwYWRkaW5nOiAwO1xufVxuXG4uYm9va2luZ19faGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U0RDhCQztcbiAgcGFkZGluZzogMTRweCAyMHB4O1xufVxuLmJvb2tpbmdfX3RpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNmVtO1xuICBsaW5lLWhlaWdodDogMS40MjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICM0ZjRmNGY7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4uYm9va2luZ19fY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmVjZGU7XG4gIHBhZGRpbmc6IDIwcHggMjBweCAxOHB4O1xufVxuLmJvb2tpbmdfX2NvbnRyb2xzIHtcbiAgbWFyZ2luOiAwIC01cHg7XG59XG4uYm9va2luZ19fZ3JvdXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmJvb2tpbmdfX2dyb3VwX2xlc3MtbWFyZ2luIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5ib29raW5nX19yb3cge1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcbn1cbi5ib29raW5nX19yb3dfY2hpbGRyZW4ge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmJvb2tpbmdfX2NvbCB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cbi5ib29raW5nX19yZXN1bHQge1xuICBtYXJnaW46IDUwcHggMCAzMHB4O1xufVxuLmJvb2tpbmdfX2J0biB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmJvb2tpbmdfX2R1cGxpY2F0ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAwO1xuICBmb250LWZhbWlseTogaWJtLWdlbywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGNvbG9yOiAjQTYyMzE4O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBsaW5lLWhlaWdodDogMS40MjtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4yNXMgZWFzZTtcbn1cbi5ib29raW5nX19kdXBsaWNhdGU6aG92ZXIge1xuICBjb2xvcjogI2QzMmMxZTtcbn1cbi5ib29raW5nIC5nLXJlY2FwdGNoYSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC44NSk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbn1cblxuLnJlc3VsdC1ib29raW5nX190aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG59XG4ucmVzdWx0LWJvb2tpbmdfX3N1YnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IGlibS1nZW8sIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS4yNTtcbiAgY29sb3I6ICM4MjgyODI7XG59XG4ucmVzdWx0LWJvb2tpbmdfX2l0ZW0ge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uaXRlbS1yZXN1bHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjb2xvcjogIzAwMDtcbn1cbi5pdGVtLXJlc3VsdF9fdGl0bGUge1xuICBmb250LWZhbWlseTogaWJtLWdlbywgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uaXRlbS1yZXN1bHRfX3ZhbHVlIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLml0ZW0tcmVzdWx0X19kaXZpZGVyIHtcbiAgZmxleC1ncm93OiAxO1xuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICM4MjgyODI7XG4gIG1hcmdpbjogMCAwIDJweCA3cHg7XG59XG4uaXRlbS1yZXN1bHRfdG90YWwge1xuICBtYXJnaW4tdG9wOiAxOHB4O1xufVxuLml0ZW0tcmVzdWx0X3RvdGFsIC5pdGVtLXJlc3VsdF9fdmFsdWUge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uc2xpZGVyLWltYWdlcy13cmFwcGVyX19pbm5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG59XG5cbi5zbGlkZXItaW1hZ2VzLW1haW5fX2l0ZW1zIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5zbGlkZXItaW1hZ2VzLW1haW5fX2l0ZW1zIC5zbGljay1saXN0IHtcbiAgbWFyZ2luOiAwIC0xMHB4O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG4uc2xpZGVyLWltYWdlcy1tYWluX19pdGVtcyAuc2xpZGVyLWltYWdlc19faXRlbSB7XG4gIG1hcmdpbjogMCAxMHB4IDZweDtcbn1cbi5zbGlkZXItaW1hZ2VzLW1haW5fX2l0ZW1zX3NpbmdsZSAuc2xpZGVyLWltYWdlc19faXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4uc2xpZGVyLWltYWdlcy1tYWluX19uYXZfcHJldiB7XG4gIGxlZnQ6IDA7XG59XG4uc2xpZGVyLWltYWdlcy1tYWluX19uYXZfbmV4dCB7XG4gIHJpZ2h0OiAwO1xufVxuXG4uc2xpZGVyLWltYWdlcy10aHVtYnNfX2l0ZW1zIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLWJvdHRvbTogLTRweDtcbn1cbi5zbGlkZXItaW1hZ2VzLXRodW1ic19faXRlbXMgLnNsaWNrLWxpc3Qge1xuICBtYXJnaW46IDAgLTVweDtcbiAgcGFkZGluZzogMCAzMHB4IDAgMCAhaW1wb3J0YW50O1xufVxuLnNsaWRlci1pbWFnZXMtdGh1bWJzX19pdGVtcyAuc2xpZGVyLWltYWdlc19faXRlbSB7XG4gIG1hcmdpbjogMCAxcHg7XG59XG5cbi5pdGVtLWltYWdlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5pdGVtLWltYWdlczpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLml0ZW0taW1hZ2VzLnNsaWNrLWN1cnJlbnQsIC5pdGVtLWltYWdlcy5zbGljay1jdXJyZW50LWNsb25lLWFuaW1hdGUge1xuICBib3JkZXItY29sb3I6ICM0NzcyQTc7XG59XG4uaXRlbS1pbWFnZXNfX2ltZyB7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0NTVweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLml0ZW0taW1hZ2VzX190aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMjBweDtcbiAgcmlnaHQ6IDIwcHg7XG4gIGJvdHRvbTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB6LWluZGV4OiAyO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLml0ZW0taW1hZ2VzX3RodW1iIHtcbiAgYm9yZGVyOiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBib3JkZXIgMC4yNXMgZWFzZTtcbn1cbi5pdGVtLWltYWdlc190aHVtYiAuaXRlbS1pbWFnZXNfX2ltZyB7XG4gIGhlaWdodDogMTIwcHg7XG59XG5cbi5maWxlcy1wYWdlX190aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uZmlsZXMtcGFnZV9fdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiByYWxld2F5LWdlbywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzAwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uZmlsZXMtcGFnZV9faXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG5cbi5pdGVtLWZpbGVfX2xpbmsge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IHJhbGV3YXktZ2VvLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICBjb2xvcjogIzAwMDtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4yNXMgZWFzZTtcbn1cbi5pdGVtLWZpbGVfX2xpbms6aG92ZXIge1xuICBjb2xvcjogI0E2MjMxODtcbn1cbi5pdGVtLWZpbGVfX2ljb24ge1xuICBtYXgtd2lkdGg6IDEzcHg7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbn1cblxuLmZlZWRiYWNrX19yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcbn1cbi5mZWVkYmFja19fY29sIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuLmZlZWRiYWNrX19jb2xfZmlsZSB7XG4gIGZsZXg6IDAgMCAxNzNweDtcbiAgbWF4LXdpZHRoOiAxNzNweDtcbn1cbi5mZWVkYmFja19fY29sX25hbWUsIC5mZWVkYmFja19fY29sX3Byb2dyYW0sIC5mZWVkYmFja19fY29sX2VtYWlsIHtcbiAgZmxleDogMCAwIDI5OXB4O1xuICBtYXgtd2lkdGg6IDI5OXB4O1xufVxuLmZlZWRiYWNrX19jb2xfc2Vhc29uIHtcbiAgZmxleDogMCAwIDE1NXB4O1xuICBtYXgtd2lkdGg6IDE1NXB4O1xufVxuLmZlZWRiYWNrX19jb2xfeWVhciB7XG4gIGZsZXg6IDAgMCAxMjNweDtcbiAgbWF4LXdpZHRoOiAxMjNweDtcbn1cbi5mZWVkYmFja19fY29sX3Bob25lIHtcbiAgZmxleDogMCAwIDI0MHB4O1xuICBtYXgtd2lkdGg6IDI0MHB4O1xufVxuLmZlZWRiYWNrX19jb2xfdGV4dGFyZWEsIC5mZWVkYmFja19fY29sX2NhcHRjaGEge1xuICBmbGV4OiAwIDAgMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuLmZlZWRiYWNrX19idG4ge1xuICB3aWR0aDogMjc5cHg7XG59XG4uZmVlZGJhY2tfX3RpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnNlY3Rpb24tbWFwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNlY3Rpb24tbWFwX19tYXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbn1cbi5zZWN0aW9uLW1hcF9fbWFwIGlmcmFtZSB7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5zZWN0aW9uLW1hcF9fY29udGFpbmVyIHtcbiAgei1pbmRleDogMjtcbiAgY29sb3I6ICNmZmY7XG59XG4uc2VjdGlvbi1tYXBfX2lubmVyIHtcbiAgbWF4LXdpZHRoOiAzOTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiA3MHB4IDMwcHggNzBweCAwO1xufVxuLnNlY3Rpb24tbWFwX19pbm5lcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogLTk5OTlweDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG59XG4uc2VjdGlvbi1tYXBfX2NvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG59XG4uc2VjdGlvbi1tYXBfX3RpdGxlLCAuc2VjdGlvbi1tYXBfX3RleHQge1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggOHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cbi5zZWN0aW9uLW1hcF9fdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLnNlY3Rpb24tbWFwX190ZXh0LXdyYXAge1xuICBtYXJnaW4tYm90dG9tOiA0M3B4O1xufVxuXG4udGVhbV9faXRlbXMge1xuICBtYXJnaW4tYm90dG9tOiAtMjBweDtcbn1cbi50ZWFtX190aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4udGVhbV9faXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4udGVhbV9sZyAudGVhbV9faXRlbXMge1xuICBtYXJnaW4tbGVmdDogLTM1cHg7XG4gIG1hcmdpbi1yaWdodDogLTM1cHg7XG4gIG1hcmdpbi1ib3R0b206IC03MHB4O1xufVxuLnRlYW1fbGcgLnRlYW1fX2l0ZW0ge1xuICBwYWRkaW5nOiAwIDM1cHg7XG4gIG1hcmdpbi1ib3R0b206IDcwcHg7XG59XG4udGVhbV9sZyAuaXRlbS10ZWFtX19pbm5lciB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4udGVhbV9sZyAuaXRlbS10ZWFtX19pbWctd3JhcCB7XG4gIGZsZXg6IDAgMCAyMDBweDtcbiAgd2lkdGg6IDIwMHB4O1xufVxuLnRlYW1fbGcgLml0ZW0tdGVhbV9faW1nIHtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLml0ZW0tdGVhbV9faW5uZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLml0ZW0tdGVhbV9faW1nLXdyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAwIDAgMTUwcHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgbWFyZ2luOiAwIDIwcHggMCAwO1xufVxuLml0ZW0tdGVhbV9faW1nIHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE1MHB4O1xufVxuLml0ZW0tdGVhbV9fY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uaXRlbS10ZWFtX190aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5pdGVtLXRlYW1fX3Bvc2l0aW9uIHtcbiAgZm9udC1mYW1pbHk6IGlibS1nZW8sIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBsaW5lLWhlaWdodDogMS4yNTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5pdGVtLXRlYW1fX3RleHQtd3JhcCB7XG4gIGZvbnQtZmFtaWx5OiBpYm0tZ2VvLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbGluZS1oZWlnaHQ6IDEuNDI7XG4gIGNvbG9yOiAjMDAwO1xufVxuLml0ZW0tdGVhbV9fdGV4dDpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5pdGVtLXRlYW1fX2NvbnRhY3RzIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbn1cbi5pdGVtLXRlYW1fX2NvbnRhY3Q6bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uaXRlbS10ZWFtX19jb250YWN0IC5pdGVtLWNvbnRhY3RfX3ZhbHVlIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5pdGVtLXRlYW1fX3NvY2lhbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbjogMCAtNXB4IDVweDtcbn1cbi5pdGVtLXRlYW1fX3NvY2lhbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbGV4OiAwIDAgMTdweDtcbiAgd2lkdGg6IDE3cHg7XG4gIGhlaWdodDogMTdweDtcbiAgbWFyZ2luOiAwIDVweCA1cHg7XG59XG4uaXRlbS10ZWFtX19zb2NpYWwtaWNvbiB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5jdXN0b20tc2Nyb2xsYmFyLWhvcml6b250YWw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5jdXN0b20tc2Nyb2xsYmFyLWhvcml6b250YWw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgaGVpZ2h0OiAycHg7XG4gIHdpZHRoOiAyMDBweDtcbn1cbi5jdXN0b20tc2Nyb2xsYmFyLWhvcml6b250YWw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogI0E2MjMxODtcbn1cbi5jdXN0b20tc2Nyb2xsYmFyLWhvcml6b250YWw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2UwMzgyYTtcbn1cblxuLnRhYmxlLXdyYXAge1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLnRhYmxlIHtcbiAgbWluLXdpZHRoOiA5MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4udGFibGUgdGhlYWQgdGQge1xuICBmb250LWZhbWlseTogcmFsZXdheS1nZW8sIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udGFibGUgdGQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uY29udGFjdHNfX2l0ZW1zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gIG1hcmdpbi1yaWdodDogLTEwcHg7XG59XG4uY29udGFjdHNfX2l0ZW0ge1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uY29udGFjdHNfX3RpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLml0ZW0tY29udGFjdCB7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuLml0ZW0tY29udGFjdF9fdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLml0ZW0tY29udGFjdF9fdmFsdWUge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IHJhbGV3YXktZ2VvLCBzYW5zLXNlcmlmO1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IFwibG51bVwiIDE7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjM7XG4gIGNvbG9yOiAjMDAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMjVzIGVhc2U7XG59XG4uaXRlbS1jb250YWN0X192YWx1ZTpob3ZlciB7XG4gIGNvbG9yOiAjQTYyMzE4O1xufVxuLml0ZW0tY29udGFjdF9faWNvbiB7XG4gIGZsZXg6IDAgMCAxN3B4O1xuICB3aWR0aDogMTdweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4ubWVzc2FnZSB7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiA1MDBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLm1lc3NhZ2VfX2lubmVyIHtcbiAgbWluLWhlaWdodDogMzc2cHg7XG4gIHBhZGRpbmc6IDMwcHggNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tZXNzYWdlX190aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiByYWxld2F5LWdlbywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgZm9udC1zaXplOiAzMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAzZW07XG59XG5cbi5mYW5jeWJveC1tZXNzYWdlIC5mYW5jeWJveC1zbGlkZS0taHRtbCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5mYW5jeWJveC1jbG9zZS1zbWFsbCB7XG4gIHdpZHRoOiA2OHB4O1xuICBoZWlnaHQ6IDY4cHg7XG59XG5cbi5mYW5jeWJveC1zbGlkZS0taHRtbCAuZmFuY3lib3gtY2xvc2Utc21hbGwge1xuICBjb2xvcjogI0E2MjMxODtcbn1cblxuLmNvbXBlbnNhdGUtZm9yLXNjcm9sbGJhciB7XG4gIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xufVxuXG4uY29udGVudCB7XG4gIGZvbnQtZmFtaWx5OiBpYm0tZ2VvLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbGluZS1oZWlnaHQ6IDEuMjg7XG59XG4uY29udGVudCBoMSwgLmNvbnRlbnQgaDIsIC5jb250ZW50IGgzLCAuY29udGVudCBoNCwgLmNvbnRlbnQgaDUsIC5jb250ZW50IGg2IHtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDNlbTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5jb250ZW50IGgxIHtcbiAgZm9udC1zaXplOiAzNnB4O1xufVxuLmNvbnRlbnQgaDIge1xuICBmb250LXNpemU6IDMycHg7XG59XG4uY29udGVudCBoMyB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbn1cbi5jb250ZW50IGg0IHtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuLmNvbnRlbnQgaDUge1xuICBmb250LXNpemU6IDIycHg7XG59XG4uY29udGVudCBoNiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5jb250ZW50IGEge1xuICBjb2xvcjogI0E2MjMxODtcbn1cbi5jb250ZW50IHAge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmNvbnRlbnQgYmxvY2txdW90ZSB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4uY29udGVudCAucm93IHA6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xuICBmb250LWZhbWlseTogcmFsZXdheS1nZW8sIHNhbnMtc2VyaWY7XG59XG5cbmJsb2NrcXVvdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAyMHB4IDQ2cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbmJsb2NrcXVvdGU6OmJlZm9yZSwgYmxvY2txdW90ZTo6YWZ0ZXIge1xuICBmb250LWZhbWlseTogaWJtLWdlbywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiA0NXB4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGNvbG9yOiAjQTYyMzE4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5ibG9ja3F1b3RlOjpiZWZvcmUge1xuICBjb250ZW50OiBcIuKAnFwiO1xuICB0b3A6IDVweDtcbiAgbGVmdDogMTBweDtcbn1cbmJsb2NrcXVvdGU6OmFmdGVyIHtcbiAgY29udGVudDogXCLigJ1cIjtcbiAgYm90dG9tOiAtMTNweDtcbiAgcmlnaHQ6IDE1cHg7XG59XG5cbi5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyRjU1O1xuICBjb2xvcjogIzlDQjdEOTtcbiAgcGFkZGluZzogNzBweCAwIDMwcHg7XG59XG4uZm9vdGVyX190b3Age1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuLmZvb3Rlcl9fbWVudSB1bCB7XG4gIG1hcmdpbjogLTVweCAtMjBweCAwO1xufVxuLmZvb3Rlcl9fbWVudSBhIHtcbiAgY29sb3I6ICNmZmY7XG59XG4uZm9vdGVyX19tZW51IGxpIHtcbiAgbWFyZ2luOiA1cHggMjBweDtcbn1cbi5mb290ZXJfX2luZm8ge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLmZvb3Rlcl9fbGlua3Mge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLmZvb3Rlcl9fbGlua3MgYSB7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uZm9vdGVyX19jb3B5cmlnaHQge1xuICBmb250LXNpemU6IDE1cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBsaW5lLWhlaWdodDogMTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmluZm8tZm9vdGVyX190ZXh0IHtcbiAgbGluZS1oZWlnaHQ6IDEuMzE7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4uaW5mby1mb290ZXJfX3RleHQgYSB7XG4gIGNvbG9yOiAjOUNCN0Q5O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5jYXRzLWNhcmRzX19yb3cge1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gIG1hcmdpbi1yaWdodDogLTEwcHg7XG59XG4uY2F0cy1jYXJkc19fY2FyZCB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmNhcmQtY2F0X19pbm5lciB7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uY2FyZC1jYXRfX2lubmVyOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG59XG4uY2FyZC1jYXRfX2ltZy13cmFwIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5jYXJkLWNhdF9faW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4uY2FyZC1jYXRfX2NhcHRpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTYyMzE4O1xuICBwYWRkaW5nOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY2FyZC1jYXRfX3RpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmdhbGxlcnlfX3JvdyB7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcbn1cbi5nYWxsZXJ5X19jb2wge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG4uZ2FsbGVyeV9faXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5nYWxsZXJ5X19pbWcge1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uZmFuY3lib3gtYmcge1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xufVxuXG4ucGFyYW1ldGVyc19faXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5pdGVtLXBhcmFtZXRlcl9faGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbi5pdGVtLXBhcmFtZXRlcl9faWNvbiB7XG4gIHdpZHRoOiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cbi5pdGVtLXBhcmFtZXRlcl9fdGl0bGUge1xuICBmb250LXNpemU6IDE3cHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4uaXRlbS1wYXJhbWV0ZXJfX2xpc3Qge1xuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbi5pdGVtLXBhcmFtZXRlcl9fYmFkZ2Uge1xuICBtYXgtd2lkdGg6IDEzMHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIHBhZGRpbmc6IDJweCA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cbi5pdGVtLXBhcmFtZXRlcl9fdGV4dC13cmFwIHtcbiAgZm9udC1mYW1pbHk6IGlibS1nZW8sIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBsaW5lLWhlaWdodDogMS40Mztcbn1cblxuLmNvbmRpdGlvbnNfX2Jsb2NrIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5jb25kaXRpb25zX19kaXZpZGVyIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbi5jb25kaXRpb25zX19pdGVtcyB7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcbn1cbi5jb25kaXRpb25zX19pdGVtIHtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uaXRlbS1jb25kaXRpb25fX2JhZGdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucGFyYW1ldGVycy1ib29raW5nX19pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLml0ZW0tcGFyYW1ldGVycy1ib29raW5nX190aXRsZSB7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLml0ZW0tcGFyYW1ldGVycy1ib29raW5nX190ZXh0LXdyYXAge1xuICBmb250LWZhbWlseTogaWJtLWdlbywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGxpbmUtaGVpZ2h0OiAxLjI3O1xufVxuLml0ZW0tcGFyYW1ldGVycy1ib29raW5nX190ZXh0IHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5pdGVtLXBhcmFtZXRlcnMtYm9va2luZ19fdGV4dDpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLnN0b2NrX19pdGVtcyB7XG4gIG1hcmdpbi1sZWZ0OiAtMzVweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMzVweDtcbn1cbi5zdG9ja19faXRlbSB7XG4gIHBhZGRpbmc6IDAgMzVweDtcbiAgbWFyZ2luLWJvdHRvbTogNzBweDtcbn1cblxuLnN1cGVyLW1hcF9faW5uZXIge1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnN1cGVyLW1hcF9fdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uc3VwZXItbWFwX19lbGVtZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnN1cGVyLW1hcF9faW1nIHtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5lbGVtZW50LXN1cGVyLW1hcF9fYmFsbG9vbiB7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cyBlYXNlLCB2aXNpYmlsaXR5IDAuMjVzIGVhc2U7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMDAlO1xuICBsZWZ0OiA1MCU7XG59XG4uZWxlbWVudC1zdXBlci1tYXAuYWN0aXZlIC5lbGVtZW50LXN1cGVyLW1hcF9fYmFsbG9vbiB7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5iYWxsb29uIHtcbiAgd2lkdGg6IDI4MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjQTYyMzE4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uYmFsbG9vbl9fdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBpYm0tZ2VvLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmJhbGxvb25fX2ltZyB7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNDhweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9tYWluLnNhc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvX2NvbmZpZy5zYXNzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdCQUFnQjtBQ3dCaEI7RUFDQyxrQkFBQTtBRHRCRDs7QUN3QkE7RUFDQyxrQ0FoQlU7RUFpQlYsZUFwQlU7RUFxQlYsaUJBbkJZO0VBb0JaLFdBckJXO0VBc0JYLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBRHJCRDs7QUFWQTtFQUNDLGlCQUFBO0FBYUQ7O0FBWEE7RUFDQyxhQUFBO0FBY0Q7QUFiQztFQUNDLGFBQUE7RUFDQSxtQkFBQTtBQWVGO0FBZEM7RUFDQyxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBZ0JGO0FBZkM7RUFDQyxlQUFBO0FBaUJGO0FBaEJDO0VBQ0MscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFD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Rjs7QUFqVUM7RUFDQyxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUFvVUY7QUFsVUM7RUFDQyxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFvVUY7QUFuVUM7RUFDQyxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBcVVGO0FBcFVDO0VBQ0MsaUJBQUE7QUFzVUY7O0FBbFVDO0VBQ0MsVUFBQTtFQUNBLGtCQUFBO0VBQ0EscURBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FBcVVGO0FBblVFO0VBQ0MsVUFBQTtFQUNBLG1CQUFBO0FBcVVIOztBQW5VQTtFQUNDLFlBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBc1VEO0FBclVDO0VBQ0MsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUF1VUY7QUF0VUM7RUFDQyxpQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUF3VUZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCBjb25maWdcXHJcXG4vLyBAaW1wb3J0ICcuL2Jsb2Nrcy8qKi8qJ1xcclxcblxcclxcbi5jb250YWluZXIteHhsXFxyXFxuXFx0bWF4LXdpZHRoOiAxMzEwcHhcXHJcXG5cXHJcXG4uc29jaWFsc1xcclxcblxcdGRpc3BsYXk6IGZsZXhcXHJcXG5cXHQmX19pdGVtc1xcclxcblxcdFxcdGRpc3BsYXk6IGZsZXhcXHJcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyXFxyXFxuXFx0Jl9faXRlbVxcclxcblxcdFxcdGRpc3BsYXk6IGJsb2NrXFxyXFxuXFx0XFx0cGFkZGluZzogNXB4IDExcHhcXHJcXG5cXHRcXHRsaW5lLWhlaWdodDogMVxcclxcblxcdCZfX2ljb25cXHJcXG5cXHRcXHRtYXgtd2lkdGg6IDI0cHhcXHJcXG5cXHQmX19oaW50XFxyXFxuXFx0XFx0ZGlzcGxheTogaW5saW5lLWJsb2NrXFxyXFxuXFx0XFx0cG9zaXRpb246IHJlbGF0aXZlXFxyXFxuXFx0XFx0bWluLXdpZHRoOiAxNjJweFxcclxcblxcdFxcdHBhZGRpbmc6IDEwcHggMTVweCAxMHB4IDE1cHhcXHJcXG5cXHRcXHRmb250LXNpemU6IDE0cHhcXHJcXG5cXHRcXHRsaW5lLWhlaWdodDogMVxcclxcblxcdFxcdGNvbG9yOiAjOUNCN0Q5XFxyXFxuXFx0XFx0dGV4dC1hbGlnbjogY2VudGVyXFxyXFxuXFx0XFx0Ym9yZGVyOiAxcHggc29saWQgJHNlY29uZGFyeVxcclxcblxcdFxcdGJvcmRlci1yYWRpdXM6IDRweFxcclxcblxcdFxcdG1hcmdpbi1sZWZ0OiAxNHB4XFxyXFxuXFx0XFx0Jjo6YmVmb3JlLCAmOjphZnRlclxcclxcblxcdFxcdFxcdGNvbnRlbnQ6ICcnXFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogYmxvY2tcXHJcXG5cXHRcXHRcXHRwb3NpdGlvbjogYWJzb2x1dGVcXHJcXG5cXHRcXHRcXHRyaWdodDogMTAwJVxcclxcblxcdFxcdFxcdHRvcDogNTAlXFxyXFxuXFx0XFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpXFxyXFxuXFx0XFx0XFx0d2lkdGg6IDBcXHJcXG5cXHRcXHRcXHRoZWlnaHQ6IDBcXHJcXG5cXHRcXHRcXHRib3JkZXItdG9wOiA4cHggc29saWQgdHJhbnNwYXJlbnRcXHJcXG5cXHRcXHRcXHRib3JkZXItcmlnaHQ6IDhweCBzb2xpZCAkc2Vjb25kYXJ5XFxyXFxuXFx0XFx0XFx0Ym9yZGVyLWJvdHRvbTogOHB4IHNvbGlkIHRyYW5zcGFyZW50XFxyXFxuXFx0XFx0Jjo6YWZ0ZXJcXHJcXG5cXHRcXHRcXHRib3JkZXItcmlnaHQtY29sb3I6ICRzZWNvbmRhcnlEYXJrXFxyXFxuXFx0XFx0XFx0cmlnaHQ6IGNhbGMoMTAwJSAtIDJweClcXHJcXG5cXHQmX2JvcmRlclxcclxcblxcdFxcdC5zb2NpYWxzX19pdGVtOm5vdCg6bGFzdC1jaGlsZClcXHJcXG5cXHRcXHRcXHRib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKCNmZmYsIC4zMylcXHJcXG5cXHJcXG4uYnRuXFxyXFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrXFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogJGFjY2VudFxcclxcblxcdGZvbnQtZmFtaWx5OiByYWxld2F5LWdlbywgc2Fucy1zZXJpZlxcclxcblxcdGZvbnQtc2l6ZTogMTRweFxcclxcblxcdGZvbnQtd2VpZ2h0OiA4MDBcXHJcXG5cXHRsaW5lLWhlaWdodDogMS40MlxcclxcblxcdGxldHRlci1zcGFjaW5nOiAwLjA2ZW1cXHJcXG5cXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlXFxyXFxuXFx0Y29sb3I6ICNmZmZcXHJcXG5cXHRib3JkZXI6IDJweCBzb2xpZCAjZmZmXFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNHB4XFxyXFxuXFx0cGFkZGluZzogMTVweCAyMHB4XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lXFxyXFxuXFx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMjVzIGVhc2VcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXJcXHJcXG5cXHQmOmhvdmVyXFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkYWNjZW50LCA1KVxcclxcblxcdFxcdGNvbG9yOiAjZmZmXFxyXFxuXFx0Jl9vdXRsaW5lX3NlY29uZGFyeVxcclxcblxcdFxcdGJvcmRlci1jb2xvcjogJHNlY29uZGFyeVxcclxcblxcdFxcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50XFxyXFxuXFx0XFx0Jjpob3ZlclxcclxcblxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnlcXHJcXG5cXHJcXG4ubWFpbi10aXRsZVxcclxcblxcdGZvbnQtc2l6ZTogNjBweFxcclxcblxcdGZvbnQtd2VpZ2h0OiA5MDBcXHJcXG5cXHRsaW5lLWhlaWdodDogMVxcclxcblxcclxcbi5zZWN0aW9uLXRpdGxlXFxyXFxuXFx0Zm9udC1zaXplOiA0NXB4XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDkwMFxcclxcblxcdGxldHRlci1zcGFjaW5nOiAtMC4wM2VtXFxyXFxuXFx0bGluZS1oZWlnaHQ6IDEuMTdcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAxMHB4XFxyXFxuXFx0Y29sb3I6ICMwMDBcXHJcXG5cXHJcXG4uc2VjdGlvbi1kZXNjcmlwdGlvblxcclxcblxcdGZvbnQtZmFtaWx5OiByYWxld2F5LWdlbywgc2Fucy1zZXJpZlxcclxcblxcdGZvbnQtc2l6ZTogMjBweFxcclxcblxcdGZvbnQtd2VpZ2h0OiA1MDBcXHJcXG5cXHRsaW5lLWhlaWdodDogMS4xNVxcclxcblxcdGNvbG9yOiAjMDAwXFxyXFxuXFxyXFxuLnRpdGxlXFxyXFxuXFx0Zm9udC1zaXplOiAyMXB4XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDkwMFxcclxcblxcdGxpbmUtaGVpZ2h0OiAxLjIzXFxyXFxuXFx0bGV0dGVyLXNwYWNpbmc6IDAuMDFlbVxcclxcblxcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2VcXHJcXG5cXHJcXG4uc2VjdGlvblxcclxcblxcdGJhY2tncm91bmQtc2l6ZTogY292ZXJcXHJcXG5cXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0XFxyXFxuXFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyXFxyXFxuXFx0cGFkZGluZzogNzBweCAwXFxyXFxuXFx0Jl9faGVhZGxpbmVcXHJcXG5cXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXJcXHJcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAzMHB4XFxyXFxuXFx0Jl9fc3BpcmFsLXdyYXBcXHJcXG5cXHRcXHRtYXJnaW4tdG9wOiAzMHB4XFxyXFxuXFx0Jl9pbnZlcnNlXFxyXFxuXFx0XFx0Y29sb3I6ICNmZmZcXHJcXG5cXHRcXHQuc2VjdGlvbi10aXRsZSwgLnNlY3Rpb24tZGVzY3JpcHRpb25cXHJcXG5cXHRcXHRcXHRjb2xvcjogI2ZmZlxcclxcblxcclxcbi5zbGlkZXJcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmVcXHJcXG5cXHQmX19hcnJvd3NcXHJcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGVcXHJcXG5cXHRcXHR0b3A6IDUwJVxcclxcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKVxcclxcblxcdFxcdGxlZnQ6IDBcXHJcXG5cXHRcXHRyaWdodDogMFxcclxcblxcdCZfX25hdlxcclxcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZVxcclxcblxcdFxcdHRvcDogNTAlXFxyXFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpXFxyXFxuXFx0XFx0d2lkdGg6IDQxcHhcXHJcXG5cXHRcXHRoZWlnaHQ6IDc5cHhcXHJcXG5cXHRcXHRzdHJva2U6ICRzZWNvbmRhcnlcXHJcXG5cXHRcXHRjdXJzb3I6IHBvaW50ZXJcXHJcXG5cXHRcXHRmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAwcHggOHB4IHJnYmEoMCwgMCwgMCwgMC40KSlcXHJcXG5cXHRcXHRwYWRkaW5nOiAxMnB4XFxyXFxuXFx0XFx0Jl9wcmV2XFxyXFxuXFx0XFx0XFx0bGVmdDogLTg1cHhcXHJcXG5cXHRcXHQmX25leHRcXHJcXG5cXHRcXHRcXHRyaWdodDogLTg1cHhcXHJcXG5cXHQmX3doaXRlXFxyXFxuXFx0XFx0LnNsaWRlcl9fbmF2XFxyXFxuXFx0XFx0XFx0c3Ryb2tlOiAjZmZmXFxyXFxuXFxyXFxuLnNsaWRlci1zaG93Y2FzZVxcclxcblxcdCZfX2Fycm93c1xcclxcblxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZVxcclxcblxcdFxcdHRyYW5zZm9ybTogbm9uZVxcclxcblxcdCZfX25hdlxcclxcblxcdFxcdHRvcDogYXV0b1xcclxcblxcdFxcdHRyYW5zZm9ybTogbm9uZVxcclxcblxcdFxcdGJvdHRvbTogMTM1cHhcXHJcXG5cXHRcXHQmX3ByZXZcXHJcXG5cXHRcXHRcXHRsZWZ0OiAtMTJweFxcclxcblxcdFxcdCZfbmV4dFxcclxcblxcdFxcdFxcdHJpZ2h0OiAtMTJweFxcclxcblxcclxcbi5pdGVtLXNob3djYXNlXFxyXFxuXFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdFxcclxcblxcdGJhY2tncm91bmQtc2l6ZTogY292ZXJcXHJcXG5cXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXJcXHJcXG5cXHRoZWlnaHQ6IDgwMHB4XFxyXFxuXFx0Y29sb3I6ICNmZmZcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXJcXHJcXG5cXHRwYWRkaW5nLWJvdHRvbTogMTE1cHhcXHJcXG5cXHQmX19jb250YWluZXJcXHJcXG5cXHRcXHRoZWlnaHQ6IDEwMCVcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4XFxyXFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtblxcclxcblxcdFxcdGp1c3RpZnktY29udGVudDogZmxleC1lbmRcXHJcXG5cXHJcXG4uc2VjdGlvbi1iZW5lZml0c1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZVxcclxcblxcdHBhZGRpbmc6IDcwcHggMCAxNjNweFxcclxcblxcdCY6OmJlZm9yZVxcclxcblxcdFxcdGNvbnRlbnQ6ICcnXFxyXFxuXFx0XFx0ZGlzcGxheTogYmxvY2tcXHJcXG5cXHRcXHR3aWR0aDogOTVweFxcclxcblxcdFxcdGhlaWdodDogMTU5cHhcXHJcXG5cXHRcXHQvLyBiYWNrZ3JvdW5kOiB1cmwoLi4vaW1hZ2VzL2Rpc3QvcmhvbWJ1cy5zdmcpIGxlZnQgLyBjb250YWluIG5vLXJlcGVhdFxcclxcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZVxcclxcblxcdFxcdGxlZnQ6IDUwJVxcclxcblxcdFxcdGJvdHRvbTogLTY2cHhcXHJcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSlcXHJcXG5cXHQuYmVuZWZpdHNcXHJcXG5cXHRcXHRwb3NpdGlvbjogcmVsYXRpdmVcXHJcXG5cXHRcXHR6LWluZGV4OiAyXFxyXFxuXFxyXFxuLmJlbmVmaXRzXFxyXFxuXFx0ZGlzcGxheTogZmxleFxcclxcblxcdGZsZXgtd3JhcDogd3JhcFxcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyXFxyXFxuXFx0bWFyZ2luOiAwIC0xMHB4XFxyXFxuXFx0Jl9faXRlbVxcclxcblxcdFxcdHBhZGRpbmc6IDAgMTBweFxcclxcblxcdFxcdGZsZXg6IDAgMCAzMCVcXHJcXG5cXHRcXHRtYXgtd2lkdGg6IDMwJVxcclxcblxcdFxcdG1hcmdpbi1ib3R0b206IDIwcHhcXHJcXG5cXHRcXHQmLml0ZW0tYmVuZWZpdF9sZ1xcclxcblxcdFxcdFxcdGZsZXg6IDAgMCA0MCVcXHJcXG5cXHRcXHRcXHRtYXgtd2lkdGg6IDQwJVxcclxcblxcdFxcdCY6bnRoLWNoaWxkKDFuKVxcclxcblxcdFxcdFxcdC5pdGVtLWJlbmVmaXRfX2lubmVyXFxyXFxuXFx0XFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeVxcclxcblxcdFxcdCY6bnRoLWNoaWxkKDJuKVxcclxcblxcdFxcdFxcdC5pdGVtLWJlbmVmaXRfX2lubmVyXFxyXFxuXFx0XFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeURhcmtcXHJcXG5cXHRcXHQmOm50aC1jaGlsZCgzbilcXHJcXG5cXHRcXHRcXHQuaXRlbS1iZW5lZml0X19pbm5lclxcclxcblxcdFxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6ICRhbHBoYVxcclxcblxcdFxcdCY6bnRoLWNoaWxkKDRuKVxcclxcblxcdFxcdFxcdC5pdGVtLWJlbmVmaXRfX2lubmVyXFxyXFxuXFx0XFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogJGJyYXZvXFxyXFxuXFx0XFx0JjpudGgtY2hpbGQoNW4pXFxyXFxuXFx0XFx0XFx0Lml0ZW0tYmVuZWZpdF9faW5uZXJcXHJcXG5cXHRcXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50XFxyXFxuXFxyXFxuLml0ZW0tYmVuZWZpdFxcclxcblxcdG1pbi1oZWlnaHQ6IDI2MHB4XFxyXFxuXFx0Jl9faW5uZXJcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5XFxyXFxuXFx0XFx0cGFkZGluZzogMjhweCAxMHB4IDEwcHhcXHJcXG5cXHRcXHRib3JkZXItcmFkaXVzOiA0cHhcXHJcXG5cXHRcXHRmb250LWZhbWlseTogcmFsZXdheS1nZW8sIHNhbnMtc2VyaWZcXHJcXG5cXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXJcXHJcXG5cXHRcXHRoZWlnaHQ6IDEwMCVcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4XFxyXFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtblxcclxcblxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlblxcclxcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXJcXHJcXG5cXHQmX19pY29uXFxyXFxuXFx0XFx0bWF4LXdpZHRoOiAxMzBweFxcclxcblxcdFxcdG1hcmdpbjogMCBhdXRvIDEwcHhcXHJcXG5cXHQmX190aXRsZVxcclxcblxcdFxcdGNvbG9yOiAjZmZmXFxyXFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMTBweFxcclxcblxcdCZfX3RleHRcXHJcXG5cXHRcXHRmb250LXNpemU6IDE3cHhcXHJcXG5cXHRcXHRmb250LXdlaWdodDogNTAwXFxyXFxuXFx0XFx0bGluZS1oZWlnaHQ6IDEuMjNcXHJcXG5cXHRcXHRjb2xvcjogI0U0RDhCQ1xcclxcblxcdFxcdG1hcmdpbi1ib3R0b206IDEwcHhcXHJcXG5cXHJcXG4uc2VjdGlvbi10b3Vyc1xcclxcblxcdHBhZGRpbmctdG9wOiA5NnB4XFxyXFxuXFxyXFxuLnRvdXJzXFxyXFxuXFx0bWFyZ2luLWxlZnQ6IC0xMHB4XFxyXFxuXFx0bWFyZ2luLXJpZ2h0OiAtMTBweFxcclxcblxcdCZfX2l0ZW1cXHJcXG5cXHRcXHRwYWRkaW5nOiAwIDEwcHhcXHJcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAyMHB4XFxyXFxuXFxyXFxuLml0ZW0tdG91clxcclxcblxcdCZfX2lubmVyXFxyXFxuXFx0XFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlclxcclxcblxcdFxcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXRcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXJcXHJcXG5cXHRcXHRkaXNwbGF5OiBibG9ja1xcclxcblxcdFxcdGJvcmRlci1yYWRpdXM6IDRweFxcclxcblxcdFxcdG92ZXJmbG93OiBoaWRkZW5cXHJcXG5cXHRcXHR0ZXh0LWRlY29yYXRpb246IG5vbmVcXHJcXG5cXHRcXHRtaW4taGVpZ2h0OiAyNDBweFxcclxcblxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZVxcclxcblxcdFxcdCY6aG92ZXJcXHJcXG5cXHRcXHRcXHQuaXRlbS10b3VyX19iZ1xcclxcblxcdFxcdFxcdFxcdHRyYW5zZm9ybTogc2NhbGUoMS4xKVxcclxcblxcdCZfX2JnLXdyYXBcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4XFxyXFxuXFx0XFx0cG9zaXRpb246IGFic29sdXRlXFxyXFxuXFx0XFx0dG9wOiAwXFxyXFxuXFx0XFx0bGVmdDogMFxcclxcblxcdFxcdHJpZ2h0OiAwXFxyXFxuXFx0XFx0Ym90dG9tOiAwXFxyXFxuXFx0Jl9fYmdcXHJcXG5cXHRcXHRvYmplY3QtZml0OiBjb3ZlclxcclxcblxcdFxcdHdpZHRoOiAxMDAlXFxyXFxuXFx0XFx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIC41cyBlYXNlXFxyXFxuXFx0Jl9fY29udGVudFxcclxcblxcdFxcdGRpc3BsYXk6IGZsZXhcXHJcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uXFxyXFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZFxcclxcblxcdFxcdHBhZGRpbmc6IDEwcHggMThweCAxN3B4IDE5cHhcXHJcXG5cXHRcXHR3aWR0aDogMjEwcHhcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCMwMDAsIC42KVxcclxcblxcdFxcdG1pbi1oZWlnaHQ6IGluaGVyaXRcXHJcXG5cXHRcXHRwb3NpdGlvbjogcmVsYXRpdmVcXHJcXG5cXHRcXHR6LWluZGV4OiAyXFxyXFxuXFx0XFx0bWFyZ2luLWxlZnQ6IGF1dG9cXHJcXG5cXHQmX190aXRsZVxcclxcblxcdFxcdGNvbG9yOiAjZmZmXFxyXFxuXFx0Jl9fdGV4dFxcclxcblxcdFxcdGZvbnQtZmFtaWx5OiBpYm0tZ2VvLCBzYW5zLXNlcmlmXFxyXFxuXFx0XFx0Zm9udC1zdHlsZTogaXRhbGljXFxyXFxuXFx0XFx0bGluZS1oZWlnaHQ6IDEuMjVcXHJcXG5cXHRcXHRjb2xvcjogI0JERDBFOFxcclxcblxcdFxcdG92ZXJmbG93OiBoaWRkZW5cXHJcXG5cXHRcXHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpc1xcclxcblxcdFxcdGRpc3BsYXk6IC13ZWJraXQtYm94XFxyXFxuXFx0XFx0LXdlYmtpdC1saW5lLWNsYW1wOiA2XFxyXFxuXFx0XFx0LXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbFxcclxcblxcdFxcdCY6bGFzdC1jaGlsZFxcclxcblxcdFxcdFxcdG1hcmdpbi1ib3R0b206IDBcXHJcXG5cXHQmX19idG5cXHJcXG5cXHRcXHRhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0XFxyXFxuXFx0Jl9zdG9ja1xcclxcblxcdFxcdC5pdGVtLXRvdXJfX2lubmVyXFxyXFxuXFx0XFx0XFx0bWluLWhlaWdodDogMzAwcHhcXHJcXG5cXHRcXHQuaXRlbS10b3VyX19jb250ZW50XFxyXFxuXFx0XFx0XFx0d2lkdGg6IDI2NXB4XFxyXFxuXFxyXFxuLmxpbmtcXHJcXG5cXHRkaXNwbGF5OiBpbmxpbmUtZmxleFxcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXJcXHJcXG5cXHRmb250LXNpemU6IDE0cHhcXHJcXG5cXHRmb250LXdlaWdodDogNTAwXFxyXFxuXFx0bGV0dGVyLXNwYWNpbmc6IDAuMDNlbVxcclxcblxcdGNvbG9yOiAkc2Vjb25kYXJ5XFxyXFxuXFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZVxcclxcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZVxcclxcblxcdHRyYW5zaXRpb246IGNvbG9yIC4yNXMgZWFzZVxcclxcblxcdCY6aG92ZXJcXHJcXG5cXHRcXHRjb2xvcjogbGlnaHRlbigkc2Vjb25kYXJ5LCAxMClcXHJcXG5cXHRcXHQubGlua19faWNvblxcclxcblxcdFxcdFxcdHN0cm9rZTogbGlnaHRlbigkc2Vjb25kYXJ5LCAxMClcXHJcXG5cXHQmX19pY29uXFxyXFxuXFx0XFx0d2lkdGg6IDE2cHhcXHJcXG5cXHRcXHRoZWlnaHQ6IDE2cHhcXHJcXG5cXHRcXHRtYXJnaW4tcmlnaHQ6IDExcHhcXHJcXG5cXHRcXHRmaWxsOiBub25lXFxyXFxuXFx0XFx0c3Ryb2tlOiAkc2Vjb25kYXJ5XFxyXFxuXFx0XFx0dHJhbnNpdGlvbjogc3Ryb2tlIC4yNXMgZWFzZVxcclxcblxcdCZfYWNjZW50XFxyXFxuXFx0XFx0Y29sb3I6ICRhY2NlbnRcXHJcXG5cXHRcXHQubGlua19faWNvblxcclxcblxcdFxcdFxcdHN0cm9rZTogJGFjY2VudFxcclxcblxcdFxcdCY6aG92ZXJcXHJcXG5cXHRcXHRcXHRjb2xvcjogbGlnaHRlbigkYWNjZW50LCAxMClcXHJcXG5cXHRcXHRcXHQubGlua19faWNvblxcclxcblxcdFxcdFxcdFxcdHN0cm9rZTogbGlnaHRlbigkYWNjZW50LCAxMClcXHJcXG5cXHJcXG4uYmFkZ2VcXHJcXG5cXHRkaXNwbGF5OiBpbmxpbmUtZmxleFxcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXJcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5XFxyXFxuXFx0cGFkZGluZzogN3B4IDE1cHhcXHJcXG5cXHRmb250LWZhbWlseTogaWJtLWdlbywgc2Fucy1zZXJpZlxcclxcblxcdGZvbnQtc2l6ZTogMTNweFxcclxcblxcdGZvbnQtd2VpZ2h0OiA1MDBcXHJcXG5cXHRsaW5lLWhlaWdodDogMS41M1xcclxcblxcdGxldHRlci1zcGFjaW5nOiAwLjAzZW1cXHJcXG5cXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlXFxyXFxuXFx0Y29sb3I6ICNmZmZcXHJcXG5cXHQmX3N1Y2Nlc3NcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAkc3VjY2Vzc1xcclxcblxcdCZfc2Vjb25kYXJ5LWxpZ2h0XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeUxpZ2h0XFxyXFxuXFx0XFxyXFxuLnNlY3Rpb24tcGxhY2luZ1xcclxcblxcdCZfX2xpbmstd3JhcFxcclxcblxcdFxcdG1hcmdpbi10b3A6IDIwcHhcXHJcXG5cXHJcXG4uc2xpZGVyLXBsYWNpbmdcXHJcXG5cXHQuc2xpY2stbGlzdFxcclxcblxcdFxcdG1hcmdpbjogMCAtNy41cHhcXHJcXG5cXHRcXHRwYWRkaW5nLWJvdHRvbTogMTVweFxcclxcblxcdCZfX2l0ZW1cXHJcXG5cXHRcXHRtYXJnaW46IDAgNy41cHhcXHJcXG5cXHJcXG4uaXRlbS1wbGFjaW5nXFxyXFxuXFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlclxcclxcblxcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXRcXHJcXG5cXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXJcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmVcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA0cHhcXHJcXG5cXHRjb2xvcjogI2ZmZlxcclxcblxcdGhlaWdodDogMjg1cHhcXHJcXG5cXHQmOmhvdmVyXFxyXFxuXFx0XFx0Lml0ZW0tcGxhY2luZ19fY29udGVudFxcclxcblxcdFxcdFxcdG9wYWNpdHk6IDFcXHJcXG5cXHRcXHRcXHR2aXNpYmlsaXR5OiB2aXNpYmxlXFxyXFxuXFx0Jl9fY29udGVudFxcclxcblxcdFxcdGRpc3BsYXk6IGZsZXhcXHJcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uXFxyXFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZFxcclxcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXJcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCMwMDAsIC44KVxcclxcblxcdFxcdGJvcmRlci1yYWRpdXM6IDRweFxcclxcblxcdFxcdHRleHQtYWxpZ246IGNlbnRlclxcclxcblxcdFxcdHBhZGRpbmc6IDI1cHggMjVweCAzMnB4XFxyXFxuXFx0XFx0aGVpZ2h0OiAxMDAlXFxyXFxuXFx0XFx0b3BhY2l0eTogMFxcclxcblxcdFxcdHZpc2liaWxpdHk6IGhpZGRlblxcclxcblxcdFxcdHRyYW5zaXRpb246IG9wYWNpdHkgLjI1cyBlYXNlLCB2aXNpYmlsaXR5IC4yNXMgZWFzZVxcclxcblxcdCZfX3RleHRcXHJcXG5cXHRcXHRmb250LWZhbWlseTogaWJtLWdlbywgc2Fucy1zZXJpZlxcclxcblxcdFxcdGZvbnQtc3R5bGU6IGl0YWxpY1xcclxcblxcdFxcdGxpbmUtaGVpZ2h0OiAxLjI1XFxyXFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMTNweFxcclxcblxcdCZfX2JhZGdlXFxyXFxuXFx0XFx0cG9zaXRpb246IGFic29sdXRlXFxyXFxuXFx0XFx0Ym90dG9tOiAtMTVweFxcclxcblxcdFxcdGxlZnQ6IDUwJVxcclxcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKVxcclxcblxcdCZfX2xpbmtcXHJcXG5cXHRcXHRmb250LXdlaWdodDogbm9ybWFsXFxyXFxuXFx0XFx0Y29sb3I6ICM5Q0I3RDlcXHJcXG5cXHRcXHQubGlua19faWNvblxcclxcblxcdFxcdFxcdG1hcmdpbi1yaWdodDogN3B4XFxyXFxuXFx0XFx0XFx0c3Ryb2tlOiAjOUNCN0Q5XFxyXFxuXFx0XFx0XFxyXFxuLmJsb2dcXHJcXG5cXHQmX19pdGVtc1xcclxcblxcdFxcdG1hcmdpbi1sZWZ0OiAtMTBweFxcclxcblxcdFxcdG1hcmdpbi1yaWdodDogLTEwcHhcXHJcXG5cXHQmX19jYXJkXFxyXFxuXFx0XFx0cGFkZGluZzogMCAxMHB4XFxyXFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMjBweFxcclxcblxcdCZfX2xpbmstd3JhcFxcclxcblxcdFxcdG1hcmdpbi10b3A6IDEwcHhcXHJcXG5cXHJcXG4uY2FyZC1ibG9nXFxyXFxuXFx0Jl9faW5uZXJcXHJcXG5cXHRcXHRoZWlnaHQ6IDEwMCVcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4XFxyXFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtblxcclxcblxcdFxcdGNvbG9yOiAjMzMzXFxyXFxuXFx0XFx0dGV4dC1kZWNvcmF0aW9uOiBub25lXFxyXFxuXFx0XFx0Ym9yZGVyLXJhZGl1czogNHB4XFxyXFxuXFx0XFx0b3ZlcmZsb3c6IGhpZGRlblxcclxcblxcdCZfX2ltZy13cmFwXFxyXFxuXFx0XFx0cG9zaXRpb246IHJlbGF0aXZlXFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleFxcclxcblxcdFxcdCY6OmJlZm9yZVxcclxcblxcdFxcdFxcdGNvbnRlbnQ6ICcnXFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogYmxvY2tcXHJcXG5cXHRcXHRcXHRwb3NpdGlvbjogYWJzb2x1dGVcXHJcXG5cXHRcXHRcXHR0b3A6IDBcXHJcXG5cXHRcXHRcXHRyaWdodDogMFxcclxcblxcdFxcdFxcdGxlZnQ6IDBcXHJcXG5cXHRcXHRcXHRib3R0b206IDBcXHJcXG5cXHRcXHRcXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzYwZGVnLCByZ2JhKDAsIDAsIDAsIDAuNjMpIDAlLCByZ2JhKDAsIDAsIDAsIDApIDU0LjM5JSlcXHJcXG5cXHQmX19pbWdcXHJcXG5cXHRcXHR3aWR0aDogMTAwJVxcclxcblxcdFxcdGhlaWdodDogMjg1cHhcXHJcXG5cXHRcXHRvYmplY3QtZml0OiBjb3ZlclxcclxcblxcdCZfX3RpdGxlXFxyXFxuXFx0XFx0Y29sb3I6ICNmZmZcXHJcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGVcXHJcXG5cXHRcXHR6LWluZGV4OiAyXFxyXFxuXFx0XFx0Ym90dG9tOiAxMnB4XFxyXFxuXFx0XFx0bGVmdDogMjZweFxcclxcblxcdFxcdHJpZ2h0OiAyNnB4XFxyXFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMFxcclxcblxcdCZfX2NvbnRlbnRcXHJcXG5cXHRcXHRoZWlnaHQ6IDEwMCVcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0XFxyXFxuXFx0XFx0Zm9udC1mYW1pbHk6IGlibS1nZW8sIHNhbnMtc2VyaWZcXHJcXG5cXHRcXHRmb250LXN0eWxlOiBpdGFsaWNcXHJcXG5cXHRcXHRsaW5lLWhlaWdodDogMS4yNVxcclxcblxcdFxcdGNvbG9yOiAjMzMzXFxyXFxuXFx0XFx0cGFkZGluZzogMTNweCAyNnB4IDI2cHhcXHJcXG5cXHJcXG4uZm9ybS1tYWlsaW5nXFxyXFxuXFx0bWF4LXdpZHRoOiA2MDBweFxcclxcblxcdG1hcmdpbjogMCBhdXRvXFxyXFxuXFx0Jl9fcm93XFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleFxcclxcblxcdCZfX2NvbnRyb2xcXHJcXG5cXHRcXHRtYXJnaW4tcmlnaHQ6IDIwcHhcXHJcXG5cXHJcXG4ubm90aWNlXFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyXFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeVxcclxcblxcdGNvbG9yOiAjZmZmXFxyXFxuXFx0cGFkZGluZzogMTBweFxcclxcblxcdG1hcmdpbjogMCAxMHB4IDE1cHhcXHJcXG5cXHRwXFxyXFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMFxcclxcblxcdCZfc3VjY2Vzc1xcclxcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICRzdWNjZXNzXFxyXFxuXFx0Jl9kYW5nZXJcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50XFxyXFxuXFxyXFxuLmZvbGxvdy11c1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlclxcclxcblxcdCZfX3RleHRcXHJcXG5cXHRcXHRmb250LWZhbWlseTogcmFsZXdheS1nZW8sIHNhbnMtc2VyaWZcXHJcXG5cXHRcXHRmb250LXNpemU6IDIwcHhcXHJcXG5cXHRcXHRmb250LXdlaWdodDogNTAwXFxyXFxuXFx0XFx0dGV4dC1zaGFkb3c6IDBweCAwcHggOHB4IHJnYmEoMCwgMCwgMCwgMC4zKVxcclxcblxcdFxcdG1hcmdpbi1ib3R0b206IDI1cHhcXHJcXG5cXHQmX19zb2NpYWxzXFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleFxcclxcblxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyXFxyXFxuXFx0Jl9faXRlbVxcclxcblxcdFxcdG1hcmdpbjogMCAxNXB4XFxyXFxuXFxyXFxuLml0ZW0tZm9sbG93LXVzXFxyXFxuXFx0ZGlzcGxheTogZmxleFxcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyXFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlclxcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoIzAwMCwgLjYpXFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNHB4XFxyXFxuXFx0d2lkdGg6IDkwcHhcXHJcXG5cXHRoZWlnaHQ6IDkwcHhcXHJcXG5cXHRwYWRkaW5nOiAxM3B4XFxyXFxuXFx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMjVzIGVhc2VcXHJcXG5cXHQmOmhvdmVyXFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgjMDAwLCAuNylcXHJcXG5cXHQmX19pY29uXFxyXFxuXFx0XFx0aGVpZ2h0OiA2M3B4XFxyXFxuXFxyXFxuLnNlY3Rpb24tbWFpbGluZ1xcclxcblxcdC5mb3JtLW1haWxpbmdcXHJcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiA1MHB4XFxyXFxuXFxyXFxuLnNlY3Rpb24tcGxhY2VzXFxyXFxuXFx0cGFkZGluZzogMFxcclxcblxcclxcbi5pdGVtLXBsYWNlXFxyXFxuXFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdFxcclxcblxcdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlclxcclxcblxcdGJhY2tncm91bmQtc2l6ZTogY292ZXJcXHJcXG5cXHRwYWRkaW5nOiAxMDBweCAwIDgycHhcXHJcXG5cXHRjb2xvcjogI2ZmZlxcclxcblxcdCZfX2NvbnRhaW5lclxcclxcblxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZVxcclxcblxcdFxcdHotaW5kZXg6IDJcXHJcXG5cXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXJcXHJcXG5cXHRcXHRmb250LWZhbWlseTogcmFsZXdheS1nZW8sIHNhbnMtc2VyaWZcXHJcXG5cXHQmX19oZWFkZXJcXHJcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAxMTZweFxcclxcblxcdCZfX3RpdGxlXFxyXFxuXFx0XFx0dGV4dC1zaGFkb3c6IDBweCAwcHggOHB4IHJnYmEoMCwgMCwgMCwgMC4zKVxcclxcblxcdFxcdG1hcmdpbi1ib3R0b206IDBcXHJcXG5cXHQmX190ZXh0XFxyXFxuXFx0XFx0dGV4dC1zaGFkb3c6IDBweCAwcHggOHB4IHJnYmEoMCwgMCwgMCwgMC4zKVxcclxcblxcdFxcdGZvbnQtc2l6ZTogMjBweFxcclxcblxcdFxcdGZvbnQtd2VpZ2h0OiA1MDBcXHJcXG5cXHQmX19zdWJ0aXRsZVxcclxcblxcdFxcdHRleHQtc2hhZG93OiAwcHggMHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMylcXHJcXG5cXHRcXHRmb250LXdlaWdodDogOTAwXFxyXFxuXFx0XFx0Zm9udC1zaXplOiAyMXB4XFxyXFxuXFx0XFx0bGV0dGVyLXNwYWNpbmc6IDAuMDFlbVxcclxcblxcdFxcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2VcXHJcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAxNXB4XFxyXFxuXFx0Jl9kZWZhdWx0XFxyXFxuXFx0XFx0Ym9yZGVyLXJhZGl1czogNHB4XFxyXFxuXFx0XFx0bWluLWhlaWdodDogNDU0cHhcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4XFxyXFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlclxcclxcblxcdFxcdHBhZGRpbmc6IDUwcHggMTBweFxcclxcblxcdFxcdCY6OmJlZm9yZVxcclxcblxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IDRweFxcclxcblxcdFxcdC5pdGVtLXBsYWNlX19jb250YWluZXJcXHJcXG5cXHRcXHRcXHR3aWR0aDogMTAwJVxcclxcblxcdFxcdC5pdGVtLXBsYWNlX190ZXh0XFxyXFxuXFx0XFx0XFx0Zm9udC1zaXplOiAxN3B4XFxyXFxuXFxyXFxuLmJhbm5lclxcclxcblxcdGJhY2tncm91bmQtc2l6ZTogY292ZXJcXHJcXG5cXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0XFxyXFxuXFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyXFxyXFxuXFx0cGFkZGluZzogMTI2cHggMCAzMHB4XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyXFxyXFxuXFx0Y29sb3I6ICNmZmZcXHJcXG5cXHQmOjpiZWZvcmVcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCMwMDAsIC40KVxcclxcblxcdCZfX3RpdGxlXFxyXFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMFxcclxcblxcdCZfX2NvbnRhaW5lclxcclxcblxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZVxcclxcblxcdFxcdHotaW5kZXg6IDJcXHJcXG5cXHJcXG4uYnJlYWRjcnVtYnNcXHJcXG5cXHQmX19saXN0XFxyXFxuXFx0XFx0bGlzdC1zdHlsZS10eXBlOiBub25lXFxyXFxuXFx0XFx0bWFyZ2luOiAwXFxyXFxuXFx0XFx0cGFkZGluZzogMFxcclxcblxcdCZfX2l0ZW1cXHJcXG5cXHRcXHRmb250LWZhbWlseTogaWJtLWdlbywgc2Fucy1zZXJpZlxcclxcblxcdFxcdGZvbnQtc3R5bGU6IGl0YWxpY1xcclxcblxcdFxcdGxpbmUtaGVpZ2h0OiAxLjI1XFxyXFxuXFx0XFx0ZGlzcGxheTogaW5saW5lXFxyXFxuXFx0XFx0JiArIC5icmVhZGNydW1ic19faXRlbTo6YmVmb3JlXFxyXFxuXFx0XFx0XFx0Y29udGVudDogJy8nXFxyXFxuXFx0XFx0XFx0cGFkZGluZzogMCA0cHggMCAxcHhcXHJcXG5cXHRhXFxyXFxuXFx0XFx0Y29sb3I6ICNmZmZcXHJcXG5cXHRcXHR0ZXh0LWRlY29yYXRpb246IG5vbmVcXHJcXG5cXHJcXG4uZmlsdGVyXFxyXFxuXFx0Jl9fbGlzdFxcclxcblxcdFxcdGxpc3Qtc3R5bGUtdHlwZTogbm9uZVxcclxcblxcdFxcdG1hcmdpbjogMFxcclxcblxcdFxcdHBhZGRpbmc6IDBcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4XFxyXFxuXFx0XFx0ZmxleC13cmFwOiB3cmFwXFxyXFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXJcXHJcXG5cXHQmX19pdGVtXFxyXFxuXFx0XFx0Jjpob3ZlciwgJi5maWx0ZXJfX2l0ZW1fYWN0aXZlXFxyXFxuXFx0XFx0XFx0YVxcclxcblxcdFxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6ICNmZmZcXHJcXG5cXHRcXHRcXHRcXHRjb2xvcjogIzAwMFxcclxcblxcdGFcXHJcXG5cXHRcXHRkaXNwbGF5OiBibG9ja1xcclxcblxcdFxcdHBhZGRpbmc6IDVweCAxMHB4XFxyXFxuXFx0XFx0Zm9udC1mYW1pbHk6IHJhbGV3YXktZ2VvLCBzYW5zLXNlcmlmXFxyXFxuXFx0XFx0Zm9udC1zaXplOiAxMnB4XFxyXFxuXFx0XFx0Zm9udC13ZWlnaHQ6IDYwMFxcclxcblxcdFxcdGxldHRlci1zcGFjaW5nOiAwLjA2ZW1cXHJcXG5cXHRcXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlXFxyXFxuXFx0XFx0dGV4dC1kZWNvcmF0aW9uOiBub25lXFxyXFxuXFx0XFx0Y29sb3I6ICRzZWNvbmRhcnlcXHJcXG5cXHRcXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4yNXMgZWFzZSwgY29sb3IgLjI1cyBlYXNlXFxyXFxuXFx0XFx0b3V0bGluZTogbm9uZVxcclxcblxcdFxcdCY6Zm9jdXNcXHJcXG5cXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmXFxyXFxuXFx0XFx0XFx0Y29sb3I6ICMwMDBcXHJcXG5cXHJcXG4uYXNpZGVcXHJcXG5cXHQmX19ibG9ja1xcclxcblxcdFxcdCY6bm90KDpsYXN0LWNoaWxkKVxcclxcblxcdFxcdFxcdG1hcmdpbi1ib3R0b206IDcwcHhcXHJcXG5cXHQmX19kaXZpZGVyXFxyXFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMzBweFxcclxcblxcclxcbi5wYWdlXFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2ViZWZmMlxcclxcblxcdHBhZGRpbmc6IDMwcHggMCA3MHB4XFxyXFxuXFx0Ji5iZy13aGl0ZVxcclxcblxcdFxcdC5jYXJkX19zcGlyYWxcXHJcXG5cXHRcXHRcXHRmaWxsOiAjZWJlYmViXFxyXFxuXFx0Jl9fZmlsdGVyXFxyXFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMzBweFxcclxcblxcdCZfX3BhZ2VzXFxyXFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMTRweFxcclxcblxcdCZfX25hdmlnYXRpb25cXHJcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAxNHB4XFxyXFxuXFx0Jl9fdGFic1xcclxcblxcdFxcdG1hcmdpbi1ib3R0b206IDMwcHhcXHJcXG5cXHQmX190aXRsZVxcclxcblxcdFxcdGxldHRlci1zcGFjaW5nOiAtMC4wM2VtXFxyXFxuXFx0XFx0Zm9udC1zaXplOiAzMnB4XFxyXFxuXFx0XFx0Zm9udC13ZWlnaHQ6IDkwMFxcclxcblxcdFxcdGZvbnQtc3R5bGU6IG5vcm1hbFxcclxcblxcdFxcdG1hcmdpbi1ib3R0b206IDMwcHhcXHJcXG5cXHQmX19mZWVkYmFja1xcclxcblxcdFxcdG1hcmdpbi10b3A6IDcwcHhcXHJcXG5cXHQmX19ibG9ja1xcclxcblxcdFxcdG1hcmdpbi1ib3R0b206IDMwcHhcXHJcXG5cXHQmX190ZWFtXFxyXFxuXFx0XFx0bWFyZ2luOiAzMHB4IDAgMFxcclxcblxcdCZfX3NsaWRlci1pbWFnZXNcXHJcXG5cXHRcXHRtYXJnaW46IDcwcHggMFxcclxcblxcdCZfX3N1cGVyLW1hcFxcclxcblxcdFxcdG1hcmdpbi1ib3R0b206IDcwcHhcXHJcXG5cXHJcXG4udGFic1xcclxcblxcdGRpc3BsYXk6IGZsZXhcXHJcXG5cXHRmbGV4LXdyYXA6IHdyYXBcXHJcXG5cXHJcXG4udGFiLWJ0blxcclxcblxcdGRpc3BsYXk6IGJsb2NrXFxyXFxuXFx0cGFkZGluZzogMTJweCAyMHB4XFxyXFxuXFx0Zm9udC1mYW1pbHk6IHJhbGV3YXktZ2VvLCBzYW5zLXNlcmlmXFxyXFxuXFx0Zm9udC1zaXplOiAxNHB4XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDgwMFxcclxcblxcdGxpbmUtaGVpZ2h0OiAxLjQyXFxyXFxuXFx0bGV0dGVyLXNwYWNpbmc6IDAuMDZlbVxcclxcblxcdGNvbG9yOiAkc2Vjb25kYXJ5XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lXFxyXFxuXFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZVxcclxcblxcdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjI1cyBlYXNlLCBjb2xvciAuMjVzIGVhc2VcXHJcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI0JEQkRCRFxcclxcblxcdG91dGxpbmU6IG5vbmVcXHJcXG5cXHQmOmhvdmVyLCAmLmFjdGl2ZSwgJjpmb2N1c1xcclxcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICNGMEYzRjdcXHJcXG5cXHRcXHRjb2xvcjogIzAwMFxcclxcblxcclxcbi50b3VyLWNhcmRzXFxyXFxuXFx0bWFyZ2luLWxlZnQ6IC0xMHB4XFxyXFxuXFx0bWFyZ2luLXJpZ2h0OiAtMTBweFxcclxcblxcdCZfX2NhcmRcXHJcXG5cXHRcXHRwYWRkaW5nOiAwIDEwcHhcXHJcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAyMHB4XFxyXFxuXFxyXFxuLmNhcmRcXHJcXG5cXHQmX19pbm5lclxcclxcblxcdFxcdGRpc3BsYXk6IGJsb2NrXFxyXFxuXFx0XFx0Y29sb3I6ICMwMDBcXHJcXG5cXHRcXHR0ZXh0LWRlY29yYXRpb246IG5vbmVcXHJcXG5cXHRcXHQmOmhvdmVyXFxyXFxuXFx0XFx0XFx0Y29sb3I6ICMwMDBcXHJcXG5cXHQmX19pbmZvc1xcclxcblxcdFxcdGRpc3BsYXk6IGZsZXhcXHJcXG5cXHRcXHRmbGV4LXdyYXA6IHdyYXBcXHJcXG5cXHRcXHRtYXJnaW4tbGVmdDogLTEwcHhcXHJcXG5cXHRcXHRtYXJnaW4tcmlnaHQ6IC0xMHB4XFxyXFxuXFx0Jl9faW5mb1xcclxcblxcdFxcdG1hcmdpbjogMCAxMHB4IDhweFxcclxcblxcdCZfX2ltZy13cmFwXFxyXFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMTBweFxcclxcblxcdCZfX2ltZ1xcclxcblxcdFxcdG9iamVjdC1maXQ6IGNvdmVyXFxyXFxuXFx0XFx0aGVpZ2h0OiAyMDJweFxcclxcblxcdFxcdHdpZHRoOiAxMDAlXFxyXFxuXFx0XFx0Ym9yZGVyLXJhZGl1czogNHB4XFxyXFxuXFx0Jl9fY29udGVudFxcclxcblxcdFxcdG1hcmdpbi1ib3R0b206IDIwcHhcXHJcXG5cXHQmX190ZXh0LXdyYXBcXHJcXG5cXHRcXHRmb250LWZhbWlseTogaWJtLWdlbywgc2Fucy1zZXJpZlxcclxcblxcdFxcdGZvbnQtc3R5bGU6IGl0YWxpY1xcclxcblxcdFxcdGxpbmUtaGVpZ2h0OiAxLjI1XFxyXFxuXFx0Jl9fdGV4dFxcclxcblxcdFxcdG1hcmdpbi1ib3R0b206IDhweFxcclxcblxcdCZfZXhjdXJzaW9uXFxyXFxuXFx0XFx0LmNhcmRfX3RleHQtd3JhcFxcclxcblxcdFxcdFxcdGZvbnQtZmFtaWx5OiByYWxld2F5LWdlbywgc2Fucy1zZXJpZlxcclxcblxcdFxcdFxcdGZvbnQtc3R5bGU6IG5vcm1hbFxcclxcblxcdFxcdFxcdGZvbnQtc2l6ZTogMTdweFxcclxcblxcclxcbi5pbmZvLWNhcmRcXHJcXG5cXHRkaXNwbGF5OiBpbmxpbmUtZmxleFxcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXJcXHJcXG5cXHRmb250LWZhbWlseTogaWJtLWdlbywgc2Fucy1zZXJpZlxcclxcblxcdGZvbnQtc2l6ZTogMTNweFxcclxcblxcdGZvbnQtd2VpZ2h0OiA1MDBcXHJcXG5cXHRsZXR0ZXItc3BhY2luZzogMC4wM2VtXFxyXFxuXFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZVxcclxcblxcdGNvbG9yOiAjODI4MjgyXFxyXFxuXFx0Jl9faWNvblxcclxcblxcdFxcdG1hcmdpbi1yaWdodDogMTBweFxcclxcblxcclxcbi5kZXRhaWxzLWNhcmRcXHJcXG5cXHRkaXNwbGF5OiBmbGV4XFxyXFxuXFx0ZmxleC13cmFwOiB3cmFwXFxyXFxuXFx0bWFyZ2luOiAwIC04cHhcXHJcXG5cXHQmX19pdGVtXFxyXFxuXFx0XFx0Zm9udC1mYW1pbHk6IHJhbGV3YXktZ2VvLCBzYW5zLXNlcmlmXFxyXFxuXFx0XFx0Zm9udC1zaXplOiAxN3B4XFxyXFxuXFx0XFx0Zm9udC13ZWlnaHQ6IDUwMFxcclxcblxcdFxcdGxpbmUtaGVpZ2h0OiAxLjIzXFxyXFxuXFx0XFx0cGFkZGluZzogMCA4cHhcXHJcXG5cXHRcXHQmOm5vdCg6bGFzdC1jaGlsZClcXHJcXG5cXHRcXHRcXHRib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjQkRCREJEXFxyXFxuXFx0Jl9faWNvblxcclxcblxcdFxcdHdpZHRoOiAxNXB4XFxyXFxuXFxyXFxuLnJldmlld3NcXHJcXG5cXHQmX19pdGVtXFxyXFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMzBweFxcclxcblxcdFxcdCY6bGFzdC1jaGlsZFxcclxcblxcdFxcdFxcdG1hcmdpbi1ib3R0b206IDEwcHhcXHJcXG5cXHJcXG4uaXRlbS1yZXZpZXdcXHJcXG5cXHQmX19pbm5lclxcclxcblxcdFxcdGRpc3BsYXk6IGZsZXhcXHJcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAyMHB4XFxyXFxuXFx0Jl9faW1nLXdyYXBcXHJcXG5cXHRcXHRmbGV4OiAwIDAgMTgwcHhcXHJcXG5cXHRcXHR3aWR0aDogMTgwcHhcXHJcXG5cXHRcXHRtYXJnaW46IDAgMjBweCAwIDBcXHJcXG5cXHQmX19pbWdcXHJcXG5cXHRcXHRoZWlnaHQ6IDE4MHB4XFxyXFxuXFx0Jl9faW5mb3NcXHJcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAxMnB4XFxyXFxuXFx0Jl9fdGl0bGVcXHJcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAxMHB4XFxyXFxuXFx0Jl9fY29udGVudFxcclxcblxcdFxcdG1hcmdpbi1ib3R0b206IDBcXHJcXG5cXHJcXG4ucGFnZXNcXHJcXG5cXHRmb250LWZhbWlseTogaWJtLWdlbywgc2Fucy1zZXJpZlxcclxcblxcdGZvbnQtc2l6ZTogMTNweFxcclxcblxcdGZvbnQtd2VpZ2h0OiA1MDBcXHJcXG5cXHRsZXR0ZXItc3BhY2luZzogMC4wM2VtXFxyXFxuXFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZVxcclxcblxcdGNvbG9yOiAjODI4MjgyXFxyXFxuXFx0Jl9fY291bnRcXHJcXG5cXHRcXHRmb250LWZhbWlseTogcmFsZXdheS1nZW8sIHNhbnMtc2VyaWZcXHJcXG5cXHRcXHRmb250LXNpemU6IDE3cHhcXHJcXG5cXHRcXHRmb250LXdlaWdodDogNTAwXFxyXFxuXFx0XFx0dGV4dC10cmFuc2Zvcm06IG5vbmVcXHJcXG5cXHRcXHRjb2xvcjogIzAwMFxcclxcblxcclxcbi5wYWdlLW5hdmlnYXRpb25cXHJcXG5cXHRmb250LWZhbWlseTogcmFsZXdheS1nZW8sIHNhbnMtc2VyaWZcXHJcXG5cXHQmX19saXN0XFxyXFxuXFx0XFx0bGlzdC1zdHlsZS10eXBlOiBub25lXFxyXFxuXFx0XFx0bWFyZ2luOiAwIC0xMy41cHhcXHJcXG5cXHRcXHRwYWRkaW5nOiAwXFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleFxcclxcblxcdGxpXFxyXFxuXFx0XFx0bWFyZ2luOiAwIDEzLjVweFxcclxcblxcdGFcXHJcXG5cXHRcXHRmb250LXNpemU6IDE3cHhcXHJcXG5cXHRcXHRmb250LXdlaWdodDogNTAwXFxyXFxuXFx0XFx0bGluZS1oZWlnaHQ6IDEuMjNcXHJcXG5cXHRcXHRjb2xvcjogJHNlY29uZGFyeVxcclxcblxcdFxcdHRleHQtZGVjb3JhdGlvbjogbm9uZVxcclxcblxcdFxcdCY6aG92ZXJcXHJcXG5cXHRcXHRcXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZVxcclxcblxcclxcbi5wYWdpbmF0aW9uXFxyXFxuXFx0Zm9udC1mYW1pbHk6IHJhbGV3YXktZ2VvLCBzYW5zLXNlcmlmXFxyXFxuXFx0Jl9fbGlzdFxcclxcblxcdFxcdGxpc3Qtc3R5bGUtdHlwZTogbm9uZVxcclxcblxcdFxcdG1hcmdpbjogMFxcclxcblxcdFxcdHBhZGRpbmc6IDBcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4XFxyXFxuXFx0XFx0ZmxleC13cmFwOiB3cmFwXFxyXFxuXFx0bGlcXHJcXG5cXHRcXHQmOmhvdmVyLCAmLmFjdGl2ZVxcclxcblxcdFxcdFxcdGFcXHJcXG5cXHRcXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmXFxyXFxuXFx0XFx0XFx0XFx0Y29sb3I6ICMwMDBcXHJcXG5cXHRhXFxyXFxuXFx0XFx0ZGlzcGxheTogYmxvY2tcXHJcXG5cXHRcXHRwYWRkaW5nOiA2cHggMTNweCA3cHhcXHJcXG5cXHRcXHRmb250LXNpemU6IDE3cHhcXHJcXG5cXHRcXHRmb250LXdlaWdodDogNTAwXFxyXFxuXFx0XFx0bGluZS1oZWlnaHQ6IDEuMjNcXHJcXG5cXHRcXHRjb2xvcjogJHNlY29uZGFyeVxcclxcblxcdFxcdHRleHQtZGVjb3JhdGlvbjogbm9uZVxcclxcblxcdFxcdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjI1cyBlYXNlLCBjb2xvciAuMjVzIGVhc2VcXHJcXG5cXHJcXG4ubGlua3MtcGFnZVxcclxcblxcdCZfX2l0ZW1cXHJcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAzMHB4XFxyXFxuXFx0Jl9fdGl0bGVcXHJcXG5cXHRcXHRmb250LWZhbWlseTogaWJtLWdlbywgc2Fucy1zZXJpZlxcclxcblxcdFxcdGZvbnQtc2l6ZTogMTNweFxcclxcblxcdFxcdGZvbnQtd2VpZ2h0OiA1MDBcXHJcXG5cXHRcXHRsZXR0ZXItc3BhY2luZzogMC4wM2VtXFxyXFxuXFx0XFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZVxcclxcblxcdFxcdGNvbG9yOiAjMDAwXFxyXFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMjBweFxcclxcblxcdCZfX2xpc3RcXHJcXG5cXHRcXHRmb250LWZhbWlseTogcmFsZXdheS1nZW8sIHNhbnMtc2VyaWZcXHJcXG5cXHRcXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmVcXHJcXG5cXHRcXHRtYXJnaW46IDBcXHJcXG5cXHRcXHRwYWRkaW5nOiAwXFxyXFxuXFx0bGlcXHJcXG5cXHRcXHRmb250LXNpemU6IDE4cHhcXHJcXG5cXHRcXHRmb250LXdlaWdodDogOTAwXFxyXFxuXFx0XFx0bGV0dGVyLXNwYWNpbmc6IDAuMDFlbVxcclxcblxcdFxcdGNvbG9yOiAkc2Vjb25kYXJ5XFxyXFxuXFx0XFx0bGluZS1oZWlnaHQ6IDEuMjVcXHJcXG5cXHRcXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlXFxyXFxuXFx0XFx0b3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZFxcclxcblxcdFxcdCY6bm90KDpsYXN0LWNoaWxkKVxcclxcblxcdFxcdFxcdG1hcmdpbi1ib3R0b206IDEwcHhcXHJcXG5cXHRcXHQmLmFjdGl2ZSBhXFxyXFxuXFx0XFx0XFx0Y29sb3I6ICMwMDBcXHJcXG5cXHRhXFxyXFxuXFx0XFx0Y29sb3I6ICRzZWNvbmRhcnlcXHJcXG5cXHRcXHR0ZXh0LWRlY29yYXRpb246IG5vbmVcXHJcXG5cXHRcXHR0cmFuc2l0aW9uOiBjb2xvciAuMjVzIGVhc2VcXHJcXG5cXHRcXHQmOmhvdmVyXFxyXFxuXFx0XFx0XFx0Y29sb3I6ICMwMDBcXHJcXG5cXHJcXG4uY29udHJvbCwgLnNlbGVjdCwgLmRhdGVwaWNrZXJcXHJcXG5cXHR3aWR0aDogMTAwJVxcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICNmZmZcXHJcXG5cXHRwYWRkaW5nOiA4cHggMTFweFxcclxcblxcdGJvcmRlcjogMXB4IHNvbGlkICNiZGJkYmRcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA0cHhcXHJcXG5cXHRmb250LWZhbWlseTogcmFsZXdheS1nZW8sIHNhbnMtc2VyaWZcXHJcXG5cXHRmb250LWZlYXR1cmUtc2V0dGluZ3M6ICdsbnVtJyAxXFxyXFxuXFx0Zm9udC1zaXplOiAxN3B4XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDYwMFxcclxcblxcdGxpbmUtaGVpZ2h0OiAxLjI0XFxyXFxuXFx0Y29sb3I6ICMwMDBcXHJcXG5cXHRvdXRsaW5lOiBub25lXFxyXFxuXFxyXFxuLmNvbnRyb2xcXHJcXG5cXHQmOjpwbGFjZWhvbGRlclxcclxcblxcdFxcdGNvbG9yOiAjODI4MjgyXFxyXFxuXFx0Jl9pY29uXFxyXFxuXFx0XFx0cGFkZGluZzogOHB4IDMwcHggOHB4IDExcHhcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2FsYygxMDAlIC0gMTFweClcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLXNpemU6IGF1dG8gMTZweFxcclxcblxcdFxcdCZfdXNlclxcclxcblxcdFxcdFxcdC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWFnZXMvZGlzdC9pY29ucy91c2VyLnN2ZylcXHJcXG5cXHRcXHQmX2NhbGVuZGFyXFxyXFxuXFx0XFx0XFx0Ly8gYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltYWdlcy9kaXN0L2ljb25zL2NhbGVuZGFyX2FjY2VudC5zdmcpXFxyXFxuXFx0XFx0Jl9waG9uZVxcclxcblxcdFxcdFxcdC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWFnZXMvZGlzdC9pY29ucy9waG9uZV9hY2NlbnQuc3ZnKVxcclxcblxcdFxcdCZfZW1haWxcXHJcXG5cXHRcXHRcXHQvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1hZ2VzL2Rpc3QvaWNvbnMvZW1haWxfYWNjZW50LnN2ZylcXHJcXG5cXHQmX21haWxpbmdcXHJcXG5cXHRcXHRwYWRkaW5nOiAxNXB4IDIwcHhcXHJcXG5cXHRcXHRib3JkZXItY29sb3I6ICNlMGUwZTBcXHJcXG5cXHRcXHRmb250LXNpemU6IDIwcHhcXHJcXG5cXHRcXHRmb250LXdlaWdodDogNTAwXFxyXFxuXFx0Ji5lcnJvclxcclxcblxcdFxcdGJvcmRlci1jb2xvcjogJGFjY2VudFxcclxcblxcdFxcdCY6OnBsYWNlaG9sZGVyXFxyXFxuXFx0XFx0XFx0Y29sb3I6ICRhY2NlbnRcXHJcXG5cXHJcXG4uc2VsZWN0XFxyXFxuXFx0YXBwZWFyYW5jZTogbm9uZVxcclxcblxcdC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWFnZXMvZGlzdC9pY29ucy9hcnJvd3Muc3ZnKVxcclxcblxcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXRcXHJcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGF1dG8gMTZweFxcclxcblxcdGJhY2tncm91bmQtcG9zaXRpb246IGNhbGMoMTAwJSAtIDExcHgpXFxyXFxuXFx0cGFkZGluZy1yaWdodDogMzBweFxcclxcblxcdGN1cnNvcjogcG9pbnRlclxcclxcblxcclxcbnRleHRhcmVhXFxyXFxuXFx0aGVpZ2h0OiAxNTBweFxcclxcblxcdHJlc2l6ZTogbm9uZVxcclxcblxcclxcbi5maWxlLXNlbGVjdG9yXFxyXFxuXFx0Y29sb3I6ICRhY2NlbnRcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXJcXHJcXG5cXHQmX19pbnB1dFxcclxcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZVxcclxcblxcdFxcdG9wYWNpdHk6IDBcXHJcXG5cXHRcXHR3aWR0aDogMFxcclxcblxcdFxcdGhlaWdodDogMFxcclxcblxcdCZfZXJyb3JcXHJcXG5cXHRcXHRib3JkZXItY29sb3I6ICRhY2NlbnRcXHJcXG5cXHJcXG4uZmlsZS1pbWctd3JhcFxcclxcblxcdGRpc3BsYXk6IGZsZXhcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uXFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlXFxyXFxuXFx0Ji5zZWxlY3RlZFxcclxcblxcdFxcdG1hcmdpbi1ib3R0b206IDMwcHhcXHJcXG5cXHRcXHQuZmlsZS1pbWdcXHJcXG5cXHRcXHRcXHRkaXNwbGF5OiBibG9ja1xcclxcblxcclxcbi5maWxlLWltZ1xcclxcblxcdGRpc3BsYXk6IG5vbmVcXHJcXG5cXHRvYmplY3QtZml0OiBjb3ZlclxcclxcblxcdHdpZHRoOiA2MHB4XFxyXFxuXFx0aGVpZ2h0OiA2MHB4XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyXFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNHB4XFxyXFxuXFxyXFxuLmZpbGUtdGV4dFxcclxcblxcdGZvbnQtZmFtaWx5OiByYWxld2F5LWdlbywgc2Fucy1zZXJpZlxcclxcblxcdGZvbnQtc2l6ZTogMTdweFxcclxcblxcdGZvbnQtd2VpZ2h0OiA1MDBcXHJcXG5cXHR3aGl0ZS1zcGFjZTogbm93cmFwXFxyXFxuXFx0Y29sb3I6ICM4MjgyODJcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGVcXHJcXG5cXHR0b3A6IGNhbGMoMTAwJSArIDEwcHgpXFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMFxcclxcblxcclxcbi5jaGVja2JveFxcclxcblxcdGRpc3BsYXk6IGlubGluZS1mbGV4XFxyXFxuXFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnRcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmVcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAwXFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyXFxyXFxuXFx0aW5wdXRcXHJcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGVcXHJcXG5cXHRcXHRvcGFjaXR5OiAwXFxyXFxuXFx0XFx0aGVpZ2h0OiAwXFxyXFxuXFx0XFx0d2lkdGg6IDBcXHJcXG5cXHRcXHQmOmNoZWNrZWQgXFxyXFxuXFx0XFx0XFx0fiAuY2hlY2ttYXJrXFxyXFxuXFx0XFx0XFx0XFx0Jjo6YmVmb3JlXFxyXFxuXFx0XFx0XFx0XFx0XFx0b3BhY2l0eTogMVxcclxcblxcclxcbi5jaGVja21hcmtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4XFxyXFxuXFx0ZmxleDogMCAwIDIwcHhcXHJcXG5cXHR3aWR0aDogMjBweFxcclxcblxcdGhlaWdodDogMjBweFxcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyXFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlclxcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICNmZmZcXHJcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjYmRiZGJkXFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNHB4XFxyXFxuXFx0bWFyZ2luLXJpZ2h0OiAxMHB4XFxyXFxuXFx0Jjo6YmVmb3JlXFxyXFxuXFx0XFx0Y29udGVudDogJydcXHJcXG5cXHRcXHRkaXNwbGF5OiBibG9ja1xcclxcblxcdFxcdHdpZHRoOiAxNHB4XFxyXFxuXFx0XFx0aGVpZ2h0OiAxNHB4XFxyXFxuXFx0XFx0Ly8gYmFja2dyb3VuZDogdXJsKC4uL2ltYWdlcy9kaXN0L2ljb25zL2NoZWNrLnN2ZykgbGVmdCAvIGNvbnRhaW4gbm8tcmVwZWF0XFxyXFxuXFx0XFx0b3BhY2l0eTogMFxcclxcblxcdFxcdHRyYW5zaXRpb246IG9wYWNpdHkgLjI1cyBlYXNlXFxyXFxuXFxyXFxuLmxhYmVsXFxyXFxuXFx0ZGlzcGxheTogYmxvY2tcXHJcXG5cXHRmb250LWZhbWlseTogaWJtLWdlbywgc2Fucy1zZXJpZlxcclxcblxcdGZvbnQtc2l6ZTogMTZweFxcclxcblxcdGZvbnQtc3R5bGU6IGl0YWxpY1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxLjI1XFxyXFxuXFx0Y29sb3I6ICM4MjgyODJcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiA4cHhcXHJcXG5cXHJcXG4uY291bnRlclxcclxcblxcdGRpc3BsYXk6IGZsZXhcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyXFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuXFxyXFxuXFx0bWF4LXdpZHRoOiAxMzBweFxcclxcblxcdCZfX2NvbnRyb2xcXHJcXG5cXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXJcXHJcXG5cXHRcXHQtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZFxcclxcblxcdFxcdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZVxcclxcblxcdFxcdHdpZHRoOiA1M3B4XFxyXFxuXFx0XFx0cGFkZGluZy1sZWZ0OiA4cHhcXHJcXG5cXHRcXHRwYWRkaW5nLXJpZ2h0OiA4cHhcXHJcXG5cXHRcXHQmOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxcclxcblxcdFxcdCY6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b25cXHJcXG5cXHRcXHRcXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmVcXHJcXG5cXHQmX19idG5cXHJcXG5cXHRcXHRkaXNwbGF5OiBibG9ja1xcclxcblxcdFxcdGxpbmUtaGVpZ2h0OiAyMHB4XFxyXFxuXFx0XFx0d2lkdGg6IDI0cHhcXHJcXG5cXHRcXHRoZWlnaHQ6IDI0cHhcXHJcXG5cXHRcXHRib3JkZXItY29sb3I6ICRhY2NlbnRcXHJcXG5cXHRcXHRjb2xvcjogJGFjY2VudFxcclxcblxcdFxcdHBhZGRpbmc6IDBcXHJcXG5cXHJcXG4uYm9va2luZ1xcclxcblxcdCZfX2hlYWRlclxcclxcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICNFNEQ4QkNcXHJcXG5cXHRcXHRwYWRkaW5nOiAxNHB4IDIwcHhcXHJcXG5cXHQmX190aXRsZVxcclxcblxcdFxcdGZvbnQtc2l6ZTogMTRweFxcclxcblxcdFxcdGZvbnQtd2VpZ2h0OiA4MDBcXHJcXG5cXHRcXHRsZXR0ZXItc3BhY2luZzogMC4wNmVtXFxyXFxuXFx0XFx0bGluZS1oZWlnaHQ6IDEuNDJcXHJcXG5cXHRcXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlXFxyXFxuXFx0XFx0Y29sb3I6ICM0ZjRmNGZcXHJcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAwXFxyXFxuXFx0Jl9fY29udGVudFxcclxcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICNmMmVjZGVcXHJcXG5cXHRcXHRwYWRkaW5nOiAyMHB4IDIwcHggMThweFxcclxcblxcdCZfX2NvbnRyb2xzXFxyXFxuXFx0XFx0bWFyZ2luOiAwIC01cHhcXHJcXG5cXHQmX19ncm91cFxcclxcblxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZVxcclxcblxcdFxcdHBhZGRpbmc6IDAgNXB4XFxyXFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMjBweFxcclxcblxcdFxcdCZfbGVzcy1tYXJnaW5cXHJcXG5cXHRcXHRcXHRtYXJnaW4tYm90dG9tOiAxMHB4XFxyXFxuXFx0Jl9fcm93XFxyXFxuXFx0XFx0YWxpZ24taXRlbXM6IGZsZXgtZW5kXFxyXFxuXFx0XFx0bWFyZ2luLWxlZnQ6IC0xMHB4XFxyXFxuXFx0XFx0bWFyZ2luLXJpZ2h0OiAtMTBweFxcclxcblxcdFxcdCZfY2hpbGRyZW5cXHJcXG5cXHRcXHRcXHRtYXJnaW4tYm90dG9tOiAxMHB4XFxyXFxuXFx0Jl9fY29sXFxyXFxuXFx0XFx0cGFkZGluZzogMCAxMHB4XFxyXFxuXFx0Jl9fcmVzdWx0XFxyXFxuXFx0XFx0bWFyZ2luOiA1MHB4IDAgMzBweFxcclxcblxcdCZfX2J0blxcclxcblxcdFxcdHdpZHRoOiAxMDAlXFxyXFxuXFx0Jl9fZHVwbGljYXRlXFxyXFxuXFx0XFx0ZGlzcGxheTogYmxvY2tcXHJcXG5cXHRcXHRwYWRkaW5nOiAwXFxyXFxuXFx0XFx0Zm9udC1mYW1pbHk6IGlibS1nZW8sIHNhbnMtc2VyaWZcXHJcXG5cXHRcXHRmb250LXNpemU6IDE0cHhcXHJcXG5cXHRcXHRmb250LXN0eWxlOiBpdGFsaWNcXHJcXG5cXHRcXHRjb2xvcjogJGFjY2VudFxcclxcblxcdFxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lXFxyXFxuXFx0XFx0YmFja2dyb3VuZDogbm9uZVxcclxcblxcdFxcdGJvcmRlcjogbm9uZVxcclxcblxcdFxcdGxpbmUtaGVpZ2h0OiAxLjQyXFxyXFxuXFx0XFx0dHJhbnNpdGlvbjogY29sb3IgLjI1cyBlYXNlXFxyXFxuXFx0XFx0Jjpob3ZlclxcclxcblxcdFxcdFxcdGNvbG9yOiBsaWdodGVuKCRhY2NlbnQsIDEwKVxcclxcblxcdC5nLXJlY2FwdGNoYVxcclxcblxcdFxcdHRyYW5zZm9ybTogc2NhbGUoMC44NSlcXHJcXG5cXHRcXHR0cmFuc2Zvcm0tb3JpZ2luOiAwIDBcXHJcXG5cXHJcXG4ucmVzdWx0LWJvb2tpbmdcXHJcXG5cXHQmX190aXRsZVxcclxcblxcdFxcdG1hcmdpbi1ib3R0b206IDE4cHhcXHJcXG5cXHQmX19zdWJ0aXRsZVxcclxcblxcdFxcdGZvbnQtZmFtaWx5OiBpYm0tZ2VvLCBzYW5zLXNlcmlmXFxyXFxuXFx0XFx0Zm9udC1zdHlsZTogaXRhbGljXFxyXFxuXFx0XFx0Zm9udC1zaXplOiAxNnB4XFxyXFxuXFx0XFx0Zm9udC13ZWlnaHQ6IG5vcm1hbFxcclxcblxcdFxcdGxpbmUtaGVpZ2h0OiAxLjI1XFxyXFxuXFx0XFx0Y29sb3I6ICM4MjgyODJcXHJcXG5cXHQmX19pdGVtXFxyXFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMTBweFxcclxcblxcclxcbi5pdGVtLXJlc3VsdFxcclxcblxcdGRpc3BsYXk6IGZsZXhcXHJcXG5cXHRhbGlnbi1pdGVtczogZmxleC1lbmRcXHJcXG5cXHRsaW5lLWhlaWdodDogMVxcclxcblxcdGNvbG9yOiAjMDAwXFxyXFxuXFx0Jl9fdGl0bGVcXHJcXG5cXHRcXHRmb250LWZhbWlseTogaWJtLWdlbywgc2Fucy1zZXJpZlxcclxcblxcdFxcdGZvbnQtc3R5bGU6IGl0YWxpY1xcclxcblxcdFxcdGZvbnQtc2l6ZTogMTZweFxcclxcblxcdCZfX3ZhbHVlXFxyXFxuXFx0XFx0Zm9udC1zaXplOiAxN3B4XFxyXFxuXFx0XFx0Zm9udC13ZWlnaHQ6IDUwMFxcclxcblxcdCZfX2RpdmlkZXJcXHJcXG5cXHRcXHRmbGV4LWdyb3c6IDFcXHJcXG5cXHRcXHRib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICM4MjgyODJcXHJcXG5cXHRcXHRtYXJnaW46IDAgMCAycHggN3B4XFxyXFxuXFx0Jl90b3RhbFxcclxcblxcdFxcdG1hcmdpbi10b3A6IDE4cHhcXHJcXG5cXHRcXHQuaXRlbS1yZXN1bHRfX3ZhbHVlXFxyXFxuXFx0XFx0XFx0Zm9udC1zaXplOiAyMnB4XFxyXFxuXFx0XFx0XFx0Zm9udC13ZWlnaHQ6IGJvbGRcXHJcXG5cXHJcXG4uc2xpZGVyLWltYWdlcy13cmFwcGVyXFxyXFxuXFx0Jl9faW5uZXJcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwXFxyXFxuXFxyXFxuLnNsaWRlci1pbWFnZXMtbWFpblxcclxcblxcdCZfX2l0ZW1zXFxyXFxuXFx0XFx0b3ZlcmZsb3c6IGhpZGRlblxcclxcblxcdFxcdC5zbGljay1saXN0XFxyXFxuXFx0XFx0XFx0bWFyZ2luOiAwIC0xMHB4XFxyXFxuXFx0XFx0XFx0cGFkZGluZzogMCFpbXBvcnRhbnRcXHJcXG5cXHRcXHQuc2xpZGVyLWltYWdlc19faXRlbVxcclxcblxcdFxcdFxcdG1hcmdpbjogMCAxMHB4IDZweFxcclxcblxcdFxcdCZfc2luZ2xlXFxyXFxuXFx0XFx0XFx0LnNsaWRlci1pbWFnZXNfX2l0ZW1cXHJcXG5cXHRcXHRcXHRcXHRtYXJnaW4tYm90dG9tOiAwXFxyXFxuXFx0Jl9fbmF2XFxyXFxuXFx0XFx0Jl9wcmV2XFxyXFxuXFx0XFx0XFx0bGVmdDogMFxcclxcblxcdFxcdCZfbmV4dFxcclxcblxcdFxcdFxcdHJpZ2h0OiAwXFxyXFxuXFxyXFxuLnNsaWRlci1pbWFnZXMtdGh1bWJzXFxyXFxuXFx0Jl9faXRlbXNcXHJcXG5cXHRcXHRvdmVyZmxvdzogaGlkZGVuXFxyXFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogLTRweFxcclxcblxcdFxcdC5zbGljay1saXN0XFxyXFxuXFx0XFx0XFx0bWFyZ2luOiAwIC01cHhcXHJcXG5cXHRcXHRcXHRwYWRkaW5nOiAwIDMwcHggMCAwIWltcG9ydGFudFxcclxcblxcdFxcdC5zbGlkZXItaW1hZ2VzX19pdGVtXFxyXFxuXFx0XFx0XFx0bWFyZ2luOiAwIDFweFxcclxcblxcclxcbi5pdGVtLWltYWdlc1xcclxcblxcdGRpc3BsYXk6IGZsZXhcXHJcXG5cXHRjb2xvcjogI2ZmZlxcclxcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZVxcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZVxcclxcblxcdCY6aG92ZXJcXHJcXG5cXHRcXHRjb2xvcjogI2ZmZlxcclxcblxcdCYuc2xpY2stY3VycmVudCwgJi5zbGljay1jdXJyZW50LWNsb25lLWFuaW1hdGVcXHJcXG5cXHRcXHRib3JkZXItY29sb3I6ICRzZWNvbmRhcnlcXHJcXG5cXHQmX19pbWdcXHJcXG5cXHRcXHRvYmplY3QtZml0OiBjb3ZlclxcclxcblxcdFxcdHdpZHRoOiAxMDAlXFxyXFxuXFx0XFx0aGVpZ2h0OiA0NTVweFxcclxcblxcdFxcdGJvcmRlci1yYWRpdXM6IDRweFxcclxcblxcdCZfX3RpdGxlXFxyXFxuXFx0XFx0cG9zaXRpb246IGFic29sdXRlXFxyXFxuXFx0XFx0bGVmdDogMjBweFxcclxcblxcdFxcdHJpZ2h0OiAyMHB4XFxyXFxuXFx0XFx0Ym90dG9tOiAyMHB4XFxyXFxuXFx0XFx0dGV4dC1hbGlnbjogY2VudGVyXFxyXFxuXFx0XFx0ei1pbmRleDogMlxcclxcblxcdFxcdG1hcmdpbi1ib3R0b206IDBcXHJcXG5cXHQmX3RodW1iXFxyXFxuXFx0XFx0Ym9yZGVyOiA0cHggc29saWQgdHJhbnNwYXJlbnRcXHJcXG5cXHRcXHRib3JkZXItcmFkaXVzOiA4cHhcXHJcXG5cXHRcXHRjdXJzb3I6IHBvaW50ZXJcXHJcXG5cXHRcXHR0cmFuc2l0aW9uOiBib3JkZXIgLjI1cyBlYXNlXFxyXFxuXFx0XFx0Lml0ZW0taW1hZ2VzX19pbWdcXHJcXG5cXHRcXHRcXHRoZWlnaHQ6IDEyMHB4XFxyXFxuXFxyXFxuLmZpbGVzLXBhZ2VcXHJcXG5cXHQmX190aXRsZVxcclxcblxcdFxcdG1hcmdpbi1ib3R0b206IDEwcHhcXHJcXG5cXHQmX190ZXh0XFxyXFxuXFx0XFx0Zm9udC1mYW1pbHk6IHJhbGV3YXktZ2VvLCBzYW5zLXNlcmlmXFxyXFxuXFx0XFx0Zm9udC1zaXplOiAxN3B4XFxyXFxuXFx0XFx0Zm9udC13ZWlnaHQ6IDUwMFxcclxcblxcdFxcdGNvbG9yOiAjMDAwXFxyXFxuXFx0XFx0bGluZS1oZWlnaHQ6IDEuMjVcXHJcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAxMHB4XFxyXFxuXFx0Jl9faXRlbVxcclxcblxcdFxcdG1hcmdpbi1ib3R0b206IDEycHhcXHJcXG5cXHJcXG4uaXRlbS1maWxlXFxyXFxuXFx0Jl9fbGlua1xcclxcblxcdFxcdGRpc3BsYXk6IGlubGluZS1mbGV4XFxyXFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlclxcclxcblxcdFxcdGZvbnQtZmFtaWx5OiByYWxld2F5LWdlbywgc2Fucy1zZXJpZlxcclxcblxcdFxcdGZvbnQtc2l6ZTogMTdweFxcclxcblxcdFxcdGZvbnQtd2VpZ2h0OiA2MDBcXHJcXG5cXHRcXHRsaW5lLWhlaWdodDogMS4yNVxcclxcblxcdFxcdGNvbG9yOiAjMDAwXFxyXFxuXFx0XFx0dHJhbnNpdGlvbjogY29sb3IgLjI1cyBlYXNlXFxyXFxuXFx0XFx0Jjpob3ZlclxcclxcblxcdFxcdFxcdGNvbG9yOiAkYWNjZW50XFxyXFxuXFx0Jl9faWNvblxcclxcblxcdFxcdG1heC13aWR0aDogMTNweFxcclxcblxcdFxcdG1hcmdpbi1yaWdodDogMTJweFxcclxcblxcclxcbi5mZWVkYmFja1xcclxcblxcdCZfX3Jvd1xcclxcblxcdFxcdGRpc3BsYXk6IGZsZXhcXHJcXG5cXHRcXHRmbGV4LXdyYXA6IHdyYXBcXHJcXG5cXHRcXHRtYXJnaW4tbGVmdDogLTEwcHhcXHJcXG5cXHRcXHRtYXJnaW4tcmlnaHQ6IC0xMHB4XFxyXFxuXFx0Jl9fY29sXFxyXFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMjBweFxcclxcblxcdFxcdHBhZGRpbmc6IDAgMTBweFxcclxcblxcdFxcdCZfZmlsZVxcclxcblxcdFxcdFxcdGZsZXg6IDAgMCAxNzNweFxcclxcblxcdFxcdFxcdG1heC13aWR0aDogMTczcHhcXHJcXG5cXHRcXHQmX25hbWUsICZfcHJvZ3JhbSwgJl9lbWFpbFxcclxcblxcdFxcdFxcdGZsZXg6IDAgMCAyOTlweFxcclxcblxcdFxcdFxcdG1heC13aWR0aDogMjk5cHhcXHJcXG5cXHRcXHQmX3NlYXNvblxcclxcblxcdFxcdFxcdGZsZXg6IDAgMCAxNTVweFxcclxcblxcdFxcdFxcdG1heC13aWR0aDogMTU1cHhcXHJcXG5cXHRcXHQmX3llYXJcXHJcXG5cXHRcXHRcXHRmbGV4OiAwIDAgMTIzcHhcXHJcXG5cXHRcXHRcXHRtYXgtd2lkdGg6IDEyM3B4XFxyXFxuXFx0XFx0Jl9waG9uZVxcclxcblxcdFxcdFxcdGZsZXg6IDAgMCAyNDBweFxcclxcblxcdFxcdFxcdG1heC13aWR0aDogMjQwcHhcXHJcXG5cXHRcXHQmX3RleHRhcmVhLCAmX2NhcHRjaGFcXHJcXG5cXHRcXHRcXHRmbGV4OiAwIDAgMTAwJVxcclxcblxcdFxcdFxcdG1heC13aWR0aDogMTAwJVxcclxcblxcdCZfX2J0blxcclxcblxcdFxcdHdpZHRoOiAyNzlweFxcclxcblxcdCZfX3RpdGxlXFxyXFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMTBweFxcclxcblxcclxcbi5zZWN0aW9uLW1hcFxcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZVxcclxcblxcdCZfX21hcFxcclxcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZVxcclxcblxcdFxcdHRvcDogMFxcclxcblxcdFxcdGxlZnQ6IDBcXHJcXG5cXHRcXHRyaWdodDogMFxcclxcblxcdFxcdGJvdHRvbTogMFxcclxcblxcdFxcdGlmcmFtZVxcclxcblxcdFxcdFxcdGJvcmRlcjogbm9uZVxcclxcblxcdFxcdFxcdHdpZHRoOiAxMDAlXFxyXFxuXFx0XFx0XFx0aGVpZ2h0OiAxMDAlXFxyXFxuXFx0Jl9fY29udGFpbmVyXFxyXFxuXFx0XFx0ei1pbmRleDogMlxcclxcblxcdFxcdGNvbG9yOiAjZmZmXFxyXFxuXFx0Jl9faW5uZXJcXHJcXG5cXHRcXHRtYXgtd2lkdGg6IDM5MHB4XFxyXFxuXFx0XFx0cG9zaXRpb246IHJlbGF0aXZlXFxyXFxuXFx0XFx0cGFkZGluZzogNzBweCAzMHB4IDcwcHggMFxcclxcblxcdFxcdCY6OmJlZm9yZVxcclxcblxcdFxcdFxcdGNvbnRlbnQ6ICcnXFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogYmxvY2tcXHJcXG5cXHRcXHRcXHRwb3NpdGlvbjogYWJzb2x1dGVcXHJcXG5cXHRcXHRcXHR0b3A6IDBcXHJcXG5cXHRcXHRcXHRyaWdodDogMFxcclxcblxcdFxcdFxcdGxlZnQ6IC05OTk5cHhcXHJcXG5cXHRcXHRcXHRib3R0b206IDBcXHJcXG5cXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCMwMDAsIC42KVxcclxcblxcdCZfX2NvbnRlbnRcXHJcXG5cXHRcXHRwb3NpdGlvbjogcmVsYXRpdmVcXHJcXG5cXHRcXHR6LWluZGV4OiAyXFxyXFxuXFx0Jl9fdGl0bGUsICZfX3RleHRcXHJcXG5cXHRcXHRjb2xvcjogI2ZmZlxcclxcblxcdFxcdHRleHQtc2hhZG93OiAwcHggMHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMylcXHJcXG5cXHQmX190aXRsZVxcclxcblxcdFxcdG1hcmdpbi1ib3R0b206IDMwcHhcXHJcXG5cXHQmX190ZXh0LXdyYXBcXHJcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiA0M3B4XFxyXFxuXFxyXFxuLnRlYW1cXHJcXG5cXHQmX19pdGVtc1xcclxcblxcdFxcdG1hcmdpbi1ib3R0b206IC0yMHB4XFxyXFxuXFx0Jl9fdGl0bGVcXHJcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAzMHB4XFxyXFxuXFx0Jl9faXRlbVxcclxcblxcdFxcdG1hcmdpbi1ib3R0b206IDIwcHhcXHJcXG5cXHQmX2xnXFxyXFxuXFx0XFx0LnRlYW1fX2l0ZW1zXFxyXFxuXFx0XFx0XFx0bWFyZ2luLWxlZnQ6IC0zNXB4XFxyXFxuXFx0XFx0XFx0bWFyZ2luLXJpZ2h0OiAtMzVweFxcclxcblxcdFxcdFxcdG1hcmdpbi1ib3R0b206IC03MHB4XFxyXFxuXFx0XFx0LnRlYW1fX2l0ZW1cXHJcXG5cXHRcXHRcXHRwYWRkaW5nOiAwIDM1cHhcXHJcXG5cXHRcXHRcXHRtYXJnaW4tYm90dG9tOiA3MHB4XFxyXFxuXFx0XFx0Lml0ZW0tdGVhbV9faW5uZXJcXHJcXG5cXHRcXHRcXHRtYXJnaW4tYm90dG9tOiAxMHB4XFxyXFxuXFx0XFx0Lml0ZW0tdGVhbV9faW1nLXdyYXBcXHJcXG5cXHRcXHRcXHRmbGV4OiAwIDAgMjAwcHhcXHJcXG5cXHRcXHRcXHR3aWR0aDogMjAwcHhcXHJcXG5cXHRcXHQuaXRlbS10ZWFtX19pbWdcXHJcXG5cXHRcXHRcXHRoZWlnaHQ6IDIwMHB4XFxyXFxuXFxyXFxuLml0ZW0tdGVhbVxcclxcblxcdCZfX2lubmVyXFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleFxcclxcblxcdFxcdG1hcmdpbi1ib3R0b206IDIwcHhcXHJcXG5cXHQmX19pbWctd3JhcFxcclxcblxcdFxcdGRpc3BsYXk6IGZsZXhcXHJcXG5cXHRcXHRmbGV4OiAwIDAgMTUwcHhcXHJcXG5cXHRcXHR3aWR0aDogMTUwcHhcXHJcXG5cXHRcXHRtYXJnaW46IDAgMjBweCAwIDBcXHJcXG5cXHQmX19pbWdcXHJcXG5cXHRcXHRvYmplY3QtZml0OiBjb3ZlclxcclxcblxcdFxcdHdpZHRoOiAxMDAlXFxyXFxuXFx0XFx0aGVpZ2h0OiAxNTBweFxcclxcblxcdCZfX2NvbnRlbnRcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4XFxyXFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtblxcclxcblxcdCZfX3RpdGxlXFxyXFxuXFx0XFx0Zm9udC1zaXplOiAyMHB4XFxyXFxuXFx0XFx0Zm9udC13ZWlnaHQ6IDUwMFxcclxcblxcdFxcdG1hcmdpbi1ib3R0b206IDEwcHhcXHJcXG5cXHQmX19wb3NpdGlvblxcclxcblxcdFxcdGZvbnQtZmFtaWx5OiBpYm0tZ2VvLCBzYW5zLXNlcmlmXFxyXFxuXFx0XFx0Zm9udC1zaXplOiAxNnB4XFxyXFxuXFx0XFx0Zm9udC1zdHlsZTogaXRhbGljXFxyXFxuXFx0XFx0bGluZS1oZWlnaHQ6IDEuMjVcXHJcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAxMHB4XFxyXFxuXFx0Jl9fdGV4dC13cmFwXFxyXFxuXFx0XFx0Zm9udC1mYW1pbHk6IGlibS1nZW8sIHNhbnMtc2VyaWZcXHJcXG5cXHRcXHRmb250LXNpemU6IDE0cHhcXHJcXG5cXHRcXHRmb250LXN0eWxlOiBpdGFsaWNcXHJcXG5cXHRcXHRsaW5lLWhlaWdodDogMS40MlxcclxcblxcdFxcdGNvbG9yOiAjMDAwXFxyXFxuXFx0Jl9fdGV4dFxcclxcblxcdFxcdCY6bGFzdC1jaGlsZFxcclxcblxcdFxcdFxcdG1hcmdpbi1ib3R0b206IDBcXHJcXG5cXHQmX19jb250YWN0c1xcclxcblxcdFxcdG1hcmdpbi10b3A6IGF1dG9cXHJcXG5cXHQmX19jb250YWN0XFxyXFxuXFx0XFx0Jjpub3QoOmxhc3QtY2hpbGQpXFxyXFxuXFx0XFx0XFx0bWFyZ2luLWJvdHRvbTogMTBweFxcclxcblxcdFxcdC5pdGVtLWNvbnRhY3RfX3ZhbHVlXFxyXFxuXFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDUwMFxcclxcblxcdCZfX3NvY2lhbHNcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4XFxyXFxuXFx0XFx0ZmxleC13cmFwOiB3cmFwXFxyXFxuXFx0XFx0bWFyZ2luOiAwIC01cHggNXB4XFxyXFxuXFx0Jl9fc29jaWFsXFxyXFxuXFx0XFx0ZGlzcGxheTogYmxvY2tcXHJcXG5cXHRcXHRmbGV4OiAwIDAgMTdweFxcclxcblxcdFxcdHdpZHRoOiAxN3B4XFxyXFxuXFx0XFx0aGVpZ2h0OiAxN3B4XFxyXFxuXFx0XFx0bWFyZ2luOiAwIDVweCA1cHhcXHJcXG5cXHQmX19zb2NpYWwtaWNvblxcclxcblxcdFxcdHZlcnRpY2FsLWFsaWduOiB0b3BcXHJcXG5cXHJcXG4uY3VzdG9tLXNjcm9sbGJhci1ob3Jpem9udGFsXFxyXFxuXFx0Jjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2tcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kOiAjZmZmXFxyXFxuXFx0Jjo6LXdlYmtpdC1zY3JvbGxiYXJcXHJcXG5cXHRcXHRoZWlnaHQ6IDJweFxcclxcblxcdFxcdHdpZHRoOiAyMDBweFxcclxcblxcdCY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iXFxyXFxuXFx0XFx0YmFja2dyb3VuZDogJGFjY2VudFxcclxcblxcdCY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyXFxyXFxuXFx0XFx0YmFja2dyb3VuZDogbGlnaHRlbigkYWNjZW50LCAxNSlcXHJcXG5cXHJcXG4udGFibGUtd3JhcFxcclxcblxcdG92ZXJmbG93LXg6IGF1dG9cXHJcXG5cXHRwYWRkaW5nLWJvdHRvbTogMTJweFxcclxcblxcdG1hcmdpbi10b3A6IDMwcHhcXHJcXG5cXHJcXG4udGFibGVcXHJcXG5cXHRtaW4td2lkdGg6IDkwMHB4XFxyXFxuXFx0d2lkdGg6IDEwMCVcXHJcXG5cXHR0aGVhZFxcclxcblxcdFxcdHRkXFxyXFxuXFx0XFx0XFx0Zm9udC1mYW1pbHk6IHJhbGV3YXktZ2VvLCBzYW5zLXNlcmlmXFxyXFxuXFx0XFx0XFx0Zm9udC1zaXplOiAyMHB4XFxyXFxuXFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDUwMFxcclxcblxcdFxcdFxcdGZvbnQtc3R5bGU6IG5vcm1hbFxcclxcblxcdFxcdFxcdHRleHQtYWxpZ246IGNlbnRlclxcclxcblxcdHRkXFxyXFxuXFx0XFx0Ym9yZGVyOiAxcHggc29saWQgI2ZmZlxcclxcblxcdFxcdHBhZGRpbmc6IDEwcHhcXHJcXG5cXHJcXG4uY29udGFjdHNcXHJcXG5cXHQmX19pdGVtc1xcclxcblxcdFxcdGRpc3BsYXk6IGZsZXhcXHJcXG5cXHRcXHRmbGV4LXdyYXA6IHdyYXBcXHJcXG5cXHRcXHRtYXJnaW4tbGVmdDogLTEwcHhcXHJcXG5cXHRcXHRtYXJnaW4tcmlnaHQ6IC0xMHB4XFxyXFxuXFx0Jl9faXRlbVxcclxcblxcdFxcdG1heC13aWR0aDogMzAwcHhcXHJcXG5cXHRcXHRwYWRkaW5nOiAwIDEwcHhcXHJcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAyMHB4XFxyXFxuXFx0Jl9fdGl0bGVcXHJcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAxMHB4XFxyXFxuXFxyXFxuLml0ZW0tY29udGFjdFxcclxcblxcdGxpbmUtaGVpZ2h0OiAxXFxyXFxuXFx0Jl9fdGl0bGVcXHJcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAxMHB4XFxyXFxuXFx0Jl9fdmFsdWVcXHJcXG5cXHRcXHRkaXNwbGF5OiBpbmxpbmUtZmxleFxcclxcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXJcXHJcXG5cXHRcXHRmb250LWZhbWlseTogcmFsZXdheS1nZW8sIHNhbnMtc2VyaWZcXHJcXG5cXHRcXHRmb250LWZlYXR1cmUtc2V0dGluZ3M6ICdsbnVtJyAxXFxyXFxuXFx0XFx0Zm9udC1zaXplOiAxN3B4XFxyXFxuXFx0XFx0Zm9udC13ZWlnaHQ6IDYwMFxcclxcblxcdFxcdGxpbmUtaGVpZ2h0OiAxLjIzXFxyXFxuXFx0XFx0Y29sb3I6ICMwMDBcXHJcXG5cXHRcXHR0ZXh0LWRlY29yYXRpb246IG5vbmVcXHJcXG5cXHRcXHR0cmFuc2l0aW9uOiBjb2xvciAuMjVzIGVhc2VcXHJcXG5cXHRcXHQmOmhvdmVyXFxyXFxuXFx0XFx0XFx0Y29sb3I6ICRhY2NlbnRcXHJcXG5cXHQmX19pY29uXFxyXFxuXFx0XFx0ZmxleDogMCAwIDE3cHhcXHJcXG5cXHRcXHR3aWR0aDogMTdweFxcclxcblxcdFxcdG1hcmdpbi1yaWdodDogMTBweFxcclxcblxcclxcbi5tZXNzYWdlXFxyXFxuXFx0Ly8gYmFja2dyb3VuZDogdXJsKC4uL2ltYWdlcy9kaXN0L2JnX3BvcHVwLmpwZykgY2VudGVyIC8gY292ZXIgbm8tcmVwZWF0XFxyXFxuXFx0cGFkZGluZzogMFxcclxcblxcdHdpZHRoOiA1MDBweFxcclxcblxcdGJvcmRlci1yYWRpdXM6IDRweFxcclxcblxcdCZfX2lubmVyXFxyXFxuXFx0XFx0bWluLWhlaWdodDogMzc2cHhcXHJcXG5cXHRcXHRwYWRkaW5nOiAzMHB4IDUwcHhcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4XFxyXFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlclxcclxcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cXHJcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxcclxcblxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZVxcclxcblxcdFxcdHotaW5kZXg6IDJcXHJcXG5cXHRcXHRjb2xvcjogI2ZmZlxcclxcblxcdFxcdHRleHQtYWxpZ246IGNlbnRlclxcclxcblxcdCZfX3RpdGxlXFxyXFxuXFx0XFx0Zm9udC1mYW1pbHk6IHJhbGV3YXktZ2VvLCBzYW5zLXNlcmlmXFxyXFxuXFx0XFx0Zm9udC13ZWlnaHQ6IDkwMFxcclxcblxcdFxcdGZvbnQtc2l6ZTogMzJweFxcclxcblxcdFxcdHRleHQtdHJhbnNmb3JtOiBub25lXFxyXFxuXFx0XFx0bGV0dGVyLXNwYWNpbmc6IC0wLjAzZW1cXHJcXG5cXHJcXG4uZmFuY3lib3gtbWVzc2FnZVxcclxcblxcdC5mYW5jeWJveC1zbGlkZS0taHRtbFxcclxcblxcdFxcdHBhZGRpbmc6IDBcXHJcXG5cXHJcXG4uZmFuY3lib3gtY2xvc2Utc21hbGxcXHJcXG5cXHR3aWR0aDogNjhweFxcclxcblxcdGhlaWdodDogNjhweFxcclxcblxcclxcbi5mYW5jeWJveC1zbGlkZS0taHRtbCAuZmFuY3lib3gtY2xvc2Utc21hbGxcXHJcXG5cXHRjb2xvcjogJGFjY2VudFxcclxcblxcclxcbi5jb21wZW5zYXRlLWZvci1zY3JvbGxiYXJcXHJcXG5cXHRtYXJnaW4tcmlnaHQ6IDAhaW1wb3J0YW50XFxyXFxuXFxyXFxuLmNvbnRlbnRcXHJcXG5cXHRmb250LWZhbWlseTogaWJtLWdlbywgc2Fucy1zZXJpZlxcclxcblxcdGZvbnQtc2l6ZTogMThweFxcclxcblxcdGZvbnQtc3R5bGU6IGl0YWxpY1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxLjI4XFxyXFxuXFx0aDEsIGgyLCBoMywgaDQsIGg1LCBoNlxcclxcblxcdFxcdGZvbnQtd2VpZ2h0OiA5MDBcXHJcXG5cXHRcXHRmb250LXN0eWxlOiBub3JtYWxcXHJcXG5cXHRcXHRsZXR0ZXItc3BhY2luZzogLTAuMDNlbVxcclxcblxcdFxcdG1hcmdpbi1ib3R0b206IDEwcHhcXHJcXG5cXHRoMVxcclxcblxcdFxcdGZvbnQtc2l6ZTogMzZweFxcclxcblxcdGgyXFxyXFxuXFx0XFx0Zm9udC1zaXplOiAzMnB4XFxyXFxuXFx0aDNcXHJcXG5cXHRcXHRmb250LXNpemU6IDI2cHhcXHJcXG5cXHRoNFxcclxcblxcdFxcdGZvbnQtc2l6ZTogMjRweFxcclxcblxcdGg1XFxyXFxuXFx0XFx0Zm9udC1zaXplOiAyMnB4XFxyXFxuXFx0aDZcXHJcXG5cXHRcXHRmb250LXNpemU6IDIwcHhcXHJcXG5cXHRhXFxyXFxuXFx0XFx0Y29sb3I6ICRhY2NlbnRcXHJcXG5cXHRwXFxyXFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMjBweFxcclxcblxcdGJsb2NrcXVvdGVcXHJcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAzMHB4XFxyXFxuXFx0LnJvd1xcclxcblxcdFxcdHA6bGFzdC1jaGlsZFxcclxcblxcdFxcdFxcdG1hcmdpbi1ib3R0b206IDBcXHJcXG5cXHJcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2XFxyXFxuXFx0Zm9udC1mYW1pbHk6IHJhbGV3YXktZ2VvLCBzYW5zLXNlcmlmXFxyXFxuXFxyXFxuYmxvY2txdW90ZVxcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICNmZmZcXHJcXG5cXHRwYWRkaW5nOiAyMHB4IDQ2cHhcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmVcXHJcXG5cXHQmOjpiZWZvcmUsICY6OmFmdGVyXFxyXFxuXFx0XFx0Zm9udC1mYW1pbHk6IGlibS1nZW8sIHNhbnMtc2VyaWZcXHJcXG5cXHRcXHRmb250LXNpemU6IDQ1cHhcXHJcXG5cXHRcXHRmb250LXN0eWxlOiBpdGFsaWNcXHJcXG5cXHRcXHRjb2xvcjogJGFjY2VudFxcclxcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZVxcclxcblxcdCY6OmJlZm9yZVxcclxcblxcdFxcdGNvbnRlbnQ6ICfigJwnXFxyXFxuXFx0XFx0dG9wOiA1cHhcXHJcXG5cXHRcXHRsZWZ0OiAxMHB4XFxyXFxuXFx0Jjo6YWZ0ZXJcXHJcXG5cXHRcXHRjb250ZW50OiAn4oCdJ1xcclxcblxcdFxcdGJvdHRvbTogLTEzcHhcXHJcXG5cXHRcXHRyaWdodDogMTVweFxcclxcblxcclxcbi5mb290ZXJcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5RGFya1xcclxcblxcdGNvbG9yOiAjOUNCN0Q5XFxyXFxuXFx0cGFkZGluZzogNzBweCAwIDMwcHhcXHJcXG5cXHQmX190b3BcXHJcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAyNXB4XFxyXFxuXFx0Jl9fbWVudVxcclxcblxcdFxcdHVsXFxyXFxuXFx0XFx0XFx0bWFyZ2luOiAtNXB4IC0yMHB4IDBcXHJcXG5cXHRcXHRhXFxyXFxuXFx0XFx0XFx0Y29sb3I6ICNmZmZcXHJcXG5cXHRcXHRsaVxcclxcblxcdFxcdFxcdG1hcmdpbjogNXB4IDIwcHhcXHJcXG5cXHQmX19pbmZvXFxyXFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMzBweFxcclxcblxcdCZfX2xpbmtzXFxyXFxuXFx0XFx0Zm9udC1zaXplOiAxNXB4XFxyXFxuXFx0XFx0bGluZS1oZWlnaHQ6IDFcXHJcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAwXFxyXFxuXFx0XFx0YVxcclxcblxcdFxcdFxcdGNvbG9yOiAjZmZmXFxyXFxuXFx0XFx0XFx0dGV4dC1kZWNvcmF0aW9uOiBub25lXFxyXFxuXFx0Jl9fY29weXJpZ2h0XFxyXFxuXFx0XFx0Zm9udC1zaXplOiAxNXB4XFxyXFxuXFx0XFx0dGV4dC1hbGlnbjogcmlnaHRcXHJcXG5cXHRcXHRsaW5lLWhlaWdodDogMVxcclxcblxcdFxcdG1hcmdpbi1ib3R0b206IDBcXHJcXG5cXHJcXG4uaW5mby1mb290ZXJcXHJcXG5cXHQmX190ZXh0XFxyXFxuXFx0XFx0bGluZS1oZWlnaHQ6IDEuMzFcXHJcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAwXFxyXFxuXFx0XFx0YVxcclxcblxcdFxcdFxcdGNvbG9yOiAjOUNCN0Q5XFxyXFxuXFx0XFx0XFx0dGV4dC1kZWNvcmF0aW9uOiBub25lXFxyXFxuXFxyXFxuLmNhdHMtY2FyZHNcXHJcXG5cXHQmX19yb3dcXHJcXG5cXHRcXHRtYXJnaW4tbGVmdDogLTEwcHhcXHJcXG5cXHRcXHRtYXJnaW4tcmlnaHQ6IC0xMHB4XFxyXFxuXFx0Jl9fY2FyZFxcclxcblxcdFxcdHBhZGRpbmc6IDAgMTBweFxcclxcblxcdFxcdG1hcmdpbi1ib3R0b206IDIwcHhcXHJcXG5cXHJcXG4uY2FyZC1jYXRcXHJcXG5cXHQmX19pbm5lclxcclxcblxcdFxcdGNvbG9yOiAjZmZmXFxyXFxuXFx0XFx0dGV4dC1kZWNvcmF0aW9uOiBub25lXFxyXFxuXFx0XFx0Jjpob3ZlclxcclxcblxcdFxcdFxcdGNvbG9yOiAjZmZmXFxyXFxuXFx0Jl9faW1nLXdyYXBcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4XFxyXFxuXFx0Jl9faW1nXFxyXFxuXFx0XFx0d2lkdGg6IDEwMCVcXHJcXG5cXHRcXHRoZWlnaHQ6IDIwMHB4XFxyXFxuXFx0XFx0b2JqZWN0LWZpdDogY292ZXJcXHJcXG5cXHRcXHRib3JkZXItcmFkaXVzOiA0cHhcXHJcXG5cXHQmX19jYXB0aW9uXFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogJGFjY2VudFxcclxcblxcdFxcdHBhZGRpbmc6IDEwcHhcXHJcXG5cXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXJcXHJcXG5cXHQmX190aXRsZVxcclxcblxcdFxcdG1hcmdpbi1ib3R0b206IDBcXHJcXG5cXHJcXG4uZ2FsbGVyeVxcclxcblxcdCZfX3Jvd1xcclxcblxcdFxcdG1hcmdpbi1sZWZ0OiAtMTBweFxcclxcblxcdFxcdG1hcmdpbi1yaWdodDogLTEwcHhcXHJcXG5cXHQmX19jb2xcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4XFxyXFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtblxcclxcblxcdFxcdHBhZGRpbmc6IDAgMTBweFxcclxcblxcdCZfX2l0ZW1cXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4XFxyXFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMjBweFxcclxcblxcdFxcdGhlaWdodDogMTAwJVxcclxcblxcdCZfX2ltZ1xcclxcblxcdFxcdG9iamVjdC1maXQ6IGNvdmVyXFxyXFxuXFx0XFx0d2lkdGg6IDEwMCVcXHJcXG5cXHRcXHRoZWlnaHQ6IDEwMCVcXHJcXG5cXHRcXHRib3JkZXItcmFkaXVzOiA0cHhcXHJcXG5cXHJcXG4uZmFuY3lib3gtYmdcXHJcXG5cXHRiYWNrZ3JvdW5kOiAjMDAwXFxyXFxuXFxyXFxuLnBhcmFtZXRlcnNcXHJcXG5cXHQmX19pdGVtXFxyXFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMjBweFxcclxcblxcclxcbi5pdGVtLXBhcmFtZXRlclxcclxcblxcdCZfX2hlYWRlclxcclxcblxcdFxcdGRpc3BsYXk6IGZsZXhcXHJcXG5cXHRcXHRhbGlnbi1pdGVtczogZmxleC1zdGFydFxcclxcblxcdFxcdG1hcmdpbi1ib3R0b206IDhweFxcclxcblxcdCZfX2ljb25cXHJcXG5cXHRcXHR3aWR0aDogMjBweFxcclxcblxcdFxcdG1hcmdpbi1yaWdodDogOHB4XFxyXFxuXFx0Jl9fdGl0bGVcXHJcXG5cXHRcXHRmb250LXNpemU6IDE3cHhcXHJcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAwXFxyXFxuXFx0Jl9fbGlzdFxcclxcblxcdFxcdHBhZGRpbmctbGVmdDogMjVweFxcclxcblxcdFxcdG1hcmdpbi1ib3R0b206IDhweFxcclxcblxcdCZfX2JhZGdlXFxyXFxuXFx0XFx0bWF4LXdpZHRoOiAxMzBweFxcclxcblxcdFxcdGZvbnQtc3R5bGU6IG5vcm1hbFxcclxcblxcdFxcdHBhZGRpbmc6IDJweCA1cHhcXHJcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAycHhcXHJcXG5cXHQmX190ZXh0LXdyYXBcXHJcXG5cXHRcXHRmb250LWZhbWlseTogaWJtLWdlbywgc2Fucy1zZXJpZlxcclxcblxcdFxcdGZvbnQtc2l6ZTogMTRweFxcclxcblxcdFxcdGZvbnQtc3R5bGU6IGl0YWxpY1xcclxcblxcdFxcdGxpbmUtaGVpZ2h0OiAxLjQzXFxyXFxuXFxyXFxuLmNvbmRpdGlvbnNcXHJcXG5cXHQmX19ibG9ja1xcclxcblxcdFxcdG1hcmdpbi1ib3R0b206IDIwcHhcXHJcXG5cXHQmX19kaXZpZGVyXFxyXFxuXFx0XFx0bWFyZ2luLXRvcDogMFxcclxcblxcdCZfX2l0ZW1zXFxyXFxuXFx0XFx0bWFyZ2luLWxlZnQ6IC0xMHB4XFxyXFxuXFx0XFx0bWFyZ2luLXJpZ2h0OiAtMTBweFxcclxcblxcdCZfX2l0ZW1cXHJcXG5cXHRcXHRwYWRkaW5nOiAwIDEwcHhcXHJcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAyMHB4XFxyXFxuXFxyXFxuLml0ZW0tY29uZGl0aW9uXFxyXFxuXFx0Jl9fYmFkZ2VcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4XFxyXFxuXFx0XFx0aGVpZ2h0OiAxMDAlXFxyXFxuXFx0XFx0dGV4dC1hbGlnbjogY2VudGVyXFxyXFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXJcXHJcXG5cXHJcXG4ucGFyYW1ldGVycy1ib29raW5nXFxyXFxuXFx0Jl9faXRlbVxcclxcblxcdFxcdG1hcmdpbi1ib3R0b206IDMwcHhcXHJcXG5cXHJcXG4uaXRlbS1wYXJhbWV0ZXJzLWJvb2tpbmdcXHJcXG5cXHQmX190aXRsZVxcclxcblxcdFxcdHRleHQtdHJhbnNmb3JtOiBub25lXFxyXFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMTBweFxcclxcblxcdCZfX3RleHQtd3JhcFxcclxcblxcdFxcdGZvbnQtZmFtaWx5OiBpYm0tZ2VvLCBzYW5zLXNlcmlmXFxyXFxuXFx0XFx0Zm9udC1zaXplOiAxOHB4XFxyXFxuXFx0XFx0Zm9udC1zdHlsZTogaXRhbGljXFxyXFxuXFx0XFx0bGluZS1oZWlnaHQ6IDEuMjdcXHJcXG5cXHQmX190ZXh0XFxyXFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMTBweFxcclxcblxcdFxcdCY6bGFzdC1jaGlsZFxcclxcblxcdFxcdFxcdG1hcmdpbi1ib3R0b206IDBcXHJcXG5cXHJcXG4uc3RvY2tcXHJcXG5cXHQmX19pdGVtc1xcclxcblxcdFxcdG1hcmdpbi1sZWZ0OiAtMzVweFxcclxcblxcdFxcdG1hcmdpbi1yaWdodDogLTM1cHhcXHJcXG5cXHQmX19pdGVtXFxyXFxuXFx0XFx0cGFkZGluZzogMCAzNXB4XFxyXFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogNzBweFxcclxcblxcclxcbi5zdXBlci1tYXBcXHJcXG5cXHQmX19pbm5lclxcclxcblxcdFxcdG92ZXJmbG93LXg6IGF1dG9cXHJcXG5cXHRcXHRwYWRkaW5nLWJvdHRvbTogMTJweFxcclxcblxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZVxcclxcblxcdFxcdC8vIGN1cnNvcjogdXJsKC4uL2ltYWdlcy9kaXN0L2ljb25zL2N1cnNvci5wbmcpLCBhdXRvXFxyXFxuXFx0Jl9fdGV4dFxcclxcblxcdFxcdHRleHQtYWxpZ246IGNlbnRlclxcclxcblxcdFxcdGxpbmUtaGVpZ2h0OiAxLjI1XFxyXFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMTBweFxcclxcblxcdCZfX2VsZW1lbnRcXHJcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGVcXHJcXG5cXHRcXHRkaXNwbGF5OiBibG9ja1xcclxcblxcdFxcdGN1cnNvcjogcG9pbnRlclxcclxcblxcdCZfX2ltZ1xcclxcblxcdFxcdHVzZXItc2VsZWN0OiBub25lXFxyXFxuXFxyXFxuLmVsZW1lbnQtc3VwZXItbWFwXFxyXFxuXFx0Ly8gY3Vyc29yOiB1cmwoLi4vaW1hZ2VzL2Rpc3QvaWNvbnMvY3Vyc29yX2FjY2VudC5wbmcpLCBhdXRvXFxyXFxuXFx0Jl9fYmFsbG9vblxcclxcblxcdFxcdG9wYWNpdHk6IDBcXHJcXG5cXHRcXHR2aXNpYmlsaXR5OiBoaWRkZW5cXHJcXG5cXHRcXHR0cmFuc2l0aW9uOiBvcGFjaXR5IC4yNXMgZWFzZSwgdmlzaWJpbGl0eSAuMjVzIGVhc2VcXHJcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGVcXHJcXG5cXHRcXHRib3R0b206IDEwMCVcXHJcXG5cXHRcXHRsZWZ0OiA1MCVcXHJcXG5cXHQmLmFjdGl2ZVxcclxcblxcdFxcdC5lbGVtZW50LXN1cGVyLW1hcF9fYmFsbG9vblxcclxcblxcdFxcdFxcdG9wYWNpdHk6IDFcXHJcXG5cXHRcXHRcXHR2aXNpYmlsaXR5OiB2aXNpYmxlXFxyXFxuXFxyXFxuLmJhbGxvb25cXHJcXG5cXHR3aWR0aDogMjgwcHhcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmXFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgJGFjY2VudFxcclxcblxcdGJvcmRlci1yYWRpdXM6IDRweFxcclxcblxcdHBhZGRpbmc6IDEwcHhcXHJcXG5cXHRkaXNwbGF5OiBmbGV4XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtblxcclxcblxcdCZfX3RleHRcXHJcXG5cXHRcXHRmb250LWZhbWlseTogaWJtLWdlbywgc2Fucy1zZXJpZlxcclxcblxcdFxcdGZvbnQtc3R5bGU6IGl0YWxpY1xcclxcblxcdFxcdGxpbmUtaGVpZ2h0OiAxLjI1XFxyXFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMTBweFxcclxcblxcdCZfX2ltZ1xcclxcblxcdFxcdG9iamVjdC1maXQ6IGNvdmVyXFxyXFxuXFx0XFx0d2lkdGg6IDEwMCVcXHJcXG5cXHRcXHRoZWlnaHQ6IDE0OHB4XFxyXFxuXFx0XFx0Ym9yZGVyLXJhZGl1czogNHB4XFxyXFxuXCIsXCIvLyBVU0VSIFZBUklBQkxFUyBTRUNUSU9OXFxyXFxuXFxyXFxuJGFjY2VudDogI0E2MjMxOFxcclxcbiRzdWNjZXNzOiAjMGFiMTRhXFxyXFxuJHNlY29uZGFyeTogIzQ3NzJBN1xcclxcbiRzZWNvbmRhcnlEYXJrOiAjMDAyRjU1XFxyXFxuJHNlY29uZGFyeUxpZ2h0OiAjQkREMEU4XFxyXFxuJGFscGhhOiAjYWJhMzg1XFxyXFxuJGJyYXZvOiAjNjA2MDYwXFxyXFxuJGZvbnRzaXplOiAxNnB4IC8vIEJvZHkgRm9udCBTaXplXFxyXFxuJHRleHRjb2xvcjogIzMzMyAvLyBUZXh0IENvbG9yXFxyXFxuJGxpbmVoZWlnaHQ6IDEuNjUgLy8gRG9jdW1lbnQgTGluZSBIZWlnaHRcXHJcXG4kdXNlcmZvbnQ6IGludHJvLWdlbywgc2Fucy1zZXJpZiAvLyBVc2VyIEZvbnQgRmFtaWx5XFxyXFxuJHN5c3RlbWZvbnQ6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgQXJpYWwsIHNhbnMtc2VyaWYgLy8gU3lzdGVtIEZvbnQgRmFtaWx5XFxyXFxuXFxyXFxuLy8gQm9vdHN0cmFwIGNvbXBhdGlibGUgZ3V0dGVyIHZhcmlhYmxlID0+ICRndXR0ZXJcXHJcXG4kZ3JpZC1ndXR0ZXItd2lkdGg6IDMwcHhcXHJcXG4kZ3V0dGVyOiAkZ3JpZC1ndXR0ZXItd2lkdGhcXHJcXG5cXHJcXG4kY29udGFpbmVyLW1heC13aWR0aHM6IChzbTogMTAwJSwgbWQ6IDc2MHB4LCBsZzogOTcwcHgsIHhsOiAxMTUwcHgpXFxyXFxuXFxyXFxuLy8gSU1QT1JUIFNFQ1RJT05cXHJcXG5cXHJcXG5cXHJcXG5odG1sXFxyXFxuXFx0b3ZlcmZsb3cteDogaGlkZGVuXFxyXFxuXFxyXFxuYm9keVxcclxcblxcdGZvbnQtZmFtaWx5OiAkdXNlcmZvbnRcXHJcXG5cXHRmb250LXNpemU6ICRmb250c2l6ZVxcclxcblxcdGxpbmUtaGVpZ2h0OiAkbGluZWhlaWdodFxcclxcblxcdGNvbG9yOiAkdGV4dGNvbG9yXFxyXFxuXFx0bWluLXdpZHRoOiAzMjBweFxcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZVxcclxcblxcdG92ZXJmbG93LXg6IGhpZGRlblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsyXSEuL21haW4uc2Fzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHA7XG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMl0hLi9tYWluLnNhc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsyXSEuL21haW4uc2Fzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5yZXF1aXJlKFwiLi4vc3R5bGVzL21haW4uc2Fzc1wiKTtcbmNvbnNvbGUubG9nKFwiZW50cnkgcG9pbnRcIik7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0aWYgKGNhY2hlZE1vZHVsZS5lcnJvciAhPT0gdW5kZWZpbmVkKSB0aHJvdyBjYWNoZWRNb2R1bGUuZXJyb3I7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdHRyeSB7XG5cdFx0dmFyIGV4ZWNPcHRpb25zID0geyBpZDogbW9kdWxlSWQsIG1vZHVsZTogbW9kdWxlLCBmYWN0b3J5OiBfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXSwgcmVxdWlyZTogX193ZWJwYWNrX3JlcXVpcmVfXyB9O1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uaS5mb3JFYWNoKGZ1bmN0aW9uKGhhbmRsZXIpIHsgaGFuZGxlcihleGVjT3B0aW9ucyk7IH0pO1xuXHRcdG1vZHVsZSA9IGV4ZWNPcHRpb25zLm1vZHVsZTtcblx0XHRleGVjT3B0aW9ucy5mYWN0b3J5LmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIGV4ZWNPcHRpb25zLnJlcXVpcmUpO1xuXHR9IGNhdGNoKGUpIHtcblx0XHRtb2R1bGUuZXJyb3IgPSBlO1xuXHRcdHRocm93IGU7XG5cdH1cblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4vLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuX193ZWJwYWNrX3JlcXVpcmVfXy5jID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fO1xuXG4vLyBleHBvc2UgdGhlIG1vZHVsZSBleGVjdXRpb24gaW50ZXJjZXB0b3Jcbl9fd2VicGFja19yZXF1aXJlX18uaSA9IFtdO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFsbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18uaHUgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLmgoKSArIFwiLmhvdC11cGRhdGUuanNcIjtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5obXJGID0gKCkgPT4gKFwiaW5kZXguXCIgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLmgoKSArIFwiLmhvdC11cGRhdGUuanNvblwiKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIzYmViOWVmMGEzYmI0ZGU1ODc5NlwiKSIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsInZhciBpblByb2dyZXNzID0ge307XG52YXIgZGF0YVdlYnBhY2tQcmVmaXggPSBcIm15LXdlYnBhY2stcHJvamVjdDpcIjtcbi8vIGxvYWRTY3JpcHQgZnVuY3Rpb24gdG8gbG9hZCBhIHNjcmlwdCB2aWEgc2NyaXB0IHRhZ1xuX193ZWJwYWNrX3JlcXVpcmVfXy5sID0gKHVybCwgZG9uZSwga2V5LCBjaHVua0lkKSA9PiB7XG5cdGlmKGluUHJvZ3Jlc3NbdXJsXSkgeyBpblByb2dyZXNzW3VybF0ucHVzaChkb25lKTsgcmV0dXJuOyB9XG5cdHZhciBzY3JpcHQsIG5lZWRBdHRhY2g7XG5cdGlmKGtleSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc2NyaXB0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIHMgPSBzY3JpcHRzW2ldO1xuXHRcdFx0aWYocy5nZXRBdHRyaWJ1dGUoXCJzcmNcIikgPT0gdXJsIHx8IHMuZ2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIpID09IGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KSB7IHNjcmlwdCA9IHM7IGJyZWFrOyB9XG5cdFx0fVxuXHR9XG5cdGlmKCFzY3JpcHQpIHtcblx0XHRuZWVkQXR0YWNoID0gdHJ1ZTtcblx0XHRzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuXHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04Jztcblx0XHRzY3JpcHQudGltZW91dCA9IDEyMDtcblx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuXHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuXHRcdH1cblx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIsIGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KTtcblxuXHRcdHNjcmlwdC5zcmMgPSB1cmw7XG5cdH1cblx0aW5Qcm9ncmVzc1t1cmxdID0gW2RvbmVdO1xuXHR2YXIgb25TY3JpcHRDb21wbGV0ZSA9IChwcmV2LCBldmVudCkgPT4ge1xuXHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cblx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHR2YXIgZG9uZUZucyA9IGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRkZWxldGUgaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdHNjcmlwdC5wYXJlbnROb2RlICYmIHNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG5cdFx0ZG9uZUZucyAmJiBkb25lRm5zLmZvckVhY2goKGZuKSA9PiAoZm4oZXZlbnQpKSk7XG5cdFx0aWYocHJldikgcmV0dXJuIHByZXYoZXZlbnQpO1xuXHR9XG5cdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgdW5kZWZpbmVkLCB7IHR5cGU6ICd0aW1lb3V0JywgdGFyZ2V0OiBzY3JpcHQgfSksIDEyMDAwMCk7XG5cdHNjcmlwdC5vbmVycm9yID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmVycm9yKTtcblx0c2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25sb2FkKTtcblx0bmVlZEF0dGFjaCAmJiBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG59OyIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBjdXJyZW50TW9kdWxlRGF0YSA9IHt9O1xudmFyIGluc3RhbGxlZE1vZHVsZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmM7XG5cbi8vIG1vZHVsZSBhbmQgcmVxdWlyZSBjcmVhdGlvblxudmFyIGN1cnJlbnRDaGlsZE1vZHVsZTtcbnZhciBjdXJyZW50UGFyZW50cyA9IFtdO1xuXG4vLyBzdGF0dXNcbnZhciByZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMgPSBbXTtcbnZhciBjdXJyZW50U3RhdHVzID0gXCJpZGxlXCI7XG5cbi8vIHdoaWxlIGRvd25sb2FkaW5nXG52YXIgYmxvY2tpbmdQcm9taXNlcyA9IDA7XG52YXIgYmxvY2tpbmdQcm9taXNlc1dhaXRpbmcgPSBbXTtcblxuLy8gVGhlIHVwZGF0ZSBpbmZvXG52YXIgY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnM7XG52YXIgcXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbl9fd2VicGFja19yZXF1aXJlX18uaG1yRCA9IGN1cnJlbnRNb2R1bGVEYXRhO1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmkucHVzaChmdW5jdGlvbiAob3B0aW9ucykge1xuXHR2YXIgbW9kdWxlID0gb3B0aW9ucy5tb2R1bGU7XG5cdHZhciByZXF1aXJlID0gY3JlYXRlUmVxdWlyZShvcHRpb25zLnJlcXVpcmUsIG9wdGlvbnMuaWQpO1xuXHRtb2R1bGUuaG90ID0gY3JlYXRlTW9kdWxlSG90T2JqZWN0KG9wdGlvbnMuaWQsIG1vZHVsZSk7XG5cdG1vZHVsZS5wYXJlbnRzID0gY3VycmVudFBhcmVudHM7XG5cdG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRjdXJyZW50UGFyZW50cyA9IFtdO1xuXHRvcHRpb25zLnJlcXVpcmUgPSByZXF1aXJlO1xufSk7XG5cbl9fd2VicGFja19yZXF1aXJlX18uaG1yQyA9IHt9O1xuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJID0ge307XG5cbmZ1bmN0aW9uIGNyZWF0ZVJlcXVpcmUocmVxdWlyZSwgbW9kdWxlSWQpIHtcblx0dmFyIG1lID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG5cdGlmICghbWUpIHJldHVybiByZXF1aXJlO1xuXHR2YXIgZm4gPSBmdW5jdGlvbiAocmVxdWVzdCkge1xuXHRcdGlmIChtZS5ob3QuYWN0aXZlKSB7XG5cdFx0XHRpZiAoaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XSkge1xuXHRcdFx0XHR2YXIgcGFyZW50cyA9IGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0ucGFyZW50cztcblx0XHRcdFx0aWYgKHBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCkgPT09IC0xKSB7XG5cdFx0XHRcdFx0cGFyZW50cy5wdXNoKG1vZHVsZUlkKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3VycmVudFBhcmVudHMgPSBbbW9kdWxlSWRdO1xuXHRcdFx0XHRjdXJyZW50Q2hpbGRNb2R1bGUgPSByZXF1ZXN0O1xuXHRcdFx0fVxuXHRcdFx0aWYgKG1lLmNoaWxkcmVuLmluZGV4T2YocmVxdWVzdCkgPT09IC0xKSB7XG5cdFx0XHRcdG1lLmNoaWxkcmVuLnB1c2gocmVxdWVzdCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUud2Fybihcblx0XHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgK1xuXHRcdFx0XHRcdHJlcXVlc3QgK1xuXHRcdFx0XHRcdFwiKSBmcm9tIGRpc3Bvc2VkIG1vZHVsZSBcIiArXG5cdFx0XHRcdFx0bW9kdWxlSWRcblx0XHRcdCk7XG5cdFx0XHRjdXJyZW50UGFyZW50cyA9IFtdO1xuXHRcdH1cblx0XHRyZXR1cm4gcmVxdWlyZShyZXF1ZXN0KTtcblx0fTtcblx0dmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIChuYW1lKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0cmV0dXJuIHJlcXVpcmVbbmFtZV07XG5cdFx0XHR9LFxuXHRcdFx0c2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRcdFx0cmVxdWlyZVtuYW1lXSA9IHZhbHVlO1xuXHRcdFx0fVxuXHRcdH07XG5cdH07XG5cdGZvciAodmFyIG5hbWUgaW4gcmVxdWlyZSkge1xuXHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocmVxdWlyZSwgbmFtZSkgJiYgbmFtZSAhPT0gXCJlXCIpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwgbmFtZSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKG5hbWUpKTtcblx0XHR9XG5cdH1cblx0Zm4uZSA9IGZ1bmN0aW9uIChjaHVua0lkKSB7XG5cdFx0cmV0dXJuIHRyYWNrQmxvY2tpbmdQcm9taXNlKHJlcXVpcmUuZShjaHVua0lkKSk7XG5cdH07XG5cdHJldHVybiBmbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTW9kdWxlSG90T2JqZWN0KG1vZHVsZUlkLCBtZSkge1xuXHR2YXIgX21haW4gPSBjdXJyZW50Q2hpbGRNb2R1bGUgIT09IG1vZHVsZUlkO1xuXHR2YXIgaG90ID0ge1xuXHRcdC8vIHByaXZhdGUgc3R1ZmZcblx0XHRfYWNjZXB0ZWREZXBlbmRlbmNpZXM6IHt9LFxuXHRcdF9hY2NlcHRlZEVycm9ySGFuZGxlcnM6IHt9LFxuXHRcdF9kZWNsaW5lZERlcGVuZGVuY2llczoge30sXG5cdFx0X3NlbGZBY2NlcHRlZDogZmFsc2UsXG5cdFx0X3NlbGZEZWNsaW5lZDogZmFsc2UsXG5cdFx0X3NlbGZJbnZhbGlkYXRlZDogZmFsc2UsXG5cdFx0X2Rpc3Bvc2VIYW5kbGVyczogW10sXG5cdFx0X21haW46IF9tYWluLFxuXHRcdF9yZXF1aXJlU2VsZjogZnVuY3Rpb24gKCkge1xuXHRcdFx0Y3VycmVudFBhcmVudHMgPSBtZS5wYXJlbnRzLnNsaWNlKCk7XG5cdFx0XHRjdXJyZW50Q2hpbGRNb2R1bGUgPSBfbWFpbiA/IHVuZGVmaW5lZCA6IG1vZHVsZUlkO1xuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCk7XG5cdFx0fSxcblxuXHRcdC8vIE1vZHVsZSBBUElcblx0XHRhY3RpdmU6IHRydWUsXG5cdFx0YWNjZXB0OiBmdW5jdGlvbiAoZGVwLCBjYWxsYmFjaywgZXJyb3JIYW5kbGVyKSB7XG5cdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkFjY2VwdGVkID0gdHJ1ZTtcblx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwiZnVuY3Rpb25cIikgaG90Ll9zZWxmQWNjZXB0ZWQgPSBkZXA7XG5cdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiICYmIGRlcCAhPT0gbnVsbCkge1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uICgpIHt9O1xuXHRcdFx0XHRcdGhvdC5fYWNjZXB0ZWRFcnJvckhhbmRsZXJzW2RlcFtpXV0gPSBlcnJvckhhbmRsZXI7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uICgpIHt9O1xuXHRcdFx0XHRob3QuX2FjY2VwdGVkRXJyb3JIYW5kbGVyc1tkZXBdID0gZXJyb3JIYW5kbGVyO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0ZGVjbGluZTogZnVuY3Rpb24gKGRlcCkge1xuXHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZEZWNsaW5lZCA9IHRydWU7XG5cdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiICYmIGRlcCAhPT0gbnVsbClcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspXG5cdFx0XHRcdFx0aG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBbaV1dID0gdHJ1ZTtcblx0XHRcdGVsc2UgaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBdID0gdHJ1ZTtcblx0XHR9LFxuXHRcdGRpc3Bvc2U6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG5cdFx0fSxcblx0XHRhZGREaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcblx0XHR9LFxuXHRcdHJlbW92ZURpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblx0XHRcdHZhciBpZHggPSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5pbmRleE9mKGNhbGxiYWNrKTtcblx0XHRcdGlmIChpZHggPj0gMCkgaG90Ll9kaXNwb3NlSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG5cdFx0fSxcblx0XHRpbnZhbGlkYXRlOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aGlzLl9zZWxmSW52YWxpZGF0ZWQgPSB0cnVlO1xuXHRcdFx0c3dpdGNoIChjdXJyZW50U3RhdHVzKSB7XG5cdFx0XHRcdGNhc2UgXCJpZGxlXCI6XG5cdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMgPSBbXTtcblx0XHRcdFx0XHRPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJJW2tleV0oXG5cdFx0XHRcdFx0XHRcdG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVyc1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRzZXRTdGF0dXMoXCJyZWFkeVwiKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcInJlYWR5XCI6XG5cdFx0XHRcdFx0T2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1ySVtrZXldKFxuXHRcdFx0XHRcdFx0XHRtb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnNcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJwcmVwYXJlXCI6XG5cdFx0XHRcdGNhc2UgXCJjaGVja1wiOlxuXHRcdFx0XHRjYXNlIFwiZGlzcG9zZVwiOlxuXHRcdFx0XHRjYXNlIFwiYXBwbHlcIjpcblx0XHRcdFx0XHQocXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzID0gcXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzIHx8IFtdKS5wdXNoKFxuXHRcdFx0XHRcdFx0bW9kdWxlSWRcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdC8vIGlnbm9yZSByZXF1ZXN0cyBpbiBlcnJvciBzdGF0ZXNcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0Ly8gTWFuYWdlbWVudCBBUElcblx0XHRjaGVjazogaG90Q2hlY2ssXG5cdFx0YXBwbHk6IGhvdEFwcGx5LFxuXHRcdHN0YXR1czogZnVuY3Rpb24gKGwpIHtcblx0XHRcdGlmICghbCkgcmV0dXJuIGN1cnJlbnRTdGF0dXM7XG5cdFx0XHRyZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMucHVzaChsKTtcblx0XHR9LFxuXHRcdGFkZFN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uIChsKSB7XG5cdFx0XHRyZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMucHVzaChsKTtcblx0XHR9LFxuXHRcdHJlbW92ZVN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uIChsKSB7XG5cdFx0XHR2YXIgaWR4ID0gcmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLmluZGV4T2YobCk7XG5cdFx0XHRpZiAoaWR4ID49IDApIHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcblx0XHR9LFxuXG5cdFx0Ly9pbmhlcml0IGZyb20gcHJldmlvdXMgZGlzcG9zZSBjYWxsXG5cdFx0ZGF0YTogY3VycmVudE1vZHVsZURhdGFbbW9kdWxlSWRdXG5cdH07XG5cdGN1cnJlbnRDaGlsZE1vZHVsZSA9IHVuZGVmaW5lZDtcblx0cmV0dXJuIGhvdDtcbn1cblxuZnVuY3Rpb24gc2V0U3RhdHVzKG5ld1N0YXR1cykge1xuXHRjdXJyZW50U3RhdHVzID0gbmV3U3RhdHVzO1xuXHR2YXIgcmVzdWx0cyA9IFtdO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgcmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLmxlbmd0aDsgaSsrKVxuXHRcdHJlc3VsdHNbaV0gPSByZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnNbaV0uY2FsbChudWxsLCBuZXdTdGF0dXMpO1xuXG5cdHJldHVybiBQcm9taXNlLmFsbChyZXN1bHRzKTtcbn1cblxuZnVuY3Rpb24gdW5ibG9jaygpIHtcblx0aWYgKC0tYmxvY2tpbmdQcm9taXNlcyA9PT0gMCkge1xuXHRcdHNldFN0YXR1cyhcInJlYWR5XCIpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKGJsb2NraW5nUHJvbWlzZXMgPT09IDApIHtcblx0XHRcdFx0dmFyIGxpc3QgPSBibG9ja2luZ1Byb21pc2VzV2FpdGluZztcblx0XHRcdFx0YmxvY2tpbmdQcm9taXNlc1dhaXRpbmcgPSBbXTtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0bGlzdFtpXSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdHJhY2tCbG9ja2luZ1Byb21pc2UocHJvbWlzZSkge1xuXHRzd2l0Y2ggKGN1cnJlbnRTdGF0dXMpIHtcblx0XHRjYXNlIFwicmVhZHlcIjpcblx0XHRcdHNldFN0YXR1cyhcInByZXBhcmVcIik7XG5cdFx0LyogZmFsbHRocm91Z2ggKi9cblx0XHRjYXNlIFwicHJlcGFyZVwiOlxuXHRcdFx0YmxvY2tpbmdQcm9taXNlcysrO1xuXHRcdFx0cHJvbWlzZS50aGVuKHVuYmxvY2ssIHVuYmxvY2spO1xuXHRcdFx0cmV0dXJuIHByb21pc2U7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBwcm9taXNlO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHdhaXRGb3JCbG9ja2luZ1Byb21pc2VzKGZuKSB7XG5cdGlmIChibG9ja2luZ1Byb21pc2VzID09PSAwKSByZXR1cm4gZm4oKTtcblx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG5cdFx0YmxvY2tpbmdQcm9taXNlc1dhaXRpbmcucHVzaChmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXNvbHZlKGZuKCkpO1xuXHRcdH0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gaG90Q2hlY2soYXBwbHlPblVwZGF0ZSkge1xuXHRpZiAoY3VycmVudFN0YXR1cyAhPT0gXCJpZGxlXCIpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJjaGVjaygpIGlzIG9ubHkgYWxsb3dlZCBpbiBpZGxlIHN0YXR1c1wiKTtcblx0fVxuXHRyZXR1cm4gc2V0U3RhdHVzKFwiY2hlY2tcIilcblx0XHQudGhlbihfX3dlYnBhY2tfcmVxdWlyZV9fLmhtck0pXG5cdFx0LnRoZW4oZnVuY3Rpb24gKHVwZGF0ZSkge1xuXHRcdFx0aWYgKCF1cGRhdGUpIHtcblx0XHRcdFx0cmV0dXJuIHNldFN0YXR1cyhhcHBseUludmFsaWRhdGVkTW9kdWxlcygpID8gXCJyZWFkeVwiIDogXCJpZGxlXCIpLnRoZW4oXG5cdFx0XHRcdFx0ZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gc2V0U3RhdHVzKFwicHJlcGFyZVwiKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0dmFyIHVwZGF0ZWRNb2R1bGVzID0gW107XG5cdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzID0gW107XG5cblx0XHRcdFx0cmV0dXJuIFByb21pc2UuYWxsKFxuXHRcdFx0XHRcdE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uaG1yQykucmVkdWNlKGZ1bmN0aW9uIChcblx0XHRcdFx0XHRcdHByb21pc2VzLFxuXHRcdFx0XHRcdFx0a2V5XG5cdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckNba2V5XShcblx0XHRcdFx0XHRcdFx0dXBkYXRlLmMsXG5cdFx0XHRcdFx0XHRcdHVwZGF0ZS5yLFxuXHRcdFx0XHRcdFx0XHR1cGRhdGUubSxcblx0XHRcdFx0XHRcdFx0cHJvbWlzZXMsXG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzLFxuXHRcdFx0XHRcdFx0XHR1cGRhdGVkTW9kdWxlc1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdHJldHVybiBwcm9taXNlcztcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFtdKVxuXHRcdFx0XHQpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdHJldHVybiB3YWl0Rm9yQmxvY2tpbmdQcm9taXNlcyhmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRpZiAoYXBwbHlPblVwZGF0ZSkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gaW50ZXJuYWxBcHBseShhcHBseU9uVXBkYXRlKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBzZXRTdGF0dXMoXCJyZWFkeVwiKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gdXBkYXRlZE1vZHVsZXM7XG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH0pO1xufVxuXG5mdW5jdGlvbiBob3RBcHBseShvcHRpb25zKSB7XG5cdGlmIChjdXJyZW50U3RhdHVzICE9PSBcInJlYWR5XCIpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXG5cdFx0XHRcdFwiYXBwbHkoKSBpcyBvbmx5IGFsbG93ZWQgaW4gcmVhZHkgc3RhdHVzIChzdGF0ZTogXCIgK1xuXHRcdFx0XHRcdGN1cnJlbnRTdGF0dXMgK1xuXHRcdFx0XHRcdFwiKVwiXG5cdFx0XHQpO1xuXHRcdH0pO1xuXHR9XG5cdHJldHVybiBpbnRlcm5hbEFwcGx5KG9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiBpbnRlcm5hbEFwcGx5KG9wdGlvbnMpIHtcblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0YXBwbHlJbnZhbGlkYXRlZE1vZHVsZXMoKTtcblxuXHR2YXIgcmVzdWx0cyA9IGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzLm1hcChmdW5jdGlvbiAoaGFuZGxlcikge1xuXHRcdHJldHVybiBoYW5kbGVyKG9wdGlvbnMpO1xuXHR9KTtcblx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMgPSB1bmRlZmluZWQ7XG5cblx0dmFyIGVycm9ycyA9IHJlc3VsdHNcblx0XHQubWFwKGZ1bmN0aW9uIChyKSB7XG5cdFx0XHRyZXR1cm4gci5lcnJvcjtcblx0XHR9KVxuXHRcdC5maWx0ZXIoQm9vbGVhbik7XG5cblx0aWYgKGVycm9ycy5sZW5ndGggPiAwKSB7XG5cdFx0cmV0dXJuIHNldFN0YXR1cyhcImFib3J0XCIpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0dGhyb3cgZXJyb3JzWzBdO1xuXHRcdH0pO1xuXHR9XG5cblx0Ly8gTm93IGluIFwiZGlzcG9zZVwiIHBoYXNlXG5cdHZhciBkaXNwb3NlUHJvbWlzZSA9IHNldFN0YXR1cyhcImRpc3Bvc2VcIik7XG5cblx0cmVzdWx0cy5mb3JFYWNoKGZ1bmN0aW9uIChyZXN1bHQpIHtcblx0XHRpZiAocmVzdWx0LmRpc3Bvc2UpIHJlc3VsdC5kaXNwb3NlKCk7XG5cdH0pO1xuXG5cdC8vIE5vdyBpbiBcImFwcGx5XCIgcGhhc2Vcblx0dmFyIGFwcGx5UHJvbWlzZSA9IHNldFN0YXR1cyhcImFwcGx5XCIpO1xuXG5cdHZhciBlcnJvcjtcblx0dmFyIHJlcG9ydEVycm9yID0gZnVuY3Rpb24gKGVycikge1xuXHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyO1xuXHR9O1xuXG5cdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcblx0cmVzdWx0cy5mb3JFYWNoKGZ1bmN0aW9uIChyZXN1bHQpIHtcblx0XHRpZiAocmVzdWx0LmFwcGx5KSB7XG5cdFx0XHR2YXIgbW9kdWxlcyA9IHJlc3VsdC5hcHBseShyZXBvcnRFcnJvcik7XG5cdFx0XHRpZiAobW9kdWxlcykge1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaChtb2R1bGVzW2ldKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG5cblx0cmV0dXJuIFByb21pc2UuYWxsKFtkaXNwb3NlUHJvbWlzZSwgYXBwbHlQcm9taXNlXSkudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gaGFuZGxlIGVycm9ycyBpbiBhY2NlcHQgaGFuZGxlcnMgYW5kIHNlbGYgYWNjZXB0ZWQgbW9kdWxlIGxvYWRcblx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdHJldHVybiBzZXRTdGF0dXMoXCJmYWlsXCIpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0XHR0aHJvdyBlcnJvcjtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdGlmIChxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMpIHtcblx0XHRcdHJldHVybiBpbnRlcm5hbEFwcGx5KG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24gKGxpc3QpIHtcblx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZUlkKSB7XG5cdFx0XHRcdFx0aWYgKGxpc3QuaW5kZXhPZihtb2R1bGVJZCkgPCAwKSBsaXN0LnB1c2gobW9kdWxlSWQpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmV0dXJuIGxpc3Q7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gc2V0U3RhdHVzKFwiaWRsZVwiKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBvdXRkYXRlZE1vZHVsZXM7XG5cdFx0fSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhcHBseUludmFsaWRhdGVkTW9kdWxlcygpIHtcblx0aWYgKHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcykge1xuXHRcdGlmICghY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMpIGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzID0gW107XG5cdFx0T2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChtb2R1bGVJZCkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtcklba2V5XShcblx0XHRcdFx0XHRtb2R1bGVJZCxcblx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVyc1xuXHRcdFx0XHQpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdFx0cXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzID0gdW5kZWZpbmVkO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmhtclNfanNvbnAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmhtclNfanNvbnAgfHwge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG52YXIgY3VycmVudFVwZGF0ZWRNb2R1bGVzTGlzdDtcbnZhciB3YWl0aW5nVXBkYXRlUmVzb2x2ZXMgPSB7fTtcbmZ1bmN0aW9uIGxvYWRVcGRhdGVDaHVuayhjaHVua0lkLCB1cGRhdGVkTW9kdWxlc0xpc3QpIHtcblx0Y3VycmVudFVwZGF0ZWRNb2R1bGVzTGlzdCA9IHVwZGF0ZWRNb2R1bGVzTGlzdDtcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHR3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0gPSByZXNvbHZlO1xuXHRcdC8vIHN0YXJ0IHVwZGF0ZSBjaHVuayBsb2FkaW5nXG5cdFx0dmFyIHVybCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18uaHUoY2h1bmtJZCk7XG5cdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuXHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuXHRcdHZhciBsb2FkaW5nRW5kZWQgPSAoZXZlbnQpID0+IHtcblx0XHRcdGlmKHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSkge1xuXHRcdFx0XHR3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0gPSB1bmRlZmluZWRcblx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcblx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcblx0XHRcdFx0ZXJyb3IubWVzc2FnZSA9ICdMb2FkaW5nIGhvdCB1cGRhdGUgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuXHRcdFx0XHRlcnJvci5uYW1lID0gJ0NodW5rTG9hZEVycm9yJztcblx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcblx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG5cdFx0XHRcdHJlamVjdChlcnJvcik7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmwodXJsLCBsb2FkaW5nRW5kZWQpO1xuXHR9KTtcbn1cblxuc2VsZltcIndlYnBhY2tIb3RVcGRhdGVteV93ZWJwYWNrX3Byb2plY3RcIl0gPSAoY2h1bmtJZCwgbW9yZU1vZHVsZXMsIHJ1bnRpbWUpID0+IHtcblx0Zm9yKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRjdXJyZW50VXBkYXRlW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdGlmKGN1cnJlbnRVcGRhdGVkTW9kdWxlc0xpc3QpIGN1cnJlbnRVcGRhdGVkTW9kdWxlc0xpc3QucHVzaChtb2R1bGVJZCk7XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIGN1cnJlbnRVcGRhdGVSdW50aW1lLnB1c2gocnVudGltZSk7XG5cdGlmKHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSkge1xuXHRcdHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSgpO1xuXHRcdHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcblx0fVxufTtcblxudmFyIGN1cnJlbnRVcGRhdGVDaHVua3M7XG52YXIgY3VycmVudFVwZGF0ZTtcbnZhciBjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcztcbnZhciBjdXJyZW50VXBkYXRlUnVudGltZTtcbmZ1bmN0aW9uIGFwcGx5SGFuZGxlcihvcHRpb25zKSB7XG5cdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmYpIGRlbGV0ZSBfX3dlYnBhY2tfcmVxdWlyZV9fLmYuanNvbnBIbXI7XG5cdGN1cnJlbnRVcGRhdGVDaHVua3MgPSB1bmRlZmluZWQ7XG5cdGZ1bmN0aW9uIGdldEFmZmVjdGVkTW9kdWxlRWZmZWN0cyh1cGRhdGVNb2R1bGVJZCkge1xuXHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbdXBkYXRlTW9kdWxlSWRdO1xuXHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuXG5cdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLm1hcChmdW5jdGlvbiAoaWQpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGNoYWluOiBbaWRdLFxuXHRcdFx0XHRpZDogaWRcblx0XHRcdH07XG5cdFx0fSk7XG5cdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcblx0XHRcdHZhciBxdWV1ZUl0ZW0gPSBxdWV1ZS5wb3AoKTtcblx0XHRcdHZhciBtb2R1bGVJZCA9IHF1ZXVlSXRlbS5pZDtcblx0XHRcdHZhciBjaGFpbiA9IHF1ZXVlSXRlbS5jaGFpbjtcblx0XHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlSWRdO1xuXHRcdFx0aWYgKFxuXHRcdFx0XHQhbW9kdWxlIHx8XG5cdFx0XHRcdChtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWQgJiYgIW1vZHVsZS5ob3QuX3NlbGZJbnZhbGlkYXRlZClcblx0XHRcdClcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRpZiAobW9kdWxlLmhvdC5fc2VsZkRlY2xpbmVkKSB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0dHlwZTogXCJzZWxmLWRlY2xpbmVkXCIsXG5cdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuXHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0aWYgKG1vZHVsZS5ob3QuX21haW4pIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHR0eXBlOiBcInVuYWNjZXB0ZWRcIixcblx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG5cdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1vZHVsZS5wYXJlbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciBwYXJlbnRJZCA9IG1vZHVsZS5wYXJlbnRzW2ldO1xuXHRcdFx0XHR2YXIgcGFyZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW3BhcmVudElkXTtcblx0XHRcdFx0aWYgKCFwYXJlbnQpIGNvbnRpbnVlO1xuXHRcdFx0XHRpZiAocGFyZW50LmhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdHR5cGU6IFwiZGVjbGluZWRcIixcblx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG5cdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRwYXJlbnRJZDogcGFyZW50SWRcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChvdXRkYXRlZE1vZHVsZXMuaW5kZXhPZihwYXJlbnRJZCkgIT09IC0xKSBjb250aW51ZTtcblx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuXHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdKVxuXHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdID0gW107XG5cdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdLCBbbW9kdWxlSWRdKTtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdO1xuXHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaChwYXJlbnRJZCk7XG5cdFx0XHRcdHF1ZXVlLnB1c2goe1xuXHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG5cdFx0XHRcdFx0aWQ6IHBhcmVudElkXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiBcImFjY2VwdGVkXCIsXG5cdFx0XHRtb2R1bGVJZDogdXBkYXRlTW9kdWxlSWQsXG5cdFx0XHRvdXRkYXRlZE1vZHVsZXM6IG91dGRhdGVkTW9kdWxlcyxcblx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzOiBvdXRkYXRlZERlcGVuZGVuY2llc1xuXHRcdH07XG5cdH1cblxuXHRmdW5jdGlvbiBhZGRBbGxUb1NldChhLCBiKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBiLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IGJbaV07XG5cdFx0XHRpZiAoYS5pbmRleE9mKGl0ZW0pID09PSAtMSkgYS5wdXNoKGl0ZW0pO1xuXHRcdH1cblx0fVxuXG5cdC8vIGF0IGJlZ2luIGFsbCB1cGRhdGVzIG1vZHVsZXMgYXJlIG91dGRhdGVkXG5cdC8vIHRoZSBcIm91dGRhdGVkXCIgc3RhdHVzIGNhbiBwcm9wYWdhdGUgdG8gcGFyZW50cyBpZiB0aGV5IGRvbid0IGFjY2VwdCB0aGUgY2hpbGRyZW5cblx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG5cdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcblx0dmFyIGFwcGxpZWRVcGRhdGUgPSB7fTtcblxuXHR2YXIgd2FyblVuZXhwZWN0ZWRSZXF1aXJlID0gZnVuY3Rpb24gd2FyblVuZXhwZWN0ZWRSZXF1aXJlKG1vZHVsZSkge1xuXHRcdGNvbnNvbGUud2Fybihcblx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICsgbW9kdWxlLmlkICsgXCIpIHRvIGRpc3Bvc2VkIG1vZHVsZVwiXG5cdFx0KTtcblx0fTtcblxuXHRmb3IgKHZhciBtb2R1bGVJZCBpbiBjdXJyZW50VXBkYXRlKSB7XG5cdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhjdXJyZW50VXBkYXRlLCBtb2R1bGVJZCkpIHtcblx0XHRcdHZhciBuZXdNb2R1bGVGYWN0b3J5ID0gY3VycmVudFVwZGF0ZVttb2R1bGVJZF07XG5cdFx0XHQvKiogQHR5cGUge1RPRE99ICovXG5cdFx0XHR2YXIgcmVzdWx0O1xuXHRcdFx0aWYgKG5ld01vZHVsZUZhY3RvcnkpIHtcblx0XHRcdFx0cmVzdWx0ID0gZ2V0QWZmZWN0ZWRNb2R1bGVFZmZlY3RzKG1vZHVsZUlkKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc3VsdCA9IHtcblx0XHRcdFx0XHR0eXBlOiBcImRpc3Bvc2VkXCIsXG5cdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHQvKiogQHR5cGUge0Vycm9yfGZhbHNlfSAqL1xuXHRcdFx0dmFyIGFib3J0RXJyb3IgPSBmYWxzZTtcblx0XHRcdHZhciBkb0FwcGx5ID0gZmFsc2U7XG5cdFx0XHR2YXIgZG9EaXNwb3NlID0gZmFsc2U7XG5cdFx0XHR2YXIgY2hhaW5JbmZvID0gXCJcIjtcblx0XHRcdGlmIChyZXN1bHQuY2hhaW4pIHtcblx0XHRcdFx0Y2hhaW5JbmZvID0gXCJcXG5VcGRhdGUgcHJvcGFnYXRpb246IFwiICsgcmVzdWx0LmNoYWluLmpvaW4oXCIgLT4gXCIpO1xuXHRcdFx0fVxuXHRcdFx0c3dpdGNoIChyZXN1bHQudHlwZSkge1xuXHRcdFx0XHRjYXNlIFwic2VsZi1kZWNsaW5lZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcblx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG5cdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIHNlbGYgZGVjbGluZTogXCIgK1xuXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG5cdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwiZGVjbGluZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcblx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG5cdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuXHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBkZWNsaW5lZCBkZXBlbmRlbmN5OiBcIiArXG5cdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcblx0XHRcdFx0XHRcdFx0XHRcIiBpbiBcIiArXG5cdFx0XHRcdFx0XHRcdFx0cmVzdWx0LnBhcmVudElkICtcblx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJ1bmFjY2VwdGVkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25VbmFjY2VwdGVkKSBvcHRpb25zLm9uVW5hY2NlcHRlZChyZXN1bHQpO1xuXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVVbmFjY2VwdGVkKVxuXHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcblx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2UgXCIgKyBtb2R1bGVJZCArIFwiIGlzIG5vdCBhY2NlcHRlZFwiICsgY2hhaW5JbmZvXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwiYWNjZXB0ZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkFjY2VwdGVkKSBvcHRpb25zLm9uQWNjZXB0ZWQocmVzdWx0KTtcblx0XHRcdFx0XHRkb0FwcGx5ID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcImRpc3Bvc2VkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EaXNwb3NlZCkgb3B0aW9ucy5vbkRpc3Bvc2VkKHJlc3VsdCk7XG5cdFx0XHRcdFx0ZG9EaXNwb3NlID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmV4Y2VwdGlvbiB0eXBlIFwiICsgcmVzdWx0LnR5cGUpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGFib3J0RXJyb3IpIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRlcnJvcjogYWJvcnRFcnJvclxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0aWYgKGRvQXBwbHkpIHtcblx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSBuZXdNb2R1bGVGYWN0b3J5O1xuXHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIHJlc3VsdC5vdXRkYXRlZE1vZHVsZXMpO1xuXHRcdFx0XHRmb3IgKG1vZHVsZUlkIGluIHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcykge1xuXHRcdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8ocmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKVxuXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0gPSBbXTtcblx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KFxuXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0sXG5cdFx0XHRcdFx0XHRcdHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF1cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoZG9EaXNwb3NlKSB7XG5cdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgW3Jlc3VsdC5tb2R1bGVJZF0pO1xuXHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IHdhcm5VbmV4cGVjdGVkUmVxdWlyZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0Y3VycmVudFVwZGF0ZSA9IHVuZGVmaW5lZDtcblxuXHQvLyBTdG9yZSBzZWxmIGFjY2VwdGVkIG91dGRhdGVkIG1vZHVsZXMgdG8gcmVxdWlyZSB0aGVtIGxhdGVyIGJ5IHRoZSBtb2R1bGUgc3lzdGVtXG5cdHZhciBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMgPSBbXTtcblx0Zm9yICh2YXIgaiA9IDA7IGogPCBvdXRkYXRlZE1vZHVsZXMubGVuZ3RoOyBqKyspIHtcblx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVJZCA9IG91dGRhdGVkTW9kdWxlc1tqXTtcblx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdGlmIChcblx0XHRcdG1vZHVsZSAmJlxuXHRcdFx0KG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZCB8fCBtb2R1bGUuaG90Ll9tYWluKSAmJlxuXHRcdFx0Ly8gcmVtb3ZlZCBzZWxmLWFjY2VwdGVkIG1vZHVsZXMgc2hvdWxkIG5vdCBiZSByZXF1aXJlZFxuXHRcdFx0YXBwbGllZFVwZGF0ZVtvdXRkYXRlZE1vZHVsZUlkXSAhPT0gd2FyblVuZXhwZWN0ZWRSZXF1aXJlICYmXG5cdFx0XHQvLyB3aGVuIGNhbGxlZCBpbnZhbGlkYXRlIHNlbGYtYWNjZXB0aW5nIGlzIG5vdCBwb3NzaWJsZVxuXHRcdFx0IW1vZHVsZS5ob3QuX3NlbGZJbnZhbGlkYXRlZFxuXHRcdCkge1xuXHRcdFx0b3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLnB1c2goe1xuXHRcdFx0XHRtb2R1bGU6IG91dGRhdGVkTW9kdWxlSWQsXG5cdFx0XHRcdHJlcXVpcmU6IG1vZHVsZS5ob3QuX3JlcXVpcmVTZWxmLFxuXHRcdFx0XHRlcnJvckhhbmRsZXI6IG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0dmFyIG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzO1xuXG5cdHJldHVybiB7XG5cdFx0ZGlzcG9zZTogZnVuY3Rpb24gKCkge1xuXHRcdFx0Y3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3MuZm9yRWFjaChmdW5jdGlvbiAoY2h1bmtJZCkge1xuXHRcdFx0XHRkZWxldGUgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuXHRcdFx0fSk7XG5cdFx0XHRjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcyA9IHVuZGVmaW5lZDtcblxuXHRcdFx0dmFyIGlkeDtcblx0XHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5zbGljZSgpO1xuXHRcdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0dmFyIG1vZHVsZUlkID0gcXVldWUucG9wKCk7XG5cdFx0XHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlSWRdO1xuXHRcdFx0XHRpZiAoIW1vZHVsZSkgY29udGludWU7XG5cblx0XHRcdFx0dmFyIGRhdGEgPSB7fTtcblxuXHRcdFx0XHQvLyBDYWxsIGRpc3Bvc2UgaGFuZGxlcnNcblx0XHRcdFx0dmFyIGRpc3Bvc2VIYW5kbGVycyA9IG1vZHVsZS5ob3QuX2Rpc3Bvc2VIYW5kbGVycztcblx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IGRpc3Bvc2VIYW5kbGVycy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdGRpc3Bvc2VIYW5kbGVyc1tqXS5jYWxsKG51bGwsIGRhdGEpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1yRFttb2R1bGVJZF0gPSBkYXRhO1xuXG5cdFx0XHRcdC8vIGRpc2FibGUgbW9kdWxlICh0aGlzIGRpc2FibGVzIHJlcXVpcmVzIGZyb20gdGhpcyBtb2R1bGUpXG5cdFx0XHRcdG1vZHVsZS5ob3QuYWN0aXZlID0gZmFsc2U7XG5cblx0XHRcdFx0Ly8gcmVtb3ZlIG1vZHVsZSBmcm9tIGNhY2hlXG5cdFx0XHRcdGRlbGV0ZSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlSWRdO1xuXG5cdFx0XHRcdC8vIHdoZW4gZGlzcG9zaW5nIHRoZXJlIGlzIG5vIG5lZWQgdG8gY2FsbCBkaXNwb3NlIGhhbmRsZXJcblx0XHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcblxuXHRcdFx0XHQvLyByZW1vdmUgXCJwYXJlbnRzXCIgcmVmZXJlbmNlcyBmcm9tIGFsbCBjaGlsZHJlblxuXHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlLmNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0dmFyIGNoaWxkID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZS5jaGlsZHJlbltqXV07XG5cdFx0XHRcdFx0aWYgKCFjaGlsZCkgY29udGludWU7XG5cdFx0XHRcdFx0aWR4ID0gY2hpbGQucGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKTtcblx0XHRcdFx0XHRpZiAoaWR4ID49IDApIHtcblx0XHRcdFx0XHRcdGNoaWxkLnBhcmVudHMuc3BsaWNlKGlkeCwgMSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIHJlbW92ZSBvdXRkYXRlZCBkZXBlbmRlbmN5IGZyb20gbW9kdWxlIGNoaWxkcmVuXG5cdFx0XHR2YXIgZGVwZW5kZW5jeTtcblx0XHRcdGZvciAodmFyIG91dGRhdGVkTW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcblx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhvdXRkYXRlZERlcGVuZGVuY2llcywgb3V0ZGF0ZWRNb2R1bGVJZCkpIHtcblx0XHRcdFx0XHRtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuXHRcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPVxuXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRcdFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbal07XG5cdFx0XHRcdFx0XHRcdGlkeCA9IG1vZHVsZS5jaGlsZHJlbi5pbmRleE9mKGRlcGVuZGVuY3kpO1xuXHRcdFx0XHRcdFx0XHRpZiAoaWR4ID49IDApIG1vZHVsZS5jaGlsZHJlbi5zcGxpY2UoaWR4LCAxKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdGFwcGx5OiBmdW5jdGlvbiAocmVwb3J0RXJyb3IpIHtcblx0XHRcdC8vIGluc2VydCBuZXcgY29kZVxuXHRcdFx0Zm9yICh2YXIgdXBkYXRlTW9kdWxlSWQgaW4gYXBwbGllZFVwZGF0ZSkge1xuXHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGFwcGxpZWRVcGRhdGUsIHVwZGF0ZU1vZHVsZUlkKSkge1xuXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVt1cGRhdGVNb2R1bGVJZF0gPSBhcHBsaWVkVXBkYXRlW3VwZGF0ZU1vZHVsZUlkXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBydW4gbmV3IHJ1bnRpbWUgbW9kdWxlc1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjdXJyZW50VXBkYXRlUnVudGltZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjdXJyZW50VXBkYXRlUnVudGltZVtpXShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gY2FsbCBhY2NlcHQgaGFuZGxlcnNcblx0XHRcdGZvciAodmFyIG91dGRhdGVkTW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcblx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhvdXRkYXRlZERlcGVuZGVuY2llcywgb3V0ZGF0ZWRNb2R1bGVJZCkpIHtcblx0XHRcdFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdFx0XHRcdGlmIChtb2R1bGUpIHtcblx0XHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID1cblx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0XHRcdFx0XHR2YXIgY2FsbGJhY2tzID0gW107XG5cdFx0XHRcdFx0XHR2YXIgZXJyb3JIYW5kbGVycyA9IFtdO1xuXHRcdFx0XHRcdFx0dmFyIGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdFx0XHR2YXIgZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2pdO1xuXHRcdFx0XHRcdFx0XHR2YXIgYWNjZXB0Q2FsbGJhY2sgPVxuXHRcdFx0XHRcdFx0XHRcdG1vZHVsZS5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcGVuZGVuY3ldO1xuXHRcdFx0XHRcdFx0XHR2YXIgZXJyb3JIYW5kbGVyID1cblx0XHRcdFx0XHRcdFx0XHRtb2R1bGUuaG90Ll9hY2NlcHRlZEVycm9ySGFuZGxlcnNbZGVwZW5kZW5jeV07XG5cdFx0XHRcdFx0XHRcdGlmIChhY2NlcHRDYWxsYmFjaykge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChjYWxsYmFja3MuaW5kZXhPZihhY2NlcHRDYWxsYmFjaykgIT09IC0xKSBjb250aW51ZTtcblx0XHRcdFx0XHRcdFx0XHRjYWxsYmFja3MucHVzaChhY2NlcHRDYWxsYmFjayk7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3JIYW5kbGVycy5wdXNoKGVycm9ySGFuZGxlcik7XG5cdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzLnB1c2goZGVwZW5kZW5jeSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGZvciAodmFyIGsgPSAwOyBrIDwgY2FsbGJhY2tzLmxlbmd0aDsgaysrKSB7XG5cdFx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2tzW2tdLmNhbGwobnVsbCwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMpO1xuXHRcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAodHlwZW9mIGVycm9ySGFuZGxlcnNba10gPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3JIYW5kbGVyc1trXShlcnIsIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogb3V0ZGF0ZWRNb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5SWQ6IGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrc1trXVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycjIpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJhY2NlcHQtZXJyb3ItaGFuZGxlci1lcnJvcmVkXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogb3V0ZGF0ZWRNb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3lJZDogZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzW2tdLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVycjIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvcmlnaW5hbEVycm9yOiBlcnJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycjIpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycik7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcImFjY2VwdC1lcnJvcmVkXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG91dGRhdGVkTW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3Nba10sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycik7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIExvYWQgc2VsZiBhY2NlcHRlZCBtb2R1bGVzXG5cdFx0XHRmb3IgKHZhciBvID0gMDsgbyA8IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5sZW5ndGg7IG8rKykge1xuXHRcdFx0XHR2YXIgaXRlbSA9IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlc1tvXTtcblx0XHRcdFx0dmFyIG1vZHVsZUlkID0gaXRlbS5tb2R1bGU7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0aXRlbS5yZXF1aXJlKG1vZHVsZUlkKTtcblx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdFx0aWYgKHR5cGVvZiBpdGVtLmVycm9ySGFuZGxlciA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRpdGVtLmVycm9ySGFuZGxlcihlcnIsIHtcblx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlOiBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlSWRdXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyMikge1xuXHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yLWhhbmRsZXItZXJyb3JlZFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVycjIsXG5cdFx0XHRcdFx0XHRcdFx0XHRvcmlnaW5hbEVycm9yOiBlcnJcblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycjIpO1xuXHRcdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycik7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yZWRcIixcblx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdHJlcG9ydEVycm9yKGVycik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBvdXRkYXRlZE1vZHVsZXM7XG5cdFx0fVxuXHR9O1xufVxuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJLmpzb25wID0gZnVuY3Rpb24gKG1vZHVsZUlkLCBhcHBseUhhbmRsZXJzKSB7XG5cdGlmICghY3VycmVudFVwZGF0ZSkge1xuXHRcdGN1cnJlbnRVcGRhdGUgPSB7fTtcblx0XHRjdXJyZW50VXBkYXRlUnVudGltZSA9IFtdO1xuXHRcdGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzID0gW107XG5cdFx0YXBwbHlIYW5kbGVycy5wdXNoKGFwcGx5SGFuZGxlcik7XG5cdH1cblx0aWYgKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oY3VycmVudFVwZGF0ZSwgbW9kdWxlSWQpKSB7XG5cdFx0Y3VycmVudFVwZGF0ZVttb2R1bGVJZF0gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdO1xuXHR9XG59O1xuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJDLmpzb25wID0gZnVuY3Rpb24gKFxuXHRjaHVua0lkcyxcblx0cmVtb3ZlZENodW5rcyxcblx0cmVtb3ZlZE1vZHVsZXMsXG5cdHByb21pc2VzLFxuXHRhcHBseUhhbmRsZXJzLFxuXHR1cGRhdGVkTW9kdWxlc0xpc3Rcbikge1xuXHRhcHBseUhhbmRsZXJzLnB1c2goYXBwbHlIYW5kbGVyKTtcblx0Y3VycmVudFVwZGF0ZUNodW5rcyA9IHt9O1xuXHRjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcyA9IHJlbW92ZWRDaHVua3M7XG5cdGN1cnJlbnRVcGRhdGUgPSByZW1vdmVkTW9kdWxlcy5yZWR1Y2UoZnVuY3Rpb24gKG9iaiwga2V5KSB7XG5cdFx0b2JqW2tleV0gPSBmYWxzZTtcblx0XHRyZXR1cm4gb2JqO1xuXHR9LCB7fSk7XG5cdGN1cnJlbnRVcGRhdGVSdW50aW1lID0gW107XG5cdGNodW5rSWRzLmZvckVhY2goZnVuY3Rpb24gKGNodW5rSWQpIHtcblx0XHRpZiAoXG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJlxuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdICE9PSB1bmRlZmluZWRcblx0XHQpIHtcblx0XHRcdHByb21pc2VzLnB1c2gobG9hZFVwZGF0ZUNodW5rKGNodW5rSWQsIHVwZGF0ZWRNb2R1bGVzTGlzdCkpO1xuXHRcdFx0Y3VycmVudFVwZGF0ZUNodW5rc1tjaHVua0lkXSA9IHRydWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGN1cnJlbnRVcGRhdGVDaHVua3NbY2h1bmtJZF0gPSBmYWxzZTtcblx0XHR9XG5cdH0pO1xuXHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5mKSB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5mLmpzb25wSG1yID0gZnVuY3Rpb24gKGNodW5rSWQsIHByb21pc2VzKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdGN1cnJlbnRVcGRhdGVDaHVua3MgJiZcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vKGN1cnJlbnRVcGRhdGVDaHVua3MsIGNodW5rSWQpICYmXG5cdFx0XHRcdCFjdXJyZW50VXBkYXRlQ2h1bmtzW2NodW5rSWRdXG5cdFx0XHQpIHtcblx0XHRcdFx0cHJvbWlzZXMucHVzaChsb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCkpO1xuXHRcdFx0XHRjdXJyZW50VXBkYXRlQ2h1bmtzW2NodW5rSWRdID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9O1xuXHR9XG59O1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtck0gPSAoKSA9PiB7XG5cdGlmICh0eXBlb2YgZmV0Y2ggPT09IFwidW5kZWZpbmVkXCIpIHRocm93IG5ldyBFcnJvcihcIk5vIGJyb3dzZXIgc3VwcG9ydDogbmVlZCBmZXRjaCBBUElcIik7XG5cdHJldHVybiBmZXRjaChfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckYoKSkudGhlbigocmVzcG9uc2UpID0+IHtcblx0XHRpZihyZXNwb25zZS5zdGF0dXMgPT09IDQwNCkgcmV0dXJuOyAvLyBubyB1cGRhdGUgYXZhaWxhYmxlXG5cdFx0aWYoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggdXBkYXRlIG1hbmlmZXN0IFwiICsgcmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG5cdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblx0fSk7XG59O1xuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBtb2R1bGUgY2FjaGUgYXJlIHVzZWQgc28gZW50cnkgaW5saW5pbmcgaXMgZGlzYWJsZWRcbi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvYXNzZXRzL2VudHJ5LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9