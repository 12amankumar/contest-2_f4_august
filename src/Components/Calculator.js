import React from 'react';

const Calculator = () => {



    return (
        <div>
           <div className='container'>
            <div className="calculator">
                <form action="">

                    <h3>React Calculator</h3>
                    <input type="text" placeholder='Num 1' />
                    <input type="text" placeholder='Num 2'/>
                    <br />
                    <button type='button' className='btn'  >+</button>
                    <button type='button' className='btn'>-</button>
                    <button type='button' className='btn'>*</button>
                    <button type='button' className='btn'>/</button>
{/* 
                    <div>
                        <h4 className='error'>Error!</h4>
                        <p>Num1 is not Empty</p>
                    </div>
                    <div>
                        <h4 className='success'>Success!</h4>
                        <p>Result-</p>
                    </div> */}
                </form>
            </div>

           </div>
        </div>
    );
}

export default Calculator;
