// START CLICKER
var uang = 0;
var jangkrik = 100;
var poin = jangkrik;
var jumlahUang = document.getElementById("jumlahUang");
updateUang();
function updateUang() {
  x = "<p> Uang = " + uang + "</p>";
  jumlahUang.innerHTML = x;
}
function nambahPoint() {
  uang += poin;
  x = "<p> Uang = " + uang + "</p>";
  jumlahUang.innerHTML = x;
  console.log(uang);
}
// END CLICKER

// START LEVEL 0
var levelAutoClick = 0;
var hargaAutoClick = 500;
var autoClick = document.getElementById("autoClick");
function updateAutoClick() {
  a =
    "<p> Auto-Clickers = " +
    levelAutoClick +
    "</p>" +
    "<p> Cost : " +
    hargaAutoClick +
    "</p>";
  autoClick.innerHTML = a;
}
updateAutoClick();

var levelCabang = 0;
var hargaCabang = 500;
var cabang = document.getElementById("cabang");
function updateCabang() {
  poin = jangkrik * (levelCabang + 1);
  b =
    "<p> Cabang = " +
    levelCabang +
    "</p>" +
    "<p> Cost : " +
    hargaCabang +
    "</p>";
  cabang.innerHTML = b;
}
updateCabang();
// END LEVEL 0

// START AUTO CLICKER
function beliAutoClicker() {
  if (uang < hargaAutoClick) alert("UANG ANDA TIDAK CUKUP");
  else {
    uang -= hargaAutoClick;
    hargaAutoClick *= 2;
    levelAutoClick++;
    setInterval(nambahPoint, 2000);
    updateAutoClick();
    updateUang();
  }
}
// END AUTO CLICKER

// START CABANG
function beliCabang() {
  if (uang < hargaCabang) alert("UANG ANDA TIDAK CUKUP");
  else {
    uang -= hargaCabang;
    hargaCabang *= 2;
    levelCabang++;
    updateCabang();
    updateUang();
  }
}
// END CABANG

document.getElementById("buttonJangkrikBiasa").disabled = false;
document.getElementById("buttonJangkrikPremium").disabled = true;
document.getElementById("buttonJangkrikRaja").disabled = true;

// START JANGKRIK BIASA
var hargaJangkrikBiasa = 10000;
var jangkrikBiasa = 500;
function beliJangkrikBiasa() {
  if (uang < hargaJangkrikBiasa) alert("UANG ANDA TIDAK CUKUP");
  else {
    uang -= hargaJangkrikBiasa;
    jangkrik = jangkrikBiasa;
    updateUang();
    updateCabang();
    document.getElementById("buttonJangkrikBiasa").disabled = true;
    document.getElementById("buttonJangkrikPremium").disabled = false;
  }
}
// END JANGKRIK BIASA

// START JANGKRIK Premium
var hargaJangkrikPremium = 50000;
var jangkrikPremium = 1000;
function beliJangkrikPremium() {
  if (uang < hargaJangkrikPremium) alert("UANG ANDA TIDAK CUKUP");
  else {
    uang -= hargaJangkrikPremium;
    jangkrik = jangkrikPremium;
    updateUang();
    updateCabang();
    document
      .getElementById("pencetKodok")
      .removeChild(document.getElementById("pencetKodok").firstElementChild);

    var a = document.createElement("img");
    a.src = "filependukungUTSLAB/2.png";
    a.style = "width: 50%";
    document.getElementById("pencetKodok").appendChild(a);
    document.getElementById("buttonJangkrikPremium").disabled = true;
    document.getElementById("buttonJangkrikRaja").disabled = false;
  }
}
// END JANGKRIK Premium

// START JANGKRIK Raja
var hargaJangkrikRaja = 100000;
var jangkrikRaja = 2000;
function beliJangkrikRaja() {
  if (uang < hargaJangkrikRaja) alert("UANG ANDA TIDAK CUKUP");
  else {
    uang -= hargaJangkrikRaja;
    jangkrik = jangkrikRaja;
    updateUang();
    updateCabang();
    document
      .getElementById("pencetKodok")
      .removeChild(document.getElementById("pencetKodok").firstElementChild);

    var a = document.createElement("img");
    a.src = "filependukungUTSLAB/3.png";
    a.style = "width: 50%";
    document.getElementById("pencetKodok").appendChild(a);
    document.getElementById("buttonJangkrikRaja").disabled = true;
  }
}
// END JANGKRIK Raja

// START KODOK CLICKED
const jangkrikClicked = document.querySelector(".jangkrikClick");

jangkrikClicked.addEventListener("click", function () {
  this.classList.toggle("clicked");
  setTimeout(() => {
    this.classList.remove("clicked");
  }, 100);
});

// END KODOK CLICKED

// START AUDIO
var audio = document.getElementById("audio");
audio.volume = 0.2;
// END AUDIO
