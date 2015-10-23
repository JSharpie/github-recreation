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
//footer things
$('body').prepend('<div class="footer"></div>');
$('.footer').append('<nav class="ffnav"></nav>');
$('.ffnav').append('<ul class="fful"></ul>');
$('.fful').append('<li>© 2015 GitHub, Inc.</li>');
$('.fful').append('<li>Terms</li>');
$('.fful').append('<li>Privacy</li>');
$('.fful').append('<li>Security</li>');
$('.fful').append('<li>Contact</li>');
$('.fful').append('<li>Help</li>');
$('.footer').append("<span class = 'octicon octicon-mark-github'></span>");
$('.footer').append('<nav class="fsnav"></nav>');
$('.ffnav').append('<ul class="fsul"></ul>');
$('.fsul').append('<li>Status</li>');
$('.fsul').append('<li>API</li>');
$('.fsul').append('<li>Training</li>');
$('.fsul').append('<li>Shop</li>');
$('.fsul').append('<li>Blog</li>');
$('.fsul').append('<li>About</li>');
$('.fsul').append('<li>Pricing</li>');
//wraps main content in a div
$('body').prepend('<div class="pageWrap"></div>');
//profile page content creation via jquery
$('.pageWrap').append('<div class="profWrap"></div>');
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
    "<div class = 'repoClass'>" +
    "<br /><span class='repoName'>" +
    repoListArr[j].name +
    "</span>" +
    "<span class = 'updateTime'>" +
    moment(repoListArr[j].updated_at).fromNow() +
    "</span>" +
    "<div class = 'rightRepo'>" +
    "<span class='lang'>" +
    repoListArr[j].language +
    "</span>" +
    "<span class = 'octicon octicon-star stargaze'><a href='" +
    repoListArr[j].stargazers_url +
    "'></a>" +
    repoListArr[j].stargazers_count +
    "</span>" +
    "<span class = 'octicon octicon-git-branch forks'><a href ='" +
    repoListArr[j].forks_url +
    "'></a>" +
    repoListArr[j].forks +
    "</span>" +
    "</div>" +
    "</div>"
  );
}
$('.repoList').prepend("<ul class = 'repoNav'></ul>");
$('.repoNav').append("<li>All</li>");
$('.repoNav').append("<li>Public</li>");
$('.repoNav').append("<li>Private</li>");
$('.repoNav').append("<li>Sources</li>");
$('.repoNav').append("<li>Forks</li>");
$('.repoNav').append("<li>Mirrors</li>");
$('.repoList').prepend("<button class = 'btn btn-default' type='button' name='button'>Search</button>");
$('.repoList').prepend("<input class = 'input-width form-control' type='text' name='name' placeholder='Search Repositories' value=''>");
$('.contrib').click(function(){
  $('.repoList').html('');
  $('.repoList').html('filler content');

});
$('.repos').click(function(){
  $('.repoList').html('');
  for(var j = 0; j < repoListArr.length; j++){
    $('.repoList').prepend(
      "<div class = 'repoClass'>" +
      "<br /><span class='repoName'>" +
      repoListArr[j].name +
      "</span>" +
      "<span class = 'updateTime'>" +
      moment(repoListArr[j].updated_at).fromNow() +
      "</span>" +
      "<div class = 'rightRepo'>" +
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
      "</span>" +
      "</div>" +
      "</div>"
    );
  }
  $('.repoList').prepend("<ul class = 'repoNav'></ul>");
  $('.repoNav').append("<li>All</li>");
  $('.repoNav').append("<li>Public</li>");
  $('.repoNav').append("<li>Private</li>");
  $('.repoNav').append("<li>Sources</li>");
  $('.repoNav').append("<li>Forks</li>");
  $('.repoNav').append("<li>Mirrors</li>");
  $('.repoList').prepend("<button class = 'btn btn-default' type='button' name='button'>Search</button>");
  $('.repoList').prepend("<input class = 'input-width form-control' type='text' name='name' placeholder='Search Repositories' value=''>");
});
$('.pubAct').click(function(){
  $('.repoList').html('');
  for(var j = 0; j < eventList.length; j++){
      if(eventList[j].payload.ref === "master"){
      $('.repoList').prepend(
        "<div class = 'pubClass'>" +
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
        moment(eventList[j].created_at).fromNow() +
        "</div>"
      );
    }
    if(eventList[j].payload.ref === null){
      $('.repoList').prepend(
        "<div class = 'pubClass'>" +
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
        moment(eventList[j].created_at).fromNow() +
        "</div>"
      );
    }
    if(eventList[j].payload.ref === "refs/heads/master"){
      $('.repoList').prepend(
        "<div class = 'pubClass'>" +
        "<br />" +
        moment(eventList[j].created_at).fromNow() +
        "<br /><span class = 'octicon octicon-git-commit'></span>" +
        "<span class = 'pUser'>" +
        eventList[j].actor.login +
        "</span>" +
        " pushed to " +
        "<a href='" +
        eventList[j].payload.ref +
        "'>master</a>" +
        " at " +
        eventList[j].repo.name +
        "<br /><img class = 'pushimg' src='" +
        eventList[j].actor.avatar_url +
        "'>" +
        "<span class='octicon octicon-mark-github'></span>" +
        "<a href='" +
        eventList[j].payload.commits[0].url +
        "'>" +
        eventList[j].payload.head.substring(0,7) +
        "</a>" +
        eventList[j].payload.commits[0].message +
        "</div>"
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
