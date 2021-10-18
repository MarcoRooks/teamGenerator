let names = document.querySelector('#team-name');


let team = []

// Allows to use the enter button to add player instead of clicking on button

names.onkeydown = function (e) {
    if (e.keyCode === 13) {
        btnName();
    }
}

// with the 'test()' method we can find if a string is the regular expression that we indicate
let btnName = function () {
    if (/[a-zA-Z]/.test(names.value)) {
        team.push(names.value)
    }

    names.value = ''
    console.log(team);


}


// let printList = function (list) {


// }


