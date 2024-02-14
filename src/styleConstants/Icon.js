import React from "react";
import { createIcon } from "native-base";
import { G, Path } from "react-native-svg";

export const DriveFrowardArrowIcon = createIcon({
  viewBox: "0 0 48 48",
  path: (
    <G>
      <Path
        d="m24 40-2.1-2.15L34.25 25.5H8v-3h26.25L21.9 10.15 24 8l16 16Z"
        stroke="currentColor"
      />
    </G>
  ),
});

export const DriveBackArrowIcon = createIcon({
    viewBox: "0 0 48 48",
    path: (
      <G>
        <Path
          d="M24 40 8 24 24 8l2.1 2.1-12.4 12.4H40v3H13.7l12.4 12.4Z"
          stroke="currentColor"
        />
      </G>
    ),
  });
  
export const ExpandCircleDown = createIcon({
  viewBox: "0 0 20 20",
  path: (
    <G>
      <Path
        d="M10,12.6L6.63,9.23l1.06-1.06L10,10.48l2.31-2.31l1.06,1.06L10,12.6z M18,10c0,4.42-3.58,8-8,8s-8-3.58-8-8s3.58-8,8-8 S18,5.58,18,10z M16.5,10c0-3.59-2.91-6.5-6.5-6.5S3.5,6.41,3.5,10s2.91,6.5,6.5,6.5S16.5,13.59,16.5,10z"
        stroke="currentColor"
      />
    </G>
  ),
});