function generateProductCards(products) {
  products.forEach((p) => {
    render(createProductCard(p));
  });
}

function render(productCardEl) {
  const listItemEl = document.createElement('li');

  listItemEl.append(productCardEl);
  listElement.append(listItemEl);
}

function createProductCard({
  image: imageSrc,
  title,
  price,
  rating: { rate },
}) {
  const productImageEl = createElement('img', {
    attributes: {
      src: imageSrc,
      alt: title,
    },
  });

  const productImageContainerEl = createElement(
    'div',
    {
      classNames: ['product-image-container'],
    },
    productImageEl
  );

  const productTitleEl = createElement(
    'div',
    { classNames: ['product-title'] },
    title
  );

  const productPriceEl = createElement(
    'div',
    { classNames: ['product-price'] },
    `${price} $`
  );

  const ratingValueEl = createElement('span', {}, rate);

  const ratingIconEl = createElement('i', {
    classNames: ['fa-solid', 'fa-star'],
  });

  const productRatingEl = createElement(
    'div',
    {
      classNames: ['product-rating'],
    },
    ratingValueEl,
    ratingIconEl
  );

  const productInfoEl = createElement(
    'div',
    { classNames: ['product-info'] },
    productPriceEl,
    productRatingEl
  );

  const productCardEl = createElement(
    'article',
    {
      classNames: ['product-card'],
    },
    productImageContainerEl,
    productTitleEl,
    productInfoEl
  );

  return productCardEl;
}
