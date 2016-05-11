$(function() {
  addListeners();
});
    
function addListeners(){
  $(".like").click(function(event){
    makeAJAXRequest.call(this);
    return false;
  });
};

function makeAJAXRequest(){
  var obj = $(this);
  var url = $(this).children("a").attr("href");
  $.post( url, success )
};

function success(data){
  var $thisButton = $(".like-btn[picture_id =" + data["pic_num"] + "]");
  var $thisMessage = $thisButton.parents(".like").children(".likes-message");
  $thisButton.children("span").toggleClass("red-heart").toggleClass("grey-heart");
  $thisMessage.html(data.likes_message)
};