function renderCardData(response){
  let newarray=[];
let cardContainer=document.getElementById('card');
if(response.length>0){
response.forEach(ele => {
    const card=`
    <div  style="width: 18rem; ">
    <div><h4 class="card-title">${ele.name.common}</h4></div>

    <img src="${ele.flags.png}" class="card-img-top" alt="${ele.flags.alt}">
    <div class="card-body">
      <h2 class="card-title" >Capital : ${ele.capital}</h2>
      <h2 class="card-title">Region : ${ele.region}</h2>
      <h2 class="card-title">Country Code : ${ele.fifa}</h2>
     
      <a href="#" class="btn btn-primary">Click for Weather</a>
      </div>
    </div>`;
  newarray.push(card)
    cardContainer.innerHTML=newarray
    
    
});



}
}


function printData(data){
    console.log(data);
renderCardData(data)
}

let url=`https://restcountries.com/v3.1/all`;
async function restCountryData(url,callback){
   try{ let responseData=await fetch(url);
   let result=await responseData.json();
   callback(result);
}catch{(err)=>console.log(err);}
}
restCountryData(url,printData);