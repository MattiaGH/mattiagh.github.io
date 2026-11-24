/* Small, local-only enhancements. All page content is in the HTML. */
'use strict';
document.documentElement.classList.add('js');

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');
if (menuButton && navigation) {
  function closeMenu() {
    navigation.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.textContent = 'Menu +';
  }
  menuButton.addEventListener('click', () => {
    const open = navigation.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.textContent = open ? 'Close −' : 'Menu +';
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && navigation.classList.contains('is-open')) {
      closeMenu();
      menuButton.focus();
    }
  });
  navigation.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
  });
}

const publicationList = document.querySelector('[data-publications]');
if (publicationList) {
  const papers = [...publicationList.querySelectorAll('[data-kind]')];
  const search = document.querySelector('#publication-search');
  const controls = document.querySelector('[data-filter-controls]');
  const buttons = [...document.querySelectorAll('[data-filter]')];
  const counter = document.querySelector('[data-results-count]');
  const empty = document.querySelector('[data-empty-state]');
  let category = 'all';
  const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const searchable = papers.map(paper => normalize(paper.textContent));
  function updatePublications() {
    const query = normalize(search.value.trim());
    let visible = 0;
    papers.forEach((paper, i) => {
      const matches = (category === 'all' || paper.dataset.kind === category) && searchable[i].includes(query);
      paper.hidden = !matches;
      if (matches) visible++;
    });
    counter.textContent = `${visible} of ${papers.length} publications`;
    empty.hidden = visible !== 0;
  }
  controls.hidden = false;
  buttons.forEach(button => button.addEventListener('click', () => {
    category = button.dataset.filter;
    buttons.forEach(other => other.setAttribute('aria-pressed', String(other === button)));
    updatePublications();
  }));
  search.addEventListener('input', updatePublications);
  updatePublications();
}
