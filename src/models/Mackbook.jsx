import { Html, useGLTF } from "@react-three/drei";
import { useRef } from "react";

const Mackbook = ({ withIframe, url, ...rest }) => {
  const mackbookMesh = useRef();
  const computer = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );
  computer.nodes.AppleLogo000.rotation.y = Math.PI;
  return (
    <primitive object={computer.scene} {...rest} ref={mackbookMesh}>
      {withIframe && (
        <>
          <Html
            transform
            wrapperClass="htmlScreen"
            distanceFactor={1.17}
            position={[0, 1.56, -1.4]}
            rotation-x={-0.256}
            occlude={[mackbookMesh]}
          >
            <iframe src={url} />
          </Html>
        </>
      )}
    </primitive>
  );
};

export default Mackbook;
