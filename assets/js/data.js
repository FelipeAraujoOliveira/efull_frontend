function atualizarData() {
    var agora = new Date();
    var dia = agora.getDate();
    var mes = agora.getMonth() + 1; // Os meses começam do zero
    var ano = agora.getFullYear();
    var hora = agora.getHours();
    var minuto = agora.getMinutes();
    var segundo = agora.getSeconds();
  
    // Formate a data e a hora como desejar
    var dataFormatada = dia + ' / ' + mes + ' / ' + ano + ' ' + hora + ':' + minuto + ':' + segundo;
  
    // Atualize o conteúdo da tag <p> com a data atualizada
    document.getElementById('data').textContent = dataFormatada;
  }
  
  // Atualize a data a cada segundo
  setInterval(atualizarData, 1000);