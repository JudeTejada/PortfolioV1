const theme = localStorage.getItem("theme");
const themeToggler = document.querySelector("#darkTheme");
const body = document.body;
export default (darkTheme) => {
  // get darktheme
  themeToggler.addEventListener("change", (e) => {
    if (themeToggler.checked) {
      body.classList.replace("white", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      body.classList.replace("dark", "white");
      localStorage.setItem("theme", "white");
    }
  });

  if (theme) {
    body.classList.add(theme);

    if (theme === "dark") {
      themeToggler.checked = true;
    } else {
      body.classList.remove("dark");
      themeToggler.checked = false;
    }
  }
};
