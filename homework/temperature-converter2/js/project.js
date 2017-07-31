

function convert(degree) {
    
    var temp;
    
    if (degree == 'C') {
        temp = parseFloat($('#c').val()) * 9 / (5 + 32);
        $('#f').val(temp);

    } else {
        temp = (parseFloat($('#f').val()) - 32) * 5 / 9;
        $('#c').val(temp);
       
    }

}	












