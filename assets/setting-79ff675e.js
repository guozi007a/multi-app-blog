import{u as m,r as a,j as t}from"./index-585a7c12.js";const _="_setting_1kkto_1",o="_main_1kkto_5",d="_header_1kkto_12",r="_nav_1kkto_12",k="_setting_main_1kkto_20",h="_item_1kkto_20",x="_subtitle_1kkto_27",v="_btn_1kkto_43",j="_active_1kkto_56",N="_blacklist_1kkto_64",s={setting:_,main:o,header:d,nav:r,setting_main:k,item:h,subtitle:x,switch:"_switch_1kkto_31",btn:v,active:j,blacklist:N},u=()=>{const c=m(),[e,n]=a.useState(!1),[i,l]=a.useState(!1);return t.jsx("div",{className:s.setting,children:t.jsxs("main",{className:s.main,children:[t.jsx("header",{className:s.header,children:t.jsxs("p",{className:s.nav,children:[t.jsx("span",{onClick:()=>{c(-1)},children:"消息中心"})," > 消息设置"]})}),t.jsxs("main",{className:s.setting_main,children:[t.jsxs("div",{className:s.item,children:[t.jsx("div",{className:s.title,children:"是否屏蔽评论消息提醒"}),t.jsx("p",{className:s.subtitle,children:"屏蔽开启后，评论仍然可以被回复，但不会有消息提示"}),t.jsx("div",{className:`${s.switch} ${e?s.active:""}`,onClick:()=>{n(!e)},children:t.jsx("div",{className:s.btn})})]}),t.jsxs("div",{className:s.item,children:[t.jsx("div",{className:s.title,children:"是否屏蔽私信消息"}),t.jsx("p",{className:s.subtitle,children:"屏蔽开启后，其他用户仍将可以给您发送私信，但不会有消息提示"}),t.jsx("div",{className:`${s.switch} ${i?s.active:""}`,onClick:()=>{l(!i)},children:t.jsx("div",{className:s.btn})})]}),t.jsxs("div",{className:s.item,children:[t.jsx("div",{className:s.title,children:"消息黑名单"}),t.jsx("p",{className:s.subtitle,children:"被加入黑名单的用户将无法向您发送评论和私信消息"}),t.jsx("div",{className:s.blacklist})]})]})]})})};export{u as default};