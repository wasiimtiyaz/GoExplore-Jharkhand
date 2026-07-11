// Get Selected Data
const selectedCity = localStorage.getItem("selectedCity");
const selectedCategory = localStorage.getItem("selectedCategory");

// Tourist Database
const tourismData = {
    Ranchi: {
        Restaurants: [
            {
                name: "Kaveri Restaurant",
                description: "Popular South Indian restaurant known for its authentic flavors and traditional recipes",
                image: "assets/images/ranchi/kaveri-ranchi.jpg",
            },
            {
                name: "Yellow Sapphire",
                description: "Multi cuisine restaurant with a vibrant ambiance and diverse menu",
                image: "assets/images/ranchi/yellowsappire-ranchi.jpg",
            },
            {
                name: "Anardana Restaurant",
                description: "Known for its authentic flavors and traditional recipes with great ambiance",
                image: "assets/images/ranchi/anardana-ranchi.jpg",
            },
            {
                name: "Dusk Restaurant",
                description: "Offers a delightful dining experience with a diverse menu and a cozy ambiance",
                image: "assets/images/ranchi/dusk-ranchi.jpg",
            }
        ],
        Hotels: [
            {
                name: "Radisson Blu Ranchi",
                description: "Luxerious hotel with modern amenities| 5 star hotel",
                image: "assets/images/ranchi/RadissonBlu-Ranchi.jpg",
            },
            {
                name: "Capitol Hill",
                description: "Premium city hotel",
                image: "assets/images/ranchi/capitolhill-ranchi.jpg",
            },
            {
                name: "Bloom Hotel",
                description: "Offers comfortable accommodations and amenities for travelers",
                image: "assets/images/ranchi/bloomhotel-ranchi.jpg",
            },
            {
                name: "Ramada by Wyndham",
                description: "luxury hotel with modern amenities",
                image: "assets/images/ranchi/ramadahotel-ranchi.jpg",
            }
        ],
        Hospitals: [
            {
                name: "Orchid Hospital",
                description: "Premium Multi-speciality hospital",
                image: "assets/images/ranchi/OrchidHospital-ranchi.jpg",
            },
            {
                name: "Medanta Hospital",
                description: "Multi-speciality healthcare",
                image: "assets/images/ranchi/medanta-ranchi.jpg",
            },
            {
                name: "Raj Hospital",
                description: "General healthcare services",
                image: "assets/images/ranchi/rajhospital-ranchi.jpg",
            },
            {
                name: "Paras HEC Hospital",
                description: "Advanced medical care and treatment",
                image: "assets/images/ranchi/ParasHEC-ranchi.jpg",
            }
        ],
        Schools: [
            {
                name: "Delhi Public School",
                description: "Prestigious educational institution",
                image: "assets/images/Ranchi/DelhiPulicSchool-Ranchi.jpg",
            },
            {
                name: "Oxford Public School",
                description: "Renowned school with a strong academic reputation",
                image: "assets/images/Ranchi/OxfordPublicSchool-Ranchi.jpg",
            },
            {
                name: "DAV Public School",
                description: "Well-established school with a focus on holistic education",
                image: "assets/images/Ranchi/DAVPublicSchool-Ranchi.jpg",
            },
            {
                name: "St. Thomas School",
                description: "Reputed school known for its academic excellence",
                image: "assets/images/Ranchi/St.ThomasSchool-Ranchi.jpg",
            }
        ],
        Colleges: [
            {
                name: "St. Xavier's College",
                description: "Renowned college offering a wide range of courses",
                image: "assets/images/Ranchi/St.Xavier'sCollege-Ranchi.jpg",
            },
            {
                name: "Marwari College",
                description: "Well-known college with a strong academic reputation",
                image: "assets/images/Ranchi/MarwariCollege-Ranchi.jpg",
            },
            {
                name: "Chota Nagpur Law College",
                description: "Established college with a focus on quality education",
                image: "assets/images/Ranchi/ChotaNagpurCollege-Ranchi.jpg",
            },
            {
                name: "Gossner College",
                description: "Reputed college known for its academic excellence",
                image: "assets/images/Ranchi/GossnerCollege-Ranchi.jpg",
            }
        ],
        Universities: [
            {
                name: "Central University of Jharkhand",
                description: "Premier university offering diverse academic programs",
                image: "assets/images/ranchi/CentralUniversity-Ranchi.jpg",
            },
            {
                name: "Ranchi University",
                description: "Well-established university with a strong academic reputation",
                image: "assets/images/ranchi/RanchiUniversity-ranchi.jpg",
            },
            {
                name: "YBN University",
                description: "Renowned university specializing in agricultural education and research",
                image: "assets/images/ranchi/YBNUniversity-ranchi.jpg",
            },
            {
                name: "Jharkhand Rai University",
                description: "Reputed university known for its academic excellence",
                image: "assets/images/ranchi/RaiUniversity-ranchi.jpg",
            }
        ],
        Banks: [
            {
                name: "Kotak Mahindra Bank",
                description: "Leading private sector bank",
                image: "assets/images/Ranchi/KotakBank-Ranchi.jpg",
            },
            {
                name: "State Bank of India",
                description: "Largest public sector bank",
                image: "assets/images/Ranchi/SBI-Ranchi.jpg",
            },
            {
                name: "UCO Bank",
                description: "Established bank with a strong presence",
                image: "assets/images/Ranchi/UCOBank-Ranchi.jpg",
            },
            {
                name: "HDFC Bank",
                description: "Leading private sector bank",
                image: "assets/images/Ranchi/HDFCBank-Ranchi.jpg",
            }
        ],
        ATMs: [
            {
                name: "HDFC Bank ATM",
                description: "Convenient ATM for cash withdrawals and banking services",
                image: "assets/images/Ranchi/HDFCATM-Ranchi.jpg",
            },
            {
                name: "Axis Bank ATM",
                description: "Reliable ATM for cash withdrawals and banking services",
                image: "assets/images/Ranchi/AxisATM-Ranchi.jpg",
            },
            {
                name: "Hitachi ATM",
                description: "Accessible ATM for cash withdrawals and banking services",
                image: "assets/images/Ranchi/HitachiATM-Ranchi.jpg",
            },
            {
                name: "State Bank of India ATM",
                description: "Convenient ATM for cash withdrawals and banking services",
                image: "assets/images/Ranchi/SBIATM-Ranchi.jpg",
            }
        ],
        Parks: [
            {
                name: "Oxygen Park",
                description: "Popular recreational park",
                image: "assets/images/ranchi/OxygenPark-Ranchi.jpg",
            },
            {
                name: "WildWadi Flower Park",
                description: "Scenic park with beautiful views",
                image: "assets/images/ranchi/WildWadiFlowerPark-Ranchi.jpg",
            },
            {
                name: "Biodiversity Park",
                description: "Unique garden with artistic rock formations",
                image: "assets/images/ranchi/BiodiversityPark-Ranchi.jpg",
            },
            {
                name: "Rock Garden",
                description: "Serene park surrounding Kanke Dam",
                image: "assets/images/ranchi/RockGarden-Ranchi.jpg",
            }
        ],
        "Railway Station": [
            {
                name: "Ranchi Junction",
                description: "Major railway station connecting to various cities",
                image: "assets/images/ranchi/RailwayStation-ranchi.jpg",
            },
            {
                name: "Hatia Railway Station",
                description: "Important railway station serving the city",
                image: "assets/images/ranchi/Hatia-ranchi.jpg",
            }
        ],
        "Bus Stand": [
            {
                name: "Ranchi Bus Stand",
                description: "Main interstate and local bus terminal of Ranchi",
                image: "assets/images/ranchi/BusStand-ranchi.jpg",
            }
        ],
        "Tourist Places": [
            {
                name: "Rock Garden",
                description: "Popular tourist attraction",
                image: "assets/images/ranchi/rockgarden-ranchi.jpg",
            },
            {
                name: "Tagore Hill",
                description: "Historic hilltop destination",
                image: "assets/images/ranchi/TagoreHill-ranchi.jpg",
            },
            {
                name: "Hundru Falls",
                description: "Scenic waterfall and popular tourist spot",
                image: "assets/images/ranchi/HundruFall-ranchi.jpg",
            },
            {
                name: "Jonha Falls",
                description: "Beautiful waterfall surrounded by lush greenery",
                image: "assets/images/ranchi/JonhaFalls-ranchi.jpg",
            }
        ]
    },
    Jamshedpur: {
        Restaurants: [
            {
                name: "Banjara Restaurant",
                description: "Authentic Indian cuisine with a focus on traditional flavors",
                image: "assets/images/Jamshedpur/banjara-Jsr.jpg",
            },
            {
                name: "Equinox Restaurant",
                description: "Multi cuisine restaurant with a vibrant ambiance and diverse menu",
                image: "assets/images/Jamshedpur/Equinox-Jsr.jpg",
            },
            {
                name: "Novelty Restaurant",
                description: "Known for its authentic flavors and traditional recipes with great ambiance",
                image: "assets/images/Jamshedpur/Novelty-Jsr.jpg",
            },
            {
                name: "Little Italy Restaurant",
                description: "Authentic Italian cuisine in a cozy setting",
                image: "assets/images/Jamshedpur/LittleItaly-Jsr.jpg",
            }
        ],
        Hotels: [
            {
                name: "The Sonnet Hotel",
                description: "Business class hotel with modern amenities",
                image: "assets/images/Jamshedpur/TheSonnet-Jsr.jpg",
            },
            {
                name: "The Alcor Hotel",
                description: "Premium city hotel with a focus on comfort and hospitality",
                image: "assets/images/Jamshedpur/TheAlcor-Jsr.jpg",
            },
            {
                name: "Jiva Hotel",
                description: "Comfortable stay with good facilities",
                image: "assets/images/Jamshedpur/Jiva-Jsr.jpg",
            },
            {
                name: "Ramada by Wyndham",
                description: "Modern hotel with excellent amenities",
                image: "assets/images/Jamshedpur/Ramada-Jsr.jpg",
            }
        ],
        Hospitals: [
            {
                name: "Tata Main Hospital",
                description: "Best multi-speciality hospital in Jamshedpur",
                image: "assets/images/Jamshedpur/TMH-Jsr.jpg",
            },
            {
                name: "Meditrina Hospital",
                description: "Well-equipped hospital with modern facilities",
                image: "assets/images/Jamshedpur/MeditrinaHospital-Jsr.jpg",
            },
            {
                name: "Uma Super Specialty Hospital",
                description: "Comprehensive healthcare services with a focus on patient care",
                image: "assets/images/Jamshedpur/UmaHospital-Jsr.jpg",
            },
            {
                name: "Bramananda Hospital",
                description: "Established hospital with a strong reputation for quality healthcare",
                image: "assets/images/Jamshedpur/BramanandaHospital-Jsr.jpg",
            }
        ],
        Schools: [
            {
                name: "Carmel School",
                description: "Renowned school with a strong academic reputation",
                image: "assets/images/Jamshedpur/CarmelSchool-Jsr.jpg"
            },
            {
                name: "Hill Top School",
                description: "Well-established school with a good academic record",
                image: "assets/images/Jamshedpur/HillTopSchool-Jsr.jpg"
            },
            {
                name: "Loyola School",
                description: "Established school with a strong academic tradition",
                image: "assets/images/Jamshedpur/LoyolaSchool-Jsr.jpg"
            },
            {
                name: "JH Tarapore School",
                description: "Established school with a strong academic tradition",
                image: "assets/images/Jamshedpur/JHTarapore-Jsr.jpg"
            }
        ],
        Colleges: [
            {
                name: "Karim City College",
                description: "Renowned college offering a wide range of courses",
                image: "assets/images/Jamshedpur/KarimCityClg-Jsr.jpg",
            },
            {
                name: "Jamshedpur Co-operative College",
                description: "Well-known college with a strong academic reputation",
                image: "assets/images/Jamshedpur/JsrCo-OperativeClg-Jsr.jpg",
            },
            {
                name: "Mrs. KMPM Vocational College",
                description: "Established college with a focus on vocational education",
                image: "assets/images/Jamshedpur/Mrs.KMPM-Jsr.jpg",
            },
            {
                name: "Xavier's School of Management",
                description: "Well-established College with a strong academic tradition",
                image: "assets/images/Jamshedpur/Xavier'sManagement-Jsr.jpg",
            }
        ],
        Universities: [
            {
                name: "National Institute of Technology Jamshedpur",
                description: "Premier engineering institution offering diverse academic programs",
                image: "assets/images/Jamshedpur/NIT-Jsr.jpg",
            },
            {
                name: "Jamshedpur Women's University",
                description: "Well-established university with a strong academic tradition",
                image: "assets/images/Jamshedpur/JsrWomen'sUniversity-Jsr.jpg",
            },
            {
                name: "Arka Jain University",
                description: "Renowned university offering a wide range of courses and research opportunities",
                image: "assets/images/Jamshedpur/ArkaJainUniversity-Jsr.jpg",
            }
        ],
        Banks: [
            {
                name: "State Bank of India",
                description: "Leading public sector bank",
                image: "assets/images/Jamshedpur/SBIBank-Jsr.jpg",
            },
            {
                name: "Punjab National Bank",
                description: "Leading private sector bank",
                image: "assets/images/Jamshedpur/Pnb-Jsr.jpg",
            },
            {
                name: "Axis Bank",
                description: "Leading private sector bank",
                image: "assets/images/Jamshedpur/AxisBank-Jsr.jpg",
            },
            {
                name: "DCB Bank",
                description: "Established private sector bank",
                image: "assets/images/Jamshedpur/DCBBank-Jsr.jpg",
            }
        ],
        ATMs: [
            {
                name: "Axis Bank ATM",
                description: "Convenient ATM for cash withdrawals and banking services",
                image: "assets/images/Jamshedpur/AxisATM-Jsr.jpg",
            },
            {
                name: "State Bank of India ATM",
                description: "Reliable ATM for cash withdrawals and banking services",
                image: "assets/images/Jamshedpur/SBIATM-Jsr.jpg",
            },
            {
                name: "HDFC Bank ATM",
                description: "Accessible ATM for cash withdrawals and banking services",
                image: "assets/images/Jamshedpur/HdfcAtm-Jsr.jpg",
            },
            {
                name: "Bank of India ATM",
                description: "Convenient ATM for cash withdrawals and banking services",
                image: "assets/images/Jamshedpur/BoiATM-Jsr.jpg",
            },
        ],
        Parks: [
            {
                name: "Jubilee Park",
                description: "Famous park with beautiful gardens, a lake, and recreational facilities",
                image: "assets/images/Jamshedpur/JubileePark-Jsr.jpg",
            },
            {
                name: "Sir Dorabji Tata Park",
                description: "Scenic park with lush greenery and a peaceful atmosphere",
                image: "assets/images/Jamshedpur/SirDorabji-Jsr.jpg",
            },
            {
                name: "Bhatia Park",
                description: "Well-maintained park with walking paths and recreational areas",
                image: "assets/images/Jamshedpur/BhatiaPark-Jsr.jpg",
            },
            {
                name: "Zoological Park",
                description: "Popular zoo with a variety of animal species and educational programs",
                image: "assets/images/Jamshedpur/ZoologicalPark-Jsr.jpg",
            }
        ],
        "Railway Station": [
            {
                name: "Tata Nagar Railway Station",
                description: "Major railway station connecting to various cities and states",
                image: "assets/images/Jamshedpur/RailwayStation-Jsr.jpg",
            }
        ],
        "Bus Stand": [
            {
                name: "Jamshedpur Bus Stand",
                description: "Major bus terminal connecting nearby cities and states",
                image: "assets/images/Jamshedpur/BusStand-Hamshedpur.jpg"
            }
        ],
        "Tourist Places": [
            {
                name: "Jubilee Park",
                description: "Famous park with beautiful gardens, a lake, and recreational facilities",
                image: "assets/images/Jamshedpur/JubileePark-Jsr.jpg",
            },
            {
                name: "Dimna Lake",
                description: "Scenic lake surrounded by hills, offering boating and picnic spots",
                image: "assets/images/Jamshedpur/DimnaLake-Jsr.jpg",
            },
            {
                name: "Bhuneshwari Temple",
                description: "Ancient temple dedicated to Goddess Bhuneshwari, known for its architectural beauty",
                image: "assets/images/Jamshedpur/BhuneshwariTemple-Jsr.jpg",
            },
            {
                name: "Dalma Wildlife Sanctuary",
                description: "Protected area with diverse flora and fauna, ideal for nature enthusiasts and wildlife lovers",
                image: "assets/images/Jamshedpur/DalmaSanctuary-Jsr.jpg",
            }
        ]
    },
    Dhanbad: {
        Restaurants: [
            {
                name: "Chulla Chowka Restaurant",
                description: "Popular restaurant known for its delicious local cuisine and vibrant ambiance",
                image: "assets/images/dhanbad/ChullaChowka-Dhn.jpg",
            },
            {
                name: "D3 Kitchen & Bar",
                description: "Trendy restaurant offering a fusion of flavors and a lively atmosphere",
                image: "assets/images/dhanbad/D3Kitchen&Bar-Dhn.jpg",
            },
            {
                name: "Skylit Restro Bar Dhanbad",
                description: "Charming restaurant with a relaxed atmosphere and delicious cuisine",
                image: "assets/images/dhanbad/SkylitRestroBar-Dhn.jpg",
            },
            {
                name: "Vibes Rooftop Restro and Bar",
                description: "Rooftop restaurant offering panoramic views and a diverse menu",
                image: "assets/images/dhanbad/VibesRooftopRestro-Dhn.jpg",
            }
        ],
        Hotels: [
            {
                name: "Cocoon Hotel",
                description: "Luxerious hotel with modern amenities and comfortable accommodations",
                image: "assets/images/dhanbad/Cocoon-Dhn.png",
            },
            {
                name: "Hotel Coal Capital",
                description: "Premium city hotel with a focus on comfort and hospitality",
                image: "assets/images/dhanbad/CoalCapital-Dhn.png",
            },
            {
                name: "Grand Mirage",
                description: "Luxury hotel with restaurant, bar, elegant rooms and exceptional service",
                image: "assets/images/dhanbad/GrandMirage-Dhn.png",
            },
            {
                name: "Sonotel Hotel",
                description: "Luxury hotel with modern amenities and comfortable accommodations for business and leisure travelers",
                image: "assets/images/dhanbad/Sonotel-Dhn.png",
            }
        ],
        Hospitals: [
            {
                name: "Central Hospital Dhanbad",
                description: "Leading multi-speciality hospital providing comprehensive healthcare services",
                image: "assets/images/dhanbad/CentralHospital-Dhn.jpg",
            },
            {
                name: "Asian Super Specialty Hospital",
                description: "Well-equipped hospital with modern facilities and a focus on patient care",
                image: "assets/images/dhanbad/AsianHospital-Dhn.jpg",
            },
            {
                name: "Patliputra Hospital Dhanbad",
                description: "Established hospital with a strong reputation for quality healthcare",
                image: "assets/images/dhanbad/PatliputraHospital-Dhn.jpg",
            },
            {
                name: "SJAS Super Specialty Hospital",
                description: "Advanced medical facility with state-of-the-art equipment and specialized care",
                image: "assets/images/dhanbad/SJASHospital-Dhn.jpg",
            }
        ],
        Schools: [
            {
                name: "DAV Public School",
                description: "Well-established school with a strong academic reputation",
                image: "assets/images/dhanbad/DAV-Dhn.jpg",
            },
            {
                name: "GD Goenka Public School",
                description: "Renowned school with a focus on holistic education and academic excellence",
                image: "assets/images/dhanbad/GDGoenka-Dhn.jpg",
            },
            {
                name: "Delhi Public School",
                description: "Prestigious educational institution with a strong academic tradition",
                image: "assets/images/dhanbad/DPS-Dhn.jpg",
            },
            {
                name: "Carmel School Dhanbad",
                description: "Well-established school with a strong academic reputation",
                image: "assets/images/dhanbad/CarmelSchool-Dhn.jpg",
            }
        ],
        Colleges: [
            {
                name: "Binod Bihari Mahto College",
                description: "Well-established college with a strong academic reputation",
                image: "assets/images/dhanbad/BinodBihariMahoClg-Dhn.jpg",
            },
            {
                name: "PK Roy Memorial College",
                description: "Established college with a focus on quality education and research",
                image: "assets/images/dhanbad/PKRoyClg-Dhn.jpg",
            },
            {
                name: "Shree Shree Lakshmi Narayan Trust Mahila Mahavidhyalaya",
                description: "Well-established college with a strong academic reputation",
                image: "assets/images/dhanbad/SSLNTCollege-Dhn.jpg",
            }
        ],
        Universities: [
            {
                name: "Birsa Institute of Technology",
                description: "Renowned college offering a wide range of courses in engineering and technology",
                image: "assets/images/dhanbad/BitSindri-Dhn.jpg",
            },
            {
                name: "Institute of Technology(Indian School of Mines)",
                description: "Premier engineering institution offering diverse academic programs",
                image: "assets/images/dhanbad/DhnInstituteOfTechnology-Dhn.jpg",
            },
            {
                name: "Binod Bihari Mahto University",
                description: "Well-established university with a strong academic reputation",
                image: "assets/images/dhanbad/BinodBihariMahtoUniversity.jpg",
            }
        ],
        Banks: [
            {
                name: "State Bank of India",
                description: "Leading public sector bank with a wide network of branches and ATMs",
                image: "assets/images/dhanbad/SBI-Dhn.jpg",
            },
            {
                name: "HDFC Bank",
                description: "Leading private sector bank known for its customer service and innovative banking solutions",
                image: "assets/images/dhanbad/HDFCBank-Dhn.jpg",
            },
            {
                name: "Punjab National Bank",
                description: "Established public sector bank with a strong presence in the region",
                image: "assets/images/dhanbad/Pnb-Dhn.jpg",
            },
            {
                name: "IDFC Bank",
                description: "Private sector bank offering a range of financial products and services",
                image: "assets/images/dhanbad/IDFCBank-Dhn.jpg",
            }
        ],
        ATMs: [
            {
                name: "HDFC Bank ATM",
                description: "Convenient ATM for cash withdrawals and banking services",
                image: "assets/images/dhanbad/HDFCATM-Dhn.jpg",
            },
            {
                name: "State Bank of India ATM",
                description: "Reliable ATM for cash withdrawals and banking services",
                image: "assets/images/dhanbad/SBIATM-Dhn.jpg",
            },
            {
                name: "Bank of India ATM",
                description: "Accessible ATM for cash withdrawals and banking services",
                image: "assets/images/dhanbad/BoiATM-Dhn.jpg",
            },
            {
                name: "Union Bank of India ATM",
                description: "Convenient ATM for cash withdrawals and banking services",
                image: "assets/images/dhanbad/UnionBankATM-Dhn.jpg",
            }
        ],
        Parks: [
            {
                name: "Rajendra Sarovar Park",
                description: "Popular park with lush greenery and recreational facilities",
                image: "assets/images/dhanbad/RajendrSarovarPark-Dhn.jpg",
            },
            {
                name: "Sir Dorabji Tata Park",
                description: "Scenic park with beautiful gardens and a peaceful atmosphere",
                image: "assets/images/dhanbad/SirDorabjiTataPark-Dhn.jpg",
            },
            {
                name: "Birsa Munda Park",
                description: "Well-maintained park with walking paths and recreational areas",
                image: "assets/images/dhanbad/BirsaMundaPark-Dhn.jpg",
            }
        ],
        "Railway Station": [
            {
                name: "Dhanbad Junction",
                description: "Major railway station connecting to various cities and states",
                image: "assets/images/dhanbad/DhanbadJn-Dhn.jpg",
            }
        ],
        "Bus Stand": [
            {
                name: "Dhanbad Bus Stand",
                description: "Primary bus stand serving local and interstate routes",
                image: "assets/images/dhanbad/BusStand-Dhanbad.jpg"
            }
        ],
        "Tourist Places": [
            {
                name: "Bhatinda Waterfall",
                description: "Scenic waterfall and popular tourist spot",
                image: "assets/images/dhanbad/BhatindaWaterfall-Dhn.jpg",
            },
            {
                name: "Panchet Dam Waterfall",
                description: "Scenic waterfall with greenry location and Popular in toursits",
                image: "assets/images/dhanbad/PanchetDamWaterfall-Dhn.jpg",
            },
            {
                name: "Topchanchi Lake",
                description: "Beautiful Lake with besct scenic view best for picnics ",
                image: "assets/images/dhanbad/TopchanchiLake-Dhn.jpg",
            },
            {
                name: "Mathon Dam",
                description: "Popular Dam in Dhanbad and best for exploring the islands in the Dam",
                image: "assets/images/dhanbad/MathonDam-Dhn.jpg",
            }
        ]
    },
    Hazaribagh: {
        Restaurants: [
            {
                name: "Grandma Kitchen Restaurant",
                description: "Charming restaurant with a relaxed atmosphere and delicious cuisine",
                image: "assets/images/hazaribagh/GrandmaKitchen-Hzb.jpg",
            },
            {
                name: "Skylight Garden Restaurant",
                description: "Trendy restaurant offering a fusion of flavors and a lively atmosphere",
                image: "assets/images/hazaribagh/SkylightGarden-Hzb.jpg",
            },
            {
                name: "Ananta - by Hills",
                description: "Rooftop charming restaurant with a relaxed atmosphere with hill view and delicious cuisine",
                image: "assets/images/hazaribagh/AnantaByHill-Hzb.jpg",
            },
            {
                name: "LockUp Restaurant",
                description: "Restaurant offering panoramic views and a diverse menu",
                image: "assets/images/hazaribagh/Lockup-Hzb.jpg",
            }
        ],
        Hotels: [
            {
                name: "AK International Hotel",
                description: "Business class hotel with modern amenities",
                image: "assets/images/hazaribagh/AKHotel-Hzb.jpg",
            },
            {
                name: "Hotel Canary Inn",
                description: "Premium city hotel with a focus on comfort and hospitality",
                image: "assets/images/hazaribagh/CanaryInn-Hzb.jpg",
            },
            {
                name: "Hotel Aranya Vihar",
                description: "Comfortable stay with good facilities",
                image: "assets/images/hazaribagh/HotelAranya-Hzb.jpg",
            },
            {
                name: "Hotel Hill Side",
                description: "Modern hotel with excellent amenities",
                image: "assets/images/hazaribagh/HotelHillSide-Hzb.jpg",
            }
        ],
        Hospitals: [
            {
                name: "Aarogyam Hospital",
                description: "Best multi-speciality hospital in Hazaribagh",
                image: "assets/images/hazaribagh/AarogyamHospital-Hzb.jpg",
            },
            {
                name: "Life Line Hospital",
                description: "Well-equipped hospital with modern facilities",
                image: "assets/images/hazaribagh/LifeLineHospital-Hzb.jpg",
            },
            {
                name: "Sadar Hospital Hazaribagh",
                description: "Comprehensive healthcare services with a focus on patient care",
                image: "assets/images/hazaribagh/SadarHospital-Hzb.jpg",
            },
            {
                name: "St. Columbus Hospital",
                description: "Established hospital with a strong reputation for quality healthcare",
                image: "assets/images/hazaribagh/St.ColumbusHospital-Hzb.jpg",
            }
        ],
        Schools: [
            {
                name: "St. Xavier's School",
                description: "Renowned school with a strong academic reputation",
                image: "assets/images/hazaribagh/St. Xavier's School.jpg",
            },
            {
                name: "Angels High School",
                description: "Well-established school with a good academic record",
                image: "assets/images/hazaribagh/AngelsHigh-Hzb.jpg",
            },
            {
                name: "DAV Public School",
                description: "Established school with a strong academic tradition",
                image: "assets/images/hazaribagh/School-Hzb.jpg",
            },
            {
                name: "Oasis School",
                description: "Established school with a strong academic tradition",
                image: "assets/images/hazaribagh/Oasis-Hzb.jpg",
            }
        ],
        Colleges: [
            {
                name: "AISECT Inter College",
                description: "College offering a wide range of courses",
                image: "assets/images/hazaribagh/AisectClg-Hzb.jpg",
            },
            {
                name: "St. Columbus College",
                description: "Well-known college with a strong academic reputation",
                image: "assets/images/hazaribagh/College-Hzb.jpg",
            },
            {
                name: "KB Womens College",
                description: "Established college with a focus on vocational education",
                image: "assets/images/hazaribagh/KBWomens-Hzb.jpg",
            },
            {
                name: "Markham College of Commerce",
                description: "Well-established College with a strong academic tradition in commerce",
                image: "assets/images/hazaribagh/MarkhamClg-hzb.jpg",
            }
        ],
        Universities: [
            {
                name: "AISECT University",
                description: "Premier University offering diverse academic programs",
                image: "assets/images/hazaribagh/AisectUniversity-Hzb.jpg",
            },
            {
                name: "Vinoba Bhave University",
                description: "Well-established university with a strong academic tradition",
                image: "assets/images/hazaribagh/VBU-Hzb.jpg",
            },
            {
                name: "University Law College",
                description: "Law courses and opportunities",
                image: "assets/images/hazaribagh/UniversityLaw-hzb.jpg",
            }
        ],
        Banks: [
            {
                name: "State Bank of India",
                description: "Leading public sector bank",
                image: "assets/images/hazaribagh/SBIBank-Hzb.jpg",
            },
            {
                name: "Punjab National Bank",
                description: "Leading private sector bank",
                image: "assets/images/hazaribagh/PNB-Hzb.jpg",
            },
            {
                name: "Federal Bank",
                description: "Leading private sector bank",
                image: "assets/images/hazaribagh/FederalBank-Hzb.jpg",
            },
            {
                name: "HDFC Bank",
                description: "Established private sector bank",
                image: "assets/images/hazaribagh/HDFCBank-Hzb.jpg",
            }
        ],
        ATMs: [
            {
                name: "HDFC Bank ATM",
                description: "Convenient ATM for cash withdrawals and banking services",
                image: "assets/images/hazaribagh/HDFC-hzb.jpg",
            },
            {
                name: "State Bank of India ATM",
                description: "Reliable ATM for cash withdrawals and banking services",
                image: "assets/images/hazaribagh/ATM-Hzb.jpg",
            },
            {
                name: "Bank of Baroda ATM",
                description: "Accessible ATM for cash withdrawals and banking services",
                image: "assets/images/hazaribagh/BOB-Hzb.jpg",
            },
            {
                name: "Bank of India ATM",
                description: "Convenient ATM for cash withdrawals and banking services",
                image: "assets/images/hazaribagh/BoiATM-Hzb.jpg",
            },
        ],
        Parks: [
            {
                name: "Nirmal Mahto Park",
                description: "Famous park with beautiful gardens, a lake, and recreational facilities",
                image: "assets/images/hazaribagh/Park-Hzb.jpg",
            },
            {
                name: "Sarle Park",
                description: "Scenic park with lush greenery and a peaceful atmosphere",
                image: "assets/images/hazaribagh/SarlePark-Hzb.jpg",
            },
            {
                name: "Demotand Park",
                description: "Well-maintained park with walking paths and recreational areas",
                image: "assets/images/hazaribagh/DemotandPark-Hzb.jpg",
            },
            {
                name: "Swarn Jayanti Park",
                description: "Popular park with a variety of flowers and educational programs",
                image: "assets/images/hazaribagh/SwarnJayanti-Hzb.jpg",
            }
        ],
        "Railway Station": [
            {
                name: "Hazaribagh Town Railway Station",
                description: "Major railway station connecting to various cities and states",
                image: "assets/images/hazaribagh/RailwayStation-Hzb.jpg",
            }
        ],
        "Bus Stand": [
            {
                name: "Hazaribagh Bus Stand",
                description: "Main bus terminal serving local and interstate travelers",
                image: "assets/images/hazaribagh/BusStand-Hazaribagh.jpg"
            }
        ],
        "Tourist Places": [
            {
                name: "Canary Hill",
                description: "Famous for Beatiful Hill Views, and recreational facilities",
                image: "assets/images/hazaribagh/CanaryHill-Hzb.jpg",
            },
            {
                name: "Jheel Lake",
                description: "Scenic lake surrounded by hills, offering boating and picnic spots",
                image: "assets/images/hazaribagh/Jheel-Hzb.jpg",
            },
            {
                name: "SurajKund Hot-Water Spring",
                description: "Ancient Hot-Water spring",
                image: "assets/images/hazaribagh/Surajkund-Hzb.jpg",
            },
            {
                name: "Hazaribagh Wildlife Sanctuary",
                description: "Protected area with diverse flora and fauna, ideal for nature enthusiasts and wildlife lovers",
                image: "assets/images/hazaribagh/WildlifeSanctuary-Hzb.jpg",
            }
        ]
    },
    Bokaro: {
        Restaurants: [
            {
                name: "Aroma Restaurant",
                description: "Popular restaurant known for its authentic flavors and traditional recipes",
                image: "assets/images/Bokaro/Aroma-Bokaro.jpg",
            },
            {
                name: "Chicken Mafia Restaurant",
                description: "Multi cuisine restaurant with a vibrant ambiance and diverse menu",
                image: "assets/images/Bokaro/ChickenMafia-Bokaro.jpg",
            },
            {
                name: "The Hub Restaurant",
                description: "Known for its authentic flavors and traditional recipes with great ambiance",
                image: "assets/images/Bokaro/TheHub-Bokaro.jpg",
            },
            {
                name: "Raibow Restaurant",
                description: "Offers a delightful dining experience with a diverse menu and a cozy ambiance",
                image: "assets/images/Bokaro/RainbowRestaurant-Bokaro.jpg",
            }
        ],
        Hotels: [
            {
                name: "Ananda Hotel",
                description: "Luxerious hotel with modern amenities",
                image: "assets/images/Bokaro/Ananda-Bokaro.jpg",
            },
            {
                name: "Clarls Inn",
                description: "Premium city hotel with luxerious amenities",
                image: "assets/images/Bokaro/ClarlsInn-Bokaro.jpg",
            },
            {
                name: "Veena Regency",
                description: "Offers comfortable accommodations and amenities for travelers",
                image: "assets/images/Bokaro/VeenaRegency-Bokaro.jpg",
            },
            {
                name: "Stering City Cetre",
                description: "luxury hotel with modern amenities",
                image: "assets/images/Bokaro/SteringCityCentre-Bokaro.jpg",
            }
        ],
        Hospitals: [
            {
                name: "Bokaro General Hospital",
                description: "Premium Multi-speciality hospital",
                image: "assets/images/Bokaro/BokaroGeneralHospital-Bokaro.jpg",
            },
            {
                name: "Muskan Hospital",
                description: "Multi-speciality healthcare and Maternity Hospital",
                image: "assets/images/Bokaro/MuskanHospital-Bokaro.jpg",
            },
            {
                name: "KMM Hospital",
                description: "General healthcare services with best treatment",
                image: "assets/images/Bokaro/KMMHospital-Bokaro.jpg",
            },
            {
                name: "Sadar Hospital Bokaro",
                description: "Best general medical care and treatment",
                image: "assets/images/Bokaro/SadarHospital-Bokaro.jpg",
            }
        ],
        Schools: [
            {
                name: "Chinmaya Vidyalaya Bokaro",
                description: "Prestigious educational institution",
                image: "assets/images/Bokaro/ChinmayaVidyalaya-Bokaro.jpg",
            },
            {
                name: "Delhi Public School",
                description: "Renowned school with a strong academic reputation",
                image: "assets/images/Bokaro/DPS-Bokaro.jpg",
            },
            {
                name: "Pente costal Assembly School",
                description: "Well-established school with a focus on holistic education",
                image: "assets/images/Bokaro/PentecostalAssemblyShl-Bokaro.jpg",
            },
            {
                name: "St. Xavier's School",
                description: "Reputed school known for its academic excellence",
                image: "assets/images/Bokaro/St.Xavier'sSchl-Bokaro.jpg",
            }
        ],
        Colleges: [
            {
                name: "Visthapit College",
                description: "Renowned college offering a wide range of courses",
                image: "assets/images/Bokaro/VisthapitCollege-Bokaro.jpg",
            },
            {
                name: "RVS College",
                description: "Well-known college with a strong academic reputation",
                image: "assets/images/Bokaro/RVSCollege-Bokaro.jpg",
            },
            {
                name: "Imamul Hai Khan Law College",
                description: "Established college with a focus on quality education",
                image: "assets/images/Bokaro/ImamulHaiKhanCollege.jpg",
            },
            {
                name: "Chas College",
                description: "Reputed college known for its academic excellence",
                image: "assets/images/Bokaro/ChasCollege-Bokaro.jpg",
            }
        ],
        Universities: [
            {
                name: "Bokaro Steel College",
                description: "Premier university offering diverse academic programs",
                image: "assets/images/Bokaro/BokaroSteelClg-Bokaro.jpg",
            },
            {
                name: "Guru Gobind Technical College",
                description: "Well-established university with a strong academic reputation",
                image: "assets/images/Bokaro/GuruGobindTechnical-Bokaro.jpg",
            }
        ],
        Banks: [
            {
                name: "Axis Bank",
                description: "Leading private sector bank",
                image: "assets/images/Bokaro/AxisBank-Bokaro.jpg",
            },
            {
                name: "State Bank of India",
                description: "Largest public sector bank",
                image: "assets/images/Bokaro/SBIBank-Bokaro.jpg",
            },
            {
                name: "ICICI Bank",
                description: "Established bank with a strong presence",
                image: "assets/images/Bokaro/IciciBank-Bokaro.jpg",
            },
            {
                name: "HDFC Bank",
                description: "Leading private sector bank",
                image: "assets/images/Bokaro/HDFCBank-Bokaro.jpg",
            }
        ],
        ATMs: [
            {
                name: "HDFC Bank ATM",
                description: "Convenient ATM for cash withdrawals and banking services",
                image: "assets/images/Bokaro/HdfcAtm-Bokaro.jpg",
            },
            {
                name: "Axis Bank ATM",
                description: "Reliable ATM for cash withdrawals and banking services",
                image: "assets/images/Bokaro/AxisAtm-Bokaro.jpg",
            },
            {
                name: "Indian Bank ATM",
                description: "Accessible ATM for cash withdrawals and banking services",
                image: "assets/images/Bokaro/IndianBankATM-Bokaro.jpg",
            },
            {
                name: "State Bank of India ATM",
                description: "Convenient ATM for cash withdrawals and banking services",
                image: "assets/images/Bokaro/SBIAtm-Bokaro.jpg",
            }
        ],
        Parks: [
            {
                name: "Amrut Park",
                description: "Popular recreational park in City with multiple kids Fun activities",
                image: "assets/images/Bokaro/AmrutPark-Bokaro.jpg",
            },
            {
                name: "Jawaharlal Nehru Park",
                description: "Scenic park with beautiful views",
                image: "assets/images/Bokaro/JawaharlalPark-Bokaro.jpg",
            },
            {
                name: "City Park",
                description: "Unique garden with artistic rock formations",
                image: "assets/images/Bokaro/CityPark-Bokaro.jpg",
            }
        ],
        "Railway Station": [
            {
                name: "Bokaro Steel City Railway Station",
                description: "Major railway station connecting to various cities",
                image: "assets/images/RailwayStation.jpg",
            }
        ],
        "Bus Stand": [
            {
                name: "Bokaro Bus Stand",
                description: "Main bus terminal with regular regional and interstate services",
                image: "assets/images/Bokaro/BusStand-Bokaro.jpg"
            }
        ],
        "Tourist Places": [
            {
                name: "Bokaro Steel Plant",
                description: "Popular tourist attraction",
                image: "assets/images/Bokaro/BokaroSteelPlant.jpg",
            },
            {
                name: "Garga Dam",
                description: "Historic Dam destination and famous tourist picnic spot",
                image: "assets/images/Bokaro/GargaDam-Bokaro.jpg",
            },
            {
                name: "Jagannath Temple",
                description: "Historic Temple and popular tourist spot",
                image: "assets/images/Bokaro/JagannathTemple-Bokaro.jpg",
            },
            {
                name: "City Park",
                description: "Beautiful Park surrounded by lush greenery",
                image: "assets/images/Bokaro/CityPark-Bokaro.jpg",
            }
        ]
    },
    Deoghar: {
        Restaurants: [
            {
                name: "Nirvana-The Rooftop Cafe",
                description: "Rooftop charming restaurant with a relaxed atmosphere with hill view and delicious cuisine",
                image: "assets/images/Deoghar/Nirvana-TheRooftopCafe-Deoghar.jpg",
            },
            {
                name: "Punita Restaurant",
                description: "Trendy restaurant offering a fusion of flavors and a lively atmosphere",
                image: "assets/images/Deoghar/PunitaRestaurant-Deoghar.jpg",
            },
            {
                name: "Samahaar Food Court",
                description: "Restaurant with a relaxed atmosphere with hill view and delicious cuisine",
                image: "assets/images/Deoghar/SamahaarFoodCourt-Deoghar.jpg",
            },
            {
                name: "Twilight Restaurant",
                description: "Restaurant offering panoramic views and a diverse menu",
                image: "assets/images/Deoghar/TwilightRestaurant.jpg",
            }
        ],
        Hotels: [
            {
                name: "Imperial Heights",
                description: "Business class hotel with modern amenities",
                image: "assets/images/Deoghar/ImperialHeights-Deoghar.jpg",
            },
            {
                name: "Hotel Lakdatar",
                description: "Premium city hotel with a focus on comfort and hospitality",
                image: "assets/images/Deoghar/HotelLakdatar-Deoghar.jpg",
            },
            {
                name: "Hotel Satyam Palace",
                description: "Comfortable stay with good facilities",
                image: "assets/images/Deoghar/HotelSatyamPalace-Deoghar.jpg",
            },
            {
                name: "Hotel Mahadev Palace",
                description: "Modern hotel with excellent amenities",
                image: "assets/images/Deoghar/HotelMahadevPalace-Deoghar.jpg",
            }
        ],
        Hospitals: [
            {
                name: "Vinayak Hospital",
                description: "Best multi-speciality hospital in Deoghar",
                image: "assets/images/Deoghar/VinayakHospital-Deoghar.jpg",
            },
            {
                name: "Sudha Hospital",
                description: "Well-equipped hospital with modern facilities",
                image: "assets/images/Deoghar/SudhaHospital-Deoghar.jpg",
            },
            {
                name: "Sadar Hospital Deoghar",
                description: "Comprehensive healthcare services with a focus on patient care",
                image: "assets/images/Deoghar/SadarHospital-Deoghar.jpg",
            },
            {
                name: "Tridev Hospital",
                description: "Established hospital with a strong reputation for quality healthcare",
                image: "assets/images/Deoghar/TridevHospital-Deoghar.jpg",
            }
        ],
        Schools: [
            {
                name: "St. Xavier's High School",
                description: "Renowned school with a strong academic reputation",
                image: "assets/images/Deoghar/StXaviersHighSchool-Deoghar.jpg",
            },
            {
                name: "St. Francis School",
                description: "Well-established school with a good academic record",
                image: "assets/images/Deoghar/StFrancisSchool-Deoghar.jpg",
            },
            {
                name: "Delhi Public School",
                description: "Established school with a strong academic tradition",
                image: "assets/images/Deoghar/DPS-Deoghar.jpg",
            },
            {
                name: "Ramakrishna Mission Vidyapith",
                description: "Established school with a strong academic tradition",
                image: "assets/images/Deoghar/RamakrishnaMissionVidyapith-Deoghar.jpg",
            }
        ],
        Colleges: [
            {
                name: "Rama Devi Bajla Mahila Mahavidyalaya",
                description: "College offering a wide range of courses",
                image: "assets/images/Deoghar/RamaDeviBajlaMahilaMahavidyalaya-Deoghar.jpg",
            },
            {
                name: "Deoghar College",
                description: "Well-known college with a strong academic reputation",
                image: "assets/images/Deoghar/DeogharCollege-Deoghar.jpg",
            },
            {
                name: "Rabindranath Tagore Agriculture College",
                description: "Established college with a focus on vocational education",
                image: "assets/images/Deoghar/RabindranathTagoreAgricultureClg-Deoghar.jpg",
            },
            {
                name: "A.S College Deoghar",
                description: "Well-established College with a strong academic tradition in commerce",
                image: "assets/images/Deoghar/ASCollege-Deoghar.jpg",
            }
        ],
        Universities: [
            {
                name: "AIIMS Deoghar",
                description: "Premier medical istitution offering diverse medical programs",
                image: "assets/images/Deoghar/AIIMS-Deoghar.jpg",
            },
            {
                name: "BIT Deoghar",
                description: "Well-established university with a strong academic tradition",
                image: "assets/images/Deoghar/BIT-Deoghar.jpg",
            },
            {
                name: "IGNOU Regional Center",
                description: "Provides various courses and opportunities",
                image: "assets/images/Deoghar/IGNOURegionalCenter-Deoghar.jpg",
            }
        ],
        Banks: [
            {
                name: "IndusInd Bank",
                description: "Established private sector bank",
                image: "assets/images/Deoghar/IndusIndBank-Deoghar.jpg",
            },
            {
                name: "IDBI Bank",
                description: "Leading private sector bank",
                image: "assets/images/Deoghar/IdbiBank-Deoghar.jpg",
            },
            {
                name: "Axis Bank",
                description: "Leading private sector bank",
                image: "assets/images/Deoghar/AxisBank-Deoghar.jpg",
            },
            {
                name: "Cannara Bank",
                description: "Established private sector bank",
                image: "assets/images/Deoghar/CanaraBank-Deoghar.jpg",
            },
            {
                name: "Ujjivan Bank",
                description: "Leading private sector bank",
                image: "assets/images/Deoghar/UjjivanBank-Deoghar.jpg",
            },
            {
                name: "Bank Of Maharashtra",
                description: "Established private sector bank",
                image: "assets/images/Deoghar/BankOfMaharashtra-Deoghar.jpg",
            }
        ],
        ATMs: [
            {
                name: "HDFC Bank ATM",
                description: "Convenient ATM for cash withdrawals and banking services",
                image: "assets/images/Deoghar/HdfcATM-Deoghar.jpg",
            },
            {
                name: "State Bank of India ATM",
                description: "Reliable ATM for cash withdrawals and banking services",
                image: "assets/images/Deoghar/SbiATM-Deoghar.jpg",
            },
            {
                name: "Ujjivan Bank ATM",
                description: "Accessible ATM for cash withdrawals and banking services",
                image: "assets/images/Deoghar/UjjivanATM-Deoghar.jpg",
            },
            {
                name: "Bank of India ATM",
                description: "Convenient ATM for cash withdrawals and banking services",
                image: "assets/images/Deoghar/BoiATM-Deoghar.jpg",
            }
        ],
        Parks: [
            {
                name: "Nandan Park",
                description: "Famous park with beautiful gardens, a lake, and recreational facilities",
                image: "assets/images/Deoghar/NandanPark-Deoghar.jpg",
            },
            {
                name: "Dighariya Biodiversity Park",
                description: "Scenic park with lush greenery and a peaceful atmosphere",
                image: "assets/images/Deoghar/DighariyaBioDiversityPark-Deoghar.jpg",
            },
            {
                name: "Rohini Park",
                description: "Well-maintained park with walking paths and recreational areas",
                image: "assets/images/Deoghar/RohiniPark-Deoghar.jpg",
            },
            {
                name: "Atal Smirti Park",
                description: "Popular park with a variety of flowers and educational programs",
                image: "assets/images/Deoghar/AtalSmirtiPark-Deoghar.jpg",
            }
        ],
        "Railway Station": [
            {
                name: "Deoghar Junction",
                description: "Major railway station connecting to various cities and states",
                image: "assets/images/Deoghar/DeogharJN.jpg",
            }
        ],
        "Bus Stand": [
            {
                name: "Deoghar Bus Stand",
                description: "Central bus stand serving pilgrims and tourists",
                image: "assets/images/Deoghar/BusStand-Deoghar.jpg"
            }
        ],
        "Tourist Places": [
            {
                name: "Nandan Pahar",
                description: "Famous for Beatiful Hill Views, and recreational facilities",
                image: "assets/images/Deoghar/NandanPahar-Deoghar.jpg",
            },
            {
                name: "Jalsar Talab",
                description: "Scenic lake, offering boating and picnic spots",
                image: "assets/images/Deoghar/JalsarTalab-Deoghar.jpg",
            },
            {
                name: "Naulakha Temple",
                description: "Ancient Temple, famous in tourists",
                image: "assets/images/Deoghar/NaulakhaTemple-Deoghar.jpg",
            },
            {
                name: "Tapovan Hill",
                description: "Famous for Beatiful Hill Views, ideal for nature lovers",
                image: "assets/images/Deoghar/TapovanHill-Deoghar.jpg",
            }
        ]
    },
    Giridih: {
        Restaurants: [
            {
                name: "Dominos Giridih",
                description: "Popular restaurant known for its delicious local cuisine and vibrant ambiance",
                image: "assets/images/Giridih/Dominos-Giridih.jpg",
            },
            {
                name: "Red Chilli Restaurant",
                description: "Trendy restaurant offering a fusion of flavors and a lively atmosphere",
                image: "assets/images/Giridih/RedChilliRestaurant-Giridih.jpg",
            },
            {
                name: "Teekha Talks Restaurat",
                description: "Charming restaurant with a relaxed atmosphere and delicious cuisine",
                image: "assets/images/Giridih/TeekhaTalks-Giridih.jpg",
            },
            {
                name: "Madhuban Vegis",
                description: "Restaurant offering panoramic views and a diverse menu",
                image: "assets/images/Giridih/MadhubanVegis-Giridih.jpg",
            }
        ],
        Hotels: [
            {
                name: "Utsav Upvan Hotel",
                description: "Luxerious hotel with modern amenities and comfortable accommodations",
                image: "assets/images/Giridih/UtsavUpvanHotel-Giridih.jpg",
            },
            {
                name: "Hotel Meer",
                description: "Premium city hotel with a focus on comfort and hospitality",
                image: "assets/images/Giridih/HotelMeer-Giridih.jpg",
            },
            {
                name: "Hotel Galy Inn",
                description: "Luxury hotel with restaurant, bar, elegant rooms and exceptional service",
                image: "assets/images/Giridih/HotelGalyInn-Giridih.jpg",
            },
            {
                name: "Hotel Garden View",
                description: "Luxury hotel with modern amenities and comfortable accommodations for business and leisure travelers",
                image: "assets/images/Giridih/HotelGardenView-Giridih.jpg",
            }
        ],
        Hospitals: [
            {
                name: "Aftab Hospital",
                description: "Leading multi-speciality hospital providing comprehensive healthcare services",
                image: "assets/images/Giridih/AftabHospital-Giridih.jpg",
            },
            {
                name: "Gobardhan Lal Nursing Home",
                description: "Well-equipped hospital with modern facilities and a focus on patient care",
                image: "assets/images/Giridih/GobardhanLalNursingHome-Giridih.jpg",
            },
            {
                name: "Navjeevan Nursing Home",
                description: "Established hospital with a strong reputation for quality healthcare",
                image: "assets/images/Giridih/NavjeevanNursingHome.jpg",
            },
            {
                name: "Sadar Hospital Giridih",
                description: "Best medical facility with state-of-the-art equipment and specialized care",
                image: "assets/images/Giridih/SadarHospital-Giridih.jpg",
            }
        ],
        Schools: [
            {
                name: "DAV Public School",
                description: "Well-established school with a strong academic reputation",
                image: "assets/images/Giridih/DAVSchl-Giridih.jpg",
            },
            {
                name: "Holy Cross School",
                description: "Renowned school with a focus on holistic education and academic excellence",
                image: "assets/images/Giridih/HolyCrossSchl-Giridih.jpg",
            },
            {
                name: "Delhi Public School",
                description: "Prestigious educational institution with a strong academic tradition",
                image: "assets/images/Giridih/DPS-Giridih.jpg",
            },
            {
                name: "Saluja Gold Inn School",
                description: "Well-established school with a strong academic reputation",
                image: "assets/images/Giridih/SalujaGoldInnSchl-Giridih.jpg",
            }
        ],
        Colleges: [
            {
                name: "Giridih College",
                description: "Well-established college with a strong academic reputation",
                image: "assets/images/Giridih/GiridihCollege.jpg",
            },
            {
                name: "Shri Rama Krishna College",
                description: "Established college with a focus on quality education and research",
                image: "assets/images/Giridih/ShriRamaKrishnaClg-Giridih.jpg",
            },
            {
                name: "Subhash Teacher Training College",
                description: "Well-established college with a strong academic reputation",
                image: "assets/images/Giridih/SubhashTeacherTrainingClg-Giridih.jpg",
            },
            {
                name: "Scholar B.Ed College",
                description: "Known college for quality education and research",
                image: "assets/images/Giridih/SchlorBEdClg-Giridih.jpg",
            }
        ],
        Universities: [
            {
                name: "Subhash Institute Of Technology",
                description: "Renowned college offering a wide range of courses in engineering and technology",
                image: "assets/images/Giridih/SubhashInstituteOfTechnology-Giridih.jpg",
            },
            {
                name: "Netaji Subhash University",
                description: "Premier engineering institution offering diverse academic programs",
                image: "assets/images/Giridih/NetajiSubhashUniversity-Giridih.jpg",
            }
        ],
        Banks: [
            {
                name: "State Bank of India",
                description: "Leading public sector bank with a wide network of branches and ATMs",
                image: "assets/images/Giridih/SBIBank-Giridih.jpg",
            },
            {
                name: "Punjab National Bank",
                description: "Established public sector bank with a strong presence in the region",
                image: "assets/images/Giridih/PNB-Giridih.jpg",
            },
            {
                name: "Bandhan Bank",
                description: "Leading private sector bank known for its customer service and innovative banking solutions",
                image: "assets/images/Giridih/BandhanBank-Giridih.jpg",
            },
            {
                name: "Axis Bank",
                description: "Private sector bank offering a range of financial products and services",
                image: "assets/images/Giridih/AxisBank-Giridih.jpg",
            },
            {
                name: "Central Bank of India",
                description: "Established public sector bank with a strong presence in the region",
                image: "assets/images/Giridih/CentralBank-Giridih.jpg",
            }
        ],
        ATMs: [
            {
                name: "Utkarsh Finance Bank ATM",
                description: "Convenient ATM for cash withdrawals and banking services",
                image: "assets/images/Giridih/UtkarshFinanceBank-Giridih.jpg",
            },
            {
                name: "State Bank of India ATM",
                description: "Reliable ATM for cash withdrawals and banking services",
                image: "assets/images/Giridih/SBIATM-Giridih.jpg",
            },
            {
                name: "Bank of Baroda ATM",
                description: "Accessible ATM for cash withdrawals and banking services",
                image: "assets/images/Giridih/BankOfBarodaATM-Giridih.jpg",
            },
            {
                name: "Punjab National Bank",
                description: "Convenient ATM for cash withdrawals and banking services",
                image: "assets/images/Giridih/PnbATM-Giridih.jpg",
            }
        ],
        Parks: [
            {
                name: "Atal Park",
                description: "Popular park with lush greenery and recreational facilities",
                image: "assets/images/Giridih/AtalPark-Giridih.jpg",
            },
            {
                name: "Children Park",
                description: "Scenic park with beautiful gardens and a peaceful atmosphere",
                image: "assets/images/Giridih/ChildrenPark-Giridih.jpg",
            },
            {
                name: "Khandoli Park",
                description: "Well-maintained park with walking paths and recreational areas",
                image: "assets/images/Giridih/KhandoliPark-Giridih.jpg",
            },
            {
                name: "Barmasia Children Park",
                description: "Scenic park with beautiful gardens and a peaceful atmosphere",
                image: "assets/images/Giridih/BarmasiaChildrenPark-Giridih.jpg",
            }
        ],
        "Railway Station": [
            {
                name: "Giridih Railway Station",
                description: "Major railway station connecting to various cities and states",
                image: "assets/images/Giridih/GiridiRailwayStation.jpg",
            },
            {
                name: "Parasnath Railway Station",
                description: "Major railway station connecting to various cities and states",
                image: "assets/images/Giridih/ParasnathRailwayStation-Giridih.jpg",
            }
        ],
        "Bus Stand": [
            {
                name: "Giridih Bus Stand",
                description: "Major bus terminal connecting Giridih with nearby districts",
                image: "assets/images/Giridih/BusStand-Giridih.jpg"
            }
        ],
        "Tourist Places": [
            {
                name: "Usri Waterfall",
                description: "Scenic waterfall and popular tourist spot",
                image: "assets/images/Giridih/UsriWaterfall-Giridih.jpg",
            },
            {
                name: "Harihar Dham",
                description: "Ancient temple with greenry location and Popular in toursits",
                image: "assets/images/Giridih/HariharDham-Giridih.jpg",
            },
            {
                name: "Parasnath Hill",
                description: "Jharkhand tallest hill with besct scenic view best for picnics & ancient temple",
                image: "assets/images/Giridih/ParasnathHill-Giridih.jpg",
            },
            {
                name: "Khandoli Dam",
                description: "Popular Dam in Giridih and best for exploring the islands in the Dam",
                image: "assets/images/Giridih/KhandoliDam-Giridih.jpg",
            }
        ]
    },
    Ramgarh: {
        Restaurants: [
            {
                name: "Kathi Nation",
                description: "Charming restaurant with a relaxed atmosphere with hill view and delicious cuisine",
                image: "assets/images/Ramgarh/KathiNation-Ramgrah.jpg",
            },
            {
                name: "Punita Restaurant",
                description: "Trendy restaurant offering a fusion of flavors and a lively atmosphere",
                image: "assets/images/Ramgarh/ACS-Ramgrah.jpg",
            },
            {
                name: "Aukus Restaurant",
                description: "Restaurant with a relaxed atmosphere with hill view and delicious cuisine",
                image: "assets/images/Ramgarh/AukusRestaurant-Ramgrah.jpg",
            },
            {
                name: "Miss Ginger Restaurant",
                description: "Restaurant offering panoramic views and a diverse menu",
                image: "assets/images/Ramgarh/MissGingerRestaurant-Ramgrah.jpg",
            }
        ],
        Hotels: [
            {
                name: "Hotel Shivam Inn",
                description: "Business class hotel with modern amenities",
                image: "assets/images/Ramgarh/HotelShivamInn-Ramgrah.jpg",
            },
            {
                name: "Hotel Ganpati",
                description: "Premium city hotel with a focus on comfort and hospitality",
                image: "assets/images/Ramgarh/HotelGanpati-Ramgrah.jpg",
            },
            {
                name: "Hotel Shakti Palace",
                description: "Comfortable stay with good facilities",
                image: "assets/images/Ramgarh/ShaktiPalace-Ramgrah.jpg",
            },
            {
                name: "Hotel Mahadev Palace",
                description: "Modern hotel with excellent amenities",
                image: "assets/images/Deoghar/HotelMahadevPalace-Deoghar.jpg",
            }
        ],
        Hospitals: [
            {
                name: "Pulse Hospital",
                description: "Best multi-speciality hospital in Deoghar",
                image: "assets/images/Ramgarh/PulseHospital-Ramgrah.jpg",
            },
            {
                name: "Mother & Child Health Care Centre",
                description: "Well-equipped hospital with modern facilities",
                image: "assets/images/Ramgarh/Mother&ChildHealthCareCentre-Ramgrah.jpg",
            },
            {
                name: "Prime Hospital",
                description: "Comprehensive healthcare services with a focus on patient care",
                image: "assets/images/Ramgarh/PrimeHospital-Ramgrah.jpg",
            },
            {
                name: "Prashad Eye Hospital",
                description: "Established hospital with a strong reputation for quality healthcare",
                image: "assets/images/Ramgarh/PrashadEyeHospital-Ramgrah.jpg",
            }
        ],
        Schools: [
            {
                name: "Hello Kids Pre-School",
                description: "Renowned school with a strong academic reputation",
                image: "assets/images/Ramgarh/HelloKidsPreSchool-Ramgrah.jpg",
            },
            {
                name: "St. Francis School",
                description: "Well-established school with a good academic record",
                image: "assets/images/Ramgarh/St.FrancisSchl-Ramgrah.jpg",
            },
            {
                name: "PM Shri Kendra Vidyalaya",
                description: "Established school with a strong academic tradition",
                image: "assets/images/Ramgarh/PMshriKendraVidyalaya-Ramgrah.jpg",
            },
            {
                name: "DAV Public School",
                description: "Established school with a strong academic tradition",
                image: "assets/images/Ramgarh/DAVPublicSchool-Ramgrah.jpg",
            }
        ],
        Colleges: [
            {
                name: "Womens College",
                description: "Well-known college with a strong academic reputation",
                image: "assets/images/Ramgarh/WomensCollege-Ramgrah.jpg",
            },
            {
                name: "Dr. Radha krishnan Teacher College",
                description: "Established college with a focus on vocational education",
                image: "assets/images/Ramgarh/DrRadhakrishnanTeacherCollege-Ramgrah.jpg",
            },
            {
                name: "Ramshobha College",
                description: "Well-established College with a strong academic tradition in commerce",
                image: "assets/images/Ramgarh/RamshobhaCollege-Ramgrah.jpg",
            }
        ],
        Universities: [
            {
                name: "Ramgarh Engineering College",
                description: "Well-established university with a strong academic tradition",
                image: "assets/images/Ramgarh/RamgarhEngineeringClg-Ramgrah.jpg",
            },
            {
                name: "Radha Govind University",
                description: "Provides various courses and opportunities",
                image: "assets/images/Ramgarh/RadhaGovindUniversity-Ramgrah.jpg",
            }
        ],
        Banks: [
            {
                name: "Indian Bank",
                description: "Established public sector bank",
                image: "assets/images/Ramgarh/IndianBank-Ramgrah.jpg",
            },
            {
                name: "Union Bank of India",
                description: "Leading public sector bank",
                image: "assets/images/Ramgarh/UnionBank-Ramgrah.jpg",
            },
            {
                name: "Axis Bank",
                description: "Leading private sector bank",
                image: "assets/images/Ramgarh/AxisBank-Ramgrah.jpg",
            },
            {
                name: "Punjab National Bank",
                description: "Established Public sector bank",
                image: "assets/images/Ramgarh/Pnb-Ramgrah.jpg",
            }
        ],
        ATMs: [
            {
                name: "HDFC Bank ATM",
                description: "Convenient ATM for cash withdrawals and banking services",
                image: "assets/images/Ramgarh/HdfcBank-Ramgrah.jpg",
            },
            {
                name: "State Bank of India ATM",
                description: "Reliable ATM for cash withdrawals and banking services",
                image: "assets/images/Ramgarh/SbiATM-Ramgrah.jpg",
            },
            {
                name: "IDBI Bank ATM",
                description: "Accessible ATM for cash withdrawals and banking services",
                image: "assets/images/Ramgarh/IdbiATM-Ramgrah.jpg",
            },
            {
                name: "Punjab National Bank ATM",
                description: "Convenient ATM for cash withdrawals and banking services",
                image: "assets/images/Ramgarh/PnbATMs-Ramgrah.jpg",
            }
        ],
        Parks: [
            {
                name: "Brigadier Puri Park",
                description: "Famous park with beautiful gardens, a lake, and recreational facilities",
                image: "assets/images/Ramgarh/BrigadierPuriPark-Ramgarh.jpg",
            },
            {
                name: "Maulana Abdul Kalam Azad Park",
                description: "Scenic park with lush greenery and a peaceful atmosphere",
                image: "assets/images/Ramgarh/MaulanaAbulKalamAzadPark-Ramgrah.jpg",
            },
            {
                name: "Atal Smirti Park",
                description: "Popular park with a variety of flowers and educational programs",
                image: "assets/images/Deoghar/AtalSmirtiPark-Deoghar.jpg",
            }
        ],
        "Railway Station": [
            {
                name: "Ramgrah Cantt Railway Station",
                description: "Major railway station connecting to various cities and states",
                image: "assets/images/Ramgarh/RamgarhCanttRailwayStation.jpg",
            },
            {
                name: "Barkakana Junction",
                description: "Major junction connecting to various cities and states",
                image: "assets/images/Ramgarh/BarkakanaJn-Ramgarh.jpg",
            }
        ],
        "Bus Stand": [
            {
                name: "Ramgarh Bus Stand",
                description: "Main bus stand offering local and long-distance bus services",
                image: "assets/images/Ramgarh/BusStand-Ramgarh.jpg"
            }
        ],
        "Tourist Places": [
            {
                name: "Maya Tungri View Point",
                description: "Famous for Beatiful Hill Views, and recreational facilities",
                image: "assets/images/Ramgarh/MayaTungriViewPoint-Ramgarh.jpg",
            },
            {
                name: "Patratu Dam",
                description: "Scenic Dam, offering boating and picnic spots",
                image: "assets/images/Ramgarh/PatratuDam-Ramgarh.jpg",
            },
            {
                name: "Valley Fall",
                description: "Ancient Temple, famous in tourists",
                image: "assets/images/Ramgarh/ValleyFall-Ramgarh.jpg",
            }
        ]
    },
    Dumka: {
        Restaurants: [
            {
                name: "Spice Aroma",
                description: "Popular restaurant known for its delicious local cuisine and vibrant ambiance",
                image: "assets/images/Dumka/SpiceAroma-Dumka.jpg",
                rating: 4
            },
            {
                name: "Mountain Cafe",
                description: "Trendy restaurant offering a fusion of flavors and a lively atmosphere",
                image: "assets/images/Dumka/MountainCafe-Dumka.jpg",
            },
            {
                name: "The Heritage Restaurat",
                description: "Charming restaurant with a relaxed atmosphere and delicious cuisine",
                image: "assets/images/Dumka/TheHeritage-Dumka.jpg",
            },
            {
                name: "Madhuban Vegis",
                description: "Restaurant offering panoramic views and a diverse menu",
                image: "assets/images/Giridih/MadhubanVegis-Giridih.jpg",
            }
        ],
        Hotels: [
            {
                name: "JD Inn Hotel",
                description: "Luxerious hotel with modern amenities and comfortable accommodations",
                image: "assets/images/Dumka/JDInnHotel-Dumka.jpg",
            },
            {
                name: "Heritage Hotel",
                description: "Premium city hotel with a focus on comfort and hospitality",
                image: "assets/images/Dumka/HeritageHotel-Dumka.jpg",
            },
            {
                name: "Royal Majestic",
                description: "Luxury hotel with restaurant, bar, elegant rooms and exceptional service",
                image: "assets/images/Dumka/RoyalMajestic-Dumka.jpg",
            },
            {
                name: "Yuvraj Palace",
                description: "Luxury hotel with modern amenities and comfortable accommodations for business and leisure travelers",
                image: "assets/images/Dumka/YuvrajPalace-Dumka.jpg",
            }
        ],
        Hospitals: [
            {
                name: "Sadar Hospital Dumka",
                description: "Leading multi-speciality hospital providing comprehensive healthcare services",
                image: "assets/images/Dumka/SadarHospital-Dumka.jpg",
            },
            {
                name: "JP Hospital",
                description: "Well-equipped hospital with modern facilities and a focus on patient care",
                image: "assets/images/Dumka/JPHospital-Dumka.jpg",
            },
            {
                name: "Navjeevan Nursing Home",
                description: "Established hospital with a strong reputation for quality healthcare",
                image: "assets/images/Giridih/NavjeevanNursingHome.jpg",
            },
            {
                name: "Bharati Hospital",
                description: "Best medical facility with state-of-the-art equipment and specialized care",
                image: "assets/images/Dumka/BharatiHospital-Dumka.jpg",
            }
        ],
        Schools: [
            {
                name: "International School Of Dumka",
                description: "Well-established school with a strong academic reputation",
                image: "assets/images/Dumka/InternationalSchlOfDumka.jpg",
            },
            {
                name: "NELC Don Bosco School",
                description: "Renowned school with a focus on holistic education and academic excellence",
                image: "assets/images/Dumka/NELCDonBoscoSchl-Dumka.jpg",
            },
            {
                name: "St. Joseph School",
                description: "Prestigious educational institution with a strong academic tradition",
                image: "assets/images/Dumka/StJosephSchool-Dumka.jpg",
            },
            {
                name: "St. Xavier's Collegiate School",
                description: "Well-established school with a strong academic reputation",
                image: "assets/images/Dumka/StXaviersCollegiateSchl-Dumka.jpg",
            }
        ],
        Colleges: [
            {
                name: "AN College",
                description: "Well-established college with a strong academic reputation",
                image: "assets/images/Dumka/ANCollege-Dumka.jpg",
            },
            {
                name: "Santhal Pargana College",
                description: "Established college with a focus on quality education and research",
                image: "assets/images/Dumka/SanthalParganaCollege-Dumka.jpg",
            },
            {
                name: "St. Xavier's Autonomous College",
                description: "Well-established college with a strong academic reputation",
                image: "assets/images/Dumka/StXavierAutonomousCollege-Dumka.jpg",
            },
            {
                name: "Scholar B.Ed College",
                description: "Known college for quality education and research",
                image: "assets/images/Giridih/SchlorBEdClg-Giridih.jpg",
            }
        ],
        Universities: [
            {
                name: "Dumka Engineering College",
                description: "Renowned college offering a wide range of courses in engineering and technology",
                image: "assets/images/Dumka/DumkaEngineeringCollege-Dumka.jpg",
            },
            {
                name: "Sido Kanhu Murmu University",
                description: "Renowned University offering a wide range of courses in engineering and courses",
                image: "assets/images/Dumka/SidoKanhuMurmuUniversity-Dumka.jpg",
            },
            {
                name: "Phulo Jhano Medical College",
                description: "Premier medical institution offering diverse medical programs",
                image: "assets/images/Dumka/PhuloJhanoMedicalCollege-Dumka.jpg",
            }
        ],
        Banks: [
            {
                name: "State Bank of India",
                description: "Leading public sector bank with a wide network of branches and ATMs",
                image: "assets/images/Dumka/SBI-Dumka.jpg",
            },
            {
                name: "HDFC Bank",
                description: "Leading private sector bank known for its customer service and innovative banking solutions",
                image: "assets/images/Dumka/HdfcBank-Dumka.jpg",
            },
            {
                name: "Axis Bank",
                description: "Private sector bank offering a range of financial products and services",
                image: "assets/images/Dumka/AxisBank-Dumka.jpg",
            },
            {
                name: "Canara Bank ",
                description: "Established public sector bank with a strong presence in the region",
                image: "assets/images/Dumka/CanaraBank-Dumka.jpg",
            }
        ],
        ATMs: [
            {
                name: "Central Bank of India ATM",
                description: "Convenient ATM for cash withdrawals and banking services",
                image: "assets/images/Dumka/CentralBank-Dumka.jpg",
            },
            {
                name: "State Bank of India ATM",
                description: "Reliable ATM for cash withdrawals and banking services",
                image: "assets/images/Dumka/SBIATM-Dumka.jpg",
            },
            {
                name: "HDFC Bank ATM",
                description: "Accessible ATM for cash withdrawals and banking services",
                image: "assets/images/Dumka/HdfcATM-Dumka.jpg",
            },
            {
                name: "Bank of Baroda ATM",
                description: "Convenient ATM for cash withdrawals and banking services",
                image: "assets/images/Dumka/BobATM-Dumka.jpg",
            }
        ],
        Parks: [
            {
                name: "Dumka Park",
                description: "Popular park with lush greenery and recreational facilities",
                image: "assets/images/Dumka/DumkaPark-Dumka.jpg",
            },
            {
                name: "Children Park",
                description: "Scenic park with beautiful gardens and a peaceful atmosphere",
                image: "assets/images/Dumka/ChildrenPark-Dumka.jpg",
            },
            {
                name: "Sido Kanhu Park",
                description: "Well-maintained park with walking paths and recreational areas",
                image: "assets/images/Dumka/SidoKanhuPark-Dumka.jpg",
            },
            {
                name: "Sristi Park",
                description: "Scenic park with beautiful gardens and a peaceful atmosphere",
                image: "assets/images/Dumka/SristiPark-Dumka.jpg",
            }
        ],
        "Railway Station": [
            {
                name: "Dumka Railway Station",
                description: "Major railway station connecting to various cities and states",
                image: "assets/images/Dumka/RailwayStation-Dumka.jpg",
            }
        ],
        "Bus Stand": [
            {
                name: "Dumka Bus Stand",
                description: "Central bus terminal with regular district and interstate buses",
                image: "assets/images/Dumka/BusStand-Dumka.jpg"
            }
        ],
        "Tourist Places": [
            {
                name: "Khunta Bandh",
                description: "Scenic spot with water and famous tourist spot",
                image: "assets/images/Dumka/KhuntaBandh-Dumka.jpg",
            },
            {
                name: "Tropical Beach Point",
                description: "Beach point with greenry location and Popular in toursits",
                image: "assets/images/Dumka/TropicalBeachPoint-Dumka.jpg",
            },
            {
                name: "Shiv Pahar",
                description: "Attractive hill with besct scenic view best for picnics & ancient temple",
                image: "assets/images/Dumka/ShivPahar-Dumka.jpg",
            },
            {
                name: "Massanjore Dam",
                description: "Popular Dam in Dumka and best for exploring the islands in the Dam",
                image: "assets/images/Dumka/MassanjoreDam-Dumka.jpg",
            }
        ],
    },
    Koderma: {
        Restaurants: [
                {
                    name: "Hungers Cave",
                    description: "Charming restaurant with a relaxed atmosphere with hill view and delicious cuisine",
                    image: "assets/images/Koderma/HungersCave-Koderma.jpg",
                },
                {
                    name: "Chef's Jalsa",
                    description: "Trendy restaurant offering a fusion of flavors and a lively atmosphere",
                    image: "assets/images/Koderma/ChefJalsa-Koderma.jpg",
                },
                {
                    name: "Punjabi Dhaba",
                    description: "Dhaba with a relaxed atmosphere with hill view and delicious cuisine",
                    image: "assets/images/Koderma/PunjabiDhaba-koderma.jpg",
                },
                {
                    name: "Green Hill Restaurant",
                    description: "Restaurant offering panoramic views and a diverse menu",
                    image: "assets/images/Koderma/GreenHill-koderma.jpg",
                }
            ],
            Hotels: [
                {
                    name: "Grand Surya Hotel",
                    description: "Business class hotel with modern amenities",
                    image: "assets/images/Koderma/GrandSurya-Koderma.jpg",
                },
                {
                    name: "Center Square Hotel",
                    description: "Premium city hotel with a focus on comfort and hospitality",
                    image: "assets/images/Koderma/CenterSquare-Koderma.jpg",
                },
                {
                    name: "Hotel Krishna",
                    description: "Comfortable stay with good facilities",
                    image: "assets/images/Koderma/HotelKrishna-Koderma.jpg",
                },
                {
                    name: "Hotel Tara Tower",
                    description: "Modern hotel with excellent amenities",
                    image: "assets/images/Koderma/HotelTaraTower-Koderma.jpg",
                }
            ],
            Hospitals: [
                {
                    name: "Pearl Hospital",
                    description: "Established hospital with a strong reputation for quality healthcare",
                    image: "assets/images/Koderma/PearlHospital-Koderma.jpg",
                },
                {
                    name: "Mangalam Hospital",
                    description: "Well-equipped hospital with modern facilities",
                    image: "assets/images/Koderma/MangalamHospital-Koderma.jpg",
                },
                {
                    name: "Bhagirathi Matri Sadan Hospital",
                    description: "Comprehensive healthcare services with a focus on patient care",
                    image: "assets/images/Koderma/BhagirathiMatriSadanHospital-Koderma.jpg",
                },
                {
                    name: "PG Hospital",
                    description: "Best multi-speciality hospital in Ramgrah",
                    image: "assets/images/Koderma/PGHospital-Koderma.jpg",
                }
            ],
            Schools: [
                {
                    name: "Pvss DAV Public School",
                    description: "Renowned school with a strong academic reputation",
                    image: "assets/images/Koderma/PvssDAVPublicSchool-Koderma.jpg",
                },
                {
                    name: "Saint Clare's School",
                    description: "Well-established school with a good academic record",
                    image: "assets/images/Koderma/SaintClare'sSchool-Koderma.jpg",
                },
                {
                    name: "Sainik School Koderma",
                    description: "Established school with a strong academic tradition",
                    image: "assets/images/Koderma/SainikSchool-Koderma.jpg",
                },
                {
                    name: "St. Joseph School",
                    description: "Established school with a strong academic tradition",
                    image: "assets/images/Koderma/St.JosephSchool-Koderma.jpg",
                }
            ],
            Colleges: [
                {
                    name: "Jharkhand Vidhi Mahavidyalaya",
                    description: "Well-known college with a strong academic reputation",
                    image: "assets/images/Koderma/JharkhandVidhiMahavidyalaya-Koderma.jpg",
                },
                {
                    name: "Jagannath College",
                    description: "Established college with a focus on vocational education",
                    image: "assets/images/Koderma/JagannathCollege-Koderma.jpg",
                },
                {
                    name: "Government Polytechnic",
                    description: "Well-established College with a strong academic tradition in commerce",
                    image: "assets/images/Koderma/GovernmentPolytechnic-Koderma.jpg",
                },
                {
                    name: "Grizzly College",
                    description: "Known college for quality education and research",
                    image: "assets/images/Giridih/GrizzlyCollege-Koderma.jpg",
                }
            ],
            Universities: [
                {
                    name: "Capital University",
                    description: "Well-established university with a strong academic tradition",
                    image: "assets/images/Koderma/CapitalUniversity-Koderma.jpg",
                },
                {
                    name: "Radha Govind Institute",
                    description: "Provides various courses and opportunities",
                    image: "assets/images/Koderma/RamgovindInstitute-Kodema.jpg",
                }
            ],
            Banks: [
                {
                    name: "Bank Of Baroda",
                    description: "Leading public sector bank",
                    image: "assets/images/Koderma/BankOfBaroda-Koderma.jpg",
                },
                {
                    name: "State Bank of India",
                    description: "Established public sector bank",
                    image: "assets/images/Koderma/SBIBank-Koderma.jpg",
                },
                {
                    name: "IndusInd Bank",
                    description: "Leading private sector bank",
                    image: "assets/images/Koderma/IndusIndBank-Koderma.jpg",
                },
                {
                    name: "Punjab National Bank",
                    description: "Established Public sector bank",
                    image: "assets/images/Koderma/PnBank-Koderma.jpg",
                }
            ],
            ATMs: [
                {
                    name: "Bank Of Baroda Bank ATM",
                    description: "Convenient ATM for cash withdrawals and banking services",
                    image: "assets/images/Koderma/BankOfBarodaATM-Koderma.jpg",
                },
                {
                    name: "State Bank of India ATM",
                    description: "Reliable ATM for cash withdrawals and banking services",
                    image: "assets/images/Koderma/SbiATM-Koderma.jpg",
                },
                {
                    name: "Central Bank ATM",
                    description: "Accessible ATM for cash withdrawals and banking services",
                    image: "assets/images/Koderma/CentralBankATM-Koderma.jpg",
                },
                {
                    name: "Punjab National Bank ATM",
                    description: "Convenient ATM for cash withdrawals and banking services",
                    image: "assets/images/Koderma/PnbATM-Koderma.jpg",
                }
            ],
            Parks: [
                {
                    name: "Maharshi Kardam Park",
                    description: "Famous park with beautiful gardens, a lake, and recreational facilities",
                    image: "assets/images/Koderma/MaharshiKardamPark-Koderma.jpg",
                },
                {
                    name: "Children Park",
                    description: "Scenic park with lush greenery and a peaceful atmosphere",
                    image: "assets/images/Koderma/ChildrenPark-Koderma.jpg",
                },
                {
                    name: "Atal Smirti Park",
                    description: "Popular park with a variety of flowers and educational programs",
                    image: "assets/images/Deoghar/AtalSmirtiPark-Deoghar.jpg",
                }
            ],
            "Railway Station": [
                {
                    name: "Koderma Junction",
                    description: "Major junction connecting to various cities and states",
                    image: "assets/images/Koderma/RailwayStation-Koderma.jpg",
                }
            ],
            "Bus Stand": [
                {
                    name: "Koderma Bus Stand",
                    description: "Primary bus stand connecting Koderma with major cities",
                    image: "assets/images/Koderma/BusStand-Koderma.jpg"
                }
            ],
            "Tourist Places": [
                {
                    name: "Maa Chanchala Devi Temple",
                    description: "Ancient Temple, famous in tourists and recreational facilities",
                    image: "assets/images/Koderma/MaaChanchalaDeviTemple-Koderma.jpg",
                },
                {
                    name: "Tilaiya Dam",
                    description: "Scenic Dam, offering boating and picnic spots",
                    image: "assets/images/Koderma/TilaiyaDam-Koderma.jpg",
                },
                {
                    name: "Koderma Wildlife Sanctuary",
                    description: "WildLife Sanctuary, famous in tourists",
                    image: "assets/images/Koderma/WildlifeSanctuary-Koderma.jpg",
                }
            ]
        }
    };

// Category Mapping
const categoryMap = {
    "Restaurants": "Restaurants",
    "Hotels": "Hotels",
    "Hospitals": "Hospitals",
    "Schools": "Schools",
    "Colleges": "Colleges",
    "Universities": "Universities",
    "Banks": "Banks",
    "ATMs": "ATMs",
    "Parks": "Parks",
    "Railway Station": "Railway Station",
    "Bus Stand": "Bus Stand",
    "Tourist Places": "Tourist Places"
};

// Load Category
function loadCategory() {
    if (!selectedCity || !selectedCategory) {
        window.location.href = "index.html";
        return;
    }
    document.getElementById("cityTitle").textContent = selectedCity;
    document.getElementById("categoryTitle").textContent = selectedCategory;
    document.getElementById("categorySubtitle").textContent =
        selectedCity + " • " + selectedCategory;
    const container = document.getElementById("categoryContainer");
    container.innerHTML = "";
    const data =
        tourismData[selectedCity]?.[selectedCategory] || [];
    if (data.length === 0) {
        container.innerHTML = `
            <h2 style="text-align:center;width:100%;">
                No data available.
            </h2>
        `;
        return;
    }

    data.forEach(item => {
        container.innerHTML += `
        <div class="card">
            <img src="${item.image}" alt="${item.name}">
            <div class="card-content">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <button onclick="viewPlace('${item.name}')">
                    View Details
                </button>
            </div>
        </div>
        `;
    });
}

// View Place
function viewPlace(place) {
    localStorage.setItem("selectedPlace", place);
    window.location.href = "place.html";
}

// Search
function searchPlace(keyword) {
    keyword = keyword.toLowerCase();
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        const title =
            card.querySelector("h3").textContent.toLowerCase();
        if (title.includes(keyword)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

// Scroll Animation
window.addEventListener("scroll", () => {
    document.querySelectorAll(".card").forEach(card => {
        const position = card.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0px)";
        }
    });
});

// Prepare Animation
function prepareCards() {
    document.querySelectorAll(".card").forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(50px)";
        card.style.transition = ".6s";
    });
}

// Page Loaded
window.onload = function () {
    loadCategory();
    prepareCards();
    console.log("Category Loaded");
};