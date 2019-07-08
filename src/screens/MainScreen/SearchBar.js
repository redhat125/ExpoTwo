import React from "react";
import {Dimensions} from "react-native";
import { View, Icon,InputGroup, Input } from "native-base";

export const SearchBox = ()=> {
		return(
			<View style={styles.searchBox}>
				<View style={styles.inputWrapper}>
					<InputGroup>
                        <Icon name='ios-search' />
						<Input 
							onFocus={()=>console.log("input on focus")}
							style={styles.inputSearch}
							placeholder="Search..."
							onChangeText={()=>console.log("text changing")}
						/>
					</InputGroup>
				</View>
			</View>

		);
};

export default SearchBox;

const styles = {
    searchBox:{
        top:50,
        position:"absolute",
        width:'100%'
    },
    inputWrapper:{
        marginLeft:15,
        marginRight:10,
        marginTop:10,
        marginBottom:0,
        backgroundColor:"#fff",
        opacity:0.9,
        borderRadius:10
    },
    inputSearch:{
        fontSize:14
    },
    label:{
        fontSize:10,
        fontStyle: "italic",
        marginLeft:10,
        marginTop:10,
        marginBottom:0
    }
};