

function add(points,team){
let homeScore=document.getElementById("home-score")
let guestScore=document.getElementById("guest-score")
let homePanel=document.getElementById("home-panel")
let guestPanel=document.getElementById("guest-panel")

let homeSc=Number(homeScore.innerText)
let guestSc=Number(guestScore.innerText)
console.log(team)

if (team=="home"){
    console.log("Case Team=home, homeSc: "+homeSc + " guestSc: "+guestSc)
    homeSc+=points
    console.log("New homeSc : " +homeSc + " guestSc: "+guestSc)
    if(homeSc>guestSc){
        console.log("Case homeSc>guestSc, homeSc: "+homeSc+" guestSc: "+guestSc)
        homePanel.classList.remove("tie","losing")
        homePanel.classList.add("winning")
        guestPanel.classList.remove("tie","winning")
        guestPanel.classList.add("losing")
    } else if (homeSc==guestSc){
        console.log("Case homeSc=guestSc, homeSc: "+homeSc+" guestSc: "+guestSc)
        homePanel.classList.remove("winning","losing",)
        homePanel.classList.add("tie")
        guestPanel.classList.remove("winning","losing")
        guestPanel.classList.add("tie")
    }
    homeScore.innerText=homeSc

}else if (team=="guest"){
    console.log("Case Team=guest, guestSc: "+guestSc+" homeSc: "+homeSc)
    guestSc+=points
    console.log("New guestSc: "+guestSc+ " homeSc: " +homeSc)
    if(homeSc<guestSc){
        console.log("Case homeSc<guestSc, homeSc: "+homeSc+" guestSc: "+guestSc)
        homePanel.classList.remove("tie","winning")
        homePanel.classList.add("losing")
        guestPanel.classList.remove("tie","losing")
        guestPanel.classList.add("winning")
    } else if (homeSc==guestSc){
        console.log("Case homeS=guestSc, homeSc: " +homeSc+" guestSc: "+guestSc)
        homePanel.classList.remove("winning","losing",)
        homePanel.classList.add("tie")
        guestPanel.classList.remove("winning","losing")
        guestPanel.classList.add("tie")
    }
    guestScore.innerText=guestSc
}



}


