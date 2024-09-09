var hell = false

window.addEventListener("keypress", function(evt){
    window.alert(evt.key)
}) 

function hello(){
    document.getElementById("lehetHello").innerText = "Hello"
    
    document.getElementById("lehetHello").addEventListener("click", function(event){
   
    document.getElementById("table").classList.add("arnyek")

})
}


