import React from "react";
import {
  Button,
  Icon,
  View
} from "native-base";



export default LeftTopMenu = (props)=> {
    return (<View style={styles.menuBox}>
                <Button
                    transparent
                    onPress={() => props.toggleDrawer()}
                >
                    <Icon name="menu" style={styles.menuButton}/>
                </Button>
            </View>);
};


const styles = {
    menuBox:{
        top:10,
        position:"absolute"
    },
    menuButton: {
        fontSize: 40
      }
  };