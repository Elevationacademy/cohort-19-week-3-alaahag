//ex1
// const push = function () {
//     console.log("pushing it!");
// };

// const pull = function () {
//     console.log("pulling it!");
// };

// const pushPull = (func) => func();

// pushPull(push); //should print "pushing it!"
// pushPull(pull); //should print "pulling it!"


//ex2
// const returnTime = function (time) {
//     alert('The current time is: ' + time);
// }

// const getTime = (the_time) => returnTime(new Date());

// getTime(returnTime);


//ex3
// const logData = (the_data) => console.log(the_data);

// const displayData = function (alertDataFunc, logDataFunc, data) {
//     alertDataFunc(data);
//     logDataFunc(data);
// };

// displayData(alert, logData, "I like to party");


//ex4
// const sum = (a, b, c) => {return a+b+c;};
// console.log(sum(4,5,6));


//ex5
// const capitalize = (cap) => { return cap.charAt(0).toUpperCase() + cap.slice(1).toLowerCase(); };
// console.log(capitalize("bOb")); // returns Bob
// console.log(capitalize("TAYLOR")); // returns Taylor
// console.log(capitalize("feliSHIA")) // returns Felishia


//ex6
// const determineWeather = temp => {
//     if(temp > 25){
//       return "hot";
//     };
//     return "cold";
//   };

// const commentOnWeather = (temp) => {return "It's " + determineWeather(temp); };

// console.log(commentOnWeather(30)); //returns "It's hot"
// console.log(commentOnWeather(22)); //returns "It's cold"


//ex7
const explode = (lightFunc, soundFunc, sound) => {
    lightFunc();
    soundFunc(sound);
}

const shineLight = () => document.getElementById("box").style.backgroundColor = "yellow";
const makeSound = sound => alert(sound);

explode(shineLight, makeSound, "BOOM");