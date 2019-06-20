let validador = require('validator');
const formula=document.querySelector("#MyForm");
const bypass=document.querySelector("#ByPassss");

formula.addEventListener('submit', function(x){
    x.preventDefault();
    alert("Enviando Formulario");
})

bypass.addEventListener('click', function(e){
    e.preventDefault();
    console.log(formula);
    alert(formula)
    formula.submit();
})



/*formula.addEventListener("Submit", function(x){
    x.preventDefault();
    Ccards();
});
bypass.addEventListener("click", function(z){
    alert(2);
    document.querySelector("#MyForm").submit();
});*/


function Ccards(){
    let Card=document.querySelector("#inputCard").value;
    console.log(Card);
        if(validador.isCreditCard(Card)){
            alert("El número de tarjeta ingresado no corresponde");
            console.log(validador.isCreditCard(Card));
        };
};






/*
const form = document.querySelector("#caca");

form.addEventListener("submit", function(e){
    e.preventDefault();
    probando();
   
})

function probando(){
    let x = document.querySelector("#formax").value;
    console.log(x);
    console.log(validador.isEmail(x));
}
*/