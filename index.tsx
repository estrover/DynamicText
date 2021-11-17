import React from 'react';
import { View, Text } from 'react-native';
import InputEditText from './InputEditText';

interface Props {
    style?: React.CSSProperties;
    containerInputStyle?: React.CSSProperties;
    inputStyle?: React.CSSProperties;
    multiline?: boolean;
    text?: string;
    onChange?: (e) => void;
    onEdit?: (index, isStart) => void;
    input?: boolean;
    timepicker?: boolean;
    index?: number;
    isStart?: boolean;
}

export default function HybridText({
    style,
    containerInputStyle,
    inputStyle,
    multiline,
    text,
    onChange,
    onEdit,
    input,
    timepicker,
    index,
    isStart,
}: Props): JSX.Element {
    console.log('input:', text);
    return (
        <View>
            {input ? (
                <InputEditText
                    multiline={multiline}
                    containerInputStyle={containerInputStyle}
                    inputStyle={inputStyle}
                    onChange={(e) => onChange(e)}
                    text={text}
                />
            ) : (
                <Text style={style}>{text ? text : '-'}</Text>
            )}
        </View>
    );
}
