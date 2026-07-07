<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Pricing — DISCIPL Screens</title>
<link rel="icon" href="assets/logo.png">
<link rel="stylesheet" href="style.css">
</head>
<body>

<header class="site-header">
  <div class="wrap">
    <a class="brand-mark" href="index.html">
      <img src="assets/logo.png" alt="DISCIPL Screens">
    </a>
    <nav class="main-nav">
      <a href="index.html">Home</a>
      <a href="screens.html">Our Screens</a>
      <a href="pricing.html" class="active">Pricing</a>
      <a href="sales.html">Sales</a>
    </nav>
  </div>
</header>

<section class="wrap">
  <div class="page-head">
    <p class="eyebrow">Build your custom quote</p>
    <h1>Pricing that scales with your campaign.</h1>
    <p>Pick the number of screens and the campaign length. The per-screen rate drops automatically as you commit to more screens and more months.</p>
  </div>

  <div class="pricing-layout">
    <div class="pricing-form">

      <div class="field">
        <label for="brand-name">Brand Name *</label>
        <input type="text" id="brand-name" placeholder="Your Brand Name">
      </div>

      <div class="field">
        <label for="sector">Sector (optional)</label>
        <select id="sector">
          <option value="">Select your sector…</option>
          <option>Fitness Apparel</option>
          <option>Supplements &amp; Nutrition</option>
          <option>Food &amp; Beverage</option>
          <option>Wellness &amp; Healthcare</option>
          <option>Local Business</option>
          <option>Other</option>
        </select>
      </div>

      <div class="field">
        <div class="slider-row">
          <label style="margin:0;">Number of Screens</label>
          <span class="value" id="screens-value">5</span>
        </div>
        <input type="range" id="screens-slider" min="1" max="15" value="5" step="1">
        <div class="tick-row"><span>1</span><span>15</span></div>
      </div>

      <div class="field">
        <div class="slider-row">
          <label style="margin:0;">Duration (Months)</label>
          <span class="value" id="months-value">1</span>
        </div>
        <input type="range" id="months-slider" min="1" max="12" value="1" step="1">
        <div class="tick-row"><span>1</span><span>12</span></div>
      </div>

    </div>

    <div class="summary-card">
      <div class="summary-top">
        <div class="col">
          <div class="eyebrow-light">Per Screen / Month</div>
          <div class="rate" id="rate-out">₹2,500</div>
        </div>
        <div class="col right">
          <div class="eyebrow-light">Total</div>
          <div class="total" id="total-out">₹2,500</div>
        </div>
      </div>
      <div class="summary-mid">
        <span id="breakdown-out">1 screen x 1 month</span>
        <span class="save" id="save-out"></span>
      </div>
      <ul class="summary-list">
        <li><span class="mark">✓</span> Ads placed on your selected screens</li>
        <li class="locked" id="li-creatives"><span class="mark">✓</span> <span>Change creatives anytime <small>unlocks at 2 months</small></span></li>
        <li class="locked" id="li-exclusivity"><span class="mark">✓</span> <span>Category exclusivity <small>unlocks at 4 months</small></span></li>
      </ul>
      <div class="checkbox-row">
        <input type="checkbox" id="need-help">
        <label for="need-help" style="cursor:pointer;">
          I need help designing my ad creative
          <div class="cb-sub">Our team will get in touch with options.</div>
        </label>
      </div>
      <button class="cta-btn" id="whatsapp-btn">Request This Quote on WhatsApp</button>
      <p class="fine-print">Your details will be sent to our team directly</p>
    </div>
  </div>
</section>

<footer>
  <div class="wrap">
    © DISCIPL Screens · A <span style="color:var(--text)">HABITOZ PRIVATE LIMITED</span> brand ·
    <span class="phone">+91 97464 88282</span>
  </div>
</footer>

<script src="config.js"></script>
<script src="pricing.js"></script>
</body>
</html>
