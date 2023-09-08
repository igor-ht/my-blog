let theme = (() => {
	if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
		return localStorage.getItem('theme');
	}
	if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
		return 'dark';
	}
	return 'light';
})();

document.documentElement.setAttribute('data-theme', theme || 'light');

window.localStorage.setItem('theme', theme || 'light');

const handleToggleClick = () => {
	console.log('handleToggleTheme fired');
	const element = document.documentElement;
	const currentTheme = element.getAttribute('data-theme');
	if (currentTheme === 'light') {
		element.setAttribute('data-theme', 'dark');
		localStorage.setItem('theme', 'dark');
	} else {
		element.setAttribute('data-theme', 'light');
		localStorage.setItem('theme', 'light');
	}
};

const toggleThemeBtn = document.getElementById('themeToggle');
toggleThemeBtn?.addEventListener('click', handleToggleClick);
