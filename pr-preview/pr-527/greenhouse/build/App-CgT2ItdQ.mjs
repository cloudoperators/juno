import { _ as ui, w as ci, a as di, L as mi, I as He, y as Nt, f as pi, e as $r, c as hi, v as fi, j as f, u as gi, F as on, p as Me, q as bi, B as Oe, z as an, E as ln, i as qe, r as yi, G as ki, H as Nn, M as wi, m as zt, D as se, g as ee, h as ne, o as Ur, P as Vr, n as Hr, J as xi, O as vi, Q as _n, R as Bn, U as $n, s as Ci, C as Si, x as Ei, d as Pi, A as Di, S as Ii } from "./Shell-DTMmoMZV.mjs";
import { r as U, R as re, d as Un, g as zi } from "./index-Bjb47Pyo.mjs";
import { C as Ne, A as ji } from "./Container.component-B8M3UgGG-DiQmRU9u.mjs";
import { T as Xe, D as qr } from "./TextInput.component-BBTA8JYe-Ct7toqui.mjs";
import { T as Ai } from "./Textarea.component-Bn-CfmYI-C-BGXNLB.mjs";
import { M as Ti, g as Fi, P as Li } from "./resourceStatus-DDhgp7nQ.mjs";
var Ri = `
  jn-inline-flex
  jn-items-center
`, Mi = `
  jn-w-4
  jn-h-4
  jn-opacity-0
  jn-z-50
`, Oi = `
  jn-relative
  jn-w-4
  jn-h-4
  jn-rounded-sm
  jn-bg-theme-checkbox
  jn-cursor-pointer
  focus:jn-outline-none
  focus:jn-ring-2
  focus:jn-ring-theme-focus
`, Ni = `
  jn-ring-2
  jn-ring-theme-focus
`, _i = `
  jn-absolute
  jn-top-0
  jn-left-0
  jn-text-theme-checkbox-checked
  jn-fill-current
`, Bi = `
  jn-absolute
  jn-w-2
  jn-h-0.5
  jn-top-1.5
  jn-left-[.2rem]
  jn-inline-block
  jn-bg-theme-focus
`, $i = `
  jn-pointer-events-none
  jn-opacity-50
  jn-cursor-not-allowed
`, Ui = `
  jn-border
  jn-border-transparent
`, Vi = `
  jn-border
  jn-border-theme-error
`, Hi = `
  jn-border
  jn-border-theme-success
`, qi = `
  jn-leading-0
  jn-ml-2
`, Vn = `
  jn-ml-1
`, _t = `
  jn-mt-0
  jn-ml-6
`, Wi = function(e) {
  var t = e.checked, n = t !== void 0 && t, r = e.className, o = r === void 0 ? "" : r, a = e.disabled, i = a !== void 0 && a, l = e.errortext, s = l === void 0 ? "" : l, u = e.helptext, d = u === void 0 ? "" : u, c = e.id, p = c === void 0 ? "" : c, m = e.indeterminate, h = m !== void 0 && m, y = e.invalid, v = y !== void 0 && y, k = e.label, E = e.name, x = E === void 0 ? "" : E, P = e.onChange, j = e.onClick, C = e.required, R = e.successtext, B = R === void 0 ? "" : R, $ = e.valid, w = $ !== void 0 && $, z = e.value, A = ui(e, ["checked", "className", "disabled", "errortext", "helptext", "id", "indeterminate", "invalid", "label", "name", "onChange", "onClick", "required", "successtext", "valid", "value"]), N = function(ze) {
    return typeof ze != "string" || ze.trim().length !== 0;
  }, H = U.useContext(ci), L = H || {}, K = L.selectedOptions, Z = L.name, te = L.disabled, ae = L.handleCheckboxChange, g = L.updateSelectedValue, oe = U.useState(function() {
    return H ? !!(K && K.includes(z)) : !!n;
  }()), le = oe[0], b = oe[1], T = U.useState(!1), J = T[0], G = T[1], fe = U.useState(!1), ce = fe[0], ge = fe[1], we = U.useState(!1), xe = we[0], ue = we[1], Le = U.useState(!1), Je = Le[0], bt = Le[1];
  U.useEffect(function() {
    n && H && g && g(z);
  }, []), U.useEffect(function() {
    H || b(n);
  }, [n]);
  var nt = U.useMemo(function() {
    return v || !!(s && N(s));
  }, [v, s]), rt = U.useMemo(function() {
    return w || !!(B && N(B));
  }, [w, B]);
  U.useEffect(function() {
    G(h);
  }, [h]), U.useEffect(function() {
    ue(nt);
  }, [nt]), U.useEffect(function() {
    bt(rt);
  }, [rt]);
  var ot = function() {
    return H ? !!(K && K.includes(z)) : le;
  }, it = p || function() {
    return "juno-checkbox-" + U.useId();
  }();
  return re.createElement("div", { className: "jn-checkbox-outer" }, re.createElement("div", { className: "jn-checkbox-wrapper ".concat(Ri) }, re.createElement("div", di({ className: `
            juno-checkbox 
            `.concat(Oi, ` 
            `).concat(ce ? Ni : "", ` 
            `).concat(te || i ? $i : "", ` 
            `).concat(xe ? Vi : "", ` 
            `).concat(Je ? Hi : "", ` 
            `).concat(xe || Je ? "" : Ui, `
            `).concat(o, `
          `) }, A), ot() ? re.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "".concat(_i), width: "16", height: "16", viewBox: "0 0 16 16" }, re.createElement("polygon", { points: "5.75 11.15 2.6 8 1.55 9.05 5.75 13.25 14.75 4.25 13.7 3.2" })) : "", re.createElement("input", { checked: ot(), className: `
              `.concat(Mi, ` 
              `).concat(xe ? "juno-checkbox-invalid" : "", ` 
              `).concat(Je ? "juno-checkbox-valid" : "", ` 
              `).concat(te || i ? "jn-cursor-not-allowed" : "", `
            `), disabled: te || i, id: it, name: Z || x, onBlur: function() {
    ge(!1);
  }, onChange: function(ze) {
    b(!le), ae && typeof ae == "function" && ae(z), P && P(ze);
  }, onClick: function(ze) {
    j && j(ze);
  }, onFocus: function() {
    ge(!0);
  }, type: "checkbox", value: z }), J && !ot() ? re.createElement("div", { className: "".concat(Bi) }) : ""), k && N(k) ? re.createElement(re.Fragment, null, re.createElement(mi, { text: k, htmlFor: it, disabled: te || i, required: C !== void 0 && C, className: "".concat(qi) }), xe ? re.createElement(He, { icon: "dangerous", color: "jn-text-theme-error", size: "1.125rem", className: `
                  `.concat(Vn, `
                  `).concat(te || i ? "jn-opacity-50" : "", `
                `) }) : "", Je ? re.createElement(He, { icon: "checkCircle", color: "jn-text-theme-success", size: "1.125rem", className: `
                  `.concat(Vn, `
                  `).concat(i ? "jn-opacity-50" : "", `
                `) }) : "") : ""), s && N(s) ? re.createElement(Nt, { text: s, variant: "error", className: "".concat(_t) }) : "", B && N(B) ? re.createElement(Nt, { text: B, variant: "success", className: "".concat(_t) }) : "", d && N(d) ? re.createElement(Nt, { text: d, className: "".concat(_t) }) : "");
};
const Gi = `.markdown-body{color-scheme:dark;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;margin:0;color:#f0f6fc;background-color:#0d1117;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Noto Sans,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";font-size:16px;line-height:1.5;word-wrap:break-word;scroll-behavior:auto!important}.markdown-body .octicon{display:inline-block;fill:currentColor;vertical-align:text-bottom}.markdown-body h1:hover .anchor .octicon-link:before,.markdown-body h2:hover .anchor .octicon-link:before,.markdown-body h3:hover .anchor .octicon-link:before,.markdown-body h4:hover .anchor .octicon-link:before,.markdown-body h5:hover .anchor .octicon-link:before,.markdown-body h6:hover .anchor .octicon-link:before{width:16px;height:16px;content:" ";display:inline-block;background-color:currentColor;-webkit-mask-image:url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>");mask-image:url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>")}.markdown-body details,.markdown-body figcaption,.markdown-body figure{display:block}.markdown-body summary{display:list-item}.markdown-body [hidden]{display:none!important}.markdown-body a{background-color:transparent;color:#4493f8;text-decoration:none}.markdown-body abbr[title]{border-bottom:none;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}.markdown-body b,.markdown-body strong{font-weight:600}.markdown-body dfn{font-style:italic}.markdown-body h1{margin:.67em 0;font-weight:600;padding-bottom:.3em;font-size:2em;border-bottom:1px solid #3d444db3}.markdown-body mark{background-color:#bb800926;color:#f0f6fc}.markdown-body small{font-size:90%}.markdown-body sub,.markdown-body sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}.markdown-body sub{bottom:-.25em}.markdown-body sup{top:-.5em}.markdown-body img{border-style:none;max-width:100%;box-sizing:content-box}.markdown-body code,.markdown-body kbd,.markdown-body pre,.markdown-body samp{font-family:monospace;font-size:1em}.markdown-body figure{margin:1em 2.5rem}.markdown-body hr{box-sizing:content-box;overflow:hidden;background:transparent;border-bottom:1px solid #3d444db3;height:.25em;padding:0;margin:1.5rem 0;background-color:#3d444d;border:0}.markdown-body input{font:inherit;margin:0;overflow:visible;font-family:inherit;font-size:inherit;line-height:inherit}.markdown-body [type=button],.markdown-body [type=reset],.markdown-body [type=submit]{-webkit-appearance:button;-moz-appearance:button;appearance:button}.markdown-body [type=checkbox],.markdown-body [type=radio]{box-sizing:border-box;padding:0}.markdown-body [type=number]::-webkit-inner-spin-button,.markdown-body [type=number]::-webkit-outer-spin-button{height:auto}.markdown-body [type=search]::-webkit-search-cancel-button,.markdown-body [type=search]::-webkit-search-decoration{-webkit-appearance:none;-moz-appearance:none;appearance:none}.markdown-body ::-webkit-input-placeholder{color:inherit;opacity:.54}.markdown-body ::-webkit-file-upload-button{-webkit-appearance:button;-moz-appearance:button;appearance:button;font:inherit}.markdown-body a:hover{text-decoration:underline}.markdown-body ::-moz-placeholder{color:#9198a1;opacity:1}.markdown-body ::placeholder{color:#9198a1;opacity:1}.markdown-body hr:before{display:table;content:""}.markdown-body hr:after{display:table;clear:both;content:""}.markdown-body table{border-spacing:0;border-collapse:collapse;display:block;width:-moz-max-content;width:max-content;max-width:100%;overflow:auto}.markdown-body td,.markdown-body th{padding:0}.markdown-body details summary{cursor:pointer}.markdown-body a:focus,.markdown-body [role=button]:focus,.markdown-body input[type=radio]:focus,.markdown-body input[type=checkbox]:focus{outline:2px solid #1f6feb;outline-offset:-2px;box-shadow:none}.markdown-body a:focus:not(:focus-visible),.markdown-body [role=button]:focus:not(:focus-visible),.markdown-body input[type=radio]:focus:not(:focus-visible),.markdown-body input[type=checkbox]:focus:not(:focus-visible){outline:solid 1px transparent}.markdown-body a:focus-visible,.markdown-body [role=button]:focus-visible,.markdown-body input[type=radio]:focus-visible,.markdown-body input[type=checkbox]:focus-visible{outline:2px solid #1f6feb;outline-offset:-2px;box-shadow:none}.markdown-body a:not([class]):focus,.markdown-body a:not([class]):focus-visible,.markdown-body input[type=radio]:focus,.markdown-body input[type=radio]:focus-visible,.markdown-body input[type=checkbox]:focus,.markdown-body input[type=checkbox]:focus-visible{outline-offset:0}.markdown-body kbd{display:inline-block;padding:.25rem;font:11px ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;line-height:10px;color:#f0f6fc;vertical-align:middle;background-color:#151b23;border:solid 1px #3d444db3;border-bottom-color:#3d444db3;border-radius:6px;box-shadow:inset 0 -1px #3d444db3}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{margin-top:1.5rem;margin-bottom:1rem;font-weight:600;line-height:1.25}.markdown-body h2{font-weight:600;padding-bottom:.3em;font-size:1.5em;border-bottom:1px solid #3d444db3}.markdown-body h3{font-weight:600;font-size:1.25em}.markdown-body h4{font-weight:600;font-size:1em}.markdown-body h5{font-weight:600;font-size:.875em}.markdown-body h6{font-weight:600;font-size:.85em;color:#9198a1}.markdown-body p{margin-top:0;margin-bottom:10px}.markdown-body blockquote{margin:0;padding:0 1em;color:#9198a1;border-left:.25em solid #3d444d}.markdown-body ul,.markdown-body ol{margin-top:0;margin-bottom:0;padding-left:2em}.markdown-body ol ol,.markdown-body ul ol{list-style-type:lower-roman}.markdown-body ul ul ol,.markdown-body ul ol ol,.markdown-body ol ul ol,.markdown-body ol ol ol{list-style-type:lower-alpha}.markdown-body dd{margin-left:0}.markdown-body tt,.markdown-body code,.markdown-body samp{font-family:ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;font-size:12px}.markdown-body pre{margin-top:0;margin-bottom:0;font-family:ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;font-size:12px;word-wrap:normal}.markdown-body .octicon{display:inline-block;overflow:visible!important;vertical-align:text-bottom;fill:currentColor}.markdown-body input::-webkit-outer-spin-button,.markdown-body input::-webkit-inner-spin-button{margin:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.markdown-body .mr-2{margin-right:.5rem!important}.markdown-body:before{display:table;content:""}.markdown-body:after{display:table;clear:both;content:""}.markdown-body>*:first-child{margin-top:0!important}.markdown-body>*:last-child{margin-bottom:0!important}.markdown-body a:not([href]){color:inherit;text-decoration:none}.markdown-body .absent{color:#f85149}.markdown-body .anchor{float:left;padding-right:.25rem;margin-left:-20px;line-height:1}.markdown-body .anchor:focus{outline:none}.markdown-body p,.markdown-body blockquote,.markdown-body ul,.markdown-body ol,.markdown-body dl,.markdown-body table,.markdown-body pre,.markdown-body details{margin-top:0;margin-bottom:1rem}.markdown-body blockquote>:first-child{margin-top:0}.markdown-body blockquote>:last-child{margin-bottom:0}.markdown-body h1 .octicon-link,.markdown-body h2 .octicon-link,.markdown-body h3 .octicon-link,.markdown-body h4 .octicon-link,.markdown-body h5 .octicon-link,.markdown-body h6 .octicon-link{color:#f0f6fc;vertical-align:middle;visibility:hidden}.markdown-body h1:hover .anchor,.markdown-body h2:hover .anchor,.markdown-body h3:hover .anchor,.markdown-body h4:hover .anchor,.markdown-body h5:hover .anchor,.markdown-body h6:hover .anchor{text-decoration:none}.markdown-body h1:hover .anchor .octicon-link,.markdown-body h2:hover .anchor .octicon-link,.markdown-body h3:hover .anchor .octicon-link,.markdown-body h4:hover .anchor .octicon-link,.markdown-body h5:hover .anchor .octicon-link,.markdown-body h6:hover .anchor .octicon-link{visibility:visible}.markdown-body h1 tt,.markdown-body h1 code,.markdown-body h2 tt,.markdown-body h2 code,.markdown-body h3 tt,.markdown-body h3 code,.markdown-body h4 tt,.markdown-body h4 code,.markdown-body h5 tt,.markdown-body h5 code,.markdown-body h6 tt,.markdown-body h6 code{padding:0 .2em;font-size:inherit}.markdown-body summary h1,.markdown-body summary h2,.markdown-body summary h3,.markdown-body summary h4,.markdown-body summary h5,.markdown-body summary h6{display:inline-block}.markdown-body summary h1 .anchor,.markdown-body summary h2 .anchor,.markdown-body summary h3 .anchor,.markdown-body summary h4 .anchor,.markdown-body summary h5 .anchor,.markdown-body summary h6 .anchor{margin-left:-40px}.markdown-body summary h1,.markdown-body summary h2{padding-bottom:0;border-bottom:0}.markdown-body ul.no-list,.markdown-body ol.no-list{padding:0;list-style-type:none}.markdown-body ol[type="a s"]{list-style-type:lower-alpha}.markdown-body ol[type="A s"]{list-style-type:upper-alpha}.markdown-body ol[type="i s"]{list-style-type:lower-roman}.markdown-body ol[type="I s"]{list-style-type:upper-roman}.markdown-body ol[type="1"]{list-style-type:decimal}.markdown-body div>ol:not([type]){list-style-type:decimal}.markdown-body ul ul,.markdown-body ul ol,.markdown-body ol ol,.markdown-body ol ul{margin-top:0;margin-bottom:0}.markdown-body li>p{margin-top:1rem}.markdown-body li+li{margin-top:.25em}.markdown-body dl{padding:0}.markdown-body dl dt{padding:0;margin-top:1rem;font-size:1em;font-style:italic;font-weight:600}.markdown-body dl dd{padding:0 1rem;margin-bottom:1rem}.markdown-body table th{font-weight:600}.markdown-body table th,.markdown-body table td{padding:6px 13px;border:1px solid #3d444d}.markdown-body table td>:last-child{margin-bottom:0}.markdown-body table tr{background-color:#0d1117;border-top:1px solid #3d444db3}.markdown-body table tr:nth-child(2n){background-color:#151b23}.markdown-body table img{background-color:transparent}.markdown-body img[align=right]{padding-left:20px}.markdown-body img[align=left]{padding-right:20px}.markdown-body .emoji{max-width:none;vertical-align:text-top;background-color:transparent}.markdown-body span.frame{display:block;overflow:hidden}.markdown-body span.frame>span{display:block;float:left;width:auto;padding:7px;margin:13px 0 0;overflow:hidden;border:1px solid #3d444d}.markdown-body span.frame span img{display:block;float:left}.markdown-body span.frame span span{display:block;padding:5px 0 0;clear:both;color:#f0f6fc}.markdown-body span.align-center{display:block;overflow:hidden;clear:both}.markdown-body span.align-center>span{display:block;margin:13px auto 0;overflow:hidden;text-align:center}.markdown-body span.align-center span img{margin:0 auto;text-align:center}.markdown-body span.align-right{display:block;overflow:hidden;clear:both}.markdown-body span.align-right>span{display:block;margin:13px 0 0;overflow:hidden;text-align:right}.markdown-body span.align-right span img{margin:0;text-align:right}.markdown-body span.float-left{display:block;float:left;margin-right:13px;overflow:hidden}.markdown-body span.float-left span{margin:13px 0 0}.markdown-body span.float-right{display:block;float:right;margin-left:13px;overflow:hidden}.markdown-body span.float-right>span{display:block;margin:13px auto 0;overflow:hidden;text-align:right}.markdown-body code,.markdown-body tt{padding:.2em .4em;margin:0;font-size:85%;white-space:break-spaces;background-color:#656c7633;border-radius:6px}.markdown-body code br,.markdown-body tt br{display:none}.markdown-body del code{text-decoration:inherit}.markdown-body samp{font-size:85%}.markdown-body pre code{font-size:100%}.markdown-body pre>code{padding:0;margin:0;word-break:normal;white-space:pre;background:transparent;border:0}.markdown-body .highlight{margin-bottom:1rem}.markdown-body .highlight pre{margin-bottom:0;word-break:normal}.markdown-body .highlight pre,.markdown-body pre{padding:1rem;overflow:auto;font-size:85%;line-height:1.45;color:#f0f6fc;background-color:#151b23;border-radius:6px}.markdown-body pre code,.markdown-body pre tt{display:inline;max-width:auto;padding:0;margin:0;overflow:visible;line-height:inherit;word-wrap:normal;background-color:transparent;border:0}.markdown-body .csv-data td,.markdown-body .csv-data th{padding:5px;overflow:hidden;font-size:12px;line-height:1;text-align:left;white-space:nowrap}.markdown-body .csv-data .blob-num{padding:10px .5rem 9px;text-align:right;background:#0d1117;border:0}.markdown-body .csv-data tr{border-top:0}.markdown-body .csv-data th{font-weight:600;background:#151b23;border-top:0}.markdown-body [data-footnote-ref]:before{content:"["}.markdown-body [data-footnote-ref]:after{content:"]"}.markdown-body .footnotes{font-size:12px;color:#9198a1;border-top:1px solid #3d444d}.markdown-body .footnotes ol{padding-left:1rem}.markdown-body .footnotes ol ul{display:inline-block;padding-left:1rem;margin-top:1rem}.markdown-body .footnotes li{position:relative}.markdown-body .footnotes li:target:before{position:absolute;top:-.5rem;right:-.5rem;bottom:-.5rem;left:-1.5rem;pointer-events:none;content:"";border:2px solid #1f6feb;border-radius:6px}.markdown-body .footnotes li:target{color:#f0f6fc}.markdown-body .footnotes .data-footnote-backref g-emoji{font-family:monospace}.markdown-body .pl-c{color:#9198a1}.markdown-body .pl-c1,.markdown-body .pl-s .pl-v{color:#79c0ff}.markdown-body .pl-e,.markdown-body .pl-en{color:#d2a8ff}.markdown-body .pl-smi,.markdown-body .pl-s .pl-s1{color:#f0f6fc}.markdown-body .pl-ent{color:#7ee787}.markdown-body .pl-k{color:#ff7b72}.markdown-body .pl-s,.markdown-body .pl-pds,.markdown-body .pl-s .pl-pse .pl-s1,.markdown-body .pl-sr,.markdown-body .pl-sr .pl-cce,.markdown-body .pl-sr .pl-sre,.markdown-body .pl-sr .pl-sra{color:#a5d6ff}.markdown-body .pl-v,.markdown-body .pl-smw{color:#ffa657}.markdown-body .pl-bu{color:#f85149}.markdown-body .pl-ii{color:#f0f6fc;background-color:#8e1519}.markdown-body .pl-c2{color:#f0f6fc;background-color:#b62324}.markdown-body .pl-sr .pl-cce{font-weight:700;color:#7ee787}.markdown-body .pl-ml{color:#f2cc60}.markdown-body .pl-mh,.markdown-body .pl-mh .pl-en,.markdown-body .pl-ms{font-weight:700;color:#1f6feb}.markdown-body .pl-mi{font-style:italic;color:#f0f6fc}.markdown-body .pl-mb{font-weight:700;color:#f0f6fc}.markdown-body .pl-md{color:#ffdcd7;background-color:#67060c}.markdown-body .pl-mi1{color:#aff5b4;background-color:#033a16}.markdown-body .pl-mc{color:#ffdfb6;background-color:#5a1e02}.markdown-body .pl-mi2{color:#f0f6fc;background-color:#1158c7}.markdown-body .pl-mdr{font-weight:700;color:#d2a8ff}.markdown-body .pl-ba{color:#9198a1}.markdown-body .pl-sg{color:#3d444d}.markdown-body .pl-corl{text-decoration:underline;color:#a5d6ff}.markdown-body [role=button]:focus:not(:focus-visible),.markdown-body [role=tabpanel][tabindex="0"]:focus:not(:focus-visible),.markdown-body button:focus:not(:focus-visible),.markdown-body summary:focus:not(:focus-visible),.markdown-body a:focus:not(:focus-visible){outline:none;box-shadow:none}.markdown-body [tabindex="0"]:focus:not(:focus-visible),.markdown-body details-dialog:focus:not(:focus-visible){outline:none}.markdown-body g-emoji{display:inline-block;min-width:1ch;font-family:"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol;font-size:1em;font-style:normal!important;font-weight:400;line-height:1;vertical-align:-.075em}.markdown-body g-emoji img{width:1em;height:1em}.markdown-body .task-list-item{list-style-type:none}.markdown-body .task-list-item label{font-weight:400}.markdown-body .task-list-item.enabled label{cursor:pointer}.markdown-body .task-list-item+.task-list-item{margin-top:.25rem}.markdown-body .task-list-item .handle{display:none}.markdown-body .task-list-item-checkbox{margin:0 .2em .25em -1.4em;vertical-align:middle}.markdown-body ul:dir(rtl) .task-list-item-checkbox{margin:0 -1.6em .25em .2em}.markdown-body ol:dir(rtl) .task-list-item-checkbox{margin:0 -1.6em .25em .2em}.markdown-body .contains-task-list:hover .task-list-item-convert-container,.markdown-body .contains-task-list:focus-within .task-list-item-convert-container{display:block;width:auto;height:24px;overflow:visible;clip:auto}.markdown-body ::-webkit-calendar-picker-indicator{filter:invert(50%)}.markdown-body .markdown-alert{padding:.5rem 1rem;margin-bottom:1rem;color:inherit;border-left:.25em solid #3d444d}.markdown-body .markdown-alert>:first-child{margin-top:0}.markdown-body .markdown-alert>:last-child{margin-bottom:0}.markdown-body .markdown-alert .markdown-alert-title{display:flex;font-weight:500;align-items:center;line-height:1}.markdown-body .markdown-alert.markdown-alert-note{border-left-color:#1f6feb}.markdown-body .markdown-alert.markdown-alert-note .markdown-alert-title{color:#4493f8}.markdown-body .markdown-alert.markdown-alert-important{border-left-color:#8957e5}.markdown-body .markdown-alert.markdown-alert-important .markdown-alert-title{color:#ab7df8}.markdown-body .markdown-alert.markdown-alert-warning{border-left-color:#9e6a03}.markdown-body .markdown-alert.markdown-alert-warning .markdown-alert-title{color:#d29922}.markdown-body .markdown-alert.markdown-alert-tip{border-left-color:#238636}.markdown-body .markdown-alert.markdown-alert-tip .markdown-alert-title{color:#3fb950}.markdown-body .markdown-alert.markdown-alert-caution{border-left-color:#da3633}.markdown-body .markdown-alert.markdown-alert-caution .markdown-alert-title{color:#f85149}.markdown-body>*:first-child>.heading-element:first-child{margin-top:0!important}`, Ji = `.markdown-body{color-scheme:light;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;margin:0;color:#1f2328;background-color:#fff;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Noto Sans,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";font-size:16px;line-height:1.5;word-wrap:break-word;scroll-behavior:auto!important}.markdown-body .octicon{display:inline-block;fill:currentColor;vertical-align:text-bottom}.markdown-body h1:hover .anchor .octicon-link:before,.markdown-body h2:hover .anchor .octicon-link:before,.markdown-body h3:hover .anchor .octicon-link:before,.markdown-body h4:hover .anchor .octicon-link:before,.markdown-body h5:hover .anchor .octicon-link:before,.markdown-body h6:hover .anchor .octicon-link:before{width:16px;height:16px;content:" ";display:inline-block;background-color:currentColor;-webkit-mask-image:url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>");mask-image:url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>")}.markdown-body details,.markdown-body figcaption,.markdown-body figure{display:block}.markdown-body summary{display:list-item}.markdown-body [hidden]{display:none!important}.markdown-body a{background-color:transparent;color:#0969da;text-decoration:none}.markdown-body abbr[title]{border-bottom:none;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}.markdown-body b,.markdown-body strong{font-weight:600}.markdown-body dfn{font-style:italic}.markdown-body h1{margin:.67em 0;font-weight:600;padding-bottom:.3em;font-size:2em;border-bottom:1px solid #d1d9e0b3}.markdown-body mark{background-color:#fff8c5;color:#1f2328}.markdown-body small{font-size:90%}.markdown-body sub,.markdown-body sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}.markdown-body sub{bottom:-.25em}.markdown-body sup{top:-.5em}.markdown-body img{border-style:none;max-width:100%;box-sizing:content-box}.markdown-body code,.markdown-body kbd,.markdown-body pre,.markdown-body samp{font-family:monospace;font-size:1em}.markdown-body figure{margin:1em 2.5rem}.markdown-body hr{box-sizing:content-box;overflow:hidden;background:transparent;border-bottom:1px solid #d1d9e0b3;height:.25em;padding:0;margin:1.5rem 0;background-color:#d1d9e0;border:0}.markdown-body input{font:inherit;margin:0;overflow:visible;font-family:inherit;font-size:inherit;line-height:inherit}.markdown-body [type=button],.markdown-body [type=reset],.markdown-body [type=submit]{-webkit-appearance:button;-moz-appearance:button;appearance:button}.markdown-body [type=checkbox],.markdown-body [type=radio]{box-sizing:border-box;padding:0}.markdown-body [type=number]::-webkit-inner-spin-button,.markdown-body [type=number]::-webkit-outer-spin-button{height:auto}.markdown-body [type=search]::-webkit-search-cancel-button,.markdown-body [type=search]::-webkit-search-decoration{-webkit-appearance:none;-moz-appearance:none;appearance:none}.markdown-body ::-webkit-input-placeholder{color:inherit;opacity:.54}.markdown-body ::-webkit-file-upload-button{-webkit-appearance:button;-moz-appearance:button;appearance:button;font:inherit}.markdown-body a:hover{text-decoration:underline}.markdown-body ::-moz-placeholder{color:#59636e;opacity:1}.markdown-body ::placeholder{color:#59636e;opacity:1}.markdown-body hr:before{display:table;content:""}.markdown-body hr:after{display:table;clear:both;content:""}.markdown-body table{border-spacing:0;border-collapse:collapse;display:block;width:-moz-max-content;width:max-content;max-width:100%;overflow:auto}.markdown-body td,.markdown-body th{padding:0}.markdown-body details summary{cursor:pointer}.markdown-body a:focus,.markdown-body [role=button]:focus,.markdown-body input[type=radio]:focus,.markdown-body input[type=checkbox]:focus{outline:2px solid #0969da;outline-offset:-2px;box-shadow:none}.markdown-body a:focus:not(:focus-visible),.markdown-body [role=button]:focus:not(:focus-visible),.markdown-body input[type=radio]:focus:not(:focus-visible),.markdown-body input[type=checkbox]:focus:not(:focus-visible){outline:solid 1px transparent}.markdown-body a:focus-visible,.markdown-body [role=button]:focus-visible,.markdown-body input[type=radio]:focus-visible,.markdown-body input[type=checkbox]:focus-visible{outline:2px solid #0969da;outline-offset:-2px;box-shadow:none}.markdown-body a:not([class]):focus,.markdown-body a:not([class]):focus-visible,.markdown-body input[type=radio]:focus,.markdown-body input[type=radio]:focus-visible,.markdown-body input[type=checkbox]:focus,.markdown-body input[type=checkbox]:focus-visible{outline-offset:0}.markdown-body kbd{display:inline-block;padding:.25rem;font:11px ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;line-height:10px;color:#1f2328;vertical-align:middle;background-color:#f6f8fa;border:solid 1px #d1d9e0b3;border-bottom-color:#d1d9e0b3;border-radius:6px;box-shadow:inset 0 -1px #d1d9e0b3}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{margin-top:1.5rem;margin-bottom:1rem;font-weight:600;line-height:1.25}.markdown-body h2{font-weight:600;padding-bottom:.3em;font-size:1.5em;border-bottom:1px solid #d1d9e0b3}.markdown-body h3{font-weight:600;font-size:1.25em}.markdown-body h4{font-weight:600;font-size:1em}.markdown-body h5{font-weight:600;font-size:.875em}.markdown-body h6{font-weight:600;font-size:.85em;color:#59636e}.markdown-body p{margin-top:0;margin-bottom:10px}.markdown-body blockquote{margin:0;padding:0 1em;color:#59636e;border-left:.25em solid #d1d9e0}.markdown-body ul,.markdown-body ol{margin-top:0;margin-bottom:0;padding-left:2em}.markdown-body ol ol,.markdown-body ul ol{list-style-type:lower-roman}.markdown-body ul ul ol,.markdown-body ul ol ol,.markdown-body ol ul ol,.markdown-body ol ol ol{list-style-type:lower-alpha}.markdown-body dd{margin-left:0}.markdown-body tt,.markdown-body code,.markdown-body samp{font-family:ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;font-size:12px}.markdown-body pre{margin-top:0;margin-bottom:0;font-family:ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;font-size:12px;word-wrap:normal}.markdown-body .octicon{display:inline-block;overflow:visible!important;vertical-align:text-bottom;fill:currentColor}.markdown-body input::-webkit-outer-spin-button,.markdown-body input::-webkit-inner-spin-button{margin:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.markdown-body .mr-2{margin-right:.5rem!important}.markdown-body:before{display:table;content:""}.markdown-body:after{display:table;clear:both;content:""}.markdown-body>*:first-child{margin-top:0!important}.markdown-body>*:last-child{margin-bottom:0!important}.markdown-body a:not([href]){color:inherit;text-decoration:none}.markdown-body .absent{color:#d1242f}.markdown-body .anchor{float:left;padding-right:.25rem;margin-left:-20px;line-height:1}.markdown-body .anchor:focus{outline:none}.markdown-body p,.markdown-body blockquote,.markdown-body ul,.markdown-body ol,.markdown-body dl,.markdown-body table,.markdown-body pre,.markdown-body details{margin-top:0;margin-bottom:1rem}.markdown-body blockquote>:first-child{margin-top:0}.markdown-body blockquote>:last-child{margin-bottom:0}.markdown-body h1 .octicon-link,.markdown-body h2 .octicon-link,.markdown-body h3 .octicon-link,.markdown-body h4 .octicon-link,.markdown-body h5 .octicon-link,.markdown-body h6 .octicon-link{color:#1f2328;vertical-align:middle;visibility:hidden}.markdown-body h1:hover .anchor,.markdown-body h2:hover .anchor,.markdown-body h3:hover .anchor,.markdown-body h4:hover .anchor,.markdown-body h5:hover .anchor,.markdown-body h6:hover .anchor{text-decoration:none}.markdown-body h1:hover .anchor .octicon-link,.markdown-body h2:hover .anchor .octicon-link,.markdown-body h3:hover .anchor .octicon-link,.markdown-body h4:hover .anchor .octicon-link,.markdown-body h5:hover .anchor .octicon-link,.markdown-body h6:hover .anchor .octicon-link{visibility:visible}.markdown-body h1 tt,.markdown-body h1 code,.markdown-body h2 tt,.markdown-body h2 code,.markdown-body h3 tt,.markdown-body h3 code,.markdown-body h4 tt,.markdown-body h4 code,.markdown-body h5 tt,.markdown-body h5 code,.markdown-body h6 tt,.markdown-body h6 code{padding:0 .2em;font-size:inherit}.markdown-body summary h1,.markdown-body summary h2,.markdown-body summary h3,.markdown-body summary h4,.markdown-body summary h5,.markdown-body summary h6{display:inline-block}.markdown-body summary h1 .anchor,.markdown-body summary h2 .anchor,.markdown-body summary h3 .anchor,.markdown-body summary h4 .anchor,.markdown-body summary h5 .anchor,.markdown-body summary h6 .anchor{margin-left:-40px}.markdown-body summary h1,.markdown-body summary h2{padding-bottom:0;border-bottom:0}.markdown-body ul.no-list,.markdown-body ol.no-list{padding:0;list-style-type:none}.markdown-body ol[type="a s"]{list-style-type:lower-alpha}.markdown-body ol[type="A s"]{list-style-type:upper-alpha}.markdown-body ol[type="i s"]{list-style-type:lower-roman}.markdown-body ol[type="I s"]{list-style-type:upper-roman}.markdown-body ol[type="1"]{list-style-type:decimal}.markdown-body div>ol:not([type]){list-style-type:decimal}.markdown-body ul ul,.markdown-body ul ol,.markdown-body ol ol,.markdown-body ol ul{margin-top:0;margin-bottom:0}.markdown-body li>p{margin-top:1rem}.markdown-body li+li{margin-top:.25em}.markdown-body dl{padding:0}.markdown-body dl dt{padding:0;margin-top:1rem;font-size:1em;font-style:italic;font-weight:600}.markdown-body dl dd{padding:0 1rem;margin-bottom:1rem}.markdown-body table th{font-weight:600}.markdown-body table th,.markdown-body table td{padding:6px 13px;border:1px solid #d1d9e0}.markdown-body table td>:last-child{margin-bottom:0}.markdown-body table tr{background-color:#fff;border-top:1px solid #d1d9e0b3}.markdown-body table tr:nth-child(2n){background-color:#f6f8fa}.markdown-body table img{background-color:transparent}.markdown-body img[align=right]{padding-left:20px}.markdown-body img[align=left]{padding-right:20px}.markdown-body .emoji{max-width:none;vertical-align:text-top;background-color:transparent}.markdown-body span.frame{display:block;overflow:hidden}.markdown-body span.frame>span{display:block;float:left;width:auto;padding:7px;margin:13px 0 0;overflow:hidden;border:1px solid #d1d9e0}.markdown-body span.frame span img{display:block;float:left}.markdown-body span.frame span span{display:block;padding:5px 0 0;clear:both;color:#1f2328}.markdown-body span.align-center{display:block;overflow:hidden;clear:both}.markdown-body span.align-center>span{display:block;margin:13px auto 0;overflow:hidden;text-align:center}.markdown-body span.align-center span img{margin:0 auto;text-align:center}.markdown-body span.align-right{display:block;overflow:hidden;clear:both}.markdown-body span.align-right>span{display:block;margin:13px 0 0;overflow:hidden;text-align:right}.markdown-body span.align-right span img{margin:0;text-align:right}.markdown-body span.float-left{display:block;float:left;margin-right:13px;overflow:hidden}.markdown-body span.float-left span{margin:13px 0 0}.markdown-body span.float-right{display:block;float:right;margin-left:13px;overflow:hidden}.markdown-body span.float-right>span{display:block;margin:13px auto 0;overflow:hidden;text-align:right}.markdown-body code,.markdown-body tt{padding:.2em .4em;margin:0;font-size:85%;white-space:break-spaces;background-color:#818b981f;border-radius:6px}.markdown-body code br,.markdown-body tt br{display:none}.markdown-body del code{text-decoration:inherit}.markdown-body samp{font-size:85%}.markdown-body pre code{font-size:100%}.markdown-body pre>code{padding:0;margin:0;word-break:normal;white-space:pre;background:transparent;border:0}.markdown-body .highlight{margin-bottom:1rem}.markdown-body .highlight pre{margin-bottom:0;word-break:normal}.markdown-body .highlight pre,.markdown-body pre{padding:1rem;overflow:auto;font-size:85%;line-height:1.45;color:#1f2328;background-color:#f6f8fa;border-radius:6px}.markdown-body pre code,.markdown-body pre tt{display:inline;max-width:auto;padding:0;margin:0;overflow:visible;line-height:inherit;word-wrap:normal;background-color:transparent;border:0}.markdown-body .csv-data td,.markdown-body .csv-data th{padding:5px;overflow:hidden;font-size:12px;line-height:1;text-align:left;white-space:nowrap}.markdown-body .csv-data .blob-num{padding:10px .5rem 9px;text-align:right;background:#fff;border:0}.markdown-body .csv-data tr{border-top:0}.markdown-body .csv-data th{font-weight:600;background:#f6f8fa;border-top:0}.markdown-body [data-footnote-ref]:before{content:"["}.markdown-body [data-footnote-ref]:after{content:"]"}.markdown-body .footnotes{font-size:12px;color:#59636e;border-top:1px solid #d1d9e0}.markdown-body .footnotes ol{padding-left:1rem}.markdown-body .footnotes ol ul{display:inline-block;padding-left:1rem;margin-top:1rem}.markdown-body .footnotes li{position:relative}.markdown-body .footnotes li:target:before{position:absolute;top:-.5rem;right:-.5rem;bottom:-.5rem;left:-1.5rem;pointer-events:none;content:"";border:2px solid #0969da;border-radius:6px}.markdown-body .footnotes li:target{color:#1f2328}.markdown-body .footnotes .data-footnote-backref g-emoji{font-family:monospace}.markdown-body .pl-c{color:#59636e}.markdown-body .pl-c1,.markdown-body .pl-s .pl-v{color:#0550ae}.markdown-body .pl-e,.markdown-body .pl-en{color:#6639ba}.markdown-body .pl-smi,.markdown-body .pl-s .pl-s1{color:#1f2328}.markdown-body .pl-ent{color:#0550ae}.markdown-body .pl-k{color:#cf222e}.markdown-body .pl-s,.markdown-body .pl-pds,.markdown-body .pl-s .pl-pse .pl-s1,.markdown-body .pl-sr,.markdown-body .pl-sr .pl-cce,.markdown-body .pl-sr .pl-sre,.markdown-body .pl-sr .pl-sra{color:#0a3069}.markdown-body .pl-v,.markdown-body .pl-smw{color:#953800}.markdown-body .pl-bu{color:#82071e}.markdown-body .pl-ii{color:#f6f8fa;background-color:#82071e}.markdown-body .pl-c2{color:#f6f8fa;background-color:#cf222e}.markdown-body .pl-sr .pl-cce{font-weight:700;color:#116329}.markdown-body .pl-ml{color:#3b2300}.markdown-body .pl-mh,.markdown-body .pl-mh .pl-en,.markdown-body .pl-ms{font-weight:700;color:#0550ae}.markdown-body .pl-mi{font-style:italic;color:#1f2328}.markdown-body .pl-mb{font-weight:700;color:#1f2328}.markdown-body .pl-md{color:#82071e;background-color:#ffebe9}.markdown-body .pl-mi1{color:#116329;background-color:#dafbe1}.markdown-body .pl-mc{color:#953800;background-color:#ffd8b5}.markdown-body .pl-mi2{color:#d1d9e0;background-color:#0550ae}.markdown-body .pl-mdr{font-weight:700;color:#8250df}.markdown-body .pl-ba{color:#59636e}.markdown-body .pl-sg{color:#818b98}.markdown-body .pl-corl{text-decoration:underline;color:#0a3069}.markdown-body [role=button]:focus:not(:focus-visible),.markdown-body [role=tabpanel][tabindex="0"]:focus:not(:focus-visible),.markdown-body button:focus:not(:focus-visible),.markdown-body summary:focus:not(:focus-visible),.markdown-body a:focus:not(:focus-visible){outline:none;box-shadow:none}.markdown-body [tabindex="0"]:focus:not(:focus-visible),.markdown-body details-dialog:focus:not(:focus-visible){outline:none}.markdown-body g-emoji{display:inline-block;min-width:1ch;font-family:"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol;font-size:1em;font-style:normal!important;font-weight:400;line-height:1;vertical-align:-.075em}.markdown-body g-emoji img{width:1em;height:1em}.markdown-body .task-list-item{list-style-type:none}.markdown-body .task-list-item label{font-weight:400}.markdown-body .task-list-item.enabled label{cursor:pointer}.markdown-body .task-list-item+.task-list-item{margin-top:.25rem}.markdown-body .task-list-item .handle{display:none}.markdown-body .task-list-item-checkbox{margin:0 .2em .25em -1.4em;vertical-align:middle}.markdown-body ul:dir(rtl) .task-list-item-checkbox{margin:0 -1.6em .25em .2em}.markdown-body ol:dir(rtl) .task-list-item-checkbox{margin:0 -1.6em .25em .2em}.markdown-body .contains-task-list:hover .task-list-item-convert-container,.markdown-body .contains-task-list:focus-within .task-list-item-convert-container{display:block;width:auto;height:24px;overflow:visible;clip:auto}.markdown-body ::-webkit-calendar-picker-indicator{filter:invert(50%)}.markdown-body .markdown-alert{padding:.5rem 1rem;margin-bottom:1rem;color:inherit;border-left:.25em solid #d1d9e0}.markdown-body .markdown-alert>:first-child{margin-top:0}.markdown-body .markdown-alert>:last-child{margin-bottom:0}.markdown-body .markdown-alert .markdown-alert-title{display:flex;font-weight:500;align-items:center;line-height:1}.markdown-body .markdown-alert.markdown-alert-note{border-left-color:#0969da}.markdown-body .markdown-alert.markdown-alert-note .markdown-alert-title{color:#0969da}.markdown-body .markdown-alert.markdown-alert-important{border-left-color:#8250df}.markdown-body .markdown-alert.markdown-alert-important .markdown-alert-title{color:#8250df}.markdown-body .markdown-alert.markdown-alert-warning{border-left-color:#9a6700}.markdown-body .markdown-alert.markdown-alert-warning .markdown-alert-title{color:#9a6700}.markdown-body .markdown-alert.markdown-alert-tip{border-left-color:#1a7f37}.markdown-body .markdown-alert.markdown-alert-tip .markdown-alert-title{color:#1a7f37}.markdown-body .markdown-alert.markdown-alert-caution{border-left-color:#cf222e}.markdown-body .markdown-alert.markdown-alert-caution .markdown-alert-title{color:#d1242f}.markdown-body>*:first-child>.heading-element:first-child{margin-top:0!important}`, Ki = `.markdown-body{--base-size-4: .25rem;--base-size-8: .5rem;--base-size-16: 1rem;--base-size-24: 1.5rem;--base-size-40: 2.5rem;--base-text-weight-normal: 400;--base-text-weight-medium: 500;--base-text-weight-semibold: 600;--fontStack-monospace: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;--fgColor-accent: Highlight}@media (prefers-color-scheme: dark){.markdown-body,[data-theme=dark]{color-scheme:dark;--focus-outlineColor: #1f6feb;--fgColor-default: #f0f6fc;--fgColor-muted: #9198a1;--fgColor-accent: #4493f8;--fgColor-success: #3fb950;--fgColor-attention: #d29922;--fgColor-danger: #f85149;--fgColor-done: #ab7df8;--bgColor-default: #0d1117;--bgColor-muted: #151b23;--bgColor-neutral-muted: #656c7633;--bgColor-attention-muted: #bb800926;--borderColor-default: #3d444d;--borderColor-muted: #3d444db3;--borderColor-neutral-muted: #3d444db3;--borderColor-accent-emphasis: #1f6feb;--borderColor-success-emphasis: #238636;--borderColor-attention-emphasis: #9e6a03;--borderColor-danger-emphasis: #da3633;--borderColor-done-emphasis: #8957e5;--color-prettylights-syntax-comment: #9198a1;--color-prettylights-syntax-constant: #79c0ff;--color-prettylights-syntax-constant-other-reference-link: #a5d6ff;--color-prettylights-syntax-entity: #d2a8ff;--color-prettylights-syntax-storage-modifier-import: #f0f6fc;--color-prettylights-syntax-entity-tag: #7ee787;--color-prettylights-syntax-keyword: #ff7b72;--color-prettylights-syntax-string: #a5d6ff;--color-prettylights-syntax-variable: #ffa657;--color-prettylights-syntax-brackethighlighter-unmatched: #f85149;--color-prettylights-syntax-brackethighlighter-angle: #9198a1;--color-prettylights-syntax-invalid-illegal-text: #f0f6fc;--color-prettylights-syntax-invalid-illegal-bg: #8e1519;--color-prettylights-syntax-carriage-return-text: #f0f6fc;--color-prettylights-syntax-carriage-return-bg: #b62324;--color-prettylights-syntax-string-regexp: #7ee787;--color-prettylights-syntax-markup-list: #f2cc60;--color-prettylights-syntax-markup-heading: #1f6feb;--color-prettylights-syntax-markup-italic: #f0f6fc;--color-prettylights-syntax-markup-bold: #f0f6fc;--color-prettylights-syntax-markup-deleted-text: #ffdcd7;--color-prettylights-syntax-markup-deleted-bg: #67060c;--color-prettylights-syntax-markup-inserted-text: #aff5b4;--color-prettylights-syntax-markup-inserted-bg: #033a16;--color-prettylights-syntax-markup-changed-text: #ffdfb6;--color-prettylights-syntax-markup-changed-bg: #5a1e02;--color-prettylights-syntax-markup-ignored-text: #f0f6fc;--color-prettylights-syntax-markup-ignored-bg: #1158c7;--color-prettylights-syntax-meta-diff-range: #d2a8ff;--color-prettylights-syntax-sublimelinter-gutter-mark: #3d444d}}@media (prefers-color-scheme: light){.markdown-body,[data-theme=light]{color-scheme:light;--focus-outlineColor: #0969da;--fgColor-default: #1f2328;--fgColor-muted: #59636e;--fgColor-accent: #0969da;--fgColor-success: #1a7f37;--fgColor-attention: #9a6700;--fgColor-danger: #d1242f;--fgColor-done: #8250df;--bgColor-default: #ffffff;--bgColor-muted: #f6f8fa;--bgColor-neutral-muted: #818b981f;--bgColor-attention-muted: #fff8c5;--borderColor-default: #d1d9e0;--borderColor-muted: #d1d9e0b3;--borderColor-neutral-muted: #d1d9e0b3;--borderColor-accent-emphasis: #0969da;--borderColor-success-emphasis: #1a7f37;--borderColor-attention-emphasis: #9a6700;--borderColor-danger-emphasis: #cf222e;--borderColor-done-emphasis: #8250df;--color-prettylights-syntax-comment: #59636e;--color-prettylights-syntax-constant: #0550ae;--color-prettylights-syntax-constant-other-reference-link: #0a3069;--color-prettylights-syntax-entity: #6639ba;--color-prettylights-syntax-storage-modifier-import: #1f2328;--color-prettylights-syntax-entity-tag: #0550ae;--color-prettylights-syntax-keyword: #cf222e;--color-prettylights-syntax-string: #0a3069;--color-prettylights-syntax-variable: #953800;--color-prettylights-syntax-brackethighlighter-unmatched: #82071e;--color-prettylights-syntax-brackethighlighter-angle: #59636e;--color-prettylights-syntax-invalid-illegal-text: #f6f8fa;--color-prettylights-syntax-invalid-illegal-bg: #82071e;--color-prettylights-syntax-carriage-return-text: #f6f8fa;--color-prettylights-syntax-carriage-return-bg: #cf222e;--color-prettylights-syntax-string-regexp: #116329;--color-prettylights-syntax-markup-list: #3b2300;--color-prettylights-syntax-markup-heading: #0550ae;--color-prettylights-syntax-markup-italic: #1f2328;--color-prettylights-syntax-markup-bold: #1f2328;--color-prettylights-syntax-markup-deleted-text: #82071e;--color-prettylights-syntax-markup-deleted-bg: #ffebe9;--color-prettylights-syntax-markup-inserted-text: #116329;--color-prettylights-syntax-markup-inserted-bg: #dafbe1;--color-prettylights-syntax-markup-changed-text: #953800;--color-prettylights-syntax-markup-changed-bg: #ffd8b5;--color-prettylights-syntax-markup-ignored-text: #d1d9e0;--color-prettylights-syntax-markup-ignored-bg: #0550ae;--color-prettylights-syntax-meta-diff-range: #8250df;--color-prettylights-syntax-sublimelinter-gutter-mark: #818b98}}.markdown-body{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;margin:0;color:var(--fgColor-default);background-color:var(--bgColor-default);font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Noto Sans,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";font-size:16px;line-height:1.5;word-wrap:break-word;scroll-behavior:auto!important}.markdown-body .octicon{display:inline-block;fill:currentColor;vertical-align:text-bottom}.markdown-body h1:hover .anchor .octicon-link:before,.markdown-body h2:hover .anchor .octicon-link:before,.markdown-body h3:hover .anchor .octicon-link:before,.markdown-body h4:hover .anchor .octicon-link:before,.markdown-body h5:hover .anchor .octicon-link:before,.markdown-body h6:hover .anchor .octicon-link:before{width:16px;height:16px;content:" ";display:inline-block;background-color:currentColor;-webkit-mask-image:url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>");mask-image:url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>")}.markdown-body details,.markdown-body figcaption,.markdown-body figure{display:block}.markdown-body summary{display:list-item}.markdown-body [hidden]{display:none!important}.markdown-body a{background-color:transparent;color:var(--fgColor-accent);text-decoration:none}.markdown-body abbr[title]{border-bottom:none;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}.markdown-body b,.markdown-body strong{font-weight:var(--base-text-weight-semibold, 600)}.markdown-body dfn{font-style:italic}.markdown-body h1{margin:.67em 0;font-weight:var(--base-text-weight-semibold, 600);padding-bottom:.3em;font-size:2em;border-bottom:1px solid var(--borderColor-muted)}.markdown-body mark{background-color:var(--bgColor-attention-muted);color:var(--fgColor-default)}.markdown-body small{font-size:90%}.markdown-body sub,.markdown-body sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}.markdown-body sub{bottom:-.25em}.markdown-body sup{top:-.5em}.markdown-body img{border-style:none;max-width:100%;box-sizing:content-box}.markdown-body code,.markdown-body kbd,.markdown-body pre,.markdown-body samp{font-family:monospace;font-size:1em}.markdown-body figure{margin:1em var(--base-size-40)}.markdown-body hr{box-sizing:content-box;overflow:hidden;background:transparent;border-bottom:1px solid var(--borderColor-muted);height:.25em;padding:0;margin:var(--base-size-24) 0;background-color:var(--borderColor-default);border:0}.markdown-body input{font:inherit;margin:0;overflow:visible;font-family:inherit;font-size:inherit;line-height:inherit}.markdown-body [type=button],.markdown-body [type=reset],.markdown-body [type=submit]{-webkit-appearance:button;-moz-appearance:button;appearance:button}.markdown-body [type=checkbox],.markdown-body [type=radio]{box-sizing:border-box;padding:0}.markdown-body [type=number]::-webkit-inner-spin-button,.markdown-body [type=number]::-webkit-outer-spin-button{height:auto}.markdown-body [type=search]::-webkit-search-cancel-button,.markdown-body [type=search]::-webkit-search-decoration{-webkit-appearance:none;-moz-appearance:none;appearance:none}.markdown-body ::-webkit-input-placeholder{color:inherit;opacity:.54}.markdown-body ::-webkit-file-upload-button{-webkit-appearance:button;-moz-appearance:button;appearance:button;font:inherit}.markdown-body a:hover{text-decoration:underline}.markdown-body ::-moz-placeholder{color:var(--fgColor-muted);opacity:1}.markdown-body ::placeholder{color:var(--fgColor-muted);opacity:1}.markdown-body hr:before{display:table;content:""}.markdown-body hr:after{display:table;clear:both;content:""}.markdown-body table{border-spacing:0;border-collapse:collapse;display:block;width:-moz-max-content;width:max-content;max-width:100%;overflow:auto}.markdown-body td,.markdown-body th{padding:0}.markdown-body details summary{cursor:pointer}.markdown-body a:focus,.markdown-body [role=button]:focus,.markdown-body input[type=radio]:focus,.markdown-body input[type=checkbox]:focus{outline:2px solid var(--focus-outlineColor);outline-offset:-2px;box-shadow:none}.markdown-body a:focus:not(:focus-visible),.markdown-body [role=button]:focus:not(:focus-visible),.markdown-body input[type=radio]:focus:not(:focus-visible),.markdown-body input[type=checkbox]:focus:not(:focus-visible){outline:solid 1px transparent}.markdown-body a:focus-visible,.markdown-body [role=button]:focus-visible,.markdown-body input[type=radio]:focus-visible,.markdown-body input[type=checkbox]:focus-visible{outline:2px solid var(--focus-outlineColor);outline-offset:-2px;box-shadow:none}.markdown-body a:not([class]):focus,.markdown-body a:not([class]):focus-visible,.markdown-body input[type=radio]:focus,.markdown-body input[type=radio]:focus-visible,.markdown-body input[type=checkbox]:focus,.markdown-body input[type=checkbox]:focus-visible{outline-offset:0}.markdown-body kbd{display:inline-block;padding:var(--base-size-4);font:11px var(--fontStack-monospace, ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace);line-height:10px;color:var(--fgColor-default);vertical-align:middle;background-color:var(--bgColor-muted);border:solid 1px var(--borderColor-neutral-muted);border-bottom-color:var(--borderColor-neutral-muted);border-radius:6px;box-shadow:inset 0 -1px 0 var(--borderColor-neutral-muted)}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{margin-top:var(--base-size-24);margin-bottom:var(--base-size-16);font-weight:var(--base-text-weight-semibold, 600);line-height:1.25}.markdown-body h2{font-weight:var(--base-text-weight-semibold, 600);padding-bottom:.3em;font-size:1.5em;border-bottom:1px solid var(--borderColor-muted)}.markdown-body h3{font-weight:var(--base-text-weight-semibold, 600);font-size:1.25em}.markdown-body h4{font-weight:var(--base-text-weight-semibold, 600);font-size:1em}.markdown-body h5{font-weight:var(--base-text-weight-semibold, 600);font-size:.875em}.markdown-body h6{font-weight:var(--base-text-weight-semibold, 600);font-size:.85em;color:var(--fgColor-muted)}.markdown-body p{margin-top:0;margin-bottom:10px}.markdown-body blockquote{margin:0;padding:0 1em;color:var(--fgColor-muted);border-left:.25em solid var(--borderColor-default)}.markdown-body ul,.markdown-body ol{margin-top:0;margin-bottom:0;padding-left:2em}.markdown-body ol ol,.markdown-body ul ol{list-style-type:lower-roman}.markdown-body ul ul ol,.markdown-body ul ol ol,.markdown-body ol ul ol,.markdown-body ol ol ol{list-style-type:lower-alpha}.markdown-body dd{margin-left:0}.markdown-body tt,.markdown-body code,.markdown-body samp{font-family:var(--fontStack-monospace, ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace);font-size:12px}.markdown-body pre{margin-top:0;margin-bottom:0;font-family:var(--fontStack-monospace, ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace);font-size:12px;word-wrap:normal}.markdown-body .octicon{display:inline-block;overflow:visible!important;vertical-align:text-bottom;fill:currentColor}.markdown-body input::-webkit-outer-spin-button,.markdown-body input::-webkit-inner-spin-button{margin:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.markdown-body .mr-2{margin-right:var(--base-size-8, 8px)!important}.markdown-body:before{display:table;content:""}.markdown-body:after{display:table;clear:both;content:""}.markdown-body>*:first-child{margin-top:0!important}.markdown-body>*:last-child{margin-bottom:0!important}.markdown-body a:not([href]){color:inherit;text-decoration:none}.markdown-body .absent{color:var(--fgColor-danger)}.markdown-body .anchor{float:left;padding-right:var(--base-size-4);margin-left:-20px;line-height:1}.markdown-body .anchor:focus{outline:none}.markdown-body p,.markdown-body blockquote,.markdown-body ul,.markdown-body ol,.markdown-body dl,.markdown-body table,.markdown-body pre,.markdown-body details{margin-top:0;margin-bottom:var(--base-size-16)}.markdown-body blockquote>:first-child{margin-top:0}.markdown-body blockquote>:last-child{margin-bottom:0}.markdown-body h1 .octicon-link,.markdown-body h2 .octicon-link,.markdown-body h3 .octicon-link,.markdown-body h4 .octicon-link,.markdown-body h5 .octicon-link,.markdown-body h6 .octicon-link{color:var(--fgColor-default);vertical-align:middle;visibility:hidden}.markdown-body h1:hover .anchor,.markdown-body h2:hover .anchor,.markdown-body h3:hover .anchor,.markdown-body h4:hover .anchor,.markdown-body h5:hover .anchor,.markdown-body h6:hover .anchor{text-decoration:none}.markdown-body h1:hover .anchor .octicon-link,.markdown-body h2:hover .anchor .octicon-link,.markdown-body h3:hover .anchor .octicon-link,.markdown-body h4:hover .anchor .octicon-link,.markdown-body h5:hover .anchor .octicon-link,.markdown-body h6:hover .anchor .octicon-link{visibility:visible}.markdown-body h1 tt,.markdown-body h1 code,.markdown-body h2 tt,.markdown-body h2 code,.markdown-body h3 tt,.markdown-body h3 code,.markdown-body h4 tt,.markdown-body h4 code,.markdown-body h5 tt,.markdown-body h5 code,.markdown-body h6 tt,.markdown-body h6 code{padding:0 .2em;font-size:inherit}.markdown-body summary h1,.markdown-body summary h2,.markdown-body summary h3,.markdown-body summary h4,.markdown-body summary h5,.markdown-body summary h6{display:inline-block}.markdown-body summary h1 .anchor,.markdown-body summary h2 .anchor,.markdown-body summary h3 .anchor,.markdown-body summary h4 .anchor,.markdown-body summary h5 .anchor,.markdown-body summary h6 .anchor{margin-left:-40px}.markdown-body summary h1,.markdown-body summary h2{padding-bottom:0;border-bottom:0}.markdown-body ul.no-list,.markdown-body ol.no-list{padding:0;list-style-type:none}.markdown-body ol[type="a s"]{list-style-type:lower-alpha}.markdown-body ol[type="A s"]{list-style-type:upper-alpha}.markdown-body ol[type="i s"]{list-style-type:lower-roman}.markdown-body ol[type="I s"]{list-style-type:upper-roman}.markdown-body ol[type="1"]{list-style-type:decimal}.markdown-body div>ol:not([type]){list-style-type:decimal}.markdown-body ul ul,.markdown-body ul ol,.markdown-body ol ol,.markdown-body ol ul{margin-top:0;margin-bottom:0}.markdown-body li>p{margin-top:var(--base-size-16)}.markdown-body li+li{margin-top:.25em}.markdown-body dl{padding:0}.markdown-body dl dt{padding:0;margin-top:var(--base-size-16);font-size:1em;font-style:italic;font-weight:var(--base-text-weight-semibold, 600)}.markdown-body dl dd{padding:0 var(--base-size-16);margin-bottom:var(--base-size-16)}.markdown-body table th{font-weight:var(--base-text-weight-semibold, 600)}.markdown-body table th,.markdown-body table td{padding:6px 13px;border:1px solid var(--borderColor-default)}.markdown-body table td>:last-child{margin-bottom:0}.markdown-body table tr{background-color:var(--bgColor-default);border-top:1px solid var(--borderColor-muted)}.markdown-body table tr:nth-child(2n){background-color:var(--bgColor-muted)}.markdown-body table img{background-color:transparent}.markdown-body img[align=right]{padding-left:20px}.markdown-body img[align=left]{padding-right:20px}.markdown-body .emoji{max-width:none;vertical-align:text-top;background-color:transparent}.markdown-body span.frame{display:block;overflow:hidden}.markdown-body span.frame>span{display:block;float:left;width:auto;padding:7px;margin:13px 0 0;overflow:hidden;border:1px solid var(--borderColor-default)}.markdown-body span.frame span img{display:block;float:left}.markdown-body span.frame span span{display:block;padding:5px 0 0;clear:both;color:var(--fgColor-default)}.markdown-body span.align-center{display:block;overflow:hidden;clear:both}.markdown-body span.align-center>span{display:block;margin:13px auto 0;overflow:hidden;text-align:center}.markdown-body span.align-center span img{margin:0 auto;text-align:center}.markdown-body span.align-right{display:block;overflow:hidden;clear:both}.markdown-body span.align-right>span{display:block;margin:13px 0 0;overflow:hidden;text-align:right}.markdown-body span.align-right span img{margin:0;text-align:right}.markdown-body span.float-left{display:block;float:left;margin-right:13px;overflow:hidden}.markdown-body span.float-left span{margin:13px 0 0}.markdown-body span.float-right{display:block;float:right;margin-left:13px;overflow:hidden}.markdown-body span.float-right>span{display:block;margin:13px auto 0;overflow:hidden;text-align:right}.markdown-body code,.markdown-body tt{padding:.2em .4em;margin:0;font-size:85%;white-space:break-spaces;background-color:var(--bgColor-neutral-muted);border-radius:6px}.markdown-body code br,.markdown-body tt br{display:none}.markdown-body del code{text-decoration:inherit}.markdown-body samp{font-size:85%}.markdown-body pre code{font-size:100%}.markdown-body pre>code{padding:0;margin:0;word-break:normal;white-space:pre;background:transparent;border:0}.markdown-body .highlight{margin-bottom:var(--base-size-16)}.markdown-body .highlight pre{margin-bottom:0;word-break:normal}.markdown-body .highlight pre,.markdown-body pre{padding:var(--base-size-16);overflow:auto;font-size:85%;line-height:1.45;color:var(--fgColor-default);background-color:var(--bgColor-muted);border-radius:6px}.markdown-body pre code,.markdown-body pre tt{display:inline;max-width:auto;padding:0;margin:0;overflow:visible;line-height:inherit;word-wrap:normal;background-color:transparent;border:0}.markdown-body .csv-data td,.markdown-body .csv-data th{padding:5px;overflow:hidden;font-size:12px;line-height:1;text-align:left;white-space:nowrap}.markdown-body .csv-data .blob-num{padding:10px var(--base-size-8) 9px;text-align:right;background:var(--bgColor-default);border:0}.markdown-body .csv-data tr{border-top:0}.markdown-body .csv-data th{font-weight:var(--base-text-weight-semibold, 600);background:var(--bgColor-muted);border-top:0}.markdown-body [data-footnote-ref]:before{content:"["}.markdown-body [data-footnote-ref]:after{content:"]"}.markdown-body .footnotes{font-size:12px;color:var(--fgColor-muted);border-top:1px solid var(--borderColor-default)}.markdown-body .footnotes ol{padding-left:var(--base-size-16)}.markdown-body .footnotes ol ul{display:inline-block;padding-left:var(--base-size-16);margin-top:var(--base-size-16)}.markdown-body .footnotes li{position:relative}.markdown-body .footnotes li:target:before{position:absolute;top:calc(var(--base-size-8)*-1);right:calc(var(--base-size-8)*-1);bottom:calc(var(--base-size-8)*-1);left:calc(var(--base-size-24)*-1);pointer-events:none;content:"";border:2px solid var(--borderColor-accent-emphasis);border-radius:6px}.markdown-body .footnotes li:target{color:var(--fgColor-default)}.markdown-body .footnotes .data-footnote-backref g-emoji{font-family:monospace}.markdown-body .pl-c{color:var(--color-prettylights-syntax-comment)}.markdown-body .pl-c1,.markdown-body .pl-s .pl-v{color:var(--color-prettylights-syntax-constant)}.markdown-body .pl-e,.markdown-body .pl-en{color:var(--color-prettylights-syntax-entity)}.markdown-body .pl-smi,.markdown-body .pl-s .pl-s1{color:var(--color-prettylights-syntax-storage-modifier-import)}.markdown-body .pl-ent{color:var(--color-prettylights-syntax-entity-tag)}.markdown-body .pl-k{color:var(--color-prettylights-syntax-keyword)}.markdown-body .pl-s,.markdown-body .pl-pds,.markdown-body .pl-s .pl-pse .pl-s1,.markdown-body .pl-sr,.markdown-body .pl-sr .pl-cce,.markdown-body .pl-sr .pl-sre,.markdown-body .pl-sr .pl-sra{color:var(--color-prettylights-syntax-string)}.markdown-body .pl-v,.markdown-body .pl-smw{color:var(--color-prettylights-syntax-variable)}.markdown-body .pl-bu{color:var(--color-prettylights-syntax-brackethighlighter-unmatched)}.markdown-body .pl-ii{color:var(--color-prettylights-syntax-invalid-illegal-text);background-color:var(--color-prettylights-syntax-invalid-illegal-bg)}.markdown-body .pl-c2{color:var(--color-prettylights-syntax-carriage-return-text);background-color:var(--color-prettylights-syntax-carriage-return-bg)}.markdown-body .pl-sr .pl-cce{font-weight:700;color:var(--color-prettylights-syntax-string-regexp)}.markdown-body .pl-ml{color:var(--color-prettylights-syntax-markup-list)}.markdown-body .pl-mh,.markdown-body .pl-mh .pl-en,.markdown-body .pl-ms{font-weight:700;color:var(--color-prettylights-syntax-markup-heading)}.markdown-body .pl-mi{font-style:italic;color:var(--color-prettylights-syntax-markup-italic)}.markdown-body .pl-mb{font-weight:700;color:var(--color-prettylights-syntax-markup-bold)}.markdown-body .pl-md{color:var(--color-prettylights-syntax-markup-deleted-text);background-color:var(--color-prettylights-syntax-markup-deleted-bg)}.markdown-body .pl-mi1{color:var(--color-prettylights-syntax-markup-inserted-text);background-color:var(--color-prettylights-syntax-markup-inserted-bg)}.markdown-body .pl-mc{color:var(--color-prettylights-syntax-markup-changed-text);background-color:var(--color-prettylights-syntax-markup-changed-bg)}.markdown-body .pl-mi2{color:var(--color-prettylights-syntax-markup-ignored-text);background-color:var(--color-prettylights-syntax-markup-ignored-bg)}.markdown-body .pl-mdr{font-weight:700;color:var(--color-prettylights-syntax-meta-diff-range)}.markdown-body .pl-ba{color:var(--color-prettylights-syntax-brackethighlighter-angle)}.markdown-body .pl-sg{color:var(--color-prettylights-syntax-sublimelinter-gutter-mark)}.markdown-body .pl-corl{text-decoration:underline;color:var(--color-prettylights-syntax-constant-other-reference-link)}.markdown-body [role=button]:focus:not(:focus-visible),.markdown-body [role=tabpanel][tabindex="0"]:focus:not(:focus-visible),.markdown-body button:focus:not(:focus-visible),.markdown-body summary:focus:not(:focus-visible),.markdown-body a:focus:not(:focus-visible){outline:none;box-shadow:none}.markdown-body [tabindex="0"]:focus:not(:focus-visible),.markdown-body details-dialog:focus:not(:focus-visible){outline:none}.markdown-body g-emoji{display:inline-block;min-width:1ch;font-family:"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol;font-size:1em;font-style:normal!important;font-weight:var(--base-text-weight-normal, 400);line-height:1;vertical-align:-.075em}.markdown-body g-emoji img{width:1em;height:1em}.markdown-body .task-list-item{list-style-type:none}.markdown-body .task-list-item label{font-weight:var(--base-text-weight-normal, 400)}.markdown-body .task-list-item.enabled label{cursor:pointer}.markdown-body .task-list-item+.task-list-item{margin-top:var(--base-size-4)}.markdown-body .task-list-item .handle{display:none}.markdown-body .task-list-item-checkbox{margin:0 .2em .25em -1.4em;vertical-align:middle}.markdown-body ul:dir(rtl) .task-list-item-checkbox{margin:0 -1.6em .25em .2em}.markdown-body ol:dir(rtl) .task-list-item-checkbox{margin:0 -1.6em .25em .2em}.markdown-body .contains-task-list:hover .task-list-item-convert-container,.markdown-body .contains-task-list:focus-within .task-list-item-convert-container{display:block;width:auto;height:24px;overflow:visible;clip:auto}.markdown-body ::-webkit-calendar-picker-indicator{filter:invert(50%)}.markdown-body .markdown-alert{padding:var(--base-size-8) var(--base-size-16);margin-bottom:var(--base-size-16);color:inherit;border-left:.25em solid var(--borderColor-default)}.markdown-body .markdown-alert>:first-child{margin-top:0}.markdown-body .markdown-alert>:last-child{margin-bottom:0}.markdown-body .markdown-alert .markdown-alert-title{display:flex;font-weight:var(--base-text-weight-medium, 500);align-items:center;line-height:1}.markdown-body .markdown-alert.markdown-alert-note{border-left-color:var(--borderColor-accent-emphasis)}.markdown-body .markdown-alert.markdown-alert-note .markdown-alert-title{color:var(--fgColor-accent)}.markdown-body .markdown-alert.markdown-alert-important{border-left-color:var(--borderColor-done-emphasis)}.markdown-body .markdown-alert.markdown-alert-important .markdown-alert-title{color:var(--fgColor-done)}.markdown-body .markdown-alert.markdown-alert-warning{border-left-color:var(--borderColor-attention-emphasis)}.markdown-body .markdown-alert.markdown-alert-warning .markdown-alert-title{color:var(--fgColor-attention)}.markdown-body .markdown-alert.markdown-alert-tip{border-left-color:var(--borderColor-success-emphasis)}.markdown-body .markdown-alert.markdown-alert-tip .markdown-alert-title{color:var(--fgColor-success)}.markdown-body .markdown-alert.markdown-alert-caution{border-left-color:var(--borderColor-danger-emphasis)}.markdown-body .markdown-alert.markdown-alert-caution .markdown-alert-title{color:var(--fgColor-danger)}.markdown-body>*:first-child>.heading-element:first-child{margin-top:0!important}`, Yi = "*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}@media (min-width: 1856px){.container{max-width:1856px}}.isolate{isolation:isolate}.mx-4{margin-left:1rem;margin-right:1rem}.mx-6{margin-left:1.5rem;margin-right:1.5rem}.my-px{margin-top:1px;margin-bottom:1px}.mb-0{margin-bottom:0}.mb-2{margin-bottom:.5rem}.mb-3{margin-bottom:.75rem}.mb-4{margin-bottom:1rem}.mb-6{margin-bottom:1.5rem}.mb-8{margin-bottom:2rem}.ml-2{margin-left:.5rem}.mr-3{margin-right:.75rem}.mt-3{margin-top:.75rem}.mt-4{margin-top:1rem}.mt-8{margin-top:2rem}.mt-auto{margin-top:auto}.inline{display:inline}.table{display:table}.grid{display:grid}.h-8{height:2rem}.h-full{height:100%}.h-screen{height:100vh}.w-64{width:16rem}.w-8{width:2rem}.w-full{width:100%}.cursor-pointer{cursor:pointer}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.grid-cols-\\[max-content_auto\\]{grid-template-columns:max-content auto}.grid-rows-\\[minmax\\(100vh\\,100\\%\\)\\]{grid-template-rows:minmax(100vh,100%)}.gap-4{gap:1rem}.break-all{word-break:break-all}.rounded{border-radius:.25rem}.rounded-full{border-radius:9999px}.border-y-2{border-top-width:2px;border-bottom-width:2px}.border-b-0{border-bottom-width:0}.border-l-4{border-left-width:4px}.border-theme-background-lvl-1{--tw-border-opacity: 1;border-color:rgba(var(--color-background-lvl-1-raw),var(--tw-border-opacity))}.bg-juno-grey-blue-11{--tw-bg-opacity: 1;background-color:rgba(var(--color-juno-grey-blue-11-raw),var(--tw-bg-opacity))}.bg-theme-accent\\/30{background-color:rgba(var(--color-accent-raw),.3)}.bg-theme-background-lvl-0{--tw-bg-opacity: 1;background-color:rgba(var(--color-background-lvl-0-raw),var(--tw-bg-opacity))}.bg-theme-background-lvl-1{--tw-bg-opacity: 1;background-color:rgba(var(--color-background-lvl-1-raw),var(--tw-bg-opacity))}.bg-theme-background-lvl-2{--tw-bg-opacity: 1;background-color:rgba(var(--color-background-lvl-2-raw),var(--tw-bg-opacity))}.bg-theme-global-bg{--tw-bg-opacity: 1;background-color:rgba(var(--color-global-bg-raw),var(--tw-bg-opacity))}.bg-cover{background-size:cover}.fill-current{fill:currentColor}.p-8{padding:2rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-4{padding-left:1rem;padding-right:1rem}.py-0{padding-top:0;padding-bottom:0}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.py-4{padding-top:1rem;padding-bottom:1rem}.pb-6{padding-bottom:1.5rem}.pl-4{padding-left:1rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-bold{font-weight:700}.text-theme-accent{--tw-text-opacity: 1;color:rgba(var(--color-accent-raw),var(--tw-text-opacity))}.text-theme-danger{--tw-text-opacity: 1;color:rgba(var(--color-danger-raw),var(--tw-text-opacity))}.text-theme-default{--tw-text-opacity: 1;color:rgba(var(--color-text-default-raw),var(--tw-text-opacity))}.text-theme-disabled{--tw-text-opacity: 1;color:rgba(var(--color-text-disabled-raw),var(--tw-text-opacity))}.text-theme-high{--tw-text-opacity: 1;color:rgba(var(--color-text-high-raw),var(--tw-text-opacity))}.text-theme-info{--tw-text-opacity: 1;color:rgba(var(--color-info-raw),var(--tw-text-opacity))}.text-theme-light{--tw-text-opacity: 1;color:rgba(var(--color-text-light-raw),var(--tw-text-opacity))}.text-theme-link{--tw-text-opacity: 1;color:rgba(var(--color-text-link-raw),var(--tw-text-opacity))}.text-white{--tw-text-opacity: 1;color:rgba(var(--color-white-raw),var(--tw-text-opacity))}.text-opacity-50{--tw-text-opacity: .5}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.plugins .juno-datagrid-row:hover .juno-datagrid-cell{--tw-bg-opacity: 1;background-color:rgba(var(--color-background-lvl-1-raw),var(--tw-bg-opacity))}.plugins .juno-datagrid-row.active .juno-datagrid-cell{--tw-bg-opacity: 1;background-color:rgba(var(--color-background-lvl-2-raw),var(--tw-bg-opacity))}.filtered{filter:grayscale(100%)}.markdown-body{background-color:transparent!important}.hover\\:bg-theme-background-lvl-2:hover{--tw-bg-opacity: 1;background-color:rgba(var(--color-background-lvl-2-raw),var(--tw-bg-opacity))}.hover\\:text-theme-high:hover{--tw-text-opacity: 1;color:rgba(var(--color-text-high-raw),var(--tw-text-opacity))}.hover\\:text-white:hover{--tw-text-opacity: 1;color:rgba(var(--color-white-raw),var(--tw-text-opacity))}";
var pe = /* @__PURE__ */ ((e) => (e[e.PLUGIN_CREATE = 0] = "PLUGIN_CREATE", e[e.PLUGIN_EDIT = 1] = "PLUGIN_EDIT", e[e.PLUGIN_PRESET_CREATE = 2] = "PLUGIN_PRESET_CREATE", e[e.PLUGIN_PRESET_EDIT = 3] = "PLUGIN_PRESET_EDIT", e))(pe || {});
const _ = pi((e) => ({
  endpoint: "",
  token: "",
  namespace: "",
  initialize: (t, n, r) => e((o) => ({ endpoint: t, token: n, namespace: r })),
  urlStateKey: "",
  setUrlStateKey: (t) => e((n) => ({ urlStateKey: t })),
  pluginDefinitions: [],
  modifyPluginDefinitions: (t) => e((n) => {
    let r = [...n.pluginDefinitions];
    return t.forEach((o) => {
      const a = r.findIndex((i) => i.metadata.name === o.metadata.name);
      a >= 0 ? r[a] = o : r.push(o);
    }), { pluginDefinitions: r };
  }),
  deletePluginDefinitions: (t) => e((n) => ({ pluginDefinitions: n.pluginDefinitions.filter((o) => !t.some((a) => o.metadata.name === a.metadata.name)) })),
  showPluginDefinitionDetails: !1,
  setShowPluginDefinitionDetails: (t) => e((n) => ({
    ...n,
    showPluginDefinitionDetails: t
  })),
  pluginDefinitionDetail: null,
  setPluginDefinitionDetail: (t) => e((n) => ({ pluginDefinitionDetail: t })),
  showEditForm: !1,
  setShowEditForm: (t) => e((n) => ({ showEditForm: t })),
  editFormState: 0,
  setEditFormState: (t) => e((n) => ({ editFormState: t })),
  pluginToEdit: void 0,
  setPluginToEdit: (t) => e((n) => ({ pluginToEdit: t })),
  editFormData: {
    metadata: void 0,
    spec: void 0,
    labelSelector: void 0
  },
  setEditFormData: (t) => e((n) => ({ editFormData: t })),
  isFormEditMode: !1,
  setIsFormEditMode: (t) => e((n) => ({ isFormEditMode: t })),
  isFormPluginPresetMode: !1,
  setIsFormPluginPresetMode: (t) => e((n) => ({ isFormPluginPresetMode: t })),
  isPluginEditMode: !1,
  setIsPluginEditMode: (t) => e((n) => ({ isPluginEditMode: t })),
  secrets: [],
  modifySecrets: (t) => e((n) => {
    let r = [...n.secrets];
    return t.forEach((o) => {
      const a = r.findIndex((i) => i.metadata.name === o.metadata.name);
      a >= 0 ? r[a] = o : r.push(o);
    }), { ...n, secrets: r };
  }),
  deleteSecrets: (t) => e((n) => ({ secrets: n.secrets.filter((o) => !t.some((a) => o.metadata.name === a.metadata.name)) })),
  secretDetail: void 0,
  setSecretDetail: (t) => e((n) => ({ secretDetail: t })),
  showSecretEdit: !1,
  setShowSecretEdit: (t) => e((n) => ({ showSecretEdit: t })),
  isSecretEditMode: !1,
  setIsSecretEditMode: (t) => e((n) => ({ isSecretEditMode: t }))
})), jt = () => {
  const e = _((r) => r.endpoint), t = _((r) => r.token);
  return {
    client: e && t && $r({ apiEndpoint: e, token: t })
  };
}, At = (e) => {
  const t = _((c) => c.namespace), { client: n } = jt(), r = e ?? !1, o = U.useCallback(
    async (c, p, m) => !n || !t ? { ok: !1, message: "Client or namespace not available" } : await n.get(c + "/" + p.metadata.name, {
      params: m
    }).then((h) => h.kind !== p.kind ? (r && console.log(`ERROR: Failed to get ${p.kind}, did not get ${p.kind}: ${JSON.stringify(h)}`), {
      ok: !1,
      message: `Failed getting ${p.kind}`,
      response: h
    }) : {
      ok: !0,
      response: h,
      message: `Successfully got ${p.kind}`
    }).catch((h) => (r && console.log(`ERROR: Failed to get ${p.kind}`, h), {
      ok: !1,
      message: `Failed getting ${p.kind}: ${h}`
    })),
    [n, t]
  ), a = U.useCallback(
    async (c, p) => !n || !t ? { ok: !1, message: "Client or namespace not available" } : await n.post(c, p).then((m) => m.kind !== p.kind ? (r && console.log(`ERROR: Failed to create ${p.kind}, did not get ${p.kind}: ${JSON.stringify(m)}`), { ok: !1, message: `Failed creating ${p.kind}` }) : {
      ok: !0,
      response: m,
      message: `Successfully created ${p.kind}`
    }).catch((m) => (r && console.log(`ERROR: Failed to create ${p.kind}`, m), {
      ok: !1,
      message: `Failed creating ${p.kind}: ${m}`
    })),
    [n, t]
  ), i = U.useCallback(
    async (c, p) => !n || !t ? { ok: !1, message: "Client or namespace not available" } : await n.put(c + "/" + p.metadata.name, p).then((m) => m.kind !== p.kind ? (r && console.log(`ERROR: Failed to update ${p.kind}, did not get ${p.kind}: ${JSON.stringify(m)}`), { ok: !1, message: `Failed updating ${p.kind}` }) : {
      ok: !0,
      response: m,
      message: `Successfully updated ${p.kind}`
    }).catch((m) => (r && console.log(`ERROR: Failed to update ${p.kind}`, m), {
      ok: !1,
      message: `Failed updating ${p.kind}: ${m}`
    })),
    [n, t]
  ), l = U.useCallback(
    async (c, p, m) => !n || !t ? { ok: !1, message: "Client or namespace not available" } : await n.delete(c + "/" + p.metadata.name, {
      params: m
    }).then((h) => h.kind == p.kind || h.kind == "Status" && h.status == "Success" ? { ok: !0, message: `Successfully deleted ${p.kind}` } : (r && console.log(`ERROR: Failed to delete ${p.kind} did not get ${p.kind}: ${JSON.stringify(h)}`), { ok: !1, message: `Failed deleting ${p.kind}` })).catch((h) => (r && console.log(`ERROR: Failed to delete ${p.kind}`, h), {
      ok: !1,
      message: `Failed deleting ${p.kind}: ${h}`
    })),
    [n, t]
  ), s = U.useCallback(
    async (c, p, m, h, y, v) => !n || !t ? (console.log(
      "Cannot initialize watch: client or namespace not available, waiting for client or namespace to become available"
    ), { ok: !1, message: "Client or namespace not available" }) : d(c, p).then((k) => k.ok ? (n.watch(c, {
      params: v
    }).on(n.WATCH_ERROR, () => {
      console.log("ERROR: Failed to watch resource");
    }).on(n.WATCH_ADDED, (x) => {
      console.log(`added ${x}`), u(x, p), m(x);
    }).on(n.WATCH_MODIFIED, (x) => {
      console.log(`modified ${x}`), u(x, p), h(x);
    }).on(n.WATCH_DELETED, (x) => {
      console.log(`deleted ${x}`), u(x, p), y(x);
    }).start(), { ok: !0, message: `Successfully watching ${p}s` }) : {
      ok: !1,
      message: `Cannot initialize watch for ${p}: ${k.message}`,
      status: 403
    }),
    [n, t]
  ), u = (c, p) => {
    c.forEach((m) => {
      m.kind = p;
    });
  }, d = U.useCallback(
    async (c, p) => {
      var y;
      let h = await o(c, { metadata: { name: "" }, kind: p });
      return ((y = h.response) == null ? void 0 : y.kind) == `${p}List` ? { ok: !0, message: "" } : { ok: h.ok, message: h.message };
    },
    [n, t]
  );
  return {
    get: o,
    create: a,
    update: i,
    deleteObject: l,
    watch: s
  };
}, Wr = () => {
  const { get: e, create: t, update: n, deleteObject: r } = At(), o = _((c) => c.namespace), { client: a } = jt(), i = (c) => e(
    `/apis/greenhouse.sap/v1alpha1/namespaces/${o}/plugins`,
    c
  ), l = (c) => t(
    `/apis/greenhouse.sap/v1alpha1/namespaces/${o}/plugins`,
    c
  ), s = (c) => n(
    `/apis/greenhouse.sap/v1alpha1/namespaces/${o}/plugins`,
    c
  ), u = (c) => r(
    `/apis/greenhouse.sap/v1alpha1/namespaces/${o}/plugins`,
    c
  ), d = U.useCallback(
    async (c, p) => {
      let m = [];
      if (!a || !o)
        return m;
      const h = `${c}=${p}`;
      return m = await a.get(`/apis/greenhouse.sap/v1alpha1/namespaces/${o}/plugins`, {
        params: {
          labelSelector: h
        }
      }).then((y) => y.kind !== "PluginList" ? (console.log("ERROR: Failed to get Plugins, did not get PluginList"), []) : y.items), m;
    },
    [a, o]
  );
  return {
    getPlugin: i,
    createPlugin: l,
    updatePlugin: s,
    deletePlugin: u,
    getPluginsByLabelSelector: d
  };
}, Qi = () => {
  const { get: e, create: t, update: n, deleteObject: r } = At(), o = _((u) => u.namespace);
  return jt(), {
    getPluginPreset: (u) => e(
      `/apis/greenhouse.sap/v1alpha1/namespaces/${o}/pluginpresets`,
      u
    ),
    createPluginPreset: (u) => t(
      `/apis/greenhouse.sap/v1alpha1/namespaces/${o}/pluginpresets`,
      u
    ),
    updatePluginPreset: (u) => n(
      `/apis/greenhouse.sap/v1alpha1/namespaces/${o}/pluginpresets`,
      u
    ),
    deletePluginPreset: (u) => r(
      `/apis/greenhouse.sap/v1alpha1/namespaces/${o}/pluginpresets`,
      u
    )
  };
}, Xi = (e) => ({
  globals: {
    urlStateKey: "",
    apiEndpoint: null,
    token: "",
    namespace: "",
    showDefinitionPanel: !1,
    panel: null,
    actions: {
      initialize: (t, n, r) => e((o) => ({ globals: { ...o.globals, apiEndpoint: t, token: n, namespace: r } })),
      setUrlStateKey: (t) => e((n) => ({
        globals: { ...n.globals, urlStateKey: t }
      })),
      // null, showPlugin, showPluginDefinition, showPluginDefinitionDetail, editPlugin
      setPanel: (t) => e((n) => ({
        globals: { ...n.globals, panel: t }
      })),
      setEndpoint: (t) => e((n) => ({
        globals: { ...n.globals, apiEndpoint: t }
      })),
      setShowDefinitionPanel: (t) => e((n) => ({
        globals: {
          ...n.globals,
          showDefinitionPanel: t
        }
      }))
    }
  }
});
function Bt(e) {
  return e.sort((t, n) => {
    var r, o, a, i, l, s;
    return (r = t == null ? void 0 : t.spec) != null && r.disabled && !((o = n == null ? void 0 : n.spec) != null && o.disabled) ? 1 : !((a = t == null ? void 0 : t.spec) != null && a.disabled) && ((i = n == null ? void 0 : n.spec) != null && i.disabled) ? -1 : (s = t == null ? void 0 : t.metadata) == null ? void 0 : s.uid.localeCompare((l = n == null ? void 0 : n.metadata) == null ? void 0 : l.uid);
  });
}
function $t(e) {
  return e.filter((t, n, r) => r.indexOf(t) === n);
}
const Zi = (e, t) => ({
  plugin: {
    pluginConfig: null,
    showDetailsFor: null,
    actions: {
      setPluginConfig: (n) => {
        let r = n.sort((o, a) => o != null && o.disabled && !(a != null && a.disabled) ? 1 : !(o != null && o.disabled) && (a != null && a.disabled) ? -1 : o.id.localeCompare(a.id));
        e((o) => ({
          plugin: {
            ...o.plugin,
            pluginConfig: r
          }
        }));
      },
      addPluginConfigItems: (n) => {
        const r = (t().plugin.pluginConfig || []).slice();
        let o = $t([...r, ...n]);
        o = Bt(o), e((a) => ({
          plugin: {
            ...a.plugin,
            pluginConfig: o
          }
        }));
      },
      modifyPluginConfigItems: (n) => {
        const o = (t().plugin.pluginConfig || []).slice().map((i) => n.find(
          (s) => s.metadata.uid === i.metadata.uid
        ) || i);
        let a = $t(o);
        a = Bt(o), e((i) => ({
          plugin: {
            ...i.plugin,
            pluginConfig: a
          }
        }));
      },
      deletePluginConfigItems: (n) => {
        let o = (t().plugin.pluginConfig || []).slice().filter((i) => !n.find((l) => l.metadata.uid === i.metadata.uid)), a = $t(o);
        a = Bt(o), e((i) => ({
          plugin: {
            ...i.plugin,
            pluginConfig: a
          }
        }));
      },
      setShowDetailsFor: (n) => e((r) => ({
        plugin: { ...r.plugin, showDetailsFor: n }
      }))
    }
  }
}), ea = () => hi(
  fi((e, t) => ({
    ...Xi(e),
    ...Zi(e, t)
  }))
), Gr = U.createContext(), ta = ({ children: e }) => /* @__PURE__ */ f.jsx(Gr.Provider, { value: ea(), children: e }), _e = (e) => gi(U.useContext(Gr), e), na = () => _e((e) => e.globals.apiEndpoint), ra = () => _e((e) => e.globals.namespace), oa = () => _e((e) => e.globals.token), Jr = () => _e((e) => e.globals.panel), Te = () => _e((e) => e.globals.actions), Kr = () => _e((e) => e.plugin.pluginConfig), kn = () => _e((e) => e.plugin.showDetailsFor), Tt = () => _e((e) => e.plugin.actions), ia = (e) => {
  const t = e.dataName ? e.dataName : "Data", n = e.isSecret ? e.isSecret : !1, r = (i, l) => {
    let s = i.split("."), u = s[0], d = s[1];
    switch (u) {
      case "dataKey":
        let c = { ...e.data }, p = c[d];
        delete c[d], c[l] = p, e.setData(c);
        break;
      case "dataValue":
        e.mutateValue && (l = e.mutateValue(l)), e.setData({
          ...e.data,
          [d]: l
        });
        break;
      default:
        console.log("keyIdentifier not found");
        break;
    }
  }, o = (i) => {
    let l = { ...e.data };
    delete l[i], e.setData(l);
  }, a = () => {
    e.setData({
      ...e.data,
      "": ""
    });
  };
  return /* @__PURE__ */ f.jsxs(on, { title: e.title, children: [
    e.data && Object.keys(e.data).length > 0 && Object.keys(e.data).map((i, l) => /* @__PURE__ */ f.jsx(Me, { children: /* @__PURE__ */ f.jsxs(bi, { children: [
      /* @__PURE__ */ f.jsx(
        Xe,
        {
          id: "dataKey." + i,
          label: `${t} Key`,
          value: i,
          onBlur: (s) => r("dataKey." + i, s.target.value)
        }
      ),
      /* @__PURE__ */ f.jsx(
        Xe,
        {
          id: "dataValue" + i,
          type: n ? "password" : "text",
          label: `${t} Value`,
          value: e.data[i],
          onBlur: (s) => r("dataValue." + i, s.target.value)
        }
      ),
      /* @__PURE__ */ f.jsx(Oe, { icon: "deleteForever", onClick: () => o(i) })
    ] }) }, l)),
    /* @__PURE__ */ f.jsx(Oe, { icon: "addCircle", label: `Add ${t}`, onClick: a })
  ] });
}, aa = (e) => {
  const { client: t } = jt(), n = _((i) => i.namespace), [r, o] = re.useState([]);
  U.useEffect(() => {
    if (!t || !n) return;
    (async () => {
      try {
        const l = await t.get(`/apis/greenhouse.sap/v1alpha1/namespaces/${n}/clusters`, {});
        if (l.kind !== "ClusterList")
          console.debug("ERROR: Failed to get Clusters");
        else {
          const s = l.items;
          JSON.stringify(s) !== JSON.stringify(r) && o(s);
        }
      } catch (l) {
        console.error("Error fetching clusters:", l);
      }
    })();
  }, [t, n]);
  const a = (i) => {
    let l = {
      target: {
        value: i,
        id: e.id,
        type: "cluster-select"
      }
    };
    e.onChange && e.onChange(l);
  };
  return /* @__PURE__ */ f.jsx(
    an,
    {
      id: e.id,
      placeholder: e.placeholder,
      label: e.label,
      defaultValue: e.defaultValue,
      onChange: a,
      children: r.map((i) => /* @__PURE__ */ f.jsx(ln, { value: i.metadata.name }, i.metadata.name))
    }
  );
}, la = (e) => {
  var u, d, c, p, m, h;
  const t = _((y) => y.secrets), n = ((d = (u = e.value) == null ? void 0 : u.secret) == null ? void 0 : d.name) ?? "", r = t.find((y) => y.metadata.name === n), o = ((p = (c = e.value) == null ? void 0 : c.secret) == null ? void 0 : p.key) != null && r != null && r.data[e.value.secret.key] != null ? (h = (m = e.value) == null ? void 0 : m.secret) == null ? void 0 : h.key : "";
  let a = {
    secret: {
      name: n,
      key: o
    }
  };
  const i = (y) => {
    a.secret.name = y, s(a);
  }, l = (y) => {
    a.secret.key = y, s(a);
  }, s = (y) => {
    let v = {
      target: {
        value: JSON.stringify(y),
        id: e.id,
        type: "secret-select"
      }
    };
    e.onChange && e.onChange(v);
  };
  return /* @__PURE__ */ f.jsxs(qe, { children: [
    /* @__PURE__ */ f.jsx(
      an,
      {
        id: e.id + "-name",
        label: e.label,
        required: e.required,
        helptext: "Select secret",
        value: n,
        onChange: i,
        children: t.map((y) => /* @__PURE__ */ f.jsx(ln, { value: y.metadata.name }, y.metadata.name))
      }
    ),
    /* @__PURE__ */ f.jsx(
      an,
      {
        disabled: !n,
        id: e.id + "-key",
        label: e.label,
        required: e.required,
        helptext: "Select secret data key",
        value: o,
        onChange: l,
        children: r && Object.keys(r.data).map((y) => /* @__PURE__ */ f.jsx(ln, { value: y, children: y }, y))
      }
    )
  ] });
}, sa = (e) => {
  var m, h;
  const [t, n] = U.useState(!0), [r, o] = U.useState(""), a = (y) => {
    let v;
    try {
      v = JSON.parse(y);
    } catch {
      n(!1), o("Invalid JSON");
      return;
    }
    n(!0), o("");
  }, i = (y) => {
    e.onChange && e.onChange(y);
  }, l = "optionValues." + e.pluginDefinitionOption.name, s = (e.pluginDefinitionOption.displayName ?? e.pluginDefinitionOption.name) + ` (${e.pluginDefinitionOption.type})`, u = e.pluginDefinitionOption.required;
  let d = (m = e.pluginOptionValue) == null ? void 0 : m.value, c = (h = e.pluginOptionValue) == null ? void 0 : h.valueFrom, p = "text";
  switch (e.pluginDefinitionOption.type) {
    case "bool":
      return /* @__PURE__ */ f.jsx(Wi, { id: l, label: s, required: u, checked: d, onBlur: i });
    case "list":
    case "map":
      return /* @__PURE__ */ f.jsx(
        Ai,
        {
          id: l,
          label: s,
          invalid: !t,
          errortext: r,
          required: u,
          value: JSON.stringify(d),
          onChange: (y) => a(y.target.value),
          onBlur: i
        }
      );
    case "secret":
      return /* @__PURE__ */ f.jsx(la, { id: l, label: s, required: u, value: c, onChange: i });
    case "int":
      p = "number";
      break;
  }
  return /* @__PURE__ */ f.jsx(Xe, { id: l, type: p, label: s, value: d, required: u, onBlur: i });
}, ua = (e) => (e.submitMessage.variant || (e.submitMessage.variant = e.submitMessage.ok ? "success" : "error"), /* @__PURE__ */ f.jsx(
  Ti,
  {
    dismissible: !0,
    onDismiss: e.onMessageDismiss,
    variant: e.submitMessage.variant,
    text: e.submitMessage.message
  }
)), ca = (e, t) => {
  var a;
  let n, r;
  if (((a = e.target) == null ? void 0 : a.type) == null)
    throw new Error("Unexpected form change event: " + JSON.stringify(e));
  const o = e.target.id.split(".").slice(1).join(".");
  switch (e.target.type) {
    case "checkbox":
      n = e.target.checked;
      break;
    case "number":
      n = parseInt(e.target.value);
      break;
    case "textarea":
      n = JSON.parse(e.target.value);
      break;
    case "secret-select":
      r = JSON.parse(e.target.value);
      break;
    default:
      n = e.target.value;
      break;
  }
  if (e.target.id.startsWith("metadata."))
    return {
      ...t,
      metadata: {
        ...t.metadata,
        [o]: n
      }
    };
  if (e.target.id.startsWith("spec."))
    return {
      ...t,
      spec: {
        ...t.spec,
        [o]: n
      }
    };
  if (e.target.id.startsWith("optionValues.")) {
    let i = !1, l = { name: o };
    n != null && (l.value = n), r != null && (l.valueFrom = r);
    let s;
    return s = {
      ...t,
      spec: {
        ...t.spec,
        optionValues: t.spec.optionValues.map((u) => u.name == l.name ? (i = !0, l) : u)
      }
    }, i || (s = {
      ...t,
      spec: {
        ...t.spec,
        optionValues: [...t.spec.optionValues, l]
      }
    }), s;
  }
  return t;
}, Hn = (e) => ({
  metadata: e.metadata,
  kind: "Plugin",
  apiVersion: "greenhouse.sap/v1alpha1",
  spec: e.spec
}), da = (e) => ({
  name: e.metadata.name,
  namespace: "",
  labels: {}
}), ma = (e) => {
  var r, o, a, i;
  let t = [], n = {
    pluginDefinition: e.metadata.name,
    displayName: ((r = e.spec) == null ? void 0 : r.displayName) ?? ((o = e.metadata) == null ? void 0 : o.name),
    clusterName: "",
    disabled: !1,
    optionValues: t
  };
  return (i = (a = e.spec) == null ? void 0 : a.options) == null || i.forEach((l) => {
    l.type != "secret" && l.default && n.optionValues.push({
      name: l.name,
      value: l.default
    });
  }), n;
}, qn = (e) => {
  var n;
  return (n = e.spec) != null && n.clusterName && delete e.spec.clusterName, {
    metadata: e.metadata,
    kind: "PluginPreset",
    apiVersion: "greenhouse.sap/v1alpha1",
    spec: {
      plugin: e.spec,
      clusterSelector: {
        matchLabels: e.labelSelector
      }
    }
  };
}, pa = (e) => {
  var N, H, L, K, Z, te, ae, g, oe, le, b;
  const t = _((T) => T.namespace);
  _((T) => T.showEditForm);
  const n = _((T) => T.setShowEditForm), r = _((T) => T.editFormState), o = _((T) => T.setEditFormState), a = r == pe.PLUGIN_EDIT || r == pe.PLUGIN_PRESET_EDIT, { setPanel: i } = Te(), l = r == pe.PLUGIN_PRESET_CREATE || r == pe.PLUGIN_PRESET_EDIT, s = _((T) => T.editFormData), u = _((T) => T.setEditFormData), { createPlugin: d, updatePlugin: c, deletePlugin: p } = Wr(), { getPluginPreset: m, createPluginPreset: h, updatePluginPreset: y, deletePluginPreset: v } = Qi(), k = () => {
    l ? o(a ? pe.PLUGIN_EDIT : pe.PLUGIN_CREATE) : s.metadata.labels && s.metadata.labels["greenhouse.sap/pluginpreset"] ? o(pe.PLUGIN_PRESET_EDIT) : o(pe.PLUGIN_PRESET_CREATE);
  }, [E, x] = re.useState(!1);
  re.useEffect(() => {
    l && !s.labelSelector && u({
      ...s,
      labelSelector: {
        "": ""
      }
    });
  }, [l, s.labelSelector]), re.useEffect(() => {
    s.metadata && s.metadata.labels && s.metadata.labels["greenhouse.sap/pluginpreset"] && (C({
      message: "This Plugin is part of a Preset. You are now editing the Preset!",
      ok: !1,
      variant: "warning"
    }), o(pe.PLUGIN_PRESET_EDIT), m({
      metadata: {
        name: s.metadata.labels["greenhouse.sap/pluginpreset"],
        namespace: t
      },
      kind: "PluginPreset"
    }).then((J) => {
      J.ok ? u({
        metadata: J.response.metadata,
        spec: J.response.spec.plugin,
        labelSelector: J.response.spec.clusterSelector.matchLabels
      }) : (o(pe.PLUGIN_PRESET_CREATE), C({
        message: "This Plugin seems to be part of a Preset, but the Preset could not be found. You are now creating a new Preset!",
        ok: !1,
        variant: "warning"
      }));
    }).catch((J) => {
      C({
        message: J.message,
        ok: !1,
        variant: "error"
      });
    }), u({
      ...s,
      metadata: {
        ...s.metadata,
        name: s.metadata.labels["greenhouse.sap/pluginpreset"]
      }
    }));
  }, [(N = s.metadata) == null ? void 0 : N.labels]);
  const P = l ? "Plugin Preset" : "Plugin", [j, C] = re.useState({ message: "", ok: !1 }), R = async () => {
    if (l) {
      let T = qn(s), J;
      r == pe.PLUGIN_PRESET_CREATE ? J = h({
        ...T,
        metadata: {
          name: T.metadata.name
        }
      }) : J = y(T), await J.then(async (G) => {
        C({ message: G.message, ok: G.ok });
      });
    } else {
      let T = Hn(s);
      await (a ? c(T) : d({ ...T, metadata: { name: T.metadata.name } })).then(async (G) => {
        C({ message: G.message, ok: G.ok });
      });
    }
  }, B = () => {
    x(!0);
  }, $ = async () => {
    if (x(!1), l) {
      let T = await v(qn(s));
      C({ message: T.message, ok: T.ok });
    } else {
      let T = await p(Hn(s));
      C({ message: T.message, ok: T.ok });
    }
  }, w = (T) => {
    T && (n(!1), console.log("I want to open the details for my plugin now :)"));
  }, z = (T) => {
    try {
      u(ca(T, s));
    } catch (J) {
      console.error(J);
    }
  }, A = (T) => {
    u({
      ...s,
      labelSelector: T
    });
  };
  return /* @__PURE__ */ f.jsxs(Ne, { px: !1, py: !0, children: [
    j.message != "" && /* @__PURE__ */ f.jsx(Me, { children: /* @__PURE__ */ f.jsx(
      ua,
      {
        submitMessage: j,
        onMessageDismiss: () => w(j.ok)
      }
    ) }),
    s && !j.ok && /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
      /* @__PURE__ */ f.jsxs(yi, { title: ((H = s.spec) == null ? void 0 : H.displayName) ?? ((L = s.metadata) == null ? void 0 : L.name), children: [
        /* @__PURE__ */ f.jsxs(on, { title: "General", children: [
          /* @__PURE__ */ f.jsx(Me, { children: /* @__PURE__ */ f.jsx(
            ki,
            {
              id: "switch-plugin-preset",
              label: "Make Plugin Preset",
              on: l,
              onChange: k,
              onClick: k
            }
          ) }),
          /* @__PURE__ */ f.jsx(Me, { children: /* @__PURE__ */ f.jsx(
            Xe,
            {
              id: "spec.displayName",
              label: "Display Name",
              placeholder: "The Display Name for this Plugin Instance",
              value: (K = s == null ? void 0 : s.spec) == null ? void 0 : K.displayName,
              onBlur: z
            }
          ) }),
          /* @__PURE__ */ f.jsx(Me, { children: /* @__PURE__ */ f.jsx(
            Xe,
            {
              id: "metadata.name",
              label: "Name",
              placeholder: "Name of this Plugin Instance",
              ...a && { disabled: !0 },
              value: (Z = s.metadata) == null ? void 0 : Z.name,
              onBlur: z
            }
          ) }),
          /* @__PURE__ */ f.jsxs(Me, { children: [
            l && /* @__PURE__ */ f.jsx(
              ia,
              {
                data: s.labelSelector,
                setData: A,
                title: "Cluster Label Selector",
                dataName: "Label"
              }
            ),
            !l && /* @__PURE__ */ f.jsx(
              aa,
              {
                id: "spec.clusterName",
                placeholder: "The Cluster this Plugin is to be deployed to.",
                label: "Cluster",
                defaultValue: (te = s.spec) == null ? void 0 : te.clusterName,
                onChange: z
              }
            )
          ] }),
          /* @__PURE__ */ f.jsx(Me, { children: /* @__PURE__ */ f.jsx(
            Xe,
            {
              id: "spec.releaseNamespace",
              label: "Release Namespace",
              placeholder: `The namespace in the remote cluster to which the backend is deployed to. Defaults to ${t}.`,
              value: (ae = s.spec) == null ? void 0 : ae.releaseNamespace,
              onBlur: z
            }
          ) })
        ] }),
        ((oe = (g = e.pluginDefinition.spec) == null ? void 0 : g.options) == null ? void 0 : oe.length) && /* @__PURE__ */ f.jsx(on, { title: "Options", children: (b = (le = e.pluginDefinition.spec) == null ? void 0 : le.options) == null ? void 0 : b.map((T, J) => {
          var fe, ce;
          let G = (ce = (fe = s.spec) == null ? void 0 : fe.optionValues) == null ? void 0 : ce.find((ge) => ge.name == T.name);
          return /* @__PURE__ */ f.jsxs(Me, { children: [
            /* @__PURE__ */ f.jsx("p", { style: { color: "text-theme-light" }, children: T.description }),
            /* @__PURE__ */ f.jsx(
              sa,
              {
                pluginDefinitionOption: T,
                pluginOptionValue: G,
                onChange: z
              }
            )
          ] }, J);
        }) })
      ] }),
      /* @__PURE__ */ f.jsxs(Nn, { children: [
        a ? /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
          /* @__PURE__ */ f.jsxs(Oe, { onClick: B, variant: "primary-danger", children: [
            "Delete ",
            P
          ] }),
          E && /* @__PURE__ */ f.jsx(
            wi,
            {
              cancelButtonLabel: "Cancel",
              confirmButtonLabel: "Proceed irreversible deletion",
              onCancel: () => x(!1),
              onConfirm: $,
              open: !0,
              title: "Confirmation needed",
              children: /* @__PURE__ */ f.jsx("p", { children: "Proceeding will result in the permanent loss of the plugin." })
            }
          )
        ] }) : /* @__PURE__ */ f.jsx(f.Fragment, {}),
        /* @__PURE__ */ f.jsx(Oe, { onClick: R, variant: "primary", children: a ? `Update ${P}` : `Create ${P}` })
      ] })
    ] }),
    j.ok && /* @__PURE__ */ f.jsx(Nn, { children: /* @__PURE__ */ f.jsx(Oe, { onClick: () => i(null), children: "Close" }) })
  ] });
};
function ha(e, t) {
  const n = {};
  return (e[e.length - 1] === "" ? [...e, ""] : e).join(
    (n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")
  ).trim();
}
const fa = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, ga = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, ba = {};
function Wn(e, t) {
  return (ba.jsx ? ga : fa).test(e);
}
const ya = /[ \t\n\f\r]/g;
function ka(e) {
  return typeof e == "object" ? e.type === "text" ? Gn(e.value) : !1 : Gn(e);
}
function Gn(e) {
  return e.replace(ya, "") === "";
}
class ht {
  /**
   * @constructor
   * @param {Properties} property
   * @param {Normal} normal
   * @param {string} [space]
   */
  constructor(t, n, r) {
    this.property = t, this.normal = n, r && (this.space = r);
  }
}
ht.prototype.property = {};
ht.prototype.normal = {};
ht.prototype.space = null;
function Yr(e, t) {
  const n = {}, r = {};
  let o = -1;
  for (; ++o < e.length; )
    Object.assign(n, e[o].property), Object.assign(r, e[o].normal);
  return new ht(n, r, t);
}
function sn(e) {
  return e.toLowerCase();
}
class Se {
  /**
   * @constructor
   * @param {string} property
   * @param {string} attribute
   */
  constructor(t, n) {
    this.property = t, this.attribute = n;
  }
}
Se.prototype.space = null;
Se.prototype.boolean = !1;
Se.prototype.booleanish = !1;
Se.prototype.overloadedBoolean = !1;
Se.prototype.number = !1;
Se.prototype.commaSeparated = !1;
Se.prototype.spaceSeparated = !1;
Se.prototype.commaOrSpaceSeparated = !1;
Se.prototype.mustUseProperty = !1;
Se.prototype.defined = !1;
let wa = 0;
const O = Ge(), ie = Ge(), Qr = Ge(), D = Ge(), X = Ge(), Ze = Ge(), ke = Ge();
function Ge() {
  return 2 ** ++wa;
}
const un = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: O,
  booleanish: ie,
  commaOrSpaceSeparated: ke,
  commaSeparated: Ze,
  number: D,
  overloadedBoolean: Qr,
  spaceSeparated: X
}, Symbol.toStringTag, { value: "Module" })), Ut = Object.keys(un);
class wn extends Se {
  /**
   * @constructor
   * @param {string} property
   * @param {string} attribute
   * @param {number|null} [mask]
   * @param {string} [space]
   */
  constructor(t, n, r, o) {
    let a = -1;
    if (super(t, n), Jn(this, "space", o), typeof r == "number")
      for (; ++a < Ut.length; ) {
        const i = Ut[a];
        Jn(this, Ut[a], (r & un[i]) === un[i]);
      }
  }
}
wn.prototype.defined = !0;
function Jn(e, t, n) {
  n && (e[t] = n);
}
const xa = {}.hasOwnProperty;
function et(e) {
  const t = {}, n = {};
  let r;
  for (r in e.properties)
    if (xa.call(e.properties, r)) {
      const o = e.properties[r], a = new wn(
        r,
        e.transform(e.attributes || {}, r),
        o,
        e.space
      );
      e.mustUseProperty && e.mustUseProperty.includes(r) && (a.mustUseProperty = !0), t[r] = a, n[sn(r)] = r, n[sn(a.attribute)] = r;
    }
  return new ht(t, n, e.space);
}
const Xr = et({
  space: "xlink",
  transform(e, t) {
    return "xlink:" + t.slice(5).toLowerCase();
  },
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  }
}), Zr = et({
  space: "xml",
  transform(e, t) {
    return "xml:" + t.slice(3).toLowerCase();
  },
  properties: { xmlLang: null, xmlBase: null, xmlSpace: null }
});
function eo(e, t) {
  return t in e ? e[t] : t;
}
function to(e, t) {
  return eo(e, t.toLowerCase());
}
const no = et({
  space: "xmlns",
  attributes: { xmlnsxlink: "xmlns:xlink" },
  transform: to,
  properties: { xmlns: null, xmlnsXLink: null }
}), ro = et({
  transform(e, t) {
    return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
  },
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: ie,
    ariaAutoComplete: null,
    ariaBusy: ie,
    ariaChecked: ie,
    ariaColCount: D,
    ariaColIndex: D,
    ariaColSpan: D,
    ariaControls: X,
    ariaCurrent: null,
    ariaDescribedBy: X,
    ariaDetails: null,
    ariaDisabled: ie,
    ariaDropEffect: X,
    ariaErrorMessage: null,
    ariaExpanded: ie,
    ariaFlowTo: X,
    ariaGrabbed: ie,
    ariaHasPopup: null,
    ariaHidden: ie,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: X,
    ariaLevel: D,
    ariaLive: null,
    ariaModal: ie,
    ariaMultiLine: ie,
    ariaMultiSelectable: ie,
    ariaOrientation: null,
    ariaOwns: X,
    ariaPlaceholder: null,
    ariaPosInSet: D,
    ariaPressed: ie,
    ariaReadOnly: ie,
    ariaRelevant: null,
    ariaRequired: ie,
    ariaRoleDescription: X,
    ariaRowCount: D,
    ariaRowIndex: D,
    ariaRowSpan: D,
    ariaSelected: ie,
    ariaSetSize: D,
    ariaSort: null,
    ariaValueMax: D,
    ariaValueMin: D,
    ariaValueNow: D,
    ariaValueText: null,
    role: null
  }
}), va = et({
  space: "html",
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  transform: to,
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: Ze,
    acceptCharset: X,
    accessKey: X,
    action: null,
    allow: null,
    allowFullScreen: O,
    allowPaymentRequest: O,
    allowUserMedia: O,
    alt: null,
    as: null,
    async: O,
    autoCapitalize: null,
    autoComplete: X,
    autoFocus: O,
    autoPlay: O,
    blocking: X,
    capture: null,
    charSet: null,
    checked: O,
    cite: null,
    className: X,
    cols: D,
    colSpan: null,
    content: null,
    contentEditable: ie,
    controls: O,
    controlsList: X,
    coords: D | Ze,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: O,
    defer: O,
    dir: null,
    dirName: null,
    disabled: O,
    download: Qr,
    draggable: ie,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: O,
    formTarget: null,
    headers: X,
    height: D,
    hidden: O,
    high: D,
    href: null,
    hrefLang: null,
    htmlFor: X,
    httpEquiv: X,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: O,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: O,
    itemId: null,
    itemProp: X,
    itemRef: X,
    itemScope: O,
    itemType: X,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: O,
    low: D,
    manifest: null,
    max: null,
    maxLength: D,
    media: null,
    method: null,
    min: null,
    minLength: D,
    multiple: O,
    muted: O,
    name: null,
    nonce: null,
    noModule: O,
    noValidate: O,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforeMatch: null,
    onBeforePrint: null,
    onBeforeToggle: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextLost: null,
    onContextMenu: null,
    onContextRestored: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onScrollEnd: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: O,
    optimum: D,
    pattern: null,
    ping: X,
    placeholder: null,
    playsInline: O,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: O,
    referrerPolicy: null,
    rel: X,
    required: O,
    reversed: O,
    rows: D,
    rowSpan: D,
    sandbox: X,
    scope: null,
    scoped: O,
    seamless: O,
    selected: O,
    shadowRootClonable: O,
    shadowRootDelegatesFocus: O,
    shadowRootMode: null,
    shape: null,
    size: D,
    sizes: null,
    slot: null,
    span: D,
    spellCheck: ie,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: D,
    step: null,
    style: null,
    tabIndex: D,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: O,
    useMap: null,
    value: ie,
    width: D,
    wrap: null,
    writingSuggestions: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: X,
    // `<object>`. List of URIs to archives
    axis: null,
    // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null,
    // `<body>`. Use CSS `background-image` instead
    bgColor: null,
    // `<body>` and table elements. Use CSS `background-color` instead
    border: D,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: D,
    // `<body>`
    cellPadding: null,
    // `<table>`
    cellSpacing: null,
    // `<table>`
    char: null,
    // Several table elements. When `align=char`, sets the character to align on
    charOff: null,
    // Several table elements. When `char`, offsets the alignment
    classId: null,
    // `<object>`
    clear: null,
    // `<br>`. Use CSS `clear` instead
    code: null,
    // `<object>`
    codeBase: null,
    // `<object>`
    codeType: null,
    // `<object>`
    color: null,
    // `<font>` and `<hr>`. Use CSS instead
    compact: O,
    // Lists. Use CSS to reduce space between items instead
    declare: O,
    // `<object>`
    event: null,
    // `<script>`
    face: null,
    // `<font>`. Use CSS instead
    frame: null,
    // `<table>`
    frameBorder: null,
    // `<iframe>`. Use CSS `border` instead
    hSpace: D,
    // `<img>` and `<object>`
    leftMargin: D,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: D,
    // `<body>`
    marginWidth: D,
    // `<body>`
    noResize: O,
    // `<frame>`
    noHref: O,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: O,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: O,
    // `<td>` and `<th>`
    object: null,
    // `<applet>`
    profile: null,
    // `<head>`
    prompt: null,
    // `<isindex>`
    rev: null,
    // `<link>`
    rightMargin: D,
    // `<body>`
    rules: null,
    // `<table>`
    scheme: null,
    // `<meta>`
    scrolling: ie,
    // `<frame>`. Use overflow in the child context
    standby: null,
    // `<object>`
    summary: null,
    // `<table>`
    text: null,
    // `<body>`. Use CSS `color` instead
    topMargin: D,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: D,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: O,
    disableRemotePlayback: O,
    prefix: null,
    property: null,
    results: D,
    security: null,
    unselectable: null
  }
}), Ca = et({
  space: "svg",
  attributes: {
    accentHeight: "accent-height",
    alignmentBaseline: "alignment-baseline",
    arabicForm: "arabic-form",
    baselineShift: "baseline-shift",
    capHeight: "cap-height",
    className: "class",
    clipPath: "clip-path",
    clipRule: "clip-rule",
    colorInterpolation: "color-interpolation",
    colorInterpolationFilters: "color-interpolation-filters",
    colorProfile: "color-profile",
    colorRendering: "color-rendering",
    crossOrigin: "crossorigin",
    dataType: "datatype",
    dominantBaseline: "dominant-baseline",
    enableBackground: "enable-background",
    fillOpacity: "fill-opacity",
    fillRule: "fill-rule",
    floodColor: "flood-color",
    floodOpacity: "flood-opacity",
    fontFamily: "font-family",
    fontSize: "font-size",
    fontSizeAdjust: "font-size-adjust",
    fontStretch: "font-stretch",
    fontStyle: "font-style",
    fontVariant: "font-variant",
    fontWeight: "font-weight",
    glyphName: "glyph-name",
    glyphOrientationHorizontal: "glyph-orientation-horizontal",
    glyphOrientationVertical: "glyph-orientation-vertical",
    hrefLang: "hreflang",
    horizAdvX: "horiz-adv-x",
    horizOriginX: "horiz-origin-x",
    horizOriginY: "horiz-origin-y",
    imageRendering: "image-rendering",
    letterSpacing: "letter-spacing",
    lightingColor: "lighting-color",
    markerEnd: "marker-end",
    markerMid: "marker-mid",
    markerStart: "marker-start",
    navDown: "nav-down",
    navDownLeft: "nav-down-left",
    navDownRight: "nav-down-right",
    navLeft: "nav-left",
    navNext: "nav-next",
    navPrev: "nav-prev",
    navRight: "nav-right",
    navUp: "nav-up",
    navUpLeft: "nav-up-left",
    navUpRight: "nav-up-right",
    onAbort: "onabort",
    onActivate: "onactivate",
    onAfterPrint: "onafterprint",
    onBeforePrint: "onbeforeprint",
    onBegin: "onbegin",
    onCancel: "oncancel",
    onCanPlay: "oncanplay",
    onCanPlayThrough: "oncanplaythrough",
    onChange: "onchange",
    onClick: "onclick",
    onClose: "onclose",
    onCopy: "oncopy",
    onCueChange: "oncuechange",
    onCut: "oncut",
    onDblClick: "ondblclick",
    onDrag: "ondrag",
    onDragEnd: "ondragend",
    onDragEnter: "ondragenter",
    onDragExit: "ondragexit",
    onDragLeave: "ondragleave",
    onDragOver: "ondragover",
    onDragStart: "ondragstart",
    onDrop: "ondrop",
    onDurationChange: "ondurationchange",
    onEmptied: "onemptied",
    onEnd: "onend",
    onEnded: "onended",
    onError: "onerror",
    onFocus: "onfocus",
    onFocusIn: "onfocusin",
    onFocusOut: "onfocusout",
    onHashChange: "onhashchange",
    onInput: "oninput",
    onInvalid: "oninvalid",
    onKeyDown: "onkeydown",
    onKeyPress: "onkeypress",
    onKeyUp: "onkeyup",
    onLoad: "onload",
    onLoadedData: "onloadeddata",
    onLoadedMetadata: "onloadedmetadata",
    onLoadStart: "onloadstart",
    onMessage: "onmessage",
    onMouseDown: "onmousedown",
    onMouseEnter: "onmouseenter",
    onMouseLeave: "onmouseleave",
    onMouseMove: "onmousemove",
    onMouseOut: "onmouseout",
    onMouseOver: "onmouseover",
    onMouseUp: "onmouseup",
    onMouseWheel: "onmousewheel",
    onOffline: "onoffline",
    onOnline: "ononline",
    onPageHide: "onpagehide",
    onPageShow: "onpageshow",
    onPaste: "onpaste",
    onPause: "onpause",
    onPlay: "onplay",
    onPlaying: "onplaying",
    onPopState: "onpopstate",
    onProgress: "onprogress",
    onRateChange: "onratechange",
    onRepeat: "onrepeat",
    onReset: "onreset",
    onResize: "onresize",
    onScroll: "onscroll",
    onSeeked: "onseeked",
    onSeeking: "onseeking",
    onSelect: "onselect",
    onShow: "onshow",
    onStalled: "onstalled",
    onStorage: "onstorage",
    onSubmit: "onsubmit",
    onSuspend: "onsuspend",
    onTimeUpdate: "ontimeupdate",
    onToggle: "ontoggle",
    onUnload: "onunload",
    onVolumeChange: "onvolumechange",
    onWaiting: "onwaiting",
    onZoom: "onzoom",
    overlinePosition: "overline-position",
    overlineThickness: "overline-thickness",
    paintOrder: "paint-order",
    panose1: "panose-1",
    pointerEvents: "pointer-events",
    referrerPolicy: "referrerpolicy",
    renderingIntent: "rendering-intent",
    shapeRendering: "shape-rendering",
    stopColor: "stop-color",
    stopOpacity: "stop-opacity",
    strikethroughPosition: "strikethrough-position",
    strikethroughThickness: "strikethrough-thickness",
    strokeDashArray: "stroke-dasharray",
    strokeDashOffset: "stroke-dashoffset",
    strokeLineCap: "stroke-linecap",
    strokeLineJoin: "stroke-linejoin",
    strokeMiterLimit: "stroke-miterlimit",
    strokeOpacity: "stroke-opacity",
    strokeWidth: "stroke-width",
    tabIndex: "tabindex",
    textAnchor: "text-anchor",
    textDecoration: "text-decoration",
    textRendering: "text-rendering",
    transformOrigin: "transform-origin",
    typeOf: "typeof",
    underlinePosition: "underline-position",
    underlineThickness: "underline-thickness",
    unicodeBidi: "unicode-bidi",
    unicodeRange: "unicode-range",
    unitsPerEm: "units-per-em",
    vAlphabetic: "v-alphabetic",
    vHanging: "v-hanging",
    vIdeographic: "v-ideographic",
    vMathematical: "v-mathematical",
    vectorEffect: "vector-effect",
    vertAdvY: "vert-adv-y",
    vertOriginX: "vert-origin-x",
    vertOriginY: "vert-origin-y",
    wordSpacing: "word-spacing",
    writingMode: "writing-mode",
    xHeight: "x-height",
    // These were camelcased in Tiny. Now lowercased in SVG 2
    playbackOrder: "playbackorder",
    timelineBegin: "timelinebegin"
  },
  transform: eo,
  properties: {
    about: ke,
    accentHeight: D,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: D,
    amplitude: D,
    arabicForm: null,
    ascent: D,
    attributeName: null,
    attributeType: null,
    azimuth: D,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: D,
    by: null,
    calcMode: null,
    capHeight: D,
    className: X,
    clip: null,
    clipPath: null,
    clipPathUnits: null,
    clipRule: null,
    color: null,
    colorInterpolation: null,
    colorInterpolationFilters: null,
    colorProfile: null,
    colorRendering: null,
    content: null,
    contentScriptType: null,
    contentStyleType: null,
    crossOrigin: null,
    cursor: null,
    cx: null,
    cy: null,
    d: null,
    dataType: null,
    defaultAction: null,
    descent: D,
    diffuseConstant: D,
    direction: null,
    display: null,
    dur: null,
    divisor: D,
    dominantBaseline: null,
    download: O,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: D,
    enableBackground: null,
    end: null,
    event: null,
    exponent: D,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: D,
    fillRule: null,
    filter: null,
    filterRes: null,
    filterUnits: null,
    floodColor: null,
    floodOpacity: null,
    focusable: null,
    focusHighlight: null,
    fontFamily: null,
    fontSize: null,
    fontSizeAdjust: null,
    fontStretch: null,
    fontStyle: null,
    fontVariant: null,
    fontWeight: null,
    format: null,
    fr: null,
    from: null,
    fx: null,
    fy: null,
    g1: Ze,
    g2: Ze,
    glyphName: Ze,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: D,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: D,
    horizOriginX: D,
    horizOriginY: D,
    id: null,
    ideographic: D,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: D,
    k: D,
    k1: D,
    k2: D,
    k3: D,
    k4: D,
    kernelMatrix: ke,
    kernelUnitLength: null,
    keyPoints: null,
    // SEMI_COLON_SEPARATED
    keySplines: null,
    // SEMI_COLON_SEPARATED
    keyTimes: null,
    // SEMI_COLON_SEPARATED
    kerning: null,
    lang: null,
    lengthAdjust: null,
    letterSpacing: null,
    lightingColor: null,
    limitingConeAngle: D,
    local: null,
    markerEnd: null,
    markerMid: null,
    markerStart: null,
    markerHeight: null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskUnits: null,
    mathematical: null,
    max: null,
    media: null,
    mediaCharacterEncoding: null,
    mediaContentEncodings: null,
    mediaSize: D,
    mediaTime: null,
    method: null,
    min: null,
    mode: null,
    name: null,
    navDown: null,
    navDownLeft: null,
    navDownRight: null,
    navLeft: null,
    navNext: null,
    navPrev: null,
    navRight: null,
    navUp: null,
    navUpLeft: null,
    navUpRight: null,
    numOctaves: null,
    observer: null,
    offset: null,
    onAbort: null,
    onActivate: null,
    onAfterPrint: null,
    onBeforePrint: null,
    onBegin: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnd: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFocusIn: null,
    onFocusOut: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onMessage: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onMouseWheel: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRepeat: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onShow: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onZoom: null,
    opacity: null,
    operator: null,
    order: null,
    orient: null,
    orientation: null,
    origin: null,
    overflow: null,
    overlay: null,
    overlinePosition: D,
    overlineThickness: D,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: D,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: X,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: D,
    pointsAtY: D,
    pointsAtZ: D,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: ke,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: ke,
    rev: ke,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: ke,
    requiredFeatures: ke,
    requiredFonts: ke,
    requiredFormats: ke,
    resource: null,
    restart: null,
    result: null,
    rotate: null,
    rx: null,
    ry: null,
    scale: null,
    seed: null,
    shapeRendering: null,
    side: null,
    slope: null,
    snapshotTime: null,
    specularConstant: D,
    specularExponent: D,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: D,
    strikethroughThickness: D,
    string: null,
    stroke: null,
    strokeDashArray: ke,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: D,
    strokeOpacity: D,
    strokeWidth: null,
    style: null,
    surfaceScale: D,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: ke,
    tabIndex: D,
    tableValues: null,
    target: null,
    targetX: D,
    targetY: D,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: ke,
    to: null,
    transform: null,
    transformOrigin: null,
    u1: null,
    u2: null,
    underlinePosition: D,
    underlineThickness: D,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: D,
    values: null,
    vAlphabetic: D,
    vMathematical: D,
    vectorEffect: null,
    vHanging: D,
    vIdeographic: D,
    version: null,
    vertAdvY: D,
    vertOriginX: D,
    vertOriginY: D,
    viewBox: null,
    viewTarget: null,
    visibility: null,
    width: null,
    widths: null,
    wordSpacing: null,
    writingMode: null,
    x: null,
    x1: null,
    x2: null,
    xChannelSelector: null,
    xHeight: D,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  }
}), Sa = /^data[-\w.:]+$/i, Kn = /-[a-z]/g, Ea = /[A-Z]/g;
function Pa(e, t) {
  const n = sn(t);
  let r = t, o = Se;
  if (n in e.normal)
    return e.property[e.normal[n]];
  if (n.length > 4 && n.slice(0, 4) === "data" && Sa.test(t)) {
    if (t.charAt(4) === "-") {
      const a = t.slice(5).replace(Kn, Ia);
      r = "data" + a.charAt(0).toUpperCase() + a.slice(1);
    } else {
      const a = t.slice(4);
      if (!Kn.test(a)) {
        let i = a.replace(Ea, Da);
        i.charAt(0) !== "-" && (i = "-" + i), t = "data" + i;
      }
    }
    o = wn;
  }
  return new o(r, t);
}
function Da(e) {
  return "-" + e.toLowerCase();
}
function Ia(e) {
  return e.charAt(1).toUpperCase();
}
const za = {
  classId: "classID",
  dataType: "datatype",
  itemId: "itemID",
  strokeDashArray: "strokeDasharray",
  strokeDashOffset: "strokeDashoffset",
  strokeLineCap: "strokeLinecap",
  strokeLineJoin: "strokeLinejoin",
  strokeMiterLimit: "strokeMiterlimit",
  typeOf: "typeof",
  xLinkActuate: "xlinkActuate",
  xLinkArcRole: "xlinkArcrole",
  xLinkHref: "xlinkHref",
  xLinkRole: "xlinkRole",
  xLinkShow: "xlinkShow",
  xLinkTitle: "xlinkTitle",
  xLinkType: "xlinkType",
  xmlnsXLink: "xmlnsXlink"
}, ja = Yr([Zr, Xr, no, ro, va], "html"), xn = Yr([Zr, Xr, no, ro, Ca], "svg");
function Aa(e) {
  return e.join(" ").trim();
}
var oo = {}, Yn = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, Ta = /\n/g, Fa = /^\s*/, La = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, Ra = /^:\s*/, Ma = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, Oa = /^[;\s]*/, Na = /^\s+|\s+$/g, _a = `
`, Qn = "/", Xn = "*", Ve = "", Ba = "comment", $a = "declaration", Ua = function(e, t) {
  if (typeof e != "string")
    throw new TypeError("First argument must be a string");
  if (!e) return [];
  t = t || {};
  var n = 1, r = 1;
  function o(h) {
    var y = h.match(Ta);
    y && (n += y.length);
    var v = h.lastIndexOf(_a);
    r = ~v ? h.length - v : r + h.length;
  }
  function a() {
    var h = { line: n, column: r };
    return function(y) {
      return y.position = new i(h), u(), y;
    };
  }
  function i(h) {
    this.start = h, this.end = { line: n, column: r }, this.source = t.source;
  }
  i.prototype.content = e;
  function l(h) {
    var y = new Error(
      t.source + ":" + n + ":" + r + ": " + h
    );
    if (y.reason = h, y.filename = t.source, y.line = n, y.column = r, y.source = e, !t.silent) throw y;
  }
  function s(h) {
    var y = h.exec(e);
    if (y) {
      var v = y[0];
      return o(v), e = e.slice(v.length), y;
    }
  }
  function u() {
    s(Fa);
  }
  function d(h) {
    var y;
    for (h = h || []; y = c(); )
      y !== !1 && h.push(y);
    return h;
  }
  function c() {
    var h = a();
    if (!(Qn != e.charAt(0) || Xn != e.charAt(1))) {
      for (var y = 2; Ve != e.charAt(y) && (Xn != e.charAt(y) || Qn != e.charAt(y + 1)); )
        ++y;
      if (y += 2, Ve === e.charAt(y - 1))
        return l("End of comment missing");
      var v = e.slice(2, y - 2);
      return r += 2, o(v), e = e.slice(y), r += 2, h({
        type: Ba,
        comment: v
      });
    }
  }
  function p() {
    var h = a(), y = s(La);
    if (y) {
      if (c(), !s(Ra)) return l("property missing ':'");
      var v = s(Ma), k = h({
        type: $a,
        property: Zn(y[0].replace(Yn, Ve)),
        value: v ? Zn(v[0].replace(Yn, Ve)) : Ve
      });
      return s(Oa), k;
    }
  }
  function m() {
    var h = [];
    d(h);
    for (var y; y = p(); )
      y !== !1 && (h.push(y), d(h));
    return h;
  }
  return u(), m();
};
function Zn(e) {
  return e ? e.replace(Na, Ve) : Ve;
}
var Va = Un && Un.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(oo, "__esModule", { value: !0 });
var er = oo.default = qa, Ha = Va(Ua);
function qa(e, t) {
  var n = null;
  if (!e || typeof e != "string")
    return n;
  var r = (0, Ha.default)(e), o = typeof t == "function";
  return r.forEach(function(a) {
    if (a.type === "declaration") {
      var i = a.property, l = a.value;
      o ? t(i, l, a) : l && (n = n || {}, n[i] = l);
    }
  }), n;
}
const Wa = er.default || er, io = ao("end"), vn = ao("start");
function ao(e) {
  return t;
  function t(n) {
    const r = n && n.position && n.position[e] || {};
    if (typeof r.line == "number" && r.line > 0 && typeof r.column == "number" && r.column > 0)
      return {
        line: r.line,
        column: r.column,
        offset: typeof r.offset == "number" && r.offset > -1 ? r.offset : void 0
      };
  }
}
function Ga(e) {
  const t = vn(e), n = io(e);
  if (t && n)
    return { start: t, end: n };
}
function dt(e) {
  return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? tr(e.position) : "start" in e || "end" in e ? tr(e) : "line" in e || "column" in e ? cn(e) : "";
}
function cn(e) {
  return nr(e && e.line) + ":" + nr(e && e.column);
}
function tr(e) {
  return cn(e && e.start) + "-" + cn(e && e.end);
}
function nr(e) {
  return e && typeof e == "number" ? e : 1;
}
class me extends Error {
  /**
   * Create a message for `reason`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {Options | null | undefined} [options]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | Options | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns
   *   Instance of `VFileMessage`.
   */
  // eslint-disable-next-line complexity
  constructor(t, n, r) {
    super(), typeof n == "string" && (r = n, n = void 0);
    let o = "", a = {}, i = !1;
    if (n && ("line" in n && "column" in n ? a = { place: n } : "start" in n && "end" in n ? a = { place: n } : "type" in n ? a = {
      ancestors: [n],
      place: n.position
    } : a = { ...n }), typeof t == "string" ? o = t : !a.cause && t && (i = !0, o = t.message, a.cause = t), !a.ruleId && !a.source && typeof r == "string") {
      const s = r.indexOf(":");
      s === -1 ? a.ruleId = r : (a.source = r.slice(0, s), a.ruleId = r.slice(s + 1));
    }
    if (!a.place && a.ancestors && a.ancestors) {
      const s = a.ancestors[a.ancestors.length - 1];
      s && (a.place = s.position);
    }
    const l = a.place && "start" in a.place ? a.place.start : a.place;
    this.ancestors = a.ancestors || void 0, this.cause = a.cause || void 0, this.column = l ? l.column : void 0, this.fatal = void 0, this.file, this.message = o, this.line = l ? l.line : void 0, this.name = dt(a.place) || "1:1", this.place = a.place || void 0, this.reason = this.message, this.ruleId = a.ruleId || void 0, this.source = a.source || void 0, this.stack = i && a.cause && typeof a.cause.stack == "string" ? a.cause.stack : "", this.actual, this.expected, this.note, this.url;
  }
}
me.prototype.file = "";
me.prototype.name = "";
me.prototype.reason = "";
me.prototype.message = "";
me.prototype.stack = "";
me.prototype.column = void 0;
me.prototype.line = void 0;
me.prototype.ancestors = void 0;
me.prototype.cause = void 0;
me.prototype.fatal = void 0;
me.prototype.place = void 0;
me.prototype.ruleId = void 0;
me.prototype.source = void 0;
const Cn = {}.hasOwnProperty, Ja = /* @__PURE__ */ new Map(), Ka = /[A-Z]/g, Ya = /-([a-z])/g, Qa = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), Xa = /* @__PURE__ */ new Set(["td", "th"]), lo = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function Za(e, t) {
  if (!t || t.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const n = t.filePath || void 0;
  let r;
  if (t.development) {
    if (typeof t.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    r = ll(n, t.jsxDEV);
  } else {
    if (typeof t.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof t.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    r = al(n, t.jsx, t.jsxs);
  }
  const o = {
    Fragment: t.Fragment,
    ancestors: [],
    components: t.components || {},
    create: r,
    elementAttributeNameCase: t.elementAttributeNameCase || "react",
    evaluater: t.createEvaluater ? t.createEvaluater() : void 0,
    filePath: n,
    ignoreInvalidStyle: t.ignoreInvalidStyle || !1,
    passKeys: t.passKeys !== !1,
    passNode: t.passNode || !1,
    schema: t.space === "svg" ? xn : ja,
    stylePropertyNameCase: t.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: t.tableCellAlignToStyle !== !1
  }, a = so(o, e, void 0);
  return a && typeof a != "string" ? a : o.create(
    e,
    o.Fragment,
    { children: a || void 0 },
    void 0
  );
}
function so(e, t, n) {
  if (t.type === "element")
    return el(e, t, n);
  if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression")
    return tl(e, t);
  if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement")
    return rl(e, t, n);
  if (t.type === "mdxjsEsm")
    return nl(e, t);
  if (t.type === "root")
    return ol(e, t, n);
  if (t.type === "text")
    return il(e, t);
}
function el(e, t, n) {
  const r = e.schema;
  let o = r;
  t.tagName.toLowerCase() === "svg" && r.space === "html" && (o = xn, e.schema = o), e.ancestors.push(t);
  const a = co(e, t.tagName, !1), i = sl(e, t);
  let l = En(e, t);
  return Qa.has(t.tagName) && (l = l.filter(function(s) {
    return typeof s == "string" ? !ka(s) : !0;
  })), uo(e, i, a, t), Sn(i, l), e.ancestors.pop(), e.schema = r, e.create(t, a, i, n);
}
function tl(e, t) {
  if (t.data && t.data.estree && e.evaluater) {
    const r = t.data.estree.body[0];
    return r.type, /** @type {Child | undefined} */
    e.evaluater.evaluateExpression(r.expression);
  }
  pt(e, t.position);
}
function nl(e, t) {
  if (t.data && t.data.estree && e.evaluater)
    return (
      /** @type {Child | undefined} */
      e.evaluater.evaluateProgram(t.data.estree)
    );
  pt(e, t.position);
}
function rl(e, t, n) {
  const r = e.schema;
  let o = r;
  t.name === "svg" && r.space === "html" && (o = xn, e.schema = o), e.ancestors.push(t);
  const a = t.name === null ? e.Fragment : co(e, t.name, !0), i = ul(e, t), l = En(e, t);
  return uo(e, i, a, t), Sn(i, l), e.ancestors.pop(), e.schema = r, e.create(t, a, i, n);
}
function ol(e, t, n) {
  const r = {};
  return Sn(r, En(e, t)), e.create(t, e.Fragment, r, n);
}
function il(e, t) {
  return t.value;
}
function uo(e, t, n, r) {
  typeof n != "string" && n !== e.Fragment && e.passNode && (t.node = r);
}
function Sn(e, t) {
  if (t.length > 0) {
    const n = t.length > 1 ? t : t[0];
    n && (e.children = n);
  }
}
function al(e, t, n) {
  return r;
  function r(o, a, i, l) {
    const u = Array.isArray(i.children) ? n : t;
    return l ? u(a, i, l) : u(a, i);
  }
}
function ll(e, t) {
  return n;
  function n(r, o, a, i) {
    const l = Array.isArray(a.children), s = vn(r);
    return t(
      o,
      a,
      i,
      l,
      {
        columnNumber: s ? s.column - 1 : void 0,
        fileName: e,
        lineNumber: s ? s.line : void 0
      },
      void 0
    );
  }
}
function sl(e, t) {
  const n = {};
  let r, o;
  for (o in t.properties)
    if (o !== "children" && Cn.call(t.properties, o)) {
      const a = cl(e, o, t.properties[o]);
      if (a) {
        const [i, l] = a;
        e.tableCellAlignToStyle && i === "align" && typeof l == "string" && Xa.has(t.tagName) ? r = l : n[i] = l;
      }
    }
  if (r) {
    const a = (
      /** @type {Style} */
      n.style || (n.style = {})
    );
    a[e.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = r;
  }
  return n;
}
function ul(e, t) {
  const n = {};
  for (const r of t.attributes)
    if (r.type === "mdxJsxExpressionAttribute")
      if (r.data && r.data.estree && e.evaluater) {
        const a = r.data.estree.body[0];
        a.type;
        const i = a.expression;
        i.type;
        const l = i.properties[0];
        l.type, Object.assign(
          n,
          e.evaluater.evaluateExpression(l.argument)
        );
      } else
        pt(e, t.position);
    else {
      const o = r.name;
      let a;
      if (r.value && typeof r.value == "object")
        if (r.value.data && r.value.data.estree && e.evaluater) {
          const l = r.value.data.estree.body[0];
          l.type, a = e.evaluater.evaluateExpression(l.expression);
        } else
          pt(e, t.position);
      else
        a = r.value === null ? !0 : r.value;
      n[o] = /** @type {Props[keyof Props]} */
      a;
    }
  return n;
}
function En(e, t) {
  const n = [];
  let r = -1;
  const o = e.passKeys ? /* @__PURE__ */ new Map() : Ja;
  for (; ++r < t.children.length; ) {
    const a = t.children[r];
    let i;
    if (e.passKeys) {
      const s = a.type === "element" ? a.tagName : a.type === "mdxJsxFlowElement" || a.type === "mdxJsxTextElement" ? a.name : void 0;
      if (s) {
        const u = o.get(s) || 0;
        i = s + "-" + u, o.set(s, u + 1);
      }
    }
    const l = so(e, a, i);
    l !== void 0 && n.push(l);
  }
  return n;
}
function cl(e, t, n) {
  const r = Pa(e.schema, t);
  if (!(n == null || typeof n == "number" && Number.isNaN(n))) {
    if (Array.isArray(n) && (n = r.commaSeparated ? ha(n) : Aa(n)), r.property === "style") {
      let o = typeof n == "object" ? n : dl(e, String(n));
      return e.stylePropertyNameCase === "css" && (o = ml(o)), ["style", o];
    }
    return [
      e.elementAttributeNameCase === "react" && r.space ? za[r.property] || r.property : r.attribute,
      n
    ];
  }
}
function dl(e, t) {
  const n = {};
  try {
    Wa(t, r);
  } catch (o) {
    if (!e.ignoreInvalidStyle) {
      const a = (
        /** @type {Error} */
        o
      ), i = new me("Cannot parse `style` attribute", {
        ancestors: e.ancestors,
        cause: a,
        ruleId: "style",
        source: "hast-util-to-jsx-runtime"
      });
      throw i.file = e.filePath || void 0, i.url = lo + "#cannot-parse-style-attribute", i;
    }
  }
  return n;
  function r(o, a) {
    let i = o;
    i.slice(0, 2) !== "--" && (i.slice(0, 4) === "-ms-" && (i = "ms-" + i.slice(4)), i = i.replace(Ya, hl)), n[i] = a;
  }
}
function co(e, t, n) {
  let r;
  if (!n)
    r = { type: "Literal", value: t };
  else if (t.includes(".")) {
    const o = t.split(".");
    let a = -1, i;
    for (; ++a < o.length; ) {
      const l = Wn(o[a]) ? { type: "Identifier", name: o[a] } : { type: "Literal", value: o[a] };
      i = i ? {
        type: "MemberExpression",
        object: i,
        property: l,
        computed: !!(a && l.type === "Literal"),
        optional: !1
      } : l;
    }
    r = i;
  } else
    r = Wn(t) && !/^[a-z]/.test(t) ? { type: "Identifier", name: t } : { type: "Literal", value: t };
  if (r.type === "Literal") {
    const o = (
      /** @type {keyof JSX.IntrinsicElements} */
      r.value
    );
    return Cn.call(e.components, o) ? e.components[o] : o;
  }
  if (e.evaluater)
    return e.evaluater.evaluateExpression(r);
  pt(e);
}
function pt(e, t) {
  const n = new me(
    "Cannot handle MDX estrees without `createEvaluater`",
    {
      ancestors: e.ancestors,
      place: t,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    }
  );
  throw n.file = e.filePath || void 0, n.url = lo + "#cannot-handle-mdx-estrees-without-createevaluater", n;
}
function ml(e) {
  const t = {};
  let n;
  for (n in e)
    Cn.call(e, n) && (t[pl(n)] = e[n]);
  return t;
}
function pl(e) {
  let t = e.replace(Ka, fl);
  return t.slice(0, 3) === "ms-" && (t = "-" + t), t;
}
function hl(e, t) {
  return t.toUpperCase();
}
function fl(e) {
  return "-" + e.toLowerCase();
}
const Vt = {
  action: ["form"],
  cite: ["blockquote", "del", "ins", "q"],
  data: ["object"],
  formAction: ["button", "input"],
  href: ["a", "area", "base", "link"],
  icon: ["menuitem"],
  itemId: null,
  manifest: ["html"],
  ping: ["a", "area"],
  poster: ["video"],
  src: [
    "audio",
    "embed",
    "iframe",
    "img",
    "input",
    "script",
    "source",
    "track",
    "video"
  ]
}, gl = {};
function Pn(e, t) {
  const n = gl, r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0, o = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
  return mo(e, r, o);
}
function mo(e, t, n) {
  if (bl(e)) {
    if ("value" in e)
      return e.type === "html" && !n ? "" : e.value;
    if (t && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return rr(e.children, t, n);
  }
  return Array.isArray(e) ? rr(e, t, n) : "";
}
function rr(e, t, n) {
  const r = [];
  let o = -1;
  for (; ++o < e.length; )
    r[o] = mo(e[o], t, n);
  return r.join("");
}
function bl(e) {
  return !!(e && typeof e == "object");
}
const or = document.createElement("i");
function Dn(e) {
  const t = "&" + e + ";";
  or.innerHTML = t;
  const n = or.textContent;
  return n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? !1 : n;
}
function Ce(e, t, n, r) {
  const o = e.length;
  let a = 0, i;
  if (t < 0 ? t = -t > o ? 0 : o + t : t = t > o ? o : t, n = n > 0 ? n : 0, r.length < 1e4)
    i = Array.from(r), i.unshift(t, n), e.splice(...i);
  else
    for (n && e.splice(t, n); a < r.length; )
      i = r.slice(a, a + 1e4), i.unshift(t, 0), e.splice(...i), a += 1e4, t += 1e4;
}
function ve(e, t) {
  return e.length > 0 ? (Ce(e, e.length, 0, t), e) : t;
}
const ir = {}.hasOwnProperty;
function po(e) {
  const t = {};
  let n = -1;
  for (; ++n < e.length; )
    yl(t, e[n]);
  return t;
}
function yl(e, t) {
  let n;
  for (n in t) {
    const o = (ir.call(e, n) ? e[n] : void 0) || (e[n] = {}), a = t[n];
    let i;
    if (a)
      for (i in a) {
        ir.call(o, i) || (o[i] = []);
        const l = a[i];
        kl(
          // @ts-expect-error Looks like a list.
          o[i],
          Array.isArray(l) ? l : l ? [l] : []
        );
      }
  }
}
function kl(e, t) {
  let n = -1;
  const r = [];
  for (; ++n < t.length; )
    (t[n].add === "after" ? e : r).push(t[n]);
  Ce(e, 0, 0, r);
}
function ho(e, t) {
  const n = Number.parseInt(e, t);
  return (
    // C0 except for HT, LF, FF, CR, space.
    n < 9 || n === 11 || n > 13 && n < 32 || // Control character (DEL) of C0, and C1 controls.
    n > 126 && n < 160 || // Lone high surrogates and low surrogates.
    n > 55295 && n < 57344 || // Noncharacters.
    n > 64975 && n < 65008 || /* eslint-disable no-bitwise */
    (n & 65535) === 65535 || (n & 65535) === 65534 || /* eslint-enable no-bitwise */
    // Out of range
    n > 1114111 ? "�" : String.fromCodePoint(n)
  );
}
function Pe(e) {
  return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const he = Be(/[A-Za-z]/), de = Be(/[\dA-Za-z]/), wl = Be(/[#-'*+\--9=?A-Z^-~]/);
function St(e) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    e !== null && (e < 32 || e === 127)
  );
}
const dn = Be(/\d/), xl = Be(/[\dA-Fa-f]/), vl = Be(/[!-/:-@[-`{-~]/);
function F(e) {
  return e !== null && e < -2;
}
function Q(e) {
  return e !== null && (e < 0 || e === 32);
}
function V(e) {
  return e === -2 || e === -1 || e === 32;
}
const Ft = Be(new RegExp("\\p{P}|\\p{S}", "u")), We = Be(/\s/);
function Be(e) {
  return t;
  function t(n) {
    return n !== null && n > -1 && e.test(String.fromCharCode(n));
  }
}
function tt(e) {
  const t = [];
  let n = -1, r = 0, o = 0;
  for (; ++n < e.length; ) {
    const a = e.charCodeAt(n);
    let i = "";
    if (a === 37 && de(e.charCodeAt(n + 1)) && de(e.charCodeAt(n + 2)))
      o = 2;
    else if (a < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a)) || (i = String.fromCharCode(a));
    else if (a > 55295 && a < 57344) {
      const l = e.charCodeAt(n + 1);
      a < 56320 && l > 56319 && l < 57344 ? (i = String.fromCharCode(a, l), o = 1) : i = "�";
    } else
      i = String.fromCharCode(a);
    i && (t.push(e.slice(r, n), encodeURIComponent(i)), r = n + o + 1, i = ""), o && (n += o, o = 0);
  }
  return t.join("") + e.slice(r);
}
function W(e, t, n, r) {
  const o = r ? r - 1 : Number.POSITIVE_INFINITY;
  let a = 0;
  return i;
  function i(s) {
    return V(s) ? (e.enter(n), l(s)) : t(s);
  }
  function l(s) {
    return V(s) && a++ < o ? (e.consume(s), l) : (e.exit(n), t(s));
  }
}
const Cl = {
  tokenize: Sl
};
function Sl(e) {
  const t = e.attempt(
    this.parser.constructs.contentInitial,
    r,
    o
  );
  let n;
  return t;
  function r(l) {
    if (l === null) {
      e.consume(l);
      return;
    }
    return e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), W(e, t, "linePrefix");
  }
  function o(l) {
    return e.enter("paragraph"), a(l);
  }
  function a(l) {
    const s = e.enter("chunkText", {
      contentType: "text",
      previous: n
    });
    return n && (n.next = s), n = s, i(l);
  }
  function i(l) {
    if (l === null) {
      e.exit("chunkText"), e.exit("paragraph"), e.consume(l);
      return;
    }
    return F(l) ? (e.consume(l), e.exit("chunkText"), a) : (e.consume(l), i);
  }
}
const El = {
  tokenize: Pl
}, ar = {
  tokenize: Dl
};
function Pl(e) {
  const t = this, n = [];
  let r = 0, o, a, i;
  return l;
  function l(x) {
    if (r < n.length) {
      const P = n[r];
      return t.containerState = P[1], e.attempt(
        P[0].continuation,
        s,
        u
      )(x);
    }
    return u(x);
  }
  function s(x) {
    if (r++, t.containerState._closeFlow) {
      t.containerState._closeFlow = void 0, o && E();
      const P = t.events.length;
      let j = P, C;
      for (; j--; )
        if (t.events[j][0] === "exit" && t.events[j][1].type === "chunkFlow") {
          C = t.events[j][1].end;
          break;
        }
      k(r);
      let R = P;
      for (; R < t.events.length; )
        t.events[R][1].end = Object.assign({}, C), R++;
      return Ce(
        t.events,
        j + 1,
        0,
        t.events.slice(P)
      ), t.events.length = R, u(x);
    }
    return l(x);
  }
  function u(x) {
    if (r === n.length) {
      if (!o)
        return p(x);
      if (o.currentConstruct && o.currentConstruct.concrete)
        return h(x);
      t.interrupt = !!(o.currentConstruct && !o._gfmTableDynamicInterruptHack);
    }
    return t.containerState = {}, e.check(
      ar,
      d,
      c
    )(x);
  }
  function d(x) {
    return o && E(), k(r), p(x);
  }
  function c(x) {
    return t.parser.lazy[t.now().line] = r !== n.length, i = t.now().offset, h(x);
  }
  function p(x) {
    return t.containerState = {}, e.attempt(
      ar,
      m,
      h
    )(x);
  }
  function m(x) {
    return r++, n.push([t.currentConstruct, t.containerState]), p(x);
  }
  function h(x) {
    if (x === null) {
      o && E(), k(0), e.consume(x);
      return;
    }
    return o = o || t.parser.flow(t.now()), e.enter("chunkFlow", {
      contentType: "flow",
      previous: a,
      _tokenizer: o
    }), y(x);
  }
  function y(x) {
    if (x === null) {
      v(e.exit("chunkFlow"), !0), k(0), e.consume(x);
      return;
    }
    return F(x) ? (e.consume(x), v(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, l) : (e.consume(x), y);
  }
  function v(x, P) {
    const j = t.sliceStream(x);
    if (P && j.push(null), x.previous = a, a && (a.next = x), a = x, o.defineSkip(x.start), o.write(j), t.parser.lazy[x.start.line]) {
      let C = o.events.length;
      for (; C--; )
        if (
          // The token starts before the line ending…
          o.events[C][1].start.offset < i && // …and either is not ended yet…
          (!o.events[C][1].end || // …or ends after it.
          o.events[C][1].end.offset > i)
        )
          return;
      const R = t.events.length;
      let B = R, $, w;
      for (; B--; )
        if (t.events[B][0] === "exit" && t.events[B][1].type === "chunkFlow") {
          if ($) {
            w = t.events[B][1].end;
            break;
          }
          $ = !0;
        }
      for (k(r), C = R; C < t.events.length; )
        t.events[C][1].end = Object.assign({}, w), C++;
      Ce(
        t.events,
        B + 1,
        0,
        t.events.slice(R)
      ), t.events.length = C;
    }
  }
  function k(x) {
    let P = n.length;
    for (; P-- > x; ) {
      const j = n[P];
      t.containerState = j[1], j[0].exit.call(t, e);
    }
    n.length = x;
  }
  function E() {
    o.write([null]), a = void 0, o = void 0, t.containerState._closeFlow = void 0;
  }
}
function Dl(e, t, n) {
  return W(
    e,
    e.attempt(this.parser.constructs.document, t, n),
    "linePrefix",
    this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
  );
}
function Et(e) {
  if (e === null || Q(e) || We(e))
    return 1;
  if (Ft(e))
    return 2;
}
function Lt(e, t, n) {
  const r = [];
  let o = -1;
  for (; ++o < e.length; ) {
    const a = e[o].resolveAll;
    a && !r.includes(a) && (t = a(t, n), r.push(a));
  }
  return t;
}
const mn = {
  name: "attention",
  tokenize: zl,
  resolveAll: Il
};
function Il(e, t) {
  let n = -1, r, o, a, i, l, s, u, d;
  for (; ++n < e.length; )
    if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
      for (r = n; r--; )
        if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && // If the markers are the same:
        t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
          if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3))
            continue;
          s = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
          const c = Object.assign({}, e[r][1].end), p = Object.assign({}, e[n][1].start);
          lr(c, -s), lr(p, s), i = {
            type: s > 1 ? "strongSequence" : "emphasisSequence",
            start: c,
            end: Object.assign({}, e[r][1].end)
          }, l = {
            type: s > 1 ? "strongSequence" : "emphasisSequence",
            start: Object.assign({}, e[n][1].start),
            end: p
          }, a = {
            type: s > 1 ? "strongText" : "emphasisText",
            start: Object.assign({}, e[r][1].end),
            end: Object.assign({}, e[n][1].start)
          }, o = {
            type: s > 1 ? "strong" : "emphasis",
            start: Object.assign({}, i.start),
            end: Object.assign({}, l.end)
          }, e[r][1].end = Object.assign({}, i.start), e[n][1].start = Object.assign({}, l.end), u = [], e[r][1].end.offset - e[r][1].start.offset && (u = ve(u, [["enter", e[r][1], t], ["exit", e[r][1], t]])), u = ve(u, [["enter", o, t], ["enter", i, t], ["exit", i, t], ["enter", a, t]]), u = ve(u, Lt(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), u = ve(u, [["exit", a, t], ["enter", l, t], ["exit", l, t], ["exit", o, t]]), e[n][1].end.offset - e[n][1].start.offset ? (d = 2, u = ve(u, [["enter", e[n][1], t], ["exit", e[n][1], t]])) : d = 0, Ce(e, r - 1, n - r + 3, u), n = r + u.length - d - 2;
          break;
        }
    }
  for (n = -1; ++n < e.length; )
    e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
  return e;
}
function zl(e, t) {
  const n = this.parser.constructs.attentionMarkers.null, r = this.previous, o = Et(r);
  let a;
  return i;
  function i(s) {
    return a = s, e.enter("attentionSequence"), l(s);
  }
  function l(s) {
    if (s === a)
      return e.consume(s), l;
    const u = e.exit("attentionSequence"), d = Et(s), c = !d || d === 2 && o || n.includes(s), p = !o || o === 2 && d || n.includes(r);
    return u._open = !!(a === 42 ? c : c && (o || !p)), u._close = !!(a === 42 ? p : p && (d || !c)), t(s);
  }
}
function lr(e, t) {
  e.column += t, e.offset += t, e._bufferIndex += t;
}
const jl = {
  name: "autolink",
  tokenize: Al
};
function Al(e, t, n) {
  let r = 0;
  return o;
  function o(m) {
    return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(m), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), a;
  }
  function a(m) {
    return he(m) ? (e.consume(m), i) : m === 64 ? n(m) : u(m);
  }
  function i(m) {
    return m === 43 || m === 45 || m === 46 || de(m) ? (r = 1, l(m)) : u(m);
  }
  function l(m) {
    return m === 58 ? (e.consume(m), r = 0, s) : (m === 43 || m === 45 || m === 46 || de(m)) && r++ < 32 ? (e.consume(m), l) : (r = 0, u(m));
  }
  function s(m) {
    return m === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(m), e.exit("autolinkMarker"), e.exit("autolink"), t) : m === null || m === 32 || m === 60 || St(m) ? n(m) : (e.consume(m), s);
  }
  function u(m) {
    return m === 64 ? (e.consume(m), d) : wl(m) ? (e.consume(m), u) : n(m);
  }
  function d(m) {
    return de(m) ? c(m) : n(m);
  }
  function c(m) {
    return m === 46 ? (e.consume(m), r = 0, d) : m === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(m), e.exit("autolinkMarker"), e.exit("autolink"), t) : p(m);
  }
  function p(m) {
    if ((m === 45 || de(m)) && r++ < 63) {
      const h = m === 45 ? p : c;
      return e.consume(m), h;
    }
    return n(m);
  }
}
const ft = {
  tokenize: Tl,
  partial: !0
};
function Tl(e, t, n) {
  return r;
  function r(a) {
    return V(a) ? W(e, o, "linePrefix")(a) : o(a);
  }
  function o(a) {
    return a === null || F(a) ? t(a) : n(a);
  }
}
const fo = {
  name: "blockQuote",
  tokenize: Fl,
  continuation: {
    tokenize: Ll
  },
  exit: Rl
};
function Fl(e, t, n) {
  const r = this;
  return o;
  function o(i) {
    if (i === 62) {
      const l = r.containerState;
      return l.open || (e.enter("blockQuote", {
        _container: !0
      }), l.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(i), e.exit("blockQuoteMarker"), a;
    }
    return n(i);
  }
  function a(i) {
    return V(i) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(i), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(i));
  }
}
function Ll(e, t, n) {
  const r = this;
  return o;
  function o(i) {
    return V(i) ? W(e, a, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(i) : a(i);
  }
  function a(i) {
    return e.attempt(fo, t, n)(i);
  }
}
function Rl(e) {
  e.exit("blockQuote");
}
const go = {
  name: "characterEscape",
  tokenize: Ml
};
function Ml(e, t, n) {
  return r;
  function r(a) {
    return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(a), e.exit("escapeMarker"), o;
  }
  function o(a) {
    return vl(a) ? (e.enter("characterEscapeValue"), e.consume(a), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(a);
  }
}
const bo = {
  name: "characterReference",
  tokenize: Ol
};
function Ol(e, t, n) {
  const r = this;
  let o = 0, a, i;
  return l;
  function l(c) {
    return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(c), e.exit("characterReferenceMarker"), s;
  }
  function s(c) {
    return c === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(c), e.exit("characterReferenceMarkerNumeric"), u) : (e.enter("characterReferenceValue"), a = 31, i = de, d(c));
  }
  function u(c) {
    return c === 88 || c === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(c), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), a = 6, i = xl, d) : (e.enter("characterReferenceValue"), a = 7, i = dn, d(c));
  }
  function d(c) {
    if (c === 59 && o) {
      const p = e.exit("characterReferenceValue");
      return i === de && !Dn(r.sliceSerialize(p)) ? n(c) : (e.enter("characterReferenceMarker"), e.consume(c), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
    }
    return i(c) && o++ < a ? (e.consume(c), d) : n(c);
  }
}
const sr = {
  tokenize: _l,
  partial: !0
}, ur = {
  name: "codeFenced",
  tokenize: Nl,
  concrete: !0
};
function Nl(e, t, n) {
  const r = this, o = {
    tokenize: j,
    partial: !0
  };
  let a = 0, i = 0, l;
  return s;
  function s(C) {
    return u(C);
  }
  function u(C) {
    const R = r.events[r.events.length - 1];
    return a = R && R[1].type === "linePrefix" ? R[2].sliceSerialize(R[1], !0).length : 0, l = C, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), d(C);
  }
  function d(C) {
    return C === l ? (i++, e.consume(C), d) : i < 3 ? n(C) : (e.exit("codeFencedFenceSequence"), V(C) ? W(e, c, "whitespace")(C) : c(C));
  }
  function c(C) {
    return C === null || F(C) ? (e.exit("codeFencedFence"), r.interrupt ? t(C) : e.check(sr, y, P)(C)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
      contentType: "string"
    }), p(C));
  }
  function p(C) {
    return C === null || F(C) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), c(C)) : V(C) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), W(e, m, "whitespace")(C)) : C === 96 && C === l ? n(C) : (e.consume(C), p);
  }
  function m(C) {
    return C === null || F(C) ? c(C) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
      contentType: "string"
    }), h(C));
  }
  function h(C) {
    return C === null || F(C) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), c(C)) : C === 96 && C === l ? n(C) : (e.consume(C), h);
  }
  function y(C) {
    return e.attempt(o, P, v)(C);
  }
  function v(C) {
    return e.enter("lineEnding"), e.consume(C), e.exit("lineEnding"), k;
  }
  function k(C) {
    return a > 0 && V(C) ? W(e, E, "linePrefix", a + 1)(C) : E(C);
  }
  function E(C) {
    return C === null || F(C) ? e.check(sr, y, P)(C) : (e.enter("codeFlowValue"), x(C));
  }
  function x(C) {
    return C === null || F(C) ? (e.exit("codeFlowValue"), E(C)) : (e.consume(C), x);
  }
  function P(C) {
    return e.exit("codeFenced"), t(C);
  }
  function j(C, R, B) {
    let $ = 0;
    return w;
    function w(L) {
      return C.enter("lineEnding"), C.consume(L), C.exit("lineEnding"), z;
    }
    function z(L) {
      return C.enter("codeFencedFence"), V(L) ? W(C, A, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(L) : A(L);
    }
    function A(L) {
      return L === l ? (C.enter("codeFencedFenceSequence"), N(L)) : B(L);
    }
    function N(L) {
      return L === l ? ($++, C.consume(L), N) : $ >= i ? (C.exit("codeFencedFenceSequence"), V(L) ? W(C, H, "whitespace")(L) : H(L)) : B(L);
    }
    function H(L) {
      return L === null || F(L) ? (C.exit("codeFencedFence"), R(L)) : B(L);
    }
  }
}
function _l(e, t, n) {
  const r = this;
  return o;
  function o(i) {
    return i === null ? n(i) : (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), a);
  }
  function a(i) {
    return r.parser.lazy[r.now().line] ? n(i) : t(i);
  }
}
const Ht = {
  name: "codeIndented",
  tokenize: $l
}, Bl = {
  tokenize: Ul,
  partial: !0
};
function $l(e, t, n) {
  const r = this;
  return o;
  function o(u) {
    return e.enter("codeIndented"), W(e, a, "linePrefix", 5)(u);
  }
  function a(u) {
    const d = r.events[r.events.length - 1];
    return d && d[1].type === "linePrefix" && d[2].sliceSerialize(d[1], !0).length >= 4 ? i(u) : n(u);
  }
  function i(u) {
    return u === null ? s(u) : F(u) ? e.attempt(Bl, i, s)(u) : (e.enter("codeFlowValue"), l(u));
  }
  function l(u) {
    return u === null || F(u) ? (e.exit("codeFlowValue"), i(u)) : (e.consume(u), l);
  }
  function s(u) {
    return e.exit("codeIndented"), t(u);
  }
}
function Ul(e, t, n) {
  const r = this;
  return o;
  function o(i) {
    return r.parser.lazy[r.now().line] ? n(i) : F(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), o) : W(e, a, "linePrefix", 5)(i);
  }
  function a(i) {
    const l = r.events[r.events.length - 1];
    return l && l[1].type === "linePrefix" && l[2].sliceSerialize(l[1], !0).length >= 4 ? t(i) : F(i) ? o(i) : n(i);
  }
}
const Vl = {
  name: "codeText",
  tokenize: Wl,
  resolve: Hl,
  previous: ql
};
function Hl(e) {
  let t = e.length - 4, n = 3, r, o;
  if ((e[n][1].type === "lineEnding" || e[n][1].type === "space") && (e[t][1].type === "lineEnding" || e[t][1].type === "space")) {
    for (r = n; ++r < t; )
      if (e[r][1].type === "codeTextData") {
        e[n][1].type = "codeTextPadding", e[t][1].type = "codeTextPadding", n += 2, t -= 2;
        break;
      }
  }
  for (r = n - 1, t++; ++r <= t; )
    o === void 0 ? r !== t && e[r][1].type !== "lineEnding" && (o = r) : (r === t || e[r][1].type === "lineEnding") && (e[o][1].type = "codeTextData", r !== o + 2 && (e[o][1].end = e[r - 1][1].end, e.splice(o + 2, r - o - 2), t -= r - o - 2, r = o + 2), o = void 0);
  return e;
}
function ql(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function Wl(e, t, n) {
  let r = 0, o, a;
  return i;
  function i(c) {
    return e.enter("codeText"), e.enter("codeTextSequence"), l(c);
  }
  function l(c) {
    return c === 96 ? (e.consume(c), r++, l) : (e.exit("codeTextSequence"), s(c));
  }
  function s(c) {
    return c === null ? n(c) : c === 32 ? (e.enter("space"), e.consume(c), e.exit("space"), s) : c === 96 ? (a = e.enter("codeTextSequence"), o = 0, d(c)) : F(c) ? (e.enter("lineEnding"), e.consume(c), e.exit("lineEnding"), s) : (e.enter("codeTextData"), u(c));
  }
  function u(c) {
    return c === null || c === 32 || c === 96 || F(c) ? (e.exit("codeTextData"), s(c)) : (e.consume(c), u);
  }
  function d(c) {
    return c === 96 ? (e.consume(c), o++, d) : o === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(c)) : (a.type = "codeTextData", u(c));
  }
}
class Gl {
  /**
   * @param {ReadonlyArray<T> | null | undefined} [initial]
   *   Initial items (optional).
   * @returns
   *   Splice buffer.
   */
  constructor(t) {
    this.left = t ? [...t] : [], this.right = [];
  }
  /**
   * Array access;
   * does not move the cursor.
   *
   * @param {number} index
   *   Index.
   * @return {T}
   *   Item.
   */
  get(t) {
    if (t < 0 || t >= this.left.length + this.right.length)
      throw new RangeError("Cannot access index `" + t + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
    return t < this.left.length ? this.left[t] : this.right[this.right.length - t + this.left.length - 1];
  }
  /**
   * The length of the splice buffer, one greater than the largest index in the
   * array.
   */
  get length() {
    return this.left.length + this.right.length;
  }
  /**
   * Remove and return `list[0]`;
   * moves the cursor to `0`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  shift() {
    return this.setCursor(0), this.right.pop();
  }
  /**
   * Slice the buffer to get an array;
   * does not move the cursor.
   *
   * @param {number} start
   *   Start.
   * @param {number | null | undefined} [end]
   *   End (optional).
   * @returns {Array<T>}
   *   Array of items.
   */
  slice(t, n) {
    const r = n ?? Number.POSITIVE_INFINITY;
    return r < this.left.length ? this.left.slice(t, r) : t > this.left.length ? this.right.slice(this.right.length - r + this.left.length, this.right.length - t + this.left.length).reverse() : this.left.slice(t).concat(this.right.slice(this.right.length - r + this.left.length).reverse());
  }
  /**
   * Mimics the behavior of Array.prototype.splice() except for the change of
   * interface necessary to avoid segfaults when patching in very large arrays.
   *
   * This operation moves cursor is moved to `start` and results in the cursor
   * placed after any inserted items.
   *
   * @param {number} start
   *   Start;
   *   zero-based index at which to start changing the array;
   *   negative numbers count backwards from the end of the array and values
   *   that are out-of bounds are clamped to the appropriate end of the array.
   * @param {number | null | undefined} [deleteCount=0]
   *   Delete count (default: `0`);
   *   maximum number of elements to delete, starting from start.
   * @param {Array<T> | null | undefined} [items=[]]
   *   Items to include in place of the deleted items (default: `[]`).
   * @return {Array<T>}
   *   Any removed items.
   */
  splice(t, n, r) {
    const o = n || 0;
    this.setCursor(Math.trunc(t));
    const a = this.right.splice(this.right.length - o, Number.POSITIVE_INFINITY);
    return r && st(this.left, r), a.reverse();
  }
  /**
   * Remove and return the highest-numbered item in the array, so
   * `list[list.length - 1]`;
   * Moves the cursor to `length`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  pop() {
    return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop();
  }
  /**
   * Inserts a single item to the high-numbered side of the array;
   * moves the cursor to `length`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  push(t) {
    this.setCursor(Number.POSITIVE_INFINITY), this.left.push(t);
  }
  /**
   * Inserts many items to the high-numbered side of the array.
   * Moves the cursor to `length`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  pushMany(t) {
    this.setCursor(Number.POSITIVE_INFINITY), st(this.left, t);
  }
  /**
   * Inserts a single item to the low-numbered side of the array;
   * Moves the cursor to `0`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  unshift(t) {
    this.setCursor(0), this.right.push(t);
  }
  /**
   * Inserts many items to the low-numbered side of the array;
   * moves the cursor to `0`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  unshiftMany(t) {
    this.setCursor(0), st(this.right, t.reverse());
  }
  /**
   * Move the cursor to a specific position in the array. Requires
   * time proportional to the distance moved.
   *
   * If `n < 0`, the cursor will end up at the beginning.
   * If `n > length`, the cursor will end up at the end.
   *
   * @param {number} n
   *   Position.
   * @return {undefined}
   *   Nothing.
   */
  setCursor(t) {
    if (!(t === this.left.length || t > this.left.length && this.right.length === 0 || t < 0 && this.left.length === 0))
      if (t < this.left.length) {
        const n = this.left.splice(t, Number.POSITIVE_INFINITY);
        st(this.right, n.reverse());
      } else {
        const n = this.right.splice(this.left.length + this.right.length - t, Number.POSITIVE_INFINITY);
        st(this.left, n.reverse());
      }
  }
}
function st(e, t) {
  let n = 0;
  if (t.length < 1e4)
    e.push(...t);
  else
    for (; n < t.length; )
      e.push(...t.slice(n, n + 1e4)), n += 1e4;
}
function yo(e) {
  const t = {};
  let n = -1, r, o, a, i, l, s, u;
  const d = new Gl(e);
  for (; ++n < d.length; ) {
    for (; n in t; )
      n = t[n];
    if (r = d.get(n), n && r[1].type === "chunkFlow" && d.get(n - 1)[1].type === "listItemPrefix" && (s = r[1]._tokenizer.events, a = 0, a < s.length && s[a][1].type === "lineEndingBlank" && (a += 2), a < s.length && s[a][1].type === "content"))
      for (; ++a < s.length && s[a][1].type !== "content"; )
        s[a][1].type === "chunkText" && (s[a][1]._isInFirstContentOfListItem = !0, a++);
    if (r[0] === "enter")
      r[1].contentType && (Object.assign(t, Jl(d, n)), n = t[n], u = !0);
    else if (r[1]._container) {
      for (a = n, o = void 0; a-- && (i = d.get(a), i[1].type === "lineEnding" || i[1].type === "lineEndingBlank"); )
        i[0] === "enter" && (o && (d.get(o)[1].type = "lineEndingBlank"), i[1].type = "lineEnding", o = a);
      o && (r[1].end = Object.assign({}, d.get(o)[1].start), l = d.slice(o, n), l.unshift(r), d.splice(o, n - o + 1, l));
    }
  }
  return Ce(e, 0, Number.POSITIVE_INFINITY, d.slice(0)), !u;
}
function Jl(e, t) {
  const n = e.get(t)[1], r = e.get(t)[2];
  let o = t - 1;
  const a = [], i = n._tokenizer || r.parser[n.contentType](n.start), l = i.events, s = [], u = {};
  let d, c, p = -1, m = n, h = 0, y = 0;
  const v = [y];
  for (; m; ) {
    for (; e.get(++o)[1] !== m; )
      ;
    a.push(o), m._tokenizer || (d = r.sliceStream(m), m.next || d.push(null), c && i.defineSkip(m.start), m._isInFirstContentOfListItem && (i._gfmTasklistFirstContentOfListItem = !0), i.write(d), m._isInFirstContentOfListItem && (i._gfmTasklistFirstContentOfListItem = void 0)), c = m, m = m.next;
  }
  for (m = n; ++p < l.length; )
    // Find a void token that includes a break.
    l[p][0] === "exit" && l[p - 1][0] === "enter" && l[p][1].type === l[p - 1][1].type && l[p][1].start.line !== l[p][1].end.line && (y = p + 1, v.push(y), m._tokenizer = void 0, m.previous = void 0, m = m.next);
  for (i.events = [], m ? (m._tokenizer = void 0, m.previous = void 0) : v.pop(), p = v.length; p--; ) {
    const k = l.slice(v[p], v[p + 1]), E = a.pop();
    s.push([E, E + k.length - 1]), e.splice(E, 2, k);
  }
  for (s.reverse(), p = -1; ++p < s.length; )
    u[h + s[p][0]] = h + s[p][1], h += s[p][1] - s[p][0] - 1;
  return u;
}
const Kl = {
  tokenize: Xl,
  resolve: Ql
}, Yl = {
  tokenize: Zl,
  partial: !0
};
function Ql(e) {
  return yo(e), e;
}
function Xl(e, t) {
  let n;
  return r;
  function r(l) {
    return e.enter("content"), n = e.enter("chunkContent", {
      contentType: "content"
    }), o(l);
  }
  function o(l) {
    return l === null ? a(l) : F(l) ? e.check(Yl, i, a)(l) : (e.consume(l), o);
  }
  function a(l) {
    return e.exit("chunkContent"), e.exit("content"), t(l);
  }
  function i(l) {
    return e.consume(l), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
      contentType: "content",
      previous: n
    }), n = n.next, o;
  }
}
function Zl(e, t, n) {
  const r = this;
  return o;
  function o(i) {
    return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), W(e, a, "linePrefix");
  }
  function a(i) {
    if (i === null || F(i))
      return n(i);
    const l = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes("codeIndented") && l && l[1].type === "linePrefix" && l[2].sliceSerialize(l[1], !0).length >= 4 ? t(i) : e.interrupt(r.parser.constructs.flow, n, t)(i);
  }
}
function ko(e, t, n, r, o, a, i, l, s) {
  const u = s || Number.POSITIVE_INFINITY;
  let d = 0;
  return c;
  function c(k) {
    return k === 60 ? (e.enter(r), e.enter(o), e.enter(a), e.consume(k), e.exit(a), p) : k === null || k === 32 || k === 41 || St(k) ? n(k) : (e.enter(r), e.enter(i), e.enter(l), e.enter("chunkString", {
      contentType: "string"
    }), y(k));
  }
  function p(k) {
    return k === 62 ? (e.enter(a), e.consume(k), e.exit(a), e.exit(o), e.exit(r), t) : (e.enter(l), e.enter("chunkString", {
      contentType: "string"
    }), m(k));
  }
  function m(k) {
    return k === 62 ? (e.exit("chunkString"), e.exit(l), p(k)) : k === null || k === 60 || F(k) ? n(k) : (e.consume(k), k === 92 ? h : m);
  }
  function h(k) {
    return k === 60 || k === 62 || k === 92 ? (e.consume(k), m) : m(k);
  }
  function y(k) {
    return !d && (k === null || k === 41 || Q(k)) ? (e.exit("chunkString"), e.exit(l), e.exit(i), e.exit(r), t(k)) : d < u && k === 40 ? (e.consume(k), d++, y) : k === 41 ? (e.consume(k), d--, y) : k === null || k === 32 || k === 40 || St(k) ? n(k) : (e.consume(k), k === 92 ? v : y);
  }
  function v(k) {
    return k === 40 || k === 41 || k === 92 ? (e.consume(k), y) : y(k);
  }
}
function wo(e, t, n, r, o, a) {
  const i = this;
  let l = 0, s;
  return u;
  function u(m) {
    return e.enter(r), e.enter(o), e.consume(m), e.exit(o), e.enter(a), d;
  }
  function d(m) {
    return l > 999 || m === null || m === 91 || m === 93 && !s || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    m === 94 && !l && "_hiddenFootnoteSupport" in i.parser.constructs ? n(m) : m === 93 ? (e.exit(a), e.enter(o), e.consume(m), e.exit(o), e.exit(r), t) : F(m) ? (e.enter("lineEnding"), e.consume(m), e.exit("lineEnding"), d) : (e.enter("chunkString", {
      contentType: "string"
    }), c(m));
  }
  function c(m) {
    return m === null || m === 91 || m === 93 || F(m) || l++ > 999 ? (e.exit("chunkString"), d(m)) : (e.consume(m), s || (s = !V(m)), m === 92 ? p : c);
  }
  function p(m) {
    return m === 91 || m === 92 || m === 93 ? (e.consume(m), l++, c) : c(m);
  }
}
function xo(e, t, n, r, o, a) {
  let i;
  return l;
  function l(p) {
    return p === 34 || p === 39 || p === 40 ? (e.enter(r), e.enter(o), e.consume(p), e.exit(o), i = p === 40 ? 41 : p, s) : n(p);
  }
  function s(p) {
    return p === i ? (e.enter(o), e.consume(p), e.exit(o), e.exit(r), t) : (e.enter(a), u(p));
  }
  function u(p) {
    return p === i ? (e.exit(a), s(i)) : p === null ? n(p) : F(p) ? (e.enter("lineEnding"), e.consume(p), e.exit("lineEnding"), W(e, u, "linePrefix")) : (e.enter("chunkString", {
      contentType: "string"
    }), d(p));
  }
  function d(p) {
    return p === i || p === null || F(p) ? (e.exit("chunkString"), u(p)) : (e.consume(p), p === 92 ? c : d);
  }
  function c(p) {
    return p === i || p === 92 ? (e.consume(p), d) : d(p);
  }
}
function mt(e, t) {
  let n;
  return r;
  function r(o) {
    return F(o) ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), n = !0, r) : V(o) ? W(
      e,
      r,
      n ? "linePrefix" : "lineSuffix"
    )(o) : t(o);
  }
}
const es = {
  name: "definition",
  tokenize: ns
}, ts = {
  tokenize: rs,
  partial: !0
};
function ns(e, t, n) {
  const r = this;
  let o;
  return a;
  function a(m) {
    return e.enter("definition"), i(m);
  }
  function i(m) {
    return wo.call(
      r,
      e,
      l,
      // Note: we don’t need to reset the way `markdown-rs` does.
      n,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(m);
  }
  function l(m) {
    return o = Pe(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), m === 58 ? (e.enter("definitionMarker"), e.consume(m), e.exit("definitionMarker"), s) : n(m);
  }
  function s(m) {
    return Q(m) ? mt(e, u)(m) : u(m);
  }
  function u(m) {
    return ko(
      e,
      d,
      // Note: we don’t need to reset the way `markdown-rs` does.
      n,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(m);
  }
  function d(m) {
    return e.attempt(ts, c, c)(m);
  }
  function c(m) {
    return V(m) ? W(e, p, "whitespace")(m) : p(m);
  }
  function p(m) {
    return m === null || F(m) ? (e.exit("definition"), r.parser.defined.push(o), t(m)) : n(m);
  }
}
function rs(e, t, n) {
  return r;
  function r(l) {
    return Q(l) ? mt(e, o)(l) : n(l);
  }
  function o(l) {
    return xo(e, a, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(l);
  }
  function a(l) {
    return V(l) ? W(e, i, "whitespace")(l) : i(l);
  }
  function i(l) {
    return l === null || F(l) ? t(l) : n(l);
  }
}
const os = {
  name: "hardBreakEscape",
  tokenize: is
};
function is(e, t, n) {
  return r;
  function r(a) {
    return e.enter("hardBreakEscape"), e.consume(a), o;
  }
  function o(a) {
    return F(a) ? (e.exit("hardBreakEscape"), t(a)) : n(a);
  }
}
const as = {
  name: "headingAtx",
  tokenize: ss,
  resolve: ls
};
function ls(e, t) {
  let n = e.length - 2, r = 3, o, a;
  return e[r][1].type === "whitespace" && (r += 2), n - 2 > r && e[n][1].type === "whitespace" && (n -= 2), e[n][1].type === "atxHeadingSequence" && (r === n - 1 || n - 4 > r && e[n - 2][1].type === "whitespace") && (n -= r + 1 === n ? 2 : 4), n > r && (o = {
    type: "atxHeadingText",
    start: e[r][1].start,
    end: e[n][1].end
  }, a = {
    type: "chunkText",
    start: e[r][1].start,
    end: e[n][1].end,
    contentType: "text"
  }, Ce(e, r, n - r + 1, [["enter", o, t], ["enter", a, t], ["exit", a, t], ["exit", o, t]])), e;
}
function ss(e, t, n) {
  let r = 0;
  return o;
  function o(d) {
    return e.enter("atxHeading"), a(d);
  }
  function a(d) {
    return e.enter("atxHeadingSequence"), i(d);
  }
  function i(d) {
    return d === 35 && r++ < 6 ? (e.consume(d), i) : d === null || Q(d) ? (e.exit("atxHeadingSequence"), l(d)) : n(d);
  }
  function l(d) {
    return d === 35 ? (e.enter("atxHeadingSequence"), s(d)) : d === null || F(d) ? (e.exit("atxHeading"), t(d)) : V(d) ? W(e, l, "whitespace")(d) : (e.enter("atxHeadingText"), u(d));
  }
  function s(d) {
    return d === 35 ? (e.consume(d), s) : (e.exit("atxHeadingSequence"), l(d));
  }
  function u(d) {
    return d === null || d === 35 || Q(d) ? (e.exit("atxHeadingText"), l(d)) : (e.consume(d), u);
  }
}
const us = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "search",
  "section",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
], cr = ["pre", "script", "style", "textarea"], cs = {
  name: "htmlFlow",
  tokenize: hs,
  resolveTo: ps,
  concrete: !0
}, ds = {
  tokenize: gs,
  partial: !0
}, ms = {
  tokenize: fs,
  partial: !0
};
function ps(e) {
  let t = e.length;
  for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"); )
    ;
  return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function hs(e, t, n) {
  const r = this;
  let o, a, i, l, s;
  return u;
  function u(b) {
    return d(b);
  }
  function d(b) {
    return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(b), c;
  }
  function c(b) {
    return b === 33 ? (e.consume(b), p) : b === 47 ? (e.consume(b), a = !0, y) : b === 63 ? (e.consume(b), o = 3, r.interrupt ? t : g) : he(b) ? (e.consume(b), i = String.fromCharCode(b), v) : n(b);
  }
  function p(b) {
    return b === 45 ? (e.consume(b), o = 2, m) : b === 91 ? (e.consume(b), o = 5, l = 0, h) : he(b) ? (e.consume(b), o = 4, r.interrupt ? t : g) : n(b);
  }
  function m(b) {
    return b === 45 ? (e.consume(b), r.interrupt ? t : g) : n(b);
  }
  function h(b) {
    const T = "CDATA[";
    return b === T.charCodeAt(l++) ? (e.consume(b), l === T.length ? r.interrupt ? t : A : h) : n(b);
  }
  function y(b) {
    return he(b) ? (e.consume(b), i = String.fromCharCode(b), v) : n(b);
  }
  function v(b) {
    if (b === null || b === 47 || b === 62 || Q(b)) {
      const T = b === 47, J = i.toLowerCase();
      return !T && !a && cr.includes(J) ? (o = 1, r.interrupt ? t(b) : A(b)) : us.includes(i.toLowerCase()) ? (o = 6, T ? (e.consume(b), k) : r.interrupt ? t(b) : A(b)) : (o = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(b) : a ? E(b) : x(b));
    }
    return b === 45 || de(b) ? (e.consume(b), i += String.fromCharCode(b), v) : n(b);
  }
  function k(b) {
    return b === 62 ? (e.consume(b), r.interrupt ? t : A) : n(b);
  }
  function E(b) {
    return V(b) ? (e.consume(b), E) : w(b);
  }
  function x(b) {
    return b === 47 ? (e.consume(b), w) : b === 58 || b === 95 || he(b) ? (e.consume(b), P) : V(b) ? (e.consume(b), x) : w(b);
  }
  function P(b) {
    return b === 45 || b === 46 || b === 58 || b === 95 || de(b) ? (e.consume(b), P) : j(b);
  }
  function j(b) {
    return b === 61 ? (e.consume(b), C) : V(b) ? (e.consume(b), j) : x(b);
  }
  function C(b) {
    return b === null || b === 60 || b === 61 || b === 62 || b === 96 ? n(b) : b === 34 || b === 39 ? (e.consume(b), s = b, R) : V(b) ? (e.consume(b), C) : B(b);
  }
  function R(b) {
    return b === s ? (e.consume(b), s = null, $) : b === null || F(b) ? n(b) : (e.consume(b), R);
  }
  function B(b) {
    return b === null || b === 34 || b === 39 || b === 47 || b === 60 || b === 61 || b === 62 || b === 96 || Q(b) ? j(b) : (e.consume(b), B);
  }
  function $(b) {
    return b === 47 || b === 62 || V(b) ? x(b) : n(b);
  }
  function w(b) {
    return b === 62 ? (e.consume(b), z) : n(b);
  }
  function z(b) {
    return b === null || F(b) ? A(b) : V(b) ? (e.consume(b), z) : n(b);
  }
  function A(b) {
    return b === 45 && o === 2 ? (e.consume(b), K) : b === 60 && o === 1 ? (e.consume(b), Z) : b === 62 && o === 4 ? (e.consume(b), oe) : b === 63 && o === 3 ? (e.consume(b), g) : b === 93 && o === 5 ? (e.consume(b), ae) : F(b) && (o === 6 || o === 7) ? (e.exit("htmlFlowData"), e.check(ds, le, N)(b)) : b === null || F(b) ? (e.exit("htmlFlowData"), N(b)) : (e.consume(b), A);
  }
  function N(b) {
    return e.check(ms, H, le)(b);
  }
  function H(b) {
    return e.enter("lineEnding"), e.consume(b), e.exit("lineEnding"), L;
  }
  function L(b) {
    return b === null || F(b) ? N(b) : (e.enter("htmlFlowData"), A(b));
  }
  function K(b) {
    return b === 45 ? (e.consume(b), g) : A(b);
  }
  function Z(b) {
    return b === 47 ? (e.consume(b), i = "", te) : A(b);
  }
  function te(b) {
    if (b === 62) {
      const T = i.toLowerCase();
      return cr.includes(T) ? (e.consume(b), oe) : A(b);
    }
    return he(b) && i.length < 8 ? (e.consume(b), i += String.fromCharCode(b), te) : A(b);
  }
  function ae(b) {
    return b === 93 ? (e.consume(b), g) : A(b);
  }
  function g(b) {
    return b === 62 ? (e.consume(b), oe) : b === 45 && o === 2 ? (e.consume(b), g) : A(b);
  }
  function oe(b) {
    return b === null || F(b) ? (e.exit("htmlFlowData"), le(b)) : (e.consume(b), oe);
  }
  function le(b) {
    return e.exit("htmlFlow"), t(b);
  }
}
function fs(e, t, n) {
  const r = this;
  return o;
  function o(i) {
    return F(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), a) : n(i);
  }
  function a(i) {
    return r.parser.lazy[r.now().line] ? n(i) : t(i);
  }
}
function gs(e, t, n) {
  return r;
  function r(o) {
    return e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), e.attempt(ft, t, n);
  }
}
const bs = {
  name: "htmlText",
  tokenize: ys
};
function ys(e, t, n) {
  const r = this;
  let o, a, i;
  return l;
  function l(g) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(g), s;
  }
  function s(g) {
    return g === 33 ? (e.consume(g), u) : g === 47 ? (e.consume(g), j) : g === 63 ? (e.consume(g), x) : he(g) ? (e.consume(g), B) : n(g);
  }
  function u(g) {
    return g === 45 ? (e.consume(g), d) : g === 91 ? (e.consume(g), a = 0, h) : he(g) ? (e.consume(g), E) : n(g);
  }
  function d(g) {
    return g === 45 ? (e.consume(g), m) : n(g);
  }
  function c(g) {
    return g === null ? n(g) : g === 45 ? (e.consume(g), p) : F(g) ? (i = c, Z(g)) : (e.consume(g), c);
  }
  function p(g) {
    return g === 45 ? (e.consume(g), m) : c(g);
  }
  function m(g) {
    return g === 62 ? K(g) : g === 45 ? p(g) : c(g);
  }
  function h(g) {
    const oe = "CDATA[";
    return g === oe.charCodeAt(a++) ? (e.consume(g), a === oe.length ? y : h) : n(g);
  }
  function y(g) {
    return g === null ? n(g) : g === 93 ? (e.consume(g), v) : F(g) ? (i = y, Z(g)) : (e.consume(g), y);
  }
  function v(g) {
    return g === 93 ? (e.consume(g), k) : y(g);
  }
  function k(g) {
    return g === 62 ? K(g) : g === 93 ? (e.consume(g), k) : y(g);
  }
  function E(g) {
    return g === null || g === 62 ? K(g) : F(g) ? (i = E, Z(g)) : (e.consume(g), E);
  }
  function x(g) {
    return g === null ? n(g) : g === 63 ? (e.consume(g), P) : F(g) ? (i = x, Z(g)) : (e.consume(g), x);
  }
  function P(g) {
    return g === 62 ? K(g) : x(g);
  }
  function j(g) {
    return he(g) ? (e.consume(g), C) : n(g);
  }
  function C(g) {
    return g === 45 || de(g) ? (e.consume(g), C) : R(g);
  }
  function R(g) {
    return F(g) ? (i = R, Z(g)) : V(g) ? (e.consume(g), R) : K(g);
  }
  function B(g) {
    return g === 45 || de(g) ? (e.consume(g), B) : g === 47 || g === 62 || Q(g) ? $(g) : n(g);
  }
  function $(g) {
    return g === 47 ? (e.consume(g), K) : g === 58 || g === 95 || he(g) ? (e.consume(g), w) : F(g) ? (i = $, Z(g)) : V(g) ? (e.consume(g), $) : K(g);
  }
  function w(g) {
    return g === 45 || g === 46 || g === 58 || g === 95 || de(g) ? (e.consume(g), w) : z(g);
  }
  function z(g) {
    return g === 61 ? (e.consume(g), A) : F(g) ? (i = z, Z(g)) : V(g) ? (e.consume(g), z) : $(g);
  }
  function A(g) {
    return g === null || g === 60 || g === 61 || g === 62 || g === 96 ? n(g) : g === 34 || g === 39 ? (e.consume(g), o = g, N) : F(g) ? (i = A, Z(g)) : V(g) ? (e.consume(g), A) : (e.consume(g), H);
  }
  function N(g) {
    return g === o ? (e.consume(g), o = void 0, L) : g === null ? n(g) : F(g) ? (i = N, Z(g)) : (e.consume(g), N);
  }
  function H(g) {
    return g === null || g === 34 || g === 39 || g === 60 || g === 61 || g === 96 ? n(g) : g === 47 || g === 62 || Q(g) ? $(g) : (e.consume(g), H);
  }
  function L(g) {
    return g === 47 || g === 62 || Q(g) ? $(g) : n(g);
  }
  function K(g) {
    return g === 62 ? (e.consume(g), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(g);
  }
  function Z(g) {
    return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(g), e.exit("lineEnding"), te;
  }
  function te(g) {
    return V(g) ? W(e, ae, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(g) : ae(g);
  }
  function ae(g) {
    return e.enter("htmlTextData"), i(g);
  }
}
const In = {
  name: "labelEnd",
  tokenize: Ss,
  resolveTo: Cs,
  resolveAll: vs
}, ks = {
  tokenize: Es
}, ws = {
  tokenize: Ps
}, xs = {
  tokenize: Ds
};
function vs(e) {
  let t = -1;
  for (; ++t < e.length; ) {
    const n = e[t][1];
    (n.type === "labelImage" || n.type === "labelLink" || n.type === "labelEnd") && (e.splice(t + 1, n.type === "labelImage" ? 4 : 2), n.type = "data", t++);
  }
  return e;
}
function Cs(e, t) {
  let n = e.length, r = 0, o, a, i, l;
  for (; n--; )
    if (o = e[n][1], a) {
      if (o.type === "link" || o.type === "labelLink" && o._inactive)
        break;
      e[n][0] === "enter" && o.type === "labelLink" && (o._inactive = !0);
    } else if (i) {
      if (e[n][0] === "enter" && (o.type === "labelImage" || o.type === "labelLink") && !o._balanced && (a = n, o.type !== "labelLink")) {
        r = 2;
        break;
      }
    } else o.type === "labelEnd" && (i = n);
  const s = {
    type: e[a][1].type === "labelLink" ? "link" : "image",
    start: Object.assign({}, e[a][1].start),
    end: Object.assign({}, e[e.length - 1][1].end)
  }, u = {
    type: "label",
    start: Object.assign({}, e[a][1].start),
    end: Object.assign({}, e[i][1].end)
  }, d = {
    type: "labelText",
    start: Object.assign({}, e[a + r + 2][1].end),
    end: Object.assign({}, e[i - 2][1].start)
  };
  return l = [["enter", s, t], ["enter", u, t]], l = ve(l, e.slice(a + 1, a + r + 3)), l = ve(l, [["enter", d, t]]), l = ve(l, Lt(t.parser.constructs.insideSpan.null, e.slice(a + r + 4, i - 3), t)), l = ve(l, [["exit", d, t], e[i - 2], e[i - 1], ["exit", u, t]]), l = ve(l, e.slice(i + 1)), l = ve(l, [["exit", s, t]]), Ce(e, a, e.length, l), e;
}
function Ss(e, t, n) {
  const r = this;
  let o = r.events.length, a, i;
  for (; o--; )
    if ((r.events[o][1].type === "labelImage" || r.events[o][1].type === "labelLink") && !r.events[o][1]._balanced) {
      a = r.events[o][1];
      break;
    }
  return l;
  function l(p) {
    return a ? a._inactive ? c(p) : (i = r.parser.defined.includes(Pe(r.sliceSerialize({
      start: a.end,
      end: r.now()
    }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(p), e.exit("labelMarker"), e.exit("labelEnd"), s) : n(p);
  }
  function s(p) {
    return p === 40 ? e.attempt(ks, d, i ? d : c)(p) : p === 91 ? e.attempt(ws, d, i ? u : c)(p) : i ? d(p) : c(p);
  }
  function u(p) {
    return e.attempt(xs, d, c)(p);
  }
  function d(p) {
    return t(p);
  }
  function c(p) {
    return a._balanced = !0, n(p);
  }
}
function Es(e, t, n) {
  return r;
  function r(c) {
    return e.enter("resource"), e.enter("resourceMarker"), e.consume(c), e.exit("resourceMarker"), o;
  }
  function o(c) {
    return Q(c) ? mt(e, a)(c) : a(c);
  }
  function a(c) {
    return c === 41 ? d(c) : ko(e, i, l, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(c);
  }
  function i(c) {
    return Q(c) ? mt(e, s)(c) : d(c);
  }
  function l(c) {
    return n(c);
  }
  function s(c) {
    return c === 34 || c === 39 || c === 40 ? xo(e, u, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(c) : d(c);
  }
  function u(c) {
    return Q(c) ? mt(e, d)(c) : d(c);
  }
  function d(c) {
    return c === 41 ? (e.enter("resourceMarker"), e.consume(c), e.exit("resourceMarker"), e.exit("resource"), t) : n(c);
  }
}
function Ps(e, t, n) {
  const r = this;
  return o;
  function o(l) {
    return wo.call(r, e, a, i, "reference", "referenceMarker", "referenceString")(l);
  }
  function a(l) {
    return r.parser.defined.includes(Pe(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(l) : n(l);
  }
  function i(l) {
    return n(l);
  }
}
function Ds(e, t, n) {
  return r;
  function r(a) {
    return e.enter("reference"), e.enter("referenceMarker"), e.consume(a), e.exit("referenceMarker"), o;
  }
  function o(a) {
    return a === 93 ? (e.enter("referenceMarker"), e.consume(a), e.exit("referenceMarker"), e.exit("reference"), t) : n(a);
  }
}
const Is = {
  name: "labelStartImage",
  tokenize: zs,
  resolveAll: In.resolveAll
};
function zs(e, t, n) {
  const r = this;
  return o;
  function o(l) {
    return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(l), e.exit("labelImageMarker"), a;
  }
  function a(l) {
    return l === 91 ? (e.enter("labelMarker"), e.consume(l), e.exit("labelMarker"), e.exit("labelImage"), i) : n(l);
  }
  function i(l) {
    return l === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(l) : t(l);
  }
}
const js = {
  name: "labelStartLink",
  tokenize: As,
  resolveAll: In.resolveAll
};
function As(e, t, n) {
  const r = this;
  return o;
  function o(i) {
    return e.enter("labelLink"), e.enter("labelMarker"), e.consume(i), e.exit("labelMarker"), e.exit("labelLink"), a;
  }
  function a(i) {
    return i === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(i) : t(i);
  }
}
const qt = {
  name: "lineEnding",
  tokenize: Ts
};
function Ts(e, t) {
  return n;
  function n(r) {
    return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), W(e, t, "linePrefix");
  }
}
const vt = {
  name: "thematicBreak",
  tokenize: Fs
};
function Fs(e, t, n) {
  let r = 0, o;
  return a;
  function a(u) {
    return e.enter("thematicBreak"), i(u);
  }
  function i(u) {
    return o = u, l(u);
  }
  function l(u) {
    return u === o ? (e.enter("thematicBreakSequence"), s(u)) : r >= 3 && (u === null || F(u)) ? (e.exit("thematicBreak"), t(u)) : n(u);
  }
  function s(u) {
    return u === o ? (e.consume(u), r++, s) : (e.exit("thematicBreakSequence"), V(u) ? W(e, l, "whitespace")(u) : l(u));
  }
}
const be = {
  name: "list",
  tokenize: Ms,
  continuation: {
    tokenize: Os
  },
  exit: _s
}, Ls = {
  tokenize: Bs,
  partial: !0
}, Rs = {
  tokenize: Ns,
  partial: !0
};
function Ms(e, t, n) {
  const r = this, o = r.events[r.events.length - 1];
  let a = o && o[1].type === "linePrefix" ? o[2].sliceSerialize(o[1], !0).length : 0, i = 0;
  return l;
  function l(m) {
    const h = r.containerState.type || (m === 42 || m === 43 || m === 45 ? "listUnordered" : "listOrdered");
    if (h === "listUnordered" ? !r.containerState.marker || m === r.containerState.marker : dn(m)) {
      if (r.containerState.type || (r.containerState.type = h, e.enter(h, {
        _container: !0
      })), h === "listUnordered")
        return e.enter("listItemPrefix"), m === 42 || m === 45 ? e.check(vt, n, u)(m) : u(m);
      if (!r.interrupt || m === 49)
        return e.enter("listItemPrefix"), e.enter("listItemValue"), s(m);
    }
    return n(m);
  }
  function s(m) {
    return dn(m) && ++i < 10 ? (e.consume(m), s) : (!r.interrupt || i < 2) && (r.containerState.marker ? m === r.containerState.marker : m === 41 || m === 46) ? (e.exit("listItemValue"), u(m)) : n(m);
  }
  function u(m) {
    return e.enter("listItemMarker"), e.consume(m), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || m, e.check(
      ft,
      // Can’t be empty when interrupting.
      r.interrupt ? n : d,
      e.attempt(Ls, p, c)
    );
  }
  function d(m) {
    return r.containerState.initialBlankLine = !0, a++, p(m);
  }
  function c(m) {
    return V(m) ? (e.enter("listItemPrefixWhitespace"), e.consume(m), e.exit("listItemPrefixWhitespace"), p) : n(m);
  }
  function p(m) {
    return r.containerState.size = a + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(m);
  }
}
function Os(e, t, n) {
  const r = this;
  return r.containerState._closeFlow = void 0, e.check(ft, o, a);
  function o(l) {
    return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, W(e, t, "listItemIndent", r.containerState.size + 1)(l);
  }
  function a(l) {
    return r.containerState.furtherBlankLines || !V(l) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, i(l)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(Rs, t, i)(l));
  }
  function i(l) {
    return r.containerState._closeFlow = !0, r.interrupt = void 0, W(e, e.attempt(be, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(l);
  }
}
function Ns(e, t, n) {
  const r = this;
  return W(e, o, "listItemIndent", r.containerState.size + 1);
  function o(a) {
    const i = r.events[r.events.length - 1];
    return i && i[1].type === "listItemIndent" && i[2].sliceSerialize(i[1], !0).length === r.containerState.size ? t(a) : n(a);
  }
}
function _s(e) {
  e.exit(this.containerState.type);
}
function Bs(e, t, n) {
  const r = this;
  return W(e, o, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function o(a) {
    const i = r.events[r.events.length - 1];
    return !V(a) && i && i[1].type === "listItemPrefixWhitespace" ? t(a) : n(a);
  }
}
const dr = {
  name: "setextUnderline",
  tokenize: Us,
  resolveTo: $s
};
function $s(e, t) {
  let n = e.length, r, o, a;
  for (; n--; )
    if (e[n][0] === "enter") {
      if (e[n][1].type === "content") {
        r = n;
        break;
      }
      e[n][1].type === "paragraph" && (o = n);
    } else
      e[n][1].type === "content" && e.splice(n, 1), !a && e[n][1].type === "definition" && (a = n);
  const i = {
    type: "setextHeading",
    start: Object.assign({}, e[o][1].start),
    end: Object.assign({}, e[e.length - 1][1].end)
  };
  return e[o][1].type = "setextHeadingText", a ? (e.splice(o, 0, ["enter", i, t]), e.splice(a + 1, 0, ["exit", e[r][1], t]), e[r][1].end = Object.assign({}, e[a][1].end)) : e[r][1] = i, e.push(["exit", i, t]), e;
}
function Us(e, t, n) {
  const r = this;
  let o;
  return a;
  function a(u) {
    let d = r.events.length, c;
    for (; d--; )
      if (r.events[d][1].type !== "lineEnding" && r.events[d][1].type !== "linePrefix" && r.events[d][1].type !== "content") {
        c = r.events[d][1].type === "paragraph";
        break;
      }
    return !r.parser.lazy[r.now().line] && (r.interrupt || c) ? (e.enter("setextHeadingLine"), o = u, i(u)) : n(u);
  }
  function i(u) {
    return e.enter("setextHeadingLineSequence"), l(u);
  }
  function l(u) {
    return u === o ? (e.consume(u), l) : (e.exit("setextHeadingLineSequence"), V(u) ? W(e, s, "lineSuffix")(u) : s(u));
  }
  function s(u) {
    return u === null || F(u) ? (e.exit("setextHeadingLine"), t(u)) : n(u);
  }
}
const Vs = {
  tokenize: Hs
};
function Hs(e) {
  const t = this, n = e.attempt(
    // Try to parse a blank line.
    ft,
    r,
    // Try to parse initial flow (essentially, only code).
    e.attempt(
      this.parser.constructs.flowInitial,
      o,
      W(
        e,
        e.attempt(
          this.parser.constructs.flow,
          o,
          e.attempt(Kl, o)
        ),
        "linePrefix"
      )
    )
  );
  return n;
  function r(a) {
    if (a === null) {
      e.consume(a);
      return;
    }
    return e.enter("lineEndingBlank"), e.consume(a), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n;
  }
  function o(a) {
    if (a === null) {
      e.consume(a);
      return;
    }
    return e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), t.currentConstruct = void 0, n;
  }
}
const qs = {
  resolveAll: Co()
}, Ws = vo("string"), Gs = vo("text");
function vo(e) {
  return {
    tokenize: t,
    resolveAll: Co(
      e === "text" ? Js : void 0
    )
  };
  function t(n) {
    const r = this, o = this.parser.constructs[e], a = n.attempt(o, i, l);
    return i;
    function i(d) {
      return u(d) ? a(d) : l(d);
    }
    function l(d) {
      if (d === null) {
        n.consume(d);
        return;
      }
      return n.enter("data"), n.consume(d), s;
    }
    function s(d) {
      return u(d) ? (n.exit("data"), a(d)) : (n.consume(d), s);
    }
    function u(d) {
      if (d === null)
        return !0;
      const c = o[d];
      let p = -1;
      if (c)
        for (; ++p < c.length; ) {
          const m = c[p];
          if (!m.previous || m.previous.call(r, r.previous))
            return !0;
        }
      return !1;
    }
  }
}
function Co(e) {
  return t;
  function t(n, r) {
    let o = -1, a;
    for (; ++o <= n.length; )
      a === void 0 ? n[o] && n[o][1].type === "data" && (a = o, o++) : (!n[o] || n[o][1].type !== "data") && (o !== a + 2 && (n[a][1].end = n[o - 1][1].end, n.splice(a + 2, o - a - 2), o = a + 2), a = void 0);
    return e ? e(n, r) : n;
  }
}
function Js(e, t) {
  let n = 0;
  for (; ++n <= e.length; )
    if ((n === e.length || e[n][1].type === "lineEnding") && e[n - 1][1].type === "data") {
      const r = e[n - 1][1], o = t.sliceStream(r);
      let a = o.length, i = -1, l = 0, s;
      for (; a--; ) {
        const u = o[a];
        if (typeof u == "string") {
          for (i = u.length; u.charCodeAt(i - 1) === 32; )
            l++, i--;
          if (i) break;
          i = -1;
        } else if (u === -2)
          s = !0, l++;
        else if (u !== -1) {
          a++;
          break;
        }
      }
      if (l) {
        const u = {
          type: n === e.length || s || l < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            line: r.end.line,
            column: r.end.column - l,
            offset: r.end.offset - l,
            _index: r.start._index + a,
            _bufferIndex: a ? i : r.start._bufferIndex + i
          },
          end: Object.assign({}, r.end)
        };
        r.end = Object.assign({}, u.start), r.start.offset === r.end.offset ? Object.assign(r, u) : (e.splice(
          n,
          0,
          ["enter", u, t],
          ["exit", u, t]
        ), n += 2);
      }
      n++;
    }
  return e;
}
function Ks(e, t, n) {
  let r = Object.assign(
    n ? Object.assign({}, n) : {
      line: 1,
      column: 1,
      offset: 0
    },
    {
      _index: 0,
      _bufferIndex: -1
    }
  );
  const o = {}, a = [];
  let i = [], l = [];
  const s = {
    consume: E,
    enter: x,
    exit: P,
    attempt: R(j),
    check: R(C),
    interrupt: R(C, {
      interrupt: !0
    })
  }, u = {
    previous: null,
    code: null,
    containerState: {},
    events: [],
    parser: e,
    sliceStream: m,
    sliceSerialize: p,
    now: h,
    defineSkip: y,
    write: c
  };
  let d = t.tokenize.call(u, s);
  return t.resolveAll && a.push(t), u;
  function c(z) {
    return i = ve(i, z), v(), i[i.length - 1] !== null ? [] : (B(t, 0), u.events = Lt(a, u.events, u), u.events);
  }
  function p(z, A) {
    return Qs(m(z), A);
  }
  function m(z) {
    return Ys(i, z);
  }
  function h() {
    const { line: z, column: A, offset: N, _index: H, _bufferIndex: L } = r;
    return {
      line: z,
      column: A,
      offset: N,
      _index: H,
      _bufferIndex: L
    };
  }
  function y(z) {
    o[z.line] = z.column, w();
  }
  function v() {
    let z;
    for (; r._index < i.length; ) {
      const A = i[r._index];
      if (typeof A == "string")
        for (z = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === z && r._bufferIndex < A.length; )
          k(A.charCodeAt(r._bufferIndex));
      else
        k(A);
    }
  }
  function k(z) {
    d = d(z);
  }
  function E(z) {
    F(z) ? (r.line++, r.column = 1, r.offset += z === -3 ? 2 : 1, w()) : z !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === i[r._index].length && (r._bufferIndex = -1, r._index++)), u.previous = z;
  }
  function x(z, A) {
    const N = A || {};
    return N.type = z, N.start = h(), u.events.push(["enter", N, u]), l.push(N), N;
  }
  function P(z) {
    const A = l.pop();
    return A.end = h(), u.events.push(["exit", A, u]), A;
  }
  function j(z, A) {
    B(z, A.from);
  }
  function C(z, A) {
    A.restore();
  }
  function R(z, A) {
    return N;
    function N(H, L, K) {
      let Z, te, ae, g;
      return Array.isArray(H) ? le(H) : "tokenize" in H ? (
        // @ts-expect-error Looks like a construct.
        le([H])
      ) : oe(H);
      function oe(G) {
        return fe;
        function fe(ce) {
          const ge = ce !== null && G[ce], we = ce !== null && G.null, xe = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(ge) ? ge : ge ? [ge] : [],
            ...Array.isArray(we) ? we : we ? [we] : []
          ];
          return le(xe)(ce);
        }
      }
      function le(G) {
        return Z = G, te = 0, G.length === 0 ? K : b(G[te]);
      }
      function b(G) {
        return fe;
        function fe(ce) {
          return g = $(), ae = G, G.partial || (u.currentConstruct = G), G.name && u.parser.constructs.disable.null.includes(G.name) ? J() : G.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            A ? Object.assign(Object.create(u), A) : u,
            s,
            T,
            J
          )(ce);
        }
      }
      function T(G) {
        return z(ae, g), L;
      }
      function J(G) {
        return g.restore(), ++te < Z.length ? b(Z[te]) : K;
      }
    }
  }
  function B(z, A) {
    z.resolveAll && !a.includes(z) && a.push(z), z.resolve && Ce(
      u.events,
      A,
      u.events.length - A,
      z.resolve(u.events.slice(A), u)
    ), z.resolveTo && (u.events = z.resolveTo(u.events, u));
  }
  function $() {
    const z = h(), A = u.previous, N = u.currentConstruct, H = u.events.length, L = Array.from(l);
    return {
      restore: K,
      from: H
    };
    function K() {
      r = z, u.previous = A, u.currentConstruct = N, u.events.length = H, l = L, w();
    }
  }
  function w() {
    r.line in o && r.column < 2 && (r.column = o[r.line], r.offset += o[r.line] - 1);
  }
}
function Ys(e, t) {
  const n = t.start._index, r = t.start._bufferIndex, o = t.end._index, a = t.end._bufferIndex;
  let i;
  if (n === o)
    i = [e[n].slice(r, a)];
  else {
    if (i = e.slice(n, o), r > -1) {
      const l = i[0];
      typeof l == "string" ? i[0] = l.slice(r) : i.shift();
    }
    a > 0 && i.push(e[o].slice(0, a));
  }
  return i;
}
function Qs(e, t) {
  let n = -1;
  const r = [];
  let o;
  for (; ++n < e.length; ) {
    const a = e[n];
    let i;
    if (typeof a == "string")
      i = a;
    else
      switch (a) {
        case -5: {
          i = "\r";
          break;
        }
        case -4: {
          i = `
`;
          break;
        }
        case -3: {
          i = `\r
`;
          break;
        }
        case -2: {
          i = t ? " " : "	";
          break;
        }
        case -1: {
          if (!t && o) continue;
          i = " ";
          break;
        }
        default:
          i = String.fromCharCode(a);
      }
    o = a === -2, r.push(i);
  }
  return r.join("");
}
const Xs = {
  42: be,
  43: be,
  45: be,
  48: be,
  49: be,
  50: be,
  51: be,
  52: be,
  53: be,
  54: be,
  55: be,
  56: be,
  57: be,
  62: fo
}, Zs = {
  91: es
}, eu = {
  [-2]: Ht,
  [-1]: Ht,
  32: Ht
}, tu = {
  35: as,
  42: vt,
  45: [dr, vt],
  60: cs,
  61: dr,
  95: vt,
  96: ur,
  126: ur
}, nu = {
  38: bo,
  92: go
}, ru = {
  [-5]: qt,
  [-4]: qt,
  [-3]: qt,
  33: Is,
  38: bo,
  42: mn,
  60: [jl, bs],
  91: js,
  92: [os, go],
  93: In,
  95: mn,
  96: Vl
}, ou = {
  null: [mn, qs]
}, iu = {
  null: [42, 95]
}, au = {
  null: []
}, lu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: iu,
  contentInitial: Zs,
  disable: au,
  document: Xs,
  flow: tu,
  flowInitial: eu,
  insideSpan: ou,
  string: nu,
  text: ru
}, Symbol.toStringTag, { value: "Module" }));
function su(e) {
  const n = (
    /** @type {FullNormalizedExtension} */
    po([lu, ...(e || {}).extensions || []])
  ), r = {
    defined: [],
    lazy: {},
    constructs: n,
    content: o(Cl),
    document: o(El),
    flow: o(Vs),
    string: o(Ws),
    text: o(Gs)
  };
  return r;
  function o(a) {
    return i;
    function i(l) {
      return Ks(r, a, l);
    }
  }
}
function uu(e) {
  for (; !yo(e); )
    ;
  return e;
}
const mr = /[\0\t\n\r]/g;
function cu() {
  let e = 1, t = "", n = !0, r;
  return o;
  function o(a, i, l) {
    const s = [];
    let u, d, c, p, m;
    for (a = t + (typeof a == "string" ? a.toString() : new TextDecoder(i || void 0).decode(a)), c = 0, t = "", n && (a.charCodeAt(0) === 65279 && c++, n = void 0); c < a.length; ) {
      if (mr.lastIndex = c, u = mr.exec(a), p = u && u.index !== void 0 ? u.index : a.length, m = a.charCodeAt(p), !u) {
        t = a.slice(c);
        break;
      }
      if (m === 10 && c === p && r)
        s.push(-3), r = void 0;
      else
        switch (r && (s.push(-5), r = void 0), c < p && (s.push(a.slice(c, p)), e += p - c), m) {
          case 0: {
            s.push(65533), e++;
            break;
          }
          case 9: {
            for (d = Math.ceil(e / 4) * 4, s.push(-2); e++ < d; ) s.push(-1);
            break;
          }
          case 10: {
            s.push(-4), e = 1;
            break;
          }
          default:
            r = !0, e = 1;
        }
      c = p + 1;
    }
    return l && (r && s.push(-5), t && s.push(t), s.push(null)), s;
  }
}
const du = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function mu(e) {
  return e.replace(du, pu);
}
function pu(e, t, n) {
  if (t)
    return t;
  if (n.charCodeAt(0) === 35) {
    const o = n.charCodeAt(1), a = o === 120 || o === 88;
    return ho(n.slice(a ? 2 : 1), a ? 16 : 10);
  }
  return Dn(n) || e;
}
const So = {}.hasOwnProperty;
function hu(e, t, n) {
  return typeof t != "string" && (n = t, t = void 0), fu(n)(uu(su(n).document().write(cu()(e, t, !0))));
}
function fu(e) {
  const t = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: a(it),
      autolinkProtocol: $,
      autolinkEmail: $,
      atxHeading: a(bt),
      blockQuote: a(we),
      characterEscape: $,
      characterReference: $,
      codeFenced: a(xe),
      codeFencedFenceInfo: i,
      codeFencedFenceMeta: i,
      codeIndented: a(xe, i),
      codeText: a(ue, i),
      codeTextData: $,
      data: $,
      codeFlowValue: $,
      definition: a(Le),
      definitionDestinationString: i,
      definitionLabelString: i,
      definitionTitleString: i,
      emphasis: a(Je),
      hardBreakEscape: a(nt),
      hardBreakTrailing: a(nt),
      htmlFlow: a(rt, i),
      htmlFlowData: $,
      htmlText: a(rt, i),
      htmlTextData: $,
      image: a(ot),
      label: i,
      link: a(it),
      listItem: a(oi),
      listItemValue: p,
      listOrdered: a(ze, c),
      listUnordered: a(ze),
      paragraph: a(ii),
      reference: b,
      referenceString: i,
      resourceDestinationString: i,
      resourceTitleString: i,
      setextHeading: a(bt),
      strong: a(ai),
      thematicBreak: a(si)
    },
    exit: {
      atxHeading: s(),
      atxHeadingSequence: j,
      autolink: s(),
      autolinkEmail: ge,
      autolinkProtocol: ce,
      blockQuote: s(),
      characterEscapeValue: w,
      characterReferenceMarkerHexadecimal: J,
      characterReferenceMarkerNumeric: J,
      characterReferenceValue: G,
      characterReference: fe,
      codeFenced: s(v),
      codeFencedFence: y,
      codeFencedFenceInfo: m,
      codeFencedFenceMeta: h,
      codeFlowValue: w,
      codeIndented: s(k),
      codeText: s(L),
      codeTextData: w,
      data: w,
      definition: s(),
      definitionDestinationString: P,
      definitionLabelString: E,
      definitionTitleString: x,
      emphasis: s(),
      hardBreakEscape: s(A),
      hardBreakTrailing: s(A),
      htmlFlow: s(N),
      htmlFlowData: w,
      htmlText: s(H),
      htmlTextData: w,
      image: s(Z),
      label: ae,
      labelText: te,
      lineEnding: z,
      link: s(K),
      listItem: s(),
      listOrdered: s(),
      listUnordered: s(),
      paragraph: s(),
      referenceString: T,
      resourceDestinationString: g,
      resourceTitleString: oe,
      resource: le,
      setextHeading: s(B),
      setextHeadingLineSequence: R,
      setextHeadingText: C,
      strong: s(),
      thematicBreak: s()
    }
  };
  Eo(t, (e || {}).mdastExtensions || []);
  const n = {};
  return r;
  function r(S) {
    let I = {
      type: "root",
      children: []
    };
    const M = {
      stack: [I],
      tokenStack: [],
      config: t,
      enter: l,
      exit: u,
      buffer: i,
      resume: d,
      data: n
    }, q = [];
    let Y = -1;
    for (; ++Y < S.length; )
      if (S[Y][1].type === "listOrdered" || S[Y][1].type === "listUnordered")
        if (S[Y][0] === "enter")
          q.push(Y);
        else {
          const Ee = q.pop();
          Y = o(S, Ee, Y);
        }
    for (Y = -1; ++Y < S.length; ) {
      const Ee = t[S[Y][0]];
      So.call(Ee, S[Y][1].type) && Ee[S[Y][1].type].call(Object.assign({
        sliceSerialize: S[Y][2].sliceSerialize
      }, M), S[Y][1]);
    }
    if (M.tokenStack.length > 0) {
      const Ee = M.tokenStack[M.tokenStack.length - 1];
      (Ee[1] || pr).call(M, void 0, Ee[0]);
    }
    for (I.position = {
      start: Re(S.length > 0 ? S[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: Re(S.length > 0 ? S[S.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    }, Y = -1; ++Y < t.transforms.length; )
      I = t.transforms[Y](I) || I;
    return I;
  }
  function o(S, I, M) {
    let q = I - 1, Y = -1, Ee = !1, $e, je, at, lt;
    for (; ++q <= M; ) {
      const ye = S[q];
      switch (ye[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          ye[0] === "enter" ? Y++ : Y--, lt = void 0;
          break;
        }
        case "lineEndingBlank": {
          ye[0] === "enter" && ($e && !lt && !Y && !at && (at = q), lt = void 0);
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          lt = void 0;
      }
      if (!Y && ye[0] === "enter" && ye[1].type === "listItemPrefix" || Y === -1 && ye[0] === "exit" && (ye[1].type === "listUnordered" || ye[1].type === "listOrdered")) {
        if ($e) {
          let Ke = q;
          for (je = void 0; Ke--; ) {
            const Ae = S[Ke];
            if (Ae[1].type === "lineEnding" || Ae[1].type === "lineEndingBlank") {
              if (Ae[0] === "exit") continue;
              je && (S[je][1].type = "lineEndingBlank", Ee = !0), Ae[1].type = "lineEnding", je = Ke;
            } else if (!(Ae[1].type === "linePrefix" || Ae[1].type === "blockQuotePrefix" || Ae[1].type === "blockQuotePrefixWhitespace" || Ae[1].type === "blockQuoteMarker" || Ae[1].type === "listItemIndent")) break;
          }
          at && (!je || at < je) && ($e._spread = !0), $e.end = Object.assign({}, je ? S[je][1].start : ye[1].end), S.splice(je || q, 0, ["exit", $e, ye[2]]), q++, M++;
        }
        if (ye[1].type === "listItemPrefix") {
          const Ke = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, ye[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          $e = Ke, S.splice(q, 0, ["enter", Ke, ye[2]]), q++, M++, at = void 0, lt = !0;
        }
      }
    }
    return S[I][1]._spread = Ee, M;
  }
  function a(S, I) {
    return M;
    function M(q) {
      l.call(this, S(q), q), I && I.call(this, q);
    }
  }
  function i() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function l(S, I, M) {
    this.stack[this.stack.length - 1].children.push(S), this.stack.push(S), this.tokenStack.push([I, M]), S.position = {
      start: Re(I.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function s(S) {
    return I;
    function I(M) {
      S && S.call(this, M), u.call(this, M);
    }
  }
  function u(S, I) {
    const M = this.stack.pop(), q = this.tokenStack.pop();
    if (q)
      q[0].type !== S.type && (I ? I.call(this, S, q[0]) : (q[1] || pr).call(this, S, q[0]));
    else throw new Error("Cannot close `" + S.type + "` (" + dt({
      start: S.start,
      end: S.end
    }) + "): it’s not open");
    M.position.end = Re(S.end);
  }
  function d() {
    return Pn(this.stack.pop());
  }
  function c() {
    this.data.expectingFirstListItemValue = !0;
  }
  function p(S) {
    if (this.data.expectingFirstListItemValue) {
      const I = this.stack[this.stack.length - 2];
      I.start = Number.parseInt(this.sliceSerialize(S), 10), this.data.expectingFirstListItemValue = void 0;
    }
  }
  function m() {
    const S = this.resume(), I = this.stack[this.stack.length - 1];
    I.lang = S;
  }
  function h() {
    const S = this.resume(), I = this.stack[this.stack.length - 1];
    I.meta = S;
  }
  function y() {
    this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
  }
  function v() {
    const S = this.resume(), I = this.stack[this.stack.length - 1];
    I.value = S.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
  }
  function k() {
    const S = this.resume(), I = this.stack[this.stack.length - 1];
    I.value = S.replace(/(\r?\n|\r)$/g, "");
  }
  function E(S) {
    const I = this.resume(), M = this.stack[this.stack.length - 1];
    M.label = I, M.identifier = Pe(this.sliceSerialize(S)).toLowerCase();
  }
  function x() {
    const S = this.resume(), I = this.stack[this.stack.length - 1];
    I.title = S;
  }
  function P() {
    const S = this.resume(), I = this.stack[this.stack.length - 1];
    I.url = S;
  }
  function j(S) {
    const I = this.stack[this.stack.length - 1];
    if (!I.depth) {
      const M = this.sliceSerialize(S).length;
      I.depth = M;
    }
  }
  function C() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function R(S) {
    const I = this.stack[this.stack.length - 1];
    I.depth = this.sliceSerialize(S).codePointAt(0) === 61 ? 1 : 2;
  }
  function B() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function $(S) {
    const M = this.stack[this.stack.length - 1].children;
    let q = M[M.length - 1];
    (!q || q.type !== "text") && (q = li(), q.position = {
      start: Re(S.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, M.push(q)), this.stack.push(q);
  }
  function w(S) {
    const I = this.stack.pop();
    I.value += this.sliceSerialize(S), I.position.end = Re(S.end);
  }
  function z(S) {
    const I = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const M = I.children[I.children.length - 1];
      M.position.end = Re(S.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(I.type) && ($.call(this, S), w.call(this, S));
  }
  function A() {
    this.data.atHardBreak = !0;
  }
  function N() {
    const S = this.resume(), I = this.stack[this.stack.length - 1];
    I.value = S;
  }
  function H() {
    const S = this.resume(), I = this.stack[this.stack.length - 1];
    I.value = S;
  }
  function L() {
    const S = this.resume(), I = this.stack[this.stack.length - 1];
    I.value = S;
  }
  function K() {
    const S = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const I = this.data.referenceType || "shortcut";
      S.type += "Reference", S.referenceType = I, delete S.url, delete S.title;
    } else
      delete S.identifier, delete S.label;
    this.data.referenceType = void 0;
  }
  function Z() {
    const S = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const I = this.data.referenceType || "shortcut";
      S.type += "Reference", S.referenceType = I, delete S.url, delete S.title;
    } else
      delete S.identifier, delete S.label;
    this.data.referenceType = void 0;
  }
  function te(S) {
    const I = this.sliceSerialize(S), M = this.stack[this.stack.length - 2];
    M.label = mu(I), M.identifier = Pe(I).toLowerCase();
  }
  function ae() {
    const S = this.stack[this.stack.length - 1], I = this.resume(), M = this.stack[this.stack.length - 1];
    if (this.data.inReference = !0, M.type === "link") {
      const q = S.children;
      M.children = q;
    } else
      M.alt = I;
  }
  function g() {
    const S = this.resume(), I = this.stack[this.stack.length - 1];
    I.url = S;
  }
  function oe() {
    const S = this.resume(), I = this.stack[this.stack.length - 1];
    I.title = S;
  }
  function le() {
    this.data.inReference = void 0;
  }
  function b() {
    this.data.referenceType = "collapsed";
  }
  function T(S) {
    const I = this.resume(), M = this.stack[this.stack.length - 1];
    M.label = I, M.identifier = Pe(this.sliceSerialize(S)).toLowerCase(), this.data.referenceType = "full";
  }
  function J(S) {
    this.data.characterReferenceType = S.type;
  }
  function G(S) {
    const I = this.sliceSerialize(S), M = this.data.characterReferenceType;
    let q;
    M ? (q = ho(I, M === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : q = Dn(I);
    const Y = this.stack[this.stack.length - 1];
    Y.value += q;
  }
  function fe(S) {
    const I = this.stack.pop();
    I.position.end = Re(S.end);
  }
  function ce(S) {
    w.call(this, S);
    const I = this.stack[this.stack.length - 1];
    I.url = this.sliceSerialize(S);
  }
  function ge(S) {
    w.call(this, S);
    const I = this.stack[this.stack.length - 1];
    I.url = "mailto:" + this.sliceSerialize(S);
  }
  function we() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function xe() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function ue() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function Le() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function Je() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function bt() {
    return {
      type: "heading",
      // @ts-expect-error `depth` will be set later.
      depth: 0,
      children: []
    };
  }
  function nt() {
    return {
      type: "break"
    };
  }
  function rt() {
    return {
      type: "html",
      value: ""
    };
  }
  function ot() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function it() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function ze(S) {
    return {
      type: "list",
      ordered: S.type === "listOrdered",
      start: null,
      spread: S._spread,
      children: []
    };
  }
  function oi(S) {
    return {
      type: "listItem",
      spread: S._spread,
      checked: null,
      children: []
    };
  }
  function ii() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function ai() {
    return {
      type: "strong",
      children: []
    };
  }
  function li() {
    return {
      type: "text",
      value: ""
    };
  }
  function si() {
    return {
      type: "thematicBreak"
    };
  }
}
function Re(e) {
  return {
    line: e.line,
    column: e.column,
    offset: e.offset
  };
}
function Eo(e, t) {
  let n = -1;
  for (; ++n < t.length; ) {
    const r = t[n];
    Array.isArray(r) ? Eo(e, r) : gu(e, r);
  }
}
function gu(e, t) {
  let n;
  for (n in t)
    if (So.call(t, n))
      switch (n) {
        case "canContainEols": {
          const r = t[n];
          r && e[n].push(...r);
          break;
        }
        case "transforms": {
          const r = t[n];
          r && e[n].push(...r);
          break;
        }
        case "enter":
        case "exit": {
          const r = t[n];
          r && Object.assign(e[n], r);
          break;
        }
      }
}
function pr(e, t) {
  throw e ? new Error("Cannot close `" + e.type + "` (" + dt({
    start: e.start,
    end: e.end
  }) + "): a different token (`" + t.type + "`, " + dt({
    start: t.start,
    end: t.end
  }) + ") is open") : new Error("Cannot close document, a token (`" + t.type + "`, " + dt({
    start: t.start,
    end: t.end
  }) + ") is still open");
}
function bu(e) {
  const t = this;
  t.parser = n;
  function n(r) {
    return hu(r, {
      ...t.data("settings"),
      ...e,
      // Note: these options are not in the readme.
      // The goal is for them to be set by plugins on `data` instead of being
      // passed by users.
      extensions: t.data("micromarkExtensions") || [],
      mdastExtensions: t.data("fromMarkdownExtensions") || []
    });
  }
}
function yu(e, t) {
  const n = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(t), !0)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function ku(e, t) {
  const n = { type: "element", tagName: "br", properties: {}, children: [] };
  return e.patch(t, n), [e.applyData(t, n), { type: "text", value: `
` }];
}
function wu(e, t) {
  const n = t.value ? t.value + `
` : "", r = {};
  t.lang && (r.className = ["language-" + t.lang]);
  let o = {
    type: "element",
    tagName: "code",
    properties: r,
    children: [{ type: "text", value: n }]
  };
  return t.meta && (o.data = { meta: t.meta }), e.patch(t, o), o = e.applyData(t, o), o = { type: "element", tagName: "pre", properties: {}, children: [o] }, e.patch(t, o), o;
}
function xu(e, t) {
  const n = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function vu(e, t) {
  const n = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Cu(e, t) {
  const n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", r = String(t.identifier).toUpperCase(), o = tt(r.toLowerCase()), a = e.footnoteOrder.indexOf(r);
  let i, l = e.footnoteCounts.get(r);
  l === void 0 ? (l = 0, e.footnoteOrder.push(r), i = e.footnoteOrder.length) : i = a + 1, l += 1, e.footnoteCounts.set(r, l);
  const s = {
    type: "element",
    tagName: "a",
    properties: {
      href: "#" + n + "fn-" + o,
      id: n + "fnref-" + o + (l > 1 ? "-" + l : ""),
      dataFootnoteRef: !0,
      ariaDescribedBy: ["footnote-label"]
    },
    children: [{ type: "text", value: String(i) }]
  };
  e.patch(t, s);
  const u = {
    type: "element",
    tagName: "sup",
    properties: {},
    children: [s]
  };
  return e.patch(t, u), e.applyData(t, u);
}
function Su(e, t) {
  const n = {
    type: "element",
    tagName: "h" + t.depth,
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Eu(e, t) {
  if (e.options.allowDangerousHtml) {
    const n = { type: "raw", value: t.value };
    return e.patch(t, n), e.applyData(t, n);
  }
}
function Po(e, t) {
  const n = t.referenceType;
  let r = "]";
  if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference")
    return [{ type: "text", value: "![" + t.alt + r }];
  const o = e.all(t), a = o[0];
  a && a.type === "text" ? a.value = "[" + a.value : o.unshift({ type: "text", value: "[" });
  const i = o[o.length - 1];
  return i && i.type === "text" ? i.value += r : o.push({ type: "text", value: r }), o;
}
function Pu(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return Po(e, t);
  const o = { src: tt(r.url || ""), alt: t.alt };
  r.title !== null && r.title !== void 0 && (o.title = r.title);
  const a = { type: "element", tagName: "img", properties: o, children: [] };
  return e.patch(t, a), e.applyData(t, a);
}
function Du(e, t) {
  const n = { src: tt(t.url) };
  t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = { type: "element", tagName: "img", properties: n, children: [] };
  return e.patch(t, r), e.applyData(t, r);
}
function Iu(e, t) {
  const n = { type: "text", value: t.value.replace(/\r?\n|\r/g, " ") };
  e.patch(t, n);
  const r = {
    type: "element",
    tagName: "code",
    properties: {},
    children: [n]
  };
  return e.patch(t, r), e.applyData(t, r);
}
function zu(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return Po(e, t);
  const o = { href: tt(r.url || "") };
  r.title !== null && r.title !== void 0 && (o.title = r.title);
  const a = {
    type: "element",
    tagName: "a",
    properties: o,
    children: e.all(t)
  };
  return e.patch(t, a), e.applyData(t, a);
}
function ju(e, t) {
  const n = { href: tt(t.url) };
  t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = {
    type: "element",
    tagName: "a",
    properties: n,
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function Au(e, t, n) {
  const r = e.all(t), o = n ? Tu(n) : Do(t), a = {}, i = [];
  if (typeof t.checked == "boolean") {
    const d = r[0];
    let c;
    d && d.type === "element" && d.tagName === "p" ? c = d : (c = { type: "element", tagName: "p", properties: {}, children: [] }, r.unshift(c)), c.children.length > 0 && c.children.unshift({ type: "text", value: " " }), c.children.unshift({
      type: "element",
      tagName: "input",
      properties: { type: "checkbox", checked: t.checked, disabled: !0 },
      children: []
    }), a.className = ["task-list-item"];
  }
  let l = -1;
  for (; ++l < r.length; ) {
    const d = r[l];
    (o || l !== 0 || d.type !== "element" || d.tagName !== "p") && i.push({ type: "text", value: `
` }), d.type === "element" && d.tagName === "p" && !o ? i.push(...d.children) : i.push(d);
  }
  const s = r[r.length - 1];
  s && (o || s.type !== "element" || s.tagName !== "p") && i.push({ type: "text", value: `
` });
  const u = { type: "element", tagName: "li", properties: a, children: i };
  return e.patch(t, u), e.applyData(t, u);
}
function Tu(e) {
  let t = !1;
  if (e.type === "list") {
    t = e.spread || !1;
    const n = e.children;
    let r = -1;
    for (; !t && ++r < n.length; )
      t = Do(n[r]);
  }
  return t;
}
function Do(e) {
  const t = e.spread;
  return t ?? e.children.length > 1;
}
function Fu(e, t) {
  const n = {}, r = e.all(t);
  let o = -1;
  for (typeof t.start == "number" && t.start !== 1 && (n.start = t.start); ++o < r.length; ) {
    const i = r[o];
    if (i.type === "element" && i.tagName === "li" && i.properties && Array.isArray(i.properties.className) && i.properties.className.includes("task-list-item")) {
      n.className = ["contains-task-list"];
      break;
    }
  }
  const a = {
    type: "element",
    tagName: t.ordered ? "ol" : "ul",
    properties: n,
    children: e.wrap(r, !0)
  };
  return e.patch(t, a), e.applyData(t, a);
}
function Lu(e, t) {
  const n = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Ru(e, t) {
  const n = { type: "root", children: e.wrap(e.all(t)) };
  return e.patch(t, n), e.applyData(t, n);
}
function Mu(e, t) {
  const n = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Ou(e, t) {
  const n = e.all(t), r = n.shift(), o = [];
  if (r) {
    const i = {
      type: "element",
      tagName: "thead",
      properties: {},
      children: e.wrap([r], !0)
    };
    e.patch(t.children[0], i), o.push(i);
  }
  if (n.length > 0) {
    const i = {
      type: "element",
      tagName: "tbody",
      properties: {},
      children: e.wrap(n, !0)
    }, l = vn(t.children[1]), s = io(t.children[t.children.length - 1]);
    l && s && (i.position = { start: l, end: s }), o.push(i);
  }
  const a = {
    type: "element",
    tagName: "table",
    properties: {},
    children: e.wrap(o, !0)
  };
  return e.patch(t, a), e.applyData(t, a);
}
function Nu(e, t, n) {
  const r = n ? n.children : void 0, a = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td", i = n && n.type === "table" ? n.align : void 0, l = i ? i.length : t.children.length;
  let s = -1;
  const u = [];
  for (; ++s < l; ) {
    const c = t.children[s], p = {}, m = i ? i[s] : void 0;
    m && (p.align = m);
    let h = { type: "element", tagName: a, properties: p, children: [] };
    c && (h.children = e.all(c), e.patch(c, h), h = e.applyData(c, h)), u.push(h);
  }
  const d = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: e.wrap(u, !0)
  };
  return e.patch(t, d), e.applyData(t, d);
}
function _u(e, t) {
  const n = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
const hr = 9, fr = 32;
function Bu(e) {
  const t = String(e), n = /\r?\n|\r/g;
  let r = n.exec(t), o = 0;
  const a = [];
  for (; r; )
    a.push(
      gr(t.slice(o, r.index), o > 0, !0),
      r[0]
    ), o = r.index + r[0].length, r = n.exec(t);
  return a.push(gr(t.slice(o), o > 0, !1)), a.join("");
}
function gr(e, t, n) {
  let r = 0, o = e.length;
  if (t) {
    let a = e.codePointAt(r);
    for (; a === hr || a === fr; )
      r++, a = e.codePointAt(r);
  }
  if (n) {
    let a = e.codePointAt(o - 1);
    for (; a === hr || a === fr; )
      o--, a = e.codePointAt(o - 1);
  }
  return o > r ? e.slice(r, o) : "";
}
function $u(e, t) {
  const n = { type: "text", value: Bu(String(t.value)) };
  return e.patch(t, n), e.applyData(t, n);
}
function Uu(e, t) {
  const n = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return e.patch(t, n), e.applyData(t, n);
}
const Vu = {
  blockquote: yu,
  break: ku,
  code: wu,
  delete: xu,
  emphasis: vu,
  footnoteReference: Cu,
  heading: Su,
  html: Eu,
  imageReference: Pu,
  image: Du,
  inlineCode: Iu,
  linkReference: zu,
  link: ju,
  listItem: Au,
  list: Fu,
  paragraph: Lu,
  // @ts-expect-error: root is different, but hard to type.
  root: Ru,
  strong: Mu,
  table: Ou,
  tableCell: _u,
  tableRow: Nu,
  text: $u,
  thematicBreak: Uu,
  toml: yt,
  yaml: yt,
  definition: yt,
  footnoteDefinition: yt
};
function yt() {
}
const Io = -1, Rt = 0, Pt = 1, Dt = 2, zn = 3, jn = 4, An = 5, Tn = 6, zo = 7, jo = 8, br = typeof self == "object" ? self : globalThis, Hu = (e, t) => {
  const n = (o, a) => (e.set(a, o), o), r = (o) => {
    if (e.has(o))
      return e.get(o);
    const [a, i] = t[o];
    switch (a) {
      case Rt:
      case Io:
        return n(i, o);
      case Pt: {
        const l = n([], o);
        for (const s of i)
          l.push(r(s));
        return l;
      }
      case Dt: {
        const l = n({}, o);
        for (const [s, u] of i)
          l[r(s)] = r(u);
        return l;
      }
      case zn:
        return n(new Date(i), o);
      case jn: {
        const { source: l, flags: s } = i;
        return n(new RegExp(l, s), o);
      }
      case An: {
        const l = n(/* @__PURE__ */ new Map(), o);
        for (const [s, u] of i)
          l.set(r(s), r(u));
        return l;
      }
      case Tn: {
        const l = n(/* @__PURE__ */ new Set(), o);
        for (const s of i)
          l.add(r(s));
        return l;
      }
      case zo: {
        const { name: l, message: s } = i;
        return n(new br[l](s), o);
      }
      case jo:
        return n(BigInt(i), o);
      case "BigInt":
        return n(Object(BigInt(i)), o);
    }
    return n(new br[a](i), o);
  };
  return r;
}, yr = (e) => Hu(/* @__PURE__ */ new Map(), e)(0), Ye = "", { toString: qu } = {}, { keys: Wu } = Object, ut = (e) => {
  const t = typeof e;
  if (t !== "object" || !e)
    return [Rt, t];
  const n = qu.call(e).slice(8, -1);
  switch (n) {
    case "Array":
      return [Pt, Ye];
    case "Object":
      return [Dt, Ye];
    case "Date":
      return [zn, Ye];
    case "RegExp":
      return [jn, Ye];
    case "Map":
      return [An, Ye];
    case "Set":
      return [Tn, Ye];
  }
  return n.includes("Array") ? [Pt, n] : n.includes("Error") ? [zo, n] : [Dt, n];
}, kt = ([e, t]) => e === Rt && (t === "function" || t === "symbol"), Gu = (e, t, n, r) => {
  const o = (i, l) => {
    const s = r.push(i) - 1;
    return n.set(l, s), s;
  }, a = (i) => {
    if (n.has(i))
      return n.get(i);
    let [l, s] = ut(i);
    switch (l) {
      case Rt: {
        let d = i;
        switch (s) {
          case "bigint":
            l = jo, d = i.toString();
            break;
          case "function":
          case "symbol":
            if (e)
              throw new TypeError("unable to serialize " + s);
            d = null;
            break;
          case "undefined":
            return o([Io], i);
        }
        return o([l, d], i);
      }
      case Pt: {
        if (s)
          return o([s, [...i]], i);
        const d = [], c = o([l, d], i);
        for (const p of i)
          d.push(a(p));
        return c;
      }
      case Dt: {
        if (s)
          switch (s) {
            case "BigInt":
              return o([s, i.toString()], i);
            case "Boolean":
            case "Number":
            case "String":
              return o([s, i.valueOf()], i);
          }
        if (t && "toJSON" in i)
          return a(i.toJSON());
        const d = [], c = o([l, d], i);
        for (const p of Wu(i))
          (e || !kt(ut(i[p]))) && d.push([a(p), a(i[p])]);
        return c;
      }
      case zn:
        return o([l, i.toISOString()], i);
      case jn: {
        const { source: d, flags: c } = i;
        return o([l, { source: d, flags: c }], i);
      }
      case An: {
        const d = [], c = o([l, d], i);
        for (const [p, m] of i)
          (e || !(kt(ut(p)) || kt(ut(m)))) && d.push([a(p), a(m)]);
        return c;
      }
      case Tn: {
        const d = [], c = o([l, d], i);
        for (const p of i)
          (e || !kt(ut(p))) && d.push(a(p));
        return c;
      }
    }
    const { message: u } = i;
    return o([l, { name: s, message: u }], i);
  };
  return a;
}, kr = (e, { json: t, lossy: n } = {}) => {
  const r = [];
  return Gu(!(t || n), !!t, /* @__PURE__ */ new Map(), r)(e), r;
}, It = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (e, t) => t && ("json" in t || "lossy" in t) ? yr(kr(e, t)) : structuredClone(e)
) : (e, t) => yr(kr(e, t));
function Ju(e, t) {
  const n = [{ type: "text", value: "↩" }];
  return t > 1 && n.push({
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{ type: "text", value: String(t) }]
  }), n;
}
function Ku(e, t) {
  return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
function Yu(e) {
  const t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", n = e.options.footnoteBackContent || Ju, r = e.options.footnoteBackLabel || Ku, o = e.options.footnoteLabel || "Footnotes", a = e.options.footnoteLabelTagName || "h2", i = e.options.footnoteLabelProperties || {
    className: ["sr-only"]
  }, l = [];
  let s = -1;
  for (; ++s < e.footnoteOrder.length; ) {
    const u = e.footnoteById.get(
      e.footnoteOrder[s]
    );
    if (!u)
      continue;
    const d = e.all(u), c = String(u.identifier).toUpperCase(), p = tt(c.toLowerCase());
    let m = 0;
    const h = [], y = e.footnoteCounts.get(c);
    for (; y !== void 0 && ++m <= y; ) {
      h.length > 0 && h.push({ type: "text", value: " " });
      let E = typeof n == "string" ? n : n(s, m);
      typeof E == "string" && (E = { type: "text", value: E }), h.push({
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + t + "fnref-" + p + (m > 1 ? "-" + m : ""),
          dataFootnoteBackref: "",
          ariaLabel: typeof r == "string" ? r : r(s, m),
          className: ["data-footnote-backref"]
        },
        children: Array.isArray(E) ? E : [E]
      });
    }
    const v = d[d.length - 1];
    if (v && v.type === "element" && v.tagName === "p") {
      const E = v.children[v.children.length - 1];
      E && E.type === "text" ? E.value += " " : v.children.push({ type: "text", value: " " }), v.children.push(...h);
    } else
      d.push(...h);
    const k = {
      type: "element",
      tagName: "li",
      properties: { id: t + "fn-" + p },
      children: e.wrap(d, !0)
    };
    e.patch(u, k), l.push(k);
  }
  if (l.length !== 0)
    return {
      type: "element",
      tagName: "section",
      properties: { dataFootnotes: !0, className: ["footnotes"] },
      children: [
        {
          type: "element",
          tagName: a,
          properties: {
            ...It(i),
            id: "footnote-label"
          },
          children: [{ type: "text", value: o }]
        },
        { type: "text", value: `
` },
        {
          type: "element",
          tagName: "ol",
          properties: {},
          children: e.wrap(l, !0)
        },
        { type: "text", value: `
` }
      ]
    };
}
const Mt = (
  // Note: overloads in JSDoc can’t yet use different `@template`s.
  /**
   * @type {(
   *   (<Condition extends string>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & {type: Condition}) &
   *   (<Condition extends Props>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Condition) &
   *   (<Condition extends TestFunction>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Predicate<Condition, Node>) &
   *   ((test?: null | undefined) => (node?: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node) &
   *   ((test?: Test) => Check)
   * )}
   */
  /**
   * @param {Test} [test]
   * @returns {Check}
   */
  function(e) {
    if (e == null)
      return ec;
    if (typeof e == "function")
      return Ot(e);
    if (typeof e == "object")
      return Array.isArray(e) ? Qu(e) : Xu(e);
    if (typeof e == "string")
      return Zu(e);
    throw new Error("Expected function, string, or object as test");
  }
);
function Qu(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t[n] = Mt(e[n]);
  return Ot(r);
  function r(...o) {
    let a = -1;
    for (; ++a < t.length; )
      if (t[a].apply(this, o)) return !0;
    return !1;
  }
}
function Xu(e) {
  const t = (
    /** @type {Record<string, unknown>} */
    e
  );
  return Ot(n);
  function n(r) {
    const o = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      r
    );
    let a;
    for (a in e)
      if (o[a] !== t[a]) return !1;
    return !0;
  }
}
function Zu(e) {
  return Ot(t);
  function t(n) {
    return n && n.type === e;
  }
}
function Ot(e) {
  return t;
  function t(n, r, o) {
    return !!(tc(n) && e.call(
      this,
      n,
      typeof r == "number" ? r : void 0,
      o || void 0
    ));
  }
}
function ec() {
  return !0;
}
function tc(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const Ao = [], nc = !0, pn = !1, rc = "skip";
function To(e, t, n, r) {
  let o;
  typeof t == "function" && typeof n != "function" ? (r = n, n = t) : o = t;
  const a = Mt(o), i = r ? -1 : 1;
  l(e, void 0, [])();
  function l(s, u, d) {
    const c = (
      /** @type {Record<string, unknown>} */
      s && typeof s == "object" ? s : {}
    );
    if (typeof c.type == "string") {
      const m = (
        // `hast`
        typeof c.tagName == "string" ? c.tagName : (
          // `xast`
          typeof c.name == "string" ? c.name : void 0
        )
      );
      Object.defineProperty(p, "name", {
        value: "node (" + (s.type + (m ? "<" + m + ">" : "")) + ")"
      });
    }
    return p;
    function p() {
      let m = Ao, h, y, v;
      if ((!t || a(s, u, d[d.length - 1] || void 0)) && (m = oc(n(s, d)), m[0] === pn))
        return m;
      if ("children" in s && s.children) {
        const k = (
          /** @type {UnistParent} */
          s
        );
        if (k.children && m[0] !== rc)
          for (y = (r ? k.children.length : -1) + i, v = d.concat(k); y > -1 && y < k.children.length; ) {
            const E = k.children[y];
            if (h = l(E, y, v)(), h[0] === pn)
              return h;
            y = typeof h[1] == "number" ? h[1] : y + i;
          }
      }
      return m;
    }
  }
}
function oc(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [nc, e] : e == null ? Ao : [e];
}
function Fn(e, t, n, r) {
  let o, a, i;
  typeof t == "function" && typeof n != "function" ? (a = void 0, i = t, o = n) : (a = t, i = n, o = r), To(e, a, l, o);
  function l(s, u) {
    const d = u[u.length - 1], c = d ? d.children.indexOf(s) : void 0;
    return i(s, c, d);
  }
}
const hn = {}.hasOwnProperty, ic = {};
function ac(e, t) {
  const n = t || ic, r = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), i = { ...Vu, ...n.handlers }, l = {
    all: u,
    applyData: sc,
    definitionById: r,
    footnoteById: o,
    footnoteCounts: a,
    footnoteOrder: [],
    handlers: i,
    one: s,
    options: n,
    patch: lc,
    wrap: cc
  };
  return Fn(e, function(d) {
    if (d.type === "definition" || d.type === "footnoteDefinition") {
      const c = d.type === "definition" ? r : o, p = String(d.identifier).toUpperCase();
      c.has(p) || c.set(p, d);
    }
  }), l;
  function s(d, c) {
    const p = d.type, m = l.handlers[p];
    if (hn.call(l.handlers, p) && m)
      return m(l, d, c);
    if (l.options.passThrough && l.options.passThrough.includes(p)) {
      if ("children" in d) {
        const { children: y, ...v } = d, k = It(v);
        return k.children = l.all(d), k;
      }
      return It(d);
    }
    return (l.options.unknownHandler || uc)(l, d, c);
  }
  function u(d) {
    const c = [];
    if ("children" in d) {
      const p = d.children;
      let m = -1;
      for (; ++m < p.length; ) {
        const h = l.one(p[m], d);
        if (h) {
          if (m && p[m - 1].type === "break" && (!Array.isArray(h) && h.type === "text" && (h.value = wr(h.value)), !Array.isArray(h) && h.type === "element")) {
            const y = h.children[0];
            y && y.type === "text" && (y.value = wr(y.value));
          }
          Array.isArray(h) ? c.push(...h) : c.push(h);
        }
      }
    }
    return c;
  }
}
function lc(e, t) {
  e.position && (t.position = Ga(e));
}
function sc(e, t) {
  let n = t;
  if (e && e.data) {
    const r = e.data.hName, o = e.data.hChildren, a = e.data.hProperties;
    if (typeof r == "string")
      if (n.type === "element")
        n.tagName = r;
      else {
        const i = "children" in n ? n.children : [n];
        n = { type: "element", tagName: r, properties: {}, children: i };
      }
    n.type === "element" && a && Object.assign(n.properties, It(a)), "children" in n && n.children && o !== null && o !== void 0 && (n.children = o);
  }
  return n;
}
function uc(e, t) {
  const n = t.data || {}, r = "value" in t && !(hn.call(n, "hProperties") || hn.call(n, "hChildren")) ? { type: "text", value: t.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function cc(e, t) {
  const n = [];
  let r = -1;
  for (t && n.push({ type: "text", value: `
` }); ++r < e.length; )
    r && n.push({ type: "text", value: `
` }), n.push(e[r]);
  return t && e.length > 0 && n.push({ type: "text", value: `
` }), n;
}
function wr(e) {
  let t = 0, n = e.charCodeAt(t);
  for (; n === 9 || n === 32; )
    t++, n = e.charCodeAt(t);
  return e.slice(t);
}
function xr(e, t) {
  const n = ac(e, t), r = n.one(e, void 0), o = Yu(n), a = Array.isArray(r) ? { type: "root", children: r } : r || { type: "root", children: [] };
  return o && a.children.push({ type: "text", value: `
` }, o), a;
}
function dc(e, t) {
  return e && "run" in e ? async function(n, r) {
    const o = (
      /** @type {HastRoot} */
      xr(n, { file: r, ...t })
    );
    await e.run(o, r);
  } : function(n, r) {
    return (
      /** @type {HastRoot} */
      xr(n, { file: r, ...e || t })
    );
  };
}
function vr(e) {
  if (e)
    throw e;
}
var Ct = Object.prototype.hasOwnProperty, Fo = Object.prototype.toString, Cr = Object.defineProperty, Sr = Object.getOwnPropertyDescriptor, Er = function(t) {
  return typeof Array.isArray == "function" ? Array.isArray(t) : Fo.call(t) === "[object Array]";
}, Pr = function(t) {
  if (!t || Fo.call(t) !== "[object Object]")
    return !1;
  var n = Ct.call(t, "constructor"), r = t.constructor && t.constructor.prototype && Ct.call(t.constructor.prototype, "isPrototypeOf");
  if (t.constructor && !n && !r)
    return !1;
  var o;
  for (o in t)
    ;
  return typeof o > "u" || Ct.call(t, o);
}, Dr = function(t, n) {
  Cr && n.name === "__proto__" ? Cr(t, n.name, {
    enumerable: !0,
    configurable: !0,
    value: n.newValue,
    writable: !0
  }) : t[n.name] = n.newValue;
}, Ir = function(t, n) {
  if (n === "__proto__")
    if (Ct.call(t, n)) {
      if (Sr)
        return Sr(t, n).value;
    } else return;
  return t[n];
}, mc = function e() {
  var t, n, r, o, a, i, l = arguments[0], s = 1, u = arguments.length, d = !1;
  for (typeof l == "boolean" && (d = l, l = arguments[1] || {}, s = 2), (l == null || typeof l != "object" && typeof l != "function") && (l = {}); s < u; ++s)
    if (t = arguments[s], t != null)
      for (n in t)
        r = Ir(l, n), o = Ir(t, n), l !== o && (d && o && (Pr(o) || (a = Er(o))) ? (a ? (a = !1, i = r && Er(r) ? r : []) : i = r && Pr(r) ? r : {}, Dr(l, { name: n, newValue: e(d, i, o) })) : typeof o < "u" && Dr(l, { name: n, newValue: o }));
  return l;
};
const Wt = /* @__PURE__ */ zi(mc);
function fn(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function pc() {
  const e = [], t = { run: n, use: r };
  return t;
  function n(...o) {
    let a = -1;
    const i = o.pop();
    if (typeof i != "function")
      throw new TypeError("Expected function as last argument, not " + i);
    l(null, ...o);
    function l(s, ...u) {
      const d = e[++a];
      let c = -1;
      if (s) {
        i(s);
        return;
      }
      for (; ++c < o.length; )
        (u[c] === null || u[c] === void 0) && (u[c] = o[c]);
      o = u, d ? hc(d, l)(...u) : i(null, ...u);
    }
  }
  function r(o) {
    if (typeof o != "function")
      throw new TypeError(
        "Expected `middelware` to be a function, not " + o
      );
    return e.push(o), t;
  }
}
function hc(e, t) {
  let n;
  return r;
  function r(...i) {
    const l = e.length > i.length;
    let s;
    l && i.push(o);
    try {
      s = e.apply(this, i);
    } catch (u) {
      const d = (
        /** @type {Error} */
        u
      );
      if (l && n)
        throw d;
      return o(d);
    }
    l || (s && s.then && typeof s.then == "function" ? s.then(a, o) : s instanceof Error ? o(s) : a(s));
  }
  function o(i, ...l) {
    n || (n = !0, t(i, ...l));
  }
  function a(i) {
    o(null, i);
  }
}
const De = { basename: fc, dirname: gc, extname: bc, join: yc, sep: "/" };
function fc(e, t) {
  if (t !== void 0 && typeof t != "string")
    throw new TypeError('"ext" argument must be a string');
  gt(e);
  let n = 0, r = -1, o = e.length, a;
  if (t === void 0 || t.length === 0 || t.length > e.length) {
    for (; o--; )
      if (e.codePointAt(o) === 47) {
        if (a) {
          n = o + 1;
          break;
        }
      } else r < 0 && (a = !0, r = o + 1);
    return r < 0 ? "" : e.slice(n, r);
  }
  if (t === e)
    return "";
  let i = -1, l = t.length - 1;
  for (; o--; )
    if (e.codePointAt(o) === 47) {
      if (a) {
        n = o + 1;
        break;
      }
    } else
      i < 0 && (a = !0, i = o + 1), l > -1 && (e.codePointAt(o) === t.codePointAt(l--) ? l < 0 && (r = o) : (l = -1, r = i));
  return n === r ? r = i : r < 0 && (r = e.length), e.slice(n, r);
}
function gc(e) {
  if (gt(e), e.length === 0)
    return ".";
  let t = -1, n = e.length, r;
  for (; --n; )
    if (e.codePointAt(n) === 47) {
      if (r) {
        t = n;
        break;
      }
    } else r || (r = !0);
  return t < 0 ? e.codePointAt(0) === 47 ? "/" : "." : t === 1 && e.codePointAt(0) === 47 ? "//" : e.slice(0, t);
}
function bc(e) {
  gt(e);
  let t = e.length, n = -1, r = 0, o = -1, a = 0, i;
  for (; t--; ) {
    const l = e.codePointAt(t);
    if (l === 47) {
      if (i) {
        r = t + 1;
        break;
      }
      continue;
    }
    n < 0 && (i = !0, n = t + 1), l === 46 ? o < 0 ? o = t : a !== 1 && (a = 1) : o > -1 && (a = -1);
  }
  return o < 0 || n < 0 || // We saw a non-dot character immediately before the dot.
  a === 0 || // The (right-most) trimmed path component is exactly `..`.
  a === 1 && o === n - 1 && o === r + 1 ? "" : e.slice(o, n);
}
function yc(...e) {
  let t = -1, n;
  for (; ++t < e.length; )
    gt(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
  return n === void 0 ? "." : kc(n);
}
function kc(e) {
  gt(e);
  const t = e.codePointAt(0) === 47;
  let n = wc(e, !t);
  return n.length === 0 && !t && (n = "."), n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
}
function wc(e, t) {
  let n = "", r = 0, o = -1, a = 0, i = -1, l, s;
  for (; ++i <= e.length; ) {
    if (i < e.length)
      l = e.codePointAt(i);
    else {
      if (l === 47)
        break;
      l = 47;
    }
    if (l === 47) {
      if (!(o === i - 1 || a === 1)) if (o !== i - 1 && a === 2) {
        if (n.length < 2 || r !== 2 || n.codePointAt(n.length - 1) !== 46 || n.codePointAt(n.length - 2) !== 46) {
          if (n.length > 2) {
            if (s = n.lastIndexOf("/"), s !== n.length - 1) {
              s < 0 ? (n = "", r = 0) : (n = n.slice(0, s), r = n.length - 1 - n.lastIndexOf("/")), o = i, a = 0;
              continue;
            }
          } else if (n.length > 0) {
            n = "", r = 0, o = i, a = 0;
            continue;
          }
        }
        t && (n = n.length > 0 ? n + "/.." : "..", r = 2);
      } else
        n.length > 0 ? n += "/" + e.slice(o + 1, i) : n = e.slice(o + 1, i), r = i - o - 1;
      o = i, a = 0;
    } else l === 46 && a > -1 ? a++ : a = -1;
  }
  return n;
}
function gt(e) {
  if (typeof e != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(e)
    );
}
const xc = { cwd: vc };
function vc() {
  return "/";
}
function gn(e) {
  return !!(e !== null && typeof e == "object" && "href" in e && e.href && "protocol" in e && e.protocol && // @ts-expect-error: indexing is fine.
  e.auth === void 0);
}
function Cc(e) {
  if (typeof e == "string")
    e = new URL(e);
  else if (!gn(e)) {
    const t = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + e + "`"
    );
    throw t.code = "ERR_INVALID_ARG_TYPE", t;
  }
  if (e.protocol !== "file:") {
    const t = new TypeError("The URL must be of scheme file");
    throw t.code = "ERR_INVALID_URL_SCHEME", t;
  }
  return Sc(e);
}
function Sc(e) {
  if (e.hostname !== "") {
    const r = new TypeError(
      'File URL host must be "localhost" or empty on darwin'
    );
    throw r.code = "ERR_INVALID_FILE_URL_HOST", r;
  }
  const t = e.pathname;
  let n = -1;
  for (; ++n < t.length; )
    if (t.codePointAt(n) === 37 && t.codePointAt(n + 1) === 50) {
      const r = t.codePointAt(n + 2);
      if (r === 70 || r === 102) {
        const o = new TypeError(
          "File URL path must not include encoded / characters"
        );
        throw o.code = "ERR_INVALID_FILE_URL_PATH", o;
      }
    }
  return decodeURIComponent(t);
}
const Gt = (
  /** @type {const} */
  [
    "history",
    "path",
    "basename",
    "stem",
    "extname",
    "dirname"
  ]
);
class Lo {
  /**
   * Create a new virtual file.
   *
   * `options` is treated as:
   *
   * *   `string` or `Uint8Array` — `{value: options}`
   * *   `URL` — `{path: options}`
   * *   `VFile` — shallow copies its data over to the new file
   * *   `object` — all fields are shallow copied over to the new file
   *
   * Path related fields are set in the following order (least specific to
   * most specific): `history`, `path`, `basename`, `stem`, `extname`,
   * `dirname`.
   *
   * You cannot set `dirname` or `extname` without setting either `history`,
   * `path`, `basename`, or `stem` too.
   *
   * @param {Compatible | null | undefined} [value]
   *   File value.
   * @returns
   *   New instance.
   */
  constructor(t) {
    let n;
    t ? gn(t) ? n = { path: t } : typeof t == "string" || Ec(t) ? n = { value: t } : n = t : n = {}, this.cwd = "cwd" in n ? "" : xc.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let r = -1;
    for (; ++r < Gt.length; ) {
      const a = Gt[r];
      a in n && n[a] !== void 0 && n[a] !== null && (this[a] = a === "history" ? [...n[a]] : n[a]);
    }
    let o;
    for (o in n)
      Gt.includes(o) || (this[o] = n[o]);
  }
  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   *
   * @returns {string | undefined}
   *   Basename.
   */
  get basename() {
    return typeof this.path == "string" ? De.basename(this.path) : void 0;
  }
  /**
   * Set basename (including extname) (`'index.min.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} basename
   *   Basename.
   * @returns {undefined}
   *   Nothing.
   */
  set basename(t) {
    Kt(t, "basename"), Jt(t, "basename"), this.path = De.join(this.dirname || "", t);
  }
  /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */
  get dirname() {
    return typeof this.path == "string" ? De.dirname(this.path) : void 0;
  }
  /**
   * Set the parent path (example: `'~'`).
   *
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} dirname
   *   Dirname.
   * @returns {undefined}
   *   Nothing.
   */
  set dirname(t) {
    zr(this.basename, "dirname"), this.path = De.join(t || "", this.basename);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */
  get extname() {
    return typeof this.path == "string" ? De.extname(this.path) : void 0;
  }
  /**
   * Set the extname (including dot) (example: `'.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} extname
   *   Extname.
   * @returns {undefined}
   *   Nothing.
   */
  set extname(t) {
    if (Jt(t, "extname"), zr(this.dirname, "extname"), t) {
      if (t.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (t.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = De.join(this.dirname, this.stem + (t || ""));
  }
  /**
   * Get the full path (example: `'~/index.min.js'`).
   *
   * @returns {string}
   *   Path.
   */
  get path() {
    return this.history[this.history.length - 1];
  }
  /**
   * Set the full path (example: `'~/index.min.js'`).
   *
   * Cannot be nullified.
   * You can set a file URL (a `URL` object with a `file:` protocol) which will
   * be turned into a path with `url.fileURLToPath`.
   *
   * @param {URL | string} path
   *   Path.
   * @returns {undefined}
   *   Nothing.
   */
  set path(t) {
    gn(t) && (t = Cc(t)), Kt(t, "path"), this.path !== t && this.history.push(t);
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */
  get stem() {
    return typeof this.path == "string" ? De.basename(this.path, this.extname) : void 0;
  }
  /**
   * Set the stem (basename w/o extname) (example: `'index.min'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} stem
   *   Stem.
   * @returns {undefined}
   *   Nothing.
   */
  set stem(t) {
    Kt(t, "stem"), Jt(t, "stem"), this.path = De.join(this.dirname || "", t + (this.extname || ""));
  }
  // Normal prototypal methods.
  /**
   * Create a fatal message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `true` (error; file not usable)
   * and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {never}
   *   Never.
   * @throws {VFileMessage}
   *   Message.
   */
  fail(t, n, r) {
    const o = this.message(t, n, r);
    throw o.fatal = !0, o;
  }
  /**
   * Create an info message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `undefined` (info; change
   * likely not needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  info(t, n, r) {
    const o = this.message(t, n, r);
    return o.fatal = void 0, o;
  }
  /**
   * Create a message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `false` (warning; change may be
   * needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  message(t, n, r) {
    const o = new me(
      // @ts-expect-error: the overloads are fine.
      t,
      n,
      r
    );
    return this.path && (o.name = this.path + ":" + o.name, o.file = this.path), o.fatal = !1, this.messages.push(o), o;
  }
  /**
   * Serialize the file.
   *
   * > **Note**: which encodings are supported depends on the engine.
   * > For info on Node.js, see:
   * > <https://nodejs.org/api/util.html#whatwg-supported-encodings>.
   *
   * @param {string | null | undefined} [encoding='utf8']
   *   Character encoding to understand `value` as when it’s a `Uint8Array`
   *   (default: `'utf-8'`).
   * @returns {string}
   *   Serialized file.
   */
  toString(t) {
    return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(t || void 0).decode(this.value);
  }
}
function Jt(e, t) {
  if (e && e.includes(De.sep))
    throw new Error(
      "`" + t + "` cannot be a path: did not expect `" + De.sep + "`"
    );
}
function Kt(e, t) {
  if (!e)
    throw new Error("`" + t + "` cannot be empty");
}
function zr(e, t) {
  if (!e)
    throw new Error("Setting `" + t + "` requires `path` to be set too");
}
function Ec(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const Pc = (
  /**
   * @type {new <Parameters extends Array<unknown>, Result>(property: string | symbol) => (...parameters: Parameters) => Result}
   */
  /** @type {unknown} */
  /**
   * @this {Function}
   * @param {string | symbol} property
   * @returns {(...parameters: Array<unknown>) => unknown}
   */
  function(e) {
    const r = (
      /** @type {Record<string | symbol, Function>} */
      // Prototypes do exist.
      // type-coverage:ignore-next-line
      this.constructor.prototype
    ), o = r[e], a = function() {
      return o.apply(a, arguments);
    };
    return Object.setPrototypeOf(a, r), a;
  }
), Dc = {}.hasOwnProperty;
class Ln extends Pc {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = pc();
  }
  /**
   * Copy a processor.
   *
   * @deprecated
   *   This is a private internal method and should not be used.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   New *unfrozen* processor ({@linkcode Processor}) that is
   *   configured to work the same as its ancestor.
   *   When the descendant processor is configured in the future it does not
   *   affect the ancestral processor.
   */
  copy() {
    const t = (
      /** @type {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>} */
      new Ln()
    );
    let n = -1;
    for (; ++n < this.attachers.length; ) {
      const r = this.attachers[n];
      t.use(...r);
    }
    return t.data(Wt(!0, {}, this.namespace)), t;
  }
  /**
   * Configure the processor with info available to all plugins.
   * Information is stored in an object.
   *
   * Typically, options can be given to a specific plugin, but sometimes it
   * makes sense to have information shared with several plugins.
   * For example, a list of HTML elements that are self-closing, which is
   * needed during all phases.
   *
   * > **Note**: setting information cannot occur on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * > **Note**: to register custom data in TypeScript, augment the
   * > {@linkcode Data} interface.
   *
   * @example
   *   This example show how to get and set info:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   const processor = unified().data('alpha', 'bravo')
   *
   *   processor.data('alpha') // => 'bravo'
   *
   *   processor.data() // => {alpha: 'bravo'}
   *
   *   processor.data({charlie: 'delta'})
   *
   *   processor.data() // => {charlie: 'delta'}
   *   ```
   *
   * @template {keyof Data} Key
   *
   * @overload
   * @returns {Data}
   *
   * @overload
   * @param {Data} dataset
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Key} key
   * @returns {Data[Key]}
   *
   * @overload
   * @param {Key} key
   * @param {Data[Key]} value
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @param {Data | Key} [key]
   *   Key to get or set, or entire dataset to set, or nothing to get the
   *   entire dataset (optional).
   * @param {Data[Key]} [value]
   *   Value to set (optional).
   * @returns {unknown}
   *   The current processor when setting, the value at `key` when getting, or
   *   the entire dataset when getting without key.
   */
  data(t, n) {
    return typeof t == "string" ? arguments.length === 2 ? (Xt("data", this.frozen), this.namespace[t] = n, this) : Dc.call(this.namespace, t) && this.namespace[t] || void 0 : t ? (Xt("data", this.frozen), this.namespace = t, this) : this.namespace;
  }
  /**
   * Freeze a processor.
   *
   * Frozen processors are meant to be extended and not to be configured
   * directly.
   *
   * When a processor is frozen it cannot be unfrozen.
   * New processors working the same way can be created by calling the
   * processor.
   *
   * It’s possible to freeze processors explicitly by calling `.freeze()`.
   * Processors freeze automatically when `.parse()`, `.run()`, `.runSync()`,
   * `.stringify()`, `.process()`, or `.processSync()` are called.
   *
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   The current processor.
   */
  freeze() {
    if (this.frozen)
      return this;
    const t = (
      /** @type {Processor} */
      /** @type {unknown} */
      this
    );
    for (; ++this.freezeIndex < this.attachers.length; ) {
      const [n, ...r] = this.attachers[this.freezeIndex];
      if (r[0] === !1)
        continue;
      r[0] === !0 && (r[0] = void 0);
      const o = n.call(t, ...r);
      typeof o == "function" && this.transformers.use(o);
    }
    return this.frozen = !0, this.freezeIndex = Number.POSITIVE_INFINITY, this;
  }
  /**
   * Parse text to a syntax tree.
   *
   * > **Note**: `parse` freezes the processor if not already *frozen*.
   *
   * > **Note**: `parse` performs the parse phase, not the run phase or other
   * > phases.
   *
   * @param {Compatible | undefined} [file]
   *   file to parse (optional); typically `string` or `VFile`; any value
   *   accepted as `x` in `new VFile(x)`.
   * @returns {ParseTree extends undefined ? Node : ParseTree}
   *   Syntax tree representing `file`.
   */
  parse(t) {
    this.freeze();
    const n = wt(t), r = this.parser || this.Parser;
    return Yt("parse", r), r(String(n), n);
  }
  /**
   * Process the given file as configured on the processor.
   *
   * > **Note**: `process` freezes the processor if not already *frozen*.
   *
   * > **Note**: `process` performs the parse, run, and stringify phases.
   *
   * @overload
   * @param {Compatible | undefined} file
   * @param {ProcessCallback<VFileWithOutput<CompileResult>>} done
   * @returns {undefined}
   *
   * @overload
   * @param {Compatible | undefined} [file]
   * @returns {Promise<VFileWithOutput<CompileResult>>}
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`]; any value accepted as
   *   `x` in `new VFile(x)`.
   * @param {ProcessCallback<VFileWithOutput<CompileResult>> | undefined} [done]
   *   Callback (optional).
   * @returns {Promise<VFile> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise a promise, rejected with a fatal error or resolved with the
   *   processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  process(t, n) {
    const r = this;
    return this.freeze(), Yt("process", this.parser || this.Parser), Qt("process", this.compiler || this.Compiler), n ? o(void 0, n) : new Promise(o);
    function o(a, i) {
      const l = wt(t), s = (
        /** @type {HeadTree extends undefined ? Node : HeadTree} */
        /** @type {unknown} */
        r.parse(l)
      );
      r.run(s, l, function(d, c, p) {
        if (d || !c || !p)
          return u(d);
        const m = (
          /** @type {CompileTree extends undefined ? Node : CompileTree} */
          /** @type {unknown} */
          c
        ), h = r.stringify(m, p);
        jc(h) ? p.value = h : p.result = h, u(
          d,
          /** @type {VFileWithOutput<CompileResult>} */
          p
        );
      });
      function u(d, c) {
        d || !c ? i(d) : a ? a(c) : n(void 0, c);
      }
    }
  }
  /**
   * Process the given file as configured on the processor.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `processSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `processSync` performs the parse, run, and stringify phases.
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`; any value accepted as
   *   `x` in `new VFile(x)`.
   * @returns {VFileWithOutput<CompileResult>}
   *   The processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  processSync(t) {
    let n = !1, r;
    return this.freeze(), Yt("processSync", this.parser || this.Parser), Qt("processSync", this.compiler || this.Compiler), this.process(t, o), Ar("processSync", "process", n), r;
    function o(a, i) {
      n = !0, vr(a), r = i;
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * > **Note**: `run` freezes the processor if not already *frozen*.
   *
   * > **Note**: `run` performs the run phase, not other phases.
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} file
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} [file]
   * @returns {Promise<TailTree extends undefined ? Node : TailTree>}
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {(
   *   RunCallback<TailTree extends undefined ? Node : TailTree> |
   *   Compatible
   * )} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} [done]
   *   Callback (optional).
   * @returns {Promise<TailTree extends undefined ? Node : TailTree> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise, a promise rejected with a fatal error or resolved with the
   *   transformed tree.
   */
  run(t, n, r) {
    jr(t), this.freeze();
    const o = this.transformers;
    return !r && typeof n == "function" && (r = n, n = void 0), r ? a(void 0, r) : new Promise(a);
    function a(i, l) {
      const s = wt(n);
      o.run(t, s, u);
      function u(d, c, p) {
        const m = (
          /** @type {TailTree extends undefined ? Node : TailTree} */
          c || t
        );
        d ? l(d) : i ? i(m) : r(void 0, m, p);
      }
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `runSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `runSync` performs the run phase, not other phases.
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {TailTree extends undefined ? Node : TailTree}
   *   Transformed tree.
   */
  runSync(t, n) {
    let r = !1, o;
    return this.run(t, n, a), Ar("runSync", "run", r), o;
    function a(i, l) {
      vr(i), o = l, r = !0;
    }
  }
  /**
   * Compile a syntax tree.
   *
   * > **Note**: `stringify` freezes the processor if not already *frozen*.
   *
   * > **Note**: `stringify` performs the stringify phase, not the run phase
   * > or other phases.
   *
   * @param {CompileTree extends undefined ? Node : CompileTree} tree
   *   Tree to compile.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {CompileResult extends undefined ? Value : CompileResult}
   *   Textual representation of the tree (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most compilers
   *   > return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  stringify(t, n) {
    this.freeze();
    const r = wt(n), o = this.compiler || this.Compiler;
    return Qt("stringify", o), jr(t), o(t, r);
  }
  /**
   * Configure the processor to use a plugin, a list of usable values, or a
   * preset.
   *
   * If the processor is already using a plugin, the previous plugin
   * configuration is changed based on the options that are passed in.
   * In other words, the plugin is not added a second time.
   *
   * > **Note**: `use` cannot be called on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * @example
   *   There are many ways to pass plugins to `.use()`.
   *   This example gives an overview:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   unified()
   *     // Plugin with options:
   *     .use(pluginA, {x: true, y: true})
   *     // Passing the same plugin again merges configuration (to `{x: true, y: false, z: true}`):
   *     .use(pluginA, {y: false, z: true})
   *     // Plugins:
   *     .use([pluginB, pluginC])
   *     // Two plugins, the second with options:
   *     .use([pluginD, [pluginE, {}]])
   *     // Preset with plugins and settings:
   *     .use({plugins: [pluginF, [pluginG, {}]], settings: {position: false}})
   *     // Settings only:
   *     .use({settings: {position: false}})
   *   ```
   *
   * @template {Array<unknown>} [Parameters=[]]
   * @template {Node | string | undefined} [Input=undefined]
   * @template [Output=Input]
   *
   * @overload
   * @param {Preset | null | undefined} [preset]
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {PluggableList} list
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Plugin<Parameters, Input, Output>} plugin
   * @param {...(Parameters | [boolean])} parameters
   * @returns {UsePlugin<ParseTree, HeadTree, TailTree, CompileTree, CompileResult, Input, Output>}
   *
   * @param {PluggableList | Plugin | Preset | null | undefined} value
   *   Usable value.
   * @param {...unknown} parameters
   *   Parameters, when a plugin is given as a usable value.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   Current processor.
   */
  use(t, ...n) {
    const r = this.attachers, o = this.namespace;
    if (Xt("use", this.frozen), t != null) if (typeof t == "function")
      s(t, n);
    else if (typeof t == "object")
      Array.isArray(t) ? l(t) : i(t);
    else
      throw new TypeError("Expected usable value, not `" + t + "`");
    return this;
    function a(u) {
      if (typeof u == "function")
        s(u, []);
      else if (typeof u == "object")
        if (Array.isArray(u)) {
          const [d, ...c] = (
            /** @type {PluginTuple<Array<unknown>>} */
            u
          );
          s(d, c);
        } else
          i(u);
      else
        throw new TypeError("Expected usable value, not `" + u + "`");
    }
    function i(u) {
      if (!("plugins" in u) && !("settings" in u))
        throw new Error(
          "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
        );
      l(u.plugins), u.settings && (o.settings = Wt(!0, o.settings, u.settings));
    }
    function l(u) {
      let d = -1;
      if (u != null) if (Array.isArray(u))
        for (; ++d < u.length; ) {
          const c = u[d];
          a(c);
        }
      else
        throw new TypeError("Expected a list of plugins, not `" + u + "`");
    }
    function s(u, d) {
      let c = -1, p = -1;
      for (; ++c < r.length; )
        if (r[c][0] === u) {
          p = c;
          break;
        }
      if (p === -1)
        r.push([u, ...d]);
      else if (d.length > 0) {
        let [m, ...h] = d;
        const y = r[p][1];
        fn(y) && fn(m) && (m = Wt(!0, y, m)), r[p] = [u, m, ...h];
      }
    }
  }
}
const Ic = new Ln().freeze();
function Yt(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `parser`");
}
function Qt(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `compiler`");
}
function Xt(e, t) {
  if (t)
    throw new Error(
      "Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function jr(e) {
  if (!fn(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function Ar(e, t, n) {
  if (!n)
    throw new Error(
      "`" + e + "` finished async. Use `" + t + "` instead"
    );
}
function wt(e) {
  return zc(e) ? e : new Lo(e);
}
function zc(e) {
  return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function jc(e) {
  return typeof e == "string" || Ac(e);
}
function Ac(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const Tc = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", Tr = [], Fr = { allowDangerousHtml: !0 }, Fc = /^(https?|ircs?|mailto|xmpp)$/i, Lc = [
  { from: "astPlugins", id: "remove-buggy-html-in-markdown-parser" },
  { from: "allowDangerousHtml", id: "remove-buggy-html-in-markdown-parser" },
  {
    from: "allowNode",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowElement"
  },
  {
    from: "allowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowedElements"
  },
  {
    from: "disallowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "disallowedElements"
  },
  { from: "escapeHtml", id: "remove-buggy-html-in-markdown-parser" },
  { from: "includeElementIndex", id: "#remove-includeelementindex" },
  {
    from: "includeNodeIndex",
    id: "change-includenodeindex-to-includeelementindex"
  },
  { from: "linkTarget", id: "remove-linktarget" },
  { from: "plugins", id: "change-plugins-to-remarkplugins", to: "remarkPlugins" },
  { from: "rawSourcePos", id: "#remove-rawsourcepos" },
  { from: "renderers", id: "change-renderers-to-components", to: "components" },
  { from: "source", id: "change-source-to-children", to: "children" },
  { from: "sourcePos", id: "#remove-sourcepos" },
  { from: "transformImageUri", id: "#add-urltransform", to: "urlTransform" },
  { from: "transformLinkUri", id: "#add-urltransform", to: "urlTransform" }
];
function Rc(e) {
  const t = e.allowedElements, n = e.allowElement, r = e.children || "", o = e.className, a = e.components, i = e.disallowedElements, l = e.rehypePlugins || Tr, s = e.remarkPlugins || Tr, u = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ...Fr } : Fr, d = e.skipHtml, c = e.unwrapDisallowed, p = e.urlTransform || Mc, m = Ic().use(bu).use(s).use(dc, u).use(l), h = new Lo();
  typeof r == "string" && (h.value = r);
  for (const E of Lc)
    Object.hasOwn(e, E.from) && ("" + E.from + (E.to ? "use `" + E.to + "` instead" : "remove it") + Tc + E.id, void 0);
  const y = m.parse(h);
  let v = m.runSync(y, h);
  return o && (v = {
    type: "element",
    tagName: "div",
    properties: { className: o },
    // Assume no doctypes.
    children: (
      /** @type {Array<ElementContent>} */
      v.type === "root" ? v.children : [v]
    )
  }), Fn(v, k), Za(v, {
    Fragment: f.Fragment,
    components: a,
    ignoreInvalidStyle: !0,
    jsx: f.jsx,
    jsxs: f.jsxs,
    passKeys: !0,
    passNode: !0
  });
  function k(E, x, P) {
    if (E.type === "raw" && P && typeof x == "number")
      return d ? P.children.splice(x, 1) : P.children[x] = { type: "text", value: E.value }, x;
    if (E.type === "element") {
      let j;
      for (j in Vt)
        if (Object.hasOwn(Vt, j) && Object.hasOwn(E.properties, j)) {
          const C = E.properties[j], R = Vt[j];
          (R === null || R.includes(E.tagName)) && (E.properties[j] = p(String(C || ""), j, E));
        }
    }
    if (E.type === "element") {
      let j = t ? !t.includes(E.tagName) : i ? i.includes(E.tagName) : !1;
      if (!j && n && typeof x == "number" && (j = !n(E, x, P)), j && P && typeof x == "number")
        return c && E.children ? P.children.splice(x, 1, ...E.children) : P.children.splice(x, 1), x;
    }
  }
}
function Mc(e) {
  const t = e.indexOf(":"), n = e.indexOf("?"), r = e.indexOf("#"), o = e.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    t < 0 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    o > -1 && t > o || n > -1 && t > n || r > -1 && t > r || // It is a protocol, it should be allowed.
    Fc.test(e.slice(0, t)) ? e : ""
  );
}
function Lr(e, t) {
  const n = String(e);
  if (typeof t != "string")
    throw new TypeError("Expected character");
  let r = 0, o = n.indexOf(t);
  for (; o !== -1; )
    r++, o = n.indexOf(t, o + t.length);
  return r;
}
function Oc(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string");
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function Nc(e, t, n) {
  const o = Mt((n || {}).ignore || []), a = _c(t);
  let i = -1;
  for (; ++i < a.length; )
    To(e, "text", l);
  function l(u, d) {
    let c = -1, p;
    for (; ++c < d.length; ) {
      const m = d[c], h = p ? p.children : void 0;
      if (o(
        m,
        h ? h.indexOf(m) : void 0,
        p
      ))
        return;
      p = m;
    }
    if (p)
      return s(u, d);
  }
  function s(u, d) {
    const c = d[d.length - 1], p = a[i][0], m = a[i][1];
    let h = 0;
    const v = c.children.indexOf(u);
    let k = !1, E = [];
    p.lastIndex = 0;
    let x = p.exec(u.value);
    for (; x; ) {
      const P = x.index, j = {
        index: x.index,
        input: x.input,
        stack: [...d, u]
      };
      let C = m(...x, j);
      if (typeof C == "string" && (C = C.length > 0 ? { type: "text", value: C } : void 0), C === !1 ? p.lastIndex = P + 1 : (h !== P && E.push({
        type: "text",
        value: u.value.slice(h, P)
      }), Array.isArray(C) ? E.push(...C) : C && E.push(C), h = P + x[0].length, k = !0), !p.global)
        break;
      x = p.exec(u.value);
    }
    return k ? (h < u.value.length && E.push({ type: "text", value: u.value.slice(h) }), c.children.splice(v, 1, ...E)) : E = [u], v + E.length;
  }
}
function _c(e) {
  const t = [];
  if (!Array.isArray(e))
    throw new TypeError("Expected find and replace tuple or list of tuples");
  const n = !e[0] || Array.isArray(e[0]) ? e : [e];
  let r = -1;
  for (; ++r < n.length; ) {
    const o = n[r];
    t.push([Bc(o[0]), $c(o[1])]);
  }
  return t;
}
function Bc(e) {
  return typeof e == "string" ? new RegExp(Oc(e), "g") : e;
}
function $c(e) {
  return typeof e == "function" ? e : function() {
    return e;
  };
}
const Zt = "phrasing", en = ["autolink", "link", "image", "label"];
function Uc() {
  return {
    transforms: [Kc],
    enter: {
      literalAutolink: Hc,
      literalAutolinkEmail: tn,
      literalAutolinkHttp: tn,
      literalAutolinkWww: tn
    },
    exit: {
      literalAutolink: Jc,
      literalAutolinkEmail: Gc,
      literalAutolinkHttp: qc,
      literalAutolinkWww: Wc
    }
  };
}
function Vc() {
  return {
    unsafe: [
      {
        character: "@",
        before: "[+\\-.\\w]",
        after: "[\\-.\\w]",
        inConstruct: Zt,
        notInConstruct: en
      },
      {
        character: ".",
        before: "[Ww]",
        after: "[\\-.\\w]",
        inConstruct: Zt,
        notInConstruct: en
      },
      {
        character: ":",
        before: "[ps]",
        after: "\\/",
        inConstruct: Zt,
        notInConstruct: en
      }
    ]
  };
}
function Hc(e) {
  this.enter({ type: "link", title: null, url: "", children: [] }, e);
}
function tn(e) {
  this.config.enter.autolinkProtocol.call(this, e);
}
function qc(e) {
  this.config.exit.autolinkProtocol.call(this, e);
}
function Wc(e) {
  this.config.exit.data.call(this, e);
  const t = this.stack[this.stack.length - 1];
  t.type, t.url = "http://" + this.sliceSerialize(e);
}
function Gc(e) {
  this.config.exit.autolinkEmail.call(this, e);
}
function Jc(e) {
  this.exit(e);
}
function Kc(e) {
  Nc(
    e,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, Yc],
      [new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)", "gu"), Qc]
    ],
    { ignore: ["link", "linkReference"] }
  );
}
function Yc(e, t, n, r, o) {
  let a = "";
  if (!Ro(o) || (/^w/i.test(t) && (n = t + n, t = "", a = "http://"), !Xc(n)))
    return !1;
  const i = Zc(n + r);
  if (!i[0]) return !1;
  const l = {
    type: "link",
    title: null,
    url: a + t + i[0],
    children: [{ type: "text", value: t + i[0] }]
  };
  return i[1] ? [l, { type: "text", value: i[1] }] : l;
}
function Qc(e, t, n, r) {
  return (
    // Not an expected previous character.
    !Ro(r, !0) || // Label ends in not allowed character.
    /[-\d_]$/.test(n) ? !1 : {
      type: "link",
      title: null,
      url: "mailto:" + t + "@" + n,
      children: [{ type: "text", value: t + "@" + n }]
    }
  );
}
function Xc(e) {
  const t = e.split(".");
  return !(t.length < 2 || t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1])) || t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])));
}
function Zc(e) {
  const t = /[!"&'),.:;<>?\]}]+$/.exec(e);
  if (!t)
    return [e, void 0];
  e = e.slice(0, t.index);
  let n = t[0], r = n.indexOf(")");
  const o = Lr(e, "(");
  let a = Lr(e, ")");
  for (; r !== -1 && o > a; )
    e += n.slice(0, r + 1), n = n.slice(r + 1), r = n.indexOf(")"), a++;
  return [e, n];
}
function Ro(e, t) {
  const n = e.input.charCodeAt(e.index - 1);
  return (e.index === 0 || We(n) || Ft(n)) && // If it’s an email, the previous character should not be a slash.
  (!t || n !== 47);
}
Mo.peek = cd;
function ed() {
  return {
    enter: {
      gfmFootnoteDefinition: nd,
      gfmFootnoteDefinitionLabelString: rd,
      gfmFootnoteCall: ad,
      gfmFootnoteCallString: ld
    },
    exit: {
      gfmFootnoteDefinition: id,
      gfmFootnoteDefinitionLabelString: od,
      gfmFootnoteCall: ud,
      gfmFootnoteCallString: sd
    }
  };
}
function td() {
  return {
    // This is on by default already.
    unsafe: [{ character: "[", inConstruct: ["phrasing", "label", "reference"] }],
    handlers: { footnoteDefinition: dd, footnoteReference: Mo }
  };
}
function nd(e) {
  this.enter(
    { type: "footnoteDefinition", identifier: "", label: "", children: [] },
    e
  );
}
function rd() {
  this.buffer();
}
function od(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.type, n.label = t, n.identifier = Pe(
    this.sliceSerialize(e)
  ).toLowerCase();
}
function id(e) {
  this.exit(e);
}
function ad(e) {
  this.enter({ type: "footnoteReference", identifier: "", label: "" }, e);
}
function ld() {
  this.buffer();
}
function sd(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.type, n.label = t, n.identifier = Pe(
    this.sliceSerialize(e)
  ).toLowerCase();
}
function ud(e) {
  this.exit(e);
}
function Mo(e, t, n, r) {
  const o = n.createTracker(r);
  let a = o.move("[^");
  const i = n.enter("footnoteReference"), l = n.enter("reference");
  return a += o.move(
    n.safe(n.associationId(e), {
      ...o.current(),
      before: a,
      after: "]"
    })
  ), l(), i(), a += o.move("]"), a;
}
function cd() {
  return "[";
}
function dd(e, t, n, r) {
  const o = n.createTracker(r);
  let a = o.move("[^");
  const i = n.enter("footnoteDefinition"), l = n.enter("label");
  return a += o.move(
    n.safe(n.associationId(e), {
      ...o.current(),
      before: a,
      after: "]"
    })
  ), l(), a += o.move(
    "]:" + (e.children && e.children.length > 0 ? " " : "")
  ), o.shift(4), a += o.move(
    n.indentLines(n.containerFlow(e, o.current()), md)
  ), i(), a;
}
function md(e, t, n) {
  return t === 0 ? e : (n ? "" : "    ") + e;
}
const pd = [
  "autolink",
  "destinationLiteral",
  "destinationRaw",
  "reference",
  "titleQuote",
  "titleApostrophe"
];
Oo.peek = yd;
function hd() {
  return {
    canContainEols: ["delete"],
    enter: { strikethrough: gd },
    exit: { strikethrough: bd }
  };
}
function fd() {
  return {
    unsafe: [
      {
        character: "~",
        inConstruct: "phrasing",
        notInConstruct: pd
      }
    ],
    handlers: { delete: Oo }
  };
}
function gd(e) {
  this.enter({ type: "delete", children: [] }, e);
}
function bd(e) {
  this.exit(e);
}
function Oo(e, t, n, r) {
  const o = n.createTracker(r), a = n.enter("strikethrough");
  let i = o.move("~~");
  return i += n.containerPhrasing(e, {
    ...o.current(),
    before: i,
    after: "~"
  }), i += o.move("~~"), a(), i;
}
function yd() {
  return "~";
}
function kd(e, t = {}) {
  const n = (t.align || []).concat(), r = t.stringLength || xd, o = [], a = [], i = [], l = [];
  let s = 0, u = -1;
  for (; ++u < e.length; ) {
    const h = [], y = [];
    let v = -1;
    for (e[u].length > s && (s = e[u].length); ++v < e[u].length; ) {
      const k = wd(e[u][v]);
      if (t.alignDelimiters !== !1) {
        const E = r(k);
        y[v] = E, (l[v] === void 0 || E > l[v]) && (l[v] = E);
      }
      h.push(k);
    }
    a[u] = h, i[u] = y;
  }
  let d = -1;
  if (typeof n == "object" && "length" in n)
    for (; ++d < s; )
      o[d] = Rr(n[d]);
  else {
    const h = Rr(n);
    for (; ++d < s; )
      o[d] = h;
  }
  d = -1;
  const c = [], p = [];
  for (; ++d < s; ) {
    const h = o[d];
    let y = "", v = "";
    h === 99 ? (y = ":", v = ":") : h === 108 ? y = ":" : h === 114 && (v = ":");
    let k = t.alignDelimiters === !1 ? 1 : Math.max(
      1,
      l[d] - y.length - v.length
    );
    const E = y + "-".repeat(k) + v;
    t.alignDelimiters !== !1 && (k = y.length + k + v.length, k > l[d] && (l[d] = k), p[d] = k), c[d] = E;
  }
  a.splice(1, 0, c), i.splice(1, 0, p), u = -1;
  const m = [];
  for (; ++u < a.length; ) {
    const h = a[u], y = i[u];
    d = -1;
    const v = [];
    for (; ++d < s; ) {
      const k = h[d] || "";
      let E = "", x = "";
      if (t.alignDelimiters !== !1) {
        const P = l[d] - (y[d] || 0), j = o[d];
        j === 114 ? E = " ".repeat(P) : j === 99 ? P % 2 ? (E = " ".repeat(P / 2 + 0.5), x = " ".repeat(P / 2 - 0.5)) : (E = " ".repeat(P / 2), x = E) : x = " ".repeat(P);
      }
      t.delimiterStart !== !1 && !d && v.push("|"), t.padding !== !1 && // Don’t add the opening space if we’re not aligning and the cell is
      // empty: there will be a closing space.
      !(t.alignDelimiters === !1 && k === "") && (t.delimiterStart !== !1 || d) && v.push(" "), t.alignDelimiters !== !1 && v.push(E), v.push(k), t.alignDelimiters !== !1 && v.push(x), t.padding !== !1 && v.push(" "), (t.delimiterEnd !== !1 || d !== s - 1) && v.push("|");
    }
    m.push(
      t.delimiterEnd === !1 ? v.join("").replace(/ +$/, "") : v.join("")
    );
  }
  return m.join(`
`);
}
function wd(e) {
  return e == null ? "" : String(e);
}
function xd(e) {
  return e.length;
}
function Rr(e) {
  const t = typeof e == "string" ? e.codePointAt(0) : 0;
  return t === 67 || t === 99 ? 99 : t === 76 || t === 108 ? 108 : t === 82 || t === 114 ? 114 : 0;
}
function vd(e, t, n, r) {
  const o = n.enter("blockquote"), a = n.createTracker(r);
  a.move("> "), a.shift(2);
  const i = n.indentLines(
    n.containerFlow(e, a.current()),
    Cd
  );
  return o(), i;
}
function Cd(e, t, n) {
  return ">" + (n ? "" : " ") + e;
}
function Sd(e, t) {
  return Mr(e, t.inConstruct, !0) && !Mr(e, t.notInConstruct, !1);
}
function Mr(e, t, n) {
  if (typeof t == "string" && (t = [t]), !t || t.length === 0)
    return n;
  let r = -1;
  for (; ++r < t.length; )
    if (e.includes(t[r]))
      return !0;
  return !1;
}
function Or(e, t, n, r) {
  let o = -1;
  for (; ++o < n.unsafe.length; )
    if (n.unsafe[o].character === `
` && Sd(n.stack, n.unsafe[o]))
      return /[ \t]/.test(r.before) ? "" : " ";
  return `\\
`;
}
function Ed(e, t) {
  const n = String(e);
  let r = n.indexOf(t), o = r, a = 0, i = 0;
  if (typeof t != "string")
    throw new TypeError("Expected substring");
  for (; r !== -1; )
    r === o ? ++a > i && (i = a) : a = 1, o = r + t.length, r = n.indexOf(t, o);
  return i;
}
function Pd(e, t) {
  return !!(t.options.fences === !1 && e.value && // If there’s no info…
  !e.lang && // And there’s a non-whitespace character…
  /[^ \r\n]/.test(e.value) && // And the value doesn’t start or end in a blank…
  !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value));
}
function Dd(e) {
  const t = e.options.fence || "`";
  if (t !== "`" && t !== "~")
    throw new Error(
      "Cannot serialize code with `" + t + "` for `options.fence`, expected `` ` `` or `~`"
    );
  return t;
}
function Id(e, t, n, r) {
  const o = Dd(n), a = e.value || "", i = o === "`" ? "GraveAccent" : "Tilde";
  if (Pd(e, n)) {
    const c = n.enter("codeIndented"), p = n.indentLines(a, zd);
    return c(), p;
  }
  const l = n.createTracker(r), s = o.repeat(Math.max(Ed(a, o) + 1, 3)), u = n.enter("codeFenced");
  let d = l.move(s);
  if (e.lang) {
    const c = n.enter(`codeFencedLang${i}`);
    d += l.move(
      n.safe(e.lang, {
        before: d,
        after: " ",
        encode: ["`"],
        ...l.current()
      })
    ), c();
  }
  if (e.lang && e.meta) {
    const c = n.enter(`codeFencedMeta${i}`);
    d += l.move(" "), d += l.move(
      n.safe(e.meta, {
        before: d,
        after: `
`,
        encode: ["`"],
        ...l.current()
      })
    ), c();
  }
  return d += l.move(`
`), a && (d += l.move(a + `
`)), d += l.move(s), u(), d;
}
function zd(e, t, n) {
  return (n ? "" : "    ") + e;
}
function Rn(e) {
  const t = e.options.quote || '"';
  if (t !== '"' && t !== "'")
    throw new Error(
      "Cannot serialize title with `" + t + "` for `options.quote`, expected `\"`, or `'`"
    );
  return t;
}
function jd(e, t, n, r) {
  const o = Rn(n), a = o === '"' ? "Quote" : "Apostrophe", i = n.enter("definition");
  let l = n.enter("label");
  const s = n.createTracker(r);
  let u = s.move("[");
  return u += s.move(
    n.safe(n.associationId(e), {
      before: u,
      after: "]",
      ...s.current()
    })
  ), u += s.move("]: "), l(), // If there’s no url, or…
  !e.url || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (l = n.enter("destinationLiteral"), u += s.move("<"), u += s.move(
    n.safe(e.url, { before: u, after: ">", ...s.current() })
  ), u += s.move(">")) : (l = n.enter("destinationRaw"), u += s.move(
    n.safe(e.url, {
      before: u,
      after: e.title ? " " : `
`,
      ...s.current()
    })
  )), l(), e.title && (l = n.enter(`title${a}`), u += s.move(" " + o), u += s.move(
    n.safe(e.title, {
      before: u,
      after: o,
      ...s.current()
    })
  ), u += s.move(o), l()), i(), u;
}
function Ad(e) {
  const t = e.options.emphasis || "*";
  if (t !== "*" && t !== "_")
    throw new Error(
      "Cannot serialize emphasis with `" + t + "` for `options.emphasis`, expected `*`, or `_`"
    );
  return t;
}
No.peek = Td;
function No(e, t, n, r) {
  const o = Ad(n), a = n.enter("emphasis"), i = n.createTracker(r);
  let l = i.move(o);
  return l += i.move(
    n.containerPhrasing(e, {
      before: l,
      after: o,
      ...i.current()
    })
  ), l += i.move(o), a(), l;
}
function Td(e, t, n) {
  return n.options.emphasis || "*";
}
function Fd(e, t) {
  let n = !1;
  return Fn(e, function(r) {
    if ("value" in r && /\r?\n|\r/.test(r.value) || r.type === "break")
      return n = !0, pn;
  }), !!((!e.depth || e.depth < 3) && Pn(e) && (t.options.setext || n));
}
function Ld(e, t, n, r) {
  const o = Math.max(Math.min(6, e.depth || 1), 1), a = n.createTracker(r);
  if (Fd(e, n)) {
    const d = n.enter("headingSetext"), c = n.enter("phrasing"), p = n.containerPhrasing(e, {
      ...a.current(),
      before: `
`,
      after: `
`
    });
    return c(), d(), p + `
` + (o === 1 ? "=" : "-").repeat(
      // The whole size…
      p.length - // Minus the position of the character after the last EOL (or
      // 0 if there is none)…
      (Math.max(p.lastIndexOf("\r"), p.lastIndexOf(`
`)) + 1)
    );
  }
  const i = "#".repeat(o), l = n.enter("headingAtx"), s = n.enter("phrasing");
  a.move(i + " ");
  let u = n.containerPhrasing(e, {
    before: "# ",
    after: `
`,
    ...a.current()
  });
  return /^[\t ]/.test(u) && (u = "&#x" + u.charCodeAt(0).toString(16).toUpperCase() + ";" + u.slice(1)), u = u ? i + " " + u : i, n.options.closeAtx && (u += " " + i), s(), l(), u;
}
_o.peek = Rd;
function _o(e) {
  return e.value || "";
}
function Rd() {
  return "<";
}
Bo.peek = Md;
function Bo(e, t, n, r) {
  const o = Rn(n), a = o === '"' ? "Quote" : "Apostrophe", i = n.enter("image");
  let l = n.enter("label");
  const s = n.createTracker(r);
  let u = s.move("![");
  return u += s.move(
    n.safe(e.alt, { before: u, after: "]", ...s.current() })
  ), u += s.move("]("), l(), // If there’s no url but there is a title…
  !e.url && e.title || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (l = n.enter("destinationLiteral"), u += s.move("<"), u += s.move(
    n.safe(e.url, { before: u, after: ">", ...s.current() })
  ), u += s.move(">")) : (l = n.enter("destinationRaw"), u += s.move(
    n.safe(e.url, {
      before: u,
      after: e.title ? " " : ")",
      ...s.current()
    })
  )), l(), e.title && (l = n.enter(`title${a}`), u += s.move(" " + o), u += s.move(
    n.safe(e.title, {
      before: u,
      after: o,
      ...s.current()
    })
  ), u += s.move(o), l()), u += s.move(")"), i(), u;
}
function Md() {
  return "!";
}
$o.peek = Od;
function $o(e, t, n, r) {
  const o = e.referenceType, a = n.enter("imageReference");
  let i = n.enter("label");
  const l = n.createTracker(r);
  let s = l.move("![");
  const u = n.safe(e.alt, {
    before: s,
    after: "]",
    ...l.current()
  });
  s += l.move(u + "]["), i();
  const d = n.stack;
  n.stack = [], i = n.enter("reference");
  const c = n.safe(n.associationId(e), {
    before: s,
    after: "]",
    ...l.current()
  });
  return i(), n.stack = d, a(), o === "full" || !u || u !== c ? s += l.move(c + "]") : o === "shortcut" ? s = s.slice(0, -1) : s += l.move("]"), s;
}
function Od() {
  return "!";
}
Uo.peek = Nd;
function Uo(e, t, n) {
  let r = e.value || "", o = "`", a = -1;
  for (; new RegExp("(^|[^`])" + o + "([^`]|$)").test(r); )
    o += "`";
  for (/[^ \r\n]/.test(r) && (/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r) || /^`|`$/.test(r)) && (r = " " + r + " "); ++a < n.unsafe.length; ) {
    const i = n.unsafe[a], l = n.compilePattern(i);
    let s;
    if (i.atBreak)
      for (; s = l.exec(r); ) {
        let u = s.index;
        r.charCodeAt(u) === 10 && r.charCodeAt(u - 1) === 13 && u--, r = r.slice(0, u) + " " + r.slice(s.index + 1);
      }
  }
  return o + r + o;
}
function Nd() {
  return "`";
}
function Vo(e, t) {
  const n = Pn(e);
  return !!(!t.options.resourceLink && // If there’s a url…
  e.url && // And there’s a no title…
  !e.title && // And the content of `node` is a single text node…
  e.children && e.children.length === 1 && e.children[0].type === "text" && // And if the url is the same as the content…
  (n === e.url || "mailto:" + n === e.url) && // And that starts w/ a protocol…
  /^[a-z][a-z+.-]+:/i.test(e.url) && // And that doesn’t contain ASCII control codes (character escapes and
  // references don’t work), space, or angle brackets…
  !/[\0- <>\u007F]/.test(e.url));
}
Ho.peek = _d;
function Ho(e, t, n, r) {
  const o = Rn(n), a = o === '"' ? "Quote" : "Apostrophe", i = n.createTracker(r);
  let l, s;
  if (Vo(e, n)) {
    const d = n.stack;
    n.stack = [], l = n.enter("autolink");
    let c = i.move("<");
    return c += i.move(
      n.containerPhrasing(e, {
        before: c,
        after: ">",
        ...i.current()
      })
    ), c += i.move(">"), l(), n.stack = d, c;
  }
  l = n.enter("link"), s = n.enter("label");
  let u = i.move("[");
  return u += i.move(
    n.containerPhrasing(e, {
      before: u,
      after: "](",
      ...i.current()
    })
  ), u += i.move("]("), s(), // If there’s no url but there is a title…
  !e.url && e.title || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (s = n.enter("destinationLiteral"), u += i.move("<"), u += i.move(
    n.safe(e.url, { before: u, after: ">", ...i.current() })
  ), u += i.move(">")) : (s = n.enter("destinationRaw"), u += i.move(
    n.safe(e.url, {
      before: u,
      after: e.title ? " " : ")",
      ...i.current()
    })
  )), s(), e.title && (s = n.enter(`title${a}`), u += i.move(" " + o), u += i.move(
    n.safe(e.title, {
      before: u,
      after: o,
      ...i.current()
    })
  ), u += i.move(o), s()), u += i.move(")"), l(), u;
}
function _d(e, t, n) {
  return Vo(e, n) ? "<" : "[";
}
qo.peek = Bd;
function qo(e, t, n, r) {
  const o = e.referenceType, a = n.enter("linkReference");
  let i = n.enter("label");
  const l = n.createTracker(r);
  let s = l.move("[");
  const u = n.containerPhrasing(e, {
    before: s,
    after: "]",
    ...l.current()
  });
  s += l.move(u + "]["), i();
  const d = n.stack;
  n.stack = [], i = n.enter("reference");
  const c = n.safe(n.associationId(e), {
    before: s,
    after: "]",
    ...l.current()
  });
  return i(), n.stack = d, a(), o === "full" || !u || u !== c ? s += l.move(c + "]") : o === "shortcut" ? s = s.slice(0, -1) : s += l.move("]"), s;
}
function Bd() {
  return "[";
}
function Mn(e) {
  const t = e.options.bullet || "*";
  if (t !== "*" && t !== "+" && t !== "-")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bullet`, expected `*`, `+`, or `-`"
    );
  return t;
}
function $d(e) {
  const t = Mn(e), n = e.options.bulletOther;
  if (!n)
    return t === "*" ? "-" : "*";
  if (n !== "*" && n !== "+" && n !== "-")
    throw new Error(
      "Cannot serialize items with `" + n + "` for `options.bulletOther`, expected `*`, `+`, or `-`"
    );
  if (n === t)
    throw new Error(
      "Expected `bullet` (`" + t + "`) and `bulletOther` (`" + n + "`) to be different"
    );
  return n;
}
function Ud(e) {
  const t = e.options.bulletOrdered || ".";
  if (t !== "." && t !== ")")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bulletOrdered`, expected `.` or `)`"
    );
  return t;
}
function Wo(e) {
  const t = e.options.rule || "*";
  if (t !== "*" && t !== "-" && t !== "_")
    throw new Error(
      "Cannot serialize rules with `" + t + "` for `options.rule`, expected `*`, `-`, or `_`"
    );
  return t;
}
function Vd(e, t, n, r) {
  const o = n.enter("list"), a = n.bulletCurrent;
  let i = e.ordered ? Ud(n) : Mn(n);
  const l = e.ordered ? i === "." ? ")" : "." : $d(n);
  let s = t && n.bulletLastUsed ? i === n.bulletLastUsed : !1;
  if (!e.ordered) {
    const d = e.children ? e.children[0] : void 0;
    if (
      // Bullet could be used as a thematic break marker:
      (i === "*" || i === "-") && // Empty first list item:
      d && (!d.children || !d.children[0]) && // Directly in two other list items:
      n.stack[n.stack.length - 1] === "list" && n.stack[n.stack.length - 2] === "listItem" && n.stack[n.stack.length - 3] === "list" && n.stack[n.stack.length - 4] === "listItem" && // That are each the first child.
      n.indexStack[n.indexStack.length - 1] === 0 && n.indexStack[n.indexStack.length - 2] === 0 && n.indexStack[n.indexStack.length - 3] === 0 && (s = !0), Wo(n) === i && d
    ) {
      let c = -1;
      for (; ++c < e.children.length; ) {
        const p = e.children[c];
        if (p && p.type === "listItem" && p.children && p.children[0] && p.children[0].type === "thematicBreak") {
          s = !0;
          break;
        }
      }
    }
  }
  s && (i = l), n.bulletCurrent = i;
  const u = n.containerFlow(e, r);
  return n.bulletLastUsed = i, n.bulletCurrent = a, o(), u;
}
function Hd(e) {
  const t = e.options.listItemIndent || "one";
  if (t !== "tab" && t !== "one" && t !== "mixed")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
    );
  return t;
}
function qd(e, t, n, r) {
  const o = Hd(n);
  let a = n.bulletCurrent || Mn(n);
  t && t.type === "list" && t.ordered && (a = (typeof t.start == "number" && t.start > -1 ? t.start : 1) + (n.options.incrementListMarker === !1 ? 0 : t.children.indexOf(e)) + a);
  let i = a.length + 1;
  (o === "tab" || o === "mixed" && (t && t.type === "list" && t.spread || e.spread)) && (i = Math.ceil(i / 4) * 4);
  const l = n.createTracker(r);
  l.move(a + " ".repeat(i - a.length)), l.shift(i);
  const s = n.enter("listItem"), u = n.indentLines(
    n.containerFlow(e, l.current()),
    d
  );
  return s(), u;
  function d(c, p, m) {
    return p ? (m ? "" : " ".repeat(i)) + c : (m ? a : a + " ".repeat(i - a.length)) + c;
  }
}
function Wd(e, t, n, r) {
  const o = n.enter("paragraph"), a = n.enter("phrasing"), i = n.containerPhrasing(e, r);
  return a(), o(), i;
}
const Gd = (
  /** @type {(node?: unknown) => node is Exclude<PhrasingContent, Html>} */
  Mt([
    "break",
    "delete",
    "emphasis",
    // To do: next major: removed since footnotes were added to GFM.
    "footnote",
    "footnoteReference",
    "image",
    "imageReference",
    "inlineCode",
    // Enabled by `mdast-util-math`:
    "inlineMath",
    "link",
    "linkReference",
    // Enabled by `mdast-util-mdx`:
    "mdxJsxTextElement",
    // Enabled by `mdast-util-mdx`:
    "mdxTextExpression",
    "strong",
    "text",
    // Enabled by `mdast-util-directive`:
    "textDirective"
  ])
);
function Jd(e, t, n, r) {
  return (e.children.some(function(i) {
    return Gd(i);
  }) ? n.containerPhrasing : n.containerFlow).call(n, e, r);
}
function Kd(e) {
  const t = e.options.strong || "*";
  if (t !== "*" && t !== "_")
    throw new Error(
      "Cannot serialize strong with `" + t + "` for `options.strong`, expected `*`, or `_`"
    );
  return t;
}
Go.peek = Yd;
function Go(e, t, n, r) {
  const o = Kd(n), a = n.enter("strong"), i = n.createTracker(r);
  let l = i.move(o + o);
  return l += i.move(
    n.containerPhrasing(e, {
      before: l,
      after: o,
      ...i.current()
    })
  ), l += i.move(o + o), a(), l;
}
function Yd(e, t, n) {
  return n.options.strong || "*";
}
function Qd(e, t, n, r) {
  return n.safe(e.value, r);
}
function Xd(e) {
  const t = e.options.ruleRepetition || 3;
  if (t < 3)
    throw new Error(
      "Cannot serialize rules with repetition `" + t + "` for `options.ruleRepetition`, expected `3` or more"
    );
  return t;
}
function Zd(e, t, n) {
  const r = (Wo(n) + (n.options.ruleSpaces ? " " : "")).repeat(Xd(n));
  return n.options.ruleSpaces ? r.slice(0, -1) : r;
}
const Jo = {
  blockquote: vd,
  break: Or,
  code: Id,
  definition: jd,
  emphasis: No,
  hardBreak: Or,
  heading: Ld,
  html: _o,
  image: Bo,
  imageReference: $o,
  inlineCode: Uo,
  link: Ho,
  linkReference: qo,
  list: Vd,
  listItem: qd,
  paragraph: Wd,
  root: Jd,
  strong: Go,
  text: Qd,
  thematicBreak: Zd
};
function em() {
  return {
    enter: {
      table: tm,
      tableData: Nr,
      tableHeader: Nr,
      tableRow: rm
    },
    exit: {
      codeText: om,
      table: nm,
      tableData: nn,
      tableHeader: nn,
      tableRow: nn
    }
  };
}
function tm(e) {
  const t = e._align;
  this.enter(
    {
      type: "table",
      align: t.map(function(n) {
        return n === "none" ? null : n;
      }),
      children: []
    },
    e
  ), this.data.inTable = !0;
}
function nm(e) {
  this.exit(e), this.data.inTable = void 0;
}
function rm(e) {
  this.enter({ type: "tableRow", children: [] }, e);
}
function nn(e) {
  this.exit(e);
}
function Nr(e) {
  this.enter({ type: "tableCell", children: [] }, e);
}
function om(e) {
  let t = this.resume();
  this.data.inTable && (t = t.replace(/\\([\\|])/g, im));
  const n = this.stack[this.stack.length - 1];
  n.type, n.value = t, this.exit(e);
}
function im(e, t) {
  return t === "|" ? t : e;
}
function am(e) {
  const t = e || {}, n = t.tableCellPadding, r = t.tablePipeAlign, o = t.stringLength, a = n ? " " : "|";
  return {
    unsafe: [
      { character: "\r", inConstruct: "tableCell" },
      { character: `
`, inConstruct: "tableCell" },
      // A pipe, when followed by a tab or space (padding), or a dash or colon
      // (unpadded delimiter row), could result in a table.
      { atBreak: !0, character: "|", after: "[	 :-]" },
      // A pipe in a cell must be encoded.
      { character: "|", inConstruct: "tableCell" },
      // A colon must be followed by a dash, in which case it could start a
      // delimiter row.
      { atBreak: !0, character: ":", after: "-" },
      // A delimiter row can also start with a dash, when followed by more
      // dashes, a colon, or a pipe.
      // This is a stricter version than the built in check for lists, thematic
      // breaks, and setex heading underlines though:
      // <https://github.com/syntax-tree/mdast-util-to-markdown/blob/51a2038/lib/unsafe.js#L57>
      { atBreak: !0, character: "-", after: "[:|-]" }
    ],
    handlers: {
      inlineCode: p,
      table: i,
      tableCell: s,
      tableRow: l
    }
  };
  function i(m, h, y, v) {
    return u(d(m, y, v), m.align);
  }
  function l(m, h, y, v) {
    const k = c(m, y, v), E = u([k]);
    return E.slice(0, E.indexOf(`
`));
  }
  function s(m, h, y, v) {
    const k = y.enter("tableCell"), E = y.enter("phrasing"), x = y.containerPhrasing(m, {
      ...v,
      before: a,
      after: a
    });
    return E(), k(), x;
  }
  function u(m, h) {
    return kd(m, {
      align: h,
      // @ts-expect-error: `markdown-table` types should support `null`.
      alignDelimiters: r,
      // @ts-expect-error: `markdown-table` types should support `null`.
      padding: n,
      // @ts-expect-error: `markdown-table` types should support `null`.
      stringLength: o
    });
  }
  function d(m, h, y) {
    const v = m.children;
    let k = -1;
    const E = [], x = h.enter("table");
    for (; ++k < v.length; )
      E[k] = c(v[k], h, y);
    return x(), E;
  }
  function c(m, h, y) {
    const v = m.children;
    let k = -1;
    const E = [], x = h.enter("tableRow");
    for (; ++k < v.length; )
      E[k] = s(v[k], m, h, y);
    return x(), E;
  }
  function p(m, h, y) {
    let v = Jo.inlineCode(m, h, y);
    return y.stack.includes("tableCell") && (v = v.replace(/\|/g, "\\$&")), v;
  }
}
function lm() {
  return {
    exit: {
      taskListCheckValueChecked: _r,
      taskListCheckValueUnchecked: _r,
      paragraph: um
    }
  };
}
function sm() {
  return {
    unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
    handlers: { listItem: cm }
  };
}
function _r(e) {
  const t = this.stack[this.stack.length - 2];
  t.type, t.checked = e.type === "taskListCheckValueChecked";
}
function um(e) {
  const t = this.stack[this.stack.length - 2];
  if (t && t.type === "listItem" && typeof t.checked == "boolean") {
    const n = this.stack[this.stack.length - 1];
    n.type;
    const r = n.children[0];
    if (r && r.type === "text") {
      const o = t.children;
      let a = -1, i;
      for (; ++a < o.length; ) {
        const l = o[a];
        if (l.type === "paragraph") {
          i = l;
          break;
        }
      }
      i === n && (r.value = r.value.slice(1), r.value.length === 0 ? n.children.shift() : n.position && r.position && typeof r.position.start.offset == "number" && (r.position.start.column++, r.position.start.offset++, n.position.start = Object.assign({}, r.position.start)));
    }
  }
  this.exit(e);
}
function cm(e, t, n, r) {
  const o = e.children[0], a = typeof e.checked == "boolean" && o && o.type === "paragraph", i = "[" + (e.checked ? "x" : " ") + "] ", l = n.createTracker(r);
  a && l.move(i);
  let s = Jo.listItem(e, t, n, {
    ...r,
    ...l.current()
  });
  return a && (s = s.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, u)), s;
  function u(d) {
    return d + i;
  }
}
function dm() {
  return [
    Uc(),
    ed(),
    hd(),
    em(),
    lm()
  ];
}
function mm(e) {
  return {
    extensions: [
      Vc(),
      td(),
      fd(),
      am(e),
      sm()
    ]
  };
}
const pm = {
  tokenize: km,
  partial: !0
}, Ko = {
  tokenize: wm,
  partial: !0
}, Yo = {
  tokenize: xm,
  partial: !0
}, Qo = {
  tokenize: vm,
  partial: !0
}, hm = {
  tokenize: Cm,
  partial: !0
}, Xo = {
  name: "wwwAutolink",
  tokenize: bm,
  previous: ei
}, Zo = {
  name: "protocolAutolink",
  tokenize: ym,
  previous: ti
}, Fe = {
  name: "emailAutolink",
  tokenize: gm,
  previous: ni
}, Ie = {};
function fm() {
  return {
    text: Ie
  };
}
let Ue = 48;
for (; Ue < 123; )
  Ie[Ue] = Fe, Ue++, Ue === 58 ? Ue = 65 : Ue === 91 && (Ue = 97);
Ie[43] = Fe;
Ie[45] = Fe;
Ie[46] = Fe;
Ie[95] = Fe;
Ie[72] = [Fe, Zo];
Ie[104] = [Fe, Zo];
Ie[87] = [Fe, Xo];
Ie[119] = [Fe, Xo];
function gm(e, t, n) {
  const r = this;
  let o, a;
  return i;
  function i(c) {
    return !bn(c) || !ni.call(r, r.previous) || On(r.events) ? n(c) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), l(c));
  }
  function l(c) {
    return bn(c) ? (e.consume(c), l) : c === 64 ? (e.consume(c), s) : n(c);
  }
  function s(c) {
    return c === 46 ? e.check(hm, d, u)(c) : c === 45 || c === 95 || de(c) ? (a = !0, e.consume(c), s) : d(c);
  }
  function u(c) {
    return e.consume(c), o = !0, s;
  }
  function d(c) {
    return a && o && he(r.previous) ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(c)) : n(c);
  }
}
function bm(e, t, n) {
  const r = this;
  return o;
  function o(i) {
    return i !== 87 && i !== 119 || !ei.call(r, r.previous) || On(r.events) ? n(i) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(pm, e.attempt(Ko, e.attempt(Yo, a), n), n)(i));
  }
  function a(i) {
    return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(i);
  }
}
function ym(e, t, n) {
  const r = this;
  let o = "", a = !1;
  return i;
  function i(c) {
    return (c === 72 || c === 104) && ti.call(r, r.previous) && !On(r.events) ? (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), o += String.fromCodePoint(c), e.consume(c), l) : n(c);
  }
  function l(c) {
    if (he(c) && o.length < 5)
      return o += String.fromCodePoint(c), e.consume(c), l;
    if (c === 58) {
      const p = o.toLowerCase();
      if (p === "http" || p === "https")
        return e.consume(c), s;
    }
    return n(c);
  }
  function s(c) {
    return c === 47 ? (e.consume(c), a ? u : (a = !0, s)) : n(c);
  }
  function u(c) {
    return c === null || St(c) || Q(c) || We(c) || Ft(c) ? n(c) : e.attempt(Ko, e.attempt(Yo, d), n)(c);
  }
  function d(c) {
    return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(c);
  }
}
function km(e, t, n) {
  let r = 0;
  return o;
  function o(i) {
    return (i === 87 || i === 119) && r < 3 ? (r++, e.consume(i), o) : i === 46 && r === 3 ? (e.consume(i), a) : n(i);
  }
  function a(i) {
    return i === null ? n(i) : t(i);
  }
}
function wm(e, t, n) {
  let r, o, a;
  return i;
  function i(u) {
    return u === 46 || u === 95 ? e.check(Qo, s, l)(u) : u === null || Q(u) || We(u) || u !== 45 && Ft(u) ? s(u) : (a = !0, e.consume(u), i);
  }
  function l(u) {
    return u === 95 ? r = !0 : (o = r, r = void 0), e.consume(u), i;
  }
  function s(u) {
    return o || r || !a ? n(u) : t(u);
  }
}
function xm(e, t) {
  let n = 0, r = 0;
  return o;
  function o(i) {
    return i === 40 ? (n++, e.consume(i), o) : i === 41 && r < n ? a(i) : i === 33 || i === 34 || i === 38 || i === 39 || i === 41 || i === 42 || i === 44 || i === 46 || i === 58 || i === 59 || i === 60 || i === 63 || i === 93 || i === 95 || i === 126 ? e.check(Qo, t, a)(i) : i === null || Q(i) || We(i) ? t(i) : (e.consume(i), o);
  }
  function a(i) {
    return i === 41 && r++, e.consume(i), o;
  }
}
function vm(e, t, n) {
  return r;
  function r(l) {
    return l === 33 || l === 34 || l === 39 || l === 41 || l === 42 || l === 44 || l === 46 || l === 58 || l === 59 || l === 63 || l === 95 || l === 126 ? (e.consume(l), r) : l === 38 ? (e.consume(l), a) : l === 93 ? (e.consume(l), o) : (
      // `<` is an end.
      l === 60 || // So is whitespace.
      l === null || Q(l) || We(l) ? t(l) : n(l)
    );
  }
  function o(l) {
    return l === null || l === 40 || l === 91 || Q(l) || We(l) ? t(l) : r(l);
  }
  function a(l) {
    return he(l) ? i(l) : n(l);
  }
  function i(l) {
    return l === 59 ? (e.consume(l), r) : he(l) ? (e.consume(l), i) : n(l);
  }
}
function Cm(e, t, n) {
  return r;
  function r(a) {
    return e.consume(a), o;
  }
  function o(a) {
    return de(a) ? n(a) : t(a);
  }
}
function ei(e) {
  return e === null || e === 40 || e === 42 || e === 95 || e === 91 || e === 93 || e === 126 || Q(e);
}
function ti(e) {
  return !he(e);
}
function ni(e) {
  return !(e === 47 || bn(e));
}
function bn(e) {
  return e === 43 || e === 45 || e === 46 || e === 95 || de(e);
}
function On(e) {
  let t = e.length, n = !1;
  for (; t--; ) {
    const r = e[t][1];
    if ((r.type === "labelLink" || r.type === "labelImage") && !r._balanced) {
      n = !0;
      break;
    }
    if (r._gfmAutolinkLiteralWalkedInto) {
      n = !1;
      break;
    }
  }
  return e.length > 0 && !n && (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0), n;
}
const Sm = {
  tokenize: Tm,
  partial: !0
};
function Em() {
  return {
    document: {
      91: {
        name: "gfmFootnoteDefinition",
        tokenize: zm,
        continuation: {
          tokenize: jm
        },
        exit: Am
      }
    },
    text: {
      91: {
        name: "gfmFootnoteCall",
        tokenize: Im
      },
      93: {
        name: "gfmPotentialFootnoteCall",
        add: "after",
        tokenize: Pm,
        resolveTo: Dm
      }
    }
  };
}
function Pm(e, t, n) {
  const r = this;
  let o = r.events.length;
  const a = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let i;
  for (; o--; ) {
    const s = r.events[o][1];
    if (s.type === "labelImage") {
      i = s;
      break;
    }
    if (s.type === "gfmFootnoteCall" || s.type === "labelLink" || s.type === "label" || s.type === "image" || s.type === "link")
      break;
  }
  return l;
  function l(s) {
    if (!i || !i._balanced)
      return n(s);
    const u = Pe(r.sliceSerialize({
      start: i.end,
      end: r.now()
    }));
    return u.codePointAt(0) !== 94 || !a.includes(u.slice(1)) ? n(s) : (e.enter("gfmFootnoteCallLabelMarker"), e.consume(s), e.exit("gfmFootnoteCallLabelMarker"), t(s));
  }
}
function Dm(e, t) {
  let n = e.length;
  for (; n--; )
    if (e[n][1].type === "labelImage" && e[n][0] === "enter") {
      e[n][1];
      break;
    }
  e[n + 1][1].type = "data", e[n + 3][1].type = "gfmFootnoteCallLabelMarker";
  const r = {
    type: "gfmFootnoteCall",
    start: Object.assign({}, e[n + 3][1].start),
    end: Object.assign({}, e[e.length - 1][1].end)
  }, o = {
    type: "gfmFootnoteCallMarker",
    start: Object.assign({}, e[n + 3][1].end),
    end: Object.assign({}, e[n + 3][1].end)
  };
  o.end.column++, o.end.offset++, o.end._bufferIndex++;
  const a = {
    type: "gfmFootnoteCallString",
    start: Object.assign({}, o.end),
    end: Object.assign({}, e[e.length - 1][1].start)
  }, i = {
    type: "chunkString",
    contentType: "string",
    start: Object.assign({}, a.start),
    end: Object.assign({}, a.end)
  }, l = [
    // Take the `labelImageMarker` (now `data`, the `!`)
    e[n + 1],
    e[n + 2],
    ["enter", r, t],
    // The `[`
    e[n + 3],
    e[n + 4],
    // The `^`.
    ["enter", o, t],
    ["exit", o, t],
    // Everything in between.
    ["enter", a, t],
    ["enter", i, t],
    ["exit", i, t],
    ["exit", a, t],
    // The ending (`]`, properly parsed and labelled).
    e[e.length - 2],
    e[e.length - 1],
    ["exit", r, t]
  ];
  return e.splice(n, e.length - n + 1, ...l), e;
}
function Im(e, t, n) {
  const r = this, o = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let a = 0, i;
  return l;
  function l(c) {
    return e.enter("gfmFootnoteCall"), e.enter("gfmFootnoteCallLabelMarker"), e.consume(c), e.exit("gfmFootnoteCallLabelMarker"), s;
  }
  function s(c) {
    return c !== 94 ? n(c) : (e.enter("gfmFootnoteCallMarker"), e.consume(c), e.exit("gfmFootnoteCallMarker"), e.enter("gfmFootnoteCallString"), e.enter("chunkString").contentType = "string", u);
  }
  function u(c) {
    if (
      // Too long.
      a > 999 || // Closing brace with nothing.
      c === 93 && !i || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      c === null || c === 91 || Q(c)
    )
      return n(c);
    if (c === 93) {
      e.exit("chunkString");
      const p = e.exit("gfmFootnoteCallString");
      return o.includes(Pe(r.sliceSerialize(p))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(c), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), t) : n(c);
    }
    return Q(c) || (i = !0), a++, e.consume(c), c === 92 ? d : u;
  }
  function d(c) {
    return c === 91 || c === 92 || c === 93 ? (e.consume(c), a++, u) : u(c);
  }
}
function zm(e, t, n) {
  const r = this, o = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let a, i = 0, l;
  return s;
  function s(h) {
    return e.enter("gfmFootnoteDefinition")._container = !0, e.enter("gfmFootnoteDefinitionLabel"), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(h), e.exit("gfmFootnoteDefinitionLabelMarker"), u;
  }
  function u(h) {
    return h === 94 ? (e.enter("gfmFootnoteDefinitionMarker"), e.consume(h), e.exit("gfmFootnoteDefinitionMarker"), e.enter("gfmFootnoteDefinitionLabelString"), e.enter("chunkString").contentType = "string", d) : n(h);
  }
  function d(h) {
    if (
      // Too long.
      i > 999 || // Closing brace with nothing.
      h === 93 && !l || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      h === null || h === 91 || Q(h)
    )
      return n(h);
    if (h === 93) {
      e.exit("chunkString");
      const y = e.exit("gfmFootnoteDefinitionLabelString");
      return a = Pe(r.sliceSerialize(y)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(h), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), p;
    }
    return Q(h) || (l = !0), i++, e.consume(h), h === 92 ? c : d;
  }
  function c(h) {
    return h === 91 || h === 92 || h === 93 ? (e.consume(h), i++, d) : d(h);
  }
  function p(h) {
    return h === 58 ? (e.enter("definitionMarker"), e.consume(h), e.exit("definitionMarker"), o.includes(a) || o.push(a), W(e, m, "gfmFootnoteDefinitionWhitespace")) : n(h);
  }
  function m(h) {
    return t(h);
  }
}
function jm(e, t, n) {
  return e.check(ft, t, e.attempt(Sm, t, n));
}
function Am(e) {
  e.exit("gfmFootnoteDefinition");
}
function Tm(e, t, n) {
  const r = this;
  return W(e, o, "gfmFootnoteDefinitionIndent", 5);
  function o(a) {
    const i = r.events[r.events.length - 1];
    return i && i[1].type === "gfmFootnoteDefinitionIndent" && i[2].sliceSerialize(i[1], !0).length === 4 ? t(a) : n(a);
  }
}
function Fm(e) {
  let n = (e || {}).singleTilde;
  const r = {
    name: "strikethrough",
    tokenize: a,
    resolveAll: o
  };
  return n == null && (n = !0), {
    text: {
      126: r
    },
    insideSpan: {
      null: [r]
    },
    attentionMarkers: {
      null: [126]
    }
  };
  function o(i, l) {
    let s = -1;
    for (; ++s < i.length; )
      if (i[s][0] === "enter" && i[s][1].type === "strikethroughSequenceTemporary" && i[s][1]._close) {
        let u = s;
        for (; u--; )
          if (i[u][0] === "exit" && i[u][1].type === "strikethroughSequenceTemporary" && i[u][1]._open && // If the sizes are the same:
          i[s][1].end.offset - i[s][1].start.offset === i[u][1].end.offset - i[u][1].start.offset) {
            i[s][1].type = "strikethroughSequence", i[u][1].type = "strikethroughSequence";
            const d = {
              type: "strikethrough",
              start: Object.assign({}, i[u][1].start),
              end: Object.assign({}, i[s][1].end)
            }, c = {
              type: "strikethroughText",
              start: Object.assign({}, i[u][1].end),
              end: Object.assign({}, i[s][1].start)
            }, p = [["enter", d, l], ["enter", i[u][1], l], ["exit", i[u][1], l], ["enter", c, l]], m = l.parser.constructs.insideSpan.null;
            m && Ce(p, p.length, 0, Lt(m, i.slice(u + 1, s), l)), Ce(p, p.length, 0, [["exit", c, l], ["enter", i[s][1], l], ["exit", i[s][1], l], ["exit", d, l]]), Ce(i, u - 1, s - u + 3, p), s = u + p.length - 2;
            break;
          }
      }
    for (s = -1; ++s < i.length; )
      i[s][1].type === "strikethroughSequenceTemporary" && (i[s][1].type = "data");
    return i;
  }
  function a(i, l, s) {
    const u = this.previous, d = this.events;
    let c = 0;
    return p;
    function p(h) {
      return u === 126 && d[d.length - 1][1].type !== "characterEscape" ? s(h) : (i.enter("strikethroughSequenceTemporary"), m(h));
    }
    function m(h) {
      const y = Et(u);
      if (h === 126)
        return c > 1 ? s(h) : (i.consume(h), c++, m);
      if (c < 2 && !n) return s(h);
      const v = i.exit("strikethroughSequenceTemporary"), k = Et(h);
      return v._open = !k || k === 2 && !!y, v._close = !y || y === 2 && !!k, l(h);
    }
  }
}
class Lm {
  /**
   * Create a new edit map.
   */
  constructor() {
    this.map = [];
  }
  /**
   * Create an edit: a remove and/or add at a certain place.
   *
   * @param {number} index
   * @param {number} remove
   * @param {Array<Event>} add
   * @returns {undefined}
   */
  add(t, n, r) {
    Rm(this, t, n, r);
  }
  // To do: add this when moving to `micromark`.
  // /**
  //  * Create an edit: but insert `add` before existing additions.
  //  *
  //  * @param {number} index
  //  * @param {number} remove
  //  * @param {Array<Event>} add
  //  * @returns {undefined}
  //  */
  // addBefore(index, remove, add) {
  //   addImplementation(this, index, remove, add, true)
  // }
  /**
   * Done, change the events.
   *
   * @param {Array<Event>} events
   * @returns {undefined}
   */
  consume(t) {
    if (this.map.sort(function(a, i) {
      return a[0] - i[0];
    }), this.map.length === 0)
      return;
    let n = this.map.length;
    const r = [];
    for (; n > 0; )
      n -= 1, r.push(t.slice(this.map[n][0] + this.map[n][1]), this.map[n][2]), t.length = this.map[n][0];
    r.push([...t]), t.length = 0;
    let o = r.pop();
    for (; o; )
      t.push(...o), o = r.pop();
    this.map.length = 0;
  }
}
function Rm(e, t, n, r) {
  let o = 0;
  if (!(n === 0 && r.length === 0)) {
    for (; o < e.map.length; ) {
      if (e.map[o][0] === t) {
        e.map[o][1] += n, e.map[o][2].push(...r);
        return;
      }
      o += 1;
    }
    e.map.push([t, n, r]);
  }
}
function Mm(e, t) {
  let n = !1;
  const r = [];
  for (; t < e.length; ) {
    const o = e[t];
    if (n) {
      if (o[0] === "enter")
        o[1].type === "tableContent" && r.push(e[t + 1][1].type === "tableDelimiterMarker" ? "left" : "none");
      else if (o[1].type === "tableContent") {
        if (e[t - 1][1].type === "tableDelimiterMarker") {
          const a = r.length - 1;
          r[a] = r[a] === "left" ? "center" : "right";
        }
      } else if (o[1].type === "tableDelimiterRow")
        break;
    } else o[0] === "enter" && o[1].type === "tableDelimiterRow" && (n = !0);
    t += 1;
  }
  return r;
}
function Om() {
  return {
    flow: {
      null: {
        name: "table",
        tokenize: Nm,
        resolveAll: _m
      }
    }
  };
}
function Nm(e, t, n) {
  const r = this;
  let o = 0, a = 0, i;
  return l;
  function l(w) {
    let z = r.events.length - 1;
    for (; z > -1; ) {
      const H = r.events[z][1].type;
      if (H === "lineEnding" || // Note: markdown-rs uses `whitespace` instead of `linePrefix`
      H === "linePrefix") z--;
      else break;
    }
    const A = z > -1 ? r.events[z][1].type : null, N = A === "tableHead" || A === "tableRow" ? C : s;
    return N === C && r.parser.lazy[r.now().line] ? n(w) : N(w);
  }
  function s(w) {
    return e.enter("tableHead"), e.enter("tableRow"), u(w);
  }
  function u(w) {
    return w === 124 || (i = !0, a += 1), d(w);
  }
  function d(w) {
    return w === null ? n(w) : F(w) ? a > 1 ? (a = 0, r.interrupt = !0, e.exit("tableRow"), e.enter("lineEnding"), e.consume(w), e.exit("lineEnding"), m) : n(w) : V(w) ? W(e, d, "whitespace")(w) : (a += 1, i && (i = !1, o += 1), w === 124 ? (e.enter("tableCellDivider"), e.consume(w), e.exit("tableCellDivider"), i = !0, d) : (e.enter("data"), c(w)));
  }
  function c(w) {
    return w === null || w === 124 || Q(w) ? (e.exit("data"), d(w)) : (e.consume(w), w === 92 ? p : c);
  }
  function p(w) {
    return w === 92 || w === 124 ? (e.consume(w), c) : c(w);
  }
  function m(w) {
    return r.interrupt = !1, r.parser.lazy[r.now().line] ? n(w) : (e.enter("tableDelimiterRow"), i = !1, V(w) ? W(e, h, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(w) : h(w));
  }
  function h(w) {
    return w === 45 || w === 58 ? v(w) : w === 124 ? (i = !0, e.enter("tableCellDivider"), e.consume(w), e.exit("tableCellDivider"), y) : j(w);
  }
  function y(w) {
    return V(w) ? W(e, v, "whitespace")(w) : v(w);
  }
  function v(w) {
    return w === 58 ? (a += 1, i = !0, e.enter("tableDelimiterMarker"), e.consume(w), e.exit("tableDelimiterMarker"), k) : w === 45 ? (a += 1, k(w)) : w === null || F(w) ? P(w) : j(w);
  }
  function k(w) {
    return w === 45 ? (e.enter("tableDelimiterFiller"), E(w)) : j(w);
  }
  function E(w) {
    return w === 45 ? (e.consume(w), E) : w === 58 ? (i = !0, e.exit("tableDelimiterFiller"), e.enter("tableDelimiterMarker"), e.consume(w), e.exit("tableDelimiterMarker"), x) : (e.exit("tableDelimiterFiller"), x(w));
  }
  function x(w) {
    return V(w) ? W(e, P, "whitespace")(w) : P(w);
  }
  function P(w) {
    return w === 124 ? h(w) : w === null || F(w) ? !i || o !== a ? j(w) : (e.exit("tableDelimiterRow"), e.exit("tableHead"), t(w)) : j(w);
  }
  function j(w) {
    return n(w);
  }
  function C(w) {
    return e.enter("tableRow"), R(w);
  }
  function R(w) {
    return w === 124 ? (e.enter("tableCellDivider"), e.consume(w), e.exit("tableCellDivider"), R) : w === null || F(w) ? (e.exit("tableRow"), t(w)) : V(w) ? W(e, R, "whitespace")(w) : (e.enter("data"), B(w));
  }
  function B(w) {
    return w === null || w === 124 || Q(w) ? (e.exit("data"), R(w)) : (e.consume(w), w === 92 ? $ : B);
  }
  function $(w) {
    return w === 92 || w === 124 ? (e.consume(w), B) : B(w);
  }
}
function _m(e, t) {
  let n = -1, r = !0, o = 0, a = [0, 0, 0, 0], i = [0, 0, 0, 0], l = !1, s = 0, u, d, c;
  const p = new Lm();
  for (; ++n < e.length; ) {
    const m = e[n], h = m[1];
    m[0] === "enter" ? h.type === "tableHead" ? (l = !1, s !== 0 && (Br(p, t, s, u, d), d = void 0, s = 0), u = {
      type: "table",
      start: Object.assign({}, h.start),
      // Note: correct end is set later.
      end: Object.assign({}, h.end)
    }, p.add(n, 0, [["enter", u, t]])) : h.type === "tableRow" || h.type === "tableDelimiterRow" ? (r = !0, c = void 0, a = [0, 0, 0, 0], i = [0, n + 1, 0, 0], l && (l = !1, d = {
      type: "tableBody",
      start: Object.assign({}, h.start),
      // Note: correct end is set later.
      end: Object.assign({}, h.end)
    }, p.add(n, 0, [["enter", d, t]])), o = h.type === "tableDelimiterRow" ? 2 : d ? 3 : 1) : o && (h.type === "data" || h.type === "tableDelimiterMarker" || h.type === "tableDelimiterFiller") ? (r = !1, i[2] === 0 && (a[1] !== 0 && (i[0] = i[1], c = xt(p, t, a, o, void 0, c), a = [0, 0, 0, 0]), i[2] = n)) : h.type === "tableCellDivider" && (r ? r = !1 : (a[1] !== 0 && (i[0] = i[1], c = xt(p, t, a, o, void 0, c)), a = i, i = [a[1], n, 0, 0])) : h.type === "tableHead" ? (l = !0, s = n) : h.type === "tableRow" || h.type === "tableDelimiterRow" ? (s = n, a[1] !== 0 ? (i[0] = i[1], c = xt(p, t, a, o, n, c)) : i[1] !== 0 && (c = xt(p, t, i, o, n, c)), o = 0) : o && (h.type === "data" || h.type === "tableDelimiterMarker" || h.type === "tableDelimiterFiller") && (i[3] = n);
  }
  for (s !== 0 && Br(p, t, s, u, d), p.consume(t.events), n = -1; ++n < t.events.length; ) {
    const m = t.events[n];
    m[0] === "enter" && m[1].type === "table" && (m[1]._align = Mm(t.events, n));
  }
  return e;
}
function xt(e, t, n, r, o, a) {
  const i = r === 1 ? "tableHeader" : r === 2 ? "tableDelimiter" : "tableData", l = "tableContent";
  n[0] !== 0 && (a.end = Object.assign({}, Qe(t.events, n[0])), e.add(n[0], 0, [["exit", a, t]]));
  const s = Qe(t.events, n[1]);
  if (a = {
    type: i,
    start: Object.assign({}, s),
    // Note: correct end is set later.
    end: Object.assign({}, s)
  }, e.add(n[1], 0, [["enter", a, t]]), n[2] !== 0) {
    const u = Qe(t.events, n[2]), d = Qe(t.events, n[3]), c = {
      type: l,
      start: Object.assign({}, u),
      end: Object.assign({}, d)
    };
    if (e.add(n[2], 0, [["enter", c, t]]), r !== 2) {
      const p = t.events[n[2]], m = t.events[n[3]];
      if (p[1].end = Object.assign({}, m[1].end), p[1].type = "chunkText", p[1].contentType = "text", n[3] > n[2] + 1) {
        const h = n[2] + 1, y = n[3] - n[2] - 1;
        e.add(h, y, []);
      }
    }
    e.add(n[3] + 1, 0, [["exit", c, t]]);
  }
  return o !== void 0 && (a.end = Object.assign({}, Qe(t.events, o)), e.add(o, 0, [["exit", a, t]]), a = void 0), a;
}
function Br(e, t, n, r, o) {
  const a = [], i = Qe(t.events, n);
  o && (o.end = Object.assign({}, i), a.push(["exit", o, t])), r.end = Object.assign({}, i), a.push(["exit", r, t]), e.add(n + 1, 0, a);
}
function Qe(e, t) {
  const n = e[t], r = n[0] === "enter" ? "start" : "end";
  return n[1][r];
}
const Bm = {
  name: "tasklistCheck",
  tokenize: Um
};
function $m() {
  return {
    text: {
      91: Bm
    }
  };
}
function Um(e, t, n) {
  const r = this;
  return o;
  function o(s) {
    return (
      // Exit if there’s stuff before.
      r.previous !== null || // Exit if not in the first content that is the first child of a list
      // item.
      !r._gfmTasklistFirstContentOfListItem ? n(s) : (e.enter("taskListCheck"), e.enter("taskListCheckMarker"), e.consume(s), e.exit("taskListCheckMarker"), a)
    );
  }
  function a(s) {
    return Q(s) ? (e.enter("taskListCheckValueUnchecked"), e.consume(s), e.exit("taskListCheckValueUnchecked"), i) : s === 88 || s === 120 ? (e.enter("taskListCheckValueChecked"), e.consume(s), e.exit("taskListCheckValueChecked"), i) : n(s);
  }
  function i(s) {
    return s === 93 ? (e.enter("taskListCheckMarker"), e.consume(s), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), l) : n(s);
  }
  function l(s) {
    return F(s) ? t(s) : V(s) ? e.check({
      tokenize: Vm
    }, t, n)(s) : n(s);
  }
}
function Vm(e, t, n) {
  return W(e, r, "whitespace");
  function r(o) {
    return o === null ? n(o) : t(o);
  }
}
function Hm(e) {
  return po([
    fm(),
    Em(),
    Fm(e),
    Om(),
    $m()
  ]);
}
const qm = {};
function Wm(e) {
  const t = (
    /** @type {Processor} */
    this
  ), n = e || qm, r = t.data(), o = r.micromarkExtensions || (r.micromarkExtensions = []), a = r.fromMarkdownExtensions || (r.fromMarkdownExtensions = []), i = r.toMarkdownExtensions || (r.toMarkdownExtensions = []);
  o.push(Hm(n)), a.push(dm()), i.push(mm(n));
}
const Gm = () => ({
  fetchMarkDown: async (t) => fetch(t).then((n) => (n.ok || console.log(`failed fetching plugin readme from ${t}.`), n.text())).catch((n) => (console.error(n), ""))
}), Jm = {
  SHOW_PLUGIN: "showPlugin",
  SHOW_PLUGINDEFINITION: "showPluginDefinition",
  SHOW_PLUGIN_DEFINTION_DETAILS: "showPluginDefinitionDetail",
  EDIT_PLUGIN: "editPlugin"
}, Km = (e) => /* @__PURE__ */ f.jsxs(Ne, { px: !1, py: !0, children: [
  /* @__PURE__ */ f.jsx("h2", { className: "text-xl font-bold mb-2 mt-8", children: "Option Values" }),
  /* @__PURE__ */ f.jsxs(zt, { columns: 5, children: [
    /* @__PURE__ */ f.jsxs(se, { children: [
      /* @__PURE__ */ f.jsx(ee, { children: "Name" }),
      /* @__PURE__ */ f.jsx(ee, { children: "Required" }),
      /* @__PURE__ */ f.jsx(ee, { children: "Description" }),
      /* @__PURE__ */ f.jsx(ee, { children: "Type" }),
      /* @__PURE__ */ f.jsx(ee, { children: "Default" })
    ] }),
    e.optionValues.sort((t, n) => t.required && !n.required ? -1 : !t.required && n.required ? 1 : 0).map((t) => /* @__PURE__ */ f.jsxs(se, { children: [
      /* @__PURE__ */ f.jsx(ee, { children: t.displayName ?? t.name }),
      /* @__PURE__ */ f.jsx(ne, { style: { textAlign: "center" }, children: (t.required ?? !1) && "x" }),
      /* @__PURE__ */ f.jsx(ne, { children: t.description }),
      /* @__PURE__ */ f.jsx(ne, { children: t.type }),
      /* @__PURE__ */ f.jsx(ne, { children: t.default && JSON.stringify(t.default) })
    ] }, t.name))
  ] })
] }), Ym = (e) => {
  const t = _((l) => l.setShowEditForm), n = _((l) => l.setShowPluginDefinitionDetails), r = _((l) => l.setEditFormState), o = _((l) => l.setEditFormData), { setPanel: a } = Te(), i = (l) => {
    o({
      metadata: l.metadata,
      spec: l.spec
    }), n(!1), t(!0), r(pe.PLUGIN_EDIT), a("editPlugin");
  };
  return e.plugins.length > 0 && /* @__PURE__ */ f.jsxs(se, { children: [
    /* @__PURE__ */ f.jsx(ee, { children: "Enabled Plugins" }),
    /* @__PURE__ */ f.jsx(ne, { children: /* @__PURE__ */ f.jsx(qe, { gap: "2", alignment: "start", wrap: !0, children: e.plugins.map((l) => /* @__PURE__ */ f.jsx(
      Oe,
      {
        size: "small",
        onClick: () => {
          i(l);
        },
        children: l.metadata.name
      },
      l.metadata.name
    )) }) })
  ] });
}, Qm = (e) => {
  var h, y, v, k, E, x, P, j, C, R, B, $, w, z, A, N, H, L, K, Z, te, ae, g, oe, le, b, T, J, G, fe, ce, ge, we, xe;
  _((ue) => ue.showPluginDefinitionDetails);
  const t = _((ue) => ue.setShowPluginDefinitionDetails), n = _((ue) => ue.setShowEditForm), { setPanel: r } = Te(), { getPluginsByLabelSelector: o } = Wr(), { fetchMarkDown: a } = Gm();
  _((ue) => ue.setIsPluginEditMode);
  const i = _((ue) => ue.setEditFormData), l = _((ue) => ue.setEditFormState), s = () => {
    t(!1), n(!0), i({
      metadata: da(e.pluginDefinition),
      spec: ma(e.pluginDefinition)
    }), l(pe.PLUGIN_CREATE), r(Jm.EDIT_PLUGIN);
  }, [u, d] = re.useState([]), c = "greenhouse.sap/plugindefinition";
  U.useEffect(() => {
    o(c, e.pluginDefinition.metadata.name).then((Le) => {
      d(Le);
    });
  }, [(h = e.pluginDefinition.metadata) == null ? void 0 : h.name]);
  const [p, m] = re.useState("");
  return (y = e.pluginDefinition.spec) != null && y.docMarkDownUrl && U.useEffect(() => {
    a(e.pluginDefinition.spec.docMarkDownUrl).then((Le) => {
      m(Le);
    });
  }, [e.pluginDefinition.spec.docMarkDownUrl]), /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    /* @__PURE__ */ f.jsxs(Ne, { px: !1, py: !0, children: [
      /* @__PURE__ */ f.jsx(qr, { children: /* @__PURE__ */ f.jsx(Ur, { children: /* @__PURE__ */ f.jsx(Oe, { icon: "addCircle", label: "Configure Plugin", onClick: () => s() }) }) }),
      /* @__PURE__ */ f.jsx("h2", { className: "text-xl font-bold mb-2 mt-8", children: "General" }),
      /* @__PURE__ */ f.jsxs(zt, { columns: 2, children: [
        /* @__PURE__ */ f.jsxs(se, { children: [
          /* @__PURE__ */ f.jsx(ee, { children: "Description" }),
          /* @__PURE__ */ f.jsx(ne, { children: (k = (v = e.pluginDefinition) == null ? void 0 : v.spec) == null ? void 0 : k.description })
        ] }),
        /* @__PURE__ */ f.jsxs(se, { children: [
          /* @__PURE__ */ f.jsx(ee, { children: "Version" }),
          /* @__PURE__ */ f.jsx(ne, { children: (x = (E = e.pluginDefinition) == null ? void 0 : E.spec) == null ? void 0 : x.version })
        ] }),
        ((P = e.pluginDefinition.spec) == null ? void 0 : P.helmChart) && /* @__PURE__ */ f.jsxs(se, { children: [
          /* @__PURE__ */ f.jsx(ee, { children: "Helm Chart" }),
          /* @__PURE__ */ f.jsxs(ne, { children: [
            ((C = (j = e.pluginDefinition.spec) == null ? void 0 : j.helmChart) == null ? void 0 : C.name) && /* @__PURE__ */ f.jsxs("p", { children: [
              "Name: ",
              (B = (R = e.pluginDefinition.spec) == null ? void 0 : R.helmChart) == null ? void 0 : B.name
            ] }),
            ((w = ($ = e.pluginDefinition.spec) == null ? void 0 : $.helmChart) == null ? void 0 : w.repository) && /* @__PURE__ */ f.jsxs("p", { children: [
              "Repository: ",
              (A = (z = e.pluginDefinition.spec) == null ? void 0 : z.helmChart) == null ? void 0 : A.repository
            ] }),
            ((H = (N = e.pluginDefinition.spec) == null ? void 0 : N.helmChart) == null ? void 0 : H.version) && /* @__PURE__ */ f.jsxs("p", { children: [
              "Version: ",
              (K = (L = e.pluginDefinition.spec) == null ? void 0 : L.helmChart) == null ? void 0 : K.version
            ] })
          ] })
        ] }),
        ((Z = e.pluginDefinition.spec) == null ? void 0 : Z.uiApplication) && /* @__PURE__ */ f.jsxs(se, { children: [
          /* @__PURE__ */ f.jsx(ee, { children: "UI Application" }),
          /* @__PURE__ */ f.jsxs(ne, { children: [
            ((ae = (te = e.pluginDefinition.spec) == null ? void 0 : te.uiApplication) == null ? void 0 : ae.name) && /* @__PURE__ */ f.jsxs("p", { children: [
              "Name: ",
              (oe = (g = e.pluginDefinition.spec) == null ? void 0 : g.uiApplication) == null ? void 0 : oe.name
            ] }),
            ((b = (le = e.pluginDefinition.spec) == null ? void 0 : le.uiApplication) == null ? void 0 : b.url) && /* @__PURE__ */ f.jsxs("p", { children: [
              "Url: ",
              (J = (T = e.pluginDefinition.spec) == null ? void 0 : T.uiApplication) == null ? void 0 : J.url
            ] }),
            ((fe = (G = e.pluginDefinition.spec) == null ? void 0 : G.uiApplication) == null ? void 0 : fe.version) && /* @__PURE__ */ f.jsxs("p", { children: [
              "Version: ",
              (ge = (ce = e.pluginDefinition.spec) == null ? void 0 : ce.uiApplication) == null ? void 0 : ge.version
            ] })
          ] })
        ] }),
        u.length > 0 && /* @__PURE__ */ f.jsx(Ym, { plugins: u })
      ] })
    ] }),
    ((xe = (we = e.pluginDefinition) == null ? void 0 : we.spec) == null ? void 0 : xe.options) && /* @__PURE__ */ f.jsx(Km, { optionValues: e.pluginDefinition.spec.options }),
    p !== "" && /* @__PURE__ */ f.jsxs(Ne, { px: !1, py: !0, children: [
      /* @__PURE__ */ f.jsx("h2", { className: "text-xl font-bold mb-2 mt-8", children: "Documentation " }),
      /* @__PURE__ */ f.jsx("article", { className: "markdown-body", children: /* @__PURE__ */ f.jsx(
        Rc,
        {
          rehypePlugins: [Wm],
          children: p
        }
      ) })
    ] })
  ] });
}, Xm = [".png"], Zm = (e) => {
  var l, s, u, d, c, p;
  const { setPanel: t } = Te(), n = _((m) => m.setPluginDefinitionDetail);
  let r;
  Xm.some((m) => {
    var h, y;
    return (y = (h = e.pluginDefinition.spec) == null ? void 0 : h.icon) == null ? void 0 : y.endsWith(m);
  }) ? r = (l = e.pluginDefinition.spec) == null ? void 0 : l.icon : r = void 0;
  const o = () => {
    t("showPluginDefinitionDetail"), n(e.pluginDefinition);
  };
  return /* @__PURE__ */ f.jsx("div", { className: `
  card
  bg-theme-background-lvl-1
  hover:bg-theme-background-lvl-2
  rounded
  p-8
  h-full
  w-full
  cursor-pointer
  `, onClick: o, children: /* @__PURE__ */ f.jsxs(qe, { direction: "vertical", alignment: "start", className: "h-full w-full", children: [
    /* @__PURE__ */ f.jsx("div", { className: `
  font-bold
  text-lg
  `, children: ((s = e.pluginDefinition.spec) == null ? void 0 : s.displayName) ?? ((u = e.pluginDefinition.metadata) == null ? void 0 : u.name) }),
    /* @__PURE__ */ f.jsx("div", { className: "mt-4", children: (d = e.pluginDefinition.spec) == null ? void 0 : d.description }),
    /* @__PURE__ */ f.jsx("div", { className: "mt-auto w-full", children: /* @__PURE__ */ f.jsxs(qe, { alignment: "center", children: [
      /* @__PURE__ */ f.jsx("div", { className: "w-full", children: (c = e.pluginDefinition.spec) == null ? void 0 : c.version }),
      !r && /* @__PURE__ */ f.jsx(
        He,
        {
          icon: ((p = e.pluginDefinition.spec) == null ? void 0 : p.icon) ?? "autoAwesomeMosaic",
          className: "filtered fill-current text-theme-high",
          size: "50"
        }
      ),
      r && /* @__PURE__ */ f.jsx("img", { className: "filtered fill-current ", src: r, alt: "icon", width: "50" })
    ] }) })
  ] }) });
}, ep = (e) => /* @__PURE__ */ f.jsx(f.Fragment, { children: /* @__PURE__ */ f.jsx(Ne, { px: !1, py: !0, children: /* @__PURE__ */ f.jsx("div", { className: "card-container grid gap-4 grid-cols-3", children: e.pluginDefinitions.map((t) => /* @__PURE__ */ f.jsx(Zm, { pluginDefinition: t }, t.metadata.name)) }) }) }), tp = () => {
  const e = _((i) => i.pluginDefinitions), t = Jr(), n = _((i) => i.pluginDefinitionDetail), r = _((i) => i.isPluginEditMode), { setPanel: o } = Te(), a = () => {
    o(null);
  };
  return /* @__PURE__ */ f.jsx(
    Vr,
    {
      opened: ["showPluginDefinition", "showPluginDefinitionDetail", "editPlugin"].includes(t),
      onClose: a,
      size: "large",
      heading: r ? "Edit Plugin" : "Add Plugin",
      children: /* @__PURE__ */ f.jsxs(Hr, { children: [
        t === "showPluginDefinition" && (e == null ? void 0 : e.length) > 0 && /* @__PURE__ */ f.jsx(ep, { pluginDefinitions: e }),
        t === "showPluginDefinitionDetail" && n && /* @__PURE__ */ f.jsx(Qm, { pluginDefinition: n }),
        t === "editPlugin" && n && /* @__PURE__ */ f.jsx(pa, { pluginDefinition: n })
      ] })
    }
  );
}, yn = ({ plugin: e }) => {
  var n, r, o, a;
  const t = (r = (n = e == null ? void 0 : e.status) == null ? void 0 : n.statusConditions) != null && r.conditions ? Fi((a = (o = e == null ? void 0 : e.status) == null ? void 0 : o.statusConditions) == null ? void 0 : a.conditions) : null;
  return /* @__PURE__ */ f.jsx(
    He,
    {
      icon: e != null && e.spec.disabled ? "error" : t == null ? void 0 : t.icon,
      color: e != null && e.spec.disabled ? "" : t == null ? void 0 : t.color
    }
  );
}, ri = (e) => {
  if (!e) return null;
  const t = [];
  for (const n in e) {
    const r = e[n];
    t.push({
      url: n,
      name: r.name ? r.name : n
    });
  }
  return t;
}, np = () => {
  var s, u, d, c, p, m, h, y, v, k, E, x;
  const e = Kr(), { setShowDetailsFor: t } = Tt(), { setPanel: n } = Te(), r = Jr(), o = kn(), [a, i] = U.useState(null);
  U.useEffect(() => {
    !o || !e || i(e.find((P) => P.metadata.uid === o));
  }, [o, e]);
  const l = () => {
    t(null), n(null);
  };
  return /* @__PURE__ */ f.jsx(
    Vr,
    {
      opened: !!o && r === "showPlugin",
      onClose: l,
      size: "large",
      heading: /* @__PURE__ */ f.jsxs(qe, { gap: "2", children: [
        /* @__PURE__ */ f.jsx(yn, { plugin: a }),
        /* @__PURE__ */ f.jsx("span", { children: (s = a == null ? void 0 : a.spec) == null ? void 0 : s.displayName })
      ] }),
      children: /* @__PURE__ */ f.jsx(Hr, { children: /* @__PURE__ */ f.jsxs(xi, { children: [
        /* @__PURE__ */ f.jsxs(vi, { children: [
          /* @__PURE__ */ f.jsx(_n, { children: "Details" }),
          /* @__PURE__ */ f.jsx(_n, { children: "Raw Data" })
        ] }),
        /* @__PURE__ */ f.jsx(Bn, { children: /* @__PURE__ */ f.jsx(Ne, { px: !1, py: !0, children: /* @__PURE__ */ f.jsxs(zt, { columns: 2, cellVerticalAlignment: "top", gridColumnTemplate: "35% auto", children: [
          /* @__PURE__ */ f.jsxs(se, { children: [
            /* @__PURE__ */ f.jsx(ee, { children: "Name" }),
            /* @__PURE__ */ f.jsx(ne, { children: (u = a == null ? void 0 : a.spec) == null ? void 0 : u.displayName })
          ] }),
          ((d = a == null ? void 0 : a.spec) == null ? void 0 : d.disabled) && /* @__PURE__ */ f.jsxs(se, { children: [
            /* @__PURE__ */ f.jsx(ee, { children: "Disabled" }),
            /* @__PURE__ */ f.jsx(ne, { children: (c = a == null ? void 0 : a.spec) == null ? void 0 : c.disabled.toString() })
          ] }),
          /* @__PURE__ */ f.jsxs(se, { children: [
            /* @__PURE__ */ f.jsx(ee, { children: "Version" }),
            /* @__PURE__ */ f.jsx(ne, { children: (p = a == null ? void 0 : a.status) == null ? void 0 : p.version })
          ] }),
          /* @__PURE__ */ f.jsxs(se, { children: [
            /* @__PURE__ */ f.jsx(ee, { children: "Cluster" }),
            /* @__PURE__ */ f.jsx(ne, { children: (m = a == null ? void 0 : a.spec) == null ? void 0 : m.clusterName })
          ] }),
          /* @__PURE__ */ f.jsxs(se, { children: [
            /* @__PURE__ */ f.jsx(ee, { children: "External Links" }),
            /* @__PURE__ */ f.jsx(ne, { children: ((h = a == null ? void 0 : a.status) == null ? void 0 : h.exposedServices) && ri(a.status.exposedServices).map((P) => /* @__PURE__ */ f.jsx("a", { href: P.url, target: "_blank", rel: "noreferrer", className: "mr-3", children: P.name }, P.url)) })
          ] }),
          /* @__PURE__ */ f.jsxs(se, { children: [
            /* @__PURE__ */ f.jsx(ee, { children: "Condition" }),
            /* @__PURE__ */ f.jsx(ne, { children: /* @__PURE__ */ f.jsx(yn, { plugin: a }) })
          ] }),
          /* @__PURE__ */ f.jsxs(se, { children: [
            /* @__PURE__ */ f.jsx(ee, { children: "Conditions" }),
            /* @__PURE__ */ f.jsx(ne, { children: /* @__PURE__ */ f.jsx(qe, { gap: "2", alignment: "start", wrap: !0, children: (k = (v = (y = a == null ? void 0 : a.status) == null ? void 0 : y.statusConditions) == null ? void 0 : v.conditions) == null ? void 0 : k.map((P) => /* @__PURE__ */ f.jsx(Li, { pillKey: P.type, pillValue: P.status }, P.type)) }) })
          ] }),
          (x = (E = a == null ? void 0 : a.spec) == null ? void 0 : E.optionValues) == null ? void 0 : x.map((P) => P != null && P.name.startsWith("greenhouse.") ? null : /* @__PURE__ */ f.jsxs(se, { children: [
            /* @__PURE__ */ f.jsx(ee, { style: { overflowWrap: "break-word" }, children: P == null ? void 0 : P.name }),
            /* @__PURE__ */ f.jsx(ne, { children: typeof (P == null ? void 0 : P.value) < "u" && (typeof (P == null ? void 0 : P.value) == "object" ? (P == null ? void 0 : P.value) && /* @__PURE__ */ f.jsx($n, { data: P == null ? void 0 : P.value }) : String(P == null ? void 0 : P.value)) })
          ] }, P == null ? void 0 : P.name))
        ] }) }) }),
        /* @__PURE__ */ f.jsx(Bn, { children: /* @__PURE__ */ f.jsx(Ne, { px: !1, py: !0, children: /* @__PURE__ */ f.jsx(Ci, { children: a && /* @__PURE__ */ f.jsx($n, { data: a, expanded: !0 }) }) }) })
      ] }) })
    }
  );
}, rp = (e) => {
  var c, p, m, h, y, v, k, E;
  const t = e.plugin, { setShowDetailsFor: n } = Tt(), r = kn(), { setPanel: o } = Te(), a = _((x) => x.setPluginDefinitionDetail), i = _((x) => x.setEditFormState), l = _((x) => x.setEditFormData), s = _((x) => x.pluginDefinitions), u = (x) => {
    x.stopPropagation(), x.preventDefault(), o("showPlugin"), r === t.metadata.uid ? n(null) : n(t.metadata.uid);
  }, d = (x) => {
    x.stopPropagation(), x.preventDefault();
    let P;
    s.some((j) => j.metadata.name === t.spec.pluginDefinition ? (P = j, !0) : !1), P ? (a(P), o("editPlugin"), l({
      metadata: t.metadata,
      spec: t.spec
    }), i(pe.PLUGIN_EDIT)) : console.error(`Plugin definition not found for plugin ${t.metadata.name} could not open edit screen`);
  };
  return /* @__PURE__ */ f.jsxs(
    se,
    {
      onClick: u,
      className: `cursor-pointer ${r === ((c = t == null ? void 0 : t.metadata) == null ? void 0 : c.uid) ? "active" : ""} ${(p = t == null ? void 0 : t.spec) != null && p.disabled ? "text-theme-disabled" : ""} `,
      children: [
        /* @__PURE__ */ f.jsx(ne, { children: /* @__PURE__ */ f.jsx(yn, { plugin: t }) }),
        /* @__PURE__ */ f.jsx(ne, { children: ((m = t == null ? void 0 : t.spec) == null ? void 0 : m.displayName) || ((h = t == null ? void 0 : t.metadata) == null ? void 0 : h.name) }),
        /* @__PURE__ */ f.jsx(ne, { children: (y = t == null ? void 0 : t.spec) != null && y.clusterName ? (v = t == null ? void 0 : t.spec) == null ? void 0 : v.clusterName : /* @__PURE__ */ f.jsx(f.Fragment, { children: "—" }) }),
        /* @__PURE__ */ f.jsx(ne, { children: (k = t == null ? void 0 : t.status) != null && k.exposedServices ? ri(t.status.exposedServices).map((x) => /* @__PURE__ */ f.jsx(
          "a",
          {
            href: x.url,
            target: "_blank",
            rel: "noreferrer",
            className: `mr-3 ${t != null && t.disabled ? "text-theme-link text-opacity-50" : ""}`,
            children: x.name
          },
          x.url
        )) : /* @__PURE__ */ f.jsx(f.Fragment, { children: "—" }) }),
        /* @__PURE__ */ f.jsx(ne, { children: /* @__PURE__ */ f.jsx(He, { color: "jn-global-text", icon: "edit", onClick: d }) })
      ]
    },
    (E = t == null ? void 0 : t.metadata) == null ? void 0 : E.uid
  );
}, op = () => {
  const e = Kr(), { setPanel: t } = Te(), n = () => {
    t("showPluginDefinition");
  };
  return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    /* @__PURE__ */ f.jsx(qr, { children: /* @__PURE__ */ f.jsx(Ur, { children: /* @__PURE__ */ f.jsx(Oe, { onClick: n, children: "Add Plugin" }) }) }),
    /* @__PURE__ */ f.jsxs(zt, { columns: 5, cellVerticalAlignment: "top", className: "plugins", minContentColumns: [0, 4], children: [
      e && /* @__PURE__ */ f.jsxs(se, { children: [
        /* @__PURE__ */ f.jsx(ee, { children: /* @__PURE__ */ f.jsx(He, { icon: "monitorHeart" }) }),
        /* @__PURE__ */ f.jsx(ee, { children: "Name" }),
        /* @__PURE__ */ f.jsx(ee, { children: "Cluster" }),
        /* @__PURE__ */ f.jsx(ee, { children: "External Links" }),
        /* @__PURE__ */ f.jsx(ee, { children: "Edit" })
      ] }),
      (e == null ? void 0 : e.length) > 0 ? e == null ? void 0 : e.map((r) => {
        var o;
        return /* @__PURE__ */ f.jsx(rp, { plugin: r }, (o = r == null ? void 0 : r.metadata) == null ? void 0 : o.uid);
      }) : /* @__PURE__ */ f.jsx(se, { className: "no-hover", children: /* @__PURE__ */ f.jsx(ne, { colSpan: 4, children: /* @__PURE__ */ f.jsxs(qe, { gap: "3", children: [
        /* @__PURE__ */ f.jsx(He, { icon: "info", color: "text-theme-info" }),
        /* @__PURE__ */ f.jsxs("div", { children: [
          "It seems that no plugins have been created yet. Do you want to",
          /* @__PURE__ */ f.jsx("a", { onClick: n, children: " create" }),
          " a new one?"
        ] })
      ] }) }) })
    ] })
  ] });
}, ip = () => {
  const e = na(), t = oa();
  return { client: e && t && $r({ apiEndpoint: e, token: t }) };
}, ap = () => {
  const e = ra(), { client: t } = ip(), { addPluginConfigItems: n, modifyPluginConfigItems: r, deletePluginConfigItems: o } = Tt();
  return { getPlugins: U.useCallback(() => {
    if (!t || !e) return;
    const i = t.watch(`/apis/greenhouse.sap/v1alpha1/namespaces/${e}/plugins`).on(t.WATCH_ERROR, () => console.log("ERROR")).on(t.WATCH_ADDED, (l) => {
      n(l);
    }).on(t.WATCH_MODIFIED, (l) => {
      r(l);
    }).on(t.WATCH_DELETED, (l) => {
      o(l);
    });
    return i.start(), i.cancel;
  }, [t, e]) };
}, lp = () => {
  const { getPlugins: e } = ap();
  return U.useEffect(() => {
    e && e();
  }, [e]), /* @__PURE__ */ f.jsxs(Ne, { py: !0, children: [
    /* @__PURE__ */ f.jsx(tp, {}),
    /* @__PURE__ */ f.jsx(np, {}),
    /* @__PURE__ */ f.jsx(Si, {}),
    /* @__PURE__ */ f.jsx(op, {})
  ] });
}, ct = Ei("plugin-admin"), rn = "d", sp = () => {
  const [e, t] = U.useState(!1), { setShowDetailsFor: n } = Tt(), r = kn();
  U.useLayoutEffect(() => {
    var a;
    if (e) return;
    const o = (a = ct.currentState()) == null ? void 0 : a[rn];
    o && n(o), t(!0);
  }, [e]), U.useEffect(() => {
    if (!e) return;
    const o = {
      ...ct.currentState(),
      [rn]: r
    };
    JSON.stringify(o) !== JSON.stringify(ct.currentState()) && ct.push(o);
  }, [r]), U.useEffect(() => {
    const o = ct.onChange((a) => {
      n(a == null ? void 0 : a[rn]);
    });
    return () => {
      o();
    };
  }, []);
}, up = () => {
  const { get: e, create: t, update: n, deleteObject: r, watch: o } = At(!1), a = _((h) => h.namespace), i = _((h) => h.modifySecrets), l = _((h) => h.deleteSecrets);
  return {
    getSecret: (h) => e(`/api/v1/namespaces/${a}/secrets`, h),
    createSecret: (h) => t(`/api/v1/namespaces/${a}/secrets`, h),
    updateSecret: (h) => n(`/api/v1/namespaces/${a}/secrets`, h),
    deleteSecret: (h) => r(`/api/v1/namespaces/${a}/secrets`, h),
    watchSecrets: () => o(
      `/api/v1/namespaces/${a}/secrets`,
      "Secret",
      i,
      i,
      l
    ),
    watchSecretsWithoutHelm: () => {
      const k = { fieldSelector: "type!=helm.sh/release.v1" };
      return o(
        `/api/v1/namespaces/${a}/secrets`,
        "Secret",
        i,
        i,
        l,
        k
      );
    }
  };
}, cp = () => {
  const { get: e, create: t, update: n, deleteObject: r, watch: o } = At(), a = _((p) => p.modifyPluginDefinitions), i = _((p) => p.deletePluginDefinitions);
  return {
    getPluginDefinition: (p) => e(
      "/apis/greenhouse.sap/v1alpha1/plugindefinitions",
      p
    ),
    createPluginDefinition: (p) => t(
      "/apis/greenhouse.sap/v1alpha1/plugindefinitions",
      p
    ),
    updatePluginDefinition: (p) => n(
      "/apis/greenhouse.sap/v1alpha1/plugindefinitions",
      p
    ),
    deletePluginDefinition: (p) => r(
      "/apis/greenhouse.sap/v1alpha1/plugindefinitions",
      p
    ),
    watchPluginDefinitions: () => o(
      "/apis/greenhouse.sap/v1alpha1/plugindefinitions",
      "PluginDefinition",
      a,
      a,
      i
    )
  };
}, dp = () => {
  sp();
  const { watchSecretsWithoutHelm: e } = up(), { watchPluginDefinitions: t } = cp(), { addMessage: n } = Pi();
  return U.useEffect(() => {
    t(), e().then((r) => {
      r.ok || r.message && r.status == 403 && n({
        variant: "warning",
        text: r.message
      });
    });
  }, []), null;
}, mp = "plugin-admin", pp = (e = {}) => {
  const { setUrlStateKey: t, initialize: n } = Te(), r = _((o) => o.initialize);
  return n(e.apiEndpoint, e.token, e.namespace), r(e.apiEndpoint, e.token, e.namespace), t(mp), /* @__PURE__ */ f.jsx(ji, { pageHeader: "Converged Cloud | Plugins", embedded: e.embedded === "true" || e.embedded === !0, children: /* @__PURE__ */ f.jsxs(Ii, { children: [
    /* @__PURE__ */ f.jsx(dp, {}),
    /* @__PURE__ */ f.jsx(lp, { props: e })
  ] }) });
}, hp = `
  ol {
      list-style: decimal;
  }
  ul {
    list-style: disc;
}
`, xp = (e) => {
  const t = e.theme ? e.theme : "theme-dark";
  return /* @__PURE__ */ f.jsxs(Di, { theme: `${e.theme ? e.theme : "theme-dark"}`, children: [
    /* @__PURE__ */ f.jsx("style", { children: Yi.toString() }),
    /* @__PURE__ */ f.jsx("style", { children: Ki.toString() }),
    /* @__PURE__ */ f.jsx("style", { children: t === "theme-dark" ? Gi.toString() : Ji.toString() }),
    /* @__PURE__ */ f.jsx("style", { children: hp }),
    /* @__PURE__ */ f.jsx(ta, { children: /* @__PURE__ */ f.jsx(pp, { ...e }) })
  ] });
};
export {
  xp as default
};
