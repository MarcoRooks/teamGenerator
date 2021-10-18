// Allows to use the enter button to add player instead of clicking on button

document.querySelector('#team-name').onkeydown = function(e) {
    if (e.keyCode === 13) {
        btnName();
    }
}

let names = document.querySelector('#team-name');
// // let btn = document.querySelector('.btn');

let team = []


let btnName = function () {
    if (names.value !== '')
        team.push(names.value)
    names.value = ''
    console.log(team);


}

// btn.addEventListener("click", function (event) {
//     event.preventDefault();
//     
// });