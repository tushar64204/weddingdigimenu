import React, { useState } from 'react';
import './App.css';
import { FaMinus, FaPlus, FaTrash, FaChevronDown, FaChevronUp } from 'react-icons/fa';


// Import images
import paneerRollImage from './paneer-roll.jpeg';
import momosImage from './momos.jpeg';
import chowMeinImage from './chow-mein.jpeg';
import gulabJamunImage from './gulab-jamun.jpeg';
import samosaImage from './samosa.jpeg';
import paneerButterMasalaImage from './paneer-butter-masala.jpeg';
import biryaniImage from './biryani.jpeg';
import rajmaChawalImage from './rajma-chawal.jpeg';
import palakPaneerImage from './palak-paneer.jpeg';
import dalMakhaniImage from './dal-makhani.jpeg';
import dosaImage from './dosa.jpeg';
import idliImage from './idli.jpeg';
import pavBhajiImage from './pav-bhaji.jpeg';
import choleBhatureImage from './chole-bhature.jpeg';
import rasMalaiImage from './ras-malai.jpeg';
import jalebiImage from './jalebi.jpeg';
import malaiKoftaImage from './malai-kofta.jpeg';
import pulaoImage from './pulao.jpeg';
import alooTikkiImage from './aloo-tikki.jpeg';
import fruitSaladImage from './fruit-salad.jpeg';

const MenuItem = ({ item, onAdd, onRemove, isHindi }) => (
  <div className="menu-item">
    <img src={item.image} alt={item.name} />
    <div className="item-details">
      <h4>{isHindi ? item.nameHi : item.name}</h4>
      <p>{isHindi ? item.descriptionHi : item.description}</p>
      <div className="item-actions">
        <button onClick={() => onRemove(item)}><FaMinus /></button>
        <span>{item.quantity}</span>
        <button onClick={() => onAdd(item)}><FaPlus /></button>
      </div>
    </div>
  </div>
);
// Basket Component
const Basket = ({ basketItems, onAdd, onRemove, isHindi }) => (
  <div className="basket">
    <h2>{isHindi ? 'खरीदी गई वस्तुएँ' : 'Basket'}</h2>
    {basketItems.length === 0 ? (
      <p>{isHindi ? 'कोई आइटम नहीं है' : 'No items in the basket'}</p>
    ) : (
      basketItems.map(item => (
        <div key={item.id} className="basket-item">
          <img src={item.image} alt={item.name} />
          <div className="item-details">
            <h4>{isHindi ? item.nameHi : item.name}</h4>
            <p>{isHindi ? item.descriptionHi : item.description}</p>
            <div className="item-actions">
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


const App = () => {
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
    { id: 20, name: 'Fruit Salad', nameHi: 'फ्रूट सलाद', description: 'Fresh fruit mix', descriptionHi: 'ताजे फलों का मिश्रण', category: 'dessert', quantity: 0, image: fruitSaladImage },
  ]);

  const [name, setName] = useState('');
  const [tableNumber, setTableNumber] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [isHindi, setIsHindi] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isBasketOpen, setIsBasketOpen] = useState(true);

  const handleAdd = (item) => {
    setMenuItems(menuItems.map(i =>
      i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
    ));
  };

  const handleRemove = (item) => {
    setMenuItems(menuItems.map(i =>
      i.id === item.id && i.quantity > 0 ? { ...i, quantity: i.quantity - 1 } : i
    ));
  };

  const handleCheckout = () => {
    const orderItems = menuItems.filter(item => item.quantity > 0)
      .map(item => `${isHindi ? item.nameHi : item.name} x ${item.quantity}`).join(', ');

    const message = `Name: ${name}\nTable: ${tableNumber}\nOrder: ${orderItems}`;
    const whatsappUrl = `https://wa.me/919817409607?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
  };

  const filteredItems = menuItems.filter(item => {
    return (category === 'all' || item.category === category) &&
      (item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.description.toLowerCase().includes(searchTerm.toLowerCase()));
  });

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
      <header className="App-header">
        <div className="wedding-board">
          <h1>{isHindi ? 'शादी का मेन्यू' : 'Wedding Menu'}</h1>
          <div className="lighting"></div>
        </div>
      </header>

      <div className="controls">
        <button onClick={() => setIsHindi(!isHindi)}>{isHindi ? 'English' : 'हिंदी'}</button>
        <button onClick={() => setIsDarkMode(!isDarkMode)}>{isDarkMode ? (isHindi ? 'प्रकाश मोड' : 'Light Mode') : (isHindi ? 'डार्क मोड' : 'Dark Mode')}</button>
        <input
          type="text"
          placeholder={isHindi ? 'खोजें...' : 'Search...'}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="categories">
        <button onClick={() => setCategory('all')}>{isHindi ? 'सभी' : 'All'}</button>
        <button onClick={() => setCategory('fastfood')}>{isHindi ? 'फास्ट फूड' : 'Fast Food'}</button>
        <button onClick={() => setCategory('maincourse')}>{isHindi ? 'मुख्य पाठ्यक्रम' : 'Main Course'}</button>
        <button onClick={() => setCategory('chinese')}>{isHindi ? 'चाइनीज' : 'Chinese Special'}</button>
        <button onClick={() => setCategory('dessert')}>{isHindi ? 'मिठाई' : 'Dessert'}</button>
        <button onClick={() => setCategory('ricedishes')}>{isHindi ? 'चावल के व्यंजन' : 'Rice Dishes'}</button>
        <button onClick={() => setCategory('starters')}>{isHindi ? 'स्टार्टर्स' : 'Starters'}</button>
      </div>
      <div className="menu-list">
        {filteredItems.map(item => (
          <MenuItem
            key={item.id}
            item={item}
            onAdd={handleAdd}
            onRemove={handleRemove}
            isHindi={isHindi}
          />
        ))}
      </div>

      <div className={`basket ${isBasketOpen ? 'open' : 'closed'}`}>
        <div className="basket-header">
          <h2>{isHindi ? 'आपकी टोकरी' : 'Your Basket'}</h2>
          <button onClick={() => setIsBasketOpen(!isBasketOpen)}>
            {isBasketOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>
        </div>
        {isBasketOpen && (
          <div className="basket-content">
            {menuItems.filter(item => item.quantity > 0).map(item => (
              <div key={item.id} className="basket-item">
                <img src={item.image} alt={item.name} />
                <div className="basket-item-details">
                  <div className="basket-item-name">{isHindi ? item.nameHi : item.name}</div>
                  <div className="basket-item-description">{isHindi ? item.descriptionHi : item.description}</div>
                </div>
                <div className="basket-item-actions">
                  <button onClick={() => handleRemove(item)}><FaMinus /></button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleAdd(item)}><FaPlus /></button>
                  <button onClick={() => handleRemove(item)}><FaTrash /></button>
                </div>
              </div>
            ))}
            <div className="basket-footer">
              <button onClick={handleCheckout}>
                {isHindi ? 'व्हाट्सएप पर भेजें' : 'Send on WhatsApp'}
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="checkout-form">
        <h2>{isHindi ? 'चेकआउट' : 'Checkout'}</h2>
        <input
          type="text"
          placeholder={isHindi ? 'नाम' : 'Name'}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder={isHindi ? 'टेबल नंबर' : 'Table Number'}
          value={tableNumber}
          onChange={(e) => setTableNumber(e.target.value)}
        />
        <button className="checkout-button" onClick={handleCheckout}>
          {isHindi ? 'व्हाट्सएप पर भेजें' : 'Send on WhatsApp'}
        </button>
      </div>
    </div>
  );
};

export default App;