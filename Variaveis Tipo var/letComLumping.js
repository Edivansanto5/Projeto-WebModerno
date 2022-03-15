const funcs = []
for(var i = 0;i<10;i++){
    funcs.push(function(){
        console.log(i)
    })
}
funcs[1]()
funcs[2]()
funcs[3]()
funcs[4]()
funcs[5]()
funcs[6]()
funcs[7]()
funcs[8]()
//console.log('i vale',i) da erro por que o let so funcioma dentro do escopo declarado