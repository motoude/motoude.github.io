webpackJsonp([10],{"+skl":function(a,t){},CN6D:function(a,t){},NHnr:function(a,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("7+uW"),e=(n("vryz"),{render:function(){var a=this.$createElement,t=this._self._c||a;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]});var d=n("VU/8")({name:"App"},e,!1,function(a){n("CN6D")},null,null).exports,r=n("/ocq");o.default.use(r.a);var m,i=new r.a({mode:"history",routes:[{path:"/",redirect:"/msite"},{path:"/msite",name:"Index",component:function(){return n.e(5).then(n.bind(null,"eerB"))}},{path:"/msite/food",name:"Food",component:function(){return n.e(7).then(n.bind(null,"Eon7"))}},{path:"/newuser",name:"NewUser",component:function(){return n.e(8).then(n.bind(null,"7taD"))}},{path:"/red",name:"Red",component:function(){return n.e(1).then(n.bind(null,"ync8"))}},{path:"/discover",name:"Discover",component:function(){return n.e(0).then(n.bind(null,"+r7D"))}},{path:"/shop",name:"Shop",component:function(){return n.e(4).then(n.bind(null,"uia/"))}},{path:"/order",name:"order",component:function(){return n.e(6).then(n.bind(null,"SC19"))}},{path:"/login",name:"Login",component:function(){return n.e(3).then(n.bind(null,"P7ry"))}},{path:"/profile",name:"Profile",component:function(){return n.e(2).then(n.bind(null,"qKQV"))}}],scrollBehavior:function(a,t,n){return{x:0,y:0}}}),c=n("Au9i"),l=n.n(c),u=(n("d8/S"),n("mtWM")),R=n.n(u),s=n("Rf8U"),p=n.n(s),f=n("NYxO"),g=n("BO1k"),h=n.n(g),x=n("gRE1"),I=n.n(x),v=n("bOdI"),b=n.n(v),y=n("Dd8w"),T=n.n(y),w=(m={},b()(m,"GET_MSITE",function(a,t){a.msiteList=t}),b()(m,"GET_SHOP",function(a,t){a.shopList=t}),b()(m,"SET_CART",function(a,t){var n=t.car_id,o=t.id,e=t.title,d=t.pic,r=t.number,m=t.good,i=t.price,c=t.buynum,l=a.cart;l[n]?l[n].buynum++:(l[n]={id:o,title:e,pic:d,number:r,good:m,price:i,buynum:c},a.cart=T()({},l))}),b()(m,"SET_CART_OUT",function(a,t){var n=t.car_id,o=(t.id,t.title,t.pic,t.number,t.good,t.price,t.buynum,a.cart);o[n]&&(o[n].buynum>1?(o[n].buynum--,a.cart=T()({},o)):(o[n].buynum--,delete o[n]),a.cart=T()({},o))}),b()(m,"INIT_CART",function(a){a.cart={}}),b()(m,"SET_ORDER",function(a,t){a.order.push(t)}),b()(m,"RECORD_USERINFO",function(a,t){a.userInfo=t,a.login=!0,setStore("user_id",t.user_id)}),b()(m,"GET_USERINFO",function(a,t){a.userInfo&&a.userInfo.username!==t.username||a.login&&(t.message?a.userInfo=null:a.userInfo=T()({},t))}),b()(m,"SET_LOGIN",function(a,t){"0000"===t.phone?(a.userInfo=t.phoneNumber,a.logined=!0):alert("验证码不对")}),m),_=n("Xxa5"),S=n.n(_),E=n("exGp"),O=n.n(E),k=n("c2Ch"),L=(n("txPn"),{getMsite:function(a){var t=this,n=a.commit;a.state;return O()(S.a.mark(function a(){return S.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:k.a.getlist("/indexlist").then(function(a){n("GET_MSITE",a.list)});case 1:case"end":return a.stop()}},a,t)}))()},getShop:function(a){var t=this,n=a.commit;a.state;return O()(S.a.mark(function a(){return S.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:k.a.getlist("/shoplist").then(function(a){n("GET_SHOP",a.list)});case 1:case"end":return a.stop()}},a,t)}))()}});o.default.use(f.a);var N={cartList:function(a){return I()(a.cart)},cartNumber:function(a,t){var n=null,o=!0,e=!1,d=void 0;try{for(var r,m=h()(t.cartList);!(o=(r=m.next()).done);o=!0){n+=r.value.buynum}}catch(a){e=!0,d=a}finally{try{!o&&m.return&&m.return()}finally{if(e)throw d}}return n},cartPrice:function(a,t){var n=null,o=!0,e=!1,d=void 0;try{for(var r,m=h()(t.cartList);!(o=(r=m.next()).done);o=!0){var i=r.value;n+=i.price*i.buynum}}catch(a){e=!0,d=a}finally{try{!o&&m.return&&m.return()}finally{if(e)throw d}}return n},cartTotal:function(a,t){var n={};return n.list=t.cartList,n.number=t.cartNumber,n.price=t.cartPrice,n}},C=new f.a.Store({state:{msiteList:[],shopList:[],cart:{},order:[],userInfo:null,logined:!1},getters:N,actions:L,mutations:w}),P=n("zL8q"),A=n.n(P),U=(n("tvR6"),n("BTaQ")),q=n.n(U);n("+skl");o.default.use(q.a),o.default.use(f.a),o.default.use(p.a,R.a),o.default.use(l.a),o.default.use(A.a),o.default.config.productionTip=!1,new o.default({el:"#app",router:i,store:C,components:{App:d},template:"<App/>"})},c2Ch:function(a,t,n){"use strict";var o=n("woOf"),e=n.n(o),d=n("//Fk"),r=n.n(d),m=n("mtWM"),i=n.n(m),c=n("mw3O"),l=n.n(c);i.a.interceptors.request.use(function(a){return a},function(a){return r.a.reject(a)}),i.a.interceptors.response.use(function(a){return a},function(a){return r.a.resolve(a.response)});t.a={getlist:function(a,t){return function(a,t){var n={method:a.method,baseURL:"http://api.com",url:a.url,timeout:1e4,params:a.params||"",data:l.a.stringify(e()({srAppid:""},t)),headers:"get"==a.method?{"X-Requested-With":"XMLHttpRequest",Accept:"application/json","Content-Type":"application/json; charset=UTF-8"}:{"X-Requested-With":"XMLHttpRequest","Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}};return"get"==a.method?delete n.data:delete n.params,new r.a(function(a,t){i()(n).then(function(t){a(t.data)}).catch(function(a){t(a.data)})})}({method:"get",url:a,params:t})}}},"d8/S":function(a,t){},tvR6:function(a,t){},txPn:function(a,t,n){"use strict";var o=n("zNUS"),e=n.n(o);e.a.mock("/carousellist",{"list|4":[{"id|+1":[1,2,3,4],"title|1":["一加手机20","三星 Galaxy S8","荣耀9 全网通","OPPO R11 全网通","小米6 全网通"],"src|+1":[e.a.Random.dataImage("300x200",e.a.Random.color()),e.a.Random.dataImage("300x200",e.a.Random.color()),e.a.Random.dataImage("300x200",e.a.Random.color()),e.a.Random.dataImage("300x200",e.a.Random.color())]}]}),e.a.mock("http://api.com/indexlist",{"list|20":[{"id|+1":1,"title|1":[e.a.Random.ctitle(5),e.a.Random.ctitle(7),e.a.Random.ctitle(4),e.a.Random.ctitle(3),e.a.Random.ctitle(5),e.a.Random.ctitle(7),e.a.Random.ctitle(4),e.a.Random.ctitle(3),e.a.Random.ctitle(5),e.a.Random.ctitle(7),e.a.Random.ctitle(4),e.a.Random.ctitle(3),e.a.Random.ctitle(8)],"pic|+1":[e.a.Random.dataImage("100x100",e.a.Random.color()),e.a.Random.dataImage("100x100",e.a.Random.color()),e.a.Random.dataImage("100x100",e.a.Random.color()),e.a.Random.dataImage("100x100",e.a.Random.color()),e.a.Random.dataImage("100x100",e.a.Random.color()),e.a.Random.dataImage("100x100",e.a.Random.color()),e.a.Random.dataImage("100x100",e.a.Random.color()),e.a.Random.dataImage("100x100",e.a.Random.color())],"star|1-4.1":1,"outnumber|10-1000":15,"minnumber|10-30":15,"boynumber|5-20":15,isActive:!1}]}),e.a.mock("http://api.com/selectlist",{"list|8-13":[{"id|+1":1,"title|+1":["全部",e.a.Random.ctitle(3),e.a.Random.ctitle(4),e.a.Random.ctitle(3),e.a.Random.ctitle(5),e.a.Random.ctitle(4),e.a.Random.ctitle(5),e.a.Random.ctitle(2),e.a.Random.ctitle(5),e.a.Random.ctitle(3),e.a.Random.ctitle(4),e.a.Random.ctitle(3),e.a.Random.ctitle(4)]}]}),e.a.mock("http://api.com/discoverlist",{"list|6":[{"id|+1":1,"title|+1":[e.a.Random.ctitle(6),e.a.Random.ctitle(5),e.a.Random.ctitle(7),e.a.Random.ctitle(6),e.a.Random.ctitle(5),e.a.Random.ctitle(7)],"price|30-120":15,"pic|+1":[e.a.Random.dataImage("100x100",e.a.Random.color()),e.a.Random.dataImage("100x100",e.a.Random.color()),e.a.Random.dataImage("100x100",e.a.Random.color()),e.a.Random.dataImage("100x100",e.a.Random.color()),e.a.Random.dataImage("100x100",e.a.Random.color()),e.a.Random.dataImage("100x100",e.a.Random.color())]}]}),e.a.mock("http://api.com/shoplist",{"list|5-10":[{"id|+1":1,"title|1":[e.a.Random.ctitle(3),e.a.Random.ctitle(4),e.a.Random.ctitle(3),e.a.Random.ctitle(3),e.a.Random.ctitle(3)],"list|8-15":[{"car_id|+1":1e3,"id|+1":50,"title|1":[e.a.Random.ctitle(5),e.a.Random.ctitle(7),e.a.Random.ctitle(4),e.a.Random.ctitle(3),e.a.Random.ctitle(5),e.a.Random.ctitle(7),e.a.Random.ctitle(4),e.a.Random.ctitle(3),e.a.Random.ctitle(5),e.a.Random.ctitle(7),e.a.Random.ctitle(4),e.a.Random.ctitle(3),e.a.Random.ctitle(8)],"pic|+1":[e.a.Random.dataImage("100x100",e.a.Random.color()),e.a.Random.dataImage("100x100",e.a.Random.color()),e.a.Random.dataImage("100x100",e.a.Random.color()),e.a.Random.dataImage("100x100",e.a.Random.color()),e.a.Random.dataImage("100x100",e.a.Random.color()),e.a.Random.dataImage("100x100",e.a.Random.color()),e.a.Random.dataImage("100x100",e.a.Random.color()),e.a.Random.dataImage("100x100",e.a.Random.color())],"number|10-1000":15,"good|10-30":15,"price|12-36":15,buynum:0}]}]}),e.a.mock("/floorlist1",{title:e.a.Random.ctitle(4),list1:[{src:e.a.Random.dataImage("200x100",e.a.Random.color())}],"list2|2":[{"src|+1":[e.a.Random.dataImage("100x100",e.a.Random.color()),e.a.Random.dataImage("100x100",e.a.Random.color())]}],list3:[{}],"list4|4":[{"src|+1":[e.a.Random.dataImage("100x100",e.a.Random.color()),e.a.Random.dataImage("100x100",e.a.Random.color()),e.a.Random.dataImage("100x100",e.a.Random.color()),e.a.Random.dataImage("100x100",e.a.Random.color())]}]}),e.a.mock("/floorlist2",{title:e.a.Random.ctitle(4),list2:[{}],"list1|2":[{"src|+1":[e.a.Random.dataImage("200x150",e.a.Random.color()),e.a.Random.dataImage("200x150",e.a.Random.color())]}],list3:[{}],"list4|4":[{"src|+1":[e.a.Random.dataImage("100x150",e.a.Random.color()),e.a.Random.dataImage("100x150",e.a.Random.color()),e.a.Random.dataImage("100x150",e.a.Random.color()),e.a.Random.dataImage("100x150",e.a.Random.color())]}]}),e.a.mock("/detaillist",{"object|":{title:e.a.Random.ctitle(10),"price|10-1000":100,"sale|500-10000":500,city:e.a.Random.city(!0),word:e.a.Random.ctitle(100),pic:e.a.Random.dataImage("100x100",e.a.Random.color()),"wpic|5":[{"src|+1":[e.a.Random.dataImage("200x150",e.a.Random.color()),e.a.Random.dataImage("200x100",e.a.Random.color()),e.a.Random.dataImage("200x200",e.a.Random.color()),e.a.Random.dataImage("200x100",e.a.Random.color()),e.a.Random.dataImage("200x160",e.a.Random.color())]}]}})},vryz:function(a,t){}},["NHnr"]);
//# sourceMappingURL=app.da1116ad52cfb9ddee04.js.map