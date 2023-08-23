
'use strict';
$(document).ready(function(){
  graduationNews();
});


function graduationNews (){
  const baseUrl =  'https://www.hbku.edu.qa/node/';
  const newsAPIURl = 'https://www.hbku.edu.qa/en/api/graduation-news.json?language=en';

  fetch(newsAPIURl,{
    headers:{
      'Accept' : 'application/json'
    }
  }).then(function (result) {
    return result.json();
  }).then(function (content){
    const template = `<div class="timers1_list" id="gradnews__item-0">
    <a href="$url"
      target="_blank" id="gradnews-link-$nid">
      <div class="timers1__list--image">
        <figure class="ripple-effect border-effect">
          <img id="gradnews-img-$nid" src="$img"
            alt="$title" title="$title" class="img-fluid full-width">
        </figure>
      </div>
      <div class="timers1__list__info">
        <div class="timers1__list--title">
          <h4 id="gradnews-title-0" class="item--title">
          $title
          </h4>
        </div>
        
      </div>
    </a>
  </div>`
    if(content && content.length){
        console.log('test')
      content.forEach(function (item, index) {
       // console.log({item,index});
       let htmlItem = template.replaceAll('$title',item.title,)
                              .replaceAll('$url',baseUrl+item.nid)
                              .replaceAll('$img',item.image)
                              .replaceAll('$nid',item.nid);
       // $('#gradnews__item-' + index).removeClass('hidden');
        // $('#gradnews-title-' + index).text (item.title);
        // $('#gradnews-link-' + index).attr(
        //   'href',baseUrl+item.nid);
        // $('#gradnews-link-' + index).attr(
        //   'target','_blank');
        // let image = '';
        // image = item.image;
        // $('#gradnews-img-' + index).attr(
        //   'src',image);

        $('#news-block').append($(htmlItem));

      });

    }

    $('#hbkugrad-news').removeClass('hidden');
    $('#gradloading').addClass('hidden');
    $('.timers1_list.loading-news').remove()
  });


}

