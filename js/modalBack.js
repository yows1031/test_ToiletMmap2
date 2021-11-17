'use  strict'


const Prev = document.getElementById('Prev');
const Next = document.getElementById('Next');
const thumbnails = document.getElementById('thumbnails');
const target = document.getElementById('target');
const thTitle = document.getElementById('thTitle');
const parkingIcon = document.getElementById('parkingIcon');
const parkingSign = document.getElementById('parkingSign');
const babybedIcon = document.getElementById('babybedIcon');
const babybedSign = document.getElementById('babybedSign');
const multisheetIcon = document.getElementById('multisheetIcon');
const multisheetSign = document.getElementById('multisheetSign');
const ostomateIcon = document.getElementById('ostomateIcon');
const ostomateSign = document.getElementById('ostomateSign');
const buttonIcon = document.getElementById('buttonIcon');
const buttonSign = document.getElementById('buttonSign');
const shoewrtoiletIcon = document.getElementById('shoewrtoiletIcon');
const shoewrtoiletSign = document.getElementById('showertoiletSign');
const tdTime = document.getElementById('tdTime');
const pointBuild= document.getElementById('pointBuild');
const altInformation = document.getElementById('altInformation');
const imageSet = [];
const altText = [];


function  setModal(key) {

    console.log(key);

    mask.classList.remove('hidden');
    modal.classList.remove('hidden');

    resultData = pointData.filter(function(item){
        return item.name === key;
    })
    console.log(resultData);

    resultData.forEach((value) => {
        
        // thTitle.innerHTML = '<p><img src="icon/info.png" alt="東洋館です。トイレに近い入り口は、不明です。シャワートイレがあります">' + value.name + '<img onClick="back()"  src="icon/back.png" alt="このボタンで地図に戻ります"></p>'
        pointBuild.innerText = value.name
        tdTime.innerText = value.tdTime;

        altText.push("こちらは" + value.name + "です。")

        if(value.parking === true){
            parkingIcon.innerHTML = '<img src="icon/parking.png">';
            parkingSign.innerText = "あり"
            altText.push("専用駐車場があります。")
        }else  if(value.parking === false){
            parkingIcon.innerHTML = '<img src="icon/parking_ng.png">';
            parkingSign.innerText = "なし"
        }

        if(value.babybed === true){
            babybedIcon.innerHTML = '<img src="icon/babybed.png">';
            babybedSign.innerText = "あり"
            altText.push("ベビーベッドがあります。")
        }else  if(value.parking === false){
            babybedIcon.innerHTML = '<img src="icon/babybed_ng.png">';
            babybedSign.innerText = "なし"
        }

        if(value.multisheet  === true){
            multisheetIcon.innerHTML = '<img src="icon/multisheet.png">';
            multisheetSign.innerText = "あり"
            altText.push("マルチシートがあります。")
        }else  if(value.multisheet === false){
            multisheetIcon.innerHTML = '<img src="icon/multisheet_ng.png">';
            multisheetSign.innerText = "なし"
        }

        if(value.ostomate === true){
            ostomateIcon.innerHTML = '<img src="icon/ostomate.png">';
            ostomateSign.innerText = "あり"
            altText.push("オストメイトがあります。")
        }else  if(value.ostomate === false){
            ostomateIcon.innerHTML = '<img src="icon/ostomate_ng.png">';
            ostomateSign.innerText = "なし"
        }
        
        if(value.button === true){
            buttonIcon.innerHTML = '<img src="icon/button.png">';
            buttonSign.innerText = "あり"
            altText.push("があります。")
        }else  if(value.button === false){
            buttonIcon.innerHTML = '<img src="icon/button_ng.png">';
            buttonSign.innerText = "なし"
        }
        
        if(value.showertoilet === true){
            shoewrtoiletIcon.innerHTML = '<img src="icon/showertoilet.png">';
            shoewrtoiletSign.innerText = "あり"
            altText.push("シャワートイレがあります。")
        }else  if(value.showertoilet === false){
            shoewrtoiletIcon.innerHTML = '<img src="icon/showertoilet_ng.png">';
            shoewrtoiletSign.innerText = "なし"
        }

        console.log(altText);
        altInformation.alt = altText;

        for(let i = 0; i < value.img.length; i++){
            imageSet.push(value.img[i]);
        }


    });

    let currentNum = 0;
    
    function setMainImage(imageSet) {
    target.src = imageSet;
    }
    
    setMainImage(imageSet[currentNum])

    function removeCurrentClass() {
        document.querySelectorAll('#thumbnails li')[currentNum].classList.remove('current');
    }

    function addCurrentClass() {
        document.querySelectorAll('#thumbnails li')[currentNum].classList.add('current');
    }

   
    imageSet.forEach((image, index) => {
        const li = document.createElement('li');
        if (index === currentNum) {
            li.classList.add('current');
        }
        li.addEventListener('click', () => {
            setMainImage(image);
            removeCurrentClass();
            currentNum  = index;
            addCurrentClass();
        })
        const img = document.createElement('img');
        console.log('image', image);
        img.src = image;
        li.appendChild(img);
        thumbnails.appendChild(li);
    });

    Next.addEventListener('click', () => {
        removeCurrentClass();
        currentNum++;
        if (currentNum === imageSet.length) {
            currentNum = 0;
        }
        addCurrentClass();
        setMainImage(imageSet[currentNum]);
    });

    Prev.addEventListener('click', () => {
        removeCurrentClass();
        currentNum--;
        if (currentNum < 0) {
            currentNum = imageSet.length -1;
        }
        addCurrentClass();
        setMainImage(imageSet[currentNum]);
    });
}

function back() {
    mask.classList.add('hidden');
    modal.classList.add('hidden');
    modalArrayRemove();
    resultData = [];
}

function modalArrayRemove() {
    thTitle.removeChild(thTitle.firstChild);
    parkingIcon.removeChild(parkingIcon.firstChild);
    parkingSign.removeChild(parkingSign.firstChild);
    babybedIcon.removeChild(babybedIcon.firstChild);
    babybedSign.removeChild(babybedSign.firstChild);
    multisheetIcon.removeChild(multisheetIcon.firstChild);
    multisheetSign.removeChild(multisheetSign.firstChild);
    ostomateIcon.removeChild(ostomateIcon.firstChild);
    ostomateSign.removeChild(ostomateSign.firstChild);
    buttonIcon.removeChild(buttonIcon.firstChild);
    buttonSign.removeChild(buttonSign.firstChild);
    shoewrtoiletIcon.removeChild(shoewrtoiletIcon.firstChild);
    shoewrtoiletSign.removeChild(shoewrtoiletSign.firstChild);
    tdTime.removeChild(tdTime.firstChild);
    target.removeAttribute("src");
    thumbnails.textContent = null;
}
