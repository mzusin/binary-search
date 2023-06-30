/*
https://github.com/mzusin/binary-search
MIT License      
Copyright (c) 2023-present, Miriam Zusin       
*/
var o=Object.defineProperty;var t=Object.getOwnPropertyDescriptor;var m=Object.getOwnPropertyNames;var f=Object.prototype.hasOwnProperty;var h=(e,r)=>{for(var u in r)o(e,u,{get:r[u],enumerable:!0})},l=(e,r,u,b)=>{if(r&&typeof r=="object"||typeof r=="function")for(let n of m(r))!f.call(e,n)&&n!==u&&o(e,n,{get:()=>r[n],enumerable:!(b=t(r,n))||b.enumerable});return e};var p=e=>l(o({},"__esModule",{value:!0}),e);var s={};h(s,{binarySearchRecursive:()=>x});module.exports=p(s);var x=(e,r)=>{let u=e.length;if(u<=0)return-1;let b=(n,i)=>{if(n>i)return-1;let c=n+Math.ceil((i-n)/2);return e[c]===r?c:e[c]<r?b(c+1,i):b(i,c-1)};return b(0,u-1)};0&&(module.exports={binarySearchRecursive});
