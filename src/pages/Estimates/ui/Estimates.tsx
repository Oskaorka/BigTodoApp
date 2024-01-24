import React, { useEffect, useState } from 'react'
import Column from './Colomn'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import './Estimates.scss'
import { useAppDispatch, useAppSelector } from 'app/redux/store'
import { loadPlaningStart } from 'app/redux/action/actionCreator'
import { useNavigate } from 'react-router-dom'
import Button from 'shared/ui/Button/Button'


const Estimates = () => {
    const { planingList } = useAppSelector(state => state.dataList || {});
    const dispatch = useAppDispatch();
    const ListsData = Object.values(planingList);


    const List = (nameList:string) => ListsData.filter((e:any)=>
        e.current_state === nameList
    );
    // console.log(List('Done'));
    
    const initialColumns = {
        Queue: {
            id: 'Queue',
            // list: [{title:'title'}, {title:'title-1'}]
            list: []
        },
        Development: {
            id: 'Development',
            // list: ['item 4', 'item 5', 'item 6']
            // list: ['item 4', 'item 5', 'item 6']
            list: [{title:'title-2'}]
            // list: []
        },
        Done: {
            id: 'Done',
            // list: []
            list: List('Done')
        }
    }
    // const initialColumns = {
    //     todo: {
    //         id: 'todo',
    //         list: ['item 1', 'item 2', 'item 3']
    //     },
    //     doing: {
    //         id: 'doing',
    //         list: []
    //     },
    //     done: {
    //         id: 'done',
    //         list: []
    //     }
    // }
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
    }
    const [columns, setColumns] = useState<any>(initialColumns)
    // const [columns, setColumns] = useState<any>(planingList)
  
    const onDragEnd = ({ source, destination }: DropResult) => {
        // Make sure we have a valid destination
        if (destination === undefined || destination === null) return null
  
        // Make sure we're actually moving the item
        if (
            source.droppableId === destination.droppableId &&
        destination.index === source.index
        )
            return null
  
        // Set start and end variables
        const start = columns[source.droppableId]
        const end = columns[destination.droppableId]
  
        // If start is the same as end, we're in the same column
        if (start === end) {
        // Move the item within the list
        // Start by making a new list without the dragged item
            const newList = start.list.filter(
                (_: any, idx: number) => idx !== source.index
            )
  
            // Then insert the item at the right location
            newList.splice(destination.index, 0, start.list[source.index])
  
            // Then create a new copy of the column object
            const newCol = {
                id: start.id,
                list: newList
            }
  
            // Update the state
            setColumns((state: any) => ({ ...state, [newCol.id]: newCol }))
            return null
        } else {
        // If start is different from end, we need to update multiple columns
        // Filter the start list like before
            const newStartList = start.list.filter(
                (_: any, idx: number) => idx !== source.index
            )
  
            // Create a new start column
            const newStartCol = {
                id: start.id,
                list: newStartList
            }
  
            // Make a new end list array
            const newEndList = end.list
  
            // Insert the item into the end list
            newEndList.splice(destination.index, 0, start.list[source.index])
  
            // Create a new end column
            const newEndCol = {
                id: end.id,
                list: newEndList
            }
  
            // Update the state
            setColumns((state: any) => ({
                ...state,
                [newStartCol.id]: newStartCol,
                [newEndCol.id]: newEndCol
            }))
            return null
        }
    }
    
    useEffect(() => {
        dispatch(loadPlaningStart())
        // setColumns(initialColumns);
    }, [dispatch]);
    if(planingList && planingList.length !== 0) {
        // const p =  List('Done');
        // dispatch(loadPlaningStart())
        // setColumns((prev: any) => ({prev, ...initialColumns.Done['list'] = p}));
        console.log(columns);
        return (
            <div className="">

                <DragDropContext onDragEnd={onDragEnd}>
                    <div className='StyledColumns'>
                        {Object.values(columns).map((col: any) => (
                            <Column col={col} key={col.id} />
                        ))}
                    </div>
                </DragDropContext>
                <Button onClick={handleClick} children='back' className='btn btn-back'/>
            </div>
        )
    }
    return <div className="">...loaded</div>
}
 
export default Estimates;