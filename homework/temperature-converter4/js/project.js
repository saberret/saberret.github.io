function convertTemp() {

 var c = document.getElementById('c') 
 var f = document.getElementById('f')

   if (c.value != '') {
   
    f.value = Math.round(c.value * 9 / 5 + 32);

    c.value = '';   // Clear the value for Celsius

   } else  {
   
    c.value = Math.round((f.value - 32) * 5 / 9);
   
    f.value = '';  // Clear the value for Fahrenheit

 }

}




