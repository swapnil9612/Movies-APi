const MainId=document.getElementById("Main-id")

let temp=''
let ArrData=[]

ArrData=JSON.parse(localStorage.getItem("Movies"))||[];

ArrData.map((ele,index)=>{
console.log(ele)
RenderData(ele);

});

function RenderData(ele)
{
   temp +=`
    </div class="AllCard">
    <div class="card" style="width: 10rem; height:32rem; margin-top: 10px;">
        <img id="img-id" src=${ele.Poster} class="card-img-top" style="width: 10rem; height:12rem;" alt="...">
        <div class="card-body text-center">
          <h5 class="card-title">${ele.Title}</h5>
          <p class="card-text">${ele.Genre}</p>
          <p class="card-text">${ele.imdbRating}</p>
          <p class="card-text">${ele.Runtime}</p>
          <p class="card-text">${ele.Type}</p>
          
          <p><i class="bi bi-hand-thumbs-up"></i> ${ele.imdbVotes}</p>
        </div>
      </div>
    </div>`
    
    MainId.innerHTML=temp
}

