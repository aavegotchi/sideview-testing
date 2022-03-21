import { ethers } from "ethers";
import { useState, useEffect } from "react";
import { Loader } from "../../components/loader";
import { convertInlineSVGToBlobURL, animationStyles } from "../../helpers";
import { Tuple } from "../../types";

interface Props {
  contract?: ethers.Contract;
}

const GetAavegotchiSideSvgsPage = ({ contract }: Props) => {
  const [loading, setLoading] = useState(false);
  const [gotchiSideSvg, setGotchiSideSvg] = useState<Tuple<string, 4>>();
  const [tokenId, setTokenId] = useState<string>("2601");
  const [animate, setAnimate] = useState(false);

  const getAavegotchiSvg = async (
    contract: ethers.Contract,
    tokenId: string
  ) => {
    setLoading(true);
    try {
      const res = await contract.getAavegotchiSideSvgs(tokenId);
      setLoading(false);
      setGotchiSideSvg(
        res.map((svg: string) => {
          console.log(animate);
          if (!animate) return svg;
          return svg.split("<style>").join(`<style>${animationStyles}`);
        })
      );
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    if (contract) getAavegotchiSvg(contract, tokenId);
  }, [contract, tokenId, animate]);

  return (
    <>
      <div className={`loader-container ${loading ? "active" : ""}`}>
        <Loader />
      </div>
      <div className="display-container">
        {!loading && contract && (
          <button
            className="refresh-button"
            onClick={() => getAavegotchiSvg(contract, tokenId)}
          >
            Refresh
          </button>
        )}
        {gotchiSideSvg ? (
          <div className="sideviews-container">
            <img
              src={convertInlineSVGToBlobURL(gotchiSideSvg[0])}
              alt="Front"
              width="100%"
            />
            <img
              src={convertInlineSVGToBlobURL(gotchiSideSvg[1])}
              alt="Left"
              width="100%"
            />
            <img
              src={convertInlineSVGToBlobURL(gotchiSideSvg[2])}
              alt="Right"
              width="100%"
            />
            <img
              src={convertInlineSVGToBlobURL(gotchiSideSvg[3])}
              alt="Back"
              width="100%"
            />
          </div>
        ) : (
          <div className="img-loading-container" />
        )}
      </div>
      <div className="modifier-panel">
        <div className="container">
          <h2>Token ID</h2>
          {/* tokenId input */}
          <label htmlFor="token-id">Token ID:</label>
          <input value={tokenId} onChange={e => setTokenId(e.target.value)} />
          <div style={{ display: "flex" }}>
            <input
              type="checkbox"
              value={Number(animate)}
              onChange={e => {
                setAnimate(!animate);
              }}
            />
            <div>Animate</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetAavegotchiSideSvgsPage;
