import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import './App.css';
import { FaMinus, FaPlus, FaTrash, FaChevronDown, FaChevronUp, FaShoppingBasket, FaArrowUp  } from 'react-icons/fa';

import { FaUtensils, FaBreadSlice, FaPizzaSlice, FaHamburger, FaCoffee, FaIceCream } from 'react-icons/fa';
import { GiIndianPalace, GiSandwich, GiRiceCooker, GiNoodles, GiMeat } from 'react-icons/gi';
import { MdLocalDrink, MdSoupKitchen, MdSpa, MdLunchDining } from 'react-icons/md';
import { TbPepper } from 'react-icons/tb';

import { GiChipsBag} from 'react-icons/gi';  // For Paratha, Snacks, and Salad
import { MdOutlineBakeryDining } from 'react-icons/md';  // Another option for Paratha
import { FaLeaf } from 'react-icons/fa';  // Using FaLeaf for Salad

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

// Importing images
import plainParathaImage from './images/plainParathaImage.jpg';
import lachhaParathaImage from './images/lachhaParathaImage.jpeg';
import alooParathaImage from './images/alooParathaImage.jpg';
import butterNaanImage from './images/butterNaanImage.jpeg';
import pyazParathaImage from './images/pyazParathaImage.png';
import gobhiParathaImage from './images/gobhiParathaImage.jpg';
import mooliParathaImage from './images/mooliParathaImage.jpg';
import alooPyazTandooriParathaImage from './images/alooPyazTandooriParathaImage.jpg';
import mixParathaImage from './images/mixParathaImage.jpg';
import alooPyazParathaImage from './images/alooPyazParathaImage.jpg';
import alooTandooriParathaImage from './images/alooTandooriParathaImage.jpg';
import pyazTandooriParathaImage from './images/pyazTandooriParathaImage.jpg';
import mooliTandooriParathaImage from './images/mooliTandooriParathaImage.jpg';
import mixTandooriParathaImage from './images/mixTandooriParathaImage.jpg';
import gobhiTandooriParathaImage from './images/gobhiTandooriParathaImage.jpg';
import paneerParathaImage from './images/paneerParathaImage.jpg';
import lachhaNaanImage from './images/lachhaNaanImage.jpg';
import gobhiNaanImage from './images/gobhiNaanImage.jpg';
import garlicNaanImage from './images/garlicNaanImage.jpg';
import alooNaanImage from './images/alooNaanImage.jpg';
import naanTandooriParathaImage from './images/naanTandooriParathaImage.jpg';
import paneerTandooriParathaImage from './images/paneerTandooriParathaImage.jpg';
import paneerNaanImage from './images/paneerNaanImage.jpg';

import dahiRaitaImage from './images/dahiRaitaImage.jpg';
import alooRaitaImage from './images/alooRaitaImage.jpg';
import jeeraRaitaImage from './images/jeeraRaitaImage.jpg';
import beetrootRaitaImage from './images/beetrootRaitaImage.jpg';
import ghiyaRaitaImage from './images/ghiyaRaitaImage.jpg';
import mixRaitaImage from './images/mixRaitaImage.jpg';
import boondiRaitaImage from './images/boondiRaitaImage.jpg';
import palakRaitaImage from './images/palakRaitaImage.jpg';
import pineappleRaitaImage from './images/pineappleRaitaImage.jpg';
import fruitRaitaImage from './images/fruitRaitaImage.jpg';

import frenchFryImage from './images/frenchFryImage.jpg';
import periPeriFryImage from './images/periPeriFryImage.jpg';
import vegChowmeinImage from './images/vegChowmeinImage.jpg';
import chilliGobhiImage from './images/chilliGobhiImage.jpg';
import chilliBabyCornImage from './images/chilliBabyCornImage.jpg';
import springRollImage from './images/springRollImage.jpg';
import redSaucePastaImage from './images/redSaucePastaImage.jpg';
import chilliPotatoImage from './images/chilliPotatoImage.jpg';
import honeyChilliPotatoImage from './images/honeyChilliPotatoImage.jpg';
import mushroomDipsImage from './images/mushroomDipsImage.jpg';
import chilliManchurianImage from './images/chilliBabyCornImage.jpg';
import chilliPaneerImage from './images/chilliPaneerImage.jpg';
import chilliMushroomImage from './images/chilliMushroomImage.jpg';
import chilliChaapImage from './images/chilliChaapImage.jpg';
import tirangaPaneerImage from './images/tirangaPaneerImage.jpg';
import kurKureChaapImage from './images/kurKureChaapImage.jpg';
import mushroomLollipopImage from './images/mushroomLollipopImage.jpg';
import cheeseTikkiImage from './images/cheeseTikkiImage.jpg';
import singapuriChowmeinImage from './images/singapuriChowmeinImage.jpg';
import hakkaNoodlesImage from './images/hakkaNoodlesImage.jpg';
import paneerChowmeinImage from './images/paneerChowmeinImage.jpg';
import whiteSaucePastaImage from './images/whiteSaucePastaImage.jpg';
import mixSaucePastaImage from './images/mixSaucePastaImage.jpg';
import cheesePastaImage from './images/cheesePastaImage.jpg';

import tawaRotiImage from './images/tawa-roti.jpg';
import tawaButterRotiImage from './images/tawa-butter-roti.jpg';
import tandooriRotiImage from './images/tandoori-roti.jpg';
import tandooriButterRotiImage from './images/tandoori-butter-roti.jpg';
import tandooriPyazRotiImage from './images/tandoori-pyaz-roti.jpg';
import misiRotiImage from './images/misi-roti.jpg';
import misiPyazRotiImage from './images/misi-pyaz-roti.jpg';

import onionPizzaImage from './images/onion-pizza.jpg';
import capsicumPizzaImage from './images/capsicum-pizza.jpg';
import tomatoPizzaImage from './images/tomato-pizza.jpg';
import margheritaPizzaImage from './images/margherita-pizza.jpg';
import farmPizzaImage from './images/farm-pizza.jpg';
import cheesePizzaImage from './images/cheese-pizza.jpg';
import vegPizzaImage from './images/veg-pizza.jpg';
import paneerPizzaImage from './images/paneer-pizza.jpg';


import paneerTikkaImage from './images/paneer-tikka.jpg';
import haryaliPaneerTikkaImage from './images/haryali-paneer-tikka.jpg';
import masalaPaneerTikkaImage from './images/masala-paneer-tikka.jpg';
import mushroomTikkaImage from './images/mushroom-tikka.jpg';
import malaiMushroomTikkaImage from './images/malai-mushroom-tikka.jpg';
import masalaMushroomTikkaImage from './images/masala-mushroom-tikka.jpg';
import achariMushroomTikkaImage from './images/achari-mushroom-tikka.jpg';
import haryaliMushroomTikkaImage from './images/haryali-mushroom-tikka.jpg';
import afghaniMushroomTikkaImage from './images/afghani-mushroom-tikka.jpg';
import afghaniPaneerTikkaImage from './images/afghani-paneer-tikka.jpg';
import malaiPaneerTikkaImage from './images/malai-paneer-tikka.jpg';
import vegSikKababImage from './images/veg-sik-kabab.jpg';
import haryaliKababImage from './images/haryali-kabab.jpg';

import vegSandwichImage from './images/veg-sandwich.jpg';
import alooSandwichImage from './images/aloo-sandwich.jpg';
import grilledSandwichImage from './images/grilled-sandwich.jpg';
import paneerGrilledSandwichImage from './images/paneer-grilled-sandwich.jpg';
import paneerTikkaSandwichImage from './images/paneer-tikka-sandwich.jpg';
import cheeseSandwichImage from './images/cheese-sandwich.jpg';

import steamRiceImage from './images/steam-rice.jpg';
import plainRiceImage from './images/plain-rice.jpg';
import jeeraRiceImage from './images/jeera-rice.jpg';
import friedRiceImage from './images/fried-rice.jpg';
import pulaoImage from './images/pulao.jpg';
import matarPulaoImage from './images/matar-pulao.jpg';
import paneerFriedRiceImage from './images/paneer-fried-rice.jpg';
import lemonRiceImage from './images/lemon-rice.jpg';
import curdRiceImage from './images/curd-rice.jpg';
import soyabeanRiceImage from './images/soyabean-rice.jpg';
import paneerPulaoImage from './images/paneer-pulao.jpg';
import mushroomPulaoImage from './images/mushroom-pulao.jpg';
import hyderabadiPulaoImage from './images/hyderabadi-pulao.jpg';

import masalaChaapImage from './images/masala-chaap.jpg';
import lemonChaapImage from './images/lemon-chaap.jpg';
import achariChaapImage from './images/achari-chaap.jpg';
import haryaliChaapImage from './images/haryali-chaap.jpg';
import malaiChaapImage from './images/malai-chaap.jpg';
import afghaniChaapImage from './images/afghani-chaap.jpg';
import chaapGravyImage from './images/chaap-gravy.jpg';


import greenSaladImage from './images/green-salad.jpg';
import mixtureSaladImage from './images/mixture-salad.jpg';
import fruitCreamSaladImage from './images/fruit-cream-salad.jpg';
import kachumberSaladImage from './images/kachumber-salad.jpg';
import tandooriSaladImage from './images/tandoori-salad.jpg';


import plainPapadImage from './images/plain-papad.jpg';
import fryPapadImage from './images/fry-papad.jpg';
import tandooriPapadImage from './images/tandoori-papad.jpg';
import masalaPapadImage from './images/masala-papad.jpg';
import alooPyaazPakoraImage from './images/aloo-pyaaz-pakora.jpg';
import palakPakoraImage from './images/palak-pakora.jpg';
import paneerPakoraImage from './images/paneer-pakora.jpg';
import mixPakoraImage from './images/mix-pakora.jpg';

// Import soup images
import tomatoSoupImage from './images/tomato-soup.jpg';
import hotSourSoupImage from './images/hot-sour-soup.jpg';
import vegSoupImage from './images/veg-soup.jpg';
import chanaSoupImage from './images/chana-soup.jpg';
import sweetCornSoupImage from './images/sweet-corn-soup.jpg';
import mushroomSoupImage from './images/mushroom-soup.jpg';


// Import maggi images
import plainMaggiImage from './images/plain-maggi.jpg';
import vegMaggiImage from './images/veg-maggi.jpg';
import cheeseMaggiImage from './images/cheese-maggi.jpg';
import paneerMaggiImage from './images/paneer-maggi.jpg';


// Import tea and coffee images
import teaImage from './images/tea.jpg';
import specialTeaImage from './images/special-tea.jpg';
import blackTeaImage from './images/black-tea.jpg';
import kulhadTeaImage from './images/kulhad-tea.jpg';
import greenTeaImage from './images/green-tea.jpg';
import hotCoffeeImage from './images/hot-coffee.jpg';
import coldCoffeeImage from './images/cold-coffee.jpg';


// Import burger images
import alooTikkiBurgerImage from './images/aloo-tikki-burger.jpg';
import vegBurgerImage from './images/veg-burger.jpg';
import paneerBurgerImage from './images/paneer-burger.jpg';
import cheeseBurgerImage from './images/cheese-burger.jpg';


// Import shake images
import vanillaShakeImage from './images/vanilla-shake.jpg';
import strawberryShakeImage from './images/strawberry-shake.jpg';
import chocolateShakeImage from './images/chocolate-shake.jpg';
import roohafzaShakeImage from './images/roohafza-shake.jpg';
import bananaShakeImage from './images/banana-shake.jpg';
import mangoShakeImage from './images/mango-shake.jpg';
import papayaShakeImage from './images/papaya-shake.jpg';
import fruitShakeImage from './images/fruit-shake.jpg';
import badamShakeImage from './images/badam-shake.jpg';
import kesariyaShakeImage from './images/kesariya-shake.jpg';

// New shakes with ice cream images
import vanillaShakeWithIceCreamImage from './images/vanilla-shake-ice-cream.jpg';
import strawberryShakeWithIceCreamImage from './images/strawberry-shake-ice-cream.jpg';
import chocolateShakeWithIceCreamImage from './images/chocolate-shake-ice-cream.jpg';


import icedTeaImage from './images/iced-tea.jpg';
import lemonSodaImage from './images/lemon-soda.jpg';
import jaljeeraImage from './images/jaljeera.jpg';
import mintMojitoImage from './images/mint-mojito.jpg';
import shikanjiImage from './images/shikanji.jpg';
import watermelonMojitoImage from './images/watermelon-mojito.jpg';
import greenAppleMojitoImage from './images/green-apple-mojito.jpg';

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
    { id: 1, name: 'Dal Fry', nameHi: 'दाल फ्राई', description: 'Flavorful dal fry', descriptionHi: 'स्वादिष्ट दाल फ्राई', category: 'maincourse', quantity: 0, price: 80,  image: dalFryImage },
    { id: 2, name: 'Dal Tadka', nameHi: 'दाल तड़का', description: 'Spiced dal tadka', descriptionHi: 'मसालेदार दाल तड़का', category: 'maincourse', quantity: 0, price: 80, image: dalTadkaImage },
    { id: 3, name: 'Dal Haryali', nameHi: 'दाल हरियाली', description: 'Green herb dal', descriptionHi: 'हरी जड़ी-बूटी की दाल', category: 'maincourse', quantity: 0, price: 160, image: dalHaryaliImage },
    { id: 4, name: 'Dal Makhani', nameHi: 'दाल मखनी', description: 'Creamy dal makhani', descriptionHi: 'क्रीमी दाल मखनी', category: 'maincourse', quantity: 0, price: 200, image: dalMakhaniImage },
    { id: 5, name: 'Dal Handi', nameHi: 'दाल हांडी', description: 'Traditional handi dal', descriptionHi: 'पारंपरिक हांडी दाल', category: 'maincourse', quantity: 0, price: 170, image: dalHandiImage },
    { id: 6, name: 'Rajma Fry', nameHi: 'राजमा फ्राई', description: 'Fried rajma curry', descriptionHi: 'तली हुई राजमा करी', category: 'maincourse', quantity: 0, price: 170, image: rajmaFryImage },
    { id: 7, name: 'Chana Masala', nameHi: 'चना मसाला', description: 'Spiced chickpea curry', descriptionHi: 'मसालेदार चना करी', category: 'maincourse', quantity: 0, price: 150, image: chanaMasalaImage },
    { id: 8, name: 'Kadhi Fry', nameHi: 'कढ़ी फ्राई', description: 'Fried kadhi curry', descriptionHi: 'तली हुई कढ़ी करी', category: 'maincourse', quantity: 0, price: 100, image: kadhiFryImage },
    { id: 9, name: 'Shahi Paneer', nameHi: 'शाही पनीर', description: 'Rich shahi paneer', descriptionHi: 'रिच शाही पनीर', category: 'maincourse', quantity: 0, price: 200, image: shahiPaneerImage },
    { id: 10, name: 'Kadhai Paneer', nameHi: 'कड़ाही पनीर', description: 'Paneer in kadhai masala', descriptionHi: 'कड़ाही मसाला में पनीर', category: 'maincourse', quantity: 0, price: 210, image: kadhaiPaneerImage },
    { id: 11, name: 'Matar Paneer', nameHi: 'मटर पनीर', description: 'Paneer with peas', descriptionHi: 'मटर के साथ पनीर', category: 'maincourse', quantity: 0, price: 190, image: matarPaneerImage },
    { id: 12, name: 'Paneer Butter Masala', nameHi: 'पनीर बटर मसाला', description: 'Paneer in butter masala', descriptionHi: 'बटर मसाला में पनीर', category: 'maincourse', quantity: 0, price: 220, image: paneerButterMasalaImage },
    { id: 13, name: 'Paneer Dopyaza', nameHi: 'पनीर दोप्याजा', description: 'Paneer with onions', descriptionHi: 'प्याज के साथ पनीर', category: 'maincourse', quantity: 0, price: 200, image: paneerDopyazaImage },
    { id: 14, name: 'Paneer Handi', nameHi: 'पनीर हांडी', description: 'Paneer in handi', descriptionHi: 'हांडी में पनीर', category: 'maincourse', quantity: 0, price: 250, image: paneerHandiImage },
    { id: 15, name: 'Paneer Bhurji', nameHi: 'पनीर भुर्जी', description: 'Scrambled paneer', descriptionHi: 'पनीर भुर्जी', category: 'maincourse', quantity: 0, price: 180, image: paneerBhurjiImage },
    { id: 16, name: 'Paneer Lababdar', nameHi: 'पनीर लबाबदार', description: 'Rich paneer curry', descriptionHi: 'रिच पनीर करी', category: 'maincourse', quantity: 0, price: 250, image: paneerLababdarImage },
    { id: 17, name: 'Paneer Pasonda', nameHi: 'पनीर पासोंडा', description: 'Paneer in spiced gravy', descriptionHi: 'मसालेदार ग्रेवी में पनीर', category: 'maincourse', quantity: 0, price: 240, image: paneerPasondaImage },
    { id: 18, name: 'Tandoori Paneer', nameHi: 'तंदूरी पनीर', description: 'Grilled tandoori paneer', descriptionHi: 'ग्रिल्ड तंदूरी पनीर', category: 'maincourse', quantity: 0, price: 240, image: tandooriPaneerImage },
    { id: 19, name: 'Mushroom Butter Masala', nameHi: 'मशरूम बटर मसाला', description: 'Mushrooms in butter masala', descriptionHi: 'बटर मसाला में मशरूम', category: 'maincourse', quantity: 0, price: 220, image: mushroomButterMasalaImage },
    { id: 20, name: 'Matar Mushroom', nameHi: 'मटर मशरूम', description: 'Mushrooms with peas', descriptionHi: 'मटर के साथ मशरूम', category: 'maincourse', quantity: 0, price: 180, image: matarMushroomImage },
    { id: 21, name: 'Mushroom Dopyaza', nameHi: 'मशरूम दोप्याजा', description: 'Mushrooms with onions', descriptionHi: 'प्याज के साथ मशरूम', category: 'maincourse', quantity: 0, price: 180, image: mushroomDopyazaImage },
    { id: 22, name: 'Tandoori Mushroom', nameHi: 'तंदूरी मशरूम', description: 'Grilled tandoori mushrooms', descriptionHi: 'ग्रिल्ड तंदूरी मशरूम', category: 'maincourse', quantity: 0, price: 240, image: tandooriMushroomImage },
    { id: 23, name: 'Kadhai Mushroom', nameHi: 'कड़ाही मशरूम', description: 'Mushrooms in kadhai masala', descriptionHi: 'कड़ाही मसाला में मशरूम', category: 'maincourse', quantity: 0, price: 220, image: kadhaiMushroomImage },
    { id: 24, name: 'Dum Aloo', nameHi: 'दम आलू', description: 'Potato dumplings in gravy', descriptionHi: 'ग्रेवी में आलू दम', category: 'maincourse', quantity: 0, price: 150, image: dumAlooImage },
    { id: 25, name: 'Jeera Aloo', nameHi: 'जीरा आलू', description: 'Potatoes with cumin', descriptionHi: 'जीरे के साथ आलू', category: 'maincourse', quantity: 0, price: 100, image: jeeraAlooImage },
    { id: 26, name: 'Mix Veg', nameHi: 'मिक्स वेज', description: 'Mixed vegetables', descriptionHi: 'मिश्रित सब्जियां', category: 'maincourse', quantity: 0, price: 160, image: mixVegImage },
    { id: 27, name: 'Malai Kofta', nameHi: 'मलाई कोफ्ता', description: 'Kofta in creamy gravy', descriptionHi: 'क्रीमी ग्रेवी में कोफ्ता', category: 'maincourse', quantity: 0, price: 250, image: malaiKoftaImage },
    { id: 28, name: 'Matar Gobhi', nameHi: 'मटर गोभी', description: 'Peas with cauliflower', descriptionHi: 'मटर के साथ गोभी', category: 'maincourse', quantity: 0, price: 150, image: matarGobhiImage },
    { id: 29, name: 'Paneer Gobhi', nameHi: 'पनीर गोभी', description: 'Paneer with cauliflower', descriptionHi: 'गोभी के साथ पनीर', category: 'maincourse', quantity: 0, price: 160, image: paneerGobhiImage },
    { id: 30, name: 'Sev Bhaji', nameHi: 'सेव भाजी', description: 'Sev in spicy gravy', descriptionHi: 'मसालेदार ग्रेवी में सेव', category: 'maincourse', quantity: 0, price: 150, image: sevBhajiImage },
    { id: 31, name: 'Cheese Tomato', nameHi: 'चीज़ टमाटर', description: 'Cheese with tomatoes', descriptionHi: 'टमाटर के साथ चीज़', category: 'maincourse', quantity: 0, price: 220, image: cheeseTomatoImage },
    { id: 32, name: 'Palak Paneer', nameHi: 'पालक पनीर', description: 'Paneer with spinach', descriptionHi: 'पालक के साथ पनीर', category: 'maincourse', quantity: 0, price: 190, image: palakPaneerImage },
    { id: 33, name: 'Tomato Chutney', nameHi: 'टमाटर चटनी', description: 'Spiced tomato chutney', descriptionHi: 'मसालेदार टमाटर चटनी', category: 'maincourse', quantity: 0, price: 150, image: tomatoChutneyImage },
    { id: 34, name: 'Paneer Methi Malai', nameHi: 'पनीर मेथी मलाई', description: 'Paneer with fenugreek', descriptionHi: 'मेथी के साथ पनीर', category: 'maincourse', quantity: 0, price: 200, image: paneerMethiMalaiImage },
    { id: 35, name: 'Mushroom', nameHi: 'मशरूम', description: 'Delicious mushrooms', descriptionHi: 'स्वादिष्ट मशरूम', category: 'maincourse', quantity: 0, price: 210, image: mushroomImage },
    { id: 36, name: 'Veg. Kohlapuri', nameHi: 'वेज. कोल्हापुरी', description: 'Spicy veg Kohlapuri', descriptionHi: 'मसालेदार वेज कोल्हापुरी', category: 'maincourse', quantity: 0, price: 180, image: vegKohlapuriImage },
   
    { id: 37, name: 'Plain Paratha', nameHi: 'प्लेन पराठा', description: 'Simple and tasty plain paratha', descriptionHi: 'साधारण और स्वादिष्ट प्लेन पराठा', category: 'paratha', quantity: 0, price: 30, image: plainParathaImage },
    { id: 38, name: 'Lachha Paratha', nameHi: 'लच्छा पराठा', description: 'Layered crispy paratha', descriptionHi: 'लेयर्ड क्रिस्पी पराठा', category: 'paratha', quantity: 0, price: 40, image: lachhaParathaImage },
    { id: 39, name: 'Aloo Paratha', nameHi: 'आलू पराठा', description: 'Stuffed with spiced potatoes', descriptionHi: 'मसालेदार आलू से भरा हुआ', category: 'paratha', quantity: 0, price: 50, image: alooParathaImage },
    { id: 40, name: 'Butter Naan', nameHi: 'बटर नान', description: 'Soft naan with butter', descriptionHi: 'माखन के साथ नरम नान', category: 'paratha', quantity: 0, price: 50, image: butterNaanImage },
    { id: 41, name: 'Pyaz Paratha', nameHi: 'प्याज़ पराठा', description: 'Paratha with onions', descriptionHi: 'प्याज़ के साथ पराठा', category: 'paratha', quantity: 0, price: 40, image: pyazParathaImage },
    { id: 42, name: 'Gobhi Paratha', nameHi: 'गोभी पराठा', description: 'Stuffed with spiced cauliflower', descriptionHi: 'मसालेदार गोभी से भरा हुआ', category: 'paratha', quantity: 0, price: 50, image: gobhiParathaImage },
    { id: 43, name: 'Mooli Paratha', nameHi: 'मooli पराठा', description: 'Stuffed with radish', descriptionHi: 'मूली से भरा हुआ', category: 'paratha', quantity: 0, price: 60, image: mooliParathaImage },
    { id: 44, name: 'Aloo Pyaz Tandoori Paratha', nameHi: 'आलू प्याज़ तंदूरी पराठा', description: 'Tandoori paratha with potatoes and onions', descriptionHi: 'आलू और प्याज़ के साथ तंदूरी पराठा', category: 'paratha', quantity: 0, price: 60, image: alooPyazTandooriParathaImage },
    { id: 45, name: 'Mix Paratha', nameHi: 'मिक्स पराठा', description: 'Mixed stuffing of various ingredients', descriptionHi: 'विभिन्न सामग्री का मिश्रण', category: 'paratha', quantity: 0, price: 60, image: mixParathaImage },
    { id: 46, name: 'Aloo Pyaz Paratha', nameHi: 'आलू प्याज़ पराठा', description: 'Paratha with potatoes and onions', descriptionHi: 'आलू और प्याज़ के साथ पराठा', category: 'paratha', quantity: 0, price: 60, image: alooPyazParathaImage },
    { id: 47, name: 'Aloo Tandoori Paratha', nameHi: 'आलू तंदूरी पराठा', description: 'Tandoori paratha with spiced potatoes', descriptionHi: 'मसालेदार आलू के साथ तंदूरी पराठा', category: 'paratha', quantity: 0, price: 60, image: alooTandooriParathaImage },
    { id: 48, name: 'Pyaz Tandoori Paratha', nameHi: 'प्याज़ तंदूरी पराठा', description: 'Tandoori paratha with onions', descriptionHi: 'प्याज़ के साथ तंदूरी पराठा', category: 'paratha', quantity: 0, price: 50, image: pyazTandooriParathaImage },
    { id: 49, name: 'Mooli Tandoori Paratha', nameHi: 'मूली तंदूरी पराठा', description: 'Tandoori paratha with radish', descriptionHi: 'मूली के साथ तंदूरी पराठा', category: 'paratha', quantity: 0, price: 60, image: mooliTandooriParathaImage },
    { id: 50, name: 'Mix Tandoori Paratha', nameHi: 'मिक्स तंदूरी पराठा', description: 'Tandoori paratha with mixed stuffing', descriptionHi: 'मिक्स स्टफिंग के साथ तंदूरी पराठा', category: 'paratha', quantity: 0, price: 60, image: mixTandooriParathaImage },
    { id: 51, name: 'Gobhi Tandoori Paratha', nameHi: 'गोभी तंदूरी पराठा', description: 'Tandoori paratha with spiced cauliflower', descriptionHi: 'मसालेदार गोभी के साथ तंदूरी पराठा', category: 'paratha', quantity: 0, price: 60, image: gobhiTandooriParathaImage },
    { id: 52, name: 'Paneer Paratha', nameHi: 'पनीर पराठा', description: 'Stuffed with spiced paneer', descriptionHi: 'मसालेदार पनीर से भरा हुआ', category: 'paratha', quantity: 0, price: 70, image: paneerParathaImage },
    { id: 53, name: 'Lachha Naan', nameHi: 'लच्छा नान', description: 'Layered crispy naan', descriptionHi: 'लेयर्ड क्रिस्पी नान', category: 'paratha', quantity: 0, price: 50, image: lachhaNaanImage },
    { id: 54, name: 'Gobhi Naan', nameHi: 'गोभी नान', description: 'Naan stuffed with cauliflower', descriptionHi: 'गोभी से भरा हुआ नान', category: 'paratha', quantity: 0, price: 50, image: gobhiNaanImage },
    { id: 55, name: 'Garlic Naan', nameHi: 'गार्लिक नान', description: 'Naan with garlic', descriptionHi: 'लहसुन के साथ नान', category: 'paratha', quantity: 0, price: 60, image: garlicNaanImage },
    { id: 56, name: 'Aloo Naan', nameHi: 'आलू नान', description: 'Naan stuffed with potatoes', descriptionHi: 'आलू से भरा हुआ नान', category: 'paratha', quantity: 0, price: 60, image: alooNaanImage },
    { id: 57, name: 'Naan Tandoori Paratha', nameHi: 'नान तंदूरी पराठा', description: 'Tandoori paratha with naan', descriptionHi: 'नान के साथ तंदूरी पराठा', category: 'paratha', quantity: 0, price: 70, image: naanTandooriParathaImage },
    { id: 58, name: 'Paneer Tandoori Paratha', nameHi: 'पनीर तंदूरी पराठा', description: 'Tandoori paratha with spiced paneer', descriptionHi: 'मसालेदार पनीर के साथ तंदूरी पराठा', category: 'paratha', quantity: 0, price: 70, image: paneerTandooriParathaImage },
    { id: 59, name: 'Paneer Naan', nameHi: 'पनीर नान', description: 'Naan stuffed with paneer', descriptionHi: 'पनीर से भरा हुआ नान', category: 'paratha', quantity: 0, price: 60, image: paneerNaanImage },

    { id: 60, name: 'French Fry', nameHi: 'फ्रेंच फ्राई', description: 'Crispy and golden fries', descriptionHi: 'क्रिस्पी और सुनहरे फ्राइज़', category: 'snacks', quantity: 0, price: 70, image: frenchFryImage },
    { id: 61, name: 'Peri Peri Fry', nameHi: 'पेरी पेरी फ्राई', description: 'Spicy peri peri flavored fries', descriptionHi: 'स्पाइसी पेरि पेरि फ्लेवर्ड फ्राइज़', category: 'snacks', quantity: 0, price: 90, image: periPeriFryImage },
    { id: 62, name: 'Veg Chowmein', nameHi: 'वेज़ चाउमीन', description: 'Stir-fried noodles with mixed vegetables', descriptionHi: 'मिश्रित सब्जियों के साथ तले हुए नूडल्स', category: 'snacks', quantity: 0, price: 90, image: vegChowmeinImage },
    { id: 63, name: 'Chilli Gobhi', nameHi: 'चिली गोभी', description: 'Spicy cauliflower in a tangy sauce', descriptionHi: 'तेज मसालेदार गोभी, तीखे सॉस में', category: 'snacks', quantity: 0, price: 120, image: chilliGobhiImage },
    { id: 64, name: 'Chilli Baby Corn', nameHi: 'चिली बेबी कॉर्न', description: 'Spicy baby corn in a tangy sauce', descriptionHi: 'मसालेदार बेबी कॉर्न, तीखे सॉस में', category: 'snacks', quantity: 0, price: 110, image: chilliBabyCornImage },
    { id: 65, name: 'Spring Roll', nameHi: 'स्प्रिंग रोल', description: 'Crispy rolls filled with vegetables', descriptionHi: 'सब्जियों से भरे क्रिस्पी रोल्स', category: 'snacks', quantity: 0, price: 90, image: springRollImage },
    { id: 66, name: 'Red Sauce Pasta', nameHi: 'रेड सॉस पास्ता', description: 'Pasta in a tangy red sauce', descriptionHi: 'तीखे रेड सॉस में पास्ता', category: 'snacks', quantity: 0, price: 130, image: redSaucePastaImage },
    { id: 67, name: 'Chilli Potato', nameHi: 'चिली पोटैटो', description: 'Spicy potatoes in a tangy sauce', descriptionHi: 'मसालेदार आलू, तीखे सॉस में', category: 'snacks', quantity: 0, price: 130, image: chilliPotatoImage },
    { id: 68, name: 'Honey Chilli Potato', nameHi: 'हनी चिली पोटैटो', description: 'Sweet and spicy honey chilli potatoes', descriptionHi: 'मीठे और मसालेदार हनी चिली आलू', category: 'snacks', quantity: 0, price: 150, image: honeyChilliPotatoImage },
    { id: 69, name: 'Mushroom Dips', nameHi: 'मशरूम डिप्स', description: 'Mushrooms served with dips', descriptionHi: 'डिप्स के साथ मशरूम', category: 'snacks', quantity: 0, price: 150, image: mushroomDipsImage },
    { id: 70, name: 'Chilli Manchurian', nameHi: 'चिली मंचूरियन', description: 'Spicy and tangy Manchurian', descriptionHi: 'मसालेदार और तीखा मंचूरियन', category: 'snacks', quantity: 0, price: 140, image: chilliManchurianImage },
    { id: 71, name: 'Chilli Paneer', nameHi: 'चिली पनीर', description: 'Spicy paneer cubes in a tangy sauce', descriptionHi: 'मसालेदार पनीर के टुकड़े, तीखे सॉस में', category: 'snacks', quantity: 0, price: 180, image: chilliPaneerImage },
    { id: 72, name: 'Chilli Mushroom', nameHi: 'चिली मशरूम', description: 'Spicy mushrooms in a tangy sauce', descriptionHi: 'मसालेदार मशरूम, तीखे सॉस में', category: 'snacks', quantity: 0, price: 170, image: chilliMushroomImage },
    { id: 73, name: 'Chilli Chaap', nameHi: 'चिली चाप', description: 'Spicy chaap in a tangy sauce', descriptionHi: 'मसालेदार चाप, तीखे सॉस में', category: 'snacks', quantity: 0, price: 180, image: chilliChaapImage },
    { id: 74, name: 'Tiranga Paneer', nameHi: 'तिरंगा पनीर', description: 'Paneer with a trio of spices', descriptionHi: 'तीन मसालों के साथ पनीर', category: 'snacks', quantity: 0, price: 170, image: tirangaPaneerImage },
    { id: 75, name: 'Kur Kure Chaap', nameHi: 'कुरकुरे चाप', description: 'Crispy and spicy chaap', descriptionHi: 'कुरकुरी और मसालेदार चाप', category: 'snacks', quantity: 0, price: 140, image: kurKureChaapImage },
    { id: 76, name: 'Mushroom Lollipop', nameHi: 'मशरूम लोल्लीपॉप', description: 'Crispy mushroom lollipops', descriptionHi: 'कुरकुरी मशरूम लोल्लीपॉप', category: 'snacks', quantity: 0, price: 150, image: mushroomLollipopImage },
    { id: 77, name: 'Cheese Tikki', nameHi: 'चीज़ टिक्की', description: 'Cheese stuffed potato patties', descriptionHi: 'चीज़ भरी आलू की टिक्की', category: 'snacks', quantity: 0, price: 150, image: cheeseTikkiImage },
    { id: 78, name: 'Singapuri Chowmein', nameHi: 'सिंगापुर चाउमीन', description: 'Singapore style stir-fried noodles', descriptionHi: 'सिंगापुर स्टाइल के तले हुए नूडल्स', category: 'snacks', quantity: 0, price: 120, image: singapuriChowmeinImage },
    { id: 79, name: 'Hakka Noodles', nameHi: 'हक्का नूडल्स', description: 'Classic Hakka style noodles', descriptionHi: 'क्लासिक हक्का स्टाइल नूडल्स', category: 'snacks', quantity: 0, price: 120, image: hakkaNoodlesImage },
    { id: 80, name: 'Paneer Chowmein', nameHi: 'पनीर चाउमीन', description: 'Chowmein with paneer', descriptionHi: 'पनीर के साथ चाउमीन', category: 'snacks', quantity: 0, price: 130, image: paneerChowmeinImage }, 
    { id: 81, name: 'White Sauce Pasta', nameHi: 'व्हाइट सॉस पास्ता', description: 'Pasta in a creamy white sauce', descriptionHi: 'क्रीमी व्हाइट सॉस में पास्ता', category: 'snacks', quantity: 0, price: 150, image: whiteSaucePastaImage },
    { id: 82, name: 'Mix Sauce Pasta', nameHi: 'मिक्स सॉस पास्ता', description: 'Pasta with a mix of sauces', descriptionHi: 'सॉस के मिश्रण के साथ पास्ता', category: 'snacks', quantity: 0, price: 150, image: mixSaucePastaImage },
    { id: 83, name: 'Cheese Pasta', nameHi: 'चीज़ पास्ता', description: 'Creamy cheese pasta', descriptionHi: 'क्रीमी चीज़ पास्ता', category: 'snacks', quantity: 0, price: 170, image: cheesePastaImage },
    
    { id: 84, name: 'Tawa Roti', nameHi: 'तवा रोटी', description: 'Plain tawa-cooked roti', descriptionHi: 'साधारण तवा पर पकाई हुई रोटी', category: 'breads', quantity: 0, price: 6, image: tawaRotiImage },
    { id: 85, name: 'Tawa Butter Roti', nameHi: 'तवा बटर रोटी', description: 'Tawa-cooked roti with butter', descriptionHi: 'बटर के साथ तवा पर पकाई हुई रोटी', category: 'breads', quantity: 0, price: 7, image: tawaButterRotiImage },
    { id: 86, name: 'Tandoori Roti', nameHi: 'तंदूरी रोटी', description: 'Clay oven-baked tandoori roti', descriptionHi: 'मिट्टी के तंदूर में बेक की हुई तंदूरी रोटी', category: 'breads', quantity: 0, price: 8, image: tandooriRotiImage },
    { id: 87, name: 'Tandoori Butter Roti', nameHi: 'तंदूरी बटर रोटी', description: 'Tandoori roti with butter', descriptionHi: 'बटर के साथ तंदूरी रोटी', category: 'breads', quantity: 0, price: 10, image: tandooriButterRotiImage },
    { id: 88, name: 'Tandoori Pyaz Roti', nameHi: 'तंदूरी प्याज रोटी', description: 'Tandoori roti with onion', descriptionHi: 'प्याज के साथ तंदूरी रोटी', category: 'breads', quantity: 0, price: 20, image: tandooriPyazRotiImage },
    { id: 89, name: 'Misi Roti', nameHi: 'मिस्सी रोटी', description: 'Traditional spiced misi roti', descriptionHi: 'पारंपरिक मसालेदार मिस्सी रोटी', category: 'breads', quantity: 0, price: 20, image: misiRotiImage },
    { id: 90, name: 'Misi Pyaz Roti', nameHi: 'मिस्सी प्याज रोटी', description: 'Misi roti with onion', descriptionHi: 'प्याज के साथ मिस्सी रोटी', category: 'breads', quantity: 0, price: 25, image: misiPyazRotiImage },

    { id: 91, name: 'Onion Pizza', nameHi: 'प्याज़ पिज़्ज़ा', description: 'Pizza topped with fresh onions', descriptionHi: 'ताज़े प्याज़ से सजाया गया पिज़्ज़ा', category: 'pizza', quantity: 0, price: 80, image: onionPizzaImage },
    { id: 92, name: 'Capsicum Pizza', nameHi: 'कैप्सिकम पिज़्ज़ा', description: 'Pizza topped with capsicum', descriptionHi: 'कैप्सिकम से सजाया गया पिज़्ज़ा', category: 'pizza', quantity: 0, price: 80, image: capsicumPizzaImage },
    { id: 93, name: 'Tomato Pizza', nameHi: 'टमाटर पिज़्ज़ा', description: 'Pizza with a rich tomato topping', descriptionHi: 'टमाटर के स्वादिष्ट टॉपिंग के साथ पिज़्ज़ा', category: 'pizza', quantity: 0, price: 90, image: tomatoPizzaImage },
    { id: 94, name: 'Margherita Pizza', nameHi: 'मार्गेरिटा पिज़्ज़ा', description: 'Classic pizza with cheese and basil', descriptionHi: 'पनीर और तुलसी के साथ क्लासिक पिज़्ज़ा', category: 'pizza', quantity: 0, price: 110, image: margheritaPizzaImage },
    { id: 95, name: 'Farm Pizza', nameHi: 'फार्म पिज़्ज़ा', description: 'Pizza loaded with farm-fresh vegetables', descriptionHi: 'ताज़ी सब्जियों से भरा हुआ पिज़्ज़ा', category: 'pizza', quantity: 0, price: 130, image: farmPizzaImage },
    { id: 96, name: 'Cheese Pizza', nameHi: 'चीज़ पिज़्ज़ा', description: 'Pizza with extra cheese', descriptionHi: 'अधिक चीज़ के साथ पिज़्ज़ा', category: 'pizza', quantity: 0, price: 140, image: cheesePizzaImage },
    { id: 97, name: 'Veg Pizza', nameHi: 'वेज़ पिज़्ज़ा', description: 'Pizza topped with a variety of vegetables', descriptionHi: 'विविध सब्जियों के साथ पिज़्ज़ा', category: 'pizza', quantity: 0, price: 130, image: vegPizzaImage },
    { id: 98, name: 'Paneer Pizza', nameHi: 'पनीर पिज़्ज़ा', description: 'Pizza with chunks of paneer', descriptionHi: 'पनीर के टुकड़ों के साथ पिज़्ज़ा', category: 'pizza', quantity: 0, price: 150, image: paneerPizzaImage },
   
   
    { id: 99, name: 'Paneer Tikka', nameHi: 'पनीर टिक्का', description: 'Grilled paneer cubes with spices', descriptionHi: 'मसालों के साथ ग्रिल किया हुआ पनीर', category: 'tikka', quantity: 0, price: 220, image: paneerTikkaImage },
    { id: 100, name: 'Haryali Paneer Tikka', nameHi: 'हरियाली पनीर टिक्का', description: 'Paneer cubes marinated in a green herb mixture', descriptionHi: 'हरे मसालों के मिश्रण में मेरिनेट किया हुआ पनीर', category: 'tikka', quantity: 0, price: 200, image: haryaliPaneerTikkaImage },
    { id: 101, name: 'Masala Paneer Tikka', nameHi: 'मसाला पनीर टिक्का', description: 'Spicy paneer tikka with masala', descriptionHi: 'मसालों के साथ मसालेदार पनीर टिक्का', category: 'tikka', quantity: 0, price: 200, image: masalaPaneerTikkaImage },
    { id: 102, name: 'Mushroom Tikka', nameHi: 'मशरूम टिक्का', description: 'Grilled mushrooms with spices', descriptionHi: 'मसालों के साथ ग्रिल किया हुआ मशरूम', category: 'tikka', quantity: 0, price: 200, image: mushroomTikkaImage },
    { id: 103, name: 'Malai Mushroom Tikka', nameHi: 'मलाई मशरूम टिक्का', description: 'Creamy mushroom tikka', descriptionHi: 'क्रीमी मशरूम टिक्का', category: 'tikka', quantity: 0, price: 220, image: malaiMushroomTikkaImage },
    { id: 104, name: 'Masala Mushroom Tikka', nameHi: 'मसाला मशरूम टिक्का', description: 'Spicy mushroom tikka with masala', descriptionHi: 'मसालेदार मशरूम टिक्का', category: 'tikka', quantity: 0, price: 200, image: masalaMushroomTikkaImage },
    { id: 105, name: 'Achari Mushroom Tikka', nameHi: 'अचारी मशरूम टिक्का', description: 'Mushroom tikka with pickling spices', descriptionHi: 'अचार मसालों के साथ मशरूम टिक्का', category: 'tikka', quantity: 0, price: 200, image: achariMushroomTikkaImage },
    { id: 106, name: 'Haryali Mushroom Tikka', nameHi: 'हरियाली मशरूम टिक्का', description: 'Mushroom tikka with green herbs', descriptionHi: 'हरे मसालों के साथ मशरूम टिक्का', category: 'tikka', quantity: 0, price: 200, image: haryaliMushroomTikkaImage },
    { id: 107, name: 'Afghani Mushroom Tikka', nameHi: 'अफगानी मशरूम टिक्का', description: 'Creamy Afghani style mushroom tikka', descriptionHi: 'क्रीमी अफगानी शैली का मशरूम टिक्का', category: 'tikka', quantity: 0, price: 200, image: afghaniMushroomTikkaImage },
    { id: 108, name: 'Afghani Paneer Tikka', nameHi: 'अफगानी पनीर टिक्का', description: 'Creamy Afghani style paneer tikka', descriptionHi: 'क्रीमी अफगानी शैली का पनीर टिक्का', category: 'tikka', quantity: 0, price: 220, image: afghaniPaneerTikkaImage },
    { id: 109, name: 'Malai Paneer Tikka', nameHi: 'मलाई पनीर टिक्का', description: 'Creamy paneer tikka', descriptionHi: 'क्रीमी पनीर टिक्का', category: 'tikka', quantity: 0, price: 220, image: malaiPaneerTikkaImage },
    { id: 110, name: 'Veg Sik Kabab', nameHi: 'वेज़ सिक कबाब', description: 'Skewered vegetable kababs', descriptionHi: 'सीख पर बने हुए सब्ज़ी कबाब', category: 'tikka', quantity: 0, price: 180, image: vegSikKababImage },
    { id: 111, name: 'Haryali Kabab', nameHi: 'हरियाली कबाब', description: 'Green herb flavored kababs', descriptionHi: 'हरे मसालों का स्वाद लिए हुए कबाब', category: 'tikka', quantity: 0, price: 180, image: haryaliKababImage },


    { id: 112, name: 'Veg Sandwich', nameHi: 'वेज सैंडविच', description: 'Fresh vegetable sandwich', descriptionHi: 'ताज़ा सब्ज़ियों से भरा सैंडविच', category: 'sandwich', quantity: 0, price: 90, image: vegSandwichImage },
    { id: 113, name: 'Aloo Sandwich', nameHi: 'आलू सैंडविच', description: 'Potato filled sandwich', descriptionHi: 'आलू से भरा सैंडविच', category: 'sandwich', quantity: 0, price: 70, image: alooSandwichImage },
    { id: 114, name: 'Grilled Sandwich', nameHi: 'ग्रिल्ड सैंडविच', description: 'Crispy grilled sandwich', descriptionHi: 'कुरकुरा ग्रिल्ड सैंडविच', category: 'sandwich', quantity: 0, price: 110, image: grilledSandwichImage },
    { id: 115, name: 'Paneer Grilled Sandwich', nameHi: 'पनीर ग्रिल्ड सैंडविच', description: 'Grilled sandwich with paneer', descriptionHi: 'पनीर से भरा ग्रिल्ड सैंडविच', category: 'sandwich', quantity: 0, price: 120, image: paneerGrilledSandwichImage },
    { id: 116, name: 'Paneer Tikka Sandwich', nameHi: 'पनीर टिक्का सैंडविच', description: 'Sandwich with paneer tikka filling', descriptionHi: 'पनीर टिक्का से भरा सैंडविच', category: 'sandwich', quantity: 0, price: 140, image: paneerTikkaSandwichImage },
    { id: 117, name: 'Cheese Sandwich', nameHi: 'चीज़ सैंडविच', description: 'Cheese filled sandwich', descriptionHi: 'चीज़ से भरा सैंडविच', category: 'sandwich', quantity: 0, price: 140, image: cheeseSandwichImage },


    { id: 118, name: 'Steam Rice', nameHi: 'स्टीम राइस', description: 'Plain steamed rice', descriptionHi: 'साधा स्टीम राइस', category: 'rice', quantity: 0, price: 70, image: steamRiceImage },
    { id: 119, name: 'Plain Rice', nameHi: 'सादा चावल', description: 'Simple plain rice', descriptionHi: 'साधा चावल', category: 'rice', quantity: 0, price: 70, image: plainRiceImage },
    { id: 120, name: 'Jeera Rice', nameHi: 'जीरा राइस', description: 'Rice flavored with cumin seeds', descriptionHi: 'जीरा के बीजों के साथ चावल', category: 'rice', quantity: 0, price: 80, image: jeeraRiceImage },
    { id: 121, name: 'Fried Rice', nameHi: 'फ्राइड राइस', description: 'Stir-fried rice with vegetables', descriptionHi: 'सब्जियों के साथ तला हुआ चावल', category: 'rice', quantity: 0, price: 100, image: friedRiceImage },
    { id: 122, name: 'Pulao', nameHi: 'पुलाव', description: 'Rice cooked with spices and vegetables', descriptionHi: 'मसालों और सब्जियों के साथ पका हुआ चावल', category: 'rice', quantity: 0, price: 120, image: pulaoImage },
    { id: 123, name: 'Matar Pulao', nameHi: 'मटर पुलाव', description: 'Pulao with green peas', descriptionHi: 'मटर के साथ पुलाव', category: 'rice', quantity: 0, price: 130, image: matarPulaoImage },
    { id: 124, name: 'Paneer Fried Rice', nameHi: 'पनीर फ्राइड राइस', description: 'Fried rice with paneer cubes', descriptionHi: 'पनीर के टुकड़ों के साथ तला हुआ चावल', category: 'rice', quantity: 0, price: 160, image: paneerFriedRiceImage },
    { id: 125, name: 'Lemon Rice', nameHi: 'लेमन राइस', description: 'Rice flavored with lemon and spices', descriptionHi: 'नींबू और मसालों के साथ चावल', category: 'rice', quantity: 0, price: 120, image: lemonRiceImage },
    { id: 126, name: 'Curd Rice', nameHi: 'दही चावल', description: 'Rice mixed with curd and spices', descriptionHi: 'दही और मसालों के साथ चावल', category: 'rice', quantity: 0, price: 110, image: curdRiceImage },
    { id: 127, name: 'Soyabean Rice', nameHi: 'सोया चावल', description: 'Rice cooked with soyabeans', descriptionHi: 'सोया बीन के साथ चावल', category: 'rice', quantity: 0, price: 110, image: soyabeanRiceImage },
    { id: 128, name: 'Paneer Pulao', nameHi: 'पनीर पुलाव', description: 'Pulao with paneer cubes', descriptionHi: 'पनीर के टुकड़ों के साथ पुलाव', category: 'rice', quantity: 0, price: 160, image: paneerPulaoImage },
    { id: 129, name: 'Mushroom Pulao', nameHi: 'मशरूम पुलाव', description: 'Pulao with mushrooms', descriptionHi: 'मशरूम के साथ पुलाव', category: 'rice', quantity: 0, price: 150, image: mushroomPulaoImage },
    { id: 130, name: 'Hyderabadi Pulao', nameHi: 'हैदराबादी पुलाव', description: 'Spicy Hyderabadi style pulao', descriptionHi: 'मसालेदार हैदराबादी शैली का पुलाव', category: 'rice', quantity: 0, price: 170, image: hyderabadiPulaoImage },

    { id: 131, name: 'Masala Chaap', nameHi: 'मसाला चाप', description: 'Chaap with a spicy masala blend', descriptionHi: 'मसालेदार चाप', category: 'chaap', quantity: 0, price: 220, image: masalaChaapImage },
    { id: 132, name: 'Lemon Chaap', nameHi: 'लेमन चाप', description: 'Chaap with lemon flavor', descriptionHi: 'नींबू के स्वाद वाली चाप', category: 'chaap', quantity: 0, price: 220, image: lemonChaapImage },
    { id: 133, name: 'Achari Chaap', nameHi: 'अचारी चाप', description: 'Chaap with tangy pickle spices', descriptionHi: 'अचारी मसालों के साथ चाप', category: 'chaap', quantity: 0, price: 220, image: achariChaapImage },
    { id: 134, name: 'Haryali Chaap', nameHi: 'हरियाली चाप', description: 'Chaap marinated with green herbs', descriptionHi: 'हरी जड़ी बूटियों के साथ मैरीनेट की हुई चाप', category: 'chaap', quantity: 0, price: 220, image: haryaliChaapImage },
    { id: 135, name: 'Malai Chaap', nameHi: 'मलाई चाप', description: 'Creamy malai chaap', descriptionHi: 'मलाई के साथ चाप', category: 'chaap', quantity: 0, price: 220, image: malaiChaapImage },
    { id: 136, name: 'Afghani Chaap', nameHi: 'अफगानी चाप', description: 'Mildly spiced Afghani-style chaap', descriptionHi: 'हल्के मसालों के साथ अफगानी शैली की चाप', category: 'chaap', quantity: 0, price: 220, image: afghaniChaapImage },
    { id: 137, name: 'Achari Chaap', nameHi: 'अचारी चाप', description: 'Chaap with tangy pickle spices', descriptionHi: 'अचारी मसालों के साथ चाप', category: 'chaap', quantity: 0, price: 220, image: achariChaapImage },
    { id: 138, name: 'Chaap Gravy', nameHi: 'चाप ग्रेवी', description: 'Chaap cooked in rich gravy', descriptionHi: 'मसालेदार ग्रेवी में पकाई गई चाप', category: 'chaap', quantity: 0, price: 220, image: chaapGravyImage },

    { id: 139, name: 'Green Salad', nameHi: 'हरा सलाद', description: 'Fresh green salad', descriptionHi: 'ताजा हरा सलाद', category: 'salad', quantity: 0, price: 70, image: greenSaladImage },
    { id: 140, name: 'Mixture Salad', nameHi: 'मिक्स सलाद', description: 'Mixed vegetables salad', descriptionHi: 'मिश्रित सब्जियों का सलाद', category: 'salad', quantity: 0, price: 100, image: mixtureSaladImage },
    { id: 141, name: 'Fruit Cream Salad', nameHi: 'फ्रूट क्रीम सलाद', description: 'Salad with mixed fruits and cream', descriptionHi: 'मिश्रित फलों और क्रीम के साथ सलाद', category: 'salad', quantity: 0, price: 120, image: fruitCreamSaladImage },
    { id: 142, name: 'Kachumber Salad', nameHi: 'कचुम्बर सलाद', description: 'Fresh vegetable salad', descriptionHi: 'ताजा सब्जियों का सलाद', category: 'salad', quantity: 0, price: 120, image: kachumberSaladImage },
    { id: 143, name: 'Tandoori Salad', nameHi: 'तंदूरी सलाद', description: 'Salad with grilled vegetables', descriptionHi: 'ग्रिल की गई सब्जियों के साथ सलाद', category: 'salad', quantity: 0, price: 200, image: tandooriSaladImage },


    { id: 144, name: 'Plain Papad', nameHi: 'सादा पापड़', description: 'Crispy plain papad', descriptionHi: 'कुरकुरा सादा पापड़', category: 'papad', quantity: 0, price: 20, image: plainPapadImage },
    { id: 145, name: 'Fry Papad', nameHi: 'फ्राई पापड़', description: 'Fried papad', descriptionHi: 'तला हुआ पापड़', category: 'papad', quantity: 0, price: 25, image: fryPapadImage },
    { id: 146, name: 'Tandoori Papad', nameHi: 'तंदूरी पापड़', description: 'Tandoor cooked papad', descriptionHi: 'तंदूर में पका पापड़', category: 'papad', quantity: 0, price: 25, image: tandooriPapadImage },
    { id: 147, name: 'Masala Papad', nameHi: 'मसाला पापड़', description: 'Papad topped with spices and vegetables', descriptionHi: 'मसालों और सब्जियों से सजा पापड़', category: 'papad', quantity: 0, price: 50, image: masalaPapadImage },
    { id: 148, name: 'Aloo Pyaaz Pakora', nameHi: 'आलू प्याज पकौड़ा', description: 'Crispy fritters made with potatoes and onions', descriptionHi: 'आलू और प्याज से बने कुरकुरे पकौड़े', category: 'papad', quantity: 0, price: 120, image: alooPyaazPakoraImage },
    { id: 149, name: 'Palak Pakora', nameHi: 'पालक पकौड़ा', description: 'Crispy spinach fritters', descriptionHi: 'कुरकुरे पालक के पकौड़े', category: 'papad', quantity: 0, price: 120, image: palakPakoraImage },
    { id: 150, name: 'Paneer Pakora', nameHi: 'पनीर पकौड़ा', description: 'Crispy fritters made with paneer', descriptionHi: 'पनीर से बने कुरकुरे पकौड़े', category: 'papad', quantity: 0, price: 210, image: paneerPakoraImage },
    { id: 151, name: 'Mix Pakora', nameHi: 'मिक्स पकौड़ा', description: 'Assorted vegetable fritters', descriptionHi: 'मिश्रित सब्जियों के पकौड़े', category: 'papad', quantity: 0, price: 180, image: mixPakoraImage },

    { id: 152, name: 'Tomato Soup', nameHi: 'टमाटर सूप', description: 'Classic tomato soup', descriptionHi: 'क्लासिक टमाटर सूप', category: 'soup', quantity: 0, price: 70, image: tomatoSoupImage },
    { id: 153, name: 'Hot & Sour Soup', nameHi: 'हॉट एंड सॉर सूप', description: 'Spicy and tangy hot & sour soup', descriptionHi: 'मसालेदार और खट्टा हॉट & सॉर सूप', category: 'soup', quantity: 0, price: 70, image: hotSourSoupImage },
    { id: 154, name: 'Veg Soup', nameHi: 'वेज सूप', description: 'Healthy vegetable soup', descriptionHi: 'स्वस्थ सब्जियों का सूप', category: 'soup', quantity: 0, price: 80, image: vegSoupImage },
    { id: 155, name: 'Chana Soup', nameHi: 'चना सूप', description: 'Chickpea soup', descriptionHi: 'चना सूप', category: 'soup', quantity: 0, price: 70, image: chanaSoupImage },
    { id: 156, name: 'Sweet Corn Soup', nameHi: 'स्वीट कॉर्न सूप', description: 'Creamy sweet corn soup', descriptionHi: 'क्रीमी स्वीट कॉर्न सूप', category: 'soup', quantity: 0, price: 80, image: sweetCornSoupImage },
    { id: 278, name: 'Mushroom Soup', nameHi: 'मशरूम सूप', description: 'Rich mushroom soup', descriptionHi: 'संतृप्त मशरूम सूप', category: 'soup', quantity: 0, price: 90, image: mushroomSoupImage },


    { id: 157, name: 'Plain Maggi', nameHi: 'प्लेन मैगी', description: 'Simple and classic Maggi', descriptionHi: 'साधारण और क्लासिक मैगी', category: 'maggi', quantity: 0, price: 50, image: plainMaggiImage },
    { id: 158, name: 'Veg Maggi', nameHi: 'वेज मैगी', description: 'Maggi with mixed vegetables', descriptionHi: 'मिक्स सब्जियों के साथ मैगी', category: 'maggi', quantity: 0, price: 70, image: vegMaggiImage },
    { id: 159, name: 'Cheese Maggi', nameHi: 'चीज मैगी', description: 'Maggi with cheese', descriptionHi: 'चीज के साथ मैगी', category: 'maggi', quantity: 0, price: 90, image: cheeseMaggiImage },
    { id: 160, name: 'Paneer Maggi', nameHi: 'पनीर मैगी', description: 'Maggi with paneer', descriptionHi: 'पनीर के साथ मैगी', category: 'maggi', quantity: 0, price: 100, image: paneerMaggiImage },

    { id: 161, name: 'Tea', nameHi: 'चाय', description: 'Traditional tea', descriptionHi: 'पारंपरिक चाय', category: 'tea-coffee', quantity: 0, price: 15, image: teaImage },
    { id: 162, name: 'Special Tea', nameHi: 'स्पेशल चाय', description: 'Special blend tea', descriptionHi: 'स्पेशल ब्लेंड चाय', category: 'tea-coffee', quantity: 0, price: 20, image: specialTeaImage },
    { id: 163, name: 'Black Tea', nameHi: 'ब्लैक चाय', description: 'Strong black tea', descriptionHi: 'मज़बूत ब्लैक चाय', category: 'tea-coffee', quantity: 0, price: 20, image: blackTeaImage },
    { id: 164, name: 'Kulhad Tea', nameHi: 'कुल्हड़ चाय', description: 'Tea served in a traditional kulhad', descriptionHi: 'पारंपरिक कुल्हड़ में चाय', category: 'tea-coffee', quantity: 0, price: 30, image: kulhadTeaImage },
    { id: 165, name: 'Green Tea', nameHi: 'ग्रीन टी', description: 'Refreshing green tea', descriptionHi: 'ताज़गी देने वाली ग्रीन टी', category: 'tea-coffee', quantity: 0, price: 30, image: greenTeaImage },
    { id: 166, name: 'Hot Coffee', nameHi: 'हॉट कॉफ़ी', description: 'Classic hot coffee', descriptionHi: 'क्लासिक हॉट कॉफ़ी', category: 'tea-coffee', quantity: 0, price: 40, image: hotCoffeeImage },
    { id: 167, name: 'Cold Coffee', nameHi: 'कोल्ड कॉफ़ी', description: 'Chilled cold coffee', descriptionHi: 'ठंडी कोल्ड कॉफ़ी', category: 'tea-coffee', quantity: 0, price: 50, image: coldCoffeeImage },

    { id: 168, name: 'Aloo Tikki Burger', nameHi: 'आलू टिक्की बर्गर', description: 'Burger with aloo tikki patty', descriptionHi: 'आलू टिक्की पैटी के साथ बर्गर', category: 'burger', quantity: 0, price: 50, image: alooTikkiBurgerImage },
    { id: 169, name: 'Veg Burger', nameHi: 'वेज बर्गर', description: 'Classic veg burger', descriptionHi: 'क्लासिक वेज बर्गर', category: 'burger', quantity: 0, price: 70, image: vegBurgerImage },
    { id: 170, name: 'Paneer Burger', nameHi: 'पनीर बर्गर', description: 'Burger with paneer patty', descriptionHi: 'पनीर पैटी के साथ बर्गर', category: 'burger', quantity: 0, price: 80, image: paneerBurgerImage },
    { id: 171, name: 'Cheese Burger', nameHi: 'चीज बर्गर', description: 'Burger with cheese patty', descriptionHi: 'चीज पैटी के साथ बर्गर', category: 'burger', quantity: 0, price: 90, image: cheeseBurgerImage },

    { id: 172, name: 'Vanilla Shake', nameHi: 'वनीला शेक', description: 'Creamy vanilla shake', descriptionHi: 'क्रीमी वनीला शेक', category: 'shake', quantity: 0, price: 50, image: vanillaShakeImage },
    { id: 173, name: 'Strawberry Shake', nameHi: 'स्ट्रॉबेरी शेक', description: 'Fruity strawberry shake', descriptionHi: 'फ्रूटी स्ट्रॉबेरी शेक', category: 'shake', quantity: 0, price: 50, image: strawberryShakeImage },
    { id: 174, name: 'Chocolate Shake', nameHi: 'चॉकलेट शेक', description: 'Rich chocolate shake', descriptionHi: 'रिच चॉकलेट शेक', category: 'shake', quantity: 0, price: 50, image: chocolateShakeImage },
    { id: 175, name: 'Roohafza Shake', nameHi: 'रूहअफ़ज़ा शेक', description: 'Sweet and refreshing Roohafza shake', descriptionHi: 'मीठा और ताज़गी देने वाला रो़हअफ़ज़ा शेक', category: 'shake', quantity: 0, price: 50, image: roohafzaShakeImage },
    { id: 176, name: 'Banana Shake', nameHi: 'बनाना शेक', description: 'Smooth banana shake', descriptionHi: 'स्मूद बनाना शेक', category: 'shake', quantity: 0, price: 60, image: bananaShakeImage },
    { id: 177, name: 'Mango Shake', nameHi: 'आम शेक', description: 'Delicious mango shake', descriptionHi: 'स्वादिष्ट आम शेक', category: 'shake', quantity: 0, price: 70, image: mangoShakeImage },
    { id: 178, name: 'Papaya Shake', nameHi: 'पपीता शेक', description: 'Refreshing papaya shake', descriptionHi: 'ताज़गी देने वाला पपीता शेक', category: 'shake', quantity: 0, price: 80, image: papayaShakeImage },
    { id: 179, name: 'Fruit Shake', nameHi: 'फ्रूट शेक', description: 'Mixed fruit shake', descriptionHi: 'मिक्स्ड फ्रूट शेक', category: 'shake', quantity: 0, price: 100, image: fruitShakeImage },
    { id: 180, name: 'Badam Shake', nameHi: 'बादाम शेक', description: 'Nutty badam shake', descriptionHi: 'नट्टी बादाम शेक', category: 'shake', quantity: 0, price: 100, image: badamShakeImage },
    { id: 181, name: 'Kesariya Shake', nameHi: 'केसरिया शेक', description: 'Rich kesariya shake', descriptionHi: 'रिच केसरिया शेक', category: 'shake', quantity: 0, price: 120, image: kesariyaShakeImage },
    
    // New shakes with ice cream
    { id: 182, name: 'Vanilla Shake with Ice Cream', nameHi: 'वनीला शेक विद आइसक्रीम', description: 'Vanilla shake with a scoop of ice cream', descriptionHi: 'वनीला शेक के साथ आइसक्रीम का स्कूप', category: 'shake', quantity: 0, price: 100, image: vanillaShakeWithIceCreamImage },
    { id: 183, name: 'Strawberry Shake with Ice Cream', nameHi: 'स्ट्रॉबेरी शेक विद आइसक्रीम', description: 'Strawberry shake with a scoop of ice cream', descriptionHi: 'स्ट्रॉबेरी शेक के साथ आइसक्रीम का स्कूप', category: 'shake', quantity: 0, price: 100, image: strawberryShakeWithIceCreamImage },
    { id: 184, name: 'Chocolate Shake with Ice Cream', nameHi: 'चॉकलेट शेक विद आइसक्रीम', description: 'Chocolate shake with a scoop of ice cream', descriptionHi: 'चॉकलेट शेक के साथ आइसक्रीम का स्कूप', category: 'shake', quantity: 0, price: 100, image: chocolateShakeWithIceCreamImage },

    { id: 185, name: 'Iced Tea', nameHi: 'आइस्ड टी', description: 'Refreshing iced tea', descriptionHi: 'ताज़गी देने वाला आइस्ड टी', category: 'mocktail', quantity: 0, price: 40, image: icedTeaImage },
    { id: 186, name: 'Lemon Soda', nameHi: 'लेमन सोडा', description: 'Chilled lemon soda', descriptionHi: 'ठंडी नींबू सोडा', category: 'mocktail', quantity: 0, price: 40, image: lemonSodaImage },
    { id: 187, name: 'Jaljeera', nameHi: 'जलजीरा', description: 'Spicy and tangy jaljeera', descriptionHi: 'मसालेदार और खट्टा जलजीरा', category: 'mocktail', quantity: 0, price: 40, image: jaljeeraImage },
    { id: 188, name: 'Mint Mojito', nameHi: 'मिंट मोजिटो', description: 'Cool mint mojito', descriptionHi: 'ठंडा मिंट मोजिटो', category: 'mocktail', quantity: 0, price: 60, image: mintMojitoImage },
    { id: 189, name: 'Shikanji', nameHi: 'शिकंजी', description: 'Traditional Indian lemonade', descriptionHi: 'पारंपरिक भारतीय नींबू पानी', category: 'mocktail', quantity: 0, price: 60, image: shikanjiImage },
    { id: 190, name: 'Watermelon Mojito', nameHi: 'वाटरमेलन मोजिटो', description: 'Refreshing watermelon mojito', descriptionHi: 'ताज़गी देने वाला वाटरमेलन मोजिटो', category: 'mocktail', quantity: 0, price: 70, image: watermelonMojitoImage },
    { id: 191, name: 'Green Apple Mojito', nameHi: 'ग्रीन एप्पल मोजिटो', description: 'Tangy green apple mojito', descriptionHi: 'खट्टा ग्रीन एप्पल मोजिटो', category: 'mocktail', quantity: 0, price: 70, image: greenAppleMojitoImage },

{ id: 192, name: 'Dahi Raita', nameHi: 'दही रायता', description: 'Traditional yogurt-based raita', descriptionHi: 'पारंपरिक दही पर आधारित रायता', category: 'raita', quantity: 0, price: 40, image: dahiRaitaImage },
{ id: 193, name: 'Aloo Raita', nameHi: 'आलू रायता', description: 'Yogurt raita with spiced potatoes', descriptionHi: 'मसालेदार आलू के साथ दही रायता', category: 'raita', quantity: 0, price: 60, image: alooRaitaImage },
{ id: 194, name: 'Jeera Raita', nameHi: 'जीरा रायता', description: 'Yogurt raita with cumin seeds', descriptionHi: 'जीरे के साथ दही रायता', category: 'raita', quantity: 0, price: 70, image: jeeraRaitaImage },
{ id: 195, name: 'Beetroot Raita', nameHi: 'बीट राइटा', description: 'Yogurt raita with beetroot', descriptionHi: 'बीट रूट के साथ दही रायता', category: 'raita', quantity: 0, price: 100, image: beetrootRaitaImage },
{ id: 196, name: 'Ghiya Raita', nameHi: 'घीया रायता', description: 'Yogurt raita with bottle gourd', descriptionHi: 'लौकी के साथ दही रायता', category: 'raita', quantity: 0, price: 70, image: ghiyaRaitaImage },
{ id: 197, name: 'Mix Raita', nameHi: 'मिक्स रायता', description: 'Mixed vegetable raita', descriptionHi: 'मिक्स सब्जियों के साथ रायता', category: 'raita', quantity: 0, price: 80, image: mixRaitaImage },
{ id: 198, name: 'Boondi Raita', nameHi: 'बूंदी रायता', description: 'Yogurt raita with crispy boondi', descriptionHi: 'क्रिस्पी बूंदी के साथ दही रायता', category: 'raita', quantity: 0, price: 80, image: boondiRaitaImage },
{ id: 199, name: 'Palak Raita', nameHi: 'पालक रायता', description: 'Yogurt raita with spinach', descriptionHi: 'पालक के साथ दही रायता', category: 'raita', quantity: 0, price: 80, image: palakRaitaImage },
{ id: 200, name: 'Pineapple Raita', nameHi: 'अनानास रायता', description: 'Yogurt raita with pineapple chunks', descriptionHi: 'अनानास के टुकड़ों के साथ दही रायता', category: 'raita', quantity: 0, price: 120, image: pineappleRaitaImage },
{ id: 201, name: 'Fruit Raita', nameHi: 'फ्रूट रायता', description: 'Mixed fruit raita', descriptionHi: 'मिक्स फ्रूट रायता', category: 'raita', quantity: 0, price: 150, image: fruitRaitaImage },

{ id: 202, name: 'French Fry (Small Size)', nameHi: 'फ्रेंच फ्राई (छोटा आकार)', description: 'Crispy and golden fries', descriptionHi: 'क्रिस्पी और सुनहरे फ्राइज़', category: 'snacks_half_plate', quantity: 0, price: 50, image: frenchFryImage },
{ id: 203, name: 'Peri Peri Fry (Small Size)', nameHi: 'पेरी पेरी फ्राई (छोटा आकार)', description: 'Spicy peri peri flavored fries', descriptionHi: 'स्पाइसी पेरि पेरि फ्लेवर्ड फ्राइज़', category: 'snacks_half_plate', quantity: 0, price: 70, image: periPeriFryImage },
{ id: 204, name: 'Veg Chowmein (Small Size)', nameHi: 'वेज़ चाउमीन (छोटा आकार)', description: 'Stir-fried noodles with mixed vegetables', descriptionHi: 'मिश्रित सब्जियों के साथ तले हुए नूडल्स', category: 'snacks_half_plate', quantity: 0, price: 60, image: vegChowmeinImage },
{ id: 205, name: 'Chilli Gobhi (Small Size)', nameHi: 'चिली गोभी (छोटा आकार)', description: 'Spicy cauliflower in a tangy sauce', descriptionHi: 'तेज मसालेदार गोभी, तीखे सॉस में', category: 'snacks_half_plate', quantity: 0, price: 90, image: chilliGobhiImage },
{ id: 206, name: 'Chilli Baby Corn (Small Size)', nameHi: 'चिली बेबी कॉर्न (छोटा आकार)', description: 'Spicy baby corn in a tangy sauce', descriptionHi: 'मसालेदार बेबी कॉर्न, तीखे सॉस में', category: 'snacks_half_plate', quantity: 0, price: 80, image: chilliBabyCornImage },
{ id: 207, name: 'Red Sauce Pasta (Small Size)', nameHi: 'रेड सॉस पास्ता (छोटा आकार)', description: 'Pasta in a tangy red sauce', descriptionHi: 'तीखे रेड सॉस में पास्ता', category: 'snacks_half_plate', quantity: 0, price: 90, image: redSaucePastaImage },
{ id: 208, name: 'Chilli Potato (Small Size)', nameHi: 'चिली पोटैटो (छोटा आकार)', description: 'Spicy potatoes in a tangy sauce', descriptionHi: 'मसालेदार आलू, तीखे सॉस में', category: 'snacks_half_plate', quantity: 0, price: 90, image: chilliPotatoImage },
{ id: 209, name: 'Honey Chilli Potato (Small Size)', nameHi: 'हनी चिली पोटैटो (छोटा आकार)', description: 'Sweet and spicy honey chilli potatoes', descriptionHi: 'मीठे और मसालेदार हनी चिली आलू', category: 'snacks_half_plate', quantity: 0, price: 110, image: honeyChilliPotatoImage },
{ id: 210, name: 'Chilli Manchurian (Small Size)', nameHi: 'चिली मंचूरियन (छोटा आकार)', description: 'Spicy and tangy Manchurian', descriptionHi: 'मसालेदार और तीखा मंचूरियन', category: 'snacks_half_plate', quantity: 0, price: 90, image: chilliManchurianImage },
{ id: 211, name: 'Chilli Paneer (Small Size)', nameHi: 'चिली पनीर (छोटा आकार)', description: 'Spicy paneer cubes in a tangy sauce', descriptionHi: 'मसालेदार पनीर के टुकड़े, तीखे सॉस में', category: 'snacks_half_plate', quantity: 0, price: 120, image: chilliPaneerImage },
{ id: 212, name: 'Chilli Mushroom (Small Size)', nameHi: 'चिली मशरूम (छोटा आकार)', description: 'Spicy mushrooms in a tangy sauce', descriptionHi: 'मसालेदार मशरूम, तीखे सॉस में', category: 'snacks_half_plate', quantity: 0, price: 110, image: chilliMushroomImage },
{ id: 213, name: 'Chilli Chaap (Small Size)', nameHi: 'चिली चाप (छोटा आकार)', description: 'Spicy chaap in a tangy sauce', descriptionHi: 'मसालेदार चाप, तीखे सॉस में', category: 'snacks_half_plate', quantity: 0, price: 120, image: chilliChaapImage },
{ id: 214, name: 'Tiranga Paneer (Small Size)', nameHi: 'तिरंगा पनीर (छोटा आकार)', description: 'Paneer with a trio of spices', descriptionHi: 'तीन मसालों के साथ पनीर', category: 'snacks_half_plate', quantity: 0, price: 100, image: tirangaPaneerImage },
{ id: 215, name: 'Singapuri Chowmein (Small Size)', nameHi: 'सिंगापुरी चाउमीन (छोटा आकार)', description: 'Spicy noodles with Singaporean flavors', descriptionHi: 'सिंगापुरी फ्लेवर्स के साथ मसालेदार नूडल्स', category: 'snacks_half_plate', quantity: 0, price: 80, image: singapuriChowmeinImage },
{ id: 216, name: 'Hakka Noodles (Small Size)', nameHi: 'हक्का नूडल्स (छोटा आकार)', description: 'Stir-fried Hakka style noodles', descriptionHi: 'हक्का स्टाइल में तले हुए नूडल्स', category: 'snacks_half_plate', quantity: 0, price: 80, image: hakkaNoodlesImage },
{ id: 217, name: 'Paneer Chowmein (Small Size)', nameHi: 'पनीर चाउमीन (छोटा आकार)', description: 'Chowmein with paneer', descriptionHi: 'पनीर के साथ चाउमीन', category: 'snacks_half_plate', quantity: 0, price: 90, image: paneerChowmeinImage },
{ id: 218, name: 'White Sauce Pasta (Small Size)', nameHi: 'व्हाइट सॉस पास्ता (छोटा आकार)', description: 'Pasta in a creamy white sauce', descriptionHi: 'क्रीमी व्हाइट सॉस में पास्ता', category: 'snacks_half_plate', quantity: 0, price: 100, image: whiteSaucePastaImage },
{ id: 219, name: 'Mix Sauce Pasta (Small Size)', nameHi: 'मिक्स सॉस पास्ता (छोटा आकार)', description: 'Pasta with a mix of sauces', descriptionHi: 'सॉस के मिश्रण के साथ पास्ता', category: 'snacks_half_plate', quantity: 0, price: 100, image: mixSaucePastaImage },
{ id: 220, name: 'Cheese Pasta (Small Size)', nameHi: 'चीज़ पास्ता (छोटा आकार)', description: 'Creamy cheese pasta', descriptionHi: 'क्रीमी चीज़ पास्ता', category: 'snacks_half_plate', quantity: 0, price: 120, image: cheesePastaImage },

{ id: 247, name: 'Dal Fry (Half Plate)', nameHi: 'दाल फ्राई (हाफ प्लेट)', description: 'Flavorful dal fry', descriptionHi: 'स्वादिष्ट दाल फ्राई', category: 'maincourse_half_plate', quantity: 0, price: 50, image: dalFryImage },
{ id: 248, name: 'Dal Tadka (Half Plate)', nameHi: 'दाल तड़का (हाफ प्लेट)', description: 'Spiced dal tadka', descriptionHi: 'मसालेदार दाल तड़का', category: 'maincourse_half_plate', quantity: 0, price: 50, image: dalTadkaImage },
{ id: 249, name: 'Dal Haryali (Half Plate)', nameHi: 'दाल हरियाली (हाफ प्लेट)', description: 'Green herb dal', descriptionHi: 'हरी जड़ी-बूटी की दाल', category: 'maincourse_half_plate', quantity: 0, price: 100, image: dalHaryaliImage },
{ id: 250, name: 'Dal Makhani (Half Plate)', nameHi: 'दाल मखनी (हाफ प्लेट)', description: 'Creamy dal makhani', descriptionHi: 'क्रीमी दाल मखनी', category: 'maincourse_half_plate', quantity: 0, price: 120, image: dalMakhaniImage },
{ id: 251, name: 'Dal Handi (Half Plate)', nameHi: 'दाल हांडी (हाफ प्लेट)', description: 'Traditional handi dal', descriptionHi: 'पारंपरिक हांडी दाल', category: 'maincourse_half_plate', quantity: 0, price: 100, image: dalHandiImage },
{ id: 252, name: 'Rajma Fry (Half Plate)', nameHi: 'राजमा फ्राई (हाफ प्लेट)', description: 'Fried rajma curry', descriptionHi: 'तली हुई राजमा करी', category: 'maincourse_half_plate', quantity: 0, price: 100, image: rajmaFryImage },
{ id: 253, name: 'Chana Masala (Half Plate)', nameHi: 'चना मसाला (हाफ प्लेट)', description: 'Spiced chickpea curry', descriptionHi: 'मसालेदार चना करी', category: 'maincourse_half_plate', quantity: 0, price: 90, image: chanaMasalaImage },
{ id: 254, name: 'Kadhi Fry (Half Plate)', nameHi: 'कढ़ी फ्राई (हाफ प्लेट)', description: 'Fried kadhi curry', descriptionHi: 'तली हुई कढ़ी करी', category: 'maincourse_half_plate', quantity: 0, price: 70, image: kadhiFryImage },
{ id: 255, name: 'Shahi Paneer (Half Plate)', nameHi: 'शाही पनीर (हाफ प्लेट)', description: 'Rich shahi paneer', descriptionHi: 'रिच शाही पनीर', category: 'maincourse_half_plate', quantity: 0, price: 130, image: shahiPaneerImage },
{ id: 256, name: 'Kadhai Paneer (Half Plate)', nameHi: 'कड़ाही पनीर (हाफ प्लेट)', description: 'Paneer in kadhai masala', descriptionHi: 'कड़ाही मसाला में पनीर', category: 'maincourse_half_plate', quantity: 0, price: 130, image: kadhaiPaneerImage },

{ id: 221, name: 'Matar Paneer (Half Plate)', nameHi: 'मटर पनीर (हाफ प्लेट)', description: 'Paneer with peas', descriptionHi: 'मटर के साथ पनीर', category: 'maincourse_half_plate', quantity: 0, price: 120, image: matarPaneerImage },
{ id: 222, name: 'Paneer Butter Masala (Half Plate)', nameHi: 'पनीर बटर मसाला (हाफ प्लेट)', description: 'Paneer in butter masala', descriptionHi: 'बटर मसाला में पनीर', category: 'maincourse_half_plate', quantity: 0, price: 150, image: paneerButterMasalaImage },
{ id: 223, name: 'Paneer Dopyaza (Half Plate)', nameHi: 'पनीर दोप्याजा (हाफ प्लेट)', description: 'Paneer with onions', descriptionHi: 'प्याज के साथ पनीर', category: 'maincourse_half_plate', quantity: 0, price: 130, image: paneerDopyazaImage },
{ id: 224, name: 'Paneer Handi (Half Plate)', nameHi: 'पनीर हांडी (हाफ प्लेट)', description: 'Paneer in handi', descriptionHi: 'हांडी में पनीर', category: 'maincourse_half_plate', quantity: 0, price: 170, image: paneerHandiImage },
{ id: 225, name: 'Paneer Bhurji (Half Plate)', nameHi: 'पनीर भुर्जी (हाफ प्लेट)', description: 'Scrambled paneer', descriptionHi: 'पनीर भुर्जी', category: 'maincourse_half_plate', quantity: 0, price: 100, image: paneerBhurjiImage },
{ id: 226, name: 'Paneer Lababdar (Half Plate)', nameHi: 'पनीर लबाबदार (हाफ प्लेट)', description: 'Rich paneer curry', descriptionHi: 'रिच पनीर करी', category: 'maincourse_half_plate', quantity: 0, price: 110, image: paneerLababdarImage },
{ id: 227, name: 'Paneer Pasonda (Half Plate)', nameHi: 'पनीर पासोंडा (हाफ प्लेट)', description: 'Paneer in spiced gravy', descriptionHi: 'मसालेदार ग्रेवी में पनीर', category: 'maincourse_half_plate', quantity: 0, price: 140, image: paneerPasondaImage },
{ id: 228, name: 'Tandoori Paneer (Half Plate)', nameHi: 'तंदूरी पनीर (हाफ प्लेट)', description: 'Grilled tandoori paneer', descriptionHi: 'ग्रिल्ड तंदूरी पनीर', category: 'maincourse_half_plate', quantity: 0, price: 110, image: tandooriPaneerImage },
{ id: 229, name: 'Mushroom Butter Masala (Half Plate)', nameHi: 'मशरूम बटर मसाला (हाफ प्लेट)', description: 'Mushrooms in butter masala', descriptionHi: 'बटर मसाला में मशरूम', category: 'maincourse_half_plate', quantity: 0, price: 110, image: mushroomButterMasalaImage },
{ id: 230, name: 'Matar Mushroom (Half Plate)', nameHi: 'मटर मशरूम (हाफ प्लेट)', description: 'Mushrooms with peas', descriptionHi: 'मटर के साथ मशरूम', category: 'maincourse_half_plate', quantity: 0, price: 150, image: matarMushroomImage },
{ id: 231, name: 'Mushroom Dopyaza (Half Plate)', nameHi: 'मशरूम दोप्याजा (हाफ प्लेट)', description: 'Mushrooms with onions', descriptionHi: 'प्याज के साथ मशरूम', category: 'maincourse_half_plate', quantity: 0, price: 150, image: mushroomDopyazaImage },
{ id: 232, name: 'Tandoori Mushroom (Half Plate)', nameHi: 'तंदूरी मशरूम (हाफ प्लेट)', description: 'Grilled tandoori mushrooms', descriptionHi: 'ग्रिल्ड तंदूरी मशरूम', category: 'maincourse_half_plate', quantity: 0, price: 90, image: tandooriMushroomImage },
{ id: 233, name: 'Kadhai Mushroom (Half Plate)', nameHi: 'कड़ाही मशरूम (हाफ प्लेट)', description: 'Mushrooms in kadhai masala', descriptionHi: 'कड़ाही मसाला में मशरूम', category: 'maincourse_half_plate', quantity: 0, price: 120, image: kadhaiMushroomImage },
{ id: 234, name: 'Dum Aloo (Half Plate)', nameHi: 'दम आलू (हाफ प्लेट)', description: 'Potato dumplings in gravy', descriptionHi: 'ग्रेवी में आलू दम', category: 'maincourse_half_plate', quantity: 0, price: 130, image: dumAlooImage },
{ id: 235, name: 'Jeera Aloo (Half Plate)', nameHi: 'जीरा आलू (हाफ प्लेट)', description: 'Potatoes with cumin', descriptionHi: 'जीरे के साथ आलू', category: 'maincourse_half_plate', quantity: 0, price: 130, image: jeeraAlooImage },
{ id: 236, name: 'Mix Veg (Half Plate)', nameHi: 'मिक्स वेज (हाफ प्लेट)', description: 'Mixed vegetable curry', descriptionHi: 'मिक्स वेज करी', category: 'maincourse_half_plate', quantity: 0, price: 140, image: mixVegImage },
{ id: 237, name: 'Malai Kofta (Half Plate)', nameHi: 'मलाई कोफ्ता (हाफ प्लेट)', description: 'Kofta in creamy gravy', descriptionHi: 'क्रीमी ग्रेवी में कोफ्ता', category: 'maincourse_half_plate', quantity: 0, price: 90, image: malaiKoftaImage },
{ id: 238, name: 'Matar Gobhi (Half Plate)', nameHi: 'मटर गोभी (हाफ प्लेट)', description: 'Peas with cauliflower', descriptionHi: 'मटर के साथ गोभी', category: 'maincourse_half_plate', quantity: 0, price: 70, image: matarGobhiImage },
{ id: 239, name: 'Paneer Gobhi (Half Plate)', nameHi: 'पनीर गोभी (हाफ प्लेट)', description: 'Paneer with cauliflower', descriptionHi: 'गोभी के साथ पनीर', category: 'maincourse_half_plate', quantity: 0, price: 100, image: paneerGobhiImage },
{ id: 240, name: 'Sev Bhaji (Half Plate)', nameHi: 'सेव भाजी (हाफ प्लेट)', description: 'Sev in spicy gravy', descriptionHi: 'मसालेदार ग्रेवी में सेव', category: 'maincourse_half_plate', quantity: 0, price: 170, image: sevBhajiImage },
{ id: 241, name: 'Cheese Tomato (Half Plate)', nameHi: 'चीज़ टमाटर (हाफ प्लेट)', description: 'Cheese with tomatoes', descriptionHi: 'टमाटर के साथ चीज़', category: 'maincourse_half_plate', quantity: 0, price: 100, image: cheeseTomatoImage },
{ id: 242, name: 'Palak Paneer (Half Plate)', nameHi: 'पालक पनीर (हाफ प्लेट)', description: 'Paneer with spinach', descriptionHi: 'पालक के साथ पनीर', category: 'maincourse_half_plate', quantity: 0, price: 90, image: palakPaneerImage },
{ id: 243, name: 'Tomato Chutney (Half Plate)', nameHi: 'टमाटर चटनी (हाफ प्लेट)', description: 'Spiced tomato chutney', descriptionHi: 'मसालेदार टमाटर चटनी', category: 'maincourse_half_plate', quantity: 0, price: 120, image: tomatoChutneyImage },
{ id: 244, name: 'Paneer Methi Malai (Half Plate)', nameHi: 'पनीर मेथी मलाई (हाफ प्लेट)', description: 'Paneer with fenugreek', descriptionHi: 'मेथी के साथ पनीर', category: 'maincourse_half_plate', quantity: 0, price: 130, image: paneerMethiMalaiImage },
{ id: 245, name: 'Mushroom (Half Plate)', nameHi: 'मशरूम (हाफ प्लेट)', description: 'Delicious mushrooms', descriptionHi: 'स्वादिष्ट मशरूम', category: 'maincourse_half_plate', quantity: 0, price: 120, image: mushroomImage },
{ id: 246, name: 'Veg. Kohlapuri (Half Plate)', nameHi: 'वेज. कोल्हापुरी (हाफ प्लेट)', description: 'Spicy veg Kohlapuri', descriptionHi: 'मसालेदार वेज कोल्हापुरी', category: 'maincourse_half_plate', quantity: 0, price: 120, image: vegKohlapuriImage },

{ id: 257, name: 'Masala Chaap', nameHi: 'मसाला चाप', description: 'Chaap with a spicy masala blend', descriptionHi: 'मसालेदार चाप', category: 'halfchaap', quantity: 0, price: 120, image: masalaChaapImage },
{ id: 258, name: 'Lemon Chaap', nameHi: 'लेमन चाप', description: 'Chaap with lemon flavor', descriptionHi: 'नींबू के स्वाद वाली चाप', category: 'halfchaap', quantity: 0, price: 120, image: lemonChaapImage },
{ id: 259, name: 'Achari Chaap', nameHi: 'अचारी चाप', description: 'Chaap with tangy pickle spices', descriptionHi: 'अचारी मसालों के साथ चाप', category: 'halfchaap', quantity: 0, price: 120, image: achariChaapImage },
{ id: 260, name: 'Haryali Chaap', nameHi: 'हरियाली चाप', description: 'Chaap marinated with green herbs', descriptionHi: 'हरी जड़ी बूटियों के साथ मैरीनेट की हुई चाप', category: 'halfchaap', quantity: 0, price: 120, image: haryaliChaapImage },
{ id: 261, name: 'Malai Chaap', nameHi: 'मलाई चाप', description: 'Creamy malai chaap', descriptionHi: 'मलाई के साथ चाप', category: 'halfchaap', quantity: 0, price: 120, image: malaiChaapImage },
{ id: 262, name: 'Afghani Chaap', nameHi: 'अफगानी चाप', description: 'Mildly spiced Afghani-style chaap', descriptionHi: 'हल्के मसालों के साथ अफगानी शैली की चाप', category: 'halfchaap', quantity: 0, price: 120, image: afghaniChaapImage },
{ id: 263, name: 'Achari Chaap', nameHi: 'अचारी चाप', description: 'Chaap with tangy pickle spices', descriptionHi: 'अचारी मसालों के साथ चाप', category: 'halfchaap', quantity: 0, price: 120, image: achariChaapImage },
{ id: 264, name: 'Chaap Gravy', nameHi: 'चाप ग्रेवी', description: 'Chaap cooked in rich gravy', descriptionHi: 'मसालेदार ग्रेवी में पकाई गई चाप', category: 'halfchaap', quantity: 0, price: 120, image: chaapGravyImage },


    { id: 265, name: 'Paneer Tikka', nameHi: 'पनीर टिक्का', description: 'Grilled paneer cubes with spices', descriptionHi: 'मसालों के साथ ग्रिल किया हुआ पनीर', category: 'halftikka', quantity: 0, price: 130, image: paneerTikkaImage },
    { id: 266, name: 'Haryali Paneer Tikka', nameHi: 'हरियाली पनीर टिक्का', description: 'Paneer cubes marinated in a green herb mixture', descriptionHi: 'हरे मसालों के मिश्रण में मेरिनेट किया हुआ पनीर', category: 'halftikka', quantity: 0, price: 130, image: haryaliPaneerTikkaImage },
    { id: 267, name: 'Masala Paneer Tikka', nameHi: 'मसाला पनीर टिक्का', description: 'Spicy paneer tikka with masala', descriptionHi: 'मसालों के साथ मसालेदार पनीर टिक्का', category: 'halftikka', quantity: 0, price: 130, image: masalaPaneerTikkaImage },
    { id: 268, name: 'Mushroom Tikka', nameHi: 'मशरूम टिक्का', description: 'Grilled mushrooms with spices', descriptionHi: 'मसालों के साथ ग्रिल किया हुआ मशरूम', category: 'halftikka', quantity: 0, price: 130, image: mushroomTikkaImage },
    { id: 269, name: 'Malai Mushroom Tikka', nameHi: 'मलाई मशरूम टिक्का', description: 'Creamy mushroom tikka', descriptionHi: 'क्रीमी मशरूम टिक्का', category: 'halftikka', quantity: 0, price: 130, image: malaiMushroomTikkaImage },
    { id: 270, name: 'Masala Mushroom Tikka', nameHi: 'मसाला मशरूम टिक्का', description: 'Spicy mushroom tikka with masala', descriptionHi: 'मसालेदार मशरूम टिक्का', category: 'halftikka', quantity: 0, price: 130, image: masalaMushroomTikkaImage },
    { id: 271, name: 'Achari Mushroom Tikka', nameHi: 'अचारी मशरूम टिक्का', description: 'Mushroom tikka with pickling spices', descriptionHi: 'अचार मसालों के साथ मशरूम टिक्का', category: 'halftikka', quantity: 0, price: 130, image: achariMushroomTikkaImage },
    { id: 272, name: 'Haryali Mushroom Tikka', nameHi: 'हरियाली मशरूम टिक्का', description: 'Mushroom tikka with green herbs', descriptionHi: 'हरे मसालों के साथ मशरूम टिक्का', category: 'halftikka', quantity: 0, price: 130, image: haryaliMushroomTikkaImage },
    { id: 273, name: 'Afghani Mushroom Tikka', nameHi: 'अफगानी मशरूम टिक्का', description: 'Creamy Afghani style mushroom tikka', descriptionHi: 'क्रीमी अफगानी शैली का मशरूम टिक्का', category: 'halftikka', quantity: 0, price: 130, image: afghaniMushroomTikkaImage },
    { id: 274, name: 'Afghani Paneer Tikka', nameHi: 'अफगानी पनीर टिक्का', description: 'Creamy Afghani style paneer tikka', descriptionHi: 'क्रीमी अफगानी शैली का पनीर टिक्का', category: 'halftikka', quantity: 0, price: 130, image: afghaniPaneerTikkaImage },
    { id: 275, name: 'Malai Paneer Tikka', nameHi: 'मलाई पनीर टिक्का', description: 'Creamy paneer tikka', descriptionHi: 'क्रीमी पनीर टिक्का', category: 'halftikka', quantity: 0, price: 130, image: malaiPaneerTikkaImage },
    { id: 276, name: 'Veg Sik Kabab', nameHi: 'वेज़ सिक कबाब', description: 'Skewered vegetable kababs', descriptionHi: 'सीख पर बने हुए सब्ज़ी कबाब', category: 'halftikka', quantity: 0, price: 130, image: vegSikKababImage },
    { id: 277, name: 'Haryali Kabab', nameHi: 'हरियाली कबाब', description: 'Green herb flavored kababs', descriptionHi: 'हरे मसालों का स्वाद लिए हुए कबाब', category: 'halftikka', quantity: 0, price: 130, image: haryaliKababImage }

    
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
    

    const upiId = "9817409607@ybl";
  
  
  
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
      <div className="category">
        <div onClick={() => setCategory('all')}>
          <FaUtensils size={50} />
        </div>
        <button onClick={() => setCategory('all')}>
          {isHindi ? 'सभी' : 'All'}
        </button>
      </div>
      <div className="category">
        <div onClick={() => setCategory('maincourse')}>
          <GiIndianPalace size={50} />
        </div>
        <button onClick={() => setCategory('maincourse')}>
          {isHindi ? 'मुख्य सब्जी' : 'Main Course'}
        </button>
      </div>
      <div className="category">
        <div onClick={() => setCategory('maincourse_half_plate')}>
          <MdLunchDining size={50} />
        </div>
        <button onClick={() => setCategory('maincourse_half_plate')}>
          {isHindi ? 'मुख्य सब्जी (आधा प्लेट)' : 'Main Course Half Plate'}
        </button>
      </div>
      <div className="category">
        <div onClick={() => setCategory('paratha')}>
          <MdOutlineBakeryDining size={50} />
        </div>
        <button onClick={() => setCategory('paratha')}>
          {isHindi ? 'पराठा' : 'Paratha'}
        </button>
      </div>
      <div className="category">
        <div onClick={() => setCategory('raita')}>
          <MdSpa size={50} />
        </div>
        <button onClick={() => setCategory('raita')}>
          {isHindi ? 'रायता' : 'Raita'}
        </button>
      </div>
      <div className="category">
        <div onClick={() => setCategory('snacks_half_plate')}>
          <GiChipsBag size={50} />
        </div>
        <button onClick={() => setCategory('snacks_half_plate')}>
          {isHindi ? 'नाश्ता (आधा प्लेट)' : 'Snacks Half Plate'}
        </button>
      </div>
      <div className="category">
        <div onClick={() => setCategory('snacks')}>
          <GiChipsBag size={50} />
        </div>
        <button onClick={() => setCategory('snacks')}>
          {isHindi ? 'नाश्ता' : 'Snacks'}
        </button>
      </div>
      <div className="category">
        <div onClick={() => setCategory('breads')}>
          <FaBreadSlice size={50} />
        </div>
        <button onClick={() => setCategory('breads')}>
          {isHindi ? 'रोटी' : 'Breads'}
        </button>
      </div>
      <div className="category">
        <div onClick={() => setCategory('sandwich')}>
          <GiSandwich size={50} />
        </div>
        <button onClick={() => setCategory('sandwich')}>
          {isHindi ? 'सैंडविच' : 'Sandwich'}
        </button>
      </div>
      <div className="category">
        <div onClick={() => setCategory('tikka')}>
          <GiMeat size={50} />
        </div>
        <button onClick={() => setCategory('tikka')}>
          {isHindi ? 'टिक्का' : 'Tikka'}
        </button>
      </div>
      <div className="category">
        <div onClick={() => setCategory('pizza')}>
          <FaPizzaSlice size={50} />
        </div>
        <button onClick={() => setCategory('pizza')}>
          {isHindi ? 'पिज्जा' : 'Pizza'}
        </button>
      </div>
    </div>

    <div id="topheading" className="categories">
      <div className="category">
        <div onClick={() => setCategory('chaap')}>
          <TbPepper size={50} />
        </div>
        <button onClick={() => setCategory('chaap')}>
          {isHindi ? 'चाप' : 'Chaap'}
        </button>
      </div>
      <div className="category">
        <div onClick={() => setCategory('halfchaap')}>
          <TbPepper size={50} />
        </div>
        <button onClick={() => setCategory('halfchaap')}>
          {isHindi ? 'चाप (आधा)' : 'Half Chaap'}
        </button>
      </div>
      <div className="category">
        <div onClick={() => setCategory('salad')}>
          <FaLeaf size={50} />
        </div>
        <button onClick={() => setCategory('salad')}>
          {isHindi ? 'सलाद' : 'Salad'}
        </button>
      </div>
      <div className="category">
        <div onClick={() => setCategory('papad')}>
          <MdOutlineBakeryDining size={50} />
        </div>
        <button onClick={() => setCategory('papad')}>
          {isHindi ? 'पापड़' : 'Papad'}
        </button>
      </div>
      <div className="category">
        <div onClick={() => setCategory('rice')}>
          <GiRiceCooker size={50} />
        </div>
        <button onClick={() => setCategory('rice')}>
          {isHindi ? 'चावल' : 'Rice'}
        </button>
      </div>
      <div className="category">
        <div onClick={() => setCategory('soup')}>
          <MdSoupKitchen size={50} />
        </div>
        <button onClick={() => setCategory('soup')}>
          {isHindi ? 'सूप' : 'Soup'}
        </button>
      </div>
      <div className="category">
        <div onClick={() => setCategory('shake')}>
          <FaIceCream size={50} />
        </div>
        <button onClick={() => setCategory('shake')}>
          {isHindi ? 'शेक' : 'Shake'}
        </button>
      </div>
      <div className="category">
        <div onClick={() => setCategory('mocktail')}>
          <MdLocalDrink size={50} />
        </div>
        <button onClick={() => setCategory('mocktail')}>
          {isHindi ? 'मॉकटेल' : 'Mocktail'}
        </button>
      </div>
      <div className="category">
        <div onClick={() => setCategory('burger')}>
          <FaHamburger size={50} />
        </div>
        <button onClick={() => setCategory('burger')}>
          {isHindi ? 'बर्गर' : 'Burger'}
        </button>
      </div>
      <div className="category">
        <div onClick={() => setCategory('tea-coffee')}>
          <FaCoffee size={50} />
        </div>
        <button onClick={() => setCategory('tea-coffee')}>
          {isHindi ? 'चाय' : 'Tea/Coffee'}
        </button>
      </div>
      <div className="category">
        <div onClick={() => setCategory('maggi')}>
          <GiNoodles size={50} />
        </div>
        <button onClick={() => setCategory('maggi')}>
          {isHindi ? 'मैगी' : 'Maggi'}
        </button>
      </div>
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