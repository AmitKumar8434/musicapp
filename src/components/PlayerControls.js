import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faForward, faBackward } from '@fortawesome/free-solid-svg-icons';
// import Slider from '@material-ui/core/Slider';

const PlayerControls = (props) => {
    return (
        <>
            <div className="player_controls">
                <button className="skip_btn">
                    <FontAwesomeIcon className="button" icon={faBackward} onClick={() => {
                        props.onSelect(false);
                    } }/>
                </button>
                <button className="play_btn" onClick={() => {
                    props.setIsPlaying(!props.isPlaying);
                }} >
                    <FontAwesomeIcon className="button" icon={props.isPlaying?faPause:faPlay} />
                </button>
                <button className="skip_btn">
                    <FontAwesomeIcon className="button" icon={faForward} onClick={() => {
                        props.onSelect(true);
                 }} />
                </button>
            </div>
        </>
  )
}
export default PlayerControls;