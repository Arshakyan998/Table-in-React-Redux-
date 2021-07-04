const initalState = {
  items: [],
  isLoaded: false,
  sort: {},
  item:[],
  perPage:{}
};

export const getTable = (state = initalState, action) => {
  switch (action.type) {
    case "GET_ITEMS": {
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };
    }

    case "SET_LOADED": {
      return {
        ...state,
        isLoaded: action.payload,
      };
    }

    case "SORT_ITEMS": {
      return {
        ...state,
        sort: {
          ...action.payload,
        },
      };
    }

    case "SEARCH_CONTENT":{
            const newItem=state.items.filter(element=>element.phone===action.payload)
            return{
                    ...state,
                    item:newItem
            }


    }

    case "PAGE_COUNT":{
      return{
        ...state,
        perPage:action.payload,
      }
    }


    case"SEARCH_USER":{
      const {name,phone}=action.payload

const newItem=state.items.filter(element=> {
  
 return  element.firstName.toLowerCase().startsWith(name.toLowerCase())&&element.phone.includes(phone)
  
})
console.log(phone);


       return{
         ...state,
         ...state.items,
         items:newItem
       }
    }

    default:
      return state;
  }
};
