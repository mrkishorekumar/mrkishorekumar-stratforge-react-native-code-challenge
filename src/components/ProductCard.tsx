import React, { memo, useCallback, useMemo } from 'react';
import { Pressable, StyleSheet, Text, View, Dimensions } from 'react-native';
import FastImage from '@d11/react-native-fast-image';
import { Product } from '../interface/Api';
import { RootState } from '../store';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { addToCart, addToWishlist, removeFromCart, removeFromWishlist } from '../store/product';

const SCREEN_WIDTH = Dimensions.get('window').width;
const CARD_MARGIN = 8;
const CARD_WIDTH = (SCREEN_WIDTH / 2) - (CARD_MARGIN * 2.5);

function ProductCard({ info }: { info: Product }) {
    const state = useSelector((state: RootState) => state.product, shallowEqual);
    const dispatch = useDispatch();

    const discountAmount = useMemo(() => (info.price * info.discountPercentage) / 100, [info.price, info.discountPercentage]);
    const finalPrice = useMemo(() => Math.floor(info.price - discountAmount), [info.price, discountAmount]);
    const alreadyInCart = useMemo(() => state.cart.some((item) => item.id === info.id), [state.cart, info.id]);
    const alreadyInWishlist = useMemo(() => state.wishlist.some((item) => item.id === info.id), [state.wishlist, info.id]);

    const onToggleWishlist = useCallback(() => {
        if (!alreadyInWishlist) {
            dispatch(addToWishlist(info));
        } else {
            dispatch(removeFromWishlist(info.id));
        }
    }, [alreadyInWishlist, dispatch, info]);

    const onToggleCart = useCallback(() => {
        if (!alreadyInCart) {
            dispatch(addToCart(info));
        } else {
            dispatch(removeFromCart(info.id));
        }
    }, [alreadyInCart, dispatch, info]);

    return (
        <View style={styles.card}>
            <FastImage
                source={{ uri: info.thumbnail }}
                style={styles.image}
                fallback
            />
            <Text style={styles.title} numberOfLines={1}>
                {info.title}
            </Text>
            <Text style={styles.description} numberOfLines={2}>
                {info.description}
            </Text>
            <View style={styles.priceRow}>
                <Text style={styles.discountPrice}>₹{finalPrice}</Text>
                <Text style={styles.originalPrice}>₹{Math.floor(info.price)}</Text>
            </View>
            <View style={styles.iconRow}>
                <Pressable onPress={onToggleWishlist}>
                    <Text style={styles.icon}>{alreadyInWishlist ? '❤️' : '🤍'}</Text>
                </Pressable>
                <Pressable onPress={onToggleCart}>
                    <Text style={styles.icon}>{alreadyInCart ? '🛒' : '➕'}</Text>
                </Pressable>
            </View>
        </View>
    );
}

export default memo(ProductCard);

const styles = StyleSheet.create({
    card: {
        width: CARD_WIDTH,
        backgroundColor: '#fff',
        margin: CARD_MARGIN,
        padding: 12,
        borderRadius: 12,
        elevation: 3,
    },
    image: {
        height: 120,
        borderRadius: 8,
        marginBottom: 8,
    },
    title: {
        fontWeight: '600',
        fontSize: 14,
        marginBottom: 2,
    },
    description: {
        fontSize: 12,
        color: '#444',
        marginBottom: 6,
    },
    priceRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 6,
    },
    discountPrice: {
        fontWeight: 'bold',
        color: '#E53935',
        marginRight: 8,
    },
    originalPrice: {
        textDecorationLine: 'line-through',
        color: '#888',
        fontSize: 12,
    },
    iconRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    icon: {
        fontSize: 20,
    },
});
