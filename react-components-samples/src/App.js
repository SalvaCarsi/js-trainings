import React, { Component } from 'react';
import './App.css';
import { translations } from './translations';
import Test from './Test.js';

class App extends Component {
  render() {
    const TestWithTranslations = withTranslations(Test);
    return (
      <div className="App">
        HOC translations
        <p>{translations('sample.text')}</p>
        <TestWithTranslations />
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

export default App;
