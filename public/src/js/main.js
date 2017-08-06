// Initialize Firebase
var config = {
  apiKey: "AIzaSyBSyOIp__WrJdnWtAUxUi8W319yUD3ICc0",
  authDomain: "hack-2018.firebaseapp.com",
  databaseURL: "https://hack-2018.firebaseio.com",
  projectId: "hack-2018",
  storageBucket: "hack-2018.appspot.com",
  messagingSenderId: "19198448984"
};
firebase.initializeApp(config);


setInterval(cloud1, 60);
setInterval(cloud2, 43);
setInterval(cloud3, 50);
setInterval(cloud4, 20);
setInterval(cloud5, 30);
setInterval(cloud6, 15);

function cloud1() {
	var left = $('.cloud_1').position().left;
	var new_left = left + 1;
	var window_height = window.innerWidth + $('.cloud_1').width();
	if (left >= window_height) {
		$('.cloud_1').css({left: 0 - $('.cloud_1').width()});
	} else{
		$('.cloud_1').css({left: new_left});
	}
}
function cloud2() {
	var left = $('.cloud_2').position().left;
	var new_left = left + 1;
	var window_height = window.innerWidth + $('.cloud_2').width();
	if (left >= window_height) {
		$('.cloud_2').css({left: 0 - $('.cloud_2').width()});
	} else{
		$('.cloud_2').css({left: new_left});
	}
}
function cloud3() {
	var left = $('.cloud_3').position().left;
	var new_left = left + 1;
	var window_height = window.innerWidth + $('.cloud_3').width();
	if (left >= window_height) {
		$('.cloud_3').css({left: 0 - $('.cloud_3').width()});
	} else{
		$('.cloud_3').css({left: new_left});
	}
}
function cloud4() {
	var left = $('.cloud_4').position().left;
	var new_left = left + 1;
	var window_height = window.innerWidth + $('.cloud_4').width();
	if (left >= window_height) {
		$('.cloud_4').css({left: 0 - $('.cloud_4').width()});
	} else{
		$('.cloud_4').css({left: new_left});
	}
}
function cloud5() {
	var left = $('.cloud_5').position().left;
	var new_left = left + 1;
	var window_height = window.innerWidth + $('.cloud_5').width();
	if (left >= window_height) {
		$('.cloud_5').css({left: 0 - $('.cloud_5').width()});
	} else{
		$('.cloud_5').css({left: new_left});
	}
}
function cloud6() {
	var left = $('.cloud_6').position().left;
	var new_left = left + 1;
	var window_height = window.innerWidth + $('.cloud_6').width();
	if (left >= window_height) {
		$('.cloud_6').css({left: 0 - $('.cloud_6').width()});
	} else{
		$('.cloud_6').css({left: new_left});
	}
}