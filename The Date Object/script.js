/*var aryIannaTimeZones = ['Europe/Brussels','Atlantic/Reykjavik','America/Anchorage','Europe/Moscow'];

let date = new Date;
aryIannaTimeZones.forEach((timeZone) =>
{
  let strTime = date.toLocaleString("en-US", {timeZone: `${timeZone}`});
  console.log(timeZone, strTime);
});*/

// exercice 1

/*let date1 = new Date();

let Brussels = date1.toLocaleString('fr-BE', {
    timeZone: 'Europe/Brussels', year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'
});
document.getElementById('Brussels').innerHTML = 'Brussels : ' + Brussels;

let Anchorage = date1.toLocaleString('en-US', {
    timeZone: 'America/Anchorage', year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'
});
document.getElementById('Anchorage').innerHTML = 'Anchorage : ' + Anchorage;

let Reykjavik = date1.toLocaleString('en-US',{
    timeZone: 'Atlantic/Reykjavik',year: 'numeric',month: 'numeric',day: 'numeric',hour: 'numeric',minute: 'numeric',second: 'numeric'});

document.getElementById('Reykjavik').innerHTML = 'Reykjavik : ' + Reykjavik;

let Saint_Petersburg = date1.toLocaleString('ru-RU',{
    timeZone: 'Europe/Moscow',year: 'numeric',month: 'numeric',day: 'numeric',hour: 'numeric',minute: 'numeric',second: 'numeric'});

document.getElementById("Saint-Petersburg").innerHTML = 'Saint-Petersburg : ' + Saint_Petersburg;*/

// exercice 2

/*let Date_of_Birth = new Date('1987-05-12')
let today = new Date()

let date2 = ((today.getTime() - Date_of_Birth.getTime()) / (1000 * 60 * 60 * 24) + ' hours have passed betweeen')

document.body.innerHTML = date2;*/

// exercice 3

/*var today = new Date();
today.setHours(today.getHours() + 80000);
document.body.innerHTML = today;*/

// exercice 4
setInterval(() => {
    let date1 = new Date();

    let date3 = date1.toLocaleString('fr-FR', {
        weekday: 'short',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'

    });
    let temp = document.querySelector('.horloge');
    temp.innerHTML = date1;
}, 1000);