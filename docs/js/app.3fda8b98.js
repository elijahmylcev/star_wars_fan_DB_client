(function(e){function t(t){for(var n,A,i=t[0],o=t[1],c=t[2],u=0,l=[];u<i.length;u++)A=i[u],Object.prototype.hasOwnProperty.call(a,A)&&a[A]&&l.push(a[A][0]),a[A]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);p&&p(t);while(l.length)l.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,A=1;A<r.length;A++){var i=r[A];0!==a[i]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},A={app:0},a={app:0},s=[];function i(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-1f78cf16":"64ec2e4c","chunk-a5e5994c":"920507d9"}[e]+".js"}function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var t=[],r={"chunk-1f78cf16":1,"chunk-a5e5994c":1};A[e]?t.push(A[e]):0!==A[e]&&r[e]&&t.push(A[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-1f78cf16":"a40f4aaa","chunk-a5e5994c":"1a8efa93"}[e]+".css",a=o.p+n,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var c=s[i],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===n||u===a))return t()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){c=l[i],u=c.getAttribute("data-href");if(u===n||u===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||a,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete A[e],p.parentNode.removeChild(p),r(s)},p.href=a;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){A[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=s);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=i(e);var l=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(p);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),A=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+A+")",l.name="ChunkLoadError",l.type=n,l.request=A,r[1](l)}a[e]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/star_wars_fan_DB_client/",o.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var p=u;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"10a8":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticStyle:{height:"content"}},[e.loading?r("Spinner",{staticClass:"spinn"}):r("ul",{staticClass:"item-list list-group"},e._l(e.items,(function(t){return r("li",{key:t.id,staticClass:"list-group-item",on:{click:function(r){return e.onItemSelected(t)}}},[e._v(" "+e._s(t[e.namingProperty])+" ")])})),0)],1)},A=[],a=r("2375"),s={name:"List",components:{Spinner:a["a"]},props:{items:{type:Array,default:function(){return[]}},namingProperty:{type:String,default:"name"},loading:{type:Boolean,required:!0}},methods:{onItemSelected:function(e){this.$emit("on-item-click",e.id)}}},i=s,o=(r("2350"),r("2877")),c=Object(o["a"])(i,n,A,!1,null,"2d945336",null);t["a"]=c.exports},"1fe5":function(e,t,r){"use strict";r("cffe")},"21d4":function(e,t,r){},2350:function(e,t,r){"use strict";r("6e9a")},2375:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},A=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li"),r("li"),r("li"),r("li")])}],a={},s=a,i=(r("7d04"),r("2877")),o=Object(i["a"])(s,n,A,!1,null,"4f0e4f48",null);t["a"]=o.exports},"4c90":function(e,t,r){},5451:function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),A=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Header"),r("router-view")],1)},a=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header d-flex"},[n("img",{staticClass:"mx-5 logo",attrs:{src:r("989c"),alt:"Img"}}),n("h3",[n("router-link",{attrs:{to:"/home"}},[e._v(" Fan Star Wars DB ")])],1),n("router-link",{staticClass:"link-route",attrs:{to:"/films"}},[e._v("Films")]),n("router-link",{staticClass:"link-route",attrs:{to:"/starships"}},[e._v("Starships")])],1)},i=[],o={},c=o,u=(r("5a00"),r("2877")),l=Object(u["a"])(c,s,i,!1,null,"2974a0f0",null),p=l.exports,m={name:"App",components:{Header:p}},f=m,d=(r("5c0b"),Object(u["a"])(f,A,a,!1,null,null,null)),h=d.exports,g=(r("d3b7"),r("3ca3"),r("ddb0"),r("8c4f")),v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("RandomPlanet",{staticClass:"mt-5"}),r("div",{staticClass:"person row mb2"},[r("div",{staticClass:"col-md-6 col-xs-12 col-sm-12"},[r("ItemList",{staticClass:"list",attrs:{items:e.persons.value,loading:e.persons.loading,namingProperty:"name"},on:{"on-item-click":e.onPersonSelect}})],1),r("div",{staticClass:"col-md-6 col-xs-12 col-sm-12"},[r("ItemDetails",{attrs:{item:e.selectedPerson.value,loading:e.selectedPerson.loading},scopedSlots:e._u([{key:"content",fn:function(t){var n=t.item;return[r("h4",[e._v(e._s(n.name))]),r("ul",{staticClass:"list-group list-group-flush"},[r("li",{staticClass:"list-group-item"},[r("span",{staticClass:"term"},[e._v("Gender:")]),r("span",[e._v(e._s(n.gender))])]),r("li",{staticClass:"list-group-item"},[r("span",{staticClass:"term"},[e._v("Birth Year:")]),r("span",[e._v(e._s(n.birthYear))])]),r("li",{staticClass:"list-group-item"},[r("span",{staticClass:"term"},[e._v("Eye Color:")]),r("span",[e._v(e._s(n.eyeColor))])]),r("li",{staticClass:"list-group-item"},[r("span",{staticClass:"term"},[e._v("Height:")]),r("span",[e._v(e._s(n.height))])]),r("li",{staticClass:"list-group-item"},[r("span",{staticClass:"term"},[e._v("Mass:")]),r("span",[e._v(e._s(n.mass))])]),r("li",{staticClass:"list-group-item"},[r("span",{staticClass:"term"},[e._v("Homeworld:")]),r("span",[e._v(e._s(e.personHomeworld.name))])])])]}}])})],1)])],1)},b=[],_=r("2909"),w=r("1da1"),y=(r("96cf"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"random-planet jumbotron rounded"},[e.error?r("ErrorIndicator"):[e.loading?r("Spinner"):r("div",{staticClass:"d-flex wrapper"},[r("img",{staticClass:"planet-image",attrs:{src:e.planet.adress,alt:"img"}}),r("div",[r("h4",{staticClass:"title"},[e._v(e._s(e.planet.name))]),r("ul",{staticClass:"list-group list-group-flush"},[r("li",{staticClass:"list-group-item"},[r("span",{staticClass:"term"},[e._v("Population:")]),r("span",[e._v(e._s(e.planet.population))])]),r("li",{staticClass:"list-group-item"},[r("span",{staticClass:"term"},[e._v("Rotation Period:")]),r("span",[e._v(e._s(e.planet.rotation_period))])]),r("li",{staticClass:"list-group-item"},[r("span",{staticClass:"term"},[e._v("Diameter:")]),r("span",[e._v(e._s(e.planet.diameter))])])])])])]],2)}),C=[],k=r("2375"),x=r("8061"),O={data:function(){return{planet:{},loading:!0,error:!1}},components:{Spinner:k["a"],ErrorIndicator:x["a"]},mounted:function(){var e=this;this.interval=setInterval(Object(w["a"])(regeneratorRuntime.mark((function t(){var r,n,A;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=function(e,t){return Math.floor(Math.random()*(t-e+1)+e)},n=r(2,19),t.next=4,e.$swapi.getPlanet(n);case 4:if(A=t.sent,"Error"!==A.type){t.next=7;break}return t.abrupt("return",e.onError());case 7:e.planet=A,e.loading=!1;case 9:case"end":return t.stop()}}),t)}))),4e3)},beforeDestroy:function(){clearInterval(this.interval)},methods:{onError:function(){this.loading=!1,this.error=!0}}},P=O,j=(r("5d8e"),Object(u["a"])(P,y,C,!1,null,"4fd87556",null)),E=j.exports,S=r("10a8"),R=r("b4cc"),I={name:"Home",components:{RandomPlanet:E,ItemList:S["a"],ItemDetails:R["a"]},data:function(){return{persons:{value:[],loading:!0},selectedPerson:{value:{},loading:!0},personHomeworld:""}},mounted:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$swapi.getAllPeople();case 2:r=t.sent,e.persons.value=Object(_["a"])(r),e.persons.loading=!1;case 5:case"end":return t.stop()}}),t)})))()},methods:{onPersonSelect:function(e){var t=this;return Object(w["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$swapi.getPerson(e);case 2:return n=r.sent,r.next=5,t.$swapi.getPlanet(n.homeworld);case 5:t.personHomeworld=r.sent,t.selectedPerson.value=n,t.selectedPerson.loading=!1;case 8:case"end":return r.stop()}}),r)})))()}}},B=I,M=(r("85d4"),Object(u["a"])(B,v,b,!1,null,"0877ab5c",null)),$=M.exports;n["a"].use(g["a"]);var H=[{path:"/",name:"Home",component:$},{path:"/starships",name:"Starships",component:function(){return r.e("chunk-1f78cf16").then(r.bind(null,"9a62"))}},{path:"/films",name:"Films",component:function(){return r.e("chunk-a5e5994c").then(r.bind(null,"79bd"))}}],D=new g["a"]({mode:"history",routes:H}),Q=D,L=(r("f9e3"),r("1de3"),r("d4ec")),N=r("bee2"),T=r("ade3"),F=(r("b0c0"),r("ac1f"),r("1276"),r("99af"),r("d81d"),r("466d"),function(){function e(){var t=this;Object(L["a"])(this,e),Object(T["a"])(this,"_apiBase","https://swapi.dev/api"),Object(T["a"])(this,"_transformPlanet",(function(e){var r=t._extractId(e);return{id:r,name:e.name,population:e.population,rotation_period:e.rotation_period,diameter:e.diameter,adress:"https://starwars-visualguide.com/assets/img/planets/".concat(r,".jpg")}})),Object(T["a"])(this,"_transformStarship",(function(e){var r=t._extractId(e);return{id:r,name:e.name,model:e.model,manufacturer:e.manufacturer,costInCredits:e.costInCredits,length:e.length,crew:e.crew,passengers:e.passengers,cargoCopacity:e.cargoCopacity,adress:"https://starwars-visualguide.com/assets/img/starships/".concat(r,".jpg")}})),Object(T["a"])(this,"_transformPerson",(function(e){var r=t._extractId(e),n=e.homeworld.split("/"),A=n[n.length-2];return{id:r,name:e.name,gender:e.gender,birthYear:e.birth_year,eyeColor:e.eye_color,height:e.height,mass:e.mass,homeworld:A,adress:"https://starwars-visualguide.com/assets/img/characters/".concat(r,".jpg")}}))}return Object(N["a"])(e,[{key:"getResource",value:function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this._apiBase).concat(t));case 2:if(r=e.sent,r.ok){e.next=5;break}throw new Error("Could not fetch ".concat(t)+"received ".concat(r.status));case 5:return e.next=7,r.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"getAllPeople",value:function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getResource("/people/");case 2:return t=e.sent,e.abrupt("return",t.results.map(this._transformPerson));case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getAllFilms",value:function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getResource("/films/");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getPerson",value:function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getResource("/people/".concat(t,"/"));case 2:return r=e.sent,e.abrupt("return",this._transformPerson(r));case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"getAllPlanets",value:function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getResource("/planets/");case 2:return t=e.sent,e.abrupt("return",t.results.map(this._transformPlanet));case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getPlanet",value:function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.getResource("/planets/".concat(t,"/"));case 3:return r=e.sent,e.abrupt("return",this._transformPlanet(r));case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",{message:"lol",type:"Error"});case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"getAllStarships",value:function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getResource("/starships/");case 2:return t=e.sent,e.abrupt("return",t.results.map(this._transformStarship));case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getStarship",value:function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getResource("/starships/".concat(t,"/"));case 2:return r=e.sent,e.abrupt("return",this._transformStarship(r));case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"_extractId",value:function(e){var t=/\/([0-9]*)\/$/;return e.url.match(t)[1]}}]),e}()),J={install:function(e){e.prototype.$swapi=new F}};n["a"].use(J),n["a"].config.productionTip=!1,new n["a"]({router:Q,render:function(e){return e(h)}}).$mount("#app")},"5a00":function(e,t,r){"use strict";r("4c90")},"5c0b":function(e,t,r){"use strict";r("c58b")},"5d8e":function(e,t,r){"use strict";r("21d4")},"6e9a":function(e,t,r){},"7d04":function(e,t,r){"use strict";r("b258")},8061:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},A=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"error-indicator"},[n("img",{attrs:{src:r("cb3e"),alt:"error icon"}}),n("span",{staticClass:"boom"},[e._v("BOOM!")]),n("span",[e._v(" something has gone terribly wrong ")]),n("span",[e._v(" (but we already sent droids to fix it) ")])])}],a={},s=a,i=(r("ecfc"),r("2877")),o=Object(i["a"])(s,n,A,!1,null,"38809923",null);t["a"]=o.exports},"85d4":function(e,t,r){"use strict";r("5451")},"989c":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIABAMAAAAGVsnJAAAAD1BMVEUAAAArQJnMKVQrQJnMKVTnLgCCAAAAA3RSTlMA/Pz2dNRYAAACe0lEQVR42u3YMQqFMBBFUbck7kDc/5psrMIfxECcfOfcbprAO2WWRZIkSZIkSZIkSZIk6WHb79be946r7F0AAAAAAAAAAAAAAAAAAAAAgFuANboBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACydwEAAAAAAAAAbodHAQAAAAAAAAAAAAAAAAAAAAA+CNBA1PsQAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOoBtAEAAAAAAAAAAAAAAAAAAAAAPgzQQHQPBwAAAAAAAAAAAAAAAAAAAAAAyN4DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIHsPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYAXAEZe8CAAAAAAAAAAAAAAAAAAAAAIwHCED27H0AAAAAAAAAAAAAAAAAAAAAgPcAsncBAAAAAAAAAAAAAAAAAAAAAMYDtGXvAgAAAAAAAAAAAAAAAAAAAACMB4ju6QMAAAAAAAAAAAAAAAAAAAAAdAOU/xABAAAAAAAAAAAAAAAAAAAACgJE9/QBAAAAAAAAAAAAAAAAAAAAALoByn+IAAAAAAAAAAAAAAAAAAAAAH8EIEmSJEmSJEmSJEmSpukE17SDqPGse8gAAAAASUVORK5CYII="},b258:function(e,t,r){},b4cc:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.loading?r("Spinner",{staticClass:"spinn"}):r("div",{staticClass:"item-details card person-details"},[e._t("image",(function(){return[r("img",{staticClass:"item-image",attrs:{src:e.item.adress}})]}),{image:e.item.adress}),r("div",{staticClass:"card-body"},[e._t("content",null,{item:e.item})],2)],2)},A=[],a=r("2375"),s={name:"ItemDetails",components:{Spinner:a["a"]},props:{item:{type:Object,required:!0},loading:{type:Boolean,required:!0}}},i=s,o=(r("1fe5"),r("2877")),c=Object(o["a"])(i,n,A,!1,null,null,null);t["a"]=c.exports},be35:function(e,t,r){},c58b:function(e,t,r){},cb3e:function(e,t,r){e.exports=r.p+"img/lightsabers.75950de5.png"},cffe:function(e,t,r){},ecfc:function(e,t,r){"use strict";r("be35")}});
//# sourceMappingURL=app.3fda8b98.js.map