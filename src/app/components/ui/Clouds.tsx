import React, { useEffect, useState } from "react";
import { MouseParallax } from "react-just-parallax";
import Circles from "./Circles";
import cloud1 from "../../assets/cloud1.png";
import cloud2 from "../../assets/cloud2.png";
import cloud3 from "../../assets/cloud3.png";
import cloud4 from "../../assets/cloud4.png";
import cloud5 from "../../assets/cloud5.png";
import Image from "next/image";

interface BackgroundCloudsProps {
  parallaxRef: React.RefObject<HTMLDivElement | null>;
}

export default function Clouds({ parallaxRef }: BackgroundCloudsProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="absolute top-1/2 left-1/2 w-full max-w-[78rem] -translate-x-1/2 -translate-y-1/2 aspect-square">
      <Circles />

      <MouseParallax strength={0.1} parallaxContainerRef={parallaxRef}>
        {/* Cloud 1 - 左下 */}
        <div className="absolute bottom-[7%] left-[5%] sm:left-[-5%] origin-bottom transition-transform duration-500 ease-out">
          <Image
            src={cloud1.src}
            alt="cloud 1"
            className={`w-48 h-48 sm:w-72 sm:h-72 object-contain mx-auto ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            width={800}
            height={800}
          />
        </div>

        {/* Cloud 2 - 右上 */}
        <div className="absolute bottom-[85%] sm:bottom-[65%] right-[10%] sm:right-[18%] origin-bottom transition-transform duration-500 ease-out">
          <Image
            src={cloud2.src}
            alt="cloud 2"
            className={`w-48 sm:w-72 object-contain mx-auto ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            width={800}
            height={800}
          />
        </div>

        {/* Cloud 3 - 右下 */}
        <div className="absolute bottom-[5%] right-[2%] sm:-right-[2%] origin-bottom transition-transform duration-500 ease-out">
          <Image
            src={cloud3.src}
            alt="cloud 3"
            className={`w-40 sm:w-64 object-contain mx-auto ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            width={800}
            height={800}
          />
        </div>

        {/* Cloud 4 - 左上 */}
        <div className="absolute bottom-[45%] left-[2%] sm:left-[-5%] origin-bottom transition-transform duration-500 ease-out">
          <Image
            src={cloud4.src}
            alt="cloud 4"
            className={`w-40 sm:w-64 object-contain mx-auto ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            width={800}
            height={800}
          />
        </div>

        {/* Cloud 5 - 右中央 */}
        <div className="absolute bottom-[25%] right-[5%] sm:right-[7%] origin-bottom transition-transform duration-500 ease-out">
          <Image
            src={cloud5.src}
            alt="cloud 5"
            className={`w-40 sm:w-64 object-contain mx-auto ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            width={800}
            height={800}
          />
        </div>
      </MouseParallax>
    </div>
  );
}