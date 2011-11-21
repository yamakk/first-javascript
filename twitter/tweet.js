var canvas;
var context;

//ユーザ名を引数に与えると、Twitterのつぶやきを取ってくる
function requestTweet(username){
    var url = 'https://api.twitter.com/1/statuses/user_timeline.json?screen_name=' +
	username + '&count=200&callback=?';
    console.log('request to '+url);
    $.getJSON(url, getTweet);
};

//requestTweetがTwitterからデータを受け取ると呼び出される
function getTweet(json){
    for(var i=0; i<json.length; i++){
	var date = new Date(json[i].created_at);
	// つぶやきの文字列をtweetにいれる
	var tweet = json[i].text;
	// つぶやきの作成時(0～23)を hourにいれる
	var hour = date.getHours();
	var alpha = hour / 23.0;
	// 色の設定:不透明度をつぶやかれた時間でかえている
	context.fillStyle = 'rgba(0, 0, 0, '+alpha+')';
	// 四角形の描画
	context.fillRect(i+3*i, 0 , 3, 600);
    };
};

$(document).ready(function(){
   canvas = document.getElementById('mycanvas');
   context = canvas.getContext('2d');
   requestTweet('earthquake_jp');
});

