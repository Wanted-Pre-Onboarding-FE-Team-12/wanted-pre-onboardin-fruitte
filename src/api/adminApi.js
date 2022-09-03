export const getProductList = async () => {
  const result = await fetch('/data/product.json');
  return result.json();
};
