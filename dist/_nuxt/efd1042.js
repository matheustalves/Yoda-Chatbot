(window.webpackJsonp=window.webpackJsonp||[]).push([[5,2,3],{226:function(e,t,n){e.exports=n.p+"img/user.b207837.svg"},227:function(e,t,n){e.exports=n.p+"img/yoda.24a0830.png"},228:function(e,t,n){"use strict";n.r(t);var r={props:{content:{type:String,default:""},from:{type:String,default:"user"},list:{type:Array,default:function(){return[]}}}},o=n(42),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex align-middle my-2 text-justify",class:"user"===e.from?"flex-row-reverse":""},[r("img",{staticClass:"h-10 w-10",attrs:{alt:e.from+"-avatar",src:"user"===e.from?n(226):n(227)}}),e._v(" "),r("div",{staticClass:"rounded p-3 text-sm mx-2",class:"user"===e.from?"bg-green-900":"bg-green-300 text-black"},[e._v("\n    "+e._s(e.content)+"\n    "),0!=e.list.length?r("ul",e._l(e.list,(function(t){return r("li",{key:t},[e._v("✨ "+e._s(t))])})),0):e._e()])])}),[],!1,null,null,null);t.default=component.exports},229:function(e,t,n){var r=n(11),o=n(16),l=n(98),c=n(4),f=RegExp.prototype;r&&c((function(){return"sy"!==Object.getOwnPropertyDescriptor(f,"flags").get.call({dotAll:!0,sticky:!0})}))&&o.f(f,"flags",{configurable:!0,get:l})},231:function(e,t,n){"use strict";n.r(t);var r=n(9);n(57),n(58),n(59),n(17),n(229),n(53),n(26),n(54),n(35),n(27),n(34),n(55),n(56),n(36);function o(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,f=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){f=!0,o=e},f:function(){try{c||null==n.return||n.return()}finally{if(f)throw o}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var c={data:function(){return{messageInput:"",nextId:0,nextFrom:"user",messages:[],noResults:!1,loading:!1}},mounted:function(){var e=this;if(localStorage.getItem("messages")){try{this.messages=JSON.parse(localStorage.getItem("messages"))}catch(e){localStorage.removeItem("messages")}this.$nextTick((function(){e.$refs.bottom.scrollIntoView({behavior:"smooth"})}))}},methods:{handleNewMessage:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""===e.messageInput){t.next=14;break}if(e.saveMessage(e.messageInput,[]),n=e.messageInput,e.messageInput="",e.loading=!0,!n.includes("force")){t.next=11;break}return e.noResults=!1,t.next=9,e.getSwapiResponse("force");case 9:t.next=13;break;case 11:return t.next=13,e.getYodaResponse(n);case 13:e.loading=!1;case 14:case"end":return t.stop()}}),t)})))()},saveMessage:function(e,t){var n=this;this.messages.push({id:this.nextId++,content:e,from:this.nextFrom,list:t});var r=JSON.stringify(this.messages);localStorage.setItem("messages",r),this.$nextTick((function(){n.$refs.bottom.scrollIntoView({behavior:"smooth"})})),this.nextFrom="user"===this.nextFrom?"yoda":"user"},getYodaResponse:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://yoda-chatbot-api.herokuapp.com/api/",{headers:{"Content-Type":"application/json",userMessage:e}}).then((function(e){return e.json()})).then((function(e){e.answers[0].flags.includes("no-results")?t.noResults?(t.getSwapiResponse("characters"),t.noResults=!1):(t.saveMessage(e.answers[0].message,[]),t.noResults=!0):(t.saveMessage(e.answers[0].message,[]),t.noResults=!1)}));case 2:case"end":return n.stop()}}),n)})))()},getSwapiResponse:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var body,r,l,c,f;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return body=null,r=null,l=null,c=null,f=null,"force"===e?(body={query:"\n            query {\n              allFilms{\n                films{\n                  title\n                }\n              }\n            }\n          "},r="The force is in these movies:",l="allFilms",c="films",f="title"):(body={query:"\n            query {\n              allPeople(first: 6){\n                people{\n                  name\n                }\n              }\n            }\n          "},r="I haven't found any results, but here is a list of some Star Wars characters:",l="allPeople",c="people",f="name"),n.next=8,fetch("https://inbenta-graphql-swapi-prod.herokuapp.com/api",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(body)}).then((function(e){return e.json()})).then((function(e){var n,m=[],d=o(e.data[l][c]);try{for(d.s();!(n=d.n()).done;){var h=n.value;m.push(h[f])}}catch(e){d.e(e)}finally{d.f()}t.saveMessage(r,m)}));case 8:case"end":return n.stop()}}),n)})))()},clearMessages:function(){this.messages=[],this.nextId=0,this.noResults=!1,this.nextFrom="user",localStorage.removeItem("messages")}}},f=n(42),component=Object(f.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bg-green-600 rounded-lg border-2 border-gray-900 p-5 h-full flex flex-col"},[n("div",{staticClass:"text-right"},[n("button",{staticClass:"text-xs font-bold underline text-green-200",on:{click:e.clearMessages}},[e._v("\n      clear chat\n    ")])]),e._v(" "),n("div",{staticClass:"flex-grow overflow-auto p-3 content-between mt-5"},[e._l(e.messages,(function(t){var r=t.id,content=t.content,o=t.from,l=t.list;return n("MessageItem",{key:r,ref:e.messages,refInFor:!0,attrs:{content:content,from:o,list:l}})})),e._v(" "),e.loading?n("p",{staticClass:"text-sm"},[e._v("Yoda is typing...")]):e._e(),e._v(" "),n("div",{ref:"bottom"})],2),e._v(" "),n("form",{staticClass:"text-center flex items-center justify-center mt-5",on:{submit:function(t){return t.preventDefault(),e.handleNewMessage.apply(null,arguments)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.messageInput,expression:"messageInput"}],staticClass:"p-2 rounded mr-1 text-black flex-grow",attrs:{placeholder:"say something to yoda",disabled:e.loading},domProps:{value:e.messageInput},on:{keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.preventDefault(),e.handleNewMessage.apply(null,arguments))},input:function(t){t.target.composing||(e.messageInput=t.target.value)}}}),e._v(" "),n("button",{staticClass:"ml-1 p-2 bg-gray-900 shadow rounded hover:bg-gray-800",attrs:{type:"submit"}},[e._v("\n      ▷\n    ")])])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{MessageItem:n(228).default})},234:function(e,t,n){"use strict";n.r(t);var r={name:"IndexPage"},o=n(42),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"h-screen bg-green-900 text-white p-10 flex flex-col justify-between"},[e._m(0),e._v(" "),n("main",{staticClass:"container mx-auto shadow-2xl max-w-3xl my-10 flex-grow overflow-hidden"},[n("ChatBox")],1),e._v(" "),e._m(1)])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"flex-none"},[n("h1",{staticClass:"text-3xl font-bold text-center"},[e._v("Yoda Chatbot")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"text-center mx-auto flex-none"},[e._v("\n    developed by 🙋‍♂️\n    "),n("a",{staticClass:"font-bold hover:underline",attrs:{href:"https://matx.dev"}},[e._v("\n      matheus teixeira\n    ")])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{ChatBox:n(231).default})}}]);