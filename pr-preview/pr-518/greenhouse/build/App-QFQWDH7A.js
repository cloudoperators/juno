import{b as lr}from"./chunk-MIDWCAYC.js";import{a as hi,b as gi,c as bi}from"./chunk-KGC4OGUR.js";import{B as si,C as ui,D as ci,E as un,F as cn,G as or,H as zt,I as Lt,J as di,M as mi,N as ir,O as pi,P as ar,Q as fi,R as Re,V as dn,W as ki,e as ni,f as ri,h as Ne,j as ke,k as xe,l as ln,m as oi,o as rr,p as ii,q as pe,r as He,s as K,t as J,u as Z,v as sn,w as ai,x as Ie,y as Ft,z as li}from"./chunk-IYLWJBKB.js";import{b as nr,c as ei,d as ti}from"./chunk-5G2YJ22E.js";var ea=nr((Ng,Zi)=>{var Ji=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,Au=/\n/g,Tu=/^\s*/,Fu=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,zu=/^:\s*/,Lu=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,Mu=/^[;\s]*/,Ou=/^\s+|\s+$/g,Nu=`
`,Qi="/",Yi="*",ot="",Ru="comment",_u="declaration";Zi.exports=function(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function o(y){var b=y.match(Au);b&&(n+=b.length);var k=y.lastIndexOf(Nu);r=~k?y.length-k:r+y.length}function a(){var y={line:n,column:r};return function(b){return b.position=new i(y),c(),b}}function i(y){this.start=y,this.end={line:n,column:r},this.source=t.source}i.prototype.content=e;var l=[];function s(y){var b=new Error(t.source+":"+n+":"+r+": "+y);if(b.reason=y,b.filename=t.source,b.line=n,b.column=r,b.source=e,t.silent)l.push(b);else throw b}function u(y){var b=y.exec(e);if(b){var k=b[0];return o(k),e=e.slice(k.length),b}}function c(){u(Tu)}function d(y){var b;for(y=y||[];b=m();)b!==!1&&y.push(b);return y}function m(){var y=a();if(!(Qi!=e.charAt(0)||Yi!=e.charAt(1))){for(var b=2;ot!=e.charAt(b)&&(Yi!=e.charAt(b)||Qi!=e.charAt(b+1));)++b;if(b+=2,ot===e.charAt(b-1))return s("End of comment missing");var k=e.slice(2,b-2);return r+=2,o(k),e=e.slice(b),r+=2,y({type:Ru,comment:k})}}function p(){var y=a(),b=u(Fu);if(b){if(m(),!u(zu))return s("property missing ':'");var k=u(Lu),P=y({type:_u,property:Xi(b[0].replace(Ji,ot)),value:k?Xi(k[0].replace(Ji,ot)):ot});return u(Mu),P}}function f(){var y=[];d(y);for(var b;b=p();)b!==!1&&(y.push(b),d(y));return y}return c(),f()};function Xi(e){return e?e.replace(Ou,ot):ot}});var ta=nr(Rt=>{"use strict";var Bu=Rt&&Rt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Rt,"__esModule",{value:!0});Rt.default=Hu;var ju=Bu(ea());function Hu(e,t){var n=null;if(!e||typeof e!="string")return n;var r=(0,ju.default)(e),o=typeof t=="function";return r.forEach(function(a){if(a.type==="declaration"){var i=a.property,l=a.value;o?t(i,l,a):l&&(n=n||{},n[i]=l)}}),n}});var xl=nr((g1,wl)=>{"use strict";var $n=Object.prototype.hasOwnProperty,yl=Object.prototype.toString,pl=Object.defineProperty,fl=Object.getOwnPropertyDescriptor,hl=function(t){return typeof Array.isArray=="function"?Array.isArray(t):yl.call(t)==="[object Array]"},gl=function(t){if(!t||yl.call(t)!=="[object Object]")return!1;var n=$n.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&$n.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var o;for(o in t);return typeof o>"u"||$n.call(t,o)},bl=function(t,n){pl&&n.name==="__proto__"?pl(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},kl=function(t,n){if(n==="__proto__")if($n.call(t,n)){if(fl)return fl(t,n).value}else return;return t[n]};wl.exports=function e(){var t,n,r,o,a,i,l=arguments[0],s=1,u=arguments.length,c=!1;for(typeof l=="boolean"&&(c=l,l=arguments[1]||{},s=2),(l==null||typeof l!="object"&&typeof l!="function")&&(l={});s<u;++s)if(t=arguments[s],t!=null)for(n in t)r=kl(l,n),o=kl(t,n),l!==o&&(c&&o&&(gl(o)||(a=hl(o)))?(a?(a=!1,i=r&&hl(r)?r:[]):i=r&&gl(r)?r:{},bl(l,{name:n,newValue:e(c,i,o)})):typeof o<"u"&&bl(l,{name:n,newValue:o}));return l}});import De from"react";var yi=`/* dark */
.markdown-body {
  color-scheme: dark;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  margin: 0;
  color: #f0f6fc;
  background-color: #0d1117;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
  font-size: 16px;
  line-height: 1.5;
  word-wrap: break-word;
  scroll-behavior: auto !important;
}

.markdown-body .octicon {
  display: inline-block;
  fill: currentColor;
  vertical-align: text-bottom;
}

.markdown-body h1:hover .anchor .octicon-link:before,
.markdown-body h2:hover .anchor .octicon-link:before,
.markdown-body h3:hover .anchor .octicon-link:before,
.markdown-body h4:hover .anchor .octicon-link:before,
.markdown-body h5:hover .anchor .octicon-link:before,
.markdown-body h6:hover .anchor .octicon-link:before {
  width: 16px;
  height: 16px;
  content: ' ';
  display: inline-block;
  background-color: currentColor;
  -webkit-mask-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>");
  mask-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>");
}

.markdown-body details,
.markdown-body figcaption,
.markdown-body figure {
  display: block;
}

.markdown-body summary {
  display: list-item;
}

.markdown-body [hidden] {
  display: none !important;
}

.markdown-body a {
  background-color: transparent;
  color: #4493f8;
  text-decoration: none;
}

.markdown-body abbr[title] {
  border-bottom: none;
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
}

.markdown-body b,
.markdown-body strong {
  font-weight: 600;
}

.markdown-body dfn {
  font-style: italic;
}

.markdown-body h1 {
  margin: .67em 0;
  font-weight: 600;
  padding-bottom: .3em;
  font-size: 2em;
  border-bottom: 1px solid #3d444db3;
}

.markdown-body mark {
  background-color: #bb800926;
  color: #f0f6fc;
}

.markdown-body small {
  font-size: 90%;
}

.markdown-body sub,
.markdown-body sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

.markdown-body sub {
  bottom: -0.25em;
}

.markdown-body sup {
  top: -0.5em;
}

.markdown-body img {
  border-style: none;
  max-width: 100%;
  box-sizing: content-box;
}

.markdown-body code,
.markdown-body kbd,
.markdown-body pre,
.markdown-body samp {
  font-family: monospace;
  font-size: 1em;
}

.markdown-body figure {
  margin: 1em 2.5rem;
}

.markdown-body hr {
  box-sizing: content-box;
  overflow: hidden;
  background: transparent;
  border-bottom: 1px solid #3d444db3;
  height: .25em;
  padding: 0;
  margin: 1.5rem 0;
  background-color: #3d444d;
  border: 0;
}

.markdown-body input {
  font: inherit;
  margin: 0;
  overflow: visible;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

.markdown-body [type=button],
.markdown-body [type=reset],
.markdown-body [type=submit] {
  -webkit-appearance: button;
  -moz-appearance: button;
       appearance: button;
}

.markdown-body [type=checkbox],
.markdown-body [type=radio] {
  box-sizing: border-box;
  padding: 0;
}

.markdown-body [type=number]::-webkit-inner-spin-button,
.markdown-body [type=number]::-webkit-outer-spin-button {
  height: auto;
}

.markdown-body [type=search]::-webkit-search-cancel-button,
.markdown-body [type=search]::-webkit-search-decoration {
  -webkit-appearance: none;
  appearance: none;
}

.markdown-body ::-webkit-input-placeholder {
  color: inherit;
  opacity: .54;
}

.markdown-body ::-webkit-file-upload-button {
  -webkit-appearance: button;
  appearance: button;
  font: inherit;
}

.markdown-body a:hover {
  text-decoration: underline;
}

.markdown-body ::-moz-placeholder {
  color: #9198a1;
  opacity: 1;
}

.markdown-body ::placeholder {
  color: #9198a1;
  opacity: 1;
}

.markdown-body hr::before {
  display: table;
  content: "";
}

.markdown-body hr::after {
  display: table;
  clear: both;
  content: "";
}

.markdown-body table {
  border-spacing: 0;
  border-collapse: collapse;
  display: block;
  width: -moz-max-content;
  width: max-content;
  max-width: 100%;
  overflow: auto;
}

.markdown-body td,
.markdown-body th {
  padding: 0;
}

.markdown-body details summary {
  cursor: pointer;
}

.markdown-body a:focus,
.markdown-body [role=button]:focus,
.markdown-body input[type=radio]:focus,
.markdown-body input[type=checkbox]:focus {
  outline: 2px solid #1f6feb;
  outline-offset: -2px;
  box-shadow: none;
}

.markdown-body a:focus:not(:focus-visible),
.markdown-body [role=button]:focus:not(:focus-visible),
.markdown-body input[type=radio]:focus:not(:focus-visible),
.markdown-body input[type=checkbox]:focus:not(:focus-visible) {
  outline: solid 1px transparent;
}

.markdown-body a:focus-visible,
.markdown-body [role=button]:focus-visible,
.markdown-body input[type=radio]:focus-visible,
.markdown-body input[type=checkbox]:focus-visible {
  outline: 2px solid #1f6feb;
  outline-offset: -2px;
  box-shadow: none;
}

.markdown-body a:not([class]):focus,
.markdown-body a:not([class]):focus-visible,
.markdown-body input[type=radio]:focus,
.markdown-body input[type=radio]:focus-visible,
.markdown-body input[type=checkbox]:focus,
.markdown-body input[type=checkbox]:focus-visible {
  outline-offset: 0;
}

.markdown-body kbd {
  display: inline-block;
  padding: 0.25rem;
  font: 11px ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
  line-height: 10px;
  color: #f0f6fc;
  vertical-align: middle;
  background-color: #151b23;
  border: solid 1px #3d444db3;
  border-bottom-color: #3d444db3;
  border-radius: 6px;
  box-shadow: inset 0 -1px 0 #3d444db3;
}

.markdown-body h1,
.markdown-body h2,
.markdown-body h3,
.markdown-body h4,
.markdown-body h5,
.markdown-body h6 {
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
  line-height: 1.25;
}

.markdown-body h2 {
  font-weight: 600;
  padding-bottom: .3em;
  font-size: 1.5em;
  border-bottom: 1px solid #3d444db3;
}

.markdown-body h3 {
  font-weight: 600;
  font-size: 1.25em;
}

.markdown-body h4 {
  font-weight: 600;
  font-size: 1em;
}

.markdown-body h5 {
  font-weight: 600;
  font-size: .875em;
}

.markdown-body h6 {
  font-weight: 600;
  font-size: .85em;
  color: #9198a1;
}

.markdown-body p {
  margin-top: 0;
  margin-bottom: 10px;
}

.markdown-body blockquote {
  margin: 0;
  padding: 0 1em;
  color: #9198a1;
  border-left: .25em solid #3d444d;
}

.markdown-body ul,
.markdown-body ol {
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 2em;
}

.markdown-body ol ol,
.markdown-body ul ol {
  list-style-type: lower-roman;
}

.markdown-body ul ul ol,
.markdown-body ul ol ol,
.markdown-body ol ul ol,
.markdown-body ol ol ol {
  list-style-type: lower-alpha;
}

.markdown-body dd {
  margin-left: 0;
}

.markdown-body tt,
.markdown-body code,
.markdown-body samp {
  font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
  font-size: 12px;
}

.markdown-body pre {
  margin-top: 0;
  margin-bottom: 0;
  font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
  font-size: 12px;
  word-wrap: normal;
}

.markdown-body .octicon {
  display: inline-block;
  overflow: visible !important;
  vertical-align: text-bottom;
  fill: currentColor;
}

.markdown-body input::-webkit-outer-spin-button,
.markdown-body input::-webkit-inner-spin-button {
  margin: 0;
  -webkit-appearance: none;
  appearance: none;
}

.markdown-body .mr-2 {
  margin-right: 0.5rem !important;
}

.markdown-body::before {
  display: table;
  content: "";
}

.markdown-body::after {
  display: table;
  clear: both;
  content: "";
}

.markdown-body>*:first-child {
  margin-top: 0 !important;
}

.markdown-body>*:last-child {
  margin-bottom: 0 !important;
}

.markdown-body a:not([href]) {
  color: inherit;
  text-decoration: none;
}

.markdown-body .absent {
  color: #f85149;
}

.markdown-body .anchor {
  float: left;
  padding-right: 0.25rem;
  margin-left: -20px;
  line-height: 1;
}

.markdown-body .anchor:focus {
  outline: none;
}

.markdown-body p,
.markdown-body blockquote,
.markdown-body ul,
.markdown-body ol,
.markdown-body dl,
.markdown-body table,
.markdown-body pre,
.markdown-body details {
  margin-top: 0;
  margin-bottom: 1rem;
}

.markdown-body blockquote>:first-child {
  margin-top: 0;
}

.markdown-body blockquote>:last-child {
  margin-bottom: 0;
}

.markdown-body h1 .octicon-link,
.markdown-body h2 .octicon-link,
.markdown-body h3 .octicon-link,
.markdown-body h4 .octicon-link,
.markdown-body h5 .octicon-link,
.markdown-body h6 .octicon-link {
  color: #f0f6fc;
  vertical-align: middle;
  visibility: hidden;
}

.markdown-body h1:hover .anchor,
.markdown-body h2:hover .anchor,
.markdown-body h3:hover .anchor,
.markdown-body h4:hover .anchor,
.markdown-body h5:hover .anchor,
.markdown-body h6:hover .anchor {
  text-decoration: none;
}

.markdown-body h1:hover .anchor .octicon-link,
.markdown-body h2:hover .anchor .octicon-link,
.markdown-body h3:hover .anchor .octicon-link,
.markdown-body h4:hover .anchor .octicon-link,
.markdown-body h5:hover .anchor .octicon-link,
.markdown-body h6:hover .anchor .octicon-link {
  visibility: visible;
}

.markdown-body h1 tt,
.markdown-body h1 code,
.markdown-body h2 tt,
.markdown-body h2 code,
.markdown-body h3 tt,
.markdown-body h3 code,
.markdown-body h4 tt,
.markdown-body h4 code,
.markdown-body h5 tt,
.markdown-body h5 code,
.markdown-body h6 tt,
.markdown-body h6 code {
  padding: 0 .2em;
  font-size: inherit;
}

.markdown-body summary h1,
.markdown-body summary h2,
.markdown-body summary h3,
.markdown-body summary h4,
.markdown-body summary h5,
.markdown-body summary h6 {
  display: inline-block;
}

.markdown-body summary h1 .anchor,
.markdown-body summary h2 .anchor,
.markdown-body summary h3 .anchor,
.markdown-body summary h4 .anchor,
.markdown-body summary h5 .anchor,
.markdown-body summary h6 .anchor {
  margin-left: -40px;
}

.markdown-body summary h1,
.markdown-body summary h2 {
  padding-bottom: 0;
  border-bottom: 0;
}

.markdown-body ul.no-list,
.markdown-body ol.no-list {
  padding: 0;
  list-style-type: none;
}

.markdown-body ol[type="a s"] {
  list-style-type: lower-alpha;
}

.markdown-body ol[type="A s"] {
  list-style-type: upper-alpha;
}

.markdown-body ol[type="i s"] {
  list-style-type: lower-roman;
}

.markdown-body ol[type="I s"] {
  list-style-type: upper-roman;
}

.markdown-body ol[type="1"] {
  list-style-type: decimal;
}

.markdown-body div>ol:not([type]) {
  list-style-type: decimal;
}

.markdown-body ul ul,
.markdown-body ul ol,
.markdown-body ol ol,
.markdown-body ol ul {
  margin-top: 0;
  margin-bottom: 0;
}

.markdown-body li>p {
  margin-top: 1rem;
}

.markdown-body li+li {
  margin-top: .25em;
}

.markdown-body dl {
  padding: 0;
}

.markdown-body dl dt {
  padding: 0;
  margin-top: 1rem;
  font-size: 1em;
  font-style: italic;
  font-weight: 600;
}

.markdown-body dl dd {
  padding: 0 1rem;
  margin-bottom: 1rem;
}

.markdown-body table th {
  font-weight: 600;
}

.markdown-body table th,
.markdown-body table td {
  padding: 6px 13px;
  border: 1px solid #3d444d;
}

.markdown-body table td>:last-child {
  margin-bottom: 0;
}

.markdown-body table tr {
  background-color: #0d1117;
  border-top: 1px solid #3d444db3;
}

.markdown-body table tr:nth-child(2n) {
  background-color: #151b23;
}

.markdown-body table img {
  background-color: transparent;
}

.markdown-body img[align=right] {
  padding-left: 20px;
}

.markdown-body img[align=left] {
  padding-right: 20px;
}

.markdown-body .emoji {
  max-width: none;
  vertical-align: text-top;
  background-color: transparent;
}

.markdown-body span.frame {
  display: block;
  overflow: hidden;
}

.markdown-body span.frame>span {
  display: block;
  float: left;
  width: auto;
  padding: 7px;
  margin: 13px 0 0;
  overflow: hidden;
  border: 1px solid #3d444d;
}

.markdown-body span.frame span img {
  display: block;
  float: left;
}

.markdown-body span.frame span span {
  display: block;
  padding: 5px 0 0;
  clear: both;
  color: #f0f6fc;
}

.markdown-body span.align-center {
  display: block;
  overflow: hidden;
  clear: both;
}

.markdown-body span.align-center>span {
  display: block;
  margin: 13px auto 0;
  overflow: hidden;
  text-align: center;
}

.markdown-body span.align-center span img {
  margin: 0 auto;
  text-align: center;
}

.markdown-body span.align-right {
  display: block;
  overflow: hidden;
  clear: both;
}

.markdown-body span.align-right>span {
  display: block;
  margin: 13px 0 0;
  overflow: hidden;
  text-align: right;
}

.markdown-body span.align-right span img {
  margin: 0;
  text-align: right;
}

.markdown-body span.float-left {
  display: block;
  float: left;
  margin-right: 13px;
  overflow: hidden;
}

.markdown-body span.float-left span {
  margin: 13px 0 0;
}

.markdown-body span.float-right {
  display: block;
  float: right;
  margin-left: 13px;
  overflow: hidden;
}

.markdown-body span.float-right>span {
  display: block;
  margin: 13px auto 0;
  overflow: hidden;
  text-align: right;
}

.markdown-body code,
.markdown-body tt {
  padding: .2em .4em;
  margin: 0;
  font-size: 85%;
  white-space: break-spaces;
  background-color: #656c7633;
  border-radius: 6px;
}

.markdown-body code br,
.markdown-body tt br {
  display: none;
}

.markdown-body del code {
  text-decoration: inherit;
}

.markdown-body samp {
  font-size: 85%;
}

.markdown-body pre code {
  font-size: 100%;
}

.markdown-body pre>code {
  padding: 0;
  margin: 0;
  word-break: normal;
  white-space: pre;
  background: transparent;
  border: 0;
}

.markdown-body .highlight {
  margin-bottom: 1rem;
}

.markdown-body .highlight pre {
  margin-bottom: 0;
  word-break: normal;
}

.markdown-body .highlight pre,
.markdown-body pre {
  padding: 1rem;
  overflow: auto;
  font-size: 85%;
  line-height: 1.45;
  color: #f0f6fc;
  background-color: #151b23;
  border-radius: 6px;
}

.markdown-body pre code,
.markdown-body pre tt {
  display: inline;
  max-width: auto;
  padding: 0;
  margin: 0;
  overflow: visible;
  line-height: inherit;
  word-wrap: normal;
  background-color: transparent;
  border: 0;
}

.markdown-body .csv-data td,
.markdown-body .csv-data th {
  padding: 5px;
  overflow: hidden;
  font-size: 12px;
  line-height: 1;
  text-align: left;
  white-space: nowrap;
}

.markdown-body .csv-data .blob-num {
  padding: 10px 0.5rem 9px;
  text-align: right;
  background: #0d1117;
  border: 0;
}

.markdown-body .csv-data tr {
  border-top: 0;
}

.markdown-body .csv-data th {
  font-weight: 600;
  background: #151b23;
  border-top: 0;
}

.markdown-body [data-footnote-ref]::before {
  content: "[";
}

.markdown-body [data-footnote-ref]::after {
  content: "]";
}

.markdown-body .footnotes {
  font-size: 12px;
  color: #9198a1;
  border-top: 1px solid #3d444d;
}

.markdown-body .footnotes ol {
  padding-left: 1rem;
}

.markdown-body .footnotes ol ul {
  display: inline-block;
  padding-left: 1rem;
  margin-top: 1rem;
}

.markdown-body .footnotes li {
  position: relative;
}

.markdown-body .footnotes li:target::before {
  position: absolute;
  top: calc(0.5rem*-1);
  right: calc(0.5rem*-1);
  bottom: calc(0.5rem*-1);
  left: calc(1.5rem*-1);
  pointer-events: none;
  content: "";
  border: 2px solid #1f6feb;
  border-radius: 6px;
}

.markdown-body .footnotes li:target {
  color: #f0f6fc;
}

.markdown-body .footnotes .data-footnote-backref g-emoji {
  font-family: monospace;
}

.markdown-body .pl-c {
  color: #9198a1;
}

.markdown-body .pl-c1,
.markdown-body .pl-s .pl-v {
  color: #79c0ff;
}

.markdown-body .pl-e,
.markdown-body .pl-en {
  color: #d2a8ff;
}

.markdown-body .pl-smi,
.markdown-body .pl-s .pl-s1 {
  color: #f0f6fc;
}

.markdown-body .pl-ent {
  color: #7ee787;
}

.markdown-body .pl-k {
  color: #ff7b72;
}

.markdown-body .pl-s,
.markdown-body .pl-pds,
.markdown-body .pl-s .pl-pse .pl-s1,
.markdown-body .pl-sr,
.markdown-body .pl-sr .pl-cce,
.markdown-body .pl-sr .pl-sre,
.markdown-body .pl-sr .pl-sra {
  color: #a5d6ff;
}

.markdown-body .pl-v,
.markdown-body .pl-smw {
  color: #ffa657;
}

.markdown-body .pl-bu {
  color: #f85149;
}

.markdown-body .pl-ii {
  color: #f0f6fc;
  background-color: #8e1519;
}

.markdown-body .pl-c2 {
  color: #f0f6fc;
  background-color: #b62324;
}

.markdown-body .pl-sr .pl-cce {
  font-weight: bold;
  color: #7ee787;
}

.markdown-body .pl-ml {
  color: #f2cc60;
}

.markdown-body .pl-mh,
.markdown-body .pl-mh .pl-en,
.markdown-body .pl-ms {
  font-weight: bold;
  color: #1f6feb;
}

.markdown-body .pl-mi {
  font-style: italic;
  color: #f0f6fc;
}

.markdown-body .pl-mb {
  font-weight: bold;
  color: #f0f6fc;
}

.markdown-body .pl-md {
  color: #ffdcd7;
  background-color: #67060c;
}

.markdown-body .pl-mi1 {
  color: #aff5b4;
  background-color: #033a16;
}

.markdown-body .pl-mc {
  color: #ffdfb6;
  background-color: #5a1e02;
}

.markdown-body .pl-mi2 {
  color: #f0f6fc;
  background-color: #1158c7;
}

.markdown-body .pl-mdr {
  font-weight: bold;
  color: #d2a8ff;
}

.markdown-body .pl-ba {
  color: #9198a1;
}

.markdown-body .pl-sg {
  color: #3d444d;
}

.markdown-body .pl-corl {
  text-decoration: underline;
  color: #a5d6ff;
}

.markdown-body [role=button]:focus:not(:focus-visible),
.markdown-body [role=tabpanel][tabindex="0"]:focus:not(:focus-visible),
.markdown-body button:focus:not(:focus-visible),
.markdown-body summary:focus:not(:focus-visible),
.markdown-body a:focus:not(:focus-visible) {
  outline: none;
  box-shadow: none;
}

.markdown-body [tabindex="0"]:focus:not(:focus-visible),
.markdown-body details-dialog:focus:not(:focus-visible) {
  outline: none;
}

.markdown-body g-emoji {
  display: inline-block;
  min-width: 1ch;
  font-family: "Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 1em;
  font-style: normal !important;
  font-weight: 400;
  line-height: 1;
  vertical-align: -0.075em;
}

.markdown-body g-emoji img {
  width: 1em;
  height: 1em;
}

.markdown-body .task-list-item {
  list-style-type: none;
}

.markdown-body .task-list-item label {
  font-weight: 400;
}

.markdown-body .task-list-item.enabled label {
  cursor: pointer;
}

.markdown-body .task-list-item+.task-list-item {
  margin-top: 0.25rem;
}

.markdown-body .task-list-item .handle {
  display: none;
}

.markdown-body .task-list-item-checkbox {
  margin: 0 .2em .25em -1.4em;
  vertical-align: middle;
}

.markdown-body ul:dir(rtl) .task-list-item-checkbox {
  margin: 0 -1.6em .25em .2em;
}

.markdown-body ol:dir(rtl) .task-list-item-checkbox {
  margin: 0 -1.6em .25em .2em;
}

.markdown-body .contains-task-list:hover .task-list-item-convert-container,
.markdown-body .contains-task-list:focus-within .task-list-item-convert-container {
  display: block;
  width: auto;
  height: 24px;
  overflow: visible;
  clip: auto;
}

.markdown-body ::-webkit-calendar-picker-indicator {
  filter: invert(50%);
}

.markdown-body .markdown-alert {
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  color: inherit;
  border-left: .25em solid #3d444d;
}

.markdown-body .markdown-alert>:first-child {
  margin-top: 0;
}

.markdown-body .markdown-alert>:last-child {
  margin-bottom: 0;
}

.markdown-body .markdown-alert .markdown-alert-title {
  display: flex;
  font-weight: 500;
  align-items: center;
  line-height: 1;
}

.markdown-body .markdown-alert.markdown-alert-note {
  border-left-color: #1f6feb;
}

.markdown-body .markdown-alert.markdown-alert-note .markdown-alert-title {
  color: #4493f8;
}

.markdown-body .markdown-alert.markdown-alert-important {
  border-left-color: #8957e5;
}

.markdown-body .markdown-alert.markdown-alert-important .markdown-alert-title {
  color: #ab7df8;
}

.markdown-body .markdown-alert.markdown-alert-warning {
  border-left-color: #9e6a03;
}

.markdown-body .markdown-alert.markdown-alert-warning .markdown-alert-title {
  color: #d29922;
}

.markdown-body .markdown-alert.markdown-alert-tip {
  border-left-color: #238636;
}

.markdown-body .markdown-alert.markdown-alert-tip .markdown-alert-title {
  color: #3fb950;
}

.markdown-body .markdown-alert.markdown-alert-caution {
  border-left-color: #da3633;
}

.markdown-body .markdown-alert.markdown-alert-caution .markdown-alert-title {
  color: #f85149;
}

.markdown-body>*:first-child>.heading-element:first-child {
  margin-top: 0 !important;
}

`;var wi=`/* light */
.markdown-body {
  color-scheme: light;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  margin: 0;
  color: #1f2328;
  background-color: #ffffff;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
  font-size: 16px;
  line-height: 1.5;
  word-wrap: break-word;
  scroll-behavior: auto !important;
}

.markdown-body .octicon {
  display: inline-block;
  fill: currentColor;
  vertical-align: text-bottom;
}

.markdown-body h1:hover .anchor .octicon-link:before,
.markdown-body h2:hover .anchor .octicon-link:before,
.markdown-body h3:hover .anchor .octicon-link:before,
.markdown-body h4:hover .anchor .octicon-link:before,
.markdown-body h5:hover .anchor .octicon-link:before,
.markdown-body h6:hover .anchor .octicon-link:before {
  width: 16px;
  height: 16px;
  content: ' ';
  display: inline-block;
  background-color: currentColor;
  -webkit-mask-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>");
  mask-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>");
}

.markdown-body details,
.markdown-body figcaption,
.markdown-body figure {
  display: block;
}

.markdown-body summary {
  display: list-item;
}

.markdown-body [hidden] {
  display: none !important;
}

.markdown-body a {
  background-color: transparent;
  color: #0969da;
  text-decoration: none;
}

.markdown-body abbr[title] {
  border-bottom: none;
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
}

.markdown-body b,
.markdown-body strong {
  font-weight: 600;
}

.markdown-body dfn {
  font-style: italic;
}

.markdown-body h1 {
  margin: .67em 0;
  font-weight: 600;
  padding-bottom: .3em;
  font-size: 2em;
  border-bottom: 1px solid #d1d9e0b3;
}

.markdown-body mark {
  background-color: #fff8c5;
  color: #1f2328;
}

.markdown-body small {
  font-size: 90%;
}

.markdown-body sub,
.markdown-body sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

.markdown-body sub {
  bottom: -0.25em;
}

.markdown-body sup {
  top: -0.5em;
}

.markdown-body img {
  border-style: none;
  max-width: 100%;
  box-sizing: content-box;
}

.markdown-body code,
.markdown-body kbd,
.markdown-body pre,
.markdown-body samp {
  font-family: monospace;
  font-size: 1em;
}

.markdown-body figure {
  margin: 1em 2.5rem;
}

.markdown-body hr {
  box-sizing: content-box;
  overflow: hidden;
  background: transparent;
  border-bottom: 1px solid #d1d9e0b3;
  height: .25em;
  padding: 0;
  margin: 1.5rem 0;
  background-color: #d1d9e0;
  border: 0;
}

.markdown-body input {
  font: inherit;
  margin: 0;
  overflow: visible;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

.markdown-body [type=button],
.markdown-body [type=reset],
.markdown-body [type=submit] {
  -webkit-appearance: button;
  -moz-appearance: button;
       appearance: button;
}

.markdown-body [type=checkbox],
.markdown-body [type=radio] {
  box-sizing: border-box;
  padding: 0;
}

.markdown-body [type=number]::-webkit-inner-spin-button,
.markdown-body [type=number]::-webkit-outer-spin-button {
  height: auto;
}

.markdown-body [type=search]::-webkit-search-cancel-button,
.markdown-body [type=search]::-webkit-search-decoration {
  -webkit-appearance: none;
  appearance: none;
}

.markdown-body ::-webkit-input-placeholder {
  color: inherit;
  opacity: .54;
}

.markdown-body ::-webkit-file-upload-button {
  -webkit-appearance: button;
  appearance: button;
  font: inherit;
}

.markdown-body a:hover {
  text-decoration: underline;
}

.markdown-body ::-moz-placeholder {
  color: #59636e;
  opacity: 1;
}

.markdown-body ::placeholder {
  color: #59636e;
  opacity: 1;
}

.markdown-body hr::before {
  display: table;
  content: "";
}

.markdown-body hr::after {
  display: table;
  clear: both;
  content: "";
}

.markdown-body table {
  border-spacing: 0;
  border-collapse: collapse;
  display: block;
  width: -moz-max-content;
  width: max-content;
  max-width: 100%;
  overflow: auto;
}

.markdown-body td,
.markdown-body th {
  padding: 0;
}

.markdown-body details summary {
  cursor: pointer;
}

.markdown-body a:focus,
.markdown-body [role=button]:focus,
.markdown-body input[type=radio]:focus,
.markdown-body input[type=checkbox]:focus {
  outline: 2px solid #0969da;
  outline-offset: -2px;
  box-shadow: none;
}

.markdown-body a:focus:not(:focus-visible),
.markdown-body [role=button]:focus:not(:focus-visible),
.markdown-body input[type=radio]:focus:not(:focus-visible),
.markdown-body input[type=checkbox]:focus:not(:focus-visible) {
  outline: solid 1px transparent;
}

.markdown-body a:focus-visible,
.markdown-body [role=button]:focus-visible,
.markdown-body input[type=radio]:focus-visible,
.markdown-body input[type=checkbox]:focus-visible {
  outline: 2px solid #0969da;
  outline-offset: -2px;
  box-shadow: none;
}

.markdown-body a:not([class]):focus,
.markdown-body a:not([class]):focus-visible,
.markdown-body input[type=radio]:focus,
.markdown-body input[type=radio]:focus-visible,
.markdown-body input[type=checkbox]:focus,
.markdown-body input[type=checkbox]:focus-visible {
  outline-offset: 0;
}

.markdown-body kbd {
  display: inline-block;
  padding: 0.25rem;
  font: 11px ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
  line-height: 10px;
  color: #1f2328;
  vertical-align: middle;
  background-color: #f6f8fa;
  border: solid 1px #d1d9e0b3;
  border-bottom-color: #d1d9e0b3;
  border-radius: 6px;
  box-shadow: inset 0 -1px 0 #d1d9e0b3;
}

.markdown-body h1,
.markdown-body h2,
.markdown-body h3,
.markdown-body h4,
.markdown-body h5,
.markdown-body h6 {
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
  line-height: 1.25;
}

.markdown-body h2 {
  font-weight: 600;
  padding-bottom: .3em;
  font-size: 1.5em;
  border-bottom: 1px solid #d1d9e0b3;
}

.markdown-body h3 {
  font-weight: 600;
  font-size: 1.25em;
}

.markdown-body h4 {
  font-weight: 600;
  font-size: 1em;
}

.markdown-body h5 {
  font-weight: 600;
  font-size: .875em;
}

.markdown-body h6 {
  font-weight: 600;
  font-size: .85em;
  color: #59636e;
}

.markdown-body p {
  margin-top: 0;
  margin-bottom: 10px;
}

.markdown-body blockquote {
  margin: 0;
  padding: 0 1em;
  color: #59636e;
  border-left: .25em solid #d1d9e0;
}

.markdown-body ul,
.markdown-body ol {
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 2em;
}

.markdown-body ol ol,
.markdown-body ul ol {
  list-style-type: lower-roman;
}

.markdown-body ul ul ol,
.markdown-body ul ol ol,
.markdown-body ol ul ol,
.markdown-body ol ol ol {
  list-style-type: lower-alpha;
}

.markdown-body dd {
  margin-left: 0;
}

.markdown-body tt,
.markdown-body code,
.markdown-body samp {
  font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
  font-size: 12px;
}

.markdown-body pre {
  margin-top: 0;
  margin-bottom: 0;
  font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
  font-size: 12px;
  word-wrap: normal;
}

.markdown-body .octicon {
  display: inline-block;
  overflow: visible !important;
  vertical-align: text-bottom;
  fill: currentColor;
}

.markdown-body input::-webkit-outer-spin-button,
.markdown-body input::-webkit-inner-spin-button {
  margin: 0;
  -webkit-appearance: none;
  appearance: none;
}

.markdown-body .mr-2 {
  margin-right: 0.5rem !important;
}

.markdown-body::before {
  display: table;
  content: "";
}

.markdown-body::after {
  display: table;
  clear: both;
  content: "";
}

.markdown-body>*:first-child {
  margin-top: 0 !important;
}

.markdown-body>*:last-child {
  margin-bottom: 0 !important;
}

.markdown-body a:not([href]) {
  color: inherit;
  text-decoration: none;
}

.markdown-body .absent {
  color: #d1242f;
}

.markdown-body .anchor {
  float: left;
  padding-right: 0.25rem;
  margin-left: -20px;
  line-height: 1;
}

.markdown-body .anchor:focus {
  outline: none;
}

.markdown-body p,
.markdown-body blockquote,
.markdown-body ul,
.markdown-body ol,
.markdown-body dl,
.markdown-body table,
.markdown-body pre,
.markdown-body details {
  margin-top: 0;
  margin-bottom: 1rem;
}

.markdown-body blockquote>:first-child {
  margin-top: 0;
}

.markdown-body blockquote>:last-child {
  margin-bottom: 0;
}

.markdown-body h1 .octicon-link,
.markdown-body h2 .octicon-link,
.markdown-body h3 .octicon-link,
.markdown-body h4 .octicon-link,
.markdown-body h5 .octicon-link,
.markdown-body h6 .octicon-link {
  color: #1f2328;
  vertical-align: middle;
  visibility: hidden;
}

.markdown-body h1:hover .anchor,
.markdown-body h2:hover .anchor,
.markdown-body h3:hover .anchor,
.markdown-body h4:hover .anchor,
.markdown-body h5:hover .anchor,
.markdown-body h6:hover .anchor {
  text-decoration: none;
}

.markdown-body h1:hover .anchor .octicon-link,
.markdown-body h2:hover .anchor .octicon-link,
.markdown-body h3:hover .anchor .octicon-link,
.markdown-body h4:hover .anchor .octicon-link,
.markdown-body h5:hover .anchor .octicon-link,
.markdown-body h6:hover .anchor .octicon-link {
  visibility: visible;
}

.markdown-body h1 tt,
.markdown-body h1 code,
.markdown-body h2 tt,
.markdown-body h2 code,
.markdown-body h3 tt,
.markdown-body h3 code,
.markdown-body h4 tt,
.markdown-body h4 code,
.markdown-body h5 tt,
.markdown-body h5 code,
.markdown-body h6 tt,
.markdown-body h6 code {
  padding: 0 .2em;
  font-size: inherit;
}

.markdown-body summary h1,
.markdown-body summary h2,
.markdown-body summary h3,
.markdown-body summary h4,
.markdown-body summary h5,
.markdown-body summary h6 {
  display: inline-block;
}

.markdown-body summary h1 .anchor,
.markdown-body summary h2 .anchor,
.markdown-body summary h3 .anchor,
.markdown-body summary h4 .anchor,
.markdown-body summary h5 .anchor,
.markdown-body summary h6 .anchor {
  margin-left: -40px;
}

.markdown-body summary h1,
.markdown-body summary h2 {
  padding-bottom: 0;
  border-bottom: 0;
}

.markdown-body ul.no-list,
.markdown-body ol.no-list {
  padding: 0;
  list-style-type: none;
}

.markdown-body ol[type="a s"] {
  list-style-type: lower-alpha;
}

.markdown-body ol[type="A s"] {
  list-style-type: upper-alpha;
}

.markdown-body ol[type="i s"] {
  list-style-type: lower-roman;
}

.markdown-body ol[type="I s"] {
  list-style-type: upper-roman;
}

.markdown-body ol[type="1"] {
  list-style-type: decimal;
}

.markdown-body div>ol:not([type]) {
  list-style-type: decimal;
}

.markdown-body ul ul,
.markdown-body ul ol,
.markdown-body ol ol,
.markdown-body ol ul {
  margin-top: 0;
  margin-bottom: 0;
}

.markdown-body li>p {
  margin-top: 1rem;
}

.markdown-body li+li {
  margin-top: .25em;
}

.markdown-body dl {
  padding: 0;
}

.markdown-body dl dt {
  padding: 0;
  margin-top: 1rem;
  font-size: 1em;
  font-style: italic;
  font-weight: 600;
}

.markdown-body dl dd {
  padding: 0 1rem;
  margin-bottom: 1rem;
}

.markdown-body table th {
  font-weight: 600;
}

.markdown-body table th,
.markdown-body table td {
  padding: 6px 13px;
  border: 1px solid #d1d9e0;
}

.markdown-body table td>:last-child {
  margin-bottom: 0;
}

.markdown-body table tr {
  background-color: #ffffff;
  border-top: 1px solid #d1d9e0b3;
}

.markdown-body table tr:nth-child(2n) {
  background-color: #f6f8fa;
}

.markdown-body table img {
  background-color: transparent;
}

.markdown-body img[align=right] {
  padding-left: 20px;
}

.markdown-body img[align=left] {
  padding-right: 20px;
}

.markdown-body .emoji {
  max-width: none;
  vertical-align: text-top;
  background-color: transparent;
}

.markdown-body span.frame {
  display: block;
  overflow: hidden;
}

.markdown-body span.frame>span {
  display: block;
  float: left;
  width: auto;
  padding: 7px;
  margin: 13px 0 0;
  overflow: hidden;
  border: 1px solid #d1d9e0;
}

.markdown-body span.frame span img {
  display: block;
  float: left;
}

.markdown-body span.frame span span {
  display: block;
  padding: 5px 0 0;
  clear: both;
  color: #1f2328;
}

.markdown-body span.align-center {
  display: block;
  overflow: hidden;
  clear: both;
}

.markdown-body span.align-center>span {
  display: block;
  margin: 13px auto 0;
  overflow: hidden;
  text-align: center;
}

.markdown-body span.align-center span img {
  margin: 0 auto;
  text-align: center;
}

.markdown-body span.align-right {
  display: block;
  overflow: hidden;
  clear: both;
}

.markdown-body span.align-right>span {
  display: block;
  margin: 13px 0 0;
  overflow: hidden;
  text-align: right;
}

.markdown-body span.align-right span img {
  margin: 0;
  text-align: right;
}

.markdown-body span.float-left {
  display: block;
  float: left;
  margin-right: 13px;
  overflow: hidden;
}

.markdown-body span.float-left span {
  margin: 13px 0 0;
}

.markdown-body span.float-right {
  display: block;
  float: right;
  margin-left: 13px;
  overflow: hidden;
}

.markdown-body span.float-right>span {
  display: block;
  margin: 13px auto 0;
  overflow: hidden;
  text-align: right;
}

.markdown-body code,
.markdown-body tt {
  padding: .2em .4em;
  margin: 0;
  font-size: 85%;
  white-space: break-spaces;
  background-color: #818b981f;
  border-radius: 6px;
}

.markdown-body code br,
.markdown-body tt br {
  display: none;
}

.markdown-body del code {
  text-decoration: inherit;
}

.markdown-body samp {
  font-size: 85%;
}

.markdown-body pre code {
  font-size: 100%;
}

.markdown-body pre>code {
  padding: 0;
  margin: 0;
  word-break: normal;
  white-space: pre;
  background: transparent;
  border: 0;
}

.markdown-body .highlight {
  margin-bottom: 1rem;
}

.markdown-body .highlight pre {
  margin-bottom: 0;
  word-break: normal;
}

.markdown-body .highlight pre,
.markdown-body pre {
  padding: 1rem;
  overflow: auto;
  font-size: 85%;
  line-height: 1.45;
  color: #1f2328;
  background-color: #f6f8fa;
  border-radius: 6px;
}

.markdown-body pre code,
.markdown-body pre tt {
  display: inline;
  max-width: auto;
  padding: 0;
  margin: 0;
  overflow: visible;
  line-height: inherit;
  word-wrap: normal;
  background-color: transparent;
  border: 0;
}

.markdown-body .csv-data td,
.markdown-body .csv-data th {
  padding: 5px;
  overflow: hidden;
  font-size: 12px;
  line-height: 1;
  text-align: left;
  white-space: nowrap;
}

.markdown-body .csv-data .blob-num {
  padding: 10px 0.5rem 9px;
  text-align: right;
  background: #ffffff;
  border: 0;
}

.markdown-body .csv-data tr {
  border-top: 0;
}

.markdown-body .csv-data th {
  font-weight: 600;
  background: #f6f8fa;
  border-top: 0;
}

.markdown-body [data-footnote-ref]::before {
  content: "[";
}

.markdown-body [data-footnote-ref]::after {
  content: "]";
}

.markdown-body .footnotes {
  font-size: 12px;
  color: #59636e;
  border-top: 1px solid #d1d9e0;
}

.markdown-body .footnotes ol {
  padding-left: 1rem;
}

.markdown-body .footnotes ol ul {
  display: inline-block;
  padding-left: 1rem;
  margin-top: 1rem;
}

.markdown-body .footnotes li {
  position: relative;
}

.markdown-body .footnotes li:target::before {
  position: absolute;
  top: calc(0.5rem*-1);
  right: calc(0.5rem*-1);
  bottom: calc(0.5rem*-1);
  left: calc(1.5rem*-1);
  pointer-events: none;
  content: "";
  border: 2px solid #0969da;
  border-radius: 6px;
}

.markdown-body .footnotes li:target {
  color: #1f2328;
}

.markdown-body .footnotes .data-footnote-backref g-emoji {
  font-family: monospace;
}

.markdown-body .pl-c {
  color: #59636e;
}

.markdown-body .pl-c1,
.markdown-body .pl-s .pl-v {
  color: #0550ae;
}

.markdown-body .pl-e,
.markdown-body .pl-en {
  color: #6639ba;
}

.markdown-body .pl-smi,
.markdown-body .pl-s .pl-s1 {
  color: #1f2328;
}

.markdown-body .pl-ent {
  color: #0550ae;
}

.markdown-body .pl-k {
  color: #cf222e;
}

.markdown-body .pl-s,
.markdown-body .pl-pds,
.markdown-body .pl-s .pl-pse .pl-s1,
.markdown-body .pl-sr,
.markdown-body .pl-sr .pl-cce,
.markdown-body .pl-sr .pl-sre,
.markdown-body .pl-sr .pl-sra {
  color: #0a3069;
}

.markdown-body .pl-v,
.markdown-body .pl-smw {
  color: #953800;
}

.markdown-body .pl-bu {
  color: #82071e;
}

.markdown-body .pl-ii {
  color: #f6f8fa;
  background-color: #82071e;
}

.markdown-body .pl-c2 {
  color: #f6f8fa;
  background-color: #cf222e;
}

.markdown-body .pl-sr .pl-cce {
  font-weight: bold;
  color: #116329;
}

.markdown-body .pl-ml {
  color: #3b2300;
}

.markdown-body .pl-mh,
.markdown-body .pl-mh .pl-en,
.markdown-body .pl-ms {
  font-weight: bold;
  color: #0550ae;
}

.markdown-body .pl-mi {
  font-style: italic;
  color: #1f2328;
}

.markdown-body .pl-mb {
  font-weight: bold;
  color: #1f2328;
}

.markdown-body .pl-md {
  color: #82071e;
  background-color: #ffebe9;
}

.markdown-body .pl-mi1 {
  color: #116329;
  background-color: #dafbe1;
}

.markdown-body .pl-mc {
  color: #953800;
  background-color: #ffd8b5;
}

.markdown-body .pl-mi2 {
  color: #d1d9e0;
  background-color: #0550ae;
}

.markdown-body .pl-mdr {
  font-weight: bold;
  color: #8250df;
}

.markdown-body .pl-ba {
  color: #59636e;
}

.markdown-body .pl-sg {
  color: #818b98;
}

.markdown-body .pl-corl {
  text-decoration: underline;
  color: #0a3069;
}

.markdown-body [role=button]:focus:not(:focus-visible),
.markdown-body [role=tabpanel][tabindex="0"]:focus:not(:focus-visible),
.markdown-body button:focus:not(:focus-visible),
.markdown-body summary:focus:not(:focus-visible),
.markdown-body a:focus:not(:focus-visible) {
  outline: none;
  box-shadow: none;
}

.markdown-body [tabindex="0"]:focus:not(:focus-visible),
.markdown-body details-dialog:focus:not(:focus-visible) {
  outline: none;
}

.markdown-body g-emoji {
  display: inline-block;
  min-width: 1ch;
  font-family: "Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 1em;
  font-style: normal !important;
  font-weight: 400;
  line-height: 1;
  vertical-align: -0.075em;
}

.markdown-body g-emoji img {
  width: 1em;
  height: 1em;
}

.markdown-body .task-list-item {
  list-style-type: none;
}

.markdown-body .task-list-item label {
  font-weight: 400;
}

.markdown-body .task-list-item.enabled label {
  cursor: pointer;
}

.markdown-body .task-list-item+.task-list-item {
  margin-top: 0.25rem;
}

.markdown-body .task-list-item .handle {
  display: none;
}

.markdown-body .task-list-item-checkbox {
  margin: 0 .2em .25em -1.4em;
  vertical-align: middle;
}

.markdown-body ul:dir(rtl) .task-list-item-checkbox {
  margin: 0 -1.6em .25em .2em;
}

.markdown-body ol:dir(rtl) .task-list-item-checkbox {
  margin: 0 -1.6em .25em .2em;
}

.markdown-body .contains-task-list:hover .task-list-item-convert-container,
.markdown-body .contains-task-list:focus-within .task-list-item-convert-container {
  display: block;
  width: auto;
  height: 24px;
  overflow: visible;
  clip: auto;
}

.markdown-body ::-webkit-calendar-picker-indicator {
  filter: invert(50%);
}

.markdown-body .markdown-alert {
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  color: inherit;
  border-left: .25em solid #d1d9e0;
}

.markdown-body .markdown-alert>:first-child {
  margin-top: 0;
}

.markdown-body .markdown-alert>:last-child {
  margin-bottom: 0;
}

.markdown-body .markdown-alert .markdown-alert-title {
  display: flex;
  font-weight: 500;
  align-items: center;
  line-height: 1;
}

.markdown-body .markdown-alert.markdown-alert-note {
  border-left-color: #0969da;
}

.markdown-body .markdown-alert.markdown-alert-note .markdown-alert-title {
  color: #0969da;
}

.markdown-body .markdown-alert.markdown-alert-important {
  border-left-color: #8250df;
}

.markdown-body .markdown-alert.markdown-alert-important .markdown-alert-title {
  color: #8250df;
}

.markdown-body .markdown-alert.markdown-alert-warning {
  border-left-color: #9a6700;
}

.markdown-body .markdown-alert.markdown-alert-warning .markdown-alert-title {
  color: #9a6700;
}

.markdown-body .markdown-alert.markdown-alert-tip {
  border-left-color: #1a7f37;
}

.markdown-body .markdown-alert.markdown-alert-tip .markdown-alert-title {
  color: #1a7f37;
}

.markdown-body .markdown-alert.markdown-alert-caution {
  border-left-color: #cf222e;
}

.markdown-body .markdown-alert.markdown-alert-caution .markdown-alert-title {
  color: #d1242f;
}

.markdown-body>*:first-child>.heading-element:first-child {
  margin-top: 0 !important;
}

`;var xi=`.markdown-body {
  --base-size-4: 0.25rem;
  --base-size-8: 0.5rem;
  --base-size-16: 1rem;
  --base-size-24: 1.5rem;
  --base-size-40: 2.5rem;
  --base-text-weight-normal: 400;
  --base-text-weight-medium: 500;
  --base-text-weight-semibold: 600;
  --fontStack-monospace: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
  --fgColor-accent: Highlight;
}
@media (prefers-color-scheme: dark) {
  .markdown-body, [data-theme="dark"] {
    /* dark */
    color-scheme: dark;
    --focus-outlineColor: #1f6feb;
    --fgColor-default: #f0f6fc;
    --fgColor-muted: #9198a1;
    --fgColor-accent: #4493f8;
    --fgColor-success: #3fb950;
    --fgColor-attention: #d29922;
    --fgColor-danger: #f85149;
    --fgColor-done: #ab7df8;
    --bgColor-default: #0d1117;
    --bgColor-muted: #151b23;
    --bgColor-neutral-muted: #656c7633;
    --bgColor-attention-muted: #bb800926;
    --borderColor-default: #3d444d;
    --borderColor-muted: #3d444db3;
    --borderColor-neutral-muted: #3d444db3;
    --borderColor-accent-emphasis: #1f6feb;
    --borderColor-success-emphasis: #238636;
    --borderColor-attention-emphasis: #9e6a03;
    --borderColor-danger-emphasis: #da3633;
    --borderColor-done-emphasis: #8957e5;
    --color-prettylights-syntax-comment: #9198a1;
    --color-prettylights-syntax-constant: #79c0ff;
    --color-prettylights-syntax-constant-other-reference-link: #a5d6ff;
    --color-prettylights-syntax-entity: #d2a8ff;
    --color-prettylights-syntax-storage-modifier-import: #f0f6fc;
    --color-prettylights-syntax-entity-tag: #7ee787;
    --color-prettylights-syntax-keyword: #ff7b72;
    --color-prettylights-syntax-string: #a5d6ff;
    --color-prettylights-syntax-variable: #ffa657;
    --color-prettylights-syntax-brackethighlighter-unmatched: #f85149;
    --color-prettylights-syntax-brackethighlighter-angle: #9198a1;
    --color-prettylights-syntax-invalid-illegal-text: #f0f6fc;
    --color-prettylights-syntax-invalid-illegal-bg: #8e1519;
    --color-prettylights-syntax-carriage-return-text: #f0f6fc;
    --color-prettylights-syntax-carriage-return-bg: #b62324;
    --color-prettylights-syntax-string-regexp: #7ee787;
    --color-prettylights-syntax-markup-list: #f2cc60;
    --color-prettylights-syntax-markup-heading: #1f6feb;
    --color-prettylights-syntax-markup-italic: #f0f6fc;
    --color-prettylights-syntax-markup-bold: #f0f6fc;
    --color-prettylights-syntax-markup-deleted-text: #ffdcd7;
    --color-prettylights-syntax-markup-deleted-bg: #67060c;
    --color-prettylights-syntax-markup-inserted-text: #aff5b4;
    --color-prettylights-syntax-markup-inserted-bg: #033a16;
    --color-prettylights-syntax-markup-changed-text: #ffdfb6;
    --color-prettylights-syntax-markup-changed-bg: #5a1e02;
    --color-prettylights-syntax-markup-ignored-text: #f0f6fc;
    --color-prettylights-syntax-markup-ignored-bg: #1158c7;
    --color-prettylights-syntax-meta-diff-range: #d2a8ff;
    --color-prettylights-syntax-sublimelinter-gutter-mark: #3d444d;
  }
}
@media (prefers-color-scheme: light) {
  .markdown-body, [data-theme="light"] {
    /* light */
    color-scheme: light;
    --focus-outlineColor: #0969da;
    --fgColor-default: #1f2328;
    --fgColor-muted: #59636e;
    --fgColor-accent: #0969da;
    --fgColor-success: #1a7f37;
    --fgColor-attention: #9a6700;
    --fgColor-danger: #d1242f;
    --fgColor-done: #8250df;
    --bgColor-default: #ffffff;
    --bgColor-muted: #f6f8fa;
    --bgColor-neutral-muted: #818b981f;
    --bgColor-attention-muted: #fff8c5;
    --borderColor-default: #d1d9e0;
    --borderColor-muted: #d1d9e0b3;
    --borderColor-neutral-muted: #d1d9e0b3;
    --borderColor-accent-emphasis: #0969da;
    --borderColor-success-emphasis: #1a7f37;
    --borderColor-attention-emphasis: #9a6700;
    --borderColor-danger-emphasis: #cf222e;
    --borderColor-done-emphasis: #8250df;
    --color-prettylights-syntax-comment: #59636e;
    --color-prettylights-syntax-constant: #0550ae;
    --color-prettylights-syntax-constant-other-reference-link: #0a3069;
    --color-prettylights-syntax-entity: #6639ba;
    --color-prettylights-syntax-storage-modifier-import: #1f2328;
    --color-prettylights-syntax-entity-tag: #0550ae;
    --color-prettylights-syntax-keyword: #cf222e;
    --color-prettylights-syntax-string: #0a3069;
    --color-prettylights-syntax-variable: #953800;
    --color-prettylights-syntax-brackethighlighter-unmatched: #82071e;
    --color-prettylights-syntax-brackethighlighter-angle: #59636e;
    --color-prettylights-syntax-invalid-illegal-text: #f6f8fa;
    --color-prettylights-syntax-invalid-illegal-bg: #82071e;
    --color-prettylights-syntax-carriage-return-text: #f6f8fa;
    --color-prettylights-syntax-carriage-return-bg: #cf222e;
    --color-prettylights-syntax-string-regexp: #116329;
    --color-prettylights-syntax-markup-list: #3b2300;
    --color-prettylights-syntax-markup-heading: #0550ae;
    --color-prettylights-syntax-markup-italic: #1f2328;
    --color-prettylights-syntax-markup-bold: #1f2328;
    --color-prettylights-syntax-markup-deleted-text: #82071e;
    --color-prettylights-syntax-markup-deleted-bg: #ffebe9;
    --color-prettylights-syntax-markup-inserted-text: #116329;
    --color-prettylights-syntax-markup-inserted-bg: #dafbe1;
    --color-prettylights-syntax-markup-changed-text: #953800;
    --color-prettylights-syntax-markup-changed-bg: #ffd8b5;
    --color-prettylights-syntax-markup-ignored-text: #d1d9e0;
    --color-prettylights-syntax-markup-ignored-bg: #0550ae;
    --color-prettylights-syntax-meta-diff-range: #8250df;
    --color-prettylights-syntax-sublimelinter-gutter-mark: #818b98;
  }
}

.markdown-body {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  margin: 0;
  color: var(--fgColor-default);
  background-color: var(--bgColor-default);
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
  font-size: 16px;
  line-height: 1.5;
  word-wrap: break-word;
  scroll-behavior: auto !important;
}

.markdown-body .octicon {
  display: inline-block;
  fill: currentColor;
  vertical-align: text-bottom;
}

.markdown-body h1:hover .anchor .octicon-link:before,
.markdown-body h2:hover .anchor .octicon-link:before,
.markdown-body h3:hover .anchor .octicon-link:before,
.markdown-body h4:hover .anchor .octicon-link:before,
.markdown-body h5:hover .anchor .octicon-link:before,
.markdown-body h6:hover .anchor .octicon-link:before {
  width: 16px;
  height: 16px;
  content: ' ';
  display: inline-block;
  background-color: currentColor;
  -webkit-mask-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>");
  mask-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>");
}

.markdown-body details,
.markdown-body figcaption,
.markdown-body figure {
  display: block;
}

.markdown-body summary {
  display: list-item;
}

.markdown-body [hidden] {
  display: none !important;
}

.markdown-body a {
  background-color: transparent;
  color: var(--fgColor-accent);
  text-decoration: none;
}

.markdown-body abbr[title] {
  border-bottom: none;
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
}

.markdown-body b,
.markdown-body strong {
  font-weight: var(--base-text-weight-semibold, 600);
}

.markdown-body dfn {
  font-style: italic;
}

.markdown-body h1 {
  margin: .67em 0;
  font-weight: var(--base-text-weight-semibold, 600);
  padding-bottom: .3em;
  font-size: 2em;
  border-bottom: 1px solid var(--borderColor-muted);
}

.markdown-body mark {
  background-color: var(--bgColor-attention-muted);
  color: var(--fgColor-default);
}

.markdown-body small {
  font-size: 90%;
}

.markdown-body sub,
.markdown-body sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

.markdown-body sub {
  bottom: -0.25em;
}

.markdown-body sup {
  top: -0.5em;
}

.markdown-body img {
  border-style: none;
  max-width: 100%;
  box-sizing: content-box;
}

.markdown-body code,
.markdown-body kbd,
.markdown-body pre,
.markdown-body samp {
  font-family: monospace;
  font-size: 1em;
}

.markdown-body figure {
  margin: 1em var(--base-size-40);
}

.markdown-body hr {
  box-sizing: content-box;
  overflow: hidden;
  background: transparent;
  border-bottom: 1px solid var(--borderColor-muted);
  height: .25em;
  padding: 0;
  margin: var(--base-size-24) 0;
  background-color: var(--borderColor-default);
  border: 0;
}

.markdown-body input {
  font: inherit;
  margin: 0;
  overflow: visible;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

.markdown-body [type=button],
.markdown-body [type=reset],
.markdown-body [type=submit] {
  -webkit-appearance: button;
  -moz-appearance: button;
       appearance: button;
}

.markdown-body [type=checkbox],
.markdown-body [type=radio] {
  box-sizing: border-box;
  padding: 0;
}

.markdown-body [type=number]::-webkit-inner-spin-button,
.markdown-body [type=number]::-webkit-outer-spin-button {
  height: auto;
}

.markdown-body [type=search]::-webkit-search-cancel-button,
.markdown-body [type=search]::-webkit-search-decoration {
  -webkit-appearance: none;
  appearance: none;
}

.markdown-body ::-webkit-input-placeholder {
  color: inherit;
  opacity: .54;
}

.markdown-body ::-webkit-file-upload-button {
  -webkit-appearance: button;
  appearance: button;
  font: inherit;
}

.markdown-body a:hover {
  text-decoration: underline;
}

.markdown-body ::-moz-placeholder {
  color: var(--fgColor-muted);
  opacity: 1;
}

.markdown-body ::placeholder {
  color: var(--fgColor-muted);
  opacity: 1;
}

.markdown-body hr::before {
  display: table;
  content: "";
}

.markdown-body hr::after {
  display: table;
  clear: both;
  content: "";
}

.markdown-body table {
  border-spacing: 0;
  border-collapse: collapse;
  display: block;
  width: -moz-max-content;
  width: max-content;
  max-width: 100%;
  overflow: auto;
}

.markdown-body td,
.markdown-body th {
  padding: 0;
}

.markdown-body details summary {
  cursor: pointer;
}

.markdown-body a:focus,
.markdown-body [role=button]:focus,
.markdown-body input[type=radio]:focus,
.markdown-body input[type=checkbox]:focus {
  outline: 2px solid var(--focus-outlineColor);
  outline-offset: -2px;
  box-shadow: none;
}

.markdown-body a:focus:not(:focus-visible),
.markdown-body [role=button]:focus:not(:focus-visible),
.markdown-body input[type=radio]:focus:not(:focus-visible),
.markdown-body input[type=checkbox]:focus:not(:focus-visible) {
  outline: solid 1px transparent;
}

.markdown-body a:focus-visible,
.markdown-body [role=button]:focus-visible,
.markdown-body input[type=radio]:focus-visible,
.markdown-body input[type=checkbox]:focus-visible {
  outline: 2px solid var(--focus-outlineColor);
  outline-offset: -2px;
  box-shadow: none;
}

.markdown-body a:not([class]):focus,
.markdown-body a:not([class]):focus-visible,
.markdown-body input[type=radio]:focus,
.markdown-body input[type=radio]:focus-visible,
.markdown-body input[type=checkbox]:focus,
.markdown-body input[type=checkbox]:focus-visible {
  outline-offset: 0;
}

.markdown-body kbd {
  display: inline-block;
  padding: var(--base-size-4);
  font: 11px var(--fontStack-monospace, ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace);
  line-height: 10px;
  color: var(--fgColor-default);
  vertical-align: middle;
  background-color: var(--bgColor-muted);
  border: solid 1px var(--borderColor-neutral-muted);
  border-bottom-color: var(--borderColor-neutral-muted);
  border-radius: 6px;
  box-shadow: inset 0 -1px 0 var(--borderColor-neutral-muted);
}

.markdown-body h1,
.markdown-body h2,
.markdown-body h3,
.markdown-body h4,
.markdown-body h5,
.markdown-body h6 {
  margin-top: var(--base-size-24);
  margin-bottom: var(--base-size-16);
  font-weight: var(--base-text-weight-semibold, 600);
  line-height: 1.25;
}

.markdown-body h2 {
  font-weight: var(--base-text-weight-semibold, 600);
  padding-bottom: .3em;
  font-size: 1.5em;
  border-bottom: 1px solid var(--borderColor-muted);
}

.markdown-body h3 {
  font-weight: var(--base-text-weight-semibold, 600);
  font-size: 1.25em;
}

.markdown-body h4 {
  font-weight: var(--base-text-weight-semibold, 600);
  font-size: 1em;
}

.markdown-body h5 {
  font-weight: var(--base-text-weight-semibold, 600);
  font-size: .875em;
}

.markdown-body h6 {
  font-weight: var(--base-text-weight-semibold, 600);
  font-size: .85em;
  color: var(--fgColor-muted);
}

.markdown-body p {
  margin-top: 0;
  margin-bottom: 10px;
}

.markdown-body blockquote {
  margin: 0;
  padding: 0 1em;
  color: var(--fgColor-muted);
  border-left: .25em solid var(--borderColor-default);
}

.markdown-body ul,
.markdown-body ol {
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 2em;
}

.markdown-body ol ol,
.markdown-body ul ol {
  list-style-type: lower-roman;
}

.markdown-body ul ul ol,
.markdown-body ul ol ol,
.markdown-body ol ul ol,
.markdown-body ol ol ol {
  list-style-type: lower-alpha;
}

.markdown-body dd {
  margin-left: 0;
}

.markdown-body tt,
.markdown-body code,
.markdown-body samp {
  font-family: var(--fontStack-monospace, ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace);
  font-size: 12px;
}

.markdown-body pre {
  margin-top: 0;
  margin-bottom: 0;
  font-family: var(--fontStack-monospace, ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace);
  font-size: 12px;
  word-wrap: normal;
}

.markdown-body .octicon {
  display: inline-block;
  overflow: visible !important;
  vertical-align: text-bottom;
  fill: currentColor;
}

.markdown-body input::-webkit-outer-spin-button,
.markdown-body input::-webkit-inner-spin-button {
  margin: 0;
  -webkit-appearance: none;
  appearance: none;
}

.markdown-body .mr-2 {
  margin-right: var(--base-size-8, 8px) !important;
}

.markdown-body::before {
  display: table;
  content: "";
}

.markdown-body::after {
  display: table;
  clear: both;
  content: "";
}

.markdown-body>*:first-child {
  margin-top: 0 !important;
}

.markdown-body>*:last-child {
  margin-bottom: 0 !important;
}

.markdown-body a:not([href]) {
  color: inherit;
  text-decoration: none;
}

.markdown-body .absent {
  color: var(--fgColor-danger);
}

.markdown-body .anchor {
  float: left;
  padding-right: var(--base-size-4);
  margin-left: -20px;
  line-height: 1;
}

.markdown-body .anchor:focus {
  outline: none;
}

.markdown-body p,
.markdown-body blockquote,
.markdown-body ul,
.markdown-body ol,
.markdown-body dl,
.markdown-body table,
.markdown-body pre,
.markdown-body details {
  margin-top: 0;
  margin-bottom: var(--base-size-16);
}

.markdown-body blockquote>:first-child {
  margin-top: 0;
}

.markdown-body blockquote>:last-child {
  margin-bottom: 0;
}

.markdown-body h1 .octicon-link,
.markdown-body h2 .octicon-link,
.markdown-body h3 .octicon-link,
.markdown-body h4 .octicon-link,
.markdown-body h5 .octicon-link,
.markdown-body h6 .octicon-link {
  color: var(--fgColor-default);
  vertical-align: middle;
  visibility: hidden;
}

.markdown-body h1:hover .anchor,
.markdown-body h2:hover .anchor,
.markdown-body h3:hover .anchor,
.markdown-body h4:hover .anchor,
.markdown-body h5:hover .anchor,
.markdown-body h6:hover .anchor {
  text-decoration: none;
}

.markdown-body h1:hover .anchor .octicon-link,
.markdown-body h2:hover .anchor .octicon-link,
.markdown-body h3:hover .anchor .octicon-link,
.markdown-body h4:hover .anchor .octicon-link,
.markdown-body h5:hover .anchor .octicon-link,
.markdown-body h6:hover .anchor .octicon-link {
  visibility: visible;
}

.markdown-body h1 tt,
.markdown-body h1 code,
.markdown-body h2 tt,
.markdown-body h2 code,
.markdown-body h3 tt,
.markdown-body h3 code,
.markdown-body h4 tt,
.markdown-body h4 code,
.markdown-body h5 tt,
.markdown-body h5 code,
.markdown-body h6 tt,
.markdown-body h6 code {
  padding: 0 .2em;
  font-size: inherit;
}

.markdown-body summary h1,
.markdown-body summary h2,
.markdown-body summary h3,
.markdown-body summary h4,
.markdown-body summary h5,
.markdown-body summary h6 {
  display: inline-block;
}

.markdown-body summary h1 .anchor,
.markdown-body summary h2 .anchor,
.markdown-body summary h3 .anchor,
.markdown-body summary h4 .anchor,
.markdown-body summary h5 .anchor,
.markdown-body summary h6 .anchor {
  margin-left: -40px;
}

.markdown-body summary h1,
.markdown-body summary h2 {
  padding-bottom: 0;
  border-bottom: 0;
}

.markdown-body ul.no-list,
.markdown-body ol.no-list {
  padding: 0;
  list-style-type: none;
}

.markdown-body ol[type="a s"] {
  list-style-type: lower-alpha;
}

.markdown-body ol[type="A s"] {
  list-style-type: upper-alpha;
}

.markdown-body ol[type="i s"] {
  list-style-type: lower-roman;
}

.markdown-body ol[type="I s"] {
  list-style-type: upper-roman;
}

.markdown-body ol[type="1"] {
  list-style-type: decimal;
}

.markdown-body div>ol:not([type]) {
  list-style-type: decimal;
}

.markdown-body ul ul,
.markdown-body ul ol,
.markdown-body ol ol,
.markdown-body ol ul {
  margin-top: 0;
  margin-bottom: 0;
}

.markdown-body li>p {
  margin-top: var(--base-size-16);
}

.markdown-body li+li {
  margin-top: .25em;
}

.markdown-body dl {
  padding: 0;
}

.markdown-body dl dt {
  padding: 0;
  margin-top: var(--base-size-16);
  font-size: 1em;
  font-style: italic;
  font-weight: var(--base-text-weight-semibold, 600);
}

.markdown-body dl dd {
  padding: 0 var(--base-size-16);
  margin-bottom: var(--base-size-16);
}

.markdown-body table th {
  font-weight: var(--base-text-weight-semibold, 600);
}

.markdown-body table th,
.markdown-body table td {
  padding: 6px 13px;
  border: 1px solid var(--borderColor-default);
}

.markdown-body table td>:last-child {
  margin-bottom: 0;
}

.markdown-body table tr {
  background-color: var(--bgColor-default);
  border-top: 1px solid var(--borderColor-muted);
}

.markdown-body table tr:nth-child(2n) {
  background-color: var(--bgColor-muted);
}

.markdown-body table img {
  background-color: transparent;
}

.markdown-body img[align=right] {
  padding-left: 20px;
}

.markdown-body img[align=left] {
  padding-right: 20px;
}

.markdown-body .emoji {
  max-width: none;
  vertical-align: text-top;
  background-color: transparent;
}

.markdown-body span.frame {
  display: block;
  overflow: hidden;
}

.markdown-body span.frame>span {
  display: block;
  float: left;
  width: auto;
  padding: 7px;
  margin: 13px 0 0;
  overflow: hidden;
  border: 1px solid var(--borderColor-default);
}

.markdown-body span.frame span img {
  display: block;
  float: left;
}

.markdown-body span.frame span span {
  display: block;
  padding: 5px 0 0;
  clear: both;
  color: var(--fgColor-default);
}

.markdown-body span.align-center {
  display: block;
  overflow: hidden;
  clear: both;
}

.markdown-body span.align-center>span {
  display: block;
  margin: 13px auto 0;
  overflow: hidden;
  text-align: center;
}

.markdown-body span.align-center span img {
  margin: 0 auto;
  text-align: center;
}

.markdown-body span.align-right {
  display: block;
  overflow: hidden;
  clear: both;
}

.markdown-body span.align-right>span {
  display: block;
  margin: 13px 0 0;
  overflow: hidden;
  text-align: right;
}

.markdown-body span.align-right span img {
  margin: 0;
  text-align: right;
}

.markdown-body span.float-left {
  display: block;
  float: left;
  margin-right: 13px;
  overflow: hidden;
}

.markdown-body span.float-left span {
  margin: 13px 0 0;
}

.markdown-body span.float-right {
  display: block;
  float: right;
  margin-left: 13px;
  overflow: hidden;
}

.markdown-body span.float-right>span {
  display: block;
  margin: 13px auto 0;
  overflow: hidden;
  text-align: right;
}

.markdown-body code,
.markdown-body tt {
  padding: .2em .4em;
  margin: 0;
  font-size: 85%;
  white-space: break-spaces;
  background-color: var(--bgColor-neutral-muted);
  border-radius: 6px;
}

.markdown-body code br,
.markdown-body tt br {
  display: none;
}

.markdown-body del code {
  text-decoration: inherit;
}

.markdown-body samp {
  font-size: 85%;
}

.markdown-body pre code {
  font-size: 100%;
}

.markdown-body pre>code {
  padding: 0;
  margin: 0;
  word-break: normal;
  white-space: pre;
  background: transparent;
  border: 0;
}

.markdown-body .highlight {
  margin-bottom: var(--base-size-16);
}

.markdown-body .highlight pre {
  margin-bottom: 0;
  word-break: normal;
}

.markdown-body .highlight pre,
.markdown-body pre {
  padding: var(--base-size-16);
  overflow: auto;
  font-size: 85%;
  line-height: 1.45;
  color: var(--fgColor-default);
  background-color: var(--bgColor-muted);
  border-radius: 6px;
}

.markdown-body pre code,
.markdown-body pre tt {
  display: inline;
  max-width: auto;
  padding: 0;
  margin: 0;
  overflow: visible;
  line-height: inherit;
  word-wrap: normal;
  background-color: transparent;
  border: 0;
}

.markdown-body .csv-data td,
.markdown-body .csv-data th {
  padding: 5px;
  overflow: hidden;
  font-size: 12px;
  line-height: 1;
  text-align: left;
  white-space: nowrap;
}

.markdown-body .csv-data .blob-num {
  padding: 10px var(--base-size-8) 9px;
  text-align: right;
  background: var(--bgColor-default);
  border: 0;
}

.markdown-body .csv-data tr {
  border-top: 0;
}

.markdown-body .csv-data th {
  font-weight: var(--base-text-weight-semibold, 600);
  background: var(--bgColor-muted);
  border-top: 0;
}

.markdown-body [data-footnote-ref]::before {
  content: "[";
}

.markdown-body [data-footnote-ref]::after {
  content: "]";
}

.markdown-body .footnotes {
  font-size: 12px;
  color: var(--fgColor-muted);
  border-top: 1px solid var(--borderColor-default);
}

.markdown-body .footnotes ol {
  padding-left: var(--base-size-16);
}

.markdown-body .footnotes ol ul {
  display: inline-block;
  padding-left: var(--base-size-16);
  margin-top: var(--base-size-16);
}

.markdown-body .footnotes li {
  position: relative;
}

.markdown-body .footnotes li:target::before {
  position: absolute;
  top: calc(var(--base-size-8)*-1);
  right: calc(var(--base-size-8)*-1);
  bottom: calc(var(--base-size-8)*-1);
  left: calc(var(--base-size-24)*-1);
  pointer-events: none;
  content: "";
  border: 2px solid var(--borderColor-accent-emphasis);
  border-radius: 6px;
}

.markdown-body .footnotes li:target {
  color: var(--fgColor-default);
}

.markdown-body .footnotes .data-footnote-backref g-emoji {
  font-family: monospace;
}

.markdown-body .pl-c {
  color: var(--color-prettylights-syntax-comment);
}

.markdown-body .pl-c1,
.markdown-body .pl-s .pl-v {
  color: var(--color-prettylights-syntax-constant);
}

.markdown-body .pl-e,
.markdown-body .pl-en {
  color: var(--color-prettylights-syntax-entity);
}

.markdown-body .pl-smi,
.markdown-body .pl-s .pl-s1 {
  color: var(--color-prettylights-syntax-storage-modifier-import);
}

.markdown-body .pl-ent {
  color: var(--color-prettylights-syntax-entity-tag);
}

.markdown-body .pl-k {
  color: var(--color-prettylights-syntax-keyword);
}

.markdown-body .pl-s,
.markdown-body .pl-pds,
.markdown-body .pl-s .pl-pse .pl-s1,
.markdown-body .pl-sr,
.markdown-body .pl-sr .pl-cce,
.markdown-body .pl-sr .pl-sre,
.markdown-body .pl-sr .pl-sra {
  color: var(--color-prettylights-syntax-string);
}

.markdown-body .pl-v,
.markdown-body .pl-smw {
  color: var(--color-prettylights-syntax-variable);
}

.markdown-body .pl-bu {
  color: var(--color-prettylights-syntax-brackethighlighter-unmatched);
}

.markdown-body .pl-ii {
  color: var(--color-prettylights-syntax-invalid-illegal-text);
  background-color: var(--color-prettylights-syntax-invalid-illegal-bg);
}

.markdown-body .pl-c2 {
  color: var(--color-prettylights-syntax-carriage-return-text);
  background-color: var(--color-prettylights-syntax-carriage-return-bg);
}

.markdown-body .pl-sr .pl-cce {
  font-weight: bold;
  color: var(--color-prettylights-syntax-string-regexp);
}

.markdown-body .pl-ml {
  color: var(--color-prettylights-syntax-markup-list);
}

.markdown-body .pl-mh,
.markdown-body .pl-mh .pl-en,
.markdown-body .pl-ms {
  font-weight: bold;
  color: var(--color-prettylights-syntax-markup-heading);
}

.markdown-body .pl-mi {
  font-style: italic;
  color: var(--color-prettylights-syntax-markup-italic);
}

.markdown-body .pl-mb {
  font-weight: bold;
  color: var(--color-prettylights-syntax-markup-bold);
}

.markdown-body .pl-md {
  color: var(--color-prettylights-syntax-markup-deleted-text);
  background-color: var(--color-prettylights-syntax-markup-deleted-bg);
}

.markdown-body .pl-mi1 {
  color: var(--color-prettylights-syntax-markup-inserted-text);
  background-color: var(--color-prettylights-syntax-markup-inserted-bg);
}

.markdown-body .pl-mc {
  color: var(--color-prettylights-syntax-markup-changed-text);
  background-color: var(--color-prettylights-syntax-markup-changed-bg);
}

.markdown-body .pl-mi2 {
  color: var(--color-prettylights-syntax-markup-ignored-text);
  background-color: var(--color-prettylights-syntax-markup-ignored-bg);
}

.markdown-body .pl-mdr {
  font-weight: bold;
  color: var(--color-prettylights-syntax-meta-diff-range);
}

.markdown-body .pl-ba {
  color: var(--color-prettylights-syntax-brackethighlighter-angle);
}

.markdown-body .pl-sg {
  color: var(--color-prettylights-syntax-sublimelinter-gutter-mark);
}

.markdown-body .pl-corl {
  text-decoration: underline;
  color: var(--color-prettylights-syntax-constant-other-reference-link);
}

.markdown-body [role=button]:focus:not(:focus-visible),
.markdown-body [role=tabpanel][tabindex="0"]:focus:not(:focus-visible),
.markdown-body button:focus:not(:focus-visible),
.markdown-body summary:focus:not(:focus-visible),
.markdown-body a:focus:not(:focus-visible) {
  outline: none;
  box-shadow: none;
}

.markdown-body [tabindex="0"]:focus:not(:focus-visible),
.markdown-body details-dialog:focus:not(:focus-visible) {
  outline: none;
}

.markdown-body g-emoji {
  display: inline-block;
  min-width: 1ch;
  font-family: "Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 1em;
  font-style: normal !important;
  font-weight: var(--base-text-weight-normal, 400);
  line-height: 1;
  vertical-align: -0.075em;
}

.markdown-body g-emoji img {
  width: 1em;
  height: 1em;
}

.markdown-body .task-list-item {
  list-style-type: none;
}

.markdown-body .task-list-item label {
  font-weight: var(--base-text-weight-normal, 400);
}

.markdown-body .task-list-item.enabled label {
  cursor: pointer;
}

.markdown-body .task-list-item+.task-list-item {
  margin-top: var(--base-size-4);
}

.markdown-body .task-list-item .handle {
  display: none;
}

.markdown-body .task-list-item-checkbox {
  margin: 0 .2em .25em -1.4em;
  vertical-align: middle;
}

.markdown-body ul:dir(rtl) .task-list-item-checkbox {
  margin: 0 -1.6em .25em .2em;
}

.markdown-body ol:dir(rtl) .task-list-item-checkbox {
  margin: 0 -1.6em .25em .2em;
}

.markdown-body .contains-task-list:hover .task-list-item-convert-container,
.markdown-body .contains-task-list:focus-within .task-list-item-convert-container {
  display: block;
  width: auto;
  height: 24px;
  overflow: visible;
  clip: auto;
}

.markdown-body ::-webkit-calendar-picker-indicator {
  filter: invert(50%);
}

.markdown-body .markdown-alert {
  padding: var(--base-size-8) var(--base-size-16);
  margin-bottom: var(--base-size-16);
  color: inherit;
  border-left: .25em solid var(--borderColor-default);
}

.markdown-body .markdown-alert>:first-child {
  margin-top: 0;
}

.markdown-body .markdown-alert>:last-child {
  margin-bottom: 0;
}

.markdown-body .markdown-alert .markdown-alert-title {
  display: flex;
  font-weight: var(--base-text-weight-medium, 500);
  align-items: center;
  line-height: 1;
}

.markdown-body .markdown-alert.markdown-alert-note {
  border-left-color: var(--borderColor-accent-emphasis);
}

.markdown-body .markdown-alert.markdown-alert-note .markdown-alert-title {
  color: var(--fgColor-accent);
}

.markdown-body .markdown-alert.markdown-alert-important {
  border-left-color: var(--borderColor-done-emphasis);
}

.markdown-body .markdown-alert.markdown-alert-important .markdown-alert-title {
  color: var(--fgColor-done);
}

.markdown-body .markdown-alert.markdown-alert-warning {
  border-left-color: var(--borderColor-attention-emphasis);
}

.markdown-body .markdown-alert.markdown-alert-warning .markdown-alert-title {
  color: var(--fgColor-attention);
}

.markdown-body .markdown-alert.markdown-alert-tip {
  border-left-color: var(--borderColor-success-emphasis);
}

.markdown-body .markdown-alert.markdown-alert-tip .markdown-alert-title {
  color: var(--fgColor-success);
}

.markdown-body .markdown-alert.markdown-alert-caution {
  border-left-color: var(--borderColor-danger-emphasis);
}

.markdown-body .markdown-alert.markdown-alert-caution .markdown-alert-title {
  color: var(--fgColor-danger);
}

.markdown-body>*:first-child>.heading-element:first-child {
  margin-top: 0 !important;
}

`;import rn from"react";import{useEffect as ef}from"react";import tn from"react";import U from"react";import{useCallback as bt}from"react";import{create as Js}from"zustand";var Qs=Js(e=>({endpoint:"",token:"",namespace:"",initialize:(t,n,r)=>e(o=>({endpoint:t,token:n,namespace:r})),urlStateKey:"",setUrlStateKey:t=>e(n=>({urlStateKey:t})),pluginDefinitions:[],modifyPluginDefinitions:t=>e(n=>{let r=[...n.pluginDefinitions];return t.forEach(o=>{let a=r.findIndex(i=>i.metadata.name===o.metadata.name);a>=0?r[a]=o:r.push(o)}),{pluginDefinitions:r}}),deletePluginDefinitions:t=>e(n=>({pluginDefinitions:n.pluginDefinitions.filter(o=>!t.some(a=>o.metadata.name===a.metadata.name))})),showPluginDefinitionDetails:!1,setShowPluginDefinitionDetails:t=>e(n=>({...n,showPluginDefinitionDetails:t})),pluginDefinitionDetail:null,setPluginDefinitionDetail:t=>e(n=>({pluginDefinitionDetail:t})),showEditForm:!1,setShowEditForm:t=>e(n=>({showEditForm:t})),editFormState:0,setEditFormState:t=>e(n=>({editFormState:t})),pluginToEdit:void 0,setPluginToEdit:t=>e(n=>({pluginToEdit:t})),editFormData:{metadata:void 0,spec:void 0,labelSelector:void 0},setEditFormData:t=>e(n=>({editFormData:t})),isFormEditMode:!1,setIsFormEditMode:t=>e(n=>({isFormEditMode:t})),isFormPluginPresetMode:!1,setIsFormPluginPresetMode:t=>e(n=>({isFormPluginPresetMode:t})),isPluginEditMode:!1,setIsPluginEditMode:t=>e(n=>({isPluginEditMode:t})),secrets:[],modifySecrets:t=>e(n=>{let r=[...n.secrets];return t.forEach(o=>{let a=r.findIndex(i=>i.metadata.name===o.metadata.name);a>=0?r[a]=o:r.push(o)}),{...n,secrets:r}}),deleteSecrets:t=>e(n=>({secrets:n.secrets.filter(o=>!t.some(a=>o.metadata.name===a.metadata.name))})),secretDetail:void 0,setSecretDetail:t=>e(n=>({secretDetail:t})),showSecretEdit:!1,setShowSecretEdit:t=>e(n=>({showSecretEdit:t})),isSecretEditMode:!1,setIsSecretEditMode:t=>e(n=>({isSecretEditMode:t}))})),F=Qs;var Ys=()=>{let e=F(r=>r.endpoint),t=F(r=>r.token);return{client:e&&t&&dn({apiEndpoint:e,token:t})}},Ue=Ys;var Xs=e=>{let t=F(d=>d.namespace),{client:n}=Ue(),r=e??!1,o=bt(async(d,m,p)=>{let f;return!n||!t?{ok:!1,message:"Client or namespace not available"}:await n.get(d+"/"+m.metadata.name,{params:p}).then(y=>y.kind!==m.kind?(r&&console.log(`ERROR: Failed to get ${m.kind}, did not get ${m.kind}: ${JSON.stringify(y)}`),{ok:!1,message:`Failed getting ${m.kind}`,response:y}):{ok:!0,response:y,message:`Successfully got ${m.kind}`}).catch(y=>(r&&console.log(`ERROR: Failed to get ${m.kind}`,y),{ok:!1,message:`Failed getting ${m.kind}: ${y}`}))},[n,t]),a=bt(async(d,m)=>!n||!t?{ok:!1,message:"Client or namespace not available"}:await n.post(d,m).then(p=>p.kind!==m.kind?(r&&console.log(`ERROR: Failed to create ${m.kind}, did not get ${m.kind}: ${JSON.stringify(p)}`),{ok:!1,message:`Failed creating ${m.kind}`}):{ok:!0,response:p,message:`Successfully created ${m.kind}`}).catch(p=>(r&&console.log(`ERROR: Failed to create ${m.kind}`,p),{ok:!1,message:`Failed creating ${m.kind}: ${p}`})),[n,t]),i=bt(async(d,m)=>!n||!t?{ok:!1,message:"Client or namespace not available"}:await n.put(d+"/"+m.metadata.name,m).then(p=>p.kind!==m.kind?(r&&console.log(`ERROR: Failed to update ${m.kind}, did not get ${m.kind}: ${JSON.stringify(p)}`),{ok:!1,message:`Failed updating ${m.kind}`}):{ok:!0,response:p,message:`Successfully updated ${m.kind}`}).catch(p=>(r&&console.log(`ERROR: Failed to update ${m.kind}`,p),{ok:!1,message:`Failed updating ${m.kind}: ${p}`})),[n,t]),l=bt(async(d,m,p)=>!n||!t?{ok:!1,message:"Client or namespace not available"}:await n.delete(d+"/"+m.metadata.name,{params:p}).then(f=>f.kind==m.kind||f.kind=="Status"&&f.status=="Success"?{ok:!0,message:`Successfully deleted ${m.kind}`}:(r&&console.log(`ERROR: Failed to delete ${m.kind} did not get ${m.kind}: ${JSON.stringify(f)}`),{ok:!1,message:`Failed deleting ${m.kind}`})).catch(f=>(r&&console.log(`ERROR: Failed to delete ${m.kind}`,f),{ok:!1,message:`Failed deleting ${m.kind}: ${f}`})),[n,t]),s=bt(async(d,m,p,f,y,b)=>!n||!t?(console.log("Cannot initialize watch: client or namespace not available, waiting for client or namespace to become available"),{ok:!1,message:"Client or namespace not available"}):c(d,m).then(k=>k.ok?(n.watch(d,{params:b}).on(n.WATCH_ERROR,()=>{console.log("ERROR: Failed to watch resource")}).on(n.WATCH_ADDED,S=>{console.log(`added ${S}`),u(S,m),p(S)}).on(n.WATCH_MODIFIED,S=>{console.log(`modified ${S}`),u(S,m),f(S)}).on(n.WATCH_DELETED,S=>{console.log(`deleted ${S}`),u(S,m),y(S)}).start(),{ok:!0,message:`Successfully watching ${m}s`}):{ok:!1,message:`Cannot initialize watch for ${m}: ${k.message}`,status:403}),[n,t]),u=(d,m)=>{d.forEach(p=>{p.kind=m})},c=bt(async(d,m)=>{let f=await o(d,{metadata:{name:""},kind:m});return f.response?.kind==`${m}List`?{ok:!0,message:""}:{ok:f.ok,message:f.message}},[n,t]);return{get:o,create:a,update:i,deleteObject:l,watch:s}},Ve=Xs;import{useCallback as Zs}from"react";var eu=()=>{let{get:e,create:t,update:n,deleteObject:r}=Ve(),o=F(d=>d.namespace),{client:a}=Ue(),i=d=>e(`/apis/greenhouse.sap/v1alpha1/namespaces/${o}/plugins`,d),l=d=>t(`/apis/greenhouse.sap/v1alpha1/namespaces/${o}/plugins`,d),s=d=>n(`/apis/greenhouse.sap/v1alpha1/namespaces/${o}/plugins`,d),u=d=>r(`/apis/greenhouse.sap/v1alpha1/namespaces/${o}/plugins`,d),c=Zs(async(d,m)=>{let p=[];if(!a||!o)return p;let f=`${d}=${m}`;return p=await a.get(`/apis/greenhouse.sap/v1alpha1/namespaces/${o}/plugins`,{params:{labelSelector:f}}).then(y=>y.kind!=="PluginList"?(console.log("ERROR: Failed to get Plugins, did not get PluginList"),[]):y.items),p},[a,o]);return{getPlugin:i,createPlugin:l,updatePlugin:s,deletePlugin:u,getPluginsByLabelSelector:c}},mn=eu;var tu=()=>{let{get:e,create:t,update:n,deleteObject:r}=Ve(),o=F(c=>c.namespace),{client:a}=Ue();return{getPluginPreset:c=>e(`/apis/greenhouse.sap/v1alpha1/namespaces/${o}/pluginpresets`,c),createPluginPreset:c=>t(`/apis/greenhouse.sap/v1alpha1/namespaces/${o}/pluginpresets`,c),updatePluginPreset:c=>n(`/apis/greenhouse.sap/v1alpha1/namespaces/${o}/pluginpresets`,c),deletePluginPreset:c=>r(`/apis/greenhouse.sap/v1alpha1/namespaces/${o}/pluginpresets`,c)}},vi=tu;import au,{createContext as lu,useContext as su}from"react";import{useStore as uu}from"zustand";import{createStore as ou}from"zustand";import{devtools as iu}from"zustand/middleware";var nu=e=>({globals:{urlStateKey:"",apiEndpoint:null,token:"",namespace:"",showDefinitionPanel:!1,panel:null,actions:{initialize:(t,n,r)=>e(o=>({globals:{...o.globals,apiEndpoint:t,token:n,namespace:r}})),setUrlStateKey:t=>e(n=>({globals:{...n.globals,urlStateKey:t}})),setPanel:t=>e(n=>({globals:{...n.globals,panel:t}})),setEndpoint:t=>e(n=>({globals:{...n.globals,apiEndpoint:t}})),setShowDefinitionPanel:t=>e(n=>({globals:{...n.globals,showDefinitionPanel:t}}))}}}),Si=nu;function sr(e){return e.sort((t,n)=>t?.spec?.disabled&&!n?.spec?.disabled?1:!t?.spec?.disabled&&n?.spec?.disabled?-1:t?.metadata?.uid.localeCompare(n?.metadata?.uid))}function ur(e){return e.filter((t,n,r)=>r.indexOf(t)===n)}var ru=(e,t)=>({plugin:{pluginConfig:null,showDetailsFor:null,actions:{setPluginConfig:n=>{let r=n.sort((o,a)=>o?.disabled&&!a?.disabled?1:!o?.disabled&&a?.disabled?-1:o.id.localeCompare(a.id));e(o=>({plugin:{...o.plugin,pluginConfig:r}}))},addPluginConfigItems:n=>{let r=(t().plugin.pluginConfig||[]).slice(),o=ur([...r,...n]);o=sr(o),e(a=>({plugin:{...a.plugin,pluginConfig:o}}))},modifyPluginConfigItems:n=>{let o=(t().plugin.pluginConfig||[]).slice().map(i=>n.find(s=>s.metadata.uid===i.metadata.uid)||i),a=ur(o);a=sr(o),e(i=>({plugin:{...i.plugin,pluginConfig:a}}))},deletePluginConfigItems:n=>{let o=(t().plugin.pluginConfig||[]).slice().filter(i=>!n.find(l=>l.metadata.uid===i.metadata.uid)),a=ur(o);a=sr(o),e(i=>({plugin:{...i.plugin,pluginConfig:a}}))},setShowDetailsFor:n=>e(r=>({plugin:{...r.plugin,showDetailsFor:n}}))}}}),Pi=ru;var Ci=()=>ou(iu((e,t)=>({...Si(e,t),...Pi(e,t)})));var Di=lu(),cu=({children:e})=>au.createElement(Di.Provider,{value:Ci()},e),Ge=e=>uu(su(Di),e);var Ei=()=>Ge(e=>e.globals.apiEndpoint),Ii=()=>Ge(e=>e.globals.namespace),Ai=()=>Ge(e=>e.globals.token);var pn=()=>Ge(e=>e.globals.panel),le=()=>Ge(e=>e.globals.actions),fn=()=>Ge(e=>e.plugin.pluginConfig),kt=()=>Ge(e=>e.plugin.showDetailsFor),qe=()=>Ge(e=>e.plugin.actions),Ti=cu;import tt from"react";var du=e=>{let t=e.dataName?e.dataName:"Data",n=e.isSecret?e.isSecret:!1,r=(i,l)=>{let s=i.split("."),u=s[0],c=s[1];switch(u){case"dataKey":let d={...e.data},m=d[c];delete d[c],d[l]=m,e.setData(d);break;case"dataValue":e.mutateValue&&(l=e.mutateValue(l)),e.setData({...e.data,[c]:l});break;default:console.log("keyIdentifier not found");break}},o=i=>{let l={...e.data};delete l[i],e.setData(l)},a=()=>{e.setData({...e.data,"":""})};return tt.createElement(Ft,{title:e.title},e.data&&Object.keys(e.data).length>0&&Object.keys(e.data).map((i,l)=>tt.createElement(Ie,{key:l},tt.createElement(li,null,tt.createElement(Re,{id:"dataKey."+i,label:`${t} Key`,value:i,onBlur:s=>r("dataKey."+i,s.target.value)}),tt.createElement(Re,{id:"dataValue"+i,type:n?"password":"text",label:`${t} Value`,value:e.data[i],onBlur:s=>r("dataValue."+i,s.target.value)}),tt.createElement(ke,{icon:"deleteForever",onClick:()=>o(i)})))),tt.createElement(ke,{icon:"addCircle",label:`Add ${t}`,onClick:a}))},Fi=du;import cr,{useEffect as mu}from"react";var pu=e=>{let{client:t}=Ue(),n=F(i=>i.namespace),[r,o]=cr.useState([]);mu(()=>{if(!t||!n)return;(async()=>{try{let l=await t.get(`/apis/greenhouse.sap/v1alpha1/namespaces/${n}/clusters`,{});if(l.kind!=="ClusterList")console.debug("ERROR: Failed to get Clusters");else{let s=l.items;JSON.stringify(s)!==JSON.stringify(r)&&o(s)}}catch(l){console.error("Error fetching clusters:",l)}})()},[t,n]);let a=i=>{let l={target:{value:i,id:e.id,type:"cluster-select"}};e.onChange&&e.onChange(l)};return cr.createElement(zt,{id:e.id,placeholder:e.placeholder,label:e.label,defaultValue:e.defaultValue,onChange:a},r.map(i=>cr.createElement(Lt,{key:i.metadata.name,value:i.metadata.name})))},zi=pu;import hn from"react";import Mt from"react";var fu=e=>{let t=F(u=>u.secrets),n=e.value?.secret?.name??"",r=t.find(u=>u.metadata.name===n),o=e.value?.secret?.key!=null&&r!=null&&r.data[e.value.secret.key]!=null?e.value?.secret?.key:"",a={secret:{name:n,key:o}},i=u=>{a.secret.name=u,s(a)},l=u=>{a.secret.key=u,s(a)},s=u=>{let c={target:{value:JSON.stringify(u),id:e.id,type:"secret-select"}};e.onChange&&e.onChange(c)};return Mt.createElement(xe,null,Mt.createElement(zt,{id:e.id+"-name",label:e.label,required:e.required,helptext:"Select secret",value:n,onChange:i},t.map(u=>Mt.createElement(Lt,{key:u.metadata.name,value:u.metadata.name}))),Mt.createElement(zt,{disabled:!n,id:e.id+"-key",label:e.label,required:e.required,helptext:"Select secret data key",value:o,onChange:l},r&&Object.keys(r.data).map(u=>Mt.createElement(Lt,{key:u,value:u},u))))},Li=fu;import{useState as Mi}from"react";var Oi=e=>{let[t,n]=Mi(!0),[r,o]=Mi(""),a=p=>{let f;try{f=JSON.parse(p)}catch{n(!1),o("Invalid JSON");return}n(!0),o("")},i=p=>{e.onChange&&e.onChange(p)},l="optionValues."+e.pluginDefinitionOption.name,s=(e.pluginDefinitionOption.displayName??e.pluginDefinitionOption.name)+` (${e.pluginDefinitionOption.type})`,u=e.pluginDefinitionOption.required,c=e.pluginOptionValue?.value,d=e.pluginOptionValue?.valueFrom,m="text";switch(e.pluginDefinitionOption.type){case"bool":return hn.createElement(oi,{id:l,label:s,required:u,checked:c,onBlur:i});case"list":case"map":return hn.createElement(fi,{id:l,label:s,invalid:!t,errortext:r,required:u,value:JSON.stringify(c),onChange:p=>a(p.target.value),onBlur:i});case"secret":return hn.createElement(Li,{id:l,label:s,required:u,value:d,onChange:i});case"int":m="number";break}return hn.createElement(Re,{id:l,type:m,label:s,value:c,required:u,onBlur:i})};import hu from"react";var gu=e=>(e.submitMessage.variant||(e.submitMessage.variant=e.submitMessage.ok?"success":"error"),hu.createElement(ui,{dismissible:!0,onDismiss:e.onMessageDismiss,variant:e.submitMessage.variant,text:e.submitMessage.message})),Ni=gu;var bu=(e,t)=>{let n,r;if(e.target?.type==null)throw new Error("Unexpected form change event: "+JSON.stringify(e));let o=e.target.id.split(".").slice(1).join(".");switch(e.target.type){case"checkbox":n=e.target.checked;break;case"number":n=parseInt(e.target.value);break;case"textarea":n=JSON.parse(e.target.value);break;case"secret-select":r=JSON.parse(e.target.value);break;default:n=e.target.value;break}if(e.target.id.startsWith("metadata."))return{...t,metadata:{...t.metadata,[o]:n}};if(e.target.id.startsWith("spec."))return{...t,spec:{...t.spec,[o]:n}};if(e.target.id.startsWith("optionValues.")){let a=!1,i={name:o};n!=null&&(i.value=n),r!=null&&(i.valueFrom=r);let l;return l={...t,spec:{...t.spec,optionValues:t.spec.optionValues.map(s=>s.name==i.name?(a=!0,i):s)}},a||(l={...t,spec:{...t.spec,optionValues:[...t.spec.optionValues,i]}}),l}return t},Ri=bu;var dr=e=>({metadata:e.metadata,kind:"Plugin",apiVersion:"greenhouse.sap/v1alpha1",spec:e.spec});var _i=e=>({name:e.metadata.name,namespace:"",labels:{}}),Bi=e=>{let t=[],n={pluginDefinition:e.metadata.name,displayName:e.spec?.displayName??e.metadata?.name,clusterName:"",disabled:!1,optionValues:t};return e.spec?.options?.forEach(r=>{r.type!="secret"&&r.default&&n.optionValues.push({name:r.name,value:r.default})}),n};var mr=e=>(e.spec?.clusterName&&delete e.spec.clusterName,{metadata:e.metadata,kind:"PluginPreset",apiVersion:"greenhouse.sap/v1alpha1",spec:{plugin:e.spec,clusterSelector:{matchLabels:e.labelSelector}}});var ku=e=>{let t=F(E=>E.namespace),n=F(E=>E.showEditForm),r=F(E=>E.setShowEditForm),o=F(E=>E.editFormState),a=F(E=>E.setEditFormState),i=o==1||o==3,{setPanel:l}=le(),s=o==2||o==3,u=F(E=>E.editFormData),c=F(E=>E.setEditFormData),{createPlugin:d,updatePlugin:m,deletePlugin:p}=mn(),{getPluginPreset:f,createPluginPreset:y,updatePluginPreset:b,deletePluginPreset:k}=vi(),P=()=>{s?a(i?1:0):u.metadata.labels&&u.metadata.labels["greenhouse.sap/pluginpreset"]?a(3):a(2)},[S,z]=U.useState(!1);U.useEffect(()=>{s&&!u.labelSelector&&c({...u,labelSelector:{"":""}})},[s,u.labelSelector]),U.useEffect(()=>{u.metadata&&u.metadata.labels&&u.metadata.labels["greenhouse.sap/pluginpreset"]&&(q({message:"This Plugin is part of a Preset. You are now editing the Preset!",ok:!1,variant:"warning"}),a(3),f({metadata:{name:u.metadata.labels["greenhouse.sap/pluginpreset"],namespace:t},kind:"PluginPreset"}).then(j=>{j.ok?c({metadata:j.response.metadata,spec:j.response.spec.plugin,labelSelector:j.response.spec.clusterSelector.matchLabels}):(a(2),q({message:"This Plugin seems to be part of a Preset, but the Preset could not be found. You are now creating a new Preset!",ok:!1,variant:"warning"}))}).catch(j=>{q({message:j.message,ok:!1,variant:"error"})}),c({...u,metadata:{...u.metadata,name:u.metadata.labels["greenhouse.sap/pluginpreset"]}}))},[u.metadata?.labels]);let M=s?"Plugin Preset":"Plugin",v=()=>{r(!1)},[B,q]=U.useState({message:"",ok:!1}),$=async()=>{if(s){let E=mr(u),j;o==2?j=y({...E,metadata:{name:E.metadata.name}}):j=b(E),await j.then(async Y=>{q({message:Y.message,ok:Y.ok})})}else{let E=dr(u);await(i?m(E):d({...E,metadata:{name:E.metadata.name}})).then(async Y=>{q({message:Y.message,ok:Y.ok})})}},w=()=>{z(!0)},re=async()=>{if(z(!1),s){let E=await k(mr(u));q({message:E.message,ok:E.ok})}else{let E=await p(dr(u));q({message:E.message,ok:E.ok})}},W=E=>{E&&(r(!1),console.log("I want to open the details for my plugin now :)"))},A=E=>{try{c(Ri(E,u))}catch(j){console.error(j)}},_=E=>{c({...u,labelSelector:E})};return U.createElement(pe,{px:!1,py:!0},B.message!=""&&U.createElement(Ie,null,U.createElement(Ni,{submitMessage:B,onMessageDismiss:()=>W(B.ok)})),u&&!B.ok&&U.createElement(U.Fragment,null,U.createElement(ai,{title:u.spec?.displayName??u.metadata?.name},U.createElement(Ft,{title:"General"},U.createElement(Ie,null,U.createElement(mi,{id:"switch-plugin-preset",label:"Make Plugin Preset",on:s,onChange:P,onClick:P})),U.createElement(Ie,null,U.createElement(Re,{id:"spec.displayName",label:"Display Name",placeholder:"The Display Name for this Plugin Instance",value:u?.spec?.displayName,onBlur:A})),U.createElement(Ie,null,U.createElement(Re,{id:"metadata.name",label:"Name",placeholder:"Name of this Plugin Instance",...i&&{disabled:!0},value:u.metadata?.name,onBlur:A})),U.createElement(Ie,null,s&&U.createElement(Fi,{data:u.labelSelector,setData:_,title:"Cluster Label Selector",dataName:"Label"}),!s&&U.createElement(zi,{id:"spec.clusterName",placeholder:"The Cluster this Plugin is to be deployed to.",label:"Cluster",defaultValue:u.spec?.clusterName,onChange:A})),U.createElement(Ie,null,U.createElement(Re,{id:"spec.releaseNamespace",label:"Release Namespace",placeholder:`The namespace in the remote cluster to which the backend is deployed to. Defaults to ${t}.`,value:u.spec?.releaseNamespace,onBlur:A}))),e.pluginDefinition.spec?.options?.length&&U.createElement(Ft,{title:"Options"},e.pluginDefinition.spec?.options?.map((E,j)=>{let Y=u.spec?.optionValues?.find(he=>he.name==E.name);return U.createElement(Ie,{key:j},U.createElement("p",{style:{color:"text-theme-light"}},E.description),U.createElement(Oi,{pluginDefinitionOption:E,pluginOptionValue:Y,onChange:A}))}))),U.createElement(or,null,i?U.createElement(U.Fragment,null,U.createElement(ke,{onClick:w,variant:"primary-danger"},"Delete ",M),S&&U.createElement(ci,{cancelButtonLabel:"Cancel",confirmButtonLabel:"Proceed irreversible deletion",onCancel:()=>z(!1),onConfirm:re,open:!0,title:"Confirmation needed"},U.createElement("p",null,"Proceeding will result in the permanent loss of the plugin."))):U.createElement(U.Fragment,null),U.createElement(ke,{onClick:$,variant:"primary"},i?`Update ${M}`:`Create ${M}`))),B.ok&&U.createElement(or,null,U.createElement(ke,{onClick:()=>l(null)},"Close")))},ji=ku;import G,{useEffect as vs}from"react";function Hi(e,t){let n=t||{};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}var yu=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,wu=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,xu={};function gn(e,t){return((t||xu).jsx?wu:yu).test(e)}var vu=/[ \t\n\f\r]/g;function fr(e){return typeof e=="object"?e.type==="text"?Ui(e.value):!1:Ui(e)}function Ui(e){return e.replace(vu,"")===""}var _e=class{constructor(t,n,r){this.property=t,this.normal=n,r&&(this.space=r)}};_e.prototype.property={};_e.prototype.normal={};_e.prototype.space=null;function hr(e,t){let n={},r={},o=-1;for(;++o<e.length;)Object.assign(n,e[o].property),Object.assign(r,e[o].normal);return new _e(n,r,t)}function Ot(e){return e.toLowerCase()}var ue=class{constructor(t,n){this.property=t,this.attribute=n}};ue.prototype.space=null;ue.prototype.boolean=!1;ue.prototype.booleanish=!1;ue.prototype.overloadedBoolean=!1;ue.prototype.number=!1;ue.prototype.commaSeparated=!1;ue.prototype.spaceSeparated=!1;ue.prototype.commaOrSpaceSeparated=!1;ue.prototype.mustUseProperty=!1;ue.prototype.defined=!1;var Nt={};ei(Nt,{boolean:()=>N,booleanish:()=>ee,commaOrSpaceSeparated:()=>fe,commaSeparated:()=>$e,number:()=>C,overloadedBoolean:()=>gr,spaceSeparated:()=>Q});var Su=0,N=nt(),ee=nt(),gr=nt(),C=nt(),Q=nt(),$e=nt(),fe=nt();function nt(){return 2**++Su}var br=Object.keys(Nt),rt=class extends ue{constructor(t,n,r,o){let a=-1;if(super(t,n),Vi(this,"space",o),typeof r=="number")for(;++a<br.length;){let i=br[a];Vi(this,br[a],(r&Nt[i])===Nt[i])}}};rt.prototype.defined=!0;function Vi(e,t,n){n&&(e[t]=n)}var Pu={}.hasOwnProperty;function ve(e){let t={},n={},r;for(r in e.properties)if(Pu.call(e.properties,r)){let o=e.properties[r],a=new rt(r,e.transform(e.attributes||{},r),o,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(a.mustUseProperty=!0),t[r]=a,n[Ot(r)]=r,n[Ot(a.attribute)]=r}return new _e(t,n,e.space)}var kr=ve({space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}});var yr=ve({space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function bn(e,t){return t in e?e[t]:t}function kn(e,t){return bn(e,t.toLowerCase())}var wr=ve({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:kn,properties:{xmlns:null,xmlnsXLink:null}});var xr=ve({transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:ee,ariaAutoComplete:null,ariaBusy:ee,ariaChecked:ee,ariaColCount:C,ariaColIndex:C,ariaColSpan:C,ariaControls:Q,ariaCurrent:null,ariaDescribedBy:Q,ariaDetails:null,ariaDisabled:ee,ariaDropEffect:Q,ariaErrorMessage:null,ariaExpanded:ee,ariaFlowTo:Q,ariaGrabbed:ee,ariaHasPopup:null,ariaHidden:ee,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Q,ariaLevel:C,ariaLive:null,ariaModal:ee,ariaMultiLine:ee,ariaMultiSelectable:ee,ariaOrientation:null,ariaOwns:Q,ariaPlaceholder:null,ariaPosInSet:C,ariaPressed:ee,ariaReadOnly:ee,ariaRelevant:null,ariaRequired:ee,ariaRoleDescription:Q,ariaRowCount:C,ariaRowIndex:C,ariaRowSpan:C,ariaSelected:ee,ariaSetSize:C,ariaSort:null,ariaValueMax:C,ariaValueMin:C,ariaValueNow:C,ariaValueText:null,role:null}});var Gi=ve({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:kn,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:$e,acceptCharset:Q,accessKey:Q,action:null,allow:null,allowFullScreen:N,allowPaymentRequest:N,allowUserMedia:N,alt:null,as:null,async:N,autoCapitalize:null,autoComplete:Q,autoFocus:N,autoPlay:N,blocking:Q,capture:null,charSet:null,checked:N,cite:null,className:Q,cols:C,colSpan:null,content:null,contentEditable:ee,controls:N,controlsList:Q,coords:C|$e,crossOrigin:null,data:null,dateTime:null,decoding:null,default:N,defer:N,dir:null,dirName:null,disabled:N,download:gr,draggable:ee,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:N,formTarget:null,headers:Q,height:C,hidden:N,high:C,href:null,hrefLang:null,htmlFor:Q,httpEquiv:Q,id:null,imageSizes:null,imageSrcSet:null,inert:N,inputMode:null,integrity:null,is:null,isMap:N,itemId:null,itemProp:Q,itemRef:Q,itemScope:N,itemType:Q,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:N,low:C,manifest:null,max:null,maxLength:C,media:null,method:null,min:null,minLength:C,multiple:N,muted:N,name:null,nonce:null,noModule:N,noValidate:N,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:N,optimum:C,pattern:null,ping:Q,placeholder:null,playsInline:N,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:N,referrerPolicy:null,rel:Q,required:N,reversed:N,rows:C,rowSpan:C,sandbox:Q,scope:null,scoped:N,seamless:N,selected:N,shadowRootClonable:N,shadowRootDelegatesFocus:N,shadowRootMode:null,shape:null,size:C,sizes:null,slot:null,span:C,spellCheck:ee,src:null,srcDoc:null,srcLang:null,srcSet:null,start:C,step:null,style:null,tabIndex:C,target:null,title:null,translate:null,type:null,typeMustMatch:N,useMap:null,value:ee,width:C,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Q,axis:null,background:null,bgColor:null,border:C,borderColor:null,bottomMargin:C,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:N,declare:N,event:null,face:null,frame:null,frameBorder:null,hSpace:C,leftMargin:C,link:null,longDesc:null,lowSrc:null,marginHeight:C,marginWidth:C,noResize:N,noHref:N,noShade:N,noWrap:N,object:null,profile:null,prompt:null,rev:null,rightMargin:C,rules:null,scheme:null,scrolling:ee,standby:null,summary:null,text:null,topMargin:C,valueType:null,version:null,vAlign:null,vLink:null,vSpace:C,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:N,disableRemotePlayback:N,prefix:null,property:null,results:C,security:null,unselectable:null}});var qi=ve({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:bn,properties:{about:fe,accentHeight:C,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:C,amplitude:C,arabicForm:null,ascent:C,attributeName:null,attributeType:null,azimuth:C,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:C,by:null,calcMode:null,capHeight:C,className:Q,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:C,diffuseConstant:C,direction:null,display:null,dur:null,divisor:C,dominantBaseline:null,download:N,dx:null,dy:null,edgeMode:null,editable:null,elevation:C,enableBackground:null,end:null,event:null,exponent:C,externalResourcesRequired:null,fill:null,fillOpacity:C,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:$e,g2:$e,glyphName:$e,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:C,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:C,horizOriginX:C,horizOriginY:C,id:null,ideographic:C,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:C,k:C,k1:C,k2:C,k3:C,k4:C,kernelMatrix:fe,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:C,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:C,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:C,overlineThickness:C,paintOrder:null,panose1:null,path:null,pathLength:C,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Q,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:C,pointsAtY:C,pointsAtZ:C,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:fe,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:fe,rev:fe,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:fe,requiredFeatures:fe,requiredFonts:fe,requiredFormats:fe,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:C,specularExponent:C,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:C,strikethroughThickness:C,string:null,stroke:null,strokeDashArray:fe,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:C,strokeOpacity:C,strokeWidth:null,style:null,surfaceScale:C,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:fe,tabIndex:C,tableValues:null,target:null,targetX:C,targetY:C,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:fe,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:C,underlineThickness:C,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:C,values:null,vAlphabetic:C,vMathematical:C,vectorEffect:null,vHanging:C,vIdeographic:C,version:null,vertAdvY:C,vertOriginX:C,vertOriginY:C,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:C,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}});var Cu=/^data[-\w.:]+$/i,$i=/-[a-z]/g,Du=/[A-Z]/g;function vr(e,t){let n=Ot(t),r=t,o=ue;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&Cu.test(t)){if(t.charAt(4)==="-"){let a=t.slice(5).replace($i,Iu);r="data"+a.charAt(0).toUpperCase()+a.slice(1)}else{let a=t.slice(4);if(!$i.test(a)){let i=a.replace(Du,Eu);i.charAt(0)!=="-"&&(i="-"+i),t="data"+i}}o=rt}return new o(r,t)}function Eu(e){return"-"+e.toLowerCase()}function Iu(e){return e.charAt(1).toUpperCase()}var Sr={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"};var Wi=hr([yr,kr,wr,xr,Gi],"html"),yn=hr([yr,kr,wr,xr,qi],"svg");function Ki(e){return e.join(" ").trim()}var Pr=ti(ta(),1),na=Pr.default.default||Pr.default;var wn=ra("end"),yt=ra("start");function ra(e){return t;function t(n){let r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function Cr(e){let t=yt(e),n=wn(e);if(t&&n)return{start:t,end:n}}function We(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?oa(e.position):"start"in e||"end"in e?oa(e):"line"in e||"column"in e?Dr(e):""}function Dr(e){return ia(e&&e.line)+":"+ia(e&&e.column)}function oa(e){return Dr(e&&e.start)+"-"+Dr(e&&e.end)}function ia(e){return e&&typeof e=="number"?e:1}var ne=class extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let o="",a={},i=!1;if(n&&("line"in n&&"column"in n?a={place:n}:"start"in n&&"end"in n?a={place:n}:"type"in n?a={ancestors:[n],place:n.position}:a={...n}),typeof t=="string"?o=t:!a.cause&&t&&(i=!0,o=t.message,a.cause=t),!a.ruleId&&!a.source&&typeof r=="string"){let s=r.indexOf(":");s===-1?a.ruleId=r:(a.source=r.slice(0,s),a.ruleId=r.slice(s+1))}if(!a.place&&a.ancestors&&a.ancestors){let s=a.ancestors[a.ancestors.length-1];s&&(a.place=s.position)}let l=a.place&&"start"in a.place?a.place.start:a.place;this.ancestors=a.ancestors||void 0,this.cause=a.cause||void 0,this.column=l?l.column:void 0,this.fatal=void 0,this.file,this.message=o,this.line=l?l.line:void 0,this.name=We(a.place)||"1:1",this.place=a.place||void 0,this.reason=this.message,this.ruleId=a.ruleId||void 0,this.source=a.source||void 0,this.stack=i&&a.cause&&typeof a.cause.stack=="string"?a.cause.stack:"",this.actual,this.expected,this.note,this.url}};ne.prototype.file="";ne.prototype.name="";ne.prototype.reason="";ne.prototype.message="";ne.prototype.stack="";ne.prototype.column=void 0;ne.prototype.line=void 0;ne.prototype.ancestors=void 0;ne.prototype.cause=void 0;ne.prototype.fatal=void 0;ne.prototype.place=void 0;ne.prototype.ruleId=void 0;ne.prototype.source=void 0;var Er={}.hasOwnProperty,Uu=new Map,Vu=/[A-Z]/g,Gu=/-([a-z])/g,qu=new Set(["table","tbody","thead","tfoot","tr"]),$u=new Set(["td","th"]),aa="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function Ir(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");let n=t.filePath||void 0,r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=ec(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=Zu(n,t.jsx,t.jsxs)}let o={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?yn:Wi,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},a=la(o,e,void 0);return a&&typeof a!="string"?a:o.create(e,o.Fragment,{children:a||void 0},void 0)}function la(e,t,n){if(t.type==="element")return Wu(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return Ku(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return Qu(e,t,n);if(t.type==="mdxjsEsm")return Ju(e,t);if(t.type==="root")return Yu(e,t,n);if(t.type==="text")return Xu(e,t)}function Wu(e,t,n){let r=e.schema,o=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(o=yn,e.schema=o),e.ancestors.push(t);let a=ua(e,t.tagName,!1),i=tc(e,t),l=Tr(e,t);return qu.has(t.tagName)&&(l=l.filter(function(s){return typeof s=="string"?!fr(s):!0})),sa(e,i,a,t),Ar(i,l),e.ancestors.pop(),e.schema=r,e.create(t,a,i,n)}function Ku(e,t){if(t.data&&t.data.estree&&e.evaluater){let r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}_t(e,t.position)}function Ju(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);_t(e,t.position)}function Qu(e,t,n){let r=e.schema,o=r;t.name==="svg"&&r.space==="html"&&(o=yn,e.schema=o),e.ancestors.push(t);let a=t.name===null?e.Fragment:ua(e,t.name,!0),i=nc(e,t),l=Tr(e,t);return sa(e,i,a,t),Ar(i,l),e.ancestors.pop(),e.schema=r,e.create(t,a,i,n)}function Yu(e,t,n){let r={};return Ar(r,Tr(e,t)),e.create(t,e.Fragment,r,n)}function Xu(e,t){return t.value}function sa(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function Ar(e,t){if(t.length>0){let n=t.length>1?t:t[0];n&&(e.children=n)}}function Zu(e,t,n){return r;function r(o,a,i,l){let u=Array.isArray(i.children)?n:t;return l?u(a,i,l):u(a,i)}}function ec(e,t){return n;function n(r,o,a,i){let l=Array.isArray(a.children),s=yt(r);return t(o,a,i,l,{columnNumber:s?s.column-1:void 0,fileName:e,lineNumber:s?s.line:void 0},void 0)}}function tc(e,t){let n={},r,o;for(o in t.properties)if(o!=="children"&&Er.call(t.properties,o)){let a=rc(e,o,t.properties[o]);if(a){let[i,l]=a;e.tableCellAlignToStyle&&i==="align"&&typeof l=="string"&&$u.has(t.tagName)?r=l:n[i]=l}}if(r){let a=n.style||(n.style={});a[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function nc(e,t){let n={};for(let r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){let a=r.data.estree.body[0];a.type;let i=a.expression;i.type;let l=i.properties[0];l.type,Object.assign(n,e.evaluater.evaluateExpression(l.argument))}else _t(e,t.position);else{let o=r.name,a;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){let l=r.value.data.estree.body[0];l.type,a=e.evaluater.evaluateExpression(l.expression)}else _t(e,t.position);else a=r.value===null?!0:r.value;n[o]=a}return n}function Tr(e,t){let n=[],r=-1,o=e.passKeys?new Map:Uu;for(;++r<t.children.length;){let a=t.children[r],i;if(e.passKeys){let s=a.type==="element"?a.tagName:a.type==="mdxJsxFlowElement"||a.type==="mdxJsxTextElement"?a.name:void 0;if(s){let u=o.get(s)||0;i=s+"-"+u,o.set(s,u+1)}}let l=la(e,a,i);l!==void 0&&n.push(l)}return n}function rc(e,t,n){let r=vr(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?Hi(n):Ki(n)),r.property==="style"){let o=typeof n=="object"?n:oc(e,String(n));return e.stylePropertyNameCase==="css"&&(o=ic(o)),["style",o]}return[e.elementAttributeNameCase==="react"&&r.space?Sr[r.property]||r.property:r.attribute,n]}}function oc(e,t){let n={};try{na(t,r)}catch(o){if(!e.ignoreInvalidStyle){let a=o,i=new ne("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:a,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=aa+"#cannot-parse-style-attribute",i}}return n;function r(o,a){let i=o;i.slice(0,2)!=="--"&&(i.slice(0,4)==="-ms-"&&(i="ms-"+i.slice(4)),i=i.replace(Gu,lc)),n[i]=a}}function ua(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){let o=t.split("."),a=-1,i;for(;++a<o.length;){let l=gn(o[a])?{type:"Identifier",name:o[a]}:{type:"Literal",value:o[a]};i=i?{type:"MemberExpression",object:i,property:l,computed:!!(a&&l.type==="Literal"),optional:!1}:l}r=i}else r=gn(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){let o=r.value;return Er.call(e.components,o)?e.components[o]:o}if(e.evaluater)return e.evaluater.evaluateExpression(r);_t(e)}function _t(e,t){let n=new ne("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=aa+"#cannot-handle-mdx-estrees-without-createevaluater",n}function ic(e){let t={},n;for(n in e)Er.call(e,n)&&(t[ac(n)]=e[n]);return t}function ac(e){let t=e.replace(Vu,sc);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function lc(e,t){return t.toUpperCase()}function sc(e){return"-"+e.toLowerCase()}var Bt={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]};import{Fragment as pm,jsx as fm,jsxs as hm}from"react/jsx-runtime";var uc={};function it(e,t){let n=t||uc,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,o=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return da(e,r,o)}function da(e,t,n){if(cc(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return ca(e.children,t,n)}return Array.isArray(e)?ca(e,t,n):""}function ca(e,t,n){let r=[],o=-1;for(;++o<e.length;)r[o]=da(e[o],t,n);return r.join("")}function cc(e){return!!(e&&typeof e=="object")}var ma=document.createElement("i");function wt(e){let t="&"+e+";";ma.innerHTML=t;let n=ma.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function oe(e,t,n,r){let o=e.length,a=0,i;if(t<0?t=-t>o?0:o+t:t=t>o?o:t,n=n>0?n:0,r.length<1e4)i=Array.from(r),i.unshift(t,n),e.splice(...i);else for(n&&e.splice(t,n);a<r.length;)i=r.slice(a,a+1e4),i.unshift(t,0),e.splice(...i),a+=1e4,t+=1e4}function me(e,t){return e.length>0?(oe(e,e.length,0,t),e):t}var pa={}.hasOwnProperty;function xn(e){let t={},n=-1;for(;++n<e.length;)dc(t,e[n]);return t}function dc(e,t){let n;for(n in t){let o=(pa.call(e,n)?e[n]:void 0)||(e[n]={}),a=t[n],i;if(a)for(i in a){pa.call(o,i)||(o[i]=[]);let l=a[i];mc(o[i],Array.isArray(l)?l:l?[l]:[])}}}function mc(e,t){let n=-1,r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);oe(e,0,0,r)}function vn(e,t){let n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"\uFFFD":String.fromCodePoint(n)}function ce(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}var ae=Ke(/[A-Za-z]/),te=Ke(/[\dA-Za-z]/),fa=Ke(/[#-'*+\--9=?A-Z^-~]/);function at(e){return e!==null&&(e<32||e===127)}var jt=Ke(/\d/),ha=Ke(/[\dA-Fa-f]/),ga=Ke(/[!-/:-@[-`{-~]/);function I(e){return e!==null&&e<-2}function H(e){return e!==null&&(e<0||e===32)}function L(e){return e===-2||e===-1||e===32}var lt=Ke(/\p{P}|\p{S}/u),Ae=Ke(/\s/);function Ke(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function Se(e){let t=[],n=-1,r=0,o=0;for(;++n<e.length;){let a=e.charCodeAt(n),i="";if(a===37&&te(e.charCodeAt(n+1))&&te(e.charCodeAt(n+2)))o=2;else if(a<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a))||(i=String.fromCharCode(a));else if(a>55295&&a<57344){let l=e.charCodeAt(n+1);a<56320&&l>56319&&l<57344?(i=String.fromCharCode(a,l),o=1):i="\uFFFD"}else i=String.fromCharCode(a);i&&(t.push(e.slice(r,n),encodeURIComponent(i)),r=n+o+1,i=""),o&&(n+=o,o=0)}return t.join("")+e.slice(r)}function T(e,t,n,r){let o=r?r-1:Number.POSITIVE_INFINITY,a=0;return i;function i(s){return L(s)?(e.enter(n),l(s)):t(s)}function l(s){return L(s)&&a++<o?(e.consume(s),l):(e.exit(n),t(s))}}var ba={tokenize:pc};function pc(e){let t=e.attempt(this.parser.constructs.contentInitial,r,o),n;return t;function r(l){if(l===null){e.consume(l);return}return e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),T(e,t,"linePrefix")}function o(l){return e.enter("paragraph"),a(l)}function a(l){let s=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=s),n=s,i(l)}function i(l){if(l===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(l);return}return I(l)?(e.consume(l),e.exit("chunkText"),a):(e.consume(l),i)}}var ya={tokenize:fc},ka={tokenize:hc};function fc(e){let t=this,n=[],r=0,o,a,i;return l;function l(S){if(r<n.length){let z=n[r];return t.containerState=z[1],e.attempt(z[0].continuation,s,u)(S)}return u(S)}function s(S){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,o&&P();let z=t.events.length,M=z,v;for(;M--;)if(t.events[M][0]==="exit"&&t.events[M][1].type==="chunkFlow"){v=t.events[M][1].end;break}k(r);let B=z;for(;B<t.events.length;)t.events[B][1].end=Object.assign({},v),B++;return oe(t.events,M+1,0,t.events.slice(z)),t.events.length=B,u(S)}return l(S)}function u(S){if(r===n.length){if(!o)return m(S);if(o.currentConstruct&&o.currentConstruct.concrete)return f(S);t.interrupt=!!(o.currentConstruct&&!o._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(ka,c,d)(S)}function c(S){return o&&P(),k(r),m(S)}function d(S){return t.parser.lazy[t.now().line]=r!==n.length,i=t.now().offset,f(S)}function m(S){return t.containerState={},e.attempt(ka,p,f)(S)}function p(S){return r++,n.push([t.currentConstruct,t.containerState]),m(S)}function f(S){if(S===null){o&&P(),k(0),e.consume(S);return}return o=o||t.parser.flow(t.now()),e.enter("chunkFlow",{contentType:"flow",previous:a,_tokenizer:o}),y(S)}function y(S){if(S===null){b(e.exit("chunkFlow"),!0),k(0),e.consume(S);return}return I(S)?(e.consume(S),b(e.exit("chunkFlow")),r=0,t.interrupt=void 0,l):(e.consume(S),y)}function b(S,z){let M=t.sliceStream(S);if(z&&M.push(null),S.previous=a,a&&(a.next=S),a=S,o.defineSkip(S.start),o.write(M),t.parser.lazy[S.start.line]){let v=o.events.length;for(;v--;)if(o.events[v][1].start.offset<i&&(!o.events[v][1].end||o.events[v][1].end.offset>i))return;let B=t.events.length,q=B,$,w;for(;q--;)if(t.events[q][0]==="exit"&&t.events[q][1].type==="chunkFlow"){if($){w=t.events[q][1].end;break}$=!0}for(k(r),v=B;v<t.events.length;)t.events[v][1].end=Object.assign({},w),v++;oe(t.events,q+1,0,t.events.slice(B)),t.events.length=v}}function k(S){let z=n.length;for(;z-- >S;){let M=n[z];t.containerState=M[1],M[0].exit.call(t,e)}n.length=S}function P(){o.write([null]),a=void 0,o=void 0,t.containerState._closeFlow=void 0}}function hc(e,t,n){return T(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function xt(e){if(e===null||H(e)||Ae(e))return 1;if(lt(e))return 2}function Je(e,t,n){let r=[],o=-1;for(;++o<e.length;){let a=e[o].resolveAll;a&&!r.includes(a)&&(t=a(t,n),r.push(a))}return t}var Ht={name:"attention",tokenize:bc,resolveAll:gc};function gc(e,t){let n=-1,r,o,a,i,l,s,u,c;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;s=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;let d=Object.assign({},e[r][1].end),m=Object.assign({},e[n][1].start);wa(d,-s),wa(m,s),i={type:s>1?"strongSequence":"emphasisSequence",start:d,end:Object.assign({},e[r][1].end)},l={type:s>1?"strongSequence":"emphasisSequence",start:Object.assign({},e[n][1].start),end:m},a={type:s>1?"strongText":"emphasisText",start:Object.assign({},e[r][1].end),end:Object.assign({},e[n][1].start)},o={type:s>1?"strong":"emphasis",start:Object.assign({},i.start),end:Object.assign({},l.end)},e[r][1].end=Object.assign({},i.start),e[n][1].start=Object.assign({},l.end),u=[],e[r][1].end.offset-e[r][1].start.offset&&(u=me(u,[["enter",e[r][1],t],["exit",e[r][1],t]])),u=me(u,[["enter",o,t],["enter",i,t],["exit",i,t],["enter",a,t]]),u=me(u,Je(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),u=me(u,[["exit",a,t],["enter",l,t],["exit",l,t],["exit",o,t]]),e[n][1].end.offset-e[n][1].start.offset?(c=2,u=me(u,[["enter",e[n][1],t],["exit",e[n][1],t]])):c=0,oe(e,r-1,n-r+3,u),n=r+u.length-c-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function bc(e,t){let n=this.parser.constructs.attentionMarkers.null,r=this.previous,o=xt(r),a;return i;function i(s){return a=s,e.enter("attentionSequence"),l(s)}function l(s){if(s===a)return e.consume(s),l;let u=e.exit("attentionSequence"),c=xt(s),d=!c||c===2&&o||n.includes(s),m=!o||o===2&&c||n.includes(r);return u._open=!!(a===42?d:d&&(o||!m)),u._close=!!(a===42?m:m&&(c||!d)),t(s)}}function wa(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}var Fr={name:"autolink",tokenize:kc};function kc(e,t,n){let r=0;return o;function o(p){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),a}function a(p){return ae(p)?(e.consume(p),i):p===64?n(p):u(p)}function i(p){return p===43||p===45||p===46||te(p)?(r=1,l(p)):u(p)}function l(p){return p===58?(e.consume(p),r=0,s):(p===43||p===45||p===46||te(p))&&r++<32?(e.consume(p),l):(r=0,u(p))}function s(p){return p===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),t):p===null||p===32||p===60||at(p)?n(p):(e.consume(p),s)}function u(p){return p===64?(e.consume(p),c):fa(p)?(e.consume(p),u):n(p)}function c(p){return te(p)?d(p):n(p)}function d(p){return p===46?(e.consume(p),r=0,c):p===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),t):m(p)}function m(p){if((p===45||te(p))&&r++<63){let f=p===45?m:d;return e.consume(p),f}return n(p)}}var Te={tokenize:yc,partial:!0};function yc(e,t,n){return r;function r(a){return L(a)?T(e,o,"linePrefix")(a):o(a)}function o(a){return a===null||I(a)?t(a):n(a)}}var Sn={name:"blockQuote",tokenize:wc,continuation:{tokenize:xc},exit:vc};function wc(e,t,n){let r=this;return o;function o(i){if(i===62){let l=r.containerState;return l.open||(e.enter("blockQuote",{_container:!0}),l.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(i),e.exit("blockQuoteMarker"),a}return n(i)}function a(i){return L(i)?(e.enter("blockQuotePrefixWhitespace"),e.consume(i),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(i))}}function xc(e,t,n){let r=this;return o;function o(i){return L(i)?T(e,a,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(i):a(i)}function a(i){return e.attempt(Sn,t,n)(i)}}function vc(e){e.exit("blockQuote")}var Pn={name:"characterEscape",tokenize:Sc};function Sc(e,t,n){return r;function r(a){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(a),e.exit("escapeMarker"),o}function o(a){return ga(a)?(e.enter("characterEscapeValue"),e.consume(a),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(a)}}var Cn={name:"characterReference",tokenize:Pc};function Pc(e,t,n){let r=this,o=0,a,i;return l;function l(d){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(d),e.exit("characterReferenceMarker"),s}function s(d){return d===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(d),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),a=31,i=te,c(d))}function u(d){return d===88||d===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(d),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),a=6,i=ha,c):(e.enter("characterReferenceValue"),a=7,i=jt,c(d))}function c(d){if(d===59&&o){let m=e.exit("characterReferenceValue");return i===te&&!wt(r.sliceSerialize(m))?n(d):(e.enter("characterReferenceMarker"),e.consume(d),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return i(d)&&o++<a?(e.consume(d),c):n(d)}}var xa={tokenize:Dc,partial:!0},Dn={name:"codeFenced",tokenize:Cc,concrete:!0};function Cc(e,t,n){let r=this,o={tokenize:M,partial:!0},a=0,i=0,l;return s;function s(v){return u(v)}function u(v){let B=r.events[r.events.length-1];return a=B&&B[1].type==="linePrefix"?B[2].sliceSerialize(B[1],!0).length:0,l=v,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),c(v)}function c(v){return v===l?(i++,e.consume(v),c):i<3?n(v):(e.exit("codeFencedFenceSequence"),L(v)?T(e,d,"whitespace")(v):d(v))}function d(v){return v===null||I(v)?(e.exit("codeFencedFence"),r.interrupt?t(v):e.check(xa,y,z)(v)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),m(v))}function m(v){return v===null||I(v)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),d(v)):L(v)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),T(e,p,"whitespace")(v)):v===96&&v===l?n(v):(e.consume(v),m)}function p(v){return v===null||I(v)?d(v):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),f(v))}function f(v){return v===null||I(v)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),d(v)):v===96&&v===l?n(v):(e.consume(v),f)}function y(v){return e.attempt(o,z,b)(v)}function b(v){return e.enter("lineEnding"),e.consume(v),e.exit("lineEnding"),k}function k(v){return a>0&&L(v)?T(e,P,"linePrefix",a+1)(v):P(v)}function P(v){return v===null||I(v)?e.check(xa,y,z)(v):(e.enter("codeFlowValue"),S(v))}function S(v){return v===null||I(v)?(e.exit("codeFlowValue"),P(v)):(e.consume(v),S)}function z(v){return e.exit("codeFenced"),t(v)}function M(v,B,q){let $=0;return w;function w(E){return v.enter("lineEnding"),v.consume(E),v.exit("lineEnding"),re}function re(E){return v.enter("codeFencedFence"),L(E)?T(v,W,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(E):W(E)}function W(E){return E===l?(v.enter("codeFencedFenceSequence"),A(E)):q(E)}function A(E){return E===l?($++,v.consume(E),A):$>=i?(v.exit("codeFencedFenceSequence"),L(E)?T(v,_,"whitespace")(E):_(E)):q(E)}function _(E){return E===null||I(E)?(v.exit("codeFencedFence"),B(E)):q(E)}}}function Dc(e,t,n){let r=this;return o;function o(i){return i===null?n(i):(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),a)}function a(i){return r.parser.lazy[r.now().line]?n(i):t(i)}}var Ut={name:"codeIndented",tokenize:Ic},Ec={tokenize:Ac,partial:!0};function Ic(e,t,n){let r=this;return o;function o(u){return e.enter("codeIndented"),T(e,a,"linePrefix",5)(u)}function a(u){let c=r.events[r.events.length-1];return c&&c[1].type==="linePrefix"&&c[2].sliceSerialize(c[1],!0).length>=4?i(u):n(u)}function i(u){return u===null?s(u):I(u)?e.attempt(Ec,i,s)(u):(e.enter("codeFlowValue"),l(u))}function l(u){return u===null||I(u)?(e.exit("codeFlowValue"),i(u)):(e.consume(u),l)}function s(u){return e.exit("codeIndented"),t(u)}}function Ac(e,t,n){let r=this;return o;function o(i){return r.parser.lazy[r.now().line]?n(i):I(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),o):T(e,a,"linePrefix",5)(i)}function a(i){let l=r.events[r.events.length-1];return l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?t(i):I(i)?o(i):n(i)}}var zr={name:"codeText",tokenize:zc,resolve:Tc,previous:Fc};function Tc(e){let t=e.length-4,n=3,r,o;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)o===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(o=r):(r===t||e[r][1].type==="lineEnding")&&(e[o][1].type="codeTextData",r!==o+2&&(e[o][1].end=e[r-1][1].end,e.splice(o+2,r-o-2),t-=r-o-2,r=o+2),o=void 0);return e}function Fc(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function zc(e,t,n){let r=this,o=0,a,i;return l;function l(m){return e.enter("codeText"),e.enter("codeTextSequence"),s(m)}function s(m){return m===96?(e.consume(m),o++,s):(e.exit("codeTextSequence"),u(m))}function u(m){return m===null?n(m):m===32?(e.enter("space"),e.consume(m),e.exit("space"),u):m===96?(i=e.enter("codeTextSequence"),a=0,d(m)):I(m)?(e.enter("lineEnding"),e.consume(m),e.exit("lineEnding"),u):(e.enter("codeTextData"),c(m))}function c(m){return m===null||m===32||m===96||I(m)?(e.exit("codeTextData"),u(m)):(e.consume(m),c)}function d(m){return m===96?(e.consume(m),a++,d):a===o?(e.exit("codeTextSequence"),e.exit("codeText"),t(m)):(i.type="codeTextData",c(m))}}var En=class{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){let r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){let o=n||0;this.setCursor(Math.trunc(t));let a=this.right.splice(this.right.length-o,Number.POSITIVE_INFINITY);return r&&Vt(this.left,r),a.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),Vt(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),Vt(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){let n=this.left.splice(t,Number.POSITIVE_INFINITY);Vt(this.right,n.reverse())}else{let n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);Vt(this.left,n.reverse())}}};function Vt(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function In(e){let t={},n=-1,r,o,a,i,l,s,u,c=new En(e);for(;++n<c.length;){for(;n in t;)n=t[n];if(r=c.get(n),n&&r[1].type==="chunkFlow"&&c.get(n-1)[1].type==="listItemPrefix"&&(s=r[1]._tokenizer.events,a=0,a<s.length&&s[a][1].type==="lineEndingBlank"&&(a+=2),a<s.length&&s[a][1].type==="content"))for(;++a<s.length&&s[a][1].type!=="content";)s[a][1].type==="chunkText"&&(s[a][1]._isInFirstContentOfListItem=!0,a++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,Lc(c,n)),n=t[n],u=!0);else if(r[1]._container){for(a=n,o=void 0;a--&&(i=c.get(a),i[1].type==="lineEnding"||i[1].type==="lineEndingBlank");)i[0]==="enter"&&(o&&(c.get(o)[1].type="lineEndingBlank"),i[1].type="lineEnding",o=a);o&&(r[1].end=Object.assign({},c.get(o)[1].start),l=c.slice(o,n),l.unshift(r),c.splice(o,n-o+1,l))}}return oe(e,0,Number.POSITIVE_INFINITY,c.slice(0)),!u}function Lc(e,t){let n=e.get(t)[1],r=e.get(t)[2],o=t-1,a=[],i=n._tokenizer||r.parser[n.contentType](n.start),l=i.events,s=[],u={},c,d,m=-1,p=n,f=0,y=0,b=[y];for(;p;){for(;e.get(++o)[1]!==p;);a.push(o),p._tokenizer||(c=r.sliceStream(p),p.next||c.push(null),d&&i.defineSkip(p.start),p._isInFirstContentOfListItem&&(i._gfmTasklistFirstContentOfListItem=!0),i.write(c),p._isInFirstContentOfListItem&&(i._gfmTasklistFirstContentOfListItem=void 0)),d=p,p=p.next}for(p=n;++m<l.length;)l[m][0]==="exit"&&l[m-1][0]==="enter"&&l[m][1].type===l[m-1][1].type&&l[m][1].start.line!==l[m][1].end.line&&(y=m+1,b.push(y),p._tokenizer=void 0,p.previous=void 0,p=p.next);for(i.events=[],p?(p._tokenizer=void 0,p.previous=void 0):b.pop(),m=b.length;m--;){let k=l.slice(b[m],b[m+1]),P=a.pop();s.push([P,P+k.length-1]),e.splice(P,2,k)}for(s.reverse(),m=-1;++m<s.length;)u[f+s[m][0]]=f+s[m][1],f+=s[m][1]-s[m][0]-1;return u}var Lr={tokenize:Nc,resolve:Oc},Mc={tokenize:Rc,partial:!0};function Oc(e){return In(e),e}function Nc(e,t){let n;return r;function r(l){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),o(l)}function o(l){return l===null?a(l):I(l)?e.check(Mc,i,a)(l):(e.consume(l),o)}function a(l){return e.exit("chunkContent"),e.exit("content"),t(l)}function i(l){return e.consume(l),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,o}}function Rc(e,t,n){let r=this;return o;function o(i){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),T(e,a,"linePrefix")}function a(i){if(i===null||I(i))return n(i);let l=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?t(i):e.interrupt(r.parser.constructs.flow,n,t)(i)}}function An(e,t,n,r,o,a,i,l,s){let u=s||Number.POSITIVE_INFINITY,c=0;return d;function d(k){return k===60?(e.enter(r),e.enter(o),e.enter(a),e.consume(k),e.exit(a),m):k===null||k===32||k===41||at(k)?n(k):(e.enter(r),e.enter(i),e.enter(l),e.enter("chunkString",{contentType:"string"}),y(k))}function m(k){return k===62?(e.enter(a),e.consume(k),e.exit(a),e.exit(o),e.exit(r),t):(e.enter(l),e.enter("chunkString",{contentType:"string"}),p(k))}function p(k){return k===62?(e.exit("chunkString"),e.exit(l),m(k)):k===null||k===60||I(k)?n(k):(e.consume(k),k===92?f:p)}function f(k){return k===60||k===62||k===92?(e.consume(k),p):p(k)}function y(k){return!c&&(k===null||k===41||H(k))?(e.exit("chunkString"),e.exit(l),e.exit(i),e.exit(r),t(k)):c<u&&k===40?(e.consume(k),c++,y):k===41?(e.consume(k),c--,y):k===null||k===32||k===40||at(k)?n(k):(e.consume(k),k===92?b:y)}function b(k){return k===40||k===41||k===92?(e.consume(k),y):y(k)}}function Tn(e,t,n,r,o,a){let i=this,l=0,s;return u;function u(p){return e.enter(r),e.enter(o),e.consume(p),e.exit(o),e.enter(a),c}function c(p){return l>999||p===null||p===91||p===93&&!s||p===94&&!l&&"_hiddenFootnoteSupport"in i.parser.constructs?n(p):p===93?(e.exit(a),e.enter(o),e.consume(p),e.exit(o),e.exit(r),t):I(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),c):(e.enter("chunkString",{contentType:"string"}),d(p))}function d(p){return p===null||p===91||p===93||I(p)||l++>999?(e.exit("chunkString"),c(p)):(e.consume(p),s||(s=!L(p)),p===92?m:d)}function m(p){return p===91||p===92||p===93?(e.consume(p),l++,d):d(p)}}function Fn(e,t,n,r,o,a){let i;return l;function l(m){return m===34||m===39||m===40?(e.enter(r),e.enter(o),e.consume(m),e.exit(o),i=m===40?41:m,s):n(m)}function s(m){return m===i?(e.enter(o),e.consume(m),e.exit(o),e.exit(r),t):(e.enter(a),u(m))}function u(m){return m===i?(e.exit(a),s(i)):m===null?n(m):I(m)?(e.enter("lineEnding"),e.consume(m),e.exit("lineEnding"),T(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),c(m))}function c(m){return m===i||m===null||I(m)?(e.exit("chunkString"),u(m)):(e.consume(m),m===92?d:c)}function d(m){return m===i||m===92?(e.consume(m),c):c(m)}}function st(e,t){let n;return r;function r(o){return I(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),n=!0,r):L(o)?T(e,r,n?"linePrefix":"lineSuffix")(o):t(o)}}var Mr={name:"definition",tokenize:Bc},_c={tokenize:jc,partial:!0};function Bc(e,t,n){let r=this,o;return a;function a(p){return e.enter("definition"),i(p)}function i(p){return Tn.call(r,e,l,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(p)}function l(p){return o=ce(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),p===58?(e.enter("definitionMarker"),e.consume(p),e.exit("definitionMarker"),s):n(p)}function s(p){return H(p)?st(e,u)(p):u(p)}function u(p){return An(e,c,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(p)}function c(p){return e.attempt(_c,d,d)(p)}function d(p){return L(p)?T(e,m,"whitespace")(p):m(p)}function m(p){return p===null||I(p)?(e.exit("definition"),r.parser.defined.push(o),t(p)):n(p)}}function jc(e,t,n){return r;function r(l){return H(l)?st(e,o)(l):n(l)}function o(l){return Fn(e,a,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(l)}function a(l){return L(l)?T(e,i,"whitespace")(l):i(l)}function i(l){return l===null||I(l)?t(l):n(l)}}var Or={name:"hardBreakEscape",tokenize:Hc};function Hc(e,t,n){return r;function r(a){return e.enter("hardBreakEscape"),e.consume(a),o}function o(a){return I(a)?(e.exit("hardBreakEscape"),t(a)):n(a)}}var Nr={name:"headingAtx",tokenize:Vc,resolve:Uc};function Uc(e,t){let n=e.length-2,r=3,o,a;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(o={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},a={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},oe(e,r,n-r+1,[["enter",o,t],["enter",a,t],["exit",a,t],["exit",o,t]])),e}function Vc(e,t,n){let r=0;return o;function o(c){return e.enter("atxHeading"),a(c)}function a(c){return e.enter("atxHeadingSequence"),i(c)}function i(c){return c===35&&r++<6?(e.consume(c),i):c===null||H(c)?(e.exit("atxHeadingSequence"),l(c)):n(c)}function l(c){return c===35?(e.enter("atxHeadingSequence"),s(c)):c===null||I(c)?(e.exit("atxHeading"),t(c)):L(c)?T(e,l,"whitespace")(c):(e.enter("atxHeadingText"),u(c))}function s(c){return c===35?(e.consume(c),s):(e.exit("atxHeadingSequence"),l(c))}function u(c){return c===null||c===35||H(c)?(e.exit("atxHeadingText"),l(c)):(e.consume(c),u)}}var va=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Rr=["pre","script","style","textarea"];var _r={name:"htmlFlow",tokenize:Wc,resolveTo:$c,concrete:!0},Gc={tokenize:Jc,partial:!0},qc={tokenize:Kc,partial:!0};function $c(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function Wc(e,t,n){let r=this,o,a,i,l,s;return u;function u(g){return c(g)}function c(g){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(g),d}function d(g){return g===33?(e.consume(g),m):g===47?(e.consume(g),a=!0,y):g===63?(e.consume(g),o=3,r.interrupt?t:h):ae(g)?(e.consume(g),i=String.fromCharCode(g),b):n(g)}function m(g){return g===45?(e.consume(g),o=2,p):g===91?(e.consume(g),o=5,l=0,f):ae(g)?(e.consume(g),o=4,r.interrupt?t:h):n(g)}function p(g){return g===45?(e.consume(g),r.interrupt?t:h):n(g)}function f(g){let ge="CDATA[";return g===ge.charCodeAt(l++)?(e.consume(g),l===ge.length?r.interrupt?t:W:f):n(g)}function y(g){return ae(g)?(e.consume(g),i=String.fromCharCode(g),b):n(g)}function b(g){if(g===null||g===47||g===62||H(g)){let ge=g===47,Xe=i.toLowerCase();return!ge&&!a&&Rr.includes(Xe)?(o=1,r.interrupt?t(g):W(g)):va.includes(i.toLowerCase())?(o=6,ge?(e.consume(g),k):r.interrupt?t(g):W(g)):(o=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(g):a?P(g):S(g))}return g===45||te(g)?(e.consume(g),i+=String.fromCharCode(g),b):n(g)}function k(g){return g===62?(e.consume(g),r.interrupt?t:W):n(g)}function P(g){return L(g)?(e.consume(g),P):w(g)}function S(g){return g===47?(e.consume(g),w):g===58||g===95||ae(g)?(e.consume(g),z):L(g)?(e.consume(g),S):w(g)}function z(g){return g===45||g===46||g===58||g===95||te(g)?(e.consume(g),z):M(g)}function M(g){return g===61?(e.consume(g),v):L(g)?(e.consume(g),M):S(g)}function v(g){return g===null||g===60||g===61||g===62||g===96?n(g):g===34||g===39?(e.consume(g),s=g,B):L(g)?(e.consume(g),v):q(g)}function B(g){return g===s?(e.consume(g),s=null,$):g===null||I(g)?n(g):(e.consume(g),B)}function q(g){return g===null||g===34||g===39||g===47||g===60||g===61||g===62||g===96||H(g)?M(g):(e.consume(g),q)}function $(g){return g===47||g===62||L(g)?S(g):n(g)}function w(g){return g===62?(e.consume(g),re):n(g)}function re(g){return g===null||I(g)?W(g):L(g)?(e.consume(g),re):n(g)}function W(g){return g===45&&o===2?(e.consume(g),j):g===60&&o===1?(e.consume(g),Y):g===62&&o===4?(e.consume(g),we):g===63&&o===3?(e.consume(g),h):g===93&&o===5?(e.consume(g),Ee):I(g)&&(o===6||o===7)?(e.exit("htmlFlowData"),e.check(Gc,ze,A)(g)):g===null||I(g)?(e.exit("htmlFlowData"),A(g)):(e.consume(g),W)}function A(g){return e.check(qc,_,ze)(g)}function _(g){return e.enter("lineEnding"),e.consume(g),e.exit("lineEnding"),E}function E(g){return g===null||I(g)?A(g):(e.enter("htmlFlowData"),W(g))}function j(g){return g===45?(e.consume(g),h):W(g)}function Y(g){return g===47?(e.consume(g),i="",he):W(g)}function he(g){if(g===62){let ge=i.toLowerCase();return Rr.includes(ge)?(e.consume(g),we):W(g)}return ae(g)&&i.length<8?(e.consume(g),i+=String.fromCharCode(g),he):W(g)}function Ee(g){return g===93?(e.consume(g),h):W(g)}function h(g){return g===62?(e.consume(g),we):g===45&&o===2?(e.consume(g),h):W(g)}function we(g){return g===null||I(g)?(e.exit("htmlFlowData"),ze(g)):(e.consume(g),we)}function ze(g){return e.exit("htmlFlow"),t(g)}}function Kc(e,t,n){let r=this;return o;function o(i){return I(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),a):n(i)}function a(i){return r.parser.lazy[r.now().line]?n(i):t(i)}}function Jc(e,t,n){return r;function r(o){return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),e.attempt(Te,t,n)}}var Br={name:"htmlText",tokenize:Qc};function Qc(e,t,n){let r=this,o,a,i;return l;function l(h){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(h),s}function s(h){return h===33?(e.consume(h),u):h===47?(e.consume(h),M):h===63?(e.consume(h),S):ae(h)?(e.consume(h),q):n(h)}function u(h){return h===45?(e.consume(h),c):h===91?(e.consume(h),a=0,f):ae(h)?(e.consume(h),P):n(h)}function c(h){return h===45?(e.consume(h),p):n(h)}function d(h){return h===null?n(h):h===45?(e.consume(h),m):I(h)?(i=d,Y(h)):(e.consume(h),d)}function m(h){return h===45?(e.consume(h),p):d(h)}function p(h){return h===62?j(h):h===45?m(h):d(h)}function f(h){let we="CDATA[";return h===we.charCodeAt(a++)?(e.consume(h),a===we.length?y:f):n(h)}function y(h){return h===null?n(h):h===93?(e.consume(h),b):I(h)?(i=y,Y(h)):(e.consume(h),y)}function b(h){return h===93?(e.consume(h),k):y(h)}function k(h){return h===62?j(h):h===93?(e.consume(h),k):y(h)}function P(h){return h===null||h===62?j(h):I(h)?(i=P,Y(h)):(e.consume(h),P)}function S(h){return h===null?n(h):h===63?(e.consume(h),z):I(h)?(i=S,Y(h)):(e.consume(h),S)}function z(h){return h===62?j(h):S(h)}function M(h){return ae(h)?(e.consume(h),v):n(h)}function v(h){return h===45||te(h)?(e.consume(h),v):B(h)}function B(h){return I(h)?(i=B,Y(h)):L(h)?(e.consume(h),B):j(h)}function q(h){return h===45||te(h)?(e.consume(h),q):h===47||h===62||H(h)?$(h):n(h)}function $(h){return h===47?(e.consume(h),j):h===58||h===95||ae(h)?(e.consume(h),w):I(h)?(i=$,Y(h)):L(h)?(e.consume(h),$):j(h)}function w(h){return h===45||h===46||h===58||h===95||te(h)?(e.consume(h),w):re(h)}function re(h){return h===61?(e.consume(h),W):I(h)?(i=re,Y(h)):L(h)?(e.consume(h),re):$(h)}function W(h){return h===null||h===60||h===61||h===62||h===96?n(h):h===34||h===39?(e.consume(h),o=h,A):I(h)?(i=W,Y(h)):L(h)?(e.consume(h),W):(e.consume(h),_)}function A(h){return h===o?(e.consume(h),o=void 0,E):h===null?n(h):I(h)?(i=A,Y(h)):(e.consume(h),A)}function _(h){return h===null||h===34||h===39||h===60||h===61||h===96?n(h):h===47||h===62||H(h)?$(h):(e.consume(h),_)}function E(h){return h===47||h===62||H(h)?$(h):n(h)}function j(h){return h===62?(e.consume(h),e.exit("htmlTextData"),e.exit("htmlText"),t):n(h)}function Y(h){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),he}function he(h){return L(h)?T(e,Ee,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(h):Ee(h)}function Ee(h){return e.enter("htmlTextData"),i(h)}}var ut={name:"labelEnd",tokenize:nd,resolveTo:td,resolveAll:ed},Yc={tokenize:rd},Xc={tokenize:od},Zc={tokenize:id};function ed(e){let t=-1;for(;++t<e.length;){let n=e[t][1];(n.type==="labelImage"||n.type==="labelLink"||n.type==="labelEnd")&&(e.splice(t+1,n.type==="labelImage"?4:2),n.type="data",t++)}return e}function td(e,t){let n=e.length,r=0,o,a,i,l;for(;n--;)if(o=e[n][1],a){if(o.type==="link"||o.type==="labelLink"&&o._inactive)break;e[n][0]==="enter"&&o.type==="labelLink"&&(o._inactive=!0)}else if(i){if(e[n][0]==="enter"&&(o.type==="labelImage"||o.type==="labelLink")&&!o._balanced&&(a=n,o.type!=="labelLink")){r=2;break}}else o.type==="labelEnd"&&(i=n);let s={type:e[a][1].type==="labelLink"?"link":"image",start:Object.assign({},e[a][1].start),end:Object.assign({},e[e.length-1][1].end)},u={type:"label",start:Object.assign({},e[a][1].start),end:Object.assign({},e[i][1].end)},c={type:"labelText",start:Object.assign({},e[a+r+2][1].end),end:Object.assign({},e[i-2][1].start)};return l=[["enter",s,t],["enter",u,t]],l=me(l,e.slice(a+1,a+r+3)),l=me(l,[["enter",c,t]]),l=me(l,Je(t.parser.constructs.insideSpan.null,e.slice(a+r+4,i-3),t)),l=me(l,[["exit",c,t],e[i-2],e[i-1],["exit",u,t]]),l=me(l,e.slice(i+1)),l=me(l,[["exit",s,t]]),oe(e,a,e.length,l),e}function nd(e,t,n){let r=this,o=r.events.length,a,i;for(;o--;)if((r.events[o][1].type==="labelImage"||r.events[o][1].type==="labelLink")&&!r.events[o][1]._balanced){a=r.events[o][1];break}return l;function l(m){return a?a._inactive?d(m):(i=r.parser.defined.includes(ce(r.sliceSerialize({start:a.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(m),e.exit("labelMarker"),e.exit("labelEnd"),s):n(m)}function s(m){return m===40?e.attempt(Yc,c,i?c:d)(m):m===91?e.attempt(Xc,c,i?u:d)(m):i?c(m):d(m)}function u(m){return e.attempt(Zc,c,d)(m)}function c(m){return t(m)}function d(m){return a._balanced=!0,n(m)}}function rd(e,t,n){return r;function r(d){return e.enter("resource"),e.enter("resourceMarker"),e.consume(d),e.exit("resourceMarker"),o}function o(d){return H(d)?st(e,a)(d):a(d)}function a(d){return d===41?c(d):An(e,i,l,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(d)}function i(d){return H(d)?st(e,s)(d):c(d)}function l(d){return n(d)}function s(d){return d===34||d===39||d===40?Fn(e,u,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(d):c(d)}function u(d){return H(d)?st(e,c)(d):c(d)}function c(d){return d===41?(e.enter("resourceMarker"),e.consume(d),e.exit("resourceMarker"),e.exit("resource"),t):n(d)}}function od(e,t,n){let r=this;return o;function o(l){return Tn.call(r,e,a,i,"reference","referenceMarker","referenceString")(l)}function a(l){return r.parser.defined.includes(ce(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(l):n(l)}function i(l){return n(l)}}function id(e,t,n){return r;function r(a){return e.enter("reference"),e.enter("referenceMarker"),e.consume(a),e.exit("referenceMarker"),o}function o(a){return a===93?(e.enter("referenceMarker"),e.consume(a),e.exit("referenceMarker"),e.exit("reference"),t):n(a)}}var jr={name:"labelStartImage",tokenize:ad,resolveAll:ut.resolveAll};function ad(e,t,n){let r=this;return o;function o(l){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(l),e.exit("labelImageMarker"),a}function a(l){return l===91?(e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelImage"),i):n(l)}function i(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(l):t(l)}}var Hr={name:"labelStartLink",tokenize:ld,resolveAll:ut.resolveAll};function ld(e,t,n){let r=this;return o;function o(i){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(i),e.exit("labelMarker"),e.exit("labelLink"),a}function a(i){return i===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(i):t(i)}}var Gt={name:"lineEnding",tokenize:sd};function sd(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),T(e,t,"linePrefix")}}var ct={name:"thematicBreak",tokenize:ud};function ud(e,t,n){let r=0,o;return a;function a(u){return e.enter("thematicBreak"),i(u)}function i(u){return o=u,l(u)}function l(u){return u===o?(e.enter("thematicBreakSequence"),s(u)):r>=3&&(u===null||I(u))?(e.exit("thematicBreak"),t(u)):n(u)}function s(u){return u===o?(e.consume(u),r++,s):(e.exit("thematicBreakSequence"),L(u)?T(e,l,"whitespace")(u):l(u))}}var de={name:"list",tokenize:md,continuation:{tokenize:pd},exit:hd},cd={tokenize:gd,partial:!0},dd={tokenize:fd,partial:!0};function md(e,t,n){let r=this,o=r.events[r.events.length-1],a=o&&o[1].type==="linePrefix"?o[2].sliceSerialize(o[1],!0).length:0,i=0;return l;function l(p){let f=r.containerState.type||(p===42||p===43||p===45?"listUnordered":"listOrdered");if(f==="listUnordered"?!r.containerState.marker||p===r.containerState.marker:jt(p)){if(r.containerState.type||(r.containerState.type=f,e.enter(f,{_container:!0})),f==="listUnordered")return e.enter("listItemPrefix"),p===42||p===45?e.check(ct,n,u)(p):u(p);if(!r.interrupt||p===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),s(p)}return n(p)}function s(p){return jt(p)&&++i<10?(e.consume(p),s):(!r.interrupt||i<2)&&(r.containerState.marker?p===r.containerState.marker:p===41||p===46)?(e.exit("listItemValue"),u(p)):n(p)}function u(p){return e.enter("listItemMarker"),e.consume(p),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||p,e.check(Te,r.interrupt?n:c,e.attempt(cd,m,d))}function c(p){return r.containerState.initialBlankLine=!0,a++,m(p)}function d(p){return L(p)?(e.enter("listItemPrefixWhitespace"),e.consume(p),e.exit("listItemPrefixWhitespace"),m):n(p)}function m(p){return r.containerState.size=a+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(p)}}function pd(e,t,n){let r=this;return r.containerState._closeFlow=void 0,e.check(Te,o,a);function o(l){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,T(e,t,"listItemIndent",r.containerState.size+1)(l)}function a(l){return r.containerState.furtherBlankLines||!L(l)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,i(l)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(dd,t,i)(l))}function i(l){return r.containerState._closeFlow=!0,r.interrupt=void 0,T(e,e.attempt(de,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l)}}function fd(e,t,n){let r=this;return T(e,o,"listItemIndent",r.containerState.size+1);function o(a){let i=r.events[r.events.length-1];return i&&i[1].type==="listItemIndent"&&i[2].sliceSerialize(i[1],!0).length===r.containerState.size?t(a):n(a)}}function hd(e){e.exit(this.containerState.type)}function gd(e,t,n){let r=this;return T(e,o,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function o(a){let i=r.events[r.events.length-1];return!L(a)&&i&&i[1].type==="listItemPrefixWhitespace"?t(a):n(a)}}var zn={name:"setextUnderline",tokenize:kd,resolveTo:bd};function bd(e,t){let n=e.length,r,o,a;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(o=n)}else e[n][1].type==="content"&&e.splice(n,1),!a&&e[n][1].type==="definition"&&(a=n);let i={type:"setextHeading",start:Object.assign({},e[o][1].start),end:Object.assign({},e[e.length-1][1].end)};return e[o][1].type="setextHeadingText",a?(e.splice(o,0,["enter",i,t]),e.splice(a+1,0,["exit",e[r][1],t]),e[r][1].end=Object.assign({},e[a][1].end)):e[r][1]=i,e.push(["exit",i,t]),e}function kd(e,t,n){let r=this,o;return a;function a(u){let c=r.events.length,d;for(;c--;)if(r.events[c][1].type!=="lineEnding"&&r.events[c][1].type!=="linePrefix"&&r.events[c][1].type!=="content"){d=r.events[c][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||d)?(e.enter("setextHeadingLine"),o=u,i(u)):n(u)}function i(u){return e.enter("setextHeadingLineSequence"),l(u)}function l(u){return u===o?(e.consume(u),l):(e.exit("setextHeadingLineSequence"),L(u)?T(e,s,"lineSuffix")(u):s(u))}function s(u){return u===null||I(u)?(e.exit("setextHeadingLine"),t(u)):n(u)}}var Sa={tokenize:yd};function yd(e){let t=this,n=e.attempt(Te,r,e.attempt(this.parser.constructs.flowInitial,o,T(e,e.attempt(this.parser.constructs.flow,o,e.attempt(Lr,o)),"linePrefix")));return n;function r(a){if(a===null){e.consume(a);return}return e.enter("lineEndingBlank"),e.consume(a),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function o(a){if(a===null){e.consume(a);return}return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),t.currentConstruct=void 0,n}}var Pa={resolveAll:Ia()},Ca=Ea("string"),Da=Ea("text");function Ea(e){return{tokenize:t,resolveAll:Ia(e==="text"?wd:void 0)};function t(n){let r=this,o=this.parser.constructs[e],a=n.attempt(o,i,l);return i;function i(c){return u(c)?a(c):l(c)}function l(c){if(c===null){n.consume(c);return}return n.enter("data"),n.consume(c),s}function s(c){return u(c)?(n.exit("data"),a(c)):(n.consume(c),s)}function u(c){if(c===null)return!0;let d=o[c],m=-1;if(d)for(;++m<d.length;){let p=d[m];if(!p.previous||p.previous.call(r,r.previous))return!0}return!1}}}function Ia(e){return t;function t(n,r){let o=-1,a;for(;++o<=n.length;)a===void 0?n[o]&&n[o][1].type==="data"&&(a=o,o++):(!n[o]||n[o][1].type!=="data")&&(o!==a+2&&(n[a][1].end=n[o-1][1].end,n.splice(a+2,o-a-2),o=a+2),a=void 0);return e?e(n,r):n}}function wd(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){let r=e[n-1][1],o=t.sliceStream(r),a=o.length,i=-1,l=0,s;for(;a--;){let u=o[a];if(typeof u=="string"){for(i=u.length;u.charCodeAt(i-1)===32;)l++,i--;if(i)break;i=-1}else if(u===-2)s=!0,l++;else if(u!==-1){a++;break}}if(l){let u={type:n===e.length||s||l<2?"lineSuffix":"hardBreakTrailing",start:{line:r.end.line,column:r.end.column-l,offset:r.end.offset-l,_index:r.start._index+a,_bufferIndex:a?i:r.start._bufferIndex+i},end:Object.assign({},r.end)};r.end=Object.assign({},u.start),r.start.offset===r.end.offset?Object.assign(r,u):(e.splice(n,0,["enter",u,t],["exit",u,t]),n+=2)}n++}return e}function Aa(e,t,n){let r=Object.assign(n?Object.assign({},n):{line:1,column:1,offset:0},{_index:0,_bufferIndex:-1}),o={},a=[],i=[],l=[],s=!0,u={consume:z,enter:M,exit:v,attempt:$(B),check:$(q),interrupt:$(q,{interrupt:!0})},c={previous:null,code:null,containerState:{},events:[],parser:e,sliceStream:y,sliceSerialize:f,now:b,defineSkip:k,write:p},d=t.tokenize.call(c,u),m;return t.resolveAll&&a.push(t),c;function p(A){return i=me(i,A),P(),i[i.length-1]!==null?[]:(w(t,0),c.events=Je(a,c.events,c),c.events)}function f(A,_){return vd(y(A),_)}function y(A){return xd(i,A)}function b(){let{line:A,column:_,offset:E,_index:j,_bufferIndex:Y}=r;return{line:A,column:_,offset:E,_index:j,_bufferIndex:Y}}function k(A){o[A.line]=A.column,W()}function P(){let A;for(;r._index<i.length;){let _=i[r._index];if(typeof _=="string")for(A=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===A&&r._bufferIndex<_.length;)S(_.charCodeAt(r._bufferIndex));else S(_)}}function S(A){s=void 0,m=A,d=d(A)}function z(A){I(A)?(r.line++,r.column=1,r.offset+=A===-3?2:1,W()):A!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===i[r._index].length&&(r._bufferIndex=-1,r._index++)),c.previous=A,s=!0}function M(A,_){let E=_||{};return E.type=A,E.start=b(),c.events.push(["enter",E,c]),l.push(E),E}function v(A){let _=l.pop();return _.end=b(),c.events.push(["exit",_,c]),_}function B(A,_){w(A,_.from)}function q(A,_){_.restore()}function $(A,_){return E;function E(j,Y,he){let Ee,h,we,ze;return Array.isArray(j)?ge(j):"tokenize"in j?ge([j]):g(j);function g(se){return It;function It(Le){let Ze=Le!==null&&se[Le],ht=Le!==null&&se.null,tr=[...Array.isArray(Ze)?Ze:Ze?[Ze]:[],...Array.isArray(ht)?ht:ht?[ht]:[]];return ge(tr)(Le)}}function ge(se){return Ee=se,h=0,se.length===0?he:Xe(se[h])}function Xe(se){return It;function It(Le){return ze=re(),we=se,se.partial||(c.currentConstruct=se),se.name&&c.parser.constructs.disable.null.includes(se.name)?an(Le):se.tokenize.call(_?Object.assign(Object.create(c),_):c,u,er,an)(Le)}}function er(se){return s=!0,A(we,ze),Y}function an(se){return s=!0,ze.restore(),++h<Ee.length?Xe(Ee[h]):he}}}function w(A,_){A.resolveAll&&!a.includes(A)&&a.push(A),A.resolve&&oe(c.events,_,c.events.length-_,A.resolve(c.events.slice(_),c)),A.resolveTo&&(c.events=A.resolveTo(c.events,c))}function re(){let A=b(),_=c.previous,E=c.currentConstruct,j=c.events.length,Y=Array.from(l);return{restore:he,from:j};function he(){r=A,c.previous=_,c.currentConstruct=E,c.events.length=j,l=Y,W()}}function W(){r.line in o&&r.column<2&&(r.column=o[r.line],r.offset+=o[r.line]-1)}}function xd(e,t){let n=t.start._index,r=t.start._bufferIndex,o=t.end._index,a=t.end._bufferIndex,i;if(n===o)i=[e[n].slice(r,a)];else{if(i=e.slice(n,o),r>-1){let l=i[0];typeof l=="string"?i[0]=l.slice(r):i.shift()}a>0&&i.push(e[o].slice(0,a))}return i}function vd(e,t){let n=-1,r=[],o;for(;++n<e.length;){let a=e[n],i;if(typeof a=="string")i=a;else switch(a){case-5:{i="\r";break}case-4:{i=`
`;break}case-3:{i=`\r
`;break}case-2:{i=t?" ":"	";break}case-1:{if(!t&&o)continue;i=" ";break}default:i=String.fromCharCode(a)}o=a===-2,r.push(i)}return r.join("")}var Ur={};ei(Ur,{attentionMarkers:()=>Td,contentInitial:()=>Pd,disable:()=>Fd,document:()=>Sd,flow:()=>Dd,flowInitial:()=>Cd,insideSpan:()=>Ad,string:()=>Ed,text:()=>Id});var Sd={42:de,43:de,45:de,48:de,49:de,50:de,51:de,52:de,53:de,54:de,55:de,56:de,57:de,62:Sn},Pd={91:Mr},Cd={[-2]:Ut,[-1]:Ut,32:Ut},Dd={35:Nr,42:ct,45:[zn,ct],60:_r,61:zn,95:ct,96:Dn,126:Dn},Ed={38:Cn,92:Pn},Id={[-5]:Gt,[-4]:Gt,[-3]:Gt,33:jr,38:Cn,42:Ht,60:[Fr,Br],91:Hr,92:[Or,Pn],93:ut,95:Ht,96:zr},Ad={null:[Ht,Pa]},Td={null:[42,95]},Fd={null:[]};function Vr(e){let n=xn([Ur,...(e||{}).extensions||[]]),r={defined:[],lazy:{},constructs:n,content:o(ba),document:o(ya),flow:o(Sa),string:o(Ca),text:o(Da)};return r;function o(a){return i;function i(l){return Aa(r,a,l)}}}function Gr(e){for(;!In(e););return e}var Ta=/[\0\t\n\r]/g;function qr(){let e=1,t="",n=!0,r;return o;function o(a,i,l){let s=[],u,c,d,m,p;for(a=t+(typeof a=="string"?a.toString():new TextDecoder(i||void 0).decode(a)),d=0,t="",n&&(a.charCodeAt(0)===65279&&d++,n=void 0);d<a.length;){if(Ta.lastIndex=d,u=Ta.exec(a),m=u&&u.index!==void 0?u.index:a.length,p=a.charCodeAt(m),!u){t=a.slice(d);break}if(p===10&&d===m&&r)s.push(-3),r=void 0;else switch(r&&(s.push(-5),r=void 0),d<m&&(s.push(a.slice(d,m)),e+=m-d),p){case 0:{s.push(65533),e++;break}case 9:{for(c=Math.ceil(e/4)*4,s.push(-2);e++<c;)s.push(-1);break}case 10:{s.push(-4),e=1;break}default:r=!0,e=1}d=m+1}return l&&(r&&s.push(-5),t&&s.push(t),s.push(null)),s}}var zd=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function Fa(e){return e.replace(zd,Ld)}function Ld(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){let o=n.charCodeAt(1),a=o===120||o===88;return vn(n.slice(a?2:1),a?16:10)}return wt(n)||e}var La={}.hasOwnProperty;function $r(e,t,n){return typeof t!="string"&&(n=t,t=void 0),Md(n)(Gr(Vr(n).document().write(qr()(e,t,!0))))}function Md(e){let t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:a(Xo),autolinkProtocol:$,autolinkEmail:$,atxHeading:a(Jo),blockQuote:a(Le),characterEscape:$,characterReference:$,codeFenced:a(Ze),codeFencedFenceInfo:i,codeFencedFenceMeta:i,codeIndented:a(Ze,i),codeText:a(ht,i),codeTextData:$,data:$,codeFlowValue:$,definition:a(tr),definitionDestinationString:i,definitionLabelString:i,definitionTitleString:i,emphasis:a(Bs),hardBreakEscape:a(Qo),hardBreakTrailing:a(Qo),htmlFlow:a(Yo,i),htmlFlowData:$,htmlText:a(Yo,i),htmlTextData:$,image:a(js),label:i,link:a(Xo),listItem:a(Hs),listItemValue:m,listOrdered:a(Zo,d),listUnordered:a(Zo),paragraph:a(Us),reference:g,referenceString:i,resourceDestinationString:i,resourceTitleString:i,setextHeading:a(Jo),strong:a(Vs),thematicBreak:a(qs)},exit:{atxHeading:s(),atxHeadingSequence:M,autolink:s(),autolinkEmail:It,autolinkProtocol:se,blockQuote:s(),characterEscapeValue:w,characterReferenceMarkerHexadecimal:Xe,characterReferenceMarkerNumeric:Xe,characterReferenceValue:er,characterReference:an,codeFenced:s(b),codeFencedFence:y,codeFencedFenceInfo:p,codeFencedFenceMeta:f,codeFlowValue:w,codeIndented:s(k),codeText:s(E),codeTextData:w,data:w,definition:s(),definitionDestinationString:z,definitionLabelString:P,definitionTitleString:S,emphasis:s(),hardBreakEscape:s(W),hardBreakTrailing:s(W),htmlFlow:s(A),htmlFlowData:w,htmlText:s(_),htmlTextData:w,image:s(Y),label:Ee,labelText:he,lineEnding:re,link:s(j),listItem:s(),listOrdered:s(),listUnordered:s(),paragraph:s(),referenceString:ge,resourceDestinationString:h,resourceTitleString:we,resource:ze,setextHeading:s(q),setextHeadingLineSequence:B,setextHeadingText:v,strong:s(),thematicBreak:s()}};Ma(t,(e||{}).mdastExtensions||[]);let n={};return r;function r(x){let D={type:"root",children:[]},R={stack:[D],tokenStack:[],config:t,enter:l,exit:u,buffer:i,resume:c,data:n},V=[],X=-1;for(;++X<x.length;)if(x[X][1].type==="listOrdered"||x[X][1].type==="listUnordered")if(x[X][0]==="enter")V.push(X);else{let Pe=V.pop();X=o(x,Pe,X)}for(X=-1;++X<x.length;){let Pe=t[x[X][0]];La.call(Pe,x[X][1].type)&&Pe[x[X][1].type].call(Object.assign({sliceSerialize:x[X][2].sliceSerialize},R),x[X][1])}if(R.tokenStack.length>0){let Pe=R.tokenStack[R.tokenStack.length-1];(Pe[1]||za).call(R,void 0,Pe[0])}for(D.position={start:Qe(x.length>0?x[0][1].start:{line:1,column:1,offset:0}),end:Qe(x.length>0?x[x.length-2][1].end:{line:1,column:1,offset:0})},X=-1;++X<t.transforms.length;)D=t.transforms[X](D)||D;return D}function o(x,D,R){let V=D-1,X=-1,Pe=!1,et,Me,At,Tt;for(;++V<=R;){let be=x[V];switch(be[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{be[0]==="enter"?X++:X--,Tt=void 0;break}case"lineEndingBlank":{be[0]==="enter"&&(et&&!Tt&&!X&&!At&&(At=V),Tt=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Tt=void 0}if(!X&&be[0]==="enter"&&be[1].type==="listItemPrefix"||X===-1&&be[0]==="exit"&&(be[1].type==="listUnordered"||be[1].type==="listOrdered")){if(et){let gt=V;for(Me=void 0;gt--;){let Oe=x[gt];if(Oe[1].type==="lineEnding"||Oe[1].type==="lineEndingBlank"){if(Oe[0]==="exit")continue;Me&&(x[Me][1].type="lineEndingBlank",Pe=!0),Oe[1].type="lineEnding",Me=gt}else if(!(Oe[1].type==="linePrefix"||Oe[1].type==="blockQuotePrefix"||Oe[1].type==="blockQuotePrefixWhitespace"||Oe[1].type==="blockQuoteMarker"||Oe[1].type==="listItemIndent"))break}At&&(!Me||At<Me)&&(et._spread=!0),et.end=Object.assign({},Me?x[Me][1].start:be[1].end),x.splice(Me||V,0,["exit",et,be[2]]),V++,R++}if(be[1].type==="listItemPrefix"){let gt={type:"listItem",_spread:!1,start:Object.assign({},be[1].start),end:void 0};et=gt,x.splice(V,0,["enter",gt,be[2]]),V++,R++,At=void 0,Tt=!0}}}return x[D][1]._spread=Pe,R}function a(x,D){return R;function R(V){l.call(this,x(V),V),D&&D.call(this,V)}}function i(){this.stack.push({type:"fragment",children:[]})}function l(x,D,R){this.stack[this.stack.length-1].children.push(x),this.stack.push(x),this.tokenStack.push([D,R]),x.position={start:Qe(D.start),end:void 0}}function s(x){return D;function D(R){x&&x.call(this,R),u.call(this,R)}}function u(x,D){let R=this.stack.pop(),V=this.tokenStack.pop();if(V)V[0].type!==x.type&&(D?D.call(this,x,V[0]):(V[1]||za).call(this,x,V[0]));else throw new Error("Cannot close `"+x.type+"` ("+We({start:x.start,end:x.end})+"): it\u2019s not open");R.position.end=Qe(x.end)}function c(){return it(this.stack.pop())}function d(){this.data.expectingFirstListItemValue=!0}function m(x){if(this.data.expectingFirstListItemValue){let D=this.stack[this.stack.length-2];D.start=Number.parseInt(this.sliceSerialize(x),10),this.data.expectingFirstListItemValue=void 0}}function p(){let x=this.resume(),D=this.stack[this.stack.length-1];D.lang=x}function f(){let x=this.resume(),D=this.stack[this.stack.length-1];D.meta=x}function y(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function b(){let x=this.resume(),D=this.stack[this.stack.length-1];D.value=x.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function k(){let x=this.resume(),D=this.stack[this.stack.length-1];D.value=x.replace(/(\r?\n|\r)$/g,"")}function P(x){let D=this.resume(),R=this.stack[this.stack.length-1];R.label=D,R.identifier=ce(this.sliceSerialize(x)).toLowerCase()}function S(){let x=this.resume(),D=this.stack[this.stack.length-1];D.title=x}function z(){let x=this.resume(),D=this.stack[this.stack.length-1];D.url=x}function M(x){let D=this.stack[this.stack.length-1];if(!D.depth){let R=this.sliceSerialize(x).length;D.depth=R}}function v(){this.data.setextHeadingSlurpLineEnding=!0}function B(x){let D=this.stack[this.stack.length-1];D.depth=this.sliceSerialize(x).codePointAt(0)===61?1:2}function q(){this.data.setextHeadingSlurpLineEnding=void 0}function $(x){let R=this.stack[this.stack.length-1].children,V=R[R.length-1];(!V||V.type!=="text")&&(V=Gs(),V.position={start:Qe(x.start),end:void 0},R.push(V)),this.stack.push(V)}function w(x){let D=this.stack.pop();D.value+=this.sliceSerialize(x),D.position.end=Qe(x.end)}function re(x){let D=this.stack[this.stack.length-1];if(this.data.atHardBreak){let R=D.children[D.children.length-1];R.position.end=Qe(x.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(D.type)&&($.call(this,x),w.call(this,x))}function W(){this.data.atHardBreak=!0}function A(){let x=this.resume(),D=this.stack[this.stack.length-1];D.value=x}function _(){let x=this.resume(),D=this.stack[this.stack.length-1];D.value=x}function E(){let x=this.resume(),D=this.stack[this.stack.length-1];D.value=x}function j(){let x=this.stack[this.stack.length-1];if(this.data.inReference){let D=this.data.referenceType||"shortcut";x.type+="Reference",x.referenceType=D,delete x.url,delete x.title}else delete x.identifier,delete x.label;this.data.referenceType=void 0}function Y(){let x=this.stack[this.stack.length-1];if(this.data.inReference){let D=this.data.referenceType||"shortcut";x.type+="Reference",x.referenceType=D,delete x.url,delete x.title}else delete x.identifier,delete x.label;this.data.referenceType=void 0}function he(x){let D=this.sliceSerialize(x),R=this.stack[this.stack.length-2];R.label=Fa(D),R.identifier=ce(D).toLowerCase()}function Ee(){let x=this.stack[this.stack.length-1],D=this.resume(),R=this.stack[this.stack.length-1];if(this.data.inReference=!0,R.type==="link"){let V=x.children;R.children=V}else R.alt=D}function h(){let x=this.resume(),D=this.stack[this.stack.length-1];D.url=x}function we(){let x=this.resume(),D=this.stack[this.stack.length-1];D.title=x}function ze(){this.data.inReference=void 0}function g(){this.data.referenceType="collapsed"}function ge(x){let D=this.resume(),R=this.stack[this.stack.length-1];R.label=D,R.identifier=ce(this.sliceSerialize(x)).toLowerCase(),this.data.referenceType="full"}function Xe(x){this.data.characterReferenceType=x.type}function er(x){let D=this.sliceSerialize(x),R=this.data.characterReferenceType,V;R?(V=vn(D,R==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):V=wt(D);let X=this.stack[this.stack.length-1];X.value+=V}function an(x){let D=this.stack.pop();D.position.end=Qe(x.end)}function se(x){w.call(this,x);let D=this.stack[this.stack.length-1];D.url=this.sliceSerialize(x)}function It(x){w.call(this,x);let D=this.stack[this.stack.length-1];D.url="mailto:"+this.sliceSerialize(x)}function Le(){return{type:"blockquote",children:[]}}function Ze(){return{type:"code",lang:null,meta:null,value:""}}function ht(){return{type:"inlineCode",value:""}}function tr(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function Bs(){return{type:"emphasis",children:[]}}function Jo(){return{type:"heading",depth:0,children:[]}}function Qo(){return{type:"break"}}function Yo(){return{type:"html",value:""}}function js(){return{type:"image",title:null,url:"",alt:null}}function Xo(){return{type:"link",title:null,url:"",children:[]}}function Zo(x){return{type:"list",ordered:x.type==="listOrdered",start:null,spread:x._spread,children:[]}}function Hs(x){return{type:"listItem",spread:x._spread,checked:null,children:[]}}function Us(){return{type:"paragraph",children:[]}}function Vs(){return{type:"strong",children:[]}}function Gs(){return{type:"text",value:""}}function qs(){return{type:"thematicBreak"}}}function Qe(e){return{line:e.line,column:e.column,offset:e.offset}}function Ma(e,t){let n=-1;for(;++n<t.length;){let r=t[n];Array.isArray(r)?Ma(e,r):Od(e,r)}}function Od(e,t){let n;for(n in t)if(La.call(t,n))switch(n){case"canContainEols":{let r=t[n];r&&e[n].push(...r);break}case"transforms":{let r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{let r=t[n];r&&Object.assign(e[n],r);break}}}function za(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+We({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+We({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+We({start:t.start,end:t.end})+") is still open")}function Ln(e){let t=this;t.parser=n;function n(r){return $r(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function Oa(e,t){let n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function Na(e,t){let n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function Ra(e,t){let n=t.value?t.value+`
`:"",r={};t.lang&&(r.className=["language-"+t.lang]);let o={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(o.data={meta:t.meta}),e.patch(t,o),o=e.applyData(t,o),o={type:"element",tagName:"pre",properties:{},children:[o]},e.patch(t,o),o}function _a(e,t){let n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Ba(e,t){let n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function ja(e,t){let n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),o=Se(r.toLowerCase()),a=e.footnoteOrder.indexOf(r),i,l=e.footnoteCounts.get(r);l===void 0?(l=0,e.footnoteOrder.push(r),i=e.footnoteOrder.length):i=a+1,l+=1,e.footnoteCounts.set(r,l);let s={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+o,id:n+"fnref-"+o+(l>1?"-"+l:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(i)}]};e.patch(t,s);let u={type:"element",tagName:"sup",properties:{},children:[s]};return e.patch(t,u),e.applyData(t,u)}function Ha(e,t){let n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Ua(e,t){if(e.options.allowDangerousHtml){let n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function Mn(e,t){let n=t.referenceType,r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];let o=e.all(t),a=o[0];a&&a.type==="text"?a.value="["+a.value:o.unshift({type:"text",value:"["});let i=o[o.length-1];return i&&i.type==="text"?i.value+=r:o.push({type:"text",value:r}),o}function Va(e,t){let n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Mn(e,t);let o={src:Se(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(o.title=r.title);let a={type:"element",tagName:"img",properties:o,children:[]};return e.patch(t,a),e.applyData(t,a)}function Ga(e,t){let n={src:Se(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);let r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function qa(e,t){let n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);let r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function $a(e,t){let n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Mn(e,t);let o={href:Se(r.url||"")};r.title!==null&&r.title!==void 0&&(o.title=r.title);let a={type:"element",tagName:"a",properties:o,children:e.all(t)};return e.patch(t,a),e.applyData(t,a)}function Wa(e,t){let n={href:Se(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);let r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function Ka(e,t,n){let r=e.all(t),o=n?Nd(n):Ja(t),a={},i=[];if(typeof t.checked=="boolean"){let c=r[0],d;c&&c.type==="element"&&c.tagName==="p"?d=c:(d={type:"element",tagName:"p",properties:{},children:[]},r.unshift(d)),d.children.length>0&&d.children.unshift({type:"text",value:" "}),d.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),a.className=["task-list-item"]}let l=-1;for(;++l<r.length;){let c=r[l];(o||l!==0||c.type!=="element"||c.tagName!=="p")&&i.push({type:"text",value:`
`}),c.type==="element"&&c.tagName==="p"&&!o?i.push(...c.children):i.push(c)}let s=r[r.length-1];s&&(o||s.type!=="element"||s.tagName!=="p")&&i.push({type:"text",value:`
`});let u={type:"element",tagName:"li",properties:a,children:i};return e.patch(t,u),e.applyData(t,u)}function Nd(e){let t=!1;if(e.type==="list"){t=e.spread||!1;let n=e.children,r=-1;for(;!t&&++r<n.length;)t=Ja(n[r])}return t}function Ja(e){let t=e.spread;return t??e.children.length>1}function Qa(e,t){let n={},r=e.all(t),o=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++o<r.length;){let i=r[o];if(i.type==="element"&&i.tagName==="li"&&i.properties&&Array.isArray(i.properties.className)&&i.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}let a={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,a),e.applyData(t,a)}function Ya(e,t){let n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Xa(e,t){let n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function Za(e,t){let n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function el(e,t){let n=e.all(t),r=n.shift(),o=[];if(r){let i={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],i),o.push(i)}if(n.length>0){let i={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},l=yt(t.children[1]),s=wn(t.children[t.children.length-1]);l&&s&&(i.position={start:l,end:s}),o.push(i)}let a={type:"element",tagName:"table",properties:{},children:e.wrap(o,!0)};return e.patch(t,a),e.applyData(t,a)}function tl(e,t,n){let r=n?n.children:void 0,a=(r?r.indexOf(t):1)===0?"th":"td",i=n&&n.type==="table"?n.align:void 0,l=i?i.length:t.children.length,s=-1,u=[];for(;++s<l;){let d=t.children[s],m={},p=i?i[s]:void 0;p&&(m.align=p);let f={type:"element",tagName:a,properties:m,children:[]};d&&(f.children=e.all(d),e.patch(d,f),f=e.applyData(d,f)),u.push(f)}let c={type:"element",tagName:"tr",properties:{},children:e.wrap(u,!0)};return e.patch(t,c),e.applyData(t,c)}function nl(e,t){let n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function ol(e){let t=String(e),n=/\r?\n|\r/g,r=n.exec(t),o=0,a=[];for(;r;)a.push(rl(t.slice(o,r.index),o>0,!0),r[0]),o=r.index+r[0].length,r=n.exec(t);return a.push(rl(t.slice(o),o>0,!1)),a.join("")}function rl(e,t,n){let r=0,o=e.length;if(t){let a=e.codePointAt(r);for(;a===9||a===32;)r++,a=e.codePointAt(r)}if(n){let a=e.codePointAt(o-1);for(;a===9||a===32;)o--,a=e.codePointAt(o-1)}return o>r?e.slice(r,o):""}function il(e,t){let n={type:"text",value:ol(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function al(e,t){let n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}var ll={blockquote:Oa,break:Na,code:Ra,delete:_a,emphasis:Ba,footnoteReference:ja,heading:Ha,html:Ua,imageReference:Va,image:Ga,inlineCode:qa,linkReference:$a,link:Wa,listItem:Ka,list:Qa,paragraph:Ya,root:Xa,strong:Za,table:el,tableCell:nl,tableRow:tl,text:il,thematicBreak:al,toml:On,yaml:On,definition:On,footnoteDefinition:On};function On(){}var sl=typeof self=="object"?self:globalThis,Rd=(e,t)=>{let n=(o,a)=>(e.set(a,o),o),r=o=>{if(e.has(o))return e.get(o);let[a,i]=t[o];switch(a){case 0:case-1:return n(i,o);case 1:{let l=n([],o);for(let s of i)l.push(r(s));return l}case 2:{let l=n({},o);for(let[s,u]of i)l[r(s)]=r(u);return l}case 3:return n(new Date(i),o);case 4:{let{source:l,flags:s}=i;return n(new RegExp(l,s),o)}case 5:{let l=n(new Map,o);for(let[s,u]of i)l.set(r(s),r(u));return l}case 6:{let l=n(new Set,o);for(let s of i)l.add(r(s));return l}case 7:{let{name:l,message:s}=i;return n(new sl[l](s),o)}case 8:return n(BigInt(i),o);case"BigInt":return n(Object(BigInt(i)),o)}return n(new sl[a](i),o)};return r},Qr=e=>Rd(new Map,e)(0);var vt="",{toString:_d}={},{keys:Bd}=Object,Kt=e=>{let t=typeof e;if(t!=="object"||!e)return[0,t];let n=_d.call(e).slice(8,-1);switch(n){case"Array":return[1,vt];case"Object":return[2,vt];case"Date":return[3,vt];case"RegExp":return[4,vt];case"Map":return[5,vt];case"Set":return[6,vt]}return n.includes("Array")?[1,n]:n.includes("Error")?[7,n]:[2,n]},jn=([e,t])=>e===0&&(t==="function"||t==="symbol"),jd=(e,t,n,r)=>{let o=(i,l)=>{let s=r.push(i)-1;return n.set(l,s),s},a=i=>{if(n.has(i))return n.get(i);let[l,s]=Kt(i);switch(l){case 0:{let c=i;switch(s){case"bigint":l=8,c=i.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+s);c=null;break;case"undefined":return o([-1],i)}return o([l,c],i)}case 1:{if(s)return o([s,[...i]],i);let c=[],d=o([l,c],i);for(let m of i)c.push(a(m));return d}case 2:{if(s)switch(s){case"BigInt":return o([s,i.toString()],i);case"Boolean":case"Number":case"String":return o([s,i.valueOf()],i)}if(t&&"toJSON"in i)return a(i.toJSON());let c=[],d=o([l,c],i);for(let m of Bd(i))(e||!jn(Kt(i[m])))&&c.push([a(m),a(i[m])]);return d}case 3:return o([l,i.toISOString()],i);case 4:{let{source:c,flags:d}=i;return o([l,{source:c,flags:d}],i)}case 5:{let c=[],d=o([l,c],i);for(let[m,p]of i)(e||!(jn(Kt(m))||jn(Kt(p))))&&c.push([a(m),a(p)]);return d}case 6:{let c=[],d=o([l,c],i);for(let m of i)(e||!jn(Kt(m)))&&c.push(a(m));return d}}let{message:u}=i;return o([l,{name:s,message:u}],i)};return a},Yr=(e,{json:t,lossy:n}={})=>{let r=[];return jd(!(t||n),!!t,new Map,r)(e),r};var St=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?Qr(Yr(e,t)):structuredClone(e):(e,t)=>Qr(Yr(e,t));function Hd(e,t){let n=[{type:"text",value:"\u21A9"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function Ud(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function ul(e){let t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||Hd,r=e.options.footnoteBackLabel||Ud,o=e.options.footnoteLabel||"Footnotes",a=e.options.footnoteLabelTagName||"h2",i=e.options.footnoteLabelProperties||{className:["sr-only"]},l=[],s=-1;for(;++s<e.footnoteOrder.length;){let u=e.footnoteById.get(e.footnoteOrder[s]);if(!u)continue;let c=e.all(u),d=String(u.identifier).toUpperCase(),m=Se(d.toLowerCase()),p=0,f=[],y=e.footnoteCounts.get(d);for(;y!==void 0&&++p<=y;){f.length>0&&f.push({type:"text",value:" "});let P=typeof n=="string"?n:n(s,p);typeof P=="string"&&(P={type:"text",value:P}),f.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+m+(p>1?"-"+p:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(s,p),className:["data-footnote-backref"]},children:Array.isArray(P)?P:[P]})}let b=c[c.length-1];if(b&&b.type==="element"&&b.tagName==="p"){let P=b.children[b.children.length-1];P&&P.type==="text"?P.value+=" ":b.children.push({type:"text",value:" "}),b.children.push(...f)}else c.push(...f);let k={type:"element",tagName:"li",properties:{id:t+"fn-"+m},children:e.wrap(c,!0)};e.patch(u,k),l.push(k)}if(l.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:a,properties:{...St(i),id:"footnote-label"},children:[{type:"text",value:o}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(l,!0)},{type:"text",value:`
`}]}}var Ye=function(e){if(e==null)return $d;if(typeof e=="function")return Hn(e);if(typeof e=="object")return Array.isArray(e)?Vd(e):Gd(e);if(typeof e=="string")return qd(e);throw new Error("Expected function, string, or object as test")};function Vd(e){let t=[],n=-1;for(;++n<e.length;)t[n]=Ye(e[n]);return Hn(r);function r(...o){let a=-1;for(;++a<t.length;)if(t[a].apply(this,o))return!0;return!1}}function Gd(e){let t=e;return Hn(n);function n(r){let o=r,a;for(a in e)if(o[a]!==t[a])return!1;return!0}}function qd(e){return Hn(t);function t(n){return n&&n.type===e}}function Hn(e){return t;function t(n,r,o){return!!(Wd(n)&&e.call(this,n,typeof r=="number"?r:void 0,o||void 0))}}function $d(){return!0}function Wd(e){return e!==null&&typeof e=="object"&&"type"in e}var cl=[],Un=!0,dt=!1,Vn="skip";function Jt(e,t,n,r){let o;typeof t=="function"&&typeof n!="function"?(r=n,n=t):o=t;let a=Ye(o),i=r?-1:1;l(e,void 0,[])();function l(s,u,c){let d=s&&typeof s=="object"?s:{};if(typeof d.type=="string"){let p=typeof d.tagName=="string"?d.tagName:typeof d.name=="string"?d.name:void 0;Object.defineProperty(m,"name",{value:"node ("+(s.type+(p?"<"+p+">":""))+")"})}return m;function m(){let p=cl,f,y,b;if((!t||a(s,u,c[c.length-1]||void 0))&&(p=Kd(n(s,c)),p[0]===dt))return p;if("children"in s&&s.children){let k=s;if(k.children&&p[0]!==Vn)for(y=(r?k.children.length:-1)+i,b=c.concat(k);y>-1&&y<k.children.length;){let P=k.children[y];if(f=l(P,y,b)(),f[0]===dt)return f;y=typeof f[1]=="number"?f[1]:y+i}}return p}}}function Kd(e){return Array.isArray(e)?e:typeof e=="number"?[Un,e]:e==null?cl:[e]}function mt(e,t,n,r){let o,a,i;typeof t=="function"&&typeof n!="function"?(a=void 0,i=t,o=n):(a=t,i=n,o=r),Jt(e,a,l,o);function l(s,u){let c=u[u.length-1],d=c?c.children.indexOf(s):void 0;return i(s,d,c)}}var Xr={}.hasOwnProperty,Jd={};function ml(e,t){let n=t||Jd,r=new Map,o=new Map,a=new Map,i={...ll,...n.handlers},l={all:u,applyData:Yd,definitionById:r,footnoteById:o,footnoteCounts:a,footnoteOrder:[],handlers:i,one:s,options:n,patch:Qd,wrap:Zd};return mt(e,function(c){if(c.type==="definition"||c.type==="footnoteDefinition"){let d=c.type==="definition"?r:o,m=String(c.identifier).toUpperCase();d.has(m)||d.set(m,c)}}),l;function s(c,d){let m=c.type,p=l.handlers[m];if(Xr.call(l.handlers,m)&&p)return p(l,c,d);if(l.options.passThrough&&l.options.passThrough.includes(m)){if("children"in c){let{children:y,...b}=c,k=St(b);return k.children=l.all(c),k}return St(c)}return(l.options.unknownHandler||Xd)(l,c,d)}function u(c){let d=[];if("children"in c){let m=c.children,p=-1;for(;++p<m.length;){let f=l.one(m[p],c);if(f){if(p&&m[p-1].type==="break"&&(!Array.isArray(f)&&f.type==="text"&&(f.value=dl(f.value)),!Array.isArray(f)&&f.type==="element")){let y=f.children[0];y&&y.type==="text"&&(y.value=dl(y.value))}Array.isArray(f)?d.push(...f):d.push(f)}}}return d}}function Qd(e,t){e.position&&(t.position=Cr(e))}function Yd(e,t){let n=t;if(e&&e.data){let r=e.data.hName,o=e.data.hChildren,a=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{let i="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:i}}n.type==="element"&&a&&Object.assign(n.properties,St(a)),"children"in n&&n.children&&o!==null&&o!==void 0&&(n.children=o)}return n}function Xd(e,t){let n=t.data||{},r="value"in t&&!(Xr.call(n,"hProperties")||Xr.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function Zd(e,t){let n=[],r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function dl(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function Gn(e,t){let n=ml(e,t),r=n.one(e,void 0),o=ul(n),a=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return o&&("children"in a,a.children.push({type:"text",value:`
`},o)),a}function qn(e,t){return e&&"run"in e?async function(n,r){let o=Gn(n,{file:r,...t});await e.run(o,r)}:function(n,r){return Gn(n,{file:r,...e||t})}}function Zr(e){if(e)throw e}var Kn=ti(xl(),1);function Qt(e){if(typeof e!="object"||e===null)return!1;let t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function eo(){let e=[],t={run:n,use:r};return t;function n(...o){let a=-1,i=o.pop();if(typeof i!="function")throw new TypeError("Expected function as last argument, not "+i);l(null,...o);function l(s,...u){let c=e[++a],d=-1;if(s){i(s);return}for(;++d<o.length;)(u[d]===null||u[d]===void 0)&&(u[d]=o[d]);o=u,c?vl(c,l)(...u):i(null,...u)}}function r(o){if(typeof o!="function")throw new TypeError("Expected `middelware` to be a function, not "+o);return e.push(o),t}}function vl(e,t){let n;return r;function r(...i){let l=e.length>i.length,s;l&&i.push(o);try{s=e.apply(this,i)}catch(u){let c=u;if(l&&n)throw c;return o(c)}l||(s&&s.then&&typeof s.then=="function"?s.then(a,o):s instanceof Error?o(s):a(s))}function o(i,...l){n||(n=!0,t(i,...l))}function a(i){o(null,i)}}var Ce={basename:em,dirname:tm,extname:nm,join:rm,sep:"/"};function em(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');Yt(e);let n=0,r=-1,o=e.length,a;if(t===void 0||t.length===0||t.length>e.length){for(;o--;)if(e.codePointAt(o)===47){if(a){n=o+1;break}}else r<0&&(a=!0,r=o+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let i=-1,l=t.length-1;for(;o--;)if(e.codePointAt(o)===47){if(a){n=o+1;break}}else i<0&&(a=!0,i=o+1),l>-1&&(e.codePointAt(o)===t.codePointAt(l--)?l<0&&(r=o):(l=-1,r=i));return n===r?r=i:r<0&&(r=e.length),e.slice(n,r)}function tm(e){if(Yt(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function nm(e){Yt(e);let t=e.length,n=-1,r=0,o=-1,a=0,i;for(;t--;){let l=e.codePointAt(t);if(l===47){if(i){r=t+1;break}continue}n<0&&(i=!0,n=t+1),l===46?o<0?o=t:a!==1&&(a=1):o>-1&&(a=-1)}return o<0||n<0||a===0||a===1&&o===n-1&&o===r+1?"":e.slice(o,n)}function rm(...e){let t=-1,n;for(;++t<e.length;)Yt(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":om(n)}function om(e){Yt(e);let t=e.codePointAt(0)===47,n=im(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function im(e,t){let n="",r=0,o=-1,a=0,i=-1,l,s;for(;++i<=e.length;){if(i<e.length)l=e.codePointAt(i);else{if(l===47)break;l=47}if(l===47){if(!(o===i-1||a===1))if(o!==i-1&&a===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(s=n.lastIndexOf("/"),s!==n.length-1){s<0?(n="",r=0):(n=n.slice(0,s),r=n.length-1-n.lastIndexOf("/")),o=i,a=0;continue}}else if(n.length>0){n="",r=0,o=i,a=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(o+1,i):n=e.slice(o+1,i),r=i-o-1;o=i,a=0}else l===46&&a>-1?a++:a=-1}return n}function Yt(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}var Sl={cwd:am};function am(){return"/"}function Pt(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function Pl(e){if(typeof e=="string")e=new URL(e);else if(!Pt(e)){let t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){let t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return lm(e)}function lm(e){if(e.hostname!==""){let r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}let t=e.pathname,n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){let r=t.codePointAt(n+2);if(r===70||r===102){let o=new TypeError("File URL path must not include encoded / characters");throw o.code="ERR_INVALID_FILE_URL_PATH",o}}return decodeURIComponent(t)}var to=["history","path","basename","stem","extname","dirname"],pt=class{constructor(t){let n;t?Pt(t)?n={path:t}:typeof t=="string"||sm(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":Sl.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<to.length;){let a=to[r];a in n&&n[a]!==void 0&&n[a]!==null&&(this[a]=a==="history"?[...n[a]]:n[a])}let o;for(o in n)to.includes(o)||(this[o]=n[o])}get basename(){return typeof this.path=="string"?Ce.basename(this.path):void 0}set basename(t){ro(t,"basename"),no(t,"basename"),this.path=Ce.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?Ce.dirname(this.path):void 0}set dirname(t){Cl(this.basename,"dirname"),this.path=Ce.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?Ce.extname(this.path):void 0}set extname(t){if(no(t,"extname"),Cl(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=Ce.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){Pt(t)&&(t=Pl(t)),ro(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?Ce.basename(this.path,this.extname):void 0}set stem(t){ro(t,"stem"),no(t,"stem"),this.path=Ce.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){let o=this.message(t,n,r);throw o.fatal=!0,o}info(t,n,r){let o=this.message(t,n,r);return o.fatal=void 0,o}message(t,n,r){let o=new ne(t,n,r);return this.path&&(o.name=this.path+":"+o.name,o.file=this.path),o.fatal=!1,this.messages.push(o),o}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}};function no(e,t){if(e&&e.includes(Ce.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+Ce.sep+"`")}function ro(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function Cl(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function sm(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}var Dl=function(e){let r=this.constructor.prototype,o=r[e],a=function(){return o.apply(a,arguments)};return Object.setPrototypeOf(a,r),a};var um={}.hasOwnProperty,lo=class e extends Dl{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=eo()}copy(){let t=new e,n=-1;for(;++n<this.attachers.length;){let r=this.attachers[n];t.use(...r)}return t.data((0,Kn.default)(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(ao("data",this.frozen),this.namespace[t]=n,this):um.call(this.namespace,t)&&this.namespace[t]||void 0:t?(ao("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;let t=this;for(;++this.freezeIndex<this.attachers.length;){let[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);let o=n.call(t,...r);typeof o=="function"&&this.transformers.use(o)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();let n=Wn(t),r=this.parser||this.Parser;return oo("parse",r),r(String(n),n)}process(t,n){let r=this;return this.freeze(),oo("process",this.parser||this.Parser),io("process",this.compiler||this.Compiler),n?o(void 0,n):new Promise(o);function o(a,i){let l=Wn(t),s=r.parse(l);r.run(s,l,function(c,d,m){if(c||!d||!m)return u(c);let p=d,f=r.stringify(p,m);dm(f)?m.value=f:m.result=f,u(c,m)});function u(c,d){c||!d?i(c):a?a(d):n(void 0,d)}}}processSync(t){let n=!1,r;return this.freeze(),oo("processSync",this.parser||this.Parser),io("processSync",this.compiler||this.Compiler),this.process(t,o),Il("processSync","process",n),r;function o(a,i){n=!0,Zr(a),r=i}}run(t,n,r){El(t),this.freeze();let o=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?a(void 0,r):new Promise(a);function a(i,l){let s=Wn(n);o.run(t,s,u);function u(c,d,m){let p=d||t;c?l(c):i?i(p):r(void 0,p,m)}}}runSync(t,n){let r=!1,o;return this.run(t,n,a),Il("runSync","run",r),o;function a(i,l){Zr(i),o=l,r=!0}}stringify(t,n){this.freeze();let r=Wn(n),o=this.compiler||this.Compiler;return io("stringify",o),El(t),o(t,r)}use(t,...n){let r=this.attachers,o=this.namespace;if(ao("use",this.frozen),t!=null)if(typeof t=="function")s(t,n);else if(typeof t=="object")Array.isArray(t)?l(t):i(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function a(u){if(typeof u=="function")s(u,[]);else if(typeof u=="object")if(Array.isArray(u)){let[c,...d]=u;s(c,d)}else i(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function i(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");l(u.plugins),u.settings&&(o.settings=(0,Kn.default)(!0,o.settings,u.settings))}function l(u){let c=-1;if(u!=null)if(Array.isArray(u))for(;++c<u.length;){let d=u[c];a(d)}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function s(u,c){let d=-1,m=-1;for(;++d<r.length;)if(r[d][0]===u){m=d;break}if(m===-1)r.push([u,...c]);else if(c.length>0){let[p,...f]=c,y=r[m][1];Qt(y)&&Qt(p)&&(p=(0,Kn.default)(!0,y,p)),r[m]=[u,p,...f]}}}},so=new lo().freeze();function oo(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function io(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function ao(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function El(e){if(!Qt(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function Il(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function Wn(e){return cm(e)?e:new pt(e)}function cm(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function dm(e){return typeof e=="string"||mm(e)}function mm(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}var gm="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Al=[],Tl={allowDangerousHtml:!0},bm=/^(https?|ircs?|mailto|xmpp)$/i,km=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function uo(e){let t=e.allowedElements,n=e.allowElement,r=e.children||"",o=e.className,a=e.components,i=e.disallowedElements,l=e.rehypePlugins||Al,s=e.remarkPlugins||Al,u=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...Tl}:Tl,c=e.skipHtml,d=e.unwrapDisallowed,m=e.urlTransform||Fl,p=so().use(Ln).use(s).use(qn,u).use(l),f=new pt;typeof r=="string"?f.value=r:(""+r,void 0),t&&i&&void 0;for(let P of km)Object.hasOwn(e,P.from)&&(""+P.from+(P.to?"use `"+P.to+"` instead":"remove it")+gm+P.id,void 0);let y=p.parse(f),b=p.runSync(y,f);return o&&(b={type:"element",tagName:"div",properties:{className:o},children:b.type==="root"?b.children:[b]}),mt(b,k),Ir(b,{Fragment:pm,components:a,ignoreInvalidStyle:!0,jsx:fm,jsxs:hm,passKeys:!0,passNode:!0});function k(P,S,z){if(P.type==="raw"&&z&&typeof S=="number")return c?z.children.splice(S,1):z.children[S]={type:"text",value:P.value},S;if(P.type==="element"){let M;for(M in Bt)if(Object.hasOwn(Bt,M)&&Object.hasOwn(P.properties,M)){let v=P.properties[M],B=Bt[M];(B===null||B.includes(P.tagName))&&(P.properties[M]=m(String(v||""),M,P))}}if(P.type==="element"){let M=t?!t.includes(P.tagName):i?i.includes(P.tagName):!1;if(!M&&n&&typeof S=="number"&&(M=!n(P,S,z)),M&&z&&typeof S=="number")return d&&P.children?z.children.splice(S,1,...P.children):z.children.splice(S,1),S}}}function Fl(e){let t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),o=e.indexOf("/");return t<0||o>-1&&t>o||n>-1&&t>n||r>-1&&t>r||bm.test(e.slice(0,t))?e:""}function co(e,t){let n=String(e);if(typeof t!="string")throw new TypeError("Expected character");let r=0,o=n.indexOf(t);for(;o!==-1;)r++,o=n.indexOf(t,o+t.length);return r}function mo(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function po(e,t,n){let o=Ye((n||{}).ignore||[]),a=ym(t),i=-1;for(;++i<a.length;)Jt(e,"text",l);function l(u,c){let d=-1,m;for(;++d<c.length;){let p=c[d],f=m?m.children:void 0;if(o(p,f?f.indexOf(p):void 0,m))return;m=p}if(m)return s(u,c)}function s(u,c){let d=c[c.length-1],m=a[i][0],p=a[i][1],f=0,b=d.children.indexOf(u),k=!1,P=[];m.lastIndex=0;let S=m.exec(u.value);for(;S;){let z=S.index,M={index:S.index,input:S.input,stack:[...c,u]},v=p(...S,M);if(typeof v=="string"&&(v=v.length>0?{type:"text",value:v}:void 0),v===!1?m.lastIndex=z+1:(f!==z&&P.push({type:"text",value:u.value.slice(f,z)}),Array.isArray(v)?P.push(...v):v&&P.push(v),f=z+S[0].length,k=!0),!m.global)break;S=m.exec(u.value)}return k?(f<u.value.length&&P.push({type:"text",value:u.value.slice(f)}),d.children.splice(b,1,...P)):P=[u],b+P.length}}function ym(e){let t=[];if(!Array.isArray(e))throw new TypeError("Expected find and replace tuple or list of tuples");let n=!e[0]||Array.isArray(e[0])?e:[e],r=-1;for(;++r<n.length;){let o=n[r];t.push([wm(o[0]),xm(o[1])])}return t}function wm(e){return typeof e=="string"?new RegExp(mo(e),"g"):e}function xm(e){return typeof e=="function"?e:function(){return e}}var fo="phrasing",ho=["autolink","link","image","label"];function bo(){return{transforms:[Em],enter:{literalAutolink:vm,literalAutolinkEmail:go,literalAutolinkHttp:go,literalAutolinkWww:go},exit:{literalAutolink:Dm,literalAutolinkEmail:Cm,literalAutolinkHttp:Sm,literalAutolinkWww:Pm}}}function ko(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:fo,notInConstruct:ho},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:fo,notInConstruct:ho},{character:":",before:"[ps]",after:"\\/",inConstruct:fo,notInConstruct:ho}]}}function vm(e){this.enter({type:"link",title:null,url:"",children:[]},e)}function go(e){this.config.enter.autolinkProtocol.call(this,e)}function Sm(e){this.config.exit.autolinkProtocol.call(this,e)}function Pm(e){this.config.exit.data.call(this,e);let t=this.stack[this.stack.length-1];t.type,t.url="http://"+this.sliceSerialize(e)}function Cm(e){this.config.exit.autolinkEmail.call(this,e)}function Dm(e){this.exit(e)}function Em(e){po(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,Im],[/(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu,Am]],{ignore:["link","linkReference"]})}function Im(e,t,n,r,o){let a="";if(!zl(o)||(/^w/i.test(t)&&(n=t+n,t="",a="http://"),!Tm(n)))return!1;let i=Fm(n+r);if(!i[0])return!1;let l={type:"link",title:null,url:a+t+i[0],children:[{type:"text",value:t+i[0]}]};return i[1]?[l,{type:"text",value:i[1]}]:l}function Am(e,t,n,r){return!zl(r,!0)||/[-\d_]$/.test(n)?!1:{type:"link",title:null,url:"mailto:"+t+"@"+n,children:[{type:"text",value:t+"@"+n}]}}function Tm(e){let t=e.split(".");return!(t.length<2||t[t.length-1]&&(/_/.test(t[t.length-1])||!/[a-zA-Z\d]/.test(t[t.length-1]))||t[t.length-2]&&(/_/.test(t[t.length-2])||!/[a-zA-Z\d]/.test(t[t.length-2])))}function Fm(e){let t=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!t)return[e,void 0];e=e.slice(0,t.index);let n=t[0],r=n.indexOf(")"),o=co(e,"("),a=co(e,")");for(;r!==-1&&o>a;)e+=n.slice(0,r+1),n=n.slice(r+1),r=n.indexOf(")"),a++;return[e,n]}function zl(e,t){let n=e.input.charCodeAt(e.index-1);return(e.index===0||Ae(n)||lt(n))&&(!t||n!==47)}Ll.peek=jm;function yo(){return{enter:{gfmFootnoteDefinition:zm,gfmFootnoteDefinitionLabelString:Lm,gfmFootnoteCall:Nm,gfmFootnoteCallString:Rm},exit:{gfmFootnoteDefinition:Om,gfmFootnoteDefinitionLabelString:Mm,gfmFootnoteCall:Bm,gfmFootnoteCallString:_m}}}function wo(){return{unsafe:[{character:"[",inConstruct:["phrasing","label","reference"]}],handlers:{footnoteDefinition:Hm,footnoteReference:Ll}}}function zm(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e)}function Lm(){this.buffer()}function Mm(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.label=t,n.identifier=ce(this.sliceSerialize(e)).toLowerCase()}function Om(e){this.exit(e)}function Nm(e){this.enter({type:"footnoteReference",identifier:"",label:""},e)}function Rm(){this.buffer()}function _m(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.label=t,n.identifier=ce(this.sliceSerialize(e)).toLowerCase()}function Bm(e){this.exit(e)}function Ll(e,t,n,r){let o=n.createTracker(r),a=o.move("[^"),i=n.enter("footnoteReference"),l=n.enter("reference");return a+=o.move(n.safe(n.associationId(e),{...o.current(),before:a,after:"]"})),l(),i(),a+=o.move("]"),a}function jm(){return"["}function Hm(e,t,n,r){let o=n.createTracker(r),a=o.move("[^"),i=n.enter("footnoteDefinition"),l=n.enter("label");return a+=o.move(n.safe(n.associationId(e),{...o.current(),before:a,after:"]"})),l(),a+=o.move("]:"+(e.children&&e.children.length>0?" ":"")),o.shift(4),a+=o.move(n.indentLines(n.containerFlow(e,o.current()),Um)),i(),a}function Um(e,t,n){return t===0?e:(n?"":"    ")+e}var Vm=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];Ml.peek=$m;function xo(){return{canContainEols:["delete"],enter:{strikethrough:Gm},exit:{strikethrough:qm}}}function vo(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:Vm}],handlers:{delete:Ml}}}function Gm(e){this.enter({type:"delete",children:[]},e)}function qm(e){this.exit(e)}function Ml(e,t,n,r){let o=n.createTracker(r),a=n.enter("strikethrough"),i=o.move("~~");return i+=n.containerPhrasing(e,{...o.current(),before:i,after:"~"}),i+=o.move("~~"),a(),i}function $m(){return"~"}function Nl(e,t={}){let n=(t.align||[]).concat(),r=t.stringLength||Km,o=[],a=[],i=[],l=[],s=0,u=-1;for(;++u<e.length;){let f=[],y=[],b=-1;for(e[u].length>s&&(s=e[u].length);++b<e[u].length;){let k=Wm(e[u][b]);if(t.alignDelimiters!==!1){let P=r(k);y[b]=P,(l[b]===void 0||P>l[b])&&(l[b]=P)}f.push(k)}a[u]=f,i[u]=y}let c=-1;if(typeof n=="object"&&"length"in n)for(;++c<s;)o[c]=Ol(n[c]);else{let f=Ol(n);for(;++c<s;)o[c]=f}c=-1;let d=[],m=[];for(;++c<s;){let f=o[c],y="",b="";f===99?(y=":",b=":"):f===108?y=":":f===114&&(b=":");let k=t.alignDelimiters===!1?1:Math.max(1,l[c]-y.length-b.length),P=y+"-".repeat(k)+b;t.alignDelimiters!==!1&&(k=y.length+k+b.length,k>l[c]&&(l[c]=k),m[c]=k),d[c]=P}a.splice(1,0,d),i.splice(1,0,m),u=-1;let p=[];for(;++u<a.length;){let f=a[u],y=i[u];c=-1;let b=[];for(;++c<s;){let k=f[c]||"",P="",S="";if(t.alignDelimiters!==!1){let z=l[c]-(y[c]||0),M=o[c];M===114?P=" ".repeat(z):M===99?z%2?(P=" ".repeat(z/2+.5),S=" ".repeat(z/2-.5)):(P=" ".repeat(z/2),S=P):S=" ".repeat(z)}t.delimiterStart!==!1&&!c&&b.push("|"),t.padding!==!1&&!(t.alignDelimiters===!1&&k==="")&&(t.delimiterStart!==!1||c)&&b.push(" "),t.alignDelimiters!==!1&&b.push(P),b.push(k),t.alignDelimiters!==!1&&b.push(S),t.padding!==!1&&b.push(" "),(t.delimiterEnd!==!1||c!==s-1)&&b.push("|")}p.push(t.delimiterEnd===!1?b.join("").replace(/ +$/,""):b.join(""))}return p.join(`
`)}function Wm(e){return e==null?"":String(e)}function Km(e){return e.length}function Ol(e){let t=typeof e=="string"?e.codePointAt(0):0;return t===67||t===99?99:t===76||t===108?108:t===82||t===114?114:0}function Rl(e,t,n,r){let o=n.enter("blockquote"),a=n.createTracker(r);a.move("> "),a.shift(2);let i=n.indentLines(n.containerFlow(e,a.current()),Jm);return o(),i}function Jm(e,t,n){return">"+(n?"":" ")+e}function Bl(e,t){return _l(e,t.inConstruct,!0)&&!_l(e,t.notInConstruct,!1)}function _l(e,t,n){if(typeof t=="string"&&(t=[t]),!t||t.length===0)return n;let r=-1;for(;++r<t.length;)if(e.includes(t[r]))return!0;return!1}function So(e,t,n,r){let o=-1;for(;++o<n.unsafe.length;)if(n.unsafe[o].character===`
`&&Bl(n.stack,n.unsafe[o]))return/[ \t]/.test(r.before)?"":" ";return`\\
`}function jl(e,t){let n=String(e),r=n.indexOf(t),o=r,a=0,i=0;if(typeof t!="string")throw new TypeError("Expected substring");for(;r!==-1;)r===o?++a>i&&(i=a):a=1,o=r+t.length,r=n.indexOf(t,o);return i}function Hl(e,t){return!!(t.options.fences===!1&&e.value&&!e.lang&&/[^ \r\n]/.test(e.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))}function Ul(e){let t=e.options.fence||"`";if(t!=="`"&&t!=="~")throw new Error("Cannot serialize code with `"+t+"` for `options.fence`, expected `` ` `` or `~`");return t}function Vl(e,t,n,r){let o=Ul(n),a=e.value||"",i=o==="`"?"GraveAccent":"Tilde";if(Hl(e,n)){let d=n.enter("codeIndented"),m=n.indentLines(a,Qm);return d(),m}let l=n.createTracker(r),s=o.repeat(Math.max(jl(a,o)+1,3)),u=n.enter("codeFenced"),c=l.move(s);if(e.lang){let d=n.enter(`codeFencedLang${i}`);c+=l.move(n.safe(e.lang,{before:c,after:" ",encode:["`"],...l.current()})),d()}if(e.lang&&e.meta){let d=n.enter(`codeFencedMeta${i}`);c+=l.move(" "),c+=l.move(n.safe(e.meta,{before:c,after:`
`,encode:["`"],...l.current()})),d()}return c+=l.move(`
`),a&&(c+=l.move(a+`
`)),c+=l.move(s),u(),c}function Qm(e,t,n){return(n?"":"    ")+e}function Ct(e){let t=e.options.quote||'"';if(t!=='"'&&t!=="'")throw new Error("Cannot serialize title with `"+t+"` for `options.quote`, expected `\"`, or `'`");return t}function Gl(e,t,n,r){let o=Ct(n),a=o==='"'?"Quote":"Apostrophe",i=n.enter("definition"),l=n.enter("label"),s=n.createTracker(r),u=s.move("[");return u+=s.move(n.safe(n.associationId(e),{before:u,after:"]",...s.current()})),u+=s.move("]: "),l(),!e.url||/[\0- \u007F]/.test(e.url)?(l=n.enter("destinationLiteral"),u+=s.move("<"),u+=s.move(n.safe(e.url,{before:u,after:">",...s.current()})),u+=s.move(">")):(l=n.enter("destinationRaw"),u+=s.move(n.safe(e.url,{before:u,after:e.title?" ":`
`,...s.current()}))),l(),e.title&&(l=n.enter(`title${a}`),u+=s.move(" "+o),u+=s.move(n.safe(e.title,{before:u,after:o,...s.current()})),u+=s.move(o),l()),i(),u}function ql(e){let t=e.options.emphasis||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize emphasis with `"+t+"` for `options.emphasis`, expected `*`, or `_`");return t}Po.peek=Ym;function Po(e,t,n,r){let o=ql(n),a=n.enter("emphasis"),i=n.createTracker(r),l=i.move(o);return l+=i.move(n.containerPhrasing(e,{before:l,after:o,...i.current()})),l+=i.move(o),a(),l}function Ym(e,t,n){return n.options.emphasis||"*"}function $l(e,t){let n=!1;return mt(e,function(r){if("value"in r&&/\r?\n|\r/.test(r.value)||r.type==="break")return n=!0,dt}),!!((!e.depth||e.depth<3)&&it(e)&&(t.options.setext||n))}function Wl(e,t,n,r){let o=Math.max(Math.min(6,e.depth||1),1),a=n.createTracker(r);if($l(e,n)){let c=n.enter("headingSetext"),d=n.enter("phrasing"),m=n.containerPhrasing(e,{...a.current(),before:`
`,after:`
`});return d(),c(),m+`
`+(o===1?"=":"-").repeat(m.length-(Math.max(m.lastIndexOf("\r"),m.lastIndexOf(`
`))+1))}let i="#".repeat(o),l=n.enter("headingAtx"),s=n.enter("phrasing");a.move(i+" ");let u=n.containerPhrasing(e,{before:"# ",after:`
`,...a.current()});return/^[\t ]/.test(u)&&(u="&#x"+u.charCodeAt(0).toString(16).toUpperCase()+";"+u.slice(1)),u=u?i+" "+u:i,n.options.closeAtx&&(u+=" "+i),s(),l(),u}Co.peek=Xm;function Co(e){return e.value||""}function Xm(){return"<"}Do.peek=Zm;function Do(e,t,n,r){let o=Ct(n),a=o==='"'?"Quote":"Apostrophe",i=n.enter("image"),l=n.enter("label"),s=n.createTracker(r),u=s.move("![");return u+=s.move(n.safe(e.alt,{before:u,after:"]",...s.current()})),u+=s.move("]("),l(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(l=n.enter("destinationLiteral"),u+=s.move("<"),u+=s.move(n.safe(e.url,{before:u,after:">",...s.current()})),u+=s.move(">")):(l=n.enter("destinationRaw"),u+=s.move(n.safe(e.url,{before:u,after:e.title?" ":")",...s.current()}))),l(),e.title&&(l=n.enter(`title${a}`),u+=s.move(" "+o),u+=s.move(n.safe(e.title,{before:u,after:o,...s.current()})),u+=s.move(o),l()),u+=s.move(")"),i(),u}function Zm(){return"!"}Eo.peek=ep;function Eo(e,t,n,r){let o=e.referenceType,a=n.enter("imageReference"),i=n.enter("label"),l=n.createTracker(r),s=l.move("!["),u=n.safe(e.alt,{before:s,after:"]",...l.current()});s+=l.move(u+"]["),i();let c=n.stack;n.stack=[],i=n.enter("reference");let d=n.safe(n.associationId(e),{before:s,after:"]",...l.current()});return i(),n.stack=c,a(),o==="full"||!u||u!==d?s+=l.move(d+"]"):o==="shortcut"?s=s.slice(0,-1):s+=l.move("]"),s}function ep(){return"!"}Io.peek=tp;function Io(e,t,n){let r=e.value||"",o="`",a=-1;for(;new RegExp("(^|[^`])"+o+"([^`]|$)").test(r);)o+="`";for(/[^ \r\n]/.test(r)&&(/^[ \r\n]/.test(r)&&/[ \r\n]$/.test(r)||/^`|`$/.test(r))&&(r=" "+r+" ");++a<n.unsafe.length;){let i=n.unsafe[a],l=n.compilePattern(i),s;if(i.atBreak)for(;s=l.exec(r);){let u=s.index;r.charCodeAt(u)===10&&r.charCodeAt(u-1)===13&&u--,r=r.slice(0,u)+" "+r.slice(s.index+1)}}return o+r+o}function tp(){return"`"}function Ao(e,t){let n=it(e);return!!(!t.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type==="text"&&(n===e.url||"mailto:"+n===e.url)&&/^[a-z][a-z+.-]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}To.peek=np;function To(e,t,n,r){let o=Ct(n),a=o==='"'?"Quote":"Apostrophe",i=n.createTracker(r),l,s;if(Ao(e,n)){let c=n.stack;n.stack=[],l=n.enter("autolink");let d=i.move("<");return d+=i.move(n.containerPhrasing(e,{before:d,after:">",...i.current()})),d+=i.move(">"),l(),n.stack=c,d}l=n.enter("link"),s=n.enter("label");let u=i.move("[");return u+=i.move(n.containerPhrasing(e,{before:u,after:"](",...i.current()})),u+=i.move("]("),s(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(s=n.enter("destinationLiteral"),u+=i.move("<"),u+=i.move(n.safe(e.url,{before:u,after:">",...i.current()})),u+=i.move(">")):(s=n.enter("destinationRaw"),u+=i.move(n.safe(e.url,{before:u,after:e.title?" ":")",...i.current()}))),s(),e.title&&(s=n.enter(`title${a}`),u+=i.move(" "+o),u+=i.move(n.safe(e.title,{before:u,after:o,...i.current()})),u+=i.move(o),s()),u+=i.move(")"),l(),u}function np(e,t,n){return Ao(e,n)?"<":"["}Fo.peek=rp;function Fo(e,t,n,r){let o=e.referenceType,a=n.enter("linkReference"),i=n.enter("label"),l=n.createTracker(r),s=l.move("["),u=n.containerPhrasing(e,{before:s,after:"]",...l.current()});s+=l.move(u+"]["),i();let c=n.stack;n.stack=[],i=n.enter("reference");let d=n.safe(n.associationId(e),{before:s,after:"]",...l.current()});return i(),n.stack=c,a(),o==="full"||!u||u!==d?s+=l.move(d+"]"):o==="shortcut"?s=s.slice(0,-1):s+=l.move("]"),s}function rp(){return"["}function Dt(e){let t=e.options.bullet||"*";if(t!=="*"&&t!=="+"&&t!=="-")throw new Error("Cannot serialize items with `"+t+"` for `options.bullet`, expected `*`, `+`, or `-`");return t}function Kl(e){let t=Dt(e),n=e.options.bulletOther;if(!n)return t==="*"?"-":"*";if(n!=="*"&&n!=="+"&&n!=="-")throw new Error("Cannot serialize items with `"+n+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(n===t)throw new Error("Expected `bullet` (`"+t+"`) and `bulletOther` (`"+n+"`) to be different");return n}function Jl(e){let t=e.options.bulletOrdered||".";if(t!=="."&&t!==")")throw new Error("Cannot serialize items with `"+t+"` for `options.bulletOrdered`, expected `.` or `)`");return t}function Jn(e){let t=e.options.rule||"*";if(t!=="*"&&t!=="-"&&t!=="_")throw new Error("Cannot serialize rules with `"+t+"` for `options.rule`, expected `*`, `-`, or `_`");return t}function Ql(e,t,n,r){let o=n.enter("list"),a=n.bulletCurrent,i=e.ordered?Jl(n):Dt(n),l=e.ordered?i==="."?")":".":Kl(n),s=t&&n.bulletLastUsed?i===n.bulletLastUsed:!1;if(!e.ordered){let c=e.children?e.children[0]:void 0;if((i==="*"||i==="-")&&c&&(!c.children||!c.children[0])&&n.stack[n.stack.length-1]==="list"&&n.stack[n.stack.length-2]==="listItem"&&n.stack[n.stack.length-3]==="list"&&n.stack[n.stack.length-4]==="listItem"&&n.indexStack[n.indexStack.length-1]===0&&n.indexStack[n.indexStack.length-2]===0&&n.indexStack[n.indexStack.length-3]===0&&(s=!0),Jn(n)===i&&c){let d=-1;for(;++d<e.children.length;){let m=e.children[d];if(m&&m.type==="listItem"&&m.children&&m.children[0]&&m.children[0].type==="thematicBreak"){s=!0;break}}}}s&&(i=l),n.bulletCurrent=i;let u=n.containerFlow(e,r);return n.bulletLastUsed=i,n.bulletCurrent=a,o(),u}function Yl(e){let t=e.options.listItemIndent||"one";if(t!=="tab"&&t!=="one"&&t!=="mixed")throw new Error("Cannot serialize items with `"+t+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return t}function Xl(e,t,n,r){let o=Yl(n),a=n.bulletCurrent||Dt(n);t&&t.type==="list"&&t.ordered&&(a=(typeof t.start=="number"&&t.start>-1?t.start:1)+(n.options.incrementListMarker===!1?0:t.children.indexOf(e))+a);let i=a.length+1;(o==="tab"||o==="mixed"&&(t&&t.type==="list"&&t.spread||e.spread))&&(i=Math.ceil(i/4)*4);let l=n.createTracker(r);l.move(a+" ".repeat(i-a.length)),l.shift(i);let s=n.enter("listItem"),u=n.indentLines(n.containerFlow(e,l.current()),c);return s(),u;function c(d,m,p){return m?(p?"":" ".repeat(i))+d:(p?a:a+" ".repeat(i-a.length))+d}}function Zl(e,t,n,r){let o=n.enter("paragraph"),a=n.enter("phrasing"),i=n.containerPhrasing(e,r);return a(),o(),i}var zo=Ye(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function es(e,t,n,r){return(e.children.some(function(i){return zo(i)})?n.containerPhrasing:n.containerFlow).call(n,e,r)}function ts(e){let t=e.options.strong||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize strong with `"+t+"` for `options.strong`, expected `*`, or `_`");return t}Lo.peek=op;function Lo(e,t,n,r){let o=ts(n),a=n.enter("strong"),i=n.createTracker(r),l=i.move(o+o);return l+=i.move(n.containerPhrasing(e,{before:l,after:o,...i.current()})),l+=i.move(o+o),a(),l}function op(e,t,n){return n.options.strong||"*"}function ns(e,t,n,r){return n.safe(e.value,r)}function rs(e){let t=e.options.ruleRepetition||3;if(t<3)throw new Error("Cannot serialize rules with repetition `"+t+"` for `options.ruleRepetition`, expected `3` or more");return t}function os(e,t,n){let r=(Jn(n)+(n.options.ruleSpaces?" ":"")).repeat(rs(n));return n.options.ruleSpaces?r.slice(0,-1):r}var Xt={blockquote:Rl,break:So,code:Vl,definition:Gl,emphasis:Po,hardBreak:So,heading:Wl,html:Co,image:Do,imageReference:Eo,inlineCode:Io,link:To,linkReference:Fo,list:Ql,listItem:Xl,paragraph:Zl,root:es,strong:Lo,text:ns,thematicBreak:os};function Oo(){return{enter:{table:ip,tableData:is,tableHeader:is,tableRow:lp},exit:{codeText:sp,table:ap,tableData:Mo,tableHeader:Mo,tableRow:Mo}}}function ip(e){let t=e._align;this.enter({type:"table",align:t.map(function(n){return n==="none"?null:n}),children:[]},e),this.data.inTable=!0}function ap(e){this.exit(e),this.data.inTable=void 0}function lp(e){this.enter({type:"tableRow",children:[]},e)}function Mo(e){this.exit(e)}function is(e){this.enter({type:"tableCell",children:[]},e)}function sp(e){let t=this.resume();this.data.inTable&&(t=t.replace(/\\([\\|])/g,up));let n=this.stack[this.stack.length-1];n.type,n.value=t,this.exit(e)}function up(e,t){return t==="|"?t:e}function No(e){let t=e||{},n=t.tableCellPadding,r=t.tablePipeAlign,o=t.stringLength,a=n?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:m,table:i,tableCell:s,tableRow:l}};function i(p,f,y,b){return u(c(p,y,b),p.align)}function l(p,f,y,b){let k=d(p,y,b),P=u([k]);return P.slice(0,P.indexOf(`
`))}function s(p,f,y,b){let k=y.enter("tableCell"),P=y.enter("phrasing"),S=y.containerPhrasing(p,{...b,before:a,after:a});return P(),k(),S}function u(p,f){return Nl(p,{align:f,alignDelimiters:r,padding:n,stringLength:o})}function c(p,f,y){let b=p.children,k=-1,P=[],S=f.enter("table");for(;++k<b.length;)P[k]=d(b[k],f,y);return S(),P}function d(p,f,y){let b=p.children,k=-1,P=[],S=f.enter("tableRow");for(;++k<b.length;)P[k]=s(b[k],p,f,y);return S(),P}function m(p,f,y){let b=Xt.inlineCode(p,f,y);return y.stack.includes("tableCell")&&(b=b.replace(/\|/g,"\\$&")),b}}function Ro(){return{exit:{taskListCheckValueChecked:as,taskListCheckValueUnchecked:as,paragraph:cp}}}function _o(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:dp}}}function as(e){let t=this.stack[this.stack.length-2];t.type,t.checked=e.type==="taskListCheckValueChecked"}function cp(e){let t=this.stack[this.stack.length-2];if(t&&t.type==="listItem"&&typeof t.checked=="boolean"){let n=this.stack[this.stack.length-1];n.type;let r=n.children[0];if(r&&r.type==="text"){let o=t.children,a=-1,i;for(;++a<o.length;){let l=o[a];if(l.type==="paragraph"){i=l;break}}i===n&&(r.value=r.value.slice(1),r.value.length===0?n.children.shift():n.position&&r.position&&typeof r.position.start.offset=="number"&&(r.position.start.column++,r.position.start.offset++,n.position.start=Object.assign({},r.position.start)))}}this.exit(e)}function dp(e,t,n,r){let o=e.children[0],a=typeof e.checked=="boolean"&&o&&o.type==="paragraph",i="["+(e.checked?"x":" ")+"] ",l=n.createTracker(r);a&&l.move(i);let s=Xt.listItem(e,t,n,{...r,...l.current()});return a&&(s=s.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,u)),s;function u(c){return c+i}}function Bo(){return[bo(),yo(),xo(),Oo(),Ro()]}function jo(e){return{extensions:[ko(),wo(),vo(),No(e),_o()]}}var mp={tokenize:bp,partial:!0},ls={tokenize:kp,partial:!0},ss={tokenize:yp,partial:!0},us={tokenize:wp,partial:!0},pp={tokenize:xp,partial:!0},cs={name:"wwwAutolink",tokenize:hp,previous:ms},ds={name:"protocolAutolink",tokenize:gp,previous:ps},Be={name:"emailAutolink",tokenize:fp,previous:fs},Fe={};function Uo(){return{text:Fe}}var ft=48;for(;ft<123;)Fe[ft]=Be,ft++,ft===58?ft=65:ft===91&&(ft=97);Fe[43]=Be;Fe[45]=Be;Fe[46]=Be;Fe[95]=Be;Fe[72]=[Be,ds];Fe[104]=[Be,ds];Fe[87]=[Be,cs];Fe[119]=[Be,cs];function fp(e,t,n){let r=this,o,a;return i;function i(d){return!Ho(d)||!fs.call(r,r.previous)||Vo(r.events)?n(d):(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),l(d))}function l(d){return Ho(d)?(e.consume(d),l):d===64?(e.consume(d),s):n(d)}function s(d){return d===46?e.check(pp,c,u)(d):d===45||d===95||te(d)?(a=!0,e.consume(d),s):c(d)}function u(d){return e.consume(d),o=!0,s}function c(d){return a&&o&&ae(r.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),t(d)):n(d)}}function hp(e,t,n){let r=this;return o;function o(i){return i!==87&&i!==119||!ms.call(r,r.previous)||Vo(r.events)?n(i):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(mp,e.attempt(ls,e.attempt(ss,a),n),n)(i))}function a(i){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),t(i)}}function gp(e,t,n){let r=this,o="",a=!1;return i;function i(d){return(d===72||d===104)&&ps.call(r,r.previous)&&!Vo(r.events)?(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),o+=String.fromCodePoint(d),e.consume(d),l):n(d)}function l(d){if(ae(d)&&o.length<5)return o+=String.fromCodePoint(d),e.consume(d),l;if(d===58){let m=o.toLowerCase();if(m==="http"||m==="https")return e.consume(d),s}return n(d)}function s(d){return d===47?(e.consume(d),a?u:(a=!0,s)):n(d)}function u(d){return d===null||at(d)||H(d)||Ae(d)||lt(d)?n(d):e.attempt(ls,e.attempt(ss,c),n)(d)}function c(d){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),t(d)}}function bp(e,t,n){let r=0;return o;function o(i){return(i===87||i===119)&&r<3?(r++,e.consume(i),o):i===46&&r===3?(e.consume(i),a):n(i)}function a(i){return i===null?n(i):t(i)}}function kp(e,t,n){let r,o,a;return i;function i(u){return u===46||u===95?e.check(us,s,l)(u):u===null||H(u)||Ae(u)||u!==45&&lt(u)?s(u):(a=!0,e.consume(u),i)}function l(u){return u===95?r=!0:(o=r,r=void 0),e.consume(u),i}function s(u){return o||r||!a?n(u):t(u)}}function yp(e,t){let n=0,r=0;return o;function o(i){return i===40?(n++,e.consume(i),o):i===41&&r<n?a(i):i===33||i===34||i===38||i===39||i===41||i===42||i===44||i===46||i===58||i===59||i===60||i===63||i===93||i===95||i===126?e.check(us,t,a)(i):i===null||H(i)||Ae(i)?t(i):(e.consume(i),o)}function a(i){return i===41&&r++,e.consume(i),o}}function wp(e,t,n){return r;function r(l){return l===33||l===34||l===39||l===41||l===42||l===44||l===46||l===58||l===59||l===63||l===95||l===126?(e.consume(l),r):l===38?(e.consume(l),a):l===93?(e.consume(l),o):l===60||l===null||H(l)||Ae(l)?t(l):n(l)}function o(l){return l===null||l===40||l===91||H(l)||Ae(l)?t(l):r(l)}function a(l){return ae(l)?i(l):n(l)}function i(l){return l===59?(e.consume(l),r):ae(l)?(e.consume(l),i):n(l)}}function xp(e,t,n){return r;function r(a){return e.consume(a),o}function o(a){return te(a)?n(a):t(a)}}function ms(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||H(e)}function ps(e){return!ae(e)}function fs(e){return!(e===47||Ho(e))}function Ho(e){return e===43||e===45||e===46||e===95||te(e)}function Vo(e){let t=e.length,n=!1;for(;t--;){let r=e[t][1];if((r.type==="labelLink"||r.type==="labelImage")&&!r._balanced){n=!0;break}if(r._gfmAutolinkLiteralWalkedInto){n=!1;break}}return e.length>0&&!n&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),n}var vp={tokenize:Ap,partial:!0};function Go(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:Dp,continuation:{tokenize:Ep},exit:Ip}},text:{91:{name:"gfmFootnoteCall",tokenize:Cp},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:Sp,resolveTo:Pp}}}}function Sp(e,t,n){let r=this,o=r.events.length,a=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),i;for(;o--;){let s=r.events[o][1];if(s.type==="labelImage"){i=s;break}if(s.type==="gfmFootnoteCall"||s.type==="labelLink"||s.type==="label"||s.type==="image"||s.type==="link")break}return l;function l(s){if(!i||!i._balanced)return n(s);let u=ce(r.sliceSerialize({start:i.end,end:r.now()}));return u.codePointAt(0)!==94||!a.includes(u.slice(1))?n(s):(e.enter("gfmFootnoteCallLabelMarker"),e.consume(s),e.exit("gfmFootnoteCallLabelMarker"),t(s))}}function Pp(e,t){let n=e.length,r;for(;n--;)if(e[n][1].type==="labelImage"&&e[n][0]==="enter"){r=e[n][1];break}e[n+1][1].type="data",e[n+3][1].type="gfmFootnoteCallLabelMarker";let o={type:"gfmFootnoteCall",start:Object.assign({},e[n+3][1].start),end:Object.assign({},e[e.length-1][1].end)},a={type:"gfmFootnoteCallMarker",start:Object.assign({},e[n+3][1].end),end:Object.assign({},e[n+3][1].end)};a.end.column++,a.end.offset++,a.end._bufferIndex++;let i={type:"gfmFootnoteCallString",start:Object.assign({},a.end),end:Object.assign({},e[e.length-1][1].start)},l={type:"chunkString",contentType:"string",start:Object.assign({},i.start),end:Object.assign({},i.end)},s=[e[n+1],e[n+2],["enter",o,t],e[n+3],e[n+4],["enter",a,t],["exit",a,t],["enter",i,t],["enter",l,t],["exit",l,t],["exit",i,t],e[e.length-2],e[e.length-1],["exit",o,t]];return e.splice(n,e.length-n+1,...s),e}function Cp(e,t,n){let r=this,o=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),a=0,i;return l;function l(d){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(d),e.exit("gfmFootnoteCallLabelMarker"),s}function s(d){return d!==94?n(d):(e.enter("gfmFootnoteCallMarker"),e.consume(d),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",u)}function u(d){if(a>999||d===93&&!i||d===null||d===91||H(d))return n(d);if(d===93){e.exit("chunkString");let m=e.exit("gfmFootnoteCallString");return o.includes(ce(r.sliceSerialize(m)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(d),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),t):n(d)}return H(d)||(i=!0),a++,e.consume(d),d===92?c:u}function c(d){return d===91||d===92||d===93?(e.consume(d),a++,u):u(d)}}function Dp(e,t,n){let r=this,o=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),a,i=0,l;return s;function s(f){return e.enter("gfmFootnoteDefinition")._container=!0,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(f),e.exit("gfmFootnoteDefinitionLabelMarker"),u}function u(f){return f===94?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(f),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",c):n(f)}function c(f){if(i>999||f===93&&!l||f===null||f===91||H(f))return n(f);if(f===93){e.exit("chunkString");let y=e.exit("gfmFootnoteDefinitionLabelString");return a=ce(r.sliceSerialize(y)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(f),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),m}return H(f)||(l=!0),i++,e.consume(f),f===92?d:c}function d(f){return f===91||f===92||f===93?(e.consume(f),i++,c):c(f)}function m(f){return f===58?(e.enter("definitionMarker"),e.consume(f),e.exit("definitionMarker"),o.includes(a)||o.push(a),T(e,p,"gfmFootnoteDefinitionWhitespace")):n(f)}function p(f){return t(f)}}function Ep(e,t,n){return e.check(Te,t,e.attempt(vp,t,n))}function Ip(e){e.exit("gfmFootnoteDefinition")}function Ap(e,t,n){let r=this;return T(e,o,"gfmFootnoteDefinitionIndent",5);function o(a){let i=r.events[r.events.length-1];return i&&i[1].type==="gfmFootnoteDefinitionIndent"&&i[2].sliceSerialize(i[1],!0).length===4?t(a):n(a)}}function qo(e){let n=(e||{}).singleTilde,r={name:"strikethrough",tokenize:a,resolveAll:o};return n==null&&(n=!0),{text:{126:r},insideSpan:{null:[r]},attentionMarkers:{null:[126]}};function o(i,l){let s=-1;for(;++s<i.length;)if(i[s][0]==="enter"&&i[s][1].type==="strikethroughSequenceTemporary"&&i[s][1]._close){let u=s;for(;u--;)if(i[u][0]==="exit"&&i[u][1].type==="strikethroughSequenceTemporary"&&i[u][1]._open&&i[s][1].end.offset-i[s][1].start.offset===i[u][1].end.offset-i[u][1].start.offset){i[s][1].type="strikethroughSequence",i[u][1].type="strikethroughSequence";let c={type:"strikethrough",start:Object.assign({},i[u][1].start),end:Object.assign({},i[s][1].end)},d={type:"strikethroughText",start:Object.assign({},i[u][1].end),end:Object.assign({},i[s][1].start)},m=[["enter",c,l],["enter",i[u][1],l],["exit",i[u][1],l],["enter",d,l]],p=l.parser.constructs.insideSpan.null;p&&oe(m,m.length,0,Je(p,i.slice(u+1,s),l)),oe(m,m.length,0,[["exit",d,l],["enter",i[s][1],l],["exit",i[s][1],l],["exit",c,l]]),oe(i,u-1,s-u+3,m),s=u+m.length-2;break}}for(s=-1;++s<i.length;)i[s][1].type==="strikethroughSequenceTemporary"&&(i[s][1].type="data");return i}function a(i,l,s){let u=this.previous,c=this.events,d=0;return m;function m(f){return u===126&&c[c.length-1][1].type!=="characterEscape"?s(f):(i.enter("strikethroughSequenceTemporary"),p(f))}function p(f){let y=xt(u);if(f===126)return d>1?s(f):(i.consume(f),d++,p);if(d<2&&!n)return s(f);let b=i.exit("strikethroughSequenceTemporary"),k=xt(f);return b._open=!k||k===2&&!!y,b._close=!y||y===2&&!!k,l(f)}}}var Qn=class{constructor(){this.map=[]}add(t,n,r){Tp(this,t,n,r)}consume(t){if(this.map.sort(function(a,i){return a[0]-i[0]}),this.map.length===0)return;let n=this.map.length,r=[];for(;n>0;)n-=1,r.push(t.slice(this.map[n][0]+this.map[n][1]),this.map[n][2]),t.length=this.map[n][0];r.push([...t]),t.length=0;let o=r.pop();for(;o;)t.push(...o),o=r.pop();this.map.length=0}};function Tp(e,t,n,r){let o=0;if(!(n===0&&r.length===0)){for(;o<e.map.length;){if(e.map[o][0]===t){e.map[o][1]+=n,e.map[o][2].push(...r);return}o+=1}e.map.push([t,n,r])}}function hs(e,t){let n=!1,r=[];for(;t<e.length;){let o=e[t];if(n){if(o[0]==="enter")o[1].type==="tableContent"&&r.push(e[t+1][1].type==="tableDelimiterMarker"?"left":"none");else if(o[1].type==="tableContent"){if(e[t-1][1].type==="tableDelimiterMarker"){let a=r.length-1;r[a]=r[a]==="left"?"center":"right"}}else if(o[1].type==="tableDelimiterRow")break}else o[0]==="enter"&&o[1].type==="tableDelimiterRow"&&(n=!0);t+=1}return r}function $o(){return{flow:{null:{name:"table",tokenize:Fp,resolveAll:zp}}}}function Fp(e,t,n){let r=this,o=0,a=0,i;return l;function l(w){let re=r.events.length-1;for(;re>-1;){let _=r.events[re][1].type;if(_==="lineEnding"||_==="linePrefix")re--;else break}let W=re>-1?r.events[re][1].type:null,A=W==="tableHead"||W==="tableRow"?v:s;return A===v&&r.parser.lazy[r.now().line]?n(w):A(w)}function s(w){return e.enter("tableHead"),e.enter("tableRow"),u(w)}function u(w){return w===124||(i=!0,a+=1),c(w)}function c(w){return w===null?n(w):I(w)?a>1?(a=0,r.interrupt=!0,e.exit("tableRow"),e.enter("lineEnding"),e.consume(w),e.exit("lineEnding"),p):n(w):L(w)?T(e,c,"whitespace")(w):(a+=1,i&&(i=!1,o+=1),w===124?(e.enter("tableCellDivider"),e.consume(w),e.exit("tableCellDivider"),i=!0,c):(e.enter("data"),d(w)))}function d(w){return w===null||w===124||H(w)?(e.exit("data"),c(w)):(e.consume(w),w===92?m:d)}function m(w){return w===92||w===124?(e.consume(w),d):d(w)}function p(w){return r.interrupt=!1,r.parser.lazy[r.now().line]?n(w):(e.enter("tableDelimiterRow"),i=!1,L(w)?T(e,f,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(w):f(w))}function f(w){return w===45||w===58?b(w):w===124?(i=!0,e.enter("tableCellDivider"),e.consume(w),e.exit("tableCellDivider"),y):M(w)}function y(w){return L(w)?T(e,b,"whitespace")(w):b(w)}function b(w){return w===58?(a+=1,i=!0,e.enter("tableDelimiterMarker"),e.consume(w),e.exit("tableDelimiterMarker"),k):w===45?(a+=1,k(w)):w===null||I(w)?z(w):M(w)}function k(w){return w===45?(e.enter("tableDelimiterFiller"),P(w)):M(w)}function P(w){return w===45?(e.consume(w),P):w===58?(i=!0,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(w),e.exit("tableDelimiterMarker"),S):(e.exit("tableDelimiterFiller"),S(w))}function S(w){return L(w)?T(e,z,"whitespace")(w):z(w)}function z(w){return w===124?f(w):w===null||I(w)?!i||o!==a?M(w):(e.exit("tableDelimiterRow"),e.exit("tableHead"),t(w)):M(w)}function M(w){return n(w)}function v(w){return e.enter("tableRow"),B(w)}function B(w){return w===124?(e.enter("tableCellDivider"),e.consume(w),e.exit("tableCellDivider"),B):w===null||I(w)?(e.exit("tableRow"),t(w)):L(w)?T(e,B,"whitespace")(w):(e.enter("data"),q(w))}function q(w){return w===null||w===124||H(w)?(e.exit("data"),B(w)):(e.consume(w),w===92?$:q)}function $(w){return w===92||w===124?(e.consume(w),q):q(w)}}function zp(e,t){let n=-1,r=!0,o=0,a=[0,0,0,0],i=[0,0,0,0],l=!1,s=0,u,c,d,m=new Qn;for(;++n<e.length;){let p=e[n],f=p[1];p[0]==="enter"?f.type==="tableHead"?(l=!1,s!==0&&(gs(m,t,s,u,c),c=void 0,s=0),u={type:"table",start:Object.assign({},f.start),end:Object.assign({},f.end)},m.add(n,0,[["enter",u,t]])):f.type==="tableRow"||f.type==="tableDelimiterRow"?(r=!0,d=void 0,a=[0,0,0,0],i=[0,n+1,0,0],l&&(l=!1,c={type:"tableBody",start:Object.assign({},f.start),end:Object.assign({},f.end)},m.add(n,0,[["enter",c,t]])),o=f.type==="tableDelimiterRow"?2:c?3:1):o&&(f.type==="data"||f.type==="tableDelimiterMarker"||f.type==="tableDelimiterFiller")?(r=!1,i[2]===0&&(a[1]!==0&&(i[0]=i[1],d=Yn(m,t,a,o,void 0,d),a=[0,0,0,0]),i[2]=n)):f.type==="tableCellDivider"&&(r?r=!1:(a[1]!==0&&(i[0]=i[1],d=Yn(m,t,a,o,void 0,d)),a=i,i=[a[1],n,0,0])):f.type==="tableHead"?(l=!0,s=n):f.type==="tableRow"||f.type==="tableDelimiterRow"?(s=n,a[1]!==0?(i[0]=i[1],d=Yn(m,t,a,o,n,d)):i[1]!==0&&(d=Yn(m,t,i,o,n,d)),o=0):o&&(f.type==="data"||f.type==="tableDelimiterMarker"||f.type==="tableDelimiterFiller")&&(i[3]=n)}for(s!==0&&gs(m,t,s,u,c),m.consume(t.events),n=-1;++n<t.events.length;){let p=t.events[n];p[0]==="enter"&&p[1].type==="table"&&(p[1]._align=hs(t.events,n))}return e}function Yn(e,t,n,r,o,a){let i=r===1?"tableHeader":r===2?"tableDelimiter":"tableData",l="tableContent";n[0]!==0&&(a.end=Object.assign({},Et(t.events,n[0])),e.add(n[0],0,[["exit",a,t]]));let s=Et(t.events,n[1]);if(a={type:i,start:Object.assign({},s),end:Object.assign({},s)},e.add(n[1],0,[["enter",a,t]]),n[2]!==0){let u=Et(t.events,n[2]),c=Et(t.events,n[3]),d={type:l,start:Object.assign({},u),end:Object.assign({},c)};if(e.add(n[2],0,[["enter",d,t]]),r!==2){let m=t.events[n[2]],p=t.events[n[3]];if(m[1].end=Object.assign({},p[1].end),m[1].type="chunkText",m[1].contentType="text",n[3]>n[2]+1){let f=n[2]+1,y=n[3]-n[2]-1;e.add(f,y,[])}}e.add(n[3]+1,0,[["exit",d,t]])}return o!==void 0&&(a.end=Object.assign({},Et(t.events,o)),e.add(o,0,[["exit",a,t]]),a=void 0),a}function gs(e,t,n,r,o){let a=[],i=Et(t.events,n);o&&(o.end=Object.assign({},i),a.push(["exit",o,t])),r.end=Object.assign({},i),a.push(["exit",r,t]),e.add(n+1,0,a)}function Et(e,t){let n=e[t],r=n[0]==="enter"?"start":"end";return n[1][r]}var Lp={name:"tasklistCheck",tokenize:Mp};function Wo(){return{text:{91:Lp}}}function Mp(e,t,n){let r=this;return o;function o(s){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?n(s):(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(s),e.exit("taskListCheckMarker"),a)}function a(s){return H(s)?(e.enter("taskListCheckValueUnchecked"),e.consume(s),e.exit("taskListCheckValueUnchecked"),i):s===88||s===120?(e.enter("taskListCheckValueChecked"),e.consume(s),e.exit("taskListCheckValueChecked"),i):n(s)}function i(s){return s===93?(e.enter("taskListCheckMarker"),e.consume(s),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),l):n(s)}function l(s){return I(s)?t(s):L(s)?e.check({tokenize:Op},t,n)(s):n(s)}}function Op(e,t,n){return T(e,r,"whitespace");function r(o){return o===null?n(o):t(o)}}function bs(e){return xn([Uo(),Go(),qo(e),$o(),Wo()])}var Np={};function Xn(e){let t=this,n=e||Np,r=t.data(),o=r.micromarkExtensions||(r.micromarkExtensions=[]),a=r.fromMarkdownExtensions||(r.fromMarkdownExtensions=[]),i=r.toMarkdownExtensions||(r.toMarkdownExtensions=[]);o.push(bs(n)),a.push(Bo()),i.push(jo(n))}var Rp=()=>({fetchMarkDown:async t=>fetch(t).then(n=>(n.ok||console.log(`failed fetching plugin readme from ${t}.`),n.text())).catch(n=>(console.error(n),""))}),ks=Rp;var ys={SHOW_PLUGIN:"showPlugin",SHOW_PLUGINDEFINITION:"showPluginDefinition",SHOW_PLUGIN_DEFINTION_DETAILS:"showPluginDefinitionDetail",EDIT_PLUGIN:"editPlugin"};var _p=e=>React.createElement(pe,{px:!1,py:!0},React.createElement("h2",{className:"text-xl font-bold mb-2 mt-8"},"Option Values"),React.createElement(He,{columns:5},React.createElement(Z,null,React.createElement(J,null,"Name"),React.createElement(J,null,"Required"),React.createElement(J,null,"Description"),React.createElement(J,null,"Type"),React.createElement(J,null,"Default")),e.optionValues.sort((t,n)=>t.required&&!n.required?-1:!t.required&&n.required?1:0).map(t=>React.createElement(Z,{key:t.name},React.createElement(J,null,t.displayName??t.name),React.createElement(K,{style:{textAlign:"center"}},(t.required??!1)&&"x"),React.createElement(K,null,t.description),React.createElement(K,null,t.type),React.createElement(K,null,t.default&&JSON.stringify(t.default)))))),ws=_p;import Zt from"react";var Bp=e=>{let t=F(l=>l.setShowEditForm),n=F(l=>l.setShowPluginDefinitionDetails),r=F(l=>l.setEditFormState),o=F(l=>l.setEditFormData),{setPanel:a}=le(),i=l=>{o({metadata:l.metadata,spec:l.spec}),n(!1),t(!0),r(1),a("editPlugin")};return e.plugins.length>0&&Zt.createElement(Z,null,Zt.createElement(J,null,"Enabled Plugins"),Zt.createElement(K,null,Zt.createElement(xe,{gap:"2",alignment:"start",wrap:!0},e.plugins.map(l=>Zt.createElement(ke,{key:l.metadata.name,size:"small",onClick:()=>{i(l)}},l.metadata.name)))))},xs=Bp;var jp=e=>{let t=F(b=>b.showPluginDefinitionDetails),n=F(b=>b.setShowPluginDefinitionDetails),r=F(b=>b.setShowEditForm),{setPanel:o}=le(),{getPluginsByLabelSelector:a}=mn(),{fetchMarkDown:i}=ks(),l=F(b=>b.setIsPluginEditMode),s=F(b=>b.setEditFormData),u=F(b=>b.setEditFormState),c=()=>{n(!1),r(!0),s({metadata:_i(e.pluginDefinition),spec:Bi(e.pluginDefinition)}),u(0),o(ys.EDIT_PLUGIN)},[d,m]=G.useState([]),p="greenhouse.sap/plugindefinition";vs(()=>{a(p,e.pluginDefinition.metadata.name).then(k=>{m(k)})},[e.pluginDefinition.metadata?.name]);let[f,y]=G.useState("");return e.pluginDefinition.spec?.docMarkDownUrl&&vs(()=>{i(e.pluginDefinition.spec.docMarkDownUrl).then(k=>{y(k)})},[e.pluginDefinition.spec.docMarkDownUrl]),G.createElement(G.Fragment,null,G.createElement(pe,{px:!1,py:!0},G.createElement(sn,null,G.createElement(ln,null,G.createElement(ke,{icon:"addCircle",label:"Configure Plugin",onClick:()=>c()}))),G.createElement("h2",{className:"text-xl font-bold mb-2 mt-8"},"General"),G.createElement(He,{columns:2},G.createElement(Z,null,G.createElement(J,null,"Description"),G.createElement(K,null,e.pluginDefinition?.spec?.description)),G.createElement(Z,null,G.createElement(J,null,"Version"),G.createElement(K,null,e.pluginDefinition?.spec?.version)),e.pluginDefinition.spec?.helmChart&&G.createElement(Z,null,G.createElement(J,null,"Helm Chart"),G.createElement(K,null,e.pluginDefinition.spec?.helmChart?.name&&G.createElement("p",null,"Name: ",e.pluginDefinition.spec?.helmChart?.name),e.pluginDefinition.spec?.helmChart?.repository&&G.createElement("p",null,"Repository: ",e.pluginDefinition.spec?.helmChart?.repository),e.pluginDefinition.spec?.helmChart?.version&&G.createElement("p",null,"Version: ",e.pluginDefinition.spec?.helmChart?.version))),e.pluginDefinition.spec?.uiApplication&&G.createElement(Z,null,G.createElement(J,null,"UI Application"),G.createElement(K,null,e.pluginDefinition.spec?.uiApplication?.name&&G.createElement("p",null,"Name: ",e.pluginDefinition.spec?.uiApplication?.name),e.pluginDefinition.spec?.uiApplication?.url&&G.createElement("p",null,"Url: ",e.pluginDefinition.spec?.uiApplication?.url),e.pluginDefinition.spec?.uiApplication?.version&&G.createElement("p",null,"Version: ",e.pluginDefinition.spec?.uiApplication?.version))),d.length>0&&G.createElement(xs,{plugins:d}))),e.pluginDefinition?.spec?.options&&G.createElement(ws,{optionValues:e.pluginDefinition.spec.options}),f!==""&&G.createElement(pe,{px:!1,py:!0},G.createElement("h2",{className:"text-xl font-bold mb-2 mt-8"},"Documentation "),G.createElement("article",{className:"markdown-body"},G.createElement(uo,{rehypePlugins:[Xn]},f))))},Ss=jp;import en from"react";import je from"react";var Hp=[".png"],Up=e=>{let{setPanel:t}=le(),n=F(l=>l.setPluginDefinitionDetail),r;return Hp.some(l=>e.pluginDefinition.spec?.icon?.endsWith(l))?r=e.pluginDefinition.spec?.icon:r=void 0,je.createElement("div",{className:`
  card
  bg-theme-background-lvl-1
  hover:bg-theme-background-lvl-2
  rounded
  p-8
  h-full
  w-full
  cursor-pointer
  `,onClick:()=>{t("showPluginDefinitionDetail"),n(e.pluginDefinition)}},je.createElement(xe,{direction:"vertical",alignment:"start",className:"h-full w-full"},je.createElement("div",{className:`
  font-bold
  text-lg
  `},e.pluginDefinition.spec?.displayName??e.pluginDefinition.metadata?.name),je.createElement("div",{className:"mt-4"},e.pluginDefinition.spec?.description),je.createElement("div",{className:"mt-auto w-full"},je.createElement(xe,{alignment:"center"},je.createElement("div",{className:"w-full"},e.pluginDefinition.spec?.version),!r&&je.createElement(Ne,{icon:e.pluginDefinition.spec?.icon??"autoAwesomeMosaic",className:"filtered fill-current text-theme-high",size:"50"}),r&&je.createElement("img",{className:"filtered fill-current ",src:r,alt:"icon",width:"50"})))))},Ps=Up;var Vp=e=>en.createElement(en.Fragment,null,en.createElement(pe,{px:!1,py:!0},en.createElement("div",{className:"card-container grid gap-4 grid-cols-3"},e.pluginDefinitions.map(t=>en.createElement(Ps,{key:t.metadata.name,pluginDefinition:t}))))),Cs=Vp;var Gp=()=>{let e=F(i=>i.pluginDefinitions),t=pn(),n=F(i=>i.pluginDefinitionDetail),r=F(i=>i.isPluginEditMode),{setPanel:o}=le(),a=()=>{o(null)};return tn.createElement(un,{opened:["showPluginDefinition","showPluginDefinitionDetail","editPlugin"].includes(t),onClose:a,size:"large",heading:r?"Edit Plugin":"Add Plugin"},tn.createElement(cn,null,t==="showPluginDefinition"&&e?.length>0&&tn.createElement(Cs,{pluginDefinitions:e}),t==="showPluginDefinitionDetail"&&n&&tn.createElement(Ss,{pluginDefinition:n}),t==="editPlugin"&&n&&tn.createElement(ji,{pluginDefinition:n})))},Ds=Gp;import O,{useEffect as $p,useState as Wp}from"react";import qp from"react";var nn=({plugin:e})=>{let t=e?.status?.statusConditions?.conditions?lr(e?.status?.statusConditions?.conditions):null;return qp.createElement(Ne,{icon:e?.spec.disabled?"error":t?.icon,color:e?.spec.disabled?"":t?.color})};var Zn=e=>{if(!e)return null;let t=[];for(let n in e){let r=e[n];t.push({url:n,name:r.name?r.name:n})}return t};var Kp=()=>{let e=fn(),{setShowDetailsFor:t}=qe(),{setPanel:n}=le(),r=pn(),o=kt(),[a,i]=Wp(null);return $p(()=>{!o||!e||i(e.find(s=>s.metadata.uid===o))},[o,e]),O.createElement(un,{opened:!!o&&r==="showPlugin",onClose:()=>{t(null),n(null)},size:"large",heading:O.createElement(xe,{gap:"2"},O.createElement(nn,{plugin:a}),O.createElement("span",null,a?.spec?.displayName))},O.createElement(cn,null,O.createElement(si,null,O.createElement(pi,null,O.createElement(ir,null,"Details"),O.createElement(ir,null,"Raw Data")),O.createElement(ar,null,O.createElement(pe,{px:!1,py:!0},O.createElement(He,{columns:2,cellVerticalAlignment:"top",gridColumnTemplate:"35% auto"},O.createElement(Z,null,O.createElement(J,null,"Name"),O.createElement(K,null,a?.spec?.displayName)),a?.spec?.disabled&&O.createElement(Z,null,O.createElement(J,null,"Disabled"),O.createElement(K,null,a?.spec?.disabled.toString())),O.createElement(Z,null,O.createElement(J,null,"Version"),O.createElement(K,null,a?.status?.version)),O.createElement(Z,null,O.createElement(J,null,"Cluster"),O.createElement(K,null,a?.spec?.clusterName)),O.createElement(Z,null,O.createElement(J,null,"External Links"),O.createElement(K,null,a?.status?.exposedServices&&Zn(a.status.exposedServices).map(s=>O.createElement("a",{href:s.url,target:"_blank",rel:"noreferrer",className:"mr-3",key:s.url},s.name)))),O.createElement(Z,null,O.createElement(J,null,"Condition"),O.createElement(K,null,O.createElement(nn,{plugin:a}))),O.createElement(Z,null,O.createElement(J,null,"Conditions"),O.createElement(K,null,O.createElement(xe,{gap:"2",alignment:"start",wrap:!0},a?.status?.statusConditions?.conditions?.map(s=>O.createElement(di,{key:s.type,pillKey:s.type,pillValue:s.status}))))),a?.spec?.optionValues?.map(s=>s?.name.startsWith("greenhouse.")?null:O.createElement(Z,{key:s?.name},O.createElement(J,{style:{overflowWrap:"break-word"}},s?.name),O.createElement(K,null,typeof s?.value<"u"&&(typeof s?.value=="object"?s?.value&&O.createElement(rr,{data:s?.value}):String(s?.value)))))))),O.createElement(ar,null,O.createElement(pe,{px:!1,py:!0},O.createElement(ii,null,a&&O.createElement(rr,{data:a,expanded:!0})))))))},Es=Kp;import ie from"react";import ye from"react";var Jp=e=>{let t=e.plugin,{setShowDetailsFor:n}=qe(),r=kt(),{setPanel:o}=le(),a=F(d=>d.setPluginDefinitionDetail),i=F(d=>d.setEditFormState),l=F(d=>d.setEditFormData),s=F(d=>d.pluginDefinitions),u=d=>{d.stopPropagation(),d.preventDefault(),o("showPlugin"),r===t.metadata.uid?n(null):n(t.metadata.uid)},c=d=>{d.stopPropagation(),d.preventDefault();let m;s.some(p=>p.metadata.name===t.spec.pluginDefinition?(m=p,!0):!1),m?(a(m),o("editPlugin"),l({metadata:t.metadata,spec:t.spec}),i(1)):console.error(`Plugin definition not found for plugin ${t.metadata.name} could not open edit screen`)};return ye.createElement(Z,{key:t?.metadata?.uid,onClick:u,className:`cursor-pointer ${r===t?.metadata?.uid?"active":""} ${t?.spec?.disabled?"text-theme-disabled":""} `},ye.createElement(K,null,ye.createElement(nn,{plugin:t})),ye.createElement(K,null,t?.spec?.displayName||t?.metadata?.name),ye.createElement(K,null,t?.spec?.clusterName?t?.spec?.clusterName:ye.createElement(ye.Fragment,null,"\u2014")),ye.createElement(K,null,t?.status?.exposedServices?Zn(t.status.exposedServices).map(d=>ye.createElement("a",{href:d.url,target:"_blank",rel:"noreferrer",key:d.url,className:`mr-3 ${t?.disabled?"text-theme-link text-opacity-50":""}`},d.name)):ye.createElement(ye.Fragment,null,"\u2014")),ye.createElement(K,null,ye.createElement(Ne,{color:"jn-global-text",icon:"edit",onClick:c})))},Is=Jp;var Qp=()=>{let e=fn(),{setPanel:t}=le(),n=()=>{t("showPluginDefinition")};return ie.createElement(ie.Fragment,null,ie.createElement(sn,null,ie.createElement(ln,null,ie.createElement(ke,{onClick:n},"Add Plugin"))),ie.createElement(He,{columns:5,cellVerticalAlignment:"top",className:"plugins",minContentColumns:[0,4]},e&&ie.createElement(Z,null,ie.createElement(J,null,ie.createElement(Ne,{icon:"monitorHeart"})),ie.createElement(J,null,"Name"),ie.createElement(J,null,"Cluster"),ie.createElement(J,null,"External Links"),ie.createElement(J,null,"Edit")),e?.length>0?e?.map(r=>ie.createElement(Is,{key:r?.metadata?.uid,plugin:r})):ie.createElement(Z,{className:"no-hover"},ie.createElement(K,{colSpan:4},ie.createElement(xe,{gap:"3"},ie.createElement(Ne,{icon:"info",color:"text-theme-info"}),ie.createElement("div",null,"It seems that no plugins have been created yet. Do you want to",ie.createElement("a",{onClick:n}," create")," a new one?"))))))},As=Qp;import{useCallback as Xp}from"react";var Yp=()=>{let e=Ei(),t=Ai();return{client:e&&t&&dn({apiEndpoint:e,token:t})}},Ts=Yp;var Zp=()=>{let e=Ii(),{client:t}=Ts(),{addPluginConfigItems:n,modifyPluginConfigItems:r,deletePluginConfigItems:o}=qe();return{getPlugins:Xp(()=>{if(!t||!e)return;let i=t.watch(`/apis/greenhouse.sap/v1alpha1/namespaces/${e}/plugins`).on(t.WATCH_ERROR,()=>console.log("ERROR")).on(t.WATCH_ADDED,l=>{n(l)}).on(t.WATCH_MODIFIED,l=>{r(l)}).on(t.WATCH_DELETED,l=>{o(l)});return i.start(),i.cancel},[t,e])}},Fs=Zp;var tf=()=>{let{getPlugins:e}=Fs();return ef(()=>{e&&e()},[e]),rn.createElement(pe,{py:!0},rn.createElement(Ds,null),rn.createElement(Es,null),rn.createElement(bi,null),rn.createElement(As,null))},zs=tf;import{useEffect as sf}from"react";import{useLayoutEffect as nf,useEffect as Ls,useState as rf}from"react";var on=ki("plugin-admin"),Ko="d",of=()=>{let[e,t]=rf(!1),{setShowDetailsFor:n}=qe(),r=kt();nf(()=>{if(e)return;let o=on.currentState()?.[Ko];o&&n(o),t(!0)},[e]),Ls(()=>{if(!e)return;let o={...on.currentState(),[Ko]:r};JSON.stringify(o)!==JSON.stringify(on.currentState())&&on.push(o)},[r]),Ls(()=>{let o=on.onChange(a=>{n(a?.[Ko])});return()=>{o()}},[])},Ms=of;var af=()=>{let{get:e,create:t,update:n,deleteObject:r,watch:o}=Ve(!1),a=F(f=>f.namespace),i=F(f=>f.modifySecrets),l=F(f=>f.deleteSecrets);return{getSecret:f=>e(`/api/v1/namespaces/${a}/secrets`,f),createSecret:f=>t(`/api/v1/namespaces/${a}/secrets`,f),updateSecret:f=>n(`/api/v1/namespaces/${a}/secrets`,f),deleteSecret:f=>r(`/api/v1/namespaces/${a}/secrets`,f),watchSecrets:()=>o(`/api/v1/namespaces/${a}/secrets`,"Secret",i,i,l),watchSecretsWithoutHelm:()=>{let k={fieldSelector:"type!=helm.sh/release.v1"};return o(`/api/v1/namespaces/${a}/secrets`,"Secret",i,i,l,k)}}},Os=af;var lf=()=>{let{get:e,create:t,update:n,deleteObject:r,watch:o}=Ve(),a=F(m=>m.modifyPluginDefinitions),i=F(m=>m.deletePluginDefinitions);return{getPluginDefinition:m=>e("/apis/greenhouse.sap/v1alpha1/plugindefinitions",m),createPluginDefinition:m=>t("/apis/greenhouse.sap/v1alpha1/plugindefinitions",m),updatePluginDefinition:m=>n("/apis/greenhouse.sap/v1alpha1/plugindefinitions",m),deletePluginDefinition:m=>r("/apis/greenhouse.sap/v1alpha1/plugindefinitions",m),watchPluginDefinitions:()=>o("/apis/greenhouse.sap/v1alpha1/plugindefinitions","PluginDefinition",a,a,i)}},Ns=lf;var uf=()=>{Ms();let{watchSecretsWithoutHelm:e}=Os(),{watchPluginDefinitions:t}=Ns(),{addMessage:n}=gi();return sf(()=>{t(),e().then(r=>{r.ok||r.message&&r.status==403&&n({variant:"warning",text:r.message})})},[]),null},Rs=uf;var _s=`/* Do not remove these tailwind directives. Without them styles won't work as expected */
*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}
::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}
.container {
  width: 100%;
}
@media (min-width: 640px) {
  .container {
    max-width: 640px;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}
@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}
@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
}
@media (min-width: 1536px) {
  .container {
    max-width: 1536px;
  }
}
@media (min-width: 1856px) {
  .container {
    max-width: 1856px;
  }
}
.isolate {
  isolation: isolate;
}
.mx-4 {
  margin-left: 1rem;
  margin-right: 1rem;
}
.mx-6 {
  margin-left: 1.5rem;
  margin-right: 1.5rem;
}
.my-px {
  margin-top: 1px;
  margin-bottom: 1px;
}
.mb-0 {
  margin-bottom: 0px;
}
.mb-2 {
  margin-bottom: 0.5rem;
}
.mb-3 {
  margin-bottom: 0.75rem;
}
.mb-4 {
  margin-bottom: 1rem;
}
.mb-6 {
  margin-bottom: 1.5rem;
}
.mb-8 {
  margin-bottom: 2rem;
}
.ml-2 {
  margin-left: 0.5rem;
}
.mr-3 {
  margin-right: 0.75rem;
}
.mt-3 {
  margin-top: 0.75rem;
}
.mt-4 {
  margin-top: 1rem;
}
.mt-8 {
  margin-top: 2rem;
}
.mt-auto {
  margin-top: auto;
}
.inline {
  display: inline;
}
.flex {
  display: flex;
}
.table {
  display: table;
}
.grid {
  display: grid;
}
.h-8 {
  height: 2rem;
}
.h-full {
  height: 100%;
}
.h-screen {
  height: 100vh;
}
.w-64 {
  width: 16rem;
}
.w-8 {
  width: 2rem;
}
.w-full {
  width: 100%;
}
.flex-grow {
  flex-grow: 1;
}
.cursor-pointer {
  cursor: pointer;
}
.grid-cols-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
.grid-cols-\\[max-content_auto\\] {
  grid-template-columns: max-content auto;
}
.grid-rows-\\[minmax\\(100vh\\2c 100\\%\\)\\] {
  grid-template-rows: minmax(100vh,100%);
}
.gap-4 {
  gap: 1rem;
}
.break-all {
  word-break: break-all;
}
.rounded {
  border-radius: 0.25rem;
}
.rounded-full {
  border-radius: 9999px;
}
.border-y-2 {
  border-top-width: 2px;
  border-bottom-width: 2px;
}
.border-b-0 {
  border-bottom-width: 0;
}
.border-l-4 {
  border-left-width: 4px;
}
.border-theme-background-lvl-1 {
  --tw-border-opacity: 1;
  border-color: rgba(var(--color-background-lvl-1-raw), var(--tw-border-opacity));
}
.bg-juno-grey-blue-11 {
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-juno-grey-blue-11-raw), var(--tw-bg-opacity));
}
.bg-theme-accent\\/30 {
  background-color: rgba(var(--color-accent-raw), 0.3);
}
.bg-theme-background-lvl-0 {
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-background-lvl-0-raw), var(--tw-bg-opacity));
}
.bg-theme-background-lvl-1 {
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-background-lvl-1-raw), var(--tw-bg-opacity));
}
.bg-theme-background-lvl-2 {
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-background-lvl-2-raw), var(--tw-bg-opacity));
}
.bg-theme-global-bg {
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-global-bg-raw), var(--tw-bg-opacity));
}
.bg-cover {
  background-size: cover;
}
.fill-current {
  fill: currentColor;
}
.p-8 {
  padding: 2rem;
}
.px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}
.py-0 {
  padding-top: 0px;
  padding-bottom: 0px;
}
.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}
.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.pb-6 {
  padding-bottom: 1.5rem;
}
.pl-4 {
  padding-left: 1rem;
}
.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}
.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}
.text-xs {
  font-size: 0.75rem;
  line-height: 1rem;
}
.font-bold {
  font-weight: 700;
}
.text-theme-accent {
  --tw-text-opacity: 1;
  color: rgba(var(--color-accent-raw), var(--tw-text-opacity));
}
.text-theme-danger {
  --tw-text-opacity: 1;
  color: rgba(var(--color-danger-raw), var(--tw-text-opacity));
}
.text-theme-default {
  --tw-text-opacity: 1;
  color: rgba(var(--color-text-default-raw), var(--tw-text-opacity));
}
.text-theme-disabled {
  --tw-text-opacity: 1;
  color: rgba(var(--color-text-disabled-raw), var(--tw-text-opacity));
}
.text-theme-high {
  --tw-text-opacity: 1;
  color: rgba(var(--color-text-high-raw), var(--tw-text-opacity));
}
.text-theme-info {
  --tw-text-opacity: 1;
  color: rgba(var(--color-info-raw), var(--tw-text-opacity));
}
.text-theme-light {
  --tw-text-opacity: 1;
  color: rgba(var(--color-text-light-raw), var(--tw-text-opacity));
}
.text-theme-link {
  --tw-text-opacity: 1;
  color: rgba(var(--color-text-link-raw), var(--tw-text-opacity));
}
.text-white {
  --tw-text-opacity: 1;
  color: rgba(var(--color-white-raw), var(--tw-text-opacity));
}
.text-opacity-50 {
  --tw-text-opacity: 0.5;
}
.shadow {
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.transition {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
/* If necessary, app styles can be added below */
.plugins .juno-datagrid-row:hover .juno-datagrid-cell {
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-background-lvl-1-raw), var(--tw-bg-opacity));
}
.plugins .juno-datagrid-row.active .juno-datagrid-cell {
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-background-lvl-2-raw), var(--tw-bg-opacity));
}

.filtered {
  filter: grayscale(100%);
}

.markdown-body {
  background-color: transparent !important;
}

.hover\\:bg-theme-background-lvl-2:hover {
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-background-lvl-2-raw), var(--tw-bg-opacity));
}

.hover\\:text-theme-high:hover {
  --tw-text-opacity: 1;
  color: rgba(var(--color-text-high-raw), var(--tw-text-opacity));
}

.hover\\:text-white:hover {
  --tw-text-opacity: 1;
  color: rgba(var(--color-white-raw), var(--tw-text-opacity));
}`;var df="plugin-admin",mf=(e={})=>{let{setUrlStateKey:t,initialize:n}=le(),r=F(o=>o.initialize);return n(e.apiEndpoint,e.token,e.namespace),r(e.apiEndpoint,e.token,e.namespace),t(df),De.createElement(ni,{pageHeader:"Converged Cloud | Plugins",embedded:e.embedded==="true"||e.embedded===!0},De.createElement(hi,null,De.createElement(Rs,null),De.createElement(zs,{props:e})))},pf=`
  ol {
      list-style: decimal;
  }
  ul {
    list-style: disc;
}
`,ff=e=>{let t=e.theme?e.theme:"theme-dark";return De.createElement(ri,{theme:`${e.theme?e.theme:"theme-dark"}`},De.createElement("style",null,_s.toString()),De.createElement("style",null,xi.toString()),De.createElement("style",null,t==="theme-dark"?yi.toString():wi.toString()),De.createElement("style",null,pf),De.createElement(Ti,null,De.createElement(mf,{...e})))},mD=ff;export{mD as default};
