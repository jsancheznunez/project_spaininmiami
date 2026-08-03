/**
 * Españoles en Miami – Core Application Controller
 * Author: Antigravity AI
 */

// ==================== MOCK DATA STORES ====================

const HOTSPOTS = {
  consulado: {
    id: 'consulado',
    category: 'institution',
    rating: 4.2,
    ratingCount: 342,
    coords: [115, 155],
    nameEs: 'Consulado General de España',
    nameEn: 'Consulate General of Spain',
    descEs: 'Sede consular oficial para la atención de ciudadanos españoles y extranjeros en Florida. Emisión de pasaportes, visados, NIE y Registro Civil.',
    descEn: 'Official consular office serving Spanish nationals and foreign residents in Florida. Issues passports, visas, NIE numbers, and civil registry.',
    address: '2655 Le Jeune Rd, Coral Gables, FL 33134',
    phone: '(305) 446-5511',
    hoursEs: 'Lunes a Viernes: 9:00 AM - 1:00 PM',
    hoursEn: 'Monday to Friday: 9:00 AM - 1:00 PM',
    website: 'https://www.exteriores.gob.es/Consulados/miami',
    img: 'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?q=80&w=400&auto=format&fit=crop'
  },
  cce: {
    id: 'cce',
    category: 'institution',
    rating: 4.8,
    ratingCount: 184,
    coords: [130, 110],
    nameEs: 'CCEMiami (Centro Cultural Español de Cooperación Iberoamericana)',
    nameEn: 'CCEMiami (Spanish Cultural Center of Ibero-American Cooperation)',
    descEs: 'Espacio cultural de referencia que promueve la cooperación y cultura de creadores españoles y latinoamericanos mediante exposiciones, teatro y música.',
    descEn: 'Premier cultural hub promoting Spanish and Latin American artists through exhibitions, micro-theater, live concerts, and educational events.',
    address: '1490 Biscayne Blvd, Miami, FL 33132',
    phone: '(305) 448-9677',
    hoursEs: 'Martes a Sábado: 10:00 AM - 6:00 PM',
    hoursEn: 'Tuesday to Saturday: 10:00 AM - 6:00 PM',
    website: 'https://ccemiami.org',
    img: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=400&auto=format&fit=crop'
  },
  chamber: {
    id: 'chamber',
    category: 'institution',
    rating: 4.7,
    ratingCount: 96,
    coords: [145, 95],
    nameEs: 'Spain-U.S. Chamber of Commerce (Cámara de Comercio de España en EE.UU.)',
    nameEn: 'Spain-U.S. Chamber of Commerce',
    descEs: 'Asociación comercial que impulsa las relaciones económicas de empresas españolas en el mercado estadounidense, ofreciendo consultoría y networking.',
    descEn: 'Leading trade chamber assisting Spanish enterprises expanding into the US market. Organizes corporate roundtables, trade programs, and networking events.',
    address: '1221 Brickell Ave #1950, Miami, FL 33131',
    phone: '(305) 358-5988',
    hoursEs: 'Lunes a Viernes: 9:00 AM - 5:00 PM',
    hoursEn: 'Monday to Friday: 9:00 AM - 5:00 PM',
    website: 'https://spainuscc.org',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=400&auto=format&fit=crop'
  },
  turismo: {
    id: 'turismo',
    category: 'institution',
    rating: 4.6,
    ratingCount: 114,
    coords: [138, 85],
    nameEs: 'Oficina de Turismo de España en Miami',
    nameEn: 'Tourist Office of Spain in Miami',
    descEs: 'Organismo oficial del gobierno de España (Turespaña) para la promoción turística de España en el sureste de los EE.UU. Ofrece folletos, mapas de carreteras y guías de destinos.',
    descEn: 'Official government agency (Turespaña) dedicated to promoting tourism in Spain throughout the Southeastern US. Provides travel maps, region brochures, and destination guides.',
    address: '1395 Brickell Ave #1130, Miami, FL 33131',
    phone: '(305) 358-1992',
    hoursEs: 'Lunes a Viernes: 9:00 AM - 4:00 PM',
    hoursEn: 'Monday to Friday: 9:00 AM - 4:00 PM',
    website: 'https://www.spain.info',
    img: 'https://images.unsplash.com/photo-1503917988258-f87a78e3c995?q=80&w=400&auto=format&fit=crop'
  },
  xixon: {
    id: 'xixon',
    category: 'dining',
    rating: 4.6,
    ratingCount: 1542,
    coords: [125, 130],
    nameEs: 'Xixón Spanish Restaurant',
    nameEn: 'Xixón Spanish Restaurant',
    descEs: 'Bodega y restaurante asturiano insigne en Miami. Famoso por su jamón cortado a mano, croquetas caseras, sidra escanciada y una de las cavas de vinos españoles más extensas.',
    descEn: 'Authentic Asturian tavern and restaurant in Miami. Renowned for hand-carved jamón ibérico, homemade croquetas, sidra, and one of the largest Spanish wine cellars in FL.',
    address: '2101 SW 22nd St, Miami, FL 33145',
    phone: '(305) 854-9355',
    hoursEs: 'Todos los días: 11:30 AM - 10:30 PM',
    hoursEn: 'Open Daily: 11:30 AM - 10:30 PM',
    website: 'https://xixonrestaurant.com',
    img: 'https://images.unsplash.com/photo-1515443961218-a5136d888be1?q=80&w=400&auto=format&fit=crop'
  },
  juanchos: {
    id: 'juanchos',
    category: 'dining',
    rating: 4.5,
    ratingCount: 1205,
    coords: [100, 120],
    nameEs: 'Casa Juancho',
    nameEn: 'Casa Juancho',
    descEs: 'Restaurante tradicional con ambiente rústico medieval castellano en la Calle Ocho. Destaca por sus asados al horno de leña, paellas valencianas y música en directo.',
    descEn: 'Iconic Spanish landmark on Calle Ocho offering rustic Castilian decor. Famous for wood-fired suckling pig, traditional seafood paellas, and live Spanish guitar.',
    address: '2436 SW 8th St, Miami, FL 33135',
    phone: '(305) 646-5999',
    hoursEs: 'Miércoles a Domingo: 12:00 PM - 10:00 PM',
    hoursEn: 'Wednesday to Sunday: 12:00 PM - 10:00 PM',
    website: 'https://casajuancho.com',
    img: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=400&auto=format&fit=crop'
  },
  bulla: {
    id: 'bulla',
    category: 'dining',
    rating: 4.6,
    ratingCount: 2150,
    coords: [90, 160],
    nameEs: 'Bulla Gastrobar (Coral Gables)',
    nameEn: 'Bulla Gastrobar (Coral Gables)',
    descEs: 'Gastrobar contemporáneo andaluz vibrante en la Milla de los Milagros. Tapas creativas perfectas para compartir, patatas bravas, tortillas jugosas y sangría artesanal.',
    descEn: 'Contemporary Andalusian-style gastrobar on Miracle Mile. Serves innovative tapas, crispy patatas bravas, melt-in-your-mouth tortillas, and handcrafted sangria pitchers.',
    address: '2500 Ponce de Leon, Coral Gables, FL 33134',
    phone: '(305) 441-0107',
    hoursEs: 'Todos los días: 11:30 AM - 10:00 PM',
    hoursEn: 'Open Daily: 11:30 AM - 10:00 PM',
    website: 'https://bullagastrobar.com',
    img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=400&auto=format&fit=crop'
  },
  ispa: {
    id: 'ispa',
    category: 'education',
    rating: 4.9,
    ratingCount: 78,
    coords: [105, 175],
    nameEs: 'ISPA - Academias de Estudios Internacionales',
    nameEn: 'ISPA - International Studies Prep Academy',
    descEs: 'Colegio de educación secundaria oficial que ofrece currículo bilingüe hispano-estadounidense con el sello ISA del Ministerio de Educación de España.',
    descEn: 'Highly-rated public high school offering an integrated dual-language curriculum in collaboration with the Ministry of Education of Spain.',
    address: '1570 Madruga Ave, Coral Gables, FL 33146',
    phone: '(305) 663-7200',
    hoursEs: 'Lunes a Viernes: 7:30 AM - 3:30 PM',
    hoursEn: 'Monday to Friday: 7:30 AM - 3:30 PM',
    website: 'https://ispa.dadeschools.net',
    img: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=400&auto=format&fit=crop'
  },
  mhcac: {
    id: 'mhcac',
    category: 'institution',
    rating: 4.8,
    ratingCount: 215,
    coords: [135, 118],
    nameEs: 'Miami Hispanic Cultural Arts Center',
    nameEn: 'Miami Hispanic Cultural Arts Center',
    descEs: 'Sede del Ballet Clásico de Miami y la Creation Art Center. Ubicado en la histórica J.W. Warner House, es un núcleo vibrante que promueve artes plásticas, literatura, música y danza hispana.',
    descEn: 'Home to the Miami Hispanic Ballet and Creation Art Center. Housed in the historic J.W. Warner House, it is a vibrant hub promoting Hispanic visual arts, literature, music, and dance.',
    address: '111 SW 5th Ave, Miami, FL 33130',
    phone: '(305) 549-7711',
    hoursEs: 'Lunes a Sábado: 9:00 AM - 9:00 PM',
    hoursEn: 'Monday to Saturday: 9:00 AM - 9:00 PM',
    website: 'http://www.miamihispanicculturalartscenter.org',
    img: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=400&auto=format&fit=crop'
  }
};

const EVENTS = [
  {
    id: 'flamenco',
    category: 'culture',
    day: '08',
    monthEs: 'AGO',
    monthEn: 'AUG',
    year: '2026',
    titleEs: 'Noche de Tablao Flamenco en Directo',
    titleEn: 'Live Flamenco Tablao Night',
    descEs: 'Disfruta de la pasión de la guitarra, el cante y el baile flamenco a cargo del elenco estelar del Centro Cultural Español en Miami.',
    descEn: 'Experience the raw passion of guitar, cante, and flamenco dance performed by premier Spanish artists at CCEMiami.',
    location: 'CCEMiami, Edificio Omnicentre',
    time: '8:00 PM',
    priceEs: '$25 (Copas incluidas)',
    priceEn: '$25 (Drinks included)'
  },
  {
    id: 'networking',
    category: 'business',
    day: '13',
    monthEs: 'AGO',
    monthEn: 'AUG',
    year: '2026',
    titleEs: 'Mesa Redonda: Innovación Española en Florida',
    titleEn: 'Business Panel: Spanish Tech in Florida',
    descEs: 'Conferencia y mesa redonda con líderes de startups españolas implantadas en Miami. Ideal para networking, inversión y carreras profesionales.',
    descEn: 'Keynote and panel discussion with founders of Spanish tech scaleups established in South Florida. Ideal for networking and career growth.',
    location: 'Spain-US Chamber of Commerce, Brickell',
    time: '6:30 PM',
    priceEs: 'Gratuito (Registro previo)',
    priceEn: 'Free (RSVP Required)'
  },
  {
    id: 'rioja',
    category: 'gastronomy',
    day: '20',
    monthEs: 'AGO',
    monthEn: 'AUG',
    year: '2026',
    titleEs: 'Gran Cata de Vinos: Rioja & Ribera del Duero',
    titleEn: 'Elite Spanish Wine Tasting: Rioja & Ribera',
    descEs: 'Sumérgete en la cultura vinícola de España con un sumiller experto. Degustación de 5 reservas exclusivas maridados con quesos y jamón.',
    descEn: 'Immerse yourself in Spain’s legendary terroirs with an expert sommelier. Sample 5 select reserves paired with artisanal cheeses and cured meats.',
    location: 'Xixón Spanish Restaurant Cellar',
    time: '7:00 PM',
    priceEs: '$65 por persona',
    priceEn: '$65 per person'
  },
  {
    id: 'cinema',
    category: 'culture',
    day: '10',
    monthEs: 'SEP',
    monthEn: 'SEP',
    year: '2026',
    titleEs: 'Ciclo de Cine Contemporáneo Español',
    titleEn: 'Contemporary Spanish Cinema Series',
    descEs: 'Proyección al aire libre de galardonados largometrajes y cortometrajes españoles nominados a los Premios Goya con debate posterior.',
    descEn: 'Outdoor screening of acclaimed Spanish indie feature films and shorts nominated for Goya Awards, followed by director Q&As.',
    location: 'Tower Theater, Little Havana',
    time: '7:30 PM',
    priceEs: '$12 General / $8 Socios',
    priceEn: '$12 General / $8 Members'
  }
];

const EU_CONSULATES = [
  {
    id: 'eu-spain',
    countryEs: 'España',
    countryEn: 'Spain',
    type: 'general',
    nameEs: 'Consulado General de España',
    nameEn: 'Consulate General of Spain',
    address: '2655 Le Jeune Rd, Coral Gables, FL 33134',
    phone: '(305) 446-5511',
    website: 'https://www.exteriores.gob.es/Consulados/miami',
    email: 'cog.miami@maec.es',
    hoursEs: 'Lunes a Viernes: 9:00 AM - 1:00 PM',
    hoursEn: 'Monday to Friday: 9:00 AM - 1:00 PM',
    servicesEs: 'Pasaportes, visados nacionales y Schengen, NIE, Registro Civil, legalizaciones y asistencia consular.',
    servicesEn: 'Passports, national and Schengen visas, NIE numbers, Civil Registry, legalizations, and consular assistance.',
    coords: [115, 155]
  },
  {
    id: 'eu-france',
    countryEs: 'Francia',
    countryEn: 'France',
    type: 'general',
    nameEs: 'Consulado General de Francia',
    nameEn: 'Consulate General of France',
    address: '80 SW 8th St, Suite 4400, Miami, FL 33130',
    phone: '(305) 403-4100',
    website: 'https://miami.consulfrance.org',
    email: 'info@consulfrance-miami.org',
    hoursEs: 'Lunes a Viernes: 8:45 AM - 12:30 PM (Con cita)',
    hoursEn: 'Monday to Friday: 8:45 AM - 12:30 PM (By appointment)',
    servicesEs: 'Renovación de pasaportes franceses, registro de ciudadanos, visados para Francia, ayuda de emergencia.',
    servicesEn: 'French passport renewal, registration of nationals, visa services for France, emergency consular support.',
    coords: [152, 90]
  },
  {
    id: 'eu-germany',
    countryEs: 'Alemania',
    countryEn: 'Germany',
    type: 'general',
    nameEs: 'Consulado General de Alemania',
    nameEn: 'Consulate General of Germany',
    address: '100 N Biscayne Blvd, Suite 2200, Miami, FL 33132',
    phone: '(305) 358-0290',
    website: 'https://www.germany.info',
    email: 'info@miami.diplo.de',
    hoursEs: 'Lunes a Viernes: 9:00 AM - 12:00 PM',
    hoursEn: 'Monday to Friday: 9:00 AM - 12:00 PM',
    servicesEs: 'Pasaportes alemanes, visados Schengen y de larga duración, declaraciones de nombre, notaría y legalizaciones.',
    servicesEn: 'German passports, Schengen and long-stay visas, name declarations, notary work, and legalizations.',
    coords: [130, 70]
  },
  {
    id: 'eu-italy',
    countryEs: 'Italia',
    countryEn: 'Italy',
    type: 'general',
    nameEs: 'Consulado General de Italia',
    nameEn: 'Consulate General of Italy',
    address: '4000 Ponce de Leon Blvd, Suite 380, Coral Gables, FL 33146',
    phone: '(305) 374-6322',
    website: 'https://consmiami.esteri.it',
    email: 'consulato.miami@esteri.it',
    hoursEs: 'Lunes a Viernes: 9:00 AM - 12:30 PM',
    hoursEn: 'Monday to Friday: 9:00 AM - 12:30 PM',
    servicesEs: 'Pasaportes italianos, visados de estudios, turismo y trabajo, registro AIRE, poderes notariales.',
    servicesEn: 'Italian passports, study, tourist, and work visas, AIRE registration, notary powers of attorney.',
    coords: [105, 145]
  },
  {
    id: 'eu-netherlands',
    countryEs: 'Países Bajos',
    countryEn: 'Netherlands',
    type: 'general',
    nameEs: 'Consulado General de los Países Bajos',
    nameEn: 'Consulate General of the Netherlands',
    address: '1221 Brickell Ave, Suite 1000, Miami, FL 33131',
    phone: '(786) 866-0480',
    website: 'https://www.netherlandsworldwide.nl',
    email: 'mia@minbuza.nl',
    hoursEs: 'Lunes a Viernes: 9:00 AM - 4:00 PM (Solo cita)',
    hoursEn: 'Monday to Friday: 9:00 AM - 4:00 PM (Appointment only)',
    servicesEs: 'Asistencia consular de emergencia, pasaportes holandeses, visados Schengen (gestionados principalmente online/VFS).',
    servicesEn: 'Emergency consular assistance, Dutch passports, Schengen visas (mainly managed online/VFS).',
    coords: [142, 105]
  },
  {
    id: 'eu-romania',
    countryEs: 'Rumanía',
    countryEn: 'Romania',
    type: 'general',
    nameEs: 'Consulado General de Rumanía',
    nameEn: 'Consulate General of Romania',
    address: '801 Brickell Ave, Suite 900, Miami, FL 33131',
    phone: '(305) 763-8874',
    website: 'http://miami.mae.ro',
    email: 'miami@mae.ro',
    hoursEs: 'Lunes a Viernes: 9:00 AM - 3:00 PM',
    hoursEn: 'Monday to Friday: 9:00 AM - 3:00 PM',
    servicesEs: 'Pasaportes rumanos, visados, Registro Civil (nacimiento, matrimonio), legalizaciones y poderes.',
    servicesEn: 'Romanian passports, visas, Civil Registry (birth, marriage), legalizations, and powers of attorney.',
    coords: [140, 115]
  },
  {
    id: 'eu-ireland',
    countryEs: 'Irlanda',
    countryEn: 'Ireland',
    type: 'general',
    nameEs: 'Consulado General de Irlanda',
    nameEn: 'Consulate General of Ireland',
    address: '200 S Biscayne Blvd, Suite 2800, Miami, FL 33131',
    phone: '(305) 507-6200',
    website: 'https://www.dfa.ie/miami',
    email: 'miamiconsulate@dfa.ie',
    hoursEs: 'Lunes a Viernes: 9:30 AM - 12:30 PM',
    hoursEn: 'Monday to Friday: 9:30 AM - 12:30 PM',
    servicesEs: 'Asistencia consular a ciudadanos irlandeses, salvoconductos, visas de viaje y promoción comercial.',
    servicesEn: 'Consular assistance to Irish citizens, emergency travel documents, travel visas, and business promotion.',
    coords: [145, 75]
  },
  {
    id: 'eu-hungary',
    countryEs: 'Hungría',
    countryEn: 'Hungary',
    type: 'general',
    nameEs: 'Consulado General de Hungría',
    nameEn: 'Consulate General of Hungary',
    address: '2121 Ponce de Leon Blvd, Suite 710, Coral Gables, FL 33134',
    phone: '(305) 448-2633',
    website: 'https://miami.mfa.gov.hu',
    email: 'mission.mia@mfa.gov.hu',
    hoursEs: 'Martes y Jueves: 9:00 AM - 12:00 PM',
    hoursEn: 'Tuesday and Thursday: 9:00 AM - 12:00 PM',
    servicesEs: 'Pasaportes, ciudadanía húngara, Registro Civil, legalización de firmas y poderes, visas.',
    servicesEn: 'Passports, Hungarian citizenship, Civil Registry, legalization of signatures and powers of attorney, visas.',
    coords: [95, 140]
  },
  {
    id: 'eu-austria',
    countryEs: 'Austria',
    countryEn: 'Austria',
    type: 'honorary',
    nameEs: 'Consulado Honorario de Austria',
    nameEn: 'Honorary Consulate of Austria',
    address: '2445 Aqua Vista Blvd, Fort Lauderdale, FL 33301',
    phone: '(954) 467-1750',
    website: 'https://www.austria.org',
    email: 'austrianconsulate@aol.com',
    hoursEs: 'Solo con cita previa',
    hoursEn: 'By appointment only',
    servicesEs: 'Asistencia de emergencia para ciudadanos austriacos, legalizaciones limitadas. No procesa visados.',
    servicesEn: 'Emergency assistance for Austrian citizens, limited legalizations. Does not process visa applications.',
    coords: [130, 20]
  },
  {
    id: 'eu-belgium',
    countryEs: 'Bélgica',
    countryEn: 'Belgium',
    type: 'honorary',
    nameEs: 'Consulado Honorario de Bélgica',
    nameEn: 'Honorary Consulate of Belgium',
    address: '200 S Biscayne Blvd, Suite 3600, Miami, FL 33131',
    phone: '(305) 350-0220',
    website: 'https://unitedstates.belgium.be',
    email: 'belgianconsulatemiami@gmail.com',
    hoursEs: 'Solo con cita previa',
    hoursEn: 'By appointment only',
    servicesEs: 'Asistencia consular a nacionales belgas, pasaportes provisionales de urgencia. Sin servicios de visado.',
    servicesEn: 'Consular assistance to Belgian nationals, emergency provisional passports. No visa services.',
    coords: [148, 80]
  },
  {
    id: 'eu-sweden',
    countryEs: 'Suecia',
    countryEn: 'Sweden',
    type: 'honorary',
    nameEs: 'Consulado Honorario de Suecia',
    nameEn: 'Honorary Consulate of Sweden',
    address: '1500 San Ignacio Ave, Suite 4, Coral Gables, FL 33146',
    phone: '(305) 600-0985',
    website: 'https://www.swedenabroad.se',
    email: 'miami@consulateofsweden.org',
    hoursEs: 'Lunes a Viernes: 9:00 AM - 12:00 PM (Solo cita)',
    hoursEn: 'Monday to Friday: 9:00 AM - 12:00 PM (Appointment only)',
    servicesEs: 'Recogida de pasaportes y licencias de conducir aprobados, asistencia de emergencia. No emite pasaportes normales ni visas.',
    servicesEn: 'Collection of approved passports and driver\'s licenses, emergency assistance. Does not issue regular passports or visas.',
    coords: [100, 185]
  },
  {
    id: 'eu-poland',
    countryEs: 'Polonia',
    countryEn: 'Poland',
    type: 'honorary',
    nameEs: 'Consulado Honorario de Polonia',
    nameEn: 'Honorary Consulate of Poland',
    address: '1440 79th Street Causeway, Suite 117, North Miami, FL 33141',
    phone: '(305) 866-0007',
    website: 'https://www.gov.pl/web/usa',
    email: 'polandconsulate@aol.com',
    hoursEs: 'Solo con cita previa',
    hoursEn: 'By appointment only',
    servicesEs: 'Protección y asistencia a ciudadanos polacos, promoción de lazos culturales y comerciales. Sin visados.',
    servicesEn: 'Protection and assistance to Polish citizens, promoting cultural and business ties. No visa services.',
    coords: [235, 60]
  },
  {
    id: 'eu-denmark',
    countryEs: 'Dinamarca',
    countryEn: 'Denmark',
    type: 'honorary',
    nameEs: 'Consulado Honorario de Dinamarca',
    nameEn: 'Honorary Consulate of Denmark',
    address: '213 Siboney Ave, Coral Gables, FL 33143',
    phone: '(305) 446-0020',
    website: 'https://usa.um.dk',
    email: 'miamiconsulate@denmarkfl.com',
    hoursEs: 'Solo con cita previa',
    hoursEn: 'By appointment only',
    servicesEs: 'Renovación de pasaportes para niños menores de 12 años, pasaportes de emergencia, solicitudes de licencia de conducir danesa. Sin visados.',
    servicesEn: 'Passport renewals for children under 12, emergency passports, Danish driver\'s license applications. No visa services.',
    coords: [110, 195]
  }
];

// ==================== APP CONTROLLER STATE ====================

const AppState = {
  lang: localStorage.getItem('esMiami_lang') || 'es',
  theme: localStorage.getItem('esMiami_theme') || 'light',
  currentSection: 'home',
  activeMapPinId: null,
  activeResourceTab: 'consular',
  directoryFilter: 'all',
  eventFilter: 'all',
  euFilter: 'all',
  eventsView: 'list' // 'list' or 'grid'
};

// ==================== INITIALIZATION ====================

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
  setupNavigation();
  setupSearch();
  
  // Section-specific setups
  setupDirectorySection();
  setupEventsSection();
  setupResourcesSection();
  setupEuConsulatesSection();
  setupChatbot();
  setupContactSection();
  initRelocationChecklist();
  setupRegistrationPortal();
});

// ==================== THEME CONTROLLER ====================

function initTheme() {
  document.documentElement.setAttribute('data-theme', AppState.theme);
  updateThemeIcon();
  
  document.getElementById('themeToggleBtn').addEventListener('click', () => {
    AppState.theme = AppState.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('esMiami_theme', AppState.theme);
    document.documentElement.setAttribute('data-theme', AppState.theme);
    updateThemeIcon();
  });
}

function updateThemeIcon() {
  const btn = document.getElementById('themeToggleBtn');
  if (AppState.theme === 'dark') {
    btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
  } else {
    btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="theme-icon-dark"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
  }
}

// ==================== LANGUAGE SYSTEM ====================

function initLanguage() {
  updateLanguageDom();
  
  document.getElementById('langToggleBtn').addEventListener('click', () => {
    AppState.lang = AppState.lang === 'es' ? 'en' : 'es';
    localStorage.setItem('esMiami_lang', AppState.lang);
    updateLanguageDom();
  });
}

function updateLanguageDom() {
  const body = document.body;
  const langBtn = document.getElementById('langToggleBtn');
  
  if (AppState.lang === 'en') {
    body.classList.remove('lang-es');
    body.classList.add('lang-en');
    langBtn.textContent = 'ES';
  } else {
    body.classList.remove('lang-en');
    body.classList.add('lang-es');
    langBtn.textContent = 'EN';
  }
  
  // Translate inputs placeholders
  document.querySelectorAll('[data-placeholder-es]').forEach(input => {
    const ph = AppState.lang === 'es' ? input.getAttribute('data-placeholder-es') : input.getAttribute('data-placeholder-en');
    input.setAttribute('placeholder', ph);
  });
  
  // Re-render components with translated content
  renderDirectoryList();
  renderActiveDetail();
  renderEvents();
  renderEuConsulates();
  
  // Update HTML lang tag
  document.documentElement.setAttribute('lang', AppState.lang);
}

// ==================== NAVIGATION CONTROLLER ====================

function setupNavigation() {
  const navItems = document.querySelectorAll('.nav-menu-item, .mobile-nav-item');
  const menuToggle = document.getElementById('menuToggleBtn');
  const navMenu = document.querySelector('.nav-menu');
  
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      navMenu.classList.toggle('active');
    });
    
    // Close mobile menu if clicked outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        navMenu.classList.remove('active');
      }
    });
  }
  
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      const target = item.getAttribute('data-target');
      switchSection(target);
      
      // Close top nav menu on mobile when item is selected
      if (navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
      }
    });
  });
}

function switchSection(sectionId) {
  let targetId = sectionId;
  let shouldScrollToChecklist = false;
  if (sectionId === 'relocation') {
    targetId = 'home';
    shouldScrollToChecklist = true;
  }

  // Hide all sections
  document.querySelectorAll('.app-section').forEach(sec => {
    sec.classList.remove('active');
  });
  
  // Show active section
  const activeSec = document.getElementById(`sec-${targetId}`);
  if (activeSec) {
    activeSec.classList.add('active');
    if (shouldScrollToChecklist) {
      setTimeout(() => {
        const checklist = document.getElementById('onboarding-checklist');
        if (checklist) {
          checklist.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
  
  AppState.currentSection = sectionId;
  
  // Update active state in nav elements
  document.querySelectorAll('.nav-menu-item, .mobile-nav-item').forEach(el => {
    if (el.getAttribute('data-target') === sectionId) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
}

// ==================== GLOBAL SEARCH BAR ====================

function setupSearch() {
  const searchInput = document.getElementById('globalSearch');
  
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (!query) {
      // Return directory, events, and marketplace filters to all
      resetFilters();
      return;
    }
    
    // Perform unified filtering across all active listings in current views
    filterDirectoryBySearch(query);
    filterEventsBySearch(query);
    filterEuConsulatesBySearch(query);
  });
}

function resetFilters() {
  renderDirectoryList();
  renderEvents();
  renderEuConsulates();
}

// ==================== DIRECTORY & INTERACTIVE MAP ====================

function setupDirectorySection() {
  // SVG Map Pin Click Handlers
  const pins = document.querySelectorAll('.map-pin');
  pins.forEach(pin => {
    pin.addEventListener('click', () => {
      const id = pin.getAttribute('data-id');
      selectHotspot(id);
    });
  });
  
  // Filter button clicks
  const filters = document.getElementById('directoryFilters').querySelectorAll('.filter-tab');
  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      filters.forEach(f => f.classList.remove('active'));
      btn.classList.add('active');
      AppState.directoryFilter = btn.getAttribute('data-category');
      renderDirectoryList();
      updateMapPinVisibility();
    });
  });
}

function selectHotspot(id) {
  AppState.activeMapPinId = id;
  
  // Highlight map pin
  document.querySelectorAll('.map-pin').forEach(pin => {
    if (pin.getAttribute('data-id') === id) {
      pin.classList.add('active');
    } else {
      pin.classList.remove('active');
    }
  });
  
  // Highlight list item
  document.querySelectorAll('.directory-item').forEach(item => {
    if (item.getAttribute('data-id') === id) {
      item.classList.add('active');
      item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } else {
      item.classList.remove('active');
    }
  });
  
  renderActiveDetail();
}

function renderDirectoryList() {
  const container = document.getElementById('directoryList');
  container.innerHTML = '';
  
  Object.values(HOTSPOTS).forEach(spot => {
    // Apply category filter
    if (AppState.directoryFilter !== 'all' && spot.category !== AppState.directoryFilter) return;
    
    const name = AppState.lang === 'es' ? spot.nameEs : spot.nameEn;
    const desc = AppState.lang === 'es' ? spot.descEs : spot.descEn;
    
    const item = document.createElement('div');
    item.className = `directory-item ${AppState.activeMapPinId === spot.id ? 'active' : ''}`;
    item.setAttribute('data-id', spot.id);
    
    const categoryTag = getCategoryTagText(spot.category);
    
    item.innerHTML = `
      <img src="${spot.img}" alt="${name}" class="directory-item-img">
      <div class="directory-item-info">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span class="directory-badge">${categoryTag}</span>
          <span style="font-size:0.8rem; font-weight:600; color:var(--color-primary)">★ ${spot.rating}</span>
        </div>
        <h4 style="margin-top:0.3rem">${name}</h4>
        <p class="snippet" style="font-size:0.8rem">${desc}</p>
      </div>
    `;
    
    item.addEventListener('click', () => {
      selectHotspot(spot.id);
    });
    
    container.appendChild(item);
  });
}

function updateMapPinVisibility() {
  document.querySelectorAll('.map-pin').forEach(pin => {
    const id = pin.getAttribute('data-id');
    const spot = HOTSPOTS[id];
    if (AppState.directoryFilter === 'all' || spot.category === AppState.directoryFilter) {
      pin.style.display = 'block';
    } else {
      pin.style.display = 'none';
    }
  });
}

function renderActiveDetail() {
  const emptyState = document.getElementById('detailEmptyState');
  const content = document.getElementById('detailContent');
  
  if (!AppState.activeMapPinId) {
    emptyState.style.display = 'block';
    content.style.display = 'none';
    return;
  }
  
  emptyState.style.display = 'none';
  content.style.display = 'block';
  
  const spot = HOTSPOTS[AppState.activeMapPinId];
  const name = AppState.lang === 'es' ? spot.nameEs : spot.nameEn;
  const desc = AppState.lang === 'es' ? spot.descEs : spot.descEn;
  const hours = AppState.lang === 'es' ? spot.hoursEs : spot.hoursEn;
  
  const webLabel = AppState.lang === 'es' ? 'Visitar Sitio Web' : 'Visit Official Web';
  const callLabel = AppState.lang === 'es' ? 'Llamar' : 'Call Business';
  
  content.innerHTML = `
    <img src="${spot.img}" alt="${name}" class="detail-img">
    <div class="detail-header" style="margin-top:0.75rem">
      <div>
        <h3>${name}</h3>
        <div style="display:flex; align-items:center; gap:0.25rem; font-size:0.9rem; font-weight:600; color:var(--color-primary); margin-top:0.2rem">
          <span>★ ${spot.rating}</span>
          <span style="color:var(--color-text-muted); font-weight:400; font-size:0.75rem">(${spot.ratingCount} reviews)</span>
        </div>
      </div>
    </div>
    
    <p>${desc}</p>
    
    <div style="display:flex; flex-direction:column; gap:0.5rem; border-top:1px solid var(--color-border); padding-top:1rem; margin-top:0.5rem">
      <div class="detail-meta-row">
        <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
        <span><strong>${AppState.lang === 'es' ? 'Horario:' : 'Hours:'}</strong> ${hours}</span>
      </div>
      
      <div class="detail-meta-row">
        <svg viewBox="0 0 24 24"><circle cx="12" cy="10" r="3"></circle><path d="M12 21.7C10.3 19.8 5 13 5 10a7 7 0 1 1 14 0c0 3-5.3 9.8-7 11.7z"></path></svg>
        <span><strong>${AppState.lang === 'es' ? 'Dirección:' : 'Address:'}</strong> ${spot.address}</span>
      </div>
      
      <div class="detail-meta-row">
        <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
        <span><strong>${AppState.lang === 'es' ? 'Teléfono:' : 'Phone:'}</strong> ${spot.phone}</span>
      </div>
    </div>
    
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.75rem; margin-top:1.25rem;">
      <a href="${spot.website}" target="_blank" class="btn btn-primary" style="text-align:center">${webLabel}</a>
      <a href="tel:${spot.phone.replace(/[^0-9]/g, '')}" class="btn btn-secondary" style="text-align:center">${callLabel}</a>
    </div>
  `;
}

function filterDirectoryBySearch(query) {
  const container = document.getElementById('directoryList');
  container.innerHTML = '';
  
  Object.values(HOTSPOTS).forEach(spot => {
    const name = (AppState.lang === 'es' ? spot.nameEs : spot.nameEn).toLowerCase();
    const desc = (AppState.lang === 'es' ? spot.descEs : spot.descEn).toLowerCase();
    const address = spot.address.toLowerCase();
    
    if (name.includes(query) || desc.includes(query) || address.includes(query)) {
      const nameTxt = AppState.lang === 'es' ? spot.nameEs : spot.nameEn;
      const descTxt = AppState.lang === 'es' ? spot.descEs : spot.descEn;
      
      const item = document.createElement('div');
      item.className = `directory-item ${AppState.activeMapPinId === spot.id ? 'active' : ''}`;
      item.setAttribute('data-id', spot.id);
      
      item.innerHTML = `
        <img src="${spot.img}" alt="${nameTxt}" class="directory-item-img">
        <div class="directory-item-info">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span class="directory-badge">${getCategoryTagText(spot.category)}</span>
            <span style="font-size:0.8rem; font-weight:600; color:var(--color-primary)">★ ${spot.rating}</span>
          </div>
          <h4 style="margin-top:0.3rem">${nameTxt}</h4>
          <p class="snippet" style="font-size:0.8rem">${descTxt}</p>
        </div>
      `;
      item.addEventListener('click', () => selectHotspot(spot.id));
      container.appendChild(item);
    }
  });
}

function getCategoryTagText(cat) {
  if (AppState.lang === 'es') {
    if (cat === 'dining') return 'Restaurantes y Tapas';
    if (cat === 'institution') return 'Instituciones';
    if (cat === 'education') return 'Colegios e ISA';
  } else {
    if (cat === 'dining') return 'Restaurants & Bars';
    if (cat === 'institution') return 'Institutions';
    if (cat === 'education') return 'Schools & ISA';
  }
  return cat;
}

// ==================== EVENTS & CALENDAR SECTION ====================

function setupEventsSection() {
  // View Toggle Clicks
  document.getElementById('eventViewList').addEventListener('click', () => {
    toggleEventsView('list');
  });
  
  document.getElementById('eventViewGrid').addEventListener('click', () => {
    toggleEventsView('grid');
  });
  
  // Event Filter clicks
  const filters = document.getElementById('eventFilters').querySelectorAll('.filter-tab');
  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      filters.forEach(f => f.classList.remove('active'));
      btn.classList.add('active');
      AppState.eventFilter = btn.getAttribute('data-event-cat');
      renderEvents();
    });
  });
  
  renderEvents();
}

function toggleEventsView(view) {
  AppState.eventsView = view;
  const listBtn = document.getElementById('eventViewList');
  const gridBtn = document.getElementById('eventViewGrid');
  const listContainer = document.getElementById('eventsListContainer');
  const gridContainer = document.getElementById('eventsCalendarGridContainer');
  
  if (view === 'list') {
    listBtn.classList.add('active');
    gridBtn.classList.remove('active');
    listContainer.style.display = 'grid';
    gridContainer.style.display = 'none';
  } else {
    listBtn.classList.remove('active');
    gridBtn.classList.add('active');
    listContainer.style.display = 'none';
    gridContainer.style.display = 'block';
    renderCalendarGrid();
  }
}

function renderEvents() {
  const container = document.getElementById('eventsListContainer');
  container.innerHTML = '';
  
  EVENTS.forEach(ev => {
    if (AppState.eventFilter !== 'all' && ev.category !== AppState.eventFilter) return;
    
    const title = AppState.lang === 'es' ? ev.titleEs : ev.titleEn;
    const desc = AppState.lang === 'es' ? ev.descEs : ev.descEn;
    const price = AppState.lang === 'es' ? ev.priceEs : ev.priceEn;
    const month = AppState.lang === 'es' ? ev.monthEs : ev.monthEn;
    
    const card = document.createElement('div');
    card.className = 'glass-card event-card';
    
    const tagLabel = getEventCategoryLabel(ev.category);
    
    card.innerHTML = `
      <div class="event-date-badge">
        <span class="event-date-day">${ev.day}</span>
        <span class="event-date-month">${month}</span>
      </div>
      <div style="padding-right: 60px;">
        <span class="event-tag">${tagLabel}</span>
        <h3 style="margin-bottom:0.75rem">${title}</h3>
      </div>
      <p style="font-size:0.85rem">${desc}</p>
      
      <div style="border-top:1px solid var(--color-border); padding-top:0.75rem; margin-top:auto; font-size:0.8rem; color:var(--color-text-muted); display:flex; flex-direction:column; gap:0.35rem">
        <div>📍 <strong>${ev.location}</strong></div>
        <div>🕒 <strong>${ev.time}</strong></div>
        <div style="color:var(--color-primary)">💰 <strong>${price}</strong></div>
      </div>
      
      <button class="btn btn-secondary" style="margin-top: 1rem; width:100%" onclick="downloadEventIcs('${ev.id}')">
        <span>🗓️ ${AppState.lang === 'es' ? 'Añadir al Calendario' : 'Add to Calendar'}</span>
      </button>
    `;
    
    container.appendChild(card);
  });
}

function getEventCategoryLabel(cat) {
  if (AppState.lang === 'es') {
    if (cat === 'culture') return 'Cultura';
    if (cat === 'business') return 'Negocios';
    if (cat === 'gastronomy') return 'Vinos y Tapas';
  } else {
    if (cat === 'culture') return 'Culture & Art';
    if (cat === 'business') return 'Networking';
    if (cat === 'gastronomy') return 'Gastronomy';
  }
  return cat;
}

function renderCalendarGrid() {
  const container = document.getElementById('calendarDaysGrid');
  container.innerHTML = '';
  
  // Set month title
  const monthTitle = document.getElementById('calendarMonthTitle');
  if (monthTitle) {
    monthTitle.innerHTML = AppState.lang === 'es' ? 'Agosto 2026' : 'August 2026';
  }
  
  // August 2026 starts on a Saturday.
  // Empty blocks for padding (Monday-Friday = 5 blocks)
  for (let i = 0; i < 5; i++) {
    const pad = document.createElement('div');
    pad.style.background = 'transparent';
    container.appendChild(pad);
  }
  
  // Render 31 days of August
  for (let day = 1; day <= 31; day++) {
    const dayEl = document.createElement('div');
    dayEl.style.borderRadius = 'var(--radius-sm)';
    dayEl.style.border = '1px solid var(--color-border)';
    dayEl.style.padding = '0.5rem';
    dayEl.style.position = 'relative';
    dayEl.style.display = 'flex';
    dayEl.style.flexDirection = 'column';
    dayEl.style.alignItems = 'center';
    dayEl.style.justifyContent = 'space-between';
    dayEl.style.background = 'var(--color-surface)';
    
    const dayStr = day.toString().padStart(2, '0');
    
    // Check if there is an event on this day (e.g. August 08, 13, 20)
    const activeEv = EVENTS.find(ev => ev.day === dayStr && ev.monthEn === 'AUG');
    
    dayEl.innerHTML = `<span style="font-weight:600; font-size:0.9rem">${day}</span>`;
    
    if (activeEv) {
      dayEl.style.borderColor = 'var(--color-primary)';
      dayEl.style.background = 'var(--color-accent-light)';
      dayEl.style.cursor = 'pointer';
      
      const dot = document.createElement('span');
      dot.style.width = '6px';
      dot.style.height = '6px';
      dot.style.borderRadius = '50%';
      dot.style.background = 'var(--color-primary)';
      dot.style.marginTop = '0.2rem';
      dayEl.appendChild(dot);
      
      dayEl.addEventListener('click', () => {
        toggleEventsView('list');
        AppState.eventFilter = activeEv.category;
        
        // update filter button highlight
        const filters = document.getElementById('eventFilters').querySelectorAll('.filter-tab');
        filters.forEach(btn => {
          if (btn.getAttribute('data-event-cat') === activeEv.category) {
            btn.classList.add('active');
          } else {
            btn.classList.remove('active');
          }
        });
        
        renderEvents();
      });
    }
    
    container.appendChild(dayEl);
  }
}

function downloadEventIcs(id) {
  const ev = EVENTS.find(e => e.id === id);
  if (!ev) return;
  
  const title = AppState.lang === 'es' ? ev.titleEs : ev.titleEn;
  const desc = AppState.lang === 'es' ? ev.descEs : ev.descEn;
  
  const months = {
    'JAN': '01', 'FEB': '02', 'MAR': '03', 'APR': '04', 'MAY': '05', 'JUN': '06',
    'JUL': '07', 'AUG': '08', 'SEP': '09', 'OCT': '10', 'NOV': '11', 'DEC': '12'
  };
  const monthNum = months[ev.monthEn] || '08';
  const dayStr = ev.day.padStart(2, '0');
  const yearStr = ev.year || '2026';
  
  // Format iCalendar text string with dynamic dates
  const icsContent = 
`BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//EspanolesEnMiami//NONSGML v1.0//EN
BEGIN:VEVENT
UID:${ev.id}-${yearStr}@espanolesenmiami.com
DTSTAMP:${yearStr}${monthNum}${dayStr}T120000Z
DTSTART:${yearStr}${monthNum}${dayStr}T200000
DTEND:${yearStr}${monthNum}${dayStr}T220000
SUMMARY:${title}
DESCRIPTION:${desc}
LOCATION:${ev.location}
END:VEVENT
END:VCALENDAR`;

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute('download', `${ev.id}_calendar_invite.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  // Visual Toast notification
  const notifyText = AppState.lang === 'es' ? '¡Invitación de Calendario (.ics) descargada con éxito!' : 'Calendar invite (.ics) downloaded successfully!';
  alert(notifyText);
}

function filterEventsBySearch(query) {
  const container = document.getElementById('eventsListContainer');
  container.innerHTML = '';
  
  EVENTS.forEach(ev => {
    const title = (AppState.lang === 'es' ? ev.titleEs : ev.titleEn).toLowerCase();
    const desc = (AppState.lang === 'es' ? ev.descEs : ev.descEn).toLowerCase();
    const location = ev.location.toLowerCase();
    
    if (title.includes(query) || desc.includes(query) || location.includes(query)) {
      const titleTxt = AppState.lang === 'es' ? ev.titleEs : ev.titleEn;
      const descTxt = AppState.lang === 'es' ? ev.descEs : ev.descEn;
      const priceTxt = AppState.lang === 'es' ? ev.priceEs : ev.priceEn;
      const monthTxt = AppState.lang === 'es' ? ev.monthEs : ev.monthEn;
      
      const card = document.createElement('div');
      card.className = 'glass-card event-card';
      card.innerHTML = `
        <div class="event-date-badge">
          <span class="event-date-day">${ev.day}</span>
          <span class="event-date-month">${monthTxt}</span>
        </div>
        <div style="padding-right: 60px;">
          <span class="event-tag">${getEventCategoryLabel(ev.category)}</span>
          <h3 style="margin-bottom:0.75rem">${titleTxt}</h3>
        </div>
        <p style="font-size:0.85rem">${descTxt}</p>
        <div style="border-top:1px solid var(--color-border); padding-top:0.75rem; margin-top:auto; font-size:0.8rem; display:flex; flex-direction:column; gap:0.35rem">
          <div>📍 <strong>${ev.location}</strong></div>
          <div>🕒 <strong>${ev.time}</strong></div>
          <div style="color:var(--color-primary)">💰 <strong>${priceTxt}</strong></div>
        </div>
        <button class="btn btn-secondary" style="margin-top: 1rem; width:100%" onclick="downloadEventIcs('${ev.id}')">
          <span>🗓️ ${AppState.lang === 'es' ? 'Añadir al Calendario' : 'Add to Calendar'}</span>
        </button>
      `;
      container.appendChild(card);
    }
  });
}

// ==================== RELOCATION RESOURCES HUB ====================

function setupResourcesSection() {
  const tabs = document.querySelectorAll('.tab-nav-btn');
  tabs.forEach(btn => {
    btn.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      
      const tabId = btn.getAttribute('data-tab');
      openResourceTab(tabId);
    });
  });
}

function openResourceTab(tabId) {
  AppState.activeResourceTab = tabId;
  
  // update buttons classes in case triggered programmatically
  document.querySelectorAll('.tab-nav-btn').forEach(btn => {
    if (btn.getAttribute('data-tab') === tabId) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  
  // hide all contents
  document.querySelectorAll('.tab-content').forEach(content => {
    content.classList.remove('active');
  });
  
  const targetContent = document.getElementById(`tab-${tabId}`);
  if (targetContent) {
    targetContent.classList.add('active');
  }
}

function filterDirectoryCategory(category) {
  AppState.directoryFilter = category;
  
  // Update active state on directory filter buttons
  const filters = document.getElementById('directoryFilters');
  if (filters) {
    const tabs = filters.querySelectorAll('.filter-tab');
    tabs.forEach(btn => {
      if (btn.getAttribute('data-category') === category) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }
  
  renderDirectoryList();
  updateMapPinVisibility();
  switchSection('directory');
}


// ==================== FLOATING ASSISTANT "EL ASISTENTE" ====================

function setupChatbot() {
  const launcher = document.getElementById('chatLauncherBtn');
  const panel = document.getElementById('chatPanel');
  const closeBtn = document.getElementById('closeChatBtn');
  const sendBtn = document.getElementById('chatSendBtn');
  const input = document.getElementById('chatInputField');
  const body = document.getElementById('chatMsgBody');
  
  launcher.addEventListener('click', () => {
    panel.classList.toggle('active');
  });
  
  closeBtn.addEventListener('click', () => {
    panel.classList.remove('active');
  });
  
  sendBtn.addEventListener('click', () => {
    handleUserChatMessage();
  });
  
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      handleUserChatMessage();
    }
  });
  
  // Suggestion Chips
  document.getElementById('chatSuggestionsBox').querySelectorAll('.chat-suggest-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const query = btn.getAttribute('data-query');
      let promptText = '';
      if (query === 'tapas') {
        promptText = AppState.lang === 'es' ? '¿Cuáles son los mejores sitios de tapas en Miami?' : 'What are the best tapas restaurants in Miami?';
      } else if (query === 'consulado') {
        promptText = AppState.lang === 'es' ? '¿Dónde está el Consulado y cuál es su horario?' : 'Where is the Consulate and what are its hours?';
      } else if (query === 'nie') {
        promptText = AppState.lang === 'es' ? '¿Cómo puedo solicitar el NIE español?' : 'How do I apply for a Spanish NIE number?';
      } else if (query === 'colegios') {
        promptText = AppState.lang === 'es' ? '¿Qué colegios bilingües hay con el sello de España?' : 'Which bilingual schools offer the Spanish ISA program?';
      }
      
      input.value = promptText;
      handleUserChatMessage();
    });
  });
}

function handleUserChatMessage() {
  const input = document.getElementById('chatInputField');
  const query = input.value.trim();
  if (!query) return;
  
  // Append user message
  appendChatMessage(query, 'user');
  input.value = '';
  
  // Loading simulated delay
  setTimeout(() => {
    const response = getChatbotResponse(query);
    appendChatMessage(response, 'bot');
  }, 650);
}

function appendChatMessage(text, sender) {
  const body = document.getElementById('chatMsgBody');
  const msg = document.createElement('div');
  msg.className = `chat-msg chat-msg-${sender}`;
  msg.innerHTML = text;
  body.appendChild(msg);
  body.scrollTop = body.scrollHeight; // Autoscroll to bottom
}

function getChatbotResponse(rawQuery) {
  const q = rawQuery.toLowerCase();
  
  if (AppState.lang === 'es') {
    if (q.includes('tapas') || q.includes('comer') || q.includes('restaurante') || q.includes('jamon') || q.includes('vino')) {
      return `🍷 <strong>Sitios recomendados para comer:</strong><br><br>
      • <strong>Xixón Spanish Restaurant</strong> (Coral Way): Famoso por jamón ibérico y croquetas. Excelentes vinos.<br>
      • <strong>Casa Juancho</strong> (Little Havana): Asados, paella marinera tradicional y música en directo.<br>
      • <strong>Bulla Gastrobar</strong> (Coral Gables): Gastrobar andaluz animado ideal para cañas y raciones modernas.<br><br>
      Puedes seleccionar cualquiera de ellos en nuestra pestaña <strong>"Mapa y Sitios"</strong> para ver dirección exacta y llamar directo.`;
    }
    
    if (q.includes('consulado') || q.includes('pasaporte') || q.includes('matrícula') || q.includes('inscripción')) {
      return `🏢 <strong>Consulado General de España en Miami:</strong><br><br>
      • <strong>Dirección:</strong> 2655 Le Jeune Rd, Coral Gables, FL 33134.<br>
      • <strong>Horario:</strong> Lunes a Viernes de 9:00 AM a 1:00 PM.<br>
      • <strong>Pasaporte:</strong> Requiere cita previa obligatoria reservada en su portal online oficial.<br>
      • <strong>Trámite recomendado:</strong> Hazte el Alta Consular nada más llegar para facilitar cualquier renovación futura. En la pestaña <strong>"Enlaces de Interés"</strong> tienes los pasos.`;
    }
    
    if (q.includes('vivienda') || q.includes('alquilar') || q.includes('alquiler') || q.includes('casa') || q.includes('apartamento') || q.includes('barrio') || q.includes('zona')) {
      return `🏠 <strong>Dónde encontrar vivienda en Miami:</strong><br><br>
      • <strong>Zonas Recomendadas:</strong><br>
      &nbsp;&nbsp;- <em>Brickell / Downtown:</em> Ideal para profesionales, muy urbano, transitable a pie y con Metromover.<br>
      &nbsp;&nbsp;- <em>Coral Gables / Coconut Grove:</em> Zonas residenciales verdes, familiares y tranquilas, cerca de colegios bilingües.<br>
      &nbsp;&nbsp;- <em>Doral:</em> Muy popular entre familias hispanas, con excelentes comunidades cerradas y centros comerciales.<br>
      &nbsp;&nbsp;- <em>Key Biscayne:</em> Entorno exclusivo rodeado de playas, ideal para amantes del deporte y la naturaleza.<br><br>
      • <strong>Portales Populares de Búsqueda:</strong> Zillow.com, Trulia.com, Realtor.com y Apartments.com.<br>
      • <strong>Recomendación:</strong> Cuenta con la ayuda de un <em>Realtor</em> (agente inmobiliario). En Florida sus servicios son <strong>gratuitos para el inquilino o comprador</strong>, ya que sus honorarios los paga el propietario/vendedor.`;
    }
    
    if (q.includes('desplazarse') || q.includes('transporte') || q.includes('coche') || q.includes('conducir') || q.includes('sunpass') || q.includes('metro') || q.includes('trolley') || q.includes('bus') || q.includes('autobús') || q.includes('rail') || q.includes('tri-rail') || q.includes('brightline') || q.includes('brigthline') || q.includes('uber') || q.includes('lyft') || q.includes('lift') || q.includes('taxi') || q.includes('taxis')) {
      return `🚗 <strong>Cómo desplazarse por Miami:</strong><br><br>
      • <strong>Peajes (SunPass):</strong> Imprescindible para circular por las autopistas de Florida sin recargos. Compra un sticker SunPass en CVS o Publix y regístralo online.<br>
      • <strong>Transporte Público y Trenes:</strong><br>
      &nbsp;&nbsp;- <em>Metromover:</em> Sistema de monorraíl elevado <strong>100% gratuito</strong> que recorre Downtown y Brickell.<br>
      &nbsp;&nbsp;- <em>Metrobus & Trolley:</em> El Metrobus cubre todo el condado, mientras que los Trolleys son minibuses locales **100% gratuitos** en zonas como Miami, Coral Gables y Miami Beach.<br>
      &nbsp;&nbsp;- <em>Metrorail & Tri-Rail:</em> El Metrorail conecta áreas clave de la ciudad y el aeropuerto, y el Tri-Rail conecta Miami con los condados de Broward y Palm Beach.<br>
      &nbsp;&nbsp;- <em>Brightline:</em> Tren de alta velocidad moderno y premium que conecta Miami con Fort Lauderdale, West Palm Beach y Orlando.<br>
      • <strong>Taxis y Vehículos Compartidos (VTC):</strong> Uber y Lyft operan activamente por toda la ciudad y son la opción preferida por comodidad y tarifa frente a los taxis amarillos tradicionales.<br>
      • <strong>Carné de Conducir:</strong> Con el carné español puedes conducir provisionalmente, pero debes obtener la licencia del DMV de Florida si vas a residir formalmente.`;
    }
    
    if (q.includes('servicio') || q.includes('utilidad') || q.includes('agua') || q.includes('electricidad') || q.includes('fpl') || q.includes('internet') || q.includes('teléfono')) {
      return `⚡ <strong>Servicios Locales y Suministros Básicos:</strong><br><br>
      • <strong>Electricidad:</strong> Florida Power & Light (<strong>FPL</strong>) es el único proveedor. Puedes darte de alta online aportando tu pasaporte/SSN.<br>
      • <strong>Agua y Basura:</strong> Gestionado por el condado (<strong>Miami-Dade Water and Sewer Dept</strong>).<br>
      • <strong>Internet y TV:</strong> Los principales proveedores son <strong>Comcast/Xfinity</strong> y <strong>AT&T</strong> (fibra óptica en Brickell y Coral Gables).<br>
      • <strong>Telefonía Móvil:</strong> T-Mobile, AT&T y Verizon. Se recomienda contratar inicialmente planes de prepago (prepaid) si no posees historial crediticio local.<br><br>
      🚨 <strong>Emergencia:</strong> Llame al 911 para emergencias médicas o delitos en curso. (Dial 911 for immediate life-threatening emergencies or crimes in progress.)<br>
      ℹ️ <strong>Servicios Municipales:</strong> Marque 311 para servicios del gobierno local y asistencia no urgente. (Dial 311 for local government services and non-sensitive assistance.)<br>
      📞 <strong>Policía (No Urgente):</strong> Llame al 305-SHERIFF (305-743-7433) o al 305-4-POLICE (305-476-5423) para consultas generales, quejas por ruido o accidentes menores sin heridos. (Call 305-SHERIFF [305-743-7433] or 305-4-POLICE [305-476-5423] for general inquiries, noise complaints, or minor traffic accidents without injuries.)`;
    }
    
    if (q.includes('nie') || q.includes('ex15') || q.includes('número')) {
      return `📝 <strong>Cómo solicitar el NIE en Miami:</strong><br><br>
      1. Rellena el <strong>Formulario EX-15</strong> en mayúsculas.<br>
      2. Paga la tasa con el <strong>Formulario 790 código 012</strong>.<br>
      3. Aporta pasaporte original y copia completa, junto con una carta justificando por qué necesitas el NIE (ej. compra de piso, apertura de empresa).<br>
      4. Preséntalo en el Consulado de Miami. Tarda aproximadamente de 2 a 4 semanas.`;
    }
    
    if (q.includes('colegio') || q.includes('educa') || q.includes('estudia') || q.includes('ispa') || q.includes('auxiliar')) {
      return `🎓 <strong>Colegios y Educación en Miami:</strong><br><br>
      • <strong>Agregaduría de Educación en Miami:</strong> Dependiente de la Embajada, coordina la cooperación educativa local y los programas ISA.<br>
      • <strong>Programa ISA:</strong> El Ministerio de Educación de España colabora con escuelas públicas de Miami-Dade para impartir clases bilingües de excelencia.<br>
      • <strong>ISPA</strong> (International Studies Preparatory Academy) en Coral Gables es un colegio 100% bilingüe muy solicitado.<br>
      • <strong>Auxiliares de Conversación:</strong> Si eres profesor, la Embajada de España convoca plazas anuales para trabajar en colegios de Florida bajo el visado J-1.`;
    }
    
    if (q.includes('negocio') || q.includes('invertir') || q.includes('empresa') || q.includes('llc') || q.includes('sunbiz')) {
      return `💼 <strong>Negocios y Emprendimiento en Florida:</strong><br><br>
      • <strong>Oficina Económica y Comercial (ICEX):</strong> Promueve exportaciones e inversiones de empresas españolas en el sur de EE. UU.<br>
      • <strong><a href="https://spainuschamber.com/" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: underline;">Spain-U.S. Chamber of Commerce</a>:</strong> Cámara de comercio oficial ubicada en Coral Gables que apoya la integración de empresas en Florida.<br>
      • <strong>Sunbiz.org:</strong> Es el portal estatal oficial de Florida donde puedes constituir una LLC o Corp online en menos de 48 horas.<br>
      • <strong>Visados:</strong> Las visas E-2 de inversor y L-1 de transferencia corporativa son los caminos legales más comunes para empresarios españoles.`;
    }
    
    if (q.includes('turismo') || q.includes('viajar') || q.includes('viaje') || q.includes('spain.info') || q.includes('visitar')) {
      return `✈️ <strong>Recursos Oficiales de Turismo de España:</strong><br><br>
      • <strong>Oficina de Turismo de España en Miami:</strong> Representación oficial de Turespaña en Brickell (1395 Brickell Ave #1130). Ofrece asesoramiento personalizado, mapas de carreteras y catálogos de destinos.<br>
      • <strong>Portal Oficial:</strong> Visita <a href="https://www.spain.info" target="_blank"><strong>Spain.info</strong></a> para guías turísticas completas de Madrid, Barcelona, Andalucía y el Camino de Santiago.<br>
      • <strong>Pestaña Recomendada:</strong> Accede a la pestaña <strong>"Enlaces de Interés"</strong> y selecciona <strong>"Turismo de España"</strong> para obtener guías de Paradores, requisitos ETIAS y estancias de turismo.`;
    }
    
    return `¡Entendido! He registrado tu consulta sobre <em>"${rawQuery}"</em>. Puedes encontrar más detalles específicos en nuestras pestañas <strong>"Enlaces de Interés"</strong> o en <strong>"Mapa y Sitios"</strong> (para servicios locales). ¿Te gustaría saber algo más específico?`;
  } else {
    // English responses
    if (q.includes('tapas') || q.includes('eat') || q.includes('restaurant') || q.includes('ham') || q.includes('wine')) {
      return `🍷 <strong>Recommended Spots to Dine:</strong><br><br>
      • <strong>Xixón Spanish Restaurant</strong> (Coral Way): Iconic for Iberian ham, croquetas, and an extensive wine selection.<br>
      • <strong>Casa Juancho</strong> (Little Havana): Roasts, seafood paella, and live Spanish guitar in a rustic setting.<br>
      • <strong>Bulla Gastrobar</strong> (Coral Gables): Vibrant Andalusian-inspired tavern perfect for shared small plates and craft sangria.<br><br>
      You can locate all of them in our <strong>"Map & Spots"</strong> tab to see coordinates and contacts.`;
    }
    
    if (q.includes('consulate') || q.includes('passport') || q.includes('registration')) {
      return `🏢 <strong>Consulate General of Spain in Miami:</strong><br><br>
      • <strong>Address:</strong> 2655 Le Jeune Rd, Coral Gables, FL 33134.<br>
      • <strong>Hours:</strong> Monday to Friday: 9:00 AM - 1:00 PM.<br>
      • <strong>Passport Renewal:</strong> You must book a dedicated appointment online via their official booking calendar.<br>
      • <strong>Pro-Tip:</strong> Register in the Consular Census (Alta Consular) upon arrival. It is required for passport renewals.`;
    }
    
    if (q.includes('vivienda') || q.includes('housing') || q.includes('rent') || q.includes('rental') || q.includes('apartment') || q.includes('neighborhood') || q.includes('area')) {
      return `🏠 <strong>Where to Find Housing in Miami:</strong><br><br>
      • <strong>Recommended Areas:</strong><br>
      &nbsp;&nbsp;- <em>Brickell / Downtown:</em> Urban hub, very walkable, popular with young professionals, transit-friendly via Metromover.<br>
      &nbsp;&nbsp;- <em>Coral Gables / Coconut Grove:</em> Lush, historic residential neighborhoods close to great public schools.<br>
      &nbsp;&nbsp;- <em>Doral:</em> Excellent gated communities, highly popular among family-oriented residents.<br>
      &nbsp;&nbsp;- <em>Key Biscayne:</em> Exclusive island vibe, perfect for outdoor enthusiasts and families.<br><br>
      • <strong>Top Search Portals:</strong> Zillow.com, Trulia.com, Realtor.com, and Apartments.com.<br>
      • <strong>Pro-Tip:</strong> Hire a licensed <em>Realtor</em>. In Florida, realtor services are <strong>completely free for renters or buyers</strong>, as the commissions are paid entirely by the landlord or seller.`;
    }
    
    if (q.includes('desplazarse') || q.includes('transport') || q.includes('car') || q.includes('driving') || q.includes('sunpass') || q.includes('mover') || q.includes('rail') || q.includes('trolley') || q.includes('metrobus') || q.includes('bus') || q.includes('brightline') || q.includes('brigthline') || q.includes('uber') || q.includes('lyft') || q.includes('lift') || q.includes('taxi') || q.includes('taxis')) {
      return `🚗 <strong>How to Get Around Miami:</strong><br><br>
      • <strong>Tolls (SunPass):</strong> Essential for Florida highways. Buy a SunPass transponder/sticker at CVS or Publix and link it to your license plate online.<br>
      • <strong>Public Transit & Trains:</strong><br>
      &nbsp;&nbsp;- <em>Metromover & Trolley:</em> The Metromover loop is **100% free** in Downtown/Brickell. Trolleys are also **100% free** local shuttles running in Miami, Coral Gables, and Miami Beach.<br>
      &nbsp;&nbsp;- <em>Metrobus & Metrorail:</em> Metrobus covers the entire county, and Metrorail connects key city centers to the airport. Both use the EASY Card system.<br>
      &nbsp;&nbsp;- <em>Tri-Rail:</em> Commuter rail system linking Miami-Dade, Broward, and Palm Beach counties.<br>
      &nbsp;&nbsp;- <em>Brightline:</em> Modern, premium higher-speed train connecting Downtown Miami to Fort Lauderdale, West Palm Beach, and Orlando.<br>
      • <strong>Taxis & Ridesharing:</strong> Uber and Lyft are extremely active and widely used throughout Miami. Yellow cabs are also available, mainly at transit hubs and hotels.<br>
      • <strong>Driver's License:</strong> International permits are temporary. Schedule a test at the Florida DMV to obtain your local license.`;
    }
    
    if (q.includes('service') || q.includes('utility') || q.includes('water') || q.includes('electricity') || q.includes('fpl') || q.includes('internet') || q.includes('phone')) {
      return `⚡ <strong>Local Services & Utilities Setup:</strong><br><br>
      • <strong>Electricity:</strong> Provided exclusively by Florida Power & Light (<strong>FPL</strong>). Set up service online using your passport or SSN.<br>
      • <strong>Water & Sewer:</strong> Managed by the municipal county (<strong>Miami-Dade Water & Sewer Dept</strong>).<br>
      • <strong>Internet & Fiber:</strong> <strong>AT&T Fiber</strong> and <strong>Xfinity (Comcast)</strong> are the top local providers in the area.<br>
      • <strong>Mobile Network:</strong> T-Mobile, Verizon, and AT&T. Prepaid plans are easiest to open when first arriving.<br><br>
      🚨 <strong>Emergency:</strong> Dial 911 for immediate life-threatening emergencies or crimes in progress.<br>
      ℹ️ <strong>Local Government:</strong> Dial 311 for local government services and non-sensitive assistance.<br>
      📞 <strong>Police (Non-Emergency):</strong> Call 305-SHERIFF (305-743-7433) or 305-4-POLICE (305-476-5423) for general inquiries, noise complaints, or minor traffic accidents without injuries.`;
    }
    
    if (q.includes('nie') || q.includes('ex15') || q.includes('number')) {
      return `📝 <strong>Applying for a Spanish NIE in Miami:</strong><br><br>
      1. Complete <strong>Form EX-15</strong> in block letters.<br>
      2. Complete and print the fee form <strong>Model 790-012</strong>.<br>
      3. Provide your original passport, full copies of all pages, and a legal letter justifying why you need the NIE (e.g. real estate purchase, founding a business).<br>
      4. Submit them in person at the Consulate of Miami. Processing takes 2-4 weeks.`;
    }
    
    if (q.includes('school') || q.includes('educat') || q.includes('study') || q.includes('ispa') || q.includes('assistant')) {
      return `🎓 <strong>Bilingual Education in Miami:</strong><br><br>
      • <strong><a href="https://www.exteriores.gob.es/Consulados/miami/en/Paginas/index.aspx" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: underline;">Education Office of Spain in Miami</a>:</strong> Coordinates the official academic cooperation and visit programs from the Spanish Embassy.<br>
      • <strong>ISA Program:</strong> Spain's Ministry of Education partners with Miami-Dade County Public Schools to offer high-quality bilingual tracks.<br>
      • <strong>ISPA</strong> (International Studies Preparatory Academy) in Coral Gables is an exceptional, highly-sought public school option.<br>
      • <strong>Language Assistants:</strong> Eligible Spanish educators can apply annually to teach in Florida schools through the J-1 exchange visa.`;
    }
    
    if (q.includes('business') || q.includes('invest') || q.includes('company') || q.includes('llc') || q.includes('sunbiz')) {
      return `💼 <strong>Business & Investing in Florida:</strong><br><br>
      • <strong><a href="https://www.icex.es/" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: underline;">Economic & Commercial Office of Spain (ICEX)</a>:</strong> Promotes trade expansion and helps Spanish companies establish in the Southern US.<br>
      • <strong><a href="https://spainuschamber.com/" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: underline;">Spain–U.S. Chamber of Commerce</a>:</strong> Located in Coral Gables, helps Spanish and local companies with networking and market entry.<br>
      • <strong>Sunbiz.org:</strong> The official State of Florida corporate registry where you can incorporate an LLC or Corp online in minutes.<br>
      • <strong>Visas:</strong> E-2 Investor visas and L-1 Intracompany Transfer visas are the standard corporate vehicles for Spanish business owners.`;
    }
    
    if (q.includes('tourism') || q.includes('travel') || q.includes('spain.info') || q.includes('visit') || q.includes('trip')) {
      return `✈️ <strong>Official Spain Tourism Resources:</strong><br><br>
      • <strong><a href="https://www.tourspain.es/consejerias/miami/es/" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: underline;">Tourist Office of Spain in Miami</a>:</strong> The official Turespaña delegation located in Brickell (1395 Brickell Ave #1130). Provides physical maps, custom brochures, and destination guidance.<br>
      • <strong>Official Portal:</strong> Explore <a href="https://www.spain.info" target="_blank"><strong>Spain.info</strong></a> to secure comprehensive planning guides for Madrid, Barcelona, Andalusia, and cultural hotspots.<br>
      • <strong>Links of Interest Hub:</strong> Navigate to the <strong>"Links of Interest"</strong> tab and choose <strong>"Official Spain Tourism"</strong> to find entry guides, castle hotels (Paradores), and ETIAS travel rules.`;
    }
    
    return `Got it! I've noted your question about <em>"${rawQuery}"</em>. You can discover granular guides under <strong>"Links of Interest"</strong> or navigate the interactive pins on the <strong>"Map & Spots"</strong> board. How else can I help you today?`;
  }
}

// ==================== EU CONSULATES MODULE ====================

function setupEuConsulatesSection() {
  const filters = document.getElementById('euConsulateFilters');
  if (!filters) return;
  
  const tabButtons = filters.querySelectorAll('.filter-tab');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(f => f.classList.remove('active'));
      btn.classList.add('active');
      AppState.euFilter = btn.getAttribute('data-eu-cat');
      renderEuConsulates();
    });
  });
  
  renderEuConsulates();
}

function renderEuConsulates() {
  const container = document.getElementById('euConsulatesContainer');
  if (!container) return;
  
  container.innerHTML = '';
  
  EU_CONSULATES.forEach(consulate => {
    // Apply type filter (all, general, honorary)
    if (AppState.euFilter !== 'all' && consulate.type !== AppState.euFilter) return;
    
    const name = AppState.lang === 'es' ? consulate.nameEs : consulate.nameEn;
    const country = AppState.lang === 'es' ? consulate.countryEs : consulate.countryEn;
    const hours = AppState.lang === 'es' ? consulate.hoursEs : consulate.hoursEn;
    const services = AppState.lang === 'es' ? consulate.servicesEs : consulate.servicesEn;
    
    const typeLabel = consulate.type === 'general' 
      ? (AppState.lang === 'es' ? 'Consulado General' : 'Consulate General')
      : (AppState.lang === 'es' ? 'Consulado Honorario' : 'Honorary Consulate');
      
    const emailLabel = AppState.lang === 'es' ? 'Enviar Email' : 'Email Office';
    const webLabel = AppState.lang === 'es' ? 'Sitio Web' : 'Official Web';
    const hoursHeader = AppState.lang === 'es' ? 'Horario' : 'Hours';
    const servicesHeader = AppState.lang === 'es' ? 'Servicios Destacados' : 'Key Services';
    
    const countryEmojis = {
      'España': '🇪🇸', 'Spain': '🇪🇸',
      'Francia': '🇫🇷', 'France': '🇫🇷',
      'Alemania': '🇩🇪', 'Germany': '🇩🇪',
      'Italia': '🇮🇹', 'Italy': '🇮🇹',
      'Países Bajos': '🇳🇱', 'Netherlands': '🇳🇱',
      'Rumanía': '🇷🇴', 'Romania': '🇷🇴',
      'Irlanda': '🇮🇪', 'Ireland': '🇮🇪',
      'Hungría': '🇭🇺', 'Hungary': '🇭🇺',
      'Austria': '🇦🇹', 'Austria': '🇦🇹',
      'Bélgica': '🇧🇪', 'Belgium': '🇧🇪',
      'Suecia': '🇸🇪', 'Sweden': '🇸🇪',
      'Polonia': '🇵🇱', 'Poland': '🇵🇱',
      'Dinamarca': '🇩🇰', 'Denmark': '🇩🇰'
    };
    
    const emoji = countryEmojis[country] || '🇪🇺';
    
    const card = document.createElement('div');
    card.className = 'glass-card eu-consulate-card';
    
    card.innerHTML = `
      <div class="eu-card-header">
        <div class="eu-country-info">
          <span style="font-size: 1.5rem;">${emoji}</span>
          <span class="eu-country-name">${country}</span>
        </div>
        <span class="eu-type-badge ${consulate.type}">${typeLabel}</span>
      </div>
      
      <h4 class="eu-consulate-title">${name}</h4>
      
      <div class="eu-contact-details">
        <div class="eu-contact-row">
          <svg viewBox="0 0 24 24"><circle cx="12" cy="10" r="3"></circle><path d="M12 21.7C10.3 19.8 5 13 5 10a7 7 0 1 1 14 0c0 3-5.3 9.8-7 11.7z"></path></svg>
          <span>${consulate.address}</span>
        </div>
        <div class="eu-contact-row">
          <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          <span><strong>Tlf:</strong> ${consulate.phone}</span>
        </div>
        <div class="eu-contact-row">
          <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          <span><strong>Email:</strong> <a href="mailto:${consulate.email}">${consulate.email}</a></span>
        </div>
        <div class="eu-contact-row">
          <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
          <span><strong>${hoursHeader}:</strong> ${hours}</span>
        </div>
      </div>
      
      <div class="eu-services-desc">
        <strong>${servicesHeader}:</strong>
        ${services}
      </div>
      
      <div class="eu-card-actions">
        <a href="${consulate.website}" target="_blank" class="btn btn-primary">${webLabel}</a>
        <a href="mailto:${consulate.email}" class="btn btn-secondary">${emailLabel}</a>
      </div>
    `;
    
    container.appendChild(card);
  });
}

function filterEuConsulatesBySearch(query) {
  const container = document.getElementById('euConsulatesContainer');
  if (!container) return;
  
  container.innerHTML = '';
  
  EU_CONSULATES.forEach(consulate => {
    const name = (AppState.lang === 'es' ? consulate.nameEs : consulate.nameEn).toLowerCase();
    const country = (AppState.lang === 'es' ? consulate.countryEs : consulate.countryEn).toLowerCase();
    const services = (AppState.lang === 'es' ? consulate.servicesEs : consulate.servicesEn).toLowerCase();
    const address = consulate.address.toLowerCase();
    
    if (name.includes(query) || country.includes(query) || services.includes(query) || address.includes(query)) {
      const dispName = AppState.lang === 'es' ? consulate.nameEs : consulate.nameEn;
      const dispCountry = AppState.lang === 'es' ? consulate.countryEs : consulate.countryEn;
      const dispHours = AppState.lang === 'es' ? consulate.hoursEs : consulate.hoursEn;
      const dispServices = AppState.lang === 'es' ? consulate.servicesEs : consulate.servicesEn;
      
      const typeLabel = consulate.type === 'general' 
        ? (AppState.lang === 'es' ? 'Consulado General' : 'Consulate General')
        : (AppState.lang === 'es' ? 'Consulado Honorario' : 'Honorary Consulate');
        
      const emailLabel = AppState.lang === 'es' ? 'Enviar Email' : 'Email Office';
      const webLabel = AppState.lang === 'es' ? 'Sitio Web' : 'Official Web';
      const hoursHeader = AppState.lang === 'es' ? 'Horario' : 'Hours';
      const servicesHeader = AppState.lang === 'es' ? 'Servicios Destacados' : 'Key Services';
      
      const countryEmojis = {
        'España': '🇪🇸', 'Spain': '🇪🇸',
        'Francia': '🇫🇷', 'France': '🇫🇷',
        'Alemania': '🇩🇪', 'Germany': '🇩🇪',
        'Italia': '🇮🇹', 'Italy': '🇮🇹',
        'Países Bajos': '🇳🇱', 'Netherlands': '🇳🇱',
        'Rumanía': '🇷🇴', 'Romania': '🇷🇴',
        'Irlanda': '🇮🇪', 'Ireland': '🇮🇪',
        'Hungría': '🇭🇺', 'Hungary': '🇭🇺',
        'Austria': '🇦🇹', 'Austria': '🇦🇹',
        'Bélgica': '🇧🇪', 'Belgium': '🇧🇪',
        'Suecia': '🇸🇪', 'Sweden': '🇸🇪',
        'Polonia': '🇵🇱', 'Poland': '🇵🇱',
        'Dinamarca': '🇩🇰', 'Denmark': '🇩🇰'
      };
      
      const emoji = countryEmojis[dispCountry] || '🇪🇺';
      
      const card = document.createElement('div');
      card.className = 'glass-card eu-consulate-card';
      
      card.innerHTML = `
        <div class="eu-card-header">
          <div class="eu-country-info">
            <span style="font-size: 1.5rem;">${emoji}</span>
            <span class="eu-country-name">${dispCountry}</span>
          </div>
          <span class="eu-type-badge ${consulate.type}">${typeLabel}</span>
        </div>
        
        <h4 class="eu-consulate-title">${dispName}</h4>
        
        <div class="eu-contact-details">
          <div class="eu-contact-row">
            <svg viewBox="0 0 24 24"><circle cx="12" cy="10" r="3"></circle><path d="M12 21.7C10.3 19.8 5 13 5 10a7 7 0 1 1 14 0c0 3-5.3 9.8-7 11.7z"></path></svg>
            <span>${consulate.address}</span>
          </div>
          <div class="eu-contact-row">
            <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            <span><strong>Tlf:</strong> ${consulate.phone}</span>
          </div>
          <div class="eu-contact-row">
            <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            <span><strong>Email:</strong> <a href="mailto:${consulate.email}">${consulate.email}</a></span>
          </div>
          <div class="eu-contact-row">
            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            <span><strong>${hoursHeader}:</strong> ${dispHours}</span>
          </div>
        </div>
        
        <div class="eu-services-desc">
          <strong>${servicesHeader}:</strong>
          ${dispServices}
        </div>
        
        <div class="eu-card-actions">
          <a href="${consulate.website}" target="_blank" class="btn btn-primary">${webLabel}</a>
          <a href="mailto:${consulate.email}" class="btn btn-secondary">${emailLabel}</a>
        </div>
      `;
      
      container.appendChild(card);
    }
  });
}

function setupContactSection() {
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalBtnContent = submitBtn.innerHTML;
      
      // Show loading/sending state
      submitBtn.disabled = true;
      submitBtn.innerHTML = AppState.lang === 'es'
        ? '<span>Enviando...</span>'
        : '<span>Sending...</span>';
      
      const name = document.getElementById('contactName').value;
      const email = document.getElementById('contactEmail').value;
      const subject = document.getElementById('contactSubject').value;
      const message = document.getElementById('contactMessage').value;
      
      // Send directly using FormSubmit API
      fetch("https://formsubmit.co/ajax/spaniardsinmiami@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          Nombre: name,
          Email: email,
          Asunto: subject,
          Mensaje: message,
          _subject: `[Portal España en Miami] Nuevo mensaje de ${name}`
        })
      })
      .then(response => response.json())
      .then(data => {
        const successMsg = AppState.lang === 'es'
          ? `¡Mensaje enviado con éxito directamente a spaniardsinmiami@gmail.com!`
          : `Message sent successfully directly to spaniardsinmiami@gmail.com!`;
        
        showToast(successMsg);
        
        // Restore button state and reset form
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnContent;
        contactForm.reset();
      })
      .catch(error => {
        console.error("Error sending email via FormSubmit:", error);
        const errorMsg = AppState.lang === 'es'
          ? `Hubo un error al enviar el mensaje. Inténtalo de nuevo.`
          : `There was an error sending your message. Please try again.`;
        
        showToast(errorMsg);
        
        // Restore button state
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnContent;
      });
    });
  }
}

function toggleChecklistItem(card) {
  card.classList.toggle('completed');
  
  // Save checklist state in localStorage
  const items = document.querySelectorAll('.checklist-item');
  const states = Array.from(items).map(item => item.classList.contains('completed'));
  localStorage.setItem('esMiami_checklist_state', JSON.stringify(states));
}

function initRelocationChecklist() {
  const items = document.querySelectorAll('.checklist-item');
  const savedStates = JSON.parse(localStorage.getItem('esMiami_checklist_state'));
  if (savedStates && savedStates.length === items.length) {
    items.forEach((item, index) => {
      if (savedStates[index]) {
        item.classList.add('completed');
      }
    });
  }
}

function askAssistantAbout(topic) {
  const panel = document.getElementById('chatPanel');
  const input = document.getElementById('chatInputField');
  if (panel && input) {
    panel.classList.add('active');
    
    let promptText = '';
    if (topic === 'housing') {
      promptText = AppState.lang === 'es' ? '¿Dónde encontrar vivienda en Miami y cuáles son las mejores zonas?' : 'Where can I find housing in Miami and what are the best neighborhoods?';
    } else if (topic === 'transport') {
      promptText = AppState.lang === 'es' ? '¿Cómo desplazarse por Miami y usar el transporte público o coche?' : 'How do I get around Miami using public transit or a car?';
    } else if (topic === 'utilities') {
      promptText = AppState.lang === 'es' ? '¿Cómo dar de alta la electricidad, agua e internet en Miami?' : 'How do I set up electricity, water, and internet services in Miami?';
    }
    
    input.value = promptText;
    handleUserChatMessage();
  }
}

// ==================== COMMUNITY REGISTRATION PORTAL ====================

function setupRegistrationPortal() {
  const openModalBtn = document.getElementById('openRegisterModalBtn');
  const contactRegisterBtn = document.getElementById('contactRegisterBtn');
  const modal = document.getElementById('registerModal');
  const closeModalBtn = document.getElementById('closeRegisterModalBtn');
  const tabBusiness = document.getElementById('tabOptBusiness');
  const tabMember = document.getElementById('tabOptMember');
  const formBusiness = document.getElementById('registerBusinessForm');
  const formMember = document.getElementById('registerMemberForm');

  if (!modal) return;

  // Open modal
  const openModal = () => {
    modal.style.display = 'flex';
  };
  
  if (openModalBtn) openModalBtn.addEventListener('click', openModal);
  if (contactRegisterBtn) contactRegisterBtn.addEventListener('click', openModal);

  // Close modal
  const closeModal = () => {
    modal.style.display = 'none';
  };

  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Switch tabs
  if (tabBusiness && tabMember && formBusiness && formMember) {
    tabBusiness.addEventListener('click', () => {
      tabBusiness.classList.add('active');
      tabMember.classList.remove('active');
      formBusiness.style.display = 'flex';
      formMember.style.display = 'none';
    });

    tabMember.addEventListener('click', () => {
      tabMember.classList.add('active');
      tabBusiness.classList.remove('active');
      formMember.style.display = 'flex';
      formBusiness.style.display = 'none';
    });
  }

  // Handle Business Submission
  if (formBusiness) {
    formBusiness.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = formBusiness.querySelector('button[type="submit"]');
      const originalBtnContent = submitBtn.innerHTML;
      
      // Show loading/sending state
      submitBtn.disabled = true;
      submitBtn.innerHTML = AppState.lang === 'es'
        ? '<span>Enviando...</span>'
        : '<span>Sending...</span>';
      
      const name = document.getElementById('regBusName').value;
      const category = document.getElementById('regBusCategory').value;
      const website = document.getElementById('regBusWebsite').value;
      const address = document.getElementById('regBusAddress').value;
      const desc = document.getElementById('regBusDesc').value;

      // Send registration form via email to spaniardsinmiami@gmail.com using FormSubmit API
      fetch("https://formsubmit.co/ajax/spaniardsinmiami@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _subject: `[Portal España en Miami] Nueva Solicitud de Registro de Negocio: ${name}`,
          "Nombre del Negocio": name,
          "Categoría": category,
          "Sitio Web": website,
          "Dirección": address,
          "Descripción": desc
        })
      })
      .then(response => response.json())
      .then(data => {
        const newId = 'user_spot_' + Date.now();
        
        // Simulate random coordinates in the Miami region of the map [x: 50-200, y: 50-250]
        const x = Math.floor(60 + Math.random() * 150);
        const y = Math.floor(60 + Math.random() * 180);

        const newSpot = {
          id: newId,
          category: category,
          rating: 5.0,
          ratingCount: 1,
          coords: [x, y],
          nameEs: name,
          nameEn: name,
          descEs: desc,
          descEn: desc,
          address: address,
          phone: 'N/A',
          hoursEs: 'Contacto vía web',
          hoursEn: 'Contact via website',
          website: website,
          img: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=400&auto=format&fit=crop'
        };

        // Add to HOTSPOTS datastore
        HOTSPOTS[newId] = newSpot;

        // Add Map Pin Dynamically
        addDynamicMapPin(newSpot);

        // Re-render list
        renderDirectoryList();
        
        // Highlight the new spot
        selectHotspot(newId);

        // Close modal and reset form
        closeModal();
        formBusiness.reset();

        // Restore button state
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnContent;

        // Show Toast
        const successMsgEs = `¡Éxito! Su solicitud de registro para "${name}" ha sido enviada a spaniardsinmiami@gmail.com y agregada localmente.`;
        const successMsgEn = `Success! Your registration request for "${name}" has been sent to spaniardsinmiami@gmail.com and added locally.`;
        showToast(AppState.lang === 'es' ? successMsgEs : successMsgEn);
      })
      .catch(error => {
        console.error("Error submitting business registration:", error);
        const errorMsg = AppState.lang === 'es'
          ? `Hubo un error al enviar el registro. Inténtalo de nuevo.`
          : `There was an error sending your registration. Please try again.`;
        
        showToast(errorMsg);
        
        // Restore button state
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnContent;
      });
    });
  }

  // Handle Member Submission
  if (formMember) {
    formMember.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('regMemName').value;
      const email = document.getElementById('regMemEmail').value;
      const role = document.getElementById('regMemRole').value;
      const bio = document.getElementById('regMemBio').value;

      // Close modal and reset form
      closeModal();
      formMember.reset();

      // Show Toast
      const successMsgEs = `¡Bienvenido, ${name}! Te has registrado como miembro de la comunidad.`;
      const successMsgEn = `Welcome, ${name}! You have successfully registered as a member.`;
      showToast(AppState.lang === 'es' ? successMsgEs : successMsgEn);
    });
  }
}

function addDynamicMapPin(spot) {
  const svg = document.querySelector('.map-container svg');
  if (!svg) return;

  const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  g.setAttribute('class', 'map-pin');
  g.setAttribute('data-id', spot.id);
  g.setAttribute('transform', `translate(${spot.coords[0]}, ${spot.coords[1]})`);

  const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  circle.setAttribute('r', '7');

  const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  text.setAttribute('y', '-10');
  
  let emoji = '🏢';
  if (spot.category === 'dining') emoji = '🍷';
  if (spot.category === 'education') emoji = '🎓';
  text.textContent = emoji;

  g.appendChild(circle);
  g.appendChild(text);

  g.addEventListener('click', () => {
    selectHotspot(spot.id);
  });

  svg.appendChild(g);
}

function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast-msg';
  toast.innerHTML = `<span>✨</span> <span>${message}</span>`;
  container.appendChild(toast);

  // Auto remove after 5 seconds (matching the fadeOut animation delay)
  setTimeout(() => {
    toast.remove();
  }, 5000);
}

// Expose functions used by inline onclick handlers in HTML
window.switchSection = switchSection;
window.filterDirectoryCategory = filterDirectoryCategory;
window.openResourceTab = openResourceTab;
window.toggleChecklistItem = toggleChecklistItem;
window.askAssistantAbout = askAssistantAbout;
window.downloadEventIcs = downloadEventIcs;
