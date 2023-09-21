function test(a, b){
    let cont = 0
    for(let x=0;x<b.length;x++){
        if(a == b[x]){
            cont += 1
        }
    }
    return cont
}
console.log(test("a", "O Brasil um dia será hexa!"))