(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"/GqU":function(e,t,n){var r=n("RK3t"),o=n("HYAF");e.exports=function(e){return r(o(e))}},"/b8u":function(e,t,n){var r=n("STAE");e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},"0BK2":function(e,t){e.exports={}},"0Dky":function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},"0GbY":function(e,t,n){var r=n("Qo9l"),o=n("2oRo"),a=function(e){return"function"==typeof e?e:void 0};e.exports=function(e,t){return arguments.length<2?a(r[e])||a(o[e]):r[e]&&r[e][t]||o[e]&&o[e][t]}},"0eef":function(e,t,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,a=o&&!r.call({1:2},1);t.f=a?function(e){var t=o(this,e);return!!t&&t.enumerable}:r},"2oRo":function(e,t,n){(function(t){var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||Function("return this")()}).call(this,n("yLpj"))},"33Wh":function(e,t,n){var r=n("yoRg"),o=n("eDl+");e.exports=Object.keys||function(e){return r(e,o)}},"6JNq":function(e,t,n){var r=n("UTVS"),o=n("Vu81"),a=n("Bs8V"),i=n("m/L8");e.exports=function(e,t){for(var n=o(t),u=i.f,c=a.f,s=0;s<n.length;s++){var f=n[s];r(e,f)||u(e,f,c(t,f))}}},"6LWA":function(e,t,n){var r=n("xrYK");e.exports=Array.isArray||function(e){return"Array"==r(e)}},"93I0":function(e,t,n){var r=n("VpIT"),o=n("kOOl"),a=r("keys");e.exports=function(e){return a[e]||(a[e]=o(e))}},A2ZE:function(e,t,n){var r=n("HAuM");e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}}},BIHw:function(e,t,n){"use strict";var r=n("I+eb"),o=n("or9q"),a=n("ewvW"),i=n("UMSQ"),u=n("ppGB"),c=n("ZfDv");r({target:"Array",proto:!0},{flat:function(){var e=arguments.length?arguments[0]:void 0,t=a(this),n=i(t.length),r=c(t,0);return r.length=o(r,t,t,n,0,void 0===e?1:u(e)),r}})},Bs8V:function(e,t,n){var r=n("g6v/"),o=n("0eef"),a=n("XGwC"),i=n("/GqU"),u=n("wE6v"),c=n("UTVS"),s=n("DPsx"),f=Object.getOwnPropertyDescriptor;t.f=r?f:function(e,t){if(e=i(e),t=u(t,!0),s)try{return f(e,t)}catch(n){}if(c(e,t))return a(!o.f.call(e,t),e[t])}},DPsx:function(e,t,n){var r=n("g6v/"),o=n("0Dky"),a=n("zBJ4");e.exports=!r&&!o((function(){return 7!=Object.defineProperty(a("div"),"a",{get:function(){return 7}}).a}))},"G+Rx":function(e,t,n){var r=n("0GbY");e.exports=r("document","documentElement")},HAuM:function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},HYAF:function(e,t){e.exports=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}},"I+eb":function(e,t,n){var r=n("2oRo"),o=n("Bs8V").f,a=n("kRJp"),i=n("busE"),u=n("zk60"),c=n("6JNq"),s=n("lMq5");e.exports=function(e,t){var n,f,l,p,m,v=e.target,g=e.global,d=e.stat;if(n=g?r:d?r[v]||u(v,{}):(r[v]||{}).prototype)for(f in t){if(p=t[f],l=e.noTargetGet?(m=o(n,f))&&m.value:n[f],!s(g?f:v+(d?".":"#")+f,e.forced)&&void 0!==l){if(typeof p==typeof l)continue;c(p,l)}(e.sham||l&&l.sham)&&a(p,"sham",!0),i(n,f,p,e)}}},I8vh:function(e,t,n){var r=n("ppGB"),o=Math.max,a=Math.min;e.exports=function(e,t){var n=r(e);return n<0?o(n+t,0):a(n,t)}},JBy8:function(e,t,n){var r=n("yoRg"),o=n("eDl+").concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},"N+g0":function(e,t,n){var r=n("g6v/"),o=n("m/L8"),a=n("glrk"),i=n("33Wh");e.exports=r?Object.defineProperties:function(e,t){a(e);for(var n,r=i(t),u=r.length,c=0;u>c;)o.f(e,n=r[c++],t[n]);return e}},QGkA:function(e,t,n){n("RNIs")("flat")},Qo9l:function(e,t,n){var r=n("2oRo");e.exports=r},RK3t:function(e,t,n){var r=n("0Dky"),o=n("xrYK"),a="".split;e.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==o(e)?a.call(e,""):Object(e)}:Object},RNIs:function(e,t,n){var r=n("tiKp"),o=n("fHMY"),a=n("m/L8"),i=r("unscopables"),u=Array.prototype;null==u[i]&&a.f(u,i,{configurable:!0,value:o(null)}),e.exports=function(e){u[i][e]=!0}},STAE:function(e,t,n){var r=n("0Dky");e.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},TWQb:function(e,t,n){var r=n("/GqU"),o=n("UMSQ"),a=n("I8vh"),i=function(e){return function(t,n,i){var u,c=r(t),s=o(c.length),f=a(i,s);if(e&&n!=n){for(;s>f;)if((u=c[f++])!=u)return!0}else for(;s>f;f++)if((e||f in c)&&c[f]===n)return e||f||0;return!e&&-1}};e.exports={includes:i(!0),indexOf:i(!1)}},UMSQ:function(e,t,n){var r=n("ppGB"),o=Math.min;e.exports=function(e){return e>0?o(r(e),9007199254740991):0}},UTVS:function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},UqBJ:function(e,t,n){"use strict";n.r(t);n("BIHw"),n("QGkA");var r=n("q1tI"),o=n.n(r),a=n("Wbzz"),i=n("qhky"),u=n("jJX9"),c=n("Y6bT");t.default=function(e){var t=Object(a.c)("3827837876").allFile.edges.reduce((function(e,t){var n=t.node,r=n.relativeDirectory.replace("posts/interiors/","").split("/");return e[r[0]]=e[r[0]]||{},e[r[0]][r[1]]=e[r[0]][r[1]]||[],e[r[0]][r[1]].push(n.childImageSharp.fluid),e}),{}),s=[{name:"Студия Воздух",address:"Куйбышева 22, 3 этаж",areas:[{name:"Зал Основной",images:t.vozduh.default},{name:"Зал Фоны",images:t.vozduh.fon}]},{name:"Forest Studio",address:"г. Минск, ул. Маяковского 115, 3 этаж, 310 помещение.",areas:[{images:t.forest.default}]},{name:"Студия Studio46",address:"г.Минск, ул. Большое стиклево 40/2, бизнес-центр S.UNION 4 этаж, 46 офис",areas:[{images:t.studio46.default}]},{name:"Загородная Студия White House",address:"д. Тарасово, ул. Энергетиков, 3",areas:[{images:t.white_house.default}]},{name:"Студия YOYO",address:"г. Минск, Октябрьская 16 (вход около Moby Dick cafe. Второй этаж, направо, белая дверь)",areas:[{images:t.yoyo.default}]},{name:"Студия Lightstudio",address:"Веры Хоружей  29, 8 этаж",areas:[{name:"Зал Light",images:t.light.light},{name:"Зал Flat",images:t.light.flat},{name:"Зал Simple",images:t.light.simple}]},{name:"Студия BLENDA STUDIO",address:"пр. Машерова, 11",areas:[{name:"Зал LIFE",images:t["BLENDA STUDIO"].LIFE},{name:"Зал TIME",images:t["BLENDA STUDIO"].TIME},{name:"Зал VOGUE",images:t["BLENDA STUDIO"].VOGUE}]},{name:"Студия Молоко",address:"Толбухина 4, 3 этаж",areas:[{name:"Зал Кристалл",images:t.Moloko.kristal},{name:"Зал Милена",images:t.Moloko.mil},{name:"Зал Графит",images:t.Moloko.grafit}]},{name:"Студия Феломена",address:"Казинца 11а, крыло Б, 2 этаж",areas:[{name:"Зал White",images:t.Fel.white},{name:"Зал Loft",images:t.Fel.loft},{name:"Зал Family",images:t.Fel.bavy}]},{name:"Студия Катафот",address:"Кнорина 55",areas:[{images:t.Kat.default}]},{name:"Студия Lirika",address:"ФАБРИЦИУСА 8 (3 ЭТАЖ)",areas:[{images:t.lirika.default}]},{name:"Студия Smart Studio",address:"Строителей 1",areas:[{name:"Зал Подиум",images:t.smart_studio.pod},{name:"Зал Винтаж",images:t.smart_studio.vint}]},{name:"Студия ETO",address:"пр-т Партизанский 2/1, 4 этаж",areas:[{name:"Зал Double room",images:t.ETO.DOUBLE},{name:"Зал White",images:t.ETO.w},{name:"Зал Prime",images:t.ETO.Prime}]},{name:"Dreamstudio",address:"ул. Волгоградская 8,1-й этаж, Администратор в конце коридора",areas:[{name:"Зал Lir",images:t.Dream.lir},{name:"Зал Family",images:t.Dream.family},{name:"Зал Прованс",images:t.Dream.provans},{name:"Зал Loft",images:t.Dream.loft}]},{name:"Студия Diva",address:"ул. Октябрьская 10 Б ",areas:[{name:"Зал Light",images:t.diva.light},{name:"Зал Loft",images:t.diva.Loft},{name:"Зал Plaza",images:t.diva.plaza},{name:"Зал Royal",images:t.diva.r}]},{name:"Студия ARIGATO.STUDIO на Старовиленской",address:"ул. Старовиленская 100 к7 (первый этаж)",areas:[{name:"Зал SPACE",images:t.ARIGATO.SPACE},{name:"Зал SIMPLE",images:t.ARIGATO.SIMPLE},{name:"Зал ANTIQUE",images:t.ARIGATO.ANTIQUE},{name:"Зал AESTHETIC",images:t.ARIGATO.AESTHETIC}]},{name:"Студия ARIGATO.STUDIO М.11",address:"пр. Машерова 11 (Здание горизонта)",areas:[{name:"Зал БОЛЬШОЙ 56м2",images:t.ARIGATO.big},{name:"Зал МАЛЫЙ 35м2",images:t.ARIGATO.s},{name:"Зал ИНТЕРЬЕРНЫЙ",images:t.ARIGATO.inter},{name:"Зал ХУДОЖЕСТВЕННАЯ МАСТЕРСКАЯ",images:t.ARIGATO.art}]}];return Object(r.useEffect)((function(){n.e(2).then(n.t.bind(null,"e2AU",7)).then((function(e){(0,e.default)({selector:"a.photo",type:"image"})}))})),o.a.createElement(u.a,e,o.a.createElement(i.a,{title:"Фотограф Минск | Cтудии Минска",defer:!1}),o.a.createElement("h1",null,"Студии Минска"),o.a.createElement("div",{className:"post"},o.a.createElement("div",{className:"post-content"},s.map((function(e){return e.areas.map((function(t,n){return o.a.createElement("div",{key:e.name+"-"+t.name,className:"clear"},o.a.createElement("p",{style:{paddingTop:"28px"}},e.name,o.a.createElement("br",null),n?"":o.a.createElement("span",null,"Адрес: ",e.address,o.a.createElement("br",null)),t.name),o.a.createElement("div",{className:"cards"},(t.images||[]).map((function(n){return o.a.createElement("a",{key:n.src,rel:"gallery",className:"card photo",style:{margin:"1.5% 0 1.5% 3%"},href:n.src,"data-title":e.name+"\n"+(t.name||"")},o.a.createElement("span",{className:"thumbnail"},o.a.createElement(c.a,{fluid:n})))}))))}))}))),o.a.createElement("div",{style:{marginBottom:"1.5%"},className:"clear"})))}},VpIT:function(e,t,n){var r=n("xDBR"),o=n("xs3f");(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.6.5",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},Vu81:function(e,t,n){var r=n("0GbY"),o=n("JBy8"),a=n("dBg+"),i=n("glrk");e.exports=r("Reflect","ownKeys")||function(e){var t=o.f(i(e)),n=a.f;return n?t.concat(n(e)):t}},XGwC:function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},Y6bT:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("9eSz"),i=n.n(a);t.a=function(e){return o.a.createElement(i.a,Object.assign({},e,{style:Object.assign({position:"absolute",top:0,right:0,bottom:0,left:0},e.style||{})}))}},ZfDv:function(e,t,n){var r=n("hh1v"),o=n("6LWA"),a=n("tiKp")("species");e.exports=function(e,t){var n;return o(e)&&("function"!=typeof(n=e.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[a])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},afO8:function(e,t,n){var r,o,a,i=n("f5p1"),u=n("2oRo"),c=n("hh1v"),s=n("kRJp"),f=n("UTVS"),l=n("93I0"),p=n("0BK2"),m=u.WeakMap;if(i){var v=new m,g=v.get,d=v.has,y=v.set;r=function(e,t){return y.call(v,e,t),t},o=function(e){return g.call(v,e)||{}},a=function(e){return d.call(v,e)}}else{var h=l("state");p[h]=!0,r=function(e,t){return s(e,h,t),t},o=function(e){return f(e,h)?e[h]:{}},a=function(e){return f(e,h)}}e.exports={set:r,get:o,has:a,enforce:function(e){return a(e)?o(e):r(e,{})},getterFor:function(e){return function(t){var n;if(!c(t)||(n=o(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}}},busE:function(e,t,n){var r=n("2oRo"),o=n("kRJp"),a=n("UTVS"),i=n("zk60"),u=n("iSVu"),c=n("afO8"),s=c.get,f=c.enforce,l=String(String).split("String");(e.exports=function(e,t,n,u){var c=!!u&&!!u.unsafe,s=!!u&&!!u.enumerable,p=!!u&&!!u.noTargetGet;"function"==typeof n&&("string"!=typeof t||a(n,"name")||o(n,"name",t),f(n).source=l.join("string"==typeof t?t:"")),e!==r?(c?!p&&e[t]&&(s=!0):delete e[t],s?e[t]=n:o(e,t,n)):s?e[t]=n:i(t,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||u(this)}))},"dBg+":function(e,t){t.f=Object.getOwnPropertySymbols},"eDl+":function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},ewvW:function(e,t,n){var r=n("HYAF");e.exports=function(e){return Object(r(e))}},f5p1:function(e,t,n){var r=n("2oRo"),o=n("iSVu"),a=r.WeakMap;e.exports="function"==typeof a&&/native code/.test(o(a))},fHMY:function(e,t,n){var r,o=n("glrk"),a=n("N+g0"),i=n("eDl+"),u=n("0BK2"),c=n("G+Rx"),s=n("zBJ4"),f=n("93I0"),l=f("IE_PROTO"),p=function(){},m=function(e){return"<script>"+e+"<\/script>"},v=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(o){}var e,t;v=r?function(e){e.write(m("")),e.close();var t=e.parentWindow.Object;return e=null,t}(r):((t=s("iframe")).style.display="none",c.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(m("document.F=Object")),e.close(),e.F);for(var n=i.length;n--;)delete v.prototype[i[n]];return v()};u[l]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(p.prototype=o(e),n=new p,p.prototype=null,n[l]=e):n=v(),void 0===t?n:a(n,t)}},"g6v/":function(e,t,n){var r=n("0Dky");e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},glrk:function(e,t,n){var r=n("hh1v");e.exports=function(e){if(!r(e))throw TypeError(String(e)+" is not an object");return e}},hh1v:function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},iSVu:function(e,t,n){var r=n("xs3f"),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(e){return o.call(e)}),e.exports=r.inspectSource},kOOl:function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++n+r).toString(36)}},kRJp:function(e,t,n){var r=n("g6v/"),o=n("m/L8"),a=n("XGwC");e.exports=r?function(e,t,n){return o.f(e,t,a(1,n))}:function(e,t,n){return e[t]=n,e}},lMq5:function(e,t,n){var r=n("0Dky"),o=/#|\.prototype\./,a=function(e,t){var n=u[i(e)];return n==s||n!=c&&("function"==typeof t?r(t):!!t)},i=a.normalize=function(e){return String(e).replace(o,".").toLowerCase()},u=a.data={},c=a.NATIVE="N",s=a.POLYFILL="P";e.exports=a},"m/L8":function(e,t,n){var r=n("g6v/"),o=n("DPsx"),a=n("glrk"),i=n("wE6v"),u=Object.defineProperty;t.f=r?u:function(e,t,n){if(a(e),t=i(t,!0),a(n),o)try{return u(e,t,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},or9q:function(e,t,n){"use strict";var r=n("6LWA"),o=n("UMSQ"),a=n("A2ZE"),i=function(e,t,n,u,c,s,f,l){for(var p,m=c,v=0,g=!!f&&a(f,l,3);v<u;){if(v in n){if(p=g?g(n[v],v,t):n[v],s>0&&r(p))m=i(e,t,p,o(p.length),m,s-1)-1;else{if(m>=9007199254740991)throw TypeError("Exceed the acceptable array length");e[m]=p}m++}v++}return m};e.exports=i},ppGB:function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:n)(e)}},tiKp:function(e,t,n){var r=n("2oRo"),o=n("VpIT"),a=n("UTVS"),i=n("kOOl"),u=n("STAE"),c=n("/b8u"),s=o("wks"),f=r.Symbol,l=c?f:f&&f.withoutSetter||i;e.exports=function(e){return a(s,e)||(u&&a(f,e)?s[e]=f[e]:s[e]=l("Symbol."+e)),s[e]}},wE6v:function(e,t,n){var r=n("hh1v");e.exports=function(e,t){if(!r(e))return e;var n,o;if(t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;if("function"==typeof(n=e.valueOf)&&!r(o=n.call(e)))return o;if(!t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},xDBR:function(e,t){e.exports=!1},xrYK:function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},xs3f:function(e,t,n){var r=n("2oRo"),o=n("zk60"),a=r["__core-js_shared__"]||o("__core-js_shared__",{});e.exports=a},yoRg:function(e,t,n){var r=n("UTVS"),o=n("/GqU"),a=n("TWQb").indexOf,i=n("0BK2");e.exports=function(e,t){var n,u=o(e),c=0,s=[];for(n in u)!r(i,n)&&r(u,n)&&s.push(n);for(;t.length>c;)r(u,n=t[c++])&&(~a(s,n)||s.push(n));return s}},zBJ4:function(e,t,n){var r=n("2oRo"),o=n("hh1v"),a=r.document,i=o(a)&&o(a.createElement);e.exports=function(e){return i?a.createElement(e):{}}},zk60:function(e,t,n){var r=n("2oRo"),o=n("kRJp");e.exports=function(e,t){try{o(r,e,t)}catch(n){r[e]=t}return t}}}]);
//# sourceMappingURL=component---src-pages-studios-js-af83aba4d0599e311560.js.map