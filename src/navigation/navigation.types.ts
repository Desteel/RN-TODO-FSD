import type { APP_NAVIGATOR } from './navigation.constants';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type {
  CompositeScreenProps,
  NavigatorScreenParams,
  ParamListBase,
} from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { Task } from 'entities/task/model';

type RouteNameBase<ParamList extends ParamListBase> = keyof ParamList & string;

export type AuthStackParamList = {
  SignIn: undefined;
};

export type TasksStackParamList = {
  TasksOverview: undefined;
  AddTask: undefined;
  EditTask: {
    taskId: Task['id'];
  };
};

export type TasksGeneratorStackParamList = {
  GenerateTasks: undefined;
  GeneratedTasksOverview: undefined;
};

export type MapStackParamList = {
  Map: undefined;
};

export type RootNavigatorParamList = {
  TasksTab: NavigatorScreenParams<TasksStackParamList>;
  MapTab: NavigatorScreenParams<MapStackParamList>;
  GeneratorTab: NavigatorScreenParams<TasksGeneratorStackParamList>;
};

export type AppNavigatorID = typeof APP_NAVIGATOR.ID;

/**
 * @example type TasksOverviewProps = ScreenProps<TasksStackParamList, 'TasksOverview'>;
 */
export type ScreenProps<
  ParamList extends ParamListBase,
  RouteName extends RouteNameBase<ParamList>,
> = CompositeScreenProps<
  NativeStackScreenProps<ParamList, RouteName, AppNavigatorID>,
  BottomTabScreenProps<RootNavigatorParamList>
>;

/**
 * @example const navigation = useNavigation<ScreenNavigation<TasksStackParamList, 'TasksOverview'>>();
 */
export type ScreenNavigation<
  ParamList extends ParamListBase,
  RouteName extends RouteNameBase<ParamList>,
> = ScreenProps<ParamList, RouteName>['navigation'];

/**
 * @example const route = useRoute<ScreenRoute<TasksStackParamList, 'TasksOverview'>>();
 */
export type ScreenRoute<
  ParamList extends ParamListBase,
  RouteName extends RouteNameBase<ParamList>,
> = ScreenProps<ParamList, RouteName>['route'];

/**
 * Use when you don't care about the specific navigation type.
 *
 * @example const navigation = useNavigation<GenericScreenNavigation>();
 */
export type GenericScreenNavigation = ScreenNavigation<ParamListBase, string>;

/**
 * Use when you don't care about the specific route type.
 *
 * @example const route = useRoute<GenericScreenRoute>();
 */
export type GenericScreenRoute = ScreenRoute<ParamListBase, string>;
