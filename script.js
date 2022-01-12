let trackCurrent = 0;
let styleElem = document.head.appendChild(document.createElement("style"));
styleElem.innerHTML = ".track:after {width: 0px;}";

document.querySelector('.fa-pause').style.display = "none";
let playPause = false;

document.querySelector('.play').addEventListener("click", () => {
	if (playPause == false) {
		document.querySelector('.fa-play').style.display = "none";
		document.querySelector('.fa-pause').style.display = "block";
		playPause = true;
	} else if (playPause == true) {
		document.querySelector('.fa-pause').style.display = "none";
		document.querySelector('.fa-play').style.display = "block";
		playPause = false;
	}
});
document.querySelector('.forward').addEventListener("click", () => {
	trackCurrent = trackCurrent + 10;
	styleElem.innerHTML = ".track:after {width: " + trackCurrent + "px;";
});
document.querySelector('.backward').addEventListener("click", () => {
	trackCurrent = trackCurrent - 10;
	styleElem.innerHTML = ".track:after {width: " + trackCurrent + "px;";
});