
window.onload = function () {
    getValue();
    var $formObject = document.getElementById( "sampleForm" );
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
    var $formObject = document.getElementById( "sampleForm" );
    document.getElementById( "sampleOutputName" ).innerHTML = $formObject.formName.value;
}
