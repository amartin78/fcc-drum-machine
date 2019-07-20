import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Main extends React.Component {
    render() {
        return (
            <div id="drum-machine">
                <div id="display">
                    
                        <audio className="clip" id="Q" source src="https://s3.amazonaws.com/freecodecamp/screen-reader.mp3" 
                            type="audio/mpeg"><button class="drum-pad" id="wave1-sound">Q</button>
                        </audio>
                    {/* </button> */}
                    <button class="drum-pad" id="wave2-sound">W</button>
                    <button class="drum-pad" id="wave3-sound">E</button>
                    <button class="drum-pad" id="wave4-sound">A</button>
                    <button class="drum-pad" id="wave5-sound">S</button>
                    <button class="drum-pad" id="wave6-sound">D</button>
                    <button class="drum-pad" id="wave7-sound">Z</button>
                    <button class="drum-pad" id="wave8-sound">X</button>
                    <button class="drum-pad" id="wave9-sound">C</button>
                </div>
            </div>
        );
    }
}


ReactDOM.render(<Main />, document.getElementById('root'));





