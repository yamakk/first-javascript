
function draw(){
    // index.htmlの中の id="canvas"と書かれた要素を取得する
    var canvas = document.getElementById('canvas');
    // 2Dで描画するためのオブジェクトを取得する
    var context = canvas.getContext('2d');

    // contextに四角形(Rect)を描画する (x, y, w, h)
    context.fillRect(10, 20, 30, 40);
};

// 関数drawを呼び出す
draw();