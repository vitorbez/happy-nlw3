import React from 'react';
import { Image, View, ScrollView, Text, StyleSheet, Dimensions } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import { Feather } from '@expo/vector-icons';

import mapMarkerIMG from '../images/map-marker.png';
import {RectButton} from 'react-native-gesture-handler';

export default function OrphanagesDetails() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.imagesContainer}>
                <ScrollView horizontal pagingEnabled>
                    
                </ScrollView>
                
            </View>
        </ScrollView>
    )
}