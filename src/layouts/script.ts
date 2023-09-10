const setTheme = () => {
	let currentTheme = document.documentElement.getAttribute('data-theme') as string;
	if (window.matchMedia('(prefers-color-scheme: dark)').matches) currentTheme = 'dark';
	if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) currentTheme = localStorage.getItem('theme') as string;
	window.localStorage.setItem('theme', currentTheme);
	document.documentElement.setAttribute('data-theme', currentTheme);
};
setTheme();

const handleToggleTheme = () => {
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

const AstroAfterSwapHandler = () => {
	setTheme();
	document.querySelector('#themeToggle')?.addEventListener('click', handleToggleTheme);
};

document.querySelector('#themeToggle')?.addEventListener('click', handleToggleTheme);
document.addEventListener('astro:after-swap', AstroAfterSwapHandler);
