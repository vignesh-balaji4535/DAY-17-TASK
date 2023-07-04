function printData(data){
    let cardContainer=document.getElementById('card')
    cardContainer.innerHTML=''
    data.forEach((ele)=>{
      cardContainer.innerHTML+=`
    <div class=" card col-lg-4 col-sm-12 m-3 " style="width: 25rem;">
    <h3 class="card-title" >${ele.name.common}</h3>
    <div class="card-body">
  <img src="${ele.flags.png}" class="card-img-top" alt="${ele.flags.alt}">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Capital : ${ele.capital}</li>
    <li class="list-group-item">Region : ${ele.region}</li>
    <li class="list-group-item">Country Code : ${ele.fifa}</li>
    <li class="list-group-item"> <a href="#" class="btn btn-primary">Click for Weather</a> </li>
   
  </ul>
  </div>
</div>`
    })
}

let url=`https://restcountries.com/v3.1/all`;
async function restCountryData(url,callback){
   try{ let responseData=await fetch(url);
   let result=await responseData.json();
   callback(result);
}catch{(err)=>console.log(err);}
}
restCountryData(url,printData);
