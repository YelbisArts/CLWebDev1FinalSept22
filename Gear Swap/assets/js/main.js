// Light and Dark Mode //

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

//  Other day and night mode code I chose not to use but considered.

//  document.addEventListener("DOMContentLoaded", function(event) {
//     document.documentElement.setAttribute("data-theme", "light");

//     // Get our button switcher
//     var themeSwitcher = document.getElementById("theme-switcher");

//     // When our button gets clicked
//     themeSwitcher.onclick = function() {
//       // Get the current selected theme, on the first run
//       // it should be `light`
//       var currentTheme = document.documentElement.getAttribute("data-theme");

//       // Switch between `dark` and `light`
//       var switchToTheme = currentTheme === "dark" ? "light" : "dark"

//       // Set our currenet theme to the new one
//       document.documentElement.setAttribute("data-theme", switchToTheme);
//     }
//   });


//  Toggle Available Selection

// document.querySelector('#brassLine').addEventListener('click', brass)

// function brass(){
// 	document.querySelector('#flute').style.display = 'none'
// 	document.querySelector('.groupA').style.display = 'none'
// }



function myBrass() {

  // Woodwinds
  var flute = document.getElementById("flute");
  var clarinet = document.getElementById("clarinet");
  var altoSax = document.getElementById("altoSax");
  var bassoon = document.getElementById("bassoon");

  // Percussion
  var drumset = document.getElementById("drumset");
  var snare = document.getElementById("snare");
  var tambourine = document.getElementById("tambourine");
  var timpani = document.getElementById("timpani");

  // Strings
  var  violin = document.getElementById("violin");
  var  ukulele = document.getElementById("ukulele");
  var  cello = document.getElementById("cello");
  var  guitar = document.getElementById("guitar");

  // Keyboard
  var  piano = document.getElementById("piano");
  var  accordion = document.getElementById("accordion");
  var  synthesizer = document.getElementById("synthesizer");
  var  upright = document.getElementById("upright");

  // Electronic
  var  pedal = document.getElementById("pedal");
  var  soundBoard = document.getElementById("soundBoard");
  var  theremin = document.getElementById("theremin");
  var  turntable = document.getElementById("turntable");

    if (flute.style.display === "none") {
      
      // Woodwinds
      flute.style.display = "block";
      clarinet.style.display = "block";
      altoSax.style.display = "block";
      bassoon.style.display = "block";

      // Percussion
      drumset.style.display = "block";
      snare.style.display = "block";
      tambourine.style.display = "block";
      timpani.style.display = "block";

      // Strings
      violin.style.display = "block";
      ukulele.style.display = "block";
      cello.style.display = "block";
      guitar.style.display = "block";

      // Keyboard
      piano.style.display = "block";
      accordion.style.display = "block";
      synthesizer.style.display = "block";
      upright.style.display = "block";

      // Electronic
      pedal.style.display = "block";
      soundBoard.style.display = "block";
      theremin.style.display = "block";
      turntable.style.display = "block";

    } else {

      // Woodwinds
      flute.style.display = "none";
      clarinet.style.display = "none";
      altoSax.style.display = "none";
      bassoon.style.display = "none";

      // Percussion
      drumset.style.display = "none";
      snare.style.display = "none";
      tambourine.style.display = "none";
      timpani.style.display = "none";

      // Strings
      violin.style.display = "none";
      ukulele.style.display = "none";
      cello.style.display = "none";
      guitar.style.display = "none";

      // Keyboard
      piano.style.display = "none";
      accordion.style.display = "none";
      synthesizer.style.display = "none";
      upright.style.display = "none";

      // Electronic
      pedal.style.display = "none";
      soundBoard.style.display = "none";
      theremin.style.display = "none";
      turntable.style.display = "none";
    }
  }


function myWind() {

    // Brass
    var trumpet = document.getElementById("trumpet");
    var horn = document.getElementById("horn");
    var trombone = document.getElementById("trombone");
    var tuba = document.getElementById("tuba");
  
    // Percussion
    var drumset = document.getElementById("drumset");
    var snare = document.getElementById("snare");
    var tambourine = document.getElementById("tambourine");
    var timpani = document.getElementById("timpani");
  
    // Strings
    var  violin = document.getElementById("violin");
    var  ukulele = document.getElementById("ukulele");
    var  cello = document.getElementById("cello");
    var  guitar = document.getElementById("guitar");
  
    // Keyboard
    var  piano = document.getElementById("piano");
    var  accordion = document.getElementById("accordion");
    var  synthesizer = document.getElementById("synthesizer");
    var  upright = document.getElementById("upright");
  
    // Electronic
    var  pedal = document.getElementById("pedal");
    var  soundBoard = document.getElementById("soundBoard");
    var  theremin = document.getElementById("theremin");
    var  turntable = document.getElementById("turntable");
  
      if (trumpet.style.display === "none") {
        
        // Brass
        trumpet.style.display = "block";
        horn.style.display = "block";
        trombone.style.display = "block";
        tuba.style.display = "block";
  
        // Percussion
        drumset.style.display = "block";
        snare.style.display = "block";
        tambourine.style.display = "block";
        timpani.style.display = "block";
  
        // Strings
        violin.style.display = "block";
        ukulele.style.display = "block";
        cello.style.display = "block";
        guitar.style.display = "block";
  
        // Keyboard
        piano.style.display = "block";
        accordion.style.display = "block";
        synthesizer.style.display = "block";
        upright.style.display = "block";
  
        // Electronic
        pedal.style.display = "block";
        soundBoard.style.display = "block";
        theremin.style.display = "block";
        turntable.style.display = "block";
  
      } else {
  
        // Brass
        trumpet.style.display = "none";
        horn.style.display = "none";
        trombone.style.display = "none";
        tuba.style.display = "none";
  
        // Percussion
        drumset.style.display = "none";
        snare.style.display = "none";
        tambourine.style.display = "none";
        timpani.style.display = "none";
  
        // Strings
        violin.style.display = "none";
        ukulele.style.display = "none";
        cello.style.display = "none";
        guitar.style.display = "none";
  
        // Keyboard
        piano.style.display = "none";
        accordion.style.display = "none";
        synthesizer.style.display = "none";
        upright.style.display = "none";
  
        // Electronic
        pedal.style.display = "none";
        soundBoard.style.display = "none";
        theremin.style.display = "none";
        turntable.style.display = "none";
      }
    }

  
function myPerc() {

    // Brass
    var trumpet = document.getElementById("trumpet");
    var horn = document.getElementById("horn");
    var trombone = document.getElementById("trombone");
    var tuba = document.getElementById("tuba");

    // Woodwinds
    var flute = document.getElementById("flute");
    var clarinet = document.getElementById("clarinet");
    var altoSax = document.getElementById("altoSax");
    var bassoon = document.getElementById("bassoon");
  
    // Strings
    var  violin = document.getElementById("violin");
    var  ukulele = document.getElementById("ukulele");
    var  cello = document.getElementById("cello");
    var  guitar = document.getElementById("guitar");
  
    // Keyboard
    var  piano = document.getElementById("piano");
    var  accordion = document.getElementById("accordion");
    var  synthesizer = document.getElementById("synthesizer");
    var  upright = document.getElementById("upright");
  
    // Electronic
    var  pedal = document.getElementById("pedal");
    var  soundBoard = document.getElementById("soundBoard");
    var  theremin = document.getElementById("theremin");
    var  turntable = document.getElementById("turntable");
  
      if (trumpet.style.display === "none") {
        
        // Brass
        trumpet.style.display = "block";
        horn.style.display = "block";
        trombone.style.display = "block";
        tuba.style.display = "block";

        // Woodwinds
        flute.style.display = "block";
        clarinet.style.display = "block";
        altoSax.style.display = "block";
        bassoon.style.display = "block";
  
        // Strings
        violin.style.display = "block";
        ukulele.style.display = "block";
        cello.style.display = "block";
        guitar.style.display = "block";
  
        // Keyboard
        piano.style.display = "block";
        accordion.style.display = "block";
        synthesizer.style.display = "block";
        upright.style.display = "block";
  
        // Electronic
        pedal.style.display = "block";
        soundBoard.style.display = "block";
        theremin.style.display = "block";
        turntable.style.display = "block";
  
      } else {
  
        // Brass
        trumpet.style.display = "none";
        horn.style.display = "none";
        trombone.style.display = "none";
        tuba.style.display = "none";

        // Woodwinds
        flute.style.display = "none";
        clarinet.style.display = "none";
        altoSax.style.display = "none";
        bassoon.style.display = "none";
  
        // Strings
        violin.style.display = "none";
        ukulele.style.display = "none";
        cello.style.display = "none";
        guitar.style.display = "none";
  
        // Keyboard
        piano.style.display = "none";
        accordion.style.display = "none";
        synthesizer.style.display = "none";
        upright.style.display = "none";
  
        // Electronic
        pedal.style.display = "none";
        soundBoard.style.display = "none";
        theremin.style.display = "none";
        turntable.style.display = "none";
      }
    }

function myString() {

    // Brass
    var trumpet = document.getElementById("trumpet");
    var horn = document.getElementById("horn");
    var trombone = document.getElementById("trombone");
    var tuba = document.getElementById("tuba");

    // Woodwinds
    var flute = document.getElementById("flute");
    var clarinet = document.getElementById("clarinet");
    var altoSax = document.getElementById("altoSax");
    var bassoon = document.getElementById("bassoon");
  
    // Percussion
    var drumset = document.getElementById("drumset");
    var snare = document.getElementById("snare");
    var tambourine = document.getElementById("tambourine");
    var timpani = document.getElementById("timpani");
  
    // Keyboard
    var  piano = document.getElementById("piano");
    var  accordion = document.getElementById("accordion");
    var  synthesizer = document.getElementById("synthesizer");
    var  upright = document.getElementById("upright");
  
    // Electronic
    var  pedal = document.getElementById("pedal");
    var  soundBoard = document.getElementById("soundBoard");
    var  theremin = document.getElementById("theremin");
    var  turntable = document.getElementById("turntable");
  
      if (trumpet.style.display === "none") {
        
        // Brass
        trumpet.style.display = "block";
        horn.style.display = "block";
        trombone.style.display = "block";
        tuba.style.display = "block";

        // Woodwinds
        flute.style.display = "block";
        clarinet.style.display = "block";
        altoSax.style.display = "block";
        bassoon.style.display = "block";
  
        // Percussion
        drumset.style.display = "block";
        snare.style.display = "block";
        tambourine.style.display = "block";
        timpani.style.display = "block";
  
        // Keyboard
        piano.style.display = "block";
        accordion.style.display = "block";
        synthesizer.style.display = "block";
        upright.style.display = "block";
  
        // Electronic
        pedal.style.display = "block";
        soundBoard.style.display = "block";
        theremin.style.display = "block";
        turntable.style.display = "block";
  
      } else {
  
        // Brass
        trumpet.style.display = "none";
        horn.style.display = "none";
        trombone.style.display = "none";
        tuba.style.display = "none";

        // Woodwinds
        flute.style.display = "none";
        clarinet.style.display = "none";
        altoSax.style.display = "none";
        bassoon.style.display = "none";
  
        // Percussion
        drumset.style.display = "none";
        snare.style.display = "none";
        tambourine.style.display = "none";
        timpani.style.display = "none";
  
        // Keyboard
        piano.style.display = "none";
        accordion.style.display = "none";
        synthesizer.style.display = "none";
        upright.style.display = "none";
  
        // Electronic
        pedal.style.display = "none";
        soundBoard.style.display = "none";
        theremin.style.display = "none";
        turntable.style.display = "none";
      }
    }

function myKey() {

    // Brass
    var trumpet = document.getElementById("trumpet");
    var horn = document.getElementById("horn");
    var trombone = document.getElementById("trombone");
    var tuba = document.getElementById("tuba");

    // Woodwinds
    var flute = document.getElementById("flute");
    var clarinet = document.getElementById("clarinet");
    var altoSax = document.getElementById("altoSax");
    var bassoon = document.getElementById("bassoon");
  
    // Percussion
    var drumset = document.getElementById("drumset");
    var snare = document.getElementById("snare");
    var tambourine = document.getElementById("tambourine");
    var timpani = document.getElementById("timpani");
  
    // Strings
    var  violin = document.getElementById("violin");
    var  ukulele = document.getElementById("ukulele");
    var  cello = document.getElementById("cello");
    var  guitar = document.getElementById("guitar");
  
    // Electronic
    var  pedal = document.getElementById("pedal");
    var  soundBoard = document.getElementById("soundBoard");
    var  theremin = document.getElementById("theremin");
    var  turntable = document.getElementById("turntable");
  
      if (trumpet.style.display === "none") {
        
        // Brass
        trumpet.style.display = "block";
        horn.style.display = "block";
        trombone.style.display = "block";
        tuba.style.display = "block";

        // Woodwinds
        flute.style.display = "block";
        clarinet.style.display = "block";
        altoSax.style.display = "block";
        bassoon.style.display = "block";
  
        // Percussion
        drumset.style.display = "block";
        snare.style.display = "block";
        tambourine.style.display = "block";
        timpani.style.display = "block";
  
        // Strings
        violin.style.display = "block";
        ukulele.style.display = "block";
        cello.style.display = "block";
        guitar.style.display = "block";
  
        // Electronic
        pedal.style.display = "block";
        soundBoard.style.display = "block";
        theremin.style.display = "block";
        turntable.style.display = "block";
  
      } else {
  
        // Brass
        trumpet.style.display = "none";
        horn.style.display = "none";
        trombone.style.display = "none";
        tuba.style.display = "none";

        // Woodwinds
        flute.style.display = "none";
        clarinet.style.display = "none";
        altoSax.style.display = "none";
        bassoon.style.display = "none";
  
        // Percussion
        drumset.style.display = "none";
        snare.style.display = "none";
        tambourine.style.display = "none";
        timpani.style.display = "none";
  
        // Strings
        violin.style.display = "none";
        ukulele.style.display = "none";
        cello.style.display = "none";
        guitar.style.display = "none";
  
        // Electronic
        pedal.style.display = "none";
        soundBoard.style.display = "none";
        theremin.style.display = "none";
        turntable.style.display = "none";
      }
    }

function myElect() {

    // Brass
    var trumpet = document.getElementById("trumpet");
    var horn = document.getElementById("horn");
    var trombone = document.getElementById("trombone");
    var tuba = document.getElementById("tuba");

    // Woodwinds
    var flute = document.getElementById("flute");
    var clarinet = document.getElementById("clarinet");
    var altoSax = document.getElementById("altoSax");
    var bassoon = document.getElementById("bassoon");
  
    // Percussion
    var drumset = document.getElementById("drumset");
    var snare = document.getElementById("snare");
    var tambourine = document.getElementById("tambourine");
    var timpani = document.getElementById("timpani");
  
    // Strings
    var  violin = document.getElementById("violin");
    var  ukulele = document.getElementById("ukulele");
    var  cello = document.getElementById("cello");
    var  guitar = document.getElementById("guitar");
  
    // Keyboard
    var  piano = document.getElementById("piano");
    var  accordion = document.getElementById("accordion");
    var  synthesizer = document.getElementById("synthesizer");
    var  upright = document.getElementById("upright");
  
      if (trumpet.style.display === "none") {
        
        // Brass
        trumpet.style.display = "block";
        horn.style.display = "block";
        trombone.style.display = "block";
        tuba.style.display = "block";

        // Woodwinds
        flute.style.display = "block";
        clarinet.style.display = "block";
        altoSax.style.display = "block";
        bassoon.style.display = "block";
  
        // Percussion
        drumset.style.display = "block";
        snare.style.display = "block";
        tambourine.style.display = "block";
        timpani.style.display = "block";
  
        // Strings
        violin.style.display = "block";
        ukulele.style.display = "block";
        cello.style.display = "block";
        guitar.style.display = "block";
  
        // Keyboard
        piano.style.display = "block";
        accordion.style.display = "block";
        synthesizer.style.display = "block";
        upright.style.display = "block";
  
      } else {
  
        // Brass
        trumpet.style.display = "none";
        horn.style.display = "none";
        trombone.style.display = "none";
        tuba.style.display = "none";

        // Woodwinds
        flute.style.display = "none";
        clarinet.style.display = "none";
        altoSax.style.display = "none";
        bassoon.style.display = "none";
  
        // Percussion
        drumset.style.display = "none";
        snare.style.display = "none";
        tambourine.style.display = "none";
        timpani.style.display = "none";
  
        // Strings
        violin.style.display = "none";
        ukulele.style.display = "none";
        cello.style.display = "none";
        guitar.style.display = "none";
  
        // Keyboard
        piano.style.display = "none";
        accordion.style.display = "none";
        synthesizer.style.display = "none";
        upright.style.display = "none";
        
      }
    }
