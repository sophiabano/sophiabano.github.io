$(function(){

});

function ShowVideo(link){
  var toAdd = '<iframe width="800" height="700" src="'+link+'" frameborder="0" allowfullscreen=""></iframe>';
  $('#videoPreviewContent').html(toAdd);
  $('#videoPreview').show();
}

function ClosePreview(){
$('#videoPreview').hide();
}
