/* =============================================
   LABRASA & PASTA — script.js
   ============================================= */

/* =============================================
   1. IMAGENS & VÍDEOS — CONFIGURE AQUI
   ============================================= */
const MEDIA = {
  pizza_p:  'IMG/PIZZA/pizza.P.jpg',
  pizza_m:  'IMG/PIZZA/pizza.M.jpg',
  pizza_g:  'IMG/PIZZA/pizza.G.jpg',
  pizza_gg: 'IMG/PIZZA/pizza.GG.jpg',

  carbonara:   'IMG/massa/massa.spaghettcarbonara.jpg',
  ravioli:     'IMG/massa/massa.raviolidequeijo.jpg',
  gnocchi:     'IMG/massa/mass.Gnocchi.jpg',
  fettuccini:  'IMG/massa/massa.fettutinealmare.jpg',
  lasanha_bol: 'IMG/massa/massa.lasanhabolonhesa.jpg',
  lasanha_frg: 'IMG/massa/massa.lasanhadefrango.jpg',

  smash_duplo:     'IMG/hamburguer/hamburguer.smashduplo.jpg',
  smash_cebola:    'IMG/hamburguer/hamburguer.smashcomcebola.jpg',
  smash_classico:  'IMG/hamburguer/hamburguer.classicsmash.jpg',
  frango_crocante: 'IMG/hamburguer/hamburguer.crocantedefrango.jpg',
  frango_cremoso:  'IMG/hamburguer/hamburguer.frangocremoso.jpg',
  bacon:           'IMG/hamburguer/hamburguer.ruticobacon.jpg',

  coca:    'IMG/refri/refri.cocacola.jpg',
  guarana: 'IMG/refri/refri.guarana.jpg',
  sprite:  'IMG/refri/refri.sprit.jpg',
  suco:    'IMG/refri/suco.jpg',

  banner_pizza:     'IMG/img_lanndingpage/pizza.jpg',
  banner_massa:     'IMG/img_lanndingpage/macarrao.jpg',
  banner_hamburger: 'IMG/img_lanndingpage/hamburguer.jpg',
  banner_refri:     'IMG/img_lanndingpage/refrigerantes.jpg',

  video_hamburguer: 'IMG/img_lanndingpage/hamburguer.mp4',
  video_pizza:      'IMG/img_lanndingpage/pizza.mp4',
  video_massa:      'IMG/img_lanndingpage/macarrao.mp4',
  video_refri:      'IMG/img_lanndingpage/refrigerante.mp4',
  poster_hamburguer:'IMG/img_lanndingpage/hamburguer.jpg',
  poster_pizza:     'IMG/img_lanndingpage/pizza.jpg',
  poster_massa:     'IMG/img_lanndingpage/macarrao.jpg',
  poster_refri:     'IMG/img_lanndingpage/refrigerantes.jpg',
};

/* =============================================
   2. INTERNACIONALIZAÇÃO
   ============================================= */
const CURRENCIES = {
  pt: { code: 'BRL', symbol: 'R$', locale: 'pt-BR', rate: 1     },
  en: { code: 'USD', symbol: '$',  locale: 'en-US', rate: 0.19  },
  es: { code: 'EUR', symbol: '€',  locale: 'es-ES', rate: 0.18  },
  it: { code: 'EUR', symbol: '€',  locale: 'it-IT', rate: 0.18  },
  fr: { code: 'EUR', symbol: '€',  locale: 'fr-FR', rate: 0.18  },
};

const TRANSLATIONS = {
  pt: {
    nav_pizza:'Pizza', nav_massa:'Massas', nav_hamburguer:'Hambúrgueres', nav_bebida:'Bebidas',
    horario:'Aberto de segunda a sábado, das 18h às 00h30',
    footer_rights:'Todos os direitos reservados.', footer_dev:'Desenvolvido por', footer_contact:'Contato:',
    cart_title:'Seu Pedido', cart_empty:'Seu carrinho está vazio.', cart_total:'Total', cart_checkout:'Finalizar Pedido',
    btn_consultar:'Ver Sabores', btn_add:'Adicionar ao Carrinho', btn_back:'Voltar', btn_finalizar:'Ir para Pagamento',
    label_tamanho:'Tamanho', label_sabores:'Escolha os sabores', label_comentario:'Observações (opcional)',
    label_comentario_ph:'Ex: sem cebola, molho à parte...', label_ingredients:'Ingredientes', label_tamanho_unit:'Tamanho',
    checkout_title:'Finalizar Pedido', checkout_delivery:'Entrega ou Retirada?',
    opt_retirada:'🏪 Retirar na Loja', opt_entrega:'🛵 Delivery',
    checkout_address:'Endereço de entrega',
    field_name:'Nome completo', field_street:'Rua e número', field_bairro:'Bairro', field_city:'Cidade', field_ref:'Ponto de referência',
    checkout_payment:'Forma de Pagamento',
    checkout_disclaimer:'Este site é apenas para demonstração. Nenhuma cobrança real será efetuada.',
    btn_confirm:'Confirmar Pedido',
    order_done_title:'Pedido realizado! 🎉',
    order_done_msg:'Em breve entraremos em contato para confirmar.',
    order_done_demo:'⚠️ Isto é apenas uma demonstração — nenhuma cobrança foi efetuada.',
    btn_close:'Fechar',
    size_p:'P', size_m:'M', size_g:'G', size_gg:'GG',
    size_label_p:'Pequena', size_label_m:'Média', size_label_g:'Grande', size_label_gg:'Família',
    lata:'Lata', litro_1:'1 Litro', litro_2:'2 Litros', ml_500:'500 ml', ml_600:'600 ml',
    sabor_label:'Sabor', max_flavors:'Escolha até {n} sabor(es)',
    adicionais_title:'Adicionais',
    error_sabor:'Selecione pelo menos um sabor.', error_tamanho:'Selecione um tamanho.',
    error_name:'Informe seu nome.', error_address:'Preencha o endereço.', error_payment:'Selecione uma forma de pagamento.',
    troco_label:'Troco para quanto?', troco_placeholder:'Ex: 50,00',
    troco_error:'Informe um valor de troco válido (maior que o total).',
    a_partir_de:'a partir de',
    sabor_escolhido:'sabor escolhido', sabores_escolhidos:'sabores escolhidos',
    cliente_label:'Cliente',
  },
  en: {
    nav_pizza:'Pizza', nav_massa:'Pasta', nav_hamburguer:'Burgers', nav_bebida:'Drinks',
    horario:'Open Monday to Saturday, 6 pm – 12:30 am',
    footer_rights:'All rights reserved.', footer_dev:'Developed by', footer_contact:'Contact:',
    cart_title:'Your Order', cart_empty:'Your cart is empty.', cart_total:'Total', cart_checkout:'Checkout',
    btn_consultar:'View Flavors', btn_add:'Add to Cart', btn_back:'Back', btn_finalizar:'Go to Payment',
    label_tamanho:'Size', label_sabores:'Choose flavors', label_comentario:'Notes (optional)',
    label_comentario_ph:'E.g.: no onions, sauce on the side...', label_ingredients:'Ingredients', label_tamanho_unit:'Size',
    checkout_title:'Checkout', checkout_delivery:'Delivery or Pickup?',
    opt_retirada:'🏪 Store Pickup', opt_entrega:'🛵 Delivery',
    checkout_address:'Delivery address',
    field_name:'Full name', field_street:'Street and number', field_bairro:'Neighborhood', field_city:'City', field_ref:'Landmark',
    checkout_payment:'Payment Method',
    checkout_disclaimer:'This website is for demonstration purposes only. No real charge will be made.',
    btn_confirm:'Confirm Order',
    order_done_title:'Order placed! 🎉',
    order_done_msg:'We will contact you shortly to confirm.',
    order_done_demo:'⚠️ This is a demonstration only — no charge was made.',
    btn_close:'Close',
    size_p:'S', size_m:'M', size_g:'L', size_gg:'XL',
    size_label_p:'Small', size_label_m:'Medium', size_label_g:'Large', size_label_gg:'Family',
    lata:'Can', litro_1:'1 Liter', litro_2:'2 Liters', ml_500:'500 ml', ml_600:'600 ml',
    sabor_label:'Flavor', max_flavors:'Choose up to {n} flavor(s)',
    adicionais_title:'Add-ons',
    error_sabor:'Please select at least one flavor.', error_tamanho:'Please select a size.',
    error_name:'Please enter your name.', error_address:'Please fill in the address.', error_payment:'Please select a payment method.',
    troco_label:'Change for how much?', troco_placeholder:'E.g.: 50.00',
    troco_error:'Enter a valid amount (must be greater than the total).',
    a_partir_de:'from',
    sabor_escolhido:'flavor chosen', sabores_escolhidos:'flavors chosen',
    cliente_label:'Customer',
  },
  es: {
    nav_pizza:'Pizza', nav_massa:'Pastas', nav_hamburguer:'Hamburguesas', nav_bebida:'Bebidas',
    horario:'Abierto de lunes a sábado, de 18h a 00h30',
    footer_rights:'Todos los derechos reservados.', footer_dev:'Desarrollado por', footer_contact:'Contacto:',
    cart_title:'Tu Pedido', cart_empty:'Tu carrito está vacío.', cart_total:'Total', cart_checkout:'Finalizar',
    btn_consultar:'Ver Sabores', btn_add:'Agregar al Carrito', btn_back:'Volver', btn_finalizar:'Ir al Pago',
    label_tamanho:'Tamaño', label_sabores:'Elige los sabores', label_comentario:'Observaciones (opcional)',
    label_comentario_ph:'Ej: sin cebolla...', label_ingredients:'Ingredientes', label_tamanho_unit:'Tamaño',
    checkout_title:'Finalizar Pedido', checkout_delivery:'¿Entrega o Recogida?',
    opt_retirada:'🏪 Recoger en Tienda', opt_entrega:'🛵 Entrega',
    checkout_address:'Dirección de entrega',
    field_name:'Nombre completo', field_street:'Calle y número', field_bairro:'Barrio', field_city:'Ciudad', field_ref:'Referencia',
    checkout_payment:'Forma de Pago',
    checkout_disclaimer:'Este sitio es solo para demostración. No se realizará ningún cobro real.',
    btn_confirm:'Confirmar Pedido',
    order_done_title:'¡Pedido realizado! 🎉',
    order_done_msg:'Nos pondremos en contacto pronto para confirmar.',
    order_done_demo:'⚠️ Esto es solo una demostración — no se realizó ningún cobro.',
    btn_close:'Cerrar',
    size_p:'P', size_m:'M', size_g:'G', size_gg:'F',
    size_label_p:'Pequeña', size_label_m:'Mediana', size_label_g:'Grande', size_label_gg:'Familiar',
    lata:'Lata', litro_1:'1 Litro', litro_2:'2 Litros', ml_500:'500 ml', ml_600:'600 ml',
    sabor_label:'Sabor', max_flavors:'Elige hasta {n} sabor(es)',
    adicionais_title:'Adicionales',
    error_sabor:'Selecciona al menos un sabor.', error_tamanho:'Selecciona un tamaño.',
    error_name:'Ingresa tu nombre.', error_address:'Completa la dirección.', error_payment:'Selecciona una forma de pago.',
    troco_label:'¿Cambio para cuánto?', troco_placeholder:'Ej: 50,00',
    troco_error:'Ingresa un monto válido (mayor al total).',
    a_partir_de:'desde',
    sabor_escolhido:'sabor elegido', sabores_escolhidos:'sabores elegidos',
    cliente_label:'Cliente',
  },
  it: {
    nav_pizza:'Pizza', nav_massa:'Pasta', nav_hamburguer:'Hamburger', nav_bebida:'Bevande',
    horario:'Aperto dal lunedì al sabato, dalle 18:00 alle 00:30',
    footer_rights:'Tutti i diritti riservati.', footer_dev:'Sviluppato da', footer_contact:'Contatto:',
    cart_title:'Il Tuo Ordine', cart_empty:'Il carrello è vuoto.', cart_total:'Totale', cart_checkout:'Concludi',
    btn_consultar:'Vedi Sapori', btn_add:'Aggiungi al Carrello', btn_back:'Indietro', btn_finalizar:'Vai al Pagamento',
    label_tamanho:'Dimensione', label_sabores:'Scegli i sapori', label_comentario:'Note (opzionale)',
    label_comentario_ph:"Es: senza cipolla...", label_ingredients:'Ingredienti', label_tamanho_unit:'Dimensione',
    checkout_title:'Concludi Ordine', checkout_delivery:'Consegna o Ritiro?',
    opt_retirada:'🏪 Ritiro in Negozio', opt_entrega:'🛵 Consegna',
    checkout_address:'Indirizzo di consegna',
    field_name:'Nome completo', field_street:'Via e numero', field_bairro:'Quartiere', field_city:'Città', field_ref:'Riferimento',
    checkout_payment:'Metodo di Pagamento',
    checkout_disclaimer:'Questo sito è solo dimostrativo. Nessun addebito reale.',
    btn_confirm:'Conferma Ordine',
    order_done_title:'Ordine effettuato! 🎉',
    order_done_msg:'Ti contatteremo a breve per confermare.',
    order_done_demo:'⚠️ Questo è solo una dimostrazione — nessun addebito è stato effettuato.',
    btn_close:'Chiudi',
    size_p:'P', size_m:'M', size_g:'G', size_gg:'F',
    size_label_p:'Piccola', size_label_m:'Media', size_label_g:'Grande', size_label_gg:'Famiglia',
    lata:'Lattina', litro_1:'1 Litro', litro_2:'2 Litri', ml_500:'500 ml', ml_600:'600 ml',
    sabor_label:'Sapore', max_flavors:'Scegli fino a {n} sapore/i',
    adicionais_title:'Aggiunte',
    error_sabor:'Seleziona almeno un sapore.', error_tamanho:'Seleziona una dimensione.',
    error_name:'Inserisci il tuo nome.', error_address:"Compila l'indirizzo.", error_payment:'Seleziona un metodo di pagamento.',
    troco_label:'Resto per quanto?', troco_placeholder:'Es: 50,00',
    troco_error:'Inserisci un importo valido (maggiore del totale).',
    a_partir_de:'da',
    sabor_escolhido:'sapore scelto', sabores_escolhidos:'sapori scelti',
    cliente_label:'Cliente',
  },
  fr: {
    nav_pizza:'Pizza', nav_massa:'Pâtes', nav_hamburguer:'Burgers', nav_bebida:'Boissons',
    horario:'Ouvert du lundi au samedi, de 18h à 00h30',
    footer_rights:'Tous droits réservés.', footer_dev:'Développé par', footer_contact:'Contact:',
    cart_title:'Votre Commande', cart_empty:'Votre panier est vide.', cart_total:'Total', cart_checkout:'Commander',
    btn_consultar:'Voir les Saveurs', btn_add:'Ajouter au Panier', btn_back:'Retour', btn_finalizar:'Aller au Paiement',
    label_tamanho:'Taille', label_sabores:'Choisir les saveurs', label_comentario:'Remarques (optionnel)',
    label_comentario_ph:"Ex: sans oignon...", label_ingredients:'Ingrédients', label_tamanho_unit:'Taille',
    checkout_title:'Finaliser la Commande', checkout_delivery:'Livraison ou Retrait?',
    opt_retirada:'🏪 Retrait en Magasin', opt_entrega:'🛵 Livraison',
    checkout_address:'Adresse de livraison',
    field_name:'Nom complet', field_street:'Rue et numéro', field_bairro:'Quartier', field_city:'Ville', field_ref:'Point de repère',
    checkout_payment:'Mode de Paiement',
    checkout_disclaimer:'Ce site est uniquement à des fins de démonstration. Aucun paiement réel.',
    btn_confirm:'Confirmer la Commande',
    order_done_title:'Commande passée ! 🎉',
    order_done_msg:'Nous vous contacterons bientôt pour confirmer.',
    order_done_demo:"⚠️ Ceci est une démonstration uniquement — aucun paiement n'a été effectué.",
    btn_close:'Fermer',
    size_p:'P', size_m:'M', size_g:'G', size_gg:'F',
    size_label_p:'Petite', size_label_m:'Moyenne', size_label_g:'Grande', size_label_gg:'Famille',
    lata:'Canette', litro_1:'1 Litre', litro_2:'2 Litres', ml_500:'500 ml', ml_600:'600 ml',
    sabor_label:'Saveur', max_flavors:"Choisissez jusqu'à {n} saveur(s)",
    adicionais_title:'Suppléments',
    error_sabor:'Sélectionnez au moins une saveur.', error_tamanho:'Sélectionnez une taille.',
    error_name:'Entrez votre nom.', error_address:"Remplissez l'adresse.", error_payment:'Sélectionnez un mode de paiement.',
    troco_label:'Rendu de monnaie pour combien?', troco_placeholder:'Ex: 50,00',
    troco_error:'Entrez un montant valide (supérieur au total).',
    a_partir_de:'dès',
    sabor_escolhido:'saveur choisie', sabores_escolhidos:'saveurs choisies',
    cliente_label:'Client',
  },
};

let currentLang = 'pt';

function t(key, vars) {
  let str = (TRANSLATIONS[currentLang] || TRANSLATIONS.pt)[key] || key;
  if (vars) Object.entries(vars).forEach(([k, v]) => { str = str.replace(`{${k}}`, v); });
  return str;
}

function formatPrice(brl) {
  const cur = CURRENCIES[currentLang];
  const val = brl * cur.rate;
  return cur.symbol + ' ' + val.toFixed(2).replace('.', ',');
}

/* =============================================
   3. DADOS DOS PRODUTOS
   ============================================= */
const PIZZA_SIZES = [
  { key: 'p',  labelKey: 'size_p',  subKey: 'size_label_p',  price: 30, maxFlavors: 1, imgKey: 'pizza_p',  emoji: '🍕' },
  { key: 'm',  labelKey: 'size_m',  subKey: 'size_label_m',  price: 40, maxFlavors: 1, imgKey: 'pizza_m',  emoji: '🍕' },
  { key: 'g',  labelKey: 'size_g',  subKey: 'size_label_g',  price: 60, maxFlavors: 2, imgKey: 'pizza_g',  emoji: '🍕' },
  { key: 'gg', labelKey: 'size_gg', subKey: 'size_label_gg', price: 80, maxFlavors: 3, imgKey: 'pizza_gg', emoji: '🍕' },
];

const PIZZA_FLAVORS = [
  { id: 'quatro_queijo',   name: '4 Queijos',             ingredients: 'Molho de tomate, mussarela, provolone, parmesão e gorgonzola' },
  { id: 'pepperoni_honey', name: 'Pepperoni & Hot Honey',  ingredients: 'Molho de tomate, mussarela, pepperoni fatiado e fio de mel picante' },
  { id: 'camarao_gourmet', name: 'Camarão Gourmet',        ingredients: 'Creme de alho, camarões salteados, catupiry e cebolinha' },
  { id: 'burrata_pesto',   name: 'Burrata & Pesto',        ingredients: 'Base de pesto, burrata fresca, tomate-cereja e manjericão' },
  { id: 'frango_catupiry', name: 'Frango c/ Catupiry',     ingredients: 'Molho de tomate, frango desfiado temperado, catupiry e milho' },
  { id: 'parma_rucula',    name: 'Parma & Rúcula',         ingredients: 'Molho de tomate, mussarela, presunto parma, rúcula fresca e parmesão' },
  { id: 'ninho',           name: 'Pizza de Ninho',         ingredients: 'Base de leite Ninho, nutella, morango e granulado' },
  { id: 'brigadeiro',      name: 'Brigadeiro',             ingredients: 'Base de chocolate, brigadeiro cremoso, granulado e coco ralado' },
  { id: 'doce_leite',      name: 'Doce de Leite',          ingredients: 'Base de doce de leite, banana caramelizada e canela' },
  { id: 'ninho_nutella',   name: 'Ninho c/ Nutella',       ingredients: 'Base de leite Ninho, fios de Nutella, morangos e granulado belga' },
];

const MASSAS = [
  { id: 'carbonara',   name: 'Espaguete Carbonara',   price: 49, ingredients: 'Espaguete al dente, bacon crocante, gema de ovo, parmesão e pimenta-do-reino', imgKey: 'carbonara'   },
  { id: 'ravioli',     name: 'Ravioli de Queijo',     price: 54, ingredients: 'Ravioli recheado com ricota e ervas finas, manteiga de sálvia e parmesão',     imgKey: 'ravioli'     },
  { id: 'gnocchi',     name: 'Gnocchi ao Sugo',       price: 46, ingredients: 'Nhoque de batata artesanal, molho sugo com manjericão fresco e parmesão',       imgKey: 'gnocchi'     },
  { id: 'fettuccini',  name: 'Fettuccini al Mare',    price: 72, ingredients: 'Fettuccini, mix de frutos do mar, vôngoles, camarão, creme de alho e vinho',    imgKey: 'fettuccini'  },
  { id: 'lasanha_bol', name: 'Lasanha Bolonhesa',     price: 58, ingredients: 'Massa fresca, ragú de carne bovina, molho bechamel e parmesão gratinado',       imgKey: 'lasanha_bol' },
  { id: 'lasanha_frg', name: 'Lasanha de Frango',     price: 55, ingredients: 'Massa fresca, frango ao molho branco, catupiry, milho e parmesão',              imgKey: 'lasanha_frg' },
];

const HAMBURGUERES = [
  { id: 'smash_duplo',     name: 'Smash Duplo',                 price: 42, ingredients: '2 blends de 90g smashados, cheddar americano, pickles, mostarda e molho especial',  imgKey: 'smash_duplo'     },
  { id: 'smash_cebola',    name: 'Smash & Cebola Caramelizada', price: 39, ingredients: 'Blend smashado, cebola caramelizada, queijo suíço e maionese de alho negro',         imgKey: 'smash_cebola'    },
  { id: 'smash_classico',  name: 'Smash Clássico',              price: 35, ingredients: 'Blend smashado, queijo cheddar, alface, tomate, cebola e molho da casa',             imgKey: 'smash_classico'  },
  { id: 'frango_crocante', name: 'Frango Crocante',             price: 36, ingredients: 'Peito de frango empanado crocante, alface, tomate e maionese temperada',             imgKey: 'frango_crocante' },
  { id: 'frango_cremoso',  name: 'Frango Cremoso',              price: 38, ingredients: 'Peito de frango grelhado, catupiry, cheddar, bacon e molho de mel mostarda',         imgKey: 'frango_cremoso'  },
  { id: 'bacon',           name: 'Bacon Especial',              price: 44, ingredients: 'Blend artesanal, torre de bacon, cheddar defumado, cebola crispy e BBQ',            imgKey: 'bacon'           },
];

const BEBIDAS = [
  {
    id: 'coca', name: 'Coca-Cola', imgKey: 'coca', emoji: '🥤',
    variants: [
      { id: 'coca_lata', label: 'lata',    price: 7  },
      { id: 'coca_1l',   label: 'litro_1', price: 12 },
      { id: 'coca_2l',   label: 'litro_2', price: 18 },
    ]
  },
  {
    id: 'guarana', name: 'Guaraná Antarctica', imgKey: 'guarana', emoji: '🥤',
    variants: [
      { id: 'guarana_lata', label: 'lata',    price: 7  },
      { id: 'guarana_1l',   label: 'litro_1', price: 12 },
      { id: 'guarana_2l',   label: 'litro_2', price: 18 },
    ]
  },
  {
    id: 'sprite', name: 'Sprite', imgKey: 'sprite', emoji: '🥤',
    variants: [
      { id: 'sprite_lata', label: 'lata',   price: 7 },
      { id: 'sprite_600',  label: 'ml_600', price: 9 },
    ]
  },
  {
    id: 'suco', name: 'Suco Natural', imgKey: 'suco', emoji: '🍹',
    isJuice: true,
    flavors: ['Acerola', 'Abacaxi', 'Mamão', 'Abacate'],
    variants: [
      { id: 'suco_500', label: 'ml_500',  price: 12 },
      { id: 'suco_1l',  label: 'litro_1', price: 18 },
    ]
  },
];

/* =============================================
   ADICIONAIS POR CATEGORIA
   ============================================= */
const ADICIONAIS = {
  pizza: [
    { id: 'borda_catupiry', name: 'Borda de Catupiry', price: 8 },
    { id: 'borda_cheddar',  name: 'Borda de Cheddar',  price: 8 },
    { id: 'extra_queijo',   name: 'Extra de Queijo',    price: 5 },
    { id: 'bacon_extra',    name: 'Bacon Extra',        price: 7 },
  ],
  massa: [
    { id: 'queijo_extra', name: 'Parmesão Extra', price: 5 },
    { id: 'pao_alho',     name: 'Pão de Alho',    price: 8 },
    { id: 'molho_extra',  name: 'Molho Extra',    price: 4 },
  ],
  hamburguer: [
    { id: 'batata_frita',  name: 'Batata Frita',        price: 12 },
    { id: 'onion_rings',   name: 'Onion Rings',          price: 14 },
    { id: 'extra_cheddar', name: 'Extra Cheddar',        price: 5  },
    { id: 'extra_bacon',   name: 'Bacon Extra',          price: 7  },
    { id: 'molho_extra',   name: 'Molho da Casa Extra',  price: 3  },
  ],
};

/* =============================================
   4. ESTADO GLOBAL
   ============================================= */
let cart   = [];
let cartId = 0;

/* =============================================
   5. DOM UTILS
   ============================================= */
const $ = id => document.getElementById(id);
const $$ = sel => document.querySelectorAll(sel);

function openOverlay(overlayEl, drawerEl) {
  overlayEl.classList.add('open');
  drawerEl.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeOverlay(overlayEl, drawerEl) {
  overlayEl.classList.remove('open');
  drawerEl.classList.remove('open');
  document.body.style.overflow = '';
}

/* =============================================
   6. HEADER — scroll & mobile nav
   ============================================= */
const header = $('main-header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

$('hamburger-menu').addEventListener('click', () => {
  $('main-nav').classList.toggle('open');
});
$$('.nav-link').forEach(link => {
  link.addEventListener('click', () => $('main-nav').classList.remove('open'));
});
$('logo-home').addEventListener('click', e => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* =============================================
   7. IDIOMA
   ============================================= */
const langBtn      = $('lang-btn');
const langDropdown = $('lang-dropdown');
const langFlag     = $('lang-flag');
const langLabel    = $('lang-label');

langBtn.addEventListener('click', e => {
  e.stopPropagation();
  const isOpen = langDropdown.classList.toggle('open');
  langBtn.setAttribute('aria-expanded', isOpen);
});
document.addEventListener('click', () => {
  langDropdown.classList.remove('open');
  langBtn.setAttribute('aria-expanded', false);
});
langDropdown.querySelectorAll('li').forEach(li => {
  li.addEventListener('click', () => {
    currentLang = li.dataset.lang;
    langFlag.textContent  = li.dataset.flag;
    langLabel.textContent = li.querySelector('span').nextSibling.textContent.trim();
    langDropdown.classList.remove('open');
    applyTranslations();
    rerenderAll();
  });
});

function applyTranslations() {
  $$('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  // Footer elements that need translation
  const footerRights = document.querySelector('.footer-copy [data-i18n="footer_rights"]');
  if (footerRights) footerRights.textContent = t('footer_rights');
  // Cart header
  const cartHeader = document.querySelector('#cart-drawer .cart-header h3');
  if (cartHeader) cartHeader.textContent = t('cart_title');
  // Cart empty
  const cartEmptyEl = document.querySelector('.cart-empty[data-i18n]');
  if (cartEmptyEl) cartEmptyEl.textContent = t('cart_empty');
  // Finalizar btn
  const btnFin = $('btn-finalizar');
  if (btnFin) btnFin.textContent = t('cart_checkout');
}

/* =============================================
   8. SCROLL REVEAL — performático com will-change
   ============================================= */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObs.unobserve(e.target); // Para de observar após revelar — mais rápido
    }
  });
}, { threshold: 0.06, rootMargin: '0px 0px -40px 0px' });
$$('.product-section').forEach(sec => revealObs.observe(sec));

/* =============================================
   9. HERO
   ============================================= */
$$('.hero-video-wrap').forEach(wrap => {
  wrap.addEventListener('click', () => {
    const el = document.getElementById(wrap.dataset.target);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

/* =============================================
   10. HELPERS DE IMAGEM — corrigido (sem '"/> solto)
   ============================================= */
function imgTag(key, alt, emoji) {
  const src = MEDIA[key] || '';
  const escapedEmoji = emoji || '🍽️';
  const escapedAlt   = alt.replace(/"/g, '&quot;');
  const div = document.createElement('div');
  div.className = 'flavor-card-img-wrap';
  const img = document.createElement('img');
  img.src     = src;
  img.alt     = escapedAlt;
  img.loading = 'lazy';
  img.addEventListener('error', function() {
    const placeholder = document.createElement('div');
    placeholder.className = 'flavor-card-img-placeholder';
    placeholder.textContent = escapedEmoji;
    this.parentElement.replaceChild(placeholder, this);
  });
  div.appendChild(img);
  return div;
}

/* =============================================
   11. RENDER PIZZAS
   ============================================= */
function renderPizzaSizes() {
  const grid = $('pizza-sizes');
  grid.innerHTML = '';
  PIZZA_SIZES.forEach(sz => {
    const card = document.createElement('div');
    card.className = 'size-card';

    const imgWrap = document.createElement('div');
    imgWrap.className = 'size-card-img-wrap';
    const img = document.createElement('img');
    img.src     = MEDIA[sz.imgKey];
    img.alt     = 'Pizza ' + t(sz.labelKey);
    img.loading = 'lazy';
    img.addEventListener('error', function() {
      this.parentElement.innerHTML = '<span>' + sz.emoji + '</span>';
    });
    imgWrap.appendChild(img);

    const body = document.createElement('div');
    body.className = 'size-card-body';
    body.innerHTML =
      '<p class="size-card-title">Pizza ' + t(sz.subKey) + '</p>' +
      '<p class="size-card-sub">' + t('label_tamanho_unit') + ' ' + t(sz.labelKey) + ' · ' + t('max_flavors', { n: sz.maxFlavors }) + '</p>' +
      '<p class="size-card-price">' + formatPrice(sz.price) + '</p>' +
      '<button class="btn-consultar" data-size="' + sz.key + '">' + t('btn_consultar') + '</button>';

    card.appendChild(imgWrap);
    card.appendChild(body);
    grid.appendChild(card);

    card.querySelector('.btn-consultar').addEventListener('click', e => {
      e.stopPropagation();
      openPizzaModal(sz.key);
    });
    card.addEventListener('click', () => openPizzaModal(sz.key));
  });
}

/* =============================================
   12. RENDER MASSAS
   ============================================= */
function renderMassas() {
  const grid = $('massa-list');
  grid.innerHTML = '';
  MASSAS.forEach(item => {
    const card = document.createElement('div');
    card.className = 'flavor-card';
    const imgNode = imgTag(item.imgKey, item.name, '🍝');
    card.appendChild(imgNode);
    const body = document.createElement('div');
    body.className = 'flavor-card-body';
    body.innerHTML =
      '<p class="flavor-card-name">' + item.name + '</p>' +
      '<p class="flavor-card-desc">' + item.ingredients + '</p>' +
      '<p class="flavor-card-price">' + formatPrice(item.price) + '</p>';
    card.appendChild(body);
    card.addEventListener('click', () => openSimpleModal(item, 'massa'));
    grid.appendChild(card);
  });
}

/* =============================================
   13. RENDER HAMBÚRGUERES
   ============================================= */
function renderHamburgueres() {
  const grid = $('hamburguer-list');
  grid.innerHTML = '';
  HAMBURGUERES.forEach(item => {
    const card = document.createElement('div');
    card.className = 'flavor-card';
    const imgNode = imgTag(item.imgKey, item.name, '🍔');
    card.appendChild(imgNode);
    const body = document.createElement('div');
    body.className = 'flavor-card-body';
    body.innerHTML =
      '<p class="flavor-card-name">' + item.name + '</p>' +
      '<p class="flavor-card-desc">' + item.ingredients + '</p>' +
      '<p class="flavor-card-price">' + formatPrice(item.price) + '</p>';
    card.appendChild(body);
    card.addEventListener('click', () => openSimpleModal(item, 'hamburguer'));
    grid.appendChild(card);
  });
}

/* =============================================
   14. RENDER BEBIDAS
   ============================================= */
function renderBebidas() {
  const grid = $('bebida-list');
  grid.innerHTML = '';
  BEBIDAS.forEach(item => {
    const minPrice = Math.min(...item.variants.map(v => v.price));
    const card = document.createElement('div');
    card.className = 'flavor-card';
    const imgNode = imgTag(item.imgKey, item.name, item.emoji || '🥤');
    card.appendChild(imgNode);
    const body = document.createElement('div');
    body.className = 'flavor-card-body';
    body.innerHTML =
      '<p class="flavor-card-name">' + item.name + '</p>' +
      '<p class="flavor-card-desc">' + item.variants.map(v => t(v.label)).join(' · ') + '</p>' +
      '<p class="flavor-card-price">' + t('a_partir_de') + ' ' + formatPrice(minPrice) + '</p>';
    card.appendChild(body);
    card.addEventListener('click', () => openBebidaModal(item));
    grid.appendChild(card);
  });
}

function rerenderAll() {
  renderPizzaSizes();
  renderMassas();
  renderHamburgueres();
  renderBebidas();
  applyTranslations();
  renderCart();
}

/* =============================================
   15. MODAL — tela cheia com layout 2 colunas
   ============================================= */
const modalOverlay    = $('modal-overlay');
const modalFullscreen = $('modal-fullscreen');
const modalContent    = $('modal-content');
const modalClose      = $('modal-close');

function openModal() {
  openOverlay(modalOverlay, modalFullscreen);
  modalFullscreen.scrollTop = 0;
}
function closeModal() {
  closeOverlay(modalOverlay, modalFullscreen);
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

/* ---- Seção de adicionais ---- */
function renderAdicionaisHTML(tipo, selectedAdicionais) {
  const lista = ADICIONAIS[tipo];
  if (!lista || lista.length === 0) return '';
  return '<p class="mp-section-title">' + t('adicionais_title') + '</p>' +
    '<div class="adicionais-grid">' +
    lista.map(ad =>
      '<div class="adicional-item' + (selectedAdicionais.includes(ad.id) ? ' selected' : '') + '" data-id="' + ad.id + '">' +
        '<div class="adicional-left">' +
          '<div class="adicional-check">✓</div>' +
          '<span class="adicional-nome">' + ad.name + '</span>' +
        '</div>' +
        '<span class="adicional-price">+' + formatPrice(ad.price) + '</span>' +
      '</div>'
    ).join('') +
    '</div>';
}

function bindAdicionais(container, selectedAdicionais) {
  container.querySelectorAll('.adicional-item').forEach(el => {
    el.addEventListener('click', () => {
      const id = el.dataset.id;
      if (selectedAdicionais.includes(id)) {
        selectedAdicionais.splice(selectedAdicionais.indexOf(id), 1);
        el.classList.remove('selected');
      } else {
        selectedAdicionais.push(id);
        el.classList.add('selected');
      }
    });
  });
}

/* ---- Modal genérico (massa / hamburguer) — layout 2 colunas ---- */
function openSimpleModal(item, tipo) {
  const selectedAdicionais = [];

  modalContent.innerHTML =
    '<div class="mp-two-col">' +
      '<div class="mp-col-img">' +
        '<div class="mp-img-wrap">' +
          '<img src="' + (MEDIA[item.imgKey] || '') + '" alt="' + item.name + '" />' +
          '<div class="mp-img-gradient"></div>' +
        '</div>' +
        '<p class="mp-price mp-price-img">' + formatPrice(item.price) + '</p>' +
      '</div>' +
      '<div class="mp-col-details">' +
        '<h2 class="mp-name">' + item.name + '</h2>' +
        '<p class="mp-desc">' + item.ingredients + '</p>' +
        '<p class="mp-price mp-price-mobile">' + formatPrice(item.price) + '</p>' +
        '<div id="mp-adicionais-wrap">' + renderAdicionaisHTML(tipo, selectedAdicionais) + '</div>' +
        '<p class="mp-section-title">' + t('label_comentario') + '</p>' +
        '<textarea class="mp-comment" id="mp-comment" placeholder="' + t('label_comentario_ph') + '"></textarea>' +
        '<p class="error-msg" id="mp-error" style="display:none"></p>' +
        '<div class="mp-actions">' +
          '<button class="btn-secondary" id="mp-back">' + t('btn_back') + '</button>' +
          '<button class="btn-primary" id="mp-add">' + t('btn_add') + '</button>' +
        '</div>' +
      '</div>' +
    '</div>';

  // Fix image error
  const imgEl = modalContent.querySelector('.mp-img-wrap img');
  if (imgEl) {
    imgEl.addEventListener('error', function() {
      this.parentElement.innerHTML = '<span class="mp-img-emoji">' + (item.emoji || '🍽️') + '</span>';
    });
  }

  bindAdicionais(modalContent, selectedAdicionais);

  $('mp-back').addEventListener('click', closeModal);
  $('mp-add').addEventListener('click', () => {
    const comment = $('mp-comment').value;
    const listaAd = ADICIONAIS[tipo] || [];
    let totalPrice = item.price;
    const adNames = [];
    selectedAdicionais.forEach(id => {
      const ad = listaAd.find(a => a.id === id);
      if (ad) { totalPrice += ad.price; adNames.push(ad.name); }
    });
    addToCart({
      name: item.name,
      price: totalPrice,
      desc: adNames.length ? adNames.join(', ') : '',
      comment,
      qty: 1,
      id: ++cartId,
    });
    closeModal();
  });

  openModal();
}

/* ---- Modal Pizza — layout 2 colunas ---- */
function openPizzaModal(sizeKey) {
  const sz = PIZZA_SIZES.find(s => s.key === sizeKey);
  let selectedFlavors      = [];
  const selectedAdicionais = [];

  function render() {
    const maxF = sz.maxFlavors;
    modalContent.innerHTML =
      '<div class="mp-two-col">' +
        '<div class="mp-col-img">' +
          '<div class="mp-img-wrap">' +
            '<img src="' + (MEDIA[sz.imgKey] || '') + '" alt="Pizza ' + t(sz.labelKey) + '" />' +
            '<div class="mp-img-gradient"></div>' +
          '</div>' +
          '<p class="mp-price mp-price-img">' + formatPrice(sz.price) + '</p>' +
        '</div>' +
        '<div class="mp-col-details">' +
          '<h2 class="mp-name">Pizza ' + t(sz.subKey) + '</h2>' +
          '<p class="mp-price mp-price-mobile">' + formatPrice(sz.price) + '</p>' +
          '<p class="mp-section-title">' + t('max_flavors', { n: maxF }) + '</p>' +
          '<div class="flavor-options-grid" id="pizza-flavor-opts">' +
            PIZZA_FLAVORS.map(fl =>
              '<label class="flavor-opt" data-id="' + fl.id + '">' +
                '<input type="checkbox" value="' + fl.id + '" />' +
                '<span>' + fl.name + '</span>' +
              '</label>'
            ).join('') +
          '</div>' +
          '<div id="flavor-desc" class="mp-desc mp-flavor-desc"></div>' +
          '<div id="mp-adicionais-wrap">' + renderAdicionaisHTML('pizza', selectedAdicionais) + '</div>' +
          '<p class="mp-section-title">' + t('label_comentario') + '</p>' +
          '<textarea class="mp-comment" id="mp-comment" placeholder="' + t('label_comentario_ph') + '"></textarea>' +
          '<p class="error-msg" id="mp-error" style="display:none"></p>' +
          '<div class="mp-actions">' +
            '<button class="btn-secondary" id="mp-back">' + t('btn_back') + '</button>' +
            '<button class="btn-primary" id="mp-add">' + t('btn_add') + '</button>' +
          '</div>' +
        '</div>' +
      '</div>';

    const imgEl = modalContent.querySelector('.mp-img-wrap img');
    if (imgEl) {
      imgEl.addEventListener('error', function() {
        this.parentElement.innerHTML = '<span class="mp-img-emoji">🍕</span>';
      });
    }

    modalContent.querySelectorAll('.flavor-opt').forEach(label => {
      label.addEventListener('click', e => {
        e.preventDefault();
        const id = label.dataset.id;
        if (selectedFlavors.includes(id)) {
          selectedFlavors = selectedFlavors.filter(f => f !== id);
          label.classList.remove('selected');
        } else {
          if (selectedFlavors.length >= maxF) return;
          selectedFlavors.push(id);
          label.classList.add('selected');
        }
        const desc = $('flavor-desc');
        if (selectedFlavors.length === 0) { desc.textContent = ''; return; }
        desc.textContent = selectedFlavors
          .map(i => PIZZA_FLAVORS.find(f => f.id === i).ingredients)
          .join(' | ');
      });
    });

    bindAdicionais(modalContent, selectedAdicionais);

    $('mp-back').addEventListener('click', closeModal);
    $('mp-add').addEventListener('click', () => {
      const errEl = $('mp-error');
      if (selectedFlavors.length === 0) {
        errEl.textContent = t('error_sabor'); errEl.style.display = 'block'; return;
      }
      errEl.style.display = 'none';
      const names = selectedFlavors.map(id => PIZZA_FLAVORS.find(f => f.id === id).name).join(' + ');
      const comment = $('mp-comment').value;
      let totalPrice = sz.price;
      const adNames = [];
      selectedAdicionais.forEach(id => {
        const ad = (ADICIONAIS.pizza || []).find(a => a.id === id);
        if (ad) { totalPrice += ad.price; adNames.push(ad.name); }
      });
      addToCart({
        name: 'Pizza ' + t(sz.subKey) + ' — ' + names,
        price: totalPrice,
        desc: adNames.length ? adNames.join(', ') : '',
        comment, qty: 1, id: ++cartId,
      });
      closeModal();
    });
  }

  render();
  openModal();
}

/* ---- Modal Bebida — layout 2 colunas ---- */
function openBebidaModal(item) {
  let selectedVariant     = null;
  let selectedJuiceFlavor = null;

  modalContent.innerHTML =
    '<div class="mp-two-col">' +
      '<div class="mp-col-img">' +
        '<div class="mp-img-wrap">' +
          '<img src="' + (MEDIA[item.imgKey] || '') + '" alt="' + item.name + '" />' +
          '<div class="mp-img-gradient"></div>' +
        '</div>' +
      '</div>' +
      '<div class="mp-col-details">' +
        '<h2 class="mp-name">' + item.name + '</h2>' +
        (item.isJuice ?
          '<p class="mp-section-title">' + t('sabor_label') + '</p>' +
          '<div class="option-list" id="juice-flavors">' +
            item.flavors.map(fl =>
              '<label class="option-item" data-flavor="' + fl + '">' +
                '<input type="radio" name="juiceflavor" value="' + fl + '" />' +
                '<span class="option-label">' + fl + '</span>' +
              '</label>'
            ).join('') +
          '</div>'
        : '') +
        '<p class="mp-section-title">' + t('label_tamanho') + '</p>' +
        '<div class="option-list" id="bev-variants">' +
          item.variants.map(v =>
            '<label class="option-item" data-vid="' + v.id + '">' +
              '<input type="radio" name="bevsize" value="' + v.id + '" />' +
              '<span class="option-label">' + t(v.label) + '</span>' +
              '<span class="option-price">' + formatPrice(v.price) + '</span>' +
            '</label>'
          ).join('') +
        '</div>' +
        '<p class="error-msg" id="mp-error" style="display:none"></p>' +
        '<div class="mp-actions">' +
          '<button class="btn-secondary" id="mp-back">' + t('btn_back') + '</button>' +
          '<button class="btn-primary" id="mp-add">' + t('btn_add') + '</button>' +
        '</div>' +
      '</div>' +
    '</div>';

  const imgEl = modalContent.querySelector('.mp-img-wrap img');
  if (imgEl) {
    imgEl.addEventListener('error', function() {
      this.parentElement.innerHTML = '<span class="mp-img-emoji">' + (item.emoji || '🥤') + '</span>';
    });
  }

  if (item.isJuice) {
    modalContent.querySelectorAll('#juice-flavors .option-item').forEach(label => {
      label.addEventListener('click', e => {
        e.preventDefault();
        modalContent.querySelectorAll('#juice-flavors .option-item').forEach(l => l.classList.remove('selected'));
        label.classList.add('selected');
        selectedJuiceFlavor = label.dataset.flavor;
      });
    });
  }

  modalContent.querySelectorAll('#bev-variants .option-item').forEach(label => {
    label.addEventListener('click', e => {
      e.preventDefault();
      modalContent.querySelectorAll('#bev-variants .option-item').forEach(l => l.classList.remove('selected'));
      label.classList.add('selected');
      selectedVariant = label.dataset.vid;
    });
  });

  $('mp-back').addEventListener('click', closeModal);
  $('mp-add').addEventListener('click', () => {
    const errEl = $('mp-error');
    if (!selectedVariant) { errEl.textContent = t('error_tamanho'); errEl.style.display = 'block'; return; }
    errEl.style.display = 'none';
    const variant = item.variants.find(v => v.id === selectedVariant);
    let name = item.name;
    if (item.isJuice && selectedJuiceFlavor) name += ' (' + selectedJuiceFlavor + ')';
    addToCart({ name, price: variant.price, desc: t(variant.label), comment: '', qty: 1, id: ++cartId });
    closeModal();
  });

  openModal();
}

/* =============================================
   16. CARRINHO — tela cheia (fullscreen)
   ============================================= */
const cartOverlay  = $('cart-overlay');
const cartDrawer   = $('cart-drawer');
const cartBtn      = $('cart-btn');
const cartClose    = $('cart-close');
const cartCount    = $('cart-count');
const cartItemsEl  = $('cart-items');
const cartFooter   = $('cart-footer');
const cartTotalEl  = $('cart-total-val');
const btnFinalizar = $('btn-finalizar');

cartBtn.addEventListener('click',     () => openOverlay(cartOverlay, cartDrawer));
cartClose.addEventListener('click',   () => closeOverlay(cartOverlay, cartDrawer));
cartOverlay.addEventListener('click', () => closeOverlay(cartOverlay, cartDrawer));

function addToCart(item) {
  cart.push(item);
  renderCart();
  openOverlay(cartOverlay, cartDrawer);
}

function renderCart() {
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const count = cart.reduce((s, i) => s + i.qty, 0);

  if (count > 0) { cartCount.textContent = count; cartCount.classList.add('visible'); }
  else { cartCount.classList.remove('visible'); }

  if (cart.length === 0) {
    cartItemsEl.innerHTML = '<p class="cart-empty" data-i18n="cart_empty">' + t('cart_empty') + '</p>';
    cartFooter.style.display = 'none';
    return;
  }

  cartFooter.style.display = 'flex';
  cartTotalEl.textContent = formatPrice(total);

  cartItemsEl.innerHTML = cart.map(item =>
    '<div class="cart-item" data-id="' + item.id + '">' +
      '<p class="cart-item-name">' + item.name + '</p>' +
      (item.desc    ? '<p class="cart-item-sub">+ ' + item.desc + '</p>' : '') +
      (item.comment ? '<p class="cart-item-sub">📝 ' + item.comment + '</p>' : '') +
      '<p class="cart-item-price">' + formatPrice(item.price * item.qty) + '</p>' +
      '<div class="cart-item-qty">' +
        '<button class="qty-btn" data-action="dec" data-id="' + item.id + '">−</button>' +
        '<span class="qty-val">' + item.qty + '</span>' +
        '<button class="qty-btn" data-action="inc" data-id="' + item.id + '">+</button>' +
      '</div>' +
    '</div>'
  ).join('');

  cartItemsEl.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id  = +btn.dataset.id;
      const idx = cart.findIndex(i => i.id === id);
      if (idx === -1) return;
      if (btn.dataset.action === 'inc') cart[idx].qty++;
      else { cart[idx].qty--; if (cart[idx].qty <= 0) cart.splice(idx, 1); }
      renderCart();
    });
  });
}

btnFinalizar.addEventListener('click', () => {
  closeOverlay(cartOverlay, cartDrawer);
  openCheckout();
});

/* =============================================
   17. CHECKOUT
   ============================================= */
const checkoutOverlay = $('checkout-overlay');
const checkoutModal   = $('checkout-modal');
const checkoutClose   = $('checkout-close');
const checkoutContent = $('checkout-content');

checkoutClose.addEventListener('click',   closeCheckout);
checkoutOverlay.addEventListener('click', closeCheckout);

function openCheckout() {
  openOverlay(checkoutOverlay, checkoutModal);
  checkoutModal.scrollTop = 0;
  renderCheckout();
}
function closeCheckout() { closeOverlay(checkoutOverlay, checkoutModal); }

function renderCheckout() {
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  let delivery = 'retirada';
  let payment  = null;

  checkoutContent.innerHTML =
    '<h2 class="checkout-title" style="margin-top:48px">' + t('checkout_title') + '</h2>' +

    '<div class="checkout-step">' +
      '<p class="checkout-step-title">' + t('cart_title') + '</p>' +
      cart.map(i =>
        '<div class="co-summary-item">' +
          '<span class="item-name">' + i.name + ' × ' + i.qty + '</span>' +
          '<span class="item-price">' + formatPrice(i.price * i.qty) + '</span>' +
        '</div>'
      ).join('') +
      '<div class="co-summary-total">' +
        '<span class="co-summary-total-label">' + t('cart_total') + '</span>' +
        '<span class="co-summary-total-val">' + formatPrice(total) + '</span>' +
      '</div>' +
    '</div>' +

    '<div class="checkout-step">' +
      '<p class="checkout-step-title">' + t('checkout_delivery') + '</p>' +
      '<div class="delivery-options">' +
        '<div class="delivery-opt selected" data-mode="retirada">' + t('opt_retirada') + '</div>' +
        '<div class="delivery-opt" data-mode="entrega">' + t('opt_entrega') + '</div>' +
      '</div>' +
    '</div>' +

    '<div class="checkout-step" id="co-address-step" style="display:none">' +
      '<p class="checkout-step-title">' + t('checkout_address') + '</p>' +
      '<div class="checkout-input-group">' +
        '<input class="checkout-input" id="co-name"   placeholder="' + t('field_name')   + '" />' +
        '<input class="checkout-input" id="co-street" placeholder="' + t('field_street') + '" />' +
        '<input class="checkout-input" id="co-bairro" placeholder="' + t('field_bairro') + '" />' +
        '<input class="checkout-input" id="co-city"   placeholder="' + t('field_city')   + '" />' +
        '<input class="checkout-input" id="co-ref"    placeholder="' + t('field_ref')    + '" />' +
      '</div>' +
    '</div>' +

    '<div class="checkout-step" id="co-pickup-step">' +
      '<p class="checkout-step-title">' + t('field_name') + '</p>' +
      '<input class="checkout-input" id="co-pickup-name" placeholder="' + t('field_name') + '" />' +
    '</div>' +

    '<div class="checkout-step">' +
      '<p class="checkout-step-title">' + t('checkout_payment') + '</p>' +
      '<div class="payment-grid">' +
        [
          { id: 'visa',     icon: '💳', label: 'Visa'          },
          { id: 'mc',       icon: '💳', label: 'Mastercard'    },
          { id: 'elo',      icon: '💳', label: 'Elo / Yellow'  },
          { id: 'pix',      icon: '📱', label: 'PIX'           },
          { id: 'vr',       icon: '🍽️', label: 'Vale-Refeição' },
          { id: 'dinheiro', icon: '💵', label: 'Dinheiro'      },
        ].map(p =>
          '<div class="pay-opt" data-pay="' + p.id + '">' +
            '<span class="pay-icon">' + p.icon + '</span>' +
            '<span class="pay-label-text">' + p.label + '</span>' +
          '</div>'
        ).join('') +
      '</div>' +
      '<div id="troco-wrap" class="troco-wrap" style="display:none">' +
        '<p class="checkout-step-title" style="margin-top:14px">' + t('troco_label') + '</p>' +
        '<input class="checkout-input troco-input" id="co-troco" type="number" min="0" step="0.01" placeholder="' + t('troco_placeholder') + '" />' +
      '</div>' +
      '<p class="error-msg" id="co-error" style="display:none"></p>' +
    '</div>' +

    '<p class="checkout-disclaimer">' + t('checkout_disclaimer') + '</p>' +
    '<button class="btn-primary btn-full" id="co-confirm" style="margin-top:16px">' + t('btn_confirm') + '</button>';

  checkoutContent.querySelectorAll('.delivery-opt').forEach(opt => {
    opt.addEventListener('click', () => {
      checkoutContent.querySelectorAll('.delivery-opt').forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      delivery = opt.dataset.mode;
      $('co-address-step').style.display = delivery === 'entrega'  ? 'block' : 'none';
      $('co-pickup-step').style.display  = delivery === 'retirada' ? 'block' : 'none';
    });
  });

  checkoutContent.querySelectorAll('.pay-opt').forEach(opt => {
    opt.addEventListener('click', () => {
      checkoutContent.querySelectorAll('.pay-opt').forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      payment = opt.dataset.pay;
      $('troco-wrap').style.display = payment === 'dinheiro' ? 'block' : 'none';
    });
  });

  $('co-confirm').addEventListener('click', () => {
    const errEl = $('co-error');
    let customerName = '';
    let addressInfo  = '';

    if (delivery === 'entrega') {
      customerName = ($('co-name').value || '').trim();
      const street = ($('co-street').value || '').trim();
      const bairro = ($('co-bairro').value || '').trim();
      const city   = ($('co-city').value   || '').trim();
      if (!customerName) { errEl.textContent = t('error_name');    errEl.style.display = 'block'; return; }
      if (!street)       { errEl.textContent = t('error_address'); errEl.style.display = 'block'; return; }
      addressInfo = [street, bairro, city].filter(Boolean).join(', ');
    } else {
      customerName = ($('co-pickup-name').value || '').trim();
      if (!customerName) { errEl.textContent = t('error_name'); errEl.style.display = 'block'; return; }
    }

    if (!payment) { errEl.textContent = t('error_payment'); errEl.style.display = 'block'; return; }

    let trocoInfo = '';
    if (payment === 'dinheiro') {
      const trocoVal = parseFloat(($('co-troco').value || '0').replace(',', '.'));
      if (trocoVal > 0) {
        if (trocoVal < total) {
          errEl.textContent = t('troco_error'); errEl.style.display = 'block'; return;
        }
        trocoInfo = formatPrice(trocoVal - total);
      }
    }

    errEl.style.display = 'none';
    const payLabels = { visa:'Visa', mc:'Mastercard', elo:'Elo / Yellow', pix:'PIX', vr:'Vale-Refeição', dinheiro:'Dinheiro' };

    checkoutContent.innerHTML =
      '<div class="order-done-wrap">' +
        '<div class="order-done-emoji">🎉</div>' +
        '<h2 class="order-done-title">' + t('order_done_title') + '</h2>' +
        '<p class="order-done-body">' + t('order_done_msg') + '</p>' +
        '<div class="order-done-details">' +
          '<div class="order-done-detail-row">' +
            '<span>' + t('cliente_label') + '</span>' +
            '<strong>' + customerName + '</strong>' +
          '</div>' +
          '<div class="order-done-detail-row">' +
            '<span>' + (delivery === 'entrega' ? t('checkout_address') : t('opt_retirada')) + '</span>' +
            '<strong>' + (delivery === 'entrega' ? addressInfo : t('opt_retirada')) + '</strong>' +
          '</div>' +
          '<div class="order-done-detail-row">' +
            '<span>' + t('checkout_payment') + '</span>' +
            '<strong>' + (payLabels[payment] || payment) + '</strong>' +
          '</div>' +
          (trocoInfo ?
            '<div class="order-done-detail-row"><span>Troco</span><strong>' + trocoInfo + '</strong></div>'
          : '') +
          '<div class="order-done-detail-row">' +
            '<span>' + t('cart_total') + '</span>' +
            '<strong>' + formatPrice(total) + '</strong>' +
          '</div>' +
        '</div>' +
        '<span class="order-done-demo">' + t('order_done_demo') + '</span>' +
        '<br/><br/>' +
        '<button class="btn-primary" id="co-done">' + t('btn_close') + '</button>' +
      '</div>';

    cart = [];
    renderCart();
    $('co-done').addEventListener('click', closeCheckout);
  });
}

/* =============================================
   18. INIT
   ============================================= */
rerenderAll();