
var cellak = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]


function hello(){
    // while(true){
    //     id = Math.floor(Math.random()*cellak.length)

    //     if(cellak[id]!="asd"){
    //         console.log(id)
    //         document.getElementById(cellak[id]).innerText = "Hello"
    //         console.log(cellak[id])
    //         console.log(cellak)
    //         cellak[id]="asd"
    //         console.log(cellak)
    //         break
    //     }
    
    // }
    
        
    if (cellak.length == 0) {
        cellak = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
        for (elem of document.querySelectorAll("#table td")) {
            elem.innerText="asd"
        }
        //return;
    }
        tombID = Math.floor(Math.random()*cellak.length)
        elemID = cellak[tombID]
        cellak.splice(tombID,1)

        document.querySelector("#c"+elemID).innerText="HELLO"
        console.log(elemID)
        console.log(cellak)
        
    
    }

    
    /*document.getElementById("lehetHello").addEventListener("click", function(event){
   
    document.getElementById("table").classList.add("arnyek")

})*/



