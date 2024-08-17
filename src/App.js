import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import './App.css';
import { FaMinus, FaPlus, FaTrash, FaChevronDown, FaChevronUp, FaShoppingBasket, FaArrowUp  } from 'react-icons/fa';


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
//     { id: 37, name: 'Plain Paratha', nameHi: 'प्लेन पराठा', description: 'Simple and tasty plain paratha', descriptionHi: 'साधारण और स्वादिष्ट प्लेन पराठा', category: 'paratha', quantity: 0, price: 30, image: plainParathaImage },
//     { id: 38, name: 'Lachha Paratha', nameHi: 'लच्छा पराठा', description: 'Layered crispy paratha', descriptionHi: 'लेयर्ड क्रिस्पी पराठा', category: 'paratha', quantity: 0, price: 40, image: lachhaParathaImage },
//     { id: 39, name: 'Aloo Paratha', nameHi: 'आलू पराठा', description: 'Stuffed with spiced potatoes', descriptionHi: 'मसालेदार आलू से भरा हुआ', category: 'paratha', quantity: 0, price: 50, image: alooParathaImage },
//     { id: 40, name: 'Butter Naan', nameHi: 'बटर नान', description: 'Soft naan with butter', descriptionHi: 'माखन के साथ नरम नान', category: 'paratha', quantity: 0, price: 50, image: butterNaanImage },
//     { id: 41, name: 'Pyaz Paratha', nameHi: 'प्याज़ पराठा', description: 'Paratha with onions', descriptionHi: 'प्याज़ के साथ पराठा', category: 'paratha', quantity: 0, price: 40, image: pyazParathaImage },
//     { id: 42, name: 'Gobhi Paratha', nameHi: 'गोभी पराठा', description: 'Stuffed with spiced cauliflower', descriptionHi: 'मसालेदार गोभी से भरा हुआ', category: 'paratha', quantity: 0, price: 50, image: gobhiParathaImage },
//     { id: 43, name: 'Mooli Paratha', nameHi: 'मooli पराठा', description: 'Stuffed with radish', descriptionHi: 'मूली से भरा हुआ', category: 'paratha', quantity: 0, price: 60, image: mooliParathaImage },
//     { id: 44, name: 'Aloo Pyaz Tandoori Paratha', nameHi: 'आलू प्याज़ तंदूरी पराठा', description: 'Tandoori paratha with potatoes and onions', descriptionHi: 'आलू और प्याज़ के साथ तंदूरी पराठा', category: 'paratha', quantity: 0, price: 60, image: alooPyazTandooriParathaImage },
//     { id: 45, name: 'Mix Paratha', nameHi: 'मिक्स पराठा', description: 'Mixed stuffing of various ingredients', descriptionHi: 'विभिन्न सामग्री का मिश्रण', category: 'paratha', quantity: 0, price: 60, image: mixParathaImage },
//     { id: 46, name: 'Aloo Pyaz Paratha', nameHi: 'आलू प्याज़ पराठा', description: 'Paratha with potatoes and onions', descriptionHi: 'आलू और प्याज़ के साथ पराठा', category: 'paratha', quantity: 0, price: 60, image: alooPyazParathaImage },
//     { id: 47, name: 'Aloo Tandoori Paratha', nameHi: 'आलू तंदूरी पराठा', description: 'Tandoori paratha with spiced potatoes', descriptionHi: 'मसालेदार आलू के साथ तंदूरी पराठा', category: 'paratha', quantity: 0, price: 60, image: alooTandooriParathaImage },
//     { id: 48, name: 'Pyaz Tandoori Paratha', nameHi: 'प्याज़ तंदूरी पराठा', description: 'Tandoori paratha with onions', descriptionHi: 'प्याज़ के साथ तंदूरी पराठा', category: 'paratha', quantity: 0, price: 50, image: pyazTandooriParathaImage },
//     { id: 49, name: 'Mooli Tandoori Paratha', nameHi: 'मूली तंदूरी पराठा', description: 'Tandoori paratha with radish', descriptionHi: 'मूली के साथ तंदूरी पराठा', category: 'paratha', quantity: 0, price: 60, image: mooliTandooriParathaImage },
//     { id: 50, name: 'Mix Tandoori Paratha', nameHi: 'मिक्स तंदूरी पराठा', description: 'Tandoori paratha with mixed stuffing', descriptionHi: 'मिक्स स्टफिंग के साथ तंदूरी पराठा', category: 'paratha', quantity: 0, price: 60, image: mixTandooriParathaImage },
//     { id: 51, name: 'Gobhi Tandoori Paratha', nameHi: 'गोभी तंदूरी पराठा', description: 'Tandoori paratha with spiced cauliflower', descriptionHi: 'मसालेदार गोभी के साथ तंदूरी पराठा', category: 'paratha', quantity: 0, price: 60, image: gobhiTandooriParathaImage },
//     { id: 52, name: 'Paneer Paratha', nameHi: 'पनीर पराठा', description: 'Stuffed with spiced paneer', descriptionHi: 'मसालेदार पनीर से भरा हुआ', category: 'paratha', quantity: 0, price: 70, image: paneerParathaImage },
//     { id: 53, name: 'Lachha Naan', nameHi: 'लच्छा नान', description: 'Layered crispy naan', descriptionHi: 'लेयर्ड क्रिस्पी नान', category: 'paratha', quantity: 0, price: 50, image: lachhaNaanImage },
//     { id: 54, name: 'Gobhi Naan', nameHi: 'गोभी नान', description: 'Naan stuffed with cauliflower', descriptionHi: 'गोभी से भरा हुआ नान', category: 'paratha', quantity: 0, price: 50, image: gobhiNaanImage },
//     { id: 55, name: 'Garlic Naan', nameHi: 'गार्लिक नान', description: 'Naan with garlic', descriptionHi: 'लहसुन के साथ नान', category: 'paratha', quantity: 0, price: 60, image: garlicNaanImage },
//     { id: 56, name: 'Aloo Naan', nameHi: 'आलू नान', description: 'Naan stuffed with potatoes', descriptionHi: 'आलू से भरा हुआ नान', category: 'paratha', quantity: 0, price: 60, image: alooNaanImage },
//     { id: 57, name: 'Naan Tandoori Paratha', nameHi: 'नान तंदूरी पराठा', description: 'Tandoori paratha with naan', descriptionHi: 'नान के साथ तंदूरी पराठा', category: 'paratha', quantity: 0, price: 70, image: naanTandooriParathaImage },
//     { id: 58, name: 'Paneer Tandoori Paratha', nameHi: 'पनीर तंदूरी पराठा', description: 'Tandoori paratha with spiced paneer', descriptionHi: 'मसालेदार पनीर के साथ तंदूरी पराठा', category: 'paratha', quantity: 0, price: 70, image: paneerTandooriParathaImage },
//     { id: 59, name: 'Paneer Naan', nameHi: 'पनीर नान', description: 'Naan stuffed with paneer', descriptionHi: 'पनीर से भरा हुआ नान', category: 'paratha', quantity: 0, price: 60, image: paneerNaanImage },
//     { id: 60, name: 'French Fry', nameHi: 'फ्रेंच फ्राई', description: 'Crispy and golden fries', descriptionHi: 'क्रिस्पी और सुनहरे फ्राइज़', category: 'snacks', quantity: 0, price: { halfPlate: 50, fullPlate: 70 }, image: frenchFryImage },
//     { id: 61, name: 'Peri Peri Fry', nameHi: 'पेरी पेरी फ्राई', description: 'Spicy peri peri flavored fries', descriptionHi: 'स्पाइसी पेरि पेरि फ्लेवर्ड फ्राइज़', category: 'snacks', quantity: 0, price: { halfPlate: 70, fullPlate: 90 }, image: periPeriFryImage },
//     { id: 62, name: 'Veg Chowmein', nameHi: 'वेज़ चाउमीन', description: 'Stir-fried noodles with mixed vegetables', descriptionHi: 'मिश्रित सब्जियों के साथ तले हुए नूडल्स', category: 'snacks', quantity: 0, price: { halfPlate: 60, fullPlate: 90 }, image: vegChowmeinImage },
//     { id: 63, name: 'Chilli Gobhi', nameHi: 'चिली गोभी', description: 'Spicy cauliflower in a tangy sauce', descriptionHi: 'तेज मसालेदार गोभी, तीखे सॉस में', category: 'snacks', quantity: 0, price: { halfPlate: 90, fullPlate: 120 }, image: chilliGobhiImage },
//     { id: 64, name: 'Chilli Baby Corn', nameHi: 'चिली बेबी कॉर्न', description: 'Spicy baby corn in a tangy sauce', descriptionHi: 'मसालेदार बेबी कॉर्न, तीखे सॉस में', category: 'snacks', quantity: 0, price: { halfPlate: 80, fullPlate: 110 }, image: chilliBabyCornImage },
//     { id: 65, name: 'Spring Roll', nameHi: 'स्प्रिंग रोल', description: 'Crispy rolls filled with vegetables', descriptionHi: 'सब्जियों से भरे क्रिस्पी रोल्स', category: 'snacks', quantity: 0, price: { halfPlate: 90, fullPlate: 90 }, image: springRollImage },
//     { id: 66, name: 'Red Sauce Pasta', nameHi: 'रेड सॉस पास्ता', description: 'Pasta in a tangy red sauce', descriptionHi: 'तीखे रेड सॉस में पास्ता', category: 'snacks', quantity: 0, price: { halfPlate: 90, fullPlate: 130 }, image: redSaucePastaImage },
//     { id: 67, name: 'Chilli Potato', nameHi: 'चिली पोटैटो', description: 'Spicy potatoes in a tangy sauce', descriptionHi: 'मसालेदार आलू, तीखे सॉस में', category: 'snacks', quantity: 0, price: { halfPlate: 90, fullPlate: 130 }, image: chilliPotatoImage },
//     { id: 68, name: 'Honey Chilli Potato', nameHi: 'हनी चिली पोटैटो', description: 'Sweet and spicy honey chilli potatoes', descriptionHi: 'मीठे और मसालेदार हनी चिली आलू', category: 'snacks', quantity: 0, price: { halfPlate: 110, fullPlate: 150 }, image: honeyChilliPotatoImage },
//     { id: 69, name: 'Mushroom Dips', nameHi: 'मशरूम डिप्स', description: 'Mushrooms served with dips', descriptionHi: 'डिप्स के साथ मशरूम', category: 'snacks', quantity: 0, price: { halfPlate: 150, fullPlate: 150 }, image: mushroomDipsImage },
//     { id: 70, name: 'Chilli Manchurian', nameHi: 'चिली मंचूरियन', description: 'Spicy and tangy Manchurian', descriptionHi: 'मसालेदार और तीखा मंचूरियन', category: 'snacks', quantity: 0, price: { halfPlate: 90, fullPlate: 140 }, image: chilliManchurianImage },
//     { id: 71, name: 'Chilli Paneer', nameHi: 'चिली पनीर', description: 'Spicy paneer cubes in a tangy sauce', descriptionHi: 'मसालेदार पनीर के टुकड़े, तीखे सॉस में', category: 'snacks', quantity: 0, price: { halfPlate: 120, fullPlate: 130 }, image: chilliPaneerImage },
//     { id: 72, name: 'Chilli Mushroom', nameHi: 'चिली मशरूम', description: 'Spicy mushrooms in a tangy sauce', descriptionHi: 'मसालेदार मशरूम, तीखे सॉस में', category: 'snacks', quantity: 0, price: { halfPlate: 110, fullPlate: 170 }, image: chilliMushroomImage },
//     { id: 73, name: 'Chilli Chaap', nameHi: 'चिली चाप', description: 'Spicy chaap in a tangy sauce', descriptionHi: 'मसालेदार चाप, तीखे सॉस में', category: 'snacks', quantity: 0, price: { halfPlate: 120, fullPlate: 180 }, image: chilliChaapImage },
//     { id: 74, name: 'Tiranga Paneer', nameHi: 'तिरंगा पनीर', description: 'Paneer with a trio of spices', descriptionHi: 'तीन मसालों के साथ पनीर', category: 'snacks', quantity: 0, price: { halfPlate: 100, fullPlate: 170 }, image: tirangaPaneerImage },
//     { id: 75, name: 'Kur Kure Chaap', nameHi: 'कुरकुरे चाप', description: 'Crispy and spicy chaap', descriptionHi: 'कुरकुरी और मसालेदार चाप', category: 'snacks', quantity: 0, price: { halfPlate: 140, fullPlate: 140 }, image: kurKureChaapImage },
//     { id: 76, name: 'Mushroom Lollipop', nameHi: 'मशरूम लोल्लीपॉप', description: 'Crispy mushroom lollipops', descriptionHi: 'कुरकुरी मशरूम लोल्लीपॉप', category: 'snacks', quantity: 0, price: { halfPlate: 150, fullPlate: 150 }, image: mushroomLollipopImage },
//     { id: 77, name: 'Cheese Tikki', nameHi: 'चीज़ टिक्की', description: 'Cheese stuffed potato patties', descriptionHi: 'चीज़ भरी आलू की टिक्की', category: 'snacks', quantity: 0, price: { halfPlate: 150, fullPlate: 150 }, image: cheeseTikkiImage },
//     { id: 78, name: 'Singapuri Chowmein', nameHi: 'सिंगापुरी चाउमीन', description: 'Spicy noodles with Singaporean flavors', descriptionHi: 'सिंगापुरी फ्लेवर्स के साथ मसालेदार नूडल्स', category: 'snacks', quantity: 0, price: { halfPlate: 80, fullPlate: 120 }, image: singapuriChowmeinImage },
//     { id: 79, name: 'Hakka Noodles', nameHi: 'हक्का नूडल्स', description: 'Stir-fried Hakka style noodles', descriptionHi: 'हक्का स्टाइल में तले हुए नूडल्स', category: 'snacks', quantity: 0, price: { halfPlate: 80, fullPlate: 120 }, image: hakkaNoodlesImage },
//     { id: 80, name: 'Paneer Chowmein', nameHi: 'पनीर चाउमीन', description: 'Chowmein with paneer', descriptionHi: 'पनीर के साथ चाउमीन', category: 'snacks', quantity: 0, price: { halfPlate: 90, fullPlate: 130 }, image: paneerChowmeinImage },
//     { id: 81, name: 'White Sauce Pasta', nameHi: 'व्हाइट सॉस पास्ता', description: 'Pasta in a creamy white sauce', descriptionHi: 'क्रीमी व्हाइट सॉस में पास्ता', category: 'snacks', quantity: 0, price: { halfPlate: 100, fullPlate: 150 }, image: whiteSaucePastaImage },
//     { id: 82, name: 'Masala Paneer Tikka', nameHi: 'मसाला पनीर टिक्का', description: 'Spicy grilled paneer chunks', descriptionHi: 'मसालेदार ग्रिल्ड पनीर के टुकड़े', category: 'snacks', quantity: 0, price: { halfPlate: 130, fullPlate: 200 }, image: masalaPaneerTikkaImage },
//     { id: 83, name: 'Afghani Paneer Tikka', nameHi: 'अफगानी पनीर टिक्का', description: 'Grilled paneer with Afghani spices', descriptionHi: 'अफगानी मसालों के साथ ग्रिल्ड पनीर', category: 'snacks', quantity: 0, price: { halfPlate: 140, fullPlate: 220 }, image: afghaniPaneerTikkaImage },
//     { id: 84, name: 'Veg Sik Kebab', nameHi: 'वेज़ सिख कबाब', description: 'Spicy vegetarian kebabs', descriptionHi: 'मसालेदार वेजिटेरियन कबाब', category: 'snacks', quantity: 0, price: { halfPlate: 110, fullPlate: 180 }, image: vegSikKebabImage },
//     { id: 85, name: 'Haryali Kebab', nameHi: 'हरियाली कबाब', description: 'Green kebabs with a blend of spices', descriptionHi: 'मसालों का मिश्रण वाले हरी कबाब', category: 'snacks', quantity: 0, price: { halfPlate: 110, fullPlate: 180 }, image: haryaliKebabImage },
//     { id: 86, name: 'Onion Pizza', nameHi: 'प्याज़ पिज़्ज़ा', description: 'Pizza topped with fresh onions', descriptionHi: 'ताज़े प्याज़ से सजाया गया पिज़्ज़ा', category: 'pizza', quantity: 0, price: { halfPlate: 90, fullPlate: 90 }, image: onionPizzaImage },
// { id: 87, name: 'Capsicum Pizza', nameHi: 'कैप्सिकम पिज़्ज़ा', description: 'Pizza topped with capsicum', descriptionHi: 'कैप्सिकम से सजाया गया पिज़्ज़ा', category: 'pizza', quantity: 0, price: { halfPlate: 110, fullPlate: 110 }, image: capsicumPizzaImage },
// { id: 88, name: 'Tomato Pizza', nameHi: 'टमाटर पिज़्ज़ा', description: 'Pizza with a rich tomato topping', descriptionHi: 'टमाटर के स्वादिष्ट टॉपिंग के साथ पिज़्ज़ा', category: 'pizza', quantity: 0, price: { halfPlate: 130, fullPlate: 130 }, image: tomatoPizzaImage },
// { id: 89, name: 'Margherita Pizza', nameHi: 'मार्गेरिटा पिज़्ज़ा', description: 'Classic pizza with cheese and basil', descriptionHi: 'पनीर और तुलसी के साथ क्लासिक पिज़्ज़ा', category: 'pizza', quantity: 0, price: { halfPlate: 140, fullPlate: 140 }, image: margheritaPizzaImage },
// { id: 90, name: 'Farm Pizza', nameHi: 'फार्म पिज़्ज़ा', description: 'Pizza loaded with farm-fresh vegetables', descriptionHi: 'ताज़ी सब्जियों से भरा हुआ पिज़्ज़ा', category: 'pizza', quantity: 0, price: { halfPlate: 150, fullPlate: 150 }, image: farmPizzaImage },
// { id: 91, name: 'Cheese Pizza', nameHi: 'चीज़ पिज़्ज़ा', description: 'Pizza with extra cheese', descriptionHi: 'अधिक चीज़ के साथ पिज़्ज़ा', category: 'pizza', quantity: 0, price: { halfPlate: 130, fullPlate: 130 }, image: cheesePizzaImage },
// { id: 92, name: 'Veg Pizza', nameHi: 'वेज़ पिज़्ज़ा', description: 'Pizza topped with a variety of vegetables', descriptionHi: 'विविध सब्जियों के साथ पिज़्ज़ा', category: 'pizza', quantity: 0, price: { halfPlate: 160, fullPlate: 160 }, image: vegPizzaImage },
// { id: 93, name: 'Paneer Pizza', nameHi: 'पनीर पिज़्ज़ा', description: 'Pizza with chunks of paneer', descriptionHi: 'पनीर के टुकड़ों के साथ पिज़्ज़ा', category: 'pizza', quantity: 0, price: { halfPlate: 170, fullPlate: 170 }, image: paneerPizzaImage },
// { id: 94, name: 'Steam Rice', nameHi: 'स्टीम राइस', description: 'Plain steamed rice', descriptionHi: 'साधा स्टीम राइस', category: 'rice', quantity: 0, price: { halfPlate: 70, fullPlate: 70 }, image: steamRiceImage },
// { id: 95, name: 'Plain Rice', nameHi: 'सादा चावल', description: 'Simple plain rice', descriptionHi: 'साधा चावल', category: 'rice', quantity: 0, price: { halfPlate: 70, fullPlate: 70 }, image: plainRiceImage },
// { id: 96, name: 'Jeera Rice', nameHi: 'जीरा राइस', description: 'Rice flavored with cumin seeds', descriptionHi: 'जीरा के बीजों के साथ चावल', category: 'rice', quantity: 0, price: { halfPlate: 90, fullPlate: 90 }, image: jeeraRiceImage },
// { id: 97, name: 'Fried Rice', nameHi: 'फ्राइड राइस', description: 'Stir-fried rice with vegetables', descriptionHi: 'सब्जियों के साथ तला हुआ चावल', category: 'rice', quantity: 0, price: { halfPlate: 100, fullPlate: 100 }, image: friedRiceImage },
// { id: 98, name: 'Pulao', nameHi: 'पुलाव', description: 'Rice cooked with spices and vegetables', descriptionHi: 'मसालों और सब्जियों के साथ पका हुआ चावल', category: 'rice', quantity: 0, price: { halfPlate: 120, fullPlate: 120 }, image: pulaoImage },
// { id: 99, name: 'Matar Pulao', nameHi: 'मटर पुलाव', description: 'Pulao with green peas', descriptionHi: 'मटर के साथ पुलाव', category: 'rice', quantity: 0, price: { halfPlate: 140, fullPlate: 140 }, image: matarPulaoImage },
// { id: 100, name: 'Paneer Fried Rice', nameHi: 'पनीर फ्राइड राइस', description: 'Fried rice with paneer cubes', descriptionHi: 'पनीर के टुकड़ों के साथ तला हुआ चावल', category: 'rice', quantity: 0, price: { halfPlate: 150, fullPlate: 150 }, image: paneerFriedRiceImage },
// { id: 101, name: 'Lemon Rice', nameHi: 'लेमन राइस', description: 'Rice flavored with lemon and spices', descriptionHi: 'नींबू और मसालों के साथ चावल', category: 'rice', quantity: 0, price: { halfPlate: 160, fullPlate: 160 }, image: lemonRiceImage },
// { id: 102, name: 'Curd Rice', nameHi: 'दही चावल', description: 'Rice mixed with curd and spices', descriptionHi: 'दही और मसालों के साथ चावल', category: 'rice', quantity: 0, price: { halfPlate: 170, fullPlate: 170 }, image: curdRiceImage },
// { id: 103, name: 'Soyabean Rice', nameHi: 'सोया चावल', description: 'Rice cooked with soyabeans', descriptionHi: 'सोया बीन के साथ चावल', category: 'rice', quantity: 0, price: { halfPlate: 180, fullPlate: 180 }, image: soyabeanRiceImage },
// { id: 104, name: 'Paneer Pulao', nameHi: 'पनीर पुलाव', description: 'Pulao with paneer cubes', descriptionHi: 'पनीर के टुकड़ों के साथ पुलाव', category: 'rice', quantity: 0, price: { halfPlate: 190, fullPlate: 190 }, image: paneerPulaoImage },
// { id: 105, name: 'Mushroom Pulao', nameHi: 'मशरूम पुलाव', description: 'Pulao with mushrooms', descriptionHi: 'मशरूम के साथ पुलाव', category: 'rice', quantity: 0, price: { halfPlate: 200, fullPlate: 200 }, image: mushroomPulaoImage },
// { id: 106, name: 'Hyderabadi Pulao', nameHi: 'हैदराबादी पुलाव', description: 'Spicy Hyderabadi style pulao', descriptionHi: 'मसालेदार हैदराबादी शैली का पुलाव', category: 'rice', quantity: 0, price: { halfPlate: 210, fullPlate: 210 }, image: hyderabadiPulaoImage },
// { id: 107, name: 'Masala Chaap', nameHi: 'मसाला चाप', description: 'Spicy chaap with masala', descriptionHi: 'मसालेदार चाप', category: 'chaap', quantity: 0, price: { halfPlate: 120, fullPlate: 220 }, image: masalaChaapImage },
// { id: 108, name: 'Lemon Chaap', nameHi: 'लेमन चाप', description: 'Chaap flavored with lemon', descriptionHi: 'नींबू के साथ चाप', category: 'chaap', quantity: 0, price: { halfPlate: 120, fullPlate: 220 }, image: lemonChaapImage },
// { id: 109, name: 'Achari Chaap', nameHi: 'अचारी चाप', description: 'Chaap with pickled spices', descriptionHi: 'अचारी मसालों के साथ चाप', category: 'chaap', quantity: 0, price: { halfPlate: 120, fullPlate: 220 }, image: achariChaapImage },
// { id: 110, name: 'Haryali Chaap', nameHi: 'हरीतली चाप', description: 'Chaap with green herbs', descriptionHi: 'हरी हरी चाप', category: 'chaap', quantity: 0, price: { halfPlate: 120, fullPlate: 220 }, image: haryaliChaapImage },
// { id: 111, name: 'Malai Chaap', nameHi: 'मलाई चाप', description: 'Creamy chaap with spices', descriptionHi: 'मसालों के साथ मलाईदार चाप', category: 'chaap', quantity: 0, price: { halfPlate: 120, fullPlate: 220 }, image: malaiChaapImage },
// { id: 112, name: 'Afghani Chaap', nameHi: 'अफगानी चाप', description: 'Afghani style chaap', descriptionHi: 'अफगानी शैली का चाप', category: 'chaap', quantity: 0, price: { halfPlate: 120, fullPlate: 220 }, image: afghaniChaapImage },
// { id: 113, name: 'Chaap Gravy', nameHi: 'चाप ग्रेवी', description: 'Chaap cooked in gravy', descriptionHi: 'ग्रेवी में पकाया हुआ चाप', category: 'chaap', quantity: 0, price: { halfPlate: 120, fullPlate: 220 }, image: chaapGravyImage },
// { id: 114, name: 'Green Salad', nameHi: 'हरा सलाद', description: 'Fresh green salad', descriptionHi: 'ताजा हरा सलाद', category: 'salad', quantity: 0, price: { halfPlate: 70, fullPlate: 70 }, image: greenSaladImage },
// { id: 115, name: 'Mixture Salad', nameHi: 'मिक्स सलाद', description: 'Mixed vegetables salad', descriptionHi: 'मिश्रित सब्जियों का सलाद', category: 'salad', quantity: 0, price: { halfPlate: 100, fullPlate: 100 }, image: mixtureSaladImage },
// { id: 116, name: 'Fruit Cream Salad', nameHi: 'फ्रूट क्रीम सलाद', description: 'Salad with mixed fruits and cream', descriptionHi: 'मिश्रित फलों और क्रीम के साथ सलाद', category: 'salad', quantity: 0, price: { halfPlate: 120, fullPlate: 120 }, image: fruitCreamSaladImage },
// { id: 117, name: 'Kachumber Salad', nameHi: 'कचुम्बर सलाद', description: 'Fresh vegetable salad', descriptionHi: 'ताजा सब्जियों का सलाद', category: 'salad', quantity: 0, price: { halfPlate: 120, fullPlate: 120 }, image: kachumberSaladImage },
// { id: 118, name: 'Tandoori Salad', nameHi: 'तंदूरी सलाद', description: 'Salad with grilled vegetables', descriptionHi: 'ग्रिल की गई सब्जियों के साथ सलाद', category: 'salad', quantity: 0, price: { halfPlate: 200, fullPlate: 200 }, image: tandooriSaladImage },
// { id: 119, name: 'Plain Papad', nameHi: 'सादा पापड़', description: 'Crispy plain papad', descriptionHi: 'खस्ता सादा पापड़', category: 'papad', quantity: 0, price: { halfPlate: 20, fullPlate: 20 }, image: plainPapadImage },
// { id: 120, name: 'Fry Papad', nameHi: 'फ्राई पापड़', description: 'Crispy fried papad', descriptionHi: 'खस्ता तला पापड़', category: 'papad', quantity: 0, price: { halfPlate: 25, fullPlate: 25 }, image: fryPapadImage },
// { id: 121, name: 'Tandoori Papad', nameHi: 'तंदूरी पापड़', description: 'Papad grilled in tandoor', descriptionHi: 'तंदूर में पका पापड़', category: 'papad', quantity: 0, price: { halfPlate: 25, fullPlate: 25 }, image: tandooriPapadImage },
// { id: 122, name: 'Masala Papad', nameHi: 'मसाला पापड़', description: 'Papad with spicy masala', descriptionHi: 'मसालेदार पापड़', category: 'papad', quantity: 0, price: { halfPlate: 50, fullPlate: 50 }, image: masalaPapadImage },
// { id: 123, name: 'Tomato Soup', nameHi: 'टमाटर सूप', description: 'Classic tomato soup', descriptionHi: 'क्लासिक टमाटर सूप', category: 'soup', quantity: 0, price: { halfPlate: 70, fullPlate: 70 }, image: tomatoSoupImage },
// { id: 124, name: 'Hot & Sour Soup', nameHi: 'हॉट एंड सॉर सूप', description: 'Spicy and tangy hot & sour soup', descriptionHi: 'मसालेदार और खट्टा हॉट & सॉर सूप', category: 'soup', quantity: 0, price: { halfPlate: 80, fullPlate: 80 }, image: hotSourSoupImage },
// { id: 125, name: 'Veg Soup', nameHi: 'वेज सूप', description: 'Healthy vegetable soup', descriptionHi: 'स्वस्थ सब्जियों का सूप', category: 'soup', quantity: 0, price: { halfPlate: 90, fullPlate: 90 }, image: vegSoupImage },
// { id: 126, name: 'Chana Soup', nameHi: 'चना सूप', description: 'Chickpea soup', descriptionHi: 'चना सूप', category: 'soup', quantity: 0, price: { halfPlate: 100, fullPlate: 100 }, image: chanaSoupImage },
// { id: 127, name: 'Sweet Corn Soup', nameHi: 'स्वीट कॉर्न सूप', description: 'Creamy sweet corn soup', descriptionHi: 'क्रीमी स्वीट कॉर्न सूप', category: 'soup', quantity: 0, price: { halfPlate: 110, fullPlate: 110 }, image: sweetCornSoupImage },
// { id: 128, name: 'Mushroom Soup', nameHi: 'मशरूम सूप', description: 'Rich mushroom soup', descriptionHi: 'संतृप्त मशरूम सूप', category: 'soup', quantity: 0, price: { halfPlate: 120, fullPlate: 120 }, image: mushroomSoupImage },
// { id: 129, name: 'Plain Maggi', nameHi: 'प्लेन मैगी', description: 'Simple and classic Maggi', descriptionHi: 'साधारण और क्लासिक मैगी', category: 'maggi', quantity: 0, price: { halfPlate: 30, fullPlate: 30 }, image: plainMaggiImage },
// { id: 130, name: 'Veg Maggi', nameHi: 'वेज मैगी', description: 'Maggi with mixed vegetables', descriptionHi: 'मिक्स सब्जियों के साथ मैगी', category: 'maggi', quantity: 0, price: { halfPlate: 40, fullPlate: 40 }, image: vegMaggiImage },
// { id: 131, name: 'Cheese Maggi', nameHi: 'चीज मैगी', description: 'Maggi with cheese', descriptionHi: 'चीज के साथ मैगी', category: 'maggi', quantity: 0, price: { halfPlate: 50, fullPlate: 50 }, image: cheeseMaggiImage },
// { id: 132, name: 'Paneer Maggi', nameHi: 'पनीर मैगी', description: 'Maggi with paneer', descriptionHi: 'पनीर के साथ मैगी', category: 'maggi', quantity: 0, price: { halfPlate: 60, fullPlate: 60 }, image: paneerMaggiImage },
// { id: 133, name: 'Tea', nameHi: 'चाय', description: 'Traditional tea', descriptionHi: 'पारंपरिक चाय', category: 'tea-coffee', quantity: 0, price: { halfPlate: 20, fullPlate: 20 }, image: teaImage },
// { id: 134, name: 'Special Tea', nameHi: 'स्पेशल चाय', description: 'Special blend tea', descriptionHi: 'स्पेशल ब्लेंड चाय', category: 'tea-coffee', quantity: 0, price: { halfPlate: 30, fullPlate: 30 }, image: specialTeaImage },
// { id: 135, name: 'Black Tea', nameHi: 'ब्लैक चाय', description: 'Strong black tea', descriptionHi: 'मज़बूत ब्लैक चाय', category: 'tea-coffee', quantity: 0, price: { halfPlate: 40, fullPlate: 40 }, image: blackTeaImage },
// { id: 136, name: 'Kulhad Tea', nameHi: 'कुल्हड़ चाय', description: 'Tea served in a traditional kulhad', descriptionHi: 'पारंपरिक कुल्हड़ में चाय', category: 'tea-coffee', quantity: 0, price: { halfPlate: 50, fullPlate: 50 }, image: kulhadTeaImage },
// { id: 137, name: 'Green Tea', nameHi: 'ग्रीन टी', description: 'Refreshing green tea', descriptionHi: 'ताज़गी देने वाली ग्रीन टी', category: 'tea-coffee', quantity: 0, price: { halfPlate: 60, fullPlate: 60 }, image: greenTeaImage },
// { id: 138, name: 'Hot Coffee', nameHi: 'हॉट कॉफ़ी', description: 'Classic hot coffee', descriptionHi: 'क्लासिक हॉट कॉफ़ी', category: 'tea-coffee', quantity: 0, price: { halfPlate: 70, fullPlate: 70 }, image: hotCoffeeImage },
// { id: 139, name: 'Cold Coffee', nameHi: 'कोल्ड कॉफ़ी', description: 'Chilled cold coffee', descriptionHi: 'ठंडी कोल्ड कॉफ़ी', category: 'tea-coffee', quantity: 0, price: { halfPlate: 80, fullPlate: 80 }, image: coldCoffeeImage },
// { id: 140, name: 'Aloo Tikki Burger', nameHi: 'आलू टिक्की बर्गर', description: 'Burger with aloo tikki patty', descriptionHi: 'आलू टिक्की पैटी के साथ बर्गर', category: 'burger', quantity: 0, price: { halfPlate: 50, fullPlate: 50 }, image: alooTikkiBurgerImage },
// { id: 141, name: 'Veg Burger', nameHi: 'वेज बर्गर', description: 'Classic veg burger', descriptionHi: 'क्लासिक वेज बर्गर', category: 'burger', quantity: 0, price: { halfPlate: 60, fullPlate: 60 }, image: vegBurgerImage },
// { id: 142, name: 'Paneer Burger', nameHi: 'पनीर बर्गर', description: 'Burger with paneer patty', descriptionHi: 'पनीर पैटी के साथ बर्गर', category: 'burger', quantity: 0, price: { halfPlate: 70, fullPlate: 70 }, image: paneerBurgerImage },
// { id: 143, name: 'Cheese Burger', nameHi: 'चीज बर्गर', description: 'Burger with cheese patty', descriptionHi: 'चीज पैटी के साथ बर्गर', category: 'burger', quantity: 0, price: { halfPlate: 80, fullPlate: 80 }, image: cheeseBurgerImage },
// { id: 144, name: 'Vanilla Shake', nameHi: 'वनीला शेक', description: 'Creamy vanilla shake', descriptionHi: 'क्रीमी वनीला शेक', category: 'shake', quantity: 0, price: { halfPlate: 50, fullPlate: 50 }, image: vanillaShakeImage },
// { id: 145, name: 'Strawberry Shake', nameHi: 'स्ट्रॉबेरी शेक', description: 'Fruity strawberry shake', descriptionHi: 'फ्रूटी स्ट्रॉबेरी शेक', category: 'shake', quantity: 0, price: { halfPlate: 50, fullPlate: 50 }, image: strawberryShakeImage },
// { id: 146, name: 'Chocolate Shake', nameHi: 'चॉकलेट शेक', description: 'Rich chocolate shake', descriptionHi: 'रिच चॉकलेट शेक', category: 'shake', quantity: 0, price: { halfPlate: 50, fullPlate: 50 }, image: chocolateShakeImage },
// { id: 147, name: 'Roohafza Shake', nameHi: 'रूहअफ़ज़ा शेक', description: 'Sweet and refreshing Roohafza shake', descriptionHi: 'मीठा और ताज़गी देने वाला रो़हअफ़ज़ा शेक', category: 'shake', quantity: 0, price: { halfPlate: 50, fullPlate: 50 }, image: roohafzaShakeImage },
// { id: 148, name: 'Banana Shake', nameHi: 'बनाना शेक', description: 'Smooth banana shake', descriptionHi: 'स्मूद बनाना शेक', category: 'shake', quantity: 0, price: { halfPlate: 60, fullPlate: 60 }, image: bananaShakeImage },
// { id: 149, name: 'Mango Shake', nameHi: 'आम शेक', description: 'Delicious mango shake', descriptionHi: 'स्वादिष्ट आम शेक', category: 'shake', quantity: 0, price: { halfPlate: 70, fullPlate: 70 }, image: mangoShakeImage },
// { id: 150, name: 'Papaya Shake', nameHi: 'पपीता शेक', description: 'Refreshing papaya shake', descriptionHi: 'ताज़गी देने वाला पपीता शेक', category: 'shake', quantity: 0, price: { halfPlate: 80, fullPlate: 80 }, image: papayaShakeImage },
// { id: 151, name: 'Fruit Shake', nameHi: 'फ्रूट शेक', description: 'Mixed fruit shake', descriptionHi: 'मिक्स्ड फ्रूट शेक', category: 'shake', quantity: 0, price: { halfPlate: 100, fullPlate: 100 }, image: fruitShakeImage },
// { id: 152, name: 'Badam Shake', nameHi: 'बादाम शेक', description: 'Nutty badam shake', descriptionHi: 'नट्टी बादाम शेक', category: 'shake', quantity: 0, price: { halfPlate: 100, fullPlate: 100 }, image: badamShakeImage },
// { id: 153, name: 'Kesariya Shake', nameHi: 'केसरिया शेक', description: 'Rich kesariya shake', descriptionHi: 'रिच केसरिया शेक', category: 'shake', quantity: 0, price: { halfPlate: 120, fullPlate: 120 }, image: kesariyaShakeImage },
// { id: 154, name: 'Iced Tea', nameHi: 'आइस्ड टी', description: 'Refreshing iced tea', descriptionHi: 'ताज़गी देने वाला आइस्ड टी', category: 'mocktail', quantity: 0, price: { halfPlate: 40, fullPlate: 40 }, image: icedTeaImage },
// { id: 155, name: 'Lemon Soda', nameHi: 'लेमन सोडा', description: 'Chilled lemon soda', descriptionHi: 'ठंडी नींबू सोडा', category: 'mocktail', quantity: 0, price: { halfPlate: 40, fullPlate: 40 }, image: lemonSodaImage },
// { id: 156, name: 'Jaljeera', nameHi: 'जलजीरा', description: 'Spicy and tangy jaljeera', descriptionHi: 'मसालेदार और खट्टा जलजीरा', category: 'mocktail', quantity: 0, price: { halfPlate: 40, fullPlate: 40 }, image: jaljeeraImage },
// { id: 157, name: 'Mint Mojito', nameHi: 'मिंट मोजिटो', description: 'Cool mint mojito', descriptionHi: 'ठंडा मिंट मोजिटो', category: 'mocktail', quantity: 0, price: { halfPlate: 60, fullPlate: 60 }, image: mintMojitoImage },
// { id: 158, name: 'Shikanji', nameHi: 'शिकंजी', description: 'Traditional Indian lemonade', descriptionHi: 'पारंपरिक भारतीय नींबू पानी', category: 'mocktail', quantity: 0, price: { halfPlate: 60, fullPlate: 60 }, image: shikanjiImage },
// { id: 159, name: 'Watermelon Mojito', nameHi: 'वाटरमेलन मोजिटो', description: 'Refreshing watermelon mojito', descriptionHi: 'ताज़गी देने वाला वाटरमेलन मोजिटो', category: 'mocktail', quantity: 0, price: { halfPlate: 70, fullPlate: 70 }, image: watermelonMojitoImage },
// { id: 160, name: 'Green Apple Mojito', nameHi: 'ग्रीन एप्पल मोजिटो', description: 'Tangy green apple mojito', descriptionHi: 'खट्टा ग्रीन एप्पल मोजिटो', category: 'mocktail', quantity: 0, price: { halfPlate: 70, fullPlate: 70 }, image: greenAppleMojitoImage },

    
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
        <div id='pay' className="payment-content">
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
         <div className={`basket ${isBasketOpen ? 'open' : 'closed'}`}>
  <div className="basket-header">
    <h2>{isHindi ? 'आपकी टोकरी' : 'Your Basket'}</h2>
    
    <button onClick={() => setIsBasketOpen(!isBasketOpen)}>
      {isBasketOpen ? <FaChevronUp /> : <FaChevronDown />}
    </button>
  </div>

  {/* Cart Icon with Item Count */}
  <div className="basket-header-icon" onClick={() => setIsBasketOpen(!isBasketOpen)}>
    <FaShoppingBasket />
    {menuItems.reduce((total, item) => total + item.quantity, 0) > 0 && (
      <span className="cart-count">
        {menuItems.reduce((total, item) => total + item.quantity, 0)}
      </span>
    )}
  </div>

  <br></br>
  <button class="checkout-button" onClick={() => document.getElementById('checkout').scrollIntoView({ behavior: 'smooth' })}>
  {isHindi ? 'ऑर्डर करें' : 'Checkout'}
</button>
<button class="payment-button" onClick={() => document.getElementById('pay').scrollIntoView({ behavior: 'smooth' })}>
  {isHindi ? 'बास्केट बिल भुगतान' : 'Basket bill payment'}
</button>


  {isBasketOpen && (
    <div className="basket-content">
      {menuItems.filter(item => item.quantity > 0).map(item => (
        <div key={item.id} className="basket-item">
          <img src={item.image} alt={item.name} />
          <div className="basket-item-details">
            <div className="basket-item-name">{isHindi ? item.nameHi : item.name}</div>
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
      <div id="topheading" className="categories">
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
     <div>
      {/* Bottom-right button icon attached to heading ID */}
      <button className="heading-icon" onClick={() => scrollToSection('topheading')}>
      <FaArrowUp /> {/* Up arrow icon */}
      </button>
      
    
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
        <br></br>
        <button className="checkout-button"onClick={handleCheckout}>
          {isHindi ? 'व्हाट्सएप पर भेजें' : 'Send on WhatsApp'}
        </button>
       
        <UpiPayment grandTotal={grandTotal} />
      </div>
    </div>
    
  );
};

function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
export default App;