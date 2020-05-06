let status = 0; //0:停止中 1:動作中
let time = 0;
let startBtn = document.getElementById("startBtn");
let timerLabel = document.getElementById("timerLabel");

//startボタン
function start() {
  //動作中にする
  status = 1;
  //スタートボタンを押せないようにする
  startBtn.disabled = true;

  timer();
}

//stopボタン
function stop() {
  //停止中にする
  status = 0;
  //スタートボタンを押せるようにする
  startBtn.disabled = false;
}

//resetボタン
function reset() {
  //停止中にする
  status = 0;
  //タイムを0に戻す
  time = 0;
  //タイマーラベルをリセット
  timerLabel.innerHTML = "00:00:00";
  //スタートボタンを押せるようにする
  startBtn.disabled = false;
}

function timer() {
  //ステータスが動作中の場合のみ実行
  if (status == 1) {
    setTimeout(function () {
      time++;

      //分・秒・ミリ秒を計算
      let min = Math.floor(time / 100 / 60);
      let sec = Math.floor(time / 100);
      let mSec = time % 100;

      //分が１桁の場合は、先頭に０をつける
      if (min < 10) min = "0" + min;

      //秒が６０秒以上の場合 例）89秒→29秒にする
      if (sec >= 60) sec = sec % 60;

      //秒が１桁の場合は、先頭に０をつける
      if (sec < 10) sec = "0" + sec;

      //ミリ秒が１桁の場合は、先頭に０をつける
      if (mSec < 10) mSec = "0" + mSec;

      //タイマーラベルを更新
      timerLabel.innerHTML = min + ":" + sec + ":" + mSec;

      //再びtimer()を呼び出す
      timer();
    }, 10);
  }
}
