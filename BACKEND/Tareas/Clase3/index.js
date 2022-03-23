const moment = require('moment');

const now = moment();

const roverPerseverance = moment("30-10-2020", "DD-MM-YYYY")
const apolo1 = moment("21-02-1967", "DD-MM-YYYY")
const voyager1 = moment("05-09-1977", "DD-MM-YYYY")
const cassini = moment("15-10-1977", "DD-MM-YYYY")

const diferencia = {
    roverPerseverance : now.diff(roverPerseverance, 'years') +  ' año y ' + now.diff(roverPerseverance, 'days') + ' dias' ,
    apolo1 : now.diff(apolo1, 'years') +  ' años y ' + now.diff(apolo1, 'days') + ' dias',
    voyager1 : now.diff(voyager1, 'years') +  ' años y ' + now.diff(voyager1, 'days') + ' dias' ,
    cassini : now.diff(cassini, 'years') +  ' años y ' + now.diff(cassini, 'days') + ' dias'

}

console.log(diferencia)