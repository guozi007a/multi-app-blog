import{d as S,f as Io,L as zo,C as so,aj as No,e as To,aE as Ho,g as Po,m as W,$ as Ro,a2 as wo,k as Lo,ak as Wo,a6 as Do,o as Ao,W as _o}from"./index-3dae7501.js";import{r as s,R as c}from"./index-19427825.js";const Go=s.forwardRef((o,e)=>{const{className:r,style:t,children:n,prefixCls:i}=o,l=S(`${i}-icon`,r);return c.createElement("span",{ref:e,className:l,style:t},n)}),ao=Go,ro=s.forwardRef((o,e)=>{let{prefixCls:r,className:t,style:n,iconClassName:i}=o;const l=S(`${r}-loading-icon`,t);return c.createElement(ao,{prefixCls:r,className:l,style:n,ref:e},c.createElement(zo,{className:i}))}),P=()=>({width:0,opacity:0,transform:"scale(0)"}),R=o=>({width:o.scrollWidth,opacity:1,transform:"scale(1)"}),Fo=o=>{const{prefixCls:e,loading:r,existIcon:t,className:n,style:i}=o,l=!!r;return t?c.createElement(ro,{prefixCls:e,className:n,style:i}):c.createElement(Io,{visible:l,motionName:`${e}-loading-icon-motion`,removeOnLeave:!0,onAppearStart:P,onAppearActive:R,onEnterStart:P,onEnterActive:R,onLeaveStart:R,onLeaveActive:P},(d,u)=>{let{className:g,style:p}=d;return c.createElement(ro,{prefixCls:e,className:n,style:Object.assign(Object.assign({},i),p),ref:u,iconClassName:g})})},Mo=Fo;var Vo=globalThis&&globalThis.__rest||function(o,e){var r={};for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&e.indexOf(t)<0&&(r[t]=o[t]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(o);n<t.length;n++)e.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(o,t[n])&&(r[t[n]]=o[t[n]]);return r};const co=s.createContext(void 0),Xo=o=>{const{getPrefixCls:e,direction:r}=s.useContext(so),{prefixCls:t,size:n,className:i}=o,l=Vo(o,["prefixCls","size","className"]),d=e("btn-group",t),[,,u]=No();let g="";switch(n){case"large":g="lg";break;case"small":g="sm";break}const p=S(d,{[`${d}-${g}`]:g,[`${d}-rtl`]:r==="rtl"},i,u);return s.createElement(co.Provider,{value:n},s.createElement("div",Object.assign({},l,{className:p})))},Uo=Xo,no=/^[\u4e00-\u9fa5]{2}$/,L=no.test.bind(no);function lo(o){return typeof o=="string"}function w(o){return o==="text"||o==="link"}function qo(o,e){if(o==null)return;const r=e?" ":"";return typeof o!="string"&&typeof o!="number"&&lo(o.type)&&L(o.props.children)?To(o,{children:o.props.children.split("").join(r)}):lo(o)?L(o)?c.createElement("span",null,o.split("").join(r)):c.createElement("span",null,o):Ho(o)?c.createElement("span",null,o):o}function Jo(o,e){let r=!1;const t=[];return c.Children.forEach(o,n=>{const i=typeof n,l=i==="string"||i==="number";if(r&&l){const d=t.length-1,u=t[d];t[d]=`${u}${n}`}else t.push(n);r=l}),c.Children.map(t,n=>qo(n,e))}function Ko(o,e,r){const{focusElCls:t,focus:n,borderElCls:i}=r,l=i?"> *":"",d=["hover",n?"focus":null,"active"].filter(Boolean).map(u=>`&:${u} ${l}`).join(",");return{[`&-item:not(${e}-last-item)`]:{marginInlineEnd:-o.lineWidth},"&-item":Object.assign(Object.assign({[d]:{zIndex:2}},t?{[`&${t}`]:{zIndex:2}}:{}),{[`&[disabled] ${l}`]:{zIndex:0}})}}function Qo(o,e,r){const{borderElCls:t}=r,n=t?`> ${t}`:"";return{[`&-item:not(${e}-first-item):not(${e}-last-item) ${n}`]:{borderRadius:0},[`&-item:not(${e}-last-item)${e}-first-item`]:{[`& ${n}, &${o}-sm ${n}, &${o}-lg ${n}`]:{borderStartEndRadius:0,borderEndEndRadius:0}},[`&-item:not(${e}-first-item)${e}-last-item`]:{[`& ${n}, &${o}-sm ${n}, &${o}-lg ${n}`]:{borderStartStartRadius:0,borderEndStartRadius:0}}}}function Yo(o){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{focus:!0};const{componentCls:r}=o,t=`${r}-compact`;return{[t]:Object.assign(Object.assign({},Ko(o,t,e)),Qo(r,t,e))}}function Zo(o,e){return{[`&-item:not(${e}-last-item)`]:{marginBottom:-o.lineWidth},"&-item":{"&:hover,&:focus,&:active":{zIndex:2},"&[disabled]":{zIndex:0}}}}function ko(o,e){return{[`&-item:not(${e}-first-item):not(${e}-last-item)`]:{borderRadius:0},[`&-item${e}-first-item:not(${e}-last-item)`]:{[`&, &${o}-sm, &${o}-lg`]:{borderEndEndRadius:0,borderEndStartRadius:0}},[`&-item${e}-last-item:not(${e}-first-item)`]:{[`&, &${o}-sm, &${o}-lg`]:{borderStartStartRadius:0,borderStartEndRadius:0}}}}function oe(o){const e=`${o.componentCls}-compact-vertical`;return{[e]:Object.assign(Object.assign({},Zo(o,e)),ko(o.componentCls,e))}}const io=(o,e)=>({[`> span, > ${o}`]:{"&:not(:last-child)":{[`&, & > ${o}`]:{"&:not(:disabled)":{borderInlineEndColor:e}}},"&:not(:first-child)":{[`&, & > ${o}`]:{"&:not(:disabled)":{borderInlineStartColor:e}}}}}),ee=o=>{const{componentCls:e,fontSize:r,lineWidth:t,colorPrimaryHover:n,colorErrorHover:i}=o;return{[`${e}-group`]:[{position:"relative",display:"inline-flex",[`> span, > ${e}`]:{"&:not(:last-child)":{[`&, & > ${e}`]:{borderStartEndRadius:0,borderEndEndRadius:0}},"&:not(:first-child)":{marginInlineStart:-t,[`&, & > ${e}`]:{borderStartStartRadius:0,borderEndStartRadius:0}}},[e]:{position:"relative",zIndex:1,"&:hover,\n          &:focus,\n          &:active":{zIndex:2},"&[disabled]":{zIndex:0}},[`${e}-icon-only`]:{fontSize:r}},io(`${e}-primary`,n),io(`${e}-danger`,i)]}},te=ee,re=o=>{const{componentCls:e,iconCls:r,buttonFontWeight:t}=o;return{[e]:{outline:"none",position:"relative",display:"inline-block",fontWeight:t,whiteSpace:"nowrap",textAlign:"center",backgroundImage:"none",backgroundColor:"transparent",border:`${o.lineWidth}px ${o.lineType} transparent`,cursor:"pointer",transition:`all ${o.motionDurationMid} ${o.motionEaseInOut}`,userSelect:"none",touchAction:"manipulation",lineHeight:o.lineHeight,color:o.colorText,"&:disabled > *":{pointerEvents:"none"},"> span":{display:"inline-block"},[`${e}-icon`]:{lineHeight:0},[`> ${r} + span, > span + ${r}`]:{marginInlineStart:o.marginXS},[`&:not(${e}-icon-only) > ${e}-icon`]:{[`&${e}-loading-icon, &:not(:last-child)`]:{marginInlineEnd:o.marginXS}},"> a":{color:"currentColor"},"&:not(:disabled)":Object.assign({},Ro(o)),[`&-icon-only${e}-compact-item`]:{flex:"none"},[`&-compact-item${e}-primary`]:{[`&:not([disabled]) + ${e}-compact-item${e}-primary:not([disabled])`]:{position:"relative","&:before":{position:"absolute",top:-o.lineWidth,insetInlineStart:-o.lineWidth,display:"inline-block",width:o.lineWidth,height:`calc(100% + ${o.lineWidth*2}px)`,backgroundColor:o.colorPrimaryHover,content:'""'}}},"&-compact-vertical-item":{[`&${e}-primary`]:{[`&:not([disabled]) + ${e}-compact-vertical-item${e}-primary:not([disabled])`]:{position:"relative","&:before":{position:"absolute",top:-o.lineWidth,insetInlineStart:-o.lineWidth,display:"inline-block",width:`calc(100% + ${o.lineWidth*2}px)`,height:o.lineWidth,backgroundColor:o.colorPrimaryHover,content:'""'}}}}}}},y=(o,e,r)=>({[`&:not(:disabled):not(${o}-disabled)`]:{"&:hover":e,"&:active":r}}),ne=o=>({minWidth:o.controlHeight,paddingInlineStart:0,paddingInlineEnd:0,borderRadius:"50%"}),le=o=>({borderRadius:o.controlHeight,paddingInlineStart:o.controlHeight/2,paddingInlineEnd:o.controlHeight/2}),ie=o=>({cursor:"not-allowed",borderColor:o.colorBorder,color:o.colorTextDisabled,backgroundColor:o.colorBgContainerDisabled,boxShadow:"none"}),x=(o,e,r,t,n,i,l)=>({[`&${o}-background-ghost`]:Object.assign(Object.assign({color:e||void 0,backgroundColor:"transparent",borderColor:r||void 0,boxShadow:"none"},y(o,Object.assign({backgroundColor:"transparent"},i),Object.assign({backgroundColor:"transparent"},l))),{"&:disabled":{cursor:"not-allowed",color:t||void 0,borderColor:n||void 0}})}),D=o=>({[`&:disabled, &${o.componentCls}-disabled`]:Object.assign({},ie(o))}),uo=o=>Object.assign({},D(o)),j=o=>({[`&:disabled, &${o.componentCls}-disabled`]:{cursor:"not-allowed",color:o.colorTextDisabled}}),go=o=>Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},uo(o)),{backgroundColor:o.colorBgContainer,borderColor:o.colorBorder,boxShadow:`0 ${o.controlOutlineWidth}px 0 ${o.controlTmpOutline}`}),y(o.componentCls,{color:o.colorPrimaryHover,borderColor:o.colorPrimaryHover},{color:o.colorPrimaryActive,borderColor:o.colorPrimaryActive})),x(o.componentCls,o.colorBgContainer,o.colorBgContainer,o.colorTextDisabled,o.colorBorder)),{[`&${o.componentCls}-dangerous`]:Object.assign(Object.assign(Object.assign({color:o.colorError,borderColor:o.colorError},y(o.componentCls,{color:o.colorErrorHover,borderColor:o.colorErrorBorderHover},{color:o.colorErrorActive,borderColor:o.colorErrorActive})),x(o.componentCls,o.colorError,o.colorError,o.colorTextDisabled,o.colorBorder)),D(o))}),se=o=>Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},uo(o)),{color:o.colorTextLightSolid,backgroundColor:o.colorPrimary,boxShadow:`0 ${o.controlOutlineWidth}px 0 ${o.controlOutline}`}),y(o.componentCls,{color:o.colorTextLightSolid,backgroundColor:o.colorPrimaryHover},{color:o.colorTextLightSolid,backgroundColor:o.colorPrimaryActive})),x(o.componentCls,o.colorPrimary,o.colorPrimary,o.colorTextDisabled,o.colorBorder,{color:o.colorPrimaryHover,borderColor:o.colorPrimaryHover},{color:o.colorPrimaryActive,borderColor:o.colorPrimaryActive})),{[`&${o.componentCls}-dangerous`]:Object.assign(Object.assign(Object.assign({backgroundColor:o.colorError,boxShadow:`0 ${o.controlOutlineWidth}px 0 ${o.colorErrorOutline}`},y(o.componentCls,{backgroundColor:o.colorErrorHover},{backgroundColor:o.colorErrorActive})),x(o.componentCls,o.colorError,o.colorError,o.colorTextDisabled,o.colorBorder,{color:o.colorErrorHover,borderColor:o.colorErrorHover},{color:o.colorErrorActive,borderColor:o.colorErrorActive})),D(o))}),ae=o=>Object.assign(Object.assign({},go(o)),{borderStyle:"dashed"}),ce=o=>Object.assign(Object.assign(Object.assign({color:o.colorLink},y(o.componentCls,{color:o.colorLinkHover},{color:o.colorLinkActive})),j(o)),{[`&${o.componentCls}-dangerous`]:Object.assign(Object.assign({color:o.colorError},y(o.componentCls,{color:o.colorErrorHover},{color:o.colorErrorActive})),j(o))}),de=o=>Object.assign(Object.assign(Object.assign({},y(o.componentCls,{color:o.colorText,backgroundColor:o.colorBgTextHover},{color:o.colorText,backgroundColor:o.colorBgTextActive})),j(o)),{[`&${o.componentCls}-dangerous`]:Object.assign(Object.assign({color:o.colorError},j(o)),y(o.componentCls,{color:o.colorErrorHover,backgroundColor:o.colorErrorBg},{color:o.colorErrorHover,backgroundColor:o.colorErrorBg}))}),ue=o=>{const{componentCls:e}=o;return{[`${e}-default`]:go(o),[`${e}-primary`]:se(o),[`${e}-dashed`]:ae(o),[`${e}-link`]:ce(o),[`${e}-text`]:de(o),[`${e}-ghost`]:x(o.componentCls,o.colorBgContainer,o.colorBgContainer,o.colorTextDisabled,o.colorBorder)}},A=function(o){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const{componentCls:r,controlHeight:t,fontSize:n,lineHeight:i,lineWidth:l,borderRadius:d,buttonPaddingHorizontal:u,iconCls:g}=o,p=Math.max(0,(t-n*i)/2-l),v=u-l,B=`${r}-icon-only`;return[{[`${r}${e}`]:{fontSize:n,height:t,padding:`${p}px ${v}px`,borderRadius:d,[`&${B}`]:{width:t,paddingInlineStart:0,paddingInlineEnd:0,[`&${r}-round`]:{width:"auto"},[g]:{fontSize:o.buttonIconOnlyFontSize}},[`&${r}-loading`]:{opacity:o.opacityLoading,cursor:"default"},[`${r}-loading-icon`]:{transition:`width ${o.motionDurationSlow} ${o.motionEaseInOut}, opacity ${o.motionDurationSlow} ${o.motionEaseInOut}`}}},{[`${r}${r}-circle${e}`]:ne(o)},{[`${r}${r}-round${e}`]:le(o)}]},ge=o=>A(o),me=o=>{const e=W(o,{controlHeight:o.controlHeightSM,padding:o.paddingXS,buttonPaddingHorizontal:8,borderRadius:o.borderRadiusSM,buttonIconOnlyFontSize:o.fontSizeLG-2});return A(e,`${o.componentCls}-sm`)},be=o=>{const e=W(o,{controlHeight:o.controlHeightLG,fontSize:o.fontSizeLG,borderRadius:o.borderRadiusLG,buttonIconOnlyFontSize:o.fontSizeLG+2});return A(e,`${o.componentCls}-lg`)},pe=o=>{const{componentCls:e}=o;return{[e]:{[`&${e}-block`]:{width:"100%"}}}},fe=Po("Button",o=>{const{controlTmpOutline:e,paddingContentHorizontal:r}=o,t=W(o,{colorOutlineDefault:e,buttonPaddingHorizontal:r,buttonIconOnlyFontSize:o.fontSizeLG,buttonFontWeight:400});return[re(t),me(t),ge(t),be(t),pe(t),ue(t),te(t),Yo(o),oe(o)]});var ye=globalThis&&globalThis.__rest||function(o,e){var r={};for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&e.indexOf(t)<0&&(r[t]=o[t]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(o);n<t.length;n++)e.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(o,t[n])&&(r[t[n]]=o[t[n]]);return r};function Oe(o){return o==="danger"?{danger:!0}:{type:o}}function $e(o){if(typeof o=="object"&&o){const e=o==null?void 0:o.delay;return{loading:!1,delay:!Number.isNaN(e)&&typeof e=="number"?e:0}}return{loading:!!o,delay:0}}const Ce=(o,e)=>{var r,t;const{loading:n=!1,prefixCls:i,type:l="default",danger:d,shape:u="default",size:g,styles:p,disabled:v,className:B,rootClassName:mo,children:C,icon:O,ghost:bo=!1,block:po=!1,htmlType:fo="button",classNames:I,style:yo={}}=o,G=ye(o,["loading","prefixCls","type","danger","shape","size","styles","disabled","className","rootClassName","children","icon","ghost","block","htmlType","classNames","style"]),{getPrefixCls:$o,autoInsertSpaceInButton:F,direction:M,button:m}=s.useContext(so),a=$o("btn",i),[V,Co]=fe(a),ho=s.useContext(wo),z=v??ho,So=s.useContext(co),E=s.useMemo(()=>$e(n),[n]),[$,X]=s.useState(E.loading),[N,U]=s.useState(!1),h=Lo(e,s.createRef()),q=s.Children.count(C)===1&&!O&&!w(l);s.useEffect(()=>{let b=null;E.delay>0?b=setTimeout(()=>{b=null,X(!0)},E.delay):X(E.loading);function f(){b&&(clearTimeout(b),b=null)}return f},[E]),s.useEffect(()=>{if(!h||!h.current||F===!1)return;const b=h.current.textContent;q&&L(b)?N||U(!0):N&&U(!1)},[h]);const J=b=>{const{onClick:f}=o;if($||z){b.preventDefault();return}f==null||f(b)},K=F!==!1,{compactSize:vo,compactItemClassnames:Oo}=Wo(a,M),Eo={large:"lg",small:"sm",middle:void 0},Q=Do(b=>{var f,H;return(H=(f=g??vo)!==null&&f!==void 0?f:So)!==null&&H!==void 0?H:b}),Y=Q&&Eo[Q]||"",xo=$?"loading":O,Z=Ao(G,["navigate"]),k=S(a,Co,{[`${a}-${u}`]:u!=="default"&&u,[`${a}-${l}`]:l,[`${a}-${Y}`]:Y,[`${a}-icon-only`]:!C&&C!==0&&!!xo,[`${a}-background-ghost`]:bo&&!w(l),[`${a}-loading`]:$,[`${a}-two-chinese-chars`]:N&&K&&!$,[`${a}-block`]:po,[`${a}-dangerous`]:!!d,[`${a}-rtl`]:M==="rtl"},Oo,B,mo,m==null?void 0:m.className),oo=Object.assign(Object.assign({},m==null?void 0:m.style),yo),jo=S(I==null?void 0:I.icon,(r=m==null?void 0:m.classNames)===null||r===void 0?void 0:r.icon),Bo=Object.assign(Object.assign({},(p==null?void 0:p.icon)||{}),((t=m==null?void 0:m.styles)===null||t===void 0?void 0:t.icon)||{}),eo=O&&!$?c.createElement(ao,{prefixCls:a,className:jo,style:Bo},O):c.createElement(Mo,{existIcon:!!O,prefixCls:a,loading:!!$}),to=C||C===0?Jo(C,q&&K):null;if(Z.href!==void 0)return V(c.createElement("a",Object.assign({},Z,{className:S(k,{[`${a}-disabled`]:z}),style:oo,onClick:J,ref:h}),eo,to));let T=c.createElement("button",Object.assign({},G,{type:fo,className:k,style:oo,onClick:J,disabled:z,ref:h}),eo,to);return w(l)||(T=c.createElement(_o,{component:"Button",disabled:!!$},T)),V(T)},_=s.forwardRef(Ce);_.Group=Uo;_.__ANT_BUTTON=!0;const Ee=_;export{Ee as B,Oe as c,Yo as g};