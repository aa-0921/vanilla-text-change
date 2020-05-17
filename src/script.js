function getValue() {
    // var $formObject = event.target.value;
    // document.getElementById("output").innerHTML = $formObject;


    var $formObject = document.getElementById( "input-form" );
    document.getElementById("output").innerHTML = $formObject.inputForm.value;

}
