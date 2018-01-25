// $("li").click(function(){
//   $(this).toggleClass("completed");
// });
//
// $('span').click(function(){
//   $(this).parent().fadeOut(500, function(){
//     $(this).remove();
//   });
// });


// use 'on' instead of 'click' so jQuery can add listeners to all potential new elements and not just existing elements

// cross off task when clicked
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

// delete task
$("ul").on("click", "span", function(e){
  $(this).parent().fadeOut(600, function(){
    $(this).remove();
  });
  // this prevents 'bubbling', toggleClass('completed') wont also run
  e.stopPropagation();
});

// add task
$("input[type='text']").keypress(function(e){
  // '13' is the js number corresponding with with keyboard key 'enter'
  if(e.which === 13){
    var inputtedTask = $(this).val();
    $(this).val("");
    $("ul").append("<li><span><i class='fa fa-trash'></i></span>" + inputtedTask + "</li>");
  }
});

// display, hide input field
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});
