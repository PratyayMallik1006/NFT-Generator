const layersOrder = [
    { name: 'face', number: 1 },
    { name: 'hair', number: 2 },
    { name: 'accessories', number: 12 },
    
];
  
const format = {
    width: 230,
    height: 230
};

const rarity = [
    { key: "", val: "original" },
    { key: "_r", val: "rare" },
    { key: "_sr", val: "super rare" },
];

const defaultEdition = 40;

module.exports = { layersOrder, format, rarity, defaultEdition };