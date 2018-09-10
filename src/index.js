import _ from "lodash";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";

const API_KEY = 'AIzaSyAeO0ZS6rpPl7VOGrrYm_fbXxLAaxuQbBA';

//Create new class based component. This component should contain HTML.
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        //console.log(videos);
        this.videoSearch('kitten');
    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term }, videos => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        //debounced version of videoSearch. once evry 300ms. so snippets on the right dont reload with every key stroke.
        const videoSearch = _.debounce(term => {
            this.videoSearch(term);
        }, 300);

        return (
            <div className='container'>
        <div className='jumbotron mt-5' >
          <div className='head-container'>
            <h1 className='page-title text-center'>Me and YouTube</h1>
            <p className='page-description text-center'>Powered by Hugs</p>
          </div>
        </div>
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                    videos={this.state.videos}
                />
            </div>
            </div>
        );
    }
}

//Take this component's generated HTML and put it on the page
ReactDOM.render(<App />, document.querySelector(".container"));