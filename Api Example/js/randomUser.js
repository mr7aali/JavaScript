const loadUsers = ()=>{
        fetch('https://randomuser.me/api/?results=20')
        .then(res => res.json())
        .then(data => displayUsers(data.results))
}
const displayUsers = users => {
        

        // console.log(users);
          const userDiv = document.getElementById('users-container');
  

        for(const user of users){
                console.log(user);
                const newDiv = document.createElement('div');
                newDiv.classList.add('user')
                newDiv.innerHTML =`
                  <h1> Username : ${user.name.first} ${user.name.last} </h1>
                  <p> Emain :${user.email}</P>
                  
                  <p> User Location ${ user.location.country} </P>
                            `;
                userDiv.appendChild(newDiv);
        }     
}
loadUsers ();