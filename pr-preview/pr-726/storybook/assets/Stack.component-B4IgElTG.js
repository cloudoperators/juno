import{j as c}from"./jsx-runtime-D6fbYt3N.js";const o=e=>{switch(e){case"0":return"jn-gap-0";case"px":return"jn-gap-px";case"0.5":return"jn-gap-0.5";case"1":return"jn-gap-1";case"1.5":return"jn-gap-1.5";case"2":return"jn-gap-2";case"2.5":return"jn-gap-2.5";case"3":return"jn-gap-3";case"3.5":return"jn-gap-3.5";case"4":return"jn-gap-4";case"5":return"jn-gap-5";case"6":return"jn-gap-6";case"7":return"jn-gap-7";case"8":return"jn-gap-8";case"9":return"jn-gap-9";case"10":return"jn-gap-10";case"11":return"jn-gap-11";case"12":return"jn-gap-12";case"14":return"jn-gap-14";case"16":return"jn-gap-16";case"20":return"jn-gap-20";case"24":return"jn-gap-24";case"28":return"jn-gap-28";case"32":return"jn-gap-32";case"36":return"jn-gap-36";case"40":return"jn-gap-40";case"44":return"jn-gap-44";case"48":return"jn-gap-48";case"52":return"jn-gap-52";case"56":return"jn-gap-56";case"60":return"jn-gap-60";case"64":return"jn-gap-64";case"72":return"jn-gap-72";case"80":return"jn-gap-80";case"96":return"jn-gap-96";default:return"jn-gap-0"}},p=(e,a,t)=>`
      ${e==="vertical"?"jn-flex jn-flex-col":"jn-flex jn-flex-row"}
      ${t&&"jn-flex-wrap"}
      ${o(a)}
    `,v=e=>{switch(e){case"start":return"jn-items-start";case"end":return"jn-items-end";case"center":return"jn-items-center";case"baseline":return"jn-items-baseline";case"stretch":return"jn-items-stretch";default:return""}},j=e=>{switch(e){case"start":return"jn-justify-start";case"end":return"jn-justify-end";case"center":return"jn-justify-center";case"between":return"jn-justify-between";case"around":return"jn-justify-around";case"evenly":return"jn-justify-evenly";default:return""}},n=({direction:e="horizontal",gap:a="0",alignment:t="stretch",distribution:r="start",wrap:s=!1,className:u="",children:l,...i})=>c.jsx("div",{className:`juno-stack ${p(e,a,s)} ${v(t)} ${j(r)} ${u||""}`,...i,children:l});try{n.displayName="Stack",n.__docgenInfo={description:`A Stack is a layout primitive that ensures its children are stacked either horizontally next to each other or vertically, one below the other.
In addition a gap can be defined which the Stack injects between its children so they have some margin from one another.`,displayName:"Stack",props:{className:{defaultValue:{value:""},description:"Pass css class names",name:"className",required:!1,type:{name:"string"}},direction:{defaultValue:{value:"horizontal"},description:"Stack items horizontally or vertically",name:"direction",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},alignment:{defaultValue:{value:"stretch"},description:"Specify how items should be aligned on the cross axis (in a horizontal Stack this is the vertical alignment, in a vertical Stack it is the horizontal alignment)",name:"alignment",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"end"'},{value:'"center"'},{value:'"baseline"'},{value:'"stretch"'}]}},distribution:{defaultValue:{value:"start"},description:"Specify how items should be distributed on the main axis (in a horizontal Stack this is the horizontal distribution, in a vertical Stack it is the vertical distribution)",name:"distribution",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"end"'},{value:'"center"'},{value:'"between"'},{value:'"around"'},{value:'"evenly"'}]}},wrap:{defaultValue:{value:"false"},description:"Specify whether the Stack children should be allowed to wrap or not",name:"wrap",required:!1,type:{name:"boolean"}},gap:{defaultValue:{value:"0"},description:"Can be any valid tailwind  spacing. See here: https://tailwindcss.com/docs/customizing-spacing#default-spacing-scale",name:"gap",required:!1,type:{name:"enum",value:[{value:'"0"'},{value:'"px"'},{value:'"0.5"'},{value:'"1"'},{value:'"1.5"'},{value:'"2"'},{value:'"2.5"'},{value:'"3"'},{value:'"3.5"'},{value:'"4"'},{value:'"5"'},{value:'"6"'},{value:'"7"'},{value:'"8"'},{value:'"9"'},{value:'"10"'},{value:'"11"'},{value:'"12"'},{value:'"14"'},{value:'"16"'},{value:'"20"'},{value:'"24"'},{value:'"28"'},{value:'"32"'},{value:'"36"'},{value:'"40"'},{value:'"44"'},{value:'"48"'},{value:'"52"'},{value:'"56"'},{value:'"60"'},{value:'"64"'},{value:'"72"'},{value:'"80"'},{value:'"96"'}]}}}}}catch{}export{n as S};
