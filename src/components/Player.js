import React, { useEffect,useRef } from 'react';
import { useState} from 'react';
import PlayerDetails from './PlayerDetails';
import PlayerControls from './PlayerControls';

const Player = () => {
	const audioEl = useRef(null);
	const prodiv = useRef(null);
	const [songs] = useState([
		{
			title: "Zinda",
			artist: "Siddharth Mahadevan",
			img_src: "./images/zinda.jpg",
			src: "./songs/Zinda.mp3",
		},
		{
			title: "Wishlist",
			artist: "Dino James",
			img_src: "./images/wishlist.jpg",
			src: "./songs/Wishlist.mp3",
		},
		{
			title: "Kar Har Maidan Fateh",
			artist: "Sukhvindar Singh",
			img_src: "./images/karHarMaidanFateh.jpg",
			src: "./songs/KarHarMaidaanFateh.mp3",
		},
		{
			title: "Akela",
			artist: "Abhijeet Srivastava",
			img_src: "./images/akela.jpg",
			src: "./songs/Akela.mp3",
		},
		{
			title: "Toh aa Gye Hum",
			artist: "Jubin Nautiyal",
			img_src: "./images/jubin1.jpg",
			src: "./songs/TohAagayeHum.mp3",
		}
	]);
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
	}, [currSongIndex,songs.length]);
	
	const skipNext = (basis) => {

		if (basis === true) {
			setCurrSongIndex((old) => {
				if (old === 4) return 0;
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
			<div className="player">
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

				</div>
				</div>

		</>
  )
}
export default Player;