const listCategories = document.querySelectorAll('#categories .item');

console.log(`Number of categories: ${listCategories.length}`);

listCategories.forEach(category => {
  const categoryTitle = category.querySelector('h2').textContent;
  const itemsCount = category.querySelectorAll('ul li').length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${itemsCount}`);
});
