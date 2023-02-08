import uniqid from 'uniqid'

const Sushi = [
    { id: uniqid(), name: 'Salmon', img: require('../images/Salmon.jpg') },
    { id: uniqid(), name: 'Salmon Roe', img: require('../images/ikura.jpeg') },
    { id: uniqid(), name: 'Eel', img: require('../images/unagi.jpg') },
    { id: uniqid(), name: 'Shrimp', img: require('../images/shrimp.jpg') },
    { id: uniqid(), name: 'California Roll', img: require('../images/california-roll.jpg') },
    { id: uniqid(), name: 'Uni', img: require('../images/uni.jpeg') },
    { id: uniqid(), name: 'Tuna', img: require('../images/tuna.jpg') },
    { id: uniqid(), name: 'Tamagoyaki', img: require('../images/tamagoyaki.jpg') },
    { id: uniqid(), name: 'Mackerel', img: require('../images/mackerel.jpg') },
    { id: uniqid(), name: 'Sanma', img: require('../images/sanma.jpg') },
    { id: uniqid(), name: 'Buri', img: require('../images/buri.jpg') },
    { id: uniqid(), name: 'Engawa', img: require('../images/engawa.jpg') },
    { id: uniqid(), name: 'Octopus', img: require('../images/octopus.jfif') },
    { id: uniqid(), name: 'Squid', img: require('../images/squid.jpg') },
    { id: uniqid(), name: 'Wagyu', img: require('../images/wagyu.webp') },
    { id: uniqid(), name: 'Horse', img: require('../images/horse.webp') }
]

export default Sushi;