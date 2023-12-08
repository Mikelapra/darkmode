//Declarar variables

const box =document.querySelector(".box")

//Al clickar ("addEventListener" usando evento "click") se ejecuta 
//.classList.toggle. Lo que hace es agregar el class "darkMode" 
//en el elemento donde está .box y en el elemento "body" en el HTML. 
//De esta manera, se ejecutarán las CSS de la class "darkMode" 
// para .box y body. 

box.addEventListener("click", () =>{
    box.classList.toggle("darkMode"); 
    document.body.classList.toggle("darkMode")
} )
