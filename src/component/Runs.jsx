import { useState } from "react";

const Runs = () => {
    // SetRuns
    const [runs,setRuns] = useState(0);
    const [sixes,setSixes] = useState(0)
    // Event handler
    const singleRun = () => {
        const updateRuns = runs + 1
        setRuns(updateRuns)
    }

    const fourRuns = () => {
        const updateRuns = runs + 4 
        setRuns (updateRuns)
    }

    const sixRuns = () => {
        const updateRuns = runs + 6
        const updateSixes = sixes + 1
        setSixes(updateSixes) 
        setRuns(updateRuns)
    }

    const noBall = () => {
        const updateRuns = runs + 1
        setRuns(updateRuns)
    }
    
    // Style
    const runsStyle = {
        border : '1px solid orange',
        padding : '20px',
        color : 'orange',
        width : '500px'
    }
 return (
    <div style={runsStyle}>
        <h1>Runs : {runs}</h1>
        <h3>Sixes : {sixes}</h3>
        {
            runs >= 50 && <h2>Half Century</h2>
        }

        {
            runs >= 100 && <h1>Century</h1>
        }
        <button onClick={singleRun}>Single Runs</button>
        <button onClick={fourRuns}>Four Runs</button>
        <button onClick={sixRuns}>Six Runs</button>
        <button onClick={noBall}>No Ball</button>
    </div>
 )
};

export default Runs;
