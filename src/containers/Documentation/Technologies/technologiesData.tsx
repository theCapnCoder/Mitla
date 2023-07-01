import ReactImg from "../assets/images/react.png";
import MaterialImg from "../assets/images/materialUi.png";
import { TSIcon } from "../assets/Icons/TSIcon";

export type Technologies = {
  title: string;
  img: string | React.ReactNode;
};

export const TechnologiesData: Technologies[] = [
  {
    title: "Material UI",
    img: MaterialImg,
  },
  {
    title: "TypeScript",
    img: <TSIcon sx={{ width: 80, height: 80 }} />,
  },
  {
    title: "React",
    img: ReactImg,
  },
];
