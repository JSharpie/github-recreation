//JSON readings
var repoListArr = _.map(repos, function(item, idx, arr){
  return item;
});
for(var j = 0; j < repoListArr.length; j++){
  if(repoListArr[j].language === null){
    repoListArr[j].language = " ";
  }
}
var eventList = _.map(events, function(item, idx, arr){
  return item;
});
repoListArr.sort(function(a,b){
  return new Date(a.updated_at) - new Date(b.updated_at);
});
eventList.sort(function(a,b){
  return new Date(a.created_at) - new Date(b.created_at);
});
//wraps main content in a div
$('body').prepend('<div class=pageWrap></div>');
//profile page content creation via jquery
$('.pageWrap').append('<div class=profWrap></div>');
$('.profWrap').append('<img src=' + items.avatar_url + '/>');
$('.profWrap').append('<h2 class="fname">' + items.name + '</h2>');
$('.profWrap').append('<h3 class = "sname">' + items.login + '<h3>');
var created = moment(items.created_at);
$('.profWrap').append('<p class = time>Joined on ' + created.format("MMM Do, YYYY") + '</p>');
$('.profWrap').append('<a href=http://github.com/' + items.login + '/followers>' + '<span class = "num">' + items.followers + '</span>followers</a>');
$('.profWrap').append('<a href=http://github.com/stars/' + items.login + '>' + '<span class = "num">' + starred.length + '</span>starred</a>');
$('.profWrap').append('<a href=http://github.com/' + items.login + '/following>' + '<span class = "num">' + items.following + '</span>following</a>');
$('.profWrap').append('<h2>Organizations</h2>');
//main content of the page made with jquery
$('.pageWrap').append('<div class = "contentWrap"></div>');
$('.contentWrap').append('<nav class = content-nav></nav>');
$('.content-nav').append('<ul class = "content-ul nav nav-tabs"></ul>');
$('.content-ul').append('<li class="contrib active"><span class = "octicon octicon-diff-added"></span>Contributions</li>');
$('.content-ul').append('<li class="repos"><span class = "octicon octicon-repo"></span>Repositories</li>');
$('.contentWrap').append('<div class="repoList"></div>');
var time;
$('.content-ul').append('<li class="pubAct"><span class = "octicon octicon-rss"></span>Public Activity</li>');
for(var j = 0; j < repoListArr.length; j++){
  $('.repoList').prepend(
    "<br /><span class='repoName'>" +
    repoListArr[j].name +
    "</span>" +
    "<span class = 'updateTime'>" +
    moment(repoListArr[j].updated_at).fromNow()
    +"</span>" +
    "<span class='lang'>" +
    repoListArr[j].language +
    "</span>" +
    "<span class = 'octicon octicon-star stargaze'><a href='" +
    repoListArr[j].stargazers_url +
    "'</a>" +
    repoListArr[j].stargazers_count +
    "</span>" +
    "<span class = 'octicon octicon-git-branch forks'><a href ='" +
    repoListArr[j].forks_url +
    "'</a>" +
    repoListArr[j].forks +
    "</span>"
  );
}
$('.contrib').click(function(){
  $('.repoList').html('');
  $('.repoList').html('filler content');

});
$('.repos').click(function(){
  $('.repoList').html('');
  for(var j = 0; j < repoListArr.length; j++){
    $('.repoList').prepend(
      "<br /><span class='repoName'>" +
      repoListArr[j].name +
      "</span>" +
      "<span class = 'updateTime'>" +
      moment(repoListArr[j].updated_at).fromNow()
      +"</span>" +
      "<span class='lang'>" +
      repoListArr[j].language +
      "</span>" +
      "<span class = 'octicon octicon-star stargaze'><a href='" +
      repoListArr[j].stargazers_url +
      "'</a>" +
      repoListArr[j].stargazers_count +
      "</span>" +
      "<span class = 'octicon octicon-git-branch forks'><a href ='" +
      repoListArr[j].forks_url +
      "'</a>" +
      repoListArr[j].forks +
      "</span>"
    );
}
});
$('.pubAct').click(function(){
  $('.repoList').html('');
  for(var j = 0; j < eventList.length; j++){
      if(eventList[j].payload.ref === "master"){
      $('.repoList').prepend(
        "<br /><span class = 'octicon octicon-git-branch'></span>" +
        "<span class = 'pUser'>" +
        eventList[j].actor.login +
        "</span>" +
        "<span> created branch </span>" +
        eventList[j].payload.ref +
        " at " +
        "<a href='" +
        eventList[j].repo.url +
        "'>" +
        eventList[j].repo.name +
        "</a>" +
        moment(eventList[j].created_at).fromNow()
      );
    }
    if(eventList[j].payload.ref === null){
      $('.repoList').prepend(
        "<br /><span class = 'octicon octicon-repo'></span>" +
        "<span class = 'pUser'>" +
        eventList[j].actor.login +
        "</span>" +
        "<span> created repository </span>" +
        "<a href='" +
        eventList[j].repo.url +
        "'>" +
        eventList[j].repo.name +
        "</a>" +
        moment(eventList[j].created_at).fromNow()
      );
    }
    if(eventList[j].payload.ref === "refs/heads/master"){
      $('.repoList').prepend(
        "<br />" +
        moment(eventList[j].created_at).fromNow() +
        "<br /><span class = 'octicon octicon-git-commit'></span>" +
        "<span class = 'pUser'>" +
        eventList[j].actor.login +
        "</span>" +
        " pushed to master at " +
        eventList[j].repo.name +
        "<br /><img class = 'pushimg' src='" +
        eventList[j].actor.avatar_url +
        "'>" +
        "<span class='octicon octicon-mark-github'></span>" +
        eventList[j].payload.commits[0].message
      );
    }
    }
});
//header creation via jquery
$('body').prepend('<div class=headWrap></div>');
$('.headWrap').append('<span class = "mega-octicon octicon-mark-github"></span>');
$('.headWrap').append('<input class = search-bar type = text>');
$('.headWrap').append('<nav class = "first-nav"></nav>');
$('.first-nav').append('<ul class = "first-ul"></ul>');
$('.first-ul').append('<li>Pull requests</li>');
$('.first-ul').append('<li>Issues</li>');
$('.first-ul').append('<li>Gist</li>');
$('.headWrap').append('<nav class = "second-nav"></nav>');
$('.second-nav').append('<ul class = "second-ul"></ul>');
$('.second-ul').append('<li><span class= "octicon octicon-bell"></span></li>');
$('.second-ul').append('<li><span class = "octicon octicon-plus"></span><span class = "dropdown"></span></li>');
$('.second-ul').append('<li><img src="' + items.avatar_url + '"><span class = "dropdown"></span></li>');
