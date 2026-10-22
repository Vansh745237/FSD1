function sum(a,b){
    return a+b;
}

function sumwithmsg(clbk,msg){
 const result =clbk(20,30);
 const finalresult = "HI" + msg + "your Score is =" + result;
 console.log(finalresult);
}

sumwithmsg(sum,"Mr. Deepak");