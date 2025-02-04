import { keyframes } from "@emotion/react";

export const glowAnimation = keyframes`
  0% {
    box-shadow: 0 0 10px rgba(255, 0, 128, 0.6), 0 0 10px rgba(0, 128, 255, 0.4);
  }
  25% {
    box-shadow: 0 0 10px rgba(0, 255, 128, 0.6), 0 0 10px rgba(128, 0, 255, 0.4);
  }
  50% {
    box-shadow: 0 0 10px rgba(255, 128, 0, 0.6), 0 0 10px rgba(0, 255, 255, 0.4);
  }
  75% {
    box-shadow: 0 0 10px rgba(128, 0, 255, 0.6), 0 0 10px rgba(255, 0, 128, 0.4);
  }
  100% {
    box-shadow: 0 0 10px rgba(255, 0, 128, 0.6), 0 0 10px rgba(0, 128, 255, 0.4);
  }
`;

const colorSchemes = [
  "gray", "red", "orange", "yellow",
  "green", "teal", "blue", "cyan",
  "purple", "pink"
];

export const fontSize = {base: "sm", lg: "md"}

// Function to map a string to a color scheme
export function getTagColorScheme(input) {
  let hash = 0;
  
  // Simple hash function to generate a number from the string
  for (let i = 0; i < input.length; i++) {
    hash = input.charCodeAt(i) + ((hash << 5) - hash);
  }

  // Map the hash to one of the color schemes
  const index = Math.abs(hash) % colorSchemes.length;
  return colorSchemes[index];
}