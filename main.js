$(document).ready(function() {
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const enderecoImgNova = $('#imgNova').val();
        const novaLinha = $('<li style="display: none"></li>');
        $(`<img src="${enderecoImgNova}" />`).appendTo(novaLinha);
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoImgNova}" target="_blank" title="Ver imagem em tamanho real">
                Ver magem em tamanho real
                </a>
            </div>`
        ).appendTo(novaLinha);
        $(novaLinha).appendTo('ul');
        $(novaLinha).fadeIn(1000);
        $('#imgNova').val('');

    })
})