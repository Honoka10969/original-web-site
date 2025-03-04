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

// 下にスクロールしたらヘッダーが消えるやつ
// const header = document.querySelector(".header");
// const hamburgerMenu = document.querySelector(".hamburger");
// let lastScrollY = window.scrollY;

// window.addEventListener("scroll", () => {
//   if (window.scrollY > lastScrollY) {
    // 下にスクロールしたらヘッダーを隠す
//     header.classList.add("hide");
//   } else {
//     // 上にスクロールしたらヘッダーを表示
//     header.classList.remove("hide");
//   }
//   lastScrollY = window.scrollY;
// });


// 横スライド

$(document).ready(function() {
  $(".regular").slick({
    autoplay: true, //スライダーの自動再生
    autoplaySpeed: 3000,//次のスライドに切り替わる待ち時間
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

//一番下のスライド
$(function(){
  $('.slider2').slick({
    autoplay: true, //自動でスクロール
    autoplaySpeed: 0, //自動再生のスライド切り替えまでの時間を設定
    speed: 5000, //スライドが流れる速度を設定
    cssEase: "linear", //スライドの流れ方を等速に設定
    slidesToShow: 4, //表示するスライドの数
    swipe: true, // 操作による切り替えはさせない
    arrows: false, //矢印非表示
    pauseOnFocus: false, //スライダーをフォーカスした時にスライドを停止させるか
    pauseOnHover: true, //スライダーにマウスホバーした時にスライドを停止させるか
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 3, //画面幅750px以下でスライド3枚表示
        }
      }
    ]
  });
});

