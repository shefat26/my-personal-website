
// const h2 = document.createElement("h2")
// h2.textContent = "This content added by JavaScript";

// document.querySelector("body").appendChild(h2);



const preBook = document.getElementById("prebook");
const seeMore = document.getElementById("seemore");
const joinNow = document.getElementById("joinnow");


preBook.addEventListener("mouseover",()=>{

    preBook.style.backgroundColor = "blue";
    
   
})


preBook.addEventListener("mouseleave",()=>{

    preBook.style.backgroundColor = "rgb(231, 11, 103)";
    
   
})


seeMore.addEventListener("click",()=>{

    seeMore.style.backgroundColor = "green"
 
})


seeMore.addEventListener("mouseleave",()=>{

    seeMore.style.backgroundColor = ""
 
})





