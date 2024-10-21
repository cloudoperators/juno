import { writeFile, rm } from 'node:fs/promises';
import { performance } from 'node:perf_hooks';
import { basename, dirname, resolve, join, relative, extname } from 'pathe';
import { TraceMap, generatedPositionFor } from '@vitest/utils/source-map';
import { x as x$1 } from 'tinyexec';
import { generateHash, calculateSuiteHash, someTasksAreOnly, interpretTaskModes, getTasks } from '@vitest/runner/utils';
import { shuffle } from '@vitest/utils';
import './env.CmHVDJnw.js';
import url from 'node:url';
import nodeos__default from 'node:os';
import p$1 from 'path';
import W from 'fs';
import ke from 'module';
import { parseAstAsync } from 'vite';
import { createHash } from 'node:crypto';
import { slash } from 'vite-node/utils';

const REGEXP_WRAP_PREFIX = "$$vitest:";
function getOutputFile(config, reporter) {
  if (!config?.outputFile) {
    return;
  }
  if (typeof config.outputFile === "string") {
    return config.outputFile;
  }
  return config.outputFile[reporter];
}
function wrapSerializableConfig(config) {
  let testNamePattern = config.testNamePattern;
  let defines = config.defines;
  if (testNamePattern && typeof testNamePattern !== "string") {
    testNamePattern = `${REGEXP_WRAP_PREFIX}${testNamePattern.toString()}`;
  }
  if (defines) {
    defines = { keys: Object.keys(defines), original: defines };
  }
  return {
    ...config,
    testNamePattern,
    defines
  };
}

const A=r=>r!==null&&typeof r=="object",a=(r,t)=>Object.assign(new Error(`[${r}]: ${t}`),{code:r}),_="ERR_INVALID_PACKAGE_CONFIG",E$1="ERR_INVALID_PACKAGE_TARGET",I="ERR_PACKAGE_PATH_NOT_EXPORTED",R$1=/^\d+$/,O=/^(\.{1,2}|node_modules)$/i,w=/\/|\\/;var h$1=(r=>(r.Export="exports",r.Import="imports",r))(h$1||{});const f=(r,t,e,o,c)=>{if(t==null)return [];if(typeof t=="string"){const[n,...i]=t.split(w);if(n===".."||i.some(l=>O.test(l)))throw a(E$1,`Invalid "${r}" target "${t}" defined in the package config`);return [c?t.replace(/\*/g,c):t]}if(Array.isArray(t))return t.flatMap(n=>f(r,n,e,o,c));if(A(t)){for(const n of Object.keys(t)){if(R$1.test(n))throw a(_,"Cannot contain numeric property keys");if(n==="default"||o.includes(n))return f(r,t[n],e,o,c)}return []}throw a(E$1,`Invalid "${r}" target "${t}"`)},s="*",m=(r,t)=>{const e=r.indexOf(s),o=t.indexOf(s);return e===o?t.length>r.length:o>e};function d(r,t){if(!t.includes(s)&&r.hasOwnProperty(t))return [t];let e,o;for(const c of Object.keys(r))if(c.includes(s)){const[n,i,l]=c.split(s);if(l===void 0&&t.startsWith(n)&&t.endsWith(i)){const g=t.slice(n.length,-i.length||void 0);g&&(!e||m(e,c))&&(e=c,o=g);}}return [e,o]}const p=r=>Object.keys(r).reduce((t,e)=>{const o=e===""||e[0]!==".";if(t===void 0||t===o)return o;throw a(_,'"exports" cannot contain some keys starting with "." and some not')},void 0),u$1=/^\w+:/,v=(r,t,e)=>{if(!r)throw new Error('"exports" is required');t=t===""?".":`./${t}`,(typeof r=="string"||Array.isArray(r)||A(r)&&p(r))&&(r={".":r});const[o,c]=d(r,t),n=f(h$1.Export,r[o],t,e,c);if(n.length===0)throw a(I,t==="."?'No "exports" main defined':`Package subpath '${t}' is not defined by "exports"`);for(const i of n)if(!i.startsWith("./")&&!u$1.test(i))throw a(E$1,`Invalid "exports" target "${i}" defined in the package config`);return n};

var ae=Object.defineProperty;var u=(e,t)=>ae(e,"name",{value:t,configurable:!0});function E(e){return e.startsWith("\\\\?\\")?e:e.replace(/\\/g,"/")}u(E,"slash");const h=u(e=>{const t=W[e];return (i,...n)=>{const l=`${e}:${n.join(":")}`;let o=i==null?void 0:i.get(l);return o===void 0&&(o=Reflect.apply(t,W,n),i==null||i.set(l,o)),o}},"cacheFs"),L=h("existsSync"),we=h("readFileSync"),P=h("statSync"),K=u((e,t,i)=>{for(;;){const n=p$1.posix.join(e,t);if(L(i,n))return n;const l=p$1.dirname(e);if(l===e)return;e=l;}},"findUp"),J=/^\.{1,2}(\/.*)?$/,M=u(e=>{const t=E(e);return J.test(t)?t:`./${t}`},"normalizePath");function Te(e,t=!1){const i=e.length;let n=0,l="",o=0,s=16,c=0,f=0,w=0,A=0,k=0;function O(r,g){let m=0,_=0;for(;m<r||!g;){let j=e.charCodeAt(n);if(j>=48&&j<=57)_=_*16+j-48;else if(j>=65&&j<=70)_=_*16+j-65+10;else if(j>=97&&j<=102)_=_*16+j-97+10;else break;n++,m++;}return m<r&&(_=-1),_}u(O,"scanHexDigits");function T(r){n=r,l="",o=0,s=16,k=0;}u(T,"setPosition");function v(){let r=n;if(e.charCodeAt(n)===48)n++;else for(n++;n<e.length&&F(e.charCodeAt(n));)n++;if(n<e.length&&e.charCodeAt(n)===46)if(n++,n<e.length&&F(e.charCodeAt(n)))for(n++;n<e.length&&F(e.charCodeAt(n));)n++;else return k=3,e.substring(r,n);let g=n;if(n<e.length&&(e.charCodeAt(n)===69||e.charCodeAt(n)===101))if(n++,(n<e.length&&e.charCodeAt(n)===43||e.charCodeAt(n)===45)&&n++,n<e.length&&F(e.charCodeAt(n))){for(n++;n<e.length&&F(e.charCodeAt(n));)n++;g=n;}else k=3;return e.substring(r,g)}u(v,"scanNumber");function b(){let r="",g=n;for(;;){if(n>=i){r+=e.substring(g,n),k=2;break}const m=e.charCodeAt(n);if(m===34){r+=e.substring(g,n),n++;break}if(m===92){if(r+=e.substring(g,n),n++,n>=i){k=2;break}switch(e.charCodeAt(n++)){case 34:r+='"';break;case 92:r+="\\";break;case 47:r+="/";break;case 98:r+="\b";break;case 102:r+="\f";break;case 110:r+=`
`;break;case 114:r+="\r";break;case 116:r+="	";break;case 117:const j=O(4,!0);j>=0?r+=String.fromCharCode(j):k=4;break;default:k=5;}g=n;continue}if(m>=0&&m<=31)if(x(m)){r+=e.substring(g,n),k=2;break}else k=6;n++;}return r}u(b,"scanString");function B(){if(l="",k=0,o=n,f=c,A=w,n>=i)return o=i,s=17;let r=e.charCodeAt(n);if(R(r)){do n++,l+=String.fromCharCode(r),r=e.charCodeAt(n);while(R(r));return s=15}if(x(r))return n++,l+=String.fromCharCode(r),r===13&&e.charCodeAt(n)===10&&(n++,l+=`
`),c++,w=n,s=14;switch(r){case 123:return n++,s=1;case 125:return n++,s=2;case 91:return n++,s=3;case 93:return n++,s=4;case 58:return n++,s=6;case 44:return n++,s=5;case 34:return n++,l=b(),s=10;case 47:const g=n-1;if(e.charCodeAt(n+1)===47){for(n+=2;n<i&&!x(e.charCodeAt(n));)n++;return l=e.substring(g,n),s=12}if(e.charCodeAt(n+1)===42){n+=2;const m=i-1;let _=!1;for(;n<m;){const j=e.charCodeAt(n);if(j===42&&e.charCodeAt(n+1)===47){n+=2,_=!0;break}n++,x(j)&&(j===13&&e.charCodeAt(n)===10&&n++,c++,w=n);}return _||(n++,k=1),l=e.substring(g,n),s=13}return l+=String.fromCharCode(r),n++,s=16;case 45:if(l+=String.fromCharCode(r),n++,n===i||!F(e.charCodeAt(n)))return s=16;case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return l+=v(),s=11;default:for(;n<i&&U(r);)n++,r=e.charCodeAt(n);if(o!==n){switch(l=e.substring(o,n),l){case"true":return s=8;case"false":return s=9;case"null":return s=7}return s=16}return l+=String.fromCharCode(r),n++,s=16}}u(B,"scanNext");function U(r){if(R(r)||x(r))return !1;switch(r){case 125:case 93:case 123:case 91:case 34:case 58:case 44:case 47:return !1}return !0}u(U,"isUnknownContentCharacter");function y(){let r;do r=B();while(r>=12&&r<=15);return r}return u(y,"scanNextNonTrivia"),{setPosition:T,getPosition:()=>n,scan:t?y:B,getToken:()=>s,getTokenValue:()=>l,getTokenOffset:()=>o,getTokenLength:()=>n-o,getTokenStartLine:()=>f,getTokenStartCharacter:()=>o-A,getTokenError:()=>k}}u(Te,"createScanner");function R(e){return e===32||e===9}u(R,"isWhiteSpace");function x(e){return e===10||e===13}u(x,"isLineBreak");function F(e){return e>=48&&e<=57}u(F,"isDigit");var C;((function(e){e[e.lineFeed=10]="lineFeed",e[e.carriageReturn=13]="carriageReturn",e[e.space=32]="space",e[e._0=48]="_0",e[e._1=49]="_1",e[e._2=50]="_2",e[e._3=51]="_3",e[e._4=52]="_4",e[e._5=53]="_5",e[e._6=54]="_6",e[e._7=55]="_7",e[e._8=56]="_8",e[e._9=57]="_9",e[e.a=97]="a",e[e.b=98]="b",e[e.c=99]="c",e[e.d=100]="d",e[e.e=101]="e",e[e.f=102]="f",e[e.g=103]="g",e[e.h=104]="h",e[e.i=105]="i",e[e.j=106]="j",e[e.k=107]="k",e[e.l=108]="l",e[e.m=109]="m",e[e.n=110]="n",e[e.o=111]="o",e[e.p=112]="p",e[e.q=113]="q",e[e.r=114]="r",e[e.s=115]="s",e[e.t=116]="t",e[e.u=117]="u",e[e.v=118]="v",e[e.w=119]="w",e[e.x=120]="x",e[e.y=121]="y",e[e.z=122]="z",e[e.A=65]="A",e[e.B=66]="B",e[e.C=67]="C",e[e.D=68]="D",e[e.E=69]="E",e[e.F=70]="F",e[e.G=71]="G",e[e.H=72]="H",e[e.I=73]="I",e[e.J=74]="J",e[e.K=75]="K",e[e.L=76]="L",e[e.M=77]="M",e[e.N=78]="N",e[e.O=79]="O",e[e.P=80]="P",e[e.Q=81]="Q",e[e.R=82]="R",e[e.S=83]="S",e[e.T=84]="T",e[e.U=85]="U",e[e.V=86]="V",e[e.W=87]="W",e[e.X=88]="X",e[e.Y=89]="Y",e[e.Z=90]="Z",e[e.asterisk=42]="asterisk",e[e.backslash=92]="backslash",e[e.closeBrace=125]="closeBrace",e[e.closeBracket=93]="closeBracket",e[e.colon=58]="colon",e[e.comma=44]="comma",e[e.dot=46]="dot",e[e.doubleQuote=34]="doubleQuote",e[e.minus=45]="minus",e[e.openBrace=123]="openBrace",e[e.openBracket=91]="openBracket",e[e.plus=43]="plus",e[e.slash=47]="slash",e[e.formFeed=12]="formFeed",e[e.tab=9]="tab";}))(C||(C={})),new Array(20).fill(0).map((e,t)=>" ".repeat(t));const N=200;new Array(N).fill(0).map((e,t)=>`
`+" ".repeat(t)),new Array(N).fill(0).map((e,t)=>"\r"+" ".repeat(t)),new Array(N).fill(0).map((e,t)=>`\r
`+" ".repeat(t)),new Array(N).fill(0).map((e,t)=>`
`+"	".repeat(t)),new Array(N).fill(0).map((e,t)=>"\r"+"	".repeat(t)),new Array(N).fill(0).map((e,t)=>`\r
`+"	".repeat(t));var D;(function(e){e.DEFAULT={allowTrailingComma:!1};})(D||(D={}));function ve(e,t=[],i=D.DEFAULT){let n=null,l=[];const o=[];function s(f){Array.isArray(l)?l.push(f):n!==null&&(l[n]=f);}return u(s,"onValue"),Ae(e,{onObjectBegin:()=>{const f={};s(f),o.push(l),l=f,n=null;},onObjectProperty:f=>{n=f;},onObjectEnd:()=>{l=o.pop();},onArrayBegin:()=>{const f=[];s(f),o.push(l),l=f,n=null;},onArrayEnd:()=>{l=o.pop();},onLiteralValue:s,onError:(f,w,A)=>{t.push({error:f,offset:w,length:A});}},i),l[0]}u(ve,"parse$1");function Ae(e,t,i=D.DEFAULT){const n=Te(e,!1),l=[];function o(a){return a?()=>a(n.getTokenOffset(),n.getTokenLength(),n.getTokenStartLine(),n.getTokenStartCharacter()):()=>!0}u(o,"toNoArgVisit");function s(a){return a?()=>a(n.getTokenOffset(),n.getTokenLength(),n.getTokenStartLine(),n.getTokenStartCharacter(),()=>l.slice()):()=>!0}u(s,"toNoArgVisitWithPath");function c(a){return a?$=>a($,n.getTokenOffset(),n.getTokenLength(),n.getTokenStartLine(),n.getTokenStartCharacter()):()=>!0}u(c,"toOneArgVisit");function f(a){return a?$=>a($,n.getTokenOffset(),n.getTokenLength(),n.getTokenStartLine(),n.getTokenStartCharacter(),()=>l.slice()):()=>!0}u(f,"toOneArgVisitWithPath");const w=s(t.onObjectBegin),A=f(t.onObjectProperty),k=o(t.onObjectEnd),O=s(t.onArrayBegin),T=o(t.onArrayEnd),v=f(t.onLiteralValue),b=c(t.onSeparator),B=o(t.onComment),U=c(t.onError),y=i&&i.disallowComments,r=i&&i.allowTrailingComma;function g(){for(;;){const a=n.scan();switch(n.getTokenError()){case 4:m(14);break;case 5:m(15);break;case 3:m(13);break;case 1:y||m(11);break;case 2:m(12);break;case 6:m(16);break}switch(a){case 12:case 13:y?m(10):B();break;case 16:m(1);break;case 15:case 14:break;default:return a}}}u(g,"scanNext");function m(a,$=[],q=[]){if(U(a),$.length+q.length>0){let I=n.getToken();for(;I!==17;){if($.indexOf(I)!==-1){g();break}else if(q.indexOf(I)!==-1)break;I=g();}}}u(m,"handleError");function _(a){const $=n.getTokenValue();return a?v($):(A($),l.push($)),g(),!0}u(_,"parseString");function j(){switch(n.getToken()){case 11:const a=n.getTokenValue();let $=Number(a);isNaN($)&&(m(2),$=0),v($);break;case 7:v(null);break;case 8:v(!0);break;case 9:v(!1);break;default:return !1}return g(),!0}u(j,"parseLiteral");function pe(){return n.getToken()!==10?(m(3,[],[2,5]),!1):(_(!1),n.getToken()===6?(b(":"),g(),d()||m(4,[],[2,5])):m(5,[],[2,5]),l.pop(),!0)}u(pe,"parseProperty");function me(){w(),g();let a=!1;for(;n.getToken()!==2&&n.getToken()!==17;){if(n.getToken()===5){if(a||m(4,[],[]),b(","),g(),n.getToken()===2&&r)break}else a&&m(6,[],[]);pe()||m(4,[],[2,5]),a=!0;}return k(),n.getToken()!==2?m(7,[2],[]):g(),!0}u(me,"parseObject");function ge(){O(),g();let a=!0,$=!1;for(;n.getToken()!==4&&n.getToken()!==17;){if(n.getToken()===5){if($||m(4,[],[]),b(","),g(),n.getToken()===4&&r)break}else $&&m(6,[],[]);a?(l.push(0),a=!1):l[l.length-1]++,d()||m(4,[],[4,5]),$=!0;}return T(),a||l.pop(),n.getToken()!==4?m(8,[4],[]):g(),!0}u(ge,"parseArray");function d(){switch(n.getToken()){case 3:return ge();case 1:return me();case 10:return _(!0);default:return j()}}return u(d,"parseValue"),g(),n.getToken()===17?i.allowEmptyContent?!0:(m(4,[],[]),!1):d()?(n.getToken()!==17&&m(9,[],[]),!0):(m(4,[],[]),!1)}u(Ae,"visit");var ee;(function(e){e[e.None=0]="None",e[e.UnexpectedEndOfComment=1]="UnexpectedEndOfComment",e[e.UnexpectedEndOfString=2]="UnexpectedEndOfString",e[e.UnexpectedEndOfNumber=3]="UnexpectedEndOfNumber",e[e.InvalidUnicode=4]="InvalidUnicode",e[e.InvalidEscapeCharacter=5]="InvalidEscapeCharacter",e[e.InvalidCharacter=6]="InvalidCharacter";})(ee||(ee={}));var ne;(function(e){e[e.OpenBraceToken=1]="OpenBraceToken",e[e.CloseBraceToken=2]="CloseBraceToken",e[e.OpenBracketToken=3]="OpenBracketToken",e[e.CloseBracketToken=4]="CloseBracketToken",e[e.CommaToken=5]="CommaToken",e[e.ColonToken=6]="ColonToken",e[e.NullKeyword=7]="NullKeyword",e[e.TrueKeyword=8]="TrueKeyword",e[e.FalseKeyword=9]="FalseKeyword",e[e.StringLiteral=10]="StringLiteral",e[e.NumericLiteral=11]="NumericLiteral",e[e.LineCommentTrivia=12]="LineCommentTrivia",e[e.BlockCommentTrivia=13]="BlockCommentTrivia",e[e.LineBreakTrivia=14]="LineBreakTrivia",e[e.Trivia=15]="Trivia",e[e.Unknown=16]="Unknown",e[e.EOF=17]="EOF";})(ne||(ne={}));const Oe=ve;var te;(function(e){e[e.InvalidSymbol=1]="InvalidSymbol",e[e.InvalidNumberFormat=2]="InvalidNumberFormat",e[e.PropertyNameExpected=3]="PropertyNameExpected",e[e.ValueExpected=4]="ValueExpected",e[e.ColonExpected=5]="ColonExpected",e[e.CommaExpected=6]="CommaExpected",e[e.CloseBraceExpected=7]="CloseBraceExpected",e[e.CloseBracketExpected=8]="CloseBracketExpected",e[e.EndOfFileExpected=9]="EndOfFileExpected",e[e.InvalidCommentToken=10]="InvalidCommentToken",e[e.UnexpectedEndOfComment=11]="UnexpectedEndOfComment",e[e.UnexpectedEndOfString=12]="UnexpectedEndOfString",e[e.UnexpectedEndOfNumber=13]="UnexpectedEndOfNumber",e[e.InvalidUnicode=14]="InvalidUnicode",e[e.InvalidEscapeCharacter=15]="InvalidEscapeCharacter",e[e.InvalidCharacter=16]="InvalidCharacter";})(te||(te={}));const ie=u((e,t)=>Oe(we(t,e,"utf8")),"readJsonc"),G=Symbol("implicitBaseUrl"),je=u(()=>{const{findPnpApi:e}=ke;return e&&e(process.cwd())},"getPnpApi"),z=u((e,t,i,n)=>{const l=`resolveFromPackageJsonPath:${e}:${t}:${i}`;if(n!=null&&n.has(l))return n.get(l);const o=ie(e,n);if(!o)return;let s=t||"tsconfig.json";if(!i&&o.exports)try{const[c]=v(o.exports,t,["require","types"]);s=c;}catch{return !1}else !t&&o.tsconfig&&(s=o.tsconfig);return s=p$1.join(e,"..",s),n==null||n.set(l,s),s},"resolveFromPackageJsonPath"),Q="package.json",H="tsconfig.json",$e=u((e,t,i)=>{let n=e;if(e===".."&&(n=p$1.join(n,H)),e[0]==="."&&(n=p$1.resolve(t,n)),p$1.isAbsolute(n)){if(L(i,n)){if(P(i,n).isFile())return n}else if(!n.endsWith(".json")){const T=`${n}.json`;if(L(i,T))return T}return}const[l,...o]=e.split("/"),s=l[0]==="@"?`${l}/${o.shift()}`:l,c=o.join("/"),f=je();if(f){const{resolveRequest:T}=f;try{if(s===e){const v=T(p$1.join(s,Q),t);if(v){const b=z(v,c,!1,i);if(b&&L(i,b))return b}}else {let v;try{v=T(e,t,{extensions:[".json"]});}catch{v=T(p$1.join(e,H),t);}if(v)return v}}catch{}}const w=K(p$1.resolve(t),p$1.join("node_modules",s),i);if(!w||!P(i,w).isDirectory())return;const A=p$1.join(w,Q);if(L(i,A)){const T=z(A,c,!1,i);if(T===!1)return;if(T&&L(i,T)&&P(i,T).isFile())return T}const k=p$1.join(w,c),O=k.endsWith(".json");if(!O){const T=`${k}.json`;if(L(i,T))return T}if(L(i,k)){if(P(i,k).isDirectory()){const T=p$1.join(k,Q);if(L(i,T)){const b=z(T,"",!0,i);if(b&&L(i,b))return b}const v=p$1.join(k,H);if(L(i,v))return v}else if(O)return k}},"resolveExtendsPath"),Be=u((e,t,i,n)=>{const l=$e(e,t,n);if(!l)throw new Error(`File '${e}' not found.`);if(i.has(l))throw new Error(`Circularity detected while resolving configuration: ${l}`);i.add(l);const o=p$1.dirname(l),s=le(l,n,i);delete s.references;const{compilerOptions:c}=s;if(c){const f=["baseUrl","outDir"];for(const w of f){const A=c[w];A&&(c[w]=E(p$1.relative(t,p$1.join(o,A)))||"./");}}return s.files&&(s.files=s.files.map(f=>E(p$1.relative(t,p$1.join(o,f))))),s.include&&(s.include=s.include.map(f=>E(p$1.relative(t,p$1.join(o,f))))),s.exclude&&(s.exclude=s.exclude.map(f=>E(p$1.relative(t,p$1.join(o,f))))),s},"resolveExtends"),le=u((e,t,i=new Set)=>{let n;try{n=ie(e,t)||{};}catch{throw new Error(`Cannot resolve tsconfig at path: ${e}`)}if(typeof n!="object")throw new SyntaxError(`Failed to parse tsconfig at: ${e}`);const l=p$1.dirname(e);if(n.compilerOptions){const{compilerOptions:o}=n;o.paths&&!o.baseUrl&&(o[G]=l);}if(n.extends){const o=Array.isArray(n.extends)?n.extends:[n.extends];delete n.extends;for(const s of o.reverse()){const c=Be(s,l,new Set(i),t),f={...c,...n,compilerOptions:{...c.compilerOptions,...n.compilerOptions}};c.watchOptions&&(f.watchOptions={...c.watchOptions,...n.watchOptions}),n=f;}}if(n.compilerOptions){const{compilerOptions:o}=n,s=["baseUrl","rootDir"];for(const f of s){const w=o[f];if(w){const A=p$1.resolve(l,w),k=M(p$1.relative(l,A));o[f]=k;}}const{outDir:c}=o;c&&(Array.isArray(n.exclude)||(n.exclude=[]),n.exclude.includes(c)||n.exclude.push(c),o.outDir=M(c));}else n.compilerOptions={};if(n.files&&(n.files=n.files.map(M)),n.include&&(n.include=n.include.map(E)),n.watchOptions){const{watchOptions:o}=n;o.excludeDirectories&&(o.excludeDirectories=o.excludeDirectories.map(s=>E(p$1.resolve(l,s))));}return n},"_parseTsconfig"),se=u((e,t=new Map)=>le(p$1.resolve(e),t),"parseTsconfig"),_e=u((e=process.cwd(),t="tsconfig.json",i=new Map)=>{const n=K(E(e),t,i);if(!n)return null;const l=se(n,i);return {path:n,config:l}},"getTsconfig"),Ee=/\*/g,oe=u((e,t)=>{const i=e.match(Ee);if(i&&i.length>1)throw new Error(t)},"assertStarCount"),Le=u(e=>{if(e.includes("*")){const[t,i]=e.split("*");return {prefix:t,suffix:i}}return e},"parsePattern"),Ue=u(({prefix:e,suffix:t},i)=>i.startsWith(e)&&i.endsWith(t),"isPatternMatch"),ye=u((e,t,i)=>Object.entries(e).map(([n,l])=>(oe(n,`Pattern '${n}' can have at most one '*' character.`),{pattern:Le(n),substitutions:l.map(o=>{if(oe(o,`Substitution '${o}' in pattern '${n}' can have at most one '*' character.`),!t&&!J.test(o))throw new Error("Non-relative paths are not allowed when 'baseUrl' is not set. Did you forget a leading './'?");return p$1.resolve(i,o)})})),"parsePaths");u(e=>{const{compilerOptions:t}=e.config;if(!t)return null;const{baseUrl:i,paths:n}=t;if(!i&&!n)return null;const l=G in t&&t[G],o=p$1.resolve(p$1.dirname(e.path),i||l||"."),s=n?ye(n,i,o):[];return c=>{if(J.test(c))return [];const f=[];for(const O of s){if(O.pattern===c)return O.substitutions.map(E);typeof O.pattern!="string"&&f.push(O);}let w,A=-1;for(const O of f)Ue(O.pattern,c)&&O.pattern.prefix.length>A&&(A=O.pattern.prefix.length,w=O);if(!w)return i?[E(p$1.join(o,c))]:[];const k=c.slice(w.pattern.prefix.length,c.length-w.pattern.suffix.length);return w.substitutions.map(O=>E(O.replace("*",k)))}},"createPathsMatcher");const re=u(e=>{let t="";for(let i=0;i<e.length;i+=1){const n=e[i],l=n.toUpperCase();t+=n===l?n.toLowerCase():l;}return t},"s"),Ne=65,xe=97,Ie=u(()=>Math.floor(Math.random()*26),"m"),Pe=u(e=>Array.from({length:e},()=>String.fromCodePoint(Ie()+(Math.random()>.5?Ne:xe))).join(""),"S"),De=u((e=W)=>{const t=process.execPath;if(e.existsSync(t))return !e.existsSync(re(t));const i=`/${Pe(10)}`;e.writeFileSync(i,"");const n=!e.existsSync(re(i));return e.unlinkSync(i),n},"l"),{join:V}=p$1.posix,X={ts:[".ts",".tsx",".d.ts"],cts:[".cts",".d.cts"],mts:[".mts",".d.mts"]},Ve=u(e=>{const t=[...X.ts],i=[...X.cts],n=[...X.mts];return e!=null&&e.allowJs&&(t.push(".js",".jsx"),i.push(".cjs"),n.push(".mjs")),[...t,...i,...n]},"getSupportedExtensions"),Se=u(e=>{const t=[];if(!e)return t;const{outDir:i,declarationDir:n}=e;return i&&t.push(i),n&&t.push(n),t},"getDefaultExcludeSpec"),ue=u(e=>e.replaceAll(/[.*+?^${}()|[\]\\]/g,"\\$&"),"escapeForRegexp"),de=["node_modules","bower_components","jspm_packages"],Y=`(?!(${de.join("|")})(/|$))`,We=/(?:^|\/)[^.*?]+$/,fe="**/*",S="[^/]",Z="[^./]",ce=process.platform==="win32";u(({config:e,path:t},i=De())=>{if("extends"in e)throw new Error("tsconfig#extends must be resolved. Use getTsconfig or parseTsconfig to resolve it.");if(!p$1.isAbsolute(t))throw new Error("The tsconfig path must be absolute");ce&&(t=E(t));const n=p$1.dirname(t),{files:l,include:o,exclude:s,compilerOptions:c}=e,f=l==null?void 0:l.map(b=>V(n,b)),w=Ve(c),A=i?"":"i",O=(s||Se(c)).map(b=>{const B=V(n,b),U=ue(B).replaceAll("\\*\\*/","(.+/)?").replaceAll("\\*",`${S}*`).replaceAll("\\?",S);return new RegExp(`^${U}($|/)`,A)}),T=l||o?o:[fe],v=T?T.map(b=>{let B=V(n,b);We.test(B)&&(B=V(B,fe));const U=ue(B).replaceAll("/\\*\\*",`(/${Y}${Z}${S}*)*?`).replaceAll(/(\/)?\\\*/g,(y,r)=>{const g=`(${Z}|(\\.(?!min\\.js$))?)*`;return r?`/${Y}${Z}${g}`:g}).replaceAll(/(\/)?\\\?/g,(y,r)=>{const g=S;return r?`/${Y}${g}`:g});return new RegExp(`^${U}$`,A)}):void 0;return b=>{if(!p$1.isAbsolute(b))throw new Error("filePath must be absolute");if(ce&&(b=E(b)),f!=null&&f.includes(b))return e;if(!(!w.some(B=>b.endsWith(B))||O.some(B=>B.test(b)))&&v&&v.some(B=>B.test(b)))return e}},"createFilesMatcher");

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const newLineRegExp = /\r?\n/;
const errCodeRegExp = /error TS(?<errCode>\d+)/;
async function makeTscErrorInfo(errInfo) {
  const [errFilePathPos = "", ...errMsgRawArr] = errInfo.split(":");
  if (!errFilePathPos || errMsgRawArr.length === 0 || errMsgRawArr.join("").length === 0) {
    return ["unknown filepath", null];
  }
  const errMsgRaw = errMsgRawArr.join("").trim();
  const [errFilePath, errPos] = errFilePathPos.slice(0, -1).split("(");
  if (!errFilePath || !errPos) {
    return ["unknown filepath", null];
  }
  const [errLine, errCol] = errPos.split(",");
  if (!errLine || !errCol) {
    return [errFilePath, null];
  }
  const execArr = errCodeRegExp.exec(errMsgRaw);
  if (!execArr) {
    return [errFilePath, null];
  }
  const errCodeStr = execArr.groups?.errCode ?? "";
  if (!errCodeStr) {
    return [errFilePath, null];
  }
  const line = Number(errLine);
  const col = Number(errCol);
  const errCode = Number(errCodeStr);
  return [
    errFilePath,
    {
      filePath: errFilePath,
      errCode,
      line,
      column: col,
      errMsg: errMsgRaw.slice(`error TS${errCode} `.length)
    }
  ];
}
async function getTsconfig(root, config) {
  const configName = config.tsconfig ? basename(config.tsconfig) : void 0;
  const configSearchPath = config.tsconfig ? dirname(resolve(root, config.tsconfig)) : root;
  const tsconfig = _e(configSearchPath, configName);
  if (!tsconfig) {
    throw new Error("no tsconfig.json found");
  }
  const tempConfigPath = join(
    dirname(tsconfig.path),
    "tsconfig.vitest-temp.json"
  );
  try {
    const tmpTsConfig = { ...tsconfig.config };
    tmpTsConfig.compilerOptions = tmpTsConfig.compilerOptions || {};
    tmpTsConfig.compilerOptions.emitDeclarationOnly = false;
    tmpTsConfig.compilerOptions.incremental = true;
    tmpTsConfig.compilerOptions.tsBuildInfoFile = join(
      process.versions.pnp ? join(nodeos__default.tmpdir(), "vitest") : __dirname,
      "tsconfig.tmp.tsbuildinfo"
    );
    const tsconfigFinalContent = JSON.stringify(tmpTsConfig, null, 2);
    await writeFile(tempConfigPath, tsconfigFinalContent);
    return { path: tempConfigPath, config: tmpTsConfig };
  } catch (err) {
    throw new Error("failed to write tsconfig.temp.json", { cause: err });
  }
}
async function getRawErrsMapFromTsCompile(tscErrorStdout) {
  const rawErrsMap = /* @__PURE__ */ new Map();
  const infos = await Promise.all(
    tscErrorStdout.split(newLineRegExp).reduce((prev, next) => {
      if (!next) {
        return prev;
      } else if (!next.startsWith(" ")) {
        prev.push(next);
      } else {
        prev[prev.length - 1] += `
${next}`;
      }
      return prev;
    }, []).map((errInfoLine) => makeTscErrorInfo(errInfoLine))
  );
  infos.forEach(([errFilePath, errInfo]) => {
    if (!errInfo) {
      return;
    }
    if (!rawErrsMap.has(errFilePath)) {
      rawErrsMap.set(errFilePath, [errInfo]);
    } else {
      rawErrsMap.get(errFilePath)?.push(errInfo);
    }
  });
  return rawErrsMap;
}

function createIndexMap(source) {
  const map = /* @__PURE__ */ new Map();
  let index = 0;
  let line = 1;
  let column = 1;
  for (const char of source) {
    map.set(`${line}:${column}`, index++);
    if (char === "\n" || char === "\r\n") {
      line++;
      column = 0;
    } else {
      column++;
    }
  }
  return map;
}

// AST walker module for ESTree compatible trees


// An ancestor walk keeps an array of ancestor nodes (including the
// current node) and passes them to the callback as third parameter
// (and also as state parameter when no other state is present).
function ancestor(node, visitors, baseVisitor, state, override) {
  var ancestors = [];
  if (!baseVisitor) { baseVisitor = base
  ; }(function c(node, st, override) {
    var type = override || node.type;
    var isNew = node !== ancestors[ancestors.length - 1];
    if (isNew) { ancestors.push(node); }
    baseVisitor[type](node, st, c);
    if (visitors[type]) { visitors[type](node, st || ancestors, ancestors); }
    if (isNew) { ancestors.pop(); }
  })(node, state, override);
}

function skipThrough(node, st, c) { c(node, st); }
function ignore(_node, _st, _c) {}

// Node walkers.

var base = {};

base.Program = base.BlockStatement = base.StaticBlock = function (node, st, c) {
  for (var i = 0, list = node.body; i < list.length; i += 1)
    {
    var stmt = list[i];

    c(stmt, st, "Statement");
  }
};
base.Statement = skipThrough;
base.EmptyStatement = ignore;
base.ExpressionStatement = base.ParenthesizedExpression = base.ChainExpression =
  function (node, st, c) { return c(node.expression, st, "Expression"); };
base.IfStatement = function (node, st, c) {
  c(node.test, st, "Expression");
  c(node.consequent, st, "Statement");
  if (node.alternate) { c(node.alternate, st, "Statement"); }
};
base.LabeledStatement = function (node, st, c) { return c(node.body, st, "Statement"); };
base.BreakStatement = base.ContinueStatement = ignore;
base.WithStatement = function (node, st, c) {
  c(node.object, st, "Expression");
  c(node.body, st, "Statement");
};
base.SwitchStatement = function (node, st, c) {
  c(node.discriminant, st, "Expression");
  for (var i$1 = 0, list$1 = node.cases; i$1 < list$1.length; i$1 += 1) {
    var cs = list$1[i$1];

    if (cs.test) { c(cs.test, st, "Expression"); }
    for (var i = 0, list = cs.consequent; i < list.length; i += 1)
      {
      var cons = list[i];

      c(cons, st, "Statement");
    }
  }
};
base.SwitchCase = function (node, st, c) {
  if (node.test) { c(node.test, st, "Expression"); }
  for (var i = 0, list = node.consequent; i < list.length; i += 1)
    {
    var cons = list[i];

    c(cons, st, "Statement");
  }
};
base.ReturnStatement = base.YieldExpression = base.AwaitExpression = function (node, st, c) {
  if (node.argument) { c(node.argument, st, "Expression"); }
};
base.ThrowStatement = base.SpreadElement =
  function (node, st, c) { return c(node.argument, st, "Expression"); };
base.TryStatement = function (node, st, c) {
  c(node.block, st, "Statement");
  if (node.handler) { c(node.handler, st); }
  if (node.finalizer) { c(node.finalizer, st, "Statement"); }
};
base.CatchClause = function (node, st, c) {
  if (node.param) { c(node.param, st, "Pattern"); }
  c(node.body, st, "Statement");
};
base.WhileStatement = base.DoWhileStatement = function (node, st, c) {
  c(node.test, st, "Expression");
  c(node.body, st, "Statement");
};
base.ForStatement = function (node, st, c) {
  if (node.init) { c(node.init, st, "ForInit"); }
  if (node.test) { c(node.test, st, "Expression"); }
  if (node.update) { c(node.update, st, "Expression"); }
  c(node.body, st, "Statement");
};
base.ForInStatement = base.ForOfStatement = function (node, st, c) {
  c(node.left, st, "ForInit");
  c(node.right, st, "Expression");
  c(node.body, st, "Statement");
};
base.ForInit = function (node, st, c) {
  if (node.type === "VariableDeclaration") { c(node, st); }
  else { c(node, st, "Expression"); }
};
base.DebuggerStatement = ignore;

base.FunctionDeclaration = function (node, st, c) { return c(node, st, "Function"); };
base.VariableDeclaration = function (node, st, c) {
  for (var i = 0, list = node.declarations; i < list.length; i += 1)
    {
    var decl = list[i];

    c(decl, st);
  }
};
base.VariableDeclarator = function (node, st, c) {
  c(node.id, st, "Pattern");
  if (node.init) { c(node.init, st, "Expression"); }
};

base.Function = function (node, st, c) {
  if (node.id) { c(node.id, st, "Pattern"); }
  for (var i = 0, list = node.params; i < list.length; i += 1)
    {
    var param = list[i];

    c(param, st, "Pattern");
  }
  c(node.body, st, node.expression ? "Expression" : "Statement");
};

base.Pattern = function (node, st, c) {
  if (node.type === "Identifier")
    { c(node, st, "VariablePattern"); }
  else if (node.type === "MemberExpression")
    { c(node, st, "MemberPattern"); }
  else
    { c(node, st); }
};
base.VariablePattern = ignore;
base.MemberPattern = skipThrough;
base.RestElement = function (node, st, c) { return c(node.argument, st, "Pattern"); };
base.ArrayPattern = function (node, st, c) {
  for (var i = 0, list = node.elements; i < list.length; i += 1) {
    var elt = list[i];

    if (elt) { c(elt, st, "Pattern"); }
  }
};
base.ObjectPattern = function (node, st, c) {
  for (var i = 0, list = node.properties; i < list.length; i += 1) {
    var prop = list[i];

    if (prop.type === "Property") {
      if (prop.computed) { c(prop.key, st, "Expression"); }
      c(prop.value, st, "Pattern");
    } else if (prop.type === "RestElement") {
      c(prop.argument, st, "Pattern");
    }
  }
};

base.Expression = skipThrough;
base.ThisExpression = base.Super = base.MetaProperty = ignore;
base.ArrayExpression = function (node, st, c) {
  for (var i = 0, list = node.elements; i < list.length; i += 1) {
    var elt = list[i];

    if (elt) { c(elt, st, "Expression"); }
  }
};
base.ObjectExpression = function (node, st, c) {
  for (var i = 0, list = node.properties; i < list.length; i += 1)
    {
    var prop = list[i];

    c(prop, st);
  }
};
base.FunctionExpression = base.ArrowFunctionExpression = base.FunctionDeclaration;
base.SequenceExpression = function (node, st, c) {
  for (var i = 0, list = node.expressions; i < list.length; i += 1)
    {
    var expr = list[i];

    c(expr, st, "Expression");
  }
};
base.TemplateLiteral = function (node, st, c) {
  for (var i = 0, list = node.quasis; i < list.length; i += 1)
    {
    var quasi = list[i];

    c(quasi, st);
  }

  for (var i$1 = 0, list$1 = node.expressions; i$1 < list$1.length; i$1 += 1)
    {
    var expr = list$1[i$1];

    c(expr, st, "Expression");
  }
};
base.TemplateElement = ignore;
base.UnaryExpression = base.UpdateExpression = function (node, st, c) {
  c(node.argument, st, "Expression");
};
base.BinaryExpression = base.LogicalExpression = function (node, st, c) {
  c(node.left, st, "Expression");
  c(node.right, st, "Expression");
};
base.AssignmentExpression = base.AssignmentPattern = function (node, st, c) {
  c(node.left, st, "Pattern");
  c(node.right, st, "Expression");
};
base.ConditionalExpression = function (node, st, c) {
  c(node.test, st, "Expression");
  c(node.consequent, st, "Expression");
  c(node.alternate, st, "Expression");
};
base.NewExpression = base.CallExpression = function (node, st, c) {
  c(node.callee, st, "Expression");
  if (node.arguments)
    { for (var i = 0, list = node.arguments; i < list.length; i += 1)
      {
        var arg = list[i];

        c(arg, st, "Expression");
      } }
};
base.MemberExpression = function (node, st, c) {
  c(node.object, st, "Expression");
  if (node.computed) { c(node.property, st, "Expression"); }
};
base.ExportNamedDeclaration = base.ExportDefaultDeclaration = function (node, st, c) {
  if (node.declaration)
    { c(node.declaration, st, node.type === "ExportNamedDeclaration" || node.declaration.id ? "Statement" : "Expression"); }
  if (node.source) { c(node.source, st, "Expression"); }
};
base.ExportAllDeclaration = function (node, st, c) {
  if (node.exported)
    { c(node.exported, st); }
  c(node.source, st, "Expression");
};
base.ImportDeclaration = function (node, st, c) {
  for (var i = 0, list = node.specifiers; i < list.length; i += 1)
    {
    var spec = list[i];

    c(spec, st);
  }
  c(node.source, st, "Expression");
};
base.ImportExpression = function (node, st, c) {
  c(node.source, st, "Expression");
};
base.ImportSpecifier = base.ImportDefaultSpecifier = base.ImportNamespaceSpecifier = base.Identifier = base.PrivateIdentifier = base.Literal = ignore;

base.TaggedTemplateExpression = function (node, st, c) {
  c(node.tag, st, "Expression");
  c(node.quasi, st, "Expression");
};
base.ClassDeclaration = base.ClassExpression = function (node, st, c) { return c(node, st, "Class"); };
base.Class = function (node, st, c) {
  if (node.id) { c(node.id, st, "Pattern"); }
  if (node.superClass) { c(node.superClass, st, "Expression"); }
  c(node.body, st);
};
base.ClassBody = function (node, st, c) {
  for (var i = 0, list = node.body; i < list.length; i += 1)
    {
    var elt = list[i];

    c(elt, st);
  }
};
base.MethodDefinition = base.PropertyDefinition = base.Property = function (node, st, c) {
  if (node.computed) { c(node.key, st, "Expression"); }
  if (node.value) { c(node.value, st, "Expression"); }
};

async function collectTests(ctx, filepath) {
  const request = await ctx.vitenode.transformRequest(filepath, filepath);
  if (!request) {
    return null;
  }
  const ast = await parseAstAsync(request.code);
  const testFilepath = relative(ctx.config.root, filepath);
  const projectName = ctx.getName();
  const typecheckSubprojectName = projectName ? `${projectName}:__typecheck__` : "__typecheck__";
  const file = {
    filepath,
    type: "suite",
    id: generateHash(`${testFilepath}${typecheckSubprojectName}`),
    name: testFilepath,
    mode: "run",
    tasks: [],
    start: ast.start,
    end: ast.end,
    projectName,
    meta: { typecheck: true },
    file: null
  };
  file.file = file;
  const definitions = [];
  const getName = (callee) => {
    if (!callee) {
      return null;
    }
    if (callee.type === "Identifier") {
      return callee.name;
    }
    if (callee.type === "CallExpression") {
      return getName(callee.callee);
    }
    if (callee.type === "TaggedTemplateExpression") {
      return getName(callee.tag);
    }
    if (callee.type === "MemberExpression") {
      if (callee.object?.name?.startsWith("__vite_ssr_")) {
        return getName(callee.property);
      }
      return getName(callee.object?.property);
    }
    return null;
  };
  ancestor(ast, {
    CallExpression(node) {
      const { callee } = node;
      const name = getName(callee);
      if (!name) {
        return;
      }
      if (!["it", "test", "describe", "suite"].includes(name)) {
        return;
      }
      const property = callee?.property?.name;
      const mode = !property || property === name ? "run" : property;
      if (mode === "each" || mode === "skipIf" || mode === "runIf" || mode === "for") {
        return;
      }
      let start;
      const end = node.end;
      if (callee.type === "CallExpression") {
        start = callee.end;
      } else if (callee.type === "TaggedTemplateExpression") {
        start = callee.end + 1;
      } else {
        start = node.start;
      }
      const {
        arguments: [messageNode]
      } = node;
      if (!messageNode) {
        return;
      }
      const message = getNodeAsString(messageNode, request.code);
      definitions.push({
        start,
        end,
        name: message,
        type: name === "it" || name === "test" ? "test" : "suite",
        mode,
        task: null
      });
    }
  });
  let lastSuite = file;
  const updateLatestSuite = (index) => {
    while (lastSuite.suite && lastSuite.end < index) {
      lastSuite = lastSuite.suite;
    }
    return lastSuite;
  };
  definitions.sort((a, b) => a.start - b.start).forEach((definition) => {
    const latestSuite = updateLatestSuite(definition.start);
    let mode = definition.mode;
    if (latestSuite.mode !== "run") {
      mode = latestSuite.mode;
    }
    if (definition.type === "suite") {
      const task2 = {
        type: definition.type,
        id: "",
        suite: latestSuite,
        file,
        tasks: [],
        mode,
        name: definition.name,
        end: definition.end,
        start: definition.start,
        meta: {
          typecheck: true
        }
      };
      definition.task = task2;
      latestSuite.tasks.push(task2);
      lastSuite = task2;
      return;
    }
    const task = {
      type: definition.type,
      id: "",
      suite: latestSuite,
      file,
      mode,
      context: {},
      // not used in typecheck
      name: definition.name,
      end: definition.end,
      start: definition.start,
      meta: {
        typecheck: true
      }
    };
    definition.task = task;
    latestSuite.tasks.push(task);
  });
  calculateSuiteHash(file);
  const hasOnly = someTasksAreOnly(file);
  interpretTaskModes(
    file,
    ctx.config.testNamePattern,
    hasOnly,
    false,
    ctx.config.allowOnly
  );
  return {
    file,
    parsed: request.code,
    filepath,
    map: request.map,
    definitions
  };
}
function getNodeAsString(node, code) {
  if (node.type === "Literal") {
    return String(node.value);
  } else if (node.type === "Identifier") {
    return node.name;
  } else if (node.type === "TemplateLiteral") {
    return mergeTemplateLiteral(node, code);
  } else {
    return code.slice(node.start, node.end);
  }
}
function mergeTemplateLiteral(node, code) {
  let result = "";
  let expressionsIndex = 0;
  for (let quasisIndex = 0; quasisIndex < node.quasis.length; quasisIndex++) {
    result += node.quasis[quasisIndex].value.raw;
    if (expressionsIndex in node.expressions) {
      const expression = node.expressions[expressionsIndex];
      const string = expression.type === "Literal" ? expression.raw : getNodeAsString(expression, code);
      if (expression.type === "TemplateLiteral") {
        result += `\${\`${string}\`}`;
      } else {
        result += `\${${string}}`;
      }
      expressionsIndex++;
    }
  }
  return result;
}

class TypeCheckError extends Error {
  constructor(message, stacks) {
    super(message);
    this.message = message;
    this.stacks = stacks;
  }
  name = "TypeCheckError";
}
class Typechecker {
  constructor(ctx) {
    this.ctx = ctx;
  }
  _onParseStart;
  _onParseEnd;
  _onWatcherRerun;
  _result = {
    files: [],
    sourceErrors: [],
    time: 0
  };
  _startTime = 0;
  _output = "";
  _tests = {};
  tempConfigPath;
  allowJs;
  process;
  files = [];
  setFiles(files) {
    this.files = files;
  }
  onParseStart(fn) {
    this._onParseStart = fn;
  }
  onParseEnd(fn) {
    this._onParseEnd = fn;
  }
  onWatcherRerun(fn) {
    this._onWatcherRerun = fn;
  }
  async collectFileTests(filepath) {
    return collectTests(this.ctx, filepath);
  }
  getFiles() {
    return this.files.filter((filename) => {
      const extension = extname(filename);
      return extension !== ".js" || this.allowJs;
    });
  }
  async collectTests() {
    const tests = (await Promise.all(
      this.getFiles().map((filepath) => this.collectFileTests(filepath))
    )).reduce((acc, data) => {
      if (!data) {
        return acc;
      }
      acc[data.filepath] = data;
      return acc;
    }, {});
    this._tests = tests;
    return tests;
  }
  markPassed(file) {
    if (!file.result?.state) {
      file.result = {
        state: "pass"
      };
    }
    const markTasks = (tasks) => {
      for (const task of tasks) {
        if ("tasks" in task) {
          markTasks(task.tasks);
        }
        if (!task.result?.state && task.mode === "run") {
          task.result = {
            state: "pass"
          };
        }
      }
    };
    markTasks(file.tasks);
  }
  async prepareResults(output) {
    const typeErrors = await this.parseTscLikeOutput(output);
    const testFiles = new Set(this.getFiles());
    if (!this._tests) {
      this._tests = await this.collectTests();
    }
    const sourceErrors = [];
    const files = [];
    testFiles.forEach((path) => {
      const { file, definitions, map, parsed } = this._tests[path];
      const errors = typeErrors.get(path);
      files.push(file);
      if (!errors) {
        this.markPassed(file);
        return;
      }
      const sortedDefinitions = [
        ...definitions.sort((a, b) => b.start - a.start)
      ];
      const traceMap = map && new TraceMap(map);
      const indexMap = createIndexMap(parsed);
      const markState = (task, state) => {
        task.result = {
          state: task.mode === "run" || task.mode === "only" ? state : task.mode
        };
        if (task.suite) {
          markState(task.suite, state);
        } else if (task.file && task !== task.file) {
          markState(task.file, state);
        }
      };
      errors.forEach(({ error, originalError }) => {
        const processedPos = traceMap ? generatedPositionFor(traceMap, {
          line: originalError.line,
          column: originalError.column,
          source: basename(path)
        }) : originalError;
        const line = processedPos.line ?? originalError.line;
        const column = processedPos.column ?? originalError.column;
        const index = indexMap.get(`${line}:${column}`);
        const definition = index != null && sortedDefinitions.find(
          (def) => def.start <= index && def.end >= index
        );
        const suite = definition ? definition.task : file;
        const state = suite.mode === "run" || suite.mode === "only" ? "fail" : suite.mode;
        const errors2 = suite.result?.errors || [];
        suite.result = {
          state,
          errors: errors2
        };
        errors2.push(error);
        if (state === "fail") {
          if (suite.suite) {
            markState(suite.suite, "fail");
          } else if (suite.file && suite !== suite.file) {
            markState(suite.file, "fail");
          }
        }
      });
      this.markPassed(file);
    });
    typeErrors.forEach((errors, path) => {
      if (!testFiles.has(path)) {
        sourceErrors.push(...errors.map(({ error }) => error));
      }
    });
    return {
      files,
      sourceErrors,
      time: performance.now() - this._startTime
    };
  }
  async parseTscLikeOutput(output) {
    const errorsMap = await getRawErrsMapFromTsCompile(output);
    const typesErrors = /* @__PURE__ */ new Map();
    errorsMap.forEach((errors, path) => {
      const filepath = resolve(this.ctx.config.root, path);
      const suiteErrors = errors.map((info) => {
        const limit = Error.stackTraceLimit;
        Error.stackTraceLimit = 0;
        const errMsg = info.errMsg.replace(
          /\r?\n\s*(Type .* has no call signatures)/g,
          " $1"
        );
        const error = new TypeCheckError(errMsg, [
          {
            file: filepath,
            line: info.line,
            column: info.column,
            method: ""
          }
        ]);
        Error.stackTraceLimit = limit;
        return {
          originalError: info,
          error: {
            name: error.name,
            nameStr: String(error.name),
            message: errMsg,
            stacks: error.stacks,
            stack: "",
            stackStr: ""
          }
        };
      });
      typesErrors.set(filepath, suiteErrors);
    });
    return typesErrors;
  }
  async clear() {
    if (this.tempConfigPath) {
      await rm(this.tempConfigPath, { force: true });
    }
  }
  async stop() {
    await this.clear();
    this.process?.kill();
    this.process = void 0;
  }
  async ensurePackageInstalled(ctx, checker) {
    if (checker !== "tsc" && checker !== "vue-tsc") {
      return;
    }
    const packageName = checker === "tsc" ? "typescript" : "vue-tsc";
    await ctx.packageInstaller.ensureInstalled(packageName, ctx.config.root);
  }
  async prepare() {
    const { root, typecheck } = this.ctx.config;
    const { config, path } = await getTsconfig(root, typecheck);
    this.tempConfigPath = path;
    this.allowJs = typecheck.allowJs || config.allowJs || false;
  }
  getExitCode() {
    return this.process?.exitCode != null && this.process.exitCode;
  }
  getOutput() {
    return this._output;
  }
  async start() {
    if (this.process) {
      return;
    }
    if (!this.tempConfigPath) {
      throw new Error("tsconfig was not initialized");
    }
    const { root, watch, typecheck } = this.ctx.config;
    const args = ["--noEmit", "--pretty", "false", "-p", this.tempConfigPath];
    if (watch) {
      args.push("--watch");
    }
    if (typecheck.allowJs) {
      args.push("--allowJs", "--checkJs");
    }
    this._output = "";
    this._startTime = performance.now();
    const child = x$1(typecheck.checker, args, {
      nodeOptions: {
        cwd: root,
        stdio: "pipe"
      },
      throwOnError: false
    });
    this.process = child.process;
    await this._onParseStart?.();
    let rerunTriggered = false;
    child.process?.stdout?.on("data", (chunk) => {
      this._output += chunk;
      if (!watch) {
        return;
      }
      if (this._output.includes("File change detected") && !rerunTriggered) {
        this._onWatcherRerun?.();
        this._startTime = performance.now();
        this._result.sourceErrors = [];
        this._result.files = [];
        this._tests = null;
        rerunTriggered = true;
      }
      if (/Found \w+ errors*. Watching for/.test(this._output)) {
        rerunTriggered = false;
        this.prepareResults(this._output).then((result) => {
          this._result = result;
          this._onParseEnd?.(result);
        });
        this._output = "";
      }
    });
    if (!watch) {
      await child;
      this._result = await this.prepareResults(this._output);
      await this._onParseEnd?.(this._result);
    }
  }
  getResult() {
    return this._result;
  }
  getTestFiles() {
    return Object.values(this._tests || {}).map((i) => i.file);
  }
  getTestPacks() {
    return Object.values(this._tests || {}).map(({ file }) => getTasks(file)).flat().map((i) => [i.id, i.result, { typecheck: true }]);
  }
}

class BaseSequencer {
  ctx;
  constructor(ctx) {
    this.ctx = ctx;
  }
  // async so it can be extended by other sequelizers
  async shard(files) {
    const { config } = this.ctx;
    const { index, count } = config.shard;
    const shardSize = Math.ceil(files.length / count);
    const shardStart = shardSize * (index - 1);
    const shardEnd = shardSize * index;
    return [...files].map((spec) => {
      const fullPath = resolve(slash(config.root), slash(spec.moduleId));
      const specPath = fullPath?.slice(config.root.length);
      return {
        spec,
        hash: createHash("sha1").update(specPath).digest("hex")
      };
    }).sort((a, b) => a.hash < b.hash ? -1 : a.hash > b.hash ? 1 : 0).slice(shardStart, shardEnd).map(({ spec }) => spec);
  }
  // async so it can be extended by other sequelizers
  async sort(files) {
    const cache = this.ctx.cache;
    return [...files].sort((a, b) => {
      const keyA = `${a.project.name}:${relative(this.ctx.config.root, a.moduleId)}`;
      const keyB = `${b.project.name}:${relative(this.ctx.config.root, b.moduleId)}`;
      const aState = cache.getFileTestResults(keyA);
      const bState = cache.getFileTestResults(keyB);
      if (!aState || !bState) {
        const statsA = cache.getFileStats(keyA);
        const statsB = cache.getFileStats(keyB);
        if (!statsA || !statsB) {
          return !statsA && statsB ? -1 : !statsB && statsA ? 1 : 0;
        }
        return statsB.size - statsA.size;
      }
      if (aState.failed && !bState.failed) {
        return -1;
      }
      if (!aState.failed && bState.failed) {
        return 1;
      }
      return bState.duration - aState.duration;
    });
  }
}

class RandomSequencer extends BaseSequencer {
  async sort(files) {
    const { sequence } = this.ctx.config;
    return shuffle(files, sequence.seed);
  }
}

export { BaseSequencer as B, RandomSequencer as R, Typechecker as T, TypeCheckError as a, getOutputFile as g, wrapSerializableConfig as w };
