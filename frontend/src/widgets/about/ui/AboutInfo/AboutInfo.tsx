import { IInfo, Info } from "@/entities/information";
import { Button } from "@/shared/ui";

interface IAboutInfoProps {
  info: IInfo;
}

export const AboutInfo = ({ info }: IAboutInfoProps) => {
  return (
    <div>
      <Info info={info} />
      
      <Button>Explore our story</Button>
    </div>
  );
};
