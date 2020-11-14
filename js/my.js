


function sendurl(){

if(typeof(Storage)!=="undefined"){


var prom = prompt("what note do you want to save for this site","");
    localStorage.setItem("saved",prom);

}else{
    alert("Does not support storage");

}
}
sendurl();








