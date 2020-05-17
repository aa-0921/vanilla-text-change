
window.onload = function () {
    getValue();
    var $formObject = document.getElementById( "input-form" );
    for( var $i = 0; $i < $formObject.length; $i++ ) {
        $formObject.elements[$i].onkeyup = function(){
            getValue();
        };
        $formObject.elements[$i].onchange = function(){
            getValue();
        };
    }
    document.getElementById( "sampleOutputLength" ).innerHTML = $formObject.length;
}
function getValue() {
    var $formObject = document.getElementById( "input-form" );
    document.getElementById( "sampleOutputName" ).innerHTML = $formObject.formName.value;
}
