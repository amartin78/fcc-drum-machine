import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Main extends React.Component {
    constructor() {
        super();
        this.state ={

        }
        this.play = this.play.bind(this);
    }

    play = (event) => {
        let eventId = event.target.children[0]["id"];
        // console.log(eventId)

        document.getElementById(eventId).play();
    }

    render() {
        return (
            <div id="drum-machine">
                <div id="display">
                    
                    <button className="drum-pad" id="wave1-sound" onClick={this.play}>
                        <audio className="clip" id="Q" src="tolling-bell_daniel-simion.mp3">
                        </audio>Q
                    </button>
                    <button className="drum-pad" id="wave2-sound" onClick={this.play}>
                        <audio className="clip" id="W" src="https://s3.amazonaws.com/freecodecamp/screen-reader.mp3" type="audio/mpeg">
                        </audio>W
                    </button>
                    <button className="drum-pad" id="wave3-sound" onClick={this.play}>
                        <audio className="clip" id="E" src="https://s3.amazonaws.com/freecodecamp/screen-reader.mp3" type="audio/mpeg">
                        </audio>E
                    </button>
                    <button className="drum-pad" id="wave4-sound" onClick={this.play}>
                        <audio className="clip" id="A" src="https://s3.amazonaws.com/freecodecamp/screen-reader.mp3" type="audio/mpeg">
                        </audio>A
                    </button>
                    <button className="drum-pad" id="wave5-sound" onClick={this.play}>
                        <audio className="clip" id="S" src="https://s3.amazonaws.com/freecodecamp/screen-reader.mp3" type="audio/mpeg">
                        </audio>S
                    </button>
                    <button className="drum-pad" id="wave6-sound" onClick={this.play}>
                        <audio className="clip" id="D" src="https://s3.amazonaws.com/freecodecamp/screen-reader.mp3" type="audio/mpeg">
                        </audio>D
                    </button>
                    <button className="drum-pad" id="wave7-sound" onClick={this.play}>
                        <audio className="clip" id="Z" src="https://s3.amazonaws.com/freecodecamp/screen-reader.mp3" type="audio/mpeg">
                        </audio>Z
                    </button>
                    <button className="drum-pad" id="wave8-sound" onClick={this.play}>
                        <audio className="clip" id="X" src="https://s3.amazonaws.com/freecodecamp/screen-reader.mp3" type="audio/mpeg">
                        </audio>X
                    </button>
                    <button className="drum-pad" id="wave9-sound" onClick={this.play}>
                        <audio className="clip" id="C" src="https://s3.amazonaws.com/freecodecamp/screen-reader.mp3" type="audio/mpeg">
                        </audio>C
                    </button>
                </div>
            </div>
        );
    }
}


ReactDOM.render(<Main />, document.getElementById('root'));





