document.addEventListener("DOMContentLoaded", function() 
{
    carregaImc();


          carregaAbaixo();
      carregaNormal();
      carregaAcima();
          carregaHorarios();
    carregaIntervalos();
    main_division   = document.getElementById('main'),
    back_button = document.getElementById('back_button');  
  // Adicionado para evitar que o usuário tente fazer um scroll até o final da app.
  main_division.addEventListener('touchmove', function(event) { event.preventDefault(); }, false );
  $("#viewAlarme").hide();

  // Seta a função switch_screen para o botão da barra de tarefas back_button.
  set_click(back_button, function(e) { switch_screen(e.getAttribute('href')); });
  
  // Define a cada um dos botões da home screen a função de callback switch_screen.
  [].forEach.call(document.querySelectorAll("ul.buttons a.switch_screen"), function(el) 
  {
    set_click(el, function(e) { switch_screen(e.getAttribute('href')); });
  });
  
});

set_click(buttonSemana1, function(event)
{
  meuPeso = $("#meuPeso2").val();
  if(meuPeso == '')
  {
    
  }
  else
  {
    localStorage.setItem("meuPeso", meuPeso)
    switch_screen('#viewRelatorio');
  }
});
set_click(buttonSemana2, function(event)
{
    meuPeso2 = $("#meuPeso2").val();
  if(meuPeso2 == '')
  {
    
  }
  else
  {
    localStorage.setItem("meuPeso2", meuPeso2)
    switch_screen('#viewRelatorio');
  }
});
set_click(buttonSemana3, function(event)
{
  meuPeso3 = $("#meuPeso2").val();
  if(meuPeso3 == '')
  {
    
  }
  else
  {
    localStorage.setItem("meuPeso3", meuPeso3)
    switch_screen('#viewRelatorio');
  }
});
set_click(buttonSemana4, function(event)
{
  meuPeso4 = $("#meuPeso2").val();
  if(meuPeso4 == '')
  {
    
  }
  else
  {
    localStorage.setItem("meuPeso4", meuPeso4)
    switch_screen('#viewRelatorio');
  }
});
set_click(buttonSemana5, function(event)
{
    meuPeso5 = $("#meuPeso2").val();
  if(meuPeso5 == '')
  {
    
  }
  else
  {
    localStorage.setItem("meuPeso5", meuPeso5)
    switch_screen('#viewRelatorio');
  }
});

set_click(viewCardapio, function(event)
{
  carregaImc();
});

set_click(viewRelatorio, function(event)
{
  carregaRelatorio();
});

set_click(viewAdmin, function(event)
{
  carregaAbaixo();
  carregaNormal();
  carregaAcima();
});


function carregaRelatorio()
{
    fullDate = new Date()
    twoDigitMonth = ((fullDate.getMonth().length+1) === 1)? (fullDate.getMonth()+1) :  + (fullDate.getMonth()+1);
    currentDate = fullDate.getDate() + "/" + twoDigitMonth;
    currentDate2 = fullDate.getDate() + "/" + twoDigitMonth;
    currentDate3 = fullDate.getDate() + "/" + twoDigitMonth;
    currentDate4 = fullDate.getDate() + "/" + twoDigitMonth;
    currentDate5 = fullDate.getDate() + "/" + twoDigitMonth;
    //$("#contentData1").html("1ª<br />"+currentDate);
    if(localStorage.getItem("meuPeso") == null)
    {
      $("#contentTip1").text("Ainda não definido.")  
    }
    else
    {
      $("#content1").animate({width: localStorage["meuPeso"]})
      $("#contentTip1").text(localStorage["meuPeso"]+'kg em '+currentDate);
      //$('#content1').css('width',localStorage["meuPeso"]*1.5);  
    }    
    if(localStorage.getItem("meuPeso2") == null)
    {
      $("#contentTip2").text("Ainda não definido.")  
    }
    else
    {
      $("#contentTip2").text(localStorage["meuPeso2"]+'kg em '+currentDate2);
      $("#content2").animate({width: localStorage["meuPeso2"]})
      //$('#content2').css('width',localStorage["meuPeso2"]*1.5);
    }
    if(localStorage.getItem("meuPeso3") == null)
    {
      $("#contentTip3").text("Ainda não definido.")  
    }
    else
    {
      $("#contentTip3").text(localStorage["meuPeso3"]+'kg em '+currentDate);
      $("#content3").animate({width: localStorage["meuPeso3"]})
      //$('#content3').css('width',localStorage["meuPeso3"]*1.5);
    }
    if(localStorage.getItem("meuPeso4") == null)
    {
      $("#contentTip4").text("Ainda não definido.")  
    }
    else
    {
      $("#contentTip4").text(localStorage["meuPeso4"]+'kg em '+currentDate);
      $("#content4").animate({width: localStorage["meuPeso4"]})
      //$('#content4').css('width',localStorage["meuPeso4"]*1.5);
    }
    if(localStorage.getItem("meuPeso5") == null)
    {
      $("#contentTip5").text("Ainda não definido.")  
    }
    else
    {
      $("#contentTip5").text(localStorage["meuPeso5"]+'kg em '+currentDate);
      $("#content5").animate({width: localStorage["meuPeso5"]})
      //$('#content5').css('width',localStorage["meuPeso5"]*1.5);   
    }
}




set_click(calculaBtn, function(event) 
{
     meuNome = $("#meuNome").val();
    localStorage.setItem("meuNome", meuNome);
     meuMail = $("#meuMail").val();
    localStorage.setItem("meuMail", meuMail)
    meuPeso = $("#meuPeso").val();
    localStorage.setItem("meuPeso", meuPeso)
    altura = $("#altura").val();
    localStorage.setItem("altura", altura)
    resultadoImc = (parseInt($("#meuPeso").val())/(parseInt($("#altura").val())*parseInt($("#altura").val()))*10000).toFixed(1);
    if(isNaN(resultadoImc)) 
    {
        $("#imcResultado").html('Digite todos os valores requisitados.<p/>');
        $("#imcResultadoImagem").html('<img src="images/plate.png"/>');
        $("#totalImcLabel").hide();
        $("#totalImcLabel").fadeIn(2000);
        $("#totalImcLabel").html("<br><br><br><h8 style='font-size:66px;'>?");    
    }
    else
    {
        $("#cardapioConteudo").html("<p align='center'><h8>Escolha a opção de cardápio abaixo.</h8>");
        $("#totalImcLabel").hide();
        $("#totalImcLabel").fadeIn(2000);
        $("#totalImcLabel").html("O seu índice de massa <br>corporal é de:<br><br><br><h8 style='font-size:76px; color:#fecf23;'>"+resultadoImc);    
    }
    if(resultadoImc <= 18)
    {
        $("#imcResultadoImagem").html('<img src="images/plate.png"/>')
        $("#imcResultado").html('Você está com o peso abaixo do indicado.');
        carregaCardapioAbaixo()
    }
    if(resultadoImc >= 18)
    {
        $("#imcResultadoImagem").html('<img src="images/plate.png""/>')
        $("#imcResultado").html('Você está com o peso normal para sua altura.<p/>');
        carregaCardapioNormal()
    }
    if(resultadoImc >= 25)
    {
        $("#imcResultadoImagem").html('<img src="images/plate.png"/>')
        $("#imcResultado").html('Você está com o peso<br>acima do normal.<p/>');
        carregaCardapioAcima()
    }
});

function carregaImc()
{
  $('#meuNome').val(localStorage["meuNome"]);
  $('#meuMail').val(localStorage["meuMail"]);
  $('#meuPeso').val(localStorage["meuPeso"]);
  $('#altura').val(localStorage["altura"]);
  resultadoImc = (parseInt($("#meuPeso").val())/(parseInt($("#altura").val())*parseInt($("#altura").val()))*10000).toFixed(1);
  if(localStorage.getItem("meuPeso") == null && localStorage.getItem("altura") == null) 
  {
      //carrega cardapios ao iniciar para localstorage
      $("#cardapioConteudo").html("<p align='center'><h8>Antes de consultar os cardápios insira suas medidas em Meus Dados.</h8>");
      localStorage.setItem('cafeAbaixo1Local','2 bananas com 4 colheres de aveia, 1 copo de suco, 1 achocolatado, 2 fatias de pão com doce de frutas light.');
      localStorage.setItem('cafeAbaixo1KcalLocal','520');
      localStorage.setItem('lancheAbaixo1Local','1 barra de cereal, 1 shake de proteina.');
      localStorage.setItem('lancheAbaixo1KcalLocal','350');
      localStorage.setItem('almocoAbaixo1Local','2 conchas de feijão, 2 colheres de arroz, 1 bife grelhado médio, 2 batatas pequena, 1 copo de suco, salada a vontade.');
      localStorage.setItem('almocoAbaixo1KcalLocal','650');
      localStorage.setItem('lancheTardeAbaixo1Local','1 iogurte com 3 colheres de aveia.');
      localStorage.setItem('lancheTardeAbaixo1KcalLocal','450');
      localStorage.setItem('jantaAbaixo1Local','2 bananas com 4 colheres de aveia, 1 copo de suco, 1 achocolatado, 2 fatias de pão com doce de frutas light.');
      localStorage.setItem('jantaAbaixo1KcalLocal','450');
      localStorage.setItem('ceiaAbaixo1Local','Omelete com 4 ovos, 2 colheres de aveia, salsinha, 2 fatias de peito de peru.');
      localStorage.setItem('ceiaAbaixo1KcalLocal','450');
       localStorage.setItem('cafeAbaixo2Local','2 fatias de pão com requeijão, 1 shake de proteina, 2 bananas com 2 colheres de aveia com mel.');
      localStorage.setItem('cafeAbaixo2KcalLocal','450');
      localStorage.setItem('lancheAbaixo2Local','1 shake de proteina (300ml)');
      localStorage.setItem('lancheAbaixo2KcalLocal','350');
      localStorage.setItem('almocoAbaixo2Local','3 colheres de arroz integral, 2 colheres cenoura, 2 colheres de beterraba, 1 bife grelhado, 1 copo de suco.');
      localStorage.setItem('almocoAbaixo2KcalLocal','650');
      localStorage.setItem('lancheTardeAbaixo2Local','1 shake de proteina.');
      localStorage.setItem('lancheTardeAbaixo2KcalLocal','450');
      localStorage.setItem('jantaAbaixo2Local','Omelete com 4 ovos e 3 colheres de aveia, 1 copo de suco de laranja.');
      localStorage.setItem('jantaAbaixo2KcalLocal','450');
      localStorage.setItem('ceiaAbaixo2Local','1 shake de proteina.');
      localStorage.setItem('ceiaAbaixo2KcalLocal','450');
      //cardapios imc normal
       localStorage.setItem('cafeNormal1Local','1 pão francês, 1 fatia de queijo e peito de peru, 1 copo de suco de laranja, 1 banana com 4 colheres de aveia.');
      localStorage.setItem('cafeNormal1KcalLocal','450');
      localStorage.setItem('lancheNormal1Local','1 iogurte 250ml');
      localStorage.setItem('lancheNormal1KcalLocal','350');
      localStorage.setItem('almocoNormal1Local','salada com 8 fatias de tomate e 3 colheres de sopa de palmito, 2 colheres cheia de lasanha a bolonhesa, 1 copo de suco de laranja.');
      localStorage.setItem('almocoNormal1KcalLocal','650');
      localStorage.setItem('lancheTardeNormal1Local','1 pão francês com peito de peru');
      localStorage.setItem('lancheTardeNormal1KcalLocal','450');
      localStorage.setItem('jantaNormal1Local','Verdura crua a vontade, 1 pedaço médio de frango grelhado.');
      localStorage.setItem('jantaNormal1KcalLocal','450');
      localStorage.setItem('ceiaNormal1Local','1 copo de iogurte desnatado.');
      localStorage.setItem('ceiaNormal1KcalLocal','96');
       localStorage.setItem('cafeNormal2Local','1 xicara de café e leite desnatado 2 colheres de acucar demerara. 2 fatias de pão integral, 1 colher de chá de geléia de fruta. 1 fatia média de queijo minas.');
      localStorage.setItem('cafeNormal2KcalLocal','450');
      localStorage.setItem('lancheNormal2Local','1 maça e 2 castanha do pará média.');
      localStorage.setItem('lancheNormal2KcalLocal','150');
      localStorage.setItem('almocoNormal2Local','Verdura crua a vontade, 2 colheres de beterraba cozida. 4 colheres de arroz, 1 concha de feijão, 1 pedaço de carne grande.');
      localStorage.setItem('almocoNormal2KcalLocal','400');
      localStorage.setItem('lancheTardeNormal2Local','1 copo de iogurte desnatado e 2 colheres de sopa de aveia.');
      localStorage.setItem('lancheTardeNormal2KcalLocal','104');
      localStorage.setItem('jantaNormal2Local','Omelete com 2 ovos mais verduras.');
      localStorage.setItem('jantaNormal2KcalLocal','325');
      localStorage.setItem('ceiaNormal2Local','1 banana com 2 colheres de canela.');
      localStorage.setItem('ceiaNormal2KcalLocal','98');
      //cardapios acima do peso
       localStorage.setItem('cafeAcima1Local','2 fatias de pão de forma integral, 1 fatia de peito de presunto, 1 fatia de mussarela, 1 xicara de café com adoçante com leite desnatado.');
      localStorage.setItem('cafeAcima1KcalLocal','320');
      localStorage.setItem('lancheAcima1Local','1 iogurte light.');
      localStorage.setItem('lancheAcima1KcalLocal','80');
      localStorage.setItem('almocoAcima1Local','1 filé de peixe grelhado, 3 colheres de sopa de arroz, 1 concha de feijão, 1 porção de alface, 1 copo de suco de uva.');
      localStorage.setItem('almocoAcima1KcalLocal','400');
      localStorage.setItem('lancheTardeAcima1Local','1 barra de cereal light');
      localStorage.setItem('lancheTardeAcima1KcalLocal','90');
      localStorage.setItem('jantaAcima1Local','1 sanduiche de chester (1 fatia de chesterm 1 fatia de queijo, alface, tomate, 1 colher de sopa maionese light), 1 xicará de chá.');
      localStorage.setItem('jantaAcima1KcalLocal','290');
      localStorage.setItem('ceiaAcima1Local','Copo de suco de laranja antes de dormir.');
      localStorage.setItem('ceiaAcima1KcalLocal','130');
       localStorage.setItem('cafeAcima2Local','1 copo de 300 de fruta light, 1 fatia de pão diet com 2 fatias de peito de peru e 1 de queijo.');
      localStorage.setItem('cafeAcima2KcalLocal','220');
      localStorage.setItem('lancheAcima2Local','1 barra de cereal.');
      localStorage.setItem('lancheAcima2KcalLocal','90');
      localStorage.setItem('almocoAcima2Local','Salada mista com brócolis, milho verde e alface, 1 porção (3 colheres) de lasanha bolonhesa.');
      localStorage.setItem('almocoAcima2KcalLocal','400');
      localStorage.setItem('lancheTardeAcima2Local','2 fatias de pão light, 2 fatias de queijo minas, 2 fatias de peito de peru.');
      localStorage.setItem('lancheTardeAcima2KcalLocal','450');
      localStorage.setItem('jantaAcima2Local','1 filé a parmegiana assado, 4 colheres de sopa de arroz, legumes a vontade (cenoura, brocolis).');
      localStorage.setItem('jantaAcima2KcalLocal','450');
      localStorage.setItem('ceiaAcima2Local','1 laranja.');
      localStorage.setItem('ceiaAcima2KcalLocal','62');
      //$.mobile.changePage("#pageIntro",{transition:"none"});
      //$("#imcResultado").text('Digite os valores.');
      //alert('Digite os valores.')
      //$("#totalImcLabel").text('Digite os valores.');    
      carregaAbaixo();
      carregaNormal();
      carregaAcima();
   }
   else
   {
      $("#totalImcLabel").text("O seu índice de massa corporal é de:"+resultadoImc);    
   }
   if(resultadoImc <= 18)
   {
      // alert('Você está com o meuPeso Baixo do indicado.')
      //$("#imcResultado").text('Você está com o meuPeso abaixo do indicado.');
      carregaCardapioAbaixo()
   }
   if(resultadoImc >= 18)
   {
      //alert('Você está com o meuPeso normal para sua altura.')
      //$("#imcResultado").text('Você está com o meuPeso normal para sua altura.');
      carregaCardapioNormal()
   }
   if(resultadoImc >= 25)
   {
      // alert('Você está com sobremeuPeso.')
      //$("#imcResultado").text('Você está com sobremeuPeso.');
      carregaCardapioAcima()
   }
}

function carregaAbaixo()
{
    $('#cafeAbaixo1').val(localStorage["cafeAbaixo1Local"]);
    $('#cafeAbaixo1Kcal').val(localStorage["cafeAbaixo1KcalLocal"]);
    $('#lancheAbaixo1').val(localStorage["lancheAbaixo1Local"]);
    $('#lancheAbaixo1Kcal').val(localStorage["lancheAbaixo1KcalLocal"]);
    $('#almocoAbaixo1').val(localStorage["almocoAbaixo1Local"]);
    $('#almocoAbaixo1Kcal').val(localStorage["almocoAbaixo1KcalLocal"]);
    $('#lancheTardeAbaixo1').val(localStorage["lancheTardeAbaixo1Local"]);
    $('#lancheTardeAbaixo1Kcal').val(localStorage["lancheTardeAbaixo1KcalLocal"]);
    $('#jantaAbaixo1').val(localStorage["jantaAbaixo1Local"]);
    $('#jantaAbaixo1Kcal').val(localStorage["jantaAbaixo1KcalLocal"]);
    $('#ceiaAbaixo1').val(localStorage["ceiaAbaixo1Local"]);
    $('#ceiaAbaixo1Kcal').val(localStorage["ceiaAbaixo1KcalLocal"]);
///////////////////////////////////////////////////////////////////////////////////////////
    $('#cafeAbaixo2').val(localStorage["cafeAbaixo2Local"]);
    $('#cafeAbaixo2Kcal').val(localStorage["cafeAbaixo2KcalLocal"]);
    $('#lancheAbaixo2').val(localStorage["lancheAbaixo2Local"]);
    $('#lancheAbaixo2Kcal').val(localStorage["lancheAbaixo2KcalLocal"]);
    $('#almocoAbaixo2').val(localStorage["almocoAbaixo2Local"]);
    $('#almocoAbaixo2Kcal').val(localStorage["almocoAbaixo2KcalLocal"]);
    $('#lancheTardeAbaixo2').val(localStorage["lancheTardeAbaixo2Local"]);
    $('#lancheTardeAbaixo2Kcal').val(localStorage["lancheTardeAbaixo2KcalLocal"]);
    $('#jantaAbaixo2').val(localStorage["jantaAbaixo2Local"]);
    $('#jantaAbaixo2Kcal').val(localStorage["jantaAbaixo2KcalLocal"]);
    $('#ceiaAbaixo2').val(localStorage["ceiaAbaixo2Local"]);
    $('#ceiaAbaixo2Kcal').val(localStorage["ceiaAbaixo2KcalLocal"]);     
}
///////////////////////////////////////////////////////////////////////////////////////////
function carregaCardapioAbaixo()
{
     //$('#alarmeCardapio').text(localStorage["cafeAbaixo1Local"]);  
     set_click(viewCardapio1, function(event)
{
  $("#cardapioConteudo").html("<p align='center'><h8>Cardápio 1</h8><br/>escolha uma refeição acima.");
  set_click(viewCardapioCafe, function(event) 
{
   $("#cardapioConteudo").html("<h8><img src='images/1.png'>Café da Manhã</h8><br/>"+localStorage["cafeAbaixo1Local"]+"<br/><br/><h8>"+localStorage["cafeAbaixo1KcalLocal"]+" kCal");
});

set_click(viewCardapioLancheManha, function(event) 
{
   $("#cardapioConteudo").html("<h8><img src='images/1.png'>Lanche da Manhã</h8><br/>"+localStorage["lancheAbaixo1Local"]+"<br/><br/><h8>"+localStorage["lancheAbaixo1KcalLocal"]+" kCal");
});

set_click(viewCardapioAlmoco, function(event) 
{
      $("#cardapioConteudo").html("<h8><img src='images/1.png'>Almoço</h8><br/>"+localStorage["almocoAbaixo1Local"]+"<br/><br/><h8>"+localStorage["almocoAbaixo1KcalLocal"]+" kCal");
});

set_click(viewCardapioLancheTarde, function(event) 
{
      $("#cardapioConteudo").html("<h8><img src='images/1.png'>Lanche da Tarde</h8><br/>"+localStorage["lancheTardeAbaixo1Local"]+"<br/><br/><h8>"+localStorage["lancheTardeAbaixo1KcalLocal"]+" kCal");
});

set_click(viewCardapioJanta, function(event) 
{
      $("#cardapioConteudo").html("<h8><img src='images/1.png'>Janta</h8><br/>"+localStorage["jantaAbaixo1Local"]+"<br/><br/><h8>"+localStorage["jantaAbaixo1KcalLocal"]+" kCal");
});

set_click(viewCardapioCeia, function(event) 
{
      $("#cardapioConteudo").html("<h8><img src='images/1.png'>Ceia</h8><br/>"+localStorage["ceiaAbaixo1Local"]+"<br/><br/><h8>"+localStorage["ceiaAbaixo1KcalLocal"]+" kCal");
});
});

///////////////////////////////////////////////////////////////////////////////////////////
set_click(viewCardapio2, function(event)
{
  $("#cardapioConteudo").html("<p align='center'><h8>Cardápio 2</h8><br/>escolha uma refeição acima.");
  set_click(viewCardapioCafe, function(event) 
{
   $("#cardapioConteudo").html("<h8><img src='images/1.png'>Café da Manhã</h8><br/>"+localStorage["cafeAbaixo2Local"]+"<br/><br/><h8>"+localStorage["cafeAbaixo2KcalLocal"]+" kCal");
});

set_click(viewCardapioLancheManha, function(event) 
{
   $("#cardapioConteudo").html("<h8><img src='images/1.png'>Lanche da Manhã</h8><br/>"+localStorage["lancheAbaixo2Local"]+"<br/><br/><h8>"+localStorage["lancheAbaixo2KcalLocal"]+" kCal");
});

set_click(viewCardapioAlmoco, function(event) 
{
      $("#cardapioConteudo").html("<h8><img src='images/1.png'>Almoço</h8><br/>"+localStorage["almocoAbaixo2Local"]+"<br/><br/><h8>"+localStorage["almocoAbaixo2KcalLocal"]+" kCal");
});

set_click(viewCardapioLancheTarde, function(event) 
{
      $("#cardapioConteudo").html("<h8><img src='images/1.png'>Lanche da Tarde</h8><br/>"+localStorage["lancheTardeAbaixo2Local"]+"<br/><br/><h8>"+localStorage["lancheTardeAbaixo2KcalLocal"]+" kCal");
});

set_click(viewCardapioJanta, function(event) 
{
      $("#cardapioConteudo").html("<h8><img src='images/1.png'>Janta</h8><br/>"+localStorage["jantaAbaixo2Local"]+"<br/><br/><h8>"+localStorage["jantaAbaixo2KcalLocal"]+" kCal");
});

set_click(viewCardapioCeia, function(event) 
{
      $("#cardapioConteudo").html("<h8><img src='images/1.png'>Ceia</h8><br/>"+localStorage["ceiaAbaixo2Local"]+"<br/><br/><h8>"+localStorage["ceiaAbaixo2KcalLocal"]+" kCal");
});
});
///////////////////////////////////////////////////////////////////////////////////////////
     
}
///////////////////////////////////////////////////////////////////////////////////////////
function carregaNormal()
{
    $('#cafeNormal1').val(localStorage["cafeNormal1Local"]);
    $('#cafeNormal1Kcal').val(localStorage["cafeNormal1KcalLocal"]);
    $('#lancheNormal1').val(localStorage["lancheNormal1Local"]);
    $('#lancheNormal1Kcal').val(localStorage["lancheNormal1KcalLocal"]);
    $('#almocoNormal1').val(localStorage["almocoNormal1Local"]);
    $('#almocoNormal1Kcal').val(localStorage["almocoNormal1KcalLocal"]);
    $('#lancheTardeNormal1').val(localStorage["lancheTardeNormal1Local"]);
    $('#lancheTardeNormal1Kcal').val(localStorage["lancheTardeNormal1KcalLocal"]);
    $('#jantaNormal1').val(localStorage["jantaNormal1Local"]);
    $('#jantaNormal1Kcal').val(localStorage["jantaNormal1KcalLocal"]);
    $('#ceiaNormal1').val(localStorage["ceiaNormal1Local"]);
    $('#ceiaNormal1Kcal').val(localStorage["ceiaNormal1KcalLocal"]);
///////////////////////////////////////////////////////////////////////////////////////////
    $('#cafeNormal2').val(localStorage["cafeNormal2Local"]);
    $('#cafeNormal2Kcal').val(localStorage["cafeNormal2KcalLocal"]);
    $('#lancheNormal2').val(localStorage["lancheNormal2Local"]);
    $('#lancheNormal2Kcal').val(localStorage["lancheNormal2KcalLocal"]);
    $('#almocoNormal2').val(localStorage["almocoNormal2Local"]);
    $('#almocoNormal2Kcal').val(localStorage["almocoNormal2KcalLocal"]);
    $('#lancheTardeNormal2').val(localStorage["lancheTardeNormal2Local"]);
    $('#lancheTardeNormal2Kcal').val(localStorage["lancheTardeNormal2KcalLocal"]);
    $('#jantaNormal2').val(localStorage["jantaNormal2Local"]);
    $('#jantaNormal2Kcal').val(localStorage["jantaNormal2KcalLocal"]);
    $('#ceiaNormal2').val(localStorage["ceiaNormal2Local"]);
    $('#ceiaNormal2Kcal').val(localStorage["ceiaNormal2KcalLocal"]);     
}
///////////////////////////////////////////////////////////////////////////////////////////
function carregaCardapioNormal()
{
     //$('#alarmeCardapio').text(localStorage["cafeNormal1Local"]);  
set_click(viewCardapio1, function(event)
{
  $("#viewCardapio2").css({ opacity: 0.4 });
  $("#viewCardapio1").css({ opacity: 1.0 });
  $("#cardapioConteudo").html("<p align='center'><h8>Cardápio 1</h8><br/>escolha uma refeição acima.");
  set_click(viewCardapioCafe, function(event) 
{
   $("#cardapioConteudo").html("<h8><img src='images/1.png'>Café da Manhã</h8><br/>"+localStorage["cafeNormal1Local"]+"<br/><br/><h8>"+localStorage["cafeNormal1KcalLocal"]+" kCal");
});

set_click(viewCardapioLancheManha, function(event) 
{
   $("#cardapioConteudo").html("<h8><img src='images/1.png'>Lanche da Manhã</h8><br/>"+localStorage["lancheNormal1Local"]+"<br/><br/><h8>"+localStorage["lancheNormal1KcalLocal"]+" kCal");
});

set_click(viewCardapioAlmoco, function(event) 
{
      $("#cardapioConteudo").html("<h8><img src='images/1.png'>Almoço</h8><br/>"+localStorage["almocoNormal1Local"]+"<br/><br/><h8>"+localStorage["almocoNormal1KcalLocal"]+" kCal");
});

set_click(viewCardapioLancheTarde, function(event) 
{
      $("#cardapioConteudo").html("<h8><img src='images/1.png'>Lanche da Tarde</h8><br/>"+localStorage["lancheTardeNormal1Local"]+"<br/><br/><h8>"+localStorage["lancheTardeNormal1KcalLocal"]+" kCal");
});

set_click(viewCardapioJanta, function(event) 
{
      $("#cardapioConteudo").html("<h8><img src='images/1.png'>Janta</h8><br/>"+localStorage["jantaNormal1Local"]+"<br/><br/><h8>"+localStorage["jantaNormal1KcalLocal"]+" kCal");
});

set_click(viewCardapioCeia, function(event) 
{
      $("#cardapioConteudo").html("<h8><img src='images/1.png'>Ceia</h8><br/>"+localStorage["ceiaNormal1Local"]+"<br/><br/><h8>"+localStorage["ceiaNormal1KcalLocal"]+" kCal");
});
});

///////////////////////////////////////////////////////////////////////////////////////////
set_click(viewCardapio2, function(event)
{
 $("#viewCardapio1").css({ opacity: 0.4 });
  $("#viewCardapio2").css({ opacity: 1.0 });
  $("#cardapioConteudo").html("<p align='center'><h8>Cardápio 2</h8><br/>escolha uma refeição acima.");
  set_click(viewCardapioCafe, function(event) 
{
   $("#cardapioConteudo").html("<h8><img src='images/1.png'>Café da Manhã</h8><br/>"+localStorage["cafeNormal2Local"]+"<br/><br/><h8>"+localStorage["cafeNormal2KcalLocal"]+" kCal");
});

set_click(viewCardapioLancheManha, function(event) 
{
   $("#cardapioConteudo").html("<h8><img src='images/1.png'>Lanche da Manhã</h8><br/>"+localStorage["lancheNormal2Local"]+"<br/><br/><h8>"+localStorage["lancheNormal2KcalLocal"]+" kCal");
});

set_click(viewCardapioAlmoco, function(event) 
{
      $("#cardapioConteudo").html("<h8><img src='images/1.png'>Almoço</h8><br/>"+localStorage["almocoNormal2Local"]+"<br/><br/><h8>"+localStorage["almocoNormal2KcalLocal"]+" kCal");
});

set_click(viewCardapioLancheTarde, function(event) 
{
      $("#cardapioConteudo").html("<h8><img src='images/1.png'>Lanche da Tarde</h8><br/>"+localStorage["lancheTardeNormal2Local"]+"<br/><br/><h8>"+localStorage["lancheTardeNormal2KcalLocal"]+" kCal");
});

set_click(viewCardapioJanta, function(event) 
{
      $("#cardapioConteudo").html("<h8><img src='images/1.png'>Janta</h8><br/>"+localStorage["jantaNormal2Local"]+"<br/><br/><h8>"+localStorage["jantaNormal2KcalLocal"]+" kCal");
});

set_click(viewCardapioCeia, function(event) 
{
      $("#cardapioConteudo").html("<h8><img src='images/1.png'>Ceia</h8><br/>"+localStorage["ceiaNormal2Local"]+"<br/><br/><h8>"+localStorage["ceiaNormal2KcalLocal"]+" kCal");
});
});
///////////////////////////////////////////////////////////////////////////////////////////
}
///////////////////////////////////////////////////////////////////////////////////////////
function carregaAcima()
{
    $('#cafeAcima1').val(localStorage["cafeAcima1Local"]);
    $('#cafeAcima1Kcal').val(localStorage["cafeAcima1KcalLocal"]);
    $('#lancheAcima1').val(localStorage["lancheAcima1Local"]);
    $('#lancheAcima1Kcal').val(localStorage["lancheAcima1KcalLocal"]);
    $('#almocoAcima1').val(localStorage["almocoAcima1Local"]);
    $('#almocoAcima1Kcal').val(localStorage["almocoAcima1KcalLocal"]);
    $('#lancheTardeAcima1').val(localStorage["lancheTardeAcima1Local"]);
    $('#lancheTardeAcima1Kcal').val(localStorage["lancheTardeAcima1KcalLocal"]);
    $('#jantaAcima1').val(localStorage["jantaAcima1Local"]);
    $('#jantaAcima1Kcal').val(localStorage["jantaAcima1KcalLocal"]);
    $('#ceiaAcima1').val(localStorage["ceiaAcima1Local"]);
    $('#ceiaAcima1Kcal').val(localStorage["ceiaAcima1KcalLocal"]);
///////////////////////////////////////////////////////////////////////////////////////////
    $('#cafeAcima2').val(localStorage["cafeAcima2Local"]);
    $('#cafeAcima2Kcal').val(localStorage["cafeAcima2KcalLocal"]);
    $('#lancheAcima2').val(localStorage["lancheAcima2Local"]);
    $('#lancheAcima2Kcal').val(localStorage["lancheAcima2KcalLocal"]);
    $('#almocoAcima2').val(localStorage["almocoAcima2Local"]);
    $('#almocoAcima2Kcal').val(localStorage["almocoAcima2KcalLocal"]);
    $('#lancheTardeAcima2').val(localStorage["lancheTardeAcima2Local"]);
    $('#lancheTardeAcima2Kcal').val(localStorage["lancheTardeAcima2KcalLocal"]);
    $('#jantaAcima2').val(localStorage["jantaAcima2Local"]);
    $('#jantaAcima2Kcal').val(localStorage["jantaAcima2KcalLocal"]);
    $('#ceiaAcima2').val(localStorage["ceiaAcima2Local"]);
    $('#ceiaAcima2Kcal').val(localStorage["ceiaAcima2KcalLocal"]);     
}
///////////////////////////////////////////////////////////////////////////////////////////
function carregaCardapioAcima()
{
  set_click(viewCardapio1, function(event)
  {
    $("#cardapioConteudo").html("<p align='center'><h8>Cardápio 1</h8><br/>escolha uma refeição acima.");
    
    set_click(viewCardapioCafe, function(event) 
    {
      $("#cardapioConteudo").html("<h8><img src='images/1.png'>Café da Manhã</h8><br/>"+localStorage["cafeAcima1Local"]+"<br/><br/><h8>"+localStorage["cafeAcima1KcalLocal"]+" kCal");
    });
    set_click(viewCardapioLancheManha, function(event) 
    {
      $("#cardapioConteudo").html("<h8><img src='images/1.png'>Lanche da Manhã</h8><br/>"+localStorage["lancheAcima1Local"]+"<br/><br/><h8>"+localStorage["lancheAcima1KcalLocal"]+" kCal");
    });

set_click(viewCardapioAlmoco, function(event) 
{
      $("#cardapioConteudo").html("<h8><img src='images/1.png'>Almoço</h8><br/>"+localStorage["almocoAcima1Local"]+"<br/><br/><h8>"+localStorage["almocoAcima1KcalLocal"]+" kCal");
});

set_click(viewCardapioLancheTarde, function(event) 
{
      $("#cardapioConteudo").html("<h8><img src='images/1.png'>Lanche da Tarde</h8><br/>"+localStorage["lancheTardeAcima1Local"]+"<br/><br/><h8>"+localStorage["lancheTardeAcima1KcalLocal"]+" kCal");
});

set_click(viewCardapioJanta, function(event) 
{
      $("#cardapioConteudo").html("<h8><img src='images/1.png'>Janta</h8><br/>"+localStorage["jantaAcima1Local"]+"<br/><br/><h8>"+localStorage["jantaAcima1KcalLocal"]+" kCal");
});

set_click(viewCardapioCeia, function(event) 
{
      $("#cardapioConteudo").html("<h8><img src='images/1.png'>Ceia</h8><br/>"+localStorage["ceiaAcima1Local"]+"<br/><br/><h8>"+localStorage["ceiaAcima1KcalLocal"]+" kCal");
});
});

///////////////////////////////////////////////////////////////////////////////////////////
set_click(viewCardapio2, function(event)
{
  $("#cardapioConteudo").html("<p align='center'><h8>Cardápio 2</h8><br/>escolha uma refeição acima.");
  set_click(viewCardapioCafe, function(event) 
{
   $("#cardapioConteudo").html("<h8><img src='images/1.png'>Café da Manhã</h8><br/>"+localStorage["cafeAcima2Local"]+"<br/><br/><h8>"+localStorage["cafeAcima2KcalLocal"]+" kCal");
});

set_click(viewCardapioLancheManha, function(event) 
{
   $("#cardapioConteudo").html("<h8><img src='images/1.png'>Lanche da Manhã</h8><br/>"+localStorage["lancheAcima2Local"]+"<br/><br/><h8>"+localStorage["lancheAcima2KcalLocal"]+" kCal");
});

set_click(viewCardapioAlmoco, function(event) 
{
      $("#cardapioConteudo").html("<h8><img src='images/1.png'>Almoço</h8><br/>"+localStorage["almocoAcima2Local"]+"<br/><br/><h8>"+localStorage["almocoAcima2KcalLocal"]+" kCal");
});

set_click(viewCardapioLancheTarde, function(event) 
{
      $("#cardapioConteudo").html("<h8><img src='images/1.png'>Lanche da Tarde</h8><br/>"+localStorage["lancheTardeAcima2Local"]+"<br/><br/><h8>"+localStorage["lancheTardeAcima2KcalLocal"]+" kCal");
});

set_click(viewCardapioJanta, function(event) 
{
      $("#cardapioConteudo").html("<h8><img src='images/1.png'>Janta</h8><br/>"+localStorage["jantaAcima2Local"]+"<br/><br/><h8>"+localStorage["jantaAcima2KcalLocal"]+" kCal");
});

set_click(viewCardapioCeia, function(event) 
{
      $("#cardapioConteudo").html("<h8><img src='images/1.png'>Ceia</h8><br/>"+localStorage["ceiaAcima2Local"]+"<br/><br/><h8>"+localStorage["ceiaAcima2KcalLocal"]+" kCal");
});
});
///////////////////////////////////////////////////////////////////////////////////////////
}
///////////////////////////////////////////////////////////////////////////////////////////
set_click(addCardapioAbaixo1_1, function(event) 
{
  cafeAbaixo1Local = $("#cafeAbaixo1").val();
  localStorage.setItem("cafeAbaixo1Local", cafeAbaixo1Local)
  cafeAbaixo1KcalLocal = $("#cafeAbaixo1Kcal").val();
  localStorage.setItem("cafeAbaixo1KcalLocal", cafeAbaixo1KcalLocal);
  carregaAbaixo();
});

set_click(addCardapioAbaixo1_2, function(event) 
{
  var lancheAbaixo1Local = $("#lancheAbaixo1").val();
  localStorage.setItem("lancheAbaixo1Local", lancheAbaixo1Local);
  var lancheAbaixo1KcalLocal = $("#lancheAbaixo1Kcal").val();
  localStorage.setItem("lancheAbaixo1KcalLocal", lancheAbaixo1KcalLocal);
  carregaAbaixo();
});

set_click(addCardapioAbaixo1_3, function(event) 
{
  almocoAbaixo1Local = $("#almocoAbaixo1").val();
  localStorage.setItem("almocoAbaixo1Local", almocoAbaixo1Local);
  almocoAbaixo1KcalLocal = $("#almocoAbaixo1Kcal").val();
  localStorage.setItem("almocoAbaixo1KcalLocal", almocoAbaixo1KcalLocal);
  carregaAbaixo();
});

set_click(addCardapioAbaixo1_4, function(event) 
{
  lancheTardeAbaixo1Local = $("#lancheTardeAbaixo1").val();
  localStorage.setItem("lancheTardeAbaixo1Local", lancheTardeAbaixo1Local);
  lancheTardeAbaixo1KcalLocal = $("#lancheTardeAbaixo1Kcal").val();
  localStorage.setItem("lancheTardeAbaixo1KcalLocal", lancheTardeAbaixo1KcalLocal);
  carregaAbaixo();
});

set_click(addCardapioAbaixo1_5, function(event) 
{
  jantaAbaixo1Local = $("#jantaAbaixo1").val();
  localStorage.setItem("jantaAbaixo1Local", jantaAbaixo1Local);
  jantaAbaixo1KcalLocal = $("#jantaAbaixo1Kcal").val();
  localStorage.setItem("jantaAbaixo1KcalLocal", jantaAbaixo1KcalLocal);
  carregaAbaixo();
});

set_click(addCardapioAbaixo1_6, function(event) 
{
  ceiaAbaixo1Local = $("#ceiaAbaixo1").val();
  localStorage.setItem("ceiaAbaixo1Local", ceiaAbaixo1Local);
  ceiaAbaixo1KcalLocal = $("#ceiaAbaixo1Kcal").val();
  localStorage.setItem("ceiaAbaixo1KcalLocal", ceiaAbaixo1KcalLocal);
  carregaAbaixo();
});

///////////////////////////////////////////////////////////////////////////////////////////

set_click(addCardapioAbaixo2_1, function(event) 
{
  cafeAbaixo2Local = $("#cafeAbaixo2").val();
  localStorage.setItem("cafeAbaixo2Local", cafeAbaixo2Local)
  cafeAbaixo2KcalLocal = $("#cafeAbaixo2Kcal").val();
  localStorage.setItem("cafeAbaixo2KcalLocal", cafeAbaixo2KcalLocal);
  carregaAbaixo();
});

set_click(addCardapioAbaixo2_2, function(event) 
{
  var lancheAbaixo2Local = $("#lancheAbaixo2").val();
  localStorage.setItem("lancheAbaixo2Local", lancheAbaixo2Local);
  var lancheAbaixo2KcalLocal = $("#lancheAbaixo2Kcal").val();
  localStorage.setItem("lancheAbaixo2KcalLocal", lancheAbaixo2KcalLocal);
  carregaAbaixo();
});

set_click(addCardapioAbaixo2_3, function(event) 
{
  almocoAbaixo2Local = $("#almocoAbaixo2").val();
  localStorage.setItem("almocoAbaixo2Local", almocoAbaixo2Local);
  almocoAbaixo2KcalLocal = $("#almocoAbaixo2Kcal").val();
  localStorage.setItem("almocoAbaixo2KcalLocal", almocoAbaixo2KcalLocal);
  carregaAbaixo();
});

set_click(addCardapioAbaixo2_4, function(event) 
{
  lancheTardeAbaixo2Local = $("#lancheTardeAbaixo2").val();
  localStorage.setItem("lancheTardeAbaixo2Local", lancheTardeAbaixo2Local);
  lancheTardeAbaixo2KcalLocal = $("#lancheTardeAbaixo2Kcal").val();
  localStorage.setItem("lancheTardeAbaixo2KcalLocal", lancheTardeAbaixo2KcalLocal);
  carregaAbaixo();
});

set_click(addCardapioAbaixo2_5, function(event) 
{
  jantaAbaixo2Local = $("#jantaAbaixo2").val();
  localStorage.setItem("jantaAbaixo2Local", jantaAbaixo2Local);
  jantaAbaixo2KcalLocal = $("#jantaAbaixo2Kcal").val();
  localStorage.setItem("jantaAbaixo2KcalLocal", jantaAbaixo2KcalLocal);
  carregaAbaixo();
});

set_click(addCardapioAbaixo2_6, function(event) 
{
  ceiaAbaixo2Local = $("#ceiaAbaixo2").val();
  localStorage.setItem("ceiaAbaixo2Local", ceiaAbaixo2Local);
  ceiaAbaixo2KcalLocal = $("#ceiaAbaixo2Kcal").val();
  localStorage.setItem("ceiaAbaixo2KcalLocal", ceiaAbaixo2KcalLocal);
  carregaAbaixo();
});

///////////////////////////////////////////////////////////////////////////////////////////

set_click(addCardapioNormal1_1, function(event) 
{
  cafeNormal1Local = $("#cafeNormal1").val();
  localStorage.setItem("cafeNormal1Local", cafeNormal1Local)
  cafeNormal1KcalLocal = $("#cafeNormal1Kcal").val();
  localStorage.setItem("cafeNormal1KcalLocal", cafeNormal1KcalLocal);
  carregaNormal();
});

set_click(addCardapioNormal1_2, function(event) 
{
  var lancheNormal1Local = $("#lancheNormal1").val();
  localStorage.setItem("lancheNormal1Local", lancheNormal1Local);
  var lancheNormal1KcalLocal = $("#lancheNormal1Kcal").val();
  localStorage.setItem("lancheNormal1KcalLocal", lancheNormal1KcalLocal);
  carregaNormal();
});

set_click(addCardapioNormal1_3, function(event) 
{
  almocoNormal1Local = $("#almocoNormal1").val();
  localStorage.setItem("almocoNormal1Local", almocoNormal1Local);
  almocoNormal1KcalLocal = $("#almocoNormal1Kcal").val();
  localStorage.setItem("almocoNormal1KcalLocal", almocoNormal1KcalLocal);
  carregaNormal();
});

set_click(addCardapioNormal1_4, function(event) 
{
  lancheTardeNormal1Local = $("#lancheTardeNormal1").val();
  localStorage.setItem("lancheTardeNormal1Local", lancheTardeNormal1Local);
  lancheTardeNormal1KcalLocal = $("#lancheTardeNormal1Kcal").val();
  localStorage.setItem("lancheTardeNormal1KcalLocal", lancheTardeNormal1KcalLocal);
  carregaNormal();
});

set_click(addCardapioNormal1_5, function(event) 
{
  jantaNormal1Local = $("#jantaNormal1").val();
  localStorage.setItem("jantaNormal1Local", jantaNormal1Local);
  jantaNormal1KcalLocal = $("#jantaNormal1Kcal").val();
  localStorage.setItem("jantaNormal1KcalLocal", jantaNormal1KcalLocal);
  carregaNormal();
});

set_click(addCardapioNormal1_6, function(event) 
{
  ceiaNormal1Local = $("#ceiaNormal1").val();
  localStorage.setItem("ceiaNormal1Local", ceiaNormal1Local);
  ceiaNormal1KcalLocal = $("#ceiaNormal1Kcal").val();
  localStorage.setItem("ceiaNormal1KcalLocal", ceiaNormal1KcalLocal);
  carregaNormal();
});

///////////////////////////////////////////////////////////////////////////////////////////

set_click(addCardapioNormal2_1, function(event) 
{
  cafeNormal2Local = $("#cafeNormal2").val();
  localStorage.setItem("cafeNormal2Local", cafeNormal2Local)
  cafeNormal2KcalLocal = $("#cafeNormal2Kcal").val();
  localStorage.setItem("cafeNormal2KcalLocal", cafeNormal2KcalLocal);
  carregaNormal();
});

set_click(addCardapioNormal2_2, function(event) 
{
  var lancheNormal2Local = $("#lancheNormal2").val();
  localStorage.setItem("lancheNormal2Local", lancheNormal2Local);
  var lancheNormal2KcalLocal = $("#lancheNormal2Kcal").val();
  localStorage.setItem("lancheNormal2KcalLocal", lancheNormal2KcalLocal);
  carregaNormal();
});

set_click(addCardapioNormal2_3, function(event) 
{
  almocoNormal2Local = $("#almocoNormal2").val();
  localStorage.setItem("almocoNormal2Local", almocoNormal2Local);
  almocoNormal2KcalLocal = $("#almocoNormal2Kcal").val();
  localStorage.setItem("almocoNormal2KcalLocal", almocoNormal2KcalLocal);
  carregaNormal();
});

set_click(addCardapioNormal2_4, function(event) 
{
  lancheTardeNormal2Local = $("#lancheTardeNormal2").val();
  localStorage.setItem("lancheTardeNormal2Local", lancheTardeNormal2Local);
  lancheTardeNormal2KcalLocal = $("#lancheTardeNormal2Kcal").val();
  localStorage.setItem("lancheTardeNormal2KcalLocal", lancheTardeNormal2KcalLocal);
  carregaNormal();
});

set_click(addCardapioNormal2_5, function(event) 
{
  jantaNormal2Local = $("#jantaNormal2").val();
  localStorage.setItem("jantaNormal2Local", jantaNormal2Local);
  jantaNormal2KcalLocal = $("#jantaNormal2Kcal").val();
  localStorage.setItem("jantaNormal2KcalLocal", jantaNormal2KcalLocal);
  carregaNormal();
});

set_click(addCardapioNormal2_6, function(event) 
{
  ceiaNormal2Local = $("#ceiaNormal2").val();
  localStorage.setItem("ceiaNormal2Local", ceiaNormal2Local);
  ceiaNormal2KcalLocal = $("#ceiaNormal2Kcal").val();
  localStorage.setItem("ceiaNormal2KcalLocal", ceiaNormal2KcalLocal);
  carregaNormal();
});

///////////////////////////////////////////////////////////////////////////////////////////
set_click(addCardapioAcima1_1, function(event) 
{
  cafeAcima1Local = $("#cafeAcima1").val();
  localStorage.setItem("cafeAcima1Local", cafeAcima1Local)
  cafeAcima1KcalLocal = $("#cafeAcima1Kcal").val();
  localStorage.setItem("cafeAcima1KcalLocal", cafeAcima1KcalLocal);
  carregaAcima();
});

set_click(addCardapioAcima1_2, function(event) 
{
  var lancheAcima1Local = $("#lancheAcima1").val();
  localStorage.setItem("lancheAcima1Local", lancheAcima1Local);
  var lancheAcima1KcalLocal = $("#lancheAcima1Kcal").val();
  localStorage.setItem("lancheAcima1KcalLocal", lancheAcima1KcalLocal);
  carregaAcima();
});

set_click(addCardapioAcima1_3, function(event) 
{
  almocoAcima1Local = $("#almocoAcima1").val();
  localStorage.setItem("almocoAcima1Local", almocoAcima1Local);
  almocoAcima1KcalLocal = $("#almocoAcima1Kcal").val();
  localStorage.setItem("almocoAcima1KcalLocal", almocoAcima1KcalLocal);
  carregaAcima();
});

set_click(addCardapioAcima1_4, function(event) 
{
  lancheTardeAcima1Local = $("#lancheTardeAcima1").val();
  localStorage.setItem("lancheTardeAcima1Local", lancheTardeAcima1Local);
  lancheTardeAcima1KcalLocal = $("#lancheTardeAcima1Kcal").val();
  localStorage.setItem("lancheTardeAcima1KcalLocal", lancheTardeAcima1KcalLocal);
  carregaAcima();
});

set_click(addCardapioAcima1_5, function(event) 
{
  jantaAcima1Local = $("#jantaAcima1").val();
  localStorage.setItem("jantaAcima1Local", jantaAcima1Local);
  jantaAcima1KcalLocal = $("#jantaAcima1Kcal").val();
  localStorage.setItem("jantaAcima1KcalLocal", jantaAcima1KcalLocal);
  carregaAcima();
});

set_click(addCardapioAcima1_6, function(event) 
{
  ceiaAcima1Local = $("#ceiaAcima1").val();
  localStorage.setItem("ceiaAcima1Local", ceiaAcima1Local);
  ceiaAcima1KcalLocal = $("#ceiaAcima1Kcal").val();
  localStorage.setItem("ceiaAcima1KcalLocal", ceiaAcima1KcalLocal);
  carregaAcima();
});

///////////////////////////////////////////////////////////////////////////////////////////

set_click(addCardapioAcima2_1, function(event) 
{
  cafeAcima2Local = $("#cafeAcima2").val();
  localStorage.setItem("cafeAcima2Local", cafeAcima2Local)
  cafeAcima2KcalLocal = $("#cafeAcima2Kcal").val();
  localStorage.setItem("cafeAcima2KcalLocal", cafeAcima2KcalLocal);
  carregaAcima();
});

set_click(addCardapioAcima2_2, function(event) 
{
  var lancheAcima2Local = $("#lancheAcima2").val();
  localStorage.setItem("lancheAcima2Local", lancheAcima2Local);
  var lancheAcima2KcalLocal = $("#lancheAcima2Kcal").val();
  localStorage.setItem("lancheAcima2KcalLocal", lancheAcima2KcalLocal);
  carregaAcima();
});

set_click(addCardapioAcima2_3, function(event) 
{
  almocoAcima2Local = $("#almocoAcima2").val();
  localStorage.setItem("almocoAcima2Local", almocoAcima2Local);
  almocoAcima2KcalLocal = $("#almocoAcima2Kcal").val();
  localStorage.setItem("almocoAcima2KcalLocal", almocoAcima2KcalLocal);
  carregaAcima();
});

set_click(addCardapioAcima2_4, function(event) 
{
  lancheTardeAcima2Local = $("#lancheTardeAcima2").val();
  localStorage.setItem("lancheTardeAcima2Local", lancheTardeAcima2Local);
  lancheTardeAcima2KcalLocal = $("#lancheTardeAcima2Kcal").val();
  localStorage.setItem("lancheTardeAcima2KcalLocal", lancheTardeAcima2KcalLocal);
  carregaAcima();
});

set_click(addCardapioAcima2_5, function(event) 
{
  jantaAcima2Local = $("#jantaAcima2").val();
  localStorage.setItem("jantaAcima2Local", jantaAcima2Local);
  jantaAcima2KcalLocal = $("#jantaAcima2Kcal").val();
  localStorage.setItem("jantaAcima2KcalLocal", jantaAcima2KcalLocal);
  carregaAcima();
});

set_click(addCardapioAcima2_6, function(event) 
{
  ceiaAcima2Local = $("#ceiaAcima2").val();
  localStorage.setItem("ceiaAcima2Local", ceiaAcima2Local);
  ceiaAcima2KcalLocal = $("#ceiaAcima2Kcal").val();
  localStorage.setItem("ceiaAcima2KcalLocal", ceiaAcima2KcalLocal);
  carregaAcima();
});

///////////////////////////////////////////////////////////////////////////////////////////
function viewNotification()
{
    setInterval(switch_screen('#viewAlarme'), 10000);
    //switch_screen('#viewAlarme');
}

function carregaIntervalos()
{
  intCafe = setInterval(updateClock, 2000); 
  intLancheManha = setInterval(updateClock1, 2000); 
  intAlmoco = setInterval(updateClock2, 2000); 
  intLancheTarde = setInterval(updateClock3, 2000); 
  intJanta = setInterval(updateClock4, 2000); 
  intCeia = setInterval(updateClock5, 2000); 
}

function carregaHorarios()
{

  $('#horaCafe').val(localStorage["horaCafe"]);
  $('#minutoCafe').val(localStorage["minutoCafe"]);


  $('#horaLancheManha').val(localStorage["horaLancheManha"]);
  $('#minutoLancheManha').val(localStorage["minutoLancheManha"]);


  $('#horaAlmoco').val(localStorage["horaAlmoco"]);
  $('#minutoAlmoco').val(localStorage["minutoAlmoco"]);


  $('#horaLancheTarde').val(localStorage["horaLancheTarde"]);
  $('#minutoLancheTarde').val(localStorage["minutoLancheTarde"]);


  $('#horaJanta').val(localStorage["horaJanta"]);
  $('#minutoJanta').val(localStorage["minutoJanta"]);


  $('#horaCeia').val(localStorage["horaCeia"]);
  $('#minutoCeia').val(localStorage["minutoCeia"]);

}

function playBeep() {
        navigator.notification.beep(1);
    }


set_click(addToHorarios, function(event)
{
  clearInterval(intCafe);
  clearInterval(intLancheManha);
  clearInterval(intAlmoco);
  clearInterval(intLancheTarde);
  clearInterval(intJanta);
  clearInterval(intCeia);

  horaCafe = $("#horaCafe").val();
  localStorage.setItem("horaCafe", horaCafe)
  minutoCafe = $("#minutoCafe").val();
  localStorage.setItem("minutoCafe", minutoCafe);

    horaLancheManha = $("#horaLancheManha").val();
  localStorage.setItem("horaLancheManha", horaLancheManha)
  minutoLancheManha = $("#minutoLancheManha").val();
  localStorage.setItem("minutoLancheManha", minutoLancheManha);

    horaAlmoco = $("#horaAlmoco").val();
  localStorage.setItem("horaAlmoco", horaAlmoco)
  minutoAlmoco = $("#minutoAlmoco").val();
  localStorage.setItem("minutoAlmoco", minutoAlmoco);

    horaLancheTarde = $("#horaLancheTarde").val();
  localStorage.setItem("horaLancheTarde", horaLancheTarde)
  minutoLancheTarde = $("#minutoLancheTarde").val();
  localStorage.setItem("minutoLancheTarde", minutoLancheTarde);

    horaJanta = $("#horaJanta").val();
  localStorage.setItem("horaJanta", horaJanta)
  minutoJanta = $("#minutoJanta").val();
  localStorage.setItem("minutoJanta", minutoJanta);

    horaCeia = $("#horaCeia").val();
  localStorage.setItem("horaCeia", horaCeia)
  minutoCeia = $("#minutoCeia").val();
  localStorage.setItem("minutoCeia", minutoCeia);

  carregaHorarios();
  carregaIntervalos();  
});





function updateClock()
{
  var currentTime = new Date();
  var currentHours = currentTime.getHours();
  var currentMinutes = currentTime.getMinutes();
  var currentSeconds = currentTime.getSeconds();
  
  if(currentHours == localStorage.getItem("horaCafe")  && currentMinutes == localStorage.getItem("minutoCafe"))
  {
    clearInterval(intCafe)
    switch_screen('#home');
    $("#viewAlarme").hide();
    $("#viewAlarme").fadeIn(2000);
    $("#viewAlarme").fadeOut(10000);
    //var newDiv = $('#viewAlarme').css({position: 'absolute', left: '50px', top: '100px'}).appendTo($('body'));
    //newDiv.fadeOut(5000);

    $('#notificationTitle').text('Hora do Café');
    $('#alarmeCardapio').text('Acesse a guia cardápios e navegue pelas opções disponíveis.');
  }
};

function updateClock1()
{
  var currentTime = new Date();
  var currentHours = currentTime.getHours();
  var currentMinutes = currentTime.getMinutes();
  var currentSeconds = currentTime.getSeconds();
  if(currentHours == localStorage.getItem("horaLancheManha")  && currentMinutes == localStorage.getItem("minutoLancheManha"))
  {
    clearInterval(intLancheManha)

    switch_screen('#home');
    $("#viewAlarme").hide();
    $("#viewAlarme").fadeIn(2000);
    $("#viewAlarme").fadeOut(10000);
    //var newDiv = $('#viewAlarme').css({position: 'absolute', left: '50px', top: '100px'}).appendTo($('body'));
    //newDiv.fadeOut(5000);
    $('#notificationTitle').text('Hora do Lanche');
    $('#alarmeCardapio').text('Acesse a guia cardápios e navegue pelas opções disponíveis.');

  }
};

function updateClock2()
{
  var currentTime = new Date();
  var currentHours = currentTime.getHours();
  var currentMinutes = currentTime.getMinutes();
  var currentSeconds = currentTime.getSeconds();
  if(currentHours == localStorage.getItem("horaAlmoco")  && currentMinutes == localStorage.getItem("minutoAlmoco"))
  {
    clearInterval(intAlmoco)
    
    switch_screen('#home');
    $("#viewAlarme").hide();
    $("#viewAlarme").fadeIn(2000);
    $("#viewAlarme").fadeOut(10000);
    //var newDiv = $('#viewAlarme').css({position: 'absolute', left: '50px', top: '100px'}).appendTo($('body'));
    //newDiv.fadeOut(5000);
    $('#notificationTitle').text('Hora do Almoço');
    $('#alarmeCardapio').text('Acesse a guia cardápios e navegue pelas opções disponíveis.');

  }
};

function updateClock3()
{
  var currentTime = new Date();
  var currentHours = currentTime.getHours();
  var currentMinutes = currentTime.getMinutes();
  var currentSeconds = currentTime.getSeconds();
  if(currentHours == localStorage.getItem("horaLancheTarde")  && currentMinutes == localStorage.getItem("minutoLancheTarde"))
  {
    clearInterval(intLancheTarde)
    
    switch_screen('#home');
    $("#viewAlarme").hide();
    $("#viewAlarme").fadeIn(2000);
    $("#viewAlarme").fadeOut(10000);
    //var newDiv = $('#viewAlarme').css({position: 'absolute', left: '50px', top: '100px'}).appendTo($('body'));
    //newDiv.fadeOut(5000);
    $('#notificationTitle').text('Hora do Lanche');
    $('#alarmeCardapio').text('Acesse a guia cardápios e navegue pelas opções disponíveis.');

  }
};

function updateClock4()
{
  var currentTime = new Date();
  var currentHours = currentTime.getHours();
  var currentMinutes = currentTime.getMinutes();
  var currentSeconds = currentTime.getSeconds();
  if(currentHours == localStorage.getItem("horaJanta")  && currentMinutes == localStorage.getItem("minutoJanta"))
  {
    clearInterval(intJanta)
    
    switch_screen('#home');
    $("#viewAlarme").hide();
    $("#viewAlarme").fadeIn(2000);
    $("#viewAlarme").fadeOut(10000);
    //var newDiv = $('#viewAlarme').css({position: 'absolute', left: '50px', top: '100px'}).appendTo($('body'));
    //newDiv.fadeOut(5000);
    $('#notificationTitle').text('Hora da Janta');
    $('#alarmeCardapio').text('Acesse a guia cardápios e navegue pelas opções disponíveis.');

  }
};

function updateClock5()
{
  var currentTime = new Date();
  var currentHours = currentTime.getHours();
  var currentMinutes = currentTime.getMinutes();
  var currentSeconds = currentTime.getSeconds();
  if(currentHours == localStorage.getItem("horaCeia")  && currentMinutes == localStorage.getItem("minutoCeia"))
  {
    clearInterval(intCeia)
    
    switch_screen('#home');
    $("#viewAlarme").hide();
    $("#viewAlarme").fadeIn(2000);
    $("#viewAlarme").fadeOut(10000);
    //var newDiv = $('#viewAlarme').css({position: 'absolute', left: '50px', top: '100px'}).appendTo($('body'));
    //newDiv.fadeOut(5000);
    $('#notificationTitle').text('Hora da Ceia');
    $('#alarmeCardapio').text('Acesse a guia cardápios e navegue pelas opções disponíveis.');

  }
};