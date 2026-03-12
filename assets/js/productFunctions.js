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
  const productCardEl = document.createElement('article');
  productCardEl.classList.add('product-card');

  const productImageContainerEl = document.createElement('div');
  productImageContainerEl.classList.add('product-image-container');

  const productImageEl = document.createElement('img');
  productImageEl.src = imageSrc;
  productImageEl.alt = title;

  productImageContainerEl.append(productImageEl);

  const productTitleEl = document.createElement('div');
  productTitleEl.classList.add('product-title');
  productTitleEl.textContent = title;

  const productInfoEl = document.createElement('div');
  productInfoEl.classList.add('product-info');

  const productPriceEl = document.createElement('div');
  productPriceEl.classList.add('product-price');
  productPriceEl.textContent = `${price} $`;

  const productRatingEl = document.createElement('div');
  productRatingEl.classList.add('product-rating');

  const ratingValueEl = document.createElement('span');
  ratingValueEl.textContent = rate;

  const ratingIconEl = document.createElement('i');
  ratingIconEl.classList.add('fa-solid', 'fa-star');

  productRatingEl.append(ratingValueEl, ratingIconEl);

  productInfoEl.append(productPriceEl, productRatingEl);

  productCardEl.append(productImageContainerEl, productTitleEl, productInfoEl);

  return productCardEl;
}
