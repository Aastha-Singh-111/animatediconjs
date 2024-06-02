const imgbox = document.querySelector("span");
console.log(imgbox);
const getimg=()=>{
    
    // imgbox.innerHTML="&#xf2cb";
    // imgbox.style.color="green";

setTimeout(() => {
    
    imgbox.innerHTML="&#xf2cb";
    imgbox.style.color="green";
}, 1000);

setTimeout(()=>{
    
    imgbox.innerHTML="&#xf2ca";
    imgbox.style.color="green";

},2000);
setTimeout(()=>{
    
    imgbox.innerHTML="&#xf2c9";
    imgbox.style.color="yellow";

},3000);
setTimeout(()=>{
    
    imgbox.innerHTML="&#xf2c7;";
    imgbox.style.color="red";

},4000);
}


getimg();
setInterval(getimg , 4000);