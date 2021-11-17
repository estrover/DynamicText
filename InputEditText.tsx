import React from 'react';
import { View, TextInput } from 'react-native';
import { useTranslation } from 'react-i18next';
import { ToVH, ToVW } from '../Theme/Sizing';

interface Props {
    style?: React.CSSProperties;
    containerInputStyle?: React.CSSProperties;
    inputStyle?: React.CSSProperties;
    multiline?: boolean;
    text: string;
    onChange: (e) => void;
}

export default function InputEditText({ containerInputStyle, inputStyle, multiline, text, onChange }: Props): JSX.Element {
    const { t } = useTranslation(['explore', 'attraction', 'bookmark', 'user_info', 'day', 'draw_content']);
    return (
        <View
            style={{
                marginTop: multiline ? ToVH(1) : 0,
                borderWidth: 1,
                borderRadius: 10,
                borderColor: '#9BA7AC',
                ...containerInputStyle,
            }}
        >
            <TextInput
                style={{
                    color: 'black',
                    marginTop: multiline ? ToVH(1) : 0,
                    marginBottom: multiline ? ToVH(1) : 0,
                    paddingLeft: multiline ? ToVW(2) : 0,
                    paddingRight: multiline ? ToVW(2) : 0,
                    ...inputStyle,
                }}
                value={text}
                onChangeText={(e) => onChange(e)}
                multiline={multiline ? true : false}
            />
        </View>
    );
}
