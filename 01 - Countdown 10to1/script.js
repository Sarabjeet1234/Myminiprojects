let count = 10;
const bodyy = document.body.style;
  const counter = document.getElementById("counter");
 const countering = () => {
   if (count > 0) {
   counter.innerHTML = count;
   count = count - 1;
   if (count == 10){
   bodyy.backgroundColor = "#8B0000";
   } else if (count == 9){
   bodyy.backgroundColor = "#483D8B";
   } else if (count == 8){
   bodyy.backgroundColor = "#2F4F4F";
   } else if (count == 7){
   bodyy.backgroundColor = "#696969";
   } else if (count == 6){
   bodyy.backgroundColor = "#B22222";
   } else if (count == 5){
   bodyy.backgroundColor = "#DAA520";
   } else if (count == 4){
   bodyy.backgroundColor = "#8B7355";
   } else if (count == 3){
   bodyy.backgroundColor = "#003399";
   } else if (count == 2){
   bodyy.backgroundColor = "#333399";
   } else if (count == 1){
   bodyy.backgroundColor = "#993366";
   } else if (count == 0){
   bodyy.backgroundColor = "#CC9966";
   }
   } else {
   counter.innerHTML = `<style>body{background-color:#ffffff!important;}</style><div style='font-size:3rem;text-align:center;color:#000000;'>Wanna start again?<button onclick='location.reload()'>Click Here</button></div>`;
   }
   counter.style.color = "#fff";
   counter.style.fontSize = "10rem";
   counter.style.position = "absolute";
   counter.style.top = "50%";
   counter.style.left = "50%";
   counter.style.transform = "translate(-50%,-50%)";
 }
   setInterval(countering,1000);

</script>
