import { Canvas } from "@react-three/fiber";

import { Wrapper } from "./ThreeScene.styled";
import NFTs from "./Components/NFTs/NFTs";
import { Scroll, ScrollControls } from "@react-three/drei";

const ThreeScene = () => {
  return (
    <Wrapper>
      <Canvas>
        <ScrollControls pages={15}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />

          <Scroll>
            <NFTs />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </Wrapper>
  );
};

export { ThreeScene };
