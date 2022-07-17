var changecolor = document.querySelector(".header-container");
window.onscroll = function () {
	changeFunction();
};
var list = document.querySelectorAll(".nav-bar ul li a");

function changeFunction() {
	if (document.documentElement.scrollTop > 350) {
		changecolor.style.background = "#edf6f9";
		changecolor.style.paddingTop = "10px";
		list.forEach(item => {
			item.style.color = "#3a3b3e";
		});
	} else {
		changecolor.style.background = "transparent";
		changecolor.style.paddingTop = "20px";
		list.forEach(item => {
			item.style.color = "white";
		});
	}
}
