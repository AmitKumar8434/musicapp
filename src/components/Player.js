import React, { useEffect,useRef } from 'react';
import { useState} from 'react';
import PlayerDetails from './PlayerDetails';
import PlayerControls from './PlayerControls';
import { useSpring, animated } from "react-spring";
import { songs } from "./songs";
const Player = () => {
	const [registrationFormStatus, setRegistartionFormStatus] = useState(false);

    const loadSong=(key)=>{
		setCurrSongIndex((old) => {
				return key;
		});
	}
	const loginProps = useSpring({ 
		left: registrationFormStatus ? -500 : 0, // Login form sliding positions
	  });
	  const registerProps = useSpring({
		left: registrationFormStatus ? 0 : 500, // Register form sliding positions 
	  });
	  function registerClicked() {
		setRegistartionFormStatus(true);
	  }
	  function loginClicked() {
		setRegistartionFormStatus(false);
	}
	const styles = {
        border: "1px solid Black",
		color: "Black",
		fontWeight: 900,
		fontSize:"15px",
    }

	const audioEl = useRef(null);
	const prodiv = useRef(null);
	const [currSongIndex, setCurrSongIndex] = useState(0);
	const [nextSongIndex, setNextSongIndex] = useState(currSongIndex+1 );
	const [isPlaying, setIsPlaying] = useState(false);
	const [percent, setPercent] = useState(0);
	const [dsec, setDsec] = useState(0);
	const [dmin, setDmin] = useState(0);
	const [csec, setCsec] = useState(0);
	const [cmin, setCmin] = useState(0);
	

	useEffect(() => {
		if (isPlaying === true) {
			audioEl.current.play();
		}
		else {
			audioEl.current.pause();
		}
	},);
	useEffect(() => {
		setNextSongIndex(() => {
			if (currSongIndex+ 1 > songs.length - 1) {
			  return 0;
			} else {
			  return currSongIndex + 1;
			}
		  });
	}, [currSongIndex]);
	
	const skipNext = (basis) => {

		if (basis === true) {
			setCurrSongIndex((old) => {
				console.log(old);
				if (old === songs.length-1) return 0;
				return old + 1;
			});
		}
		else {
			setCurrSongIndex((old) => {
				console.log(old);
				if (old === 0) return songs.length-1;
				return old-1;
			});
		}

	}
	function handleProgress() {
		setPercent(() => ((audioEl.current.currentTime / audioEl.current.duration) * 100));
		let cTime = Math.floor(audioEl.current.currentTime);
		let cm = Math.floor(cTime / 60);
		let cs = cTime - cm * 60;
		if (cs < 10) {
			cs = '0' + cs;
		}
		setCmin(cm);
		setCsec(cs);

		if (audioEl.current.duration) {
			let time = Math.floor(audioEl.current.duration);
			let min = Math.floor(time / 60);
			let sec = time - min * 60;
			if (sec < 10) {
				sec = '0' + sec;
			}
			setDmin(min);
			setDsec(sec);
		}
		// console.log(percent);
	}
	function scrub(e){
		const scrubTime = (e.nativeEvent.offsetX / prodiv.current.offsetWidth) * audioEl.current.duration;
		audioEl.current.currentTime = scrubTime;
	}


	return (
		<>
			<div className="container" style={{
				backgroundImage: `url(${songs[currSongIndex].img_src})`
			}}>
		<div className="player-playlist">
				<animated.button
          onClick={loginClicked}
			id="loginBtn"
			style={styles}
        >
        Player
        </animated.button>
        <animated.button
          onClick={registerClicked}
		id="registerBtn"
		style={styles}
        >
        Playlist
        </animated.button>
			<animated.div className="player" style={loginProps}>
				<audio ref={audioEl} src={songs[currSongIndex].src} onTimeUpdate={handleProgress} />

				<h4 className="playing">Playing Now</h4>

				<PlayerDetails
					song={songs[currSongIndex]} isPlaying={isPlaying}
				/>

				<div className="duration">
					<div>{cmin}:{csec}</div>
					<div>{dmin}:{dsec}</div>
				</div>

				<div className="progress" onClick={scrub} ref={prodiv}>
				 <div className="progress__filled" style={{width:`${percent}%`}}></div>
				</div>
				
				<PlayerControls onSelect={skipNext} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />

				<p className="footer"><strong>Next up: </strong>{songs[nextSongIndex].title}</p>
              
				</animated.div>
				<animated.div className="playlist" style={registerProps}>
				<h2>PLAYLIST</h2><br/>
                <hr/>
                {
                    songs.map((song ,key)=>{
						return <div className="item" onClick={() => { loadSong(key) }} key={key}>
                                    <img src={song.img_src} alt=""/>
                                    <div className="item_details">
                                        <h6>{song.title}</h6>
                                        <h6>{song.artist}</h6>
                                    </div>
                                </div>
                             })
                }
				</animated.div>
					</div>
				</div>

		</>
  )
}
export default Player;