import $ from "jquery";
import 'bootstrap'; //breathecode dom for more explicit errors
// import 'breathecode-dom'; //DOM override to make JS easier to use
import '../style/index.scss';


// window.onload = function(){
//     console.log('Hello Rigo from the console!');
// };
window.onload = () => {

    var randomNumber=Math.random() * 10;
    document.querySelector('#excuse').innerHTML = generateExcuse();
    
    
};

let generateExcuse = () => {

    let pronoun = ['A','The'];
    let subject = ['jogger', 'golfer', 'driver', 'dog'];
    let action = ['took my', 'threw my', 'stole my', 'yelled at my'];
    let poss = ['homework', 'bag', 'shoe', 'car'];
    let where = ['on the street', 'in my house', 'in my driveway','outside'];
    
    let proIndx = Math.floor(Math.random() * pronoun.length);
    let subjIndx = Math.floor(Math.random() * subject.length);
    let actionIndex = Math.floor(Math.random() * action.length);
    let possIndex = Math.floor(Math.random() * poss.length);
    let whereIndex = Math.floor(Math.random() * where.length);
    
    return pronoun [proIndx ] + ' ' + subject[subjIndx] + ' ' + action[actionIndex] + ' ' + poss[possIndex]   + ' ' + where[whereIndex];    
};


