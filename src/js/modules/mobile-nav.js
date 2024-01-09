function mobileNav() {
	// Mobile nav button
	const navBtnOpen = document.querySelector("#modalOpen");
	const navBtnClose = document.querySelector("#modalClose")

	const navOverlay = document.querySelector("#mobileNavOverlay");
	const nav = document.querySelector("#mobileNav");
	//
	// navBtnOpen.addEventListener('click', () => {
	// 	console.log('click');
	// })

	navBtnOpen.onclick = toggleMobileNav;
	navBtnClose.onclick = toggleMobileNav;
	navOverlay.onclick = toggleMobileNav;

	function toggleMobileNav () {
		navOverlay.classList.toggle("mobile-nav-overlay--open");
		nav.classList.toggle("mobile-nav--open");
		document.body.classList.toggle("no-scroll");
		console.log('click')
	}
}

export default mobileNav;