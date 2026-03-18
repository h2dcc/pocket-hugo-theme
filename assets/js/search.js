(function () {
    var input = document.getElementById('search-input');
    var results = document.getElementById('search-results');
    if (!input || !results) return;

    fetch(window.location.pathname.replace(/\/$/, '') + '/index.json')
        .then(function (res) { return res.json(); })
        .then(function (items) {
            function render(list) {
                results.innerHTML = list.map(function (item) {
                    return '<article class="search-result"><h2><a href="' + item.permalink + '">' + item.title + '</a></h2><p>' + (item.description || '') + '</p></article>';
                }).join('');
            }

            render(items);

            input.addEventListener('input', function () {
                var keyword = input.value.trim().toLowerCase();
                if (!keyword) {
                    render(items);
                    return;
                }

                render(items.filter(function (item) {
                    var categories = (item.categories || []).join(' ').toLowerCase();
                    var tags = (item.tags || []).join(' ').toLowerCase();
                    var description = (item.description || '').toLowerCase();
                    var slug = (item.slug || '').toLowerCase();
                    return item.title.toLowerCase().indexOf(keyword) > -1 ||
                        description.indexOf(keyword) > -1 ||
                        slug.indexOf(keyword) > -1 ||
                        categories.indexOf(keyword) > -1 ||
                        tags.indexOf(keyword) > -1;
                }));
            });
        });
})();
