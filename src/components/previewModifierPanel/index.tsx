import { WearableInput } from "../../components/wearablesInput";
import {
  Collaterals,
  collateralToAddress,
  eyeShapeRanges,
  EyeShapes,
  eyeColorRanges,
  EyeColor,
} from "../../vars";

export type Traits = "haunt" | "collateral" | "eyeShape" | "eyeColor";

export type EquipPosition =
  | "head"
  | "body"
  | "handLeft"
  | "handRight"
  | "face"
  | "eyes"
  | "pet"
  | "background";
type Wearables = {
  [key in EquipPosition]: number;
};

const positions: Array<EquipPosition> = [
  "head",
  "body",
  "handLeft",
  "handRight",
  "face",
  "eyes",
  "pet",
  "background",
];

interface Props {
  setTrait: (
    value:
      | {
          trait: "haunt";
          value: "1" | "2";
        }
      | {
          trait: "collateral";
          value: Collaterals;
        }
      | {
          trait: "eyeShape";
          value: number;
        }
      | {
          trait: "eyeColor";
          value: number;
        }
  ) => void;
  setWearable: (value: { slot: EquipPosition, value: number }) => void;
  equipped: Wearables;
}

export const PreviewModifierPanel = ({ setTrait, setWearable, equipped }: Props) => {
  return (
    <div className="modifier-panel">
      <div className="container">
        <h2>Traits</h2>
        {/* Haunt input */}
        <label htmlFor="haunt">Haunt:</label>
        <select
          name="haunt"
          onChange={(e) => {
            const value = e.target.value as "1" | "2";
            setTrait({ trait: "haunt", value });
          }}
        >
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
        {/* Collateral input */}
        <label htmlFor="collateral">Collateral:</label>
        <select
          name="collateral"
          onChange={(e) => {
            const value = e.target.value as Collaterals;
            setTrait({ trait: "collateral", value });
          }}
        >
          {Object.keys(collateralToAddress).map((collateral, i) => {
            return (
              <option key={i} value={collateral}>
                {collateral}
              </option>
            );
          })}
        </select>
        {/* Eye shape input */}
        <label htmlFor="eye-shape">Eye shape:</label>
        <select
          name="eye-shape"
          onChange={(e) => {
            const value = Number(e.target.value);
            setTrait({ trait: "eyeShape", value });
          }}
        >
          {Object.keys(eyeShapeRanges).map((eyeShape, i) => {
            return (
              <option value={eyeShapeRanges[eyeShape as EyeShapes]} key={i}>
                {eyeShape}
              </option>
            );
          })}
        </select>
        {/* Eye color input */}
        <label htmlFor="eye-color">Eye color:</label>
        <select
          name="eye-color"
          onChange={(e) => {
            const value = Number(e.target.value);
            setTrait({ trait: "eyeColor", value });
          }}
        >
          {Object.keys(eyeColorRanges).map((eyeColor, i) => {
            return (
              <option value={eyeColorRanges[eyeColor as EyeColor]} key={i}>
                {eyeColor}
              </option>
            );
          })}
        </select>
      </div>

      {/* Wearables input */}
      <div className="container">
        <h2>Wearables</h2>

        <div className="input-grid">
          {positions.map((position, i) => (
            <div key={i}>
              <WearableInput
                slot={position}
                value={equipped[position]}
                onChange={(e) => setWearable({ slot: position, value: e })}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
