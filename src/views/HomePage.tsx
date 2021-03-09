import React, {useEffect} from 'react'
import { IEpisodeProps} from '../utils';
import {Store} from '../store/Store';
import {fetchDataAction, toggleFavourite} from '../actions/Actions';

const EpisodeList = React.lazy<any>(() => import('../components/EpisodesList')); 


export default function HomePage() {
    const { state, dispatch } = React.useContext(Store);

    useEffect(() => {
        state.episodes.length === 0 && fetchDataAction(dispatch)
      })
    

    const props: IEpisodeProps = {
        episodes: state.episodes,
        store: {state, dispatch},
        toggleFavourite,
        favourites: state.favourites
      }
    return (
        <React.Fragment>
                <React.Suspense fallback={<div>loading..</div>}>
      <section className="episode-layout">
        <EpisodeList {...props}/>
      </section>
      </React.Suspense>
        </React.Fragment>
    )
}
