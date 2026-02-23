import React from "react";

// Category (Picture and names)
const cropsItem = [
  // 🌸 SPRING
  {
    id: 1,
    name: "Parsnip",
    amount: 35,
    image: "https://stardewvalleywiki.com/mediawiki/images/d/db/Parsnip.png",
  },
  {
    id: 2,
    name: "Green Bean",
    amount: 40,
    image: "https://stardewvalleywiki.com/mediawiki/images/5/5c/Green_Bean.png",
  },
  {
    id: 3,
    name: "Cauliflower",
    amount: 175,
    image:
      "https://stardewvalleywiki.com/mediawiki/images/a/aa/Cauliflower.png",
  },
  {
    id: 4,
    name: "Potato",
    amount: 80,
    image: "https://stardewvalleywiki.com/mediawiki/images/c/c2/Potato.png",
  },
  {
    id: 5,
    name: "Tulip",
    amount: 30,
    image:
      "https://stardewvalleywiki.com/mediawiki/images/b/b4/Tulip_Stage_6.png",
  },
  {
    id: 6,
    name: "Kale",
    amount: 110,
    image:
      "https://stardewvalleywiki.com/mediawiki/images/e/e9/Kale_Stage_5.png",
  },
  {
    id: 7,
    name: "Blue Jazz",
    amount: 50,
    image: "https://stardewvalleywiki.com/mediawiki/images/2/2f/Blue_Jazz.png",
  },
  {
    id: 8,
    name: "Garlic",
    amount: 60,
    image: "https://stardewvalleywiki.com/mediawiki/images/c/cc/Garlic.png",
  },
  {
    id: 9,
    name: "Rhubarb",
    amount: 220,
    image:
      "https://stardewvalleywiki.com/mediawiki/images/4/48/Rhubarb_Stage_6.png",
  },

  // ☀️ SUMMER
  {
    id: 10,
    name: "Blueberry",
    amount: 50,
    image: "https://stardewvalleywiki.com/mediawiki/images/9/9e/Blueberry.png",
  },
  {
    id: 11,
    name: "Melon",
    amount: 250,
    image: "https://stardewvalleywiki.com/mediawiki/images/1/19/Melon.png",
  },
  {
    id: 12,
    name: "Hot Pepper",
    amount: 40,
    image: "https://stardewvalleywiki.com/mediawiki/images/f/f1/Hot_Pepper.png",
  },
  {
    id: 13,
    name: "Tomato",
    amount: 60,
    image: "https://stardewvalleywiki.com/mediawiki/images/9/9d/Tomato.png",
  },
  {
    id: 14,
    name: "Corn",
    amount: 50,
    image:
      "https://listium-res.cloudinary.com/image/upload/f_auto,c_fill,h_900,w_1200,q_auto,e_saturation:40/fpyxzjdys7ebwbdg79em.jpg",
  },
  {
    id: 15,
    name: "Radish",
    amount: 90,
    image: "https://stardewvalleywiki.com/mediawiki/images/d/d5/Radish.png",
  },
  {
    id: 16,
    name: "Wheat",
    amount: 25,
    image: "https://stardewvalleywiki.com/mediawiki/images/e/e2/Wheat.png",
  },
  {
    id: 17,
    name: "Poppy",
    amount: 140,
    image: "https://stardewvalleywiki.com/mediawiki/images/3/37/Poppy.png",
  },
  {
    id: 18,
    name: "Summer Spangle",
    amount: 90,
    image:
      "https://stardewvalleywiki.com/mediawiki/images/9/9f/Summer_Spangle.png",
  },
  {
    id: 19,
    name: "Hops",
    amount: 25,
    image: "https://stardewvalleywiki.com/mediawiki/images/5/59/Hops.png",
  },
  {
    id: 20,
    name: "Sunflower",
    amount: 80,
    image:
      "https://stardewvalleywiki.com/mediawiki/images/e/ed/Sunflower_Stage_5.png",
  },
  {
    id: 21,
    name: "Red Cabbage",
    amount: 260,
    image:
      "https://listium-res.cloudinary.com/image/upload/f_auto,c_fill,h_900,w_1200,q_auto,e_saturation:40/i8fn4fxjbt3iar7a4v1x.jpg",
  },
  {
    id: 22,
    name: "Starfruit",
    amount: 750,
    image: "https://stardewvalleywiki.com/mediawiki/images/d/db/Starfruit.png",
  },

  // 🍂 FALL
  {
    id: 23,
    name: "Pumpkin",
    amount: 320,
    image: "https://stardewvalleywiki.com/mediawiki/images/6/64/Pumpkin.png",
  },
  {
    id: 24,
    name: "Cranberries",
    amount: 75,
    image:
      "https://stardewvalleywiki.com/mediawiki/images/6/6e/Cranberries.png",
  },
  {
    id: 25,
    name: "Eggplant",
    amount: 60,
    image: "https://stardewvalleywiki.com/mediawiki/images/8/8f/Eggplant.png",
  },
  {
    id: 26,
    name: "Yam",
    amount: 160,
    image: "https://rerollcdn.com/Qwiki/Stardew/Items/yam.png",
  },
  {
    id: 27,
    name: "Bok Choy",
    amount: 80,
    image: "https://stardewvalleywiki.com/mediawiki/images/4/40/Bok_Choy.png",
  },
  {
    id: 28,
    name: "Amaranth",
    amount: 150,
    image:
      "https://static.wikia.nocookie.net/stardew-valley-minecraft-datapack/images/6/66/Amaranth1.png/revision/latest/scale-to-width-down/180?cb=20210625005207",
  },
  {
    id: 29,
    name: "Grape",
    amount: 80,
    image: "https://rerollcdn.com/Qwiki/Stardew/Items/grape.png",
  },
  {
    id: 30,
    name: "Artichoke",
    amount: 160,
    image: "https://rerollcdn.com/Qwiki/Stardew/Items/artichoke.png",
  },
  {
    id: 31,
    name: "Fairy Rose",
    amount: 290,
    image:
      "https://stardewvalleywiki.com/mediawiki/images/4/43/Fairy_Rose_Stage_5.png",
  },
  {
    id: 32,
    name: "Sweet Gem Berry",
    amount: 3000,
    image: "https://rerollcdn.com/Qwiki/Stardew/Items/sweet_gem_berry.png",
  },

  // ❄️ SPECIAL / MULTI-SEASON
  {
    id: 33,
    name: "Ancient Fruit",
    amount: 550,
    image:
      "https://stardewvalleywiki.com/mediawiki/images/0/01/Ancient_Fruit.png",
  },
  {
    id: 34,
    name: "Coffee Bean",
    amount: 15,
    image:
      "https://stardewvalleywiki.com/mediawiki/images/3/33/Coffee_Bean.png",
  },
];
const forageItems = [
  {
    id: "F1",
    name: "Wild Horseradish",
    amount: 50,
    image: "https://rerollcdn.com/Qwiki/Stardew/Items/wild_horseradish.png",
  },
  {
    id: "F2",
    name: "Daffodil",
    amount: 30,
    image: "https://stardewvalleywiki.com/mediawiki/images/4/4b/Daffodil.png",
  },
  {
    id: "F3",
    name: "Leek",
    amount: 60,
    image: "https://stardewvalleywiki.com/mediawiki/images/5/57/Leek.png",
  },
  {
    id: "F4",
    name: "Dandelion",
    amount: 40,
    image: "https://rerollcdn.com/Qwiki/Stardew/Items/dandelion.png",
  },
  {
    id: "F5",
    name: "Grape",
    amount: 80,
    image: "https://rerollcdn.com/Qwiki/Stardew/Items/grape.png",
  },
  {
    id: "F6",
    name: "Spice Berry",
    amount: 80,
    image:
      "https://stardewvalleywiki.com/mediawiki/images/c/c6/Spice_Berry.png",
  },
  {
    id: "F7",
    name: "Sweet Pea",
    amount: 50,
    image: "https://rerollcdn.com/Qwiki/Stardew/Items/sweet_pea.png",
  },
  {
    id: "F8",
    name: "Common Mushroom",
    amount: 40,
    image: "https://rerollcdn.com/Qwiki/Stardew/Items/common_mushroom.png",
  },
  {
    id: "F9",
    name: "Wild Plum",
    amount: 80,
    image: "https://rerollcdn.com/Qwiki/Stardew/Items/wild_plum.png",
  },
  {
    id: "F10",
    name: "Hazelnut",
    amount: 90,
    image: "https://rerollcdn.com/Qwiki/Stardew/Items/hazelnut.png",
  },
  {
    id: "F11",
    name: "Blackberry",
    amount: 20,
    image: "https://rerollcdn.com/Qwiki/Stardew/Items/blackberry.png",
  },
  {
    id: "F12",
    name: "Winter Root",
    amount: 70,
    image: "https://rerollcdn.com/Qwiki/Stardew/Items/winter_root.png",
  },
  {
    id: "F13",
    name: "Crystal Fruit",
    amount: 150,
    image: "https://rerollcdn.com/Qwiki/Stardew/Items/crystal_fruit.png",
  },
  {
    id: "F14",
    name: "Snow Yam",
    amount: 100,
    image: "https://rerollcdn.com/Qwiki/Stardew/Items/snow_yam.png",
  },
  {
    id: "F15",
    name: "Crocus",
    amount: 60,
    image: "https://rerollcdn.com/Qwiki/Stardew/Items/crocus.png",
  },
  {
    id: "F16",
    name: "Clam",
    amount: 50,
    image: "https://rerollcdn.com/Qwiki/Stardew/Items/clam.png",
  },
  {
    id: "F17",
    name: "Coral",
    amount: 80,
    image: "https://rerollcdn.com/Qwiki/Stardew/Items/coral.png",
  },
  {
    id: "F18",
    name: "Sea Urchin",
    amount: 160,
    image: "https://rerollcdn.com/Qwiki/Stardew/Items/sea_urchin.png",
  },
  {
    id: "F19",
    name: "Oyster",
    amount: 40,
    image: "https://rerollcdn.com/Qwiki/Stardew/Items/oyster.png",
  },
  {
    id: "F20",
    name: "Cockle",
    amount: 50,
    image: "https://rerollcdn.com/Qwiki/Stardew/Items/cockle.png",
  },
  {
    id: "F21",
    name: "Mussel",
    amount: 30,
    image: "https://rerollcdn.com/Qwiki/Stardew/Items/mussel.png",
  },
];
const mushroomItems = [
  {
    id: "M1",
    name: "Common Mushroom",
    amount: 40,
    image:
      "https://stardewvalleywiki.com/mediawiki/images/2/2e/Common_Mushroom.png",
  },
  {
    id: "M2",
    name: "Morel",
    amount: 150,
    image: "https://rerollcdn.com/Qwiki/Stardew/Items/morel.png",
  },
  {
    id: "M3",
    name: "Purple Mushroom",
    amount: 250,
    image: "https://rerollcdn.com/Qwiki/Stardew/Items/purple_mushroom.png",
  },
  {
    id: "M4",
    name: "Chanterelle",
    amount: 160,
    image: "https://rerollcdn.com/Qwiki/Stardew/Items/chanterelle.png",
  },
  {
    id: "M5",
    name: "Red Mushroom",
    amount: 75,
    image: "https://rerollcdn.com/Qwiki/Stardew/Items/red_mushroom.png",
  },
  {
    id: "M6",
    name: "Magma Cap",
    amount: 400,
    image: "https://rerollcdn.com/Qwiki/Stardew/Items/magma_cap.png",
  },
];
const fishItems = [
  {
    id: "FISH1",
    name: "Sunfish",
    amount: 30,
    image: "https://stardewvalleywiki.com/mediawiki/images/5/56/Sunfish.png",
  },
  {
    id: "FISH2",
    name: "Sardine",
    amount: 40,
    image: "https://stardewvalleywiki.com/mediawiki/images/0/04/Sardine.png",
  },
  {
    id: "FISH3",
    name: "Anchovy",
    amount: 30,
    image: "https://rerollcdn.com/Qwiki/Stardew/Items/anchovy.png",
  },
  {
    id: "FISH4",
    name: "Bream",
    amount: 45,
    image: "https://rerollcdn.com/Qwiki/Stardew/Items/bream.png",
  },
  {
    id: "FISH5",
    name: "Halibut",
    amount: 80,
    image: "https://rerollcdn.com/Qwiki/Stardew/Items/halibut.png",
  },
  {
    id: "FISH6",
    name: "Red Snapper",
    amount: 50,
    image: "https://rerollcdn.com/Qwiki/Stardew/Items/red_snapper.png",
  },
  {
    id: "FISH7",
    name: "Tilapia",
    amount: 75,
    image: "https://rerollcdn.com/Qwiki/Stardew/Items/tilapia.png",
  },
  {
    id: "FISH8",
    name: "Pike",
    amount: 60,
    image: "https://rerollcdn.com/Qwiki/Stardew/Items/pike.png",
  },
  {
    id: "FISH9",
    name: "Catfish",
    amount: 200,
    image: "https://rerollcdn.com/Qwiki/Stardew/Items/catfish.png",
  },
  {
    id: "FISH10",
    name: "Sturgeon",
    amount: 200,
    image: "https://rerollcdn.com/Qwiki/Stardew/Items/sturgeon.png",
  },
  {
    id: "FISH11",
    name: "Shad",
    amount: 60,
    image: "https://rerollcdn.com/Qwiki/Stardew/Items/shad.png",
  },
  {
    id: "FISH12",
    name: "Salmon",
    amount: 75,
    image: "https://rerollcdn.com/Qwiki/Stardew/Items/salmon.png",
  },
  {
    id: "FISH13",
    name: "Tuna",
    amount: 100,
    image: "https://rerollcdn.com/Qwiki/Stardew/Items/tuna.png",
  },
  {
    id: "FISH14",
    name: "Trout",
    amount: 50,
    image: "https://rerollcdn.com/Qwiki/Stardew/Items/trout.png",
  },
  {
    id: "FISH15",
    name: "Eel",
    amount: 85,
    image: "https://rerollcdn.com/Qwiki/Stardew/Items/eel.png",
  },

  {
    id: "FISH16",
    name: "Pufferfish",
    amount: 200,
    image: "https://rerollcdn.com/Qwiki/Stardew/Items/pufferfish.png",
  },
  {
    id: "FISH17",
    name: "Ghostfish",
    amount: 45,
    image: "https://rerollcdn.com/Qwiki/Stardew/Items/ghostfish.png",
  },
  {
    id: "FISH18",
    name: "Sandfish",
    amount: 75,
    image: "https://rerollcdn.com/Qwiki/Stardew/Items/sandfish.png",
  },
  {
    id: "FISH19",
    name: "Woodskip",
    amount: 75,
    image: "https://rerollcdn.com/Qwiki/Stardew/Items/woodskip.png",
  },
  {
    id: "FISH20",
    name: "Largemouth Bass",
    amount: 100,
    image: "https://rerollcdn.com/Qwiki/Stardew/Items/largemouth_bass.png",
  },
  {
    id: "FISH21",
    name: "Smallmouth Bass",
    amount: 50,
    image: "https://rerollcdn.com/Qwiki/Stardew/Items/smallmouth_bass.png",
  },
  {
    id: "FISH22",
    name: "Perch",
    amount: 55,
    image: "https://rerollcdn.com/Qwiki/Stardew/Items/perch.png",
  },
  {
    id: "FISH23",
    name: "Chub",
    amount: 50,
    image: "https://rerollcdn.com/Qwiki/Stardew/Items/chub.png",
  },
  {
    id: "FISH24",
    name: "Carp",
    amount: 30,
    image: "https://rerollcdn.com/Qwiki/Stardew/Items/carp.png",
  },
  {
    id: "FISH25",
    name: "Bullhead",
    amount: 75,
    image: "https://rerollcdn.com/Qwiki/Stardew/Items/bullhead.png",
  },
  {
    id: "FISH26",
    name: "Super Cucumber",
    amount: 250,
    image: "https://rerollcdn.com/Qwiki/Stardew/Items/super_cucumber.png",
  },
  {
    id: "FISH27",
    name: "Sea Cucumber",
    amount: 75,
    image: "https://rerollcdn.com/Qwiki/Stardew/Items/sea_cucumber.png",
  },
  {
    id: "FISH28",
    name: "Octopus",
    amount: 150,
    image: "https://rerollcdn.com/Qwiki/Stardew/Items/octopus.png",
  },
  {
    id: "FISH29",
    name: "Squid",
    amount: 80,
    image: "https://rerollcdn.com/Qwiki/Stardew/Items/squid.png",
  },
  {
    id: "FISH30",
    name: "Crab",
    amount: 100,
    image: "https://rerollcdn.com/Qwiki/Stardew/Items/crab.png",
  },

  {
    id: "FISH31",
    name: "Stonefish",
    amount: 300,
    image: "https://rerollcdn.com/Qwiki/Stardew/Items/stonefish.png",
  },
  {
    id: "FISH32",
    name: "Ice Pip",
    amount: 500,
    image: "https://rerollcdn.com/Qwiki/Stardew/Items/ice_pip.png",
  },
  {
    id: "FISH33",
    name: "Lava Eel",
    amount: 700,
    image: "https://rerollcdn.com/Qwiki/Stardew/Items/lava_eel.png",
  },
  {
    id: "FISH34",
    name: "Legend",
    amount: 5000,
    image: "https://rerollcdn.com/Qwiki/Stardew/Items/legend.png",
  },
  {
    id: "FISH35",
    name: "Mutant Carp",
    amount: 1000,
    image: "https://rerollcdn.com/Qwiki/Stardew/Items/mutant_carp.png",
  },
];
const animalProducts = [
  {
    id: "AP1",
    name: "Egg",
    amount: 50,
    image: "https://stardewvalleywiki.com/mediawiki/images/5/5d/Large_Egg.png",
  },
  {
    id: "AP2",
    name: "Large Egg",
    amount: 95,
    image: "https://stardewvalleywiki.com/mediawiki/images/5/5d/Large_Egg.png",
  },
  {
    id: "AP3",
    name: "Brown Egg",
    amount: 50,
    image: "https://stardewvalleywiki.com/mediawiki/images/0/01/Brown_Egg.png",
  },
  {
    id: "AP4",
    name: "Large Brown Egg",
    amount: 95,
    image: "https://stardewvalleywiki.com/mediawiki/images/0/01/Brown_Egg.png",
  },

  {
    id: "AP5",
    name: "Milk",
    amount: 80,
    image: "https://stardewvalleywiki.com/mediawiki/images/4/45/Goat_Milk.png",
  },
  {
    id: "AP6",
    name: "Large Milk",
    amount: 190,
    image: "https://stardewvalleywiki.com/mediawiki/images/4/45/Goat_Milk.png",
  },
  {
    id: "AP7",
    name: "Goat Milk",
    amount: 225,
    image: "https://stardewvalleywiki.com/mediawiki/images/4/45/Goat_Milk.png",
  },
  {
    id: "AP8",
    name: "Large Goat Milk",
    amount: 400,
    image: "https://stardewvalleywiki.com/mediawiki/images/4/45/Goat_Milk.png",
  },

  {
    id: "AP9",
    name: "Duck Egg",
    amount: 95,
    image: "https://stardewvalleywiki.com/mediawiki/images/3/31/Duck_Egg.png",
  },
  {
    id: "AP10",
    name: "Duck Feather",
    amount: 250,
    image:
      "https://stardewvalleywiki.com/mediawiki/images/f/f9/Duck_Feather.png",
  },

  {
    id: "AP11",
    name: "Wool",
    amount: 340,
    image: "https://stardewvalleywiki.com/mediawiki/images/3/34/Wool.png",
  },
  {
    id: "AP12",
    name: "Rabbit Foot",
    amount: 565,
    image:
      "https://stardewvalleywiki.com/mediawiki/images/c/ca/Rabbit%27s_Foot.png",
  },

  {
    id: "AP13",
    name: "Void Egg",
    amount: 65,
    image: "https://stardewvalleywiki.com/mediawiki/images/5/58/Void_Egg.png",
  },

  {
    id: "AP21",
    name: "Dinosaur Egg",
    amount: 350,
    image:
      "https://stardewvalleywiki.com/mediawiki/images/a/a1/Dinosaur_Egg.png",
  },

  {
    id: "AP19",
    name: "Truffle",
    amount: 625,
    image: "https://stardewvalleywiki.com/mediawiki/images/f/f2/Truffle.png",
  },
];
const artisanGoods = [
  {
    id: "AG1",
    name: "Mayonnaise",
    amount: 100,
    image: "https://stardewvalleywiki.com/mediawiki/images/4/4e/Mayonnaise.png",
  },
  {
    id: "AG2",
    name: "Large Mayonnaise",
    amount: 190,
    image: "https://stardewvalleywiki.com/mediawiki/images/4/4e/Mayonnaise.png",
  },
  {
    id: "AG3",
    name: "Void Mayonnaise",
    amount: 275,
    image:
      "https://stardewvalleywiki.com/mediawiki/images/f/f3/Void_Mayonnaise.png",
  },

  {
    id: "AG4",
    name: "Cheese",
    amount: 230,
    image: "https://stardewvalleywiki.com/mediawiki/images/a/a5/Cheese.png",
  },
  {
    id: "AG5",
    name: "Goat Cheese",
    amount: 400,
    image: "https://stardew.wiki/images/Goat_Cheese.png",
  },

  {
    id: "AG6",
    name: "Honey",
    amount: 100,
    image: "https://stardewvalleywiki.com/mediawiki/images/c/c6/Honey.png",
  },
  {
    id: "AG7",
    name: "Wild Honey",
    amount: 100,
    image:
      "https://listium-res.cloudinary.com/image/upload/f_auto,c_fill,h_900,w_1200,q_auto,e_saturation:40/icpdfbsjem48pwackxrg.jpg",
  },

  {
    id: "AG8",
    name: "Wine",
    amount: 3 * 50, // base example multiplier
    image:
      "https://i0.wp.com/nerdlodge.com/wp-content/uploads/2022/09/wine-in-stardew-valley2.png?resize=67%2C67&ssl=1",
  },

  {
    id: "AG10",
    name: "Pickles",
    amount: 60,
    image:
      "https://static.wikia.nocookie.net/stardew-valley-minecraft-datapack/images/e/e6/Pickles1.png/revision/latest?cb=20210708040517",
  },

  {
    id: "AG11",
    name: "Truffle Oil",
    amount: 1065,
    image:
      "https://i0.wp.com/nerdlodge.com/wp-content/uploads/2022/11/truffle-oil-in-stardew-valley2.png?resize=93%2C93&ssl=1",
  },

  {
    id: "AG12",
    name: "Beer",
    amount: 200,
    image: "https://stardewvalleywiki.com/mediawiki/images/b/b3/Beer.png",
  },

  {
    id: "AG13",
    name: "Pale Ale",
    amount: 300,
    image: "https://stardewvalleywiki.com/mediawiki/images/7/78/Pale_Ale.png",
  },

  {
    id: "AG15",
    name: "Oil",
    amount: 100,
    image:
      "https://stardewvalleywiki.com/mediawiki/images/archive/0/06/20220115091258!Oil.png",
  },

  {
    id: "AG16",
    name: "Cloth",
    amount: 470,
    image:
      "https://static.wikia.nocookie.net/stardew-valley-minecraft-datapack/images/5/51/Cloth.png/revision/latest?cb=20230911184245",
  },

  {
    id: "AG17",
    name: "Dinosaur Mayonnaise",
    amount: 800,
    image:
      "https://stardewvalleywiki.com/mediawiki/images/f/f3/Void_Mayonnaise.png",
  },
];
const mineralsGems = [
  {
    id: "MG1",
    name: "Amethyst",
    amount: 100,
    image: "https://stardewvalleywiki.com/mediawiki/images/2/2e/Amethyst.png",
  },
  {
    id: "MG2",
    name: "Topaz",
    amount: 80,
    image: "https://stardewvalleywiki.com/mediawiki/images/a/a5/Topaz.png",
  },
  {
    id: "MG3",
    name: "Aquamarine",
    amount: 180,
    image: "https://stardewvalleywiki.com/mediawiki/images/a/a2/Aquamarine.png",
  },
  {
    id: "MG4",
    name: "Jade",
    amount: 200,
    image: "https://stardewvalleywiki.com/mediawiki/images/7/7e/Jade.png",
  },
  {
    id: "MG5",
    name: "Emerald",
    amount: 250,
    image: "https://stardewvalleywiki.com/mediawiki/images/6/6a/Emerald.png",
  },
  {
    id: "MG6",
    name: "Ruby",
    amount: 250,
    image: "https://stardewvalleywiki.com/mediawiki/images/a/a9/Ruby.png",
  },
  {
    id: "MG7",
    name: "Diamond",
    amount: 750,
    image: "https://stardewvalleywiki.com/mediawiki/images/e/ea/Diamond.png",
  },

  {
    id: "MG8",
    name: "Earth Crystal",
    amount: 50,
    image:
      "https://stardewvalleywiki.com/mediawiki/images/7/74/Earth_Crystal.png",
  },
  {
    id: "MG9",
    name: "Frozen Tear",
    amount: 75,
    image:
      "https://stardewvalleywiki.com/mediawiki/images/e/ec/Frozen_Tear.png",
  },
  {
    id: "MG10",
    name: "Fire Quartz",
    amount: 100,
    image:
      "https://www.touchtapplay.com/wp-content/uploads/2023/01/stardew-valley-fire-quartz.png?resize=74%2C85",
  },

  {
    id: "MG11",
    name: "Celestine",
    amount: 125,
    image: "https://stardewvalleywiki.com/mediawiki/images/1/19/Celestine.png",
  },
  {
    id: "MG12",
    name: "Calcite",
    amount: 75,
    image: "https://stardewvalleywiki.com/mediawiki/images/9/97/Calcite.png",
  },
  {
    id: "MG13",
    name: "Jasper",
    amount: 150,
    image: "https://stardewvalleywiki.com/mediawiki/images/9/9b/Jasper.png",
  },

  {
    id: "MG14",
    name: "Limestone",
    amount: 15,
    image:
      "https://static.wikia.nocookie.net/stardew-valley-minecraft-datapack/images/4/4e/Limestone.png/revision/latest?cb=20210428041843",
  },
  {
    id: "MG15",
    name: "Marble",
    amount: 110,
    image: "https://stardewvalleywiki.com/mediawiki/images/8/82/Marble.png",
  },
  {
    id: "MG16",
    name: "Slate",
    amount: 85,
    image: "https://stardewvalleywiki.com/mediawiki/images/9/97/Slate.png",
  },

  {
    id: "MG17",
    name: "Obsidian",
    amount: 200,
    image: "https://stardewvalleywiki.com/mediawiki/images/2/23/Obsidian.png",
  },
  {
    id: "MG18",
    name: "Prismatic Shard",
    amount: 2000,
    image:
      "https://stardewvalleywiki.com/mediawiki/images/5/56/Prismatic_Shard.png",
  },
];
const crabPotItems = [
  {
    id: "CP1",
    name: "Lobster",
    amount: 120,
    image: "https://stardewvalleywiki.com/mediawiki/images/9/9f/Lobster.png",
  },
  {
    id: "CP2",
    name: "Crayfish",
    amount: 75,
    image: "https://rerollcdn.com/Qwiki/Stardew/Items/crayfish.png",
  },
  {
    id: "CP3",
    name: "Crab",
    amount: 100,
    image: "https://stardewvalleywiki.com/mediawiki/images/6/63/Crab.png",
  },
  {
    id: "CP4",
    name: "Cockle",
    amount: 50,
    image: "https://rerollcdn.com/Qwiki/Stardew/Items/cockle.png",
  },
  {
    id: "CP5",
    name: "Mussel",
    amount: 30,
    image: "https://rerollcdn.com/Qwiki/Stardew/Items/mussel.png",
  },

  {
    id: "CP7",
    name: "Snail",
    amount: 65,
    image: "https://stardewvalleywiki.com/mediawiki/images/d/d2/Snail.png",
  },
  {
    id: "CP8",
    name: "Periwinkle",
    amount: 20,
    image:
      "https://stardewvalleywiki.com/mediawiki/images/a/a1/Bundle_Purple.png",
  },
  {
    id: "CP9",
    name: "Oyster",
    amount: 40,
    image: "https://stardewvalleywiki.com/mediawiki/images/5/54/Oyster.png",
  },
];
const monsterLoot = [
  {
    id: "ML1",
    name: "Bat Wing",
    amount: 30,
    image: "https://stardewvalleywiki.com/mediawiki/images/3/35/Bat_Wing.png",
  },
  {
    id: "ML2",
    name: "Solar Essence",
    amount: 40,
    image:
      "https://stardewvalleywiki.com/mediawiki/images/f/f4/Solar_Essence.png",
  },
  {
    id: "ML3",
    name: "Void Essence",
    amount: 50,
    image:
      "https://stardewvalleywiki.com/mediawiki/images/1/1f/Void_Essence.png",
  },
  {
    id: "ML4",
    name: "Slime",
    amount: 5,
    image:
      "https://listium-res.cloudinary.com/image/upload/f_auto,c_fill,h_900,w_1200,q_auto,e_saturation:40/a8ree9qtjgr4t5f1q78a.jpg",
  },
  {
    id: "ML5",
    name: "Bone Fragment",
    amount: 20,
    image:
      "https://stardewvalleywiki.com/mediawiki/images/9/97/Bone_Fragment.png",
  },
  {
    id: "ML6",
    name: "Bug Meat",
    amount: 8,
    image: "https://stardewvalleywiki.com/mediawiki/images/b/b6/Bug_Meat.png",
  },
];
const treeProducts = [
  {
    id: "T2",
    name: "Maple Syrup",
    amount: 200,
    image:
      "https://stardewvalleywiki.com/mediawiki/images/6/6a/Maple_Syrup.png",
  },

  {
    id: "T3",
    name: "Oak Resin",
    amount: 150,
    image: "https://stardewvalleywiki.com/mediawiki/images/4/40/Oak_Resin.png",
  },

  {
    id: "T4",
    name: "Pine Tar",
    amount: 100,
    image: "https://stardewvalleywiki.com/mediawiki/images/c/ce/Pine_Tar.png",
  },

  {
    id: "T5",
    name: "Apple",
    amount: 100,
    image: "https://stardewvalleywiki.com/mediawiki/images/7/7d/Apple.png",
  },

  {
    id: "T6",
    name: "Peach",
    amount: 140,
    image: "https://stardewvalleywiki.com/mediawiki/images/e/e2/Peach.png",
  },

  {
    id: "T7",
    name: "Orange",
    amount: 100,
    image: "https://stardewvalleywiki.com/mediawiki/images/4/43/Orange.png",
  },

  {
    id: "T8",
    name: "Pomegranate",
    amount: 140,
    image:
      "https://stardewvalleywiki.com/mediawiki/images/1/1b/Pomegranate.png",
  },

  {
    id: "T9",
    name: "Cherry",
    amount: 80,
    image: "https://stardewvalleywiki.com/mediawiki/images/2/20/Cherry.png",
  },
];
const ItemDetails = [
  {
    name: "CROPS",
    img: "https://static.wikia.nocookie.net/stardew-valley-minecraft-datapack/images/d/db/Parsnip.png/revision/latest/scale-to-width-down/180?cb=20210625034333",
    id: "A1",
    content: cropsItem,
  },
  {
    name: "FORAGE",
    img: "https://stardewvalleywiki.com/mediawiki/images/9/90/Wild_Horseradish.png",
    id: "A2",
    content: forageItems,
  },
  {
    name: "MUSHROOMS",
    img: "https://stardewvalleywiki.com/mediawiki/images/e/e1/Red_Mushroom.png",
    id: "A3",
    content: mushroomItems,
  },
  {
    name: "FISH",
    img: "https://stardewvalleywiki.com/mediawiki/images/1/10/Legend.png",
    id: "A4",
    content: fishItems,
  },
  {
    name: "ANIMAL PRODUCTS",
    img: "https://stardewvalleywiki.com/mediawiki/images/4/45/Goat_Milk.png",
    id: "A5",
    content: animalProducts,
  },
  {
    name: "ARTISAN GOODS",
    img: "https://stardewvalleywiki.com/mediawiki/images/a/a5/Cheese.png",
    id: "A6",
    content: artisanGoods,
  },
  {
    name: "MINERALS & GEMS",
    img: "https://stardewvalleywiki.com/mediawiki/images/e/ea/Diamond.png",
    id: "A7",
    content: mineralsGems,
  },
  {
    name: "CRAB POT",
    img: "https://wiki.stardewvalley.net/mediawiki/images/6/63/Crab.png",
    id: "A8",
    content: crabPotItems,
  },
  {
    name: "MONSTER LOOT",
    img: "https://stardewvalleywiki.com/mediawiki/images/f/f4/Solar_Essence.png",
    id: "A9",
    content: monsterLoot,
  },
  {
    name: "TREE PRODUCTS",
    img: "https://stardewvalleywiki.com/mediawiki/images/6/6a/Maple_Syrup.png",
    id: "A10",
    content: treeProducts,
  },
];

export default ItemDetails;
