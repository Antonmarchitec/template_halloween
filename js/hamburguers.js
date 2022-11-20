 //ESTE DOCUMENTO FUE CREADO EN EL VIDEO
  
  
  // Look for .hamburger
  //var contEnlaces = document.getElementById("menuenlaces");
  let hamburger = document.querySelector(".hamburger");
  // On click
  hamburger.addEventListener("click", ()=> {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    // Do something else, like open/close menu
  });




  //PERSONALIZACION
  let btnRes = document.querySelector("#btnRes")
  let contHeader__ul = document.querySelector("#contHeader__ul")

  btnRes.addEventListener("click", ()=>{
    contHeader__ul.classList.toggle("contHeader__ul_JS")
  })

