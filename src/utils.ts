export interface IEpisode {
    airdate: string;
    airstamp: string;
    airtime: string;
    id: number;
    image: {medium: string, original: string}
    name: string;
    number: number;
    runtime: number;
    season: number;
    summary: string;
    type: string;
    url: string;
  
  }

  export interface IAction {
    type: string;
    payload: any;
}

export interface IState {
    episodes: Array<IEpisode>
    favourites: Array<any>
}

 export interface IEpisodeProps {
    episodes: IEpisode[];
    toggleFavourite: (episode: IEpisode) => IAction;
    favourites: Array<IEpisode>;
  }

  