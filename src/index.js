import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import d1 from './drums/fm_clonk.wav';
import d2 from './drums/ekostab.wav';
import d3 from './drums/metal-clink.wav';
import d4 from './drums/fm-wave-hit.wav';
import d5 from './drums/fx-spindown.wav';
import d6 from './drums/phaser-echo-hit.wav';
import d7 from './drums/mean-analog-pling.wav';
import d8 from './drums/meep.wav';
import d9 from './drums/tek-beep-up.wav';



const Button = (props) => {

    let buttons = [];
    let text = '';
    let buttonId = '';
    let source = '';

    for(let o in props.obj) {
        text = o;
        buttonId = props.clip(props.obj[o]);
        source = props.obj[o];
        buttons.push(<button className="drum-pad" key={buttonId} id={buttonId} value={text} onClick={props.play}>
                    <audio className="clip" id={text} src={source}></audio>{text}
                  </button>);
    }

    document.onkeyup = function(e) {
        props.play(e);
    }
        
    return (
        <div>
            {buttons}        
        </div>
    );
}


class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            audioClip: '',
            volume: 0.5,
            obj: {
                'Q': d1,
                'W': d2,
                'E': d3,
                'A': d4,
                'S': d5,
                'D': d6,
                'Z': d7,
                'X': d8,
                'C': d9,
            }

        }
        this.play = this.play.bind(this);
        this.clip = this.clip.bind(this);
        this.handleEvent = this.handleEvent.bind(this);
    }

    play = (event) => {
        let audioClip = '';
        let keyValue = '';
        let padValue = '';
        if (event.type === 'keyup') {
            keyValue = event['key'].toUpperCase();
            if (document.getElementById(keyValue)) {
                document.getElementById(keyValue).play();
                document.getElementById(keyValue).volume = this.state.volume;
                audioClip = this.clip(this.state.obj[keyValue]);
            } 
        }
        else if (event.type === 'click') {
            padValue = event.target.value;
            document.getElementById(padValue).play();
            document.getElementById(padValue).volume = this.state.volume;
            audioClip = event.target.id;
        }
        
        this.setState({
            audioClip: audioClip,
        });
    }

    clip = (c) => {
        let regexp = /(\/.+\/)|(\..+)/g;
        return c.replace(regexp, '').replace(/-|_/g, ' ');
    }

    handleEvent = (event) => {
        let volume = event.target.value;
        let audioVol = (volume / 100).toFixed(1);
        let displayVol = (volume < 5)?'Mute':Math.ceil(volume / 10);
        
        this.setState({
            volume: audioVol,
            audioClip: 'Volume: ' + displayVol,
        });

        // console.log('state volume: ' + volume);
    }

    render() {
       
        return (
            <div id="drum-machine">
                <div id="display">{this.state.audioClip}</div>  
                <Button play={this.play} clip={this.clip} obj={this.state.obj} />
                <input type="range" min="1" max="100" onChange={this.handleEvent} />
            </div>
        );
    }
}


ReactDOM.render(<Main />, document.getElementById('root'));





        