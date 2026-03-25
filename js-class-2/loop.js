for ( let i = 1; i<=10;i++){
   let ans = 2*i
    console.log("2 X ", i, "=", ans);
}

for (let j=1;j<=20;j++){
    if(j == 3){
        continue;
    }
    if (j>=15){
        break;
    }
    console.log(j);
}