(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"/GqU":function(t,e,n){var r=n("RK3t"),o=n("HYAF");t.exports=function(t){return r(o(t))}},"/b8u":function(t,e,n){var r=n("STAE");t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},"0BK2":function(t,e){t.exports={}},"0Dky":function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},"0GbY":function(t,e,n){var r=n("Qo9l"),o=n("2oRo"),a=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?a(r[t])||a(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]}},"0eef":function(t,e,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,a=o&&!r.call({1:2},1);e.f=a?function(t){var e=o(this,t);return!!e&&e.enumerable}:r},"2oRo":function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")()}).call(this,n("yLpj"))},"33Wh":function(t,e,n){var r=n("yoRg"),o=n("eDl+");t.exports=Object.keys||function(t){return r(t,o)}},"6JNq":function(t,e,n){var r=n("UTVS"),o=n("Vu81"),a=n("Bs8V"),i=n("m/L8");t.exports=function(t,e){for(var n=o(e),u=i.f,c=a.f,s=0;s<n.length;s++){var f=n[s];r(t,f)||u(t,f,c(e,f))}}},"6LWA":function(t,e,n){var r=n("xrYK");t.exports=Array.isArray||function(t){return"Array"==r(t)}},"93I0":function(t,e,n){var r=n("VpIT"),o=n("kOOl"),a=r("keys");t.exports=function(t){return a[t]||(a[t]=o(t))}},A2ZE:function(t,e,n){var r=n("HAuM");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},BIHw:function(t,e,n){"use strict";var r=n("I+eb"),o=n("or9q"),a=n("ewvW"),i=n("UMSQ"),u=n("ppGB"),c=n("ZfDv");r({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=a(this),n=i(e.length),r=c(e,0);return r.length=o(r,e,e,n,0,void 0===t?1:u(t)),r}})},Bs8V:function(t,e,n){var r=n("g6v/"),o=n("0eef"),a=n("XGwC"),i=n("/GqU"),u=n("wE6v"),c=n("UTVS"),s=n("DPsx"),f=Object.getOwnPropertyDescriptor;e.f=r?f:function(t,e){if(t=i(t),e=u(e,!0),s)try{return f(t,e)}catch(n){}if(c(t,e))return a(!o.f.call(t,e),t[e])}},DPsx:function(t,e,n){var r=n("g6v/"),o=n("0Dky"),a=n("zBJ4");t.exports=!r&&!o((function(){return 7!=Object.defineProperty(a("div"),"a",{get:function(){return 7}}).a}))},"G+Rx":function(t,e,n){var r=n("0GbY");t.exports=r("document","documentElement")},HAuM:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},HYAF:function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},"I+eb":function(t,e,n){var r=n("2oRo"),o=n("Bs8V").f,a=n("kRJp"),i=n("busE"),u=n("zk60"),c=n("6JNq"),s=n("lMq5");t.exports=function(t,e){var n,f,l,p,m,v=t.target,g=t.global,d=t.stat;if(n=g?r:d?r[v]||u(v,{}):(r[v]||{}).prototype)for(f in e){if(p=e[f],l=t.noTargetGet?(m=o(n,f))&&m.value:n[f],!s(g?f:v+(d?".":"#")+f,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;c(p,l)}(t.sham||l&&l.sham)&&a(p,"sham",!0),i(n,f,p,t)}}},I8vh:function(t,e,n){var r=n("ppGB"),o=Math.max,a=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):a(n,e)}},JBy8:function(t,e,n){var r=n("yoRg"),o=n("eDl+").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},"N+g0":function(t,e,n){var r=n("g6v/"),o=n("m/L8"),a=n("glrk"),i=n("33Wh");t.exports=r?Object.defineProperties:function(t,e){a(t);for(var n,r=i(e),u=r.length,c=0;u>c;)o.f(t,n=r[c++],e[n]);return t}},QGkA:function(t,e,n){n("RNIs")("flat")},Qo9l:function(t,e,n){var r=n("2oRo");t.exports=r},RK3t:function(t,e,n){var r=n("0Dky"),o=n("xrYK"),a="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?a.call(t,""):Object(t)}:Object},RNIs:function(t,e,n){var r=n("tiKp"),o=n("fHMY"),a=n("m/L8"),i=r("unscopables"),u=Array.prototype;null==u[i]&&a.f(u,i,{configurable:!0,value:o(null)}),t.exports=function(t){u[i][t]=!0}},STAE:function(t,e,n){var r=n("0Dky");t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},TWQb:function(t,e,n){var r=n("/GqU"),o=n("UMSQ"),a=n("I8vh"),i=function(t){return function(e,n,i){var u,c=r(e),s=o(c.length),f=a(i,s);if(t&&n!=n){for(;s>f;)if((u=c[f++])!=u)return!0}else for(;s>f;f++)if((t||f in c)&&c[f]===n)return t||f||0;return!t&&-1}};t.exports={includes:i(!0),indexOf:i(!1)}},UMSQ:function(t,e,n){var r=n("ppGB"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},UTVS:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},UqBJ:function(t,e,n){"use strict";n.r(e);n("BIHw"),n("QGkA");var r=n("q1tI"),o=n.n(r),a=n("Wbzz"),i=n("qhky"),u=n("jJX9"),c=n("Y6bT");e.default=function(t){var e=Object(a.c)("1882836587").allFile.edges.reduce((function(t,e){var n=e.node,r=n.relativeDirectory.replace("posts/interiors/","").split("/");return t[r[0]]=t[r[0]]||{},t[r[0]][r[1]]=t[r[0]][r[1]]||[],t[r[0]][r[1]].push(n.childImageSharp.fluid),t}),{}),s=[{name:"Студия Воздух",address:"Куйбышева 22, 3 этаж",areas:[{name:"Зал Основной",images:e.vozduh.default}]},{name:"Загородная Студия White House",address:"д. Тарасово, ул. Энергетиков, 3",areas:[{images:e.white_house.default}]},{name:"Студия АртЛофт",address:"Куйбышева, 22; 6 корпус, 4 1/2 этаж",areas:[{images:e.artloft.default}]},{name:"Студия Lightstudio",address:"Веры Хоружей  29, 8 этаж",areas:[{name:"Зал  Light",images:e.light.light},{name:"Зал Flat",images:e.light.flat}]},{name:"Студия Счастье",address:"Куйбышева 22. 4 c половиной этаж, до конца коридора",areas:[{images:e.happiness.default}]},{name:"Студия Молоко",address:"Толбухина 4, 3 этаж",areas:[{name:"Зал Кристалл",images:e.Moloko.kristal},{name:"Зал Милена",images:e.Moloko.mil},{name:"Зал Графит",images:e.Moloko.grafit}]},{name:"Студия Феломена",address:"Казинца 11а, крыло Б, 2 этаж",areas:[{name:"Зал White",images:e.Fel.white},{name:"Зал Loft",images:e.Fel.loft},{name:"Зал Family",images:e.Fel.bavy}]},{name:"Студия Катафот",address:"Кнорина 55",areas:[{images:e.Kat.default}]},{name:"Студия Lirika",address:"ФАБРИЦИУСА 8 (3 ЭТАЖ)",areas:[{images:e.lirika.default}]},{name:"Студия Smart Studio",address:"Строителей 1",areas:[{name:"Зал Подиум",images:e.smart_studio.pod},{name:"Зал Винтаж",images:e.smart_studio.vint}]},{name:"Студия ETO",address:"пр-т Партизанский 2/1, 4 этаж",areas:[{name:"Double room",images:e.ETO.DOUBLE},{name:"Зал White",images:e.ETO.w}]},{name:"Dreamstudio",address:"ул. Волгоградская 8,1-й этаж, Администратор в конце коридора",areas:[{name:"Family",images:e.Dream.family},{name:"Прованс",images:e.Dream.provans}]},{name:"Студия Diva",address:"ул. Октябрьская 10 Б ",areas:[{name:"Light",images:e.diva.light},{name:"Loft",images:e.diva.Loft},{name:"Plaza",images:e.diva.plaza},{name:"Royal",images:e.diva.r}]}];return Object(r.useEffect)((function(){n.e(3).then(n.t.bind(null,"e2AU",7)).then((function(t){t({selector:"a.photo",type:"image"})}))})),o.a.createElement(u.a,t,o.a.createElement(i.a,{title:"Фотограф Минск | Cтудии Минска",defer:!1}),o.a.createElement("h1",null,"Студии Минска"),o.a.createElement("div",{className:"post"},o.a.createElement("div",{className:"post-content"},s.map((function(t){return t.areas.map((function(e,n){return o.a.createElement("div",{key:t.name+"-"+e.name,className:"clear"},o.a.createElement("p",{style:{paddingTop:"28px"}},t.name,o.a.createElement("br",null),n?"":o.a.createElement("span",null,"Адрес: ",t.address,o.a.createElement("br",null)),e.name),o.a.createElement("div",{className:"cards"},e.images.map((function(t){return o.a.createElement("a",{key:t.src,rel:"gallery",className:"card photo",style:{margin:"1.5% 0 1.5% 3%"},href:t.src},o.a.createElement("span",{className:"thumbnail"},o.a.createElement(c.a,{fluid:t})))}))))}))}))),o.a.createElement("div",{style:{marginBottom:"1.5%"},className:"clear"})))}},VpIT:function(t,e,n){var r=n("xDBR"),o=n("xs3f");(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.5",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},Vu81:function(t,e,n){var r=n("0GbY"),o=n("JBy8"),a=n("dBg+"),i=n("glrk");t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(i(t)),n=a.f;return n?e.concat(n(t)):e}},XGwC:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},Y6bT:function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("9eSz"),i=n.n(a);e.a=function(t){return o.a.createElement(i.a,Object.assign({},t,{style:Object.assign({position:"absolute",top:0,right:0,bottom:0,left:0},t.style||{})}))}},ZfDv:function(t,e,n){var r=n("hh1v"),o=n("6LWA"),a=n("tiKp")("species");t.exports=function(t,e){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[a])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},afO8:function(t,e,n){var r,o,a,i=n("f5p1"),u=n("2oRo"),c=n("hh1v"),s=n("kRJp"),f=n("UTVS"),l=n("93I0"),p=n("0BK2"),m=u.WeakMap;if(i){var v=new m,g=v.get,d=v.has,y=v.set;r=function(t,e){return y.call(v,t,e),e},o=function(t){return g.call(v,t)||{}},a=function(t){return d.call(v,t)}}else{var h=l("state");p[h]=!0,r=function(t,e){return s(t,h,e),e},o=function(t){return f(t,h)?t[h]:{}},a=function(t){return f(t,h)}}t.exports={set:r,get:o,has:a,enforce:function(t){return a(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!c(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},busE:function(t,e,n){var r=n("2oRo"),o=n("kRJp"),a=n("UTVS"),i=n("zk60"),u=n("iSVu"),c=n("afO8"),s=c.get,f=c.enforce,l=String(String).split("String");(t.exports=function(t,e,n,u){var c=!!u&&!!u.unsafe,s=!!u&&!!u.enumerable,p=!!u&&!!u.noTargetGet;"function"==typeof n&&("string"!=typeof e||a(n,"name")||o(n,"name",e),f(n).source=l.join("string"==typeof e?e:"")),t!==r?(c?!p&&t[e]&&(s=!0):delete t[e],s?t[e]=n:o(t,e,n)):s?t[e]=n:i(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||u(this)}))},"dBg+":function(t,e){e.f=Object.getOwnPropertySymbols},"eDl+":function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},ewvW:function(t,e,n){var r=n("HYAF");t.exports=function(t){return Object(r(t))}},f5p1:function(t,e,n){var r=n("2oRo"),o=n("iSVu"),a=r.WeakMap;t.exports="function"==typeof a&&/native code/.test(o(a))},fHMY:function(t,e,n){var r,o=n("glrk"),a=n("N+g0"),i=n("eDl+"),u=n("0BK2"),c=n("G+Rx"),s=n("zBJ4"),f=n("93I0"),l=f("IE_PROTO"),p=function(){},m=function(t){return"<script>"+t+"<\/script>"},v=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(o){}var t,e;v=r?function(t){t.write(m("")),t.close();var e=t.parentWindow.Object;return t=null,e}(r):((e=s("iframe")).style.display="none",c.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(m("document.F=Object")),t.close(),t.F);for(var n=i.length;n--;)delete v.prototype[i[n]];return v()};u[l]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(p.prototype=o(t),n=new p,p.prototype=null,n[l]=t):n=v(),void 0===e?n:a(n,e)}},"g6v/":function(t,e,n){var r=n("0Dky");t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},glrk:function(t,e,n){var r=n("hh1v");t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},hh1v:function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},iSVu:function(t,e,n){var r=n("xs3f"),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},kOOl:function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},kRJp:function(t,e,n){var r=n("g6v/"),o=n("m/L8"),a=n("XGwC");t.exports=r?function(t,e,n){return o.f(t,e,a(1,n))}:function(t,e,n){return t[e]=n,t}},lMq5:function(t,e,n){var r=n("0Dky"),o=/#|\.prototype\./,a=function(t,e){var n=u[i(t)];return n==s||n!=c&&("function"==typeof e?r(e):!!e)},i=a.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=a.data={},c=a.NATIVE="N",s=a.POLYFILL="P";t.exports=a},"m/L8":function(t,e,n){var r=n("g6v/"),o=n("DPsx"),a=n("glrk"),i=n("wE6v"),u=Object.defineProperty;e.f=r?u:function(t,e,n){if(a(t),e=i(e,!0),a(n),o)try{return u(t,e,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},or9q:function(t,e,n){"use strict";var r=n("6LWA"),o=n("UMSQ"),a=n("A2ZE"),i=function(t,e,n,u,c,s,f,l){for(var p,m=c,v=0,g=!!f&&a(f,l,3);v<u;){if(v in n){if(p=g?g(n[v],v,e):n[v],s>0&&r(p))m=i(t,e,p,o(p.length),m,s-1)-1;else{if(m>=9007199254740991)throw TypeError("Exceed the acceptable array length");t[m]=p}m++}v++}return m};t.exports=i},ppGB:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},tiKp:function(t,e,n){var r=n("2oRo"),o=n("VpIT"),a=n("UTVS"),i=n("kOOl"),u=n("STAE"),c=n("/b8u"),s=o("wks"),f=r.Symbol,l=c?f:f&&f.withoutSetter||i;t.exports=function(t){return a(s,t)||(u&&a(f,t)?s[t]=f[t]:s[t]=l("Symbol."+t)),s[t]}},wE6v:function(t,e,n){var r=n("hh1v");t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},xDBR:function(t,e){t.exports=!1},xrYK:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},xs3f:function(t,e,n){var r=n("2oRo"),o=n("zk60"),a=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=a},yoRg:function(t,e,n){var r=n("UTVS"),o=n("/GqU"),a=n("TWQb").indexOf,i=n("0BK2");t.exports=function(t,e){var n,u=o(t),c=0,s=[];for(n in u)!r(i,n)&&r(u,n)&&s.push(n);for(;e.length>c;)r(u,n=e[c++])&&(~a(s,n)||s.push(n));return s}},zBJ4:function(t,e,n){var r=n("2oRo"),o=n("hh1v"),a=r.document,i=o(a)&&o(a.createElement);t.exports=function(t){return i?a.createElement(t):{}}},zk60:function(t,e,n){var r=n("2oRo"),o=n("kRJp");t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}}}]);
//# sourceMappingURL=component---src-pages-studios-js-c4fc2f40514b20ea4395.js.map