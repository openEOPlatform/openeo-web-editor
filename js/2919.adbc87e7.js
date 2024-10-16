"use strict";(globalThis["webpackChunk_openeo_web_editor"]=globalThis["webpackChunk_openeo_web_editor"]||[]).push([[2919],{99710:(n,t,r)=>{r.r(t),r.d(t,{ar:()=>L,bg:()=>C,ca:()=>x,cs:()=>F,da:()=>I,de:()=>S,en:()=>W,es:()=>E,et:()=>P,fa:()=>V,fi:()=>Y,fo:()=>B,fr:()=>H,gr:()=>J,he:()=>N,hr:()=>R,hu:()=>$,is:()=>q,isoDuration:()=>pn,it:()=>G,ja:()=>K,ko:()=>Q,lo:()=>X,lt:()=>nn,lv:()=>rn,ms:()=>en,nl:()=>un,no:()=>on,pl:()=>cn,pt:()=>an,ro:()=>fn,ru:()=>dn,sk:()=>mn,sv:()=>hn,tr:()=>yn,uk:()=>kn,ur:()=>ln,vi:()=>wn,zhCN:()=>gn,zhTW:()=>vn});
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var e=function(){return e=Object.assign||function(n){for(var t,r=1,e=arguments.length;r<e;r++)for(var u in t=arguments[r],t)Object.prototype.hasOwnProperty.call(t,u)&&(n[u]=t[u]);return n},e.apply(this,arguments)},u="\\d+(?:[\\.,]\\d+)?",i="("+u+"W)",o="("+u+"Y)?("+u+"M)?("+u+"D)?",s="T("+u+"H)?("+u+"M)?("+u+"S)?",c="^P(?:"+i+"|"+o+"(?:"+s+")?)$",a=new RegExp(c),f=["weeks","years","months","days","hours","minutes","seconds"],d={years:"Y",months:"M",days:"D",hours:"H",minutes:"M",seconds:"S",weeks:"W"},m=Object.freeze({weeks:0,years:0,months:0,days:0,hours:0,minutes:0,seconds:0}),h=function(n){var t=n.match(a);if(!t)throw new Error("Invalid duration string");var r=t.slice(1).reduce((function(n,t,r){return n[f[r]]=parseFloat(t)||0,n}),{});return r},y=function(n){return n.weeks&&n.weeks>0?Object.assign({},m,{weeks:n.weeks}):f.reduce((function(t,r){var u;return e(e({},t),(u={},u[r]=n[r]||0,u))}),{})},k={locales:{},options:{},setLocales:function(n,t){this.locales=e(e({},this.locales),n),t&&(this.options=e(e({},this.options),t))},getLangConfig:function(n){var t=this.locales[n];if(!t&&this.options.fallbackLocale&&(t=this.locales[this.options.fallbackLocale]),!t)throw new Error("isoDuration: Translations for language: "+n+" are not provided");return t}},l=function(n){for(var t=["years","months","days"],r="",e=0,u=t;e<u.length;e++){var i=u[e];n[i]&&(r+=""+n[i]+d[i])}return r},w=function(n){for(var t=["hours","minutes","seconds"],r="",e=0,u=t;e<u.length;e++){var i=u[e];n[i]&&(r+=""+n[i]+d[i])}return r},g=function(n){if(n.weeks>0)return"P"+n.weeks+"W";var t="P",r=l(n);r&&(t+=r);var e=w(n);return e&&(t+="T"+e),r||e||(t+="0D"),t},v=function(n,t){var r=k.getLangConfig(t);return n.weeks+" "+r.weeks(n.weeks)},p=function(n,t,r){for(var e=k.getLangConfig(t),u="",i=["years","months","days","hours","minutes","seconds"],o=0,s=0;s<i.length;s++){var c=i[s],a=n[c];if(a&&(""!==u&&(u+=" "),u+=a+" "+e[c](a),o++,r&&r.largest&&r.largest<=o))break}return u},b=function(n,t,r){return n.weeks>0?v(n,t):p(n,t,r)},j=["seconds","minutes","hours","days","months"],M=function(n){return function(t){return{nextUnitValue:Math.floor(t/n),value:t%n}}},O=function(n,t){return new Date(t,n+1,0).getDate()},z={seconds:M(60),minutes:M(60),hours:M(24),days:function(n,t){var r=t?new Date(t.getTime()):new Date,e=n,u=0,i=O(r.getMonth(),r.getFullYear());while(e>i)e-=i,u++,r.setMonth(r.getMonth()+1),i=O(r.getMonth(),r.getFullYear());return{nextUnitValue:u,value:e}},months:M(12)},A=function(n,t){for(var r=e({},n),u=0;u<j.length;u++){var i=j[u],o=r[i];if(o>0){var s=z[i](o,t);if(r[i]=s.value,s.nextUnitValue){var c="months"===i?"years":j[u+1];r[c]=r[c]+s.nextUnitValue}}}return r},D=function(){function n(n){this.durationObj=n}return n.prototype.parse=function(){return this.durationObj},n.prototype.toString=function(){return g(this.durationObj)},n.prototype.humanize=function(n,t){return b(this.durationObj,n,t)},n.prototype.normalize=function(n){return this.durationObj=A(this.durationObj,n),this},n.prototype.isEmpty=function(){var n=this;return Object.keys(this.durationObj).every((function(t){return 0===n.durationObj[t]}))},n}();function U(n){return n<=2?0:n>2&&n<11?1:0}var L={years:function(n){return 1===n?"سنة":"سنوات"},months:function(n){return 1===n?"شهر":"أشهر"},weeks:function(n){return 1===n?"أسبوع":"أسابيع"},days:function(n){return 1===n?"يوم":"أيام"},hours:function(n){return 1===n?"ساعة":"ساعات"},minutes:function(n){return["دقيقة","دقائق"][U(n)]},seconds:function(n){return 1===n?"ثانية":"ثواني"},decimal:","};function T(n){return Math.floor(n)!==n?2:n%100>=5&&n%100<=20||n%10>=5&&n%10<=9||n%10===0?0:n%10===1?1:n>1?2:0}var C={years:function(n){return["години","година","години"][T(n)]},months:function(n){return["месеца","месец","месеца"][T(n)]},weeks:function(n){return["седмици","седмица","седмици"][T(n)]},days:function(n){return["дни","ден","дни"][T(n)]},hours:function(n){return["часа","час","часа"][T(n)]},minutes:function(n){return["минути","минута","минути"][T(n)]},seconds:function(n){return["секунди","секунда","секунди"][T(n)]},decimal:","},x={years:function(n){return"any"+(1===n?"":"s")},months:function(n){return"mes"+(1===n?"":"os")},weeks:function(n){return"setman"+(1===n?"a":"es")},days:function(n){return"di"+(1===n?"a":"es")},hours:function(n){return"hor"+(1===n?"a":"es")},minutes:function(n){return"minut"+(1===n?"":"s")},seconds:function(n){return"segon"+(1===n?"":"s")},decimal:","};function _(n){return 1===n?0:Math.floor(n)!==n?1:n%10>=2&&n%10<=4&&n%100<10?2:3}var F={years:function(n){return["rok","roku","roky","let"][_(n)]},months:function(n){return["měsíc","měsíce","měsíce","měsíců"][_(n)]},weeks:function(n){return["týden","týdne","týdny","týdnů"][_(n)]},days:function(n){return["den","dne","dny","dní"][_(n)]},hours:function(n){return["hodina","hodiny","hodiny","hodin"][_(n)]},minutes:function(n){return["minuta","minuty","minuty","minut"][_(n)]},seconds:function(n){return["sekunda","sekundy","sekundy","sekund"][_(n)]},decimal:","},I={years:function(){return"år"},months:function(n){return"måned"+(1===n?"":"er")},weeks:function(n){return"uge"+(1===n?"":"r")},days:function(n){return"dag"+(1===n?"":"e")},hours:function(n){return"time"+(1===n?"":"r")},minutes:function(n){return"minut"+(1===n?"":"ter")},seconds:function(n){return"sekund"+(1===n?"":"er")},decimal:","},S={years:function(n){return"Jahr"+(1===n?"":"e")},months:function(n){return"Monat"+(1===n?"":"e")},weeks:function(n){return"Woche"+(1===n?"":"n")},days:function(n){return"Tag"+(1===n?"":"e")},hours:function(n){return"Stunde"+(1===n?"":"n")},minutes:function(n){return"Minute"+(1===n?"":"n")},seconds:function(n){return"Sekunde"+(1===n?"":"n")},decimal:","},W={years:function(n){return"year"+(1===n?"":"s")},months:function(n){return"month"+(1===n?"":"s")},weeks:function(n){return"week"+(1===n?"":"s")},days:function(n){return"day"+(1===n?"":"s")},hours:function(n){return"hour"+(1===n?"":"s")},minutes:function(n){return"minute"+(1===n?"":"s")},seconds:function(n){return"second"+(1===n?"":"s")},decimal:"."},E={years:function(n){return"año"+(1===n?"":"s")},months:function(n){return"mes"+(1===n?"":"es")},weeks:function(n){return"semana"+(1===n?"":"s")},days:function(n){return"día"+(1===n?"":"s")},hours:function(n){return"hora"+(1===n?"":"s")},minutes:function(n){return"minuto"+(1===n?"":"s")},seconds:function(n){return"segundo"+(1===n?"":"s")},decimal:","},P={years:function(n){return"aasta"+(1===n?"":"t")},months:function(n){return"kuu"+(1===n?"":"d")},weeks:function(n){return"nädal"+(1===n?"":"at")},days:function(n){return"päev"+(1===n?"":"a")},hours:function(n){return"tund"+(1===n?"":"i")},minutes:function(n){return"minut"+(1===n?"":"it")},seconds:function(n){return"sekund"+(1===n?"":"it")},decimal:","},V={years:function(){return"سال"},months:function(){return"ماه"},weeks:function(){return"هفته"},days:function(){return"روز"},hours:function(){return"ساعت"},minutes:function(){return"دقیقه"},seconds:function(){return"ثانیه"},decimal:"."},Y={years:function(n){return 1===n?"vuosi":"vuotta"},months:function(n){return 1===n?"kuukausi":"kuukautta"},weeks:function(n){return"viikko"+(1===n?"":"a")},days:function(n){return"päivä"+(1===n?"":"ä")},hours:function(n){return"tunti"+(1===n?"":"a")},minutes:function(n){return"minuutti"+(1===n?"":"a")},seconds:function(n){return"sekunti"+(1===n?"":"a")},decimal:","},B={years:function(){return"ár"},months:function(n){return 1===n?"mánaður":"mánaðir"},weeks:function(n){return 1===n?"vika":"vikur"},days:function(n){return 1===n?"dagur":"dagar"},hours:function(n){return 1===n?"tími":"tímar"},minutes:function(n){return 1===n?"minuttur":"minuttir"},seconds:function(){return"sekund"},decimal:","},H={years:function(n){return"an"+(n>=2?"s":"")},months:function(){return"mois"},weeks:function(n){return"semaine"+(n>=2?"s":"")},days:function(n){return"jour"+(n>=2?"s":"")},hours:function(n){return"heure"+(n>=2?"s":"")},minutes:function(n){return"minute"+(n>=2?"s":"")},seconds:function(n){return"seconde"+(n>=2?"s":"")},decimal:","},J={years:function(n){return 1===n?"χρόνος":"χρόνια"},months:function(n){return 1===n?"μήνας":"μήνες"},weeks:function(n){return 1===n?"εβδομάδα":"εβδομάδες"},days:function(n){return 1===n?"μέρα":"μέρες"},hours:function(n){return 1===n?"ώρα":"ώρες"},minutes:function(n){return 1===n?"λεπτό":"λεπτά"},seconds:function(n){return 1===n?"δευτερόλεπτο":"δευτερόλεπτα"},decimal:","},N={years:function(n){return 1===n?"שנה":"שנים"},months:function(n){return 1===n?"חודש":"חודשים"},weeks:function(n){return 1===n?"שבוע":"שבועות"},days:function(n){return 1===n?"יום":"ימים"},hours:function(n){return 1===n?"שעה":"שעות"},minutes:function(n){return 1===n?"דקה":"דקות"},seconds:function(n){return 1===n?"שניה":"שניות"},decimal:"."},R={years:function(n){return n%10===2||n%10===3||n%10===4?"godine":"godina"},months:function(n){return 1===n?"mjesec":2===n||3===n||4===n?"mjeseca":"mjeseci"},weeks:function(n){return n%10===1&&11!==n?"tjedan":"tjedna"},days:function(n){return 1===n?"dan":"dana"},hours:function(n){return 1===n?"sat":2===n||3===n||4===n?"sata":"sati"},minutes:function(n){var t=n%10;return 2!==t&&3!==t&&4!==t||!(n<10||n>14)?"minuta":"minute"},seconds:function(n){return 10===n||11===n||12===n||13===n||14===n||16===n||17===n||18===n||19===n||n%10===5?"sekundi":n%10===1?"sekunda":n%10===2||n%10===3||n%10===4?"sekunde":"sekundi"},decimal:","},$={years:function(){return"év"},months:function(){return"hónap"},weeks:function(){return"hét"},days:function(){return"nap"},hours:function(){return"óra"},minutes:function(){return"perc"},seconds:function(){return"másodperc"},decimal:","},q={years:function(){return"ár"},months:function(n){return"mánuð"+(1===n?"ur":"ir")},weeks:function(n){return"vik"+(1===n?"a":"ur")},days:function(n){return"dag"+(1===n?"ur":"ar")},hours:function(n){return"klukkutím"+(1===n?"i":"ar")},minutes:function(n){return"mínút"+(1===n?"a":"ur")},seconds:function(n){return"sekúnd"+(1===n?"a":"ur")},decimal:"."},G={years:function(n){return"ann"+(1===n?"o":"i")},months:function(n){return"mes"+(1===n?"e":"i")},weeks:function(n){return"settiman"+(1===n?"a":"e")},days:function(n){return"giorn"+(1===n?"o":"i")},hours:function(n){return"or"+(1===n?"a":"e")},minutes:function(n){return"minut"+(1===n?"o":"i")},seconds:function(n){return"second"+(1===n?"o":"i")},decimal:","},K={years:function(){return"年"},months:function(){return"月"},weeks:function(){return"週"},days:function(){return"日"},hours:function(){return"時間"},minutes:function(){return"分"},seconds:function(){return"秒"},decimal:"."},Q={years:function(){return"년"},months:function(){return"개월"},weeks:function(){return"주일"},days:function(){return"일"},hours:function(){return"시간"},minutes:function(){return"분"},seconds:function(){return"초"},decimal:"."},X={years:function(){return"ປີ"},months:function(){return"ເດືອນ"},weeks:function(){return"ອາທິດ"},days:function(){return"ມື້"},hours:function(){return"ຊົ່ວໂມງ"},minutes:function(){return"ນາທີ"},seconds:function(){return"ວິນາທີ"},decimal:","};function Z(n){return 1===n||n%10===1&&n%100>20?0:Math.floor(n)!==n||n%10>=2&&n%100>20||n%10>=2&&n%100<10?1:2}var nn={years:function(n){return n%10===0||n%100>=10&&n%100<=20?"metų":"metai"},months:function(n){return["mėnuo","mėnesiai","mėnesių"][Z(n)]},weeks:function(n){return["savaitė","savaitės","savaičių"][Z(n)]},days:function(n){return["diena","dienos","dienų"][Z(n)]},hours:function(n){return["valanda","valandos","valandų"][Z(n)]},minutes:function(n){return["minutė","minutės","minučių"][Z(n)]},seconds:function(n){return["sekundė","sekundės","sekundžių"][Z(n)]},decimal:","};function tn(n){return 1===n||n%10===1&&n%100!==11?0:1}var rn={years:function(n){return["gads","gadi"][tn(n)]},months:function(n){return["mēnesis","mēneši"][tn(n)]},weeks:function(n){return["nedēļa","nedēļas"][tn(n)]},days:function(n){return["diena","dienas"][tn(n)]},hours:function(n){return["stunda","stundas"][tn(n)]},minutes:function(n){return["minūte","minūtes"][tn(n)]},seconds:function(n){return["sekunde","sekundes"][tn(n)]},decimal:","},en={years:function(){return"tahun"},months:function(){return"bulan"},weeks:function(){return"minggu"},days:function(){return"hari"},hours:function(){return"jam"},minutes:function(){return"minit"},seconds:function(){return"saat"},decimal:"."},un={years:function(){return"jaar"},months:function(n){return 1===n?"maand":"maanden"},weeks:function(n){return 1===n?"week":"weken"},days:function(n){return 1===n?"dag":"dagen"},hours:function(){return"uur"},minutes:function(n){return 1===n?"minuut":"minuten"},seconds:function(n){return 1===n?"seconde":"seconden"},decimal:","},on={years:function(){return"år"},months:function(n){return"måned"+(1===n?"":"er")},weeks:function(n){return"uke"+(1===n?"":"r")},days:function(n){return"dag"+(1===n?"":"er")},hours:function(n){return"time"+(1===n?"":"r")},minutes:function(n){return"minutt"+(1===n?"":"er")},seconds:function(n){return"sekund"+(1===n?"":"er")},decimal:","};function sn(n){return 1===n?0:Math.floor(n)!==n?1:n%10>=2&&n%10<=4&&!(n%100>10&&n%100<20)?2:3}var cn={years:function(n){return["rok","roku","lata","lat"][sn(n)]},months:function(n){return["miesiąc","miesiąca","miesiące","miesięcy"][sn(n)]},weeks:function(n){return["tydzień","tygodnia","tygodnie","tygodni"][sn(n)]},days:function(n){return["dzień","dnia","dni","dni"][sn(n)]},hours:function(n){return["godzina","godziny","godziny","godzin"][sn(n)]},minutes:function(n){return["minuta","minuty","minuty","minut"][sn(n)]},seconds:function(n){return["sekunda","sekundy","sekundy","sekund"][sn(n)]},decimal:","},an={years:function(n){return"ano"+(1===n?"":"s")},months:function(n){return 1===n?"mês":"meses"},weeks:function(n){return"semana"+(1===n?"":"s")},days:function(n){return"dia"+(1===n?"":"s")},hours:function(n){return"hora"+(1===n?"":"s")},minutes:function(n){return"minuto"+(1===n?"":"s")},seconds:function(n){return"segundo"+(1===n?"":"s")},decimal:","},fn={years:function(n){return 1===n?"an":"ani"},months:function(n){return 1===n?"lună":"luni"},weeks:function(n){return 1===n?"săptămână":"săptămâni"},days:function(n){return 1===n?"zi":"zile"},hours:function(n){return 1===n?"oră":"ore"},minutes:function(n){return 1===n?"minut":"minute"},seconds:function(n){return 1===n?"secundă":"secunde"},decimal:","},dn={years:function(n){return["лет","год","года"][T(n)]},months:function(n){return["месяцев","месяц","месяца"][T(n)]},weeks:function(n){return["недель","неделя","недели"][T(n)]},days:function(n){return["дней","день","дня"][T(n)]},hours:function(n){return["часов","час","часа"][T(n)]},minutes:function(n){return["минут","минута","минуты"][T(n)]},seconds:function(n){return["секунд","секунда","секунды"][T(n)]},decimal:","},mn={years:function(n){return["rok","roky","roky","rokov"][_(n)]},months:function(n){return["mesiac","mesiace","mesiace","mesiacov"][_(n)]},weeks:function(n){return["týždeň","týždne","týždne","týždňov"][_(n)]},days:function(n){return["deň","dni","dni","dní"][_(n)]},hours:function(n){return["hodina","hodiny","hodiny","hodín"][_(n)]},minutes:function(n){return["minúta","minúty","minúty","minút"][_(n)]},seconds:function(n){return["sekunda","sekundy","sekundy","sekúnd"][_(n)]},decimal:","},hn={years:function(){return"år"},months:function(n){return"månad"+(1===n?"":"er")},weeks:function(n){return"veck"+(1===n?"a":"or")},days:function(n){return"dag"+(1===n?"":"ar")},hours:function(n){return"timm"+(1===n?"e":"ar")},minutes:function(n){return"minut"+(1===n?"":"er")},seconds:function(n){return"sekund"+(1===n?"":"er")},decimal:","},yn={years:function(){return"yıl"},months:function(){return"ay"},weeks:function(){return"hafta"},days:function(){return"gün"},hours:function(){return"saat"},minutes:function(){return"dakika"},seconds:function(){return"saniye"},decimal:","},kn={years:function(n){return["років","рік","роки"][T(n)]},months:function(n){return["місяців","місяць","місяці"][T(n)]},weeks:function(n){return["тижнів","тиждень","тижні"][T(n)]},days:function(n){return["днів","день","дні"][T(n)]},hours:function(n){return["годин","година","години"][T(n)]},minutes:function(n){return["хвилин","хвилина","хвилини"][T(n)]},seconds:function(n){return["секунд","секунда","секунди"][T(n)]},decimal:","},ln={years:function(){return"سال"},months:function(n){return 1===n?"مہینہ":"مہینے"},weeks:function(n){return 1===n?"ہفتہ":"ہفتے"},days:function(){return"دن"},hours:function(n){return 1===n?"گھنٹہ":"گھنٹے"},minutes:function(){return"منٹ"},seconds:function(){return"سیکنڈ"},decimal:"."},wn={years:function(){return"năm"},months:function(){return"tháng"},weeks:function(){return"tuần"},days:function(){return"ngày"},hours:function(){return"giờ"},minutes:function(){return"phút"},seconds:function(){return"giây"},decimal:","},gn={years:function(){return"年"},months:function(){return"个月"},weeks:function(){return"周"},days:function(){return"天"},hours:function(){return"小时"},minutes:function(){return"分钟"},seconds:function(){return"秒"},decimal:"."},vn={years:function(){return"年"},months:function(){return"個月"},weeks:function(){return"周"},days:function(){return"天"},hours:function(){return"小時"},minutes:function(){return"分鐘"},seconds:function(){return"秒"},decimal:"."};function pn(n){return new D("string"===typeof n?h(n):y(n))}pn.setLocales=function(n,t){k.setLocales(n,t)}},76578:n=>{n.exports=["Float32Array","Float64Array","Int8Array","Int16Array","Int32Array","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array"]}}]);
//# sourceMappingURL=2919.adbc87e7.js.map