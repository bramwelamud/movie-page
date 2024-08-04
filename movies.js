const APILINK='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=397cf62576526087f1df3385d650f851&page=1';
const IMG_PATH= 'https://image.tmdb.org/t/p/w1280';
const SEARCHAPI='https://api.themoviedb.org/3/search/movie?&api_key=397cf62576526087f1df3385d650f851&query=';
const main=document.getElementById("section");
const form=document.getElementById("form");
const search=document.getElementById("query");
returnMovies(APILINK);

function returnMovies(url){
    fetch(url).then(res=>res.json())
    .then(function(data){
        console.log(data.results)
        data.results.forEach(element => {
            const div_card=document.createElement("div");
            div_card.setAttribute('class','card');
            const div_row=document.createElement("div");
            div_row.setAttribute('class','row');
            const div_colomn=document.createElement("div");
            div_colomn.setAttribute('class','colomn');
            const image=document.createElement("img");
            image.setAttribute('id','image');
            image.setAttribute('class','thumbnail');

            const title=document.createElement("h3");
            div_row.setAttribute('id','row');
            
            const center=document.createElement('cente');

            title.innerHTML=`${element.title}`;
            image.src=IMG_PATH+element.poster_path;
center.appendChild(image);
div_card.appendChild(center);
div_card.appendChild(title);
div_colomn.appendChild(div_card);
div_row.appendChild(div_colomn);
main.appendChild(div_row);

        });
    });
}
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    main.innerHTML='';
    const searchItem=search.value;
    if(searchItem){
        returnMovies(SEARCHAPI+searchItem);
        search.value="";
    }
});
