import{u as a,j as s}from"./index-435a6327.js";const m="_home_gzzvd_1",o="_bg_gzzvd_6",l="_main_gzzvd_15",c="_home_ul_gzzvd_19",_="_home_li_gzzvd_27",t="_win_img_gzzvd_30",d="_win_name_gzzvd_39",e={home:m,bg:o,main:l,home_ul:c,home_li:_,win_img:t,win_name:d},h="/multi-app-blog/assets/window-backstage-833a2ff6.jpg",g=[{id:"backstage",name:"管理后台",url:h,path:"/backstage/home"}],u=()=>{const n=a();return s.jsxs("div",{className:e.home,children:[s.jsx("div",{className:e.bg}),s.jsx("div",{className:e.main,children:s.jsx("ul",{className:e.home_ul,children:g.map(i=>s.jsxs("li",{className:e.home_li,children:[s.jsx("div",{className:e.win_img,onDoubleClick:()=>{n(i.path)},children:s.jsx("img",{src:i.url,alt:""})}),s.jsx("p",{className:e.win_name,children:i.name})]},i.id))})}),s.jsxs("div",{style:{position:"relative"},children:[s.jsx("h3",{onClick:()=>{n("/a")},children:"关于我"}),s.jsx("h3",{onClick:()=>{n("/b")},children:"列表页"})]})]})};export{u as default};