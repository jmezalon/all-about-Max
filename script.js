const js = document.getElementById('js-ul');

const jsUl = document.getElementById('javascript');

function displayJsUl() {
    jsUl.style.display = 'block';
}

function hideJsUl() {
    jsUl.style.display = 'none';
}

js.addEventListener('click', displayJsUl);

js.addEventListener('mouseleave', hideJsUl);


// --------------------------

const html = document.getElementById('html-ul');

const htmlUl = document.getElementById('html');

function displayHtmlUl() {
    htmlUl.style.display = 'block';
}

html.addEventListener('click', displayHtmlUl);

function hideHtmlUl() {
    htmlUl.style.display = 'none';
}

html.addEventListener('mouseleave', hideHtmlUl);


// -------------------------

const css = document.getElementById('css-ul');

const cssUl = document.getElementById('css');

function displayCssUl() {
    cssUl.style.display = 'block';
}

function hideCssUl() {
    cssUl.style.display = 'none';
}

css.addEventListener('click', displayCssUl);

css.addEventListener('mouseleave', hideCssUl);


// -----------------------------

const rct = document.getElementById('rct-ul');

const rctUl = document.getElementById('react');

function displayRctUl() {
    rctUl.style.display = 'block';
}

function hideRctUl() {
    rctUl.style.display = 'none';
}

rct.addEventListener('click', displayRctUl);

rct.addEventListener('mouseleave', hideRctUl);

// -------------------------------


const git = document.getElementById('git-ul');

const gitUl = document.getElementById('git');

function displayGitUl() {
    gitUl.style.display = 'block';
}

function hideGitUl() {
    gitUl.style.display = 'none';
}

git.addEventListener('click', displayGitUl);

git.addEventListener('mouseleave', hideGitUl);

