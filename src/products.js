const products = [
  {
    "id": 1,
    "name": "Abaco Tabuleiro",
    "price": 80,
    "image": "src/PRODUTOS/abaco-tabuleiro 80.jpg"
  },
  {
    "id": 2,
    "name": "Alinhavo Formas",
    "price": 62,
    "image": "src/PRODUTOS/alinhavo-formas 62.jpg"
  },
  {
    "id": 3,
    "name": "Arvore De Alinhavo",
    "price": 46,
    "image": "src/PRODUTOS/arvore-de-alinhavo 46.jpg"
  },
  {
    "id": 4,
    "name": "Camera De Madeira",
    "price": 38,
    "image": "src/PRODUTOS/camera-de-madeira 38.jpg"
  },
  {
    "id": 5,
    "name": "Carimbo De Massinha Dinossauros",
    "price": 36,
    "image": "src/PRODUTOS/carimbo-de-massinha-dinossauros 36.jpg"
  },
  {
    "id": 6,
    "name": "Chute Certo",
    "price": 96,
    "image": "src/PRODUTOS/chute-certo 96.jpg"
  },
  {
    "id": 7,
    "name": "Cobrinha De Alinhavo",
    "price": 46,
    "image": "src/PRODUTOS/cobrinha-de-alinhavo 46.jpg"
  },
  {
    "id": 8,
    "name": "Cornhole",
    "price": 112,
    "image": "src/PRODUTOS/cornhole 112.jpg"
  },
  {
    "id": 9,
    "name": "Corrida De Cogumelos",
    "price": 63,
    "image": "src/PRODUTOS/corrida-de-cogumelos 63.jpg"
  },
  {
    "id": 10,
    "name": "Cubo Magico De Madeira",
    "price": 52,
    "image": "src/PRODUTOS/cubo-magico-de-madeira 52.jpg"
  },
  {
    "id": 11,
    "name": "Dados De Historias",
    "price": 52,
    "image": "src/PRODUTOS/dados-de-historias 52.jpg"
  },
  {
    "id": 12,
    "name": "Desafio Do Rei",
    "price": 41,
    "image": "src/PRODUTOS/desafio-do-rei 41.jpg"
  },
  {
    "id": 13,
    "name": "Desafio Quebra Cabeca Enlace",
    "price": 32,
    "image": "src/PRODUTOS/desafio-quebra-cabeca-enlace 32.jpg"
  },
  {
    "id": 14,
    "name": "Desenlace",
    "price": 63,
    "image": "src/PRODUTOS/desenlace 63.jpg"
  },
  {
    "id": 15,
    "name": "Equilibrista",
    "price": 90,
    "image": "src/PRODUTOS/equilibrista 90.jpg"
  },
  {
    "id": 16,
    "name": "Fecha A Conta",
    "price": 50,
    "image": "src/PRODUTOS/fecha-a-conta 50.jpg"
  },
  {
    "id": 17,
    "name": "Golfe",
    "price": 63,
    "image": "src/PRODUTOS/golfe 63.jpg"
  },
  {
    "id": 18,
    "name": "Golzinho",
    "price": 68,
    "image": "src/PRODUTOS/golzinho 68.jpg"
  },
  {
    "id": 19,
    "name": "Jogo Da Argola",
    "price": 45,
    "image": "src/PRODUTOS/jogo-da-argola 45.jpg"
  },
  {
    "id": 20,
    "name": "Jogo Da Memoria",
    "price": 52,
    "image": "src/PRODUTOS/jogo-da-memoria 52.jpg"
  },
  {
    "id": 21,
    "name": "Jogo Da Velha",
    "price": 38,
    "image": "src/PRODUTOS/jogo-da-velha 38.jpg"
  },
  {
    "id": 22,
    "name": "Jogo Da Velha Saquinho",
    "price": 33,
    "image": "src/PRODUTOS/jogo-da-velha-saquinho 33.jpg"
  },
  {
    "id": 23,
    "name": "Jogo Equilibra",
    "price": 62,
    "image": "src/PRODUTOS/jogo-equilibra 62.jpg"
  },
  {
    "id": 24,
    "name": "Labirinto",
    "price": 90,
    "image": "src/PRODUTOS/labirinto 90.jpg"
  },
  {
    "id": 25,
    "name": "Lanche De Montar",
    "price": 56,
    "image": "src/PRODUTOS/lanche-de-montar 56.jpg"
  },
  {
    "id": 26,
    "name": "Lousa Casinha",
    "price": 44,
    "image": "src/PRODUTOS/lousa-casinha 44.jpg"
  },
  {
    "id": 27,
    "name": "Maderobo",
    "price": 38,
    "image": "src/PRODUTOS/maderobo 38.jpg"
  },
  {
    "id": 28,
    "name": "Madrex",
    "price": 38,
    "image": "src/PRODUTOS/madrex 38.jpg"
  },
  {
    "id": 29,
    "name": "Mini Geoboard",
    "price": 38,
    "image": "src/PRODUTOS/mini-geoboard 38.jpg"
  },
  {
    "id": 30,
    "name": "Pimball Modulavel",
    "price": 130,
    "image": "src/PRODUTOS/pimball-modulavel 130.jpg"
  },
  {
    "id": 31,
    "name": "Regua De Encaixe Arco Iris",
    "price": 62,
    "image": "src/PRODUTOS/regua-de-encaixe-arco-iris 62.jpg"
  },
  {
    "id": 32,
    "name": "Resta",
    "price": 52,
    "image": "src/PRODUTOS/resta 52.jpg"
  },
  {
    "id": 33,
    "name": "Sopra Gol",
    "price": 96,
    "image": "src/PRODUTOS/sopra-gol 96.jpg"
  },
  {
    "id": 34,
    "name": "Tabua Alfabeto",
    "price": 94,
    "image": "src/PRODUTOS/tabua-alfabeto 94.jpg"
  },
  {
    "id": 35,
    "name": "Tabuada Circular",
    "price": 72,
    "image": "src/PRODUTOS/tabuada-circular 72.jpg"
  },
  {
    "id": 36,
    "name": "Tenis De Amarrar Alinhavo",
    "price": 32,
    "image": "src/PRODUTOS/tenis-de-amarrar-alinhavo 32.jpg"
  },
  {
    "id": 37,
    "name": "Teste De Token",
    "price": 68,
    "image": "src/PRODUTOS/teste-de-token 68.jpg"
  },
  {
    "id": 38,
    "name": "Torre De Empilhar",
    "price": 58,
    "image": "src/PRODUTOS/torre-de-empilhar 58.jpg"
  },
  {
    "id": 39,
    "name": "Torre De Equilibrio",
    "price": 68,
    "image": "src/PRODUTOS/torre-de-equilibrio 68.jpg"
  },
  {
    "id": 40,
    "name": "Torre De Hanoi",
    "price": 90,
    "image": "src/PRODUTOS/torre-de-hanoi 90.jpg"
  }
];
