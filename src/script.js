import "./style.css";

// const text = "";
// document.getElementById("text-input").innerHTML = text;

// window.onload = function() {
//   var $formObject = document.getElementById("sampleForm");
//   document.getElementById("sampleOutputName").innerHTML =
//     $formObject.formName.value;
//   var $formObject = document.getElementById("Form");
// };

// function getText(str) {
//   // text = document.forms.text.value;
//   document.getElementById("display-text").innerHTML = str;
// }

// document.getElementById("app").innerHTML = `
// <div id="input-text"></div>
// <form name = "form">
//   <input type="text"  onkeyup="getText(value);">
// </form>
// `;

// function tbox1(){

// str1 = document.form.txtb.value;

// console.log(str1);


// var x = document.getElementById('textid').value;
//   numx = parseInt(x);
//   numx = numx + 1;
//   document.getElementById('textoutput').innerHTML = x;

// };


<script type="text/javascript">
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
    document.getElementById( "sampleOutputArea" ).innerHTML = $formObject.formArea.value;
    document.getElementById( "sampleOutputAge" ).innerHTML = $formObject.formAge.value;
    document.getElementById( "sampleOutputComent" ).innerHTML = $formObject.formComent.value;
}
</script>
