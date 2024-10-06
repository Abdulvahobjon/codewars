function strCount(str, letter){  
    //code here
    let nam = 0
    str.split("").map(item=>{
        if(item == letter){
            nam++
        }
    })

    return nam
}

console.log(strCount("abs_javascript aa a a a a  a" , "a"));
