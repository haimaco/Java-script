const btn= document.querySelector ("button");
const input = document.querySelector("input");

let imgList= [];
btn.addEventListener("click",() =>{
for (let i =0; i< input.value; i++){
    const img=document.createElement("img")
    img.src = "./smily.png";
    img.style.width = "50px";
    input.parentElement.nextElementSibling.append(img);
    imgList.push(img);
}
});
