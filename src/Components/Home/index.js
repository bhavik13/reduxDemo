import React, { useState, useEffect, useCallback } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { styles } from './style';
import { deleteUser, getUser } from '../../Types';
import { Box, HStack, VStack, Text, Pressable, Avatar, FlatList,  AddIcon, } from 'native-base';
import { DELETE_USER } from '../../Actions';


const Home = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users );
    const isLoading = useSelector(state => state.isLoading );

    useEffect(() =>{
        getUser(dispatch);
    },[])

    const removeUser = (item) => {
        deleteUser(dispatch, item)
    }
    
    const renderItems = useCallback(({item}) => {
        return(
            <Box bg="primary.600" py="2" px="2" m="2" rounded="md" alignSelf="center" width="100%" >
                <HStack justifyContent="space-between">
                    <Box justifyContent="space-between">
                        <Text fontSize="lg" color="white">{item.first_name}</Text>
                        <Pressable rounded="sm" bg="primary.400" alignSelf="flex-start" py="2" px="3" _pressed={{ bg: 'primary.800' }}  onPress={() => removeUser(item)}>
                            <Text textTransform="uppercase" fontWeight="bold" color="black" >Delete</Text>
                        </Pressable>
                    </Box>
                    {/* <Avatar bg="green.500" source={{ uri: item.avatar}} height={10} width={10}>
                    </Avatar> */}
                </HStack>
            </Box>
        )
    }, [])


    const keyExtractor = useCallback((item) => item.id.toString(), []);
    return(
        <Box safeArea height="100%">
            {isLoading ? <Text>Loading........!</Text> :
                <FlatList
                    keyExtractor={keyExtractor}
                    data={users}
                    // extraData={users}
                    renderItem={renderItems}
                    contentContainerStyle={styles.container}
                />
            }
        </Box>
    )
}

export default Home