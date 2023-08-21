import { useEffect, useState } from "react";
import NFT from "../NFT/NFT";
import { useAccount } from "wagmi";

export default function NFTs() {
  const { address, isConnected } = useAccount();
  const [ownedNfts, setOwnedNfts] = useState<string[]>([]);

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const debug = urlParams.has("debug");

  const apiUrl = debug
    ? String(process.env.REACT_APP_API_URL).replace(
        "vitalik.eth",
        String(process.env.REACT_APP_VIK)
      )
    : String(process.env.REACT_APP_API_URL).replace(
        "vitalik.eth",
        String(address)
      );

  useEffect(() => {
    if (!ownedNfts.length && (isConnected || debug)) {
      fetch(apiUrl)
        .then((response) => response.json())
        .then((jsonData) => {
          // jsonData is parsed json object received from url
          setOwnedNfts(jsonData.ownedNfts);
        })
        .catch((error) => {
          // handle your errors here
          console.error(error);
        });
    }
  });

  return (
    <>
      {ownedNfts.map((nftData, i) => (
        <NFT nftData={nftData} index={i} key={i} />
      ))}
    </>
  );
}
