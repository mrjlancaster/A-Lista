(this["webpackJsonpa-lista"]=this["webpackJsonpa-lista"]||[]).push([[0],{34:function(e,s,r){},35:function(e,s,r){},36:function(e,s,r){},42:function(e,s,r){},43:function(e,s,r){},61:function(e,s,r){},62:function(e,s,r){"use strict";r.r(s);var t=r(0),a=r(1),c=r.n(a),n=r(27),i=r.n(n),o=(r(34),r(35),r(3)),l=r(2),j=(r(36),function(){return Object(t.jsxs)("div",{className:"header",children:[Object(t.jsx)("h2",{children:Object(t.jsx)(o.b,{to:"/",children:"A-LISTA"})}),Object(t.jsxs)("nav",{className:"navigation_links",children:[Object(t.jsx)(o.b,{to:"/login",className:"li-font signIn",children:"Login"}),Object(t.jsx)(o.b,{to:"/register",className:"li-font register",children:"Create your account"})]})]})}),d=r(10),b=(r(42),function(){var e=Object(a.useState)(""),s=Object(d.a)(e,2),r=s[0],c=s[1];return Object(t.jsxs)("div",{className:"body_container",children:[Object(t.jsxs)("div",{className:"body_description-wrapper",children:[Object(t.jsx)("h1",{children:"Your guests deserve to be reserved"}),Object(t.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur atque aperiam suscipit incidunt rerum explicabo, maiores hic. Mollitia fuga earum corporis dolores, fugit totam dolore dicta architecto"})]}),Object(t.jsxs)("div",{className:"register_input-wrapper",children:[Object(t.jsx)("div",{children:Object(t.jsx)("input",{type:"text",className:"register_input",name:"email",placeholder:"emailadress@example.com",value:r,onChange:function(e){return c(e.target.value)}})}),Object(t.jsxs)(o.b,{to:"/register",className:"register_link",children:["Create account ",Object(t.jsx)("i",{className:"fas fa-long-arrow-alt-right"})]})]}),Object(t.jsx)("p",{className:"copyrights",children:"Copyright \xa9 2020 All Rights Reserved"})]})}),u=function(){return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)(j,{}),Object(t.jsx)(b,{})]})},m=r(5),h=(r(43),r(13)),O=r.n(h),g=function(){var e=Object(a.useState)({userEmail:"",userPassword:""}),s=Object(d.a)(e,2),r=s[0],c=s[1];return Object(t.jsxs)("div",{className:"login_container",children:[Object(t.jsx)("div",{className:"login_back-btn",children:Object(t.jsxs)(o.b,{to:"/",children:[Object(t.jsx)("i",{className:"fas fa-long-arrow-alt-left"})," back"]})}),Object(t.jsxs)("div",{className:"login_sidebar",children:[Object(t.jsx)("h1",{children:"A-Lista"}),Object(t.jsxs)("div",{className:"login_sidebar-content",children:[Object(t.jsx)("h3",{children:"Member login"}),Object(t.jsxs)("ul",{children:[Object(t.jsx)("li",{children:Object(t.jsx)(o.b,{to:"/login",children:"Login"})}),Object(t.jsx)("li",{children:Object(t.jsx)(o.b,{to:"/register",children:"Register"})})]})]})]}),Object(t.jsx)("div",{className:"login_form-container",children:Object(t.jsxs)("form",{onSubmit:function(e){e.preventDefault(),O()({url:"/api/login",method:"POST",data:r}).then((function(e){return console.log("login posted",e)})).catch((function(e){return console.log(e)})),console.log(r)},className:"login_form",children:[Object(t.jsx)("h1",{children:"Welcome"}),Object(t.jsxs)("div",{className:"login_inputs-container",children:[Object(t.jsx)("input",{type:"email",placeholder:"Email*",value:r.userEmail,onChange:function(e){return c(Object(m.a)(Object(m.a)({},r),{},{userEmail:e.target.value}))}}),Object(t.jsx)("input",{type:"password",placeholder:"Password*",value:r.userPassword,onChange:function(e){return c(Object(m.a)(Object(m.a)({},r),{},{userPassword:e.target.value}))}}),Object(t.jsx)("p",{children:Object(t.jsx)(o.b,{to:"",children:"Forgot password?"})})]}),Object(t.jsxs)("div",{className:"login_button-container",children:[Object(t.jsx)("button",{type:"submit",children:"Login"}),Object(t.jsxs)("p",{children:["Don't have an account? ",Object(t.jsx)(o.b,{to:"/register",children:" Register here"})]})]})]})})]})},p=(r(61),function(){var e=Object(a.useState)({name:"",email:"",password:"",confirmPassword:""}),s=Object(d.a)(e,2),r=s[0],c=s[1],n=Object(a.useState)({nameError:"",emailError:"",passwordError:"",passwordTwoError:""}),i=Object(d.a)(n,2),l=i[0],j=i[1];return Object(t.jsxs)("div",{className:"register_container",children:[Object(t.jsx)("div",{className:"register_back-btn",children:Object(t.jsxs)(o.b,{to:"/",children:[Object(t.jsx)("i",{className:"fas fa-long-arrow-alt-left"})," back"]})}),Object(t.jsxs)("div",{className:"register_sidebar",children:[Object(t.jsx)("h1",{children:"A-Lista"}),Object(t.jsxs)("div",{className:"newUserRegistration",children:[Object(t.jsxs)("h3",{children:["New Member ",Object(t.jsx)("br",{}),"Registration"]}),Object(t.jsxs)("ul",{children:[Object(t.jsx)("li",{children:Object(t.jsx)(o.b,{to:"/login",children:"Login"})}),Object(t.jsx)("li",{children:Object(t.jsx)(o.b,{to:"/register",children:"Register"})})]})]})]}),Object(t.jsx)("div",{className:"register_form-container",children:Object(t.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(){var e="",s="",t="",a="";return(!r.name||r.name.length<5)&&(e="Please enter your name"),r.email||r.email.includes("@")||(s="Please enter valid email"),(!r.password||r.password.length<6)&&(t="Password must be minimum of 6 characters"),r.confirmPassword!==r.password&&(a="Password does not match"),!(e||s||t||a)||(j({nameError:e,emailError:s,passwordError:t,passwordTwoError:a}),!1)}()&&(O()({url:"/api/newUser",method:"POST",data:r}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),c({name:"",email:"",password:"",confirmPassword:""}),j({nameError:"",emailError:"",passwordError:"",passwordTwoError:""}),console.log("form validated and sent"))},className:"register_form",children:[Object(t.jsx)("h1",{children:"Register"}),Object(t.jsxs)("div",{className:"register_inputs-container",children:[Object(t.jsx)("input",{className:l?"register_name-input":"notValid",type:"text",placeholder:"Full name*",name:"full_name",value:r.name,onChange:function(e){return c(Object(m.a)(Object(m.a)({},r),{},{name:e.target.value}))}}),Object(t.jsx)("div",{className:"errorMessage",children:l.nameError}),Object(t.jsx)("input",{className:"register_email-input",type:"email",placeholder:"Email*",name:"email",value:r.email,onChange:function(e){return c(Object(m.a)(Object(m.a)({},r),{},{email:e.target.value}))}}),Object(t.jsx)("div",{className:"errorMessage",children:l.emailError}),Object(t.jsx)("input",{className:"register_password-input",type:"password",placeholder:"Password*",name:"password",value:r.password,onChange:function(e){return c(Object(m.a)(Object(m.a)({},r),{},{password:e.target.value}))}}),Object(t.jsx)("div",{className:"errorMessage",children:l.passwordError}),Object(t.jsx)("input",{className:"register_passwordTwo-input",type:"password",placeholder:"Confirm password*",name:"password_confirmation",value:r.confirmPassword,onChange:function(e){return c(Object(m.a)(Object(m.a)({},r),{},{confirmPassword:e.target.value}))}}),Object(t.jsx)("div",{className:"errorMessage",children:l.passwordTwoError})]}),Object(t.jsxs)("div",{className:"register_button-container",children:[Object(t.jsx)("button",{type:"submit",children:"Create account"}),Object(t.jsxs)("p",{children:["Already have an account?",Object(t.jsx)(o.b,{to:"/login",children:" Login"})]})]})]})})]})}),x=function(){return Object(t.jsx)(o.a,{children:Object(t.jsx)("div",{className:"App",children:Object(t.jsxs)(l.c,{children:[Object(t.jsx)(l.a,{path:"/",exact:!0,children:Object(t.jsx)(u,{})}),Object(t.jsx)(l.a,{path:"/Login",component:g}),Object(t.jsx)(l.a,{path:"/register",children:Object(t.jsx)(p,{})})]})})})};i.a.render(Object(t.jsx)(c.a.StrictMode,{children:Object(t.jsx)(x,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.f05339ae.chunk.js.map