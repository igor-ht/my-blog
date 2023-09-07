const setTheme = () => {
	console.log('document astro:afte-swap event triggered');
	let currentTheme;
	if (typeof localStorage !== 'undefined') {
		currentTheme = localStorage.getItem('theme');
	}
	if (currentTheme === 'dark') {
		document.documentElement.setAttribute('data-theme', 'dark');
	} else document.documentElement.setAttribute('data-theme', 'light');
};

setTheme();
// Runs on view transitions navigation
document.addEventListener('astro:after-swap', setTheme);
