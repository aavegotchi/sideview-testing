import { ethers } from "ethers";
import { useState, useEffect, useCallback } from "react";
import { Loader } from "../../components/loader";
import { Tuple } from "../../types";
import { Collaterals, collateralToAddress } from "../../vars";
import { convertInlineSVGToBlobURL } from "../../helpers";
import { PreviewModifierPanel } from "../../components/previewModifierPanel";

interface Traits {
  haunt: "1" | "2";
  collateral: Collaterals;
  eyeShape: number;
  eyeColor: number;
}

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

interface Props {
  contract?: ethers.Contract;
}

const PreviewAavegotchiPage = ({ contract }: Props) => {
  const [loading, setLoading] = useState(false);
  const [previewGotchi, setPreviewGotchi] = useState<string>();
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

  const getPreviewAavegotchi = async (
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
      const res = await contract.previewAavegotchi(
        options?.haunt || "1",
        options?.collateral
          ? collateralToAddress[options.collateral]
          : collateralToAddress["aWETH"],
        withSetsNumericTraits,
        equippedWearables
      );
      setLoading(false);
      setPreviewGotchi(res);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const handleFetch = useCallback(
    (
      gotchiTraits: Traits,
      equipped: Wearables,
      diamondContact?: ethers.Contract
    ) => {
      if (diamondContact) {
        getPreviewAavegotchi(diamondContact, {
          haunt: gotchiTraits.haunt,
          collateral: gotchiTraits.collateral,
          wearables: [
            equipped.body,
            equipped.face,
            equipped.eyes,
            equipped.head,
            equipped.handLeft,
            equipped.handRight,
            equipped.pet,
            equipped.background,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
          ],
          numericTraits: [
            50,
            50,
            50,
            50,
            gotchiTraits.eyeShape,
            gotchiTraits.eyeColor,
          ],
        });
      }
    },
    []
  );

  useEffect(() => {
    handleFetch(traits, wearables, contract);
  }, [contract, traits, wearables, handleFetch]);

  return (
    <>
      <div className={`loader-container ${loading ? "active" : ""}`}>
        <Loader />
      </div>
      <div className="display-container">
        {!loading && (
          <button
            className="refresh-button"
            onClick={() => handleFetch(traits, wearables, contract)}
          >
            Refresh
          </button>
        )}
        {previewGotchi ? (
          <div className="sideviews-container">
            <img
              src={convertInlineSVGToBlobURL(previewGotchi)}
              alt="Front"
              width="100%"
            />
          </div>
        ) : (
          <div className="img-loading-container" />
        )}
      </div>
      <PreviewModifierPanel
        setTrait={({ trait, value }) =>
          setTraits({
            ...traits,
            [trait]: value,
          })
        }
        setWearable={({ slot, value }) =>
          setWearables({
            ...wearables,
            [slot]: value,
          })
        }
        equipped={wearables}
      />
    </>
  );
};

export default PreviewAavegotchiPage;
