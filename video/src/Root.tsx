import { Composition } from "remotion";
import { Promo, PROMO_DURATION, FPS } from "./Promo";

export const Root = () => {
  return (
    <Composition
      id="Promo"
      component={Promo}
      durationInFrames={PROMO_DURATION}
      fps={FPS}
      width={1920}
      height={1080}
    />
  );
};
