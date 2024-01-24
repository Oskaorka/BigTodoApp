import { loadPlaningStart } from 'app/redux/action/actionCreator';
import { useAppDispatch, useAppSelector } from 'app/redux/store';
import { useCallback, useEffect, useState } from 'react';

const initialState = () => {
    const { planingList, loading } = useAppSelector(state => state.dataList || {});
    const dispatch = useAppDispatch();
    const lists = ['Queue', 'Development', 'Done'];
    // const getItems = (count: number, prefix: string) =>
    //     Array.from({ length: count }).map((k) => {
    //         const randomId = Math.floor(Math.random() * 1000);
    //         return {
    //             id: `item-${Date.now() + randomId}`,
    //             prefix,
    //             content: `item ${Date.now() + randomId}`
    //         };
    //     });
    
    const listsData = Object.values(planingList);
    const[ initState, setInitState] = useState({});
    // console.log(listsData.length);
    if(listsData && listsData?.length !==0) {
        console.log(listsData.length);
        console.log(loading);
        // if(loading) {
        const listFilterName = (nameList:string) => listsData.filter((e:any)=>
            e.current_state === nameList
        );
        const generateLists = useCallback(
            () =>
                lists.reduce(
                    (acc, listKey) => ({ ...acc, [listKey]: listFilterName(listKey)}),
                    {}
                ),
            [lists]
        );
        setInitState(generateLists());
        console.log(initState);
        
        return ( initState );
    }
    useEffect(() =>{
        dispatch(loadPlaningStart())
    },[dispatch])
    // console.log(generateLists());
    // return null
    
}
 
export default initialState;