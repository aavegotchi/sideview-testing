import { useState } from "react";
import { useEffect } from "react";
import { ethers } from "ethers";
import diamondAbi from "./abis/diamondABI.json";
import { Loader } from "./components/loader";
import "./App.css";
import { Layout } from "./components/layout";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PreviewSideAavegotchiPage from "./pages/previewSideAavegotchi";
import PreviewAavegotchiPage from "./pages/previewAavegotchi";
import GetAavegotchiSvgPage from "./pages/getAavegotchiSvg";
import GetAavegotchiSideSvgsPage from "./pages/getAavegotchiSideSvgs";

const diamondAddress = "0x86935F11C86623deC8a25696E1C19a8659CbF95d";

declare global {
  interface Window {
    ethereum: any;
  }
}

const navigation = [
  {
    title: "previewSideAavegotchi",
    path: "/",
  },
  {
    title: "previewAavegotchi",
    path: "/previewAavegotchi"
  },
  {
    title: "getAavegotchiSvg",
    path: "/getAavegotchiSvg"
  },
  {
    title: "getAavegotchiSideSvgs",
    path: "/getAavegotchiSideSvgs"
  }
]

function App() {
  // IF RUNNING LOCALLY - FIX WITH LOCAL NODE URL
  const [customRPC, setCustomRPC] = useState("");
  const [loading, setLoading] = useState(false);
  const [diamondContract, setDiamondContract] = useState<ethers.Contract>();

  // 1) Get Users address + Contract
  const connectToNetwork = async (eth: any, rpc: string) => {
    try {
      setLoading(true);
      await eth.enable();
      // Construct contract from users provider, the diamond contracts address and ABI

      const provider = rpc
        ? new ethers.providers.JsonRpcProvider(rpc)
        : new ethers.providers.Web3Provider(eth);
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

  // On init
  useEffect(() => {
    connectToNetwork(window.ethereum, customRPC);
  }, [customRPC]);

  return (
    <BrowserRouter>
      <Layout rpc={customRPC} setRpc={setCustomRPC} navigation={navigation}>
        <div className={`loader-container ${loading ? "active" : ""}`}>
          <Loader />
        </div>
        <Switch>
          <Route path="/" exact>
            <PreviewSideAavegotchiPage contract={diamondContract} />
          </Route>
          <Route path="/previewAavegotchi" exact>
            <PreviewAavegotchiPage contract={diamondContract} />
          </Route>
          <Route path="/getAavegotchiSvg">
            <GetAavegotchiSvgPage contract={diamondContract} />
          </Route>
          <Route path="/getAavegotchiSideSvgs">
            <GetAavegotchiSideSvgsPage contract={diamondContract} />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
