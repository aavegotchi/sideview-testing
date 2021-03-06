export type Collaterals = "aAAVE" | "aWETH" | "aLINK" | "aDAI" | "aUSDT" | "aUSDC" | "aTUSD" | "aUNI" | "aYFI" | "amDAI" | "amWETH" | "amAAVE" | "amUSDT" | "amUSDC" | "amWBTC" | "amWMATIC";
type CollateralToAddress = {
  [key in Collaterals]: string;
}
export const collateralToAddress: CollateralToAddress = {
  aAAVE: "0x823cd4264c1b951c9209ad0deaea9988fe8429bf",
  aWETH: "0x20d3922b4a1a8560e1ac99fba4fade0c849e2142",
  aLINK: "0x98ea609569bd25119707451ef982b90e3eb719cd",
  aDAI: "0xE0b22E0037B130A9F56bBb537684E6fA18192341",
  aUSDT: "0xDAE5F1590db13E3B40423B5b5c5fbf175515910b",
  aUSDC: "0x9719d867A500Ef117cC201206B8ab51e794d3F82",
  aTUSD: "0xF4b8888427b00d7caf21654408B7CBA2eCf4EbD9",
  aUNI: "0x8c8bdBe9CeE455732525086264a4Bf9Cf821C498",
  aYFI: "0xe20f7d1f0eC39C4d5DB01f53554F2EF54c71f613",
  amDAI: "0x27F8D03b3a2196956ED754baDc28D73be8830A6e",
  amWETH: "0x28424507fefb6f7f8E9D3860F56504E4e5f5f390",
  amAAVE: "0x1d2a0E5EC8E5bBDCA5CB219e649B565d8e5c3360",
  amUSDT: "0x60D55F02A771d515e077c9C2403a1ef324885CeC",
  amUSDC: "0x1a13F4Ca1d028320A707D99520AbFefca3998b7F",
  amWBTC: "0x5c2ed810328349100A66B82b78a1791B101C9D61",
  amWMATIC: "0x8dF3aad3a84da6b69A4DA8aeC3eA40d9091B2Ac4"
}

export enum WearableSlots {
  Body = 0,
  Face = 1,
  Eyes = 2,
  Head = 3,
  HandLeft = 4,
  HandRight = 5,
  Pet = 6,
  BG = 7,
}

export type EyeShapes = "mythic_low_1" | "mythic_low_2" | "rare_low_1" | "rare_low_2" | "rare_low_3" | "uncommon_low_1" | "uncommon_low_2" | "uncommon_low_3" | "common_1" | "common_2" | "common_3" | "uncommon_high_1" | "uncommon_high_2" | "uncommon_high_3" | "rare_high_1" | "rare_high_2" | "rare_high_3" | "mythic_high";
type EyeshapeToValue = {
  [key in EyeShapes]: number;
}
export const eyeShapeRanges: EyeshapeToValue = {
  mythic_low_1: 0,
  mythic_low_2: 1,
  rare_low_1: 2,
  rare_low_2: 5,
  rare_low_3: 7,
  uncommon_low_1: 10,
  uncommon_low_2: 15,
  uncommon_low_3: 20,
  common_1: 25,
  common_2: 42,
  common_3: 58,
  uncommon_high_1: 75,
  uncommon_high_2: 80,
  uncommon_high_3: 85,
  rare_high_1: 90,
  rare_high_2: 93,
  rare_high_3: 95,
  mythic_high: 98
};

export type EyeColor = "mythic_low" | "rare_low" | "uncommon_low" | "common" | "uncommon_high" | "rare_high" | "mythic_high";
type EyeColorToValue = {
  [key in EyeColor]: number;
}
export const eyeColorRanges: EyeColorToValue = {
  mythic_low: 0,
  rare_low: 2,
  uncommon_low: 10,
  common: 25,
  uncommon_high: 75,
  rare_high: 91,
  mythic_high: 98
};

export * from "./itemTypes";
