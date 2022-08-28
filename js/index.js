function loadUsers2(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers2(data))
}

function displayUsers2(data){
    const ul = document.getElementById('list-item');
    const ol = document.getElementById('list-item2');
    for(const user of data){
        const li = document.createElement('li');
        li.innerText = user.name
        ul.appendChild(li);

        const oli = document.createElement('li');
        oli.innerText = user.phone;
        ol.appendChild(oli);

    }
}