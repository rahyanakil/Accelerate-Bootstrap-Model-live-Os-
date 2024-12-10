// const toggleFunction =(toggle)=>{
//     const toggleText = document.getElementById("changeHello");
//     toggleText.innerText("Hello From js");
// }


const toggleFunction = () => {
    const toggleText = document.querySelector("h1");
    console.log("button clicked");
    
    
   toggleText.textContent =toggleText.textContent==="Hello from html"?"Hello from js":"Hello from html";
  
};
