var myAdviceList = ["Marry someone with a different favourite cereal to you so they won't eat yours",
                    "Never shout at someone unless something's on fire",
                    "You're not weird, you're limited edition",
                    "Your pants never get too tight if you don't wear any",
                    "Know your worth...then add tax",
                    "If you have to hang up on someone do it in the middle of one of your own sentences.",
                    "Whatever you do, always give 100%. Unless you are donating blood."
                  ];

var paragraph = document.getElementById('adviceHere');
var adviceButton = document.getElementById('AdviceClicker')


function getToday() {
  var today = new Date();
  var dayNum = today.getDay();
  console.log(dayNum);
  return dayNum;
}

adviceButton.onclick = function(){
  paragraph.textContent = myAdviceList[getToday()];

}

//create element which tells the visitor to come back tomorrow for another one. If click has happened


// function randomize() {
//   var randomNum = Math.floor( Math.random() * myAdviceList.length);
//   return randomNum;
// }
