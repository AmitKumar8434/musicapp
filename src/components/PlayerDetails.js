import React from 'react';

const PlayerDetails = (props) => {

    return (
        <>
            <div className="player_details">
                <div className="image_details">
                    <img className="imgg" src={props.song.img_src} alt="photu" style={{ animationPlayState: props.isPlaying ? "running" : "paused" }} />
                </div>
                <h3 className="details_title">{props.song.title}</h3>
                <h4 className="details_artist">{ props.song.artist}</h4>

                
            </div>
        </>
  )
}
export default PlayerDetails;