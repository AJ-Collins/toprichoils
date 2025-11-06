// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
}

// Smooth scroll for nav links
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    if (mobileMenu) {
      mobileMenu.classList.add("hidden");
    }
  });
});

// Form submission
function handleSubmit(e) {
  e.preventDefault();
  alert(
    "Thank you for your message! Our team will get back to you within 24 hours."
  );
  e.target.reset();
}

// Scroll animations - trigger every time element enters viewport
document.addEventListener("DOMContentLoaded", function () {
  const animatedEls = document.querySelectorAll(
    ".product-card, #why .border, #contact .border, #contact .bg-white"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        } else {
          entry.target.classList.remove("animate-in");
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -10% 0px",
    }
  );

  animatedEls.forEach((el) => {
    observer.observe(el);
  });

  const heroAnimations = document.querySelectorAll(".hero-bg .animate-fade-up");
  heroAnimations.forEach((el) => {
    el.style.opacity = "0";
  });

  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});

const productsData = {
  diesel: {
    name: "Diesel Engine Oils",
    subtitle: "Trucks, buses, generators, construction equipment",
    description:
      "Premium formulations for heavy-duty diesel engines, providing exceptional protection and performance",
    products: [
      {
        id: "d1",
        name: "DEO RICH PLATINUM",
        subtitle: "10W40",
        description:
          "This is a premium synthetic heavy-duty diesel engine oil engineered to deliver outstanding protection and efficiency in both modern and legacy engines. Designed for severe operating conditions, it supports extended oil drain intervals and improved fuel efficency, while helping to maximize engine life and reliability. Its advanced formulation ensures consistent performance in demanding environments and across a wide range of diesel applications.",
        application:
          "Suitable for modern and legacy diesel engines under severe operating conditions",
        sizes: "5L | 20L | Drum(209L)",
        specs: {
          "Viscosity at 40°C": "94.5 cSt",
          "Viscosity at 100°C": "13.5 cSt",
          "Viscosity Index": "144",
          "Flash Point": "234°C",
          TBN: "10 mg KOH/g",
        },
        performance: ["Meets and exceeds: API CJ-4/SM, ACEA 6-9 Standards"],
        benefits: [
          "Advanced wear-reduction additives, ensures excellent engine protection and prolonged engine life.",
          "Maintains stable oil performance under severe operating conditions.",
          "Helps reduce pollutant emissions including hydrocarbons (HC),nitrogen oxides (NO2), carbon monoxide (CO), and particulate matter",
          "Protects and extends the life of emission control systems such as - Diesel Particulate Filters (DPF), Gasoline Particulate Filters (GPF), and Three-Way Catalysts (TWC).",
          "Supports fuel eﬀiciency while enabling extended drain intervals for reduced downtime.",
        ],
        images: ["images/products_1/Toprich Oils Product Images-01.png"],
      },
      {
        id: "d2",
        name: "DEO RICH GOLD",
        subtitle: "15W40",
        description:
          "This is a premium multi-grade diesel engine oil formulated using advanced technology for medium-sized diesel engines. DEO RICH GOLD is suitable for light and technology for medium-sized diesel engines. DEO RICH GOLD is suitable for light and mining, and agricultural equipment where a heavy-duty 15W-40 diesel engine oil is required or recommended by the manufacturer. It is compatible with Diesel, Petrol, and LPG-fueled engines. When using CI-4 oil with fuels containing more than 15 ppm sulfur, consult the engine manufacturer for recommended service intervals.",
        application:
          "Light and heavy-duty commercial vehicles, passenger cars, 4WDs, construction, mining, and agricultural equipment",
        sizes: "1L | 5L | 20L | Drum(209L)",
        specs: {
          "Viscosity at 40°C": "110.3 cSt",
          "Viscosity at 100°C": "14.5 cSt",
          "Viscosity Index": "135",
          "Flash Point": "234°C",
          TBN: "10 mg KOH/g",
        },
        performance: ["Meets and exceeds API CI-4 /SL, ACEA E7 Standards"],
        benefits: [
          "Unmatched Thermal Stability for Peak Engine Performance",
          "State of the Art Sludge control for optimum engine performance",
          "Precision oil conservation and engine longevity",
          "Extended drain intervals with enhanced TBN protection",
          "Engine revitalization for peak cleanliness and performance",
        ],
        images: ["images/products_1/Toprich Oils Product Images-02.png"],
      },
      {
        id: "d3",
        name: "DEO RICH SILVER OIL",
        subtitle: "15W40",
        description:
          "This is a high-performance multigrade diesel engine oil specifically formulated for heavy-duty trucks and buses equipped with supercharged or turbocharged engines operating over long distances. It is engineered to deliver exceptional performance in 4th, 6th, and 7th generation commercial vehicles, including those fitted with the latest Euro 7-compliant Japanese, German, and American engines.",
        application:
          "Heavy-duty trucks and buses with supercharged/turbocharged engines, Euro 7-compliant vehicles",
        sizes: "1L | 5L | 20L | Drum(209L)",
        specs: {
          "Viscosity at 40°C": "110.3 cSt",
          "Viscosity at 100°C": "14.5 cSt",
          "Viscosity Index": "135",
          "Flash Point": "234°C",
          TBN: "9 mg KOH/g",
        },
        performance: ["Meets API CH4/SJ: ACEA E5-E7"],
        benefits: [
          "Superior thermal stability for peak engine performance",
          "Advanced sludge control technology for optimal engine health",
          "Enhanced oil economy and improved engine durability",
          "Extended drain intervals supported by high TBN retention",
          "Engine revitalization for superior cleanliness and sustained performance",
        ],
        images: ["images/products_1/Toprich Oils Product Images-03.png"],
      },
      {
        id: "d4",
        name: "DEO RICH BRONZE",
        subtitle: "40",
        description:
          "This is a high-performance monograde/mineral based engine oil formulated with advanced technology for medium-sized diesel engines. Ideal for all Japanese and European vehicles with medium size engines. Designed for engines operating under normal conditions, this monograde oil delivers reliable lubrication where a SAE 40-grade product is recommended by the manufacturer.",
        application:
          "Japanese and European vehicles with medium-sized diesel engines",
        sizes: "1L | 5L | 20L | Drum(209L)",
        specs: {
          "Viscosity at 40°C": "147 cSt",
          "Viscosity at 100°C": "15.3 cSt",
          "Viscosity Index": "106",
          "Flash Point": "234°C",
          TBN: "7 mg KOH/g",
        },
        performance: ["Meets CI-4 API Standards", "CF/CD/CE API Standards"],
        benefits: [
          "Unmatched Thermal Stability for Peak Engine Performance",
          "State of the Art Sludge control for optimum engine performance",
          "Precision oil conservation and engine longevity",
          "Extended drain intervals with enhanced TBN protection",
          "Engine revitalization for peak cleanliness and performance",
        ],
        images: ["images/products_1/Toprich Oils Product Images-04.png"],
      },
    ],
  },
  petrol: {
    name: "Petrol Engine Oils",
    subtitle: "Cars, SUVs, Light Commercial Vehicles",
    description:
      "Advanced lubricants designed for modern gasoline engines, ensuring smooth operation and longevity",
    products: [
      {
        id: "p1",
        name: "PEO RICH SYNTHETIC",
        subtitle: "5W40",
        description:
          "This is a fully synthetic MID SAPS oil for gasoline and diesel engines (ACEA C3) car engines, particularly suitable for turbo compressed, multi-valve and direct injection diesel engines. It reduces emissions, protects emission systems, oﬀers excellent thermal stability, and supports extended oil change intervals. PEO RICH 5W40 fluidity reduces friction and therefore creates significant fuel saving and reduces CO₂ emissions.",
        application:
          "Gasoline and diesel passenger cars and light commercial vehicles",
        sizes: "1L | 4L | Drum(209L)",
        specs: {
          "Viscosity at 40°C": "96 cSt",
          "Viscosity at 100°C": "14 cSt",
          "Pour Point": "149°C",
          "Flash Point": "250°C",
          TBN: "10 mg KOH/g",
        },
        performance: [
          "Meets and exceeds:API SP; API SN Plus, API SN Standards",
        ],
        benefits: [
          "rotects against engine wear and deposit buildup",
          "Guards against LSPI (Low-Speed Pre-Ignition",
          "Enhances fuel eﬀiciency",
          "Protects GPF and DPF emission systems",
        ],
        images: ["images/products_1/Toprich Oils Product Images-05.png"],
      },
      {
        id: "p2",
        name: "PEO RICH SUPER GX",
        subtitle: "20W50",
        description:
          "This is a multi-grade engine oil designed for modern gasoline and diesel engines. It is suitable for use in a variety of driving conditions, including highways and congested city traffic and is reliable. This oil is recommended for all petrol engines (including multi-valve and turbo types) and all diesel engines (turbocharged or naturally aspirated) passenger cars and light vans.",
        application:
          "All petrol engines (multi-valve, turbo) and diesel engines in cars and light vans",
        sizes: "500ML | 4L | Drum(209L)",
        specs: {
          "Viscosity at 40°C": "165 cSt",
          "Viscosity at 100°C": "17.9 cSt",
          "Pour Point": "120°C",
          "Flash Point": "234°C",
          TBN: "8 mg KOH/g",
        },
        performance: ["Meets API SL/CF, ACEA A3/B4 Standards"],
        benefits: [
          "Maintains engine components in pristine condition",
          "Reduces the need for frequent engine servicing",
          "Ensures consistent performance even under high temperatures",
          "Prolongs engine life with cutting-edge wear-reduction technology",
        ],
        images: ["images/products_1/Toprich Oils Product Images-06.png"],
      },
      {
        id: "p3",
        name: "PEO RICH T-MAX CLASSIC",
        subtitle: "SAE 40",
        description:
          "This is a versatile mineral based engine oil, suitable for all types of modern and old petrol and diesel engines, regardless of the operating conditions. Its effectiveness is not limited by weather extremes, making it a reliable choice for all-year-round use. The unique combination of high-quality oil components makes it a standout product.",
        application: "All modern and old petrol/diesel engines",
        sizes: "1L | 4L | 20L | Drum(209L)",
        specs: {
          "Viscosity at 40°C": "147 cSt",
          "Viscosity at 100°C": "15.3 cSt",
          "Pour Point": "106°C",
          "Flash Point": "234°C",
          TBN: "7 mg KOH/g",
        },
        performance: ["Meets and Exceeds API SF/CD Standards"],
        benefits: [
          "Provides long-term oil stability throughout entire engine life cycle",
          "It protects the engine against rust and corrosion",
          "Has excellent viscosity control features that allow fuel efficiency",
        ],
        images: ["images/products_1/Toprich Oils Product Images-07.png"],
      },
    ],
  },
  motorcycle: {
    name: "Motorcycle Oils",
    subtitle: "Motorcycles, Tuk-Tuks",
    description:
      "Specialized oils for two-wheelers and three-wheelers, offering superior engine and transmission protection",
    products: [
      {
        id: "m1",
        name: "XTRA POWER PLUS 4T",
        subtitle: "20W50",
        description:
          "This is a mineral-based multigrade motorcycle oil specially formulated for offroad and onroad four-stroke engines. Blended with high quality virgin base oils and performance additives to provide the engine, gear box and wet clutch ultimate protection. XTRA POWER PLUS is suitable for passenger motorcycle, touring, racing and cross applications, offering excellent protection against deposits, sludge, wear and oxidation in all terrains.",
        application: "On-road 4-stroke motorcycles",
        sizes: "500ML | 1L",
        specs: {
          "Viscosity at 40°C": "96 cSt",
          "Viscosity at 100°C": "14 cSt",
          "Pour Point": "149°C",
          "Flash Point": "250°C",
          TBN: "10 mg KOH/g",
        },
        performance: ["Meets & Exceeds API SL; JASO MA,MA1 & MA2"],
        benefits: [
          "Reduces engine overheating",
          "Long drain intervals",
          "uperior detergency and dispersancy to",
          "keep the engine clean and decrease maintenance costs",
          "Excellent anti-wear properties to protect vital engine and gear parts.",
          "Adapted friction properties to eliminate clutch slippage and improves drivability",
        ],
        images: ["images/products_1/Toprich Oils Product Images-09.png"],
      },
      {
        id: "m2",
        name: "POWER PLUS 4T",
        subtitle: "40",
        description:
          "This is specially formulated to deliver maximum power output by minimizing friction and ensuring consistent performance. Reduced friction results in more consistent and sustained power output. Built with cutting-edge technology, it offers exceptional protection and reliability under extreme conditions for all 4 stroke engines (70cc,100cc, 150cc,200cc,650cc & 1000cc)—whether in daily rides, harsh environments, or on the racetrack.",
        application:
          "All 4-stroke engines: 70cc, 100cc, 150cc, 200cc, 650cc, 1000cc",
        sizes: "500L | 1L",
        specs: {
          "Viscosity at 40°C": "147 cSt",
          "Viscosity at 100°C": "15.3 cSt",
          "Pour Point": "106°C",
          "Flash Point": "234°C",
          TBN: "8 mg KOH/g",
        },
        performance: ["Meets & exceeds API SG; JASO MA/ MA1 Standards"],
        benefits: [
          "It helps keep four-stroke engines running clean.",
          "Enhanced engine protection, preventing wear & tear",
          "Provides more power for smooth rides.",
          "Provides protection in extreme operating conditions.",
          "Improved fuel efficiency.",
        ],
        images: ["images/products_1/Toprich Oils Product Images-08.png"],
      },
      {
        id: "m3",
        name: "TOP RICH SHOCK OIL",
        subtitle: "10W",
        description:
          "Formulated with medium viscosity index oils and premium additives. Top Rich Shock Absorber oil delivers superior anti-wear, anti-rust, and anti-oxidation performance. It ensures excellent chemical stability, seal compatibility, and a low pour point for reliable operations across a wide temperature range.",
        application: "Motorcycle shock absorbers",
        sizes: "500ML",
        specs: {
          "Viscosity at 40°C": "31.96 cSt",
          "Viscosity at 100°C": "5.58 cSt",
          "Pour Point": "113°C",
          "Flash Point": "234°C",
          "TBN (mg KOH)": "N/A",
        },
        performance: ["API-CF"],
        benefits: [
          "Outstanding chemical stability",
          "Reliable seal compatibility",
          "Low pour point for year-round and all-weather use",
          "Prevents foaming and wear",
        ],
        images: ["images/products_1/Toprich Oils Product Images-10.png"],
      },
      {
        id: "m4",
        name: "TOP RICH 2T",
        subtitle: "20",
        description:
          "This is a premium lubricant designed for 2-stroke engines with premix or injector lubrication systems such as scooters, chain saws outboard engines, lawn mowers, golf carts, chain saws, and other two-stroke powered equipment optimized for high RPM operation. Enhanced with synthetic base oils for superior oil film strength and wear protection, it effectively reduces smoke and deposit formation.",
        application:
          "Scooters, chain saws, outboard engines, lawn mowers, golf carts, and other 2-stroke equipment",
        sizes: "500ML | 1L | 5L",
        specs: {
          "Viscosity at 40°C": "48.2 cSt",
          "Viscosity at 100°C": "7.2 cSt",
          "Pour Point": "109°C",
          "Flash Point": "120°C",
          "TBN (mg KOH)": "N/A",
        },
        performance: ["Meets and exceeds: API TC; JASO FC Standards"],
        benefits: [
          "Provides effective wear protection",
          "Ensures thermal and oxidation stability with deposit control",
          "Helps prevent pre-ignition",
          "Offers reliable corrosion protection",
        ],
        images: ["images/products_1/Toprich Oils Product Images-11.png"],
      },
    ],
  },
  brake: {
    name: "Manual Transmission Gear Oils",
    subtitle: "All vehicle braking systems",
    description:
      "High-quality brake fluids meeting international standards for safe and reliable braking performance",
    products: [
      {
        id: "b1",
        name: "GEAR RICH OIL GL5",
        subtitle: "85W140",
        description:
          "This is a high-performance, multigrade gear oil formulated with premium mineral base oils and advanced extreme pressure additives. It delivers excellent low-temperature fluidity for reliable lubrication during cold start, while maintaining a robust protective oil film under high-temperature and heavy-load conditions",
        application: "Cars, motorcycles, light commercial vehicles",
        sizes: "500ML | 5L | 20L | Drum(209L)",
        specs: {
          "Viscosity at 40°C": "326 cSt",
          "Viscosity at 100°C": "31.2 cSt",
          "Viscosity Index": "134",
          "Flash Point": "234°C",
          "TBN (mg KOH)": "N/A",
        },
        performance: ["Meets API GL-5 Standards"],
        benefits: [
          "Superior frictional performance for smooth operation",
          "Provides robust protection against rust, staining, and corrosion",
          "Fully compatible with standard automotive seals and gaskets",
          "Strong thermal stability and resistance to oxidation at high temperatures",
        ],
        images: ["images/products_1/Toprich Oils Product Images-13.png"],
      },
      {
        id: "b2",
        name: "GEAR RICH OIL",
        subtitle: "80W90",
        description:
          "This is a premium multigrade gear oil formulated with high-quality mineral base oils and extreme pressure (EP) additives. It ensures reliable protection in both cold starts and high-heat conditions. Ideal for applications requiring API GL-5 performance, including heavy-duty differentials, axles, and final drives subject to extreme pressures and shock loads.",
        application:
          "Heavy-duty differentials, axles, and final drives requiring API GL-5 performance",
        sizes: "500ML | 5L | 20L | Drum(209L)",
        specs: {
          "Viscosity at 40°C": "150 cSt",
          "Viscosity at 100°C": "15.7 cSt",
          "Viscosity Index": "108",
          "Flash Point": "234°C",
          "TBN (mg KOH)": "N/A",
        },
        performance: ["Meets API GL-5 Standards"],
        benefits: [
          "Superior frictional performance for smooth operation",
          "Provides robust protection against rust, staining, and corrosion",
          "Fully compatible with standard automotive seals and gaskets",
          "Strong thermal stability and resistance to oxidation at high temperatures",
        ],
        images: ["images/products_1/Toprich Oils Product Images-12.png"],
      },
    ],
  },
  gear: {
    name: "Automatic Gear Transmission Fluids",
    subtitle: "Manual Transmissions, differentials, gearboxes",
    description:
      "High-performance gear oils for automotive and industrial transmissions and differentials",
    products: [
      {
        id: "g1",
        name: "DEX RICH DEXTRON II ATF",
        subtitle: "DEXTRON II",
        description:
          "This is a versatile automatic transmission fluid automatic transmission fluid designed for use in automatic gearboxes and power steering systems of vehicles requiring Dexron II specification. Engineered to deliver smooth performance and dependable protection, it ensures efficient operation in a wide range of vehicles under varying temperature conditions.",
        application: "Automatic gearboxes and power steering systems",
        sizes: "500Ml | 1L | 5L | 20L | Drum(209L)",
        specs: {
          "Viscosity at 40°C": "37 cSt",
          "Viscosity at 100°C": "7.2 cSt",
          "Viscosity Index": "162",
          "Flash Point": "250°C",
          "TBN (mg KOH)": "N/A",
        },
        performance: [
          "Meets and exceeds: GM DEXRON II D, Allison C-4, MAN Type Z1/V1, MB 236.1, Ford WSS-M2C166-H Standards",
        ],
        benefits: [
          "Excellent low-temperature fluidity ensures smooth gear shifting during cold starts",
          "Compatible with seals, helping to prevent leaks and maintain system integrity",
          "Retains superior lubricating properties and performance even under high-temperature conditions",
        ],
        images: ["images/products_1/Toprich Oils Product Images-04.png"],
      },
      {
        id: "g2",
        name: "DEX RICH DEXTRON III ATF",
        subtitle: "DEXTRON III",
        description:
          "This is a premium semi-synthetic multipurpose transmission fluid specially designed for use in automatic transmissions manufactured post-2005 where Dexron III specification is required. It is also suitable for use in certain power steering systems, torque converters, gearboxes, fluid couplings, and uncomplicated hydraulic systems in accordance with OEM specifications. Formulated with a refined blend of high-quality synthetic base oils and advanced additive technology—including viscosity index improvers, antioxidants, anti-wear agents, detergents, and friction modifiers—it ensures outstanding protection and smooth operation across a wide range of applications.",
        application:
          "Automatic transmissions (post-2005), power steering systems, torque converters, gearboxes, hydraulic systems",
        sizes: "500ML | 5L | 20L | Drum(209L)",
        specs: {
          "Viscosity at 40°C": "37 cSt",
          "Viscosity at 100°C": "7.2 cSt",
          "Viscosity Index": "162",
          "Flash Point": "250°C",
          "TBN (mg KOH)": "N/A",
        },
        performance: [
          "Meets and exceeds: GM DEXRON III H, Standards, FORD MERCON Allison C-4, Volvo 97340",
        ],
        benefits: [
          "Ensures smooth gear shifting and precise synchronization under all operating conditions",
          "Maintains stable friction performance even under prolonged and severe usage",
          "Resists deposit buildup and minimizes evaporation at high temperatures",
          "Excellent low-temperature flow properties for rapid fluid circulation during cold starts",
          "Provides strong protection against wear, rust, corrosion, and foaming",
          "Fully compatible with commonly used seal materials in transmission systems",
          "Contributes to lower maintenance costs and enhances overall operational efficiency",
        ],
        images: ["images/products_1/Toprich Oils Product Images-15.png"],
      },
    ],
  },
  coolant: {
    name: "Coolants",
    subtitle: "All vehicle types, Industrial equipment",
    description:
      "Premium engine coolants that prevent overheating and protect against corrosion and freezing",
    products: [
      {
        id: "c1",
        name: "TOPRICH COOLANT GREEN G48",
        subtitle: "J814C",
        description:
          "This is an ethylene glycol-based coolant suitable for all makes and models of vehicles, including petrol and heavy-duty diesel engines. It protects water-cooled systems from corrosion and rust. It is safe for rubber components and prevents foaming or clogging. It is ideal for most passenger and light diesel vehicles within the tropical regions.",
        application: "All vehicle types within tropical regions",
        sizes: "500ML | 1L | 5L | 20L | Drum(209L)",
        specs: {
          "Freezing Point °C": "-14.5",
          "Boiling Point °C": "120",
          pH: "7.0-9.0",
          Density: "1.05Kg/l",
          Color: "Green",
          "Corrision Protection": "Pass/Acceptable",
        },
        performance: ["Meets ASTM D3306, GM 1825M"],
        benefits: [],
        images: ["images/products_1/Toprich Oils Product Images-16.png"],
      },
      {
        id: "c2",
        name: "TOPRICH COOLANT RED G48",
        subtitle: "N/A",
        description:
          "This is an ethylene glycol-based coolant suitable for all makes and models of vehicles, including petrol and heavy-duty diesel engines. It protects water-cooled systems from corrosion and rust. It is safe for rubber components and prevents foaming or clogging. It is ideal for most passenger and light diesel vehicles within the tropical regions.",
        application: "All vehicle types",
        sizes: "1L | 5L | 20L | Drum(209L)",
        specs: {
          "Freezing Point °C": "-14.5",
          "Boiling Point °C": "107-120",
          pH: "7.0-9.0",
          Density: "1.05Kg/l",
          Color: "Red",
          "Corrision Protection": "Pass/Acceptable",
        },
        performance: ["Meets ASTM D3306 GM 1825M"],
        benefits: [],
        images: ["images/products_1/Toprich Oils Product Images-17.png"],
      },
      {
        id: "c3",
        name: "ANTIFREEZE COOLANT GREEN",
        subtitle: "N/A",
        description:
          "This is a 33% pre-mixed, ready to use ethylene glycol-based coolant. Suitable for all makes and models of vehicles including petrol and heavy-duty diesel engines. It protects water-cooled systems from corrosion and rust. It is safe for rubber components, and prevents foaming or clogging and is ideal for most passenger cars and light duty diesel vehicles.",
        application:
          "All vehicle types including petrol and heavy-duty diesel engines",
        sizes: "500ML | 1L | 5L | 20L",
        specs: {
          "Freezing Point °C": "-36",
          "Boiling Point °C": "150",
          pH: "7.0-9.0",
          Density: "1.05Kg/l",
          Color: "Green",
          "Corrision Protection": "Pass/Acceptable",
        },
        performance: [
          "Meets ASTM D 3306, ASTM D 4656, ASTM D 4985, ASTM D 5345, SAE J814C Standards",
        ],
        benefits: [
          "Pre-mixed and ready to use",
          "Provides effective protection down to -36°C",
          "Non-foaming and prevents radiator clogging",
        ],
        images: ["images/products_1/Toprich Oils Product Images-18.png"],
      },
      {
        id: "c4",
        name: "ANTIFREEZE COOLANT RED",
        subtitle: "N/A",
        description:
          "This is a 33% pre-mixed, ready to use ethylene glycol-based coolant. Suitable for all makes and models of vehicles including petrol and heavy-duty diesel engines. It protects water-cooled systems from corrosion and rust. It is safe for rubber components, and prevents foaming or clogging and is ideal for most passenger cars and light duty diesel vehicles.",
        application: "All vehicle types in tropical regions",
        sizes: "1L | 5L | 20L | Drum(209L)",
        specs: {
          "Freezing Point °C": "-36",
          "Boiling Point °C": "150",
          pH: "7.0-9.0",
          Density: "1.05Kg/l",
          Color: "Red",
          "Corrision Protection": "Pass/Acceptable",
        },
        performance: [
          "Meets ASTM D 3306, ASTM D 4656, ASTM D 4985, ASTM D 5345, SAE J814C Standards",
        ],
        benefits: [
          "Pre-mixed and ready to use",
          "Provides effective protection down to -18°C",
          "Non-foaming and prevents radiator clogging",
        ],
        images: ["images/products_1/Toprich Oils Product Images-19.png"],
      },
    ],
  },
  hydraulic: {
    name: "Hydraulic Oils",
    subtitle: "Hydraulic machinery, Excavators, Forklifts",
    description:
      "Superior hydraulic fluids for industrial and mobile hydraulic systems, ensuring smooth power transmission",
    products: [
      {
        id: "h1",
        name: "HYDRA RICH",
        subtitle: "ISO VG 32",
        description:
          "This is a premium anti-wear hydraulic oil formulated from high-quality base oils and advanced additive technology. It is designed to provide excellent protection and reliable performance in a wide range of hydraulic systems.",
        application:
          "Industrial and mobile hydraulic systems, construction machinery, manufacturing equipment",
        sizes: "5L | 20L | Drum(209L)",
        specs: {
          "Viscosity at 40°C": "32 cSt",
          "Viscosity at 100°C": "5.9 cSt",
          "Viscosity Index": "133",
          "Flash Point": "250°C",
          "TBN (mg KOH)": "N/A",
        },
        performance: [
          "Meets and exceeds DIN 51524 Part II (HLP type), ISO 11158 category HM and equivalent specifications.",
        ],
        benefits: [
          "Suitable for industrial and mobile hydraulic systems requiring ISO VG 32 fluids.",
          "Recommended for use in construction machinery, manufacturing equipment",
          "and other hydraulic applications operating under moderate to high pressures.",
        ],
        images: ["images/products_1/Toprich Oils Product Images-20.png"],
      },
      {
        id: "h2",
        name: "HYDRA RICH",
        subtitle: "ISO VG 46",
        description:
          "This is a premium anti-wear hydraulic oil, engineered for smooth power transfer, reliable system protection and extended equipment life in demanding hydraulic applications",
        application:
          "Demanding hydraulic applications, construction and industrial equipment",
        sizes: "5L | 20L | Drum(209L)",
        specs: {
          "Viscosity at 40°C": "46 cSt",
          "Viscosity at 100°C": "7.4 cSt",
          "Viscosity Index": "125",
          "Flash Point": "250°C",
          "TBN (mg KOH)": "N/A",
        },
        performance: [
          "Meets or exceeds DIN 51524 Part II (HLP type), ISO 6743/4 class HV and equivalent international specifications.",
        ],
        benefits: [
          "Its optimized formulation reduces fluid friction, improving system efficiency and lowering power consumption.",
          "Advanced oxidation control allows longer service life, cutting maintenance costs.",
          "Maintains viscosity even under high pressure and temperature thus, ensuring consistent performance and shear stability.",
          "Gentle on seals and elastomers, preventing leaks and extending component life.",
        ],
        images: ["images/products_1/Toprich Oils Product Images-21.png"],
      },
      {
        id: "h3",
        name: "HYDRA RICH",
        subtitle: "ISO VG 68",
        description:
          "This is a heavy-duty hydraulic oil engineered for demanding hydraulic systems that operate under high loads and temperatures. Blended with premium base oils and advanced additives, it ensures long service life, reduced downtime, and reliable equipment protection",
        application: "Heavy-duty hydraulic systems, high-load applications",
        sizes: "5L | 20L | Drum(209L)",
        specs: {
          "Viscosity at 40°C": "68 cSt",
          "Viscosity at 100°C": "9.6 cSt",
          "Viscosity Index": "122",
          "Flash Point": "250°C",
          "TBN (mg KOH)": "N/A",
        },
        performance: [
          "Meets and exceeds DIN 51524 Part II (HLP type) and equivalent specifications.",
        ],
        benefits: [
          "Heavy-Load Endurance providing a strong film strength for high-pressure duty.",
          "Thermal Resilience and stable under high temperatures",
          "Maintains viscosity under stress (high temperature and pressure).",
          "Seal Protection thus preventing leaks and extended component life.",
        ],
        images: ["images/products_1/Toprich Oils Product Images-22.png"],
      },
    ],
  },
  cutting: {
    name: "Specialty Oils",
    subtitle: "Manufacturing, Metalworking, Fabrication",
    description:
      "Precision metalworking fluids for cutting, grinding, and machine operations",
    products: [
      {
        id: "ct1",
        name: "RICH CUTTING OIL",
        subtitle: "N/A",
        description:
          "Rich Cutting Oil is a versatile formulation for water-soluble oils that form stable milky emulsions in all water types. It contains emulsifiers, wetting agents, rust inhibitors, mineral oils and biocides to ensure long service life and prevent spoilage. It is designed for medium-cutting operations and provides effective lubrication, cooling, extended tool life, and quality finishes on both ferrous and non-ferrous metals across various machining processes.",
        application: "Cutting, grinding, machining, metalworking operations",
        sizes: "5L | 20L | Drum(209L)",
        specs: {
          "Pour Point": "-6",
          "Viscosity at 40°C": "32.4",
          "Viscosity at 100°C": "5.5",
          "Viscosity Index": "106",
          "Flash Point": "210",
          PH: "9.5",
        },
        performance: ["Meets and exceeds ISO 6743/7"],
        benefits: [
          "Delivers efficient machining performance across all metals, even in the most demanding operations",
          "Extends the service life of tools and equipment",
          "Boosts overall productivity and process efficiency",
          "Provides excellent surface finishing quality",
          "Lowers production costs through reduced cutting effort and easier cleaning",
        ],
        images: ["images/products_1/Toprich Oils Product Images-24.png"],
      },
      {
        id: "ct2",
        name: "BRAKE FLUID DOT 4",
        subtitle: "20",
        description:
          "Toprich DOT 4 Brake Fluid delivers reliable braking performance under all conditions. It offers protection against rust, corrosion, and vapor lock. It is Compatible with DOT 3 and DOT 5.1 and is ideal for cars, motorcycles, and light commercial vehicles.",
        application: "Cars, motorcycles, light commercial vehicles",
        sizes: "200ML | 500ML",
        specs: {
          "Viscosity at 40°C": "1500",
          "Viscosity at 100°C": "1.8",
          "Reflex Boiling Point (°C)": "260",
          "Wet Equilibrium Reflex Boiling Point (°C)": "155",
          "Specific Gravity @60 (°F)": "1.05Kg/L",
        },
        performance: [
          "Meets and Exceeds FMVSS No. 116 DOT 4, SAE J1704, and ISO 4925 Class 4",
        ],
        benefits: [
          "Powerful braking providing maximum protection.",
          "Reliable performance with every stop.",
          "Engineered for safety and control.",
          "High performance. High protection",
        ],
        images: ["images/products_1/Toprich Oils Product Images-25.png"],
      },
    ],
  },
};

let currentView = "categories";
let selectedCategory = null;

const productIcons = {
  diesel:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-truck h-8 w-8 text-[hsl(142,76%,36%)]"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>',
  petrol:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-car h-8 w-8 text-[hsl(142,76%,36%)]"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><path d="M9 17h6"></path><circle cx="17" cy="17" r="2"></circle></svg>',
  motorcycle:
    '<svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#2ec27e"><path d="M158-200q-65.33 0-111.67-46Q0-292 0-358q0-63 42.5-108t104.83-48.67l-40.66-32H0V-600h180.67L280-540l159.33-60h135.34L502-693.33h-94V-760h126.67L620-650l130.67-65.33V-606h-96l80 104q16.33-6.67 32.83-10t33.83-3.33q66 0 112.34 46 46.33 46 46.33 112t-46.33 111.66Q867.33-200 801.33-200 736-200 690-246t-46-111.33q0-29 9.83-55.5 9.84-26.5 28.84-48.5l-30-38L510-282.67H396.67l-80.67-72q-1.67 65-47.33 109.84Q223-200 158-200Zm0-66.67q38.33 0 64.83-26.83t26.5-64.5q0-37.67-26.5-64.5T158-449.33q-37.67 0-64.5 26.5T66.67-358q0 38.33 26.83 64.83t64.5 26.5Zm294-266.66L288.67-472 452-533.33h143.33H452Zm349.33 266.66q38.34 0 65.17-26.5t26.83-64.16q0-38.34-26.83-65.17t-65.17-26.83q-37.66 0-64.16 26.83t-26.5 65.17q0 37.66 26.5 64.16t64.16 26.5Zm-326.66-82.66 120.66-184H452L288.67-472l132.66 122.67h53.34Z"/></svg>',
  gear: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cog h-8 w-8 text-[hsl(142,76%,36%)]"><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path><path d="M12 2v2"></path><path d="M12 22v-2"></path><path d="m17 20.66-1-1.73"></path><path d="M11 10.27 7 3.34"></path><path d="m20.66 17-1.73-1"></path><path d="m3.34 7 1.73 1"></path><path d="M14 12h8"></path><path d="M2 12h2"></path><path d="m20.66 7-1.73 1"></path><path d="m3.34 17 1.73-1"></path><path d="m17 3.34-1 1.73"></path><path d="m11 13.73-4 6.93"></path></svg>',
  coolant:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-droplets h-8 w-8 text-[hsl(142,76%,36%)]"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg>',
  hydraulic:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wrench h-8 w-8 text-[hsl(142,76%,36%)]"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>',
  cutting:
    '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#2ec27e"><path d="M160-120q-17 0-28.5-11.5T120-160q0-17 11.5-28.5T160-200h40v-240h-40q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520h40v-240h-40q-17 0-28.5-11.5T120-800q0-17 11.5-28.5T160-840h640q17 0 28.5 11.5T840-800q0 17-11.5 28.5T800-760h-40v240h40q17 0 28.5 11.5T840-480q0 17-11.5 28.5T800-440h-40v240h40q17 0 28.5 11.5T840-160q0 17-11.5 28.5T800-120H160Zm120-80h400v-240q-17 0-28.5-11.5T640-480q0-17 11.5-28.5T680-520v-240H280v240q17 0 28.5 11.5T320-480q0 17-11.5 28.5T280-440v240Zm200-120q50 0 85-34.5t35-83.5q0-39-22.5-67T480-620q-75 86-97.5 114.5T360-438q0 49 35 83.5t85 34.5ZM280-200v-560 560Z"/></svg>',
  brake:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cog h-8 w-8 text-[hsl(142,76%,36%)]"><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path><path d="M12 2v2"></path><path d="M12 22v-2"></path><path d="m17 20.66-1-1.73"></path><path d="M11 10.27 7 3.34"></path><path d="m20.66 17-1.73-1"></path><path d="m3.34 7 1.73 1"></path><path d="M14 12h8"></path><path d="M2 12h2"></path><path d="m20.66 7-1.73 1"></path><path d="m3.34 17 1.73-1"></path><path d="m17 3.34-1 1.73"></path><path d="m11 13.73-4 6.93"></path></svg>',
};

function renderCategories() {
  const categories = Object.entries(productsData);
  let html = "";

  categories.forEach(([key, cat]) => {
    html += `
            <div class="product-card bg-white p-4 rounded-lg border border-gray-200 text-sm flex flex-col hover:border-green-500 hover:shadow-lg transition-all duration-300 group" 
                style="cursor: pointer;" 
                data-category-id="${key}">

                <!-- Icon -->
                <div class="w-full h-10 bg-[#E5F2E5] rounded-lg flex items-center justify-start px-3 mb-3 transform transition-transform duration-300 group-hover:scale-105">
                    <span class="text-2xl">${productIcons[key] || ""}</span>
                </div>

                <!-- Text content -->
                <h3 class="text-lg font-extrabold text-gray-900 mb-1 transition-colors duration-300 group-hover:text-green-600">${
                  cat.name
                }</h3>
                <p class="text-gray-600 font-bold mb-1">${cat.subtitle}</p>
                <p class="text-xs text-gray-500 mb-2">${cat.description}</p>

                <!-- Footer -->
                <div class="flex items-center justify-between pt-1 mt-auto flex-nowrap sm:flex-wrap gap-2">
                    <p class="text-gray-600 font-bold text-sm whitespace-nowrap">
                        ${cat.products.length} products available
                    </p>
                    <button class="text-xs sm:text-sm font-semibold text-gray-700 border border-amber-400 px-2 sm:px-3 py-1 rounded-md transition-colors hover:bg-amber-400 hover:border-amber-500 hover:text-gray-900 whitespace-nowrap">
                        view details
                    </button>
                </div>
            </div>
            `;
  });

  const contentDiv = document.getElementById("content");
  contentDiv.className =
    "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8";
  contentDiv.innerHTML = html;

  // make sure animation classes are applied (so cards are visible)
  document
    .querySelectorAll(".product-card")
    .forEach((card) => card.classList.add("animate-in"));

  document.getElementById("breadcrumb").style.display = "none";
  currentView = "categories";
  selectedCategory = null;
}

function viewCategory(categoryId) {
  selectedCategory = categoryId;
  currentView = "category";
  const category = productsData[categoryId];
  let html = `
        <div class="flex items-center justify-between mb-6 flex-wrap gap-2">
            <h2 class="text-2xl sm:text-3xl font-bold text-green-700 truncate">${category.name}</h2>
            <button class="btn-back-categories text-grey-900 text-sm sm:text-base px-3 sm:px-4 py-2 border border-gray-200 rounded-lg transition hover:bg-amber-400 whitespace-nowrap">
                ← Back to Categories
            </button>
        </div>
    `;

  let productsHtml = "";
  category.products.forEach((product) => {
    productsHtml += `
        <div class="product-card bg-white p-6 rounded-lg border border-gray-200 hover:border-green-500 hover:shadow-lg transition-all duration-300" 
            style="cursor:pointer; pointer-events:all;" 
            data-product-id="${product.id}">
            <h4 class="text-lg font-extrabold text-green-700 mb-2">${product.name}</h4>
            <p class="text-sm font-semibold text-amber-400 mb-2">SAE ${product.subtitle}</p>
            <p class="text-gray-600 text-sm mb-4">${product.description}</p>
            
            <!-- Bottom section aligned right -->
            <div class="border-t pt-3 flex justify-end items-center">
                <button 
                    class="text-sm font-semibold text-gray-700 border border-gray-200 rounded-md px-4 py-2 transition-colors hover:bg-amber-400 focus:outline-none">
                    View Details →
                </button>
            </div>
        </div>
    `;
  });

  const contentDiv = document.getElementById("content");
  contentDiv.className = "w-full";
  contentDiv.innerHTML =
    html +
    `
        <div class="flex flex-col gap-4 mb-8 w-full">
            ${productsHtml}
        </div>
    `;

  // ensure newly injected product cards become visible
  document
    .querySelectorAll(".product-card")
    .forEach((card) => card.classList.add("animate-in"));

  document.getElementById("breadcrumb").style.display = "flex";
  document.getElementById("breadcrumb-text").textContent = category.name;
}
function viewProduct(categoryId, productId) {
  selectedCategory = categoryId;
  currentView = "product";

  const category = productsData[categoryId];
  const product = category.products.find((p) => p.id === productId);
  if (!product)
    return console.error("Product not found", categoryId, productId);

  let specsHtml = "";
  Object.entries(product.specs || {}).forEach(([key, value]) => {
    specsHtml += `
            <div class="flex flex-col">
                <span class="text-xs font-semibold text-green-600">${key.toUpperCase()}</span>
                <span class="text-sm text-gray-700">${value}</span>
            </div>
        `;
  });

  let performanceHtml = "";
  (product.performance || []).forEach((perf) => {
    performanceHtml += `<li class="text-sm text-gray-600">${perf}</li>`;
  });

  let benefitsHtml = "";
  (product.benefits || []).forEach((benefit) => {
    benefitsHtml += `<li class="text-sm text-gray-600">${benefit}</li>`;
  });

  const html = `
        <div class="flex items-center justify-between mb-6 flex-wrap gap-2">
            <h2 class="text-2xl sm:text-3xl font-bold text-green-700 truncate">${
              product.name
            }</h2>
            <button class="btn-back-category text-grey-900 text-sm sm:text-base px-3 sm:px-4 py-2 border border-gray-200 rounded-lg transition hover:bg-amber-400 whitespace-nowrap">
                ← Back to ${category.name}
            </button>
        </div>
        <div class="bg-white p-8 rounded-lg border border-gray-200">
            <div class="flex flex-col sm:flex-row justify-between gap-8 mb-8">
                <div class="flex-1">
                    <p class="text-xl text-gray-600 uppercase mb-1">SAE <span class="text-xl text-amber-500">${
                      product.subtitle
                    }</span></p>
                </div>
                <div class="flex-1">
                    <p class="text-xs text-gray-600 uppercase mb-1">Available Sizes</p>
                    <p class="text-sm font-semibold text-gray-900">${
                      product.sizes || "N/A"
                    }</p>
                </div>
            </div>
            <div class="mb-8">
                <h3 class="text-base font-bold text-gray-900 mb-4">Description & Application</h3>
                <p class="text-gray-700 text-sm leading-relaxed mb-3">${
                  product.description
                }</p>
                <p class="text-sm text-gray-700"><span class="font-semibold">Application:</span> ${
                  product.application || "N/A"
                }</p>
            </div>
            <div class="mb-8">
                <h3 class="text-base font-bold text-gray-900 mb-4">Technical Specifications</h3>
                <div class="overflow-x-auto">
                    <table class="w-full border-collapse">
                        <thead>
                            <tr class="border-b border-gray-300">
                                <th class="text-left py-3 text-sm font-semibold text-gray-700">Property</th>
                                <th class="text-left py-3 text-sm font-semibold text-gray-700">Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${
                              Object.entries(product.specs || {})
                                .map(
                                  ([key, value]) => `
                                <tr class="border-b border-gray-200">
                                    <td class="py-3 text-sm text-gray-700">${key}</td>
                                    <td class="py-3 text-sm text-gray-900">${value}</td>
                                </tr>
                            `
                                )
                                .join("") ||
                              '<tr><td colspan="2" class="py-3 text-sm text-gray-600">No specifications available</td></tr>'
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
                <div class="lg:col-span-1 space-y-6">
                    <div>
                        <h3 class="text-base font-bold text-gray-900 mb-3">Performance Levels</h3>
                        <ul class="space-y-2">
                            ${
                              (product.performance || [])
                                .map(
                                  (perf) => `
                                <li class="text-sm text-gray-700 flex items-start">
                                    <span class="mr-2">•</span>
                                    <span>${perf}</span>
                                </li>
                            `
                                )
                                .join("") ||
                              '<li class="text-sm text-gray-600">No performance levels specified</li>'
                            }
                        </ul>
                    </div>
                    <div>
                        <h3 class="text-base font-bold text-gray-900 mb-3">Benefits</h3>
                        <ul class="space-y-2">
                            ${
                              (product.benefits || [])
                                .map(
                                  (benefit) => `
                                <li class="text-sm text-gray-700 flex items-start">
                                    <span class="mr-2">•</span>
                                    <span>${benefit}</span>
                                </li>
                            `
                                )
                                .join("") ||
                              '<li class="text-sm text-gray-600">No benefits specified</li>'
                            }
                        </ul>
                    </div>
                </div>
                <div class="lg:col-span-1">
                    ${
                      product.images && product.images.length > 0
                        ? `
                        <div class="relative">
                            <div class="overflow-hidden mb-3">
                                <img id="product-image-display" src="${product.images[0]}" alt="${product.name}" class="w-full max-h-[650px] object-contain">
                            </div>
                            <!-- Thumbnail Gallery -->
                            
                        </div>
                    `
                        : `
                        <div class="flex items-center justify-center h-64 bg-gray-50 rounded-lg border border-gray-200">
                            <p class="text-sm text-gray-500">No images available</p>
                        </div>
                    `
                    }
                </div>
            </div>
        </div>
    `;

  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = html;

  // Ensure content is visible
  contentDiv.classList.add("animate-in");

  document.getElementById("breadcrumb").style.display = "flex";
  document.getElementById("breadcrumb-text").textContent = product.name;
}

// Global function to change product image (called from inline onclick)
window.changeProductImage = function (imgSrc, imgIndex) {
  const imageDisplay = document.getElementById("product-image-display");
  const allThumbs = document.querySelectorAll(".thumb-img");

  if (imageDisplay) {
    imageDisplay.src = imgSrc;
  }

  allThumbs.forEach((thumb, idx) => {
    if (idx === imgIndex) {
      thumb.classList.remove("border-gray-200");
      thumb.classList.add("border-green-500");
    } else {
      thumb.classList.remove("border-green-500");
      thumb.classList.add("border-gray-200");
    }
  });
};

function goToCategories() {
  renderCategories();
  currentView = "categories";
  selectedCategory = null;

  const contentDiv = document.getElementById("content");
  if (contentDiv) contentDiv.classList.remove("hidden");

  const breadcrumb = document.getElementById("breadcrumb");
  if (breadcrumb) breadcrumb.style.display = "none";
}

// EVENT DELEGATION - Single listener for all content interactions
document.getElementById("content").addEventListener("click", (e) => {
  const categoryCard = e.target.closest("[data-category-id]");
  const productCard = e.target.closest("[data-product-id]");
  const backBtn = e.target.closest(".btn-back-categories");
  const backCatBtn = e.target.closest(".btn-back-category");

  if (categoryCard) {
    e.stopPropagation();
    viewCategory(categoryCard.dataset.categoryId);
  } else if (productCard && currentView === "category") {
    e.stopPropagation();
    viewProduct(selectedCategory, productCard.dataset.productId);
  } else if (backBtn) {
    e.stopPropagation();
    goToCategories();
  } else if (backCatBtn) {
    e.stopPropagation();
    viewCategory(selectedCategory);
  }
});

// Initialize
renderCategories();
