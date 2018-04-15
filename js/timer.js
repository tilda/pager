// thanks alexflipnote

/**
* Update the displayed date and time on the page.
*/
function updateDateAndTime () {
  var timeString = moment().format('LTS');

  document.getElementById('js-time').innerText = timeString;

  // Request animation frame for next update
  requestAnimationFrame(updateDateAndTime);
}

function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if(pair[0] == variable){return pair[1];}
  }
  return(false);
}

// Start updating
moment.locale(getQueryVariable("lang") || navigator.language);
updateDateAndTime();