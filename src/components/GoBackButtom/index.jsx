import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';

import { THEME } from '../../theme';

export function GoBackButtom() {
    const navigation = useNavigation()

    return (
        <TouchableOpacity style={styles.goBackButtom} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={30} color={THEME.COLORS.ACCENT_100}/>
        </TouchableOpacity>
    );
}