import { FETCH_LISTS, ADD_ITEM, UPDATE_SCORE} from '../actions';
import _ from 'underscore';

export default function(state= {}, action) {
    switch(action.type) {
        case FETCH_LISTS: return _.indexBy(action.payload.data, "_id");

        case ADD_ITEM: {
      
            const newItem = action.payload.data.item;
            const listId = action.payload.data.item.belongs_to;
      
            return {
              ...state,
              [listId]: {
                ...state[listId],
                items: [...state[listId].items, newItem]
              }
            }
      
        }

        case UPDATE_SCORE: {
            const newState = JSON.parse(JSON.stringify(state));
    
            // create some variables from our ajax response 
            const listId = action.payload.data.item.belongs_to;
            const newItem = action.payload.data.item;
            const itemId = action.payload.data.item._id;
            
            // grab the array of list items 
            let listItems = newState[listId].items;
            
            // search for the index of the list item we are updating 
            const index = listItems.findIndex(item => item._id === itemId);
    
            // mutate the NEW COPY of state itself 
            listItems[index] = newItem;
    
            return newState;
          }

        default: return state;
    }
}