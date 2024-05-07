import { Router } from 'express';

const productRouter = Router();

productRouter.get('/product/en/new', (req, res) => {
  return res.status(400).json([
    {
      _id: '6634f1c445b180aaa42efb7c',
      id: '1',
      name: 'PowerSweep 1000',
      model: 'PS1000',
      description: 'High-performance vacuum cleaner for household use.',
      price: '$99.99',
      stock_quantity: '50',
      warranty: '1 year',
      weight: '5.5 kg',
      dimensions: '12x12x48',
      power: '1200W',
      color: 'Blue',
      manufacturer: 'CleanCo',
    },
    {
      _id: '6634f1c445b180aaa42efb7d',
      id: '2',
      name: 'TurboClean 2000',
      model: 'TC2000',
      description: 'Advanced vacuum cleaner with turbo suction technology.',
      price: '$149.99',
      stock_quantity: '30',
      warranty: '2 years',
      weight: '6.2 kg',
      dimensions: '14x14x50',
      power: '1500W',
      color: 'Red',
      manufacturer: 'HomeTech',
    },
    {
      _id: '6634f1c445b180aaa42efb7e',
      id: '3',
      name: 'EcoVac 3000',
      model: 'EV3000',
      description: 'Environmentally friendly vacuum cleaner with HEPA filter.',
      price: '$199.99',
      stock_quantity: '20',
      warranty: '3 years',
      weight: '7.0 kg',
      dimensions: '15x15x52',
      power: '1800W',
      color: 'Green',
      manufacturer: 'GreenClean',
    },
    {
      _id: '6634f1c445b180aaa42efb7f',
      id: '4',
      name: 'PetMaster Pro',
      model: 'PMPro',
      description: 'Specifically designed for pet hair removal.',
      price: '$129.99',
      stock_quantity: '40',
      warranty: '2 years',
      weight: '6.5 kg',
      dimensions: '13x13x49',
      power: '1400W',
      color: 'Yellow',
      manufacturer: 'PetCare',
    },
    {
      _id: '6634f1c445b180aaa42efb80',
      id: '5',
      name: 'AllergyGuard 400',
      model: 'AG400',
      description: 'Ideal for allergy sufferers with anti-allergen technology.',
      price: '$179.99',
      stock_quantity: '25',
      warranty: '3 years',
      weight: '6.8 kg',
      dimensions: '14x14x51',
      power: '1600W',
      color: 'White',
      manufacturer: 'HealthClean',
    },
    {
      _id: '6634f1c445b180aaa42efb81',
      id: '6',
      name: 'DustEater Elite',
      model: 'DEElite',
      description: 'High-capacity dust collection for large homes.',
      price: '$219.99',
      stock_quantity: '15',
      warranty: '5 years',
      weight: '7.5 kg',
      dimensions: '16x16x54',
      power: '2000W',
      color: 'Black',
      manufacturer: 'DustMaster',
    },
    {
      _id: '6634f1c445b180aaa42efb82',
      id: '7',
      name: 'AutoSweep Plus',
      model: 'ASP',
      description: 'Robotic vacuum cleaner with AI navigation.',
      price: '$299.99',
      stock_quantity: '10',
      warranty: '2 years',
      weight: '5.0 kg',
      dimensions: '12x12x46',
      power: '1300W',
      color: 'Silver',
      manufacturer: 'SmartHome',
    },
    {
      _id: '6634f1c445b180aaa42efb83',
      id: '8',
      name: 'UltraVac Max',
      model: 'UVM',
      description: 'Maximum power and versatility for heavy-duty cleaning.',
      price: '$249.99',
      stock_quantity: '20',
      warranty: '4 years',
      weight: '8.0 kg',
      dimensions: '17x17x56',
      power: '2200W',
      color: 'Gray',
      manufacturer: 'MegaClean',
    },
    {
      _id: '6634f1c445b180aaa42efb84',
      id: '9',
      name: 'HandiSweep Mini',
      model: 'HSM',
      description: 'Compact handheld vacuum cleaner for quick cleanups.',
      price: '$49.99',
      stock_quantity: '50',
      warranty: '1 year',
      weight: '2.0 kg',
      dimensions: '8x8x14',
      power: '800W',
      color: 'Purple',
      manufacturer: 'HandyClean',
    },
    {
      _id: '6634f1c445b180aaa42efb85',
      id: '10',
      name: 'FreshAir Pro',
      model: 'FAP',
      description: 'Air purifier and vacuum combo for fresh, clean air.',
      price: '$349.99',
      stock_quantity: '10',
      warranty: '5 years',
      weight: '9.5 kg',
      dimensions: '18x18x60',
      power: '2400W',
      color: 'Blue',
      manufacturer: 'AirPure',
    },
  ]);
});

productRouter.get('/product/en/update', (req, res) => {
  return res.status(400).json([
    {
      id: {
        newValue: 1,
        oldValue: 1,
      },
      name: {
        newValue: 'PowerSweep 1000',
        oldValue: 'PowerSweep 1000',
      },
      model: {
        newValue: 'PS1000',
        oldValue: 'PS1000',
      },
      description: {
        newValue: 'Basic vacuum cleaner with powerful suction.',
        oldValue: 'Basic vacuum cleaner with powerful suction.',
      },
      price: {
        newValue: 99.99,
        oldValue: 89,
      },
      stock_quantity: {
        newValue: 50,
        oldValue: 30,
      },
      warranty: {
        newValue: '1 year',
        oldValue: '2 year',
      },
      weight: {
        newValue: '5.5 kg',
        oldValue: '4.7 kg',
      },
      dimensions: {
        newValue: '12x12x48',
        oldValue: '12x12x48',
      },
      power: {
        newValue: '1200W',
        oldValue: '1300W',
      },
      color: {
        newValue: 'Orange',
        oldValue: 'Orange',
      },
      manufacturer: {
        newValue: 'PowerClean',
        oldValue: 'PowerClean',
      },
    },
    {
      id: {
        newValue: 2,
        oldValue: 12,
      },
      name: {
        newValue: 'TurboClean 2001',
        oldValue: 'TurboClean 2000',
      },
      model: {
        newValue: 'TC2200',
        oldValue: 'TC2000',
      },
      description: {
        newValue: 'Advanced vacuum cleaner with turbo brush attachment.',
        oldValue: 'Advanced vacuum cleaner with turbo brush attachment.',
      },
      price: {
        newValue: 139.99,
        oldValue: 149.99,
      },
      stock_quantity: {
        newValue: 30,
        oldValue: 20,
      },
      warranty: {
        newValue: '2 years',
        oldValue: '3 years',
      },
      weight: {
        newValue: '6.0 kg',
        oldValue: '6.2 kg',
      },
      dimensions: {
        newValue: '14x14x50',
        oldValue: '14x14x50',
      },
      power: {
        newValue: '1600W',
        oldValue: '1500W',
      },
      color: {
        newValue: 'Red',
        oldValue: 'Red',
      },
      manufacturer: {
        newValue: 'TurboHome',
        oldValue: 'HomeTech',
      },
    },
    {
      id: {
        newValue: 3,
        oldValue: 12,
      },
      name: {
        newValue: 'GreenClean EV3000',
        oldValue: 'EcoVac 3000',
      },
      model: {
        newValue: 'GCEV3000',
        oldValue: 'GCEV3000',
      },
      description: {
        newValue: 'Environmentally friendly vacuum cleaner with energy-saving mode.',
        oldValue: 'Environmentally friendly vacuum cleaner with HEPA filter.',
      },
      price: {
        newValue: 199.99,
        oldValue: 199.99,
      },
      stock_quantity: {
        newValue: 20,
        oldValue: 40,
      },
      warranty: {
        newValue: '3 years',
        oldValue: '2 years',
      },
      weight: {
        newValue: '6.3 kg',
        oldValue: '7.0 kg',
      },
      dimensions: {
        newValue: '15x15x52',
        oldValue: '15x15x52',
      },
      power: {
        newValue: '1800W',
        oldValue: '1800W',
      },
      color: {
        newValue: 'Green',
        oldValue: 'Green',
      },
      manufacturer: {
        newValue: 'EcoTech',
        oldValue: 'GreenClean',
      },
    },
    {
      id: {
        newValue: 4,
        oldValue: 12,
      },
      name: {
        newValue: 'PetMaster Pro',
        oldValue: 'PetMaster Pro',
      },
      model: {
        newValue: 'PMP',
        oldValue: 'PMP',
      },
      description: {
        newValue: 'Designed for pet owners with specialized pet hair attachment.',
        oldValue: 'Designed for pet owners with specialized pet hair attachment.',
      },
      price: {
        newValue: 129.99,
        oldValue: 129.99,
      },
      stock_quantity: {
        newValue: 40,
        oldValue: 200,
      },
      warranty: {
        newValue: '2 years',
        oldValue: '1 year',
      },
      weight: {
        newValue: '5.8 kg',
        oldValue: '6.5 kg',
      },
      dimensions: {
        newValue: '13x13x49',
        oldValue: '13x13x49',
      },
      power: {
        newValue: '1400w',
        oldValue: '1500W',
      },
      color: {
        newValue: 'Gray',
        oldValue: 'Yellow',
      },
      manufacturer: {
        newValue: 'PetClean',
        oldValue: 'PetClean',
      },
    },
  ]);
});

productRouter.get('/product/en/error', (req, res) => {
  return res.status(400).json({
    data: [],
  });
});

export default productRouter;
