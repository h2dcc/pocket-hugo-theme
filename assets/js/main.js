(function () {
    var toggle = document.querySelector('[data-toggle-color-scheme]');
    var key = 'StackColorScheme';
    var paletteKey = 'PocketPalettePreset';
    var media = window.matchMedia('(prefers-color-scheme: dark)');
    var paletteOptions = ['golden-summer-fields', 'soft-pastel-shades', 'black-gold-elegance', 'fresh-greens', 'light-steel', 'deep-sea-blue', 'morandi-mist', 'monochrome-core'];
    var paletteButtons = Array.prototype.slice.call(document.querySelectorAll('[data-palette-value]'));
    function getStoredTheme() {
        try {
            return localStorage.getItem(key);
        } catch (e) {
            return null;
        }
    }
    function setStoredTheme(value) {
        try {
            localStorage.setItem(key, value);
        } catch (e) {}
    }
    function getStoredPalette() {
        try {
            return localStorage.getItem(paletteKey);
        } catch (e) {
            return null;
        }
    }
    function setStoredPalette(value) {
        try {
            localStorage.setItem(paletteKey, value);
        } catch (e) {}
    }
    function applyTheme(theme) {
        document.documentElement.dataset.theme = theme;
        document.documentElement.dataset.scheme = theme;
        document.documentElement.style.colorScheme = theme;
    }
    function applyPalette(palette) {
        document.documentElement.dataset.palette = palette;
        paletteButtons.forEach(function (button) {
            var active = button.getAttribute('data-palette-value') === palette;
            button.classList.toggle('is-active', active);
            button.setAttribute('aria-pressed', active ? 'true' : 'false');
        });
    }
    function resolveTheme() {
        var stored = getStoredTheme();
        if (stored === 'dark' || stored === 'light') {
            return stored;
        }
        return media.matches ? 'dark' : 'light';
    }
    function resolvePalette() {
        var stored = getStoredPalette();
        if (paletteOptions.indexOf(stored) > -1) {
            return stored;
        }
        var fallback = document.documentElement.dataset.palette || 'golden-summer-fields';
        return paletteOptions.indexOf(fallback) > -1 ? fallback : 'golden-summer-fields';
    }
    if (toggle) {
        toggle.addEventListener('click', function () {
            var isDark = resolveTheme() === 'dark';
            var next = isDark ? 'light' : 'dark';
            setStoredTheme(next);
            applyTheme(next);
        });
    }

    var onMediaChange = function () {
        var stored = getStoredTheme();
        if (stored === 'dark' || stored === 'light') return;
        applyTheme(media.matches ? 'dark' : 'light');
    };
    if (media.addEventListener) {
        media.addEventListener('change', onMediaChange);
    } else if (media.addListener) {
        media.addListener(onMediaChange);
    }
    paletteButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var palette = button.getAttribute('data-palette-value');
            if (paletteOptions.indexOf(palette) === -1) return;
            setStoredPalette(palette);
            applyPalette(palette);
            var details = button.closest('details');
            if (details) details.open = false;
        });
    });
    applyPalette(resolvePalette());

    document.querySelectorAll('.article-content pre').forEach(function (block) {
        var wrapper = block.parentElement;
        if (!wrapper || !wrapper.classList.contains('code-block')) {
            wrapper = document.createElement('div');
            wrapper.className = 'code-block';
            block.parentNode.insertBefore(wrapper, block);
            wrapper.appendChild(block);
        }
        if (wrapper.querySelector('.copy-code-button')) return;

        var button = document.createElement('button');
        button.className = 'copy-code-button';
        button.type = 'button';
        button.textContent = 'Copy';
        button.addEventListener('click', function () {
            var text = block.innerText || '';
            navigator.clipboard.writeText(text).then(function () {
                button.textContent = 'Copied';
                setTimeout(function () {
                    button.textContent = 'Copy';
                }, 1200);
            });
        });
        wrapper.appendChild(button);
    });

    function parsePx(value, fallback) {
        if (!value) return fallback;
        var match = String(value).trim().match(/^([0-9]+(?:\.[0-9]+)?)px$/i);
        if (!match) return fallback;
        return parseFloat(match[1]);
    }

    function imageThreshold(figure) {
        var container = figure.closest('.article-content');
        var styles = container ? window.getComputedStyle(container) : null;
        var mobile = parsePx(styles ? styles.getPropertyValue('--article-content-image-mobile-max-height') : '', 160);
        var tablet = parsePx(styles ? styles.getPropertyValue('--article-content-image-tablet-max-height') : '', 250);
        var desktop = parsePx(styles ? styles.getPropertyValue('--article-content-image-desktop-max-height') : '', 350);

        if (window.innerWidth <= 767) return mobile;
        if (window.innerWidth <= 1023) return tablet;
        return desktop;
    }

    function updateArticleImages() {
        document.querySelectorAll('.article-content .article-image').forEach(function (figure) {
            var image = figure.querySelector('img');
            if (!image || !image.naturalWidth || !image.naturalHeight) return;
            var threshold = imageThreshold(figure);

            figure.classList.remove('article-image--natural', 'article-image--fullwidth');

            if (image.naturalHeight <= threshold) {
                figure.classList.add('article-image--natural');
                return;
            }

            if (image.naturalWidth > threshold) {
                figure.classList.add('article-image--fullwidth');
                return;
            }

            figure.classList.add('article-image--natural');
        });
    }


    var backToTop = document.querySelector('[data-back-to-top]');
    if (backToTop) {
        var toggleBackToTop = function () {
            backToTop.classList.toggle('is-visible', window.scrollY > 320);
        };
        backToTop.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        toggleBackToTop();
        window.addEventListener('scroll', toggleBackToTop, { passive: true });
    }
    document.querySelectorAll('.article-content .article-image img').forEach(function (image) {
        if (image.complete) return;
        image.addEventListener('load', updateArticleImages, { once: true });
    });
    updateArticleImages();
    window.addEventListener('resize', updateArticleImages);

    var lightbox = document.createElement('div');
    lightbox.className = 'image-lightbox';
    lightbox.innerHTML = [
        '<div class="image-lightbox__backdrop" data-lightbox-close></div>',
        '<div class="image-lightbox__dialog" role="dialog" aria-modal="true" aria-label="Image preview">',
        '  <button class="image-lightbox__close" type="button" aria-label="Close" data-lightbox-close>&times;</button>',
        '  <img class="image-lightbox__image" alt="">',
        '  <div class="image-lightbox__caption"></div>',
        '</div>'
    ].join('');
    document.body.appendChild(lightbox);

    var lightboxImage = lightbox.querySelector('.image-lightbox__image');
    var lightboxCaption = lightbox.querySelector('.image-lightbox__caption');

    function closeLightbox() {
        lightbox.classList.remove('is-open');
        lightboxImage.removeAttribute('src');
        lightboxImage.alt = '';
        lightboxCaption.textContent = '';
        document.body.style.overflow = '';
    }

    document.addEventListener('click', function (event) {
        var trigger = event.target.closest('[data-lightbox-image]');
        if (trigger) {
            event.preventDefault();
            var image = trigger.querySelector('img');
            lightboxImage.src = trigger.getAttribute('href');
            lightboxImage.alt = image ? (image.getAttribute('alt') || '') : '';
            lightboxCaption.textContent = image ? (image.getAttribute('title') || image.getAttribute('alt') || '') : '';
            lightbox.classList.add('is-open');
            document.body.style.overflow = 'hidden';
            return;
        }

        if (event.target.closest('[data-lightbox-close]')) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && lightbox.classList.contains('is-open')) {
            closeLightbox();
        }
    });
})();
