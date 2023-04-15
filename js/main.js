

const send_button = document.getElementById("send-button");
const clear_button = document.getElementById("clear-button");


send_button.addEventListener("click", function(){
    var nome = document.form_biglietto.name.value;
    var km = document.form_biglietto.km.value;
    var eta = document.form_biglietto.eta.options[document.form_biglietto.eta.selectedIndex].value;
    km = parseInt(km);
    console.log(nome);
    console.log(km);
    console.log(eta);

    if(nome == ""){
        alert("Nome non inserito")
    }
    if(isNaN(km)){
        alert("Numero km non inserito")
    }
    if(eta == "not-selected"){
        alert("Età non selezionata");
    }else{
        let price = km * 0.21;
        if(eta == "under18"){
            price *= 0.8;
        }else if(eta == "over65"){
            price *= 0.6;
        }
        price = price.toFixed(2);
        console.log("Prezzo:  " + price);
    }

})

clear_button.addEventListener("click", function(){
    document.form_biglietto.name.value = "";
    document.form_biglietto.km.value = "1";
    document.form_biglietto.eta.options.selectedIndex = 0;
})