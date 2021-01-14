import StateVariablesBox from "../../components/StateVariables";
import ButtonContainer from "../../components/ButtonContainer";
import Button from "../../components/Button";
import React from "react";

const Rule30Controls = ({variables, speedUp, slowDown, reset, startStop, isStarted}) => {

    const startStopLabel = isStarted ? 'Stop' : 'Start';

    return (
        <div><StateVariablesBox variables={variables}/>
            <ButtonContainer>
                <Button onClick={() => startStop()} id="startStopButton" label={startStopLabel}>
                </Button>
                <Button onClick={() => speedUp()} id="speedUpButton" label="Speed Up">
                </Button>
                <Button onClick={() => slowDown()} id="slowDownButton" label="Slow Down">
                </Button>
                <Button onClick={() => reset()} id="resetUpButton" label="Reset">
                </Button>
            </ButtonContainer>
        </div>
    )
}

export default Rule30Controls;