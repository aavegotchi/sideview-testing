import { useState } from "react";
import { useEffect } from "react";
import { ethers } from "ethers";
import diamondAbi from "./abis/diamondABI.json";
import { Tuple } from "./types";
import { Loader } from "./components/loader";
import { WearableInput } from "./components/wearablesInput";
import {
  Collaterals,
  collateralToAddress,
  eyeShapeRanges,
  EyeShapes,
  eyeColorRanges,
  EyeColor,
} from "./vars";
import "./App.css";

const convertInlineSVGToBlobURL = (svg: string) => {
  const blob = new Blob([svg], { type: "image/svg+xml" });
  return URL.createObjectURL(blob);
};

const diamondAddress = "0x86935F11C86623deC8a25696E1C19a8659CbF95d";

declare global {
  interface Window {
    ethereum: any;
  }
}

interface Traits {
  haunt: "1" | "2";
  collateral: Collaterals;
  eyeShape: number;
  eyeColor: number;
}

export type EquipPosition = "head" | "body" | "handLeft" | "handRight" | "face" | "eyes" | "pet" | "background";
type Wearables = {
  [key in EquipPosition]: number;
}

const positions: Array<EquipPosition> = ["head", "body", "handLeft", "handRight", "face", "eyes", "pet", "background"];


function App() {
  // IF RUNNING LOCALLY - FIX WITH LOCAL NODE URL
  const [customRPC, setCustomRPC] = useState("");
  const [rpcInput, setRPCInput] = useState("");

  const [loading, setLoading] = useState(false);
  const [diamondContract, setDiamondContract] = useState<ethers.Contract>();
  const [previewGotchiSideviews, setPreviewGotchiSideviews] =
    useState<Tuple<string, 4>>();
  const [traits, setTraits] = useState<Traits>({
    haunt: "1",
    collateral: "aAAVE",
    eyeShape: 0,
    eyeColor: 0,
  });
  const [wearables, setWearables] = useState<Wearables>({
    body: 0,
    face: 0,
    handLeft: 0,
    handRight: 0,
    eyes: 0,
    head: 0,
    pet: 0,
    background: 0,
  });

  // 1) Get Users address + Contract
  const connectToNetwork = async (eth: any, rpc: string) => {
    try {
      setLoading(true);
      await eth.enable();
      // Construct contract from users provider, the diamond contracts address and ABI

      const provider = rpc ? new ethers.providers.JsonRpcProvider(rpc) : new ethers.providers.Web3Provider(eth);
      const contract = new ethers.Contract(
        diamondAddress,
        diamondAbi,
        provider
      );
      setDiamondContract(contract);
      setLoading(false);
      // Get users address
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  // 2) Fetch preview aavegotchi sideviews
  const getPreviewAavegotchiSideview = async (
    contract: ethers.Contract,
    options: {
      haunt?: "1" | "2";
      numericTraits?: Tuple<number, 6>;
      wearables?: Tuple<number, 16>;
      collateral?: Collaterals;
    }
  ) => {
    setLoading(true);
    try {
      const withSetsNumericTraits: Tuple<number, 6> =
        options?.numericTraits || [50, 50, 50, 50, 50, 50];
      const equippedWearables: Tuple<number, 16> = options?.wearables || [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ];
      // Returns an array of the metadetails of every Aavegotchi owned by the user
      const res = await contract.previewSideAavegotchi(
        options?.haunt || "1",
        options?.collateral
          ? collateralToAddress[options.collateral]
          : collateralToAddress["aWETH"],
        withSetsNumericTraits,
        equippedWearables
      );
      setLoading(false);
      setPreviewGotchiSideviews(res);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const setRPC = () => {
    setCustomRPC(rpcInput);
  }

  // On init
  useEffect(() => {
    connectToNetwork(window.ethereum, customRPC);
  }, [customRPC]);

  // Once Aavegotchis have fetched, get the first Aavegotchis sideviews + Preview gotchi sidviews
  useEffect(() => {
    if (diamondContract) {
      getPreviewAavegotchiSideview(diamondContract, {
        haunt: traits.haunt,
        collateral: traits.collateral,
        wearables: [
          wearables.body,
          wearables.face,
          wearables.eyes,
          wearables.head,
          wearables.handLeft,
          wearables.handRight,
          wearables.pet,
          wearables.background,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
        ],
        numericTraits: [50, 50, 50, 50, traits.eyeShape, traits.eyeColor],
      });
    }
  }, [diamondContract, traits, wearables]);

  return (
    <div className="App">
      <div className={`loader-container ${loading ? "active" : ""}`}>
        <Loader />
      </div>
      <div className="container">
        <label htmlFor="rpc">RPC URL:</label>
        <input name="rpc" value={rpcInput} onChange={(e) => setRPCInput(e.target.value)}></input>
        <button onClick={setRPC}>Set RPC</button>
      </div>
      {previewGotchiSideviews && (
        <div className="sideviews-container">
          <img
            src={convertInlineSVGToBlobURL(previewGotchiSideviews[0])}
            alt="Front"
            width="25%"
          />
          <img
            src={convertInlineSVGToBlobURL(previewGotchiSideviews[1])}
            alt="Left"
            width="25%"
          />
          <img
            src={convertInlineSVGToBlobURL(previewGotchiSideviews[2])}
            alt="Right"
            width="25%"
          />
          <img
            src={convertInlineSVGToBlobURL(previewGotchiSideviews[3])}
            alt="Back"
            width="25%"
          />
        </div>
      )}
      <div className="container">
        <h2>Traits</h2>
        {/* Haunt input */}
        <label htmlFor="haunt">Haunt:</label>
        <select
          name="haunt"
          onChange={(e) => {
            const value = e.target.value as "1" | "2";
            setTraits((prevState) => {
              return {
                ...prevState,
                haunt: value,
              };
            });
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
            setTraits((prevState) => {
              return {
                ...prevState,
                collateral: value,
              };
            });
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
            const value = e.target.value;
            setTraits((prevState) => {
              return {
                ...prevState,
                eyeShape: Number(value),
              };
            });
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
            const value = e.target.value;
            setTraits((prevState) => {
              return {
                ...prevState,
                eyeColor: Number(value),
              };
            });
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
                value={wearables[position]}
                onChange={(e) =>
                  setWearables((prevState) => {
                    return {
                      ...prevState,
                      [position]: e,
                    };
                  })
                }
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
