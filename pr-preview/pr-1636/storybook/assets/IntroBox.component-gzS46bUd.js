import{o as e}from"./rolldown-runtime-BM3Ffeng.js";import{t}from"./react-DC78jhTx.js";import{g as n}from"./iframe-qPHz0liX.js";var r=e(t()),i=n(),a=(e,t)=>`
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
        `,o=`
    jn:border-l-4
    jn:border-theme-introbox
`,s=(e,t)=>`
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
    `,c=`
    jn:font-bold
`,l=({title:e=``,text:t=``,variant:n=`default`,heroImage:l=``,className:u=``,children:d,...f})=>{let p=(0,r.useMemo)(()=>l&&n===`hero`,[n,l]);return(0,i.jsxs)(`div`,{className:`juno-introbox ${a(n,l)} ${u}`,style:p?{backgroundImage:`${l}`}:{},...f,children:[(0,i.jsx)(`div`,{className:`${o}`}),(0,i.jsxs)(`div`,{className:`${s(n,l)}`,children:[e?(0,i.jsx)(`h1`,{className:`${c}`,children:e}):``,d||(0,i.jsx)(`p`,{children:t})]})]})};try{l.displayName=`IntroBox`,l.__docgenInfo={description:`The \`IntroBox\` component presents important information about the contents,
purpose, or state of a page or view, using distinct styles for emphasis.
Supports "hero" variant with optional background images.`,displayName:`IntroBox`,props:{title:{defaultValue:{value:``},description:`Pass an optional title.`,name:`title`,required:!1,type:{name:`string`}},text:{defaultValue:{value:``},description:`Pass a string of text to be rendered as contents. Alternatively, contents can be passed as children (see below).`,name:`text`,required:!1,type:{name:`string`}},variant:{defaultValue:{value:`default`},description:`Pass a variant style to affect the layout of the intro box.`,name:`variant`,required:!1,type:{name:`enum`,value:[{value:`"default"`},{value:`"hero"`}]}},heroImage:{defaultValue:{value:``},description:`Optional "hero" flavor image for hero variant. Specify as css bg image string pointing to an image.`,name:`heroImage`,required:!1,type:{name:`string`}},className:{defaultValue:{value:``},description:`Pass a custom class or classes for styling the intro box.`,name:`className`,required:!1,type:{name:`string`}},children:{defaultValue:null,description:"Pass child nodes to be rendered as content, taking precedence over `text`.",name:`children`,required:!1,type:{name:`ReactNode`}}}}}catch{}export{l as t};