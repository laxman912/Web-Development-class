// const boss = document.getElementById('boss');
// boss.innerText='rajkumar';
// console.log(boss); 
window.addEventListener('DOMContentLoaded', () => {
//     const boss = document.getElementById('boss');
//     boss.innerText = 'rajkumar';
//     //console.log("boss");
//     const boxes=document.getElementsByClassName('box');
//     for(let i=0;i<boxes.length;i++){
//         if (i==0)
//     {
// boxes[i].innerText='this is box 1';
//     }
//     console.log(boxes);
// }
const wrapperbox = document.querySelectorAll('.box');
wrapperbox.forEach((box,index)=>{
    if(index==wrapperbox.length -1)
        box.innerText = 'this is wrapper box'
});
})


