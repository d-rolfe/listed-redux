import axios from 'axios';

export const FETCH_LISTS = "fetch_lists";
export const ADD_ITEM = "add_item";
export const UPDATE_SCORE = "update_score"

const rootUrl = "http://lists.hackeryou.com";

export function fetchLists() {
    const request = axios.get(`${rootUrl}/list`);

    return {
        type: FETCH_LISTS,
        payload: request
    }
}

export function addItem(listId, item) {
    const request = axios.post(`${rootUrl}/list/${listId}/item`, { item });

    return {
        type: ADD_ITEM,
        payload: request
    }
}

export function updateScore(itemId, currentScore, value){
    let score = currentScore + value;
  
    const request = axios.post(`${rootUrl}/item/${itemId}`, { score });
  
    return {
      type: UPDATE_SCORE,
      payload: request
    }
  }