function toggleMode() {
        const html = document.documentElement

    html.classList.toggle('light') 

//pegar a tag img
const img = document.querySelector("#profile img")
//subistituir a img
if(html.classList.contains('light')) {
//add img light
    img.setAttribute("src", "./assets/avatar.png")
    } else{
//em modo normal manter img
    img.setAttribute("src", "./assets/avatar.png")
    }

}


