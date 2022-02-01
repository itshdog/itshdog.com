// Contact Wrapper open/close
function contactBlur() {
    var x = document.getElementById("contactWrapper");
    x.className = "hidden";
    x.style.opacity = "0";
  }
  
  function contactOpen() {
    var x = document.getElementById("contactWrapper");
    x.className = "";
    x.style.opacity = "1";
  }

// Theme Wrapper open/close
  function themeBlur() {
    var x = document.getElementById("themeWrapper");
    x.className = "hidden";
    x.style.opacity = "0";
  }
  
  function themeOpen() {
    var x = document.getElementById("themeWrapper");
    x.className = "";
    x.style.opacity = "1";
  }
  
// Version Wrapper open/close
  function versionBlur() {
    var x = document.getElementById("versionWrapper");
    x.className = "hidden";
    x.style.opacity = "0";
  }
  
  function versionOpen() {
    var x = document.getElementById("versionWrapper");
    x.className = "";
    x.style.opacity = "1";
  }

// Settings Wrapper open/close  
  function openSettings() {
    var x = document.getElementById("settingsWrapper");
    if (x.className == "") {
      closeSettings();
    } else {
      x.className = "";
      x.style.opacity = "1";
    }
  }

  function closeSettings() {
    var x = document.getElementById("settingsWrapper");
    x.className = "hidden";
    x.style.opacity = "0";
  }
  
// Enable/Disable Blur. Utilized by Settings
  function portfolioBlur() {
    // Variables
    var all = document.getElementsByClassName("portfolio-obj");
    var on = document.getElementById("blur-enable");
    var off = document.getElementById("blur-disable");
  
    // If no blur has been set yet, set to disabled
    if (all[1].style.backdropFilter == "") {
      for (var i = 0; i < all.length; i++) {
        all[i].style.backdropFilter = "blur(0px)";
      }
      off.className = "far fa-circle";
      on.className = "fas fa-circle hidden";
      localStorage.setItem("blurState", "blur(0px)");
      localStorage.setItem("blurOn", "fas fa-circle hidden");
      localStorage.setItem("blurOff", "far fa-circle");
    // If blur is enabled, set to 0px
    } else if (all[1].style.backdropFilter == "blur(3px)") {
      for (var i = 0; i < all.length; i++) {
        all[i].style.backdropFilter = "blur(0px)";
      }
      off.className = "far fa-circle";
      on.className = "fas fa-circle hidden";
      localStorage.setItem("blurState", "blur(0px)");
      localStorage.setItem("blurOn", "fas fa-circle hidden");
      localStorage.setItem("blurOff", "far fa-circle");
    // If blur is disabled, set to 3px
    } else if (all[1].style.backdropFilter == "blur(0px)") {
      for (var i = 0; i < all.length; i++) {
        all[i].style.backdropFilter = "blur(3px)";
      }
      off.className = "far fa-circle hidden";
      on.className = "fas fa-circle selected";
      localStorage.setItem("blurState", "blur(3px)");
      localStorage.setItem("blurOn", "fas fa-circle selected");
      localStorage.setItem("blurOff", "far fa-circle hidden");
    }
  }
  
// Enable/Disable Particles.JS. Utilized by Settings
  function portfolioParticleJS() {
    // Variables
    var x = document.getElementById("particles-js");
    var on = document.getElementById("particles-enable");
    var off = document.getElementById("particles-disable");
    // If Particles.JS is enabled, disable
    if (x.className == "null") {
      x.className = "hidden";
      localStorage.setItem("particleState", "hidden")
      localStorage.setItem("particleOff", "far fa-circle")
      localStorage.setItem("particleOn", "fas fa-circle hidden")
      off.className = "far fa-circle";
      on.className = "fas fa-circle hidden";
    // If Particles.JS is disabled, enable
    } else if (x.className == "hidden") {
      x.className = "null";
      localStorage.setItem("particleState", "null")
      localStorage.setItem("particleOff", "far fa-circle hidden")
      localStorage.setItem("particleOn", "fas fa-circle selected")
      off.className = "far fa-circle hidden";
      on.className = "fas fa-circle selected";
    }
  }

// Scroll to top. Utilized by "itshdog.com" in the header
  function scrollToTop() {
    var x = document.getElementById("title");
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }

// Change theme function. Utilized by theme entries in Theme Wrapper
function changeTheme(src, name, obj) {
  // Variables
  var x = document.getElementById("selected");
  var themeTab = document.getElementById("clickButtonTheme");
  // Reset selected theme
  x.id = "";
  document.getElementById("cssTheme").setAttribute("href", src);
  // Set newly clicked object to selected
  obj.id = "selected";
  // Set storage items
  localStorage.setItem("theme", src);
  localStorage.setItem("name", name);
  // Load name, and close theme tab
  themeTab.innerHTML = '<i class="fas fa-palette"></i>'+name;
  setTimeout(themeBlur(), 1000);
}

// Theme Load
window.onload = function() {
  // Variables
  var obj = document.getElementById("cssTheme");
  var x = localStorage.getItem("theme");
  var name = localStorage.getItem("name");
  // If no theme, set as Classic
  if (localStorage.getItem("theme") == null) {
    var x = "themes/classic.css";
  }
  // Set theme
  obj.setAttribute("href", x);
}

// Selected Theme Highlight Load
window.addEventListener('load', function() {
  var all = document.getElementsByClassName("theme-entry");
  var name = localStorage.getItem("name")
  // If no name (new browser) set as Classic
  if (name == null) {
    name = "Classic";
  }
  // Set matching theme as selected
  for (i = 0; i < all.length; i++) {
    if (all[i].innerHTML.toLowerCase() == name.toLowerCase()) {
      all[i].setAttribute('id', "selected");
    }
  }
})

// Search bar for Theme wrapper
function search_theme() {
  let input = document.getElementById('theme-searchbar').value
  input=input.toLowerCase();
  let x = document.getElementsByClassName("theme-entry");

  for (i = 0; i < x.length; i++) {
      if (!x[i].innerHTML.toLocaleLowerCase().includes(input)) {
          x[i].style.display = "none";
      }
      else {
          x[i].style.display = "list-item";
      }
  }
}

// Search bar for Settings wrapper
function search_settings() {
  // Get input
  let input = document.getElementById('settings-searchbar').value
  input = input.toLowerCase();
  let x = document.getElementsByClassName("settings-entry");

  // Display options that match input
  for (i = 0; i < x.length; i++) {
      if (!x[i].innerHTML.toLocaleLowerCase().includes(input)) {
          x[i].style.display = "none";
      }
      else {
          x[i].style.display = "list-item";
      }
  }
}

// Header Open/Close button
function hideButton() {
  // Variables
  var flipped = "scaleX(-1)";
  var regular = "scaleX(1)";
  var closeIcon = document.getElementById("closeIcon")
  // Open Header
  if (document.getElementById("title") == null) {
      document.getElementById("titleHidden").id = "title";
      document.getElementById("header-container").style.width = "100%";
      closeIcon.style.transform = regular;
  // Close Header
  } else {
      document.getElementById("title").id = "titleHidden";
      document.getElementById("header-container").style.width = "3em";
      closeIcon.style.transform = flipped;
  }

  // Header icon wait time
  // For when header is opened/closed with hideButton()
  if (document.getElementById("githubVisible") == null) {
      setTimeout(function() { document.getElementById("githubHidden").id = "githubVisible"; }, 230);
  } else {
      setTimeout(function() { document.getElementById("githubVisible").id = "githubHidden"; }, 10);
  }

  if (document.getElementById("linkedinVisible") == null) {
      setTimeout(function() { document.getElementById("linkedinHidden").id = "linkedinVisible"; }, 230);
  } else {
      setTimeout(function() { document.getElementById("linkedinVisible").id = "linkedinHidden"; }, 10);
  }

  if (document.getElementById("resumeVisible") == null) {
      setTimeout(function() { document.getElementById("resumeHidden").id = "resumeVisible"; }, 230);
  } else {
      setTimeout(function() { document.getElementById("resumeVisible").id = "resumeHidden"; }, 10);
  }
}
  