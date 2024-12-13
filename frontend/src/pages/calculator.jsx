import React, { useEffect, useState } from 'react'
import { evaluate } from 'mathjs';
import "./calculator.css"

const calculator = () => {


    const [expression, setExpression] = useState(""); //this assigns an empty statment everytime someone reloads the site
    const [scientific, setscientific] = useState(false); //this is to switch between the calculator states of Scientific or Normal Calculator
    const [paddingValue, setPaddingValue] = useState({ paddingTop: "0px" });

    //code to evaluate the expression
    const evalExp = () => {
        try {
            const result = evaluate(expression);
            setExpression(result.toString());   //currently using evaluate from Mathjs to eavluate the expression
        }
        catch (err) {
            setExpression("Syntax Error");
        }
    }


    //code to listen to keystrokes, for keyboard based input
    const HandleKeyPress = (event) => {

        const { key } = event;

        if (!isNaN(key) || ["+", "*", "/", "^", "(", ")"].includes(key)) {
            setExpression(expression + key);
        }

        if (key === "Enter") {
            try {
                const result = evaluate(expression);
                setExpression(result.toString());   //currently using evaluate from Mathjs to eavluate the expression
            }
            catch (err) {
                setExpression("Syntax Error");
            }
        }


        if (key === "Backspace") {
            setExpression(expression.slice(0, -1));
        }

        if (key === 'Escape') {
            setExpression("");
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", HandleKeyPress);

        return () => {
            document.removeEventListener("keydown", HandleKeyPress);
        };
    }, [expression]);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 786px)");
    
        const updatePadding = () => {
            if (mediaQuery.matches) { 
                setPaddingValue({ paddingTop: scientific ? "400px" : "0px" });
            } else {
                setPaddingValue({ paddingTop: "0px" }); 
            }
        };
    
        updatePadding(); // Initial check
        mediaQuery.addEventListener("change", updatePadding); 
    
        return () => {
            mediaQuery.removeEventListener("change", updatePadding);
        };
    }, [scientific]);
    




    //things left to do : 1)  a history system.

    return (
        <>
            <div className='backgroundCalculator'>
                <div className='title-bold'>CALCULATOR</div>
                <div className='ellipse-top-left'></div>
                <div className='ellipse-top-right'></div>
                <div className='ellipse-bottom-right'></div>
                <div className='title-small'>CalCulator</div>
                <div className='plus-logo'>+</div>
                <div className='multiply-logo'>X</div>
                <div className='equal-logo'>=</div>
            </div>
            <div className='calcsection' style={paddingValue}>
                {
                    scientific && (
                        <div className='calcbody2'>
                            <div className='additional-btn'>
                                <button onClick={() => setExpression(expression + "sin(")}>Sin</button>
                                <button onClick={() => setExpression(expression + "cos(")}>Cos</button>
                                <button onClick={() => setExpression(expression + "tan(")}>Tan</button>
                                <button onClick={() => setExpression(expression + "cosec(")}>Cose</button>
                                <button onClick={() => setExpression(expression + "sec(")}>Sec</button>
                                <button onClick={() => setExpression(expression + "cot(")}>Cot</button>
                                <button onClick={() => setExpression(expression + Math.E)}>e</button>
                                <button onClick={() => setExpression(expression + "ln(")}>ln</button>
                                <button onClick={() => setExpression(expression + "log2(")}>log2</button>
                                <button onClick={() => setExpression(expression + '^')}> ^ </button>
                            </div>
                        </div>
                    )
                }
                <div className='calcbody'>

                    <div className='output-screen'>
                        <p>{expression ? expression : "Enter"}</p>
                    </div>

                    <div className='btn-container'>

                        <button onClick={() => setscientific(!scientific)}>
                            {scientific ? "NM" : "SM"}
                        </button>

                        <button onClick={() => setExpression(expression + 1)} > 1 </button>
                        <button onClick={() => setExpression(expression + 2)}> 2 </button>
                        <button onClick={() => setExpression(expression + 3)}> 3 </button>

                        <button onClick={() => setExpression(expression + '+')}> + </button>
                        <button onClick={() => setExpression(expression + '(')}> ( </button>

                        <button onClick={() => setExpression(expression + 4)}> 4 </button>
                        <button onClick={() => setExpression(expression + 5)}> 5 </button>
                        <button onClick={() => setExpression(expression + 6)}> 6 </button>

                        <button onClick={() => setExpression(expression + '-')}> - </button>
                        <button onClick={() => setExpression(expression + ')')}> ) </button>

                        <button onClick={() => setExpression(expression + 7)}> 7 </button>
                        <button onClick={() => setExpression(expression + 8)}> 8 </button>
                        <button onClick={() => setExpression(expression + 9)}> 9 </button>

                        <button onClick={() => setExpression(expression + '*')}> * </button>
                        <button onClick={evalExp}> = </button>
                        <button onClick={() => setExpression(expression + 0)}> 0 </button>
                        <button onClick={() => setExpression("")}> R </button>
                        <button onClick={() => setExpression(expression + '/')}> / </button>

                        <button onClick={() => setExpression(expression.slice(0, -1))}> {"<-"} </button>



                    </div>

                </div>


            </div>


        </>
    )
}

export default calculator