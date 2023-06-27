console.log("this is module");
function average(arr){
    let sum = 0;
    arr.forEach(element=>{
        sum += element;
    });
    return sum/arr.length;
}

// module.exports=average;//exporting using module 
// module.exports={
//     avg: average,
//     name:"Akhil",
//     repo:"Github"
// }
// MODULE.EXPORT IS AN OBJECT  
module.exports.name="Akhil"