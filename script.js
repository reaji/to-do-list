// Create event listener to enter items below
$("#enter").on("click", function(){
  var task = $("#todoItem").val();
  
$("#todoList").append("<div class='task'>" + task + "<div class='x'>&#10006</div></div>");
});

$(document).on("click", ".x", function(){
  $(this).parent().remove();
  
});

$(document).on("click", ".task",function(){
  $(this).toggleClass("done");
  if ($(this).hasClass("done")) {
    $(this).find(".x").html("<div class='x'>✅</div>");

  } else {
    $(this).find(".x").html("<div class='x'>&#10006</div>");
  }
  
  
});
  


// Create event listener to delete items below

// Create event listener to toggle