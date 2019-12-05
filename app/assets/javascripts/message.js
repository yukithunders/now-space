$(function(){
  function buildHTML(message){
    if(message.image){
      var html = `<div class="message">
      <div class="message__upper-info">
      <div class="message__upper-info__talker">
      ${message.user_name}
      </div>
      <div class="message__upper-info__date">
      ${message.created_at}
      </div>
      </div>
      <div class="message__text">
      <p class="lower-message__content">
      ${message.content}
      </p>
      <img class="lower-message__image" src="${message.image}" alt="Img 0800">
      </div>
      </div>`
      
    }else{
      var html = `<div class="message">
      <div class="message__upper-info">
      <div class="message__upper-info__talker">
      ${message.user_name}
      </div>
      <div class="message__upper-info__date">
      ${message.created_at}
      </div>
      </div>
      <div class="message__text">
      <p class="lower-message__content">
      ${message.content}
      </p>
      </div>
      </div>`
    }
    return html;
  }
  $('#new_message').on('submit',function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(message){
      var html = buildHTML(message);
      $(".messages").append(html);
      $(".submit-btn").prop('disabled',false);
      $(".input-box__text").val("");
    })
    .fail(function(){
      alert('error');
    })
  })
  console.log("test");
});