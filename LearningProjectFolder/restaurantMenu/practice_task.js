const breakfastMenu = [
  'Pancakes - $12',
  'Eggs Benedict - $22.99',
  'Oatmeal - $21.99',
  'Frittata - $15'
];

const mainCourseMenu = [
  'Grilled Chicken - $35.50',
  'Beef Lasagna - $40',
  'Vegetable Stir Fry - $25.75',
  'Salmon Fillet - $42.99'
];

const dessertMenu = [
  'Chocolate Cake - $10',
  'Vanilla Ice Cream - $8',
  'Fruit Tart - $12.99',
  'Cheesecake - $14'
];

function renderMenu(menuArray, elementId) {
  const menuList = document.getElementById(elementId);
  menuArray.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    menuList.appendChild(listItem);
  });
}

renderMenu(breakfastMenu, 'breakfastMenu');
renderMenu(mainCourseMenu, 'mainCourseMenu');
renderMenu(dessertMenu, 'dessertMenu');
