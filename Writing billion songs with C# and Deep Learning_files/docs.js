(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["docs"],{"1aee":function(t,e,a){},8982:function(t,e,a){"use strict";a("1aee")},"98b3":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tm-style-html",domProps:{innerHTML:t._s(t.html)}})},i=[],n={name:"TMStyleHtml",props:{html:{type:String,required:!0}}},r=n,o=(a("ed26"),a("2877")),l=Object(o["a"])(r,s,i,!1,null,null,null);e["a"]=l.exports},e192:function(t,e,a){},ed26:function(t,e,a){"use strict";a("e192")},fbb3:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("TMPage",{scopedSlots:t._u([{key:"default",fn:function(){return[a("div",{staticClass:"tm-page__header"},[t.loading.main?a("TMPlaceholder",{attrs:{type:"static_section_name"}}):a("TMSectionName",{attrs:{name:t.msg("NAV_DOCS_MAIN")}}),t._v(" "),t.loading.main?a("TMPlaceholder",{attrs:{type:"static_tabs"}}):a("TMTabs",{attrs:{exact:"",tabs:t.getTabs}}),t._v(" "),t.loading.dropdown?a("TMPlaceholder",{attrs:{type:"static_dropdown"}}):t.getNavigationOptions&&t.isMobile?a("TMNavigationDropdown",{attrs:{"current-value":t.getAlias,options:t.getNavigationOptions},on:{change:t.goToPage}}):a("div")],1),t._v(" "),t.loading.article?a("TMPlaceholder",{attrs:{type:"static_article"}}):t._e(),t._v(" "),t.getArticle?a("div",{staticClass:"tm-page__info",domProps:{innerHTML:t._s(t.getArticle.content)}}):t._e()]},proxy:!0},{key:"sidebar",fn:function(){return[t.isDesktop&&t.getNavigationOptions&&t.getNavigationOptions.length?a("TMLayoutSidebar",{attrs:{"show-adv":!1}},[a("TMBlock",{attrs:{title:t.msg("NAV_SECTIONS")}},t._l(t.getNavigationOptions,(function(e){return a("router-link",{key:e.value,staticClass:"tm-docs__link_sidebar",attrs:{"active-class":"tm-docs__link_sidebar_active",to:t.getArticleRoute({alias:e.value})}},[t._v("\n          "+t._s(e.label)+"\n        ")])})),1)],1):t._e()]},proxy:!0}])})},i=[],n=a("2f62"),r=a("19d1"),o=a("0272"),l=a("5b53"),c=a("ff3c"),u=a("5188"),m=a("2517"),p=a("98b3"),d=a("b92c"),g=a("32f0"),h={components:{TMBlock:r["a"],TMLayoutSidebar:o["a"],TMPage:c["a"],TMPlaceholder:u["a"],TMSectionName:m["a"],TMTabs:d["a"],TMNavigationDropdown:l["a"],TMStyleHtml:p["a"]},asyncData({store:t,route:e}){const{alias:a,articleAlias:s}=e.params;return Promise.all([t.dispatch("docs/getMainMenu"),t.dispatch("docs/getDropdownList",{alias:a}),t.dispatch("docs/getArticle",{alias:a,articleAlias:s})])},computed:{...Object(n["e"])("docs",["mainMenu","loading"]),...Object(n["c"])("docs",["getMenuByAlias","getArticleByAlias"]),...Object(n["c"])("i18n",["langOptions","msg"]),...Object(n["c"])("global",["isMobile","isDesktop"]),menuAlias(){const t=this.getFilteredDocsItems(this.mainMenu);return this.getCorrectSortedMenuItems(t)[0]},getMenu(){const{alias:t}=this.$route.params;return this.getMenuByAlias(t||this.menuAlias)},getArticle(){return this.getArticleByAlias(this.$route.params)},getTabs(){return this.mainMenu.map(t=>({title:t.name,route:this.getMenuRoute(t)}))},getNavigationOptions(){return this.getMenu&&this.getMenu.map(t=>({label:t.name,value:t.alias}))},getAlias(){const{articleAlias:t}=this.$route.params;return t}},beforeMount(){this.dataPromise.then(()=>{const{alias:t}=this.$route.params;t||this.$router.replace({name:"DOCS",params:{alias:this.menuAlias}})}).then(()=>{const{alias:t}=this.$route.params;let{articleAlias:e}=this.$route.params;if(!e){const a=this.getMenuByAlias(t);e=a[0].alias,this.$router.replace({name:"DOCS_ARTICLE",params:{articleAlias:e,alias:t}})}})},methods:{getArticleRoute({alias:t}){const e=this.$route.params.alias;return{name:"DOCS_ARTICLE",params:{articleAlias:t,alias:e}}},getMenuRoute({alias:t}){return{name:"DOCS",params:{alias:t}}},getFilteredDocsItems(t){const e=/authors|companies|docs|help/g;return t.map(t=>t.alias).filter(t=>-1!==t.search(e))},getCorrectSortedMenuItems(t){const e=["help","authors","companies","docs"];return t.sort((t,a)=>e.indexOf(t)-e.indexOf(a))},goToPage({value:t}){const e=this.getArticleRoute({alias:t});this.$router.push(e)}},metaInfo(){const{alias:t}=this.$route.params,{name:e,description:a}=this.getArticle||{},{name:s}=this.mainMenu.find(({alias:e})=>e===t)||{};return{title:[e,s].filter(Boolean).join(" / "),meta:[{name:"description",content:a?Object(g["b"])(a):null,vmid:"description"}]}}},M=h,_=(a("8982"),a("2877")),b=Object(_["a"])(M,s,i,!1,null,null,null);e["default"]=b.exports}}]);
//# sourceMappingURL=docs.9d448618.js.map