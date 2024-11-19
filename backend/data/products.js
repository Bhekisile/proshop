const products = [
  {
    name: 'Airpods Wireless Bluetooth Headphones',
    image: [
      {
        original: 'https://res.cloudinary.com/dgimm1mwi/image/upload/v1731961253/airpods_ebvpah.jpg',
        thumbnail: 'https://res.cloudinary.com/dgimm1mwi/image/upload/t_Thumbnail/v1731961253/airpods_ebvpah.jpg',
      },
      {
        original: 'https://res.cloudinary.com/dgimm1mwi/image/upload/v1731961253/airpods1_vqh3j4.jpg',
        thumbnail: 'https://res.cloudinary.com/dgimm1mwi/image/upload/t_Thumbnail/v1731961253/airpods1_vqh3j4.jpg',
      },
      {
        original: 'https://res.cloudinary.com/dgimm1mwi/image/upload/v1731961253/airpods2_ku1gha.jpg',
        thumbnail: 'https://res.cloudinary.com/dgimm1mwi/image/upload/t_Thumbnail/v1731961253/airpods2_ku1gha.jpg',
      },
      {
        original: 'https://res.cloudinary.com/dgimm1mwi/image/upload/v1731961253/airpods3_uaz7gh.jpg',
        thumbnail: 'https://res.cloudinary.com/dgimm1mwi/image/upload/t_Thumbnail/v1731961253/airpods3_uaz7gh.jpg',
      },
    ], 
    description: 'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    category: 'Electronics',
    price: 89.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  { 
    name: 'iPhone 11 Pro 256GB Memory',
    image: [
      {
        original: 'https://res.cloudinary.com/dgimm1mwi/image/upload/v1731961254/phone_rdx3ct.jpg',
        thumbnail: 'https://res.cloudinary.com/dgimm1mwi/image/upload/t_Thumbnail/v1731961254/phone_rdx3ct.jpg',
      },
      {
        original: 'https://res.cloudinary.com/dgimm1mwi/image/upload/v1731961256/iphone2_twbixc.jpg',
        thumbnail: 'https://res.cloudinary.com/dgimm1mwi/image/upload/t_Thumbnail/v1731961256/iphone2_twbixc.jpg',
      },
      {
        original: 'https://res.cloudinary.com/dgimm1mwi/image/upload/v1731961256/iphone1_nrpjtc.jpg',
        thumbnail: 'https://res.cloudinary.com/dgimm1mwi/image/upload/t_Thumbnail/v1731961256/iphone1_nrpjtc.jpg',
      },
      {
        original: 'https://res.cloudinary.com/dgimm1mwi/image/upload/v1731961256/iphone3_gdp7eg.jpg',
        thumbnail: 'https://res.cloudinary.com/dgimm1mwi/image/upload/t_Thumbnail/v1731961256/iphone3_gdp7eg.jpg',
      },
    ],
    description:
      'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
    brand: 'Apple',
    category: 'Electronics',
    price: 599.99,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
  },
  { 
    name: 'Cannon EOS 80D DSLR Camera',
    image: [
      {
        original: 'https://res.cloudinary.com/dgimm1mwi/image/upload/v1731961254/camera_jtn9gz.jpg',
        thumbnail: 'https://res.cloudinary.com/dgimm1mwi/image/upload/t_Thumbnail/v1731961254/camera_jtn9gz.jpg',
      },
      {
        original: 'https://res.cloudinary.com/dgimm1mwi/image/upload/v1731961255/canon1_kkpj9k.png',
        thumbnail: 'https://res.cloudinary.com/dgimm1mwi/image/upload/t_Thumbnail/v1731961255/canon1_kkpj9k.png',
      },
      {
        original: 'https://res.cloudinary.com/dgimm1mwi/image/upload/v1731961254/canon2_jqmpq0.png',
        thumbnail: 'https://res.cloudinary.com/dgimm1mwi/image/upload/t_Thumbnail/v1731961254/canon2_jqmpq0.png',
      },
      {
        original: 'https://res.cloudinary.com/dgimm1mwi/image/upload/v1731961257/canon3_p00x6b.png',
        thumbnail: 'https://res.cloudinary.com/dgimm1mwi/image/upload/t_Thumbnail/v1731961257/canon3_p00x6b.png',
      },
    ], 
    description:
      'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
    brand: 'Cannon',
    category: 'Electronics',
    price: 929.99,
    countInStock: 5,
    rating: 3,
    numReviews: 12,
  },
  { 
    name: 'Sony Playstation 4 Pro White Version',
    image: [
      {
        original: 'https://res.cloudinary.com/dgimm1mwi/image/upload/v1731961254/playstation_mdtmt1.jpg',
        thumbnail: 'https://res.cloudinary.com/dgimm1mwi/image/upload/t_Thumbnail/v1731961254/playstation_mdtmt1.jpg',
      },
      {
        original: 'https://res.cloudinary.com/dgimm1mwi/image/upload/v1731961255/playstation1_ynuvwf.webp',
        thumbnail: 'https://res.cloudinary.com/dgimm1mwi/image/upload/t_Thumbnail/v1731961255/playstation1_ynuvwf.webp',
      },
      {
        original: 'https://res.cloudinary.com/dgimm1mwi/image/upload/v1731961255/playstation2_wdawhj.png',
        thumbnail: 'https://res.cloudinary.com/dgimm1mwi/image/upload/t_Thumbnail/v1731961255/playstation2_wdawhj.png',
      },
      {
        original: 'https://res.cloudinary.com/dgimm1mwi/image/upload/v1731961257/canon3_p00x6b.png',
        thumbnail: 'https://res.cloudinary.com/dgimm1mwi/image/upload/t_Thumbnail/v1731961257/canon3_p00x6b.png',
      },
    ], 
    description:
      'The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music',
    brand: 'Sony',
    category: 'Electronics',
    price: 399.99,
    countInStock: 11,
    rating: 5,
    numReviews: 12,
  },
  { 
    name: 'Logitech G-Series Gaming Mouse',
    image: [
      {
        original: 'https://res.cloudinary.com/dgimm1mwi/image/upload/v1731961257/mouse_utryuq.jpg',
        thumbnail: 'https://res.cloudinary.com/dgimm1mwi/image/upload/t_Thumbnail/v1731961257/mouse_utryuq.jpg',
      },
      {
        original: 'https://res.cloudinary.com/dgimm1mwi/image/upload/v1731961256/mouse1_tqnshv.jpg',
        thumbnail: 'https://res.cloudinary.com/dgimm1mwi/image/upload/t_Thumbnail/v1731961256/mouse1_tqnshv.jpg',
      },
      {
        original: 'https://res.cloudinary.com/dgimm1mwi/image/upload/v1731961254/mouse2_qgd7ty.png',
        thumbnail: 'https://res.cloudinary.com/dgimm1mwi/image/upload/t_Thumbnail/v1731961254/mouse2_qgd7ty.png',
      },
      {
        original: 'https://res.cloudinary.com/dgimm1mwi/image/upload/v1731961253/mouse3_re4ero.jpg',
        thumbnail: 'https://res.cloudinary.com/dgimm1mwi/image/upload/t_Thumbnail/v1731961253/mouse3_re4ero.jpg',
      },
    ], 
    description:
      'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience',
    brand: 'Logitech',
    category: 'Electronics',
    price: 49.99,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
  },
  {
    name: 'Amazon Echo Dot 3rd Generation',
    image: [
      {
        original: 'https://res.cloudinary.com/dgimm1mwi/image/upload/v1731961254/alexa_tsynfl.jpg',
        thumbnail: 'https://res.cloudinary.com/dgimm1mwi/image/upload/t_Thumbnail/v1731961254/alexa_tsynfl.jpg',
      },
      {
        original: 'https://res.cloudinary.com/dgimm1mwi/image/upload/v1731961255/echodot2_rmnkfd.jpg',
        thumbnail: 'https://res.cloudinary.com/dgimm1mwi/image/upload/t_Thumbnail/v1731961255/echodot2_rmnkfd.jpg',
      },
      {
        original: 'https://res.cloudinary.com/dgimm1mwi/image/upload/v1731961255/echodot1_riv8hc.jpg',
        thumbnail: 'https://res.cloudinary.com/dgimm1mwi/image/upload/t_Thumbnail/v1731961255/echodot1_riv8hc.jpg',
      },
      {
        original: 'https://res.cloudinary.com/dgimm1mwi/image/upload/v1731961255/echodot3_t7mxdp.jpg',
        thumbnail: 'https://res.cloudinary.com/dgimm1mwi/image/upload/t_Thumbnail/v1731961255/echodot3_t7mxdp.jpg',
      },
    ], 
    description:
      'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
    brand: 'Amazon',
    category: 'Electronics',
    price: 29.99,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
  },
]

export default products