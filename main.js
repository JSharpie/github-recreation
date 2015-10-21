//header creation via jquery
$('body').append('<div class=headWrap></div>');
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
$('.second-ul').append('<li><img class = "navimg" src="' + items.avatar_url + '"><span class = "dropdown"></span></li>');
//wraps main content in a div
$('body').append('<div class=pageWrap></div>');
//profile page content creation via jquery
$('.pageWrap').append('<div class=profWrap></div>');
$('.profWrap').append('<img class = "mainimg" src=' + items.avatar_url + '/>');
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
