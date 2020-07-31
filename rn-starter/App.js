import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreenFirst from './src/screens/CounterScreenFirst';
import CounterScreenSecond from './src/screens/CounterScreenSecond';
import ColourScreen from './src/screens/ColourScreen';
import SquareScreenFirst from './src/screens/SquareScreenFirst';
import SquareScreenSecond from './src/screens/SquareScreenSecond';
import TextScreen from './src/screens/TextScreen';
import BoxScreen from './src/screens/BoxScreen';


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    CounterFirst: CounterScreenFirst,
    CounterSecond: CounterScreenSecond,
    Colour: ColourScreen,
    SquareFirst: SquareScreenFirst,
    SquareSecond: SquareScreenSecond,
    Text: TextScreen,
    Box: BoxScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    }
  }
);

export default createAppContainer(navigator);
