(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],{50:function(e,t,a){"use strict";a.r(t);var s=a(0),r=a.n(s),i=a(15),o=a.n(i),n=a(57),c=a(22),l=a(1),d=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(c.LinkContainer,{to:"/",children:Object(l.jsx)(n.a.Link,{className:"portfolio-nav-links active",children:"About Me"})}),Object(l.jsx)(c.LinkContainer,{to:"/portfolio",children:Object(l.jsx)(n.a.Link,{className:"portfolio-nav-links active",children:"Portfolio"})}),Object(l.jsx)(c.LinkContainer,{to:"/contact-me",children:Object(l.jsx)(n.a.Link,{className:"portfolio-nav-links active",children:"Contact"})})]})},h=a(52),p=a(56),m=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(h.a,{src:"https://smakela13.github.io/smakela-portfolio-react-version/feathers-header.jpg",style:{objectFit:"cover",height:"250px",width:"100%"},alt:"header image with feathers",fluid:!0}),Object(l.jsxs)(p.a,{collapseOnSelect:!0,sticky:"top",expand:"sm",bg:"dark",variant:"dark",className:"header",children:[Object(l.jsx)(p.a.Brand,{style:{color:"#F4EFC9",fontSize:"2.75em",marginLeft:"10px",fontFamily:"Merienda, cursive"},className:"h1",children:"Soma M\xe4kel\xe4"}),Object(l.jsx)(p.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(l.jsx)(p.a.Collapse,{id:"responsive-navbar-nav",children:Object(l.jsx)(n.a,{className:"ml-auto","aria-label":"Navigation",children:Object(l.jsx)(d,{})})})]})]})},j=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("footer",{className:"footer",children:[Object(l.jsx)("a",{href:"https://github.com/smakela13","aria-label":"GitHub",children:Object(l.jsx)(h.a,{src:"https://smakela13.github.io/smakela-portfolio-react-version/GitHub-1.png",style:{width:"64px",marginRight:"1em",marginBottom:".5em"},alt:"GitHub"})}),Object(l.jsx)("a",{href:"https://www.linkedin.com/in/soma-makela/","aria-label":"LinkedIn",children:Object(l.jsx)(h.a,{src:"https://smakela13.github.io/smakela-portfolio-react-version/LinkedIn.png",style:{width:"64px",marginRight:"1em",marginBottom:".5em"},alt:"LinkedIn"})}),Object(l.jsx)("a",{href:"https://www.twitter.com/smakela13","aria-label":"Twitter",children:Object(l.jsx)(h.a,{src:"https://smakela13.github.io/smakela-portfolio-react-version/twitter-64.png",style:{width:"64px"},alt:"Twitter"})}),Object(l.jsx)("h2",{children:"Made with \u2764\ufe0f\ufe0f by Soma M\xe4kel\xe4"}),Object(l.jsx)("p",{style:{color:"#000"},children:"\xa9 2021 Soma M\xe4kel\xe4"})]})})},u=a(6),b=function(){return Object(l.jsx)("div",{children:Object(l.jsxs)("section",{className:"main-content-box",children:[Object(l.jsx)("h1",{children:"About Me"}),Object(l.jsx)(h.a,{className:"about-img",src:"https://smakela13.github.io/smakela-portfolio-react-version/Soma-Makela.jpg",alt:"picture of Soma M\xe4kel\xe4",roundedCircle:!0,fluid:!0}),Object(l.jsxs)("div",{className:"about-text",children:[Object(l.jsx)("p",{children:"Welcome to my portfolio! I'm a Software Engineer with a focus on Frontend and Full Stack Development."}),Object(l.jsx)("p",{children:"I'm detail oriented, great at collaborating with others, and a strategic thinker when meeting tight deadlines. My passion for learning helps my skills grow every day."}),Object(l.jsxs)("p",{children:["Take a look at what I've included in my portfolio. You can also view my GitHub ",Object(l.jsx)("a",{href:"https://github.com/smakela13?tab=repositories",target:"_blank","aria-label":"Repositories",rel:"noreferrer",children:"repositories"})," for more projects. Feel free to contact me via the Contact form or through ",Object(l.jsx)("a",{href:"https://www.linkedin.com/in/soma-makela/","aria-label":"LinkedIn",target:"_blank",rel:"noreferrer",children:"LinkedIn"}),"."]})]}),Object(l.jsx)("h2",{children:"Skills"}),Object(l.jsxs)("div",{className:"about-text",children:[Object(l.jsxs)("p",{children:[Object(l.jsx)("span",{children:"Languages:"})," JavaScript ES6+, HTML5, CSS3, Java, SQL, Python"]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("span",{children:"Tools and Frameworks:"})," Node.js, React.js, Express.js, MongoDB, JSX, Handlebars.js, Git, Mongoose ODM, Tailwind CSS, Materialize CSS, Bootstrap, Sequelize, MySQL, Oracle DB, GitHub, Spring Boot, Thymeleaf, jQuery, Apollo GraphQL, REST API, Google Lighthouse, Progressive Web Apps, Bash, Unix, Flask, Apache Hadoop, Apache Spark, Apache Hive, Visual Studio Code, Eclipse"]})]})]})})},g=a(34),x=a(28);Object(x.b)("user_OYamcA6v2XZrgesL7uczb");var k=function(){var e=Object(s.useState)(),t=Object(g.a)(e,2),a=t[0],r=t[1];return Object(l.jsx)("div",{children:Object(l.jsxs)("section",{className:"main-content-box",children:[Object(l.jsx)("h2",{children:"Contact Me"}),Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=document.querySelector("#contact"),a=document.querySelector(".status-message");x.a.sendForm("contact_form","template_contact",e.target).then((function(e){t.reset(),console.log(e.text),r("Message sent!"),a.className="status-message",setTimeout((function(){a.className="status-message"}),5e3)}),(function(e){console.log(e.text),r("Failed to send message! Try again later."),a.className="status-message",setTimeout((function(){a.className="status-message"}),5e3)}))},id:"contact",children:[Object(l.jsx)("label",{for:"name",children:"Name:"}),Object(l.jsx)("input",{type:"text",name:"from_name",id:"name",autoComplete:"name",required:!0}),Object(l.jsx)("label",{for:"email",children:"Email Address:"}),Object(l.jsx)("input",{type:"email",id:"email",pattern:"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?",name:"reply_to",autoComplete:"email",required:!0}),Object(l.jsx)("label",{for:"message",children:"Message:"}),Object(l.jsx)("textarea",{name:"message",id:"message",maxLength:"1500",required:!0}),Object(l.jsx)("p",{className:"status-message",children:a}),Object(l.jsx)("input",{type:"submit",value:"Send"})]})]})})},f=a(53),O=a(54),S=a(58),v=a(55),y=function(e){var t=e.project;if(t)return Object(l.jsx)(f.a,{style:{display:"flex",justifyContent:"center",width:"32em",marginBottom:"5px"},fluid:!0,children:Object(l.jsx)(O.a,{children:Object(l.jsxs)(S.a,{children:[Object(l.jsx)(S.a.Header,{as:"h2",className:"card-title",children:t.title}),Object(l.jsx)(S.a.Img,{variant:"top",style:{width:"100%"},src:"https://smakela13.github.io/smakela-portfolio-react-version"+t.image,alt:t.description}),Object(l.jsx)(S.a.Body,{children:Object(l.jsx)(S.a.Text,{className:"card-text",children:t.description})}),Object(l.jsxs)(S.a.Footer,{className:"card-header",children:[Object(l.jsx)(v.a,{className:"m-1 btn-dark align-middle",href:t.repo,children:"Repository"}),Object(l.jsx)(v.a,{className:"m-1 btn-dark align-middle",href:t.url,children:"Deployed Project"})]})]})})})},w=[{title:"Tabletop Auction House",description:"An auction house interface for roleplaying game masters and players to buy, sell, and trade in-game items for fun and profit. Written using JavaScript, Handlebars, Sequelize, MySQL/JawsDB, Heroku, and Tailwind CSS.",url:"https://tabletop-auction-house.herokuapp.com/",image:"/shop-screenshot.png",repo:"https://github.com/smakela13/Tabletop_Auction_House"},{title:"Buddy Finder",description:"A search engine with a map to adopt the right pet for you. Features dynamically updated HTML and CSS powered by Materialize CSS, JavaScript, and uses the server-side APIs: PetFinder, Leaflet.JS, and Mapbox.",url:"https://smakela13.github.io/project-buddy-finder/",image:"/project-buddy-finder-history-screenshot_1.png",repo:"https://github.com/smakela13/project-buddy-finder"},{title:"Java Tech News",description:"Blog that allows for login, sign-up, posting, and more written with Java, JavaScript, HTML5, CSS, Spring Boot, MySQL, Thymeleaf, and Heroku.",url:"https://java-tech-news.herokuapp.com/",image:"/java-tech-news.png",repo:"https://github.com/smakela13/java-tech-news"},{title:"Google Books Search Engine",description:"Quiz about JavaScript written in JavaScript, HTML5, and CSS.",url:"https://intense-woodland-01867.herokuapp.com/",image:"/google-books-screenshot.png",repo:"https://github.com/smakela13/google-books-search-engine"},{title:"Workout Tracker",description:"A workout tracker to log multiple exercises. Written using Express.js, Mongoose, Node.js, MongoDB Atlas, HTML, and CSS. Deployed on Heroku.",url:"https://frozen-anchorage-27658.herokuapp.com/",image:"/last-workout-screenshot.png",repo:"https://github.com/smakela13/workout-tracker"},{title:"Tech Blog",description:"Blogging platform written using JavaScript, Express.js, Sequelize, MySQL/JawsDB, Handlebars, and CSS.",url:"https://frozen-hollows-70537.herokuapp.com/",image:"/index-screenshot.png",repo:"https://github.com/smakela13/tech-blog"},{title:"Weather Dashboard",description:"Weather dashboard that dynamically updates. Uses OpenWeather API, JavaScript, HTML, CSS.",url:"https://smakela13.github.io/weather-dashboard/",image:"/smakela-weather-dashboard.png",repo:"https://github.com/smakela13/weather-dashboard"},{title:"Work Day Scheduler",description:"Work day scheduler to help plan your day written with jQuery, MomentJS, Bootstrap, and HTML.",url:"https://smakela13.github.io/work-day-calendar/index.html",image:"/work-day-scheduler.png",repo:"https://github.com/smakela13/work-day-calendar"},{title:"JavaScript Quiz",description:"Quiz about JavaScript written in JavaScript, HTML5, and CSS.",url:"https://smakela13.github.io/javascript-quiz/index.html",image:"/javascript-quiz.png",repo:"https://github.com/smakela13/javascript-quiz"}],M=function(){return Object(l.jsxs)("div",{className:"main-content-box",children:[Object(l.jsx)("h1",{children:"Portfolio"}),Object(l.jsx)("div",{className:"row",children:w.map((function(e,t){return Object(l.jsx)(y,{project:e},t)}))})]})};var L=function(){return Object(l.jsxs)("div",{className:"supDiv",children:[Object(l.jsx)(m,{}),Object(l.jsxs)(u.g,{children:[Object(l.jsx)(u.d,{exact:!0,path:"/contact-me",component:k}),Object(l.jsx)(u.d,{exact:!0,path:"/portfolio",component:M}),Object(l.jsx)(u.d,{exact:!0,path:"/",component:b})]}),Object(l.jsx)(j,{})]})},N=a(17);o.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(N.BrowserRouter,{basename:"/smakela-portfolio-react-version",children:Object(l.jsx)(L,{})})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.cc0f15f4.chunk.js.map