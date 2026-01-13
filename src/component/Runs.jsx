import { useState } from "react";

const Runs = () => {
    // SetRuns
    const [runs,setRuns] = useState(0);
    const [fours,setFours] = useState(0)
    const [sixes,setSixes] = useState(0)
    const [noball,setNoball] = useState(0)
    const [wide,setWide] = useState(0)
    // Event handler
    const singleRun = () => {
        const updateRuns = runs + 1
        setRuns(updateRuns)
    }

    const fourRuns = () => {
        const updateRuns = runs + 4 
        const updateFour = fours + 1
        setFours(updateFour)
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
        const updatenoBall = noball + 1
        setNoball(updatenoBall)
        setRuns(updateRuns)
    }

    const wideBall = () => {
        const updateRuns = runs + 1
        const updateWide = wide + 1
        setWide(updateWide)
        setRuns(updateRuns)
    }
    
    // Style
    const runsStyle = {
        border : '1px solid orange',
        padding : '20px',
        color : 'orange',
        width : '80%',
        borderRadius : '20px',
        margin: '0 auto',
        maxWidth: '1200px'
    }
    // Button style
    const btnStyle = {
        display : 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        justifyContent: 'center'

    }
 return (
    <div style={runsStyle}>
        <h1>Runs : {runs}</h1>
        <h3>Fours : {fours}</h3>
        <h3>Sixes : {sixes}</h3>
        <h3>NOBall : {noball}</h3>
        <h3>Wide : {wide}</h3>
        {
            runs >= 50 && <h2>Half Century</h2>
        }

        {
            runs >= 100 && <h1>Century</h1>
        }
       <div style={btnStyle}>
         <button onClick={singleRun}>Single Runs</button>
        <button onClick={fourRuns}>Four Runs</button>
        <button onClick={sixRuns}>Six Runs</button>
        <button onClick={noBall}>No Ball</button>
        <button onClick={wideBall}>Wide Ball</button>
       </div>
    </div>
 )
};

export default Runs;
