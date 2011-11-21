var canvas;
var context;

//���[�U���������ɗ^����ƁATwitter�̂Ԃ₫������Ă���
function requestTweet(username){
    var url = 'https://api.twitter.com/1/statuses/user_timeline.json?screen_name=' +
	username + '&count=200&callback=?';
    console.log('request to '+url);
    $.getJSON(url, getTweet);
};

//requestTweet��Twitter����f�[�^���󂯎��ƌĂяo�����
function getTweet(json){
    for(var i=0; i<json.length; i++){
	var date = new Date(json[i].created_at);
	// �Ԃ₫�̕������tweet�ɂ����
	var tweet = json[i].text;
	// �Ԃ₫�̍쐬��(0�`23)�� hour�ɂ����
	var hour = date.getHours();
	var alpha = hour / 23.0;
	// �F�̐ݒ�:�s�����x���Ԃ₩�ꂽ���Ԃł����Ă���
	context.fillStyle = 'rgba(0, 0, 0, '+alpha+')';
	// �l�p�`�̕`��
	context.fillRect(i+3*i, 0 , 3, 600);
    };
};

$(document).ready(function(){
   canvas = document.getElementById('mycanvas');
   context = canvas.getContext('2d');
   requestTweet('earthquake_jp');
});

