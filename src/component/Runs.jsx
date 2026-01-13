import { useState } from "react";

const Runs = () => {
    // SetRuns
    const [runs,setRuns] = useState(0);
    
    // Style
    const runsStyle = {
        border : '1px solid orange',
        padding : '20px',
        color : 'orange',
        width : '500px'
    }
 return (
    <div style={runsStyle}>
        <h1>Runs :</h1>
        <button>Single Runs</button>
    </div>
 )
};

export default Runs;
