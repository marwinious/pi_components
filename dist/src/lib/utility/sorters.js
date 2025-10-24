function i(n,e,s){return[...n].sort((a,c)=>{const t=a[e],r=c[e],o=typeof t=="string"&&typeof r=="string"?t.localeCompare(r,void 0,{numeric:!0}):Number(t)-Number(r);return s==="asc"?o:-o})}export{i as sortArrayOfObjects};
//# sourceMappingURL=sorters.js.map
