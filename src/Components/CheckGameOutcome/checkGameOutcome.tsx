import React from "react"
import {ICheckGameOutcome} from "./types";

const checkGameOutcome = (props: ICheckGameOutcome) => {
    const {status, winner} = props ?? {}
    if (status === "Next player is: X" || winner === 'X') {
        return (<div className="status-green">{status}</div>)
    }
    if (status === "DRAW!") {
        return (<div className="status-tied">{status}</div>)
    }
    return (<div className="status-red">{status}</div>)
}
export default checkGameOutcome