import Image from "next/image";
import MainImage from "../../assets/images/Image.png";
import IconPlay from "../../assets/icons/playButton.svg";

export const AboutImage = () => {
  return (
    <div>
      <Image src={MainImage} alt="dish" width={758} loading="lazy" />

      <div>
        <IconPlay />
      </div>
    </div>
  );
}