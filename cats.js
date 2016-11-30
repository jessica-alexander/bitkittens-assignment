$(document).ready(function(){

  $('.summon-cats').on('click', function() {

    $.ajax({
      method:'GET',
      url:' http://bitkittens.herokuapp.com/cats.json',
      dataType: 'json'
    }).done(function (responseData){
      console.log('It works!');
    });
  });


});
