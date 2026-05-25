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
    nameEs: 'Centro Cultural Español (CCEMiami)',
    nameEn: 'Spanish Cultural Center (CCEMiami)',
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
    nameEs: 'Cámara de Comercio de España en EE.UU.',
    nameEn: 'Spain-US Chamber of Commerce',
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
  }
};

const EVENTS = [
  {
    id: 'flamenco',
    category: 'culture',
    day: '28',
    monthEs: 'MAY',
    monthEn: 'MAY',
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
    day: '03',
    monthEs: 'JUN',
    monthEn: 'JUN',
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
    day: '12',
    monthEs: 'JUN',
    monthEn: 'JUN',
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
    day: '18',
    monthEs: 'JUN',
    monthEn: 'JUN',
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

const BASELINE_CLASSIFIEDS = [
  {
    id: 'listing-1',
    category: 'housing',
    price: '$1,450 / mes',
    dateEs: 'Hace 2 días',
    dateEn: '2 days ago',
    titleEs: 'Habitación con baño privado en Brickell',
    titleEn: 'Room with private bath in Brickell',
    contact: '+1 (305) 555-0192',
    descEs: 'Alquilo habitación amplia y luminosa en apartamento compartido. Acceso a piscina, gimnasio y a pasos del Metromover. Preferiblemente estudiante o joven profesional.',
    descEn: 'Renting a spacious and bright room in a shared apartment. Access to pool, gym, and steps from Metromover. Preferably student or young professional.'
  },
  {
    id: 'listing-2',
    category: 'services',
    price: '$35 / hora',
    dateEs: 'Hace 4 días',
    dateEn: '4 days ago',
    titleEs: 'Clases particulares de Español y refuerzo escolar',
    titleEn: 'Private Spanish Lessons & Academic Tutoring',
    contact: 'carlos.tutor@email.com',
    descEs: 'Profesor nativo de Madrid ofrece clases de español para todos los niveles, preparación de exámenes y conversación. Horarios flexibles, presencial u online.',
    descEn: 'Native teacher from Madrid offers Spanish lessons for all levels, exam preparation, and conversation practice. Flexible hours, in-person or online.'
  },
  {
    id: 'listing-3',
    category: 'social',
    price: 'Gratuito / Free',
    dateEs: 'Hace 1 semana',
    dateEn: '1 week ago',
    titleEs: 'Grupo de fútbol 7 - Quedada semanal en Key Biscayne',
    titleEn: '7-a-side Soccer Group - Weekly Match in Key Biscayne',
    contact: 'javier.futbol@email.com',
    descEs: 'Buscamos jugadores de todos los niveles para jugar partidos amistosos de fútbol los miércoles por la tarde. ¡Buen ambiente y tercer tiempo asegurado!',
    descEn: 'Looking for players of all skill levels for friendly soccer matches on Wednesday evenings. Great atmosphere and post-game social guaranteed!'
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
  classifieds: JSON.parse(localStorage.getItem('esMiami_listings')) || BASELINE_CLASSIFIEDS,
  directoryFilter: 'all',
  eventFilter: 'all',
  marketFilter: 'all',
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
  setupMarketplaceSection();
  setupChatbot();
  setupContactSection();
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
  renderClassifieds();
  renderEuConsulates();
  
  // Update HTML lang tag
  document.documentElement.setAttribute('lang', AppState.lang);
}

// ==================== NAVIGATION CONTROLLER ====================

function setupNavigation() {
  const navItems = document.querySelectorAll('.nav-menu-item, .mobile-nav-item');
  
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      const target = item.getAttribute('data-target');
      switchSection(target);
    });
  });
}

function switchSection(sectionId) {
  // Hide all sections
  document.querySelectorAll('.app-section').forEach(sec => {
    sec.classList.remove('active');
  });
  
  // Show active section
  const activeSec = document.getElementById(`sec-${sectionId}`);
  if (activeSec) {
    activeSec.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    filterMarketplaceBySearch(query);
    filterEuConsulatesBySearch(query);
  });
}

function resetFilters() {
  renderDirectoryList();
  renderEvents();
  renderClassifieds();
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
    if (cat === 'dining') return 'Tapas & Dining';
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
  
  // Let's render May 2026. May starts on a Friday in 2026.
  // Empty blocks for padding (Monday-Thursday)
  for (let i = 0; i < 4; i++) {
    const pad = document.createElement('div');
    pad.style.background = 'transparent';
    container.appendChild(pad);
  }
  
  // Render 31 days of May
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
    
    // Check if there is an event on this day (e.g. May 28)
    const activeEv = EVENTS.find(ev => ev.day === dayStr && ev.monthEn === 'MAY');
    
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
  
  // Format iCalendar text string
  const icsContent = 
`BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//EspanolesEnMiami//NONSGML v1.0//EN
BEGIN:VEVENT
UID:${ev.id}-2026@espanolesenmiami.com
DTSTAMP:20260525T120000Z
DTSTART:20260528T200000
DTEND:20260528T223000
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

// ==================== COMMUNITY CLASSIFIEDS / MARKETPLACE ====================

function setupMarketplaceSection() {
  // Post Dialog open / close
  const overlay = document.getElementById('postDialogOverlay');
  const openBtn = document.getElementById('openPostDialogBtn');
  const closeBtn = document.getElementById('closePostDialogBtn');
  
  openBtn.addEventListener('click', () => {
    overlay.classList.add('active');
  });
  
  closeBtn.addEventListener('click', () => {
    overlay.classList.remove('active');
  });
  
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.classList.remove('active');
    }
  });
  
  // Filter tabs
  const filters = document.getElementById('marketFilters').querySelectorAll('.filter-tab');
  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      filters.forEach(f => f.classList.remove('active'));
      btn.classList.add('active');
      AppState.marketFilter = btn.getAttribute('data-market-cat');
      renderClassifieds();
    });
  });
  
  // Form submission
  const form = document.getElementById('classifiedForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const titleVal = document.getElementById('postTitle').value;
    const catVal = document.getElementById('postCategory').value;
    const priceVal = document.getElementById('postPrice').value || (AppState.lang === 'es' ? 'Consultar' : 'Contact');
    const contactVal = document.getElementById('postContact').value;
    const descVal = document.getElementById('postDescription').value;
    
    const newPost = {
      id: `custom-${Date.now()}`,
      category: catVal,
      price: priceVal,
      dateEs: 'Hoy',
      dateEn: 'Today',
      titleEs: titleVal,
      titleEn: titleVal, // Custom submissions remain same in both
      contact: contactVal,
      descEs: descVal,
      descEn: descVal
    };
    
    // Add to state and save
    AppState.classifieds.unshift(newPost);
    localStorage.setItem('esMiami_listings', JSON.stringify(AppState.classifieds));
    
    // reset form, close dialog and re-render
    form.reset();
    overlay.classList.remove('active');
    renderClassifieds();
    
    // Toast notification
    const successMsg = AppState.lang === 'es' ? '¡Anuncio publicado correctamente!' : 'Classified post published successfully!';
    alert(successMsg);
  });
  
  renderClassifieds();
}

function renderClassifieds() {
  const grid = document.getElementById('marketplaceGrid');
  grid.innerHTML = '';
  
  AppState.classifieds.forEach(post => {
    if (AppState.marketFilter !== 'all' && post.category !== AppState.marketFilter) return;
    
    const title = AppState.lang === 'es' ? post.titleEs : post.titleEn;
    const desc = AppState.lang === 'es' ? post.descEs : post.descEn;
    const date = AppState.lang === 'es' ? post.dateEs : post.dateEn;
    
    const card = document.createElement('div');
    card.className = 'glass-card market-card';
    
    const categoryTag = getMarketCategoryLabel(post.category);
    
    // Nice illustrative placeholder image based on category
    let imgUrl = 'https://images.unsplash.com/photo-1513829096960-ef04829d15d1?q=80&w=400'; // housing default
    if (post.category === 'services') imgUrl = 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=400';
    if (post.category === 'social') imgUrl = 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=400';
    
    card.innerHTML = `
      <img src="${imgUrl}" alt="${title}" class="market-card-img">
      <div class="market-card-body">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem">
          <span class="directory-badge" style="background:var(--color-accent-light); color:var(--color-text-main); font-weight:700">${categoryTag}</span>
          <span style="font-size:0.7rem; color:var(--color-text-muted)">${date}</span>
        </div>
        <h4 style="margin-bottom:0.5rem; font-size:1.1rem; line-height:1.3">${title}</h4>
        <div class="market-price">${post.price}</div>
        <p style="font-size:0.85rem; margin-bottom:1rem">${desc}</p>
        
        <div class="market-meta">
          <span>📞 <strong>${post.contact}</strong></span>
        </div>
      </div>
    `;
    
    grid.appendChild(card);
  });
}

function getMarketCategoryLabel(cat) {
  if (AppState.lang === 'es') {
    if (cat === 'housing') return 'Vivienda';
    if (cat === 'services') return 'Servicios';
    if (cat === 'social') return 'Social / Quedadas';
  } else {
    if (cat === 'housing') return 'Housing';
    if (cat === 'services') return 'Services';
    if (cat === 'social') return 'Social / Meetups';
  }
  return cat;
}

function filterMarketplaceBySearch(query) {
  const grid = document.getElementById('marketplaceGrid');
  grid.innerHTML = '';
  
  AppState.classifieds.forEach(post => {
    const title = (AppState.lang === 'es' ? post.titleEs : post.titleEn).toLowerCase();
    const desc = (AppState.lang === 'es' ? post.descEs : post.descEn).toLowerCase();
    
    if (title.includes(query) || desc.includes(query)) {
      const titleTxt = AppState.lang === 'es' ? post.titleEs : post.titleEn;
      const descTxt = AppState.lang === 'es' ? post.descEs : post.descEn;
      const dateTxt = AppState.lang === 'es' ? post.dateEs : post.dateEn;
      
      const card = document.createElement('div');
      card.className = 'glass-card market-card';
      
      let imgUrl = 'https://images.unsplash.com/photo-1513829096960-ef04829d15d1?q=80&w=400';
      if (post.category === 'services') imgUrl = 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=400';
      if (post.category === 'social') imgUrl = 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=400';
      
      card.innerHTML = `
        <img src="${imgUrl}" alt="${titleTxt}" class="market-card-img">
        <div class="market-card-body">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem">
            <span class="directory-badge" style="background:var(--color-accent-light); color:var(--color-text-main); font-weight:700">${getMarketCategoryLabel(post.category)}</span>
            <span style="font-size:0.7rem; color:var(--color-text-muted)">${dateTxt}</span>
          </div>
          <h4 style="margin-bottom:0.5rem; font-size:1.1rem; line-height:1.3">${titleTxt}</h4>
          <div class="market-price">${post.price}</div>
          <p style="font-size:0.85rem; margin-bottom:1rem">${descTxt}</p>
          <div class="market-meta">
            <span>📞 <strong>${post.contact}</strong></span>
          </div>
        </div>
      `;
      grid.appendChild(card);
    }
  });
}

// ==================== FLOATING ASSISTANT "EL GUÍA" ====================

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
      • <strong>Trámite recomendado:</strong> Hazte el Alta Consular nada más llegar para facilitar cualquier renovación futura. En la pestaña <strong>"Servicios Consulares"</strong> tienes los pasos.`;
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
      • <strong>Programa ISA:</strong> El Ministerio de Educación de España colabora con escuelas públicas de Miami-Dade para impartir clases bilingües de excelencia.<br>
      • <strong>ISPA</strong> (International Studies Preparatory Academy) en Coral Gables es un colegio 100% bilingüe muy solicitado.<br>
      • <strong>Auxiliares de Conversación:</strong> Si eres profesor, la Embajada de España convoca plazas anuales para trabajar en colegios de Florida bajo el visado J-1.`;
    }
    
    if (q.includes('negocio') || q.includes('invertir') || q.includes('empresa') || q.includes('llc') || q.includes('sunbiz')) {
      return `💼 <strong>Negocios y Emprendimiento en Florida:</strong><br><br>
      • <strong>Sunbiz.org:</strong> Es el portal estatal oficial de Florida donde puedes constituir una LLC o Corp online en menos de 48 horas.<br>
      • <strong>Cámara de Comercio:</strong> La <strong>Spain-US Chamber of Commerce</strong> en Brickell ofrece excelentes sesiones de networking empresarial y te guía en las regulaciones de Florida.<br>
      • <strong>Visados:</strong> Las visas E-2 de inversor y L-1 de transferencia corporativa son los caminos legales más comunes para empresarios españoles.`;
    }
    
    if (q.includes('turismo') || q.includes('viajar') || q.includes('viaje') || q.includes('spain.info') || q.includes('visitar')) {
      return `✈️ <strong>Recursos Oficiales de Turismo de España:</strong><br><br>
      • <strong>Oficina de Turismo de España en Miami:</strong> Representación oficial de Turespaña en Brickell (1395 Brickell Ave #1130). Ofrece asesoramiento personalizado, mapas de carreteras y catálogos de destinos.<br>
      • <strong>Portal Oficial:</strong> Visita <a href="https://www.spain.info" target="_blank"><strong>Spain.info</strong></a> para guías turísticas completas de Madrid, Barcelona, Andalucía y el Camino de Santiago.<br>
      • <strong>Pestaña Recomendada:</strong> Accede a la pestaña <strong>"Servicios Consulares"</strong> y selecciona <strong>"Turismo de España"</strong> para obtener guías de Paradores, requisitos ETIAS y estancias de turismo.`;
    }
    
    return `¡Entendido! He registrado tu consulta sobre <em>"${rawQuery}"</em>. Puedes encontrar más detalles específicos en nuestras pestañas <strong>"Servicios Consulares"</strong> o en <strong>"Mapa y Sitios"</strong> (para servicios locales). ¿Te gustaría saber algo más específico?`;
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
    
    if (q.includes('nie') || q.includes('ex15') || q.includes('number')) {
      return `📝 <strong>Applying for a Spanish NIE in Miami:</strong><br><br>
      1. Complete <strong>Form EX-15</strong> in block letters.<br>
      2. Complete and print the fee form <strong>Model 790-012</strong>.<br>
      3. Provide your original passport, full copies of all pages, and a legal letter justifying why you need the NIE (e.g. real estate purchase, founding a business).<br>
      4. Submit them in person at the Consulate of Miami. Processing takes 2-4 weeks.`;
    }
    
    if (q.includes('school') || q.includes('educat') || q.includes('study') || q.includes('ispa') || q.includes('assistant')) {
      return `🎓 <strong>Bilingual Education in Miami:</strong><br><br>
      • <strong>ISA Program:</strong> Spain's Ministry of Education partners with Miami-Dade County Public Schools to offer high-quality bilingual tracks.<br>
      • <strong>ISPA</strong> (International Studies Preparatory Academy) in Coral Gables is an exceptional, highly-sought public school option.<br>
      • <strong>Language Assistants:</strong> Eligible Spanish educators can apply annually to teach in Florida schools through the J-1 exchange visa.`;
    }
    
    if (q.includes('business') || q.includes('invest') || q.includes('company') || q.includes('llc') || q.includes('sunbiz')) {
      return `💼 <strong>Business & Investing in Florida:</strong><br><br>
      • <strong>Sunbiz.org:</strong> The official State of Florida corporate registry where you can incorporate an LLC or Corp online in minutes.<br>
      • <strong>Chamber of Commerce:</strong> The <strong>Spain-US Chamber of Commerce</strong> based in Brickell is the premier networking organization in FL.<br>
      • <strong>Visas:</strong> E-2 Investor visas and L-1 Intracompany Transfer visas are the standard corporate vehicles for Spanish business owners.`;
    }
    
    if (q.includes('tourism') || q.includes('travel') || q.includes('spain.info') || q.includes('visit') || q.includes('trip')) {
      return `✈️ <strong>Official Spain Tourism Resources:</strong><br><br>
      • <strong>Tourist Office of Spain in Miami:</strong> The official Turespaña delegation located in Brickell (1395 Brickell Ave #1130). Provides physical maps, custom brochures, and destination guidance.<br>
      • <strong>Official Portal:</strong> Explore <a href="https://www.spain.info" target="_blank"><strong>Spain.info</strong></a> to secure comprehensive planning guides for Madrid, Barcelona, Andalusia, and cultural hotspots.<br>
      • <strong>Consular Services Hub:</strong> Navigate to the <strong>"Consular Services"</strong> tab and choose <strong>"Official Spain Tourism"</strong> to find entry guides, castle hotels (Paradores), and ETIAS travel rules.`;
    }
    
    return `Got it! I've noted your question about <em>"${rawQuery}"</em>. You can discover granular guides under <strong>"Consular Services"</strong> or navigate the interactive pins on the <strong>"Map & Spots"</strong> board. How else can I help you today?`;
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
      const name = document.getElementById('contactName').value;
      const email = document.getElementById('contactEmail').value;
      const subject = document.getElementById('contactSubject').value;
      const message = document.getElementById('contactMessage').value;
      
      const successMsg = AppState.lang === 'es' 
        ? `¡Gracias, ${name}! Tu mensaje sobre "${subject}" ha sido recibido. Nos pondremos en contacto contigo pronto en ${email}.` 
        : `Thank you, ${name}! Your message regarding "${subject}" has been successfully received. We will get back to you shortly at ${email}.`;
      
      alert(successMsg);
      contactForm.reset();
    });
  }
}
