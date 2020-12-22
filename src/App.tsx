import React from 'react';
import logo from './logo.svg';
import './App.css';
import "@linzjs/lui/dist/lui.css";
import {LuiButton, LuiFormikForm, LuiTextInput} from "@linzjs/lui";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="lui-text-content-area">
          <LuiFormikForm initialValues={ {username: ''} } onSubmit={() => {}}>
          <LuiTextInput name={'username'} label="Username" />
          <LuiTextInput name={'password'} label="Password" />
          <LuiButton level="secondary">Sign up</LuiButton>
          <LuiButton level="primary">Login</LuiButton>
          </LuiFormikForm>
        </div>
      </header>
    </div>
  );
}

export default App;
