//a = 'hi one tab two   tabsThree     tabsFour        Tabs
//notAtab SpaceHahaha oneTab    TwoTabs oneSpace  TwoSpaces' ;

const reducer = (state=[], action) => {
      if (action.type === 'to_array') {
        return action.data.split(' ');
      }
      return state;
}

const store = Redux.createStore(reducer);

console.log(store.getState());

// Action
const action = {
  type: 'to_array',
  data: 'hello kaman hello walak malak?'
}

store.dispatch(action);
console.log(store.getState());
