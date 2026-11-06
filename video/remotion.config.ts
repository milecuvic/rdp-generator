import { Config } from "@remotion/cli/config";

Config.setVideoImageFormat("jpeg");
Config.setOverwriteOutput(true);
// Chromium headless shell works fine in CI/containers.
Config.setChromiumHeadlessMode(true);
Config.setChromiumOpenGlRenderer("swangle");
