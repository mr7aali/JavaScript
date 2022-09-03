function loadUser2(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUser(data))
}

function displayUser(data){
    const ul = document.getElementById('User-name');
    for (const user of data){
        console.log(user.name);
        

        const li = document.createElement('LI');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}