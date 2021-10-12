import React from 'react';
import type {Node} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

import ProductList from './src/screens/ProductList';
import Menu from './src/screens/Menu';
import Wishlist from './src/screens/Wishlist';
import DetailProduct from './src/screens/Detail';
import ProductItem from './src/components/ProductItem';

const App: () => Node = () => {

    return (
        <View style={styles.container}>
            {/* <ProductList /> */}
            {/* <ProductItem /> */}
            <DetailProduct />
            {/* <Menu /> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 0,
        width: '100%',
        fontSize: 20,
        flex: 1,
    },
    title: {
        textAlign:'center',
        fontSize: 20
    },
});

export default App;
