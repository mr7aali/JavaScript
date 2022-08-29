const loadUserFetch = () =>{
    const url ='https://randomuser.me/api/?gender=female';
    fetch(url)
    .then(res => res.json())
    .then(data => displayUser(data.results[0]))
    .catch(errr => console.log(errr)) ///this line for unexpected error ()
}



const loadUserAsync = async()=>{
    const url ='https://randomuser.me/api/?gender=female';
    try{
        const res = await fetch(url);
        const data = await res.json();
        displayUser(data.results[0]);
    }
   catch{
     console.log(errr);
   }
}
const displayUser = user =>{
    console.log(user);
}