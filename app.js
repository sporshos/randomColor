const btn = document.getElementById("btn")
document.body.style.backgroundColor ="black";

const getColor = () =>{
    const randomnumber = Math.floor(Math.random()*16777215)
    const randomcode = "#" + randomnumber.toString(16);
    document.body.style.backgroundColor =randomcode;
   const colorcode= document.querySelector("#color-code");
   colorcode.innerHTML= randomcode;
   colorcode.style.color= randomcode;
   btn.style.backgroundColor =randomcode;
   

}

btn.addEventListener("click",
getColor
)