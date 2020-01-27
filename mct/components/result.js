import React, {useState, useEffect} from 'react'
const Result = ({results}) => {
    let [bg, setBg] = useState("");
  
    useEffect(() => {
      setBackground()
    });
  
    const setBackground = () => {
      let min = results.target - results.variant;
      let max = parseInt(results.target) + parseInt(results.variant);
  
      if(results.total >= min && results.total <= max) {
        setBg("bg-green-500");
      } else if ( results.total < min){
        setBg("bg-blue-500");
      } else if ( results.total > max) {
        setBg("bg-red-500")
      }
    }
    
    return (
      <div className={bg + " w-1/4 p-4 text-white"}>
        <h2 className="text-3xl font-bold">{results.total}
          <div className="flex text-sm p-4">
            <div className="w-1/3">{results.target - results.variant}</div>
            <div className="w-1/3 font-bold">{results.target}</div>
            <div className="w-1/3">{parseInt(results.target) + parseInt(results.variant)}</div>
          </div>
        </h2>
        <h3 className="text-xl">{results.label}</h3>
      </div>
    )
  }

export default Result