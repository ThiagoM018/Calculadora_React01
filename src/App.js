import Input from './components/Input/index';
import Button from './components/Button/index';
import { Container, Content, Row } from "./styles";
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] =  useState('0');
  const [fristNumber, setFristNumber] = useState('0');
  const [operation, setOperation] = useState('');


  const handleClear = () => {
    setCurrentNumber("0");
    setFristNumber("0");
    setOperation(' ')
  };

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${number} ${prev === '0' ? '' : prev}`)
  };

  const handleSumNumbers = () => {
    
    if (fristNumber === '0'){
      handleClear();
      setFristNumber(String(currentNumber));
      setOperation('+')
    }else {
      const sum = Number(fristNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setFristNumber('0');
      setOperation(' ')
    }

  };

  const handleSubNumber = () => {
    
    if (fristNumber === '0'){
      handleClear();
      setFristNumber(String(currentNumber));
      setOperation('-')
    }else {
      const sum = Number(fristNumber) - Number(currentNumber);
      setCurrentNumber(String(sum));
      setFristNumber('0');
      setOperation(' ')
    }

    

  };

  const handleMultNumber = () => {
    
    if (fristNumber === '0'){
      handleClear();
      setFristNumber(String(currentNumber));
      setOperation('*')
    }else {
      const sum = Number(fristNumber) * Number(currentNumber);
      setCurrentNumber(String(sum));
      setFristNumber('0');
      setOperation(' ')
    }

  };

  const handleDivNumber = () => {
    
    if (fristNumber === '0'){
      handleClear();
      setFristNumber(String(currentNumber));
      setOperation('/')
    }else {
      const sum = Number(fristNumber) / Number(currentNumber);
      setCurrentNumber(String(sum));
      setFristNumber('0');
      setOperation(' ')
    }

  };

  

  const handleEquals = () => {
    
  
      switch(operation){
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleSubNumber();
          break;
        case '*':
          handleMultNumber();
          break;
        case '/':
            handleDivNumber();
            break;
        default:
          break;
      };

  };

  return (
    <Container>
      <Content>
        
        <Input value={currentNumber}/>

        <Row>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
          <Button label="/" onClick={handleDivNumber}/> 
          <Button label="*" onClick={handleMultNumber}/>
          <Button label="C" onClick={() => handleClear()}/>
        </Row>

        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="+" onClick={handleSumNumbers}/>
        </Row>

        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="-" onClick={handleSubNumber}/>
        </Row>

        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="=" onClick={handleEquals} />
        </Row>

      </Content>
    </Container>
  );
}

export default App;
