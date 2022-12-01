/* Daily Rotating Content: We can use the Date object to vary images or content on our pages based on the time, date or day of the week. 
 In this way we can say that we're rotating our content. Here are some of the things we could do, using these techniques: 
Show a special icon for certain holidays only
 Show a custom image for each day of the week
 Show information on our websites differently on weekdays vs weekends
 Rotate articles on our websites on a daily basis 
Conditionals: In order to rotate content, we'll use data extracted from the Date object, 
and then use a conditional (for example an 'if' statement or switch block) to determine which HTML is appropriate to show at a given date or time.

 Rotate by Day of Week: Use HTML/CSS & JavaScript to create a single page that rotates unique colors and content for each weekday (Sunday to Saturday) into the page.  The content must include:

 One unique image, with appropriate and matching content in the alt tag.  
 A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday)
 A unique color that supports the image and paragraph of content
 The unique color could affect the background HTML, or an element on the page for each day of the week.  All of the above must occur within one page.

 Image( of specific coffee)
 alt tag (identifies type of coffee)
 description (of this type of coffee)
 weekday
 color ( supporting image)
*/

// old function code
// let myReturn = "";
// myReturn += coffee
// return myReturn;
function coffeeTemplate(coffee) {
  document.querySelector("html").style.backgroundColor = coffee.color;
  return `<p>
        <img src="images/${coffee.pic}" alt="${coffee.alt}" id="coffee" />
       <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is ${coffee.name}, ${coffee.desc}
   <p>`;
}

let myDate = new Date();
let today = myDate.getDay();
let coffee = "";
let myDay = "";

//use location object to access querystring (address bar)
const queryString = window.location.search;

//output to console
console.log(queryString);

//separate querystring parameters
const urlParams = new URLSearchParams(queryString);
if (urlParams.has("day")) {
  //from querystring
  myDay = urlParams.get("day");
} else {
  //today's day of the week
  myDay = today;
}

switch (parseInt(myDay)) {
  case 1:
    today = "monday";
    coffee = {
      color: "pink",
      name: "Bubble Tea",
      pic: "bubble-tea.jpg",
      alt: "A picture of a pink bubble tea",
      day: "Monday",
      desc: `I like me some bubble Tea!`,
    };
    break;
  case 2:
    today = "tuesday";
    coffee = {
      color: "brown",
      name: "Caramel Latte",
      pic: "caramel-latte.jpg",
      alt: "A picture of a caramel latte",
      day: "Tuesday",
      desc: `It's cold outside I need a Caramel Latte`,
    };
    break;
  case 3:
    today = "wednesday";
    coffee = {
      color: "black",
      name: "Cold Brew",
      pic: "cold-brew.jpg",
      alt: "a picture of cold brew",
      day: "Wednesday",
      desc: `Cold Brew for when we're serious!`,
    };
    break;
  case 4:
    today = "Thursday";
    coffee = {
      color: "green",
      name: "Drip Coffee",
      pic: "drip.jpg",
      alt: "a picture of drip coffee",
      day: "Thursday",
      desc: `Drip for when we're serious!`,
    };
    break;
  case 5:
    today = "Friday";
    coffee = {
      color: "blue",
      name: "frappaccino",
      pic: "frappaccino.jpg",
      alt: "a picture of frappaccino",
      day: "friday",
      desc: `frappaccino for when we're serious!`,
    };
    break;
  case 6:
    today = "Saturday";
    coffee = {
      color: "yellow",
      name: "mocha",
      pic: "mocha.jpg",
      alt: "a picture of mocha",
      day: "Saturday",
      desc: `Mocha for when we're serious!`,
    };
    break;
  case 0:
    today = "Sunday";
    coffee = {
      color: "red",
      name: "Pumpkin Spice Latte",
      pic: "pumpkin-spice-latte.jpg",
      alt: "a picture of pumpkin spice latte",
      day: "Sunday",
      desc: `Pumpkin Spice Latte for when we're serious!`,
    };
    break;
  default:
    alert("something went wrong!");
}

console.log(coffee);
document.getElementById("coffee-template").innerHTML = coffeeTemplate(coffee);
