const redux = require("redux");
// const redux = require("./redux-scratch");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

//#region state
const initialCarState = {
  numberOfCars: 5,
};
const initialBikeState = {
  numberOfBikes: 17,
};
//#endregion state

//#region action
const BUY_CAR = "BUY_CAR";
const BUY_BIKE = "BUY_BIKE";

function buyCar() {
  return {
    type: BUY_CAR,
    info: "This is action creator for cars",
  };
}

function buyBike() {
  return {
    type: BUY_BIKE,
    info: "This is action creator for bikes",
  };
}
//#endregion action

//#region reducer
const carReducer = (state = initialCarState, action) => {
  switch (action.type) {
    case BUY_CAR:
      return {
        ...state,
        numberOfCars: state.numberOfCars - 1,
      };
    default:
      return state;
  }
};

const bikeReducer = (state = initialBikeState, action) => {
  switch (action.type) {
    case BUY_BIKE:
      return {
        ...state,
        numberOfBikes: state.numberOfBikes - 1,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  car: carReducer,
  bike: bikeReducer,
});

//#endregion reducer

//#region store
const store = createStore(rootReducer);
console.log("initial:", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("store updated", store.getState())
);
store.dispatch(buyCar());
store.dispatch(buyCar());
store.dispatch(buyCar());
store.dispatch(buyBike());
store.dispatch(buyBike());
store.dispatch(buyBike());
unsubscribe();
//#endregion store
