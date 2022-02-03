(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{13:function(t,e,n){t.exports={listItem:"ContactListItem_listItem__RWhuQ",listItemText:"ContactListItem_listItemText__2dzln",button:"ContactListItem_button__15AFZ"}},30:function(t,e,n){t.exports={filterInput:"Filter_filterInput__2ygUU"}},31:function(t,e,n){t.exports={container:"Container_container__2EL12"}},62:function(t,e,n){},63:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),c=n(10),u=n.n(c),o=n(7),s=n(4),i=n(2),l=n(32),b=n(6),f=Object(s.b)("contacts/changeFilter"),j=n(8),p=n(5),d=n.n(p),m=n(12),O=n.n(m);function h(){return x.apply(this,arguments)}function x(){return(x=Object(j.a)(d.a.mark((function t(){var e,n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("/contacts");case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t,e){return _.apply(this,arguments)}function _(){return(_=Object(j.a)(d.a.mark((function t(e,n){var r,a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.post("/contacts",{name:e,number:n});case 2:return r=t.sent,a=r.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(t){return y.apply(this,arguments)}function y(){return(y=Object(j.a)(d.a.mark((function t(e){var n,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.delete("/contacts/".concat(e));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}O.a.defaults.baseURL="https://61f1876a072f86001749f26d.mockapi.io";var C,w,N,k=Object(s.c)("contacts/FetchContacts",function(){var t=Object(j.a)(d.a.mark((function t(e,n){var r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,h();case 4:return t.abrupt("return",t.sent);case 7:return t.prev=7,t.t0=t.catch(1),t.abrupt("return",r(t.t0.message));case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e,n){return t.apply(this,arguments)}}()),I=Object(s.c)("contacts/AddContact",function(){var t=Object(j.a)(d.a.mark((function t(e,n){var r,a,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.name,a=e.number,c=n.rejectWithValue,t.prev=2,t.next=5,v(r,a);case 5:return t.abrupt("return",t.sent);case 8:return t.prev=8,t.t0=t.catch(2),t.abrupt("return",c(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[2,8]])})));return function(e,n){return t.apply(this,arguments)}}()),F=Object(s.c)("contacts/Delete",function(){var t=Object(j.a)(d.a.mark((function t(e,n){var r,a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,g(e);case 4:return a=t.sent,t.abrupt("return",a.id);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",r(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,n){return t.apply(this,arguments)}}()),A=Object(s.d)([],(C={},Object(i.a)(C,k.fulfilled,(function(t,e){return e.payload})),Object(i.a)(C,I.fulfilled,(function(t,e){var n=e.payload;return[].concat(Object(l.a)(t),[n])})),Object(i.a)(C,F.fulfilled,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),C)),T=Object(s.d)("",Object(i.a)({},f,(function(t,e){return e.payload}))),L=Object(s.d)(!1,(w={},Object(i.a)(w,k.pending,(function(){return!0})),Object(i.a)(w,k.fulfilled,(function(){return!1})),Object(i.a)(w,k.rejected,(function(){return!1})),Object(i.a)(w,I.pending,(function(){return!0})),Object(i.a)(w,I.fulfilled,(function(){return!1})),Object(i.a)(w,I.rejected,(function(){return!1})),Object(i.a)(w,F.pending,(function(){return!0})),Object(i.a)(w,F.fulfilled,(function(){return!1})),Object(i.a)(w,F.rejected,(function(){return!1})),w)),Z=Object(s.d)(null,(N={},Object(i.a)(N,k.rejected,(function(t){return console.log(t)})),Object(i.a)(N,k.pending,(function(){return null})),Object(i.a)(N,I.rejected,(function(t){return console.log(t)})),Object(i.a)(N,I.pending,(function(){return null})),Object(i.a)(N,F.rejected,(function(t){return console.log(t)})),Object(i.a)(N,F.pending,(function(){return null})),N)),z=Object(b.b)({items:A,filter:T,loading:L,error:Z}),D=Object(s.a)({reducer:{contacts:z}}),E=n(20),S=n(33),q=(n(60),n(16)),U=function(t){return t.contacts.items},W=function(t){return t.contacts.filter},J=Object(q.a)(U,W,(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),P=n(9),R=n.n(P),V=n(1);var B=function(){var t=Object(r.useState)(""),e=Object(E.a)(t,2),n=e[0],a=e[1],c=Object(r.useState)(""),u=Object(E.a)(c,2),s=u[0],i=u[1],l=Object(o.c)(U),b=Object(o.b)(),f=function(t){var e=t.target,n=e.name,r=e.value;"name"===n?a(r):i(r)},j=function(){a(""),i("")};return Object(V.jsxs)("form",{className:R.a.form,onSubmit:function(t){t.preventDefault();!function(t){return l.find((function(e){return e.name===t}))}(n)?b(I({name:n,number:s})):S.a.warn("".concat(n," is already in your phonebook")),j()},children:[Object(V.jsxs)("label",{className:R.a.label,children:["Name",Object(V.jsx)("input",{className:R.a.input_name,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",value:n,onChange:f,title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),Object(V.jsxs)("label",{className:R.a.label,children:["Number",Object(V.jsx)("input",{className:R.a.input_number,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",value:s,onChange:f,title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),Object(V.jsx)("button",{className:R.a.button,type:"submit",children:Object(V.jsx)("span",{className:R.a.btnText,children:"Add contact"})})]})},M=n(13),H=n.n(M),Q=function(t){var e=t.id,n=t.contactName,r=t.contactNumber,a=t.onClickDeleteContact;return Object(V.jsxs)("li",{className:H.a.listItem,children:[Object(V.jsxs)("span",{className:H.a.listItemText,children:[n,":"]}),Object(V.jsx)("span",{className:H.a.listItemText,children:r}),Object(V.jsx)("button",{className:H.a.button,type:"button",onClick:function(){return a(e)},children:"Delete contact"})]})},$=function(){var t=Object(o.c)(J),e=Object(o.b)();return Object(r.useEffect)((function(){return e(k())}),[e]),Object(V.jsx)("ul",{children:t.map((function(t){var n=t.id,r=t.name,a=t.number;return Object(V.jsx)(Q,{id:n,contactName:r,contactNumber:a,onClickDeleteContact:function(){return e(F(n))}},n)}))})},G=n(30),K=n.n(G);var X=function(){var t=Object(o.c)(W),e=Object(o.b)();return Object(V.jsxs)("label",{children:["Find contacts by name",Object(V.jsx)("input",{className:K.a.filterInput,type:"text",value:t,onChange:function(t){e(f(t.target.value))}})]})},Y=n(31),tt=n.n(Y),et=function(t){var e=t.children;return Object(V.jsx)("div",{className:tt.a.container,children:e})};function nt(){return Object(V.jsxs)(et,{children:[Object(V.jsx)("h1",{children:"Phonebook"}),Object(V.jsx)(B,{}),Object(V.jsx)("h2",{children:"Contacts"}),Object(V.jsx)(X,{}),Object(V.jsx)($,{})]})}n(62);u.a.render(Object(V.jsx)(a.a.StrictMode,{children:Object(V.jsx)(o.a,{store:D,children:Object(V.jsx)(nt,{})})}),document.getElementById("root"))},9:function(t,e,n){t.exports={form:"FormContact_form__1bRE6",label:"FormContact_label__3e2ZE",input_name:"FormContact_input_name__2PHqf",input_number:"FormContact_input_number__1S3p-",button:"FormContact_button__1c5kU",btnText:"FormContact_btnText__1qsTZ"}}},[[63,1,2]]]);
//# sourceMappingURL=main.78c53ce5.chunk.js.map