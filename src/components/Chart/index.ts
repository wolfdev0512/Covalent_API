import dynamic from "next/dynamic";

export const BarChart = dynamic(() => import("./BarChart/BarChart"), {
  ssr: false,
});
