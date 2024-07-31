import React, { useState } from 'react';
import styles from './styles.module.css';
import { FaMinus, FaPlus, FaTrash, FaChevronDown, FaChevronUp } from 'react-icons/fa';

// Import images
import paneerRollImage from './images/paneer-roll.jpeg';
import momosImage from './images/momos.jpeg';
import chowMeinImage from './images/chow-mein.jpeg';
import gulabJamunImage from './images/gulab-jamun.jpeg';
import samosaImage from './images/samosa.jpeg';
import paneerButterMasalaImage from './images/paneer-butter-masala.jpeg';
import biryaniImage from './images/biryani.jpeg';
import rajmaChawalImage from './images/rajma-chawal.jpeg';
import palakPaneerImage from './images/palak-paneer.jpeg';
import dalMakhaniImage from './images/dal-makhani.jpeg';
import dosaImage from './images/dosa.jpeg';
import idliImage from './images/idli.jpeg';
import pavBhajiImage from './images/pav-bhaji.jpeg';
import choleBhatureImage from './images/chole-bhature.jpeg';
import rasMalaiImage from './images/ras-malai.jpeg';
import jalebiImage from './images/jalebi.jpeg';
import malaiKoftaImage from './images/malai-kofta.jpeg';
import pulaoImage from './images/pulao.jpeg';
import alooTikkiImage from './images/aloo-tikki.jpeg';
import fruitSaladImage from './images/fruit-salad.jpeg';

const MenuItem = ({ item, onAdd, onRemove, isHindi }) => (
  <div className={styles.menuItem}>
    <img src={item.image} alt={item.name} />
    <div className={styles.itemDetails}>
      <h4>{isHindi ? item.nameHi : item.name}</h4>
      <p>{isHindi ? item.descriptionHi : item.description}</p>
      <div className={styles.itemActions}>
        <button onClick={() => onRemove(item)}><FaMinus /></button>
        <span>{item.quantity}</span>
        <button onClick={() => onAdd(item)}><FaPlus /></button>
      </div>
    </div>
  </div>
);

const Basket = ({ basketItems, onAdd, onRemove, isHindi }) => (
  <div className={styles.basket}>
    <h2>{isHindi ? 'खरीदी गई वस्तुएँ' : 'Basket'}</h2>
    {basketItems.length === 0 ? (
      <p>{isHindi ? 'कोई आइटम नहीं है' : 'No items in the basket'}</p>
    ) : (
      basketItems.map(item => (
        <div key={item.id} className={styles.basketItem}>
          <img src={item.image} alt={item.name} />
          <div className={styles.itemDetails}>
            <h4>{isHindi ? item.nameHi : item.name}</h4>
            <p>{isHindi ? item.descriptionHi : item.description}</p>
            <div className={styles.itemActions}>
              <button onClick={() => onRemove(item)}><FaMinus /></button>
              <span>{item.quantity}</span>
              <button onClick={() => onAdd(item)}><FaPlus /></button>
              <button onClick={() => onRemove(item, true)}><FaTrash /></button>
            </div>
          </div>
        </div>
      ))
    )}
  </div>
);

const Main = () => {
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: 'Paneer Roll', nameHi: 'पनीर रोल', description: 'Delicious paneer roll', descriptionHi: 'स्वादिष्ट पनीर रोल', category: 'fastfood', quantity: 0, image: paneerRollImage },
    { id: 2, name: 'Momos', nameHi: 'मोमोज़', description: 'Steamed momos', descriptionHi: 'स्टीम्ड मोमोज़', category: 'fastfood', quantity: 0, image: momosImage },
    { id: 3, name: 'Veg Chow Mein', nameHi: 'वेज चाउमीन', description: 'Stir-fried noodles', descriptionHi: 'तले हुए नूडल्स', category: 'chinese', quantity: 0, image: chowMeinImage },
    { id: 4, name: 'Gulab Jamun', nameHi: 'गुलाब जामुन', description: 'Sweet syrupy dessert', descriptionHi: 'मीठा सिरपयुक्त मिठाई', category: 'dessert', quantity: 0, image: gulabJamunImage },
    { id: 5, name: 'Samosa', nameHi: 'समोसा', description: 'Fried pastry with filling', descriptionHi: 'भरावन के साथ तली हुई पेस्ट्री', category: 'starters', quantity: 0, image: samosaImage },
    { id: 6, name: 'Paneer Butter Masala', nameHi: 'पनीर बटर मसाला', description: 'Paneer in creamy tomato sauce', descriptionHi: 'क्रीमी टमाटर सॉस में पनीर', category: 'maincourse', quantity: 0, image: paneerButterMasalaImage },
    { id: 7, name: 'Biryani', nameHi: 'बिरयानी', description: 'Fragrant rice dish with spices', descriptionHi: 'मसालों के साथ सुगंधित चावल की डिश', category: 'ricedishes', quantity: 0, image: biryaniImage },
    { id: 8, name: 'Rajma Chawal', nameHi: 'राजमा चावल', description: 'Kidney beans curry with rice', descriptionHi: 'राजमा करी चावल के साथ', category: 'ricedishes', quantity: 0, image: rajmaChawalImage },
    { id: 9, name: 'Palak Paneer', nameHi: 'पालक पनीर', description: 'Spinach with cottage cheese', descriptionHi: 'पनीर के साथ पालक', category: 'maincourse', quantity: 0, image: palakPaneerImage },
    { id: 10, name: 'Dal Makhani', nameHi: 'दाल मखनी', description: 'Rich lentil curry', descriptionHi: 'मसालेदार दाल करी', category: 'maincourse', quantity: 0, image: dalMakhaniImage },
    { id: 11, name: 'Dosa', nameHi: 'डोसा', description: 'South Indian crepe', descriptionHi: 'दक्षिण भारतीय क्रेप', category: 'fastfood', quantity: 0, image: dosaImage },
    { id: 12, name: 'Idli', nameHi: 'इडली', description: 'Steamed rice cakes', descriptionHi: 'स्टीम्ड चावल केक', category: 'starters', quantity: 0, image: idliImage },
    { id: 13, name: 'Pav Bhaji', nameHi: 'पाव भाजी', description: 'Spiced vegetable mash with bread', descriptionHi: 'मसालेदार सब्जी मैश के साथ ब्रेड', category: 'fastfood', quantity: 0, image: pavBhajiImage },
    { id: 14, name: 'Chole Bhature', nameHi: 'छोले भटूरे', description: 'Spicy chickpeas with fried bread', descriptionHi: 'मसालेदार छोले तली हुई ब्रेड के साथ', category: 'maincourse', quantity: 0, image: choleBhatureImage },
    { id: 15, name: 'Ras Malai', nameHi: 'रास मलाई', description: 'Sweet paneer in creamy sauce', descriptionHi: 'क्रीमी सॉस में मीठा पनीर', category: 'dessert', quantity: 0, image: rasMalaiImage },
    { id: 16, name: 'Jalebi', nameHi: 'जलेबी', description: 'Sweet crispy spirals', descriptionHi: 'मीठे कुरकुरे स्पाइरल्स', category: 'dessert', quantity: 0, image: jalebiImage },
    { id: 17, name: 'Malai Kofta', nameHi: 'मलाई कोफ्ता', description: 'Creamy curry with paneer dumplings', descriptionHi: 'पनीर के कोफ्ते के साथ क्रीमी करी', category: 'maincourse', quantity: 0, image: malaiKoftaImage },
    { id: 18, name: 'Pulao', nameHi: 'पुलाव', description: 'Rice cooked with vegetables and spices', descriptionHi: 'सब्जियों और मसालों के साथ पकाया हुआ चावल', category: 'ricedishes', quantity: 0, image: pulaoImage },
    { id: 19, name: 'Aloo Tikki', nameHi: 'आलू टिक्की', description: 'Spiced potato patties', descriptionHi: 'मसालेदार आलू की टिक्की', category: 'starters', quantity: 0, image: alooTikkiImage },
    { id: 20, name: 'Fruit Salad', nameHi: 'फ्रूट सलाद', description: 'Mixed fresh fruits', descriptionHi: 'मिश्रित ताजे फल', category: 'starters', quantity: 0, image: fruitSaladImage },
  ]);

  const [basket, setBasket] = useState([]);
  const [isHindi, setIsHindi] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const addToBasket = (item) => {
    const exists = basket.find(x => x.id === item.id);
    if (exists) {
      setBasket(basket.map(x => x.id === item.id ? { ...exists, quantity: exists.quantity + 1 } : x));
    } else {
      setBasket([...basket, { ...item, quantity: 1 }]);
    }
  };

  const removeFromBasket = (item, removeAll = false) => {
    const exists = basket.find(x => x.id === item.id);
    if (exists.quantity === 1 || removeAll) {
      setBasket(basket.filter(x => x.id !== item.id));
    } else {
      setBasket(basket.map(x => x.id === item.id ? { ...exists, quantity: exists.quantity - 1 } : x));
    }
  };

  const toggleLanguage = () => setIsHindi(!isHindi);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const categorizedItems = {
    fastfood: [],
    chinese: [],
    dessert: [],
    starters: [],
    maincourse: [],
    ricedishes: [],
  };

  menuItems.forEach(item => {
    categorizedItems[item.category].push(item);
  });

  return (
    <div className={`${styles.container} ${isDarkMode ? styles.dark : styles.light}`}>
      <header className={styles.header}>
        <h1>{isHindi ? 'रेस्टोरेंट मेनू' : 'Restaurant Menu'}</h1>
        <div className={styles.headerButtons}>
          <button onClick={toggleTheme}>
            {isDarkMode ? <FaChevronDown /> : <FaChevronUp />} {isHindi ? 'अंधेरा' : 'Dark'}
          </button>
          <button onClick={toggleLanguage}>
            {isHindi ? 'अंग्रेज़ी' : 'हिंदी'}
          </button>
        </div>
      </header>
      <main>
        <div className={styles.menuCategories}>
          {Object.keys(categorizedItems).map(category => (
            <div key={category} className={styles.menuCategory}>
              <h2>{isHindi ? {
                fastfood: 'फास्ट फूड',
                chinese: 'चाइनीज़',
                dessert: 'मिठाई',
                starters: 'स्टार्टर',
                maincourse: 'मुख्य कोर्स',
                ricedishes: 'चावल की डिश',
              }[category] : category}</h2>
              {categorizedItems[category].map(item => (
                <MenuItem
                  key={item.id}
                  item={item}
                  onAdd={addToBasket}
                  onRemove={removeFromBasket}
                  isHindi={isHindi}
                />
              ))}
            </div>
          ))}
        </div>
        <Basket
          basketItems={basket}
          onAdd={addToBasket}
          onRemove={removeFromBasket}
          isHindi={isHindi}
        />
      </main>
    </div>
  );
};

export default Main;
