main = function() {
  var original = document.getElementById("original").value;
  if (window.localStorage) localStorage.original = original;                                                  //localstorage= funciona como un hash
  //var r = calculate(original);
  //console.log("mostrando r" + r);                                                                               //hace que el javascript sea propio del
  /*var template = document.getElementById("fillTable");
  template=template.innerHTML;                                                                         //programa"dominio", y una vez introducido
  finaltable.innerHTML = items.template(template, {items: r}); */                                                   //el texto se guarda
};

$(document).ready(function () {
  // If the browser supports localStorage and we have some stored data
  if (window.localStorage && localStorage.original) {
    original.value = localStorage.original;

    console.log("llegamos a localstorage"+ original.value);
  }
  $("button").click(main);
});
