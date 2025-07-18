import{e as u,j as a}from"./iframe-wzHmHnLo.js";const c=(e,n)=>`
            jn:bg-theme-introbox
            jn:text-theme-default
            jn:flex
            jn:rounded-l
            jn:overflow-hidden
            jn:mb-8

            ${e==="hero"&&n?`
                    jn:bg-right-top
                    jn:bg-no-repeat
                `:""}
        `,p=`
    jn:border-l-4
    jn:border-theme-introbox
`,m=(e,n)=>`
        ${n?"jn:pl-4 jn:pr-56":"jn:px-4"}

        ${e==="hero"?`
            jn:text-xl
            jn:min-h-[8rem]
            jn:py-4
            jn:flex
            jn:flex-col
            jn:justify-center
        `:`
            jn:py-3
        `}
    `,f=`
    jn:font-bold
`,s=({title:e="",text:n="",variant:o="default",heroImage:t="",className:i="",children:r,...l})=>{const d=u.useMemo(()=>t&&o==="hero",[o,t]);return a.jsxs("div",{className:`juno-introbox ${c(o,t)} ${i}`,style:d?{backgroundImage:`${t}`}:{},...l,children:[a.jsx("div",{className:`${p}`}),a.jsxs("div",{className:`${m(o,t)}`,children:[e?a.jsx("h1",{className:`${f}`,children:e}):"",r||a.jsx("p",{children:n})]})]})};try{s.displayName="IntroBox",s.__docgenInfo={description:`An Introbox holds generally important information to help understand the contents, purpose, or state of a whole page or view, or individual sections on longer pages.
Use sparingly, there should never be any two or more subsequent instances of Introbox as direct siblings/neighbors on an individual view.`,displayName:"IntroBox",props:{title:{defaultValue:{value:""},description:"Pass an optional title",name:"title",required:!1,type:{name:"string"}},text:{defaultValue:{value:""},description:"Pass a string of text to be rendered as contents. Alternatively, contents can be passed as children (see below)",name:"text",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"default"},description:"Pass a custom class",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"hero"'}]}},heroImage:{defaultValue:{value:""},description:'optional "hero" flavor image for hero variant. Specify as css bg image string pointing to an image in your app (see template app for an example). Will always be positioned top and right',name:"heroImage",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:"Pass a custom class",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Pass child nodes to be rendered as content",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}export{s as I};
