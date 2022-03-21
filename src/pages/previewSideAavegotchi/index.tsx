import { ethers } from "ethers";
import { useState, useEffect, useCallback } from "react";
import { Loader } from "../../components/loader";
import { Tuple } from "../../types";
import { Collaterals, collateralToAddress } from "../../vars";
import { convertInlineSVGToBlobURL, animationStyles } from "../../helpers";
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

const PreviewSideAavegotchiPage = ({ contract }: Props) => {
  const [loading, setLoading] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [previewGotchiSideviews, setPreviewGotchiSideviews] = useState<
    Tuple<string, 4>
  >();
  const [traits, setTraits] = useState<Traits>({
    haunt: "1",
    collateral: "aAAVE",
    eyeShape: 0,
    eyeColor: 0
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
      console.log(res, res[1]);
      setPreviewGotchiSideviews(
        res.map((svg: string) => {
          if (!animate) return svg;
          return svg.split("<style>").join(`<style>${animationStyles}`);
        })
      );
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
        getPreviewAavegotchiSideview(diamondContact, {
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
            0
          ],
          numericTraits: [
            50,
            50,
            50,
            50,
            gotchiTraits.eyeShape,
            gotchiTraits.eyeColor
          ]
        });
      }
    },
    []
  );

  useEffect(() => {
    // handleFetch(traits, wearables, contract);
    if (contract) {
      getPreviewAavegotchiSideview(contract, {
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
          0
        ],
        numericTraits: [50, 50, 50, 50, traits.eyeShape, traits.eyeColor]
      });
    }
  }, [contract, traits, wearables, handleFetch, animate]);

  return (
    <>
      <div className={`loader-container ${loading ? "active" : ""}`}>
        <Loader />
      </div>
      <div className="display-container">
        {!loading && contract && (
          <button
            className="refresh-button"
            onClick={() =>
              getPreviewAavegotchiSideview(contract, {
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
                  0
                ],
                numericTraits: [
                  50,
                  50,
                  50,
                  50,
                  traits.eyeShape,
                  traits.eyeColor
                ]
              })
            }
          >
            Refresh
          </button>
        )}
        {previewGotchiSideviews ? (
          <div className="sideviews-container">
            <img
              src={convertInlineSVGToBlobURL(previewGotchiSideviews[0])}
              alt="Front"
              width="100%"
            />
            <img
              src={convertInlineSVGToBlobURL(previewGotchiSideviews[1])}
              alt="Left"
              width="100%"
            />
            <img
              src={convertInlineSVGToBlobURL(previewGotchiSideviews[2])}
              alt="Right"
              width="100%"
            />
            <img
              src={convertInlineSVGToBlobURL(previewGotchiSideviews[3])}
              alt="Back"
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
        animate={animate}
        setAnimate={setAnimate}
      />
    </>
  );
};

export default PreviewSideAavegotchiPage;
