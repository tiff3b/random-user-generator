const randomFolks = document.querySelector(".random-peeps");
const hiddenUsers = document.querySelector(".num-users");
const selectUserNumber = document.querySelector("#users");

const getData = async function (numUsers){
    //modify API to use numUsers for the results
    const usersRequest = await fetch (`https://randomuser.me/api?results=${numUsers}`);
    const data = await usersRequest.json();
    //find array with the data you want to use
    const userResults = data.results;
    displayUsers(userResults);
};
//add 1 for the first argument to the getData
getData(1);

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
       //add the drop down box
       hiddenUsers.classList.remove("hide");
    }
};

selectUserNumber.addEventListener("change", function(e){
    const numUsers = e.target.value;
    getData(numUsers);
});
