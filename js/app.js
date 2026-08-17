
// Membaca parameter ?to= dari URL
const params = new URLSearchParams(window.location.search);

const namaTamu = params.get("to");
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let isPlaying = false;

if (namaTamu) {

    document.getElementById("namaTamu").textContent =
        decodeURIComponent(namaTamu);

}
document.getElementById("namaPengantin").textContent =
    wedding.brideName + " & " + wedding.groomName;

document.getElementById("tanggal").textContent =
    wedding.weddingDate;

document.getElementById("openInvitation").addEventListener("click", function () {

    document.getElementById("cover").style.display = "none";

    document.getElementById("content").style.display = "block";

    music.play();

    isPlaying = true;

    musicBtn.classList.add("playing");

});

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

document.getElementById("brideName").textContent =
    wedding.brideName;

document.getElementById("groomName").textContent =
    wedding.groomName;
    
const fatherVersion = params.get("father");

if (fatherVersion && fatherVersion.toLowerCase() === "darmono") {
    wedding.brideFather = "Darmono";
} else {
    wedding.brideFather = "Karwoto";
}
document.getElementById("ortuWanita").innerHTML =
    "Putri dari Bapak <strong>" +
    wedding.brideFather +
    "</strong><br>& Ibu <strong>" +
    wedding.brideMother +
    "</strong>";

document.getElementById("ortuPria").innerHTML =
    "Putra dari Bapak <strong>" +
    wedding.groomFather +
    "</strong><br>& Ibu <strong>" +
    wedding.groomMother +
    "</strong>";
   function copyRekening(id){

    const rekening = document.getElementById(id).innerText;

    navigator.clipboard.writeText(rekening).then(() => {

        const toast = document.getElementById("toast");

        toast.classList.add("show");

        setTimeout(() => {

            toast.classList.remove("show");

        },2000);

    });

}const weddingDate = new Date("2026-08-26T10:00:00").getTime();

setInterval(() => {

    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

}, 1000);
musicBtn.addEventListener("click", function(){

    if(isPlaying){

        music.pause();

        musicBtn.classList.remove("playing");

    }else{

        music.play();

        musicBtn.classList.add("playing");

    }

    isPlaying = !isPlaying;

});