$(function(){
	$('#nav li').hover(function(){
		$(this).children('ul').stop(false,true).fadeIn(300);
	},function(){
		$(this).children('ul').stop(false,true).fadeOut(300);
	})
})

function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
    vars[key] = value;
  });
  return vars;
}

var punkt1 = getUrlVars()["punkt_1_columns"];
var punkt2 = getUrlVars()["punkt_2_columns"];
var width1 = getUrlVars()["punkt_1_width"];
var width2 = getUrlVars()["punkt_2_width"];

var items_1 = document.querySelectorAll('.items_1');
for( x = 0 ; x < items_1.length; x++){
	 items_1[x].style.width = width1 +  'px';
};

var demo1 = document.getElementById('demo1');
demo1.style.width = width1*punkt1 + 10 + 'px';

var items_2 = document.querySelectorAll('.items_2');
for( x = 0 ; x < items_2.length; x++){
	 items_2[x].style.width = width2 + 'px';
};

var demo2 = document.getElementById('demo2');
demo2.style.width = width2*punkt2 + 10 + 'px';