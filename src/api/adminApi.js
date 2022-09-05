export const getProductList = async (page, limit) => {
  const result = await fetch('/data/product.json');
  const productList = await result.json();
  const totalSize = productList.length;
  const startIndex = (page - 1) * limit;
  // console.log(productList.splice((page *) listSize,listSize));

  return [productList.splice(startIndex, limit), totalSize];
};
