const loadUsers = ()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayUsers(data))
}
const displayUsers = countries => {
        

        // console.log(users);
          const userDiv = document.getElementById('users-container');
  

        for(const country of countries){
                // console.log(country);
                const newDiv = document.createElement('div');
                newDiv.classList.add('user')


                newDiv.innerHTML =`
                  <h1> Name :${country.name.common} </h1>
                  <p>Capital  : ${country.capital ? country.capital[0] : 'No Capital'} </P>
                  <p>Capital  : ${country.capital} </P>
                  
                 
                  <button onclick="loadCountryDetail('${country.cca2}')"> Details </button>
                            `;
                userDiv.appendChild(newDiv);
        }     
}

loadCountryDetail = (code)=>{

        const url =`https://restcountries.com/v3.1/alpha/${code}`
        // console.log('country details',code);

        fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetails(data[0]))
}

displayCountryDetails= country=>{
        console.log(country)
        const countryDetail = document.getElementById('country-details');
        countryDetail.innerHTML=`
        <h1> Name :${country.name.common} </h1>
        <img src="${country.flags.png}" alt="">
        `;

}

loadUsers ();