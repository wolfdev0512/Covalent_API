import dynamic from "next/dynamic";

export const Hero = dynamic(() => import("./Hero/Hero"), {
  ssr: false,
});
