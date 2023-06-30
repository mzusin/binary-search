/*
https://github.com/mzusin/binary-search
MIT License      
Copyright (c) 2023-present, Miriam Zusin       
*/
var o=(n,c)=>{let i=n.length;if(i<=0)return-1;let u=(b,e)=>{if(b>e)return-1;let r=b+Math.ceil((e-b)/2);return n[r]===c?r:n[r]<c?u(r+1,e):u(e,r-1)};return u(0,i-1)};export{o as binarySearchRecursive};
