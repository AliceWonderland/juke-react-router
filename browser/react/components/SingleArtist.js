import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class SingleArtist extends Component{
    constructor(props){
        super(props);
        this.state={
            artist:{},
            artistAlbums:[],
            artistSongs:[]
        };
    }

    componentDidMount () {
        // console.log("single art",this.props.match.params);
        const artistId=this.props.match.params.artistId;
        // axios.get(`/api/artists/${artistId}`)
        //     .then(res => res.data)
        //     .then(selectedArtist => {
        //         console.log("selectedArt",selectedArtist);
        //         this.setState({ selectedArtist })
        //     });
        axios.all([
            axios.get(`/api/artists/${artistId}`),
            axios.get(`/api/artists/${artistId}/albums`)
        ])
        .then(axios.spread((selectedArtist, selectedArtistAlbums) => {
            console.log('artist', selectedArtist.data);
            console.log('artistAlbums', selectedArtistAlbums.data);
            let artist=selectedArtist.data;
            let artistAlbums=selectedArtistAlbums.data;
            this.setState({ artist, artistAlbums });
        }));
    }

    render(){
        const selectedArtist=this.state.artist;
        console.log(selectedArtist);
        return (
            <div>
                <h3>{selectedArtist.name}</h3>
                <h4>ALBUMS</h4>
                <h4>SONGS</h4>
            </div>
        )
    }
}