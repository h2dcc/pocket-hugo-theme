(function () {
    var toggle = document.querySelector('[data-toggle-color-scheme]');
    var key = 'StackColorScheme';
    var media = window.matchMedia('(prefers-color-scheme: dark)');
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
    function applyTheme(theme) {
        document.documentElement.dataset.theme = theme;
        document.documentElement.dataset.scheme = theme;
        document.documentElement.style.colorScheme = theme;
    }
    function resolveTheme() {
        var stored = getStoredTheme();
        if (stored === 'dark' || stored === 'light') {
            return stored;
        }
        return media.matches ? 'dark' : 'light';
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

    function imageThreshold() {
        if (window.innerWidth <= 767) return 160;
        if (window.innerWidth <= 1023) return 250;
        return 350;
    }

    function updateArticleImages() {
        var threshold = imageThreshold();
        document.querySelectorAll('.article-content .article-image').forEach(function (figure) {
            var image = figure.querySelector('img');
            if (!image || !image.naturalWidth || !image.naturalHeight) return;

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
