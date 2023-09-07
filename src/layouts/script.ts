const setDarkMode = () => {
	console.log('astro:afte-swap triggered');
	let currentTheme;
	if (typeof localStorage !== 'undefined') {
		currentTheme = localStorage.getItem('theme');
	}
	if (currentTheme === 'dark') {
		document.documentElement.setAttribute('data-theme', 'dark');
	}
};

// Runs on initial navigation
setDarkMode();
// Runs on view transitions navigation
document.addEventListener('astro:after-swap', setDarkMode);
