import { Image } from "@react-three/drei";

import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";

import { Mesh } from "three";
import { push } from "../../../../app/nfts/viewedNftsSlice";
import { useAppDispatch } from "../../../../app/hooks";

const scales = {
  x: 2,
  y: 1,
  z: 1,
};
const offsets = {
  x: 0,
  y: 2,
  z: 0,
};

// Need to get type of NFT from Alchemy
export default function NFT(props: { nftData: any; index: number }) {
  const { nftData, index } = props;

  const position = {
    x: Math.cos(index) * scales.x + offsets.x,
    y: -index * scales.y + offsets.y,
    z: Math.sin(index) * scales.z + offsets.z,
  };

  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  const ref = useRef<Mesh>(null!);

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
    return () => {
      document.body.style.cursor = "auto";
    };
  }, [hovered]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (active) {
      if (ref.current && ref.current.parent) {
        gsap.to(ref.current?.position, {
          x: 0,
          y: -ref.current.parent.position.y,
          z: 3,
        });
        dispatch(push(nftData.image.pngUrl));
      }
    } else {
      gsap.to(ref.current?.position, {
        x: position.x,
        y: position.y,
        z: position.z,
      });
    }
  }, [
    active,
    position.x,
    position.y,
    position.z,
    dispatch,
    nftData.image.pngUrl,
  ]);

  return nftData.image.pngUrl ? (
    <Image
      ref={ref}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setActive(!active)}
      url={nftData.image.pngUrl}
      position={[position.x, position.y, position.z]}
    />
  ) : (
    <group></group>
  );
}
