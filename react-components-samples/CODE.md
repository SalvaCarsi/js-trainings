<!-- import React, { Component } from 'react';
import './App.css';
import { translations } from './translations';
import Test from './Test.js';
import MainPage from './components/MainPage/MainPage.js';

class App extends Component {
  render() {
    const TestWithTranslations = withTranslations(Test);
    return (
      <div className="App">
        <MainPage />
      </div>
    );
  }
}

const withTranslations = PassedComponent =>
  class TestWithTranslations extends Component {
    render() {
      return <PassedComponent translations={translations} />;
    }
  };

export default App; -->
