import bobaTea from './assets/bobaTea.jpg';
import bigSausageWrapSmallSausage from './assets/bigSausageWrapSmallSausage.jpg';
import tanghulu from './assets/tanghulu.jpg';
import zongzi from './assets/zongzi.jpg';
import beefNoodle from './assets/beefNoodle.jpg';
import stinkyTofu from './assets/stinkyTofu.jpg';
import xiaoLongBao from './assets/xiaoLongBao.jpg';
import lemonAiYu from './assets/lemonAiYu.jpg';
import pineappleBread from './assets/pineappleBread.jpg';
import taiwaneseDryNoodles from './assets/taiwaneseDryNoodles.jpg';

const galleryData = [
    {
        "title": "Boba Tea",
        "text": "Bubble Tea, also known as Pearl Milk Tea, originated in Taiwan in the 1980s. It's a unique combination of tea, milk, and chewy tapioca pearls, creating a beloved beverage enjoyed around the world.",
        "img": bobaTea,
        "alt": "A hand holding a cup of classic Taiwanese boba tea with a blue label, the dark pearls visible at the bottom of the cup.",
        "tag": ["snack", "drink"],
        "ingredients": ["一米杯粉圓 (tapioca pearls)", "八米杯水 (water)", "2包紅茶包 (2 tea bags)", "20克黑糖 (20g brown sugar)", "150cc鮮奶 (150cc fresh milk)"],
        "recipe": "Boil 8 cups of water, add 1 cup of tapioca pearls, stirring with a soup spoon. When it boils again, transfer to a rice cooker pot. Add 1 cup of water to the cooker and cook until it switches off. Let it sit for 30 minutes, then chill the pearls in ice water for 5 minutes. Drain the pearls, mix with brown sugar and the water used to cook them. Prepare tea with tea bags, mix in warmed milk to make milk tea. In a glass, add pearls and pour the milk tea over them."
    },
    // Big Sausage Wrap Small Sausage
    {
        "title": "Big Sausage Wrap Small Sausage",
        "text": "Da Chang Bao Xiao Chang, a popular Taiwanese street snack, consists of a grilled pork sausage wrapped in a slightly larger sticky rice sausage. Often flavored with garlic, soy sauce, and basil, it's a delightful combination of savory and sweet.",
        "img": bigSausageWrapSmallSausage,
        "alt": "A Taiwanese street food vendor preparing 'Big Sausage Wrap Small Sausage', with a sticky rice sausage encasing a smaller pork sausage.",
        "tag": ["snack", "lunch"],
        "ingredients": ["2條小黃瓜 (2 cucumbers)", "2條香腸 (2 sausages)", "300克酸菜 (300g pickled mustard greens)", "10克香油 (10g sesame oil)", "10克細砂糖 (10g fine sugar)", "半根辣椒 (1/2 chili)", "2條糯米腸 (2 sticky rice sausages)", "適量甜辣醬 (suitable amount of sweet chili sauce)"],
        "recipe": "Cut cucumbers into thin slices, mix with salt, and marinate for about 2 hours. Rinse off the salt and mix with sugar and white vinegar, then refrigerate for a day. Prick holes in the sausage, fry in a pan with oil until golden brown on both sides. Fry the sticky rice sausages in the same way. Stir fry chopped pickled mustard greens with sesame oil, sugar, and chili. Split the sticky rice sausage and spread sweet chili sauce inside, then layer with coriander, pickled greens, cucumber slices, and sausage. Top with more sweet chili sauce."
    },
    {
        "title": "Tanghulu",
        "text": "Tanghulu, also known as candied fruit, is a traditional Chinese snack. It's typically made by skewering fruits like strawberries or tomatoes on bamboo sticks and coating them in a hardened sugar syrup.",
        "img": tanghulu,
        "alt": "A vibrant display of colorful Tanghulu with various fruits coated in a shiny, crystallized sugar layer.",
        "tag": ["snack", "dessert"],
        "ingredients": ["小番茄 (small tomatoes)", "砂糖 (sugar)", "水 (water)", "其他水果 (other fruits)", "冰開水 (ice water)"],
        "recipe": "Wash and dry fruits, skewer them on bamboo sticks. Cook sugar and water in a pan without stirring until it turns golden. Quickly dip the fruit skewers into the syrup, then into ice water to harden the sugar coat."
    },
    {
        "title": "Zongzi",
        "text": "Zongzi, a traditional Chinese rice dumpling, is widely enjoyed in Taiwan during the Dragon Boat Festival. Wrapped in bamboo leaves, it's filled with glutinous rice and various ingredients like pork, egg yolk, mushrooms, and chestnuts, offering a rich and savory taste.",
        "img": zongzi,
        "alt": "Traditional Taiwanese zongzi, or sticky rice dumplings, wrapped in bamboo leaves, presented in a steaming basket with one partially unwrapped to show the filling.",
        "tag": ["breakfast", "dinner", "lunch"],
        "ingredients": ["Bamboo Leaves", "Glutinous Rice", "Dried Shiitake Mushrooms", "Shallots", "White Pepper", "Five Spice Powder", "Dried Shrimp", "Dried Radish", "Peanuts", "Soy Sauce", "Sugar", "Pork Belly", "Dark Soy Sauce", "Chinese Cooking Wine", "Star Anise", "Garlic"],
        "recipe": "Preparation involves soaking rice and leaves, frying and simmering pork belly with seasonings, cooking rice with pork sauce, and preparing other fillings. Wrapping in bamboo leaves is intricate, requiring forming cones with the leaves, adding fillings, and secure steaming."
    },
    {
        "title": "Beef Noodle",
        "text": "Taiwanese Beef Noodle is known for its rich, aromatic broth and tender beef. A comfort food favorite, it combines Chinese spices with locally influenced cooking techniques, resulting in a hearty and satisfying dish.",
        "img": beefNoodle,
        "alt": "A bowl of Taiwanese beef noodle soup with rich, clear broth, garnished with fresh herbs, sliced beef, and noodles, accompanied by condiments on the side.",
        "tag": ["dinner", "lunch"],
        "ingredients": ["Beef ribs or shank", "Carrots", "Onions", "Tomatoes", "Rice wine", "Rock sugar", "Ginger", "Garlic", "Chili", "Doubanjiang (fermented bean paste)", "Soy sauce", "Vegetarian oyster sauce", "Salt", "Star anise", "Cinnamon leaves"],
        "recipe": "Clean and cut the beef, blanch it, then stir-fry with spices, onions, carrots, and tomatoes. Add rice wine and seasoning, then simmer for 2-3 hours for a rich flavor. Adjust the saltiness to taste, and serve with noodles."
    },
    {
        "title": "Stinky Tofu",
        "text": "Stinky Tofu, a fermented tofu dish, is famous for its strong odor. Often found in night markets, it's deep-fried and served with pickled vegetables. Despite its pungent smell, it's a beloved snack for its unique flavor.",
        "img": stinkyTofu,
        "alt": "A plate of Taiwanese stinky tofu, deep-fried to golden perfection, served with pickled vegetables on the side.",
        "tag": ["snack", "dinner", "lunch"],
        "ingredients": ["Tofu", "Fermentation brine (including vegetables and spices)", "Oil for frying", "Accompaniments like pickled cabbage, spicy sauce"],
        "recipe": "Tofu is fermented in a special brine to develop its characteristic smell and taste, then deep-fried until crispy. It's typically served with pickled vegetables and a spicy sauce."
    },
    {
        "title": "Xiao Long Bao",
        "text": "Xiao Long Bao, the steamed soup dumplings that have captivated the taste buds of people worldwide, originate from the Jiangnan region of China and are a staple in Taiwanese dim sum.",
        "img": xiaoLongBao,
        "alt": "Delicate Xiao Long Bao, steamed soup dumplings, arranged in a traditional bamboo steamer.",
        "tag": ["snack", "breakfast", "lunch", "dinner"],
        "ingredients": ["Flour", "Pork", "Gelatinized broth", "Ginger", "Soy sauce"],
        "recipe": "Prepare the dough and the gelatinized broth. Wrap the pork filling and the solidified broth in the dough. Steam until cooked."
    },
    {
        "title": "Lemon Ai Yu Jelly",
        "text": "Lemon Ai Yu Jelly is a refreshing Taiwanese dessert made from the seeds of the Awkeotsang creeping fig and fresh lemon juice, perfect for cooling down on a hot day.",
        "img": lemonAiYu,
        "alt": "A cold serving of Lemon Ai Yu Jelly, garnished with a slice of lemon.",
        "tag": ["snack", "drink"],
        "ingredients": ["Ai Yu powder", "Lemon juice", "Sugar", "Water"],
        "recipe": "Dissolve Ai Yu powder in water, add sugar and lemon juice, refrigerate until set."
    },
    {
        "title": "Pineapple Bread",
        "text": "Pineapple Bread, known for its crunchy topping and soft bread, is a Taiwanese bakery favorite that doesn't necessarily contain pineapple but resembles its texture.",
        "img": pineappleBread,
        "alt": "A freshly baked Pineapple Bread with a crumbly golden-brown crust.",
        "tag": ["snack", "breakfast"],
        "ingredients": ["Flour", "Yeast", "Sugar", "Eggs", "Butter"],
        "recipe": "Make a sweet dough, let it rise, then add a crumbly topping before baking."
    },
    {
        "title": "Taiwanese Dry Noodles",
        "text": "Taiwanese Dry Noodles are a simple yet delicious dish, often served with a savory sauce, minced pork, and mustard greens.",
        "img": taiwaneseDryNoodles,
        "alt": "A plate of Taiwanese Dry Noodles with minced pork and greens.",
        "tag": ["breakfast", "lunch", "dinner"],
        "ingredients": ["Noodles", "Minced pork", "Soy sauce", "Sesame oil", "Mustard greens"],
        "recipe": "Cook noodles, stir-fry minced pork with sauce, mix together with noodles and garnish with mustard greens."
    }
]
export default galleryData;