import { Dimensions, Platform } from 'react-native';
import { getDeviceId } from 'react-native-device-info';

const screen = Dimensions.get('screen');

export const ToVW = (inputWidth: number): number => {
    return inputWidth * (screen.width / 100);
};

export const ToVH = (inputHeight: number): number => {
    const iPhone = getDeviceId();
    if (Platform.OS == 'ios' && iPhone.indexOf('iPhone') != -1) {
        const model = iPhone.split('iPhone')[1];
        if (Number(model.split(',')[0]) >= 11) {
            return inputHeight * ((screen.height - 18.51) / 100);
        }
    }
    return inputHeight * (screen.height / 100);
};
