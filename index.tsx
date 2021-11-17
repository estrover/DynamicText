import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { useTranslation } from 'react-i18next';
import InputEditText from './InputEditText';
import TimePicker from './TimePicker';

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
    const { t } = useTranslation(['explore', 'attraction', 'bookmark', 'user_info', 'day', 'draw_content']);
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
            ) : timepicker ? (
                <TimePicker
                    index={index}
                    isStart={isStart}
                    onEdit={(index, isStart) => onEdit(index, isStart)}
                    text={text}
                />
            ) : (
                <Text style={style}>{text ? text : '-'}</Text>
            )}
        </View>
    );
}
