import { ethers } from "ethers";
import { useState, useEffect } from "react";
import { Loader } from "../../components/loader";
import { convertInlineSVGToBlobURL } from "../../helpers";

interface Props {
  contract?: ethers.Contract;
}

const GetAavegotchiSvgPage = ({ contract }: Props) => {
  const [loading, setLoading] = useState(false);
  const [gotchiSvg, setGotchiSvg] = useState<string>();
  const [tokenId, setTokenId] = useState<string>("2601");

  const getAavegotchiSvg = async (
    contract: ethers.Contract,
    tokenId: string,
  ) => {
    setLoading(true);
    try {
      const res = await contract.getAavegotchiSvg(tokenId);
      setLoading(false);
      setGotchiSvg(res);
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
      {gotchiSvg ? (
        <div className="sideviews-container">
          <img
            src={convertInlineSVGToBlobURL(gotchiSvg)}
            alt="Front"
            height="100%"
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

export default GetAavegotchiSvgPage;
