function getValue() {
    // var $formObject = document.getElementById( "input-form" );
    var $formObject = event.target;
    document.getElementById("output").innerHTML = $formObject.inputForm.value;
    
}
