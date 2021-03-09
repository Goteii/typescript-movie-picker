import React from 'react'
import {Store} from '../store/Store';
import {toggleFavourite} from '../actions/Actions';
import {IEpisodeProps} from '../utils';


const EpisodeList = React.lazy<any>(() => import('../components/EpisodesList'));

export default function FavPage() {
    const {state, dispatch} = React.useContext(Store);

    const props: IEpisodeProps = {
         episodes: state.favourites,
         store: {state, dispatch},
         toggleFavourite,
         favourites: state.favourites
    }
    return (
       <React.Suspense fallback={<div>loading...</div>}>
           <div className="episode-layout">
               <EpisodeList {...props} />
           </div>
       </React.Suspense>
       
    )
}
