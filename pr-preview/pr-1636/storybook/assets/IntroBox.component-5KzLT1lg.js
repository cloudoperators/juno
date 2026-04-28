import{g as e}from"./iframe-DaLLswkI.js";import{useMemo as t}from"react";var n=e(),r=(e,t)=>`
            jn:bg-theme-introbox
            jn:text-theme-default
            jn:flex
            jn:rounded-l
            jn:overflow-hidden
            jn:mb-8

            ${e===`hero`&&t?`
                    jn:bg-right-top
                    jn:bg-no-repeat
                `:``}
        `,i=`
    jn:border-l-4
    jn:border-theme-introbox
`,a=(e,t)=>`
        ${t?`jn:pl-4 jn:pr-56`:`jn:px-4`}

        ${e===`hero`?`
            jn:text-xl
            jn:min-h-[8rem]
            jn:py-4
            jn:flex
            jn:flex-col
            jn:justify-center
        `:`
            jn:py-3
        `}
    `,o=`
    jn:font-bold
`,s=({title:e=``,text:s=``,variant:c=`default`,heroImage:l=``,className:u=``,children:d,...f})=>{let p=t(()=>l&&c===`hero`,[c,l]);return(0,n.jsxs)(`div`,{className:`juno-introbox ${r(c,l)} ${u}`,style:p?{backgroundImage:`${l}`}:{},...f,children:[(0,n.jsx)(`div`,{className:`${i}`}),(0,n.jsxs)(`div`,{className:`${a(c,l)}`,children:[e?(0,n.jsx)(`h1`,{className:`${o}`,children:e}):``,d||(0,n.jsx)(`p`,{children:s})]})]})};try{s.displayName=`IntroBox`,s.__docgenInfo={description:`The \`IntroBox\` component presents important information about the contents,
purpose, or state of a page or view, using distinct styles for emphasis.
Supports "hero" variant with optional background images.`,displayName:`IntroBox`,props:{title:{defaultValue:{value:``},description:`Pass an optional title.`,name:`title`,required:!1,type:{name:`string`}},text:{defaultValue:{value:``},description:`Pass a string of text to be rendered as contents. Alternatively, contents can be passed as children (see below).`,name:`text`,required:!1,type:{name:`string`}},variant:{defaultValue:{value:`default`},description:`Pass a variant style to affect the layout of the intro box.`,name:`variant`,required:!1,type:{name:`enum`,value:[{value:`"default"`},{value:`"hero"`}]}},heroImage:{defaultValue:{value:``},description:`Optional "hero" flavor image for hero variant. Specify as css bg image string pointing to an image.`,name:`heroImage`,required:!1,type:{name:`string`}},className:{defaultValue:{value:``},description:`Pass a custom class or classes for styling the intro box.`,name:`className`,required:!1,type:{name:`string`}},children:{defaultValue:null,description:"Pass child nodes to be rendered as content, taking precedence over `text`.",name:`children`,required:!1,type:{name:`ReactNode`}}}}}catch{}export{s as t};