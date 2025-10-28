// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Smooth scroll for nav links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        
        if (mobileMenu) {
            mobileMenu.classList.add('hidden');
        }
    });
});

// Form submission
function handleSubmit(e) {
    e.preventDefault();
    alert('Thank you for your message! Our team will get back to you within 24 hours.');
    e.target.reset();
}

// Scroll animations - trigger every time element enters viewport
document.addEventListener('DOMContentLoaded', function() {
    const animatedEls = document.querySelectorAll('.product-card, #why .border, #contact .border, #contact .bg-white');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            } else {
                entry.target.classList.remove('animate-in');
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -10% 0px'
    });

    animatedEls.forEach(el => {
        observer.observe(el);
    });

    const heroAnimations = document.querySelectorAll('.hero-bg .animate-fade-up');
    heroAnimations.forEach(el => {
        el.style.opacity = '0';
    });

    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});

const productsData = {
    diesel: {
        name: 'Diesel Engine Oils',
        subtitle: 'Trucks, buses, generators, construction equipment',
        description: 'Premium formulations for heavy-duty diesel engines, providing exceptional protection and performance',
        products: [
            {
                id: 'd1',
                name: 'DEO RICH PLATINUM',
                subtitle: '10W40',
                description: 'A premium synthetic heavy-duty diesel engine oil engineered to deliver outstanding protection and efficiency in both modern and legacy engines. Designed for severe operating conditions, it supports extended oil drain intervals and improved fuel economy, while helping to maximize engine life and reliability.',
                application: 'Suitable for modern and legacy diesel engines under severe operating conditions',
                sizes: '500ML, 1L, 4L, 5L, 20L, Drum (209L)',
                specs: {
                    'Viscosity at 40°C': '94.5 cSt',
                    'Viscosity at 100°C': '14.5 cSt',
                    'Viscosity Index': '144',
                    'Flash Point': '234°C',
                    'TBN': '10 mg KOH/g'
                },
                performance: ['Meets CI-4 API Standards', 'CF/CD/CE API Standards'],
                benefits: [
                    'Advanced wear-reduction additives ensure excellent engine protection and prolonged engine life',
                    'Maintains stable oil performance under severe operating conditions',
                    'Helps reduce pollutant emissions including HC, NOx, CO, and particulate matter',
                    'Protects emission control systems (DPF, GPF, TWC)',
                    'Supports fuel economy while enabling extended drain intervals'
                ]
            },
            {
                id: 'd2',
                name: 'DEO RICH GOLD',
                subtitle: '15W40',
                description: 'Premium multi-grade diesel engine oil formulated using advanced technology for medium-sized diesel engines. Suitable for light and heavy-duty commercial vehicles, passenger cars, 4WDs, construction, mining, and agricultural equipment. Compatible with Diesel, Petrol, and LPG-fueled engines.',
                application: 'Light and heavy-duty commercial vehicles, passenger cars, 4WDs, construction, mining, and agricultural equipment',
                sizes: '500ML, 1L, 4L, 5L, 20L, Drum (209L)',
                specs: {
                    'Viscosity at 40°C': '110.3 cSt',
                    'Viscosity at 100°C': '14.5 cSt',
                    'Viscosity Index': '135',
                    'Flash Point': '234°C',
                    'TBN': '10 mg KOH/g'
                },
                performance: ['Meets CI-4 API Standards', 'CF/CD/CE API Standards'],
                benefits: [
                    'Unmatched Thermal Stability for Peak Engine Performance',
                    'State of the Art Sludge control for optimum engine performance',
                    'Precision oil conservation and engine longevity',
                    'Extended drain intervals with enhanced TBN protection',
                    'Engine revitalization for peak cleanliness and performance'
                ]
            },
            {
                id: 'd3',
                name: 'DEO RICH SILVER OIL',
                subtitle: '15W40',
                description: 'High-performance diesel engine oil specifically formulated for heavy-duty trucks and buses equipped with supercharged or turbocharged engines operating over long distances. Engineered for 4th, 6th, and 7th generation commercial vehicles, including Euro 7-compliant engines.',
                application: 'Heavy-duty trucks and buses with supercharged/turbocharged engines, Euro 7-compliant vehicles',
                sizes: '500ML, 1L, 4L, 5L, 20L, Drum (209L)',
                specs: {
                    'Viscosity at 40°C': '110.3 cSt',
                    'Viscosity at 100°C': '14.5 cSt',
                    'Viscosity Index': '135',
                    'Flash Point': '234°C',
                    'TBN': '9 mg KOH/g'
                },
                performance: ['Meets CI-4 API Standards', 'CF/CD/CE API Standards'],
                benefits: [
                    'Superior thermal stability for peak engine performance',
                    'Advanced sludge control technology for optimal engine health',
                    'Enhanced oil economy and improved engine durability',
                    'Extended drain intervals supported by high TBN retention',
                    'Engine revitalization for superior cleanliness and sustained performance'
                ]
            },
            {
                id: 'd4',
                name: 'DEO RICH BRONZE',
                subtitle: 'SAE 40',
                description: 'High-performance engine oil formulated with advanced technology for medium-sized diesel engines. Ideal for all Japanese and European vehicles with medium size engines. Designed for engines operating under normal conditions.',
                application: 'Japanese and European vehicles with medium-sized diesel engines',
                sizes: '500ML, 1L, 4L, 5L, 20L, Drum (209L)',
                specs: {
                    'Viscosity at 40°C': '147 cSt',
                    'Viscosity at 100°C': '15.3 cSt',
                    'Viscosity Index': '106',
                    'Flash Point': '234°C',
                    'TBN': '7 mg KOH/g'
                },
                performance: ['Meets CI-4 API Standards', 'CF/CD/CE API Standards'],
                benefits: [
                    'Unmatched Thermal Stability for Peak Engine Performance',
                    'State of the Art Sludge control for optimum engine performance',
                    'Precision oil conservation and engine longevity',
                    'Extended drain intervals with enhanced TBN protection',
                    'Engine revitalization for peak cleanliness and performance'
                ]
            }
        ]
    },
    petrol: {
        name: 'Petrol Engine Oils',
        subtitle: 'Cars, SUVs, Light Commercial Vehicles',
        description: 'Advanced lubricants designed for modern gasoline engines, ensuring smooth operation and longevity',
        products: [
            {
                id: 'p1',
                name: 'PEO RICH SYNTHETIC',
                subtitle: '5W40',
                description: 'Fully synthetic MID SAPS oil for gasoline and diesel engines (ACEA C3). Reduces emissions, protects emission systems, offers excellent thermal stability, and supports extended oil change intervals.',
                application: 'Gasoline and diesel passenger cars and light commercial vehicles',
                sizes: '500ML, 1L, 4L, 5L, 20L, Drum (209L)',
                specs: {
                    'Viscosity at 40°C': '96 cSt',
                    'Viscosity at 100°C': '14 cSt',
                    'Flash Point': '250°C',
                    'TBN': '10 mg KOH/g'
                },
                performance: ['ACEA C3', 'CF/CD/CE API Standards'],
                benefits: [
                    'Superior thermal stability for peak engine performance',
                    'Advanced sludge control technology for optimal engine health',
                    'Enhanced oil economy and improved engine durability',
                    'Extended drain intervals supported by high TBN retention',
                    'Engine revitalization for superior cleanliness and sustained performance'
                ]
            },
            {
                id: 'p2',
                name: 'PEO RICH SUPER GX',
                subtitle: '20W50',
                description: 'Multi-grade engine oil designed for modern gasoline and diesel engines. Suitable for highways and congested city traffic, performs reliably in all seasons. Recommended for all petrol engines (including multi-valve and turbo types) and diesel engines.',
                application: 'All petrol engines (multi-valve, turbo) and diesel engines in cars and light vans',
                sizes: '500ML, 1L, 4L, 5L, 20L, Drum (209L)',
                specs: {
                    'Viscosity at 40°C': '165 cSt',
                    'Viscosity at 100°C': '17.9 cSt',
                    'Flash Point': '234°C',
                    'TBN': '8 mg KOH/g'
                },
                performance: ['API SL/CF', 'ACEA A3/B4'],
                benefits: [
                    'Maintains engine components in pristine condition',
                    'Reduces the need for frequent engine servicing',
                    'Ensures consistent performance even under high temperatures',
                    'Prolongs engine life with cutting-edge wear-reduction technology'
                ]
            },
            {
                id: 'p3',
                name: 'PEO RICH T-MAX CLASSIC',
                subtitle: 'SAE 40',
                description: 'Versatile engine oil suitable for all types of modern and old petrol/diesel engines. Effective regardless of weather extremes, making it reliable for all-year-round use.',
                application: 'All modern and old petrol/diesel engines',
                sizes: '500ML, 1L, 4L, 5L, 20L, Drum (209L)',
                specs: {
                    'Viscosity at 40°C': '147 cSt',
                    'Viscosity at 100°C': '15.3 cSt',
                    'Flash Point': '234°C',
                    'TBN': '7 mg KOH/g'
                },
                performance: ['Meets and Exceeds API SF/CD'],
                benefits: [
                    'Provides long-term oil stability throughout entire engine life cycle',
                    'Protects the engine against rust and corrosion',
                    'Excellent viscosity control features allow fuel economy'
                ]
            }
        ]
    },
    motorcycle: {
        name: 'Motorcycle Oils',
        subtitle: 'Motorcycles, Scooters, Tuk-Tuks',
        description: 'Specialized oils for two-wheelers and three-wheelers, offering superior engine and transmission protection',
        products: [
            {
                id: 'm1',
                name: 'XTRA POWER PLUS 4T',
                subtitle: '20W50',
                description: 'Mineral-based motorcycle oil specially formulated for on-road, four-stroke engines. Enhanced with extreme pressure additives to protect the gearbox and extend gear life.',
                application: 'On-road 4-stroke motorcycles',
                sizes: '500ML, 1L, 4L, 5L, 20L, Drum (209L)',
                specs: {
                    'Viscosity at 40°C': '96 cSt',
                    'Viscosity at 100°C': '14 cSt',
                    'Flash Point': '250°C',
                    'TBN': '10 mg KOH/g'
                },
                performance: ['API SL/CF', 'Meets API SP, SN Plus, SN', 'JASO MA/MA1'],
                benefits: [
                    'Cleanses engine',
                    'Reduces engine overheating',
                    'Long drain intervals'
                ]
            },
            {
                id: 'm2',
                name: 'POWER PLUS 4T',
                subtitle: 'SAE 40',
                description: 'Specially formulated to deliver maximum power output by minimizing friction. Built with cutting-edge technology for exceptional protection under extreme conditions for all 4-stroke engines (70cc-1000cc).',
                application: 'All 4-stroke engines: 70cc, 100cc, 150cc, 200cc, 650cc, 1000cc',
                sizes: '500ML, 1L, 4L, 5L, 20L, Drum (209L)',
                specs: {
                    'Viscosity at 40°C': '147 cSt',
                    'Viscosity at 100°C': '15.3 cSt',
                    'Flash Point': '234°C',
                    'TBN': '8 mg KOH/g'
                },
                performance: ['API SF/CD', 'CF/CD/CE API Standards'],
                benefits: [
                    'Maximum power output through reduced friction',
                    'Consistent and sustained power delivery',
                    'Exceptional protection and reliability under extreme conditions'
                ]
            },
            {
                id: 'm3',
                name: 'TOP RICH SHOCK OIL',
                subtitle: 'SAE 10W',
                description: 'Formulated with high viscosity index oils and premium additives, delivers superior anti-wear, anti-rust, and anti-oxidation performance. Ensures excellent chemical stability, seal compatibility, and low pour point.',
                application: 'Motorcycle shock absorbers',
                sizes: '500ML, 1L, 4L, 5L, 20L, Drum (209L)',
                specs: {
                    'Viscosity at 40°C': '31.96 cSt',
                    'Viscosity at 100°C': '5.58 cSt',
                    'Flash Point': '234°C'
                },
                performance: ['API-CF'],
                benefits: [
                    'Outstanding chemical stability',
                    'Reliable seal compatibility',
                    'Low pour point for year-round and all-weather use'
                ]
            },
            {
                id: 'm4',
                name: 'TOP RICH 2T',
                subtitle: 'SAE 20',
                description: 'Premium lubricant designed for 2-stroke engines with premix or injector lubrication systems. Enhanced with synthetic base oils for superior oil film strength and wear protection. Reduces smoke and deposit formation.',
                application: 'Scooters, chain saws, outboard engines, lawn mowers, golf carts, and other 2-stroke equipment',
                sizes: '500ML, 1L, 4L, 5L, 20L, Drum (209L)',
                specs: {
                    'Viscosity at 40°C': '48.2 cSt',
                    'Viscosity at 100°C': '7.2 cSt',
                    'Flash Point': '120°C'
                },
                performance: ['API TC', 'JASO FC'],
                benefits: [
                    'Provides effective wear protection',
                    'Ensures thermal and oxidation stability with deposit control',
                    'Helps prevent pre-ignition',
                    'Offers reliable corrosion protection'
                ]
            }
        ]
    },
    brake: {
        name: 'Manual Transmission Gear Oils',
        subtitle: 'All vehicle braking systems',
        description: 'High-quality brake fluids meeting international standards for safe and reliable braking performance',
        products: [
            {
                id: 'b1',
                name: 'GEAR RICH OIL GL5',
                subtitle: 'Premium brake fluid',
                description: 'Delivers reliable braking performance under all conditions. Offers protection against rust, corrosion, and vapor lock. Compatible with DOT 3 and DOT 5.1. Ideal for cars, motorcycles, and light commercial vehicles.',
                application: 'Cars, motorcycles, light commercial vehicles',
                sizes: '500ML, 1L',
                specs: {
                    'Viscosity at 40°C': '1700 cSt',
                    'Viscosity at 100°C': '1.5 cSt',
                    'Viscosity Index': '230',
                    'Flash Point': '155°C'
                },
                performance: ['FMVSS No. 116 DOT 4', 'SAE J1704', 'ISO 4925 Class 4'],
                benefits: [
                    'Powerful Braking, Maximum Protection',
                    'Reliable Performance, Every Stop',
                    'Engineered for Safety and Control',
                    'High Performance, High Protection'
                ]
            },
            {
                id: 'b2',
                name: 'GEAR RICH OIL',
                subtitle: '80W90',
                description: 'Premium multigrade gear oil formulated with high-quality mineral base oils and extreme pressure (EP) additives. Ensures reliable protection in both cold starts and high-heat conditions.',
                application: 'Heavy-duty differentials, axles, and final drives requiring API GL-5 performance',
                sizes: '500ML, 1L, 4L, 5L, 20L, Drum (209L)',
                specs: {
                    standard: '150 cSt',
                    boiling: '15.7 cSt',
                    type: '108',
                    price: '234°C'
                },
                performance: ['API GL-5'],
                benefits: ['Superior frictional performance for smooth operation',
                'Robust protection against rust, staining, and corrosion',
                'Fully compatible with standard automotive seals and gaskets',
                'Strong thermal stability and resistance to oxidation at high temperatures']
            }
        ]
    },
    gear: {
        name: 'Automatic Gear Transmission Fluids',
        subtitle: 'Manual Transmissions, differentials, gearboxes',
        description: 'High-performance gear oils for automotive and industrial transmissions and differentials',
        products: [
            {
                id: 'g1',
                name: 'DEX RICH DEXTRON II ATF',
                subtitle: 'DEXTRON II',
                description: 'Versatile automatic transmission fluid designed for use in automatic gearboxes and power steering systems requiring Dexron II-D specification. Delivers smooth performance and dependable protection.',
                application: 'Automatic gearboxes and power steering systems',
                sizes: '500ML, 1L, 4L, 5L, 20L, Drum (209L)',
                specs: {
                    'Viscosity at 40°C': '42 cSt',
                    'Viscosity at 100°C': '7.5 cSt',
                    'Viscosity Index': '147',
                    'Flash Point': '250°C'
                },
                performance: ['GM DEXRON II D', 'Allison C-4', 'MAN Type Z1/V1', 'MB 236.1', 'Ford WSS-M2C166-H'],
                benefits: [
                    'Excellent low-temperature fluidity ensures smooth gear shifting during cold starts',
                    'Compatible with seals, helping to prevent leaks',
                    'Retains superior lubricating properties under high-temperature conditions'
                ]
            },
            {
                id: 'g2',
                name: 'DEX RICH DEXTRON III ATF',
                subtitle: 'DEXTRON III',
                description: 'Premium semi-synthetic multipurpose transmission fluid for automatic transmissions manufactured post-2005 where Dexron III specification is required. Suitable for power steering systems, torque converters, and hydraulic systems.',
                application: 'Automatic transmissions (post-2005), power steering systems, torque converters, gearboxes, hydraulic systems',
                sizes: '500ML, 1L, 4L, 5L, 20L, Drum (209L)',
                specs: {
                    'Viscosity at 40°C': '57.3 cSt',
                    'Viscosity at 100°C': '9.5 cSt',
                    'Viscosity Index': '150',
                    'Flash Point': '250°C'
                },
                performance: ['GM DEXRON III H'],
                benefits: [
                    'Ensures smooth gear shifting and precise synchronization',
                    'Maintains stable friction performance under prolonged usage',
                    'Resists deposit buildup and minimizes evaporation at high temperatures',
                    'Excellent low-temperature flow properties for rapid circulation',
                    'Strong protection against wear, rust, corrosion, and foaming',
                    'Compatible with seal materials in transmission systems'
                ]
            }
        ]
    },
    coolant: {
        name: 'Coolants',
        subtitle: 'All vehicle types, Industrial equipment',
        description: 'Premium engine coolants that prevent overheating and protect against corrosion and freezing',
        products: [
            {
                id: 'c1',
                name: 'TOPRICH COOLANT GREEN G48',
                subtitle: 'SAE J814C',
                description: 'TROPICAL COOLANT (5% pre-mixed, ready to use) is an ethylene glycol-based coolant suitable for all makes and models. Protects water-cooled systems from corrosion and rust, safe for rubber components.',
                application: 'All vehicle types within tropical regions',
                sizes: '500ML, 1L, 4L, 5L, 20L, Drum (209L)',
                specs: {},
                performance: ['API GL-5'],
                benefits: [
                    'Pre-mixed and ready to use',
                    'Protects against corrosion and rust',
                    'Safe for rubber components',
                    'Prevents foaming or clogging'
                ]
            },
            {
                id: 'c2',
                name: 'TOPRICH COOLANT RED G48',
                subtitle: 'SAE J814C',
                description: 'Premium ethylene glycol-based coolant with superior protection. Pre-mixed and ready to use for all vehicle types.',
                application: 'All vehicle types',
                sizes: '500ML, 1L, 4L, 5L, 20L, Drum (209L)',
                specs: {},
                performance: ['API TC', 'JASO FC'],
                benefits: [
                    'Pre-mixed and ready to use',
                    'Superior protection against corrosion',
                    'Non-foaming formula',
                    'Prevents radiator clogging'
                ]
            },
            {
                id: 'c3',
                name: 'ANTIFREEZE COOLANT',
                subtitle: 'SAE J814C',
                description: 'Top Rich Antifreeze Coolant (33% pre-mixed, ready to use) is an ethylene glycol-based coolant suitable for all vehicle makes and models. Provides effective protection down to -36°C.',
                application: 'All vehicle types including petrol and heavy-duty diesel engines',
                sizes: '500ML, 1L, 4L, 5L, 20L, Drum (209L)',
                specs: {},
                performance: ['ASTM D3306-05'],
                benefits: [
                    'Pre-mixed and ready to use',
                    'Provides effective protection down to -36°C',
                    'Non-foaming and prevents radiator clogging'
                ]
            },
            {
                id: 'c4',
                name: 'ANTIFREEZE COOLANT RED',
                subtitle: 'SAE J814C',
                description: 'Top Rich Tropical Coolant (5% pre-mixed, ready to use). Provides effective protection down to -18°C for tropical and moderate climates.',
                application: 'All vehicle types in tropical regions',
                sizes: '500ML, 1L, 4L, 5L, 20L, Drum (209L)',
                specs: {},
                performance: ['ASTM D3306-05'],
                benefits: [
                    'Pre-mixed and ready to use',
                    'Provides effective protection down to -18°C',
                    'Non-foaming and prevents radiator clogging'
                ]
            }
        ]
    },
    hydraulic: {
        name: 'Hydraulic Oils',
        subtitle: 'Hydraulic machinery, Excavators, Forklifts',
        description: 'Superior hydraulic fluids for industrial and mobile hydraulic systems, ensuring smooth power transmission',
        products: [
            {
                id: 'h1',
                name: 'HYDRA RICH ISO VG 32',
                subtitle: 'ISO VG 32',
                description: 'Premium anti-wear hydraulic oil formulated from high-quality base oils and advanced additive technology. Designed for excellent protection and reliable performance in hydraulic systems.',
                application: 'Industrial and mobile hydraulic systems, construction machinery, manufacturing equipment',
                sizes: '500ML, 1L, 4L, 5L, 20L, Drum (209L)',
                specs: {
                    'Viscosity at 40°C': '32 cSt',
                    'Viscosity at 100°C': '5.9 cSt',
                    'Viscosity Index': '133',
                    'Flash Point': '250°C'
                },
                performance: ['DIN 51524 Part II (HLP type)'],
                benefits: [
                    'Suitable for moderate to high pressure hydraulic systems',
                    'Excellent wear protection',
                    'Superior oxidation stability',
                    'Compatible with seals and elastomers'
                ]
            },
            {
                id: 'h2',
                name: 'HYDRA RICH ISO VG 46',
                subtitle: 'ISO VG 46',
                description: 'Premium anti-wear hydraulic oil engineered for smooth power transfer, reliable system protection, and extended equipment life in demanding hydraulic applications.',
                application: 'Demanding hydraulic applications, construction and industrial equipment',
                sizes: '500ML, 1L, 4L, 5L, 20L, Drum (209L)',
                specs: {
                    'Viscosity at 40°C': '46 cSt',
                    'Viscosity at 100°C': '7.4 cSt',
                    'Viscosity Index': '125',
                    'Flash Point': '250°C'
                },
                performance: ['DIN 51524 Part II (HLP type)'],
                benefits: [
                    'Reduces fluid friction, improving system efficiency',
                    'Advanced oxidation control allows longer service life',
                    'Maintains viscosity under high pressure and temperature',
                    'Gentle on seals and elastomers, preventing leaks'
                ]
            },
            {
                id: 'h3',
                name: 'HYDRA RICH 68',
                subtitle: 'ISO VG 68',
                description: 'Heavy-duty hydraulic oil engineered for demanding hydraulic systems operating under high loads and temperatures. Ensures long service life, reduced downtime, and reliable equipment protection.',
                application: 'Heavy-duty hydraulic systems, high-load applications',
                sizes: '500ML, 1L, 4L, 5L, 20L, Drum (209L)',
                specs: {
                    'Viscosity at 40°C': '68 cSt',
                    'Viscosity at 100°C': '9.6 cSt',
                    'Viscosity Index': '122',
                    'Flash Point': '250°C'
                },
                performance: ['DIN 51524 Part II (HLP type)'],
                benefits: [
                    'Heavy-Load Endurance with strong film strength',
                    'Thermal Resilience and stable under high temperatures',
                    'Extended life promoting longer drain intervals',
                    'Maintains viscosity under stress',
                    'Seal Protection preventing leaks'
                ]
            }
        ]
    },
    cutting: {
        name: 'Specialty Oils',
        subtitle: 'Manufacturing, Metalworking, Fabrication',
        description: 'Precision metalworking fluids for cutting, grinding, and machine operations',
        products: [
            {
                id: 'ct1',
                name: 'RICH CUTTING OIL',
                subtitle: 'Water Soluble',
                description: 'High-performance water soluble cutting fluid for metalworking operations. Hydraulic lubricating oil with high viscosity index, enhanced with additives for superior aging resistance, corrosion protection, and wear prevention.',
                application: 'Cutting, grinding, machining, metalworking operations',
                sizes: '20L',
                specs: {
                    'Viscosity at 40°C': 'N/A',
                    'Viscosity at 100°C': 'N/A',
                    'Viscosity Index': 'N/A',
                    'Flash Point': 'N/A'
                },
                performance: ['DIN 51 524-3', 'ISO 6743/4', 'HV ISO 11158', 'Denison HF0, HF1, HF2'],
                benefits: [
                    'Superior aging resistance',
                    'Excellent corrosion protection',
                    'Enhanced wear prevention',
                    'Contains zinc for additional hydraulic system protection'
                ]
            },
            {
                id: 'ct2',
                name: 'TOPRICH DOT 4 BRAKE FLUID',
                subtitle: 'DOT 4',
                description: 'Delivers reliable braking performance under all conditions. Offers protection against rust, corrosion, and vapor lock. Compatible with DOT 3 and DOT 5.1. Ideal for cars, motorcycles, and light commercial vehicles.',
                application: 'Cars, motorcycles, light commercial vehicles',
                sizes: '500ML, 1L, 4L, 5L, 20L, Drum (209L)',
                specs: {
                    type: 'Mineral Oil',
                    viscosity: '	1700 cSt',
                    use: 'Grinding',
                    price: '$35/L'
                },
                performance: ['FMVSS No. 116 DOT 4', 'SAE J1704', 'ISO 4925 Class 4'],
                benefits: ['Enhanced precision in grinding', 'Reduces wear on tools']
            }
        ]
    }
};

let currentView = 'categories';
let selectedCategory = null;

const productIcons = {
    diesel: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-truck h-8 w-8 text-[hsl(142,76%,36%)]"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>',
    petrol: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-car h-8 w-8 text-[hsl(142,76%,36%)]"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><path d="M9 17h6"></path><circle cx="17" cy="17" r="2"></circle></svg>',
    motorcycle: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bike h-8 w-8 text-[hsl(142,76%,36%)]"><circle cx="18.5" cy="17.5" r="3.5"></circle><circle cx="5.5" cy="17.5" r="3.5"></circle><circle cx="15" cy="5" r="1"></circle><path d="M12 17.5V14l-3-3 4-3 2 3h2"></path></svg>',
    gear: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cog h-8 w-8 text-[hsl(142,76%,36%)]"><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path><path d="M12 2v2"></path><path d="M12 22v-2"></path><path d="m17 20.66-1-1.73"></path><path d="M11 10.27 7 3.34"></path><path d="m20.66 17-1.73-1"></path><path d="m3.34 7 1.73 1"></path><path d="M14 12h8"></path><path d="M2 12h2"></path><path d="m20.66 7-1.73 1"></path><path d="m3.34 17 1.73-1"></path><path d="m17 3.34-1 1.73"></path><path d="m11 13.73-4 6.93"></path></svg>',
    coolant: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-droplets h-8 w-8 text-[hsl(142,76%,36%)]"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg>', 
    hydraulic: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wrench h-8 w-8 text-[hsl(142,76%,36%)]"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>',
    cutting: '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#2ec27e"><path d="M160-120q-17 0-28.5-11.5T120-160q0-17 11.5-28.5T160-200h40v-240h-40q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520h40v-240h-40q-17 0-28.5-11.5T120-800q0-17 11.5-28.5T160-840h640q17 0 28.5 11.5T840-800q0 17-11.5 28.5T800-760h-40v240h40q17 0 28.5 11.5T840-480q0 17-11.5 28.5T800-440h-40v240h40q17 0 28.5 11.5T840-160q0 17-11.5 28.5T800-120H160Zm120-80h400v-240q-17 0-28.5-11.5T640-480q0-17 11.5-28.5T680-520v-240H280v240q17 0 28.5 11.5T320-480q0 17-11.5 28.5T280-440v240Zm200-120q50 0 85-34.5t35-83.5q0-39-22.5-67T480-620q-75 86-97.5 114.5T360-438q0 49 35 83.5t85 34.5ZM280-200v-560 560Z"/></svg>', 
    brake: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cog h-8 w-8 text-[hsl(142,76%,36%)]"><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path><path d="M12 2v2"></path><path d="M12 22v-2"></path><path d="m17 20.66-1-1.73"></path><path d="M11 10.27 7 3.34"></path><path d="m20.66 17-1.73-1"></path><path d="m3.34 7 1.73 1"></path><path d="M14 12h8"></path><path d="M2 12h2"></path><path d="m20.66 7-1.73 1"></path><path d="m3.34 17 1.73-1"></path><path d="m17 3.34-1 1.73"></path><path d="m11 13.73-4 6.93"></path></svg>'
};

function renderCategories() {
    const categories = Object.entries(productsData);
    let html = '';

    categories.forEach(([key, cat]) => {
        html += `
            <div class="product-card bg-white p-4 rounded-lg border border-gray-200 text-sm flex flex-col hover:border-green-500 hover:shadow-lg transition-all duration-300 group" 
                style="cursor: pointer;" 
                data-category-id="${key}">

                <!-- Icon -->
                <div class="w-full h-10 bg-[#E5F2E5] rounded-lg flex items-center justify-start px-3 mb-3 transform transition-transform duration-300 group-hover:scale-105">
                    <span class="text-2xl">${productIcons[key] || ''}</span>
                </div>

                <!-- Text content -->
                <h3 class="text-lg font-extrabold text-gray-900 mb-1 transition-colors duration-300 group-hover:text-green-600">${cat.name}</h3>
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

    const contentDiv = document.getElementById('content');
    contentDiv.className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8';
    contentDiv.innerHTML = html;

    // make sure animation classes are applied (so cards are visible)
    document.querySelectorAll('.product-card').forEach(card => card.classList.add('animate-in'));

    document.getElementById('breadcrumb').style.display = 'none';
    currentView = 'categories';
    selectedCategory = null;
}

function viewCategory(categoryId) {
    selectedCategory = categoryId;
    currentView = 'category';
    const category = productsData[categoryId];
    let html = `
        <div class="flex items-center justify-between mb-6 flex-wrap gap-2">
            <h2 class="text-2xl sm:text-3xl font-bold text-green-700 truncate">${category.name}</h2>
            <button class="btn-back-categories text-grey-900 text-sm sm:text-base px-3 sm:px-4 py-2 border border-gray-200 rounded-lg transition hover:bg-amber-400 whitespace-nowrap">
                ← Back to Categories
            </button>
        </div>
    `;

    let productsHtml = '';
    category.products.forEach(product => {
    productsHtml += `
        <div class="product-card bg-white p-6 rounded-lg border border-gray-200 hover:border-green-500 hover:shadow-lg transition-all duration-300" 
            style="cursor:pointer; pointer-events:all;" 
            data-product-id="${product.id}">
            <h4 class="text-lg font-extrabold text-green-700 mb-2">${product.name}</h4>
            <p class="text-sm font-semibold text-amber-400 mb-2">SAE Grade: ${product.subtitle}</p>
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

    const contentDiv = document.getElementById('content');
    contentDiv.className = 'w-full';
    contentDiv.innerHTML = html + `
        <div class="flex flex-col gap-4 mb-8 w-full">
            ${productsHtml}
        </div>
    `;

    // ensure newly injected product cards become visible
    document.querySelectorAll('.product-card').forEach(card => card.classList.add('animate-in'));

    document.getElementById('breadcrumb').style.display = 'flex';
    document.getElementById('breadcrumb-text').textContent = category.name;
}

function viewProduct(categoryId, productId) {
    selectedCategory = categoryId;
    currentView = 'product';

    const category = productsData[categoryId];
    const product = category.products.find(p => p.id === productId);
    if (!product) return console.error('Product not found', categoryId, productId);

    let specsHtml = '';
    Object.entries(product.specs || {}).forEach(([key, value]) => {
        specsHtml += `
            <div class="flex flex-col">
                <span class="text-xs font-semibold text-green-600">${key.toUpperCase()}</span>
                <span class="text-sm text-gray-700">${value}</span>
            </div>
        `;
    });

    let performanceHtml = '';
    (product.performance || []).forEach(perf => {
        performanceHtml += `<li class="text-sm text-gray-600">${perf}</li>`;
    });

    let benefitsHtml = '';
    (product.benefits || []).forEach(benefit => {
        benefitsHtml += `<li class="text-sm text-gray-600">${benefit}</li>`;
    });

    const html = `
        <div class="flex items-center justify-between mb-6 flex-wrap gap-2">
            <h2 class="text-2xl sm:text-3xl font-bold text-green-700 truncate">${product.name}</h2>
            <button class="btn-back-category text-grey-900 text-sm sm:text-base px-3 sm:px-4 py-2 border border-gray-200 rounded-lg transition hover:bg-amber-400 whitespace-nowrap">
                ← Back to ${category.name}
            </button>
        </div>
        <div class="bg-white p-8 rounded-lg border border-gray-200">
            <div class="flex flex-col sm:flex-row justify-between gap-8 mb-8">
                <div class="flex-1">
                    <p class="text-xl text-gray-600 uppercase mb-1">SAE <span class="text-xl text-amber-500">${product.subtitle}</span></p>
                </div>
                <div class="flex-1">
                    <p class="text-xs text-gray-600 uppercase mb-1">Available Sizes</p>
                    <p class="text-sm font-semibold text-gray-900">${product.sizes || 'N/A'}</p>
                </div>
            </div>
            <div class="mb-8">
                <h3 class="text-base font-bold text-gray-900 mb-4">Description & Application</h3>
                <p class="text-gray-700 text-sm leading-relaxed mb-3">${product.description}</p>
                <p class="text-sm text-gray-700"><span class="font-semibold">Application:</span> ${product.application || 'N/A'}</p>
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
                            ${Object.entries(product.specs || {}).map(([key, value]) => `
                                <tr class="border-b border-gray-200">
                                    <td class="py-3 text-sm text-gray-700">${key}</td>
                                    <td class="py-3 text-sm text-gray-900">${value}</td>
                                </tr>
                            `).join('') || '<tr><td colspan="2" class="py-3 text-sm text-gray-600">No specifications available</td></tr>'}
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="mb-6">
                <h3 class="text-base font-bold text-gray-900 mb-3">Performance Levels</h3>
                <ul class="space-y-2">
                    ${(product.performance || []).map(perf => `
                        <li class="text-sm text-gray-700 flex items-start">
                            <span class="mr-2">•</span>
                            <span>${perf}</span>
                        </li>
                    `).join('') || '<li class="text-sm text-gray-600">No performance levels specified</li>'}
                </ul>
            </div>
            <div>
                <h3 class="text-base font-bold text-gray-900 mb-3">Benefits</h3>
                <ul class="space-y-2">
                    ${(product.benefits || []).map(benefit => `
                        <li class="text-sm text-gray-700 flex items-start">
                            <span class="mr-2">•</span>
                            <span>${benefit}</span>
                        </li>
                    `).join('') || '<li class="text-sm text-gray-600">No benefits specified</li>'}
                </ul>
            </div>
        </div>
    `;


    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = html;

    // Ensure content is visible
    contentDiv.classList.add('animate-in');

    document.getElementById('breadcrumb').style.display = 'flex';
    document.getElementById('breadcrumb-text').textContent = product.name;
}

function goToCategories() {
    renderCategories();
    currentView = 'categories';
    selectedCategory = null;

    const contentDiv = document.getElementById('content');
    if (contentDiv) contentDiv.classList.remove('hidden');

    const breadcrumb = document.getElementById('breadcrumb');
    if (breadcrumb) breadcrumb.style.display = 'none';
}

// EVENT DELEGATION - Single listener for all content interactions
document.getElementById('content').addEventListener('click', (e) => {
    const categoryCard = e.target.closest('[data-category-id]');
    const productCard = e.target.closest('[data-product-id]');
    const backBtn = e.target.closest('.btn-back-categories');
    const backCatBtn = e.target.closest('.btn-back-category');

    if (categoryCard) {
        e.stopPropagation();
        viewCategory(categoryCard.dataset.categoryId);
    } else if (productCard && currentView === 'category') {
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
