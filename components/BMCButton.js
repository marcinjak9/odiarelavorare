import Image from "next/image";

export default function BMCButton() {
  return (
    <a href="https://www.buymeacoffee.com/odiarelavorare" target="_blank" rel="noreferrer">
      <Image
        src="https://cdn.buymeacoffee.com/buttons/v2/default-red.png"
        alt="Buy Me A Coffee"
        height="60px"
        width="217"
        layout="fixed"
        style={{ height: "60px !important", width: "217px !important" }}
      />
    </a>
  );
}
