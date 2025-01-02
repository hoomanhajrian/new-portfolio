import Card from '@material-ui/core/Card';
import { CardHeader } from '@mui/material';
import { Input } from "@material-ui/core";
import { Button } from "antd";
import { evaluate } from "mathjs";




const Calculator = () => {
    const calcButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const calcActions = ['+', '-', ')', '/', '*', '(', '='];

    const clear = () => {
        const input = document.getElementById("calcInput");
        input.value = '';
    };

    const calculate = (event) => {
        const input = document.getElementById("calcInput");
        const userInput = event.target.value;

        if (userInput === undefined) {

        }
        else {
            if (userInput === "=") {
                input.value = "Result: " + evaluate(`${input.value}`);
            }
            else {
                input.value += userInput;
            };
        };
    };

    return (
        <Card className="calculator-card">
            <CardHeader
                title="Calculator"
            />
            <div className="calc-input-container">
                <Input id="calcInput" className="calculator-input" />
                <Button onClick={clear} style={{ backgroundColor: "red", color: "white", fontWeight: "bold" }}>C</Button>
            </div>
            <div className="calculator-numbers">
                {calcButtons.map(button => (
                    <Button className="calculator-button" onClick={calculate} type="primary" key={button} id={`button${button}`} value={button}>
                        {button}
                    </Button>
                ))}
            </div>
            <div className="calc-actions">
                {calcActions.map(button => (
                    <Button className="calculator-action-button" onClick={calculate} type="primary" key={button} value={button}>
                        {button}
                    </Button>
                ))}
            </div>
        </Card>
    )
};

export default Calculator;