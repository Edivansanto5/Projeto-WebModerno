let a = 234
global.b = 234

this.c = 456
this.d = false
this.e = 'texte'

console.log(a)
console.log(this.a);
console.log(global.b)
console.log(this.c)
console.log(module.exports.c);
console.log(module.exports === this);
console.log(module.exports == this);
console.log(module.exports);

