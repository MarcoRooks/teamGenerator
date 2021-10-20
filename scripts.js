const names = document.querySelector('#team-name');
let team = [];
const nameList = document.querySelector('.team-list');
const teamContainer = document.querySelector('.team-container');
const teamsRemove = document.querySelector('.teams');
const sizeTeam = document.querySelector('#size-team');
const btnSize = document.querySelector('.btnSize');


// loop through an array and generate a copy since the splice () method used in printList () removes a common copy and also removes the original array



let copyArray = function (array) {
    let copy = [];
    for (e of array) {
        copy.push(e);
    }
    return copy;
}



// Allows to use the enter button to add player instead of clicking on button

names.onkeydown = function (e) {
    if (e.keyCode === 13) {
        btnName();
    }
}
sizeTeam.onkeydown = function (e) {
    if (e.keyCode === 13) {
        generator(btnSize);
    }
}


// with the 'test()' method we can find if a string is the regular expression that we indicate

let btnName = function () {
    if (/[a-zA-ZñÑ]/.test(names.value)) {
        team.push(names.value);
        printNames(`${team.length} - ${names.value}`, nameList);
    }

    names.value = '';


}

// function that adds <p> with the strings to an element of the html
let printNames = function (text, target) {


    let nameOfList = document.createElement('p');
    nameOfList.classList.add("name-list");
    nameOfList.innerHTML = text;

    target.appendChild(nameOfList);


}


// go through the array and assign teams randomly
let printList = function (list, size) {
    size = parseInt(size);

    let copyArr = copyArray(team);
    if (size <= 0 || /[a-zA-Z]/.test(size)) {

        return alert("No introduciste un numero valido");
    }
    if (size >= list.length) {
        return alert("El tamaño de cada equipo es mayor que el numero de personas");
    }
    let numbersTeams = list.length / size;
    for (i = 0; i < numbersTeams; i++) {

        let teams = document.createElement('div');
        teams.classList.add("teams");
        teamContainer.appendChild(teams);
        let numberTeams = document.createElement('h4');
        numberTeams.innerHTML = `Team ${i + 1}`;
        teams.appendChild(numberTeams);

        for (let j = 0; j < size; j++) {
            let random = Math.floor((Math.random() * copyArr.length) + 0);


            if (copyArr[random] !== undefined) {
                printNames(`${j + 1} - ${copyArr[random]}`, teams);
            }

            copyArr.splice(random, 1);
        }

    }



}




// button to generate the teams

let generator = function (e) {
    teamContainer.innerHTML = "";
    const teamsContainer = document.querySelector('.teams-container');
    teamsContainer.id = 'team-container';

    printList(team, sizeTeam.value);


    const clickHref = e.attributes.href.value;

    const selectHref = document.querySelector(clickHref);

    selectHref.scrollIntoView({ behavior: "smooth" });

    return false

}



