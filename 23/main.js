window.onload = function () {
    let btn = document.querySelector("#btn");
    let users = document.querySelector("#users");

    btn.onclick = function () {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            users.innerHTML = "";
            data.forEach(function(user) {
                let p = document.createElement("p");
                p.textContent = user.name + " - " + user.email;

                users.append(p);
            });
        })
        .catch(error => {
            console.log(error);
        }); 
    };

    // 2
    
};