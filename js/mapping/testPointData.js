'use strict'



const pointData = [

    {
    name:"東洋館",
    parking:true,
    babybed:false,
    multisheet:false,
    ostomate:false,
    button:false,
    showertoilet:true,
    lat:38.302116,lon:141.509742,
    popupContent:'<div class="popButton" onClick="setModal("東洋館");"><p>東洋館</p></div>',
    tdTime:"利用可能時間 9:00-16:30　電話 0225−45-2206",
    img:[
    'img/pic/oshika/toyo/toyo1.png',
    'img/pic/oshika/toyo/toyo2.png',
    'img/pic/oshika/toyo/toyo3.png',
    'img/pic/oshika/toyo/toyo4.png',
    'img/pic/oshika/toyo/toyo5.png',],
    },
];

// 質問
// popupContentで、viewされるボタンの仲に、modalBack.jsのfunction setModalに引数を書いています
// しかし、この書き方をすると「Uncaught SyntaxError: Unexpected end of inpu」というエラーが出ます。
// chromeのデベロッパーツールのelementsを見ると謎の空白も入って言います。
// 調べて見たのですが、分かりませんでした。教えていただけないでしょうか？
