(function () {
    function initLocalSearch() {
        var input = document.getElementById('search-input');
        var results = document.getElementById('search-results');
        if (!input || !results || input.dataset.searchReady === 'true') return;

        input.dataset.searchReady = 'true';

        fetch(window.location.pathname.replace(/\/$/, '') + '/index.json')
            .then(function (res) { return res.json(); })
            .then(function (items) {
                function getMatches(keyword) {
                    return items.filter(function (item) {
                        var categories = (item.categories || []).join(' ').toLowerCase();
                        var tags = (item.tags || []).join(' ').toLowerCase();
                        var description = (item.description || '').toLowerCase();
                        var slug = (item.slug || '').toLowerCase();
                        return item.title.toLowerCase().indexOf(keyword) > -1 ||
                            description.indexOf(keyword) > -1 ||
                            slug.indexOf(keyword) > -1 ||
                            categories.indexOf(keyword) > -1 ||
                            tags.indexOf(keyword) > -1;
                    });
                }

                function clearResults() {
                    results.innerHTML = '';
                }

                function render(list) {
                    if (!list.length) {
                        results.innerHTML = '<p class="search-results__empty">No matching posts found.</p>';
                        return;
                    }

                    results.innerHTML = list.map(function (item) {
                        return '<article class="search-result"><h2><a href="' + item.permalink + '">' + item.title + '</a></h2><p>' + (item.description || '') + '</p></article>';
                    }).join('');
                }

                clearResults();

                var params = new URLSearchParams(window.location.search);
                var initialKeyword = (params.get('q') || '').trim();
                if (initialKeyword) {
                    input.value = initialKeyword;
                    render(getMatches(initialKeyword.toLowerCase()));
                }

                input.addEventListener('input', function () {
                    var keyword = input.value.trim().toLowerCase();
                    if (!keyword) {
                        clearResults();
                        return;
                    }

                    render(getMatches(keyword));
                });
            });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initLocalSearch, { once: true });
    } else {
        initLocalSearch();
    }

    document.addEventListener('pocket-search:fallback', initLocalSearch);
})();
