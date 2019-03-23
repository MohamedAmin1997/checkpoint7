$("#und").click(function(){
  $("#txt").toggleClass("underline");
});


$("#bo").click(function(){
  $("#txt").toggleClass("bold") ;
})

$("#it").click(function(){
  $("#txt").toggleClass("italic");
});

$("#police").change(function(e){
  //console.log(e);
  var fontFamily= e.target.value;
  console.log(fontFamily);
  $("#txt").css("font-family",fontFamily);
})
$("#num").change(function(e){
  var fontSize= e.target.value;
  //console.log(fontSize);
  $("#txt").css("font-size",fontSize);
})
