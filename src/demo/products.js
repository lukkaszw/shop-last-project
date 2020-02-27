const products = [
  {
    _id: '1',
    title: 'Age of empires II',
    imageUrl: '/images/age2.jpg',
    gallery: [
      {
        _id: '1',
        img: '/images/gallery/age2-g-1.jpg',
        minImg: '/images/gallery/age2-g-1_min.jpg',
      }, 
      {
        _id: '2',
        img: '/images/gallery/age2-g-2.jpg',
        minImg: '/images/gallery/age2-g-2_min.jpg',
      },
      {
        _id: '3',
        img: '/images/gallery/age2-g-3.jpg',
        minImg: '/images/gallery/age2-g-3_min.jpg',
      },
      {
        _id: '4',
        img: '/images/gallery/age2-g-4.jpg',
        minImg: '/images/gallery/age2-g-4_min.jpg',
      }, 
    ],
    variant: 'box',
    oldPrice: null,
    price: 59.99,
    description: 'Lorem ipsum dolor sit amet, an brute similique instructior pri, duo fugit democritum ea. Cu copiosae eloquentiam qui, has posse quidam te. Id nec ignota ornatus omnesque, te duo partem tractatos petentium, ex magna definitionem eam. Eu meliore placerat mel, probo definiebas no duo, at mandamus definitionem vel. Sea id nostro disputando comprehensam, id mei alii magna noluisse.',
  },
  {
    _id: '2',
    title: 'Anno 1800',
    imageUrl: '/images/anno-1800.jpg',
    gallery: [
      {
        _id: '1',
        img: '/images/gallery/anno-1800-g-1.jpg',
        minImg: '/images/gallery/anno-1800-g-1_min.jpg',
      }, 
      {
        _id: '2',
        img: '/images/gallery/anno-1800-g-2.jpg',
        minImg: '/images/gallery/anno-1800-g-2_min.jpg',
      },
      {
        _id: '3',
        img: '/images/gallery/anno-1800-g-3.jpg',
        minImg: '/images/gallery/anno-1800-g-3_min.jpg',
      },
      {
        _id: '4',
        img: '/images/gallery/anno-1800-g-4.jpg',
        minImg: '/images/gallery/anno-1800-g-4_min.jpg',
      }, 
    ],
    variant: 'box',
    oldPrice: 109,
    price: 89,
    description: 'Lorem ipsum dolor sit amet, an brute similique instructior pri, duo fugit democritum ea. Cu copiosae eloquentiam qui, has posse quidam te. Id nec ignota ornatus omnesque, te duo partem tractatos petentium, ex magna definitionem eam. Eu meliore placerat mel, probo definiebas no duo, at mandamus definitionem vel. Sea id nostro disputando comprehensam, id mei alii magna noluisse.',
  },
  {
    _id: '3',
    title: 'Anno 2205',
    imageUrl: '/images/anno-2205.jpg',
    gallery: [
      {
        _id: '1',
        img: '/images/gallery/anno2205-g-1.jpg',
        minImg: '/images/gallery/anno2205-g-1_min.jpg',
      }, 
      {
        _id: '2',
        img: '/images/gallery/anno2205-g-2.jpg',
        minImg: '/images/gallery/anno2205-g-2_min.jpg',
      },
      {
        _id: '3',
        img: '/images/gallery/anno2205-g-3.jpg',
        minImg: '/images/gallery/anno2205-g-3_min.jpg',
      },
      {
        _id: '4',
        img: '/images/gallery/anno2205-g-4.jpg',
        minImg: '/images/gallery/anno2205-g-4_min.jpg',
      }, 
    ],
    variant: 'box',
    oldPrice: null,
    price: 49,
    description: 'Lorem ipsum dolor sit amet, an brute similique instructior pri, duo fugit democritum ea. Cu copiosae eloquentiam qui, has posse quidam te. Id nec ignota ornatus omnesque, te duo partem tractatos petentium, ex magna definitionem eam. Eu meliore placerat mel, probo definiebas no duo, at mandamus definitionem vel. Sea id nostro disputando comprehensam, id mei alii magna noluisse.',
  },
  {
    _id: '4',
    title: "Assasin's Creed: Odyssey",
    imageUrl: '/images/assasin-odyssey.jpg',
    gallery: [
      {
        _id: '1',
        img: '/images/gallery/assasin-odyssey-g-1.jpg',
        minImg: '/images/gallery/assasin-odyssey-g-1_min.jpg',
      }, 
      {
        _id: '2',
        img: '/images/gallery/assasin-odyssey-g-2.jpg',
        minImg: '/images/gallery/assasin-odyssey-g-2_min.jpg',
      },
      {
        _id: '3',
        img: '/images/gallery/assasin-odyssey-g-3.jpg',
        minImg: '/images/gallery/assasin-odyssey-g-3_min.jpg',
      },
      {
        _id: '4',
        img: '/images/gallery/assasin-odyssey-g-4.jpg',
        minImg: '/images/gallery/assasin-odyssey-g-4_min.jpg',
      }, 
    ],
    variant: 'box',
    oldPrice: 189,
    price: 129,
    description: 'Lorem ipsum dolor sit amet, an brute similique instructior pri, duo fugit democritum ea. Cu copiosae eloquentiam qui, has posse quidam te. Id nec ignota ornatus omnesque, te duo partem tractatos petentium, ex magna definitionem eam. Eu meliore placerat mel, probo definiebas no duo, at mandamus definitionem vel. Sea id nostro disputando comprehensam, id mei alii magna noluisse.',
  },
  {
    _id: '5',
    title: "Assasin's Creed: Origin",
    imageUrl: '/images/assasin-origin.jpg',
    gallery: [
      {
        _id: '1',
        img: '/images/gallery/assasin-origin-g-1.jpg',
        minImg: '/images/gallery/assasin-origin-g-1_min.jpg',
      }, 
      {
        _id: '2',
        img: '/images/gallery/assasin-origin-g-2.jpg',
        minImg: '/images/gallery/assasin-origin-g-2_min.jpg',
      },
      {
        _id: '3',
        img: '/images/gallery/assasin-origin-g-3.jpg',
        minImg: '/images/gallery/assasin-origin-g-3_min.jpg',
      },
      {
        _id: '4',
        img: '/images/gallery/assasin-origin-g-4.jpg',
        minImg: '/images/gallery/assasin-origin-g-4_min.jpg',
      }, 
    ],
    variant: 'box',
    oldPrice: 129,
    price: 89.99,
    description: 'Lorem ipsum dolor sit amet, an brute similique instructior pri, duo fugit democritum ea. Cu copiosae eloquentiam qui, has posse quidam te. Id nec ignota ornatus omnesque, te duo partem tractatos petentium, ex magna definitionem eam. Eu meliore placerat mel, probo definiebas no duo, at mandamus definitionem vel. Sea id nostro disputando comprehensam, id mei alii magna noluisse.',
  },
  {
    _id: '6',
    title: 'Battlefield 1',
    imageUrl: '/images/battlefield-1.jpg',
    gallery: [
      {
        _id: '1',
        img: '/images/gallery/battlefield-1-g-1.jpg',
        minImg: '/images/gallery/battlefield-1-g-1_min.jpg',
      }, 
      {
        _id: '2',
        img: '/images/gallery/battlefield-1-g-2.jpg',
        minImg: '/images/gallery/battlefield-1-g-2_min.jpg',
      },
      {
        _id: '3',
        img: '/images/gallery/battlefield-1-g-3.jpg',
        minImg: '/images/gallery/battlefield-1-g-3_min.jpg',
      },
      {
        _id: '4',
        img: '/images/gallery/battlefield-1-g-4.jpg',
        minImg: '/images/gallery/battlefield-1-g-4_min.jpg',
      }, 
    ],
    variant: 'box',
    oldPrice: 100,
    price: 69,
    description: 'Lorem ipsum dolor sit amet, an brute similique instructior pri, duo fugit democritum ea. Cu copiosae eloquentiam qui, has posse quidam te. Id nec ignota ornatus omnesque, te duo partem tractatos petentium, ex magna definitionem eam. Eu meliore placerat mel, probo definiebas no duo, at mandamus definitionem vel. Sea id nostro disputando comprehensam, id mei alii magna noluisse.',
  },
  {
    _id: '7',
    title: 'Battlefield V',
    imageUrl: '/images/battlefield-V.jpg',
    gallery: [
      {
        _id: '1',
        img: '/images/gallery/battlefield-5-g-1.jpg',
        minImg: '/images/gallery/battlefield-5-g-1_min.jpg',
      }, 
      {
        _id: '2',
        img: '/images/gallery/battlefield-5-g-2.jpg',
        minImg: '/images/gallery/battlefield-5-g-2_min.jpg',
      },
      {
        _id: '3',
        img: '/images/gallery/battlefield-5-g-3.jpg',
        minImg: '/images/gallery/battlefield-5-g-3_min.jpg',
      },
      {
        _id: '4',
        img: '/images/gallery/battlefield-5-g-4.jpg',
        minImg: '/images/gallery/battlefield-5-g-4_min.jpg',
      }, 
    ],
    variant: 'box',
    oldPrice: 189.99,
    price: 140,
    description: 'Lorem ipsum dolor sit amet, an brute similique instructior pri, duo fugit democritum ea. Cu copiosae eloquentiam qui, has posse quidam te. Id nec ignota ornatus omnesque, te duo partem tractatos petentium, ex magna definitionem eam. Eu meliore placerat mel, probo definiebas no duo, at mandamus definitionem vel. Sea id nostro disputando comprehensam, id mei alii magna noluisse.',
  },
  {
    _id: '8',
    title: 'Call of Duty: Modern Warfare',
    imageUrl: '/images/call-of-duty.jpg',
    gallery: [
      {
        _id: '1',
        img: '/images/gallery/call-of-duty-mw-g-1.jpg',
        minImg: '/images/gallery/call-of-duty-mw-g-1_min.jpg',
      }, 
      {
        _id: '2',
        img: '/images/gallery/call-of-duty-mw-g-2.jpg',
        minImg: '/images/gallery/call-of-duty-mw-g-2_min.jpg',
      },
      {
        _id: '3',
        img: '/images/gallery/call-of-duty-mw-g-3.jpg',
        minImg: '/images/gallery/call-of-duty-mw-g-3_min.jpg',
      },
      {
        _id: '4',
        img: '/images/gallery/call-of-duty-mw-g-4.jpg',
        minImg: '/images/gallery/call-of-duty-mw-g-4_min.jpg',
      }, 
    ],
    variant: 'box',
    oldPrice: null,
    price: 99.99,
    description: 'Lorem ipsum dolor sit amet, an brute similique instructior pri, duo fugit democritum ea. Cu copiosae eloquentiam qui, has posse quidam te. Id nec ignota ornatus omnesque, te duo partem tractatos petentium, ex magna definitionem eam. Eu meliore placerat mel, probo definiebas no duo, at mandamus definitionem vel. Sea id nostro disputando comprehensam, id mei alii magna noluisse.',
  },
  {
    _id: '9',
    title: 'Divinity II: Original Sin',
    imageUrl: '/images/divinity-os-2-de.jpg',
    gallery: [
      {
        _id: '1',
        img: '/images/gallery/divinity2-os-g-1.jpg',
        minImg: '/images/gallery/divinity2-os-g-1_min.jpg',
      }, 
      {
        _id: '2',
        img: '/images/gallery/divinity2-os-g-2.jpg',
        minImg: '/images/gallery/divinity2-os-g-2_min.jpg',
      },
      {
        _id: '3',
        img: '/images/gallery/divinity2-os-g-3.jpg',
        minImg: '/images/gallery/divinity2-os-g-3_min.jpg',
      },
      {
        _id: '4',
        img: '/images/gallery/divinity2-os-g-4.jpg',
        minImg: '/images/gallery/divinity2-os-g-4_min.jpg',
      }, 
    ],
    variant: 'key',
    oldPrice: null,
    price: 69.99,
    description: 'Lorem ipsum dolor sit amet, an brute similique instructior pri, duo fugit democritum ea. Cu copiosae eloquentiam qui, has posse quidam te. Id nec ignota ornatus omnesque, te duo partem tractatos petentium, ex magna definitionem eam. Eu meliore placerat mel, probo definiebas no duo, at mandamus definitionem vel. Sea id nostro disputando comprehensam, id mei alii magna noluisse.',
  },
  {
    _id: '10',
    title: 'Elex',
    imageUrl: '/images/elex.jpg',
    gallery: [
      {
        _id: '1',
        img: '/images/gallery/elex-g-1.jpg',
        minImg: '/images/gallery/elex-g-1_min.jpg',
      }, 
      {
        _id: '2',
        img: '/images/gallery/elex-g-2.jpg',
        minImg: '/images/gallery/elex-g-2_min.jpg',
      },
      {
        _id: '3',
        img: '/images/gallery/elex-g-3.jpg',
        minImg: '/images/gallery/elex-g-3_min.jpg',
      },
      {
        _id: '4',
        img: '/images/gallery/elex-g-4.jpg',
        minImg: '/images/gallery/elex-g-4_min.jpg',
      }, 
    ],
    variant: 'box',
    oldPrice: null,
    price: 119,
    description: 'Lorem ipsum dolor sit amet, an brute similique instructior pri, duo fugit democritum ea. Cu copiosae eloquentiam qui, has posse quidam te. Id nec ignota ornatus omnesque, te duo partem tractatos petentium, ex magna definitionem eam. Eu meliore placerat mel, probo definiebas no duo, at mandamus definitionem vel. Sea id nostro disputando comprehensam, id mei alii magna noluisse.',
  },
  {
    _id: '11',
    title: 'F1 2019',
    imageUrl: '/images/f12019.jpg',
    gallery: [
      {
        _id: '1',
        img: '/images/gallery/f12019-g-1.jpg',
        minImg: '/images/gallery/f12019-g-1_min.jpg',
      }, 
      {
        _id: '2',
        img: '/images/gallery/f12019-g-2.jpg',
        minImg: '/images/gallery/f12019-g-2_min.jpg',
      },
      {
        _id: '3',
        img: '/images/gallery/f12019-g-3.jpg',
        minImg: '/images/gallery/f12019-g-3_min.jpg',
      },
      {
        _id: '4',
        img: '/images/gallery/f12019-g-4.jpg',
        minImg: '/images/gallery/f12019-g-4_min.jpg',
      }, 
    ],
    variant: 'box',
    oldPrice: 229.99,
    price: 199.99,
    description: 'Lorem ipsum dolor sit amet, an brute similique instructior pri, duo fugit democritum ea. Cu copiosae eloquentiam qui, has posse quidam te. Id nec ignota ornatus omnesque, te duo partem tractatos petentium, ex magna definitionem eam. Eu meliore placerat mel, probo definiebas no duo, at mandamus definitionem vel. Sea id nostro disputando comprehensam, id mei alii magna noluisse.',
  },
  {
    _id: '12',
    title: 'Far Cry 5',
    imageUrl: '/images/far-cry-5.jpg',
    gallery: [
      {
        _id: '1',
        img: '/images/gallery/far-cry-5-g-1.jpg',
        minImg: '/images/gallery/far-cry-5-g-1_min.jpg',
      }, 
      {
        _id: '2',
        img: '/images/gallery/far-cry-5-g-2.jpg',
        minImg: '/images/gallery/far-cry-5-g-2_min.jpg',
      },
      {
        _id: '3',
        img: '/images/gallery/far-cry-5-g-3.jpg',
        minImg: '/images/gallery/far-cry-5-g-3_min.jpg',
      },
      {
        _id: '4',
        img: '/images/gallery/far-cry-5-g-4.jpg',
        minImg: '/images/gallery/far-cry-5-g-4_min.jpg',
      }, 
    ],
    variant: 'box',
    oldPrice: 189.99,
    price: 109.99,
    description: 'Lorem ipsum dolor sit amet, an brute similique instructior pri, duo fugit democritum ea. Cu copiosae eloquentiam qui, has posse quidam te. Id nec ignota ornatus omnesque, te duo partem tractatos petentium, ex magna definitionem eam. Eu meliore placerat mel, probo definiebas no duo, at mandamus definitionem vel. Sea id nostro disputando comprehensam, id mei alii magna noluisse.',
  },
  {
    _id: '13',
    title: 'Fifa 20',
    imageUrl: '/images/fifa20.jpg',
    gallery: [
      {
        _id: '1',
        img: '/images/gallery/fifa20-g-1.jpg',
        minImg: '/images/gallery/fifa20-g-1_min.jpg',
      }, 
      {
        _id: '2',
        img: '/images/gallery/fifa20-g-2.jpg',
        minImg: '/images/gallery/fifa20-g-2_min.jpg',
      },
      {
        _id: '3',
        img: '/images/gallery/fifa20-g-3.jpg',
        minImg: '/images/gallery/fifa20-g-3_min.jpg',
      },
      {
        _id: '4',
        img: '/images/gallery/fifa20-g-4.jpg',
        minImg: '/images/gallery/fifa20-g-4_min.jpg',
      }, 
    ],
    variant: 'box',
    oldPrice: null,
    price: 149.99,
    description: 'Lorem ipsum dolor sit amet, an brute similique instructior pri, duo fugit democritum ea. Cu copiosae eloquentiam qui, has posse quidam te. Id nec ignota ornatus omnesque, te duo partem tractatos petentium, ex magna definitionem eam. Eu meliore placerat mel, probo definiebas no duo, at mandamus definitionem vel. Sea id nostro disputando comprehensam, id mei alii magna noluisse.',
  },
  {
    _id: '14',
    title: 'Football Manager 2020',
    imageUrl: '/images/fm2020.jpg',
    gallery: [
      {
        _id: '1',
        img: '/images/gallery/fm2020-g-1.jpg',
        minImg: '/images/gallery/fm2020-g-1_min.jpg',
      }, 
      {
        _id: '2',
        img: '/images/gallery/fm2020-g-2.jpg',
        minImg: '/images/gallery/fm2020-g-2_min.jpg',
      },
      {
        _id: '3',
        img: '/images/gallery/fm2020-g-3.jpg',
        minImg: '/images/gallery/fm2020-g-3_min.jpg',
      },
      {
        _id: '4',
        img: '/images/gallery/fm2020-g-4.jpg',
        minImg: '/images/gallery/fm2020-g-4_min.jpg',
      }, 
    ],
    variant: 'box',
    oldPrice: null,
    price: 169.99,
    description: 'Lorem ipsum dolor sit amet, an brute similique instructior pri, duo fugit democritum ea. Cu copiosae eloquentiam qui, has posse quidam te. Id nec ignota ornatus omnesque, te duo partem tractatos petentium, ex magna definitionem eam. Eu meliore placerat mel, probo definiebas no duo, at mandamus definitionem vel. Sea id nostro disputando comprehensam, id mei alii magna noluisse.',
  },
  {
    _id: '15',
    title: 'Forza Street',
    imageUrl: '/images/forzaStreet.jpg',
    gallery: [
      {
        _id: '1',
        img: '/images/gallery/forza-street-g-1.jpg',
        minImg: '/images/gallery/forza-street-g-1_min.jpg',
      }, 
      {
        _id: '2',
        img: '/images/gallery/forza-street-g-2.jpg',
        minImg: '/images/gallery/forza-street-g-2_min.jpg',
      },
      {
        _id: '3',
        img: '/images/gallery/forza-street-g-3.jpg',
        minImg: '/images/gallery/forza-street-g-3_min.jpg',
      },
      {
        _id: '4',
        img: '/images/gallery/forza-street-g-4.jpg',
        minImg: '/images/gallery/forza-street-g-4_min.jpg',
      }, 
    ],
    variant: 'box',
    oldPrice: null,
    price: 219.99,
    description: 'Lorem ipsum dolor sit amet, an brute similique instructior pri, duo fugit democritum ea. Cu copiosae eloquentiam qui, has posse quidam te. Id nec ignota ornatus omnesque, te duo partem tractatos petentium, ex magna definitionem eam. Eu meliore placerat mel, probo definiebas no duo, at mandamus definitionem vel. Sea id nostro disputando comprehensam, id mei alii magna noluisse.',
  },
  {
    _id: '16',
    title: 'Gears 5',
    imageUrl: '/images/gears5.jpg',
    gallery: [
      {
        _id: '1',
        img: '/images/gallery/gears5-g-1.jpg',
        minImg: '/images/gallery/gears5-g-1_min.jpg',
      }, 
      {
        _id: '2',
        img: '/images/gallery/gears5-g-2.jpg',
        minImg: '/images/gallery/gears5-g-2_min.jpg',
      },
      {
        _id: '3',
        img: '/images/gallery/gears5-g-3.jpg',
        minImg: '/images/gallery/gears5-g-3_min.jpg',
      },
      {
        _id: '4',
        img: '/images/gallery/gears5-g-4.jpg',
        minImg: '/images/gallery/gears5-g-4_min.jpg',
      }, 
    ],
    variant: 'box',
    oldPrice: null,
    price: 99.99,
    description: 'Lorem ipsum dolor sit amet, an brute similique instructior pri, duo fugit democritum ea. Cu copiosae eloquentiam qui, has posse quidam te. Id nec ignota ornatus omnesque, te duo partem tractatos petentium, ex magna definitionem eam. Eu meliore placerat mel, probo definiebas no duo, at mandamus definitionem vel. Sea id nostro disputando comprehensam, id mei alii magna noluisse.',
  },
  {
    _id: '17',
    title: 'Grid',
    imageUrl: '/images/grid.jpg',
    gallery: [
      {
        _id: '1',
        img: '/images/gallery/grid-g-1.jpg',
        minImg: '/images/gallery/grid-g-1_min.jpg',
      }, 
      {
        _id: '2',
        img: '/images/gallery/grid-g-2.jpg',
        minImg: '/images/gallery/grid-g-2_min.jpg',
      },
      {
        _id: '3',
        img: '/images/gallery/grid-g-3.jpg',
        minImg: '/images/gallery/grid-g-3_min.jpg',
      },
      {
        _id: '4',
        img: '/images/gallery/grid-g-4.jpg',
        minImg: '/images/gallery/grid-g-4_min.jpg',
      }, 
    ],
    variant: 'box',
    oldPrice: 100,
    price: 75,
    description: 'Lorem ipsum dolor sit amet, an brute similique instructior pri, duo fugit democritum ea. Cu copiosae eloquentiam qui, has posse quidam te. Id nec ignota ornatus omnesque, te duo partem tractatos petentium, ex magna definitionem eam. Eu meliore placerat mel, probo definiebas no duo, at mandamus definitionem vel. Sea id nostro disputando comprehensam, id mei alii magna noluisse.',
  },
  {
    _id: '18',
    title: 'Kingdom Come Deliverance',
    imageUrl: '/images/kingdomComeDel.jpg',
    gallery: [
      {
        _id: '1',
        img: '/images/gallery/kingdome-come-g-1.jpg',
        minImg: '/images/gallery/kingdome-come-g-1_min.jpg',
      }, 
      {
        _id: '2',
        img: '/images/gallery/kingdome-come-g-2.jpg',
        minImg: '/images/gallery/kingdome-come-g-2_min.jpg',
      },
      {
        _id: '3',
        img: '/images/gallery/kingdome-come-g-3.jpg',
        minImg: '/images/gallery/kingdome-come-g-3_min.jpg',
      },
      {
        _id: '4',
        img: '/images/gallery/kingdome-come-g-4.jpg',
        minImg: '/images/gallery/kingdome-come-g-4_min.jpg',
      }, 
    ],
    variant: 'box',
    oldPrice: 189.99,
    price: 109.99,
    description: 'Lorem ipsum dolor sit amet, an brute similique instructior pri, duo fugit democritum ea. Cu copiosae eloquentiam qui, has posse quidam te. Id nec ignota ornatus omnesque, te duo partem tractatos petentium, ex magna definitionem eam. Eu meliore placerat mel, probo definiebas no duo, at mandamus definitionem vel. Sea id nostro disputando comprehensam, id mei alii magna noluisse.',
  },
  {
    _id: '19',
    title: 'Moto GP 19',
    imageUrl: '/images/moto-gp-19.jpg',
    gallery: [
      {
        _id: '1',
        img: '/images/gallery/motoGP19-g-1.jpg',
        minImg: '/images/gallery/motoGP19-g-1_min.jpg',
      }, 
      {
        _id: '2',
        img: '/images/gallery/motoGP19-g-2.jpg',
        minImg: '/images/gallery/motoGP19-g-2_min.jpg',
      },
      {
        _id: '3',
        img: '/images/gallery/motoGP19-g-3.jpg',
        minImg: '/images/gallery/motoGP19-g-3_min.jpg',
      },
      {
        _id: '4',
        img: '/images/gallery/motoGP19-g-4.jpg',
        minImg: '/images/gallery/motoGP19-g-4_min.jpg',
      }, 
    ],
    variant: 'box',
    oldPrice: 169.99,
    price: 129.99,
    description: 'Lorem ipsum dolor sit amet, an brute similique instructior pri, duo fugit democritum ea. Cu copiosae eloquentiam qui, has posse quidam te. Id nec ignota ornatus omnesque, te duo partem tractatos petentium, ex magna definitionem eam. Eu meliore placerat mel, probo definiebas no duo, at mandamus definitionem vel. Sea id nostro disputando comprehensam, id mei alii magna noluisse.',
  },
  {
    _id: '20',
    title: 'Pro Evolution Soccer 2020',
    imageUrl: '/images/pes2020.jpg',
    gallery: [
      {
        _id: '1',
        img: '/images/gallery/pes2020-g-1.jpg',
        minImg: '/images/gallery/pes2020-g-1_min.jpg',
      }, 
      {
        _id: '2',
        img: '/images/gallery/pes2020-g-2.jpg',
        minImg: '/images/gallery/pes2020-g-2_min.jpg',
      },
      {
        _id: '3',
        img: '/images/gallery/pes2020-g-3.jpg',
        minImg: '/images/gallery/pes2020-g-3_min.jpg',
      },
      {
        _id: '4',
        img: '/images/gallery/pes2020-g-4.jpg',
        minImg: '/images/gallery/pes2020-g-4_min.jpg',
      }, 
    ],
    variant: 'box',
    oldPrice: 139.99,
    price: 99.99,
    description: 'Lorem ipsum dolor sit amet, an brute similique instructior pri, duo fugit democritum ea. Cu copiosae eloquentiam qui, has posse quidam te. Id nec ignota ornatus omnesque, te duo partem tractatos petentium, ex magna definitionem eam. Eu meliore placerat mel, probo definiebas no duo, at mandamus definitionem vel. Sea id nostro disputando comprehensam, id mei alii magna noluisse.',
  },
  {
    _id: '21',
    title: 'Street Fighter Champions Edition',
    imageUrl: '/images/street-fighter-ch-e.jpg',
    gallery: [
      {
        _id: '1',
        img: '/images/gallery/street-fighter-che-g-1.jpg',
        minImg: '/images/gallery/street-fighter-che-g-1_min.jpg',
      }, 
      {
        _id: '2',
        img: '/images/gallery/street-fighter-che-g-2.jpg',
        minImg: '/images/gallery/street-fighter-che-g-2_min.jpg',
      },
      {
        _id: '3',
        img: '/images/gallery/street-fighter-che-g-3.jpg',
        minImg: '/images/gallery/street-fighter-che-g-3_min.jpg',
      },
      {
        _id: '4',
        img: '/images/gallery/street-fighter-che-g-4.jpg',
        minImg: '/images/gallery/street-fighter-che-g-4_min.jpg',
      }, 
    ],
    variant: 'box',
    oldPrice: null,
    price: 89.99,
    description: 'Lorem ipsum dolor sit amet, an brute similique instructior pri, duo fugit democritum ea. Cu copiosae eloquentiam qui, has posse quidam te. Id nec ignota ornatus omnesque, te duo partem tractatos petentium, ex magna definitionem eam. Eu meliore placerat mel, probo definiebas no duo, at mandamus definitionem vel. Sea id nostro disputando comprehensam, id mei alii magna noluisse.',
  },
  {
    _id: '22',
    title: 'Xpand Rally Extreme',
    imageUrl: '/images/xpand-rally-extreme.jpg',
    gallery: [
      {
        _id: '1',
        img: '/images/gallery/xpand-extreme-g-1.jpg',
        minImg: '/images/gallery/xpand-extreme-g-1_min.jpg',
      }, 
      {
        _id: '2',
        img: '/images/gallery/xpand-extreme-g-2.jpg',
        minImg: '/images/gallery/xpand-extreme-g-2_min.jpg',
      },
      {
        _id: '3',
        img: '/images/gallery/xpand-extreme-g-3.jpg',
        minImg: '/images/gallery/xpand-extreme-g-3_min.jpg',
      },
      {
        _id: '4',
        img: '/images/gallery/xpand-extreme-g-4.jpg',
        minImg: '/images/gallery/xpand-extreme-g-4_min.jpg',
      }, 
    ],
    variant: 'box',
    oldPrice: 169,
    price: 89.99,
    description: 'Lorem ipsum dolor sit amet, an brute similique instructior pri, duo fugit democritum ea. Cu copiosae eloquentiam qui, has posse quidam te. Id nec ignota ornatus omnesque, te duo partem tractatos petentium, ex magna definitionem eam. Eu meliore placerat mel, probo definiebas no duo, at mandamus definitionem vel. Sea id nostro disputando comprehensam, id mei alii magna noluisse.',
  },

];

export default products;