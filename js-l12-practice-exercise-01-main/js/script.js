const randomFolks = document.querySelector(".random-peeps");

const getData = async function (){
    const usersRequest = await fetch ("https://randomuser.me/api?results=5");
    const data = await usersRequest.json();
    //find array with the data you want to use
    const userResults = data.results;
    displayUsers(userResults);
};
getData();

const displayUsers = function(userResults){
    //empty element so you don't get duplicates
    randomFolks.innerHTML = "";

    //loop over users to select desired info
    for (const user of userResults) {
       const country =  user.location.country;
       const name = user.name.first;
       const imageUrl = user.picture.medium;
       //create div element to populate info
       const userDiv = document.createElement("div");
       userDiv.innerHTML = `
       <h3>${name}</h3/
       <p> ${country}</p>
       <img src=${imageUrl} alt="User avatar" />`;
       randomFolks.append(userDiv);
    }
};