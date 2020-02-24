import React, { Component } from 'react';

import logo from './logo.svg';

import './App.css';
import thinking from './thinking.jpeg'
import telegram from './telegram.jpeg'
import signup from './signup.png'
import free from './free.png'
import notepad from './notepad.png'
import node from './node.png'
import nlp from './nlp.jpg'
import react from './react.png'
// import './button.css';

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(true);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}
class App extends Component {
  state = {
    response: '',
    post: '',
    responseToPost: '',
  };
  
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }
  
  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    
    return body;
  };
  
  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();
    
    this.setState({ responseToPost: body });
  };

  
  render() {
      return (
        <div className="App">
          <header className="App-header">
            <h1>Mnemonic Generator</h1>
          </header>
          {/* <p>{this.state.response}</p> */}
          <form onSubmit={this.handleSubmit}>
            <div>
              <input type="text" placeholder="Search" value={this.state.post} className="mnemonic-input-search" onChange={e => this.setState({ post: e.target.value })}></input>
            </div>
            <div>
              <button type="submit" value="Submit" className="mnemonic-submit">SUBMIT</button>
            </div>
          </form>
          <p>{this.state.responseToPost}</p>
          <hr></hr>
          <FadeInSection>
            <h2 class="problem-header">Problem</h2>
            <div class="problem">
              <div class="column">
                <img src={thinking}></img>
              </div>
              <div class="column">
                <p>
                  Having regularly faced the problem of unable to remember specifications, be it parts of a diagram,
                  or the items in a grocery list or for that matter even the periodic table, our brain always ceases to 
                  stop firing neurons when it is most required. 
                </p>
                <p>
                  Just a couple days ago, during one of our tests, we had to remember the pin diagram of the 8086 microprocessor.
                  This along with a couple of other diagrams were enough to jumble the letters and words in our brain. We needed
                  an easier means to drill this into our heads and sustain it till the exam ended! 
                </p>
                <p>
                  You must be aware of the concept of mnemonics. If not, here goes! The bare bones definition is that it is a series
                  of words made from the first letters of the list one is trying to remember and is usually contructed to be catchy, 
                  meaningless or lame so that it becomes easy to remember.
                </p>
              </div>
            </div>
          </FadeInSection>
          <hr></hr>
          <FadeInSection>
          <h2 class="what-you-get-header">What you get?</h2>
          <div class="what-you-get">
            <div class="col">
              <img src={free}></img>
              <p class="what-you-get-caption">Free</p>
            </div>
            <div class="col">
              <img src={signup}></img>
              <p class="what-you-get-caption">No Sign Up</p>
            </div>
            <div class="col">
              <img src={telegram}></img>
              <p class="what-you-get-caption"><a href="https://t.me/mnemonic_generator_bot">Telegram Bot</a></p>
            </div>
          </div>
          </FadeInSection>
          <hr></hr>

          <FadeInSection>
            <h2 class="problem-header">How do you use this?</h2>
            <div class="problem">
              <div class="column">
                <img src={notepad}></img>
              </div>
              <div class="column">
                <h3 class="really-simple-caption">It's really simple!</h3>
                <p>Simply input a series of characters separated by spaces:</p>
                <p class="syntax">g t b w h s r t m</p>
                <p>The generator outputs a random sentence that is lame/funny/meaningful</p>
                <p class="syntax">George took bath while Harry Sean reached the moon.</p>
              </div>
            </div>
          </FadeInSection>

          <hr></hr>
          <FadeInSection>
            <h2 class="problem-header">How We Made this?</h2>
            <div class="what-you-get">
              <div class="col">
                <img src={node}></img>
              </div>
              <div class="col">
                <img src={react}></img>
              </div>
              <div class="col">
                <img src={nlp}></img>
              </div>
            </div>
          </FadeInSection>
        </div>
        
      );
    }
  }

export default App;