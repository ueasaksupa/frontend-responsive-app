import "./dataRenderer.css";

type DataRendererProps = {
   data: { number: string; title: string; content: string };
   option?: { underlineWhite?: boolean; contentWhite?: boolean; textPurple?: boolean };
};

const DataRenderer = ({ data, option = {} }: DataRendererProps) => {
   return (
      <>
         <div className="data-title">
            <div
               className={`data-title-number${option.underlineWhite ? " white" : ""}${option.textPurple ? " text-purple" : ""}`}
            >
               {data.number}
            </div>
            <div className="data-title-text">{data.title}</div>
         </div>
         <div className={`data-content${option.contentWhite ? " white" : ""}`}>{data.content}</div>
      </>
   );
};

export default DataRenderer;
