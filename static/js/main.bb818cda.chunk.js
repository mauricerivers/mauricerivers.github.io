(this["webpackJsonpportfolio-site"]=this["webpackJsonpportfolio-site"]||[]).push([[0],{46:function(e,t,a){e.exports=a.p+"static/media/avatar.07f40cca.png"},47:function(e,t,a){e.exports=a.p+"static/media/satellite.0b725170.png"},48:function(e,t,a){e.exports=a.p+"static/media/blockchain.17b30729.png"},49:function(e,t,a){e.exports=a.p+"static/media/chip.993e489f.png"},54:function(e,t,a){e.exports=a(75)},59:function(e,t,a){},60:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(23),i=a.n(r),c=(a(59),a(7)),o=a(12),s=a(9),m=a(8),u=a(26),d=a(5),h=a(17),b=a(27),g=a(53),p=(a(60),a(18)),f=a(15),E=a(35);var v=function(){return l.a.createElement("footer",{className:"mt-5"},l.a.createElement(h.a,{fluid:!0},l.a.createElement(f.a,{className:"border-top justify-content-between p-3"},l.a.createElement(p.a,{className:"justify-content-center",style:{fontFamily:"Kaushan Script, cursive",fontSize:35,color:"#c1b"}},l.a.createElement(f.a,{xs:"auto"},l.a.createElement(E.SocialIcon,{url:"https://github.com/rivermoon21",target:"_blank",rel:"noopener noreferrer",bgColor:"#e600e6",style:{height:30,width:30}})),l.a.createElement(f.a,{xs:"auto"},l.a.createElement(E.SocialIcon,{url:"https://www.linkedin.com/in/mrivera93/",target:"_blank",rel:"noopener noreferrer",bgColor:"#e600e6",style:{height:30,width:30}})),l.a.createElement(f.a,{xs:"auto"},l.a.createElement(E.SocialIcon,{url:"https://twitter.com/rivermoon21",target:"_blank",rel:"noopener noreferrer",bgColor:"#e600e6",style:{height:30,width:30}}))),l.a.createElement(p.a,{className:"p-3 justify-content-center",md:3,style:{fontFamily:"Andale Mono, monospace",fontSize:15,color:"#c1b"}},"\xa9 2020 Developed by Mauricio. All Rights Reserved."))))},y=a(45);var S=function(e){return l.a.createElement(y.a,{className:"bg-transparent jumbotron-fluid p-0"},l.a.createElement(h.a,{fluid:!0},l.a.createElement(p.a,{className:"justify-content-center py-5"},l.a.createElement(f.a,{md:8,sm:12},e.title&&l.a.createElement("h1",{className:"display-2 font-weight-bolder",style:{color:"#c1b",fontSize:"12vw"}},e.title),e.subTitle&&l.a.createElement("h3",{className:"display-4 font-weight-light",style:{fontFamily:"Andale Mono, monospace",color:"#c1b",fontSize:"6vw"}},e.subTitle),e.text&&l.a.createElement("h3",{className:"lead font-weight-light",style:{fontFamily:"Andale Mono, monospace",color:"#c1b",fontSize:"3vw"}},e.text)))))},k=a(24),w=a(42);var x=function(e){var t=Object(w.b)({opacity:1,from:{opacity:0}});return l.a.createElement(w.a.div,{className:"g-card-info",style:t},l.a.createElement("p",null),l.a.createElement("p",{className:"g-card-title",style:{textAlign:"center"}}," ",e.title," "),l.a.createElement("p",{className:"g-card-subtitle",style:{textAlign:"center"}}," ",e.subTitle," "),l.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"}," View "))};var j=function(e){return l.a.createElement("div",{className:"d-inline-block rm-card",style:{},onClick:function(t){return e.click(e.item)}},l.a.createElement("img",{className:"rm-card-image",src:e.item.imgSrc,alt:e.item.imgSrc}),e.item.selected&&l.a.createElement(x,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link}))},C=a(46),N=a.n(C),T=a(47),O=a.n(T),I=a(48),F=a.n(I),z=a(49),A=a.n(z),R=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handlerCardClick=function(e,t){var a=Object(k.a)(n.state.items);a[e].selected=!a[e].selected,a.forEach((function(t){t.id!==e&&(t.selected=!1)})),n.setState({items:a})},n.makeItems=function(e){return e.map((function(e){return l.a.createElement(j,{item:e,click:function(t){return n.handlerCardClick(e.id,t)},key:e.id})}))},n.state={items:[{id:0,title:"Personal",subTitle:"GitHub",imgSrc:N.a,link:"https://stackoverflow.com/",selected:!1},{id:1,title:"Spacecraft",subTitle:"CubeSats",imgSrc:O.a,link:"https://youtube.com",selected:!1},{id:2,title:"Blockchain",subTitle:"Smart Contracts",imgSrc:F.a,link:"https://github.com",selected:!1},{id:3,title:"Hardware",subTitle:"Embedded Projects",imgSrc:A.a,link:"https://www.adafruit.com/",selected:!1}]},n}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement(h.a,{fluid:!0},l.a.createElement(p.a,{className:"justify-content-center"},this.makeItems(this.state.items)))}}]),a}(l.a.Component),H={height:20,minHeight:"75vh",zIndex:2};var M=function(e){return l.a.createElement("div",{className:"rm-title-div"},l.a.createElement(S,{title:e.title,subTitle:e.subTitle,text:e.text}),l.a.createElement(R,null),l.a.createElement("div",{style:H}))};var _=function(e){return l.a.createElement(h.a,{fluid:!0},l.a.createElement(p.a,{className:"justify-content-center"},l.a.createElement(f.a,{md:8},e.children)))},G={height:25,minHeight:"75vh",zIndex:2};var L,q=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"rm-title-div"},l.a.createElement(S,{title:e.title,subTitle:e.subTitle}),l.a.createElement(_,null,l.a.createElement("p",null,"I am a software engineer that enjoys working with hardware, APIs and web development. I have experience with C, Python, React, and NodeJS."),l.a.createElement("p",null,"My dream is to work with software companies that help democratize technology for the world."),l.a.createElement("p",null,"I am constantly learning new things. Currently, I am learning how to create Smart Contracts with Solidity on the Ethereum network and how to create trading bots using basic strategies."),l.a.createElement("p",null,"When I am not on my computer, I enjoy to go for a run or to play soccer."))),l.a.createElement("div",{style:G}))},B=a(14),P=a(10),W=a(51),K=a(50),D=a.n(K),J={height:20,minHeight:"75vh",zIndex:2},V=(L={background:"rgb(204,17,187)"},Object(B.a)(L,"background","linear-gradient(45deg, rgba(204,17,187,1) 0%, rgba(219,119,217,1) 50%, rgba(119,0,255,1) 100%)"),Object(B.a)(L,"padding","30px"),Object(B.a)(L,"borderRadius","15px"),Object(B.a)(L,"borderWidth","medium"),Object(B.a)(L,"borderColor","red"),Object(B.a)(L,"color","#111"),L),U=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,l=t.name;n.setState(Object(B.a)({},l,a))},n.handleSubmit=function(e){e.preventDefault(),n.setState({disabled:!0,emailSent:!1,emailSending:!0}),D.a.sendForm("service_oj2aurp","template_5meesxz",e.target,"user_tpRRilzZrxELEY2akDNty").then((function(e){console.log(e.text),"OK"===e.text?n.setState({name:"",email:"",subject:"",message:"",disabled:!1,emailSent:!0,emailSending:!1}):n.setState({disabled:!1,emailSent:!1,emailSending:!1})}),(function(e){console.log(e.text),n.setState({disabled:!1,emailSent:!1,emailSending:!1})}))},n.state={name:"",email:"",subject:"",message:"",disabled:"",emailSent:"",emailSending:""},n}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"rm-title-div"},l.a.createElement(S,{title:this.props.title}),l.a.createElement(_,null,l.a.createElement(P.a,{onSubmit:this.handleSubmit,style:V},l.a.createElement(P.a.Group,null,l.a.createElement(P.a.Label,{htmlFor:"full-name",required:!0},"full name"),l.a.createElement(P.a.Control,{id:"full-name",name:"name",type:"text",value:this.state.name,onChange:this.handleChange})),l.a.createElement(P.a.Group,null,l.a.createElement(P.a.Label,{htmlFor:"email",required:!0},"email"),l.a.createElement(P.a.Control,{id:"email",name:"email",type:"email",value:this.state.email,onChange:this.handleChange})),l.a.createElement(P.a.Group,null,l.a.createElement(P.a.Label,{htmlFor:"subject",required:!0},"subject"),l.a.createElement(P.a.Control,{id:"subject",name:"subject",type:"subject",value:this.state.subject,onChange:this.handleChange})),l.a.createElement(P.a.Group,null,l.a.createElement(P.a.Label,{htmlFor:"message",required:!0},"message"),l.a.createElement(P.a.Control,{id:"message",name:"message",as:"textarea",rows:"3",value:this.state.message,onChange:this.handleChange})),l.a.createElement(W.a,{className:"d-inline-block",variant:"primary",disabled:this.state.disabled,type:"submit",style:{fontFamily:"Andale Mono, monospace",fontSize:15,backgroundColor:"#111",border:"#7700ff solid 3px",borderRadius:"5px"}},"Send"),!0===this.state.emailSending&&!1===this.state.emailSent&&l.a.createElement("p",{className:"d-inline sending-msg"},"Sending..."),!1===this.state.emailSending&&!0===this.state.emailSent&&l.a.createElement("p",{className:"d-inline success-msg"},"Email Sent"),!1===this.state.emailSending&&!1===this.state.emailSent&&l.a.createElement("p",{className:"d-inline err-msg"},"Email Not Sent"))),l.a.createElement("div",{style:J}))}}]),a}(l.a.Component),Y=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={title:"rivermoon",headerLinks:[{title:"Home",path:"/"},{title:"About",path:"/about"},{title:"Contact",path:"/contact"}],home:{title:"Hello, I'm Mauricio",subTitle:"Welcome,",text:"Check out my projects below"},about:{title:"About Me"},contact:{title:"Let's Talk"},socials:{title:"Find me"}},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(u.a,{className:"mainContainer"},l.a.createElement(h.a,{className:"p-2",fluid:!0,style:{backgroundColor:"#111"}},l.a.createElement(b.a,{className:"border-bottom",expand:"lg",variant:"dark"},l.a.createElement(b.a.Brand,{style:{fontFamily:"Kaushan Script, cursive",fontSize:35,color:"#c1b"}},"Relentless."),l.a.createElement(b.a.Toggle,{className:"ml-auto","aria-controls":"navbar-toggle"}),l.a.createElement(b.a.Collapse,{id:"navbar-toggle",style:{textAlign:"center",color:"#c1b"}},l.a.createElement(g.a,{className:"ml-auto",style:{fontFamily:"Kaushan Script, cursive",fontSize:25,color:"#72f"}},l.a.createElement(u.b,{className:"nav-link",to:"/",style:{color:"#c1b",borderRadius:"15px"}},"Home"),l.a.createElement(u.b,{className:"nav-link",to:"/about",style:{color:"#c1b",borderRadius:"15px"}},"About"),l.a.createElement(u.b,{className:"nav-link",to:"/contact",style:{color:"#c1b",borderRadius:"15px"}},"Contact"),l.a.createElement("a",{className:"nav-link",href:"https://docs.google.com/document/d/1a9EUGBGO6NI9d4wfe6pTHNPAFeVxq9x2-g5pTyxtAFg/edit?usp=sharing",rel:"noopener noreferrer",target:"_blank",style:{color:"#c1b",borderRadius:"15px"}},"Resume")))),l.a.createElement(d.a,{path:"/",exact:!0,render:function(){return l.a.createElement(M,{title:e.state.home.title,subTitle:e.state.home.subTitle,text:e.state.home.text})}}),l.a.createElement(d.a,{path:"/about",exact:!0,render:function(){return l.a.createElement(q,{title:e.state.about.title,subTitle:e.state.about.subTitle})}}),l.a.createElement(d.a,{path:"/contact",exact:!0,render:function(){return l.a.createElement(U,{title:e.state.contact.title,subTitle:e.state.contact.subTitle})}}),l.a.createElement(v,null))))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(74);i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[54,1,2]]]);
//# sourceMappingURL=main.bb818cda.chunk.js.map