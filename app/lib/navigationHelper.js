import { NavigationActions } from 'react-navigation';

export function reset(index, routeName) {
    return NavigationActions.reset({
        index,
        actions: [
            NavigationActions.navigate({ routeName })
        ]
    });
}

export function navigate(routeName, params = null) {
    return NavigationActions.navigate({
        routeName: routeName,
        params: params
    });
}

export function goBack() {
    return NavigationActions.back();
}