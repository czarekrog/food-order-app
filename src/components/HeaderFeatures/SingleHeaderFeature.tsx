import { Link } from "react-router-dom";

type Props = {
  bgColor?: string;
  textColor?: string;
  imageUrl: string;
  title: string;
  subtitle: string;
  ctaTitle: string;
  cta: () => void;
};

export const SingleHeaderFeature = ({
  bgColor = "bg-white",
  textColor = "text-black",
  title,
  subtitle,
  imageUrl,
  ctaTitle,
  cta,
}: Props) => {
  return (
    <div className="flex basis-1/3 rounded-xl h-48 overflow-hidden shadow-lg min-w-[400px]">
      <div className={`flex flex-col basis-3/5 p-4 justify-between ${bgColor}`}>
        <div className={`${textColor}`}>
          <span className="block text-2xl">{title}</span>
          <span className="block ">{subtitle}</span>
        </div>
        <button
          onClick={cta}
          className="w-fit px-2 rounded-md font-medium bg-white/[0.9] hover:bg-white"
        >
          {ctaTitle}
        </button>
      </div>
      <div className="basis-2/5">
        <img src={imageUrl} alt="" className="h-full object-cover" />
      </div>
    </div>
  );
};
