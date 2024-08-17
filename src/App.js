import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import './App.css';
import { FaMinus, FaPlus, FaTrash, FaChevronDown, FaChevronUp, FaShoppingBasket } from 'react-icons/fa';


// Import images


// maincourse
import logo from './images/logo.png'; // Adjust the path to your logo
import dalFryImage from './images/DalFry.jpg';
import dalTadkaImage from './images/daltadka.jpg';
import dalHaryaliImage from './images/dal-haryali.jpg';
import dalMakhaniImage from './images/Dal-Makhani.jpg';
import dalHandiImage from './images/dal-handi.jpg';
import rajmaFryImage from './images/rajma-fry.jpg';
import chanaMasalaImage from './images/chana-masala.jpg';
import kadhiFryImage from './images/kadhi-fry.png';
import shahiPaneerImage from './images/shahi_paneer.jpg';
import kadhaiPaneerImage from './images/kadhai-paneer.jpg';
import matarPaneerImage from './images/matar-paneer.png';
import paneerButterMasalaImage from './images/paneer-butter-masala.png';
import paneerDopyazaImage from './images/PANNER-DO-PYAJA.jpg';
import paneerHandiImage from './images/paneer-handi.jpg';
import paneerBhurjiImage from './images/paneer-bhurji-recipe.jpg';
import paneerLababdarImage from './images/paneerlababdar.jpg';
import paneerPasondaImage from './images/paneer-pasonda.png';
import tandooriPaneerImage from './images/tandoori-paneer.jpg';
import mushroomButterMasalaImage from './images/mushrooom-butter-masala.jpg';
import matarMushroomImage from './images/matar-mushroom.png';
import mushroomDopyazaImage from './images/mushroom-dopyaza.png';
import tandooriMushroomImage from './images/tandoori-mushroom.jpeg';
import kadhaiMushroomImage from './images/kadhaimushroom.png';
import dumAlooImage from './images/damaloo.png';
import jeeraAlooImage from './images/AlooJeera.jpg';
import mixVegImage from './images/mixveg.png';
import malaiKoftaImage from './images/Malai-Kofta.jpg';
import matarGobhiImage from './images/aloo-gobi-matar.jpg';
import paneerGobhiImage from './images/gobi-paneer.jpg';
import sevBhajiImage from './images/sevbhaji.jpg';
import cheeseTomatoImage from './images/cheesetomato.jpg';
import palakPaneerImage from './images/palakpaneer.png';
import tomatoChutneyImage from './images/tomatochatny.png';
import paneerMethiMalaiImage from './images/Methi-Malai-Paneer.jpg';
import mushroomImage from './images/mushroom.jpg';
import vegKohlapuriImage from './images/Veg-Kolhapuri.jpg';


// Define the tax rate
const TAX_RATE = 0.05; // Example 18% tax rate

// Component for displaying menu items
const MenuItem = ({ item, onAdd, onRemove, isHindi }) => (
  <div className="menu-item">
    <img src={item.image} alt={item.name} />
    <div className="item-details">
      <h4>{isHindi ? item.nameHi : item.name}</h4>
      <p>{isHindi ? item.descriptionHi : item.description}</p>
      <p>{isHindi ? `कीमत: ₹${item.price}` : `Price: ₹${item.price}`}</p>
      <div className="item-actions">
        <button onClick={() => onRemove(item)}><FaMinus /></button>
        <span>{item.quantity}</span>
        <button onClick={() => onAdd(item)}><FaPlus /></button>
      </div>
    </div>
  </div>
);

// Component for displaying the basket items
// const Basket = ({ basketItems, onAdd, onRemove, isHindi, subtotal, tax, total }) => (
//   <div className="basket">
//     <h2>{isHindi ? 'खरीदी गई वस्तुएँ' : 'Basket'}</h2>
//     {basketItems.length === 0 ? (
//       <p>{isHindi ? 'कोई आइटम नहीं है' : 'No items in the basket'}</p>
//     ) : (
//       <div>
//         {basketItems.map(item => (
//           <div key={item.id} className="basket-item">
//             <img src={item.image} alt={item.name} />
//             <div className="item-details">
//               <h4>{isHindi ? item.nameHi : item.name}</h4>
//               <p>{isHindi ? item.descriptionHi : item.description}</p>
//               <div className="item-actions">
//                 <button onClick={() => onRemove(item)}><FaMinus /></button>
//                 <span>{item.quantity}</span>
//                 <button onClick={() => onAdd(item)}><FaPlus /></button>
//                 <button onClick={() => onRemove(item, true)}><FaTrash /></button>
//               </div>
//             </div>
//           </div>
//         ))}
//         <div className="basket-summary">
//           <p>{isHindi ? `उप-योग: ₹${subtotal}` : `Subtotal: ₹${subtotal}`}</p>
//           <p>{isHindi ? `कर (${TAX_RATE * 100}%): ₹${tax}` : `Tax (${TAX_RATE * 100}%): ₹${tax}`}</p>
//           <h3>{isHindi ? `कुल: ₹${total}` : `Total: ₹${total}`}</h3>
//         </div>
//       </div>
//     )}
//   </div>
// );

const App = () => {
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: 'Dal Fry', nameHi: 'दाल फ्राई', description: 'Flavorful dal fry', descriptionHi: 'स्वादिष्ट दाल फ्राई', category: 'maincourse', quantity: 0, price: 120, image: dalFryImage },
    { id: 2, name: 'Dal Tadka', nameHi: 'दाल तड़का', description: 'Spiced dal tadka', descriptionHi: 'मसालेदार दाल तड़का', category: 'maincourse', quantity: 0, price: 130, image: dalTadkaImage },
    { id: 3, name: 'Dal Haryali', nameHi: 'दाल हरियाली', description: 'Green herb dal', descriptionHi: 'हरी जड़ी-बूटी की दाल', category: 'maincourse', quantity: 0, price: 140, image: dalHaryaliImage },
    { id: 4, name: 'Dal Makhani', nameHi: 'दाल मखनी', description: 'Creamy dal makhani', descriptionHi: 'क्रीमी दाल मखनी', category: 'maincourse', quantity: 0, price: 160, image: dalMakhaniImage },
    { id: 5, name: 'Dal Handi', nameHi: 'दाल हांडी', description: 'Traditional handi dal', descriptionHi: 'पारंपरिक हांडी दाल', category: 'maincourse', quantity: 0, price: 150, image: dalHandiImage },
    { id: 6, name: 'Rajma Fry', nameHi: 'राजमा फ्राई', description: 'Fried rajma curry', descriptionHi: 'तली हुई राजमा करी', category: 'maincourse', quantity: 0, price: 140, image: rajmaFryImage },
    { id: 7, name: 'Chana Masala', nameHi: 'चना मसाला', description: 'Spiced chickpea curry', descriptionHi: 'मसालेदार चना करी', category: 'maincourse', quantity: 0, price: 130, image: chanaMasalaImage },
    { id: 8, name: 'Kadhi Fry', nameHi: 'कढ़ी फ्राई', description: 'Fried kadhi curry', descriptionHi: 'तली हुई कढ़ी करी', category: 'maincourse', quantity: 0, price: 110, image: kadhiFryImage },
    { id: 9, name: 'Shahi Paneer', nameHi: 'शाही पनीर', description: 'Rich shahi paneer', descriptionHi: 'रिच शाही पनीर', category: 'maincourse', quantity: 0, price: 170, image: shahiPaneerImage },
    { id: 10, name: 'Kadhai Paneer', nameHi: 'कड़ाही पनीर', description: 'Paneer in kadhai masala', descriptionHi: 'कड़ाही मसाला में पनीर', category: 'maincourse', quantity: 0, price: 160, image: kadhaiPaneerImage },
    { id: 11, name: 'Matar Paneer', nameHi: 'मटर पनीर', description: 'Paneer with peas', descriptionHi: 'मटर के साथ पनीर', category: 'maincourse', quantity: 0, price: 150, image: matarPaneerImage },
    { id: 12, name: 'Paneer Butter Masala', nameHi: 'पनीर बटर मसाला', description: 'Paneer in butter masala', descriptionHi: 'बटर मसाला में पनीर', category: 'maincourse', quantity: 0, price: 180, image: paneerButterMasalaImage },
    { id: 13, name: 'Paneer Dopyaza', nameHi: 'पनीर दोप्याजा', description: 'Paneer with onions', descriptionHi: 'प्याज के साथ पनीर', category: 'maincourse', quantity: 0, price: 160, image: paneerDopyazaImage },
    { id: 14, name: 'Paneer Handi', nameHi: 'पनीर हांडी', description: 'Paneer in handi', descriptionHi: 'हांडी में पनीर', category: 'maincourse', quantity: 0, price: 170, image: paneerHandiImage },
    { id: 15, name: 'Paneer Bhurji', nameHi: 'पनीर भुर्जी', description: 'Scrambled paneer', descriptionHi: 'पनीर भुर्जी', category: 'maincourse', quantity: 0, price: 140, image: paneerBhurjiImage },
    { id: 16, name: 'Paneer Lababdar', nameHi: 'पनीर लबाबदार', description: 'Rich paneer curry', descriptionHi: 'रिच पनीर करी', category: 'maincourse', quantity: 0, price: 190, image: paneerLababdarImage },
    { id: 17, name: 'Paneer Pasonda', nameHi: 'पनीर पासोंडा', description: 'Paneer in spiced gravy', descriptionHi: 'मसालेदार ग्रेवी में पनीर', category: 'maincourse', quantity: 0, price: 200, image: paneerPasondaImage },
    { id: 18, name: 'Tandoori Paneer', nameHi: 'तंदूरी पनीर', description: 'Grilled tandoori paneer', descriptionHi: 'ग्रिल्ड तंदूरी पनीर', category: 'maincourse', quantity: 0, price: 210, image: tandooriPaneerImage },
    { id: 19, name: 'Mushroom Butter Masala', nameHi: 'मशरूम बटर मसाला', description: 'Mushrooms in butter masala', descriptionHi: 'बटर मसाला में मशरूम', category: 'maincourse', quantity: 0, price: 190, image: mushroomButterMasalaImage },
    { id: 20, name: 'Matar Mushroom', nameHi: 'मटर मशरूम', description: 'Mushrooms with peas', descriptionHi: 'मटर के साथ मशरूम', category: 'maincourse', quantity: 0, price: 160, image: matarMushroomImage },
    { id: 21, name: 'Mushroom Dopyaza', nameHi: 'मशरूम दोप्याजा', description: 'Mushrooms with onions', descriptionHi: 'प्याज के साथ मशरूम', category: 'maincourse', quantity: 0, price: 180, image: mushroomDopyazaImage },
    { id: 22, name: 'Tandoori Mushroom', nameHi: 'तंदूरी मशरूम', description: 'Grilled tandoori mushrooms', descriptionHi: 'ग्रिल्ड तंदूरी मशरूम', category: 'maincourse', quantity: 0, price: 220, image: tandooriMushroomImage },
    { id: 23, name: 'Kadhai Mushroom', nameHi: 'कड़ाही मशरूम', description: 'Mushrooms in kadhai masala', descriptionHi: 'कड़ाही मसाला में मशरूम', category: 'maincourse', quantity: 0, price: 180, image: kadhaiMushroomImage },
    { id: 24, name: 'Dum Aloo', nameHi: 'दम आलू', description: 'Potato dumplings in gravy', descriptionHi: 'ग्रेवी में आलू दम', category: 'maincourse', quantity: 0, price: 140, image: dumAlooImage },
    { id: 25, name: 'Jeera Aloo', nameHi: 'जीरा आलू', description: 'Potatoes with cumin', descriptionHi: 'जीरे के साथ आलू', category: 'maincourse', quantity: 0, price: 120, image: jeeraAlooImage },
    { id: 26, name: 'Mix Veg', nameHi: 'मिक्स वेज', description: 'Mixed vegetables', descriptionHi: 'मिश्रित सब्जियां', category: 'maincourse', quantity: 0, price: 130, image: mixVegImage },
    { id: 27, name: 'Malai Kofta', nameHi: 'मलाई कोफ्ता', description: 'Kofta in creamy gravy', descriptionHi: 'क्रीमी ग्रेवी में कोफ्ता', category: 'maincourse', quantity: 0, price: 200, image: malaiKoftaImage },
    { id: 28, name: 'Matar Gobhi', nameHi: 'मटर गोभी', description: 'Peas with cauliflower', descriptionHi: 'मटर के साथ गोभी', category: 'maincourse', quantity: 0, price: 130, image: matarGobhiImage },
    { id: 29, name: 'Paneer Gobhi', nameHi: 'पनीर गोभी', description: 'Paneer with cauliflower', descriptionHi: 'गोभी के साथ पनीर', category: 'maincourse', quantity: 0, price: 150, image: paneerGobhiImage },
    { id: 30, name: 'Sev Bhaji', nameHi: 'सेव भाजी', description: 'Sev in spicy gravy', descriptionHi: 'मसालेदार ग्रेवी में सेव', category: 'maincourse', quantity: 0, price: 140, image: sevBhajiImage },
    { id: 31, name: 'Cheese Tomato', nameHi: 'चीज़ टमाटर', description: 'Cheese with tomatoes', descriptionHi: 'टमाटर के साथ चीज़', category: 'maincourse', quantity: 0, price: 180, image: cheeseTomatoImage },
    { id: 32, name: 'Palak Paneer', nameHi: 'पालक पनीर', description: 'Paneer with spinach', descriptionHi: 'पालक के साथ पनीर', category: 'maincourse', quantity: 0, price: 190, image: palakPaneerImage },
    { id: 33, name: 'Tomato Chutney', nameHi: 'टमाटर चटनी', description: 'Spiced tomato chutney', descriptionHi: 'मसालेदार टमाटर चटनी', category: 'maincourse', quantity: 0, price: 120, image: tomatoChutneyImage },
    { id: 34, name: 'Paneer Methi Malai', nameHi: 'पनीर मेथी मलाई', description: 'Paneer with fenugreek', descriptionHi: 'मेथी के साथ पनीर', category: 'maincourse', quantity: 0, price: 200, image: paneerMethiMalaiImage },
    { id: 35, name: 'Mushroom', nameHi: 'मशरूम', description: 'Delicious mushrooms', descriptionHi: 'स्वादिष्ट मशरूम', category: 'maincourse', quantity: 0, price: 150, image: mushroomImage },
    { id: 36, name: 'Veg. Kohlapuri', nameHi: 'वेज. कोल्हापुरी', description: 'Spicy veg Kohlapuri', descriptionHi: 'मसालेदार वेज कोल्हापुरी', category: 'maincourse', quantity: 0, price: 210, image: vegKohlapuriImage },

  ]);

 
  const [name, setName] = useState('');
  const [tableNumber, setTableNumber] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [isHindi, setIsHindi] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isBasketOpen, setIsBasketOpen] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState(''); // Payment method state
  

  const UpiPayment = ({ grandTotal }) => {
    
    // const [paymentMethod, setPaymentMethod] = useState("");
    const upiId = "9817409607@ybl";
  
    // const handlePaymentMethodChange = (event) => {
    //   setPaymentMethod(event.target.value);
    // };
  
    const upiLink = `upi://pay?pa=${upiId}&pn=PaperPalace&am=${grandTotal}&tn=Payment for Chaupad Food`;
  
    return (
      <div className="upi-container">
        <div className="payment-content">
          <h1>Thankyou for choosing us</h1>
         
            <div id="upiDetails">
              <h2>Send Money via UPI</h2>
              <p>Scan the QR code below or click the button to make a payment of ₹{grandTotal}:</p>
              <p>GST number: VDQOR1222OVCNNF</p>
              <div id="qrcode">
                <QRCode value={upiLink} size={200} />
              </div>
              <a href={upiLink} className="c5">
                Click here to pay via UPI
              </a>
              <p>📲 After Payment:</p>
              <p>
                💳 <strong>Please share a screenshot of your payment confirmation on WhatsApp.<br /> 
                Our team will contact you for order confirmation. Rest assured, your funds are secure with us.</strong>
              </p>
            </div>
          
        </div>
      </div>
    );
  };
  
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

  const calculateTotal = () => {
    return menuItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCheckout = () => {
    const orderItems = menuItems.filter(item => item.quantity > 0)
      .map(item => `${isHindi ? item.nameHi : item.name} x ${item.quantity}`).join(', ');

    const totalAmount = calculateTotal();
    const gst = totalAmount * 0.05;
    const grandTotal = totalAmount + gst;

    const message = `Name: ${name}\nTable: ${tableNumber}\nOrder: ${orderItems}\nTotal: ₹${totalAmount}\nGST (5%): ₹${gst.toFixed(2)}\nGrand Total: ₹${grandTotal.toFixed(2)}\nPayment Method:${paymentMethod}`;

    const whatsappLink = `https://wa.me/919817409607?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');

 

    return grandTotal; // Return the grand total
  };

  const grandTotal = 1.05 * calculateTotal(); // Call the function to calculate the grand total

  

  
  const filteredItems = menuItems.filter(item => {
    return (category === 'all' || item.category === category) &&
      (item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.description.toLowerCase().includes(searchTerm.toLowerCase()));
  });

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
      
      <header className="App-header">
 
   

        <div className="wedding-board">
        <img src={logo} alt="Logo" className="header-logo" />
          <h1>{isHindi ? 'चौपाड़ मेन्यू' : 'Chaupad Menu '}</h1>
         
      
 
          <div className="lighting"></div>
        </div>
      </header>
      <p>{isHindi ? 'चौपाड़ मेन्यू' : 'Cafe & Restaurant'}</p>
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
        <div className="basket-header-icon" onClick={() => setIsBasketOpen(!isBasketOpen)}>
          <FaShoppingBasket />
        </div>
        {isBasketOpen && (
          <div className="basket-content">
            {menuItems.filter(item => item.quantity > 0).map(item => (
              <div key={item.id} className="basket-item">
                <img src={item.image} alt={item.name} />
                <div className="basket-item-details">
                  <div className="basket-item-name">{isHindi ? item.nameHi : item.name}</div>
                  {/* <div className="basket-item-description">{isHindi ? item.descriptionHi : item.description}</div> */}
                  <div className="basket-item-price">{`₹${item.price} x ${item.quantity}`}</div>
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
              <h3>{isHindi ? `कुल: ₹${calculateTotal()}` : `Total: ₹${calculateTotal()}`}</h3>
              <div className="basket-summary">
          
          <p>{isHindi ? `कर (${TAX_RATE * 100}%): ₹${0.05 * calculateTotal()}` : `Tax (${TAX_RATE * 100}%): ₹${0.05 * calculateTotal()}`}</p>
          <h3>{isHindi ? `कुल (inclusive tax): ₹${1.05 * calculateTotal()}` : `Final Amount to pay: ₹${1.05 * calculateTotal()}`}</h3>
        </div>
              <button onClick={() => document.getElementById('checkout').scrollIntoView({ behavior: 'smooth' })}>
  {isHindi ? 'ऑर्डर करें' : 'Checkout'}
</button>
            </div>
          </div>
        )}
      </div>

      <div id="checkout" className="checkout-form">
        <h2>{isHindi ? 'चेकआउट' : 'Checkout'}</h2>
        <input
          type="text"
          placeholder={isHindi ? 'नाम' : 'Name'}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder={isHindi ? 'टेबल नंबर' : 'Table Number/ Room Number'}
          value={tableNumber}
          onChange={(e) => setTableNumber(e.target.value)}
        />
        
         <div className='payment-option'>
          <h4>Select Payment Method:</h4>
          <label>
            <input
              type="radio"
              value="COD"
              checked={paymentMethod === "COD"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Cash on Delivery (COD)
          </label>
          <label>
            <input
              type="radio"
              value="UPI"
              checked={paymentMethod === "UPI"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            UPI
          </label>
        </div>
        <button className="checkout-button"onClick={handleCheckout}>
          {isHindi ? 'व्हाट्सएप पर भेजें' : 'Send on WhatsApp'}
        </button>
       
        <UpiPayment grandTotal={grandTotal} />
      </div>
    </div>
    
  );
};

export default App;