export type SlotPosition =
  | "head"
  | "body"
  | "hands"
  | "handLeft"
  | "handRight"
  | "face"
  | "eyes"
  | "pet"
  | "background";

export interface ItemType {
  svgId: number;
  name: string;
  slotPositions: SlotPosition;
}

export interface ItemTypes {
  [key: number]: ItemType;
}

export const itemTypes: ItemTypes = {
  1: {
    svgId: 1,
    name: "Camo Hat",
    slotPositions: "head",
  },
  2: {
    svgId: 2,
    name: "Camo Pants",

    slotPositions: "body",
  },
  3: {
    svgId: 3,
    name: "MK2 Grenade",
    slotPositions: "hands",
  },
  4: {
    svgId: 4,
    name: "Snow Camo Hat",

    slotPositions: "head",
  },
  5: {
    svgId: 5,
    name: "Snow Camo Pants",

    slotPositions: "body",
  },
  6: {
    svgId: 6,
    name: "M67 Grenade",

    slotPositions: "hands",
  },
  7: {
    svgId: 7,
    name: "Marine Cap",

    slotPositions: "head",
  },
  8: {
    svgId: 8,
    name: "Marine Jacket",

    slotPositions: "body",
  },
  9: {
    svgId: 9,
    name: "Walkie Talkie",

    slotPositions: "hands",
  },
  10: {
    svgId: 10,
    name: "Link White Hat",

    slotPositions: "head",
  },
  11: {
    svgId: 11,
    name: "Link Mess Dress",

    slotPositions: "body",
  },
  12: {
    svgId: 12,
    name: "Link Bubbly",

    slotPositions: "hands",
  },
  13: {
    svgId: 13,
    name: "Sergey Beard",

    slotPositions: "face",
  },
  14: {
    svgId: 14,
    name: "Sergey Eyes",

    slotPositions: "eyes",
  },
  15: {
    svgId: 15,
    name: "Red Plaid",

    slotPositions: "body",
  },
  16: {
    svgId: 16,
    name: "Blue Plaid",

    slotPositions: "body",
  },
  17: {
    svgId: 17,
    name: "Link Cube",

    slotPositions: "hands",
  },
  18: {
    svgId: 18,
    name: "Aave Hero Mask",

    slotPositions: "face",
  },
  19: {
    svgId: 19,
    name: "Aave Hero Shirt",

    slotPositions: "body",
  },
  20: {
    svgId: 20,
    name: "Aave Plush",

    slotPositions: "hands",
  },
  21: {
    svgId: 21,
    name: "Captain Aave Mask",

    slotPositions: "head",
  },
  22: {
    svgId: 22,
    name: "Captain Aave Suit",

    slotPositions: "body",
  },
  23: {
    svgId: 23,
    name: "Captain Aave Shield",

    slotPositions: "hands",
  },
  24: {
    svgId: 24,
    name: "Thaave Helmet",

    slotPositions: "head",
  },
  25: {
    svgId: 25,
    name: "Thaave Suit",

    slotPositions: "body",
  },
  26: {
    svgId: 26,
    name: "Thaave Hammer",

    slotPositions: "hands",
  },
  27: {
    svgId: 27,
    name: "Marc Hair",

    slotPositions: "head",
  },
  28: {
    svgId: 28,
    name: "Marc Outfit",

    slotPositions: "body",
  },
  29: {
    svgId: 29,
    name: "REKT Sign",

    slotPositions: "handLeft",
  },
  30: {
    svgId: 30,
    name: "Jordan Hair",

    slotPositions: "head",
  },
  31: {
    svgId: 31,
    name: "Jordan Suit",

    slotPositions: "body",
  },
  32: {
    svgId: 32,
    name: "Aave Flag",

    slotPositions: "hands",
  },
  33: {
    svgId: 33,
    name: "Stani Hair",

    slotPositions: "head",
  },
  34: {
    svgId: 34,
    name: "Stani Vest",

    slotPositions: "body",
  },
  35: {
    svgId: 35,
    name: "Aave Boat",

    slotPositions: "pet",
  },
  36: {
    svgId: 36,
    name: "ETH Logo Glasses",

    slotPositions: "eyes",
  },
  37: {
    svgId: 37,
    name: "ETH Tshirt",

    slotPositions: "body",
  },
  38: {
    svgId: 38,
    name: "32 ETH Coin",

    slotPositions: "handLeft",
  },
  39: {
    svgId: 39,
    name: "Foxy Mask",

    slotPositions: "head",
  },
  40: {
    svgId: 40,
    name: "Foxy Tail",

    slotPositions: "body",
  },
  41: {
    svgId: 41,
    name: "Trezor Wallet",

    slotPositions: "hands",
  },
  42: {
    svgId: 42,
    name: "Eagle Mask",

    slotPositions: "head",
  },
  43: {
    svgId: 43,
    name: "Eagle Armor",

    slotPositions: "body",
  },
  44: {
    svgId: 44,
    name: "DAO Egg",

    slotPositions: "handLeft",
  },
  45: {
    svgId: 45,
    name: "Ape Mask",

    slotPositions: "head",
  },
  46: {
    svgId: 46,
    name: "Halfrekt Shirt",

    slotPositions: "body",
  },
  47: {
    svgId: 47,
    name: "Waifu Pillow",

    slotPositions: "hands",
  },
  48: {
    svgId: 48,
    name: "Xibot Mohawk",

    slotPositions: "head",
  },
  49: {
    svgId: 49,
    name: "Coderdan Shades",

    slotPositions: "eyes",
  },
  50: {
    svgId: 50,
    name: "GldnXross Robe",

    slotPositions: "body",
  },
  51: {
    svgId: 51,
    name: "Mudgen Diamond",

    slotPositions: "hands",
  },
  52: {
    svgId: 52,
    name: "Galaxy Brain",

    slotPositions: "head",
  },
  53: {
    svgId: 53,
    name: "All-Seeing Eyes",

    slotPositions: "eyes",
  },
  54: {
    svgId: 54,
    name: "Llamacorn Shirt",

    slotPositions: "body",
  },
  55: {
    svgId: 55,
    name: "Aagent Headset",

    slotPositions: "face",
  },
  56: {
    svgId: 56,
    name: "Aagent Shirt",

    slotPositions: "body",
  },
  57: {
    svgId: 57,
    name: "Aagent Shades",

    slotPositions: "eyes",
  },
  58: {
    svgId: 58,
    name: "Aagent Pistol",

    slotPositions: "hands",
  },
  59: {
    svgId: 59,
    name: "Aagent Fedora Hat",

    slotPositions: "head",
  },
  60: {
    svgId: 60,
    name: "Common Wizard Hat",

    slotPositions: "head",
  },
  61: {
    svgId: 61,
    name: "Legendary Wizard Hat",

    slotPositions: "head",
  },
  62: {
    svgId: 62,
    name: "Mythical Wizard Hat",

    slotPositions: "head",
  },
  63: {
    svgId: 63,
    name: "Godlike Wizard Hat",

    slotPositions: "head",
  },
  64: {
    svgId: 64,
    name: "Common Wizard Staff",

    slotPositions: "hands",
  },
  65: {
    svgId: 65,
    name: "Legendary Wizard Staff",

    slotPositions: "hands",
  },
  66: {
    svgId: 66,
    name: "Wizard Visor",

    slotPositions: "eyes",
  },
  67: {
    svgId: 67,
    name: "Straw Hat",

    slotPositions: "head",
  },
  68: {
    svgId: 68,
    name: "Farmer Jeans",

    slotPositions: "body",
  },
  69: {
    svgId: 69,
    name: "Pitchfork",

    slotPositions: "hands",
  },
  70: {
    svgId: 70,
    name: "Handsaw",

    slotPositions: "hands",
  },
  71: {
    svgId: 71,
    name: "Red Santa Hat",

    slotPositions: "head",
  },
  72: {
    svgId: 72,
    name: "Jaay Hairpiece",

    slotPositions: "head",
  },
  73: {
    svgId: 73,
    name: "Jaay Glasses",

    slotPositions: "eyes",
  },
  74: {
    svgId: 74,
    name: "Jaay Suit",

    slotPositions: "body",
  },
  75: {
    svgId: 75,
    name: "OKex Sign",

    slotPositions: "hands",
  },
  76: {
    svgId: 76,
    name: "Big GHST Token",

    slotPositions: "handLeft",
  },
  77: {
    svgId: 77,
    name: "Bitcoin Beanie",

    slotPositions: "head",
  },
  78: {
    svgId: 78,
    name: "Black Jeans",

    slotPositions: "body",
  },
  79: {
    svgId: 79,
    name: "Skateboard",

    slotPositions: "hands",
  },
  80: {
    svgId: 80,
    name: "Sushi Bandana",

    slotPositions: "head",
  },
  81: {
    svgId: 81,
    name: "Sushi Coat",

    slotPositions: "body",
  },
  82: {
    svgId: 82,
    name: "Sushi Piece",

    slotPositions: "hands",
  },
  83: {
    svgId: 83,
    name: "Sushi Knife",

    slotPositions: "hands",
  },
  84: {
    svgId: 84,
    name: "Gentleman Hat",

    slotPositions: "head",
  },
  85: {
    svgId: 85,
    name: "Gentleman Coat",

    slotPositions: "body",
  },
  86: {
    svgId: 86,
    name: "Monocle",

    slotPositions: "eyes",
  },
  87: {
    svgId: 87,
    name: "Miner Helmet",

    slotPositions: "head",
  },
  88: {
    svgId: 88,
    name: "Miner Jeans",

    slotPositions: "body",
  },
  89: {
    svgId: 89,
    name: "Pickaxe",

    slotPositions: "hands",
  },
  90: {
    svgId: 90,
    name: "Pajama Hat",

    slotPositions: "head",
  },
  91: {
    svgId: 91,
    name: "Pajama Shirt",

    slotPositions: "body",
  },
  92: {
    svgId: 92,
    name: "Bedtime Milk",

    slotPositions: "hands",
  },
  93: {
    svgId: 93,
    name: "Fluffy Pillow",

    slotPositions: "hands",
  },
  94: {
    svgId: 94,
    name: "Sweatband",

    slotPositions: "head",
  },
  95: {
    svgId: 95,
    name: "Track Shorts",

    slotPositions: "body",
  },
  96: {
    svgId: 96,
    name: "Water bottle",

    slotPositions: "hands",
  },
  97: {
    svgId: 97,
    name: "Pillbox Hat",

    slotPositions: "head",
  },
  98: {
    svgId: 98,
    name: "Day Dress",

    slotPositions: "body",
  },
  99: {
    svgId: 99,
    name: "Parasol",

    slotPositions: "hands",
  },
  100: {
    svgId: 100,
    name: "Clutch",

    slotPositions: "hands",
  },
  101: {
    svgId: 101,
    name: "Witchy Hat",

    slotPositions: "head",
  },
  102: {
    svgId: 102,
    name: "Witchy Cloak",

    slotPositions: "body",
  },
  103: {
    svgId: 103,
    name: "Witchy Wand",

    slotPositions: "hands",
  },
  104: {
    svgId: 104,
    name: "Portal Mage Helmet",

    slotPositions: "head",
  },
  105: {
    svgId: 105,
    name: "Portal Mage Armor",

    slotPositions: "body",
  },
  106: {
    svgId: 106,
    name: "Portal Mage Axe",

    slotPositions: "hands",
  },
  107: {
    svgId: 107,
    name: "Portal Mage Black Axe",

    slotPositions: "hands",
  },
  108: {
    svgId: 108,
    name: "Rasta Hat",

    slotPositions: "head",
  },
  109: {
    svgId: 109,
    name: "Rasta Shirt",

    slotPositions: "body",
  },
  110: {
    svgId: 110,
    name: "Jamaican Flag",

    slotPositions: "hands",
  },
  111: {
    svgId: 111,
    name: "Hazmat Hood",

    slotPositions: "head",
  },
  112: {
    svgId: 112,
    name: "Hazmat Suit",

    slotPositions: "body",
  },
  113: {
    svgId: 113,
    name: "Uranium Rod",

    slotPositions: "hands",
  },
  114: {
    svgId: 114,
    name: "Red Hawaiian Shirt",

    slotPositions: "body",
  },
  115: {
    svgId: 115,
    name: "Blue Hawaiian Shirt",

    slotPositions: "body",
  },
  116: {
    svgId: 116,
    name: "Coconut",

    slotPositions: "hands",
  },
  117: {
    svgId: 117,
    name: "Cool shades",

    slotPositions: "eyes",
  },
  118: {
    svgId: 118,
    name: "Water Jug",

    slotPositions: "hands",
  },
  119: {
    svgId: 119,
    name: "Baby Bottle",

    slotPositions: "hands",
  },
  120: {
    svgId: 120,
    name: "Martini",

    slotPositions: "hands",
  },
  121: {
    svgId: 121,
    name: "Wine",

    slotPositions: "hands",
  },
  122: {
    svgId: 122,
    name: "Milkshake",

    slotPositions: "hands",
  },
  123: {
    svgId: 123,
    name: "Apple Juice",

    slotPositions: "hands",
  },
  124: {
    svgId: 124,
    name: "Beer Helmet",

    slotPositions: "head",
  },
  125: {
    svgId: 125,
    name: "Track Suit",

    slotPositions: "body",
  },
  130: {
    svgId: 130,
    name: "Fireball",
    slotPositions: "hands",
  },
  131: {
    svgId: 131,
    name: "Dragon Horns",
    slotPositions: "head",
  },
  132: {
    svgId: 132,
    name: "Dragon Wings",
    slotPositions: "body",
  },
  133: {
    svgId: 133,
    name: "Pointy Horns",
    slotPositions: "head",
  },
  134: {
    svgId: 134,
    name: "L2 Sign",
    slotPositions: "hands",
  },
  135: {
    svgId: 135,
    name: "Polygon Shirt",
    slotPositions: "body",
  },
  136: {
    svgId: 136,
    name: "Polygon Cap",
    slotPositions: "head",
  },
  137: {
    svgId: 137,
    name: "Vote Sign",
    slotPositions: "hands",
  },
  138: {
    svgId: 138,
    name: "Snapshot Shirt",
    slotPositions: "body",
  },
  139: {
    svgId: 139,
    name: "Snapshot Cap",
    slotPositions: "head",
  },
  140: {
    svgId: 140,
    name: "Elf Ears",
    slotPositions: "face",
  },
  141: {
    svgId: 141,
    name: "Gemstone Ring",
    slotPositions: "hands",
  },
  142: {
    svgId: 142,
    name: "Princess Tiara",
    slotPositions: "head",
  },
  143: {
    svgId: 143,
    name: "Gold Necklace",
    slotPositions: "body",
  },
  144: {
    svgId: 144,
    name: "Princess Hair",
    slotPositions: "head",
  },
  145: {
    svgId: 145,
    name: "Godli Locks",
    slotPositions: "head",
  },
  146: {
    svgId: 146,
    name: "Imperial Moustache",
    slotPositions: "face",
  },
  147: {
    svgId: 147,
    name: "Tiny Crown",
    slotPositions: "head",
  },
  148: {
    svgId: 148,
    name: "Royal Scepter",
    slotPositions: "hands",
  },
  149: {
    svgId: 149,
    name: "Royal Crown",
    slotPositions: "head",
  },
  150: {
    svgId: 150,
    name: "Royal Robes",
    slotPositions: "body",
  },
  151: {
    svgId: 151,
    name: "Common Rofl",
    slotPositions: "pet",
  },
  152: {
    svgId: 152,
    name: "Uncommon Rofl",
    slotPositions: "pet",
  },
  153: {
    svgId: 153,
    name: "Rare Rofl",
    slotPositions: "pet",
  },
  154: {
    svgId: 154,
    name: "Legendary Rofl",
    slotPositions: "pet",
  },
  155: {
    svgId: 155,
    name: "Mythical Rofl",
    slotPositions: "pet",
  },
  156: {
    svgId: 156,
    name: "Godlike Rofl",
    slotPositions: "pet",
  },
  157: {
    svgId: 157,
    name: "Lil Pump Goatee",
    slotPositions: "face",
  },
  158: {
    svgId: 158,
    name: "Lil Pump Drank",
    slotPositions: "hands",
  },
  159: {
    svgId: 159,
    name: "Lil Pump Shades",
    slotPositions: "eyes",
  },
  160: {
    svgId: 160,
    name: "Lil Pump Threads",
    slotPositions: "body",
  },
  161: {
    svgId: 161,
    name: "Lil Pump Dreads",
    slotPositions: "head",
  },

  162: {
    svgId: 162,
    name: "Miami Shirt",
    slotPositions: "body",
  },

  199: {
    svgId: 199,
    name: "Steampunk Goggles",
    slotPositions: "eyes",
  },
  200: {
    svgId: 200,
    name: "Steampunk Trousers",
    slotPositions: "body",
  },
  201: {
    svgId: 201,
    name: "Mechanical Claw",
    slotPositions: "hands",
  },
  202: {
    svgId: 202,
    name: "VR Headset",
    slotPositions: "eyes",
  },
  203: {
    svgId: 203,
    name: "Gamer Jacket",
    slotPositions: "body",
  },
  204: {
    svgId: 204,
    name: "Game Controller",
    slotPositions: "hands",
  },
  205: {
    svgId: 205,
    name: "Gotchi Mug",
    slotPositions: "hands",
  },
  206: {
    svgId: 206,
    name: "Biker Helmet",
    slotPositions: "head",
  },
  207: {
    svgId: 207,
    name: "Biker Jacket",
    slotPositions: "body",
  },
  208: {
    svgId: 208,
    name: "Aviators",
    slotPositions: "eyes",
  },
  209: {
    svgId: 209,
    name: "Horsehoe Mustache",
    slotPositions: "face",
  },
  210: {
    svgId: 210,
    name: "Haunt1 BG",
    slotPositions: "background",
  },
  211: {
    svgId: 211,
    name: "Guy Fawkes Mask",
    slotPositions: "head",
  },
  212: {
    svgId: 212,
    name: "1337 Laptop",
    slotPositions: "hands",
  },
  213: {
    svgId: 213,
    name: "H4xx0r Shirt",
    slotPositions: "body",
  },
  214: {
    svgId: 214,
    name: "Matrix Eyes",
    slotPositions: "eyes",
  },
  215: {
    svgId: 215,
    name: "Cyborg Eye",
    slotPositions: "eyes",
  },
  216: {
    svgId: 216,
    name: "Rainbow Vomit",
    slotPositions: "face",
  },
  217: {
    svgId: 217,
    name: "Energy Gun",
    slotPositions: "hands",
  },
  218: {
    svgId: 218,
    name: "Mohawk",
    slotPositions: "head",
  },
  219: {
    svgId: 219,
    name: "Mutton Chops",
    slotPositions: "face",
  },
  220: {
    svgId: 220,
    name: "Punk Shirt",
    slotPositions: "body",
  },
  221: {
    svgId: 221,
    name: "Pirate Hat",
    slotPositions: "head",
  },
  222: {
    svgId: 222,
    name: "Pirate Coat",
    slotPositions: "body",
  },
  223: {
    svgId: 223,
    name: "Hook Hand",
    slotPositions: "hands",
  },
  224: {
    svgId: 224,
    name: "Pirate Patch",
    slotPositions: "eyes",
  },
  225: {
    svgId: 225,
    name: "Basketball",
    slotPositions: "hands",
  },
  226: {
    svgId: 226,
    name: "Red Headband",
    slotPositions: "head",
  },
  227: {
    svgId: 227,
    name: "23 Jersey",
    slotPositions: "body",
  },
  228: {
    svgId: 228,
    name: "10 Gallon Hat",
    slotPositions: "head",
  },
  229: {
    svgId: 229,
    name: "Lasso",
    slotPositions: "hands",
  },
  230: {
    svgId: 230,
    name: "Wraangler Jeans",
    slotPositions: "body",
  },
  231: {
    svgId: 231,
    name: "Comfy Poncho",
    slotPositions: "body",
  },
  232: {
    svgId: 232,
    name: "Poncho Hoodie",
    slotPositions: "head",
  },
  233: {
    svgId: 233,
    name: "Uncommon Cacti",
    slotPositions: "pet",
  },
  234: {
    svgId: 234,
    name: "Shaaman Poncho",
    slotPositions: "body",
  },
  235: {
    svgId: 235,
    name: "Shaaman Hoodie",
    slotPositions: "head",
  },
  236: {
    svgId: 236,
    name: "Rare Cacti",
    slotPositions: "pet",
  },
  237: {
    svgId: 237,
    name: "Mythical Cacti",
    slotPositions: "pet",
  },
  238: {
    svgId: 238,
    name: "Godlike Cacti",
    slotPositions: "pet",
  },
  239: {
    svgId: 239,
    name: "Wagie Cap",
    slotPositions: "head",
  },
  240: {
    svgId: 240,
    name: "Headphones",
    slotPositions: "face",
  },
  241: {
    svgId: 241,
    name: "WGMI Shirt",
    slotPositions: "body",
  },
  242: {
    svgId: 242,
    name: "Maan Bun",
    slotPositions: "head",
  },
  243: {
    svgId: 243,
    name: "Tinted Shades",
    slotPositions: "eyes",
  },
  244: {
    svgId: 244,
    name: "V-Neck Shirt",
    slotPositions: "body",
  },
  245: {
    svgId: 245,
    name: "Gecko Hat",
    slotPositions: "head",
  },
  246: {
    svgId: 246,
    name: "name",
    slotPositions: "eyes",
  },
  247: {
    svgId: 247,
    name: "Up Arrow",
    slotPositions: "hands",
  },
  248: {
    svgId: 248,
    name: "Up Only Shirt",
    slotPositions: "body",
  },
  249: {
    svgId: 249,
    name: "Gecko Eyes",
    slotPositions: "eyes",
  },
  250: {
    svgId: 250,
    name: "CoinGecko Tee",
    slotPositions: "body",
  },
  251: {
    svgId: 251,
    name: "Candy Jaar",
    slotPositions: "hands",
  },
  252: {
    svgId: 252,
    name: "Aastronaut Helmet",
    slotPositions: "head",
  },
  253: {
    svgId: 253,
    name: "Aastronaut Suit",
    slotPositions: "body",
  },
  254: {
    svgId: 254,
    name: "uGOTCHI Token",
    slotPositions: "hands",
  },
  255: {
    svgId: 255,
    name: "Space Helmet",
    slotPositions: "head",
  },
  256: {
    svgId: 256,
    name: "Lil Bubble Space Suit",
    slotPositions: "body",
  },
  257: {
    svgId: 257,
    name: "Bitcoin Guitar",
    slotPositions: "hands",
  },
  258: {
    svgId: 258,
    name: "Taoist Robe",
    slotPositions: "body",
  },
  259: {
    svgId: 259,
    name: "Bushy Eyebrows",
    slotPositions: "eyes",
  },
  260: {
    svgId: 260,
    name: "Beard of Wisdom",
    slotPositions: "face",
  },
  261: {
    svgId: 261,
    name: "Aantenna Bot",
    slotPositions: "pet",
  },
  262: {
    svgId: 262,
    name: "Radar Eyes",
    slotPositions: "eyes",
  },
  263: {
    svgId: 263,
    name: "Signal Headset",
    slotPositions: "head",
  },
  292: {
    svgId: 292,
    name: "Brunette Ponytail",
    slotPositions: "head",
  },
  293: {
    svgId: 293,
    name: "Leather Tunic",
    slotPositions: "body",
  },
  294: {
    svgId: 294,
    name: "Bow and Arrow",
    slotPositions: "hands",
  },
  295: {
    svgId: 295,
    name: "Forked Beard",
    slotPositions: "face",
  },
  296: {
    svgId: 296,
    name: "Double-sided Axe",
    slotPositions: "hands",
  },
  297: {
    svgId: 297,
    name: "Animal Skins",
    slotPositions: "body",
  },
  298: {
    svgId: 298,
    name: "Horned Helmet",
    slotPositions: "head",
  },
  299: {
    svgId: 299,
    name: "Longbow",
    slotPositions: "hands",
  },
  300: {
    svgId: 300,
    name: "Feathered Cap",
    slotPositions: "head",
  },
  301: {
    svgId: 301,
    name: "Alluring Eyes",
    slotPositions: "eyes",
  },
  302: {
    svgId: 302,
    name: "Geisha Headpiece",
    slotPositions: "head",
  },
  303: {
    svgId: 303,
    name: "Kimono",
    slotPositions: "body",
  },
  304: {
    svgId: 304,
    name: "Paper Fan",
    slotPositions: "hands",
  },
  305: {
    svgId: 305,
    name: "Sus Butterfly",
    slotPositions: "pet",
  },
  306: {
    svgId: 306,
    name: "Flower Studs",
    slotPositions: "face",
  },
  307: {
    svgId: 307,
    name: "Fairy Wings",
    slotPositions: "body",
  },
  308: {
    svgId: 308,
    name: "Red Hair",
    slotPositions: "head",
  },
  309: {
    svgId: 309,
    name: "Citaadel Helm",
    slotPositions: "head",
  },
  310: {
    svgId: 310,
    name: "Plate Armor",
    slotPositions: "body",
  },
  311: {
    svgId: 311,
    name: "Spirit Sword",
    slotPositions: "hands",
  },
  312: {
    svgId: 312,
    name: "Plate Shield",
    slotPositions: "hands",
  },
  313: {
    svgId: 313,
    name: "Kabuto Helmet",
    slotPositions: "head",
  },
  314: {
    svgId: 314,
    name: "Yoroi Armor",
    slotPositions: "body",
  },
  315: {
    svgId: 315,
    name: "Haanzo Katana",
    slotPositions: "hands",
  },
};
