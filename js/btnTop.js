let btnTop = document.querySelector("#btnTop")

document.addEventListener("scroll", ()=>{
    const posScroll = document.documentElement.scrollTop
    console.log(posScroll)

    const posBtnTop = btnTop.offsetTop
    //console.log(posBtnTop)


    if(posScroll > posBtnTop +50){
        btnTop.classList.add("contBtnTop_JS")
    }else{
        btnTop.classList.remove("contBtnTop_JS")
    }
})