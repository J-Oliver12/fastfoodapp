const ThemeSwitch = ({ isDarkTheme, toggleTheme }) => {
    const switchClass = isDarkTheme ? 'dark-theme' : 'light-theme';
  
    const handleThemeToggle = () => {
      toggleTheme(); 
  
      document.body.classList.toggle('dark-theme', !isDarkTheme);
    };
  
    return (
      <div className={`ThemeSwitch ${switchClass}`} onClick={handleThemeToggle}>
        <p className="switch-text">Switch to {isDarkTheme ? 'Light' : 'Dark'} Theme</p>
      </div>
    );
  };
  
  export default ThemeSwitch;
  




