import { Item } from "@/types/item";
import { v4 as id } from "uuid";

import SHIELD from "@/assets/items/weapon/shield.png";
import SWORD from "@/assets/items/weapon/sword.png";
import BOW from "@/assets/items/weapon/bow.png";
import ARROWS from "@/assets/items/weapon/arrows.png";

export const weaponItems: Item[] = [
  {
    id: id(),
    image: SHIELD,
    name: "Tarcza z Skalitz",
    description: ` Tarcza jest szczególnie przydatna w połączeniu z krótką bronią. 
    Istnieje niezliczona liczba kształtów i rozmiarów tarcz, ale jedną z najczęściej spotykanych jest tarcza w kształcie „żelazka”. 
    Oprócz funkcji obronnej, tarcza prezentuje również barwy właściciela, wskazując, czy jej posiadacz jest szlachcicem, członkiem garnizonu lorda czy miejskiej milicji.`,
    count: 1,
    weight: 9,
    price: 68.4,
    durability: 38,
    type: "offHand",
    group: "weapon",
    sideStats: {
      visibility: 0,
      conspiracy: 0,
      noise: 0,
      charisma: 11,
      speed: 0,
      stab: 10,
      slash: 13,
      blunt: 8,
    },
    survivalStats: {},
  },
  {
    id: id(),
    image: SWORD,
    name: "Miecz Magdeburga",
    description: `Miecz to broń biała z długim ostrzem. 
    Długi miecz wykuty z słynną niemiecką precyzją, który pozostaje ostry nawet po intensywnym użytkowaniu.
     Jest to broń budząca szacunek zarówno wśród żołnierzy, jak i szlachty, zapewniająca każdego szermierza, że wytrzyma do końca walki.`,
    count: 1,
    weight: 3.3,
    price: 2587.8,
    durability: 60,
    type: "mainHand",
    group: "weapon",
    sideStats: {
      visibility: 0,
      conspiracy: 0,
      noise: 0,
      charisma: 16,
      speed: 0,
      stab: 57,
      slash: 57,
      blunt: 3,
    },
    survivalStats: {},
  },
  {
    id: id(),
    image: BOW,
    name: "Kumani Łuk",
    description: `Kumani łuk jest dość krótki, co czyni go bardziej odpowiednim do użycia z grzbietu konia. 
    Jego refleksyjny kształt – podwójne wygięcie – rekompensuje utratę mocy wynikającą z krótszej długości.`,
    count: 1,
    weight: 3,
    price: 400.1,
    durability: 100,
    type: "bow",
    group: "weapon",
    sideStats: {
      visibility: 0,
      conspiracy: 0,
      noise: 0,
      charisma: 0,
      speed: 0,
    },
    survivalStats: {},
  },
  {
    id: id(),
    image: ARROWS,
    name: "Strzały myśliwskie",
    description: `W średniowiecznym łucznictwie dostępnych jest wiele rodzajów strzał: strzały do zadawania ran i przebijania na potrzeby walki, strzały myśliwskie do polowań na zwierzynę itp. 
    Różnią się one również jakością, a dobry łuk nie będzie dobrze strzelał kiepskimi strzałami, ani odwrotnie.`,
    count: 87,
    weight: 0.1,
    price: 0.1,
    durability: 0,
    type: "arrows",
    group: "weapon",
    sideStats: {
      visibility: 0,
      conspiracy: 0,
      noise: 0,
      charisma: 0,
      speed: 0,
      stab: 90,
      slash: 0,
      blunt: 0,
    },
    survivalStats: {},
  },
];
