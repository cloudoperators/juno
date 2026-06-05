import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{U as n,tt as r}from"./iframe-BtAtvuk9.js";var i,a,o,s,c,l,u,d=t((()=>{i=e(r()),a=n(),o=(e,t)=>`
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
        `,s=`
    jn:border-l-4
    jn:border-theme-introbox
`,c=(e,t)=>`
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
    `,l=`
    jn:font-bold
`,u=({title:e=``,text:t=``,variant:n=`default`,heroImage:r=``,className:u=``,children:d,...f})=>{let p=(0,i.useMemo)(()=>r&&n===`hero`,[n,r]);return(0,a.jsxs)(`div`,{className:`juno-introbox ${o(n,r)} ${u}`,style:p?{backgroundImage:`${r}`}:{},...f,children:[(0,a.jsx)(`div`,{className:`${s}`}),(0,a.jsxs)(`div`,{className:`${c(n,r)}`,children:[e?(0,a.jsx)(`h1`,{className:`${l}`,children:e}):``,d||(0,a.jsx)(`p`,{children:t})]})]})};try{u.displayName=`IntroBox`,u.__docgenInfo={description:`The \`IntroBox\` component presents important information about the contents,
purpose, or state of a page or view, using distinct styles for emphasis.
Supports "hero" variant with optional background images.`,displayName:`IntroBox`,filePath:`/home/runner/work/juno/juno/packages/ui-components/src/components/IntroBox/IntroBox.component.tsx`,methods:[],props:{title:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/IntroBox/IntroBox.component.tsx`,name:`IntroBoxProps`}],description:`Pass an optional title.`,name:`title`,parent:{fileName:`ui-components/src/components/IntroBox/IntroBox.component.tsx`,name:`IntroBoxProps`},required:!1,tags:{default:`""`},type:{name:`string`}},text:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/IntroBox/IntroBox.component.tsx`,name:`IntroBoxProps`}],description:`Pass a string of text to be rendered as contents. Alternatively, contents can be passed as children (see below).`,name:`text`,parent:{fileName:`ui-components/src/components/IntroBox/IntroBox.component.tsx`,name:`IntroBoxProps`},required:!1,tags:{default:`""`},type:{name:`string`}},variant:{defaultValue:{value:`default`},declarations:[{fileName:`ui-components/src/components/IntroBox/IntroBox.component.tsx`,name:`IntroBoxProps`}],description:`Pass a variant style to affect the layout of the intro box.`,name:`variant`,parent:{fileName:`ui-components/src/components/IntroBox/IntroBox.component.tsx`,name:`IntroBoxProps`},required:!1,tags:{default:`"default"`},type:{name:`enum`,raw:`"default" | "hero"`,value:[{value:`"default"`},{value:`"hero"`}]}},heroImage:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/IntroBox/IntroBox.component.tsx`,name:`IntroBoxProps`}],description:`Optional "hero" flavor image for hero variant. Specify as css bg image string pointing to an image.`,name:`heroImage`,parent:{fileName:`ui-components/src/components/IntroBox/IntroBox.component.tsx`,name:`IntroBoxProps`},required:!1,tags:{},type:{name:`string`}},className:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/IntroBox/IntroBox.component.tsx`,name:`IntroBoxProps`}],description:`Pass a custom class or classes for styling the intro box.`,name:`className`,parent:{fileName:`ui-components/src/components/IntroBox/IntroBox.component.tsx`,name:`IntroBoxProps`},required:!1,tags:{default:`""`},type:{name:`string`}},children:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/IntroBox/IntroBox.component.tsx`,name:`IntroBoxProps`}],description:"Pass child nodes to be rendered as content, taking precedence over `text`.",name:`children`,parent:{fileName:`ui-components/src/components/IntroBox/IntroBox.component.tsx`,name:`IntroBoxProps`},required:!1,tags:{},type:{name:`ReactNode`}}},tags:{see:`https://cloudoperators.github.io/juno/?path=/docs/components-introbox--docs
{@link IntroBoxProps }`}}}catch{}}));export{d as n,u as t};