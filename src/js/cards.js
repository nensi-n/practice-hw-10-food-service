import templateCard from "../template/menu-template.hbs"
import cards from "../data/menu.json"

const refs = {
    menuList: document.querySelector('.js-menu'),
    themeSwitch: document.querySelector('.theme-switch__toggle'),
    body: document.body
}

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

(function () {
    const state = JSON.parse(localStorage.getItem("state"));
    refs.body.classList.add(state?.theme ? state.theme : Theme.LIGHT);
    refs.themeSwitch.checked = state?.checked;
})();

refs.menuList.insertAdjacentHTML("beforeend", templateCard(cards));

refs.themeSwitch.addEventListener("change", onChengeTheme);

function toggleTheme(add, rem) {
    refs.body.classList.replace(rem, add);
    const state = {
        theme: add,
        checked: add === Theme.DARK
    }
    localStorage.setItem('state', JSON.stringify(state));
}

function onChengeTheme({ target: { checked } }) {
    checked ? toggleTheme(Theme.DARK, Theme.LIGHT) : toggleTheme(Theme.LIGHT, Theme.DARK);
}

