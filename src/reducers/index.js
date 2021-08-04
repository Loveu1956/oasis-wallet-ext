import { combineReducers } from 'redux';
import accountInfo from "./accountReducer";
import appReducer from './appReducer';
import cacheReducer from "./cache";
import entryRouteReducer from './entryRouteReducer';
import network from './network';
import tabRouteConfig from './tabRouteReducer';

const rootReducer = combineReducers({
  entryRouteReducer: entryRouteReducer,
  appReducer: appReducer,
  tabRouteConfig,
  network,
  accountInfo,
  cache: cacheReducer,
});

export default rootReducer;
