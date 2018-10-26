import React, { Component } from 'react';
import albumData from './../data/albums';
import PlayerBar from './PlayerBar';

class Album extends Component {
  constructor(props) {
    super(props);


    const album = albumData.find( album => {
      return album.slug === this.props.match.params.slug
    });

    this.state = {
      album: album
    };
  }


  render() {
    return (
      <section className="album">
        <section id="album-info">
          <img id="album-cover-art" src={this.state.album.albumCover} alt={this.state.album.title}/>
          <div className="album-details">
            <h1 id="album-title"></h1>
            <h2 className="artist"></h2>
            <div id="release-info"></div>
            <h1 id="album-title">{this.state.album.title}</h1>
            <h2 className="artist">{this.state.album.artist}</h2>
            <div id="release-info">{this.state.album.releaseInfo}</div>
          </div>
        </section>
        <table id="song-list">
          <colgroup>
            col id="song-number-column" />
            col id="song-title-column" />
            col id="song-duration-column" />
          </colgroup>

          <tbody>
            {this.state.album.songs.map( (song, index, ) =>
               <tr key={index} >
                    <td> track: {index + 1} / </td>
                    <td> {song.title} / </td>
                    <td> time: {song.duration}</td>
                </tr>
          )}
          </tbody>

        </table>
        <PlayerBar
          isPlaying={this.state.isPlaying}
          currentSong={this.state.currentSong}
          handleSongClick={() => this.handleSongClick(this.state.currentSong)}
        />
      </section>
    );
  }
}


/*

this.state.albums.map( (album, index) =>
  <Link to={`/album/${album.slug}`} key={index} >
     <img src={album.albumCover} alt={album.title} />
     <div>{album.title}</div>
     <div>{album.artist}</div>
     <div>{album.songs.length} songs</div>
*/


export default Album;
