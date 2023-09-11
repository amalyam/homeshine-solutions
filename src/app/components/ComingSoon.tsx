import Image from "next/image";
import MossHand from "/src/images/moss-hand-2.jpg";
import { calculateSizeAdjustValues } from "next/dist/server/font-utils";

export default function ComingSoon() {
  return (
    <div
      style={{
        flexDirection: "column",
        height: "calc(100vh - 84px)",
        background: `no-repeat top/cover url(${MossHand.src})`,
      }}
    ></div>
  );
}
