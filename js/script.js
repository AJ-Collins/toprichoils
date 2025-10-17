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
        name: 'Cutting Oils',
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
    }
};

let currentView = 'categories';
let selectedCategory = null;

const productIcons = {
    diesel: `<svg class="w-6 h-6 fill-[#008000]" viewBox="0 0 512.076 512.076" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <g>
                                    <path d="M362.938,0.076c-7.7-0.7-13.8,3.5-17.8,9.3c-4,5.9-4.8,13.3-2.2,19.9l42.7,106.7c3.3,8.1,11.1,13.4,19.8,13.4h21.3v192
                                        c0,23.5-19.1,42.7-42.7,42.7c-23.5,0-42.7-19.1-42.7-42.7v-149.3c0-39.6-27.3-72.8-64-82.3v-88.4c0.1-11.7-9.4-21.3-21.2-21.3
                                        h-213.3c-11.8,0-21.4,9.6-21.4,21.3v384c-11.7,0-21.3,9.6-21.3,21.4v64c0,11.7,9.6,21.3,21.3,21.3h256c11.8,0,21.3-9.6,21.3-21.3
                                        v-64c0-11.8-9.6-21.3-21.3-21.3v-250.1c12.7,7.4,21.3,21,21.3,36.7v149.3c0,47.1,38.3,85.3,85.3,85.3s85.3-38.3,85.3-85.3v-192
                                        h21.3c11.8,0,21.3-9.6,21.3-21.3C512.138,84.076,480.938,0.676,362.938,0.076z M106.738,64.076h85.4c11.8,0,21.3,9.6,21.3,21.3
                                        v85.3c0,11.8-9.6,21.3-21.3,21.3h-85.3c-11.8,0-21.3-9.6-21.3-21.3v-85.3h-0.1C85.438,73.576,95.038,64.076,106.738,64.076z
                                        M192.138,256.076c0,11.8-9.6,21.3-21.3,21.3h-42.7c-11.8,0-21.3-9.6-21.3-21.3c0-11.7,9.6-21.3,21.3-21.3h42.7
                                        C182.538,234.776,192.138,244.276,192.138,256.076z M256.138,469.376h-213.3v-21.3h213.3V469.376z"/>
                                </g>
                            </g>
                        </svg>`,
    petrol: `<svg class="w-6 h-6 fill-[#008000]" viewBox="0 0 512.076 512.076" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <g>
                                    <path d="M362.938,0.076c-7.7-0.7-13.8,3.5-17.8,9.3c-4,5.9-4.8,13.3-2.2,19.9l42.7,106.7c3.3,8.1,11.1,13.4,19.8,13.4h21.3v192
                                        c0,23.5-19.1,42.7-42.7,42.7c-23.5,0-42.7-19.1-42.7-42.7v-149.3c0-39.6-27.3-72.8-64-82.3v-88.4c0.1-11.7-9.4-21.3-21.2-21.3
                                        h-213.3c-11.8,0-21.4,9.6-21.4,21.3v384c-11.7,0-21.3,9.6-21.3,21.4v64c0,11.7,9.6,21.3,21.3,21.3h256c11.8,0,21.3-9.6,21.3-21.3
                                        v-64c0-11.8-9.6-21.3-21.3-21.3v-250.1c12.7,7.4,21.3,21,21.3,36.7v149.3c0,47.1,38.3,85.3,85.3,85.3s85.3-38.3,85.3-85.3v-192
                                        h21.3c11.8,0,21.3-9.6,21.3-21.3C512.138,84.076,480.938,0.676,362.938,0.076z M106.738,64.076h85.4c11.8,0,21.3,9.6,21.3,21.3
                                        v85.3c0,11.8-9.6,21.3-21.3,21.3h-85.3c-11.8,0-21.3-9.6-21.3-21.3v-85.3h-0.1C85.438,73.576,95.038,64.076,106.738,64.076z
                                        M192.138,256.076c0,11.8-9.6,21.3-21.3,21.3h-42.7c-11.8,0-21.3-9.6-21.3-21.3c0-11.7,9.6-21.3,21.3-21.3h42.7
                                        C182.538,234.776,192.138,244.276,192.138,256.076z M256.138,469.376h-213.3v-21.3h213.3V469.376z"/>
                                </g>
                            </g>
                        </svg>`,
    motorcycle: `<svg class="w-8 h-8 fill-[#008000]" viewBox="0 0 467.168 467.168" fill="currentColor">
                            <path d="M76.849,210.531C34.406,210.531,0,244.937,0,287.388c0,42.438,34.406,76.847,76.849,76.847
                            c30.989,0,57.635-18.387,69.789-44.819l18.258,14.078c0,0,134.168,0.958,141.538-3.206c0,0-16.65-45.469,4.484-64.688
                            c2.225-2.024,5.021-4.332,8.096-6.777c-3.543,8.829-5.534,18.45-5.534,28.558c0,42.446,34.403,76.846,76.846,76.846
                            c42.443,0,76.843-34.415,76.843-76.846c0-42.451-34.408-76.849-76.843-76.849c-0.697,0-1.362,0.088-2.056,0.102
                            c5.551-3.603,9.093-5.865,9.093-5.865l-5.763-5.127c0,0,16.651-3.837,12.816-12.167c-3.848-8.33-44.19-58.28-44.19-58.28
                            s7.146-15.373-7.634-26.261l-7.098,15.371c0,0-18.093-12.489-25.295-10.084c-7.205,2.398-18.005,3.603-21.379,8.884l-3.358,3.124
                            c0,0-0.95,5.528,4.561,13.693c0,0,55.482,17.05,58.119,29.537c0,0,3.848,7.933-12.728,9.844l-3.354,4.328l-8.896,0.479
                            l-16.082-36.748c0,0-15.381,4.082-23.299,10.323l1.201,6.24c0,0-64.599-43.943-125.362,21.137c0,0-44.909,12.966-76.37-26.897
                            c0,0-0.479-12.968-76.367-10.565l5.286,5.524c0,0-5.286,0.479-7.444,3.841c-2.158,3.358,1.2,6.961,18.494,6.961
                            c0,0,39.153,44.668,69.17,42.032l42.743,20.656l18.975,32.42c0,0,0.034,2.785,0.23,7.045c-4.404,0.938-9.341,1.979-14.579,3.09
                            C139.605,232.602,110.832,210.531,76.849,210.531z M390.325,234.081c29.395,0,53.299,23.912,53.299,53.299
                            c0,29.39-23.912,53.294-53.299,53.294c-29.394,0-53.294-23.912-53.294-53.294C337.031,257.993,360.932,234.081,390.325,234.081z
                            M76.849,340.683c-29.387,0-53.299-23.913-53.299-53.295c0-29.395,23.912-53.299,53.299-53.299
                            c22.592,0,41.896,14.154,49.636,34.039c-28.26,6.011-56.31,11.99-56.31,11.99l3.619,19.933l55.339-2.444
                            C124.365,322.116,102.745,340.683,76.849,340.683z M169.152,295.835c1.571,5.334,3.619,9.574,6.312,11.394l-24.696,0.966
                            c1.058-3.783,1.857-7.666,2.338-11.662L169.152,295.835z"/>
                        </svg>`,
    gear: `<svg class="w-6 h-6 fill-[#008000]" viewBox="0 0 191.851 191.851" fill="currentColor">
                        <g>
                            <path d="M188.103,147.322c-3.583-2.072-8.173-0.849-10.247,2.739c-4.734,8.189-13.54,13.275-22.979,13.275
                                c-9.442,0-18.249-5.087-22.983-13.275c-1.341-2.318-3.816-3.746-6.494-3.746c-2.678,0-5.153,1.429-6.493,3.748
                                c-4.73,8.188-13.535,13.273-22.976,13.273c-9.439,0-18.246-5.088-22.985-13.277c-1.341-2.317-3.818-3.744-6.495-3.744
                                c-2.678,0-5.152,1.428-6.493,3.746c-4.735,8.189-13.54,13.275-22.98,13.275c-9.442,0-18.249-5.087-22.984-13.275
                                c-2.073-3.587-6.662-4.809-10.247-2.739c-3.586,2.074-4.812,6.661-2.738,10.247c7.407,12.809,21.189,20.768,35.969,20.768
                                c11.168,0,21.767-4.545,29.476-12.295c7.711,7.75,18.31,12.295,29.477,12.295c11.168,0,21.765-4.543,29.471-12.291
                                c7.709,7.747,18.308,12.291,29.476,12.291c14.777,0,28.559-7.958,35.966-20.768C192.916,153.983,191.689,149.396,188.103,147.322z"/>
                            <path d="M131.893,115.35c-2.073-3.588-6.664-4.813-10.247-2.739c-3.586,2.073-4.813,6.661-2.739,10.247
                                c7.406,12.81,21.19,20.768,35.97,20.768c14.778,0,28.559-7.958,35.966-20.768c2.073-3.586,0.847-8.174-2.739-10.247
                                c-3.586-2.073-8.174-0.847-10.247,2.739c-4.734,8.188-13.539,13.275-22.979,13.275C145.434,128.626,136.628,123.539,131.893,115.35z"/>
                            <path d="M36.979,143.626c14.777,0,28.559-7.957,35.967-20.767c2.074-3.586,0.848-8.174-2.737-10.247
                                c-3.585-2.072-8.174-0.849-10.247,2.737c-4.736,8.189-13.543,13.276-22.982,13.276c-9.442,0-18.249-5.087-22.984-13.275
                                c-2.074-3.587-6.661-4.813-10.247-2.739c-3.586,2.073-4.812,6.661-2.739,10.247C8.416,135.668,22.198,143.626,36.979,143.626z"/>
                            <path d="M96.098,155.021c10.988,0,19.894-8.907,19.894-19.896c0-8.332-5.127-15.458-12.395-18.421v-15.58h25.475
                                c4.143,0,7.5-3.357,7.5-7.5c0-4.143-3.357-7.5-7.5-7.5h-25.475V73.357h25.475c4.143,0,7.5-3.357,7.5-7.5c0-4.143-3.357-7.5-7.5-7.5
                                h-25.475V45.588h25.475c4.143,0,7.5-3.357,7.5-7.5s-3.357-7.5-7.5-7.5h-25.475v-9.574c0-4.143-3.357-7.5-7.499-7.5
                                s-7.5,3.357-7.5,7.5v95.69c-7.269,2.963-12.396,10.089-12.396,18.421C76.201,146.114,85.11,155.021,96.098,155.021z"/>
                        </g>
                    </svg>`,
    coolant: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
    d="M12 2.69l5.66 5.66a7 7 0 11-11.32 0L12 2.69z" />
</svg>
`,
    hydraulic: `<svg class="w-6 h-6 fill-[#008000] transform scale-x-[-1]" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.5 20.988c1.934 0 3.5 2.016 3.5 4.5 0 2.486-1.566 4.5-3.5 4.5s-3.5-2.014-3.5-4.5c0-1.498 0.576-2.816 1.452-3.635l-3.452-4.955-3.453 4.955c0.877 0.819 1.453 2.137 1.453 3.635 0 2.486-1.567 4.5-3.5 4.5s-3.5-2.014-3.5-4.5c0-2.484 1.567-4.5 3.5-4.5 0.199 0 0.392 0.035 0.582 0.076l3.475-6.238-3.631-5.212c-2.961-5.129-0.62-7.604-0.62-7.604l5.694 10.225 5.694-10.224c0 0 2.341 2.475-0.62 7.604l-3.631 5.212 3.475 6.238c0.189-0.042 0.383-0.077 0.582-0.077zM10.5 22.969c-1.104 0-2 1.119-2 2.5s0.896 2.5 2 2.5 2-1.119 2-2.5-0.896-2.5-2-2.5zM16 14.073c-0.552 0-1 0.447-1 1 0 0.552 0.448 1 1 1 0.553 0 1-0.448 1-1 0-0.553-0.447-1-1-1zM19.5 25.469c0 1.381 0.896 2.5 2 2.5s2-1.119 2-2.5-0.896-2.5-2-2.5-2 1.119-2 2.5z"/>
        </svg>`,
    cutting: `<svg class="w-6 h-6 fill-[#008000]" fill="currentColor" viewBox="0 0 512.009 512.009" xmlns="http://www.w3.org/2000/svg">
            <g>
                <g>
                    <g>
                        <path d="M277.337,256.007c11.776,0,21.333-9.557,21.333-21.333s-9.557-21.333-21.333-21.333s-21.333,9.557-21.333,21.333
                            S265.561,256.007,277.337,256.007z"/>
                        <path d="M277.337,298.674c-11.776,0-21.333,9.557-21.333,21.333s9.557,21.333,21.333,21.333s21.333-9.557,21.333-21.333
                            S289.113,298.674,277.337,298.674z"/>
                        <path d="M277.337,149.34c-70.683,0-128,57.317-128,128s57.317,128,128,128s128-57.317,128-128S348.02,149.34,277.337,149.34z
                             M277.337,362.674c-47.119,0-85.333-38.214-85.333-85.333s38.214-85.333,85.333-85.333s85.333,38.214,85.333,85.333
                            S324.456,362.674,277.337,362.674z"/>
                        <path d="M307.08,44.344V33.679c0-19.406-16.295-34.56-35.517-33.64C124.746,7.211,7.202,124.762,0.054,271.554
                            c-0.98,19.189,14.2,35.512,33.617,35.512h10.664c14.711,115.872,113.645,204.943,232.869,204.943
                            c129.674,0,234.795-105.128,234.795-234.816C511.999,157.967,422.95,59.046,307.08,44.344z M264.405,43.281v42.914
                            c-5.207,0.546-10.35,1.299-15.427,2.23c-60.921,11.163-111.992,49.574-140.217,102.267
                            c-11.965,22.334-19.826,47.232-22.597,73.707H43.296C53.479,146.906,146.943,53.453,264.405,43.281z M277.205,469.342
                            c-95.683,0-175.418-70.121-189.795-162.261h7.075c12.207,0,23.097-6.537,28.984-16.465c2.605-4.383,4.237-9.426,4.564-14.865
                            c1.85-30.291,12.134-58.188,28.543-81.408c22.705-32.124,57.14-55.289,97.251-63.412c7.144-1.445,14.467-2.413,21.935-2.87
                            c4.989-0.3,9.65-1.697,13.773-3.941c0.072-0.039,0.141-0.082,0.212-0.122c0.383-0.212,0.764-0.427,1.137-0.654
                            c0.252-0.153,0.497-0.317,0.745-0.476c0.188-0.121,0.38-0.237,0.565-0.361c0.316-0.212,0.623-0.435,0.931-0.658
                            c0.111-0.081,0.227-0.156,0.337-0.238c0.316-0.235,0.623-0.48,0.93-0.725c0.097-0.077,0.197-0.15,0.293-0.229
                            c0.258-0.211,0.506-0.431,0.757-0.649c0.139-0.121,0.283-0.237,0.42-0.36c0.147-0.132,0.286-0.27,0.43-0.405
                            c6.661-6.195,10.787-15.058,10.787-24.742v-7.085c92.143,14.361,162.253,94.086,162.253,189.778
                            C469.333,383.317,383.314,469.342,277.205,469.342z"/>
                        <path d="M234.67,256.007c-11.776,0-21.333,9.557-21.333,21.333s9.557,21.333,21.333,21.333s21.333-9.557,21.333-21.333
                            S246.446,256.007,234.67,256.007z"/>
                        <path d="M320.004,256.007c-11.776,0-21.333,9.557-21.333,21.333s9.557,21.333,21.333,21.333s21.333-9.557,21.333-21.333
                            S331.78,256.007,320.004,256.007z"/>
                    </g>
                </g>
            </g>
        </svg>`,
    brake: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
    d="M12 3v6m0 6v6m-6-6h12M6 9h12M9 21h6" />
</svg>
`
};

function renderCategories() {
    const categories = Object.entries(productsData);
    let html = '';

    categories.forEach(([key, cat]) => {
        html += `
            <div class="product-card bg-white p-4 rounded-lg border border-gray-200 text-sm flex flex-col hover:border-green-500 hover:shadow-lg transition-all duration-300 group" style="cursor: pointer;" data-category-id="${key}">
                <div class="w-full h-10 bg-[#E5F2E5] rounded-lg flex items-center justify-start px-3 mb-3 transform transition-transform duration-300 group-hover:scale-105">
                    <span class="text-2xl">${productIcons[key] || ''}</span>
                </div>
                <h3 class="text-lg font-extrabold text-gray-900 mb-1 transition-colors duration-300 group-hover:text-green-600">${cat.name}</h3>
                <p class="text-gray-600 font-bold mb-1">${cat.subtitle}</p>
                <p class="text-xs text-gray-500 mb-2">${cat.description}</p>
                <p class="text-gray-600 font-bold text-sm mt-auto">${cat.products.length} products available</p>
            </div>
        `;
    });

    const contentDiv = document.getElementById('content');
    contentDiv.className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8';
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
                    <p class="text-xl text-gray-600 uppercase mb-1">SAE Grade</p>
                    <p class="text-sm font-semibold text-amber-500">${product.subtitle}</p>
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