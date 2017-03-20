# modular-php-react

## Guidelines

1. Initial server response must be significant HTML

    HTML must be returned to be displayed immediately to user. This HTML must be significant (not just a loading gif) and can be replaced by react render function.

2. Application needs to be divided in module and each module has its own js bundle

    Application needs to be splitted in significant modules. A module is a "sub app" with its own HTML view, js bundle and CSS file.

3. The sum of all js files must be minified and under 100k (gzip)

    The JS bundle + the dependencies bundle must be under 100k (gzip). Each third party dependency must be added only if necessary and
    if a significant part of its API is used.

4. All js dependencies must be bundled in a deps.js and cached

    Dependencies must be bundled in a separate file and heavily cached.

5. Server must gzip all response

    GZIP at all time and handle by upfront reverse proxy (nginx, apache, cdn).

6. Mobile first

    Layout should be built for mobile and then adapt to desktop.

7. Images should be compressed and as small as possible.

    Image can be heavy. Compression!

8. CSS must be minified

    CSS must be minified.

