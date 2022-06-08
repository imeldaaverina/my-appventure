import { Icon } from '@iconify/react';
import React from 'react';

const ButtonBack = ({ navigation: { goBack } }) => {
    return (

        <button >
            <View>
                <Icon icon="eva:arrow-circle-left-outline" width="30" onPress={() => goBack()} />
            </View>
        </button>

    )
}

export default ButtonBack;