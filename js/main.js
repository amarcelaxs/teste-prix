$(document).ready(function(){
    var texto = 1;
    var string;
    
    setInterval(function(){
        switch(texto) {
            case 1: string = "Caneta azul foi vendida !!!"; break;
            case 2: string = "Caderno  94 folhas vendido !!!"; break;
            case 3: string = "mouse  vendido !!!"; break;
        }
        
        $('.texto').html(string);
        
        texto != 3 ? texto++ : texto = 1;
    }, 300000);



// Code goes here
var busca = null;
var array = ["Caderno","Mouse","Caneta","compras","vendas"] ;


  $('#entrada').bind('input',function(){
    busca = $(this).val().toLowerCase();
    
    if(busca !== ''){
      var corresponde = false;
      var saida = Array();
      var quantidade = 0;
      for(var key in array){
        
        corresponde = array[key].toLowerCase().indexOf(busca) >= 0;
        if(corresponde){
          saida.push(array[key]);
          quantidade += 1;
        }
      }
      if(quantidade){
        $('#saidaTxt').text('');
        $('#quantidade').html(quantidade+' resultados!<br><br>');
        for(var ind in saida){
           $('#saidaTxt').append("<li>"+saida[ind]+"</li>"+"<br>");
        }
        
      }else{
        $('#quantidade').html('');
        $('#saidaTxt').text('Nenhum resultado...');
      }
    
    }else{
      $('#quantidade').html('');
      $('#saidaTxt').text('Nenhum resultado...');
    }
    
    
    
  });
});

