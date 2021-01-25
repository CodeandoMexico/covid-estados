(this["webpackJsonpcovid-estados"]=this["webpackJsonpcovid-estados"]||[]).push([[0],{125:function(e,a,t){},128:function(e,a,t){},129:function(e,a,t){},130:function(e,a,t){},131:function(e,a,t){},132:function(e,a,t){},133:function(e,a,t){},134:function(e,a,t){"use strict";t.r(a);var n={};t.r(n),t.d(n,"estados",(function(){return h}));var r=t(0),c=t.n(r),o=t(20),l=t.n(o),i=t(12),s=t(6),m=t(37),d=t(13),u=t(49),p=(t(66),t(50)),E="estados/load",v="estados/success",f="estados/error",g="estados/set",b={load:!1,fetch:!1,data:[],details:[],error:""};function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(a.type){case E:return Object(s.a)(Object(s.a)({},e),{},{load:!0});case v:return Object(s.a)(Object(s.a)(Object(s.a)({},e),a.payload),{},{load:!1});case f:return Object(s.a)(Object(s.a)({},e),{},{error:a.payload,load:!1});case g:return Object(s.a)(Object(s.a)({},e),{},{estado:a.payload});default:return e}}var N=[];N=[].concat(Object(m.a)(N),[u.a]);var x=Object(d.createStore)(Object(d.combineReducers)(Object(s.a)({},n)),Object(p.composeWithDevTools)(d.applyMiddleware.apply(void 0,Object(m.a)(N)))),y=t(22),k=t(23),O=t(28),w=t(27),j=t(15),_=t.n(j),C=t(24),S=t(16),M=t.n(S),A=function(e){for(var a=e.split("\n"),t=[],n=a[0].split(","),r=1;r<a.length;r++){for(var c={},o=a[r].split(","),l=0;l<n.length;l++)c[n[l].replace(/\s/g,"").toLowerCase()]=o[l];t.push(c)}return t},D="https://raw.githubusercontent.com/mexicovid19/Mexico-datos/master/datos/last_updated.csv",I="https://api.airtable.com/v0/appelr2zBXKCJPWJS/covidmx?api_key=keymOwmuSwgNcTH7p&sort%5B0%5D%5Bfield%5D=estado",q="https://raw.githubusercontent.com/mexicovid19/Mexico-datos/master/datos/estados_hoy.csv",P=function(e){var a={"-":" ",a:"\xe1|\xe0|\xe3|\xe2|\xc0|\xc1|\xc3|\xc2",e:"\xe9|\xe8|\xea|\xc9|\xc8|\xca",i:"\xed|\xec|\xee|\xcd|\xcc|\xce",o:"\xf3|\xf2|\xf4|\xf5|\xd3|\xd2|\xd4|\xd5",u:"\xfa|\xf9|\xfb|\xfc|\xda|\xd9|\xdb|\xdc",c:"\xe7|\xc7",n:"\xf1|\xd1"};for(var t in e=e.toLowerCase(),a)e=e.replace(new RegExp(a[t],"g"),t);return e},R=function(){return function(){var e=Object(C.a)(_.a.mark((function e(a,t){var n,r,c,o,l;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:E}),e.prev=1,e.next=4,M.a.get(D);case 4:return n=e.sent,e.next=7,M.a.get(I);case 7:return r=e.sent,c=r.data.records,e.next=11,M.a.get(q).then((function(e){return A(e.data)}));case 11:o=e.sent,l=c.map((function(e){return Object(s.a)({option:e.fields.estado,url:"/estado/".concat(P(e.fields.estado)),id:P(e.fields.estado)},e.fields)})),a({type:v,payload:{data:l,details:o,lastUdatedData:A(n.data)[0].updated_at}}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(1),a({type:f,payload:e.t0});case 19:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(a,t){return e.apply(this,arguments)}}()},T=t(8),L=t(5),U=(t(85),t(4)),F=t.n(U),B=(t(86),function(e){var a=e.children,t=e.direction,n=void 0===t?"row":t,r=e.alignItems,o=void 0===r?"":r,l=e.className,i=void 0===l?"":l;return c.a.createElement("div",{className:"container direction-".concat(n," ").concat(o," ").concat(i)},a)});B.prototype={children:F.a.element.isRequired,direction:F.a.oneOf(["column","row"]),alignItems:F.a.oneOf(["center","end"]),className:F.a.string};var H=B,W=t(55),z=(t(87),function(e){var a=e.options,t=void 0===a?{}:a,n=e.placeholder,o=e.type,l=Object(r.useState)(!1),i=Object(W.a)(l,2),s=i[0],m=i[1],d=Object(L.g)().id;return Object(r.useEffect)((function(){m(!1)}),[d]),c.a.createElement("nav",{className:"states ".concat(o)},c.a.createElement("button",{className:"states-action",onClick:function(){return m(!s)},type:"button"},n),s&&c.a.createElement("div",{className:"states-options"},t.map((function(e,a){return c.a.createElement(T.b,{className:"states-option ".concat((t=e,d===t.id?"active":"")),to:e.url,key:a},e.option);var t}))))});z.defaultProps={placeholder:"select",type:"blue"},z.prototype={placeholder:F.a.object.isRequired,type:F.a.oneOf(["blue","white"]),options:F.a.arrayOf(F.a.shape({option:F.a.string,url:F.a.string}))};var Q=z,J=(t(89),function(e){var a=e.title,t=e.value;return c.a.createElement("div",{className:"counter"},c.a.createElement("p",null,a),c.a.createElement("span",null,t))});J.prototype={title:F.a.string.isRequired,value:F.a.number.isRequired};var V=J,G=function(e){var a=e.children,t=e.variant;return c.a.createElement("span",{className:"badge badge-".concat(t)},a)},X=function(e){var a=e.children,t=e.direction,n=void 0===t?"row":t,r=e.color,o=void 0===r?"base":r,l=e.className,i=void 0===l?"":l;return c.a.createElement("div",{className:"box direction-".concat(n," color-").concat(o," ").concat(i)},a)},Y=function(e){var a=e.image,t=e.text,n=e.link,r=void 0===n?"#":n;return c.a.createElement("a",{className:"icon",href:r,target:"_blank",rel:"noopener noreferrer"},c.a.createElement("div",null,c.a.createElement("img",{src:a,alt:t})),c.a.createElement("span",null,t))},K=function(e){var a=e.v,t=e.className,n=void 0===t?"":t,r="";return r="whatsapp"===a[0]?"https://api.whatsapp.com/send?phone=".concat(a[1]):"correo"===a[0]?"mailto:".concat(a[1]):a[1],c.a.createElement("div",{className:"".concat(n)},c.a.createElement("a",{href:r,target:"_blank",rel:"noopener noreferrer"},a[0].toUpperCase()))},Z=t(51),$=function(e){return c.a.createElement(Z.WaveLoading,Object.assign({color:"#5176FF"},e))},ee=(t(125),t.p+"static/media/home.5cf65237.svg");var ae=Object(i.b)((function(e){var a=e.estados;return{estados:a.data,load:a.load}}))((function(e){var a=e.estados,t=e.load;return c.a.createElement(c.a.Fragment,null,t?c.a.createElement($,null):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"home"},c.a.createElement("div",{className:"cover"},c.a.createElement("h1",{className:"mobile-title"},"Directorio",c.a.createElement("br",null),"COVID Mx"),c.a.createElement("img",{src:ee,alt:"Home COVID CodeandoMexico"})),c.a.createElement("div",{className:"msg"},c.a.createElement("h1",{className:"desk-title"},"Directorio",c.a.createElement("br",null),"COVID Mx"),c.a.createElement("p",null,"Un espacio con informaci\xf3n oficial por estado para quien no sabe qu\xe9 hacer"),c.a.createElement(Q,{options:a,placeholder:"[SELECCIONA]"})))))})),te=t(54),ne=Object(te.a)((function(e,a){var t=e.estados,n=t.data,r=t.details,c=n.find((function(e){return e.id===a}))||{},o=c.option,l=o;switch(o){case"Estado de M\xe9xico":l="M\xe9xico"}var i=r.find((function(e){return e.estado===l&&l.trim()}));return Object(s.a)(Object(s.a)({},c),i)}),(function(e){return e})),re=t(31),ce=t.n(re);t(127);var oe=function(){return c.a.createElement("h2",null,"P\xe1gina no encontrada")},le=(t(128),t.p+"static/media/hospital.1290dc03.svg"),ie=t.p+"static/media/docs.4178c5be.svg",se=t.p+"static/media/whatsapp.5f82834c.svg",me=t.p+"static/media/android.04cbc588.svg",de=t.p+"static/media/apple.1a40a5eb.svg",ue=t.p+"static/media/cat.e1d69677.svg",pe=t.p+"static/media/telephone2.6c0392fe.svg",Ee=t.p+"static/media/web.d6dadc06.svg";function ve(e){var a=e.item,t=[],n=[],o=[],l=null;a&&(a.violencia_genero_en_linea&&"no"!==a.violencia_genero_en_linea&&(t=a.violencia_genero_en_linea.split(",").map((function(e){return e.split(" ")}))),a.violencia_genero_telefono&&"no"!==a.violencia_genero_telefono&&(n=a.violencia_genero_telefono.split(",")),"no"!==a.otros&&(o=a.otros.split(",").map((function(e){return e.split(": ")}))).length>0&&(l="https"===o[0][1].substring(0,5)));var i=function(e){return"tel:".concat(e.replace(/\D/g,""))},s=function(e){return e.toUpperCase().includes("WHATSAPP")};return c.a.createElement(H,{direction:"column",className:"bgBlue"},c.a.createElement(H,{className:"mobileColumn pd-1"},c.a.createElement(H,{direction:"column",alignItems:"center"},c.a.createElement(H,{direction:"row",alignItems:"center"},c.a.createElement("h2",{className:"info-relevante"},"Informaci\xf3n relevante")),c.a.createElement("img",{src:ue,alt:"Informaci\xf3n relevante"})),c.a.createElement(H,{direction:"column"},c.a.createElement(X,{direction:"column",className:"box-linea-violencia"},c.a.createElement("h3",{className:"titulo-lineas-violencia"},"L\xedneas de atenci\xf3n a violencia de g\xe9nero"),c.a.createElement(H,null,c.a.createElement(H,{direction:"column",className:"iallevamediosita"},n.length>0&&c.a.createElement(H,null,c.a.createElement("div",{className:"atenciones"},c.a.createElement("div",null,c.a.createElement("h5",{className:"atencion-text"},"Atenci\xf3n v\xeda telef\xf3nica "," ")),n.map((function(e,a){return c.a.createElement("a",{href:i(e),key:a},c.a.createElement("div",{key:a},e))})))),t.length>0&&c.a.createElement(H,null,c.a.createElement("div",{className:"atenciones"},c.a.createElement("div",null,c.a.createElement("h5",{className:"atencion-text"},"Atenci\xf3n en l\xednea "," ")),t.map((function(e,a){return c.a.createElement(K,{key:a,v:e,className:"link-atenciones"})}))))),c.a.createElement("img",{src:pe,alt:"Tel\xe9fono"}))),("no"!==a.programas||"no"!==a.app_android||"no"!==a.app_ios||"no"!==a.whatsapp||"no"!==a.centros_salud)&&c.a.createElement(H,null,"no"!==a.programas&&c.a.createElement(Y,{image:ie,text:"Programas",link:a.programas}),"no"!==a.app_android&&c.a.createElement(Y,{image:me,text:"App Android",link:a.app_android}),"no"!==a.app_ios&&c.a.createElement(Y,{image:de,text:"App iOS",link:a.app_ios}),"no"!==a.whatsapp&&c.a.createElement(Y,{image:se,text:"whatsapp",link:a.whatsapp}),"no"!==a.centros_salud&&c.a.createElement(Y,{image:le,text:"Centros de salud",link:a.centros_salud})),c.a.createElement(H,null,o.length>0&&o.map((function(e,a){return c.a.createElement(r.Fragment,{key:a},l&&!s(e[0])&&c.a.createElement(X,{direction:"column",className:"box-linea-violencia"},c.a.createElement(H,null,c.a.createElement(H,{direction:"column",className:"iallevamediosita"},c.a.createElement(H,null,c.a.createElement("div",{className:"atenciones"},c.a.createElement("div",null,c.a.createElement("h5",{className:"atencion-text"},e[0])),c.a.createElement("a",{href:e[1],target:"_blank",rel:"noopener noreferrer",className:"link-atenciones"},e[1])))),c.a.createElement("img",{src:Ee,alt:"Web"}))),l&&s(e[0])&&c.a.createElement(Y,{image:se,text:e[0],link:e[1]}),!l&&!s(e[0])&&c.a.createElement(Y,{image:pe,text:e[0],link:i(e[1])}),!l&&s(e[0])&&c.a.createElement(Y,{image:se,text:e[0],link:"https://api.whatsapp.com/send?phone=".concat(e[1])}))}))))),c.a.createElement(H,{alignItems:"center",className:"pd-1"},c.a.createElement("h4",null,"Para m\xe1s informaci\xf3n: "),c.a.createElement("div",null,c.a.createElement("a",{href:a.web,className:"button",target:"_blank",rel:"noopener noreferrer",style:{padding:"1rem"}},c.a.createElement("button",null,"SITIO WEB OFICIAL")))))}var fe=t.p+"static/media/ilovehome.d2be84e8.svg",ge=t.p+"static/media/sms.65d731cc.svg",be={"tiene-prueba-and":{icon:me,text:"App Android"},sms:{icon:ge,text:"SMS"},"tiene-prueba-ios":{icon:de,text:"App iOS"},prueba_web:{icon:Ee,text:"Sitio Web"}};function he(e){var a=e.item,t=0===Object.keys(be).filter((function(e){return"no"!==a[e]})).length;return c.a.createElement(H,{className:"jumbotron color-primary"},c.a.createElement(H,{direction:"column",alignItems:"center"},c.a.createElement(H,{direction:"column"},c.a.createElement("h2",{className:"title"},"\xbfTienes s\xedntomas?"),c.a.createElement("h4",{className:"subtitle"},"Haz la prueba en l\xednea"),t&&c.a.createElement("p",null,"Tu estado no tiene pruebas en l\xednea, si tienes s\xedntomas o quieres m\xe1s informaci\xf3n puedes llamar a las l\xedneas locales de atenci\xf3n."),!t&&c.a.createElement(H,{direction:"grid"},Object.keys(be).map((function(e){return"no"!==a[e]&&c.a.createElement("div",{key:e},c.a.createElement(Y,{image:be[e].icon,text:be[e].text,link:"SMS"!==be[e].text&&a[e]}),"SMS"===be[e].text&&a[e])}))))),c.a.createElement(H,{className:"movileHide"},c.a.createElement("img",{src:fe,alt:"Qu\xe9date en casa"})))}var Ne=t.p+"static/media/telephone.989317f6.svg",xe=t.p+"static/media/codeandomexico-bco.d12026ae.svg",ye={typeCases:[{key:"sospechosostotales",label:"Casos Sospechosos"},{key:"confirmadostotales",label:"Casos Confirmados"},{key:"defunciones",label:"Defunciones"}]},ke=(t(129),function(){var e=Object(L.g)().id,a=Object(i.c)((function(e){return e.estados})),t=a.data,n=a.load,r=Object(i.c)((function(a){return ne(a,e)})),o=Object(i.c)((function(e){return e.estados})).lastUdatedData,l=Object.keys(r).length>0,s=r||{},m=s.estado,d=s.telefono,u=d?d.split(","):[],p=function(e,a){var t=[];if("nivel"===a?t=[{text:"m\xe1ximo",value:"red"},{text:"alto",value:"orange"},{text:"medio",value:"yellow"},{text:"bajo",value:"green"}]:"tendencia"===a&&(t=[{text:"incremento",value:"red"},{text:"estable",value:"orange"},{text:"moderado",value:"yellow"},{text:"franco",value:"green"},{text:"sin informaci\xf3n",value:"gray"}]),0===t.length)return"red";for(var n in t)if(-1!==e.indexOf(t[n].text))return t[n].value};return n||l?n?c.a.createElement($,null):c.a.createElement(c.a.Fragment,null,c.a.createElement(H,null,c.a.createElement(H,{direction:"column",className:"estado"},c.a.createElement(T.c,{className:"estado-codeando",to:"/"},c.a.createElement("img",{src:xe,alt:"codeando mexico"})),c.a.createElement("div",{className:"flex"},c.a.createElement("h1",{className:"estado-title"},m),c.a.createElement("p",null,"\xbfTe interesa informaci\xf3n de otro estado?"),c.a.createElement(Q,{options:t,type:"white",placeholder:"[SELECCIONA]"})),c.a.createElement("p",{className:"hidden-mobile"},"Qu\xe9date en casa y l\xe1vate las manos.")),c.a.createElement(H,{direction:"column",className:"pd-1"},c.a.createElement(X,{direction:"column"},c.a.createElement(H,null,ye.typeCases.map((function(e,a){return c.a.createElement(V,{title:e.label,value:r[e.key],key:a})}))),c.a.createElement("div",{className:"button-box"},c.a.createElement("a",{href:"https://coronavirus.gob.mx/datos/",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("button",null,"Conoce m\xe1s"))),c.a.createElement("p",{className:"update-at"},"Actualizado: ",ce()(o).format("LL"))),c.a.createElement(X,{direction:"column"},c.a.createElement(H,{className:"center"},c.a.createElement("h4",null,"L\xedneas locales de atenci\xf3n")),c.a.createElement(H,{className:"phone-container"},c.a.createElement("ul",{className:"decoration"},u.map((function(e,a){return c.a.createElement("a",{key:a,href:"tel:".concat(e.replace(/\D/g,""))},c.a.createElement("li",null,e))}))),c.a.createElement("img",{src:Ne,alt:"Qu\xe9date en casa"})))),c.a.createElement(H,{className:"pd-1"},c.a.createElement(X,{direction:"column"},c.a.createElement("h3",null,"SEM\xc1FORO"),c.a.createElement("div",null,"Nivel de riesgo:",c.a.createElement(G,{variant:p(r["nivel de riesgo"],"nivel"),direction:"column"},r["nivel de riesgo"])),c.a.createElement("div",null,"Tendencia:",c.a.createElement(G,{variant:p(r.tendencia,"tendencia"),direction:"column"},r.tendencia)),c.a.createElement("p",{className:"mt"},r["medidas-01"])))),c.a.createElement(he,{item:r}),c.a.createElement(ve,{item:r}),c.a.createElement("div",{className:"content text-center color-primary"},c.a.createElement("p",null,"*Este es un esfuerzo voluntario, si encuentras informaci\xf3n incorrecta o quieres agregar algo, llena este"," ",c.a.createElement("a",{href:"https://docs.google.com/forms/d/1HhbbSjhkRB9rYA32lnm0b6e5mUQpDk8Eq_Yrl7-MUjI/viewform?edit_requested=true",target:"_blank",rel:"noopener noreferrer"},"formulario")),c.a.createElement("a",{href:"https://airtable.com/shrmp4rtdUkGu8BAn",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("button",null,"DESCARGAR DATOS")))):c.a.createElement(L.b,{component:oe})}),Oe=t.p+"static/media/project.155396ce.svg",we=t.p+"static/media/methodology.3c6f4d35.svg",je=t.p+"static/media/codeando.e006ef5a.svg",_e=t.p+"static/media/ndi.0e5e9148.png";t(130);var Ce=function(){return Object(r.useEffect)((function(){window.scrollTo(0,0)}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"about-container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("img",{src:Oe,alt:"Proyecto"})),c.a.createElement("div",{className:"col col-text"},c.a.createElement("h4",null,"Sobre el proyecto"),c.a.createElement("p",null,"Con el fin de la emergencia a nivel nacional, ahora es competencia de los 32 estados definir protocolos y medidas para hacer frente al COVID19. Este proyecto recopila, sistematiza y facilita el acceso a informaci\xf3n oficial relevante, l\xedneas de atenci\xf3n y medidas de restricci\xf3n o protecci\xf3n implementadas por los gobiernos estatales."))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("img",{src:we,alt:"Replica"})),c.a.createElement("div",{className:"col col-text"},c.a.createElement("h4",null,"\xbfQuieres replicar este proyecto?"),c.a.createElement("p",null,"Si quieres conocer m\xe1s de este proyecto o replicarlo en tu pa\xeds, puedes escribirnos a",c.a.createElement("a",{href:"mailto:equipo@codeandomexico.org"},"equipo@codeandomexico.org")))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("img",{src:je,alt:"Codeando"})),c.a.createElement("div",{className:"col col-text"},c.a.createElement("h4",null,"Sobre CMX"),c.a.createElement("p",null,"Codeando M\xe9xico es una comunidad de hackers c\xedvicos que busca generar nuevas formas de participaci\xf3n ciudadana a trav\xe9s de la tecnolog\xeda. Colaboramos con personas de todos los perfiles: activistas, periodistas, funcionarias p\xfablicas, dise\xf1adoras.")))),c.a.createElement("footer",{className:"sponsors"},c.a.createElement("div",{className:"about-container"},c.a.createElement("h4",null,"Con el apoyo de"),c.a.createElement("img",{src:_e,alt:"NDI logo"}))))},Se=t.p+"static/media/codeandomexico.2432780a.svg",Me=t.p+"static/media/facebook.90eb8967.svg",Ae=t.p+"static/media/twitter.9eac1121.svg",De=t.p+"static/media/github.b96d9acf.svg";t(131);var Ie=function(){return c.a.createElement("header",{className:"nav-main"},c.a.createElement(T.c,{to:"/"},c.a.createElement("img",{className:"nav-codeando",src:Se,alt:"codeando mexico"})),c.a.createElement("div",{className:"nav-sobre"},c.a.createElement(T.c,{className:"nav-link",to:"/sobre-el-proyecto"},"Sobre el proyecto"),c.a.createElement("div",null,c.a.createElement("a",{href:"https://www.facebook.com/CodeandoMexico",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("img",{className:"nav-redes",src:Me,alt:"facebook"})),c.a.createElement("a",{href:"https://twitter.com/CodeandoMexico",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("img",{className:"nav-redes",src:Ae,alt:"twitter"})),c.a.createElement("a",{href:"https://github.com/CodeandoMexico/covid-estados",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("img",{className:"nav-redes",src:De,alt:"github"})))))},qe=t.p+"static/media/facebook-bco.df6b6211.svg",Pe=t.p+"static/media/twitter-bco.bad354ab.svg",Re=t.p+"static/media/github-bco.5fb47eca.svg";t(132);var Te=function(){return c.a.createElement("footer",null,c.a.createElement("div",{className:"footer"},c.a.createElement(T.c,{to:"/"},c.a.createElement("img",{src:xe,alt:"codeando mexico"})),c.a.createElement("p",null,"Hecho con ",c.a.createElement("span",{role:"img","aria-label":"sheep"},"\u2764\ufe0f")," por la comunidad de"," ",c.a.createElement("a",{className:"footer-link",href:"http://codeandomexico.org/",target:"_blank",rel:"noopener noreferrer"},"Codeando M\xe9xico")),c.a.createElement("div",{className:"footer-social"},c.a.createElement(T.c,{className:"footer-link",to:"/sobre-el-proyecto"},"Sobre el proyecto"),c.a.createElement("div",null,c.a.createElement("a",{href:"https://www.facebook.com/CodeandoMexico",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("img",{className:"footer-redes",src:qe,alt:"facebook"})),c.a.createElement("a",{href:"https://twitter.com/CodeandoMexico",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("img",{className:"footer-redes",src:Pe,alt:"twitter"})),c.a.createElement("a",{href:"https://github.com/CodeandoMexico/covid-estados",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("img",{className:"footer-redes",src:Re,alt:"github"}))))))},Le=(t(133),t(29)),Ue=function(e){Object(O.a)(t,e);var a=Object(w.a)(t);function t(){return Object(y.a)(this,t),a.apply(this,arguments)}return Object(k.a)(t,[{key:"componentDidMount",value:function(){this.logPageChange(this.props.location.pathname,this.props.location.search)}},{key:"componentDidUpdate",value:function(e){var a=e.location,t=this.props.location,n=t.pathname,r=t.search,c=n!==a.pathname,o=r!==a.search;(c||o)&&this.logPageChange(n,r)}},{key:"logPageChange",value:function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=e+a,n=window,r=n.location;Le.a.set(Object(s.a)({page:t,location:"".concat(r.origin).concat(t)},this.props.options)),Le.a.pageview(t)}},{key:"render",value:function(){return null}}]),t}(r.Component),Fe=function(){return c.a.createElement(L.b,{component:Ue})},Be=function(){var e=!0;return e&&Le.a.initialize("UA-170809396-1"),e},He=function(e){Object(O.a)(t,e);var a=Object(w.a)(t);function t(){return Object(y.a)(this,t),a.apply(this,arguments)}return Object(k.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.actions.getEstados)()}},{key:"render",value:function(){return c.a.createElement(T.a,null,Be()&&c.a.createElement(Fe,null),c.a.createElement(Ie,null),c.a.createElement(L.d,null,c.a.createElement(L.a,{from:"/home",to:"/"}),c.a.createElement(L.b,{exact:!0,path:"/",component:ae}),c.a.createElement(L.b,{path:"/estado/:id",component:ke}),c.a.createElement(L.b,{path:"/sobre-el-proyecto",component:Ce}),c.a.createElement(L.b,{component:ae})),c.a.createElement(Te,null))}}]),t}(c.a.Component),We=Object(i.b)(null,(function(e){return{actions:Object(d.bindActionCreators)({getEstados:R},e)}}))(He);l.a.render(c.a.createElement(i.a,{store:x},c.a.createElement(We,null)),document.getElementById("codeandocovid"))},85:function(e,a,t){},86:function(e,a,t){},87:function(e,a,t){},89:function(e,a,t){}},[[134,1,2]]]);
//# sourceMappingURL=main.64f613b3.chunk.js.map