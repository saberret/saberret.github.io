var f = document.getElementById("f");
var c = document.getElementById("c");

function convert() {

  var temp;  // Will hold the temperature value
  var conversion; // Used to target the element we're not typing into:

  if (this.id === "c") { // If we're typing into #c...
    conversion = f;          // use #f as target element
    temp = (this.value * 9 / 5) + 32;  // C2F
  } else {
    conversion = c;
    temp = (this.value - 32) * 5 / 9;  // F2C
  }

  // Write the result "as we type" in the other (conversion) field:
  conversion.value = !isNaN(temp) ? parseFloat(temp.toFixed())  : "Cannot Compute";
  // (Above:) if temp input is a number, return the number,  if not/else: "Show  error message"

}

// Assign input listeners to trigger the above function:
f.oninput = convert; 
c.oninput = convert;









