const INTERVAL_30_MINUTES = 60 * 30 * 1000;

function lookForUpdades() {}

setInterval(lookForUpdades, INTERVAL_30_MINUTES);

function calculateDiscount(price, discount) {
  const calculateDiscountValue = price * (discount / 100);

  const priceWithDiscount = price - calculateDiscountValue;

  return priceWithDiscount;
}
