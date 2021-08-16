const arry =[2,3,4,9,12,16,7,81,102];

arry.map((index)=>{
    var list =document.getElementById('list').innerHTML +=`<li>${index} &nbsp;&nbsp; ${index*index}</li>`;
   console.log(index);
   
})
   

