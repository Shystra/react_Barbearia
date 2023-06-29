import images from './images';

const wines = [
  {
    title: 'Degradê Navalhado + Barba',
    price: '$45,00',
    tags: '',
  },
  {
    title: 'Degradê na Zero + Barba',
    price: '$40,00',
    tags: '',
  },
  {
    title: 'Degradê Navalhado - Shaver',
    price: '$30,00',
    tags: '',
  },
  {
    title: 'Degradê na Zero',
    price: '$25,00',
    tags: '',
  },
  {
    title: 'Corte Social',
    price: '$20,00',
    tags: '',
  },
  {
    title: "Barba",
    price: '$20,00',
    tags: '',
  },
  {
    title: 'Sobrancelha',
    price: '$10,00',
    tags: '',
  },
  
];

const cocktails = [
  {
    title: 'Cabelo & Barba',
    price: '$140,00',
    tags: '',
  },
  {
    title: "Corte Degradê",
    price: '$90,00',
    tags: '',
  },
  // {
  //   title: 'Sobrancelha',
  //   price: '$5',
  //   tags: '',
  // },
  // {
  //   title: 'Corte Simples',
  //   price: '$20',
  //   tags: 'Bourbon | Brown sugar | Angostura Bitters',
  // },
  // {
  //   title: 'Corte Simples',
  //   price: '$20',
  //   tags: '',
  // },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };
