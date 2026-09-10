/* ==========================================================================
   VORTEX HOME APPLIANCES & SERVICE CENTER - JAVASCRIPT APPLICATION LOGIC
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Global Application State
  const AppState = {
    products: [
      // ================= REFRIGERATORS (3 PRODUCTS) =================
      {
        id: 'ref-01',
        name: 'Vortex Smart French-Door Refrigerator 650L',
        category: 'refrigerators',
        brand: 'Samsung',
        price: 2499,
        oldPrice: 2899,
        rating: 4.9,
        reviewsCount: 128,
        warranty: '10 Years Compressor Warranty',
        energyRating: '5 Star Inverter',
        image: 'assets/vortex_french_door.jpg',
        gallery: [
          'assets/vortex_french_door.jpg',
          'assets/vortex_refrigerator_quad.jpg'
        ],
        specs: 'Twin Cooling Plus, Wi-Fi Enabled, Matte Black Finish, Dual Auto Ice Maker',
        description: 'Experience intelligent food preservation with precision twin cooling systems, flex zone temperature controls, and ambient interior LED lighting designed for modern kitchens.'
      },
      {
        id: 'ref-02',
        name: 'Vortex Multi-Door Quad Refrigerator 540L',
        category: 'refrigerators',
        brand: 'Bosch',
        price: 1999,
        oldPrice: 2299,
        rating: 4.8,
        reviewsCount: 67,
        warranty: '10 Years Compressor Warranty',
        energyRating: '5 Star Inverter',
        image: 'assets/Vortex Multi-Door Quad Refrigerator 540L.jpg',
        gallery: [
          'assets/Vortex Multi-Door Quad Refrigerator 540L.jpg',
          'assets/vortex_refrigerator_quad.jpg'
        ],
        specs: 'VitaFresh Pro, NoFrost Technology, Metal Cooling Backpanel',
        description: 'Precision humidity control drawers keep fruits and vegetables fresh up to three times longer with zero frost accumulation.'
      },
      {
        id: 'ref-03',
        name: 'Vortex InstaView Door-in-Door Refrigerator 600L',
        category: 'refrigerators',
        brand: 'LG',
        price: 2299,
        oldPrice: 2599,
        rating: 4.9,
        reviewsCount: 112,
        warranty: '10 Years Linear Compressor Warranty',
        energyRating: '5 Star Eco',
        image: 'assets/Vortex InstaView Door-in-Door Refrigerator 600L.jpg',
        gallery: [
          'assets/Vortex InstaView Door-in-Door Refrigerator 600L.jpg',
          'assets/vortex_refrigerator_instaview.jpg'
        ],
        specs: 'Knock Twice InstaView, UVnano Water Dispenser, Craft Ice Maker',
        description: 'Knock twice to see inside without opening the door, preserving internal cooling airflow and keeping beverages perfectly chilled.'
      },

      // ================= WASHING MACHINES (3 PRODUCTS) =================
      {
        id: 'wash-01',
        name: 'Vortex AI Front Load Washer & Dryer 11kg/7kg',
        category: 'washing-machines',
        brand: 'LG',
        price: 1299,
        oldPrice: 1499,
        rating: 4.8,
        reviewsCount: 94,
        warranty: '10 Years Direct Drive Motor Warranty',
        energyRating: '5 Star Eco',
        image: 'assets/vortex_washer_ai.jpg',
        gallery: [
          'assets/vortex_washer_ai.jpg',
          'assets/washer_repair.jpg'
        ],
        specs: 'Steam Refresh, AI DD Fabric Sensing, TurboWash 360, Ultra Quiet 48dB',
        description: 'Advanced AI fabric sensing automatically selects the optimal washing pattern, while hygienic steam sterilization removes 99.9% of allergens and bacteria.'
      },
      {
        id: 'wash-02',
        name: 'Vortex EcoBubble Front Load Washer 10.5kg',
        category: 'washing-machines',
        brand: 'Samsung',
        price: 999,
        oldPrice: 1199,
        rating: 4.7,
        reviewsCount: 88,
        warranty: '10 Years Digital Inverter Warranty',
        energyRating: '5 Star Inverter',
        image: 'assets/vortex_ecobubble_washer.jpg',
        gallery: [
          'assets/vortex_ecobubble_washer.jpg',
          'assets/Washing Machine & Dryer Repair.jpg'
        ],
        specs: 'EcoBubble Wash, AI Control, Auto Dispense, Hygiene Steam',
        description: 'EcoBubble technology turns detergent into bubbles to penetrate fabrics quickly and remove dirt easily, even in cold water.'
      },
      {
        id: 'wash-03',
        name: 'Vortex Serie 8 AntiStain Front Load Washer 9kg',
        category: 'washing-machines',
        brand: 'Bosch',
        price: 1149,
        oldPrice: 1349,
        rating: 4.9,
        reviewsCount: 62,
        warranty: '10 Years EcoSilence Motor Warranty',
        energyRating: '5 Star Eco',
        image: 'assets/Vortex AI Front Load Washer & Dryer.jpg',
        gallery: [
          'assets/Vortex AI Front Load Washer & Dryer.jpg',
          'assets/Washing Machine & Dryer Repair.jpg'
        ],
        specs: 'AntiStain 16 Removal System, EcoSilence Drive, ActiveWater Plus',
        description: 'Target 16 of the toughest stubborn stains effortlessly without requiring manual pre-treatment.'
      },

      // ================= AIR CONDITIONERS (3 PRODUCTS) =================
      {
        id: 'ac-01',
        name: 'Vortex Inverter Dual Cool Air Conditioner 1.5 Ton',
        category: 'air-conditioners',
        brand: 'Bosch',
        price: 999,
        oldPrice: 1199,
        rating: 4.7,
        reviewsCount: 76,
        warranty: '10 Years Compressor + 5 Years PCB Warranty',
        energyRating: '5 Star Inverter',
        image: 'assets/Vortex Inverter Dual Cool Air Conditioner 1.5 Ton.jpg',
        gallery: [
          'assets/Vortex Inverter Dual Cool Air Conditioner 1.5 Ton.jpg',
          'assets/Air Conditioner Service & Gas Refill.jpg'
        ],
        specs: 'PM2.5 Air Filter, 4-Way Auto Swing, Rapid 18°C Cooling, Silent Sleep Mode',
        description: 'Next-generation variable speed inverter technology delivers rapid cooling in extreme heat while consuming up to 60% less energy.'
      },
      {
        id: 'ac-02',
        name: 'Vortex nanoe-X Inverter Smart AC 2.0 Ton',
        category: 'air-conditioners',
        brand: 'Panasonic',
        price: 1249,
        oldPrice: 1449,
        rating: 4.9,
        reviewsCount: 92,
        warranty: '10 Years Compressor Warranty',
        energyRating: '5 Star Inverter',
        image: 'assets/Vortex nanoe-X Inverter Smart AC 2.0 Ton.jpg',
        gallery: [
          'assets/Vortex nanoe-X Inverter Smart AC 2.0 Ton.jpg',
          'assets/Air Conditioner Service & Gas Refill.jpg'
        ],
        specs: 'nanoe-X Air Purification, Miraie Voice Control, Shield Blu Anti-Corrosion',
        description: 'Inhibits 99.9% of airborne viruses and allergens using nanoe-X hydroxyl radicals while delivering ice-cold air.'
      },
      {
        id: 'ac-03',
        name: 'Vortex WindFree Premium Inverter AC 1.5 Ton',
        category: 'air-conditioners',
        brand: 'Samsung',
        price: 1099,
        oldPrice: 1299,
        rating: 4.8,
        reviewsCount: 81,
        warranty: '10 Years Digital Inverter Warranty',
        energyRating: '5 Star Inverter',
        image: 'assets/Vortex WindFree Premium Inverter AC 1.5 Ton.jpg',
        gallery: [
          'assets/Vortex WindFree Premium Inverter AC 1.5 Ton.jpg',
          'assets/Air Conditioner Service & Gas Refill.jpg'
        ],
        specs: 'WindFree Cooling (23,000 Micro-holes), AI Auto Cooling, Tri-Care Filter',
        description: 'Gently disperses cool air through 23,000 micro-air holes so you never feel unpleasant cold drafts.'
      },

      // ================= MICROWAVES (3 PRODUCTS) =================
      {
        id: 'micro-01',
        name: 'Vortex Convection Smart Microwave Oven 32L',
        category: 'microwaves',
        brand: 'Whirlpool',
        price: 349,
        oldPrice: 429,
        rating: 4.6,
        reviewsCount: 52,
        warranty: '3 Years Magnetron Warranty',
        energyRating: '4 Star',
        image: 'assets/Vortex Convection Smart Microwave Oven 32L.jpg',
        gallery: [
          'assets/Vortex Convection Smart Microwave Oven 32L.jpg'
        ],
        specs: 'Air Fry Technology, Ceramic Enamel Interior, Auto Cook 150 Presets',
        description: 'Combines microwave, convection, and air frying technology to cook crispy, delicious meals with up to 80% less oil.'
      },
      {
        id: 'micro-02',
        name: 'Vortex Slim Fry Smart Convection Oven 35L',
        category: 'microwaves',
        brand: 'Samsung',
        price: 399,
        oldPrice: 479,
        rating: 4.8,
        reviewsCount: 79,
        warranty: '10 Years Ceramic Enamel Cavity Warranty',
        energyRating: '5 Star',
        image: 'assets/Vortex Slim Fry Smart Convection Oven 35L.jpg',
        gallery: [
          'assets/Vortex Slim Fry Smart Convection Oven 35L.jpg'
        ],
        specs: 'Slim Fry Tech, Tandoor & Dough Proofing, Ceramic Inside',
        description: 'Make naan, rotis, or yogurt with built-in fermentation and Slim Fry hot air circulating technology.'
      },
      {
        id: 'micro-03',
        name: 'Vortex Healsio Superheated Steam Microwave 31L',
        category: 'microwaves',
        brand: 'Sharp',
        price: 499,
        oldPrice: 599,
        rating: 4.9,
        reviewsCount: 31,
        warranty: '3 Years Full Warranty',
        energyRating: '5 Star',
        image: 'assets/Vortex Healsio Superheated Steam Microwave 31L.jpg',
        gallery: [
          'assets/Vortex Healsio Superheated Steam Microwave 31L.jpg'
        ],
        specs: 'Superheated Steam 300°C, All-in-One Automatic Grill, Stainless Interior',
        description: 'Superheated steam technology cooks food while melting away excess fat and salt.'
      },

      // ================= BUILT-IN OVENS (3 PRODUCTS) =================
      {
        id: 'oven-01',
        name: 'Vortex Built-In Pyrolytic Wall Oven 71L',
        category: 'ovens',
        brand: 'KitchenAid',
        price: 1599,
        oldPrice: 1799,
        rating: 4.8,
        reviewsCount: 43,
        warranty: '5 Years Parts & Labor',
        energyRating: 'A+ Energy',
        image: 'assets/Vortex Built-In Pyrolytic Wall Oven 71L.jpg',
        gallery: [
          'assets/Vortex Built-In Pyrolytic Wall Oven 71L.jpg'
        ],
        specs: 'Pyrolytic Self-Cleaning, True Convection, Integrated Meat Probe',
        description: 'Master gourmet roasting and baking with multi-level true convection heating and high-temperature self-cleaning technology.'
      },
      {
        id: 'oven-02',
        name: 'Vortex Series 8 Built-In Steam Convection Oven 71L',
        category: 'ovens',
        brand: 'Bosch',
        price: 1799,
        oldPrice: 2099,
        rating: 4.9,
        reviewsCount: 56,
        warranty: '5 Years Warranty',
        energyRating: 'A++ Eco',
        image: 'assets/Vortex Series 8 Built-In Steam Convection Oven 71L.jpg',
        gallery: [
          'assets/Vortex Series 8 Built-In Steam Convection Oven 71L.jpg'
        ],
        specs: 'AddedSteam Function, 4D HotAir, PerfectBake Sensor, TFT Touchscreen',
        description: '4D HotAir fan evenly distributes heat across four shelf levels for consistent results on every tray.'
      },
      {
        id: 'oven-03',
        name: 'Vortex ContourLine Moisture Plus Built-In Oven 76L',
        category: 'ovens',
        brand: 'Miele',
        price: 2299,
        oldPrice: 2599,
        rating: 5.0,
        reviewsCount: 29,
        warranty: '5 Years Full Warranty',
        energyRating: 'A+ Energy',
        image: 'assets/Vortex ContourLine Moisture Plus Built-In Oven 76L.jpg',
        gallery: [
          'assets/Vortex ContourLine Moisture Plus Built-In Oven 76L.jpg'
        ],
        specs: 'Moisture Plus Steam Injection, PyroFit Accessories, DirectSensor UI',
        description: 'Injects bursts of steam during baking to ensure bread rolls develop crisp crusts and fluffy interiors.'
      },

      // ================= DISHWASHERS (3 PRODUCTS) =================
      {
        id: 'dish-01',
        name: 'Vortex Ultra-Quiet Built-In Dishwasher 14 Place',
        category: 'dishwashers',
        brand: 'Miele',
        price: 1149,
        oldPrice: 1350,
        rating: 4.9,
        reviewsCount: 88,
        warranty: '5 Years Full Warranty',
        energyRating: 'A+++ Eco',
        image: 'assets/Vortex Ultra-Quiet Built-In Dishwasher 14 Place.jpg',
        gallery: [
          'assets/Vortex Ultra-Quiet Built-In Dishwasher 14 Place.jpg'
        ],
        specs: 'AutoDos Dispensing, 38dB Whispersoft Operation, QuickIntenseWash',
        description: 'Engineered for exceptional dish hygiene, featuring automatic detergent dosing and 75°C sanitization cycle for spotless glassware.'
      },
      {
        id: 'dish-02',
        name: 'Vortex SilencePlus 800 Series Dishwasher 16 Place',
        category: 'dishwashers',
        brand: 'Bosch',
        price: 1299,
        oldPrice: 1499,
        rating: 4.9,
        reviewsCount: 96,
        warranty: '10 Years Rust-Through Warranty',
        energyRating: '5 Star Eco',
        image: 'assets/Vortex SilencePlus 800 Series Dishwasher 16 Place.jpg',
        gallery: [
          'assets/Vortex SilencePlus 800 Series Dishwasher 16 Place.jpg'
        ],
        specs: 'Zeolith 3D Drying, MyTime Program, InfoLight Floor Projector, 42dB',
        description: 'Zeolith natural mineral drying absorbs moisture and releases heat for 100% dry plasticware.'
      },
      {
        id: 'dish-03',
        name: 'Vortex QuadWash Steam Smart Dishwasher 14 Place',
        category: 'dishwashers',
        brand: 'LG',
        price: 999,
        oldPrice: 1199,
        rating: 4.8,
        reviewsCount: 71,
        warranty: '10 Years Direct Drive Motor',
        energyRating: '5 Star Eco',
        image: 'assets/Vortex QuadWash Steam Smart Dishwasher 14 Place.jpg',
        gallery: [
          'assets/Vortex QuadWash Steam Smart Dishwasher 14 Place.jpg'
        ],
        specs: 'TrueSteam Sanitization, QuadWash 4 Spray Arms, EasyRack Plus',
        description: 'TrueSteam high-temperature steam dissolves baked-on food residue while leaving glass sparkling streak-free.'
      },

      // ================= VACUUM CLEANERS (2 PRODUCTS) =================
      {
        id: 'vac-01',
        name: 'Vortex Laser Detect Cordless Vacuum Cleaner',
        category: 'vacuum-cleaners',
        brand: 'Dyson',
        price: 699,
        oldPrice: 799,
        rating: 4.9,
        reviewsCount: 145,
        warranty: '2 Years Warranty',
        energyRating: 'High Efficiency',
        image: 'assets/Vortex Laser Detect Cordless Vacuum Cleaner.jpg',
        gallery: [
          'assets/Vortex Laser Detect Cordless Vacuum Cleaner.jpg'
        ],
        specs: 'Piezo Sensor Particle Counter, Digital Motorbar, 70-Min Swappable Battery',
        description: 'A piezo sensor continuously sizes and counts microscopic dust particles, automatically increasing suction power when higher dust volumes are detected.'
      },
      {
        id: 'vac-02',
        name: 'Vortex Smart Cordless Stick Vacuum Cleaner',
        category: 'vacuum-cleaners',
        brand: 'Panasonic',
        price: 499,
        oldPrice: 599,
        rating: 4.7,
        reviewsCount: 110,
        warranty: '2 Years Battery & Motor Warranty',
        energyRating: 'High Efficiency',
        image: 'assets/Vortex Smart Cordless Stick Vacuum Cleaner.jpg',
        gallery: [
          'assets/Vortex Smart Cordless Stick Vacuum Cleaner.jpg'
        ],
        specs: '230AW Suction Power, HEPA H13 Filtration, 60-Min Runtime',
        description: 'Powerful dust detection laser technology illuminates invisible particles, combined with multi-stage HEPA filtration for cleaner indoor air.'
      },

      // ================= SMART TELEVISIONS (2 PRODUCTS) =================
      {
        id: 'tv-01',
        name: 'Vortex CinemaPro 65" 4K OLED Smart TV',
        category: 'tvs',
        brand: 'LG',
        price: 1899,
        oldPrice: 2299,
        rating: 4.9,
        reviewsCount: 142,
        warranty: '3 Years Panel Warranty + Free Wall Installation',
        energyRating: '5 Star Eco',
        image: 'assets/vortex_oled_tv.jpg',
        gallery: [
          'assets/vortex_oled_tv.jpg'
        ],
        specs: 'OLED Self-Lit Pixels, Dolby Vision IQ, Atmos 60W Audio, 120Hz VRR',
        description: 'Infinite contrast, authentic cinematic colors, and AI 4K upscaling engineered for immersive living room entertainment.'
      },
      {
        id: 'tv-02',
        name: 'Vortex NeoVision 55" QLED 4K HDR Smart TV',
        category: 'tvs',
        brand: 'Samsung',
        price: 1299,
        oldPrice: 1549,
        rating: 4.8,
        reviewsCount: 89,
        warranty: '3 Years Comprehensive Warranty',
        energyRating: '5 Star Eco',
        image: 'assets/vortex_qled_tv_samsung.jpg',
        gallery: [
          'assets/vortex_qled_tv_samsung.jpg'
        ],
        specs: 'Quantum Dot 100% Color Volume, Neural Quantum Processor, Anti-Reflection',
        description: 'Ultra-bright quantum HDR picture with sleek cable-free design and integrated smart home control hub.'
      }
    ],

    wishlist: JSON.parse(localStorage.getItem('vortex_wishlist') || '[]'),
    compare: JSON.parse(localStorage.getItem('vortex_compare') || '[]'),
    cart: JSON.parse(localStorage.getItem('vortex_cart') || '[]')
  };

  window._vortexProducts = AppState.products;
  window.AppState = AppState;

  // --- Utility Functions ---
  function showToast(message, type = 'success') {
    let toastContainer = document.getElementById('toast-container');
    if (!toastContainer) {
      toastContainer = document.createElement('div');
      toastContainer.id = 'toast-container';
      document.body.appendChild(toastContainer);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    const icon = type === 'success' ? '✓' : 'ℹ';
    toast.innerHTML = `<span style="font-weight:bold; color:var(--accent-teal);">${icon}</span> <span>${message}</span>`;

    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  function updateCounters() {
    const wishlistCountEl = document.getElementById('wishlist-counter');
    const compareCountEl = document.getElementById('compare-counter');
    const cartCountEls = document.querySelectorAll('.cart-counter, #cart-counter, #header-cart-count');

    if (wishlistCountEl) wishlistCountEl.textContent = AppState.wishlist.length;
    if (compareCountEl) compareCountEl.textContent = AppState.compare.length;
    
    const totalCartItems = AppState.cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    cartCountEls.forEach(el => { el.textContent = totalCartItems; });

    localStorage.setItem('vortex_wishlist', JSON.stringify(AppState.wishlist));
    localStorage.setItem('vortex_compare', JSON.stringify(AppState.compare));
    localStorage.setItem('vortex_cart', JSON.stringify(AppState.cart));
  }

  // --- Cart Actions ---
  window.addToCart = function(productId) {
    const product = AppState.products.find(p => p.id === productId);
    if (!product) return;
    const existing = AppState.cart.find(item => item.id === productId);
    if (existing) {
      existing.quantity = (existing.quantity || 1) + 1;
    } else {
      AppState.cart.push({ id: product.id, name: product.name, price: product.price, image: product.image, quantity: 1 });
    }
    updateCounters();
    showToast(`Added ${product.name} to Cart!`);
  };

  window.buyNow = function(productId) {
    window.addToCart(productId);
    window.openEnquiryModal(productId);
  };

  // --- Mobile Navigation ---
  const mobileToggleBtn = document.getElementById('mobile-toggle-btn');
  const mobileCloseBtn = document.getElementById('mobile-close-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileBackdrop = document.getElementById('mobile-backdrop');

  if (mobileToggleBtn && mobileDrawer && mobileBackdrop) {
    function openMobileNav() {
      mobileDrawer.classList.add('active');
      mobileBackdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeMobileNav() {
      mobileDrawer.classList.remove('active');
      mobileBackdrop.classList.remove('active');
      document.body.style.overflow = '';
    }

    mobileToggleBtn.addEventListener('click', openMobileNav);
    if (mobileCloseBtn) mobileCloseBtn.addEventListener('click', closeMobileNav);
    mobileBackdrop.addEventListener('click', closeMobileNav);
  }

  // --- Cart Drawer Log  // --- Showroom & Service Consultation Enquiry Modal ---
  window.openEnquiryModal = function(productId) {
    const product = AppState.products.find(p => p.id === productId);
    let modal = document.getElementById('enquiry-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'enquiry-modal';
      modal.className = 'drawer-backdrop active';
      document.body.appendChild(modal);
    } else {
      modal.className = 'drawer-backdrop active';
    }
    document.body.style.overflow = 'hidden';

    modal.innerHTML = `
      <div style="background:var(--bg-card); border:1px solid var(--border-medium); border-radius:var(--radius-lg); width:92%; max-width:600px; max-height:88vh; overflow-y:auto; margin:4vh auto; padding:2rem; position:relative; box-shadow:var(--shadow-lg);">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:1.25rem; border-bottom:1px solid var(--border-subtle); padding-bottom:1rem;">
          <div>
            <span class="badge badge-teal" style="margin-bottom:0.4rem;">Showroom & Service Consultation</span>
            <h3 class="heading-md" style="margin:0;">Enquire About Appliance</h3>
          </div>
          <button class="btn-icon" onclick="document.getElementById('enquiry-modal').className='drawer-backdrop'; document.body.style.overflow='';">✕</button>
        </div>
        ${product ? `
          <div style="display:flex; gap:1rem; align-items:center; background:var(--bg-tertiary); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:0.85rem; margin-bottom:1.5rem;">
            <img src="${product.image}" alt="${product.name}" style="width:60px; height:60px; object-fit:contain; border-radius:6px; background:var(--bg-card);">
            <div>
              <strong style="font-size:0.95rem; display:block; color:var(--text-primary);">${product.name}</strong>
              <span style="font-size:0.82rem; color:var(--accent-teal); font-weight:700;">$${product.price} • ${product.brand}</span>
              <div style="font-size:0.75rem; color:var(--text-muted); margin-top:2px;">🛡️ ${product.warranty}</div>
            </div>
          </div>
        ` : ''}
        <form onsubmit="event.preventDefault(); this.innerHTML='<div style=\\'text-align:center; padding:2rem 0;\\'><div style=\\'font-size:2.5rem; margin-bottom:0.75rem;\\'>✅</div><h3 style=\\'color:var(--accent-teal); margin-bottom:0.5rem;\\'>Enquiry Received!</h3><p style=\\'color:var(--text-secondary); font-size:0.9rem;\\'>Our appliance consultant will contact you within 2 business hours with pricing, availability, and installation options.</p><button class=\\'btn btn-sm btn-secondary\\' style=\\'margin-top:1.5rem;\\' onclick=\\'document.getElementById(\\'enquiry-modal\\').className=\\'drawer-backdrop\\'; document.body.style.overflow=\\'\\';\\'>Close</button></div>';">
          <div class="form-group" style="margin-bottom:1rem;">
            <label class="form-label" style="font-size:0.85rem;">Your Name *</label>
            <input type="text" class="form-control" required placeholder="e.g. John Doe">
          </div>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem; margin-bottom:1rem;">
            <div class="form-group">
              <label class="form-label" style="font-size:0.85rem;">Phone Number *</label>
              <input type="tel" class="form-control" required placeholder="+1 (555) 000-0000">
            </div>
            <div class="form-group">
              <label class="form-label" style="font-size:0.85rem;">Email Address *</label>
              <input type="email" class="form-control" required placeholder="john@example.com">
            </div>
          </div>
          <div class="form-group" style="margin-bottom:1.25rem;">
            <label class="form-label" style="font-size:0.85rem;">Request Type</label>
            <select class="form-select">
              <option>Price Quote & Showroom Availability</option>
              <option>Home Delivery & Certified Installation</option>
              <option>In-Store Demo & Consultation Appointment</option>
              <option>Bulk / Builder Appliance Package</option>
              <option>Trade-In & Appliance Replacement</option>
            </select>
          </div>
          <div class="form-group" style="margin-bottom:1.5rem;">
            <label class="form-label" style="font-size:0.85rem;">Additional Notes or Questions</label>
            <textarea class="form-control" rows="3" placeholder="Tell us about your kitchen dimensions, installation requirements, etc."></textarea>
          </div>
          <div style="display:flex; gap:0.75rem;">
            <button type="submit" class="btn btn-primary" style="flex:1; justify-content:center;">Submit Showroom Enquiry →</button>
            <a href="services.html#booking" class="btn btn-secondary">Book Service Instead</a>
          </div>
        </form>
      </div>
    `;
  };

  // --- Wishlist Global Handler ---
  window.toggleWishlist = function(productId, btnEl) {
    const idx = AppState.wishlist.indexOf(productId);
    if (idx > -1) {
      AppState.wishlist.splice(idx, 1);
      if (btnEl) btnEl.classList.remove('active');
      showToast('Removed from Saved Appliances');
    } else {
      AppState.wishlist.push(productId);
      if (btnEl) btnEl.classList.add('active');
      showToast('Added to Saved Appliances');
    }
    updateCounters();
  };

  // --- Compare System Handler ---
  window.toggleCompare = function(productId) {
    const idx = AppState.compare.indexOf(productId);
    if (idx > -1) {
      AppState.compare.splice(idx, 1);
      showToast('Removed from Comparison');
    } else {
      if (AppState.compare.length >= 4) {
        showToast('You can compare maximum 4 products at a time', 'info');
        return;
      }
      AppState.compare.push(productId);
      showToast('Added to Brand & Product Comparison');
    }
    updateCounters();
    renderCompareDrawer();
  };

  function renderCompareDrawer() {
    let compareBar = document.getElementById('floating-compare-bar');
    if (AppState.compare.length === 0) {
      if (compareBar) compareBar.remove();
      return;
    }

    if (!compareBar) {
      compareBar = document.createElement('div');
      compareBar.id = 'floating-compare-bar';
      compareBar.className = 'floating-compare-bar';
      document.body.appendChild(compareBar);
    }

    const items = AppState.compare.map(id => AppState.products.find(p => p.id === id)).filter(Boolean);

    compareBar.innerHTML = `
      <div style="font-size:0.9rem; font-weight:700; color:var(--accent-teal);">
        Comparing (${items.length}/4)
      </div>
      <div style="display:flex; gap:0.5rem;">
        ${items.map(p => `<span class="badge badge-teal">${p.name.split(' ')[1] || p.name}</span>`).join('')}
      </div>
      <button class="btn btn-sm btn-primary" onclick="openCompareModal()">Compare Now</button>
      <button class="btn btn-sm btn-secondary" onclick="clearCompare()">Clear</button>
    `;
  }

  window.clearCompare = function() {
    AppState.compare = [];
    updateCounters();
    renderCompareDrawer();
  };

  window.openCompareModal = function() {
    const items = AppState.compare.map(id => AppState.products.find(p => p.id === id)).filter(Boolean);
    if (items.length === 0) return;

    let modal = document.getElementById('compare-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'compare-modal';
      modal.className = 'drawer-backdrop active';
      document.body.appendChild(modal);
    } else {
      modal.className = 'drawer-backdrop active';
    }

    modal.innerHTML = `
      <div style="background:var(--bg-secondary); border:1px solid var(--border-medium); border-radius:var(--radius-lg); width:90%; max-width:1000px; max-height:85vh; overflow-y:auto; margin:4vh auto; padding:2rem; position:relative;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5rem; border-bottom:1px solid var(--border-subtle); padding-bottom:1rem;">
          <h2 class="heading-md">Appliance & Brand Comparison</h2>
          <button class="btn-icon" onclick="document.getElementById('compare-modal').className='drawer-backdrop'">✕</button>
        </div>
        <div style="overflow-x:auto;">
          <table class="comparison-table">
            <thead>
              <tr>
                <th>Feature</th>
                ${items.map(p => `<th>${p.brand}<br><span style="font-size:0.85rem; color:var(--text-primary);">${p.name}</span></th>`).join('')}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Price</strong></td>
                ${items.map(p => `<td><strong style="color:var(--accent-teal);">$${p.price}</strong></td>`).join('')}
              </tr>
              <tr>
                <td><strong>Rating</strong></td>
                ${items.map(p => `<td>★ ${p.rating} (${p.reviewsCount} reviews)</td>`).join('')}
              </tr>
              <tr>
                <td><strong>Energy Rating</strong></td>
                ${items.map(p => `<td>${p.energyRating}</td>`).join('')}
              </tr>
              <tr>
                <td><strong>Warranty</strong></td>
                ${items.map(p => `<td>${p.warranty}</td>`).join('')}
              </tr>
              <tr>
                <td><strong>Key Specs</strong></td>
                ${items.map(p => `<td>${p.specs}</td>`).join('')}
              </tr>
              <tr>
                <td><strong>Action</strong></td>
                ${items.map(p => `<td><button class="btn btn-sm btn-primary" onclick="openEnquiryModal('${p.id}')">Enquire Now</button></td>`).join('')}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `;
  };

  // --- Dynamic Product Card Renderer ---
  window.renderProductCard = function(p) {
    const isWishlisted = AppState.wishlist.includes(p.id);
    const isCompared = AppState.compare.includes(p.id);

    return `
      <div class="product-card">
        <div class="product-thumb">
          ${p.oldPrice ? `<span class="badge badge-sale product-sale-tag">Save $${p.oldPrice - p.price}</span>` : ''}
          <button class="product-wishlist-btn ${isWishlisted ? 'active' : ''}" onclick="toggleWishlist('${p.id}', this)" title="Save Appliance">
            ♥
          </button>
          <a href="product-details.html?id=${p.id}" class="product-thumb-link">
            <img src="${p.image}" alt="${p.name}" loading="lazy" class="product-img-contain">
          </a>
        </div>
        <div class="product-details-content">
          <div class="product-brand-row">
            <span class="product-brand">${p.brand}</span>
            <span class="product-energy-badge">${p.energyRating}</span>
          </div>
          <h3 class="product-name"><a href="product-details.html?id=${p.id}">${p.name}</a></h3>
          <div class="product-rating">
            <div class="stars">★★★★★</div>
            <span class="rating-count">(${p.rating} • ${p.reviewsCount} reviews)</span>
          </div>
          <div class="product-specs-pill">${p.specs}</div>
          <div class="product-price-row">
            <span class="current-price">$${p.price.toLocaleString()}</span>
            ${p.oldPrice ? `<span class="old-price">$${p.oldPrice.toLocaleString()}</span>` : ''}
          </div>
          <div class="product-warranty-tag">
            <span style="color:var(--accent-teal); font-weight:800;">✓</span> ${p.warranty}
          </div>
          <div class="product-actions-grid">
            <button class="btn btn-sm btn-primary btn-add-cart" onclick="addToCart('${p.id}')">
              <span>Add to Cart</span>
            </button>
            <button class="btn btn-sm btn-secondary btn-buy-now" onclick="buyNow('${p.id}')">
              <span>Buy Now</span>
            </button>
          </div>
          <div class="product-sub-links">
            <button class="link-btn" onclick="toggleCompare('${p.id}')">
              <span>${isCompared ? '✓ Comparing' : '⇄ Compare'}</span>
            </button>
            <span class="sub-sep">•</span>
            <a href="product-details.html?id=${p.id}" class="link-btn">View Full Specs ➔</a>
          </div>
        </div>
      </div>
    `;
  };

  // --- Featured Products Container on Home Pages ---
  const featuredContainer = document.getElementById('featured-products-grid');
  const viewMoreBtn = document.getElementById('featured-view-more-btn');

  if (featuredContainer) {
    let showingAll = false;
    const initialCount = 4;

    function renderFeatured(products) {
      const toShow = showingAll ? products : products.slice(0, initialCount);
      featuredContainer.innerHTML = toShow.map(renderProductCard).join('');
      if (viewMoreBtn) {
        if (products.length <= initialCount || showingAll) {
          viewMoreBtn.style.display = 'none';
        } else {
          viewMoreBtn.style.display = 'inline-flex';
          viewMoreBtn.innerHTML = `View More Appliances <span style="font-size:1.1rem; margin-left:0.4rem;">↓</span>`;
        }
      }
    }

    // Initial render — first 4 products
    renderFeatured(AppState.products);

    // View More click — show all products
    if (viewMoreBtn) {
      viewMoreBtn.addEventListener('click', () => {
        showingAll = true;
        const activePill = document.querySelector('.filter-pill.active');
        const activeCat = activePill ? activePill.dataset.category : 'all';
        const activeProducts = activeCat === 'all'
          ? AppState.products
          : AppState.products.filter(p => p.category === activeCat);
        renderFeatured(activeProducts);
      });
    }

    // --- Category Filter Pills on Home / Catalog ---
    const filterPills = document.querySelectorAll('.filter-pill');
    if (filterPills.length > 0) {
      filterPills.forEach(pill => {
        pill.addEventListener('click', (e) => {
          showingAll = false;
          filterPills.forEach(p => p.classList.remove('active'));
          e.target.classList.add('active');
          const cat = e.target.dataset.category;
          const filtered = cat === 'all' ? AppState.products : AppState.products.filter(p => p.category === cat);
          renderFeatured(filtered.length > 0 ? filtered : []);
          if (filtered.length === 0) {
            featuredContainer.innerHTML = '<p style="grid-column:1/-1; padding:2rem; text-align:center; color:var(--text-muted);">No products found in this category.</p>';
          }
        });
      });
    }
  }


  // --- Catalog Page Filter, Sort & Search Engine ---
  const catalogGrid = document.getElementById('catalog-products-grid');
  const catalogSearchInput = document.getElementById('catalog-search-input');
  const catalogCategorySelect = document.getElementById('catalog-category-select');
  const catalogBrandSelect = document.getElementById('catalog-brand-select');
  const catalogSortSelect = document.getElementById('catalog-sort-select');

  function populateBrandDropdown(category = 'all') {
    if (!catalogBrandSelect) return;

    const currentBrand = catalogBrandSelect.value;
    const filteredProducts = (category === 'all')
      ? AppState.products
      : AppState.products.filter(p => p.category === category);

    const brandsMap = new Map();
    filteredProducts.forEach(p => {
      if (p.brand) {
        brandsMap.set(p.brand.toLowerCase(), p.brand);
      }
    });

    const sortedBrands = Array.from(brandsMap.values()).sort();

    catalogBrandSelect.innerHTML = `<option value="all">All Brands</option>` +
      sortedBrands.map(b => `<option value="${b.toLowerCase()}">${b}</option>`).join('');

    if (currentBrand && (currentBrand === 'all' || brandsMap.has(currentBrand.toLowerCase()))) {
      catalogBrandSelect.value = currentBrand.toLowerCase();
    } else {
      catalogBrandSelect.value = 'all';
    }
  }

  function updateCatalog() {
    if (!catalogGrid) return;

    let items = [...AppState.products];

    // Search query
    if (catalogSearchInput && catalogSearchInput.value.trim() !== '') {
      const q = catalogSearchInput.value.toLowerCase();
      items = items.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.brand.toLowerCase().includes(q) || 
        p.specs.toLowerCase().includes(q) ||
        p.id.toLowerCase().includes(q)
      );
    }

    // Category filter
    if (catalogCategorySelect && catalogCategorySelect.value !== 'all') {
      items = items.filter(p => p.category === catalogCategorySelect.value);
    }

    // Brand filter
    if (catalogBrandSelect && catalogBrandSelect.value !== 'all') {
      items = items.filter(p => p.brand.toLowerCase() === catalogBrandSelect.value.toLowerCase());
    }

    // Sorting
    if (catalogSortSelect) {
      const sortVal = catalogSortSelect.value;
      if (sortVal === 'price-low') items.sort((a, b) => a.price - b.price);
      else if (sortVal === 'price-high') items.sort((a, b) => b.price - a.price);
      else if (sortVal === 'rating') items.sort((a, b) => b.rating - a.rating);
      else if (sortVal === 'newest') items.sort((a, b) => b.reviewsCount - a.reviewsCount);
    }

    if (items.length === 0) {
      catalogGrid.innerHTML = `
        <div style="grid-column:1/-1; text-align:center; padding:4rem 1rem; background:var(--bg-card); border-radius:var(--radius-lg); border:1px solid var(--border-subtle);">
          <h3>No matching appliances found</h3>
          <p style="color:var(--text-muted); margin-top:0.5rem;">Try adjusting your search filters or browse all categories.</p>
        </div>
      `;
    } else {
      catalogGrid.innerHTML = items.map(renderProductCard).join('');
    }
  }

  if (catalogGrid) {
    // Parse URL parameters for initial category/brand selection
    const urlParams = new URLSearchParams(window.location.search);
    const catParam = urlParams.get('cat');
    const brandParam = urlParams.get('brand');

    if (catParam && catalogCategorySelect) {
      catalogCategorySelect.value = catParam;
      populateBrandDropdown(catParam);
    } else {
      populateBrandDropdown('all');
    }

    if (brandParam && catalogBrandSelect) {
      catalogBrandSelect.value = brandParam.toLowerCase();
    }

    if (catalogSearchInput) catalogSearchInput.addEventListener('input', updateCatalog);
    
    if (catalogCategorySelect) {
      catalogCategorySelect.addEventListener('change', () => {
        populateBrandDropdown(catalogCategorySelect.value);
        updateCatalog();
      });
    }

    if (catalogBrandSelect) catalogBrandSelect.addEventListener('change', updateCatalog);
    if (catalogSortSelect) catalogSortSelect.addEventListener('change', updateCatalog);

    updateCatalog();
  }

  // --- Product Details Page Handler ---
  const productDetailWrapper = document.getElementById('product-detail-view');
  if (productDetailWrapper) {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id') || 'ref-01';
    const product = AppState.products.find(p => p.id === productId) || AppState.products[0];

    document.getElementById('pd-title').textContent = product.name;
    document.getElementById('pd-brand').textContent = product.brand;
    document.getElementById('pd-price').textContent = `$${product.price}`;
    if (product.oldPrice) {
      document.getElementById('pd-old-price').textContent = `$${product.oldPrice}`;
    }
    document.getElementById('pd-warranty').textContent = product.warranty;
    document.getElementById('pd-desc').textContent = product.description;
    document.getElementById('pd-main-img').src = product.image;

    // Gallery thumbnails switcher
    const thumbRow = document.getElementById('pd-thumbnails');
    if (thumbRow && product.gallery) {
      thumbRow.innerHTML = product.gallery.map((img, i) => `
        <div class="thumb-item ${i === 0 ? 'active' : ''}" onclick="changeMainImage('${img}', this)">
          <img src="${img}" alt="Thumbnail ${i+1}">
        </div>
      `).join('');
    }

    window.changeMainImage = function(src, el) {
      document.getElementById('pd-main-img').src = src;
      document.querySelectorAll('.thumb-item').forEach(t => t.classList.remove('active'));
      el.classList.add('active');
    };

    // Spec Grid Renderer
    const specTable = document.getElementById('pd-spec-table');
    if (specTable) {
      const specItems = (product.specs || '').split(',').map(s => s.trim());

      specTable.innerHTML = `
        <div class="spec-card">
          <div class="spec-card-icon">🏷️</div>
          <div class="spec-card-content">
            <span class="spec-card-label">Brand & Model</span>
            <strong class="spec-card-value">${product.brand} <span class="spec-model-tag">${product.id.toUpperCase()}</span></strong>
          </div>
        </div>

        <div class="spec-card">
          <div class="spec-card-icon">📂</div>
          <div class="spec-card-content">
            <span class="spec-card-label">Appliance Category</span>
            <strong class="spec-card-value">${product.category.replace('-', ' ').toUpperCase()}</strong>
          </div>
        </div>

        <div class="spec-card">
          <div class="spec-card-icon">🌱</div>
          <div class="spec-card-content">
            <span class="spec-card-label">Energy Efficiency</span>
            <strong class="spec-card-value" style="color:var(--accent-teal);">${product.energyRating}</strong>
          </div>
        </div>

        <div class="spec-card">
          <div class="spec-card-icon">🛡️</div>
          <div class="spec-card-content">
            <span class="spec-card-label">Warranty Coverage</span>
            <strong class="spec-card-value" style="color:var(--accent-warm-gold);">${product.warranty}</strong>
          </div>
        </div>

        <div class="spec-card spec-card-wide">
          <div class="spec-card-icon">✨</div>
          <div class="spec-card-content">
            <span class="spec-card-label">Key Features & OEM Technologies</span>
            <div class="spec-tags-wrapper">
              ${specItems.map(item => `<span class="spec-feature-tag">✓ ${item}</span>`).join('')}
            </div>
          </div>
        </div>

        <div class="spec-card spec-card-wide">
          <div class="spec-card-icon">🛠️</div>
          <div class="spec-card-content">
            <span class="spec-card-label">VORTEX Care & Service Protection</span>
            <strong class="spec-card-value">90-Day Money-Back Repair Guarantee • Free Professional Installation Hookup • 24/7 Priority Support</strong>
          </div>
        </div>
      `;
    }

    // Attach Enquiry button handler on Product Details page
    const pdEnquireBtn = document.getElementById('pd-enquire-btn');
    if (pdEnquireBtn) {
      pdEnquireBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openEnquiryModal(product.id);
      });
    }

    const pdServiceBtn = document.getElementById('pd-service-btn');
    if (pdServiceBtn) {
      pdServiceBtn.href = `services.html#booking?appliance=${encodeURIComponent(product.category)}`;
    }
  }

  // --- Repair Service Booking Form Validation & Submission ---
  const bookingForm = document.getElementById('repair-booking-form');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('bk-name').value.trim();
      const phone = document.getElementById('bk-phone').value.trim();
      const email = document.getElementById('bk-email').value.trim();
      const appliance = document.getElementById('bk-appliance').value;
      const date = document.getElementById('bk-date').value;

      if (!name || !phone || !appliance || !date) {
        showToast('Please fill out all required booking fields.', 'info');
        return;
      }

      // Generate random Booking ID
      const bookingId = 'VTX-REP-' + Math.floor(100000 + Math.random() * 900000);

      // Display success confirmation message
      const formWrapper = document.getElementById('booking-form-wrapper');
      if (formWrapper) {
        formWrapper.innerHTML = `
          <div style="text-align:center; padding:3rem 1.5rem;">
            <div style="width:70px; height:70px; background:rgba(20,184,166,0.15); border:2px solid var(--accent-teal); color:var(--accent-teal); border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:2rem; margin:0 auto 1.5rem auto;">✓</div>
            <h2 class="heading-md" style="margin-bottom:0.75rem;">Repair Booking Confirmed!</h2>
            <p style="color:var(--text-secondary); max-width:550px; margin:0 auto 1.5rem auto;">
              Thank you <strong>${name}</strong>. Your appliance repair service booking has been registered successfully.
            </p>
            <div style="background:var(--bg-tertiary); border:1px dashed var(--accent-teal); border-radius:var(--radius-md); padding:1.25rem; display:inline-block; margin-bottom:2rem;">
              <span style="font-size:0.85rem; color:var(--text-muted); display:block; margin-bottom:0.2rem;">Booking Reference Code:</span>
              <strong style="font-size:1.35rem; color:var(--accent-teal); letter-spacing:0.08em;">${bookingId}</strong>
            </div>
            <p style="font-size:0.9rem; color:var(--text-muted); margin-bottom:2rem;">
              A certified technician will call you on <strong>${phone}</strong> within 2 hours to confirm your preferred schedule for <strong>${date}</strong>.
            </p>
            <a href="index.html" class="btn btn-primary">Return to Homepage</a>
          </div>
        `;
      }

      showToast(`Booking registered! ID: ${bookingId}`);
    });
  }

  // --- Contact Form Validation & Submission ---
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('ct-name').value.trim();
      const email = document.getElementById('ct-email').value.trim();
      const message = document.getElementById('ct-message').value.trim();

      if (!name || !email || !message) {
        showToast('Please complete all mandatory fields.', 'info');
        return;
      }

      showToast('Thank you! Your message has been sent. We will respond within 24 hours.');
      contactForm.reset();
    });
  }

  // --- Blog Category Filter ---
  const blogCategoryPills = document.querySelectorAll('.blog-filter-pill');
  const blogCards = document.querySelectorAll('.blog-card');
  if (blogCategoryPills.length > 0 && blogCards.length > 0) {
    blogCategoryPills.forEach(pill => {
      pill.addEventListener('click', (e) => {
        blogCategoryPills.forEach(p => p.classList.remove('active'));
        e.target.classList.add('active');
        const cat = e.target.dataset.category;

        blogCards.forEach(card => {
          if (cat === 'all' || card.dataset.category === cat) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // --- FAQ Accordion Engine ---
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const isActive = item.classList.contains('active');
      
      document.querySelectorAll('.accordion-item').forEach(i => {
        i.classList.remove('active');
        const content = i.querySelector('.accordion-content');
        if (content) content.style.maxHeight = null;
      });

      if (!isActive) {
        item.classList.add('active');
        const content = item.querySelector('.accordion-content');
        if (content) content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });

  // --- Back to Top Button ---
  const backToTopBtn = document.getElementById('back-to-top-btn');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Initialize Counter Badges & Compare Bar on Page Load
  updateCounters();
  renderCompareDrawer();
});
