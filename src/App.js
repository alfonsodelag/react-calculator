import React, { useState } from 'react';
import './App.css';

function App() {





  // describe("Example tests", () => {
  //   it("Testing for fixed test 1", () => {
  //     let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
  //     let actual = countPositivesSumNegatives(testData);
  //     let expected = [10, -65];
  //     assert.deepEqual(actual, expected);
  //   })

  //   it("Testing for fixed test 2", () => {
  //     let testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
  //     let actual = countPositivesSumNegatives(testData);
  //     let expected = [8, -50];    
  //     assert.deepEqual(actual, expected);
  //   });
  // });




  function countPositivesSumNegatives(input) {
    const countPositives = input.reduce((accumulator, number) => {
      if (number !== 0 && number > 0) {
        return accumulator + 1;
      }

      return accumulator;
    }, 0);

    const sumNegatives = input.reduce(function (previousValue, currentValue) {
      return previousValue + currentValue;
    });

    console.log("sumNegatives", sumNegatives);

  }

  console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))








































  // const [previousOperand, setPreviousOperand] = useState('0');
  // const [operand, setOperand] = useState('');
  // const [operator, setOperator] = useState(null)

  // const addDigit = (digit) => {
  //   setOperand(operand + digit);
  // }

  // // console.log("previousClickedValue", previousClickedValue);
  // // console.log("newClickedValue", newClickedValue);

  // const operationCases = (x, y, operation) => {
  //   switch (operation) {
  //     case '+':
  //       return x + y;
  //     case '-':
  //       return x - y;
  //     case '*':
  //       return x * y;
  //     case '÷':
  //       return x / y;
  //   }
  // }

  // const clear = () => {
  //   setPreviousOperand('0');
  //   setOperand('');
  //   setOperator(null);
  // }

  // console.log("operator", operator);

  // const chooseOperator = (operator) => {
  //   setOperator(operator);
  //   // ! Si no has elegido un numero, no hace falta convertir el previousOperand en operand
  //   if (operand !== '') {
  //     setPreviousOperand(operand);
  //     setOperand('');
  //   }
  // }

  // const compute = () => {
  //   const result = operationCases(Number(previousOperand), Number(operand), operator);
  //   setOperator(null);
  //   setPreviousOperand(result);
  //   setOperand('');
  // }

  // const updateDisplay = () => {
  // }

  // return (
  //   <div className="h-screen">
  //     <div className="h-1/5 w-full" style={{ backgroundColor: '#858694' }}>
  //       <input style={{ backgroundColor: 'transparent' }} value={operand === '' ? previousOperand : operand} className="text-white text-7xl" />
  //     </div>

  //     <div className="h-1/6 flex">
  //       <div className="w-1/4 border-2 border-black cursor-pointer" style={{ backgroundColor: '#E0E0E0' }}>
  //         <div className="flex align-center justify-center h-full">
  //           <button onClick={() => clear()} className="text-7xl">AC</button>
  //         </div>
  //       </div>
  //       <div className="w-1/4 border-2 border-black cursor-pointer" style={{ backgroundColor: '#E0E0E0' }}>
  //         <div className="flex align-center justify-center h-full">
  //           <button onClick={() => chooseOperator('+/-')} className="text-7xl">+/-</button>
  //         </div>
  //       </div>
  //       <div className="w-1/4 border-2 border-black cursor-pointer" style={{ backgroundColor: '#E0E0E0' }}>
  //         <div className="flex align-center justify-center h-full">
  //           <button onClick={() => chooseOperator('%')} className="text-7xl">%</button>
  //         </div>
  //       </div>
  //       <div className="w-1/4 border-2 border-black cursor-pointer" style={{ backgroundColor: '#F5923E' }}>
  //         <div className="flex align-center justify-center h-full">
  //           <button onClick={() => chooseOperator('÷')} className="text-7xl text-white">÷</button>
  //         </div>
  //       </div>
  //     </div>

  //     <div className="h-1/6 flex">
  //       <div className="w-1/4 border-2 border-black cursor-pointer" style={{ backgroundColor: '#E0E0E0' }}>
  //         <div className="flex align-center justify-center h-full">
  //           <button onClick={() => addDigit(7)} className="text-7xl">7</button>
  //         </div>
  //       </div>
  //       <div className="w-1/4 border-2 border-black cursor-pointer" style={{ backgroundColor: '#E0E0E0' }}>
  //         <div className="flex align-center justify-center h-full">
  //           <button onClick={() => addDigit(8)} className="text-7xl">8</button>
  //         </div>
  //       </div>
  //       <div className="w-1/4 border-2 border-black cursor-pointer" style={{ backgroundColor: '#E0E0E0' }}>
  //         <div className="flex align-center justify-center h-full">
  //           <button onClick={() => addDigit(9)} className="text-7xl">9</button>
  //         </div>
  //       </div>
  //       <div className="w-1/4 border-2 border-black cursor-pointer" style={{ backgroundColor: '#F5923E' }}>
  //         <div className="flex align-center justify-center h-full">
  //           <button onClick={() => chooseOperator('*')} className="text-7xl text-white">x</button>
  //         </div>
  //       </div>
  //     </div>

  //     <div className="h-1/6 flex">
  //       <div className="w-1/4 border-2 border-black cursor-pointer" style={{ backgroundColor: '#E0E0E0' }}>
  //         <div className="flex align-center justify-center h-full">
  //           <button onClick={() => addDigit(4)} className="text-7xl">4</button>
  //         </div>
  //       </div>
  //       <div className="w-1/4 border-2 border-black cursor-pointer" style={{ backgroundColor: '#E0E0E0' }}>
  //         <div className="flex align-center justify-center h-full">
  //           <button onClick={() => addDigit(5)} className="text-7xl">5</button>
  //         </div>
  //       </div>
  //       <div className="w-1/4 border-2 border-black cursor-pointer" style={{ backgroundColor: '#E0E0E0' }}>
  //         <div className="flex align-center justify-center h-full">
  //           <button onClick={() => addDigit(6)} className="text-7xl">6</button>
  //         </div>
  //       </div>
  //       <div className="w-1/4 border-2 border-black cursor-pointer" style={{ backgroundColor: '#F5923E' }}>
  //         <div className="flex align-center justify-center h-full">
  //           <button onClick={() => chooseOperator('-')} className="text-7xl text-white">-</button>
  //         </div>
  //       </div>
  //     </div>

  //     <div className="h-1/6 flex">
  //       <div className="w-1/4 border-2 border-black cursor-pointer" style={{ backgroundColor: '#E0E0E0' }}>
  //         <div className="flex align-center justify-center h-full">
  //           <button onClick={() => addDigit(1)} className="text-7xl">1</button>
  //         </div>
  //       </div>
  //       <div className="w-1/4 border-2 border-black cursor-pointer" style={{ backgroundColor: '#E0E0E0' }}>
  //         <div className="flex align-center justify-center h-full">
  //           <button onClick={() => addDigit(2)} className="text-7xl">2</button>
  //         </div>
  //       </div>
  //       <div className="w-1/4 border-2 border-black cursor-pointer" style={{ backgroundColor: '#E0E0E0' }}>
  //         <div className="flex align-center justify-center h-full">
  //           <button onClick={() => addDigit(3)} className="text-7xl">3</button>
  //         </div>
  //       </div>
  //       <div className="w-1/4 border-2 border-black cursor-pointer" style={{ backgroundColor: '#F5923E' }}>
  //         <div className="flex align-center justify-center h-full">
  //           <button onClick={() => chooseOperator('+')} className="text-7xl text-white">+</button>
  //         </div>
  //       </div>
  //     </div>

  //     <div className="h-1/6 flex">
  //       <div className="w-2/4" style={{ backgroundColor: '#E0E0E0' }}>
  //         <div className="flex align-center justify-center h-full">
  //           <button onClick={() => addDigit(0)} className="text-7xl">0</button>
  //         </div>
  //       </div>
  //       <div className="w-1/4 border-2 border-black cursor-pointer" style={{ backgroundColor: '#E0E0E0' }}>
  //         <div className="flex align-center justify-center h-full">
  //           <button onClick={() => addDigit('.')} className="text-7xl">.</button>
  //         </div>
  //       </div>
  //       <div className="w-1/4 border-2 border-black cursor-pointer" style={{ backgroundColor: '#F5923E' }}>
  //         <div className="flex align-center justify-center h-full">
  //           <button onClick={() => compute()} className="text-7xl text-white">=</button>
  //         </div>
  //       </div>
  //     </div>
  //   </div >
  // );
}

export default App;
