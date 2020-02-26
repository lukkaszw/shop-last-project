const products = [
  {
    _id: '1',
    title: 'Age of empires II',
    imageUrl: '/images/age2.jpg',
    photos: [],
    variant: 'box',
    oldPrice: null,
    price: 59.99,
    description: 'Lorem ipsum dolor sit amet, an brute similique instructior pri, duo fugit democritum ea. Cu copiosae eloquentiam qui, has posse quidam te. Id nec ignota ornatus omnesque, te duo partem tractatos petentium, ex magna definitionem eam. Eu meliore placerat mel, probo definiebas no duo, at mandamus definitionem vel. Sea id nostro disputando comprehensam, id mei alii magna noluisse.',
  },
  {
    _id: '2',
    title: 'Anno 1800',
    imageUrl: '/images/anno-1800.jpg',
    photos: [],
    variant: 'box',
    oldPrice: 109,
    price: 89,
    description: 'Lorem ipsum dolor sit amet, an brute similique instructior pri, duo fugit democritum ea. Cu copiosae eloquentiam qui, has posse quidam te. Id nec ignota ornatus omnesque, te duo partem tractatos petentium, ex magna definitionem eam. Eu meliore placerat mel, probo definiebas no duo, at mandamus definitionem vel. Sea id nostro disputando comprehensam, id mei alii magna noluisse.',
  },
  {
    _id: '3',
    title: 'Anno 2205',
    imageUrl: '/images/anno-2205.jpg',
    photos: [],
    variant: 'box',
    oldPrice: null,
    price: 49,
    description: 'Lorem ipsum dolor sit amet, an brute similique instructior pri, duo fugit democritum ea. Cu copiosae eloquentiam qui, has posse quidam te. Id nec ignota ornatus omnesque, te duo partem tractatos petentium, ex magna definitionem eam. Eu meliore placerat mel, probo definiebas no duo, at mandamus definitionem vel. Sea id nostro disputando comprehensam, id mei alii magna noluisse.',
  },
  {
    _id: '4',
    title: "Assasin's Creed: Odyssey",
    imageUrl: '/images/assasin-odyssey.jpg',
    photos: [],
    variant: 'box',
    oldPrice: 189,
    price: 129,
    description: 'Lorem ipsum dolor sit amet, an brute similique instructior pri, duo fugit democritum ea. Cu copiosae eloquentiam qui, has posse quidam te. Id nec ignota ornatus omnesque, te duo partem tractatos petentium, ex magna definitionem eam. Eu meliore placerat mel, probo definiebas no duo, at mandamus definitionem vel. Sea id nostro disputando comprehensam, id mei alii magna noluisse.',
  },
  {
    _id: '5',
    title: "Assasin's Creed: Origin",
    imageUrl: '/images/assasin-origin.jpg',
    photos: [],
    variant: 'box',
    oldPrice: 129,
    price: 89.99,
    description: 'Lorem ipsum dolor sit amet, an brute similique instructior pri, duo fugit democritum ea. Cu copiosae eloquentiam qui, has posse quidam te. Id nec ignota ornatus omnesque, te duo partem tractatos petentium, ex magna definitionem eam. Eu meliore placerat mel, probo definiebas no duo, at mandamus definitionem vel. Sea id nostro disputando comprehensam, id mei alii magna noluisse.',
  },
  {
    _id: '6',
    title: 'Battlefield 1',
    imageUrl: '/images/battlefield-1.jpg',
    photos: [],
    variant: 'box',
    oldPrice: 100,
    price: 69,
    description: 'Lorem ipsum dolor sit amet, an brute similique instructior pri, duo fugit democritum ea. Cu copiosae eloquentiam qui, has posse quidam te. Id nec ignota ornatus omnesque, te duo partem tractatos petentium, ex magna definitionem eam. Eu meliore placerat mel, probo definiebas no duo, at mandamus definitionem vel. Sea id nostro disputando comprehensam, id mei alii magna noluisse.',
  },
  {
    _id: '7',
    title: 'Battlefield V',
    imageUrl: '/images/battlefield-V.jpg',
    photos: [],
    variant: 'box',
    oldPrice: 189.99,
    price: 140,
    description: 'Lorem ipsum dolor sit amet, an brute similique instructior pri, duo fugit democritum ea. Cu copiosae eloquentiam qui, has posse quidam te. Id nec ignota ornatus omnesque, te duo partem tractatos petentium, ex magna definitionem eam. Eu meliore placerat mel, probo definiebas no duo, at mandamus definitionem vel. Sea id nostro disputando comprehensam, id mei alii magna noluisse.',
  },
  {
    _id: '8',
    title: 'Call of Duty: Modern Warfare',
    imageUrl: '/images/call-of-duty.jpg',
    photos: [],
    variant: 'box',
    oldPrice: null,
    price: 99.99,
    description: 'Lorem ipsum dolor sit amet, an brute similique instructior pri, duo fugit democritum ea. Cu copiosae eloquentiam qui, has posse quidam te. Id nec ignota ornatus omnesque, te duo partem tractatos petentium, ex magna definitionem eam. Eu meliore placerat mel, probo definiebas no duo, at mandamus definitionem vel. Sea id nostro disputando comprehensam, id mei alii magna noluisse.',
  },
  {
    _id: '9',
    title: 'Divinity II: Original Sin',
    imageUrl: '/images/divinity-os-2-de.jpg',
    photos: [],
    variant: 'key',
    oldPrice: null,
    price: 69.99,
    description: 'Lorem ipsum dolor sit amet, an brute similique instructior pri, duo fugit democritum ea. Cu copiosae eloquentiam qui, has posse quidam te. Id nec ignota ornatus omnesque, te duo partem tractatos petentium, ex magna definitionem eam. Eu meliore placerat mel, probo definiebas no duo, at mandamus definitionem vel. Sea id nostro disputando comprehensam, id mei alii magna noluisse.',
  },
  {
    _id: '10',
    title: 'Elex',
    imageUrl: '/images/elex.jpg',
    photos: [],
    variant: 'box',
    oldPrice: null,
    price: 119,
    description: 'Lorem ipsum dolor sit amet, an brute similique instructior pri, duo fugit democritum ea. Cu copiosae eloquentiam qui, has posse quidam te. Id nec ignota ornatus omnesque, te duo partem tractatos petentium, ex magna definitionem eam. Eu meliore placerat mel, probo definiebas no duo, at mandamus definitionem vel. Sea id nostro disputando comprehensam, id mei alii magna noluisse.',
  },
  {
    _id: '11',
    title: 'F1 2019',
    imageUrl: '/images/f12019.jpg',
    photos: [],
    variant: 'box',
    oldPrice: 229.99,
    price: 199.99,
    description: 'Lorem ipsum dolor sit amet, an brute similique instructior pri, duo fugit democritum ea. Cu copiosae eloquentiam qui, has posse quidam te. Id nec ignota ornatus omnesque, te duo partem tractatos petentium, ex magna definitionem eam. Eu meliore placerat mel, probo definiebas no duo, at mandamus definitionem vel. Sea id nostro disputando comprehensam, id mei alii magna noluisse.',
  },
  {
    _id: '12',
    title: 'Far Cry 5',
    imageUrl: '/images/far-cry-5.jpg',
    photos: [],
    variant: 'box',
    oldPrice: 189.99,
    price: 109.99,
    description: 'Lorem ipsum dolor sit amet, an brute similique instructior pri, duo fugit democritum ea. Cu copiosae eloquentiam qui, has posse quidam te. Id nec ignota ornatus omnesque, te duo partem tractatos petentium, ex magna definitionem eam. Eu meliore placerat mel, probo definiebas no duo, at mandamus definitionem vel. Sea id nostro disputando comprehensam, id mei alii magna noluisse.',
  },
  {
    _id: '13',
    title: 'Fifa 20',
    imageUrl: '/images/fifa20.jpg',
    photos: [],
    variant: 'box',
    oldPrice: null,
    price: 149.99,
    description: 'Lorem ipsum dolor sit amet, an brute similique instructior pri, duo fugit democritum ea. Cu copiosae eloquentiam qui, has posse quidam te. Id nec ignota ornatus omnesque, te duo partem tractatos petentium, ex magna definitionem eam. Eu meliore placerat mel, probo definiebas no duo, at mandamus definitionem vel. Sea id nostro disputando comprehensam, id mei alii magna noluisse.',
  },
  {
    _id: '14',
    title: 'Football Manager 2020',
    imageUrl: '/images/fm2020.jpg',
    photos: [],
    variant: 'box',
    oldPrice: null,
    price: 169.99,
    description: 'Lorem ipsum dolor sit amet, an brute similique instructior pri, duo fugit democritum ea. Cu copiosae eloquentiam qui, has posse quidam te. Id nec ignota ornatus omnesque, te duo partem tractatos petentium, ex magna definitionem eam. Eu meliore placerat mel, probo definiebas no duo, at mandamus definitionem vel. Sea id nostro disputando comprehensam, id mei alii magna noluisse.',
  },
  {
    _id: '15',
    title: 'Forza Street',
    imageUrl: '/images/forzaStreet.jpg',
    photos: [],
    variant: 'box',
    oldPrice: null,
    price: 219.99,
    description: 'Lorem ipsum dolor sit amet, an brute similique instructior pri, duo fugit democritum ea. Cu copiosae eloquentiam qui, has posse quidam te. Id nec ignota ornatus omnesque, te duo partem tractatos petentium, ex magna definitionem eam. Eu meliore placerat mel, probo definiebas no duo, at mandamus definitionem vel. Sea id nostro disputando comprehensam, id mei alii magna noluisse.',
  },
  {
    _id: '16',
    title: 'Gears 5',
    imageUrl: '/images/gears5.jpg',
    photos: [],
    variant: 'box',
    oldPrice: null,
    price: 99.99,
    description: 'Lorem ipsum dolor sit amet, an brute similique instructior pri, duo fugit democritum ea. Cu copiosae eloquentiam qui, has posse quidam te. Id nec ignota ornatus omnesque, te duo partem tractatos petentium, ex magna definitionem eam. Eu meliore placerat mel, probo definiebas no duo, at mandamus definitionem vel. Sea id nostro disputando comprehensam, id mei alii magna noluisse.',
  },
  {
    _id: '17',
    title: 'Grid',
    imageUrl: '/images/grid.jpg',
    photos: [],
    variant: 'box',
    oldPrice: 100,
    price: 75,
    description: 'Lorem ipsum dolor sit amet, an brute similique instructior pri, duo fugit democritum ea. Cu copiosae eloquentiam qui, has posse quidam te. Id nec ignota ornatus omnesque, te duo partem tractatos petentium, ex magna definitionem eam. Eu meliore placerat mel, probo definiebas no duo, at mandamus definitionem vel. Sea id nostro disputando comprehensam, id mei alii magna noluisse.',
  },
  {
    _id: '18',
    title: 'Kingdom Come Deliverance',
    imageUrl: '/images/kingdomComeDel.jpg',
    photos: [],
    variant: 'box',
    oldPrice: 189.99,
    price: 109.99,
    description: 'Lorem ipsum dolor sit amet, an brute similique instructior pri, duo fugit democritum ea. Cu copiosae eloquentiam qui, has posse quidam te. Id nec ignota ornatus omnesque, te duo partem tractatos petentium, ex magna definitionem eam. Eu meliore placerat mel, probo definiebas no duo, at mandamus definitionem vel. Sea id nostro disputando comprehensam, id mei alii magna noluisse.',
  },
  {
    _id: '19',
    title: 'Moto GP 19',
    imageUrl: '/images/moto-gp-19.jpg',
    photos: [],
    variant: 'box',
    oldPrice: 169.99,
    price: 129.99,
    description: 'Lorem ipsum dolor sit amet, an brute similique instructior pri, duo fugit democritum ea. Cu copiosae eloquentiam qui, has posse quidam te. Id nec ignota ornatus omnesque, te duo partem tractatos petentium, ex magna definitionem eam. Eu meliore placerat mel, probo definiebas no duo, at mandamus definitionem vel. Sea id nostro disputando comprehensam, id mei alii magna noluisse.',
  },
  {
    _id: '20',
    title: 'Pro Evolution Soccer 2020',
    imageUrl: '/images/pes2020.jpg',
    photos: [],
    variant: 'box',
    oldPrice: 139.99,
    price: 99.99,
    description: 'Lorem ipsum dolor sit amet, an brute similique instructior pri, duo fugit democritum ea. Cu copiosae eloquentiam qui, has posse quidam te. Id nec ignota ornatus omnesque, te duo partem tractatos petentium, ex magna definitionem eam. Eu meliore placerat mel, probo definiebas no duo, at mandamus definitionem vel. Sea id nostro disputando comprehensam, id mei alii magna noluisse.',
  },
  {
    _id: '21',
    title: 'Street Fighter Champions Edition',
    imageUrl: '/images/street-fighter-ch-e.jpg',
    photos: [],
    variant: 'box',
    oldPrice: null,
    price: 89.99,
    description: 'Lorem ipsum dolor sit amet, an brute similique instructior pri, duo fugit democritum ea. Cu copiosae eloquentiam qui, has posse quidam te. Id nec ignota ornatus omnesque, te duo partem tractatos petentium, ex magna definitionem eam. Eu meliore placerat mel, probo definiebas no duo, at mandamus definitionem vel. Sea id nostro disputando comprehensam, id mei alii magna noluisse.',
  },
  {
    _id: '22',
    title: 'Xpand Rally Extreme',
    imageUrl: '/images/xpand-rally-extreme.jpg',
    photos: [],
    variant: 'box',
    oldPrice: 169,
    price: 89.99,
    description: 'Lorem ipsum dolor sit amet, an brute similique instructior pri, duo fugit democritum ea. Cu copiosae eloquentiam qui, has posse quidam te. Id nec ignota ornatus omnesque, te duo partem tractatos petentium, ex magna definitionem eam. Eu meliore placerat mel, probo definiebas no duo, at mandamus definitionem vel. Sea id nostro disputando comprehensam, id mei alii magna noluisse.',
  },

];

export default products;