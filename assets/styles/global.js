import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        
    },
    titleText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: COLORS.text,
        fontFamily: 'Nunito-Bold',
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    },
    

});