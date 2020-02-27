import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './page/Login';
import List from './page/List';
import Book from './page/Book';

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    List,
    Book
  })
)

export default Routes;