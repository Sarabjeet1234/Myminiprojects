const result = document.getElementById("result");
const selection = document.querySelector("select");
const insertion = document.createElement("img");
const arrImg = [`https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/19899676/2022/9/12/562cf77d-d4f3-44e9-a7d5-82057b379e091662975073441JeanCafeMenBlueJeanSkinnyFitHeavyFadeJeans1.jpg`,
`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6LVjumnVPlBGM9fXzqST_T_t5Vqm76pqUsw&usqp=CAU`,
`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAeBmrw-dpbH6BfxCPZGBgzRsPIa4_NG8EFw&usqp=CAU`,
`https://www.damensch.com/_next/image?url=https%3A%2F%2Fadn.damensch.com%2Fwp-content%2Fuploads%2F2021%2F06%2FCamo-Grey-1.jpg&w=750&q=75`,
`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq0ny93aThcbd8Jw2N05xlfFZNf8cX5LRT8L53_t88jJ6w5oFTJxKSmhPQ&s=10`,`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-56VJiotlxeNe05qmzdzN2lyapVRTsGK1pw&usqp=CAU`];
insertion.classList.add("setup");
result.appendChild(insertion);

const allOptions = (a,b) => {
result.removeChild(insertion);
insertion.src = arrImg[a];
insertion.style.display = b;
result.appendChild(insertion);
}

selection.addEventListener("change" , () => {
  setTimeout(()=>{
switch(selection.value){
case "Jean" :
allOptions(0,"block");
break;
case "T-shirt":
allOptions(1,"block");
break;
case "Shirt": 
allOptions(2,"block");
break;
case "Boxer":
allOptions(3,"block");
break;
case "Jacket": 
allOptions(4,"block");
break;
case "Select from below" : 
allOptions(5,"none");
}
},1000)
});
