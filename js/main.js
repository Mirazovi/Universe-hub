        //  LoadData Function 
const loaderData = async (isShowAll) =>{
    const res = await fetch('https://openapi.programming-hero.com/api/ai/tools');
    const data = await res.json();
    const photos = data.data.tools;
    SetDataFromApi(photos,isShowAll);
    console.log(photos);
}

            // SetDataFromApi Function 
const SetDataFromApi = (photos,isShowAll) =>{
    const MainContainer = document.getElementById('container');
    MainContainer.textContent ='';
    const SeeMore = document.getElementById('see-more-btn');
    if(photos.length > 6 && !isShowAll){
            SeeMore.classList.remove('hidden');
    }else{
        SeeMore.classList.add('hidden');
    }
    if(!isShowAll){
        photos = photos.slice(0,6);
    }
       photos.forEach(photo =>{
        const div = document.createElement('div');
        div.innerHTML = `
             <div class="p-6 border-2 rounded-xl m-2">
                <img class="rounded-xl mb-2" src=${photo?.image} alt="">
                <h1>Features</h1>
                <div class="my-2 ">
                <p>${photo.features[0]}</p>
                <p>${photo.features[1]}</p>
                <p>${photo.features[2]}</p>
                </div>
                <hr>
                <h1 class="my-2 ">${photo.name}</h1>
                <div>
                <MaterialSymbolsDateRangeOutlineRounded/>
                <p>${photo.published_in}</p>
                </div>

             </div>
        
        `
        MainContainer.appendChild(div);
       })
}
// See more btn All Clicked 
const handleBtnClicked = () =>{
    loaderData(true);
}
            // Function call 
loaderData();

