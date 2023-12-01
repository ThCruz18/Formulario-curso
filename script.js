function check_form(){
    var nome = document.getElementsByClassName('nome') .value;
    var tel = document.getElementsByClassName('telefone') .value;
    var dtn = document.getElementsByClassName('dataNacimento') .value;
    var opGenero1 = document.getElementsByClassName('rGenero1') .value;
    var opGenero2 = document.getElementsByClassName('rGenero2') .value;
    var opGenero3 = document.getElementsByClassName('rGenero3') .value;
    var endereco = document.getElementsByClassName('address') .value;
    var vaga = document.getElementsByClassName('vaga') .value;

    if(nome==''){
        alert("Preencha seu nome");
        return false;
    }

    if(tel==''){
        alert("Preencha seu telefone");
        return false;
    }

    if(dtn==''){
        alert("Preencha a data");
        return false;
    }
    if(address==0){
        alert("Preencha seu endereço");
        return false;
    }
    if(nome.length==0){
        alert("Preencha seu nome");
        return false;
    }
    return true;
}