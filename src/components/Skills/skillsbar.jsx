const SkillsBar = ({ value , color}) => {

    return (
        <div className=" h-full rounded-full" style={{ width: value+"%", maxWidth:"100%", backgroundColor: color}}>
          {" "}
        </div>
    );
  };
  export default SkillsBar;