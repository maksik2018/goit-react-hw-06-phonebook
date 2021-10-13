(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{31:function(e,t,n){},34:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var c,r=n(0),a=n.n(r),i=n(12),o=n.n(i),u=n(6),s=n(18),b=(n(31),n(8)),l=n(11),d=l.a.div(c||(c=Object(b.a)(["\n  margin-left: 30px;\n"]))),j=n(1);function h(e){var t=e.children;return Object(j.jsx)(d,{children:t})}var O=n(17),f=n(4),m=n(19),p=n.n(m),x=Object(f.b)("contacts/add",(function(e){return{payload:{id:p()(),name:e.name,number:e.number}}})),v=Object(f.b)("contacts/delete"),g=Object(f.b)("contacts/filter");var y,C,k=Object(u.b)((function(e){return{contacts:e.contacts.items}}),(function(e){return{onSubmit:function(t){return e(x(t))}}}))((function(e){var t=e.contacts,n=e.onSubmit,c=Object(r.useState)(""),a=Object(O.a)(c,2),i=a[0],o=a[1],u=Object(r.useState)(""),s=Object(O.a)(u,2),b=s[0],l=s[1],d=function(e){var t=e.target,n=t.name,c=t.value;switch(n){case"name":o(c);break;case"number":l(c);break;default:return}};return Object(j.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),t.find((function(e){return e.name.toLowerCase()===i.toLowerCase()})))return alert("".concat(i," is already in contacts")),o(""),void l("");""!==i||""!==b?(n({name:i,number:b}),o(""),l("")):alert("Please fill empty fields")},children:[Object(j.jsx)("input",{placeholder:"indicate your name",value:i,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:d}),Object(j.jsx)("input",{placeholder:"indicate your phone number",value:b,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:d}),Object(j.jsx)("button",{type:"submit",children:"Add contact"})]})})),w=l.a.ul(y||(y=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),A=l.a.li(C||(C=Object(b.a)(["\n  margin-right: 40px;\n  list-style: none;\n"]))),P=function(e){return e.contacts.items.filter((function(t){return t.name.toLowerCase().includes(e.contacts.filter.toLowerCase())}))},S=Object(u.b)((function(e){return{contacts:P(e)}}),(function(e){return{onDeleteContact:function(t){return e(v(t))}}}))((function(e){var t=e.contacts,n=e.onDeleteContact;return Object(j.jsx)(w,{children:t.map((function(e){return Object(j.jsxs)(A,{children:[Object(j.jsx)("p",{children:e.name}),Object(j.jsx)("p",{children:e.number}),Object(j.jsx)("button",{type:"button",onClick:function(){return n(e.id)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]},e.id)}))})})),z=Object(u.b)((function(e){return{value:e.filter}}),(function(e){return{onChange:function(t){return e(g(t.target.value))}}}))((function(e){var t=e.value,n=e.onChange;return Object(j.jsxs)("label",{children:["Find contacts by name ",Object(j.jsx)("input",{type:"text",value:t,onChange:n})]})}));n(34);function J(){return Object(j.jsxs)(h,{children:[Object(j.jsx)("h1",{children:" Phonebook "}),Object(j.jsx)("h2",{children:"Add new contact"}),Object(j.jsx)(k,{}),Object(j.jsx)("h2",{children:"Find contact"}),Object(j.jsx)(z,{}),Object(j.jsx)("h2",{children:"Contact list"}),Object(j.jsx)(S,{})]})}var L,D=n(14),I=n(5),Z=n(20),q=n.n(Z),B=n(21),F=n.n(B),M=n(2),E=n(10),T=Object(f.c)("",Object(E.a)({},g,(function(e,t){return t.payload}))),$=Object(f.c)([{id:"id-1",name:"John Piters",phone:"555-55-55"},{id:"id-2",name:"Piter Johnson",phone:"444-44-44"},{id:"id-3",name:"Pit Ivans",phone:"333-33-33"},{id:"id-4",name:"Ivan Piterson",phone:"222-22-22"}],(L={},Object(E.a)(L,x,(function(e,t){return[].concat(Object(D.a)(e),[t.payload])})),Object(E.a)(L,v,(function(e,t){return e.filter((function(e){return t.payload!==e.id}))})),L)),G=Object(M.b)({items:$,filter:T}),H=[].concat(Object(D.a)(Object(f.d)({serializableCheck:{ignoredActions:[I.a,I.f,I.b,I.c,I.d,I.e]}})),[F.a]),K={key:"contacts",storage:q.a,blacklist:["filter"]},N=Object(f.a)({reducer:{contacts:Object(I.g)(K,G)},middleware:H,devTools:!1}),Q={store:N,persistor:Object(I.h)(N)};o.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(u.a,{store:Q.store,children:Object(j.jsx)(s.a,{loading:null,persistor:Q.persistor,children:Object(j.jsx)(J,{})})})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.65d3e32f.chunk.js.map