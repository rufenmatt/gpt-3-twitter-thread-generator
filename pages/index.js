import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import Twitter from '/assets/twitter.svg';

const Home = () => {

  const [userInput, setUserInput] = useState('');
  const [apiOutput, setApiOutput] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)

  const callGenerateEndpoint = async () => {
    setIsGenerating(true);

    console.log("Calling OpenAI...")
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userInput }),
    });

    const data = await response.json();
    const { output } = data;
    console.log("OpenAI replied...", output.text)

    setApiOutput(`${output.text}`);
    setIsGenerating(false);
  }
  const onUserChangedText = (event) => {
    console.log(event.target.value);
    setUserInput(event.target.value);
  };

  return (
    <div className="root">
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>Give a topic,<br /> receive a <Image src={Twitter} width="60" height="100%" style={{ padding: '0px 20px 0px 20px' }}alt="Twitter"></Image> thread</h1>
          </div>
          <div className="header-subtitle">
            <h2>Leverage AI for crafting engaging and concise Twitter threads.</h2>
          </div>
        </div>
        {apiOutput && (
        <div className="output">
          <div className="output-header-container">
            <div className="output-header">
              <h3>Output</h3>
            </div>
          </div>
          <div className="output-content">
            <p>{apiOutput}</p>
          </div>
        </div>
        )}
        {/* Add this code here*/}
        <div className="prompt-container">
        <textarea
          className="prompt-box"
          placeholder="Type your base tweet"
          value={userInput}
          onChange={onUserChangedText}
        />;
        <div className="prompt-buttons">
          <a
            className={isGenerating ? 'generate-button loading' : 'generate-button'}
            onClick={callGenerateEndpoint}
          >
            <div className="generate">
            {isGenerating ? <span className="loader"></span> : <p>Generate</p>}
            </div>
          </a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
