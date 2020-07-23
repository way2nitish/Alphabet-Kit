var numberOfButtons = document.querySelectorAll(".alpha").length;

for (var i = 0; i < numberOfButtons; i++) {

  document.querySelectorAll(".alpha")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "a":
      var tom1 = new Audio("sounds/a.mp3");
      tom1.play();
      break;

    case "b":
      var tom2 = new Audio("sounds/b.mp3");
      tom2.play();
      break;

    case "c":
      var tom3 = new Audio('sounds/c.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/d.mp3');
      tom4.play();
      break;

    case "e":
      var snare = new Audio('sounds/e.mp3');
      snare.play();
      break;

    case "f":
      var crash = new Audio('sounds/f.mp3');
      crash.play();
      break;

    case "g":
      var kick = new Audio('sounds/g.mp3');
      kick.play();
      break;

    case "h":
      var kick = new Audio('sounds/h.mp3');
      kick.play();
      break;

    case "i":
      var kick = new Audio('sounds/i.mp3');
      kick.play();
      break;

    case "j":
      var kick = new Audio('sounds/j.mp3');
      kick.play();
      break;

    case "k":
      var kick = new Audio('sounds/k.mp3');
      kick.play();
      break;

    case "l":
      var kick = new Audio('sounds/l.mp3');
      kick.play();
      break;

    case "m":
      var kick = new Audio('sounds/m.mp3');
      kick.play();
      break;

    case "n":
      var kick = new Audio('sounds/n.mp3');
      kick.play();
      break;

    case "o":
      var kick = new Audio('sounds/o.mp3');
      kick.play();
      break;

    case "p":
      var kick = new Audio('sounds/p.mp3');
      kick.play();
      break;

    case "q":
      var kick = new Audio('sounds/q.mp3');
      kick.play();
      break;

    case "r":
      var kick = new Audio('sounds/r.mp3');
      kick.play();
      break;

    case "s":
      var kick = new Audio('sounds/s.mp3');
      kick.play();
      break;

    case "t":
      var kick = new Audio('sounds/t.mp3');
      kick.play();
      break;

    case "u":
      var kick = new Audio('sounds/u.mp3');
      kick.play();
      break;

    case "v":
      var kick = new Audio('sounds/v.mp3');
      kick.play();
      break;

    case "w":
      var kick = new Audio('sounds/w.mp3');
      kick.play();
      break;

    case "x":
      var kick = new Audio('sounds/x.mp3');
      kick.play();
      break;

    case "y":
      var kick = new Audio('sounds/y.mp3');
      kick.play();
      break;

    case "z":
      var kick = new Audio('sounds/z.mp3');
      kick.play();
      break;


    default:
      console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
