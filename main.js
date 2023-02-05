function fazGet(url){
let request = new XMLHttpRequest()
request.open("GET",url,false)
request.send()
return request.responseText
}

let valor = document.getElementById("input");
let texto = "O valor convertido é : ";

function converterDolar(){
   
    if(valor.value > 0){
        valorConversao = document.getElementById("valor");
        valorConversao.value =  parseFloat(valorDolar) * parseFloat(valor.value) ;
        document.getElementById("valor").value = texto + valorConversao.value;
       
    }else{
        alert("Valor abaixo do permitido");
    }

}

function converterEuro(){
   
  if(valor.value > 0){
      valorConversao = document.getElementById("valor");
      valorConversao.value =  parseFloat(valorEuro) * parseFloat(valor.value) ;
      document.getElementById("valor").value = texto + valorConversao.value;
     
  }else{
      alert("Valor abaixo do permitido");
  }

}

function valorDolar(conversao){   
valorDolar = conversao.high;
}

function valorEuro(conversao){
  valorEuro = conversao.high;
  }
  

let dataDolar = fazGet("https://economia.awesomeapi.com.br/last/USD-BRL")
let conversaoDolar = JSON.parse(dataDolar);
const valuesDolar = Object.values(conversaoDolar);
  
  valuesDolar.forEach(element => {
    valorDolar(element);
  });

  let dataEuro = fazGet("https://economia.awesomeapi.com.br/last/EUR-BRL")
  let conversaoEuro = JSON.parse(dataEuro);
  const valuesEuro = Object.values(conversaoEuro);
  valuesEuro.forEach(element => {
    valorEuro(element);
  });
