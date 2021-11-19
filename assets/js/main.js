// @ts-nocheck

$(function () {
  $("[data-toggle='tooltip']").tooltip();
  $("#enviar").click(function () {
    alert("Enviado correctamente");
  });
});

$("h4").dblclick(function(){
  $(this).addClass("red");
});

$("#ct").click(function(){
  $( "#cx" ).toggle(800);
});

$("#ctdos").click(function(){
  $( "#cxdos" ).toggle(800);
});

$("#cttres").click(function(){
  $( "#cxtres" ).toggle(800);
});

