
// ### 重要 ####
// student_idにはaから始まる学籍番号を各自入力すること.
var student_id = "";
// ############

var canvas;
var context;

//ユーザ名を引数に与えると、Twitterのつぶやきを取ってくる
function requestTweet(username){

    // 学内用 API制限を回避するためTwitterへのリクエストを1時間保存する
    var url = "http://124.35.44.42:5445/main/tweet?screen_name=" +
    username+"&student_id="+student_id+"&callback=?";

    //学外用 直接Twitterへリクエストする (将来はこちらを使うべき)
    //var url = "https://api.twitter.com/1/statuses/user_timeline.json?screen_name=" +
    //username + "&count=200&callback=?";

    console.log("request to "+url);
    $.getJSON(url, getTweet);
};

//requestTweetがTwitterからデータを受け取ると呼び出される
function getTweet(json){
    for(var i=0; i<json.length; i++){
	var date = new Date(json[i].created_at);
	// つぶやきの文字列をtweetにいれる
	var tweet = json[i].text;
	// つぶやきの作成時(0〜23)を hourにいれる
	var hour = date.getHours();
	console.log("No."+i);
	console.log("つぶやき本文:"+tweet);
	console.log("時間帯:"+hour);
	console.log("--------");

	 var alpha = hour / 23.0;
	 // 色の設定:不透明度をつぶやかれた時間によって
	 context.fillStyle = "rgba(0, 0, 0, "+alpha+")";
	 // 四角形の描画
	 context.fillRect(i+3*i, 0 , 3, 600);

    };
};

$(document).ready(function(){
   canvas = document.getElementById("mycanvas");
   context = canvas.getContext("2d");
   requestTweet("earthquake_jp");
});

