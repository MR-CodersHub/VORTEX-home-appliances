/**
 * VORTEX Appliance Hub — Blog Details Dynamic Engine
 * Loads full articles by ?id= parameter with rich formatting
 */

const blogArticlesData = [
  {
    id: 1,
    title: "How to Choose the Right Refrigerator Capacity for Your Family",
    category: "Buying Guides",
    categoryBadgeClass: "badge-teal",
    date: "Aug 10, 2026",
    readTime: "5 Min Read",
    image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=1200&q=85",
    author: {
      name: "Marcus Vance",
      title: "Chief Inverter & Refrigeration Lead",
      avatar: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=150&q=80",
      bio: "Factory-certified master technician with 12+ years of hands-on experience diagnosing Samsung, LG, and Bosch inverter refrigeration and cooling architectures."
    },
    excerpt: "Understanding liter capacities, French-door vs side-by-side configurations, and twin cooling tech to match your household size.",
    contentHtml: `
      <div class="article-callout-box">
        <h4 class="article-callout-title">📋 Executive Summary &amp; Key Takeaways</h4>
        <ul class="article-callout-list">
          <li><strong>1–2 People:</strong> 250L to 380L Top-Mount or Single Door inverter fridge is optimal.</li>
          <li><strong>3–4 People:</strong> 400L to 550L Bottom-Mount or Multi-Door unit provides balanced capacity.</li>
          <li><strong>5+ People / Large Families:</strong> 580L to 700L French-Door or Quad-Door Smart Inverter fridge is essential.</li>
          <li><strong>Twin Cooling Plus:</strong> Separate evaporator coils prevent odor transfer and maintain 70% humidity.</li>
        </ul>
      </div>

      <h2 class="heading-md article-section-title">1. The General Formula: How Many Liters Do You Actually Need?</h2>
      <p class="article-paragraph">
        Choosing the wrong refrigerator capacity leads to two costly problems: buying too small causes overcrowding, restricted airflow, and spoiled groceries; buying too large wastes electricity cooling empty cubic feet.
      </p>
      <p class="article-paragraph">
        As a standard baseline rule used by appliance master techs: allow <strong>150 to 200 Liters</strong> for the first adult member, plus <strong>100 Liters</strong> for each additional household member, plus an extra <strong>50 Liters</strong> for weekend bulk stocking or meal prep containers.
      </p>

      <div class="article-table-wrapper">
        <table class="article-data-table">
          <thead>
            <tr>
              <th>Household Size</th>
              <th>Recommended Capacity</th>
              <th>Best Door Configuration</th>
              <th>Avg. Energy Draw</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="font-weight:700;">1 – 2 Persons</td>
              <td>250L – 350L</td>
              <td>Single Door / Top Mount Inverter</td>
              <td style="color:var(--accent-teal); font-weight:700;">180 kWh/yr</td>
            </tr>
            <tr>
              <td style="font-weight:700;">3 – 4 Persons</td>
              <td>400L – 520L</td>
              <td>Bottom Freezer / Multi-Door</td>
              <td style="color:var(--accent-teal); font-weight:700;">240 kWh/yr</td>
            </tr>
            <tr>
              <td style="font-weight:700;">5+ Persons / Chefs</td>
              <td>580L – 700L+</td>
              <td>French Door Quad / Side-by-Side</td>
              <td style="color:var(--accent-teal); font-weight:700;">310 kWh/yr</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 class="heading-md article-section-title">2. Why Door Configuration Matters More Than Raw Liters</h2>
      <p class="article-paragraph">
        Usable interior layout is often more important than the gross volume printed on the manufacturer label. French door refrigerators offer wide continuous shelves ideal for pizza boxes, party platters, and sheet pans, while side-by-side units offer vertical storage that gives children easy access to lower freezer compartments.
      </p>

      <blockquote class="article-quote-box">
        "Never cram a refrigerator past 80% capacity. Modern inverter models rely on precision multi-airflow vents. Blocking vents forces the compressor into continuous high-frequency RPM cycles, spiking electric bills by up to 30%."
      </blockquote>

      <h2 class="heading-md article-section-title">3. Twin Cooling &amp; Humidity Preservation Tech</h2>
      <p class="article-paragraph">
        Traditional refrigerators circulate dry freezer air through the fresh food zone, wilting leafy vegetables in 48 hours. VORTEX recommends models featuring dual independent evaporator coils (Twin Cooling Plus), maintaining 70% humidity in the crisper while keeping the freezer frost-free at 0% humidity.
      </p>
    `
  },
  {
    id: 2,
    title: "10 Maintenance Tips to Double Your Washing Machine’s Lifespan",
    category: "Maintenance",
    categoryBadgeClass: "badge-beige",
    date: "Aug 04, 2026",
    readTime: "4 Min Read",
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=1200&q=85",
    author: {
      name: "David Reynolds",
      title: "Laundry Care & Pump Engineer",
      avatar: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=150&q=80",
      bio: "Master laundry engineer certified in brushless direct-drive drum dampening, solenoid inlet valve repair, and high-pressure drainage systems."
    },
    excerpt: "Prevent drum odor, clean inlet filters, inspect rubber gaskets, and avoid overload strain on Direct Drive inverter motors.",
    contentHtml: `
      <div class="article-callout-box">
        <h4 class="article-callout-title">📋 Key Maintenance Checklist</h4>
        <ul class="article-callout-list">
          <li>Clean the bottom drain pump filter every 60 days to prevent motor burn-out.</li>
          <li>Wipe the rubber door bellows (gasket) dry after every wash load.</li>
          <li>Run a 90°C hot tub-clean cycle once a month with oxygen bleach.</li>
          <li>Avoid liquid detergent overdosing — use HE (High Efficiency) pods or measured liquids.</li>
        </ul>
      </div>

      <h2 class="heading-md article-section-title">1. The Hidden Drain Pump Filter: Why It Fails</h2>
      <p class="article-paragraph">
        Over 65% of washing machine emergency repair calls are caused by a clogged lint and debris trap located behind the small flap at the bottom right corner of front-load washers. Coins, bobby pins, and pet hair collect here, blocking the impeller and overheating the drainage motor.
      </p>

      <h2 class="heading-md article-section-title">2. Preventing Bellows Mold and Mildew</h2>
      <p class="article-paragraph">
        Leaving the washer door tightly shut immediately after a cycle traps residual moisture inside the drum. Always leave the door cracked open 2 to 3 inches for 2 hours post-wash to allow internal evaporation.
      </p>
    `
  },
  {
    id: 3,
    title: "Repair vs. Replace: When Is It Time to Upgrade Your Appliances?",
    category: "Repair vs Replace",
    categoryBadgeClass: "badge-gold",
    date: "Jul 28, 2026",
    readTime: "6 Min Read",
    image: "images/technician_service.png",
    author: {
      name: "Elena Rostova",
      title: "Master Diagnostic Consultant",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80",
      bio: "Diagnostic consultant with expertise in lifetime reliability curves, compressor degradation curves, and warranty trade-in valuations."
    },
    excerpt: "Use the 50% rule: evaluating repair costs against appliance age, energy inefficiency, and modern inverter savings.",
    contentHtml: `
      <div class="article-callout-box">
        <h4 class="article-callout-title">📋 The 50% Decision Rule</h4>
        <p class="article-paragraph" style="margin:0;">
          If an appliance is more than halfway through its expected lifespan AND the repair quote exceeds 50% of the replacement cost, replacement is statistically 3.4x more economical in total cost of ownership over 5 years.
        </p>
      </div>

      <h2 class="heading-md article-section-title">1. Average Appliance Lifespans</h2>
      <p class="article-paragraph">
        Modern appliances engineered with brushless inverter motors and DC fans typically last 10 to 14 years when serviced annually.
      </p>
    `
  },
  {
    id: 4,
    title: "5 Hacks to Cut Air Conditioner Electricity Consumption by 40%",
    category: "Energy Saving",
    categoryBadgeClass: "badge-teal",
    date: "Jul 20, 2026",
    readTime: "4 Min Read",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=85",
    author: {
      name: "Sarah Lin",
      title: "HVAC & Thermal Systems Lead",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
      bio: "EPA-certified HVAC engineer specializing in variable-refrigerant inverter compression, thermal envelope insulation, and PM2.5 filtration systems."
    },
    excerpt: "Optimal thermostat settings, inverter compressor tuning, PM2.5 filter cleaning, and thermal insulation tricks.",
    contentHtml: `
      <div class="article-callout-box">
        <h4 class="article-callout-title">📋 Quick Energy Savings Highlights</h4>
        <ul class="article-callout-list">
          <li>Setting AC to 24°C instead of 18°C saves 24% to 30% power instantly.</li>
          <li>Washing dust mesh filters every 14 days improves heat exchange efficiency by 15%.</li>
          <li>Using Eco Inverter mode avoids high-current restart spikes.</li>
        </ul>
      </div>

      <h2 class="heading-md article-section-title">1. The 24°C Comfort Sweet Spot</h2>
      <p class="article-paragraph">
        Every 1°C decrease below 24°C forces the inverter compressor to work at 6% higher power. Setting the unit at 24°C with oscillating fan speed creates identical perceived cooling comfort while keeping electrical draw at minimum RPM.
      </p>
    `
  },
  {
    id: 5,
    title: "Microwave Safety & Magnetron Maintenance Guide",
    category: "Maintenance",
    categoryBadgeClass: "badge-beige",
    date: "Jul 12, 2026",
    readTime: "3 Min Read",
    image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&w=1200&q=85",
    author: {
      name: "Elena Rostova",
      title: "Built-In Oven & Microwave Lead",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80",
      bio: "Specialist in ceramic cavity microwave diagnostics, waveguide mica sheet replacement, and high-voltage transformer calibration."
    },
    excerpt: "How to avoid sparking, clean ceramic interiors safely, and spot early signs of magnetron tube degradation.",
    contentHtml: `
      <div class="article-callout-box">
        <h4 class="article-callout-title">📋 Essential Microwave Safety Tips</h4>
        <ul class="article-callout-list">
          <li>Never run the microwave completely empty — without food absorption, radiation reflects back into the magnetron.</li>
          <li>Replace the waveguide mica cover immediately if it shows carbon black spots.</li>
          <li>Use lemon steam cleaning to loosen grease without abrasive metal pads.</li>
        </ul>
      </div>
    `
  },
  {
    id: 6,
    title: "Why Built-In Dishwashers Save More Water Than Hand Washing",
    category: "Buying Guides",
    categoryBadgeClass: "badge-teal",
    date: "Jul 05, 2026",
    readTime: "5 Min Read",
    image: "https://images.unsplash.com/photo-1581622558663-b2e33377dfb2?auto=format&fit=crop&w=1200&q=85",
    author: {
      name: "Marcus Vance",
      title: "Appliance Efficiency Analyst",
      avatar: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=150&q=80",
      bio: "Appliance efficiency consultant testing internal spray arm velocity, soil sensor precision, and water consumption across major European dishwashers."
    },
    excerpt: "Comparing water consumption metrics: 10L vs 50L per load, eco sanitization temperature cycles, and quiet decibel ratings.",
    contentHtml: `
      <div class="article-callout-box">
        <h4 class="article-callout-title">📋 Efficiency Comparison Data</h4>
        <ul class="article-callout-list">
          <li><strong>Hand Washing (Full Load):</strong> 40 to 60 Liters of continuous tap flow.</li>
          <li><strong>VORTEX 5-Star Eco Dishwasher:</strong> Only 9.5 to 11 Liters per complete cycle.</li>
          <li><strong>Sanitization:</strong> 75°C thermal rinse kills 99.9% of bacteria (hand washing water maxes at 42°C).</li>
        </ul>
      </div>
    `
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const articleId = parseInt(urlParams.get('id'), 10) || 1;

  const currentArticle = blogArticlesData.find(a => a.id === articleId) || blogArticlesData[0];

  // Populate metadata & header
  document.title = `${currentArticle.title} — VORTEX Appliance Hub`;
  const metaDesc = document.getElementById('page-meta-desc');
  if (metaDesc) metaDesc.setAttribute('content', currentArticle.excerpt);

  const breadcrumb = document.getElementById('breadcrumb-title');
  if (breadcrumb) breadcrumb.textContent = currentArticle.title;

  const categoryBadge = document.getElementById('article-category');
  if (categoryBadge) {
    categoryBadge.textContent = currentArticle.category;
    categoryBadge.className = `badge ${currentArticle.categoryBadgeClass}`;
  }

  const dateEl = document.getElementById('article-date');
  if (dateEl) dateEl.textContent = currentArticle.date;

  const readTimeEl = document.getElementById('article-read-time');
  if (readTimeEl) readTimeEl.textContent = currentArticle.readTime;

  const titleEl = document.getElementById('article-title');
  if (titleEl) titleEl.textContent = currentArticle.title;

  const excerptEl = document.getElementById('article-excerpt');
  if (excerptEl) excerptEl.textContent = currentArticle.excerpt;

  const featuredImg = document.getElementById('article-featured-img');
  if (featuredImg) {
    featuredImg.src = currentArticle.image;
    featuredImg.alt = currentArticle.title;
  }

  // Author details
  const authorImg = document.getElementById('article-author-img');
  if (authorImg) authorImg.src = currentArticle.author.avatar;

  const authorName = document.getElementById('article-author-name');
  if (authorName) authorName.textContent = currentArticle.author.name;

  const authorTitle = document.getElementById('article-author-title');
  if (authorTitle) authorTitle.textContent = currentArticle.author.title;

  const bioImg = document.getElementById('article-bio-img');
  if (bioImg) bioImg.src = currentArticle.author.avatar;

  const bioName = document.getElementById('article-bio-name');
  if (bioName) bioName.textContent = currentArticle.author.name;

  const bioDesc = document.getElementById('article-bio-desc');
  if (bioDesc) bioDesc.textContent = currentArticle.author.bio;

  // Body content
  const bodyEl = document.getElementById('article-body-content');
  if (bodyEl) bodyEl.innerHTML = currentArticle.contentHtml;

  // Render related articles
  const relatedGrid = document.getElementById('related-articles-grid');
  if (relatedGrid) {
    const related = blogArticlesData.filter(a => a.id !== currentArticle.id).slice(0, 3);
    relatedGrid.innerHTML = related.map(a => `
      <article class="blog-card" style="display:flex; flex-direction:column; justify-content:space-between; background:var(--bg-card); border:1px solid var(--border-subtle); border-radius:20px; overflow:hidden; box-shadow:var(--shadow-sm); transition:transform 0.3s ease;">
        <div class="blog-thumb" style="height:200px; overflow:hidden;">
          <img src="${a.image}" alt="${a.title}" style="width:100%; height:100%; object-fit:cover;" loading="lazy">
        </div>
        <div class="blog-content" style="padding:1.5rem; display:flex; flex-direction:column; flex-grow:1; justify-content:space-between;">
          <div>
            <div class="blog-meta" style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.75rem; font-size:0.78rem; color:var(--text-muted);">
              <span class="badge ${a.categoryBadgeClass}">${a.category}</span>
              <span>${a.date}</span>
            </div>
            <h3 class="blog-title" style="font-size:1.1rem; line-height:1.35; margin-bottom:0.75rem; color:var(--text-primary);">${a.title}</h3>
            <p class="blog-excerpt" style="font-size:0.86rem; color:var(--text-muted); line-height:1.5; margin-bottom:1.25rem;">${a.excerpt}</p>
          </div>
          <a href="blog-details.html?id=${a.id}" class="btn btn-sm btn-outline-teal" style="width:100%; text-align:center;">Read Article →</a>
        </div>
      </article>
    `).join('');
  }
});
