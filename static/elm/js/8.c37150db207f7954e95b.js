webpackJsonp([8],{"7taD":function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=i("c2Ch"),e=(i("txPn"),{components:{shopList:function(){return i.e(12).then(i.bind(null,"bi4O"))}},data:function(){return{isShow:!1,indexlist:[]}},created:function(){var t=this;n.a.getlist("/indexlist").then(function(s){t.indexlist=s.list,console.log(s.list)})},mounted:function(){window.onscroll=function(){window.scrollY>=62?t.isShow=!0:window.scrollY<62&&(t.isShow=!1)};var t=this},methods:{goback:function(){window.history.length>1?this.$router.go(-1):this.$router.push("/")}}}),o={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"new-user"},[i("header",[i("div",{on:{click:function(s){t.goback()}}},[i("i",{staticClass:"fas fa-chevron-left"})]),t._v(" "),i("h3",{class:{show:t.isShow}},[t._v("新用户专区")])]),t._v(" "),t._m(0),t._v(" "),i("div",{staticClass:"shoplist"},[i("div",{staticClass:"shoplist-title"},[t._v("\n        首单最高立减30\n      ")]),t._v(" "),i("shop-list",{attrs:{list:t.indexlist}})],1)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"banner"},[s("div",{staticClass:"login-show"},[s("p",[this._v("先领红包再消费，优惠多多")]),this._v(" "),s("div",[this._v("登陆领取")])])])}]};var l=i("VU/8")(e,o,!1,function(t){i("Bm1a")},"data-v-03fc5f2b",null);s.default=l.exports},Bm1a:function(t,s){}});
//# sourceMappingURL=8.c37150db207f7954e95b.js.map