const palettes = document.querySelectorAll(".palette");

palettes.forEach(palette=>{
    palette.addEventListener('click', ()=>{
        removeActiveClasses();
        palette.classList.add('active');
    })
})

function removeActiveClasses(){
    palettes.forEach(palette=>{
        palette.classList.remove('active');
    })
}