const {test}=require('node:test'),assert=require('node:assert/strict'),p=require('../package.json');
test('run scripts exist',()=>{assert.equal(p.scripts.start,'node server/server.js');assert.ok(p.scripts.dev&&p.scripts.test)});
test('seed catalog is complete enough for demo',()=>{const a=require('../data/products.json');assert.ok(a.length>=10);assert.ok(a.every(x=>x.id&&x.image&&x.price>0))});
