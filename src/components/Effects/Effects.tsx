import "./effect.css";

type PlusIconProps = {
   className: string;
};

type LineProps = {
   className: string;
};

export const PlusIcon = ({ className }: PlusIconProps) => {
   return (
      <div className={`plus ${className}`}>
         <div className="p-line-2"></div>
         <div className="p-line-1"></div>
      </div>
   );
};

export const Line = ({ className }: LineProps) => {
   return <div className={`line ${className}`}></div>;
};
