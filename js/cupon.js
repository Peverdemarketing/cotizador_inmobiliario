document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13)  {

        Swal.fire(
            'Buen trabajo!',
            'Hemos agregado un cupón de descuento del 5% al valor de tu reserva, realiza clic en OK',
            'success'
          )


    
    
    }

});


function cupon(){
    document.getElementById('cupon').innerHTML='Aplicado el cupón de 5% de descuento en tu reserva';
    }





