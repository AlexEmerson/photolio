(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[874],{9662:function(e,t,n){var r=n(614),a=n(6330);e.exports=function(e){if(r(e))return e;throw TypeError(a(e)+" is not a function")}},9670:function(e,t,n){var r=n(111);e.exports=function(e){if(r(e))return e;throw TypeError(String(e)+" is not an object")}},1318:function(e,t,n){var r=n(5656),a=n(7466),o=n(1400),i=function(e){return function(t,n,i){var u,c=r(t),s=a(c.length),f=o(i,s);if(e&&n!=n){for(;s>f;)if((u=c[f++])!=u)return!0}else for(;s>f;f++)if((e||f in c)&&c[f]===n)return e||f||0;return!e&&-1}};e.exports={includes:i(!0),indexOf:i(!1)}},7475:function(e,t,n){var r=n(3157),a=n(4411),o=n(111),i=n(5112)("species");e.exports=function(e){var t;return r(e)&&(t=e.constructor,(a(t)&&(t===Array||r(t.prototype))||o(t)&&null===(t=t[i]))&&(t=void 0)),void 0===t?Array:t}},5417:function(e,t,n){var r=n(7475);e.exports=function(e,t){return new(r(e))(0===t?0:t)}},4326:function(e){var t={}.toString;e.exports=function(e){return t.call(e).slice(8,-1)}},648:function(e,t,n){var r=n(1694),a=n(614),o=n(4326),i=n(5112)("toStringTag"),u="Arguments"==o(function(){return arguments}());e.exports=r?o:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(n){}}(t=Object(e),i))?n:u?o(t):"Object"==(r=o(t))&&a(t.callee)?"Arguments":r}},9920:function(e,t,n){var r=n(6656),a=n(3887),o=n(1236),i=n(3070);e.exports=function(e,t){for(var n=a(t),u=i.f,c=o.f,s=0;s<n.length;s++){var f=n[s];r(e,f)||u(e,f,c(t,f))}}},8880:function(e,t,n){var r=n(9781),a=n(3070),o=n(9114);e.exports=r?function(e,t,n){return a.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},9114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},9781:function(e,t,n){var r=n(7293);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(e,t,n){var r=n(7854),a=n(111),o=r.document,i=a(o)&&a(o.createElement);e.exports=function(e){return i?o.createElement(e):{}}},8113:function(e,t,n){var r=n(5005);e.exports=r("navigator","userAgent")||""},7392:function(e,t,n){var r,a,o=n(7854),i=n(8113),u=o.process,c=o.Deno,s=u&&u.versions||c&&c.version,f=s&&s.v8;f?a=(r=f.split("."))[0]<4?1:r[0]+r[1]:i&&(!(r=i.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=i.match(/Chrome\/(\d+)/))&&(a=r[1]),e.exports=a&&+a},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(e,t,n){var r=n(7854),a=n(1236).f,o=n(8880),i=n(1320),u=n(3505),c=n(9920),s=n(4705);e.exports=function(e,t){var n,f,l,m,p,g=e.target,v=e.global,d=e.stat;if(n=v?r:d?r[g]||u(g,{}):(r[g]||{}).prototype)for(f in t){if(m=t[f],l=e.noTargetGet?(p=a(n,f))&&p.value:n[f],!s(v?f:g+(d?".":"#")+f,e.forced)&&void 0!==l){if(typeof m==typeof l)continue;c(m,l)}(e.sham||l&&l.sham)&&o(m,"sham",!0),i(n,f,m,e)}}},7293:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},6790:function(e,t,n){"use strict";var r=n(3157),a=n(7466),o=n(9974),i=function(e,t,n,u,c,s,f,l){for(var m,p=c,g=0,v=!!f&&o(f,l,3);g<u;){if(g in n){if(m=v?v(n[g],g,t):n[g],s>0&&r(m))p=i(e,t,m,a(m.length),p,s-1)-1;else{if(p>=9007199254740991)throw TypeError("Exceed the acceptable array length");e[p]=m}p++}g++}return p};e.exports=i},9974:function(e,t,n){var r=n(9662);e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,a){return e.call(t,n,r,a)}}return function(){return e.apply(t,arguments)}}},6530:function(e,t,n){var r=n(9781),a=n(6656),o=Function.prototype,i=r&&Object.getOwnPropertyDescriptor,u=a(o,"name"),c=u&&"something"===function(){}.name,s=u&&(!r||r&&i(o,"name").configurable);e.exports={EXISTS:u,PROPER:c,CONFIGURABLE:s}},5005:function(e,t,n){var r=n(7854),a=n(614),o=function(e){return a(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?o(r[e]):r[e]&&r[e][t]}},8173:function(e,t,n){var r=n(9662);e.exports=function(e,t){var n=e[t];return null==n?void 0:r(n)}},7854:function(e,t,n){var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},6656:function(e,t,n){var r=n(7908),a={}.hasOwnProperty;e.exports=Object.hasOwn||function(e,t){return a.call(r(e),t)}},3501:function(e){e.exports={}},4664:function(e,t,n){var r=n(9781),a=n(7293),o=n(317);e.exports=!r&&!a((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,n){var r=n(7293),a=n(4326),o="".split;e.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==a(e)?o.call(e,""):Object(e)}:Object},2788:function(e,t,n){var r=n(614),a=n(5465),o=Function.toString;r(a.inspectSource)||(a.inspectSource=function(e){return o.call(e)}),e.exports=a.inspectSource},9909:function(e,t,n){var r,a,o,i=n(8536),u=n(7854),c=n(111),s=n(8880),f=n(6656),l=n(5465),m=n(6200),p=n(3501),g="Object already initialized",v=u.WeakMap;if(i||l.state){var d=l.state||(l.state=new v),h=d.get,y=d.has,b=d.set;r=function(e,t){if(y.call(d,e))throw new TypeError(g);return t.facade=e,b.call(d,e,t),t},a=function(e){return h.call(d,e)||{}},o=function(e){return y.call(d,e)}}else{var O=m("state");p[O]=!0,r=function(e,t){if(f(e,O))throw new TypeError(g);return t.facade=e,s(e,O,t),t},a=function(e){return f(e,O)?e[O]:{}},o=function(e){return f(e,O)}}e.exports={set:r,get:a,has:o,enforce:function(e){return o(e)?a(e):r(e,{})},getterFor:function(e){return function(t){var n;if(!c(t)||(n=a(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}}},3157:function(e,t,n){var r=n(4326);e.exports=Array.isArray||function(e){return"Array"==r(e)}},614:function(e){e.exports=function(e){return"function"==typeof e}},4411:function(e,t,n){var r=n(7293),a=n(614),o=n(648),i=n(5005),u=n(2788),c=[],s=i("Reflect","construct"),f=/^\s*(?:class|function)\b/,l=f.exec,m=!f.exec((function(){})),p=function(e){if(!a(e))return!1;try{return s(Object,c,e),!0}catch(t){return!1}};e.exports=!s||r((function(){var e;return p(p.call)||!p(Object)||!p((function(){e=!0}))||e}))?function(e){if(!a(e))return!1;switch(o(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}return m||!!l.call(f,u(e))}:p},4705:function(e,t,n){var r=n(7293),a=n(614),o=/#|\.prototype\./,i=function(e,t){var n=c[u(e)];return n==f||n!=s&&(a(t)?r(t):!!t)},u=i.normalize=function(e){return String(e).replace(o,".").toLowerCase()},c=i.data={},s=i.NATIVE="N",f=i.POLYFILL="P";e.exports=i},111:function(e,t,n){var r=n(614);e.exports=function(e){return"object"==typeof e?null!==e:r(e)}},1913:function(e){e.exports=!1},2190:function(e,t,n){var r=n(614),a=n(5005),o=n(3307);e.exports=o?function(e){return"symbol"==typeof e}:function(e){var t=a("Symbol");return r(t)&&Object(e)instanceof t}},133:function(e,t,n){var r=n(7392),a=n(7293);e.exports=!!Object.getOwnPropertySymbols&&!a((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},8536:function(e,t,n){var r=n(7854),a=n(614),o=n(2788),i=r.WeakMap;e.exports=a(i)&&/native code/.test(o(i))},3070:function(e,t,n){var r=n(9781),a=n(4664),o=n(9670),i=n(4948),u=Object.defineProperty;t.f=r?u:function(e,t,n){if(o(e),t=i(t),o(n),a)try{return u(e,t,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},1236:function(e,t,n){var r=n(9781),a=n(5296),o=n(9114),i=n(5656),u=n(4948),c=n(6656),s=n(4664),f=Object.getOwnPropertyDescriptor;t.f=r?f:function(e,t){if(e=i(e),t=u(t),s)try{return f(e,t)}catch(n){}if(c(e,t))return o(!a.f.call(e,t),e[t])}},8006:function(e,t,n){var r=n(6324),a=n(748).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,a)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},6324:function(e,t,n){var r=n(6656),a=n(5656),o=n(1318).indexOf,i=n(3501);e.exports=function(e,t){var n,u=a(e),c=0,s=[];for(n in u)!r(i,n)&&r(u,n)&&s.push(n);for(;t.length>c;)r(u,n=t[c++])&&(~o(s,n)||s.push(n));return s}},5296:function(e,t){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,a=r&&!n.call({1:2},1);t.f=a?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},2140:function(e,t,n){var r=n(614),a=n(111);e.exports=function(e,t){var n,o;if("string"===t&&r(n=e.toString)&&!a(o=n.call(e)))return o;if(r(n=e.valueOf)&&!a(o=n.call(e)))return o;if("string"!==t&&r(n=e.toString)&&!a(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},3887:function(e,t,n){var r=n(5005),a=n(8006),o=n(5181),i=n(9670);e.exports=r("Reflect","ownKeys")||function(e){var t=a.f(i(e)),n=o.f;return n?t.concat(n(e)):t}},1320:function(e,t,n){var r=n(7854),a=n(614),o=n(6656),i=n(8880),u=n(3505),c=n(2788),s=n(9909),f=n(6530).CONFIGURABLE,l=s.get,m=s.enforce,p=String(String).split("String");(e.exports=function(e,t,n,c){var s,l=!!c&&!!c.unsafe,g=!!c&&!!c.enumerable,v=!!c&&!!c.noTargetGet,d=c&&void 0!==c.name?c.name:t;a(n)&&("Symbol("===String(d).slice(0,7)&&(d="["+String(d).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!o(n,"name")||f&&n.name!==d)&&i(n,"name",d),(s=m(n)).source||(s.source=p.join("string"==typeof d?d:""))),e!==r?(l?!v&&e[t]&&(g=!0):delete e[t],g?e[t]=n:i(e,t,n)):g?e[t]=n:u(t,n)})(Function.prototype,"toString",(function(){return a(this)&&l(this).source||c(this)}))},4488:function(e){e.exports=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}},3505:function(e,t,n){var r=n(7854);e.exports=function(e,t){try{Object.defineProperty(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},6200:function(e,t,n){var r=n(2309),a=n(9711),o=r("keys");e.exports=function(e){return o[e]||(o[e]=a(e))}},5465:function(e,t,n){var r=n(7854),a=n(3505),o="__core-js_shared__",i=r[o]||a(o,{});e.exports=i},2309:function(e,t,n){var r=n(1913),a=n(5465);(e.exports=function(e,t){return a[e]||(a[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.18.1",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},1400:function(e,t,n){var r=n(9958),a=Math.max,o=Math.min;e.exports=function(e,t){var n=r(e);return n<0?a(n+t,0):o(n,t)}},5656:function(e,t,n){var r=n(8361),a=n(4488);e.exports=function(e){return r(a(e))}},9958:function(e){var t=Math.ceil,n=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?n:t)(e)}},7466:function(e,t,n){var r=n(9958),a=Math.min;e.exports=function(e){return e>0?a(r(e),9007199254740991):0}},7908:function(e,t,n){var r=n(4488);e.exports=function(e){return Object(r(e))}},7593:function(e,t,n){var r=n(111),a=n(2190),o=n(8173),i=n(2140),u=n(5112)("toPrimitive");e.exports=function(e,t){if(!r(e)||a(e))return e;var n,c=o(e,u);if(c){if(void 0===t&&(t="default"),n=c.call(e,t),!r(n)||a(n))return n;throw TypeError("Can't convert object to primitive value")}return void 0===t&&(t="number"),i(e,t)}},4948:function(e,t,n){var r=n(7593),a=n(2190);e.exports=function(e){var t=r(e,"string");return a(t)?t:String(t)}},1694:function(e,t,n){var r={};r[n(5112)("toStringTag")]="z",e.exports="[object z]"===String(r)},6330:function(e){e.exports=function(e){try{return String(e)}catch(t){return"Object"}}},9711:function(e){var t=0,n=Math.random();e.exports=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++t+n).toString(36)}},3307:function(e,t,n){var r=n(133);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5112:function(e,t,n){var r=n(7854),a=n(2309),o=n(6656),i=n(9711),u=n(133),c=n(3307),s=a("wks"),f=r.Symbol,l=c?f:f&&f.withoutSetter||i;e.exports=function(e){return o(s,e)&&(u||"string"==typeof s[e])||(u&&o(f,e)?s[e]=f[e]:s[e]=l("Symbol."+e)),s[e]}},4944:function(e,t,n){"use strict";var r=n(2109),a=n(6790),o=n(7908),i=n(7466),u=n(9958),c=n(5417);r({target:"Array",proto:!0},{flat:function(){var e=arguments.length?arguments[0]:void 0,t=o(this),n=i(t.length),r=c(t,0);return r.length=a(r,t,t,n,0,void 0===e?1:u(e)),r}})},7160:function(e,t,n){"use strict";var r=n(7294),a=n(2359);t.Z=function(e){return r.createElement(a.G,Object.assign({},e,{style:Object.assign({position:"absolute",top:0,right:0,bottom:0,left:0},e.style||{})}))}},6137:function(e,t,n){"use strict";n.r(t);n(4944);var r=n(7294),a=n(5444),o=n(5186),i=n(4365),u=n(7160);t.default=function(e){var t=(0,a.useStaticQuery)("3475244624").allFile.edges.reduce((function(e,t){var n=t.node,r=n.relativeDirectory.replace("posts/interiors/","").split("/");return e[r[0]]=e[r[0]]||{},e[r[0]][r[1]]=e[r[0]][r[1]]||[],e[r[0]][r[1]].push(n.childImageSharp.gatsbyImageData),e}),{}),c=[{name:"Студия Воздух",address:"Куйбышева 22, 3 этаж",areas:[{name:"Зал Основной",images:t.vozduh.default},{name:"Зал Фоны",images:t.vozduh.fon}]},{name:"Forest Studio",address:"г. Минск, ул. Маяковского 115, 3 этаж, 310 помещение.",areas:[{name:"Зал Scandi",images:t.forest.Scandi},{name:"Зал Mone",images:t.forest.MONE}]},{name:"Студия Studio46",address:"г.Минск, ул. Большое стиклево 40/2, бизнес-центр S.UNION 4 этаж, 46 офис",areas:[{images:t.studio46.default}]},{name:"Загородная Студия White House",address:"д. Тарасово, ул. Энергетиков, 3",areas:[{images:t.white_house.default}]},{name:"Студия YOYO",address:"г. Минск, Октябрьская 16 (вход около Moby Dick cafe. Второй этаж, направо, белая дверь)",areas:[{images:t.yoyo.zal1},{name:"Зал 2",images:t.yoyo.Zal2}]},{name:"Студия Lightstudio",address:"Веры Хоружей  29, 8 этаж",areas:[{name:"Зал Light",images:t.light.light},{name:"Зал Flat",images:t.light.flat},{name:"Зал Simple",images:t.light.simple}]},{name:"Студия BLENDA STUDIO",address:"пр. Машерова, 11",areas:[{name:"Зал LIFE",images:t["BLENDA STUDIO"].LIFE},{name:"Зал TIME",images:t["BLENDA STUDIO"].TIME},{name:"Зал VOGUE",images:t["BLENDA STUDIO"].VOGUE}]},{name:"Студия Молоко",address:"Толбухина 4, 3 этаж",areas:[{name:"Зал Кристалл",images:t.Moloko.kristal},{name:"Зал Милена",images:t.Moloko.mil},{name:"Зал Графит",images:t.Moloko.grafit}]},{name:"Студия Феломена",address:"Казинца 11а, крыло Б, 2 этаж",areas:[{name:"Зал White",images:t.Fel.white},{name:"Зал Loft",images:t.Fel.loft},{name:"Зал Family",images:t.Fel.bavy}]},{name:"Студия Катафот",address:"Кнорина 55",areas:[{images:t.Kat.default}]},{name:"Студия Lirika",address:"ФАБРИЦИУСА 8 (3 ЭТАЖ)",areas:[{images:t.lirika.default}]},{name:"Студия ETO",address:"пр-т Партизанский 2/1, 4 этаж",areas:[{name:"Зал Double room",images:t.ETO.DOUBLE},{name:"Зал White",images:t.ETO.w},{name:"Зал Prime",images:t.ETO.Prime}]},{name:"Студия PhotoHub",address:"ул. Якуба Коласа , д.1, 4-ый этаж",areas:[{name:"Зал Рубудий",images:t.Photohub.Ryb},{name:"Зал Вольфрам",images:t.Photohub.Vol},{name:"Зал Висмут",images:t.Photohub.Vis},{name:"Зал Аурум",images:t.Photohub.Au},{name:"Зал Ксенон",images:t.Photohub.ks},{name:"Зал Никель",images:t.Photohub.Nik},{name:"Зал Neon",images:t.Photohub.Neon},{name:"Зал Радон",images:t.Photohub.Rad}]},{name:"Студия Photostage",address:"ул.Тимирязева дом 9 корпус 8, 4 этаж",areas:[{name:"Зал Set",images:t.PHOTOSTAGE.Set},{name:"Зал White",images:t.PHOTOSTAGE.Deko},{name:"Зал Prime",images:t.PHOTOSTAGE.Craft}]},{name:"Dreamstudio",address:"ул. Волгоградская 8,1-й этаж, Администратор в конце коридора",areas:[{name:"Зал Lir",images:t.Dream.lir},{name:"Зал Family",images:t.Dream.family},{name:"Зал Прованс",images:t.Dream.provans},{name:"Зал Retro",images:t.Dream.retro},{name:"Зал Loft",images:t.Dream.loft}]},{name:"Студия Diva",address:"ул. Октябрьская 10 Б ",areas:[{name:"Зал Light",images:t.diva.light},{name:"Зал Loft",images:t.diva.Loft},{name:"Зал Plaza",images:t.diva.plaza},{name:"Зал Royal",images:t.diva.r}]},{name:"Студия ARIGATO.STUDIO на Старовиленской",address:"ул. Старовиленская 100 к7 (первый этаж)",areas:[{name:"Зал SPACE",images:t.ARIGATO.SPACE},{name:"Зал SIMPLE",images:t.ARIGATO.SIMPLE},{name:"Зал ANTIQUE",images:t.ARIGATO.ANTIQUE},{name:"Зал AESTHETIC",images:t.ARIGATO.AESTHETIC}]},{name:"Студия ARIGATO.STUDIO М.11",address:"пр. Машерова 11 (Здание горизонта)",areas:[{name:"Зал БОЛЬШОЙ 56м2",images:t.ARIGATO.big},{name:"Зал МАЛЫЙ 35м2",images:t.ARIGATO.s},{name:"Зал ИНТЕРЬЕРНЫЙ",images:t.ARIGATO.inter},{name:"Зал ХУДОЖЕСТВЕННАЯ МАСТЕРСКАЯ",images:t.ARIGATO.art}]}];return(0,r.useEffect)((function(){n.e(419).then(n.t.bind(n,6419,23)).then((function(e){(0,e.default)({selector:"a.photo",type:"image"})}))})),r.createElement(i.Z,e,r.createElement(o.q,{title:"Фотограф Минск | Cтудии Минска",defer:!1}),r.createElement("h1",null,"Студии Минска"),r.createElement("div",{className:"post"},r.createElement("div",{className:"post-content"},c.map((function(e){return e.areas.map((function(t,n){return r.createElement("div",{key:e.name+"-"+t.name,className:"clear"},r.createElement("p",{style:{paddingTop:"28px"}},e.name,r.createElement("br",null),n?"":r.createElement("span",null,"Адрес: ",e.address,r.createElement("br",null)),t.name),r.createElement("div",{className:"cards"},(t.images||[]).map((function(n){return r.createElement("a",{key:n.images.fallback.src,rel:"gallery",className:"card photo",style:{margin:"1.5% 0 1.5% 3%"},href:n.images.fallback.src,"data-title":e.name+"\n"+(t.name||"")},r.createElement("span",{className:"thumbnail"},r.createElement(u.Z,{image:n,alt:e.name+"\n"+(t.name||"")})))}))))}))}))),r.createElement("div",{style:{marginBottom:"1.5%"},className:"clear"})))}}}]);
//# sourceMappingURL=component---src-pages-studios-js-9f8d7a8aac8bb7c7df2e.js.map