
import './App.css';
import Input from './components/Input';
import TextArea from './components/TextArea';
import Select from './components/Select';
import CheckBox from './components/CheckBox';
import Radio from './components/Radio';
import Range from './components/Range';
import FormOne from './components/FormOne';
import TaskOne from './components/TaskOne';
import TaskOneB from './components/TaskOneB';
import { useState } from 'react';
function App() {
  const [show, setShow] = useState('')
  const handleShow = (data)=>{
    setShow(data)
  }
  return (
    <div className="App">
      <Input/>
      <TextArea/>
      <Select/>
      <CheckBox/>
      <Radio/>
      <Range/>
      <FormOne/>
      <TaskOne handleShow={handleShow}/>
      <TaskOneB text={show}/>
    </div>
  );
}

export default App;
