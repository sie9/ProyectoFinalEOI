webpackJsonp([1],{"1t3H":function(t,s){},"2OcC":function(t,s){},"2sBh":function(t,s,a){t.exports=a.p+"static/img/chat.27badfc.png"},CcKW:function(t,s){},FH8W:function(t,s){},JsDX:function(t,s){},KNwC:function(t,s){},NHnr:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("7+uW"),i=a("/ocq"),n=a("Sazm"),o=a.n(n),c={name:"login",data:function(){return{msg:""}},watch:{msg:function(){this.msg=this.msg.toLowerCase()}},beforeRouteLeave:function(t,s,a){var e=this;o.a.database().ref("Sala"+this.msg).once("value",function(t){console.log(t.val()),null!=t.val()?(e.isActive=!1,a()):console.log("No existe esta sala!")})}};$(document).ready(function(){$("select").formSelect()});var r={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"main"},[a("section",{staticClass:"row login-box"},[a("div",[t._m(0),t._v(" "),a("div",{staticClass:"grid--wrapper cabecera"},[a("div",{staticClass:"login"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],staticClass:"validate",attrs:{id:"texto",type:"text",placeholder:"wwww.chatty/name-room.es",maxlength:"60"},domProps:{value:t.msg},on:{input:function(s){s.target.composing||(t.msg=s.target.value)}}})]),t._v(" "),a("div",[a("router-link",{attrs:{to:t.msg}},[a("div",{staticClass:"waves-effect waves-light btn col s12"},[t._v("\n                       CREATE A NEW ROOM \n                    ")])])],1)])])]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"logo-chat"},[s("img",{staticClass:"center-block",attrs:{src:a("xRCs"),alt:"",id:"logo"}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"row barra"},[a("div",{staticClass:"grid-wrapper"},[a("div",{staticClass:"grid--three-columns texto"},[a("div",{staticClass:"grid--quarter-min-columns"},[a("div",{staticClass:"icono"}),t._v(" "),a("div",[a("h3",[t._v("CREATE A ROOM LINK")]),t._v(" "),a("p",[t._v("It can be whatever you want (like your name or company name)")])])]),t._v(" "),a("div",{staticClass:"grid--quarter-min-columns"},[a("div",{staticClass:"icono2"}),t._v(" "),a("div",[a("h3",[t._v("SHARE THE LINK")]),t._v(" "),a("p",[t._v("By email, chat, in Slack. However you'd like really")])])]),t._v(" "),a("div",{staticClass:"grid--quarter-min-columns"},[a("div",{staticClass:"icono3"}),t._v(" "),a("div",[a("h3",[t._v("... THAT'S IT!")]),t._v(" "),a("p",[t._v("Guests join instantly in the browser by clicking the link.")])])])]),t._v(" "),a("div",{staticClass:"centrado"},[a("a",{attrs:{href:"http://"}},[t._v("Terms of Service")]),t._v(" "),a("a",{attrs:{href:"http://"}},[t._v("Cookies")]),t._v(" "),a("a",{attrs:{href:"http://"}},[t._v("©chatty")])])])])}]};var l=a("VU/8")(c,r,!1,function(t){a("1t3H")},"data-v-aaca38b2",null).exports,d=a("mvHQ"),u=a.n(d),v=a("gRE1"),m=a.n(v);$(document).ready(function(){$("#select").formSelect()});var h={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row"},[a("div",{staticClass:"input-field"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.idioma,expression:"idioma"}],staticClass:"icons",attrs:{id:"select"},on:{change:[function(s){var a=Array.prototype.filter.call(s.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.idioma=s.target.multiple?a:a[0]},function(s){t.cambiarIdioma(t.idioma)}]}},[a("option",{attrs:{value:"",disable:"",selected:""}},[t._v("Language")]),t._v(" "),a("option",{staticClass:"circle",attrs:{value:"es","data-icon":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Spain_flag_icon.svg/600px-Spain_flag_icon.svg.png",selected:""}},[t._v("Spanish")]),t._v(" "),a("option",{staticClass:"circle",attrs:{value:"en","data-icon":"https://media.schemeserve.com/user_images/ACCOUNT_ID_15040/GB_Flag.png"}},[t._v("English")]),t._v(" "),a("option",{staticClass:"circle",attrs:{value:"it","data-icon":"http://iconbug.com/download/size/256/icon/7949/button-flag-italy/"}},[t._v("Italian")])])])])},staticRenderFns:[]};var p=a("VU/8")({name:"languageChoice",data:function(){return{msg:"",idioma:""}},methods:{cambiarIdioma:function(t){this.$emit("lang",t)}}},h,!1,function(t){a("SJqR")},"data-v-bfcbec24",null).exports,f={name:"shareLink",data:function(){return{link:""}},created:function(){var t=this.$route.path;this.link="chatty.com"+t},methods:{copyToClipboard:function(){event.preventDefault(),console.log("entre");var t=document.getElementById("chatLink");t.select(),document.execCommand("Copy"),alert("Copied the text: "+t.value)}}},g={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"shareLink"},[a("label",{attrs:{for:"chatLink"}},[t._v("Share Me!")]),t._v(" "),a("div",{staticClass:"input-group"},[a("input",{staticClass:"chatLink",attrs:{type:"text",id:"chatLink",readonly:""},domProps:{value:t.link}}),t._v(" "),a("a",{staticClass:"copy",attrs:{href:"#"},on:{click:function(s){t.copyToClipboard()}}},[a("i",{staticClass:"fas fa-copy"})])])])},staticRenderFns:[]};var _=a("VU/8")(f,g,!1,function(t){a("FH8W")},"data-v-f0b80ef2",null).exports;$(document).click(function(t){"block"==$("#myModal").css("display")&&($(t.target).closest(".modal-content,.addUser").length||$("#myModal").hide())}),$(document).click(function(t){"block"==$("#myModal3").css("display")&&($(t.target).closest(".modal-content,.contact").length||$("#myModal3").hide())});var C={name:"navigator",components:{languageChoice:p,shareLink:_},data:function(){return{email:"",emails:[],contacto:{email:"",asunto:""}}},created:function(){$(document).ready(function(){M.updateTextFields()})},methods:{borrarEmail:function(t){console.log(t),this.emails.splice(t,1)},changeLang:function(t){this.$emit("lang",t)},onSubmit:function(){this.email.includes("@")&&(this.emails.push(this.email),this.email="",$("#email").val(""))},onSubmit2:function(){this.contacto.email.includes("@")&&this.sendMail2()},show:function(){document.getElementById("myModal").style.display="block",this.hide2(),this.hide3()},show2:function(){var t=this;document.getElementById("myModal2").style.display="block",setTimeout(function(){t.hide2(),t.hide()},div000)},show3:function(){document.getElementById("myModal3").style.display="block",this.hide(),this.hide2()},hide:function(){document.getElementById("myModal").style.display="none",this.emails=[],this.email=""},hide2:function(){document.getElementById("myModal2").style.display="none"},hide3:function(){document.getElementById("myModal3").style.display="none"},sendMail:function(){var t=this,s=this.$route.path,a=s.substring(1,s.length),e={service_id:"pry.chtty@gmail.com",template_id:"chatty",user_id:"user_DeVh4AytZ9lQqdCTn9ODu",template_params:{email:this.email,sala:"http://localhost:8080/#/"+a}};$.ajax("https://api.emailjs.com/api/v1.0/email/send",{type:"POST",data:u()(e),contentType:"application/json"}).done(function(){t.show2()}).fail(function(t){console.log("Oops... "+u()(t))})},sendMail2:function(){var t=this,s=this.$route.path,a=(s.substring(1,s.length),{service_id:"pry.chtty@gmail.com",template_id:"prueba",user_id:"user_DeVh4AytZ9lQqdCTn9ODu",template_params:{contacto:this.contacto.email,asunto:this.contacto.asunto}});$.ajax("https://api.emailjs.com/api/v1.0/email/send",{type:"POST",data:u()(a),contentType:"application/json"}).done(function(){t.show2()}).fail(function(t){console.log("Oops... "+u()(t))})}}},j={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("nav",{staticClass:"nav"},[t._m(0),t._v(" "),a("share-link"),t._v(" "),a("language-choice",{staticClass:"language-choice",on:{lang:t.changeLang}}),t._v(" "),a("ul",{staticClass:"right hide-on-med-and-down",attrs:{id:"nav"}},[a("li",[a("div",{staticClass:"addUser nav-btn",on:{click:function(s){t.show()}}},[t._v("Add Users")])]),t._v(" "),a("li",[a("div",{staticClass:"contact nav-btn",on:{click:function(s){t.show3()}}},[t._v("Contact")])])])],1),t._v(" "),a("div",{staticClass:"modal",attrs:{id:"myModal"}},[a("div",{staticClass:"modal-content"},[a("span",{staticClass:"close",on:{click:t.hide}},[t._v("×")]),t._v(" "),a("h3",[t._v("Añade a tus amigos a la sala!")]),t._v(" "),a("div",{staticClass:"collection",attrs:{id:"Container"}},[a("div",{staticClass:"collection-item added-friends"},[t._v("Amigos añadidos:")]),t._v(" "),t._l(t.emails,function(s,e){return a("div",{staticClass:"collection-item"},[t._v("  "+t._s(s)+" "),a("span",{on:{click:function(s){t.borrarEmail(e)}}},[t._v(" x ")])])})],2),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"validate",attrs:{id:"email",type:"email"},domProps:{value:t.email},on:{keyup:function(s){if(!("button"in s)&&t._k(s.keyCode,"enter",13,s.key,"Enter"))return null;t.onSubmit()},input:function(s){s.target.composing||(t.email=s.target.value)}}}),t._v(" "),a("label",{attrs:{for:"email"}},[t._v("Email")])])]),t._v(" "),t.emails.length>0?a("div",{staticClass:"row"},[a("div",{staticClass:"card-panel flow-text email-button",on:{click:function(s){t.sendMail()}}},[t._v("Enviar")])]):t._e()])]),t._v(" "),a("div",{staticClass:"modal",attrs:{id:"myModal2"}},[a("div",{staticClass:"modal-content2"},[a("span",{staticClass:"close",on:{click:t.hide2}},[t._v("×")]),t._v(" "),a("h3",[t._v("Se ha enviado tu email!!")])])]),t._v(" "),a("div",{staticClass:"modal",attrs:{id:"myModal3"}},[a("div",{staticClass:"modal-content"},[a("span",{staticClass:"close",on:{click:t.hide3}},[t._v("×")]),t._v(" "),a("h3",[t._v("¿Como podemos ayudarte?")]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.contacto.email,expression:"contacto.email"}],staticClass:"validate",attrs:{id:"email",type:"email"},domProps:{value:t.contacto.email},on:{input:function(s){s.target.composing||t.$set(t.contacto,"email",s.target.value)}}}),t._v(" "),a("label",{attrs:{for:"email"}},[t._v("Email")])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.contacto.asunto,expression:"contacto.asunto"}],staticClass:"validate",attrs:{id:"asunto",type:"text"},domProps:{value:t.contacto.asunto},on:{input:function(s){s.target.composing||t.$set(t.contacto,"asunto",s.target.value)}}}),t._v(" "),a("label",{attrs:{for:"asunto"}},[t._v("Asunto")])])]),t._v(" "),a("div",{staticClass:"row"},[""!=t.contacto.email&&""!=t.contacto.asunto?a("div",{staticClass:"card-panel flow-text email-button",on:{click:function(s){t.onSubmit2()}}},[t._v("Enviar")]):t._e()])])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"left brand-logo"},[s("a",{attrs:{href:"#"}},[s("img",{attrs:{src:a("2sBh"),alt:"Logo Chatty"}})])])}]};var y=a("VU/8")(C,j,!1,function(t){a("XmTi")},"data-v-3e94495f",null).exports,b={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("h1",[this._v(this._s(this.title))])])},staticRenderFns:[]};var w=a("VU/8")({name:"chatTitle",data:function(){return{title:""}},created:function(){var t=this.$route.path;this.title=t.substring(1,t.length)}},b,!1,function(t){a("2OcC")},"data-v-1716e4a8",null).exports,k=a("PJh5"),x=a.n(k),S=a("KMaP"),E={name:"inputComponent",components:{Picker:S.Picker},data:function(){return{msg:"",salir:!1}},methods:{showIcons:function(){this.salir=!this.salir},onClick:function(t,s){console.log(t.colons),this.msg=this.msg+t.native},writetodB:function(){var t=this.cargarUsuario(),s=this.$route.path,a=s.substring(1,s.length);console.log(a),o.a.database().ref("Sala"+a).child("Mensajes").push({text:this.msg,owner:t,time:Date(),id:this.s4()+"-"+this.s4()}),this.msg=""},s4:function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)},recordtodB:function(){o.a.database().ref("audios").push({})},cargarUsuario:function(){var t=localStorage.getItem("usuario");return JSON.parse(t)}}},U={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"inputCont"},[a("div",{staticClass:"input-container",staticStyle:{position:"relative"}},[a("div",{staticClass:"emojis-btn",on:{click:t.showIcons}},[t._v("😠")]),t._v(" "),1==t.salir?a("picker",{attrs:{set:"twitter",title:"Chattys",emoji:"woman-with-bunny-ears-partying"},on:{select:t.onClick}}):t._e(),t._v(" "),a("div",{staticClass:"input-field grid-input"},[a("label",{attrs:{for:"Texto"}},[t._v("Mensaje")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],staticClass:"validate",attrs:{id:"Texto",type:"text",value:""},domProps:{value:t.msg},on:{keyup:function(s){return"button"in s||!t._k(s.keyCode,"enter",13,s.key,"Enter")?t.writetodB(s):null},input:function(s){s.target.composing||(t.msg=s.target.value)}}})]),t._v(" "),a("div",{staticClass:"flex-button"},[a("a",{staticClass:"waves-effect waves-light btn ",on:{click:t.writetodB}},[a("i",{staticClass:"material-icons"},[t._v("send")])]),t._v(" "),a("a",{staticClass:"btn btn2 ",on:{click:t.recordtodB}},[a("i",{staticClass:"fas fa-microphone"})])])],1)])},staticRenderFns:[]};var T=a("VU/8")(E,U,!1,function(t){a("cf8J")},"data-v-26712ea0",null).exports,O={name:"PostUser",props:["conver"],data:function(){return{fecha:"",mensaje:"",angle:""}},watch:{conver:function(){console.log("cambio",this.conver)}},created:function(){this.fecha=x()(this.conver.Fecha).fromNow()},components:{Emoji:S.Emoji},methods:{cargarUsuario:function(){var t=localStorage.getItem("usuario");return JSON.parse(t)},undo:function(t){if(console.log(t),this.conver.cond){var s=this.conver.Texto;this.conver.Texto=this.conver.original,this.conver.original=s,this.conver.cond=!1}else{s=this.conver.Texto;this.conver.Texto=this.conver.original,this.conver.original=s,this.conver.cond=!0}this.angle-=-180,$("#"+t).css({transform:"rotate("+this.angle+"deg)"})},talk:function(){var t=new SpeechSynthesisUtterance;t.lang="es-ES",t.text=this.conver.Texto,speechSynthesis.speak(t)}}},R={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container"},[a("div",{staticClass:"row",class:{rightMsg:t.conver.owner==this.cargarUsuario()}},[a("div",{staticClass:"userimage-border"}),t._v(" "),a("div",{staticClass:" card darken-1 col s4 valign-wrapper",class:{userMsg:t.conver.owner==this.cargarUsuario()}},[a("span",[t._v("\r\n          "+t._s(t.conver.Texto)+"\r\n        ")]),t._v(" "),a("small",[a("div",{attrs:{title:"Talk to me!"},on:{click:function(s){t.talk()}}},[a("i",{staticClass:"fas fa-volume-up"})]),t._v(" "),a("div",{staticClass:"reverse",attrs:{title:"See the original message",id:t.conver.id},on:{click:function(s){t.undo(t.conver.id)}}},[a("i",{staticClass:"fas fa-redo"})]),t._v("\r\n           "+t._s(t.fecha)+" \r\n        ")])])])])},staticRenderFns:[]};var z=a("VU/8")(O,R,!1,function(t){a("YJQS")},"data-v-471b78f6",null).exports,F={render:function(){var t=this.$createElement,s=this._self._c||t;return 0==this.conver?s("div",{staticClass:"container"},[this._m(0)]):this._e()},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"preloader-wrapper big active"},[s("div",{staticClass:"spinner-layer spinner-blue"},[s("div",{staticClass:"circle-clipper left"},[s("div",{staticClass:"circle"})]),s("div",{staticClass:"gap-patch"},[s("div",{staticClass:"circle"})]),s("div",{staticClass:"circle-clipper right"},[s("div",{staticClass:"circle"})])]),this._v(" "),s("div",{staticClass:"spinner-layer spinner-red"},[s("div",{staticClass:"circle-clipper left"},[s("div",{staticClass:"circle"})]),s("div",{staticClass:"gap-patch"},[s("div",{staticClass:"circle"})]),s("div",{staticClass:"circle-clipper right"},[s("div",{staticClass:"circle"})])]),this._v(" "),s("div",{staticClass:"spinner-layer spinner-yellow"},[s("div",{staticClass:"circle-clipper left"},[s("div",{staticClass:"circle"})]),s("div",{staticClass:"gap-patch"},[s("div",{staticClass:"circle"})]),s("div",{staticClass:"circle-clipper right"},[s("div",{staticClass:"circle"})])]),this._v(" "),s("div",{staticClass:"spinner-layer spinner-green"},[s("div",{staticClass:"circle-clipper left"},[s("div",{staticClass:"circle"})]),s("div",{staticClass:"gap-patch"},[s("div",{staticClass:"circle"})]),s("div",{staticClass:"circle-clipper right"},[s("div",{staticClass:"circle"})])])])}]};var I=a("VU/8")({name:"loader",props:["conver"]},F,!1,function(t){a("KNwC")},"data-v-04d56de2",null).exports,N=a("mtWM"),P=a.n(N),B=a("M4fF"),L=a.n(B),q={name:"chatBox",data:function(){return{msg:"Welcome to Your Vue.js App",mensajes:[],cond:!1}},watch:{dato:function(){var t=this;this.mensajes.forEach(function(s){P.a.post("https://translation.googleapis.com/language/translate/v2?key=AIzaSyDypMznEtSRccdQG5PwbVRdm_fRLhwvQUQ",{target:t.dato,q:s.Texto}).then(function(t){var a={msgTrslated:L.a.head(t.data.data.translations).translatedText};s.Texto=a.msgTrslated}).catch(function(t){return console.log(t)})})}},methods:{clearAllFirebase:function(){o.a.database().ref("Mensajes").remove(),this.mensajes=[]},cargarUsuario:function(t){var s=localStorage.getItem(t);return JSON.parse(s)}},created:function(){var t=this,s=this.$route.path,a=s.substring(1,s.length);o.a.database().ref("Sala"+a).child("Mensajes").on("child_added",function(s){s.val(),P.a.post("https://translation.googleapis.com/language/translate/v2?key=AIzaSyDypMznEtSRccdQG5PwbVRdm_fRLhwvQUQ",{target:t.dato||"en",q:s.val().text}).then(function(a){var e={msgTrslated:L.a.head(a.data.data.translations).translatedText};$(".display").stop().animate({scrollTop:$(".display")[0].scrollHeight},500),t.mensajes.push({Texto:e.msgTrslated,Fecha:s.val().time,owner:s.val().owner,original:s.val().text,id:s.val().id,cond:!0}),t.cond=!0}).catch(function(t){return console.log(t)}),t.mensajes.length>0&&(t.mensajes=t.mensajes.sort(function(t,s){return new Date(t.time)-new Date(s.time)}),console.log(t.mensajes))}),setTimeout(function(){t.cond=!0},3e3)},components:{PostUser:z,inputComponent:T,languageChoice:p,login:l,chatTitle:w,loaders:I},props:["dato"]},V={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"maindiv"},[a("chatTitle",{staticClass:"chatTitle"}),t._v(" "),a("div",{staticClass:"display"},[a("loaders",{staticClass:"loaders",attrs:{conver:this.cond}}),t._v(" "),t._l(t.mensajes,function(s){return t.cond?a("PostUser",{key:s.id,staticClass:"postUser",attrs:{conver:s}}):t._e()})],2),t._v(" "),a("inputComponent",{staticClass:"alinear"})],1)},staticRenderFns:[]};var A=a("VU/8")(q,V,!1,function(t){a("JsDX")},"data-v-d441171a",null).exports,H={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"userCard"},[s("div",{staticClass:" card darken-1 valign-wrapper "},[s("div",{staticClass:"userimage-border"}),this._v(" "),s("span",[this._v("\r\n          Id: "+this._s(this.conver.id)+"\r\n        ")])])])},staticRenderFns:[]};var D={name:"listaUsuarioOnline",data:function(){return{usuarios:[],cond:!1}},created:function(){var t=this,s=this.$route.path,a=s.substring(1,s.length);o.a.database().ref("Sala"+a).child("usuariosOnline").on("child_added",function(s){t.usuarios.push(s.val()),t.cond=!0})},components:{UsuarioOnline:a("VU/8")({name:"UsuarioOnline",props:["conver"]},H,!1,function(t){a("rq0R")},"data-v-19f625c3",null).exports,loaders:I}},J={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"app userList"},[a("loaders",{staticClass:"loaders",attrs:{conver:this.cond}}),t._v(" "),t._l(t.usuarios,function(s){return t.cond?a("usuarioOnline",{key:s.id,attrs:{conver:s}}):t._e()})],2)},staticRenderFns:[]};var X={name:"App",components:{chatBox:A,chatTitle:w,navigator:y,listaUsuarioOnline:a("VU/8")(D,J,!1,function(t){a("TiNU")},"data-v-181c0502",null).exports,inputComponent:T},data:function(){return{lang:"",privateId:"",usuarios:[]}},methods:{changeLang:function(t){this.lang=t},getUsers:function(t){var s=this,a=this.$route.path,e=a.substring(1,a.length);o.a.database().ref("Sala"+e).child("usuariosOnline").once("value",function(a){(s.usuarios=a.val(),null!==s.usuarios)?void 0===m()(s.usuarios).find(function(s){return s.id===t})&&s.writedbOnlineUsers(t):s.writedbOnlineUsers(t)})},writedbOnlineUsers:function(t){var s=this.$route.path,a=s.substring(1,s.length),e=o.a.database().ref("Sala"+a).child("usuariosOnline").push({Conexion:Date(),id:t}).key;console.log(e);var i=this.cargarUsuario("key");console.log("existekey?",i),null==i&&this.guardarUsuario("key",e)},updatedbOnlineUsers:function(t){var s=this.$route.path,a=s.substring(1,s.length);o.a.database().ref("Sala"+a).child("usuariosOnline").update({id:t})},cargarUsuario:function(t){var s=localStorage.getItem(t);return JSON.parse(s)},s4:function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)},guardarUsuario:function(t,s){var a=u()(s);localStorage.setItem(t,a)}},created:function(){var t=this.cargarUsuario("usuario");console.log("existe?",t),null==t&&(console.log("entra?"),this.privateId="Guest-"+this.s4()+this.s4()+this.s4(),this.guardarUsuario("usuario",this.privateId),t=this.privateId),this.getUsers(t)},destroyed:function(){}},W={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"main-SalaChat grid",attrs:{id:"app"}},[s("navigator",{staticClass:"grid-fullview",on:{lang:this.changeLang}}),this._v(" "),s("listaUsuarioOnline",{staticClass:"listaUsuarioOnline"}),this._v(" "),s("chat-box",{staticClass:"grid-contentview chatBox",attrs:{dato:this.lang}})],1)},staticRenderFns:[]};var Q=a("VU/8")(X,W,!1,function(t){a("CcKW")},"data-v-5377d922",null).exports;e.a.use(i.a);var K=new i.a({routes:[{path:"/",component:l},{path:"/:id",component:Q}],mode:"history"}),G={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]};var Z=a("VU/8")({name:"App"},G,!1,function(t){a("caRa")},null,null).exports;e.a.config.productionTip=!1;o.a.initializeApp({apiKey:"AIzaSyAM8X0do5Rurpysi_ei1V_cJ3nwl_PnNBc",authDomain:"chatproject-f3ba0.firebaseapp.com",databaseURL:"https://chatproject-f3ba0.firebaseio.com",projectId:"chatproject-f3ba0",storageBucket:"chatproject-f3ba0.appspot.com",messagingSenderId:"670222074196"}),new e.a({el:"#app",router:K,components:{App:Z},template:"<App/>"})},SJqR:function(t,s){},TiNU:function(t,s){},XmTi:function(t,s){},YJQS:function(t,s){},caRa:function(t,s){},cf8J:function(t,s){},rq0R:function(t,s){},uslO:function(t,s,a){var e={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function i(t){return a(n(t))}function n(t){var s=e[t];if(!(s+1))throw new Error("Cannot find module '"+t+"'.");return s}i.keys=function(){return Object.keys(e)},i.resolve=n,t.exports=i,i.id="uslO"},xRCs:function(t,s,a){t.exports=a.p+"static/img/chat2.b0816b0.png"}},["NHnr"]);
//# sourceMappingURL=app.9087c9a161db20a5d73d.js.map