function loadUsers2(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers2(data))
}

function displayUsers2(data){
    for(user of data){
        console.log(user);
        console.log(user.name);
        console.log(user.username);
        console.log(user.email);
    }
}