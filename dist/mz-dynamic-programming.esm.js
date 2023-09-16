/*
https://github.com/mzusin/dynamic-programming
MIT License      
Copyright (c) 2023-present, Miriam Zusin       
*/
var b=n=>{let r=new Map,t=e=>{if(e<=1)return e;if(r.has(e))return r.get(e);let s=t(e-1)+t(e-2);return r.set(e,s),s};return t(n)},m=n=>{let r=[0,1];if(n<=1)return n;for(let t=2;t<=n;t++)r.push(r[t-1]+r[t-2]);return r[r.length-1]},a=n=>{var t;let r=[];for(let e=0;e<=n;e++){let s=e>>1,o=e&1;r[e]=((t=r[s])!=null?t:0)+o}return r},f=n=>{let r=[],t=o=>{if(o>=n.length)return 0;if(r[o]!==void 0)return r[o];let u=t(o+1),i=t(o+2),c=n[o]+Math.min(u,i);return r[o]=c,c},e=t(0),s=t(1);return Math.min(e,s)};export{a as countBits,m as fibonacciNumberIterative,b as fibonacciNumberRecursive,f as minCostClimbingStairsRecursive};
