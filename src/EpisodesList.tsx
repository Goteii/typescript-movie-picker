import React from 'react'
import {IEpisode} from './utils';

const EpisodesList = (props: any): JSX.Element[] => {
    const {episodes, toggleFavourite, favourites} = props;

    return episodes.map((episode: IEpisode) => {
        return (
          <section key={episode.id} className="episode-box">
              <img src={episode.image.medium} alt={`Rick and Mort ${episode.name}`} />
              <div>{episode.name}</div>
              <section style={{display: 'flex', justifyContent: 'space-between'}}>
                <div>Season: {episode.season} Number:{episode.number}</div>
                <button type="button" onClick={() => toggleFavourite(episode)}>{favourites.includes(episode) ? 'REMOVE FROM FAV' : 'ADD TO FAV'}</button>
                </section>
            </section>
        )
      })}

export default EpisodesList;