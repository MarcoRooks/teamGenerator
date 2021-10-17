
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