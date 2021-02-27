$('.owl-carousel').owlCarousel({
    loop: true, //este item ativa o loop do efeito carrosel, se colocar false ele fica desabilidado
    margin:10, //este item aumenta a margem das imagens
    nav:false, //é o botao de navegação que aparece embaixo da imagem <>
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})