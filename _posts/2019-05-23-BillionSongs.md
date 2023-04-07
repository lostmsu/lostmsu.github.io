---
layout: habr
title: Writing billion songs with C# and Deep Learning
categories: sample advanced ml nn
---
<!DOCTYPE html>
<html lang="ru"><head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0,viewport-fit=cover">
  <meta name="referrer" content="unsafe-url">
  <title>Writing billion songs with C# and Deep Learning / Хабр</title>
  <style>
    /* cyrillic-ext */
    @font-face {
      font-family: 'Fira Sans';
      font-style: normal;
      font-weight: 500;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/firasans/v11/va9B4kDNxMZdWfMOD5VnZKveSxf6TF0.woff2) format('woff2');
      unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
    }

    /* cyrillic */
    @font-face {
      font-family: 'Fira Sans';
      font-style: normal;
      font-weight: 500;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/firasans/v11/va9B4kDNxMZdWfMOD5VnZKveQhf6TF0.woff2) format('woff2');
      unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }

    /* latin-ext */
    @font-face {
      font-family: 'Fira Sans';
      font-style: normal;
      font-weight: 500;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/firasans/v11/va9B4kDNxMZdWfMOD5VnZKveSBf6TF0.woff2) format('woff2');
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }

    /* latin */
    @font-face {
      font-family: 'Fira Sans';
      font-style: normal;
      font-weight: 500;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/firasans/v11/va9B4kDNxMZdWfMOD5VnZKveRhf6.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    /* non-breaking hyphen */
    @font-face {
      font-family: 'Fira Sans';
      font-style: normal;
      font-weight: 500;
      font-display: swap;
      src: url(https://fonts.gstatic.com/l/font?kit=KFOlCnqEu92Fr1MmEU9vBh0_IsHAlmrO6g&skey=ee881451c540fdec&v=v29) format('woff2');
      unicode-range: U+02011;
    }
  </style>
  <link rel="preload" href="/Writing%20billion%20songs%20with%20C%23%20and%20Deep%20Learning_files/chunk-vendors.css" as="style"><link rel="preload" href="/Writing%20billion%20songs%20with%20C%23%20and%20Deep%20Learning_files/chunk-vendors.js" as="script"><link rel="preload" href="/Writing%20billion%20songs%20with%20C%23%20and%20Deep%20Learning_files/app.css" as="style"><link rel="preload" href="/Writing%20billion%20songs%20with%20C%23%20and%20Deep%20Learning_files/app.js" as="script"><link rel="preload" href="/Writing%20billion%20songs%20with%20C%23%20and%20Deep%20Learning_files/page-user.css" as="style"><link rel="preload" href="/Writing%20billion%20songs%20with%20C%23%20and%20Deep%20Learning_files/page-user.js" as="script">
  <link rel="stylesheet" href="/Writing%20billion%20songs%20with%20C%23%20and%20Deep%20Learning_files/chunk-vendors.css"><link rel="stylesheet" href="/Writing%20billion%20songs%20with%20C%23%20and%20Deep%20Learning_files/app.css"><link rel="stylesheet" href="/Writing%20billion%20songs%20with%20C%23%20and%20Deep%20Learning_files/page-user.css">
  <script async="" src="/Writing%20billion%20songs%20with%20C%23%20and%20Deep%20Learning_files/tag.js"></script><script>window.i18nFetch = new Promise((res, rej) => {
          const xhr = new XMLHttpRequest();
          xhr.open('GET', '/js/i18n/ru-compiled.5e21c2134d370c71dd88f491e39368f2.json');
          xhr.responseType = 'json';
          xhr.onload = function(e) {
            if (this.status === 200) {
              res({ru: xhr.response});
            } else {
              rej(e);
            }
          };
          xhr.send();
        });</script>
  
  
  <script src="/Writing%20billion%20songs%20with%20C%23%20and%20Deep%20Learning_files/gpt.js" async=""></script>
  <style>.grecaptcha-badge{visibility: hidden;}</style>
  <meta name="habr-version" content="2.68.0">
  <meta name="csrf-token" content="45TsPJBM-_FvUsRDQd1m3NCxKduasvJ76cAk">
  <meta data-vue-meta="ssr" property="og:image:width" content="1200" data-vmid="og:image:width"><meta data-vue-meta="ssr" property="og:image:height" content="630" data-vmid="og:image:height"><meta data-vue-meta="ssr" property="fb:app_id" content="444736788986613"><meta data-vue-meta="ssr" property="fb:pages" content="472597926099084"><meta data-vue-meta="ssr" name="twitter:card" content="summary_large_image"><meta data-vue-meta="ssr" name="twitter:site" content="@habr_com"><meta data-vue-meta="ssr" property="og:site_name" content="Хабр" data-vmid="og:site_name">
  
  <meta name="apple-mobile-web-app-status-bar-style" content="#303b44">
  <meta name="msapplication-TileColor" content="#629FBC">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="mobile-web-app-capable" content="yes">
  <link rel="shortcut icon" type="image/png" sizes="16x16" href="https://assets.habr.com/habr-web/img/favicons/favicon-16.png">
  <link rel="shortcut icon" type="image/png" sizes="32x32" href="https://assets.habr.com/habr-web/img/favicons/favicon-32.png">
  <link rel="apple-touch-icon" type="image/png" sizes="76x76" href="https://assets.habr.com/habr-web/img/favicons/apple-touch-icon-76.png">
  <link rel="apple-touch-icon" type="image/png" sizes="120x120" href="https://assets.habr.com/habr-web/img/favicons/apple-touch-icon-120.png">
  <link rel="apple-touch-icon" type="image/png" sizes="152x152" href="https://assets.habr.com/habr-web/img/favicons/apple-touch-icon-152.png">
  <link rel="apple-touch-icon" type="image/png" sizes="180x180" href="https://assets.habr.com/habr-web/img/favicons/apple-touch-icon-180.png">
  <link rel="apple-touch-icon" type="image/png" sizes="256x256" href="https://assets.habr.com/habr-web/img/favicons/apple-touch-icon-256.png">
  <link rel="apple-touch-startup-image" media="screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" href="https://assets.habr.com/habr-web/img/splashes/splash_1136x640.png">
  <link rel="apple-touch-startup-image" media="screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" href="https://assets.habr.com/habr-web/img/splashes/splash_2436x1125.png">
  <link rel="apple-touch-startup-image" media="screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" href="https://assets.habr.com/habr-web/img/splashes/splash_1792x828.png">
  <link rel="apple-touch-startup-image" media="screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" href="https://assets.habr.com/habr-web/img/splashes/splash_828x1792.png">
  <link rel="apple-touch-startup-image" media="screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" href="https://assets.habr.com/habr-web/img/splashes/splash_1334x750.png">
  <link rel="apple-touch-startup-image" media="screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" href="https://assets.habr.com/habr-web/img/splashes/splash_1242x2668.png">
  <link rel="apple-touch-startup-image" media="screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" href="https://assets.habr.com/habr-web/img/splashes/splash_2208x1242.png">
  <link rel="apple-touch-startup-image" media="screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" href="https://assets.habr.com/habr-web/img/splashes/splash_1125x2436.png">
  <link rel="apple-touch-startup-image" media="screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" href="https://assets.habr.com/habr-web/img/splashes/splash_1242x2208.png">
  <link rel="apple-touch-startup-image" media="screen and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" href="https://assets.habr.com/habr-web/img/splashes/splash_2732x2048.png">
  <link rel="apple-touch-startup-image" media="screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" href="https://assets.habr.com/habr-web/img/splashes/splash_2688x1242.png">
  <link rel="apple-touch-startup-image" media="screen and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" href="https://assets.habr.com/habr-web/img/splashes/splash_2224x1668.png">
  <link rel="apple-touch-startup-image" media="screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" href="https://assets.habr.com/habr-web/img/splashes/splash_750x1334.png">
  <link rel="apple-touch-startup-image" media="screen and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" href="https://assets.habr.com/habr-web/img/splashes/splash_2048x2732.png">
  <link rel="apple-touch-startup-image" media="screen and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" href="https://assets.habr.com/habr-web/img/splashes/splash_2388x1668.png">
  <link rel="apple-touch-startup-image" media="screen and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" href="https://assets.habr.com/habr-web/img/splashes/splash_1668x2224.png">
  <link rel="apple-touch-startup-image" media="screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" href="https://assets.habr.com/habr-web/img/splashes/splash_640x1136.png">
  <link rel="apple-touch-startup-image" media="screen and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" href="https://assets.habr.com/habr-web/img/splashes/splash_1668x2388.png">
  <link rel="apple-touch-startup-image" media="screen and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" href="https://assets.habr.com/habr-web/img/splashes/splash_2048x1536.png">
  <link rel="apple-touch-startup-image" media="screen and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" href="https://assets.habr.com/habr-web/img/splashes/splash_1536x2048.png">
  <link rel="mask-icon" color="#77a2b6" href="https://assets.habr.com/habr-web/img/favicons/apple-touch-icon-120.svg">
  <link crossorigin="use-credentials" href="https://habr.com/manifest.webmanifest" rel="manifest">
  <script>window.yaContextCb = window.yaContextCb || []</script>
  <script src="/Writing%20billion%20songs%20with%20C%23%20and%20Deep%20Learning_files/context.js" async=""></script>
<link rel="stylesheet" type="text/css" href="/Writing%20billion%20songs%20with%20C%23%20and%20Deep%20Learning_files/page-companypage-flowpage-hubpage-user.css"><script charset="utf-8" src="/Writing%20billion%20songs%20with%20C%23%20and%20Deep%20Learning_files/page-companypage-flowpage-hubpage-user.js"></script><script data-vue-meta="ssr" onload="window['e0044d29c024'] = true" src="/Writing%20billion%20songs%20with%20C%23%20and%20Deep%20Learning_files/a.js" data-vmid="checklogin"></script><link rel="stylesheet" type="text/css" href="/Writing%20billion%20songs%20with%20C%23%20and%20Deep%20Learning_files/page-hub.css"><script charset="utf-8" src="/Writing%20billion%20songs%20with%20C%23%20and%20Deep%20Learning_files/page-hub.js"></script><script charset="utf-8" src="/Writing%20billion%20songs%20with%20C%23%20and%20Deep%20Learning_files/chunk-2d21042a.js"></script><script charset="utf-8" src="/Writing%20billion%20songs%20with%20C%23%20and%20Deep%20Learning_files/chunk-2d21ab85.js"></script><script charset="utf-8" src="/Writing%20billion%20songs%20with%20C%23%20and%20Deep%20Learning_files/hljs.js"></script><link rel="stylesheet" type="text/css" href="/Writing%20billion%20songs%20with%20C%23%20and%20Deep%20Learning_files/gallery.css"><script charset="utf-8" src="/Writing%20billion%20songs%20with%20C%23%20and%20Deep%20Learning_files/gallery.js"></script><script charset="utf-8" src="/Writing%20billion%20songs%20with%20C%23%20and%20Deep%20Learning_files/photoswipe.js"></script><script charset="utf-8" src="/Writing%20billion%20songs%20with%20C%23%20and%20Deep%20Learning_files/chunk-2d0e5f94.js"></script><script charset="utf-8" src="/Writing%20billion%20songs%20with%20C%23%20and%20Deep%20Learning_files/chunk-2d0af40b.js"></script><link rel="stylesheet" type="text/css" href="/Writing%20billion%20songs%20with%20C%23%20and%20Deep%20Learning_files/chunk-5cc902a5.css"><script charset="utf-8" src="/Writing%20billion%20songs%20with%20C%23%20and%20Deep%20Learning_files/chunk-5cc902a5.js"></script><link rel="stylesheet" type="text/css" href="/Writing%20billion%20songs%20with%20C%23%20and%20Deep%20Learning_files/docs.css"><script charset="utf-8" src="/Writing%20billion%20songs%20with%20C%23%20and%20Deep%20Learning_files/docs.js"></script><link data-vue-meta="ssr" href="https://habr.com/ru/rss/post/453232/?fl=ru%2Cen" type="application/rss+xml" title="" rel="alternate" name="rss"><link data-vue-meta="ssr" href="https://habr.com/en/post/453232/" rel="canonical" data-vmid="canonical"><link data-vue-meta="ssr" data-vmid="hreflang"><link data-vue-meta="ssr" image_src="image" href="https://habr.com/share/publication/453232/7dc59e6aba8e240c1382dd30c5beee84/" data-vmid="image:href"><meta data-vue-meta="ssr" property="og:title" content="Writing billion songs with C# and Deep Learning" data-vmid="og:title"><meta data-vue-meta="ssr" name="twitter:title" content="Writing billion songs with C# and Deep Learning" data-vmid="twitter:title"><meta data-vue-meta="ssr" name="aiturec:title" content="Writing billion songs with C# and Deep Learning" data-vmid="aiturec:title"><meta data-vue-meta="ssr" name="description" content="In this article I’ll explain how to build an ASP.NET Core web site, that uses AI to generate unique song lyrics with a click of a button, and lets users vote for the best songs.



The neural..." data-vmid="description"><meta data-vue-meta="ssr" itemprop="description" content="In this article I’ll explain how to build an ASP.NET Core web site, that uses AI to generate unique song lyrics with a click of a button, and lets users vote for the best songs.



The neural..." data-vmid="description:itemprop"><meta data-vue-meta="ssr" property="og:description" content="In this article I’ll explain how to build an ASP.NET Core web site, that uses AI to generate unique song lyrics with a click of a button, and lets users vote for the best songs.



The neural..." data-vmid="og:description"><meta data-vue-meta="ssr" name="twitter:description" content="In this article I’ll explain how to build an ASP.NET Core web site, that uses AI to generate unique song lyrics with a click of a button, and lets users vote for the best songs.



The neural..." data-vmid="twitter:description"><meta data-vue-meta="ssr" property="aiturec:description" content="In this article I’ll explain how to build an ASP.NET Core web site, that uses AI to generate unique song lyrics with a click of a button, and lets users vote for the best songs.



The neural..." data-vmid="aiturec:description"><meta data-vue-meta="ssr" itemprop="image" content="https://habr.com/share/publication/453232/7dc59e6aba8e240c1382dd30c5beee84/" data-vmid="image:itemprop"><meta data-vue-meta="ssr" property="og:image" content="https://habr.com/share/publication/453232/7dc59e6aba8e240c1382dd30c5beee84/" data-vmid="og:image"><meta data-vue-meta="ssr" property="aiturec:image" content="https://habr.com/share/publication/453232/7dc59e6aba8e240c1382dd30c5beee84/" data-vmid="aiturec:image"><meta data-vue-meta="ssr" name="twitter:image" content="https://habr.com/share/publication/453232/7dc59e6aba8e240c1382dd30c5beee84/" data-vmid="twitter:image"><meta data-vue-meta="ssr" property="vk:image" content="https://habr.com/share/publication/453232/7dc59e6aba8e240c1382dd30c5beee84/?format=vk" data-vmid="vk:image"><meta data-vue-meta="ssr" property="aiturec:item_id" content="453232" data-vmid="aiturec:item_id"><meta data-vue-meta="ssr" property="aiturec:datetime" content="2019-05-23T22:14:02.000Z" data-vmid="aiturec:datetime"><meta data-vue-meta="ssr" content="https://habr.com/en/post/453232/" property="og:url" data-vmid="og:url"><meta data-vue-meta="ssr" property="og:type" content="article" data-vmid="og:type"><meta data-vue-meta="ssr" property="og:locale" content="en_US" data-vmid="og:locale"><meta data-vue-meta="ssr" name="keywords" content=".net, tensorflow, asp.net core, artificial intelligence, art, generative art"><script data-vue-meta="ssr" type="application/ld+json" data-vmid="ldjson-schema">{"@context":"http:\/\/schema.org","@type":"Article","mainEntityOfPage":{"@type":"WebPage","@id":"https:\/\/habr.com\/en\/post\/453232\/"},"headline":"Writing billion songs with C# and Deep Learning","datePublished":"2019-05-24T01:14:02+03:00","dateModified":"2020-02-14T08:12:33+03:00","author":{"@type":"Person","name":"Милованов Виктор"},"publisher":{"@type":"Organization","name":"Habr","logo":{"@type":"ImageObject","url":"https:\/\/habrastorage.org\/webt\/a_\/lk\/9m\/a_lk9mjkccjox-zccjrpfolmkmq.png"}},"description":"In this article I&rsquo;ll explain how to build an ASP.NET Core web site, that uses AI to generate unique song lyrics with a click of a button, and lets users vote f...","url":"https:\/\/habr.com\/en\/post\/453232\/#post-content-body","about":["h_net","h_machine_learning","h_artificial_intelligence","h_futurenow","f_develop","f_popsci"],"image":["https:\/\/habrastorage.org\/webt\/df\/ok\/nc\/dfoknc5wbfxrkyvigyygtz9kctw.png","https:\/\/habrastorage.org\/webt\/cn\/sl\/_2\/cnsl_21o1f-vio39rn5auufl_lw.jpeg","https:\/\/habrastorage.org\/webt\/aw\/c7\/wf\/awc7wfzablt9gotcrrv8nsihrvu.png"]}</script></head>
<body class="vsc-initialized">


<div id="app" data-async-called="true"><div class="tm-layout__wrapper"><!----> <div></div> <!---->  <div class="tm-layout"><div class="tm-page-progress-bar"></div> <div data-menu-sticky="true" class="tm-base-layout__header tm-base-layout__header_is-sticky"><div class="tm-page-width"><div class="tm-base-layout__header-wrapper"> <div class="tm-header-user-menu tm-base-layout__user-menu"><a href="https://habr.com/ru/search/" class="tm-header-user-menu__item tm-header-user-menu__search"><svg height="24" width="24" class="tm-svg-img tm-header-user-menu__icon tm-header-user-menu__icon_search tm-header-user-menu__icon_dark"><title>Поиск</title> <use xlink:href="/img/megazord-v25.4b679db1.svg#search"></use></svg></a> <div class="tm-tracker-dropdown tm-header-user-menu__item"><div class="tm-dropdown"><div class="tm-dropdown__head"><button title="Трекер" class="tm-tracker-dropdown__notifications-button tm-tracker-dropdown__button_dark"><span class="tm-tracker-dropdown__notifications-counter">17</span> <svg height="24" width="24" class="tm-svg-img tm-tracker-dropdown__icon"><title>Трекер</title> <use xlink:href="/img/megazord-v25.4b679db1.svg#notifications"></use></svg></button></div> <!----></div></div> <!----> <div class="tm-header-user-menu__item tm-header-user-menu__write"><a href="https://habr.com/ru/publication/new/" class=""><svg height="24" width="24" class="tm-svg-img tm-header-user-menu__icon tm-header-user-menu__icon_write tm-header-user-menu__icon_dark"><title>Написать публикацию</title> <use xlink:href="/img/megazord-v25.4b679db1.svg#write"></use></svg></a> <!----></div> <div class="tm-header-user-menu__item tm-header-user-menu__user_desktop"><div class="tm-dropdown"><div class="tm-dropdown__head"><div data-test-id="menu-toggle-user" class="tm-entity-image"><img alt="" src="/Writing%20billion%20songs%20with%20C%23%20and%20Deep%20Learning_files/a2ebb081c4eb8a00beaf5fa5a599c145_002.jpg" class="tm-entity-image__pic" width="32" height="32"></div> <!----></div> <!----></div> <!----></div> <!----></div></div></div></div> <button class="tm-scroll-top"><span title="Наверх" class="tm-svg-icon__wrapper tm-scroll-top__arrow"><svg height="16" width="16" class="tm-svg-img tm-svg-icon"><title>Наверх</title> <use xlink:href="/img/megazord-v25.4b679db1.svg#small-arrow"></use></svg></span></button> <div class="tm-page-width"></div> <main class="tm-layout__container"><div class="tm-page" hl="ru"><div class="tm-page-width"><!----> <div class="tm-page__wrapper"><div class="tm-page__main tm-page__main_has-sidebar"><div class="pull-down"><div class="pull-down__header" style="height: 0px;"><div class="pull-down__content" style="bottom: 10px;"><svg height="24" width="24" class="tm-svg-img pull-down__arrow"><title>Обновить</title> <use xlink:href="/img/megazord-v25.4b679db1.svg#pull-arrow"></use></svg></div></div> <div class="tm-article-presenter"> <div class="tm-article-presenter__body"><div class="tm-misprint-area"><div class="tm-misprint-area__wrapper"><article class="tm-article-presenter__content tm-article-presenter__content_narrow"><div class="tm-article-presenter__header"> <div class="tm-article-snippet tm-article-presenter__snippet"><div class="tm-article-snippet__meta-container"><div class="tm-article-snippet__meta"><span class="tm-user-info tm-article-snippet__author"><a href="https://habr.com/ru/users/lostmsu/" class="tm-user-info__userpic" title="lostmsu"><div class="tm-entity-image"><img alt="" src="/Writing%20billion%20songs%20with%20C%23%20and%20Deep%20Learning_files/a2ebb081c4eb8a00beaf5fa5a599c145.jpg" class="tm-entity-image__pic" width="24" height="24"></div></a> <span class="tm-user-info__user"><a href="https://habr.com/ru/users/lostmsu/" class="tm-user-info__username">
      lostmsu
    </a> </span></span> <span class="tm-article-snippet__datetime-published"><time datetime="2019-05-23T22:14:02.000Z" title="2019-05-23, 15:14">23  мая  2019 в 15:14</time></span></div> <div class="tm-article-snippet__controls"><!----> <a href="https://habr.com/topic/edit/453232/" target="_blank" class="tm-article-snippet__edit"><svg height="20" width="20" class="tm-svg-img icon_edit-post"><title>Редактировать</title> <use xlink:href="/img/megazord-v25.4b679db1.svg#edit"></use></svg></a> <!----></div></div> <h1 class="tm-article-snippet__title tm-article-snippet__title_h1" lang="en"><span>Writing billion songs with C# and Deep Learning</span></h1> <div class="tm-article-snippet__hubs"><span class="tm-article-snippet__hubs-item"><a href="https://habr.com/ru/hub/net/" class="tm-article-snippet__hubs-item-link tm-article-snippet__hubs-item-link_subscribed"><span>.NET</span> <span title="Профильный хаб" class="tm-article-snippet__profiled-hub">*</span></a></span><span class="tm-article-snippet__hubs-item"><a href="https://habr.com/ru/hub/machine_learning/" class="tm-article-snippet__hubs-item-link"><span>Машинное обучение</span> <span title="Профильный хаб" class="tm-article-snippet__profiled-hub">*</span></a></span><span class="tm-article-snippet__hubs-item"><a href="https://habr.com/ru/hub/artificial_intelligence/" class="tm-article-snippet__hubs-item-link tm-article-snippet__hubs-item-link_subscribed"><span>Искусственный интеллект</span> <!----></a></span><span class="tm-article-snippet__hubs-item"><a href="https://habr.com/ru/hub/futurenow/" class="tm-article-snippet__hubs-item-link"><span>Будущее здесь</span> <!----></a></span></div> <div class="tm-article-snippet__labels"><div class="tm-article-snippet__label tm-article-snippet__label_variant-recovery"><span>
        Recovery mode
      </span></div><div class="tm-article-snippet__label tm-article-snippet__label_variant-tutorial"><span>
        Tutorial
      </span></div></div> <!----> <!----></div></div> <!----> <div data-gallery-root="" class="tm-article-body" lang="en"><div></div> <div id="post-content-body"><div><div class="article-formatted-body article-formatted-body_version-1"><div xmlns="http://www.w3.org/1999/xhtml">In this article I’ll explain how to build an <a href="https://billionsongs.azurewebsites.net/" rel="nofollow">ASP.NET Core web site</a>, that uses AI to generate unique song lyrics with a click of a button, and lets users vote for the best songs.<br>
<a name="habracut"></a><br>
<h1>The neural network</h1><br>
About 2.5 months ago <a href="https://openai.com/" rel="nofollow">OpenAI</a> published <a href="https://openai.com/blog/better-language-models/" rel="nofollow">a blog post</a>,
 where they demonstrated nearly impossible: a deep learning model, that 
can write articles, indistinguishable from ones written by humans. The 
text it generated was so impressive, that I had to check the calendar to
 ensure its not an April Fool’s joke (mind you that was February, and 
Seattle was covered in snow).<br>
<br>
<p><img src="/Writing%20billion%20songs%20with%20C%23%20and%20Deep%20Learning_files/dfoknc5wbfxrkyvigyygtz9kctw.png" alt="GPT-2 text sample" data-src="https://habrastorage.org/webt/df/ok/nc/dfoknc5wbfxrkyvigyygtz9kctw.png"></p><br>
<p>They did not release the largest neural network with over 1 billion 
parameters they built as of today (a very controversial decision), but 
they open-sourced a smaller 117M parameters version <a href="https://github.com/openai/gpt-2" rel="nofollow">on GitHub</a> under MIT license. The model has a very unmemorable name: <b>GPT-2</b>.</p><br>
<p>So, about a month ago, when I was trying to think what cool project I
 could make with TensorFlow, that network became the starting point. If 
it already could generate English text, it should not have been too hard
 to <i>fine-tune </i>it to generate song lyrics, if there is a sufficiently large dataset.</p><br>
<h2>How does GPT-2 work?</h2><br>
<p>There are several important achievements in deep learning research, that made GPT-2 possible:</p><br>
<h3>Self-supervised learning</h3><br>
<p>This technique got its name finalized by Yan LeCunn only several days
 after I wrote the first version of this article. It is a very powerful 
technique, that can be applied to basically any kind of real-world data.
 To train GPT-2 OpenAI collected <i>tens of gigabytes of articles</i> from various sources, that were upvoted on Reddit.</p><br>
<p>Conventionally, one would have to have a human to go through all 
these articles, and, for example, mark them as “positive” or “negative”.
 Then they would teach a neural network in supervised manner to classify
 these articles the same way a human did.</p><br>
<p><img src="/Writing%20billion%20songs%20with%20C%23%20and%20Deep%20Learning_files/cnsl_21o1f-vio39rn5auufl_lw.jpeg" alt="RECAPTCHA: find stree signs" data-src="https://habrastorage.org/webt/cn/sl/_2/cnsl_21o1f-vio39rn5auufl_lw.jpeg"></p><br>
<p>The new idea here is that to create a deep learning model, that has a
 high-level understanding of your data, you simply corrupt the data, and
 task the model to restore the original. This makes the model understand
 connections between pieces of data, and their surrounding contexts.</p><br>
<p>Let’s take text as an example. GPT-2 takes a sample of the original 
text, picks 15% of tokens to be corrupted, then masks 80% of them (e.g. 
replaces with special mask token, usually ___), replaces 10% with some 
other random token from the dictionary, and keeps the remaining 10% 
intact. Take <i>I threw a ball, and it fell to the grass</i>. After corruption it might look like this: <i>I threw car ball, and it ___ to the grass</i>.
 In the layman terms, to get network restore the original, it needs to 
learn, that something thrown will likely fall, and that car ball is 
something very uncommon in the context.</p><br>
<p>A model trained like that is good on generating/completing partial 
data, but the high-level features it learned (as outputs of inner 
layers) can be used for other purposes by adding a layer or two on top 
of them, and fine-tuning <b>only that new last layer</b> on an actual, <b>smaller</b>, human-marked dataset in a conventional way.</p><br>
<h3>Sparse self-attention</h3><br>
<p>GPT-2 uses something called sparse self-attention. In the essence, it
 is a technique, that enables neural network processing large input to 
focus on some parts of it more than others. And the network learns where
 it should “look” during training. The attention mechanism is better 
explained in <a href="https://mlexplained.com/2017/12/29/attention-is-all-you-need-explained/" rel="nofollow">this blog post</a>.</p><br>
<p>The <i>sparse</i> part in the title of this section refers to a 
restriction on which segments of input the attention mechanism can 
choose from. Originally attention could choose from the entire input. 
That caused its weight matrix to be O(input_size^2), which grows very 
quickly with the size of the input. Sparse attention usually restricts 
that in some way. For more information on that, take a look at another <a href="https://openai.com/blog/sparse-transformer/" rel="nofollow">OpenAI blog post</a>.</p><br>
<p>The attention in GPT-2 is <i>multi-head</i>. Imagine you could have 
an additional eye or two you could use to check what was in the last 
paragraph without stopping reading the current one.</p><br>
<h3>Many more</h3><br>
<p><a href="https://stats.stackexchange.com/questions/321054/what-are-residual-connections-in-rnns" rel="nofollow">Residual connections</a>, <a href="https://en.wikipedia.org/wiki/Byte_pair_encoding" rel="nofollow">Byte pair encoding</a>, next sentence prediction, and many more.</p><br>
<h2>Porting GPT-2 (and converting Python in general)</h2><br>
<p>The original model code is in Python, but I am a C# guy. Fortunately, the source code is quite readable, and the <a href="https://github.com/openai/gpt-2/tree/master/src" rel="nofollow">crux of it</a> is in just 5 files, maybe 500 lines total. So I created a new .NET Standard project, installed <a href="https://www.nuget.org/packages/Gradient/" rel="nofollow">Gradient</a>
 (a TensorFlow binding for .NET), and converted those files line by line
 to C#. That took me about 2 hours. The only pythonic thing left in the 
code was the use of Python regex module from pip (the most commonly used
 package manager for Python), as I did not want to waste time learning 
the intricacies of Python regular expressions (<i>as if it was not enough to deal with .NET ones already</i>).</p><br>
<p>Mostly the conversion consisted of defining similar classes, adding types, and rewriting Python <a href="https://www.digitalocean.com/community/tutorials/understanding-list-comprehensions-in-python-3" rel="nofollow">list comprehensions</a> into corresponding LINQ constructs. In addition to LINQ from standard library, I used <a href="https://www.nuget.org/packages/MoreLinq" rel="nofollow">MoreLinq</a>, that slightly expands what LINQ can do For example:</p><br>
<p></p><pre><code class="python hljs">bs =
  list(range(ord(<span class="hljs-string">"!"</span>), ord(<span class="hljs-string">"~"</span>)+<span class="hljs-number">1</span>))
  + list(range(ord(<span class="hljs-string">"¡"</span>), ord(<span class="hljs-string">"¬"</span>)+<span class="hljs-number">1</span>))
  + list(range(ord(<span class="hljs-string">""</span>), ord(<span class="hljs-string">"ÿ"</span>)+<span class="hljs-number">1</span>))</code></pre><br>
<p>turned into:</p><br>
<p></p><pre><code class="cs hljs"><span class="hljs-keyword">var</span> bs = Range(<span class="hljs-string">'!'</span>, <span class="hljs-string">'~'</span> - <span class="hljs-string">'!'</span> + <span class="hljs-number">1</span>)
  .Concat(Range(<span class="hljs-string">'¡'</span>, <span class="hljs-string">'¬'</span> -<span class="hljs-string">'¡'</span> + <span class="hljs-number">1</span>))
  .Concat(Range(<span class="hljs-string">''</span>, <span class="hljs-string">'ÿ'</span> - <span class="hljs-string">''</span> + <span class="hljs-number">1</span>))
  .ToList();</code></pre><br>
<p>Another thing I had to fight with was a discrepancy between the way Python handles ranges, and the new <a href="https://docs.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-8" rel="nofollow">Ranges and indices feature</a> in the upcoming C# 8, which I discovered while debugging my initial runs: in C# 8 the end of the range is <b>inclusive</b>, while in Python it is <b>exclusive</b> (to include the very last element in Python you have to omit the right side of <i>..</i> expression).</p><br>
<blockquote>There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.</blockquote><br>
<p>Unfortunately, the original source drop did not contain any training or even fine-tuning code, but <b>Neil Shepperd</b> provided a simple fine-tuner on his <a href="https://github.com/nshepperd/gpt-2" rel="nofollow">GitHub</a>, which I had to port too. Anyway, the result of that effort is a <b>C# code</b>, that can be used <b>to play with GPT-2</b>, is now a part of Gradient <a href="https://github.com/losttech/Gradient-Samples/tree/master/GPT-2" rel="nofollow">Samples</a> repository.</p><br>
<p>The point of the porting exercise is two-fold: after porting one can <b>play with the model code in his favorite C# IDE</b>, and to show, that <b>it is now possible to get state-of-the-art deep learning models working in custom .NET projects</b> shortly after release (between the code drop of GPT-2 and the first release of Billion Songs — just a bit over a month).</p><br>
<h2>Fine-tuning to song lyrics</h2><br>
<p>There are several ways one could get a large corpus of song lyrics. 
You could scrape one of the Internet websites hosting it with a HTML 
parser, pull it out from your karaoke collection, or mp3 files. 
Fortunately, somebody did it for us. I found quite a few prepared lyrics
 datasets on <a href="https://www.kaggle.com/" rel="nofollow">Kaggle</a>. “<a href="https://www.kaggle.com/artimous/every-song-you-have-heard-almost" rel="nofollow">Every song you have heard</a>” seemed to be the largest. Trying to fine-tune GPT-2 to it, I faced two problems.</p><br>
<h3>CSV reading</h3><br>
<p>Yes, you read it correctly, <i>CSV parsing was a problem</i>. 
Initially, I wanted to use ML.NET, the new Microsoft library for machine
 learning, to read the file. However, after skimming through 
documentation, and setting it up, I realized, that it failed to process 
line breaks in the songs properly. No matter what I did, it struggled 
after a few hundred examples, and started mixing pieces of lyrics with 
titles and artists.</p><br>
<p>So I had to resort to a lower-level library, which I previously had better experience with: <a href="https://www.nuget.org/packages/CsvHelper/" rel="nofollow">CsvHelper</a>. It provides a <i>DataReader</i>-like interface. You can see the code using it <a href="https://github.com/losttech/Gradient-Samples/blob/master/GPT-2/TrainCommand.cs" rel="nofollow">here</a>. Essentially, you open a file, configure a <i>CsvReader</i>, and then interleave call to <i>.Read()</i> with call(s) to <i>.GetField(fieldName)</i>.</p><br>
<h3>Short songs</h3><br>
<p>Most of the songs are short in comparison to an average article in 
the original dataset used by OpenAI. GPT-2 training is more efficient on
 large pieces of text, so I had to bundle several songs up into 
continuous text chunks to feed them to the trainer. OpenAI also seemed 
to use this technique, so they’ve had a special token <i>&lt;|endoftext|&gt;</i>,
 that acts as a separator between complete texts within a chunk, and 
doubles as the start token. I bundled up songs until a certain number of
 tokens was reached, then returned the whole chunk to include in the 
training data. The relevant code is <a href="https://github.com/losttech/Gradient-Samples/blob/cc8605710de099c8877265bd758abcaa035fd527/GPT-2/TrainCommand.cs" rel="nofollow">here</a>.</p><br>
<h3>Hardware requirements for tuning</h3><br>
<p>Even the smaller version of GPT-2 is large. With <b>12GB of GPU RAM</b> I could <b>only set the batch size to 2</b> (e.g. train on two chunks at once, larger batch sizes improve GPU performance and training results). 3 would throw <i>out of memory</i>
 in CUDA. And it took half a day to tune it to the desired performance 
on my V100. The bonus is you can see the progress, as every now and then
 the training code outputs some generated samples, that start as plain 
simple text, and look more and more like song lyrics as the training 
progresses.</p><br>
<p>I have not tried it, but <b>training on CPU will probably be very slow</b>.</p><br>
<h3>Pre-tuned model</h3><br>
<p>As I was preparing this blog post, I realized it would be better not to force everyone to spend hours on fine-tuning the <b>lyrics</b> <b>model</b>, so I <b>released</b> <b>pre-tuned</b> one on the <a href="https://github.com/losttech/BillionSongs/releases/tag/v0.1" rel="nofollow">Billion Songs repository</a>.
 If you are just trying to run Billion Songs, you don’t even have to 
download it manually. The project will do it for you by default.</p><br>
<div class="spoiler spoiler_open"><b class="spoiler_title">half-trained model playing HAL9000 on me</b><div class="spoiler_text">I swear you, I'm supposed to write you<br>
 And I swear you, I swear<br>
 You ruined it now, I hope you make it<br>
And I hope your dream, I hope you dream, I hope you dream I hope you dream I hope you dream about<br>
About<br>
 what I'm going. I'm going. I'm going. I'm going, I'm going, I'm going, I'm going, I'm going, I'm going, I'm going,<br>
 I'm going, I'm going, I'm going…</div></div><br>
<h1>Making a website</h1><br>
<p>OK! That looks like a song (sort of), now let’s make a web site!</p><br>
<p>Since I don’t plan to provide any APIs, I choose the Razor Pages 
template as opposed to MVC. I turned on authorization too, as we will 
allow users to vote for the best lyrics and have a Top 10 chart.</p><br>
<p>Rushing the MVP, I went ahead and created a Song.cshtml web page, 
whose goal for now will be to simply call GPT-2 and get a random song. 
The layout of the page is trivial, and basically consists of the song 
and its title:</p><br>
<pre><code class="xml hljs">@page "/song/{id}"
@model BillionSongs.Pages.SongModel<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
@{
  ViewData["Title"] = @Model.Song.Title ?? "Untitled";
}
<span class="hljs-tag">&lt;<span class="hljs-name">article</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"text-align: center"</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>@(Model.Song.Title ?? "Untitled")<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">pre</span>&gt;</span>@Model.Song.Lyrics<span class="hljs-tag">&lt;/<span class="hljs-name">pre</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">article</span>&gt;</span>
</code></pre><br>
<br>
<p>Now because I like my code reusable, I created an interface, that 
will let me plug different lyrics generators later on, which will be 
injected by ASP.NET into SongModel.</p><br>
<pre><code class="cs hljs">
<span class="hljs-keyword">interface</span> <span class="hljs-title">ILyricsGenerator</span> {
 <span class="hljs-function">Task&lt;<span class="hljs-keyword">string</span>&gt; <span class="hljs-title">GenerateLyrics</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> song, CancellationToken cancellation</span>)</span>;
}
</code></pre><br>
<p>Omitting song title for now, all we need to do is to register <i>Gpt2LyricsGenerator</i> in <i>Startup.ConfigureServices</i> and call it from the <i>SongModel</i>. So let’s get started on the generator. And the first thing we need to ensure, is that we have</p><br>
<h2>Repeatable lyrics generation</h2><br>
<p>Because I made a bold statement in the title, that it is going to be 
over 1 billion songs, don’t even think about generating and storing all 
of them. First, without any metadata, that would take on its own over 
1TB of disk space. Second, it takes ~3 minutes on my nettop to generate a
 new song, so it will take forever to generate all of them. And I want 
to be able to turn that billion into a quintillion by switching to <i>Int64</i>
 if needed! Imagine we could make 1 cent per song, on a 1 quintillion 
songs? That would be more, than the world’s current yearly GDP!</p><br>
<p>Instead, what we need to do is to ensure, that GPT-2 generates the same song over and over again, given its <i>id</i>,
 which I specify in the route. For that purpose TensorFlow gives an 
ability to set the seed of its internal number generator at any time via
 <a href="https://www.tensorflow.org/api_docs/python/tf/random/set_random_seed" rel="nofollow">tf.set_random_seed</a> function like this: <i>tf.set_random_seed(songNumber)</i>. Then I wanted to just call <i>Gpt2Sampler.SampleSequence</i>, to get the encoded song text, decode it, and return the result, thus completing <i>Gpt2LyricsGenerator</i>.</p><br>
<p>Unfortunately, upon the first try that did not work as expected. 
Every time I’d hit refresh button, a new unique text would be returned 
on the page. After quite a bit of debugging, I finally found out, that 
TensorFlow 1.X has significant issues with reproducibility: many 
operations have internal states, that are not affected by <i>set_random_seed</i> and are hard to reach to reset.</p><br>
<p>Reinitialization of the model variables helped offset that problem, 
but also meant, that the session must be recreated, and the model 
weights had to be reloaded on every call. Reloading a session of that 
size caused a giant memory leak. To avoid looking for its cause in 
TensorFlow C++ source code, instead of doing text generation in-process,
 I decided to spawn a new process with <i>Process.Start</i>, generate 
text there, and read it from the standard output. Until a way to reset 
the model state in TensorFlow is stabilized, this would be the way to 
go.</p><br>
<p>So I ended up with two classes: <a href="https://github.com/losttech/BillionSongs/blob/master/Web/Gpt2LyricsGenerator.cs" rel="nofollow">Gpt2LyricsGenerator</a>, which implements <i>ILyricsGenerator</i>
 from above by spawning a new instance of BillionSongs.exe with command 
line parameters, that include song id, and eventually instantiates <a href="https://github.com/losttech/BillionSongs/blob/master/Web/Gpt2TextGenerator.cs" rel="nofollow">Gpt2TextGenerator</a>, which actually calls GPT-2 to generate lyrics, and simply prints it out.</p><br>
<p>Now refreshing the page always gave me the same text.</p><br>
<h2>Dealing with 3 minute time to generate a song</h2><br>
<p>What a horrible user experience it would be! You go to a website, click “Make New song”, and <b>absolutely nothing happens for 3 (!) minutes </b>while my nettop takes its time to generate song lyrics you requested.</p><br>
<p>I solved this problem on multiple levels:</p><br>
<h3>Pregenerating songs</h3><br>
<p>As mentioned above, you can’t pregenerate all the songs, and serve 
them from a database. And you can’t just generate on demand, because 
that is to slow. So what can you do?</p><br>
<p>Simple! Since the primary way for users to see a new song is to click
 “Make Random” button, let’s pregenerate a lot of songs in advance, put 
them into a <i>ConcurrentQueue</i>, and let “Make Random” pop songs from
 it. While the number of visitors is low, the server will take time 
between them to generate some songs, that will then be readily 
accessible.</p><br>
<p>Another trick, that I used is to loop that queue several times, so 
that many users could see the same pregenerated song. One just need to 
keep a balance between the RAM usage, and how many times a user has to 
click on “Make Random” to see something he has seen before. I simply 
picked 50,000 songs as a reasonable number, which would take just 50MB 
of RAM, while providing quite a large number of clicks to go through.</p><br>
<p>I implemented that functionality in class <a href="https://github.com/losttech/BillionSongs/blob/master/Web/PregeneratedSongProvider.cs" rel="nofollow">PregeneratedSongProvider</a>: <i>IRandomSongProvider</i> (the interface is injected into the code, responsible for handling “Make Random” button).</p><br>
<h3>Caching</h3><br>
<p>Pregenerated songs are cached to memory, but I also set HTTP <i>cache</i> header to <i>public</i> to let browser, and CDN (I use CloudFlare) cache it to avoid getting hit by a user influx.</p><br>
<pre><code class="cs hljs">[<span class="hljs-meta">ResponseCache(VaryByHeader = <span class="hljs-meta-string">"User-Agent"</span>, Duration = 3*60*60)</span>]
<span class="hljs-keyword">public</span> <span class="hljs-keyword">class</span> <span class="hljs-title">SongModel</span>: <span class="hljs-title">PageModel</span> { … }
</code></pre><br>
<h3>Returning popular songs</h3><br>
<p>Most of the songs generated by fine-tuned GPT-2 in that manner are 
pretty dull, if not rudimentary. To make clicks on “Make Random” more 
engaging, I added a 25% probability, that instead of a completely random
 song you’ll get some song, that was previously upvoted by other users. 
In addition to increasing engagement it increases the chance, that you 
will request a song, cached either in the CDN, or in memory.</p><br>
<p>All of the tricks above are wired together using ASP.NET dependency injection in the <a href="https://github.com/losttech/BillionSongs/blob/master/Web/Startup.cs" rel="nofollow">Startup</a> class.</p><br>
<h2>Voting</h2><br>
<p>There’s not much special about voting implementation. There is <a href="https://github.com/losttech/BillionSongs/blob/master/Web/SongVoteCache.cs" rel="nofollow">SongVoteCache</a>, that keeps the counts up to date. And an <a href="https://github.com/losttech/BillionSongs/blob/master/Web/Pages/SongVotes.cshtml" rel="nofollow">iframe hosting the vote button</a>s
 on the song page, which allows the essential part of the page — title 
and lyrics to be cached, while the vote counts and login status are 
loaded later.</p><br>
<h1>The end results</h1><br>
<p><a href="https://billionsongs.azurewebsites.net/song/2364916011" rel="nofollow"><img src="/Writing%20billion%20songs%20with%20C%23%20and%20Deep%20Learning_files/awc7wfzablt9gotcrrv8nsihrvu.png" alt="Generated Song Sample" data-src="https://habrastorage.org/webt/aw/c7/wf/awc7wfzablt9gotcrrv8nsihrvu.png"></a><br>
</p><br>
<p><a href="https://billionsongs.azurewebsites.net/" rel="nofollow">A demo version</a> running on <s>my nettop, fronted by CloudFlare (give it some slack, its Core i3)</s> now frozen and moved to Azure App Service free tier.</p><br>
<p><a href="https://github.com/losttech/BillionSongs/" rel="nofollow">The GitHub repository</a>, containing source code, and instructions to run the website and tune the model.</p><br>
<h1>Plans for the future/exercises</h1><br>
<h2>Generate titles</h2><br>
<p>GPT-2 is very easy to fine-tune. One could make it generate song 
titles by prepending or suffixing every sample of lyrics from the 
dataset with an artificial token like <i>&lt;|startoftitle|&gt;</i>, followed by the title from the same dataset.</p><br>
<p>Alternatively, users could be allowed to suggest and/or vote for titles.</p><br>
<h2>Generate music</h2><br>
<p>Half the way through developing Billion Songs I thought it would be 
cool to download a bunch of MIDI files (that’s an old-school music 
format, that is much closer to text, than mp3s), and train GPT-2 on them
 to generate more. Some of those files even had text embedded, so <b>you could get karaoke generation</b>.</p><br>
<p>I know the music generation this way is very possible, because yesterday <b>OpenAI actually went ahead a published an implementation of that idea</b> <a href="https://openai.com/blog/musenet/" rel="nofollow">in their blog</a>. But, hooray, <b>they did not do the karaoke!</b> I found, that it is possible to scrape <a href="http://www.midi-karaoke.info/" rel="nofollow">http://www.midi-karaoke.info</a> for that purpose.</p><br>
<h2>Gradient aka TensorFlow for .NET</h2><br>
Please, see our <a href="http://ml.blogs.losttech.software/" rel="nofollow">blog</a> for any updates.</div></div></div> <div class="v-portal" style="display: none;"></div></div> <div aria-hidden="true" role="dialog" tabindex="-1" class="pswp"><div class="pswp__bg"></div> <div class="pswp__scroll-wrap"><div class="pswp__container"><div class="pswp__item"></div> <div class="pswp__item"></div> <div class="pswp__item"></div></div> <div class="pswp__ui pswp__ui--hidden"><div class="pswp__top-bar"><span class="tm-svg-icon__wrapper pswp__button pswp__button--close"><svg height="16" width="16" class="tm-svg-img tm-svg-icon"><title>Закрыть</title> <use xlink:href="/img/megazord-v25.4b679db1.svg#close"></use></svg></span> <div class="pswp__preloader"><div class="pswp__preloader__icn"><div class="pswp__preloader__cut"><div class="pswp__preloader__donut"></div></div></div></div></div></div></div></div> <!----></div> <div class="tm-article-presenter__meta"><div class="tm-separated-list tm-article-presenter__meta-list"><span class="tm-separated-list__title">Теги:</span> <ul class="tm-separated-list__list"><li class="tm-separated-list__item"><a href="https://habr.com/ru/search/?target_type=posts&amp;order=relevance&amp;q=%5B.net%5D" class="tm-tags-list__link">.net</a></li><li class="tm-separated-list__item"><a href="https://habr.com/ru/search/?target_type=posts&amp;order=relevance&amp;q=%5Btensorflow%5D" class="tm-tags-list__link">tensorflow</a></li><li class="tm-separated-list__item"><a href="https://habr.com/ru/search/?target_type=posts&amp;order=relevance&amp;q=%5Basp.net%20core%5D" class="tm-tags-list__link">asp.net core</a></li><li class="tm-separated-list__item"><a href="https://habr.com/ru/search/?target_type=posts&amp;order=relevance&amp;q=%5Bartificial%20intelligence%5D" class="tm-tags-list__link">artificial intelligence</a></li><li class="tm-separated-list__item"><a href="https://habr.com/ru/search/?target_type=posts&amp;order=relevance&amp;q=%5Bart%5D" class="tm-tags-list__link">art</a></li><li class="tm-separated-list__item"><a href="https://habr.com/ru/search/?target_type=posts&amp;order=relevance&amp;q=%5Bgenerative%20art%5D" class="tm-tags-list__link">generative art</a></li></ul></div> <div class="tm-separated-list tm-article-presenter__meta-list"><span class="tm-separated-list__title">Хабы:</span> <ul class="tm-separated-list__list"><li class="tm-separated-list__item"><a href="https://habr.com/ru/hub/net/" class="tm-hubs-list__link">
    .NET
  </a></li><li class="tm-separated-list__item"><a href="https://habr.com/ru/hub/machine_learning/" class="tm-hubs-list__link">
    Машинное обучение
  </a></li><li class="tm-separated-list__item"><a href="https://habr.com/ru/hub/artificial_intelligence/" class="tm-hubs-list__link">
    Искусственный интеллект
  </a></li><li class="tm-separated-list__item"><a href="https://habr.com/ru/hub/futurenow/" class="tm-hubs-list__link">
    Будущее здесь
  </a></li></ul></div></div></article></div> <!----></div> <div class="tm-article-sticky-panel" style=""><div class="tm-data-icons tm-article-sticky-panel__icons"><div class="tm-article-rating tm-data-icons__item"><div class="tm-votes-meter tm-article-rating__votes-switcher"><svg height="24" width="24" class="tm-svg-img tm-votes-meter__icon tm-votes-meter__icon_appearance-article"><title>Всего голосов 14: ↑11 и ↓3</title> <use xlink:href="/img/megazord-v25.4b679db1.svg#counter-rating"></use></svg> <span title="Всего голосов 14: ↑11 и ↓3" class="tm-votes-meter__value tm-votes-meter__value_positive tm-votes-meter__value_appearance-article tm-votes-meter__value_rating">+8</span></div> <div class="v-portal" style="display: none;"></div></div> <!----> <!----> <button title="Убрать из закладок" type="button" class="bookmarks-button tm-data-icons__item"><span title="Убрать из закладок" class="tm-svg-icon__wrapper bookmarks-button__icon bookmarks-button__icon_highlighted"><svg height="24" width="24" class="tm-svg-img tm-svg-icon"><title>Убрать из закладок</title> <use xlink:href="/img/megazord-v25.4b679db1.svg#counter-favorite"></use></svg></span> <span title="Количество пользователей, добавивших публикацию в закладки" class="bookmarks-button__counter bookmarks-button__counter_highlighted">
    10
  </span></button> <div class="tm-article-comments-counter-link tm-data-icons__item" title="Читать комментарии"><a href="https://habr.com/ru/post/453232/comments/" class="tm-article-comments-counter-link__link"><svg height="24" width="24" class="tm-svg-img tm-article-comments-counter-link__icon"><title>Комментарии</title> <use xlink:href="/img/megazord-v25.4b679db1.svg#counter-comments"></use></svg> <span class="tm-article-comments-counter-link__value">
      0
    </span></a> <!----></div> <div class="tm-sharing tm-data-icons__item" title="Поделиться"><button type="button" class="tm-sharing__button"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="tm-sharing__icon"><path fill="currentColor" d="M13.8 13.8V18l7.2-6.6L13.8 5v3.9C5 8.9 3 18.6 3 18.6c2.5-4.4 6-4.8 10.8-4.8z"></path></svg></button> <div class="v-portal" style="display: none;"></div></div> <div class="v-portal" style="display: none;"></div></div> </div></div> <div class="v-portal" style="display: none;"></div> </div></div></div> </div></div></div></main> <!----></div> <div class="tm-footer-menu"><div class="tm-page-width"><div class="tm-footer-menu__container"><div class="tm-footer-menu__block"><h3 class="tm-footer-menu__block-title">
          Ваш аккаунт
        </h3> <div class="tm-footer-menu__block-content"><ul class="tm-footer-menu__list"><li class="tm-footer-menu__list-item"><a href="https://habr.com/ru/users/lostmsu/posts/" class="footer-menu__item-link">
                Профиль
              </a></li><li class="tm-footer-menu__list-item"><a href="https://habr.com/ru/tracker/" class="footer-menu__item-link">
                Трекер
              </a></li><li class="tm-footer-menu__list-item"><a href="https://habr.com/ru/conversations/" class="footer-menu__item-link">
                Диалоги
              </a></li><li class="tm-footer-menu__list-item"><a href="https://habr.com/ru/auth/settings/profile/" class="footer-menu__item-link">
                Настройки
              </a></li><li class="tm-footer-menu__list-item"><a href="https://habr.com/ru/ppa/" class="footer-menu__item-link">
                ППА
              </a></li></ul></div></div><div class="tm-footer-menu__block"><h3 class="tm-footer-menu__block-title">
          Разделы
        </h3> <div class="tm-footer-menu__block-content"><ul class="tm-footer-menu__list"><li class="tm-footer-menu__list-item"><a href="https://habr.com/ru/" class="footer-menu__item-link router-link-active">
                Публикации
              </a></li><li class="tm-footer-menu__list-item"><a href="https://habr.com/ru/news/" class="footer-menu__item-link">
                Новости
              </a></li><li class="tm-footer-menu__list-item"><a href="https://habr.com/ru/hubs/" class="footer-menu__item-link">
                Хабы
              </a></li><li class="tm-footer-menu__list-item"><a href="https://habr.com/ru/companies/" class="footer-menu__item-link">
                Компании
              </a></li><li class="tm-footer-menu__list-item"><a href="https://habr.com/ru/users/" class="footer-menu__item-link">
                Авторы
              </a></li><li class="tm-footer-menu__list-item"><a href="https://habr.com/ru/sandbox/" class="footer-menu__item-link">
                Песочница
              </a></li></ul></div></div><div class="tm-footer-menu__block"><h3 class="tm-footer-menu__block-title">
          Информация
        </h3> <div class="tm-footer-menu__block-content"><ul class="tm-footer-menu__list"><li class="tm-footer-menu__list-item"><a href="https://habr.com/ru/docs/help/" class="footer-menu__item-link">
                Устройство сайта
              </a></li><li class="tm-footer-menu__list-item"><a href="https://habr.com/ru/docs/authors/codex/" class="footer-menu__item-link">
                Для авторов
              </a></li><li class="tm-footer-menu__list-item"><a href="https://habr.com/ru/docs/companies/corpblogs/" class="footer-menu__item-link">
                Для компаний
              </a></li><li class="tm-footer-menu__list-item"><a href="https://habr.com/ru/docs/docs/transparency/" class="footer-menu__item-link">
                Документы
              </a></li><li class="tm-footer-menu__list-item"><a href="https://account.habr.com/info/agreement" target="_blank">
                Соглашение
              </a></li><li class="tm-footer-menu__list-item"><a href="https://account.habr.com/info/confidential/" target="_blank">
                Конфиденциальность
              </a></li></ul></div></div><div class="tm-footer-menu__block"><h3 class="tm-footer-menu__block-title">
          Услуги
        </h3> <div class="tm-footer-menu__block-content"><ul class="tm-footer-menu__list"><li class="tm-footer-menu__list-item"><a href="https://docs.google.com/presentation/d/e/2PACX-1vQLwRfQmXibiUlWaRg-BAc38s7oM3lJiaPju7qmdJsp8ysIvZ_G-Npem0njJLMozE2bPHMpDqiI5hhy/pub?start=false&amp;loop=false&amp;delayms=60000&amp;slide=id.g91a03369cd_4_297" target="_blank">
                Реклама
              </a></li><li class="tm-footer-menu__list-item"><a href="https://habrastorage.org/storage/stuff/habr/service_price.pdf" target="_blank">
                Тарифы
              </a></li><li class="tm-footer-menu__list-item"><a href="https://docs.google.com/presentation/d/e/2PACX-1vQJJds8-Di7BQSP_guHxICN7woVYoN5NP_22ra-BIo4bqnTT9FR6fB-Ku2P0AoRpX0Ds-LRkDeAoD8F/pub?start=false&amp;loop=false&amp;delayms=60000" target="_blank">
                Контент
              </a></li><li class="tm-footer-menu__list-item"><a href="https://tmtm.timepad.ru/" target="_blank">
                Семинары
              </a></li><li class="tm-footer-menu__list-item"><a href="https://habr.com/ru/megaprojects/" class="footer-menu__item-link">
                Мегапроекты
              </a></li></ul></div></div></div></div></div> <div class="tm-footer"><div class="tm-page-width"><div class="tm-footer__container"><!----> <div class="tm-footer__social"><a href="https://www.facebook.com/habrahabr.ru" rel="nofollow noopener noreferrer" target="_blank" class="tm-svg-icon__wrapper tm-social-icons__icon"><svg height="16" width="16" class="tm-svg-img tm-svg-icon"><title>Facebook</title> <use xlink:href="/img/social-icons-sprite.svg#social-logo-facebook"></use></svg></a><a href="https://twitter.com/habr_com" rel="nofollow noopener noreferrer" target="_blank" class="tm-svg-icon__wrapper tm-social-icons__icon"><svg height="16" width="16" class="tm-svg-img tm-svg-icon"><title>Twitter</title> <use xlink:href="/img/social-icons-sprite.svg#social-logo-twitter"></use></svg></a><a href="https://vk.com/habr" rel="nofollow noopener noreferrer" target="_blank" class="tm-svg-icon__wrapper tm-social-icons__icon"><svg height="16" width="16" class="tm-svg-img tm-svg-icon"><title>VK</title> <use xlink:href="/img/social-icons-sprite.svg#social-logo-vkontakte"></use></svg></a><a href="https://telegram.me/habr_com" rel="nofollow noopener noreferrer" target="_blank" class="tm-svg-icon__wrapper tm-social-icons__icon"><svg height="16" width="16" class="tm-svg-img tm-svg-icon"><title>Telegram</title> <use xlink:href="/img/social-icons-sprite.svg#social-logo-telegram"></use></svg></a><a href="https://www.youtube.com/channel/UCd_sTwKqVrweTt4oAKY5y4w" rel="nofollow noopener noreferrer" target="_blank" class="tm-svg-icon__wrapper tm-social-icons__icon"><svg height="16" width="16" class="tm-svg-img tm-svg-icon"><title>Youtube</title> <use xlink:href="/img/social-icons-sprite.svg#social-logo-youtube"></use></svg></a><a href="https://zen.yandex.ru/habr" rel="nofollow noopener noreferrer" target="_blank" class="tm-svg-icon__wrapper tm-social-icons__icon"><svg height="16" width="16" class="tm-svg-img tm-svg-icon"><title>Яндекс Дзен</title> <use xlink:href="/img/social-icons-sprite.svg#social-logo-zen"></use></svg></a></div> <div class="v-portal" style="display:none;"></div> <button class="tm-footer__link"><!---->
        Настройка языка
      </button> <a href="https://habr.com/ru/about" class="tm-footer__link">
        О сайте
      </a> <a href="https://habr.com/ru/feedback/" class="tm-footer__link">
        Техническая поддержка
      </a> <!----> <a href="https://habr.com/berserk-mode-nope" class="tm-footer__link">
        Вернуться на старую версию
      </a> <div class="tm-footer-copyright"><span class="tm-copyright"><span class="tm-copyright__years">© 2006–2022 </span> <span class="tm-copyright__name">«<a href="https://company.habr.com/" rel="noopener" target="_blank" class="tm-copyright__link">Habr</a>»</span></span></div></div></div></div> <!----> <!----></div> <div class="vue-portal-target"><!----></div></div>

<script src="/Writing%20billion%20songs%20with%20C%23%20and%20Deep%20Learning_files/chunk-vendors.js" defer="defer"></script><script src="/Writing%20billion%20songs%20with%20C%23%20and%20Deep%20Learning_files/page-user.js" defer="defer"></script><script src="/Writing%20billion%20songs%20with%20C%23%20and%20Deep%20Learning_files/app.js" defer="defer"></script>



    <script async="" src="/Writing%20billion%20songs%20with%20C%23%20and%20Deep%20Learning_files/js"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    </script>
  
  <script type="text/javascript">
    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

    ym(24049213, "init", {
      defer:true,
      trackLinks:true,
      accurateTrackBounce:true,
      webvisor:false,
    });
  </script>
  <noscript>
    <div>
      <img src="https://mc.yandex.ru/watch/24049213" style="position:absolute; left:-9999px;" alt="" />
    </div>
  </noscript>
  
    <script type="text/javascript">
      window.addEventListener('load', function () {
        setTimeout(() => {
          const img = new Image();
          img.src = 'https://vk.com/rtrg?p=VK-RTRG-421343-57vKE';
        }, 0);
      });
    </script>
  
<script src="/Writing%20billion%20songs%20with%20C%23%20and%20Deep%20Learning_files/ads.js" onload="window['zhY4i4nJ9K'] = true"></script><div id="K9Jn4i4Yhz" style="display: none;"></div>


<div><div><div class="Vue-Toastification__container top-left"></div></div><div><div class="Vue-Toastification__container top-center"></div></div><div><div class="Vue-Toastification__container top-right"></div></div><div><div class="Vue-Toastification__container bottom-left"></div></div><div><div class="Vue-Toastification__container bottom-center"></div></div><div><div class="Vue-Toastification__container bottom-right"></div></div></div></body><div id="saka-gui-root" style="border-block: unset; border-inline: unset; border-start-start-radius: unset; border-start-end-radius: unset; border-end-start-radius: unset; border-end-end-radius: unset; overflow-inline: unset; overflow-block: unset; overscroll-behavior-inline: unset; overscroll-behavior-block: unset; margin-block: unset; margin-inline: unset; scroll-margin-block: unset; scroll-margin-inline: unset; padding-block: unset; padding-inline: unset; scroll-padding-block: unset; scroll-padding-inline: unset; inset-block: unset; inset-inline: unset; block-size: unset; min-block-size: unset; max-block-size: unset; inline-size: unset; min-inline-size: unset; max-inline-size: unset; background-image: unset; background-position: unset; background-repeat: unset; background-attachment: unset; background-clip: unset; background-origin: unset; background-size: unset; background-blend-mode: unset; border: unset; border-radius: unset; box-decoration-break: unset; -moz-float-edge: unset; display: unset; float: unset; clear: unset; vertical-align: unset; overflow: unset; overflow-anchor: unset; transition: unset; animation: unset; transform: unset; rotate: unset; scale: unset; translate: unset; offset: unset; scroll-behavior: unset; scroll-snap-align: unset; scroll-snap-type: unset; overscroll-behavior: unset; isolation: unset; break-after: unset; break-before: unset; break-inside: unset; resize: unset; perspective: unset; perspective-origin: unset; backface-visibility: unset; transform-box: unset; transform-style: unset; transform-origin: unset; contain: unset; appearance: unset; -moz-orient: unset; will-change: unset; shape-image-threshold: unset; shape-margin: unset; shape-outside: unset; touch-action: unset; -webkit-line-clamp: unset; scrollbar-gutter: unset; columns: unset; column-fill: unset; column-rule: unset; column-span: unset; content: unset; counter-increment: unset; counter-reset: unset; counter-set: unset; box-shadow: unset; clip: unset; filter: unset; mix-blend-mode: unset; font: unset; font-synthesis: unset; visibility: unset; writing-mode: unset; text-orientation: unset; print-color-adjust: unset; image-rendering: unset; image-orientation: unset; dominant-baseline: unset; text-anchor: unset; color-interpolation: unset; color-interpolation-filters: unset; fill: unset; fill-opacity: unset; fill-rule: unset; shape-rendering: unset; stroke: unset; stroke-width: unset; stroke-linecap: unset; stroke-linejoin: unset; stroke-miterlimit: unset; stroke-opacity: unset; stroke-dasharray: unset; stroke-dashoffset: unset; clip-rule: unset; marker: unset; paint-order: unset; border-collapse: unset; empty-cells: unset; caption-side: unset; border-spacing: unset; color: unset; text-transform: unset; hyphens: unset; -moz-text-size-adjust: unset; text-indent: unset; overflow-wrap: unset; word-break: unset; text-justify: unset; text-align-last: unset; text-align: unset; letter-spacing: unset; word-spacing: unset; white-space: unset; text-shadow: unset; text-emphasis: unset; text-emphasis-position: unset; tab-size: unset; line-break: unset; -webkit-text-fill-color: unset; -webkit-text-stroke: unset; ruby-align: unset; ruby-position: unset; text-combine-upright: unset; text-rendering: unset; text-underline-offset: unset; text-underline-position: unset; text-decoration-skip-ink: unset; hyphenate-character: unset; cursor: unset; -moz-user-input: unset; -moz-user-modify: unset; -moz-user-focus: unset; caret-color: unset; accent-color: unset; color-scheme: unset; scrollbar-color: unset; list-style: unset; quotes: unset; -moz-image-region: unset; margin: unset; scroll-margin: unset; outline: unset; outline-offset: unset; size: unset; padding: unset; scroll-padding: unset; right: unset; bottom: unset; flex-flow: unset; place-content: unset; place-items: unset; flex: unset; place-self: unset; order: unset; min-width: unset; max-width: unset; min-height: unset; max-height: unset; box-sizing: unset; object-fit: unset; object-position: unset; grid-area: unset; grid: unset; gap: unset; aspect-ratio: unset; vector-effect: unset; stop-color: unset; stop-opacity: unset; flood-color: unset; flood-opacity: unset; lighting-color: unset; mask-type: unset; clip-path: unset; mask: unset; x: unset; y: unset; cx: unset; cy: unset; rx: unset; ry: unset; r: unset; d: unset; table-layout: unset; text-overflow: unset; text-decoration: unset; ime-mode: unset; scrollbar-width: unset; user-select: unset; -moz-window-dragging: unset; -moz-force-broken-image-icon: unset; -moz-box-align: unset; -moz-box-direction: unset; -moz-box-flex: unset; -moz-box-orient: unset; -moz-box-pack: unset; -moz-box-ordinal-group: unset; position: absolute; left: 0px; top: 0px; width: 100%; height: 100%; z-index: 2147483647; opacity: 1; background-color: transparent; pointer-events: none;"><div><div><div style="position: absolute; left: 0px; top: 0px;"></div><style>
@font-face {
  font-family: Roboto; -moz-osx-font-smoothing: grayscale; -webkit-font-smoothing: antialiased;
  font-style: normal; font-weight: normal; src: url(moz-extension://7209a906-8b29-41f8-aa3f-f7a4072be632/Roboto-Regular.ttf) format('ttf');
}
.saka-hint-body {
  all: initial;
position: absolute;
z-index: 2147483647;
opacity: 1;
font-family: Roboto, sans-serif;
font-weight: 900;
padding: 0.15rem 0.25rem;
border: 0px solid;
text-align: center;
text-decoration: none;
text-transform: uppercase;
vertical-align: middle;
font-size: 12px;
color: #3f51F5;
background-color: #ffffff;
border-color: #ffffff;
box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
border-radius: 4px;
transform: translate3d(0%, -50%, 0)
}
.saka-hint-normal-char {
  
}
.saka-hint-active-char {
  opacity: 0.5
}</style></div></div></div></html>