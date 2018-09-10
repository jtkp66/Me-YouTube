//This component doesn't have a need for state, it doesn't record any user interaction
// or re render. so you can make it just a functional component.
import React from 'react';
import VideoListItem from './video_list_item';
//props is a list of videos from parent component
//they arive as an argument, an object called props(from index.js)
const VideoList = props => {
    const videoItems = props.videos.map(video => {
        return (
            <VideoListItem
                onVideoSelect={props.onVideoSelect}
                key={video.etag}
                video={video}
            />
        );
    });

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;