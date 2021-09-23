import { ethers } from "ethers";
import { useState, useEffect } from "react";
import { Loader } from "../../components/loader";
import { convertInlineSVGToBlobURL } from "../../helpers";
import { Tuple } from "../../types";

interface Props {
  contract?: ethers.Contract;
}

const GetAavegotchiSideSvgsPage = ({ contract }: Props) => {
  const [loading, setLoading] = useState(false);
  const [gotchiSideSvg, setGotchiSideSvg] = useState<Tuple<string, 4>>();
  const [tokenId, setTokenId] = useState<string>("2601");

  const getAavegotchiSvg = async (
    contract: ethers.Contract,
    tokenId: string,
  ) => {
    setLoading(true);
    try {
      const res = await contract.getAavegotchiSideSvgs(tokenId);
      setLoading(false);
      setGotchiSideSvg(res);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  // Once Aavegotchis have fetched, get the first Aavegotchis sideviews + Preview gotchi sidviews
  useEffect(() => {
    if (contract) {
      getAavegotchiSvg(contract, tokenId);
    }
  }, [contract, tokenId]);

  return (
    <>
      <div className={`loader-container ${loading ? "active" : ""}`}>
        <Loader />
      </div>
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
      <div className="modifier-panel">
        <div className="container">
          <h2>Token ID</h2>
          {/* tokenId input */}
          <label htmlFor="token-id">Token ID:</label>
          <input value={tokenId} onChange={(e) => setTokenId(e.target.value)} />
          </div>
      </div>
    </>
  );
};

export default GetAavegotchiSideSvgsPage;
