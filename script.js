const data = window.LANDING_CONTENT;

function renderList(id, items) {
  const root = document.getElementById(id);
  root.innerHTML = items.map((item) => `<li>${item}</li>`).join('');
}

function renderGallery(id, items) {
  const root = document.getElementById(id);
  root.innerHTML = items
    .map(
      (item) =>
        `<img src="${item.src}" alt="${item.alt}" loading="lazy" decoding="async" referrerpolicy="no-referrer" />`
    )
    .join('');
}

function renderTariffs(items) {
  const root = document.getElementById('pricing');
  root.innerHTML = items
    .map(
      (item) => `
      <article class="price-card ${item.featured ? 'price-card--featured' : ''}">
        <span class="tariff-tag">${item.tag}</span>
        <h3>${item.title}</h3>
        <p class="price">
          <span class="price__old">${item.oldPrice}</span>
          <span class="price__new">${item.newPrice}</span>
        </p>
        <ul>${item.features.map((f) => `<li>${f}</li>`).join('')}</ul>
        <p class="section-subtitle">${item.note}</p>
        <a class="btn btn--secondary" href="${item.paymentUrl}" target="_blank" rel="noopener noreferrer">${item.cta}</a>
      </article>
    `
    )
    .join('');
}

function init() {
  document.getElementById('hero-photo').src = data.hero.photo;
  document.getElementById('hero-title').textContent = data.hero.title;
  document.getElementById('hero-lead').textContent = data.hero.lead;
  document.getElementById('hero-cta').textContent = data.hero.ctaText;

  renderList('hero-audience', data.hero.audience);
  renderList('pain-list', data.painPoints);
  renderList('solution-list', data.solution);
  renderList('inside-list', data.inside);
  renderList('result-list', data.result);

  renderGallery('reviews-gallery', data.testimonials);
  renderGallery('results-gallery', data.beforeAfter);
  renderTariffs(data.tariffs);

  document.getElementById('payment-text').textContent = data.paymentText;
  document.getElementById('footer-text').textContent = data.footerText;
}

init();
