$(function() {
  const date = new Date();
  const text = `Hoje, dia ${date.getDate()} de ${date.toLocaleString('pt-br', { month: 'long' })}, estamos finalizando a entrada de novos membros no copy trade da TRION.`;
  
  const $bar = $('.trion-bar');
  const $span = $('<span>').addClass('effect-typed-text');
  const $cursor = $('<span>').addClass('effect-typing-cursor');
  $bar.append($span).append($cursor);
  
  let i = 0;
  const speed = 40;
  
  function typeChar() {
    if (i < text.length) {
      $span.append(text[i]);
      i++;
      setTimeout(typeChar, speed);
    }
  }
  
  typeChar();
});
