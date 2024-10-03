function correct(string){
	// your code here
    return string.split("").map((item)=>{
        if(item == 5){
            return "S"
        }else if(item == 0){
            return "O"
        } else if(item == 1){
            return "I"
        }else{
            return item
        }
    }).join("")
}

console.log(correct("Sal000m dun1555511yo"));
