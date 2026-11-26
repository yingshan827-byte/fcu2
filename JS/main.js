'use strict';
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#primary-nav');
function closeMenu() { if (!menuButton || !nav) return; menuButton.setAttribute('aria-expanded', 'false'); nav.dataset.open = 'false'; }
menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  nav.dataset.open = String(open);
});
document.addEventListener('keydown', event => { if (event.key === 'Escape' && menuButton?.getAttribute('aria-expanded') === 'true') {closeMenu(); menuButton.focus();} });
window.matchMedia('(min-width: 1101px)').addEventListener('change', closeMenu);
document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    let count = 0;
    document.querySelectorAll('.news-card[data-category]').forEach(card => {
      card.hidden = category !== '全部' && card.dataset.category !== category;
      if (!card.hidden) count++;
    });
    document.querySelector('#filter-status').textContent = `共 ${count} 則消息`;
  });
});
document.querySelectorAll('.video-player[data-video]').forEach(player => {
  player.querySelector('.video-play')?.addEventListener('click', () => {
    const frame = document.createElement('iframe');
    frame.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(player.dataset.video)}?autoplay=1&rel=0`;
    frame.title = '逢甲全球行銷碩士班介紹影片';
    frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    frame.referrerPolicy = 'strict-origin-when-cross-origin';
    frame.allowFullscreen = true;
    player.replaceChildren(frame);
    frame.focus();
  });
});
