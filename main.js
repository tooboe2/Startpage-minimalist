var pesquisar = document.getElementById('pesquisar');
pesquisar.addEventListener("keydown", (e) =>{
    if(e.keyCode == 13){
        var termos = pesquisar.value;
        window.open(`https://www.google.com/search?q=${termos}`);
        pesquisar.value = "";
    }
})