const fs=require('node:fs/promises');const path=require('node:path');const base=path.join(__dirname,'..','..','data');
async function read(n){try{return JSON.parse(await fs.readFile(path.join(base,n+'.json'),'utf8'))}catch(e){if(e.code==='ENOENT'){await write(n,[]);return []}throw e}}
async function write(n,v){await fs.mkdir(base,{recursive:true});const f=path.join(base,n+'.json'),t=f+'.tmp';await fs.writeFile(t,JSON.stringify(v,null,2));await fs.rename(t,f)}module.exports={read,write};
