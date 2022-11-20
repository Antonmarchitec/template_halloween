
let contHeader = document.getElementById("contHeader")

document.addEventListener("scroll", () =>{
    let posScroll = document.documentElement.scrollTop
    //console.log(posScroll)

    let posHeader = contHeader.offsetTop
    //console.log(posHeader)

    if(posScroll > posHeader + 100){
        contHeader.classList.add("contHeader_JS")
        contHeader.style.transition = "0.3s linear"
    }else{
        contHeader.classList.remove("contHeader_JS")
        contHeader.style.transition = "0.3s linear"

    }
})



/*let link1 = document.querySelector("#link1")
let link2 = document.querySelector("#link2")
let link3 = document.querySelector("#link3")
let link4 = document.querySelector("#link4")
let link5 = document.querySelector("#link5")

let li1 = document.querySelector("#li1")
let li2 = document.querySelector("#li2")
let li3 = document.querySelector("#li3")
let li4 = document.querySelector("#li4")
let li5 = document.querySelector("#li5")

link1.addEventListener("click", () =>{
    li1.classList.add("contHeader__ul_li_JS")
    li2.classList.remove("contHeader__ul_li_JS")
    li3.classList.remove("contHeader__ul_li_JS")
    li4.classList.remove("contHeader__ul_li_JS")
    li5.classList.remove("contHeader__ul_li_JS")

})


link2.addEventListener("click", () =>{
    li2.classList.add("contHeader__ul_li_JS")
    li1.classList.remove("contHeader__ul_li_JS")
    li3.classList.remove("contHeader__ul_li_JS")
    li4.classList.remove("contHeader__ul_li_JS")
    li5.classList.remove("contHeader__ul_li_JS")
})


link3.addEventListener("click", () =>{
    li3.classList.add("contHeader__ul_li_JS")
    li1.classList.remove("contHeader__ul_li_JS")
    li2.classList.remove("contHeader__ul_li_JS")
    li4.classList.remove("contHeader__ul_li_JS")
    li5.classList.remove("contHeader__ul_li_JS")
})


link4.addEventListener("click", () =>{
    li4.classList.add("contHeader__ul_li_JS")
    li1.classList.remove("contHeader__ul_li_JS")
    li2.classList.remove("contHeader__ul_li_JS")
    li3.classList.remove("contHeader__ul_li_JS")
    li5.classList.remove("contHeader__ul_li_JS")
})


link5.addEventListener("click", () =>{
    li5.classList.add("contHeader__ul_li_JS")
    li1.classList.remove("contHeader__ul_li_JS")
    li2.classList.remove("contHeader__ul_li_JS")
    li3.classList.remove("contHeader__ul_li_JS")
    li4.classList.remove("contHeader__ul_li_JS")
})*/