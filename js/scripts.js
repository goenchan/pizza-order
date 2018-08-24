var crustArray = ["Brooklyn Style","Hand Tossed","Crunchy Thin Crust"];

var toppingArray = ["Pepperoni", "Beef", "Ham", "Philly Steak"];

var sizeArray = ["small", "medium", "large", "x-large"];

function Food(type, topping, price) {
  this.type = type;
  this.topping = topping;
  this.price = price;
  this.availalbe =true;
}

function replaceNull(...args) {
    args.forEach(arg =>
    !arg? arg = "None": arg);
}

function textConfirm(crust, topping, size){
  replaceNull(crust, topping, size);
  $(".crust").text(crust);
  $(".topping").text(topping);
  $(".size").text(size);
  // $(".price").text(price);
  $("#confirmation").show();
}

$(document).ready(function(){
  $("#pizza-builder").submit(function(event){
  event.preventDefault();

  var crustInputText = crustArray[parseInt($("#crust").val())]
  console.log("crustInputText"+crustInputText);

  var toppingInputValue =[];
  var toppingInputText =[];

  $("input:checkbox[name=topping]:checked").each(function(){
    toppingInputValue += parseInt($(this).val());
    toppingInputText += toppingArray[parseInt($(this).val())] + " ";
  });

  console.log("toppingInputValue"+toppingInputValue);
  console.log("toppingInputText"+toppingInputText);

  var sizeInputText = sizeArray[parseInt($("input:radio[name=size]:checked").val())];
  console.log("sizeInputText"+sizeInputText);


  // var priceInputText = this.price(...arg);

  textConfirm(crustInputText,toppingInputText,sizeInputText);
  $("#pizza-builder")[0].reset();

  });



// For addtional form
// $("#").submit(function(event){
//   event.preventDefault();
// });

});
