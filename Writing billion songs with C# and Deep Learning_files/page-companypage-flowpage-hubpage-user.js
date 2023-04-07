(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-company~page-flow~page-hub~page-user"],{4924:function(t,s,i){"use strict";var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"tm-user-snippet"},[i("router-link",{staticClass:"tm-user-snippet__userpic-link",attrs:{to:t.userProfileRoute}},[i("TMEntityImage",{attrs:{alias:t.user.alias,image:t.user.avatarUrl,type:"user"}})],1),t._v(" "),i("div",{staticClass:"tm-user-snippet__info"},[i("router-link",{staticClass:"tm-user-snippet__title",attrs:{to:t.userProfileRoute},domProps:{innerHTML:t._s(t.user.fullname)}}),t._v(" "),t.user.alias?i("router-link",{staticClass:"tm-user-snippet__nickname",attrs:{to:t.userProfileRoute}},[t._v("\n      @"+t._s(t.user.alias)+"\n    ")]):t._e(),t._v(" "),i("div",{staticClass:"tm-user-snippet__description"},[t._v("\n      "+t._s(t.user.speciality||t.msg("USER"))+"\n    ")]),t._v(" "),t.isDesktop&&t.showLastPost&&t.user.lastPost?i("div",{staticClass:"tm-user-snippet__last-post"},[i("router-link",{staticClass:"tm-user-snippet__last-post-link",attrs:{to:t.lastPostRoute},domProps:{innerHTML:t._s(t.user.lastPost.titleHtml)}}),t._v(" "),i("TMDatetime",{staticClass:"tm-user-snippet__last-post-datetime",attrs:{date:new Date(t.user.lastPost.timePublished),"show-full-date-time":""}})],1):t._e()],1)],1)},r=[],n=i("2f62"),o=i("8fab"),a=i("2e8a"),l=i("d7b7"),u=i("9f2e"),c={name:"TMUserSnippet",components:{TMDatetime:o["a"],TMEntityImage:a["a"]},props:{user:l["a"],showLastPost:Boolean},computed:{...Object(n["c"])("global",["isDesktop"]),userProfileRoute(){return{name:"USER_PROFILE",params:{login:this.user.alias,hl:this.$route.params.hl}}},lastPostRoute(){return Object(u["b"])(this.user.lastPost,this.$route.params.hl)}}},_=c,m=(i("f8fd"),i("2877")),g=Object(m["a"])(_,e,r,!1,null,null,null);s["a"]=g.exports},"4dbb":function(t,s,i){},5943:function(t,s,i){"use strict";i("4dbb")},"60ca":function(t,s,i){},"61d5":function(t,s,i){"use strict";i("d9ce")},"78d8":function(t,s,i){},"7ffa":function(t,s,i){},"85b6":function(t,s,i){"use strict";i("78d8")},"86f6":function(t,s,i){"use strict";var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"tm-navigation-sorting"},[t.isDesktop?t._l(t.options,(function(s){return i("div",{key:s.id,staticClass:"tm-navigation-sorting__row-option",class:{"tm-navigation-sorting__row-option_active":t.currentSort===s.id,"tm-navigation-sorting__row-option_sortable":s.isSortable},style:{minWidth:s.width},on:{click:function(i){return t.setSorting(s,i)}}},[t._v("\n      "+t._s(s.label)+"\n\n      "),s.isSortable?i("TMSvgImg",{staticClass:"tm-navigation-sorting__arrow",class:{"tm-navigation-sorting__arrow_desc":t.currentSort===s.id&&"desc"===t.currentOrder,"tm-navigation-sorting__arrow_asc":t.currentSort===s.id&&"asc"===t.currentOrder},attrs:{id:"sorting-down"}}):t._e()],1)})):t._e(),t._v(" "),t.isMobile?[i("button",{directives:[{name:"hotkey",rawName:"v-hotkey",value:{esc:t.closeOptions},expression:"{ 'esc': closeOptions }"}],ref:"button",staticClass:"tm-navigation-sorting__button",on:{click:t.toggleOptions}},[i("span",{staticClass:"tm-navigation-sorting__title"},[t._v("\n        "+t._s(t.title)+"\n        "),i("TMSvgImg",{staticClass:"tm-navigation-sorting__arrow",class:{"tm-navigation-sorting__arrow_desc":"desc"===t.orderTitle,"tm-navigation-sorting__arrow_asc":"asc"===t.orderTitle},attrs:{id:"sorting-down"}})],1),t._v(" "),i("TMSvgImg",{staticClass:"icon_dropdown-arrow",class:{"icon_dropdown-arrow-rotated":t.optionsVisible},attrs:{id:"arrow-down"}})],1),t._v(" "),i("div",{ref:"options",staticClass:"tm-navigation-sorting__options",style:t.getStyles},[t.$slots["categoriesFilter"]?[i("div",{staticClass:"tm-navigation-sorting__list-label"},[t._v("\n          "+t._s(t.msg("NAV_SORTING_CATEGORIES"))+"\n        ")]),t._v(" "),t._t("categoriesFilter")]:t._e(),t._v(" "),i("div",{staticClass:"tm-navigation-sorting__list-label"},[t._v("\n        "+t._s(t.msg("NAV_SORTING_SORTBY"))+"\n      ")]),t._v(" "),i("ul",{staticClass:"tm-navigation-sorting__list"},t._l(t.options,(function(s){return i("li",{key:s.label,staticClass:"tm-navigation-sorting__option",class:{"tm-navigation-sorting__option_active":t.currentSort===s.id},on:{click:function(i){t.currentSort=s.id}}},[t._v("\n          "+t._s(s.label)+"\n        ")])})),0),t._v(" "),i("div",{staticClass:"tm-navigation-sorting__list-label"},[t._v("\n        "+t._s(t.msg("NAV_SORTING_SHOW"))+"\n      ")]),t._v(" "),i("ul",{staticClass:"tm-navigation-sorting__list"},[i("li",{staticClass:"tm-navigation-sorting__option tm-navigation-sorting__option_icon",class:{"tm-navigation-sorting__option_active":"asc"===t.currentOrder},on:{click:function(s){t.currentOrder="asc"}}},[i("TMSvgImg",{staticClass:"tm-navigation-sorting__arrow tm-navigation-sorting__arrow_asc",attrs:{id:"sorting-down"}})],1),t._v(" "),i("li",{staticClass:"tm-navigation-sorting__option tm-navigation-sorting__option_icon",class:{"tm-navigation-sorting__option_active":"desc"===t.currentOrder},on:{click:function(s){t.currentOrder="desc"}}},[i("TMSvgImg",{staticClass:"tm-navigation-sorting__arrow tm-navigation-sorting__arrow_desc",attrs:{id:"sorting-down"}})],1)]),t._v(" "),i("TMButtonBase",{staticClass:"tm-navigation-sorting__apply",attrs:{"style-size":"small","style-type":"solid",type:"button"},on:{click:t.applySortingFilter}},[t._v("\n        "+t._s(t.msg("NAV_APPLY"))+"\n      ")])],2)]:t._e()],2)},r=[],n=i("2f62"),o=i("884d"),a=i("b7d0"),l={name:"TMNavigationSorting",components:{TMSvgImg:a["a"],TMButtonBase:o["a"]},props:{options:{type:Array,required:!0},sort:{type:String,default:null},order:{type:String,default:"desc"}},data(){return{optionsVisible:!1,currentSort:this.$route.query.sort||this.sort,currentOrder:this.$route.query.order||this.order}},computed:{...Object(n["c"])("global",["isMobile","isDesktop"]),title(){const t=this.options.findIndex(t=>t.id===this.currentSort);return this.options[t].title},orderTitle(){return this.$route.query.order},getStyles(){return this.optionsVisible&&this.maxHeightStyles},reversedOrder(){return"asc"===this.currentOrder?"desc":"asc"}},methods:{toggleOptions(){this.maxHeightStyles=`max-height: ${this.$refs.options.scrollHeight}px`,this.optionsVisible=!this.optionsVisible},closeOptions(){this.optionsVisible=!1},setSorting(t,s){return s&&!t.isSortable?s.preventDefault():this.$router.push({...this.$route,query:{sort:t.id,order:this.currentSort===t.id?this.reversedOrder:"desc"}})},applySortingFilter(){this.$router.push({...this.$route,query:{sort:this.currentSort,order:this.currentOrder}})}}},u=l,c=(i("9d3f"),i("2877")),_=Object(c["a"])(u,e,r,!1,null,null,null);s["a"]=_.exports},"8db0":function(t,s,i){"use strict";var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("div",{staticClass:"tm-users-list__sorting-panel"},[t.isDesktop&&t.sortingOptions.length&&t.currentAuthorList.length?i("TMNavigationSorting",{attrs:{options:t.sortingOptions,sort:t.defaultSort}}):t._e()],1),t._v(" "),t.isLoading?i("TMPlaceholder",{staticClass:"tm-users-list__placeholder",attrs:{times:7,type:"categories"}}):[t.showEmptyPlaceholder?i("TMEmptyPlaceholder",[t._t("empty",(function(){return[i("span",{domProps:{textContent:t._s(t.msg("USERS_EMPTY"))}})]}))],2):t._e(),t._v(" "),t.showEmptyPlaceholder?t._e():[i("div",{staticClass:"tm-users-list"},t._l(t.currentAuthorList,(function(s){return i("div",{key:s,staticClass:"tm-users-list__item"},[i("div",{staticClass:"tm-users-list__user-wrapper"},[i("TMUserSnippet",{attrs:{"show-last-post":"",user:t.currentAuthor(s)}})],1),t._v(" "),i("div",{staticClass:"tm-users-list__score-counters"},[t.contributionTable?t._e():i("span",{staticClass:"tm-users-list__score-counter tm-users-list__score-counter_rating"},[t.isMobile?i("TMSvgImg",{staticClass:"tm-users-list__icon tm-users-list__icon_rating",attrs:{id:"rating"}}):t._e(),t._v("\n              "+t._s(t.currentAuthor(s).rating)+"\n            ")],1),t._v(" "),t.contributionTable?t._e():i("span",{staticClass:"tm-users-list__score-counter tm-users-list__score-counter_karma",class:t.karmaClass(t.currentAuthor(s).scoreStats.score)},[t.isMobile?i("TMSvgImg",{staticClass:"tm-users-list__icon tm-users-list__icon_karma",attrs:{id:"karma"}}):t._e(),t._v("\n              "+t._s(t.currentAuthor(s).scoreStats.score)+"\n            ")],1),t._v(" "),t.contributionTable?i("span",{staticClass:"tm-users-list__score-counter tm-users-list__score-counter_contribution"},[t.isMobile?i("TMSvgImg",{staticClass:"tm-users-list__icon tm-users-list__icon_contribution",attrs:{id:"contribution"}}):t._e(),t._v("\n              "+t._s(t.abbreviateNumber(t.currentAuthor(s).invest))+"\n            ")],1):t._e()])])})),0),t._v(" "),t.currentPagesCount&&t.currentPagesCount>0?i("TMPagination",{attrs:{"route-name":t.paginationRouteName,"total-pages":t.currentPagesCount}}):t._e()]]],2)},r=[],n=i("2f62"),o=i("6833"),a=i("2e8a"),l=i("86f6"),u=i("57fc"),c=i("5188"),_=i("b7d0"),m=i("4924"),g=i("6be8"),d={name:"TMUsersList",components:{TMEntityImage:a["a"],TMEmptyPlaceholder:o["a"],TMNavigationSorting:l["a"],TMPagination:u["a"],TMPlaceholder:c["a"],TMSvgImg:_["a"],TMUserSnippet:m["a"]},props:{currentAuthorList:{type:Array,default:()=>[]},authorRefs:{type:Object,default:()=>{}},currentPagesCount:{type:Number,default:0},sortingOptions:{type:Array,default:()=>[]},defaultSort:{type:String,default:"rating"},contributionTable:Boolean,isLoading:Boolean},data(){return{categoryType:"user"}},computed:{...Object(n["c"])("i18n",["msg"]),...Object(n["c"])("global",["isMobile","isDesktop"]),paginationRouteName(){const t=-1!==this.$route.name.indexOf("_PAGES");return t?this.$route.name:this.$route.name+"_PAGES"},showEmptyPlaceholder(){return this.currentAuthorList&&!this.currentAuthorList.length||!this.currentAuthorList}},methods:{currentAuthor(t){return this.authorRefs[t]},abbreviateNumber(t){return Object(g["a"])(t)},karmaClass(t){return t>0?"tm-users-list__score-counter_karma-positive":t<0?"tm-users-list__score-counter_karma-negative":"tm-users-list__score-counter_karma-neutral"}}},p=d,v=(i("5943"),i("2877")),b=Object(v["a"])(p,e,r,!1,null,null,null);s["a"]=b.exports},"9d3f":function(t,s,i){"use strict";i("7ffa")},d98f:function(t,s,i){"use strict";var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"tm-sub-page"},[i("div",{staticClass:"tm-sub-page__main"},[t._t("default")],2),t._v(" "),t.hasSidebarSlot?i("div",{staticClass:"tm-sub-page__sidebar"},[t._t("sidebar")],2):t._e()])},r=[],n={name:"TMSubPage",computed:{hasSidebarSlot(){return!!this.$slots.sidebar}}},o=n,a=(i("61d5"),i("2877")),l=Object(a["a"])(o,e,r,!1,null,null,null);s["a"]=l.exports},d9ce:function(t,s,i){},db31:function(t,s,i){"use strict";var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("ul",{staticClass:"tm-contribution-list"},t._l(t.contributions,(function(s){return i("li",{key:s.id,staticClass:"tm-contribution-list__item"},[i("aside",{staticClass:"tm-contribution-list__aside"},[t._t("aside",null,{item:s})],2),t._v(" "),i("div",{staticClass:"tm-contribution-list__main"},[i("header",{staticClass:"tm-contribution-list__header"},[t._t("header",null,{item:s}),t._v(" "),i("div",{staticClass:"tm-contribution-list__contribution"},[t._v("\n          "+t._s(s.absolute)+"\n        ")])],2),t._v(" "),i("div",{staticClass:"tm-contribution-list__progress-bar"},[i("div",{staticClass:"tm-contribution-list__progress",style:{width:s.relative+"%"}})])])])})),0)},r=[],n={name:"TMContributionList",props:{contributions:{type:Array,required:!0}}},o=n,a=(i("85b6"),i("2877")),l=Object(a["a"])(o,e,r,!1,null,null,null);s["a"]=l.exports},f8fd:function(t,s,i){"use strict";i("60ca")}}]);
//# sourceMappingURL=page-company~page-flow~page-hub~page-user.63863346.js.map