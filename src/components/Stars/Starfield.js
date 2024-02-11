import { useEffect } from "react";
import { StarFieldCanvas } from "./StarfieldCanvas";

const Starfield = () => {
  useEffect(() => {
    var canvasId = "space"; // required
    var followMouse = false; // optional, default false
    var color = { r: 255, g: 255, b: 255 }; // optional, default 255, 255, 255
    var glow = false; // optional, default false
    var minV = 1; // optional, default 2
    var maxV = 2; // optional, default 5
    var numStars = 250; // optional, default 400
    var trails = true; // optional, default false
    var starfield = new StarFieldCanvas.StarField(canvasId, {
      // followContext: followContext
      followMouse: followMouse,
      color: color,
      glow: glow,
      minV: minV,
      maxV: maxV,
      numStars: numStars,
      trails: trails,
    });

    // Make stars happen
    starfield.start();
    return () => {
      // Cleanup logic (if needed)
    };
  }, []);
  return (
    <div className="h-full w-full">
      <canvas id="space" className="h-full w-full"></canvas>
    </div>
  );
};

export default Starfield;
