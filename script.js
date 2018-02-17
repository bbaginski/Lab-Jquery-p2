var TableNum = "";
var reservedTables = [];
$('#Resturant').on('click', function(evt){   
    TableNum = $(evt.target).text() ;
    if ($(evt.target).hasClass('available')){
        $("#Pop").fadeIn();
    }
    if ($(evt.target).hasClass('reserved')){
        

    }
});
$('.seating').mouseenter( function(){       
    if ($(this).hasClass('reserved')){   
        $(this).children('.ReservInfo').slideDown();         
    }
});
$('.seating').mouseleave( function(){    
        $('.ReservInfo').slideUp();   
});

$('#Pop').click(function() {    
    $("#Pop").fadeOut();
});

$('#SaveTable').click( function(event){
    event.stopPropagation(); 
});

$('#ResSubmit').click( function(event){
    var name = $('#Rname').val();
    var num = $('#Rtel').val();
    var size = $('#Rparty').val();
    var reserved = {
    name: name,
    number: num,
    size: size
    }
    reservedTables.push(reserved);
    
    $('#seating'+ TableNum).append( `<div class="ReservInfo"><div>Name: ${name}</div><div>Party of: ${size}</div></div>` );
    $('#seating'+ TableNum).removeClass('available');
    $('#seating'+ TableNum).addClass('reserved'); 
    $("#Pop").fadeOut();
});