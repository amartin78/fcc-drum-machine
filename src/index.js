import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import d1 from './drums/metal-clink.wav';
import d2 from './drums/ekostab.wav';
import d3 from './drums/fm_clonk.wav';
import d4 from './drums/fm-wave-hit.wav';
import d5 from './drums/fx-spindown.wav';
import d6 from './drums/phaser-echo-hit.wav';
import d7 from './drums/mean-analog-pling.wav';
import d8 from './drums/meep.wav';
import d9 from './drums/tek-beep-up.wav';


const Audio = (props) => {
    return (
        <div>
            <audio className="clip" id={props.audioId} src={props.audioSrc}></audio>
        </div>
    );
}


const Button = (props) => {

    let arr2 = [];
    let text = '';
    let buttonId = '';
    let source = '';

    for(let o in props.obj) {
        text = o;
        buttonId = props.clip(props.obj[o]);
        source = props.obj[o];
        arr2.push(<button className="drum-pad" key={buttonId} id={buttonId} onClick={props.play}>
                    <Audio audioId={text} audioSrc={source}/>{text}
                </button>);
    }

    document.onkeyup = function(e) {
        props.play(e);
    }
        
    return (
        <div>
            {arr2}        
        </div>
    );
}


class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            audioClip: '',
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
    }

    play = (event) => {
        let audioClip = '';
        let keyValue = '';
        let padValue = '';
        if (event.type === 'keyup') {
            keyValue = event['key'].toUpperCase();
            if (document.getElementById(keyValue)) {
                document.getElementById(keyValue).play();
                audioClip = this.clip(this.state.obj[keyValue]);
            } 
        }
        else if (event.type === 'click') {
            padValue = event.target.innerHTML.substr(-1);
            document.getElementById(padValue).play();
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

    render() {
       
        return (
            <div id="drum-machine">
                <div id="display">{this.state.audioClip}</div>  

                <Button play={this.play} clip={this.clip} obj={this.state.obj} />

            </div>
        );
    }
}


ReactDOM.render(<Main />, document.getElementById('root'));





        