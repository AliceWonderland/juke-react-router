import React, { Component } from 'react';
// import axios from 'axios';
import AllAlbums from './AllAlbums';
import SingleAlbum from './SingleAlbum';
import Sidebar from './Sidebar';
import Player from './Player';
import AllArtists from './AllArtists';
import SingleArtist from './SingleArtist';

import { HashRouter, Route } from 'react-router-dom';

export default class Main extends Component {

  constructor (props) {
    super(props);
    this.state = {
      // albums: [],
      selectedAlbum: {}
    };
    // this.selectAlbum = this.selectAlbum.bind(this);
    // this.deselectAlbum = this.deselectAlbum.bind(this);
  }



  // selectAlbum (albumId) {
  //   axios.get(`/api/albums/${albumId}`)
  //     .then(res => res.data)
  //     .then(album => this.setState({
  //       selectedAlbum: album
  //     }));
  // }
  //
  // deselectAlbum () {
  //   this.setState({ selectedAlbum: {}});
  // }

  render () {
    return (

        <HashRouter>

            <div id="main" className="container-fluid">
                {/*sidebar*/}
                <div className="col-xs-2">
                    <Sidebar deselectAlbum={this.deselectAlbum} />
                </div>

                {/*main body*/}
                <div className="col-xs-10">
                    <Route exact path="/" component={AllAlbums} />
                    <Route exact path="/albums" component={AllAlbums} />
                    <Route path="/albums/:albumId" component={SingleAlbum} />
                    <Route exact path="/artists" component={AllArtists} />
                    <Route path="/artists/:artistId" component={SingleArtist} />
                </div>

                {/*player*/}
                <Player />

            </div>

        </HashRouter>

    );
  }
}
