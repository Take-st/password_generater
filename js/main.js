(function(){
  "use strict";

  var slider = document.getElementById("slider");
  var label = document.getElementById("label");
  var btn = document.getElementById("btn");
  var result = document.getElementById("result");
  var numbers = document.getElementById("numbers");
  var symbols = document.getElementById("symbols");
  var genres = document.getElementById("genres");
  var trans = document.getElementById("trans");

  var fruits = ["apple", "banana", "lemon", "orange", "peach", "mango", "kiwi", "cherry", "lime"];
  var vegetables = ["potato", "tomato", "carrot", "ginger", "bean"];
  var sports = ["base", "soccer", "volley", "tennis", "golf", "boxing"];




  function getPassword(){
    var seed = "";
    var seed_letters = "abcdefghijklmnoqrstuvwxyz";
    var seed_numbers = "0123456789";
    var seed_symbols = "!#$%&@?";
    var len = slider.value;
    var pwd = "";

    if(genres.value == "fruits"){
      pwd += fruits[Math.floor(Math.random() * fruits.length)];
    }else if(genres.value == "vegetables"){
      pwd += vegetables[Math.floor(Math.random() * vegetables.length)];
    }else if(genres.value == "sports"){
      pwd += sports[Math.floor(Math.random() * sports.length)];
    }
    else{
      pwd = "";
    }

    // 始めに生成した文字列のアルファベットを数字に変えて推測しにくくする
    if (trans.checked){
      pwd = pwd.replace("b", "6");
      pwd = pwd.replace("l", "1");
      pwd = pwd.replace("o", "0");
      pwd = pwd.replace("q", "9");
      pwd = pwd.replace("s", "5");
      pwd = pwd.replace("w", "3");
      pwd = pwd.replace("z", "2");
    }

    // 始めに生成しあとに記号を一文字入れる。
    if (symbols.checked){
      if(len > pwd.length){
        pwd += seed_symbols[Math.floor(Math.random() * seed_symbols.length)];
      }
    }
    // 大文字も含めるよ
    seed = seed_letters + seed_letters.toUpperCase();
    // チェックボックスの選択によって、補充するものを決める
    if (numbers.checked){
      seed += seed_numbers;
    }

    var t = len - pwd.length
    // スライダーで設定した文字数に満たない分をseedから補充
    for (var i=0; i < t; i++) {
      pwd += seed[Math.floor(Math.random() * seed.length)];
    }
    // 結果のvalueにパスワードの文字列代入
    result.value = pwd;
  }

  // スライダーの情報をLength()に返す
  slider.addEventListener("change", function(){
  label.innerHTML = this.value;
  })

  // Generate Passwordをクリックでパスワード生成
  btn.addEventListener("click", function(){
    getPassword();
  })

  // パスワードの欄クリックしたら全選択
  result.addEventListener("click", function(){
    this.select();
  })

  // 即時関数の中身にこれが入っているので、ページを開いた瞬間にパスワード生成
  getPassword();

})();
