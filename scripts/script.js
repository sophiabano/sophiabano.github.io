$(function(){

});

function ShowVideo(link){
  var toAdd = '<iframe width="800" height="700" src="'+link+'" frameborder="0" allowfullscreen=""></iframe>';
  $('#videoPreviewContent').html(toAdd);
  $('#videoPreview').show();
}

function ShowImage(image){
  console.log(image);
    var toAdd = '<img src="'+image.attr('src')+'"></img>';
    $('#videoPreviewContent').html(toAdd);
    $('#videoPreview').show();
}

function ClosePreview(){
  $('#videoPreviewContent').html("");
  $('#videoPreview').hide();
}
