import React, { Component } from 'react';
import {View,Text,ScrollView,Button} from 'react-native';
import Header from '../../library/components/Header';
import Styles from '../../library/styles';
import HostelCard from '../../library/components/HostelCard';
import favoritesStyles from '../../library/styles/favoritesStyles';
import PopupModal from '../../library/components/Modal';


class Favorites extends Component {
    render() {
        return (
            <>
            <Header  title={'Favorites'}/>
           <ScrollView style={[ {flex: 1}]} contentContainerStyle={[Styles.container_padding_bottom, Styles.container,]} >
               <HostelCard hide_mark_favorite = {true} style={favoritesStyles.hostel_card} />
               <HostelCard  hide_mark_favorite = {true} style={favoritesStyles.hostel_card}/>
              <PopupModal />
           </ScrollView>
          </>
        );
    }
}

export default Favorites;

