import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import d1 from './drums/bong-thong-kick.wav';
import d2 from './drums/fm-wave-hit.wav';
import d3 from './drums/noise-clap.wav';
import d4 from './drums/mrk-sd.wav';
import d5 from './drums/broken-head-drum.wav';
import d6 from './drums/hand-clap.wav';
import d7 from './drums/mean-analog-pling.wav';
import d8 from './drums/fm_clonk.wav';
import d9 from './drums/bunchakiks.wav';


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
        <div id="buttons" className="center">
            {buttons}        
        </div>
    );
}

const Volume = (props) => {
    return (
        <div id="volume">
            <input z-index="1" type="range" min="1" max="100" className="slider" autoFocus="1" onChange={props.handle} />
        </div>
    );
}


class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            display: '',
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
        let padId = '';
        if (event.type === 'keyup') {
            keyValue = event['key'].toUpperCase();
            if (document.getElementById(keyValue)) {
                document.getElementById(keyValue).volume = this.state.volume;
                document.getElementById(keyValue).play();
                audioClip = this.capitalize(this.clip(this.state.obj[keyValue]));
            } 
        }
        else if (event.type === 'click') {
            padId = event.target.value;
            document.getElementById(padId).volume = this.state.volume;
            document.getElementById(padId).play();
            audioClip = this.capitalize(event.target.id);
        }
        
        this.setState({
            display: audioClip,
        });
    }

    clip = (c) => {
        let regexp = /(\/.+\/)|(\..+)/g;
        return c.replace(regexp, '').replace(/-|_/g, ' ');
    }

    handleEvent = (event) => {
        let volume = event.target.value;
        let audioVol = (volume / 100).toFixed(1);
        let displayVol = '';

        if (volume < 5) {
            displayVol = 'Mute';
        } else {
            displayVol = 'Volume ' + Math.round(volume / 10);
        }
        
        this.setState({
            volume: audioVol,
            display: displayVol,
        });
    }

    capitalize = (str) => {
        return str.split(' ').map(w => w[0].toUpperCase() + w.substr(1)).join(' ');
    }

    render() {
       
        return (
            <div id="drum-machine" className="center">
                <div id="display" className="center">{this.state.display}</div>  
                <Button play={this.play} clip={this.clip} obj={this.state.obj} />
                <Volume handle = {this.handleEvent} />
            </div>
        );
    }
}


ReactDOM.render(<Main />, document.getElementById('root'));





        