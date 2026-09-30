(function () {
    'use strict';

    var TOGGLE_ID = 'theme-toggle';
    var STORAGE_KEY = 'm0x9-theme';

    function applyTheme(theme) {
        var isLight = theme === 'light';

        if (isLight) {
            document.body.classList.add('light-mode');
        } else {
            document.body.classList.remove('light-mode');
        }

        var toggle = document.getElementById(TOGGLE_ID);
        if (toggle) {
            toggle.textContent = isLight ? '\u2600\uFE0F' : '\uD83C\uDF19'; // ☀️ / 🌙
            toggle.setAttribute('aria-pressed', isLight ? 'true' : 'false');
        }
    }

    var saved = 'dark';
    try {
        saved = localStorage.getItem(STORAGE_KEY) || 'dark';
    } catch (e) {
    }

    applyTheme(saved);

    var toggle = document.getElementById(TOGGLE_ID);
    if (toggle) {
        toggle.addEventListener('click', function () {
            var isLight = document.body.classList.toggle('light-mode');
            var theme = isLight ? 'light' : 'dark';

            try {
                localStorage.setItem(STORAGE_KEY, theme);
            } catch (e) {
                /* ignore storage errors */
            }

            applyTheme(theme);
        });
    }
})();