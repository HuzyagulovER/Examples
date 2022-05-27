import{_ as d,o as s,c as o,F as _,h as g,a as h,B as w,r as l,b as u,e as x,w as f,d as M,j as y,n as B,f as v,t as V}from"./index.00bc0d2d.js";import{B as k}from"./BaseTextBlock.92787f30.js";const C={props:{map:Object},methods:{mouseoverMap(e){this.$emit("showOtherMap",e.currentTarget.alt)},mouseoutMap(e){this.$emit("hideOtherMap",e.currentTarget.alt)}}},T=["name"],I=["coords","alt"];function b(e,t,i,n,p,r){return s(),o("map",{name:i.map.name},[(s(!0),o(_,null,g(i.map.areas,m=>(s(),o("area",{shape:"poly",coords:m.coords,alt:m.name,key:m.name,onMouseover:t[0]||(t[0]=c=>r.mouseoverMap(c)),onMouseout:t[1]||(t[1]=c=>r.mouseoutMap(c))},null,40,I))),128))],8,T)}var O=d(C,[["render",b],["__scopeId","data-v-1f5f50e8"]]);const G={},N={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 304.21 368.07"},F=h("g",null,[h("g",null,[h("path",{d:"M132.52,368.07c-6.85-1.8-13.94-3-20.5-5.52-14.28-5.55-25.4-15.24-33.55-28.22Q41.71,275.8,5,217.2a31.72,31.72,0,0,1,4.27-39.63C19.83,167,35.75,165,48.9,173,62.48,181.14,76,189.5,89.48,197.78c1.9,1.16,3.82,2.3,6.48,3.9v-4.82q0-81.36,0-162.73c0-15.28,7.75-27.09,20.84-32,21.33-8,43.08,7.6,43.24,31.2.15,20.75,0,41.5,0,62.24v4.13c25.11-6.34,36-2.23,46.29,17.56,8.74-5.21,18.06-6.71,27.84-3.44s16.16,10.08,20.08,19.56c9-5.47,18.33-6.86,28.16-3.53,13,4.38,21.52,16.26,21.57,30.72.13,45.37.37,90.74-.07,136.11-.35,36.48-26.47,65.5-62.52,70.74a8.65,8.65,0,0,0-1.67.66ZM112.09,123.23h.11q0,45.93,0,91.86c0,3.54-1.24,6.41-4.41,8.09s-6.13,1-9.14-.9Q69.83,204.43,40.9,186.77c-6.95-4.24-15-3.3-20.29,2.12s-6.06,13.43-1.73,20.34q36.39,58.1,72.87,116.15c11,17.39,27.05,26.43,47.53,26.66q46.49.51,93,0c31.31-.34,55.47-24.68,55.63-56,.22-45,.06-90,.05-135,0-.75,0-1.5-.07-2.25A15.93,15.93,0,0,0,271.93,144a15.66,15.66,0,0,0-15.67,15.39c-.15,12.49-.13,25-.17,37.49,0,7.28-2.9,11.22-8.17,11.14s-7.95-3.92-8-11c0-17.74.09-35.49-.07-53.24a15.82,15.82,0,0,0-31.64.09c-.14,17.74-.11,35.49-.18,53.24a22.26,22.26,0,0,1-.42,4.83,7.83,7.83,0,0,1-15.25,0,23.81,23.81,0,0,1-.42-5.21c0-23,.06-46-.09-69a15.55,15.55,0,0,0-16.12-15.69,15.38,15.38,0,0,0-15.51,15.44c-.13,23.12-.12,46.24-.19,69.36a22.58,22.58,0,0,1-.47,5.2,7.82,7.82,0,0,1-15.14.09,24.11,24.11,0,0,1-.48-5.57q0-80.62,0-161.23c0-1.75,0-3.51-.13-5.25a15.73,15.73,0,0,0-13.95-13.95c-10.3-.94-17.75,6.1-17.77,17Q112,78.22,112.09,123.23Z"})])],-1),H=[F];function L(e,t){return s(),o("svg",N,H)}var q=d(G,[["render",L]]);const S={components:{BaseTextBlock:k,BaseImage:w,MapForMaps:O,IconCursorPointer:q},data(){return{name:"game-map",imgWidth:0,imgHeight:0,mapName:"map",cursorTime:2,cursorRepeatNumber:2,pointerPlayed:!1}},computed:{maps(){return this.$store.getters.getMaps},delta(){return Math.abs(this.imgHeight-this.imgWidth)/2},minParamValue(){return Math.min(this.imgHeight,this.imgWidth)},coords(){let e=[];return this.maps.forEach(t=>{let i=!0;e.push({name:t.name,coords:t.coords.map(n=>(i=!i,this.minParamValue==this.imgHeight?Math.round(i?n*this.minParamValue:n*this.minParamValue+this.delta):Math.round(i?n*this.minParamValue+this.delta:n*this.minParamValue)))})}),e},map(){return{name:this.mapName,areas:this.coords}},campsPositions(){let e={};return this.maps.forEach(t=>{this.minParamValue==this.imgHeight?e[t.name]={top:Math.round(t.campPosition[1]*this.minParamValue)+"px",left:Math.round(t.campPosition[0]*this.minParamValue+this.delta)+"px"}:e[t.name]={top:Math.round(t.campPosition[1]*this.minParamValue+this.delta)+"px",left:Math.round(t.campPosition[0]*this.minParamValue)+"px"}}),e}},methods:{getRealSize(e){return{width:e.width,height:e.height}},showOtherMap(e){this.$refs[e][0].$el.classList.add("active"),this.$refs[e+"Camp"][0].$el.classList.add("active"),this.$refs.map.$el.classList.add("hovered")},hideOtherMap(e){this.$refs[e][0].$el.classList.remove("active"),this.$refs[e+"Camp"][0].$el.classList.remove("active"),this.$refs.map.$el.classList.remove("hovered")}},mounted(){let e=setInterval(()=>{let t=this.getRealSize(this.$refs.map.$el.querySelector("img"));t.width&&t.height&&(this.imgWidth=t.width,this.imgHeight=t.height,clearInterval(e))},100);this.$refs.pointer.style=`animation: cursor ${this.cursorTime}s ease 1s ${this.cursorRepeatNumber} backwards`,setTimeout(()=>{this.pointerPlayed=!0},(this.cursorTime*this.cursorRepeatNumber+1)*1e3)}},z={class:"game-map",id:"game-map"},R={class:"game-map__map map"},W={class:"map__container"},j={class:"map__maps"},E={key:0,class:"pointer",ref:"pointer"},Q=v("Game map");function Z(e,t,i,n,p,r){const m=l("MapForMaps"),c=l("BaseImage"),$=l("IconCursorPointer"),P=l("BaseTextBlock");return s(),o("section",z,[h("div",R,[h("div",W,[h("div",j,[u(m,{map:r.map,onShowOtherMap:t[0]||(t[0]=a=>r.showOtherMap(a)),onHideOtherMap:t[1]||(t[1]=a=>r.hideOtherMap(a))},null,8,["map"]),u(c,{width:"0",height:"0",srcset:{src:"./images/ImageMapFromGameMap.png"},ref:"map",usemap:"#"+p.mapName,class:"map__main-map"},null,8,["srcset","usemap"]),(s(!0),o(_,null,g(r.maps,a=>(s(),M(c,{width:"0",height:"0",srcset:{src:a.src},key:a.id,ref_for:!0,ref:a.name,class:"map__addition-image"},null,8,["srcset"]))),128)),(s(!0),o(_,null,g(r.maps,a=>(s(),M(c,{width:"98",height:"109",srcset:{src:a.camp},key:a.id,ref_for:!0,ref:a.name+"Camp",class:y(["map__camp-image","map__camp-image_"+a.name]),style:B(r.campsPositions[a.name])},null,8,["srcset","class","style"]))),128)),p.pointerPlayed?x("",!0):(s(),o("div",E,[u($)],512))])])]),u(P,{class:"game-map__text-block"},{title:f(()=>[Q]),text:f(()=>[v(V(e.$store.getters.getPageText[p.name]),1)]),_:1})])}var A=d(S,[["render",Z]]);const D={name:"GameMap",components:{PageGameMap:A}},J=["src"];function K(e,t,i,n,p,r){const m=l("PageGameMap");return s(),o("div",null,[u(m),h("img",{src:e.$store.getters.getBackgrounds[e.$options.name],width:"1920",height:"1080",class:"backgroung-image"},null,8,J)])}var Y=d(D,[["render",K]]);export{Y as default};
