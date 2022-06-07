    //Programador: Nathan

    //Define quando o timer acabará
    var countDownDate = new Date("Jun 7, 2022 17:22:40").getTime();
    //===========================//

    //Atualiza o timer a cada 1 segundo 
    var x = setInterval(function(){
    //===============================//
    
    //Pega a data de hoje como referencia 
    var now = new Date().getTime();
    //=================================//
    
    //Distancia entre a data final e "hoje"
    var distance = countDownDate - now
    //===================================//

    //Calculos dos timer para: Dia, horas, minutos e segundos
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
    var seconds = Math.floor(distance % (1000 * 60) / 1000);
    //====================================================//

    // Aparecerá o resultado no ID definido no HTML
    document.getElementById("demo").innerHTML = days + "dias " + hours + "horas " + minutes + "minutos " + seconds + "segundos ";
    
    //Texto para quando acabar o timer
    if (distance < 0){
       clearInterval(x);
       document.getElementById("demo").innerHTML = "WHATZAP" 
    }
    }, 1000);
    