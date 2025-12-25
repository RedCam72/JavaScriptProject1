const breakfastMenu = ['Pancakes - $5.00', 'Eggs Benedict - $7.50', 'Oatmeal - $2.50', 'Frittata - $6.00'];
const mainCourseMenu = ['Steak - $10.50', 'Pasta - $8.50', 'Burger - $7.00', 'Salmon - $10.00'];
const dessertMenu = ['Cake - $5.00', 'Ice Cream - $2.50', 'Pudding - $2.00', 'Fruit Salad - $3.00'];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
        document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;