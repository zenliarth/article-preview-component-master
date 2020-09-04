function clicar() {
    var btn = document.querySelector(".btn-share")
    var img = document.getElementById('imgShareBranco')
    var share = document.querySelector(".share")
    share.style.display = 'flex'
    btn.style.background = 'hsl(217, 19%, 35%)'
    img.src = "/images/share-branco-pequeno.png"
}
function saiu() {
    var btn = document.querySelector(".btn-share")
    var img = document.getElementById('imgShareBranco')
    var share = document.querySelector(".share")
    share.style.display= 'none'
    btn.style.background = 'hsla(211, 51%, 88%, 0.842)'
    img.src = "/images/share-azul.png"
}
