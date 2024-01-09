import { useRoutes } from 'react-router-dom';

import { routingArray } from './routingArray';

const Router = () => {
  return useRoutes(routingArray);
};

export default Router;
