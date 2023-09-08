import TextBox from "./TextBox";
import MossHand from "/src/images/moss-hand.png";

export default function ComingSoon() {
  return (
    <div
      style={{
        backgroundImage: `url(${MossHand.src})`,
        height: "100vh",
      }}
    >
      <TextBox text={"COMING SOON"} />
    </div>
  );
}
