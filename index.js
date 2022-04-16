const InputText=document.getElementById("InputText")
const AllMovie=document.getElementById("AllMovie")

let data=''
let ArrData=[]

ArrData=JSON.parse(localStorage.getItem("Movies"))||[];


function MoivesHandler()//key press
{
    const SearchValue=InputText.value
    if(SearchValue=="")
    {
      alert("Please Enter Movie Name......")
  return
  }
   

    fetchText(SearchValue);    
    
 
}
//fetching...........

async function fetchText(SearchValue) {
    let temp=''
    let response = await fetch(`https://www.omdbapi.com/?t=${SearchValue}&apikey=38682202`);

    console.log(response.status); // 200
    console.log(response.statusText); // OK

    if (response.status === 200) 
    {
         data = await response.json();
        RenderCard(data);
    }
    else
   {
     alert("data not found!");
     return
   }

}


function RenderCard(data){

// console.log(data.Title)//

temp=`<div class="movie_card" id="bright">
<div class="info_section">
  <div class="movie_header">
    <img class="locandina" src=${data.Poster}/>
    <h1>${data.Title} </h1>
    <h3>${data.Genre}</h3>
    <h4>Actors :${data.Actors} </h4>
    <h5><b>Rating :</B>${data.imdbRating}</h5>
    <p class="minutes">${data.Runtime}</p>
    <p>Released :${data.Released}</p> 
    <p>Released :${data.Type}</p> 
    <p>Writer :${data.Writer}, Director :${data.Director}</p>
    
  </div>
  <br>
  <div class="movie_desc">
  <p class="text">
   ${data.Plot}</p>
</div>

<div class="text-center mb-5 col-md-12">
  <form method="post" action="saveMovie.php">
    <input type="hidden" name="movieID" value="${data.imdbID}">
    <input type="hidden" name="poster" value="${data.Poster}">
    <input type="hidden" name="title" value="${data.Title}">
    <input type="hidden" name="genre" value="${data.Genre}">
    <input type="hidden" name="released" value="${data.Released}">
    <input type="hidden" name="rated" value="${data.Rated}">
    <input type="hidden" name="imdbRating" value="${data.imdbRating}">
    <input type="hidden" name="Director" value="${data.Director}">
    <input type="hidden" name="Writer" value="${data.Writer}">
    <input type="hidden" name="Actors" value="${data.Actors}">
    <input type="hidden" name="Plot" value="${data.Plot}">
    <input type="hidden" name="votes" value="${data.imdbVotes}">
    <input type="submit" class="btn btn-primary" value="Save" name="save">
  </form>
</div>
</div>
<div class="blur_back bright_back"></div>
</div>
</div>
<div class="blur_back ave_back"></div>
</div>`

    AllMovie.innerHTML=temp
}


// function SaveMovies(data){
//   ArrData=JSON.parse(localStorage.getItem("Movies"))||[];
//   console.log(ArrData.length+"---"+data.Title+"####") //
//   let len=ArrData.length;
//     if(len===0){
//       ArrData.push(data);
//       localStorage.setItem("Movies",JSON.stringify(ArrData)); 
//       alert("Your data save");
//     }
//     else
//     {
//       for(let i=0;i<ArrData.length;i++){
//         if(ArrData[i].Title===data.Title){
//           alert("movies already Saved !!....")
//           console.log(data.Title+".........."+ArrData[i].Title)
//           return 0;
//         }
//       }
 
//       ArrData.push(data);
//       localStorage.setItem("Movies",JSON.stringify(ArrData)); 
//       alert("Your data save");
//     }
// }
