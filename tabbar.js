function toogleTabs(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  function toogleTabs1(evt, tabName1) {
    var i, tabcontent1, tablinks1;
    tabcontent1 = document.getElementsByClassName("tabcontent1");
    for (i = 0; i < tabcontent1.length; i++) {
      tabcontent1[i].style.display = "none";
    }
    tablinks1 = document.getElementsByClassName("tablinks1");
    for (i = 0; i < tablinks1.length; i++) {
      tablinks1[i].className = tablinks1[i].className.replace(" active", "");
    }
    document.getElementById(tabName1).style.display = "block";
    evt.currentTarget.className += " active";
  }
  function toogleTabs2(evt, tabName2) {
    var i, tabcontent2, tablinks2;
    tabcontent2 = document.getElementsByClassName("form-content");
    for (i = 0; i < tabcontent2.length; i++) {
      tabcontent2[i].style.display = "none";
    }
    tablinks1 = document.getElementsByClassName("tablinks2");
    for (i = 0; i < tablinks1.length; i++) {
      tablinks2[i].className = tablinks2[i].className.replace(" active", "");
    }
    document.getElementById(tabName2).style.display = "block";
    evt.currentTarget.className += " active";
  }
  function myAlert() {
    alert("Please login first ._.");
  }