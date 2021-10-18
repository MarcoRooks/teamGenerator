let names = document.querySelector('#team-name');


let team = []
let nameList = document.querySelector('.team-list');
let teamsContainer = document.querySelector('.teams-container');
let teamsRemove = document.querySelector('.teams');
let sizeTeam = document.querySelector('#size-team');


let copyArray = function (array) {
    let copy = [];
    for (e of array) {
        copy.push(e);
    }
    return copy
}



// Allows to use the enter button to add player instead of clicking on button

names.onkeydown = function (e) {
    if (e.keyCode === 13) {
        btnName();
    }
}
sizeTeam.onkeydown = function (e) {
    if (e.keyCode === 13) {
        btnSize();
    }
}


// with the 'test()' method we can find if a string is the regular expression that we indicate


let printNames = function (text, target) {


    let nameOfList = document.createElement('p');
    nameOfList.classList.add("name-list");
    nameOfList.innerHTML = text;

    target.appendChild(nameOfList);


}



let printList = function (list, size) {
    let copyArr = copyArray(team);
    let numbersTeams = list.length / size;
    for (i = 0; i < numbersTeams; i++) {

        let teams = document.createElement('div');
        teams.classList.add("teams");
        teamsContainer.appendChild(teams);

        for (let j = 0; j < size; j++) {
            let random = Math.floor((Math.random() * copyArr.length) + 0);

            console.log(list[random]);
            if (copyArr[random] !== undefined) {
                printNames(copyArr[random], teams)
            }

            copyArr.splice(random, 1);
        }

    }

}
let btnName = function () {
    if (/[a-zA-Z]/.test(names.value)) {
        team.push(names.value);
        printNames(names.value, nameList);
    }

    names.value = '';
    console.log(team);

}





let btnSize = function () {
    teamsContainer.innerHTML = "";

    printList(team, sizeTeam.value)

}