
'use strict';
$(document).ready(function(){
  fetchPublications();
});

function fetchPublications (){
  const baseUrl =  'https://www.url/node/';
  const pubAPIURl = 'https://www.url/en/api/api-publications.json?language=en';

  fetch(pubAPIURl,{
    headers:{
      'Accept' : 'application/json'
    }
  }).then(function (result) {
    return result.json();
  }).then(function (content){
    if(content && content.length){

      content.forEach(function (item, index) {
        $('#cp-title-' + index).text (item.title);
        $('#cp-date-' + index).text (item.publicationdate);
        $('#cp-link-' + index).attr(
          'href', item.publicationlink);
        $('#cp-link-' + index).attr(
          'target','_blank');
      });

    }

    $('#publications').removeClass('im-hidden');
    $('#loadingPub').addClass('hidden');
  });


}

