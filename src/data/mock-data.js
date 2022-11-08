import porshe from '../assets/porshe.png'
import toyota from '../assets/toyota.png'
import miniCooper from '../assets/mini-cooper.png'

export const menuItems = [
  {
    id: 0,
    value: 'Home',
    link: '/',
  },
  {
    id: 1,
    value: 'About',
    link: '/about',
  },
  {
    id: 2,
    value: 'Benefits',
    link: '/benefits',
  },
  {
    id: 3,
    value: 'Cars',
    link: '/cars',
  },
]

export const aboutUsContent = [
  {
    id: 0,
    value:
      'We pride ourselves at being able to get our customer into the car that they want, and more importantly, at they price they are looking for.',
  },
  {
    id: 1,
    value: `We maintain outstanding customer service by listening to our customers and making sure that we meet their needs. Even if you don't buy from us, we will offer free advice on whe to look for when buying a used car or truck.`,
  },
  {
    id: 2,
    value:
      'Our philosophy is to accomodate you, the customer, with outstanding service while providing you the highest quality automobile needs at wholesale prices. We have a wide selection of vehicles and the expertise to deal with what you are looking for',
  },
]

const whereWeAre = [
  {
    id: 0,
    value: 'Georgia',
  },
  {
    id: 1,
    value: 'Texas',
  },
  {
    id: 2,
    value: 'Massachusetts',
  },
  {
    id: 3,
    value: 'Virginia',
  },
  {
    id: 4,
    value: 'Pensylvania',
  },
  {
    id: 5,
    value: 'California',
  },
  {
    id: 6,
    value: 'Colorado',
  },
]

const quickLinks = [
  {
    id: 0,
    value: 'About us',
  },
  {
    id: 1,
    value: 'Our services',
  },
  {
    id: 2,
    value: 'Contact us',
  },
]

const emailUs = [
  {
    id: 0,
    value: 'contact@primecar.com',
  },
]

const callUs = [
  {
    id: 2,
    value: '+999-999-999',
  },
  {
    id: 1,
    value: '+111-111-111',
  },
]

export const footerInfo = [
  {
    id: 0,
    title: 'Where are we',
    values: whereWeAre,
  },
  {
    id: 1,
    title: 'Quick links',
    values: quickLinks,
  },
  {
    id: 2,
    title: 'Email us',
    values: emailUs,
  },
  {
    id: 3,
    title: 'Call us',
    values: callUs,
  },
]

export const carsCatalog = [
  {
    id: 0,
    name: 'Porsche 718 Cayman S',
    variant: 'Coupe',
    img: porshe,
    transmssion: 'Manual',
    places: 2,
    basePrice: 1000,
    price: 1700,
    color: {
      id: Math.random(),
      title: 'black',
      cost: 100,
      action: 'Repaint',
      isDefault: true,
    },
    engine: {
      id: Math.random(),
      title: '4-Cyl 1.5 Liter',
      cost: 300,
      action: 'Change engine',
      isDefault: true,
    },
    interior: {
      id: Math.random(),
      title: 'leather',
      cost: 300,
      action: 'Change interior',
      isDefault: true,
    },
  },
  {
    id: 1,
    name: 'Mini Cooper 5-DOOR',
    variant: 'Hatchback',
    img: toyota,
    transmssion: 'Matic',
    places: 4,
    basePrice: 800,
    price: 1400,
    color: {
      id: Math.random(),
      title: 'red',
      cost: 200,
      action: 'Repaint',
      isDefault: true,
    },
    engine: {
      id: Math.random(),
      title: '4-Cyl 1.5 Liter',
      cost: 300,
      action: 'Change engine',
      isDefault: true,
    },
    interior: {
      id: Math.random(),
      title: 'leatherette',
      cost: 100,
      action: 'Change interior',
      isDefault: true,
    },
  },
  {
    id: 2,
    name: 'Toyota GR Supra',
    variant: 'Coupe',
    img: miniCooper,
    transmssion: 'Manual',
    places: 2,
    basePrice: 700,
    price: 2100,
    color: {
      id: Math.random(),
      title: 'red',
      cost: 200,
      action: 'Repaint',
      isDefault: true,
    },
    engine: {
      id: Math.random(),
      title: '16-Cyl 6 Liter',
      cost: 900,
      action: 'Change engine',
      isDefault: true,
    },
    interior: {
      id: Math.random(),
      title: 'leather',
      cost: 300,
      action: 'Change interior',
      isDefault: true,
    },
  },
  {
    id: 3,
    name: 'Porsche 911 Turbo',
    variant: 'Coupe',
    img: porshe,
    transmssion: 'Manual',
    places: 2,
    basePrice: 1100,
    price: 2200,
    color: {
      id: Math.random(),
      title: 'purple',
      cost: 300,
      action: 'Repaint',
      isDefault: true,
    },
    engine: {
      id: Math.random(),
      title: '8-Cyl 3 Liter',
      cost: 600,
      action: 'Change engine',
      isDefault: true,
    },
    interior: {
      id: Math.random(),
      title: 'suede',
      cost: 200,
      action: 'Change interior',
      isDefault: true,
    },
  },
  {
    id: 4,
    name: 'Porsche Taycan 4S',
    variant: 'Coupe',
    img: toyota,
    transmssion: 'Manual',
    places: 4,
    basePrice: 1200,
    price: 2700,
    color: {
      id: Math.random(),
      title: 'purple',
      cost: 300,
      action: 'Repaint',
      isDefault: true,
    },
    engine: {
      id: Math.random(),
      title: '16-Cyl 6 Liter',
      cost: 900,
      action: 'Change engine',
      isDefault: true,
    },
    interior: {
      id: Math.random(),
      title: 'leather',
      cost: 300,
      action: 'Change interior',
      isDefault: true,
    },
  },
  {
    id: 5,
    name: 'Mini Cooper WORKS...',
    variant: 'Hatchback',
    img: miniCooper,
    transmssion: 'Matic',
    places: 2,
    basePrice: 900,
    price: 1400,
    color: {
      id: Math.random(),
      title: 'black',
      cost: 100,
      action: 'Repaint',
      isDefault: true,
    },
    engine: {
      id: Math.random(),
      title: '4-Cyl 1.5 Liter',
      cost: 300,
      action: 'Change engine',
      isDefault: true,
    },
    interior: {
      id: Math.random(),
      title: 'leatherette',
      cost: 100,
      action: 'Change interior',
      isDefault: true,
    },
  },
]

export const colorData = {
  title: 'color',
  values: [
    {
      id: 0,
      value: 'black',
      cost: 100,
    },
    {
      id: 1,
      value: 'red',
      cost: 200,
    },
    {
      id: 2,
      value: 'purple',
      cost: 300,
    },
  ],
}

export const engineData = {
  title: 'engine',
  values: [
    {
      id: 0,
      value: '4-Cyl 1.5 Liter',
      cost: 300,
    },
    {
      id: 1,
      value: '8-Cyl 3 Liter',
      cost: 600,
    },
    {
      id: 2,
      value: '16-Cyl 6 Liter',
      cost: 900,
    },
  ],
}

export const interiorData = {
  title: 'interior',
  values: [
    {
      id: 0,
      value: 'leather',
      cost: 300,
    },
    {
      id: 1,
      value: 'suede',
      cost: 200,
    },
    {
      id: 2,
      value: 'leatherette',
      cost: 100,
    },
  ],
}
