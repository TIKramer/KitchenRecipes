//So we can navigate from context

import { CommonActions } from '@react-navigation/native';

let navigator: { dispatch: (arg0: CommonActions.Action) => void; };

export const setNavigator = (nav: { dispatch: (arg0: CommonActions.Action) => void; }) => {
  navigator = nav;
};

export const navigate = (name: string, params: any) => {
  navigator.dispatch(
    CommonActions.navigate({
      name,
      params
    })
  );
};
