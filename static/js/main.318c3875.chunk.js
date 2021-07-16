(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],{40:function(e,t,a){},41:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var s=a(0),r=a.n(s),o=a(15),n=a.n(o),i=(a(40),a(41),a(57)),c=a(61),l=a(62),d=a(1),h=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(i.a,{src:"feathers-header.jpg",style:{objectFit:"cover",height:"250px",width:"100%"},fluid:!0}),Object(d.jsxs)(c.a,{collapseOnSelect:!0,sticky:"top",expand:"sm",bg:"dark",variant:"dark",className:"header",children:[Object(d.jsx)(c.a.Brand,{style:{color:"var(--champagne)",fontSize:"1.65em",fontWeight:"bold"},className:"header-nav",children:"Soma M\xe4kel\xe4"}),Object(d.jsx)(c.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(d.jsx)(c.a.Collapse,{id:"responsive-navbar-nav",children:Object(d.jsxs)(l.a,{className:"ml-auto",children:[Object(d.jsx)(l.a.Link,{style:{color:"var(--champagne)",fontSize:"1.3em"},href:"/",children:"About Me"}),Object(d.jsx)(l.a.Link,{style:{color:"var(--champagne)",fontSize:"1.3em"},href:"/portfolio",children:"Portfolio"}),Object(d.jsx)(l.a.Link,{style:{color:"var(--champagne)",fontSize:"1.3em"},href:"/contact-me",children:"Contact"})]})})]})]})},m=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("footer",{className:"footer",children:[Object(d.jsx)("h2",{children:"Made with \u2764\ufe0f\ufe0f by Sarah M\xe4kel\xe4"}),Object(d.jsx)("p",{children:"\xa9 2021 Sarah M\xe4kel\xe4"})]})})},p=a(19),u=a(6),j=a(34),b=a.n(j),g=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)("section",{className:"main-content-box",children:[Object(d.jsx)("h2",{id:"about-me",children:"About Me"}),Object(d.jsx)(i.a,{className:"about-img",src:"Soma-Makela.jpg",alt:"Soma M\xe4kel\xe4",roundedCircle:!0,fluid:!0}),Object(d.jsxs)("div",{className:"about-text",children:[Object(d.jsx)("p",{children:"Welcome to my portfolio! I'm a Full Stack Web Developer with a publishing industry background."}),Object(d.jsx)("p",{children:"I\u2019m detail oriented, great at collaborating with others, have excellent written and verbal communication skills, and am a strategic thinker. From my work as a Publisher, I\u2019m keenly familiar with deadlines and a fast-paced environment. Learning is something I\u2019m truly passionate about."}),Object(d.jsx)("p",{children:"In terms of programming, I'm comfortable with HTML5, CSS, JavaScript, GitHub, Node.js, WordPress, and responsive web design. I am familiar with Python, PHP, and MySQL. My skills are growing every day."}),Object(d.jsx)("p",{children:"Take a look below to see what I've included in my portfolio. You can also view my GitHub repository for more projects. Feel free to contact me via email or through LinkedIn."})]})]})})},x=a(35),f=a(28);Object(f.b)("user_OYamcA6v2XZrgesL7uczb");var y=function(){var e=Object(s.useState)("Message"),t=Object(x.a)(e,2),a=t[0],r=t[1];return Object(d.jsx)("div",{children:Object(d.jsxs)("section",{className:"main-content-box",children:[Object(d.jsx)("h2",{id:"about-me",children:"Contact Me"}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=document.querySelector("#contact"),a=document.querySelector(".status-message");f.a.sendForm("contact_form","template_contact",e.target).then((function(e){t.reset(),console.log(e.text),r("Message sent!"),a.className="status-message",setTimeout((function(){a.className="status-message"}),5e3)}),(function(e){console.log(e.text),r("Failed to send message! Try again later."),a.className="status-message",setTimeout((function(){a.className="status-message"}),5e3)}))},id:"contact",children:[Object(d.jsx)("label",{children:"Name:"}),Object(d.jsx)("input",{type:"text",name:"from_name",required:!0}),Object(d.jsx)("label",{children:"Email Address:"}),Object(d.jsx)("input",{type:"email",pattern:"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?",name:"reply_to",required:!0}),Object(d.jsx)("label",{children:"Message:"}),Object(d.jsx)("textarea",{type:"text",name:"message",maxLength:"1500",required:!0}),Object(d.jsx)("p",{className:"status-message",children:a}),Object(d.jsx)("input",{type:"submit",value:"Send"})]})]})})},O=a(58),k=a(59),v=a(63),S=a(60),w=function(e){var t=e.project;if(t)return Object(d.jsx)(O.a,{style:{display:"flex",justifyContent:"center",width:"32em",marginBottom:"5px"},fluid:!0,children:Object(d.jsx)(k.a,{children:Object(d.jsxs)(v.a,{children:[Object(d.jsx)(v.a.Header,{as:"h3",className:"card-title",children:t.title}),Object(d.jsx)(v.a.Img,{variant:"top",style:{width:"100%"},src:t.image,alt:t.description}),Object(d.jsx)(v.a.Body,{children:Object(d.jsx)(v.a.Text,{className:"card-text",children:t.description})}),Object(d.jsxs)(v.a.Footer,{children:[Object(d.jsx)(S.a,{className:"mx-1",href:t.repo,children:"Repository"}),Object(d.jsx)(S.a,{href:t.url,children:"Deployed Project"})]})]})})})},M=[{title:"Tabletop Auction House",description:"An auction house interface for roleplaying game masters and players to buy, sell, and trade in-game items for fun and profit. Written using JavaScript, Handlebars, Sequelize, MySQL/JawsDB, Heroku, and Tailwind CSS.",url:"https://tabletop-auction-house.herokuapp.com/",image:"shop-screenshot.png",repo:"https://github.com/smakela13/Tabletop_Auction_House"},{title:"Buddy Finder",description:"A search engine with a map to adopt the right pet for you. Features dynamically updated HTML and CSS powered by Materialize CSS, JavaScript, and uses server-side APIs: PetFinder, Leaflet.JS, and Mapbox.",url:"https://smakela13.github.io/project-buddy-finder/",image:"project-buddy-finder-history-screenshot_1.png",repo:"https://github.com/smakela13/project-buddy-finder"},{title:"Workout Tracker",description:"A workout tracker to log multiple exercises. Written using Express.js, Mongoose, Node.js, MongoDB Atlas, HTML, and CSS. Deployed on Heroku.",url:"https://frozen-anchorage-27658.herokuapp.com/",image:"last-workout-screenshot.png",repo:"https://github.com/smakela13/workout-tracker"},{title:"Tech Blog",description:"Blogging platform written using JavaScript, Express.js, Sequelize, MySQL/JawsDB, Handlebars, and CSS.",url:"https://frozen-hollows-70537.herokuapp.com/",image:"index-screenshot.png",repo:"https://github.com/smakela13/tech-blog"},{title:"Weather Dashboard",description:"Weather dashboard that dynamically updates. Uses OpenWeather API, JavaScript, HTML, CSS.",url:"https://smakela13.github.io/weather-dashboard/",image:"smakela-weather-dashboard.png",repo:"https://github.com/smakela13/weather-dashboard"},{title:"Work Day Scheduler",description:"Work day scheduler to help plan your day written with jQuery, MomentJS, Bootstrap, and HTML.",url:"https://smakela13.github.io/work-day-calendar/index.html",image:"work-day-scheduler.png",repo:"https://github.com/smakela13/work-day-calendar"},{title:"JavaScript Quiz",description:"Quiz about JavaScript written in JavaScript, HTML5, and CSS.",url:"https://smakela13.github.io/javascript-quiz/index.html",image:"javascript-quiz.png",repo:"https://github.com/smakela13/javascript-quiz"}],z=function(){return Object(d.jsx)("div",{className:"col-md-12 py-2",children:Object(d.jsx)("div",{className:"row",children:M.map((function(e,t){return Object(d.jsx)(w,{project:e},t)}))})})};a(48);var N=function(){return Object(d.jsx)(p.a,{history:b()({basename:"https://smakela13.github.io/smakela-portfolio-react-version"}),children:Object(d.jsxs)("div",{className:"supDiv",children:[Object(d.jsx)(h,{}),Object(d.jsxs)(u.c,{children:[Object(d.jsx)(u.a,{exact:!0,path:"/",component:g}),Object(d.jsx)(u.a,{path:"/contact-me",component:y}),Object(d.jsx)(u.a,{path:"/portfolio",component:z})]}),Object(d.jsx)(m,{})]})})},L=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,64)).then((function(t){var a=t.getCLS,s=t.getFID,r=t.getFCP,o=t.getLCP,n=t.getTTFB;a(e),s(e),r(e),o(e),n(e)}))};n.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(p.a,{children:Object(d.jsx)(N,{})})}),document.getElementById("root")),L()}},[[55,1,2]]]);
//# sourceMappingURL=main.318c3875.chunk.js.map