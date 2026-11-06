import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { Background, SceneFade } from "./ui";
import {
  ArchitectureScene,
  FeaturesScene,
  IntroScene,
  OutroScene,
  ProblemScene,
  QuickstartScene,
} from "./scenes";

export const FPS = 30;

const scenes: { component: React.FC; seconds: number }[] = [
  { component: IntroScene, seconds: 5 },
  { component: ProblemScene, seconds: 5.5 },
  { component: ArchitectureScene, seconds: 8 },
  { component: FeaturesScene, seconds: 7 },
  { component: QuickstartScene, seconds: 8 },
  { component: OutroScene, seconds: 5.5 },
];

export const PROMO_DURATION = scenes.reduce(
  (acc, s) => acc + Math.round(s.seconds * FPS),
  0
);

export const Promo: React.FC = () => {
  let from = 0;
  return (
    <AbsoluteFill>
      <Background />
      {scenes.map(({ component: Scene, seconds }, i) => {
        const len = Math.round(seconds * FPS);
        const start = from;
        from += len;
        return (
          <Sequence key={i} from={start} durationInFrames={len}>
            <SceneFade durationInFrames={len}>
              <Scene />
            </SceneFade>
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};
