import { FC, SVGProps } from "react";

export interface IFeature {
  id: number;
  icon: FC<SVGProps<SVGSVGElement>>;
  title: string;
  body: string;
}