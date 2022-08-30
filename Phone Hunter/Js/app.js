const loadPhone = async(searchText ,dataLimit)=>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;

    // fetch(url)
    // .then(res => res.json())
    // .then(data=>console.log(data.data))

    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data ,dataLimit);
}

const displayPhones =( phones ,dataLimit )=>{
    const phonesContainer = document.getElementById('phone-container');
    phonesContainer.innerHTML=``;
    //display 10 phones only
    const showAll = document.getElementById('show-all');
    
    if(dataLimit && phones.length >10){
        phones = phones.slice(0,10);
        showAll.classList.remove('d-none');
    }
    else{
        showAll.classList.add('d-none');
    }

    // display all phone
    const noPhone = document.getElementById('no-phone');

   if(phones.length === 0){
      noPhone.classList.remove('d-none');
   }
   else{
    noPhone.classList.add('d-none');
   }




    // display no phone
    phones.forEach(phone => {

        // console.log(phone);
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');

        phoneDiv.innerHTML=`
        
        <div class="card p-4">
        <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${phone.phone_name}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>        
        `;
        phonesContainer.appendChild(phoneDiv);
    });
    loadSpinner(false);
}
const processSearch =(dataLimit) =>{
    loadSpinner(true);
    const searchField = document.getElementById('search-fild');
    const searchText = searchField.value;
    searchField.value ='';
loadPhone(searchText,dataLimit);
}



document.getElementById('btn-search').addEventListener('click',function(){
    processSearch(10);
})

const loadSpinner = (isLoading) =>{
    const loaderSection = document.getElementById('load-spinner');

    if(isLoading){
        loaderSection.classList.remove('d-none');
    }
    else{
        loaderSection.classList.add('d-none');
    }
}




// not the best way to load show all
document.getElementById('btn-show-all').addEventListener('click',function(){
     processSearch();
})
//loadPhone('');