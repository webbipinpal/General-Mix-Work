
'use strict';
$(document).ready(function(){
  fetchContent();
});

const NEWS = "News";

function fetchContent (){
  const baseUrl =  'https://www.url/node/';
  const newsAPIURl = 'https://www.url/en/api/api-news.json?language=en';

  fetch(newsAPIURl,{
    headers:{
      'Accept' : 'application/json'
    }
  }).then(function (result) {
    return result.json();
  }).then(function (content){
    if(content && content.length){

      content.forEach(function (item, index) {
       // console.log({item,index});
        $('#chls-news__item-' + index).removeClass('hidden');
        $('#cn-title-' + index).text (item.title);
        $('#cn-link-' + index).attr(
          'href',baseUrl+item.nid);
        $('#cn-link-' + index).attr(
          'target','_blank');
        let image = '';
        image = item.image;
        $('#cn-tag-' + index).html(
          item.news_category.join(","));
        $('#cn-img-' + index).attr(
          'src',image);

      });

    }

    $('#news').removeClass('hidden');
    $('#loading').addClass('hidden');
  });


}

