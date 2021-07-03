document.addEventListener("DOMContentLoaded", (event) => {
  //define default resumeIndex value
  let resumeIndex = 1;

  //Call resumeSlider function passing the resumeIndex value
  resumeSlider(resumeIndex);

  //Move index + or - from html values
  function moveDetail(index) {
    resumeSlider((resumeIndex += index));
  }

  //Set resume index based on selectedDetail function when navigating with the dashes
  function selectedDetail(index) {
    resumeSlider((resumeIndex = index));
  }

  //Function to display and move emplloymen details within the slider
  function resumeSlider(index) {
    let i;
    let empDetailItms = document.getElementsByClassName("empDetails");
    let dash = document.getElementsByClassName("dash");

    //Check if index went higher than employment detail array, if it did, reset index to 1 to loop back to the beginning of the array
    if (index > empDetailItms.length) {
      resumeIndex = 1;
      console.log(`Resume Index first IF statement ${resumeIndex} `);
    }

    //Check if index went below 1, if it did, set the index to the array lenth to loop back to the end of the array
    if (index < 1) {
      resumeIndex = empDetailItms.length;
      console.log(`Resume Index second IF ${resumeIndex} `);
    }

    //Hide all employment details within array
    for (i = 0; i < empDetailItms.length; i++) {
      empDetailItms[i].style.display = "none";
      console.log(`Resume Index first FOR loop is ${resumeIndex} `);
    }

    // Remove the .active css class from all dashes using dash array
    for (i = 0; i < dash.length; i++) {
      dash[i].className = dash[i].className.replace(" active", "");
      console.log(`Resume Index second FOR loop is ${resumeIndex} `);
    }

    //Set the disply to block for current selected employment detail
    empDetailItms[resumeIndex - 1].style.display = "block";
    console.log(`Resume Index after empDetailItms ${resumeIndex} `);

    //Add the .active css class representing the currrently selected employment detail
    dash[resumeIndex - 1].className += " active";
    console.log(`Resume Index after Dash ${resumeIndex} `);
  }
});
