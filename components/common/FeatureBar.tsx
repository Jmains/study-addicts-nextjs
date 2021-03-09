import cn from "classnames";
import { ReactNode, FC } from "react";

interface FeatureBarProps {
  className?: string;
  title: string;
  description?: string;
  hide?: boolean;
  action?: ReactNode;
}

const FeatureBar: FC<FeatureBarProps> = ({ title, description, className, action, hide }) => {
  const rootClassName = cn(
    "text-center p-4 mt-24 bg-primary bg-lime-200 text-sm flex-row justify-center items-center font-medium fixed top-0 left-0 right-0 w-full max-w-sm mx-auto rounded-lg z-50 transition-all duration-300 ease-out md:flex md:text-left",
    {
      transform: true,
      "translate-y-0 opacity-100": !hide,
      "translate-y-full opacity-0": hide,
    },
    className
  );
  return (
    <div className={rootClassName}>
      <span className="block md:inline text-lime-900">{title}</span>
      <span className="block mb-6 md:inline md:mb-0 md:ml-2 text-lime-700">{description}</span>
      {action && action}
    </div>
  );
};

export default FeatureBar;
