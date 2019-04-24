//RGAPI-75da5f05-293a-467d-92cb-6b788a9314e8 API KEY

// https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/NaturalHigh47?api_key=RGAPI-75da5f05-293a-467d-92cb-6b788a9314e8

import axios from 'axios';
import history from '../history';

const API_KEY = 'RGAPI-1236e86e-3380-4b79-b66c-92469859f736';


export const fetchUser = (summonerName, server) => async (dispatch) => {
  const response = await axios.get(`https://${server}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${API_KEY}`)
  
  dispatch({type: 'FETCH_USER', payload: response.data})
  history.push(`/user/${summonerName}/${server}/${response.data.id}/${response.data.accountId}`)
}


export const fetchUserMatches = (accountId, server) => async (dispatch, getState) => {
  const response = await axios.get(`https://${server}.api.riotgames.com/lol/match/v4/matchlists/by-account/${accountId}?endIndex=10&api_key=${API_KEY}`)

  dispatch({type: 'FETCH_MATCHES', payload: response.data.matches})
  console.log('getsate',getState())
}

export const fetchMatchesDetails = (matchId, server) => async (dispatch, getState) => {
  const response = await axios.get(`https://${server}.api.riotgames.com/lol/match/v4/matches/${matchId}?api_key=${API_KEY}`)

}


