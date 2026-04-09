(function () {
  const content = window.LANDING_CONTENT;
  if (!content) return;

  const setText = (id, text) => {
    const element = document.getElementById(id);
    if (element) element.textContent = text;
  };

  const fillList = (id, items) => {
    const list = document.getElementById(id);
    if (!list || !Array.isArray(items)) return;

    list.innerHTML = "";
    items.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      list.appendChild(li);
    });
  };

  const fillGallery = (id, images, titlePrefix) => {
    const container = document.getElementById(id);
    if (!container || !Array.isArray(images)) return;

    container.innerHTML = "";
    images.forEach((src, index) => {
      const figure = document.createElement("figure");
      figure.className = "gallery__item";

      const img = document.createElement("img");
      img.src = src;
      img.alt = `${titlePrefix} ${index + 1}`;
      img.loading = "lazy";

      figure.appendChild(img);
      container.appendChild(figure);
    });
  };

  const heroImage = document.getElementById("heroImage");
  if (heroImage) {
    heroImage.src = content.heroImage;
    heroImage.alt = content.heroImageAlt;
  }

  setText("heroBadge", content.heroBadge);
  setText("heroTitle", content.heroTitle);
  setText("heroSubtitle", content.heroSubtitle);
  setText("heroButton", content.heroButtonText);

  setText("recognitionTitle", content.recognition.title);
  fillList("recognitionList", content.recognition.items);

  setText("solutionTitle", content.solution.title);
  setText("solutionLead", content.solution.lead);
  fillList("solutionList", content.solution.items);

  setText("insideTitle", content.inside.title);
  const insideCards = document.getElementById("insideCards");
  if (insideCards) {
    insideCards.innerHTML = "";
    content.inside.cards.forEach((cardText) => {
      const article = document.createElement("article");
      article.className = "mini-card";
      article.textContent = cardText;
      insideCards.appendChild(article);
    });
  }

  setText("outcomeTitle", content.outcome.title);
  fillList("outcomeList", content.outcome.items);

  setText("socialProofTitle", content.socialProof.title);
  setText("reviewsTitle", content.socialProof.reviewsTitle);
  setText("resultsTitle", content.socialProof.resultsTitle);
  setText("beforeAfterTitle", content.socialProof.beforeAfterTitle);

  fillGallery("reviewsGallery", content.socialProof.reviews, content.socialProof.reviewsTitle);
  fillGallery("resultsGallery", content.socialProof.results, content.socialProof.resultsTitle);
  fillGallery("beforeAfterGallery", content.socialProof.beforeAfter, content.socialProof.beforeAfterTitle);

  setText("tariffsTitle", content.tariffsTitle);
  const tariffList = document.getElementById("tariffList");
  if (tariffList) {
    tariffList.innerHTML = "";

    Object.values(content.tariffs).forEach((tariff) => {
      const card = document.createElement("article");
      card.className = `tariff-card${tariff.id === "club" ? " tariff-card--featured" : ""}`;

      const label = document.createElement("p");
      label.className = "tariff-card__label";
      label.textContent = tariff.label;

      const name = document.createElement("h3");
      name.className = "tariff-card__name";
      name.textContent = tariff.name;

      card.append(label, name);

      if (tariff.badge) {
        const badge = document.createElement("p");
        badge.className = "tariff-card__popular";
        badge.textContent = tariff.badge;
        card.appendChild(badge);
      }

      const price = document.createElement("div");
      price.className = "price";
      price.innerHTML = `<span class="price__old">${tariff.oldPrice}</span><span class="price__new">${tariff.price}</span>`;
      card.appendChild(price);

      const features = document.createElement("ul");
      features.className = "list";
      tariff.features.forEach((featureText) => {
        const li = document.createElement("li");
        li.textContent = featureText;
        features.appendChild(li);
      });
      card.appendChild(features);

      const access = document.createElement("p");
      access.className = "access";
      access.textContent = tariff.access;
      card.appendChild(access);

      const button = document.createElement("a");
      button.className = "btn btn--primary";
      button.href = content.paymentLinks[tariff.id] || "#";
      button.target = "_blank";
      button.rel = "noopener noreferrer";
      button.textContent = tariff.buttonText;
      card.appendChild(button);

      tariffList.appendChild(card);
    });
  }

  setText("faqTitle", content.faq.title);
  const faqAccordion = document.getElementById("faqAccordion");
  if (faqAccordion) {
    faqAccordion.innerHTML = "";

    content.faq.items.forEach((item) => {
      const faqItem = document.createElement("article");
      faqItem.className = "faq-item";

      const button = document.createElement("button");
      button.type = "button";
      button.innerHTML = `${item.question}<span>+</span>`;

      const answer = document.createElement("div");
      answer.className = "faq-item__answer";
      answer.textContent = item.answer;

      button.addEventListener("click", () => {
        const open = faqItem.classList.toggle("faq-item--open");
        const icon = button.querySelector("span");
        if (icon) icon.textContent = open ? "−" : "+";
      });

      faqItem.append(button, answer);
      faqAccordion.appendChild(faqItem);
    });
  }

  setText("finalCtaTitle", content.finalCta.title);
  setText("finalCtaText", content.finalCta.text);

  const finalCtaActions = document.getElementById("finalCtaActions");
  if (finalCtaActions) {
    finalCtaActions.innerHTML = "";

    Object.values(content.tariffs).forEach((tariff) => {
      const link = document.createElement("a");
      link.className = "btn btn--primary";
      link.textContent = `${tariff.buttonText}: ${tariff.name}`;
      link.href = content.paymentLinks[tariff.id] || "#";
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      finalCtaActions.appendChild(link);
    });
  }

  const telegramButton = document.getElementById("telegramButton");
  if (telegramButton) {
    telegramButton.textContent = content.finalCta.telegramButtonText;
    telegramButton.href = content.telegramLink;
  }

  setText("stickyTariffButton", content.stickyTariffButtonText);
})();
