webpackJsonp([4],{D3L4:function(t,s){},"uia/":function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i("Dd8w"),a=i.n(e),n=i("NYxO"),c={components:{},data:function(){return{selected:1,isShow:!1,isfixed:!1,isScroll:!1,main1:!0,main2:!1,main3:!1}},computed:a()({},Object(n.d)(["shopList","order","logined"]),Object(n.b)(["cartList","cartNumber","cartPrice","cartTotal"])),created:function(){this.$store.dispatch("getShop"),this.$store.commit("INIT_CART")},mounted:function(){var t=this;window.onscroll=function(s){return t.height()}},methods:{add:function(t){t.buynum++,this.$store.commit("SET_CART",t)},red:function(t){t.buynum>0&&(t.buynum--,this.$store.commit("SET_CART_OUT",t))},setOrder:function(){this.logined?this.cartNumber?(this.$store.commit("SET_ORDER",this.cartTotal),this.$store.commit("INIT_CART"),this.$router.push("/order")):alert("请选择商品！"):(alert("请登陆"),this.$router.push("/login"))},goback:function(){window.history.length>1?this.$router.go(-1):this.$router.push("/")},show:function(){this.isShow=!this.isShow},height:function(){var t=this.$refs.main;t&&(t.offsetTop-window.scrollY<=0?(this.isfixed=!0,this.isScroll=!0):(this.isfixed=!1,this.isScroll=!1))},mouse:function(){var t=this.$refs.mouse.scrollTop,s=window.event;s.wheelDelta?0==t&&s.wheelDelta>0&&(this.isfixed=!1,this.isScroll=!1):s.detail&&0==t&&s.detail>0&&(this.isfixed=!1,this.isScroll=!1)},selected1:function(){this.main1=!0,this.main2=!1,this.main3=!1},selected2:function(){this.main1=!1,this.main2=!0,this.main3=!1},selected3:function(){this.main1=!1,this.main2=!1,this.main3=!0}}},o={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"shop"},[i("header",[i("nav",[i("router-link",{attrs:{to:"/"}},[i("i",{staticClass:"fas fa-chevron-left"})])],1),t._v(" "),i("div",{staticClass:"header-wrap"},[i("img",{attrs:{src:"",alt:""}}),t._v(" "),t._m(0),t._v(" "),i("div",{staticClass:"bottom-item-bottom",class:{"bottom-item-bottom-click":t.isShow}},[i("div",{staticClass:"item-number",on:{click:function(s){t.show()}}},[t._v("\n                      共5个活动 "),i("i",{staticClass:"fas fa-caret-down"})]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7)])])]),t._v(" "),i("div",{ref:"main",staticClass:"main",class:{"main-fixed":t.isfixed}},[i("div",{staticClass:"main-select"},[i("div",{staticClass:"main-select-button",class:{selected:t.main1},on:{click:function(s){t.selected1()}}},[i("span",[t._v("点餐")])]),t._v(" "),i("div",{staticClass:"main-select-button",class:{selected:t.main2},on:{click:function(s){t.selected2()}}},[i("span",[t._v("评价")])]),t._v(" "),i("div",{staticClass:"main-select-button",class:{selected:t.main3},on:{click:function(s){t.selected3()}}},[i("span",[t._v("商家")])])]),t._v(" "),i("div",{staticClass:"main-show"},[t.main1?i("div",{staticClass:"shoplist"},[i("div",{staticClass:"shoplist-class"},t._l(t.shopList,function(s,e){return i("a",{key:e,attrs:{href:"#"+s.id}},[i("span",[t._v(t._s(s.title))]),t._v(" "),i("span",[t._v(t._s(s.list.length))])])})),t._v(" "),i("div",{ref:"mouse",staticClass:"shoplist-item",class:{"shoplist-item-scroll":t.isScroll},on:{mousewheel:function(s){t.mouse()}}},t._l(t.shopList,function(s,e){return i("div",{key:e,staticClass:"shoplist-item-wrap"},[i("a",{staticClass:"class-title",attrs:{id:s.id}},[t._v(t._s(s.title))]),t._v(" "),t._l(s.list,function(s,e){return i("div",{key:e,staticClass:"list-item"},[i("img",{attrs:{src:s.pic,alt:""}}),t._v(" "),i("div",{staticClass:"list-item-wrap"},[i("h3",[t._v(t._s(s.title))]),t._v(" "),i("p",[t._v("月售"+t._s(s.number)+"份 好评率"+t._s(s.good)+"%")]),t._v(" "),i("p",[t._v(t._s(s.price))]),t._v(" "),i("div",{staticClass:"buy-number"},[i("button",{attrs:{type:"button",name:"button"},on:{click:function(i){t.add(s)}}},[t._v("+")]),t._v(" "),i("div",{staticClass:"num",attrs:{id:"numChange"}},[t._v(t._s(s.buynum))]),t._v(" "),i("button",{attrs:{type:"button",name:"button"},on:{click:function(i){t.red(s)}}},[t._v("-")])])])])})],2)}))]):t._e(),t._v(" "),t.main2?i("div",[t._v("222")]):t._e(),t._v(" "),t.main3?i("div",[t._v("3333")]):t._e()])]),t._v(" "),i("footer",[i("div",{staticClass:"car-wrap"},[i("div",{staticClass:"car"},[i("i",{staticClass:"fas fa-cart-plus"}),t._v(" "),t.cartNumber>0?i("span",{staticClass:"carnum"},[t._v(t._s(t.cartNumber))]):t._e()])]),t._v(" "),t.cartNumber>0?i("div",{staticClass:"total"},[t._v(t._s(t.cartPrice))]):t._e(),t._v(" "),i("div",{staticClass:"sub",on:{click:t.setOrder}},[t._v("生成订单")])])])},staticRenderFns:[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"header-item"},[i("h2",[t._v("苏丹皇宫是倒过来看")]),t._v(" "),i("div",[i("span",[t._v("4.4")]),i("span",[t._v("月售45单")]),t._v(" "),i("span",[t._v("蜂鸟转送")])]),t._v(" "),i("p",[t._v("欢迎光临，用餐高峰期请提前下单，谢谢。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"bottom-item-item"},[s("span",{staticClass:"green red"},[this._v("首")]),s("span",[this._v("啊施工啊十分罕见")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"bottom-item-item"},[s("span",{staticClass:"red"},[this._v("折")]),s("span",[this._v("啊施工啊十分罕见")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"bottom-item-item"},[s("span",{staticClass:"red"},[this._v("减")]),s("span",[this._v("啊施工啊十分罕见")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"bottom-item-item"},[s("span",{staticClass:"red"},[this._v("特")]),s("span",[this._v("啊施工啊十分罕见")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"bottom-item-item"},[s("span",{staticClass:"red"},[this._v("折")]),s("span",[this._v("啊施工啊十分罕见")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"bottom-item-item"},[s("span",{staticClass:"red"},[this._v("减")]),s("span",[this._v("啊施工啊十分罕见")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"bottom-item-item"},[s("span",{staticClass:"red"},[this._v("特")]),s("span",[this._v("啊施工啊十分罕见")])])}]};var r=i("VU/8")(c,o,!1,function(t){i("D3L4")},"data-v-f677af7a",null);s.default=r.exports}});
//# sourceMappingURL=4.4c875dae35d61aa45a14.js.map