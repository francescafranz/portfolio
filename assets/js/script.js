//scalabilità
if (document.documentElement.clientWidth < 768) { 
  document.querySelector("meta[name=viewport]").setAttribute(
        'content', 
        'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0');
}

//menù laterale

  function openmenu(){
    document.getElementById("sidemenu").style.right= "0";
  }

  function closemenu(){
    document.getElementById("sidemenu").style.right = "-240px";
  }