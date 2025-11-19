import {useEffect} from 'react';
import { 
    View, 
    Image, 
    StyleSheet 
} from 'react-native';

const Splash = ({onFinish}:{onFinish: () => void}) => {
useEffect ( () => {
    const timer = setTimeout (() => {
        onFinish();
    }, 5000);
    return() => clearTimeout(timer);
},[onFinish]);

    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/main_logo.png')}
                            resizeMode='contain'/>
        </View>
    );
};
const styles = StyleSheet.create({
            container:{
                flex:1,
                justifyContent: 'center',
                backgroundColor: 'rgba(248, 248, 248, 0.84)'
            },
            logo:{
                width: 200,
                height: 200
            }
});
export default Splash