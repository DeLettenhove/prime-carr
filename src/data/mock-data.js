import black from '../assets/black.png'
import red from '../assets/red.png'
import purple from '../assets/purple.png'

export const menuItems = [
  {
    id: 0,
    value: 'header.nav.home',
    link: '/',
  },
  {
    id: 1,
    value: 'header.nav.about',
    link: '/about',
  },
  {
    id: 2,
    value: 'header.nav.benefits',
    link: '/benefits',
  },
  {
    id: 3,
    value: 'header.nav.cars',
    link: '/cars',
  },
]

export const carsImages = [
  {
    name: 'Porsche 718 Cayman S',
    colors: {
      black,
      red,
      purple,
    },
  },
  {
    name: 'Mini Cooper 5-DOOR',
    colors: {
      black,
      red,
      purple,
    },
  },
  {
    name: 'Toyota GR Supra',
    colors: {
      black,
      red,
      purple,
    },
  },
  {
    name: 'Porsche 911 Turbo',
    colors: {
      black,
      red,
      purple,
    },
  },
  {
    name: 'Porsche Taycan 4S',
    colors: {
      black,
      red,
      purple,
    },
  },
  {
    name: 'Mini Cooper WORKS...',
    colors: {
      black,
      red,
      purple,
    },
  },
]

export const carsCatalog = [
  {
    id: 0,
    name: 'Porsche 718 Cayman S',
    variant: 'carCard.variant.coupe',
    img: black,
    transmssion: 'carCard.transmission.manual',
    places: 2,
    basePrice: 1000,
    price: 1700,
    color: {
      id: Math.random(),
      title: 'black',
      cost: 100,
      action: 'constructor.actions.color',
      isDefault: true,
    },
    engine: {
      id: Math.random(),
      title: '4cyl',
      cost: 300,
      action: 'constructor.actions.engine',
      isDefault: true,
    },
    interior: {
      id: Math.random(),
      title: 'leather',
      cost: 300,
      action: 'constructor.actions.interior',
      isDefault: true,
    },
  },
  {
    id: 1,
    name: 'Mini Cooper 5-DOOR',
    variant: 'carCard.variant.hatchback',
    img: red,
    transmssion: 'carCard.transmission.auto',
    places: 4,
    basePrice: 800,
    price: 1400,
    color: {
      id: Math.random(),
      title: 'red',
      cost: 200,
      action: 'constructor.actions.color',
      isDefault: true,
    },
    engine: {
      id: Math.random(),
      title: '4cyl',
      cost: 300,
      action: 'constructor.actions.engine',
      isDefault: true,
    },
    interior: {
      id: Math.random(),
      title: 'leatherette',
      cost: 100,
      action: 'constructor.actions.interior',
      isDefault: true,
    },
  },
  {
    id: 2,
    name: 'Toyota GR Supra',
    variant: 'carCard.variant.coupe',
    img: red,
    transmssion: 'carCard.transmission.manual',
    places: 2,
    basePrice: 700,
    price: 2100,
    color: {
      id: Math.random(),
      title: 'red',
      cost: 200,
      action: 'constructor.actions.color',
      isDefault: true,
    },
    engine: {
      id: Math.random(),
      title: '16cyl',
      cost: 900,
      action: 'constructor.actions.engine',
      isDefault: true,
    },
    interior: {
      id: Math.random(),
      title: 'leather',
      cost: 300,
      action: 'constructor.actions.interior',
      isDefault: true,
    },
  },
  {
    id: 3,
    name: 'Porsche 911 Turbo',
    variant: 'carCard.variant.coupe',
    img: purple,
    transmssion: 'carCard.transmission.manual',
    places: 2,
    basePrice: 1100,
    price: 2200,
    color: {
      id: Math.random(),
      title: 'purple',
      cost: 300,
      action: 'constructor.actions.color',
      isDefault: true,
    },
    engine: {
      id: Math.random(),
      title: '8cyl',
      cost: 600,
      action: 'constructor.actions.engine',
      isDefault: true,
    },
    interior: {
      id: Math.random(),
      title: 'suede',
      cost: 200,
      action: 'constructor.actions.interior',
      isDefault: true,
    },
  },
  {
    id: 4,
    name: 'Porsche Taycan 4S',
    variant: 'carCard.variant.coupe',
    img: purple,
    transmssion: 'carCard.transmission.manual',
    places: 4,
    basePrice: 1200,
    price: 2700,
    color: {
      id: Math.random(),
      title: 'purple',
      cost: 300,
      action: 'constructor.actions.color',
      isDefault: true,
    },
    engine: {
      id: Math.random(),
      title: '16cyl',
      cost: 900,
      action: 'constructor.actions.engine',
      isDefault: true,
    },
    interior: {
      id: Math.random(),
      title: 'leather',
      cost: 300,
      action: 'constructor.actions.interior',
      isDefault: true,
    },
  },
  {
    id: 5,
    name: 'Mini Cooper WORKS...',
    variant: 'carCard.variant.hatchback',
    img: black,
    transmssion: 'carCard.transmission.auto',
    places: 2,
    basePrice: 900,
    price: 1400,
    color: {
      id: Math.random(),
      title: 'black',
      cost: 100,
      action: 'constructor.actions.color',
      isDefault: true,
    },
    engine: {
      id: Math.random(),
      title: '4cyl',
      cost: 300,
      action: 'constructor.actions.engine',
      isDefault: true,
    },
    interior: {
      id: Math.random(),
      title: 'leatherette',
      cost: 100,
      action: 'constructor.actions.interior',
      isDefault: true,
    },
  },
]

export const colorData = {
  title: 'constructor.titles.color',
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
  base: 'constructor.engines',
  title: 'constructor.titles.engine',
  values: [
    {
      id: 0,
      value: '4cyl',
      cost: 300,
    },
    {
      id: 1,
      value: '8cyl',
      cost: 600,
    },
    {
      id: 2,
      value: '16cyl',
      cost: 900,
    },
  ],
}

export const interiorData = {
  base: 'constructor.interiors',
  title: 'constructor.titles.interior',
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
