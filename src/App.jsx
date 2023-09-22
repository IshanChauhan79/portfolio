import {
  Environment,
  Float,
  PresentationControls,
  ContactShadows,
  Text,
} from "@react-three/drei";
import Mackbook from "./models/Mackbook";
import { Suspense } from "react";
import { PORTAL } from "./Constants/iframes";
import { useControls } from "leva";

function App() {
  return (
    <>
      <color args={["#241a1a"]} attach="background" />
      {/* preset for lighting */}
      <Environment preset="city" />

      <Suspense fallback={null}>
        {/* for control over how much user can move */}
        <PresentationControls
          global
          polar={[-0.4, 0.2]}
          rotation={[0.13, 0.1, 0]}
          azimuth={[-1, 2]}
          config={{ mass: 2, tension: 400 }}
          snap={{ mass: 4, tension: 50 }}
        >
          <Float rotationIntensity={0.4}>
            <Mackbook position-y={-1.2} withIframe url={PORTAL} />
            {/* light from mac screen */}
            <rectAreaLight
              width={2.5}
              height={1.65}
              intensity={65}
              color={"#9b5d30"}
              rotation={[-0.1, Math.PI, 0]}
              position={[0, 0.55, -1.15]}
            />
          </Float>
          {/* name in text */}
          <Text
            font="./bangers-v20-latin-regular.woff"
            fontSize={0.7}
            position={[2, 0.5, 0.55]}
            rotation-y={-1.25}
            maxWidth={2}
          >
            Ishan Chauhan
          </Text>
        </PresentationControls>
      </Suspense>
      {/* shadows */}
      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </>
  );
}

export default App;
