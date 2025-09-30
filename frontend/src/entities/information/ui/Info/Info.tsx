import { Button } from "@/shared/ui";
import type { IInfo } from "../models/info.interface";

interface IInfoProps {
  info: IInfo;
}
  
export const Info = ({ info }: IInfoProps) => {
  return (
    <div>
      <span>{info.category}</span>

      <div>
        <h2>{info.title}</h2>
        <p>{info.body}</p>
      </div>

      <Button>{info.button}</Button>
    </div>
  );
}