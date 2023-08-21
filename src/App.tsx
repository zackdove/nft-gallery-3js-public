import React from "react";
import "./App.css";
import { ThreeScene } from "./components/ThreeScene/ThreeScene";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Button, Web3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { arbitrum, mainnet, polygon } from "wagmi/chains";
import { HistoryViewer } from "./components/HistoryViewer/HistoryViewer";
import { Provider } from "react-redux";
import store from "./app/store";
const chains = [arbitrum, mainnet, polygon];
const projectId = "0685a905147ae9147cafb8f4f462c8ac";

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);

function App() {
  return (
    <>
      <Provider store={store}>
        <WagmiConfig config={wagmiConfig}>
          <div>
            <ThreeScene />
            <HistoryViewer />
            <Web3Button />
          </div>
        </WagmiConfig>

        <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
      </Provider>
    </>
  );
}

export default App;
