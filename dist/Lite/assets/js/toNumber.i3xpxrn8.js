import{b as i}from"./_baseTrim.ohbpllmu.js";import{i as o}from"./helpers.lwqbledo.js";import{i as c}from"./toString.oppn28a8.js";var s=NaN,e=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,a=/^0o[0-7]+$/i,p=parseInt;function _(r){if(typeof r=="number")return r;if(c(r))return s;if(o(r)){var n=typeof r.valueOf=="function"?r.valueOf():r;r=o(n)?n+"":n}if(typeof r!="string")return r===0?r:+r;r=i(r);var t=f.test(r);return t||a.test(r)?p(r.slice(2),t?2:8):e.test(r)?s:+r}export{_ as t};
