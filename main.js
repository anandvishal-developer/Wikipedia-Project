const input=document.querySelector('.search-items');
const searchBtn=document.querySelector('.search-btn');

searchBtn.addEventListener('click',searchWiki);
function searchWiki(event){
    event.preventDefault();
   showGif('show');
let searchInput=input.value;
const origin=`https://en.wikipedia.org`;
const url=`${origin}/w/api.php?action=query&format=json&origin=*&list=search&srsearch=${searchInput}`;

fetch(url).then(function(data){
   return data.json();
    
}).then(displayData);
}


//Search Gif Icon
function showGif(value){
    if(value==='show'){
        document.querySelector('.search-logo').classList.add('showIt');
    }
    else if(value==='hide'){
        document.querySelector('.search-logo').classList.remove('showIt');

    }
}

//display Data

function displayData(data){
    showGif('hide');
    let result=data.query.search;
   let output='';
   result.forEach(function(item){
       output+=`
       <li class="search-item">
           <h2 class="search-item__title">${item.title}</h2>
<p class="search-item__text">${item.snippet}</p>
<a href="https://en.wikipedia.org/?curid=${item.pageid}" class="search-item__links" target="_blank">Read More About It.........</a>
       </li>
   `;
   })
   document.querySelector('.results').innerHTML=output;
    
}

