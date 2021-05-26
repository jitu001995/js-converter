document.getElementById("kgsInput").
addEventListener("input",e=>{
    let kgs=e.target.value;
    document.getElementById("lbsOutput")
    .innerHTML=kgs*2.205;
})


document.getElementById("feetInput").
addEventListener("input",e=>{
    let feet=e.target.value;
    document.getElementById("cmsOutput")
    .innerHTML=feet*30.48;
})

document.getElementById("calciusInput").
addEventListener("input",e=>{
    let calcius=e.target.value;
    document.getElementById("farenOutput")
    .innerHTML=(calcius*1.8)+32;
})