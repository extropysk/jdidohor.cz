(this.webpackJsonpkd=this.webpackJsonpkd||[]).push([[18],{503:function(e,t,n){"use strict";n(2);var a=n(170),s=n.n(a),r=n(505),i=n.n(r),c=n(7),l=n(0);t.a=Object(c.withStyles)((function(e){return{formControl:{margin:e.spacing.unit,width:160}}}))((function(e){return Object(l.jsxs)(s.a,{onClose:e.onClose,"aria-labelledby":"simple-dialog-title",open:e.isOpen,fullWidth:!0,children:[Object(l.jsx)(i.a,{id:"simple-dialog-title",children:e.title}),e.children]})}))},604:function(e,t,n){"use strict";n.r(t);var a=n(4),s=n(2),r=n.n(s),i=n(7),c=n(5),l=n.n(c),o=n(72),u=n.n(o),d=n(3),p=n.n(d),h=n(6),b=n(8),j=n(19),f=n(20),O=n(21),x=n(22),m=n(504),v=n(115),S=n(17),C=n(28),g=n(9),w=n(0),y={name:""},k=function(e){Object(O.a)(n,e);var t=Object(x.a)(n);function n(e){var a;return Object(j.a)(this,n),(a=t.call(this,e)).handleChange=function(e,t){a.setState(Object(b.a)({},e,t))},a.handleSubmit=Object(h.a)(p.a.mark((function e(){var t,n,s,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.props.doby,n=t.addSerie,s=t.refreshSeries,r=t.editSerie,e.prev=1,!a.state._id){e.next=7;break}return e.next=5,r(a.state);case 5:e.next=9;break;case 7:return e.next=9,n(a.state);case 9:s(),a.setState(y),a.props.onSubmit&&a.props.onSubmit(),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),a.props.user.showError(e.t0);case 17:case"end":return e.stop()}}),e,null,[[1,14]])}))),a.state=e.data||y,a}return Object(f.a)(n,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.disabled,a=this.state.name;return Object(w.jsx)(v.a,{onSubmit:this.handleSubmit,inline:!0,disabled:n,children:Object(w.jsx)("div",{className:t.nameTextInput,children:Object(w.jsx)(m.a,{value:a,field:"name",onChange:this.handleChange,required:!0,fullWidth:!0,disabled:n})})})}}]),n}(r.a.Component),E=Object(g.a)(Object(i.withStyles)((function(e){return{nameTextInput:{display:"flex",flex:1}}})),S.a,C.a)(k),D=n(506),N=n(503),I=n(12),J=[{field:"name",disablePadding:!0},{field:"_id"}],T=function(e){Object(O.a)(n,e);var t=Object(x.a)(n);function n(e){var a;return Object(j.a)(this,n),(a=t.call(this,e)).handleChangeClient=function(e,t){a.setState({clientId:t})},a.handleClose=function(){a.setState({isOpen:!1})},a.handleOpen=function(){a.setState({isOpen:!0})},a.handleChange=function(){var e=Object(h.a)(p.a.mark((function e(t,n,s,r){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.props.doby.getSeries(t,s,n,r);case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),a.props.user.showError(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,n,a,s){return e.apply(this,arguments)}}(),a.onEdit=function(){var e=Object(h.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.setState({x:t,isOpen:!0});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.isDisabled=function(e){return!1},a.state={x:null,isOpen:!1},a}return Object(f.a)(n,[{key:"render",value:function(){var e=this.props.doby.deleteSerie,t=this.props.translate;return Object(w.jsxs)("div",{children:[Object(w.jsx)(D.a,{rows:J,data:"series",onChange:this.handleChange,onDelete:e,title:t("series"),onEdit:this.onEdit,store:this.props.doby,filters:[],isDisabled:this.isDisabled,filename:"series"}),Object(w.jsx)(N.a,{title:t("serie"),onClose:this.handleClose,isOpen:this.state.isOpen,children:Object(w.jsx)(E,{data:this.state.x,onSubmit:this.handleClose})})]})}}]),n}(r.a.Component),W=Object(g.a)(S.a,C.a,I.b)(T),_=n(11);t.default=Object(g.a)(Object(i.withStyles)((function(e){return Object(a.a)(Object(a.a)({},Object(_.a)(e)),{},{paper:{padding:e.spacing.unit}})})),C.a)((function(e){var t=e.classes;return Object(w.jsxs)(l.a,{container:!0,children:[Object(w.jsx)(l.a,{item:!0,xs:12,className:t.p2,children:Object(w.jsx)(u.a,{className:t.paper,children:Object(w.jsx)(E,{})})}),Object(w.jsx)(l.a,{item:!0,xs:12,className:t.p2,children:Object(w.jsx)(W,{})})]})}))}}]);