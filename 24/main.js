// 1
async function user(userId) {
   let response = await fetch( `https://jsonplaceholder.typicode.com/users/${userId}`);
   let user1 = await response.json();

   console.log("Name:", user1.name);
   console.log("Email:", user1.email);
}

user(2);

// 2
async function film() {
   let response = await fetch("https://swapi.info/api/films/3/");
   let film1 = await response.json();

   console.log("Title:", film1.title);
   console.log("Release:", film1.release_date);
}

film();

// 3
async function planet() {
   let response = await fetch("https://swapi.info/api/planets/1/");
   let planet1 = await response.json();

   console.log("Name:", planet1.name);
   console.log("Climate:", planet1.climate);
}

planet();



