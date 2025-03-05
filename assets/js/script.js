//ロード画面
// ページが読み込まれたら
// window.addEventListener('load', function() {
//   // 3秒後にロード画面を非表示にしてメインコンテンツを表示する
//   setTimeout(function() {
//       document.getElementById('loading-screen').style.display = 'none';
//       document.getElementById('main-content').style.display = 'block';
//   }, 2000); // 3000ミリ秒（＝3秒）
// });

window.onload = function() {
  // ローディング画面を取得
  const loadingScreen = document.getElementById("loading-screen");
  const body = document.body;

  // 1秒後にフェードアウト開始
  setTimeout(() => {
      loadingScreen.classList.add("fade-out");
      body.classList.add("loaded");

      // フェードアウト完了後にローディング画面を削除
      setTimeout(() => {
          loadingScreen.remove();
      }, 1000);
  }, 1000);
};


// ハンバーガーメニュー
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

// ハンバーガーメニューの開閉
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  nav.classList.toggle("open");
});

// ナビゲーションリンクをクリックしたらメニューを閉じる
document.querySelectorAll('.nav__item a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open'); // ハンバーガーアイコンを閉じる
    nav.classList.remove('open'); // メニューを閉じる
  });
});


// 横スライド

$(document).ready(function() {
  $(".regular").slick({
    autoplay: true, //スライダーの自動再生
    autoplaySpeed: 1500,//次のスライドに切り替わる待ち時間
    speed:1000,//スライドの動きのスピード。初期値は300。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 1,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
    arrows: true,//左右の矢印あり
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    dots: true,//下部ドットナビゲーションの表示
    pauseOnFocus: true,//フォーカスで一時停止を無効
    pauseOnHover: true,//マウスホバーで一時停止を無効
    pauseOnDotsHover: true,//ドットナビゲーションをマウスホバーで一時停止を無効
    centerMode:true,
    centerPadding:'5%',
  });
});

// レスポンシブ設定
responsive: [
  {
    breakpoint: 1024, // 1024px以下
    settings: {
      slidesToShow: 2, // スライド2枚表示
      slidesToScroll: 1,
      arrows: true,
      dots: true
    }
  },
  {
    breakpoint: 768, // 768px以下
    settings: {
      slidesToShow: 1, // スライド1枚表示
      slidesToScroll: 1,
      arrows: true,
      dots: true
    }
  },
  {
    breakpoint: 480, // スマホサイズ
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false, // 矢印を非表示
      dots: true
    }
  }
]

// Tap to Discover ボタンをクリックしたらナビゲーションメニューを表示
document.getElementById('tapButton').addEventListener('click', function() {
  const navMenu = document.getElementById('navMenu');
  navMenu.classList.toggle('active'); // activeクラスの追加/削除
});

// スムーズスクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      const headerHeight = document.querySelector('.header').offsetHeight;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
      });
  });
});


$(document).ready(function(){
  $('.restaurant .slider').slick({
    autoplay: false, // 自動再生オフ
    dots: true, // ドットナビを表示
    arrows: true, // 矢印ナビを表示
    prevArrow: '<div class="slick-up"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-down"></div>',//矢印部分NextのHTMLを変更
    infinite: true, // 無限ループ
    slidesToShow: 1, // 1枚ずつ表示
    slidesToScroll: 1, // 1枚ずつスクロール
    vertical: true, //縦方向にスライド
  });
});


//最後のスライダー
function autoHorizontalScroll(selector, speed = 2) {
  let container = document.querySelector(selector);
  if (!container) return;

  function scroll() {
      container.scrollLeft += speed; // 横スクロール

      // スクロール量の割合を調べる
      // 現在の横スクロール
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
          container.scrollLeft = 0; // 右端に達したら左端に戻る
      }
  }
  let interval = setInterval(scroll, 30);
  // ホバーで停止
  container.addEventListener("mouseenter", () => clearInterval(interval));
  container.addEventListener("mouseleave", () => {
      interval = setInterval(scroll, 30);
  });
}
// 例: #scroll-container を水平方向にスクロール
autoHorizontalScroll(".slider2", 1);