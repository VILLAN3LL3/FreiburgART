import Artwork from '../models/artwork';

export const ARTWORK_LIST = [
  new Artwork(
    1,
    'Ohne Titel (Skulptur für Freiburg)',
    ['Rückriem, Ulrich'],
    '1986',
    'Granit, in fünf Teile gespalten und in der ursprünglichen Form wieder zusammengesetzt',
    '568 x 108 x 137 cm',
    'Augustinerplatz',
    47.99389,
    7.85218,
    ['https://de.wikipedia.org/wiki/Ulrich_Rückriem'],
    'https://i.imgur.com/alsKGLp.jpg',
    true,
    new Date(2021, 6, 11),
    'Skulptur',
    ''
  ),
  new Artwork(
    2,
    'Tanzende Kegel',
    ['Zaumseil, Andrea'],
    '1996/2000',
    'Eisenguss',
    'Höhen zwischen 300 und 340 cm; Neigungswinkel 60, 70, 75 und 80 Grad',
    'Konzerthaus',
    47.9958,
    7.84147,
    ['https://de.wikipedia.org/wiki/Andrea_Zaumseil'],
    'https://i.imgur.com/AISN3Hn.jpg',
    true,
    null,
    'Skulptur',
    ''
  ),
  new Artwork(
    3,
    'Ohne Titel',
    ['Hüppi, Thaddäus'],
    '2004',
    'Edelstahl, Bronze',
    '460 cm',
    'Wiehre',
    47.98511,
    7.85273,
    ['https://de.wikipedia.org/wiki/Thaddäus_Hüppi'],
    'https://i.imgur.com/9ObObUq.jpg',
    true,
    new Date(2021, 6, 19),
    'Skulptur',
    ''
  ),
  new Artwork(
    4,
    'Badisches Saugkalb',
    ['Hohorst, Astrid'],
    '2009',
    'Epoxidharz auf Betonsockel, teilweise rot lackiert',
    'Kalb: 90 x 125 x 140 cm; Sockel: 120 x 75 x 160 cm',
    'Wiehre',
    47.98514,
    7.85182,
    [],
    'https://i.imgur.com/V56W6Uy.jpg',
    true,
    null,
    'Skulptur',
    ''
  ),
  new Artwork(
    5,
    'Gartenschlauch',
    ['Oldenburg, Claes', 'van Bruggen, Coosje'],
    '1983',
    'Stahl',
    '10 m hoch, 84 langer roter Schlauch',
    'Escholzpark',
    47.99972,
    7.83036,
    [
      'https://de.wikipedia.org/wiki/Claes_Oldenburg',
      'https://fudder.de/kunst-die-rumsteht-1-claes-oldenburgs-wasserschlauch--118361228.html',
    ],
    'https://i.imgur.com/BVrL0Sy.jpg',
    false,
    null,
    'Skulptur',
    ''
  ),
  new Artwork(
    6,
    'Heroischer Rhythmus IX',
    ['Lardera, Berto'],
    '1969',
    'Stahl',
    'Unbekannt',
    'Bahnhof',
    48.00069,
    7.84452,
    ['https://de.wikipedia.org/wiki/Berto_Lardera'],
    'https://i.imgur.com/0btJySE.jpg',
    true,
    new Date(2021, 4, 4),
    'Skulptur',
    ''
  ),
  new Artwork(
    7,
    'Sare und Yukie Nagai',
    ['Sare und Yukie Nagai'],
    '2019',
    'Farbe auf Hauswand',
    'Unbekannt',
    'Vauban',
    47.976716,
    7.829016,
    [
      'http://www.nexusexperiments.uni-freiburg.de/stawafo/',
      'http://www.nexusexperiments.uni-freiburg.de/stawafo/wand-5-sare-mit-yukie-nagai/',
    ],
    'https://doc-10-24-mymaps.googleusercontent.com/untrusted/hostedimage/fb15majgk5sqhql6sm9e4m5sio/be3nmjvuhvc70etqbcct1l3pc4/1624104612000/yyulMWweX2Vo7Xod1uoDcN5cpOgMLnOa/04842333967876749562/5AOlzF5aQDMVaMhMxibu_0vUO5q-aV3tDQYO66MlSlfahvP8B0y6OViV2TFgr2Lc-SiBVjoXsjSdBNFrbPNitvUVgyZc8rCbzTt_bfIeLjLo9xmVER2lolq_n8A7YnNWBOUqZdpjI481JP0XbDp1gML0idvYBu_iCpVjB6PXUcJuTezA2VKoVYLXmgJpXPm33IdUB1P0?session=0&fife=s16383',
    true,
    new Date(2021, 1, 24),
    'Graffiti',
    'https://www.youtube.com/embed/CeB8IP_Iuao'
  ),
  new Artwork(
    8,
    'KUNSTDRUCK AUF NETZPLANE',
    ['Marc C. Woehr und Joschka Bödecker'],
    '2019',
    'Druck auf Netzplane',
    'Unbekannt',
    'Universität',
    47.994283,
    7.844947,
    [
      'http://www.nexusexperiments.uni-freiburg.de/stawafo/',
      'http://www.nexusexperiments.uni-freiburg.de/stawafo/wand-3-marc-c-woehr-mit-joschka-boedecker/',
    ],
    'https://doc-08-24-mymaps.googleusercontent.com/untrusted/hostedimage/fb15majgk5sqhql6sm9e4m5sio/ev409o85kn8jp0d18l2kqv4nlk/1624105135250/yyulMWweX2Vo7Xod1uoDcN5cpOgMLnOa/04842333967876749562/5AOlzF5aKdM3P2JsuyCk54T_wx7RVF3bmOvvL8EUyywLCme455Ysi9ShyIexWxOLhs5__X2LNYGj3BpvWcLg2u0HW-I5Uw0M1LEmk2CgjPowdByWJKsJa3tnKYxjWNhIyRTGUGQ1UIPxhV1beGbARfCMWQdLaiLl8vZ_0ep53yaamsQKEEgxfZTRA0UkojhcYbSkoqwn6?session=0&fife=s16383',
    true,
    new Date(2021, 3, 25),
    'Gemälde',
    ''
  ),
  new Artwork(
    9,
    'Reclining Figure - Liegende',
    ['Henry Moore'],
    '1961',
    'Unbekannt',
    'Unbekannt',
    'Platz der alten Synagoge',
    47.994932316280696,
    7.846101023833724,
    ['https://de.wikipedia.org/wiki/Henry_Moore'],
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Reclining_Figure_Henry_Moore_%28Freiburg_im_Breisgau%29_jm53329_ji.jpg/750px-Reclining_Figure_Henry_Moore_%28Freiburg_im_Breisgau%29_jm53329_ji.jpg',
    true,
    null,
    'Skulptur',
    'https://sketchfab.com/models/1c54dfde8bba4cce99e53635c71244b5/embed'
  ),
  new Artwork(
    10,
    'Stühlinger Riesen',
    ['Gutmann, Franz'],
    '1982/83',
    'Betonguss',
    'Riese 1: b 160 x h 625 x L 2850, Riese 2: b 395 x h 620 x L 2336 ',
    'Stühlinger Kirchplatz, unter Stadtbahnbrücke, Wannerstraße',
    47.99698,
    7.83884,
    [],
    '',
    true,
    null,
    'Skulptur',
    ''
  ),
];
