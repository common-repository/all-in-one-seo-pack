import{u as f}from"./index.ba51ghj9.js";import{S as _}from"./Caret.dwp6xpza.js";import{v as y,o as t,k as w,a as l,C as d,l as m,c as r,b as n,T as u,m as i,E as h,G as C,I as v}from"./runtime-dom.esm-bundler.h3clfjuw.js";import{_ as g}from"./_plugin-vue_export-helper.oebm7xum.js";const k={emits:["close"],setup(){return{rootStore:f()}},components:{SvgClose:_},props:{classes:{type:Array,default(){return[]}},allowBgClose:{type:Boolean,default:!0},noHeader:Boolean,allowOverflow:Boolean,show:Boolean,modalName:String,teleportTo:{type:String,default(){return"#aioseo-modal-portal"}}},watch:{show(e){if(e){this.startListening(),this.scrollToElement(),this.rootStore.setActiveModal(this.modalName||this.$.uid);return}this.closeModal(),this.stopListening()}},computed:{cssClasses(){const e=Array.isArray(this.classes)?this.classes:[];return this.allowOverflow&&e.push("allow-overflow"),Array.isArray(this.classes)?this.classes:[]}},methods:{scrollToElement(){const e=this.$el.getElementsByClassName?this.$el.getElementsByClassName("component-wrapper")[0]:null;setTimeout(()=>{e&&(e.firstChild.scrollTop=0)},10)},escapeListener(e){e.key==="Escape"&&(this.modalName||this.$.uid)===this.rootStore.modals.active&&(e.stopPropagation(),this.closeModal())},maybeCloseModal(e){this.allowBgClose&&e.target.classList.contains("modal-wrapper")&&(this.modalName||this.$.uid)===this.rootStore.modals.active&&this.closeModal()},startListening(){document.addEventListener("keydown",this.escapeListener,!0)},stopListening(){document.removeEventListener("keydown",this.escapeListener)},closeModal(){this.$emit("close"),this.rootStore.unsetActiveModal(this.modalName||this.$.uid)}}},M=["show"],B={key:0,class:"modal-mask"},L={class:"modal-container"},S={key:0,class:"modal-header"},A={class:"modal-body"},N={key:1,class:"modal-container__footer"};function T(e,a,s,b,E,o){const p=y("svg-close");return t(),w(v,{to:s.teleportTo},[l("div",{show:s.show,class:C(["aioseo-app aioseo-modal",[...o.cssClasses]])},[d(u,{name:"modal-background"},{default:m(()=>[s.show?(t(),r("div",B)):n("",!0)]),_:1}),d(u,{name:"modal-content"},{default:m(()=>[s.show?(t(),r("div",{key:0,class:"modal-wrapper",onClick:a[1]||(a[1]=h((...c)=>o.maybeCloseModal&&o.maybeCloseModal(...c),["stop"]))},[l("div",L,[s.noHeader?n("",!0):(t(),r("div",S,[i(e.$slots,"header",{},()=>[i(e.$slots,"headerTitle"),l("button",{class:"close",type:"button",onClick:a[0]||(a[0]=h((...c)=>o.closeModal&&o.closeModal(...c),["stop"]))},[d(p,{onClick:o.closeModal},null,8,["onClick"])])])])),l("div",A,[i(e.$slots,"body")]),e.$slots.footer?(t(),r("div",N,[i(e.$slots,"footer")])):n("",!0)])])):n("",!0)]),_:3})],10,M)],8,["to"])}const O=g(k,[["render",T]]);export{O as C};
