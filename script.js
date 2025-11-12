const q = document.getElementById('q');
const cards = document.querySelectorAll('.card');
const noResults = document.getElementById('noResults');
const details = document.querySelectorAll('details');

function applyFilter(term) {
  const t = term.trim().toLowerCase();
  let visible = 0;
  cards.forEach(c => {
    const text = (c.textContent + ' ' + c.dataset.tags).toLowerCase();
    c.style.display = t && !text.includes(t) ? 'none' : '';
    if (c.style.display !== 'none') visible++;
  });
  noResults.classList.toggle('hidden', visible > 0);
  details.forEach(d => {
    const grid = d.querySelector('.grid');
    d.open = t ? grid.querySelector('.card:not([style*="none"])') : true;
  });
}

q.addEventListener('input', () => {
  clearTimeout(q.timeout);
  q.timeout = setTimeout(() => applyFilter(q.value), 300);
});

document.querySelectorAll('.chip').forEach(c => {
  c.addEventListener('click', () => {
    q.value = c.dataset.chip;
    applyFilter(q.value);
    q.focus();
  });
  c.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      q.value = c.dataset.chip;
      applyFilter(q.value);
      q.focus();
    }
  });
});

function clearSearch() {
  q.value = '';
  applyFilter('');
  q.focus();
}

const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  backToTop.style.display = window.scrollY > 300 ? 'grid' : 'none';
});
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

window.addEventListener('keydown', e => {
  if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
    e.preventDefault();
    q.focus();
  }
});
