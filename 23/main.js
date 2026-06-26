window.onload = function () {
    let btn = document.querySelector("#btn");
    btn.style.marginBottom = "20px";
    let users = document.querySelector("#users");

    btn.onclick = function () {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => {
                users.innerHTML = "";
                data.forEach(function (user) {
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
    let button = document.querySelector("#button");
    let user1 = document.querySelector("#user1");

    button.onclick = function () {
        fetch("https://jsonplaceholder.typicode.com/users/3")
            .then(response => response.json())
            .then(user => {
                user1.innerHTML = `
            <h2>${user.name}</h2>
            <p>Nickname: ${user.username}</p>
            <p>Email: ${user.email}</p>
            `;
            })
            .catch(error => {
                console.log(error);
            });
    };

    // 3
    let postsBtn = document.querySelector("#postsBtn");
    postsBtn.style.marginTop = "20px";
    let posts = document.querySelector("#posts");

    postsBtn.onclick = function () {
        fetch("https://jsonplaceholder.typicode.com/posts?userId=5")
            .then(response => response.json())
            .then(data => {
                posts.innerHTML = "";
                data.forEach(function (post) {
                    let p = document.createElement("p");
                    p.textContent = post.title;
                    posts.append(p);
                });
            })
            .catch(error => {
                console.log(error);
            });
    };

    // 4
    let cardBtn = document.querySelector("#cardBtn");
    cardBtn.style.marginTop = "20px";
    let card = document.querySelector("#card");

    cardBtn.onclick = function () {
        fetch("https://swapi.info/api/planets/2/")
            .then(response => response.json())
            .then(data => {
                card.innerHTML = "";
                let planet = document.createElement("div");

                planet.innerHTML = `
            <h2>${data.name}</h2>
            <p>Diameter: ${data.diameter}</p>
            <p>Population: ${data.population}</p>
            `;

                card.append(planet);

                for (let key in data) {
                    if (Array.isArray(data[key])) {
                        data[key].forEach(function (link) {
                            if (link.startsWith("http")) {
                                let a = document.createElement("a");
                                a.href = link;
                                a.target = "_blank";
                                a.textContent = link;

                                card.append(a);
                                card.append(document.createElement("br"));
                            }
                        });
                    }
                }
            })
            .catch(error => {
                console.log(error);
            });
    };

};