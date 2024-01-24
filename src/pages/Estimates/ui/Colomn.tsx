import React, { useEffect, useState } from 'react'
import Item from './Item'
import { Droppable, DroppableProps } from 'react-beautiful-dnd'
// import { styled } from '../stiches.config'

interface ColumnProps {
  col: {
    id: string
    // list: string[]
    list: string[] | any
  }
}

export const StrictModeDroppable = ({ children, ...props }: DroppableProps) => {
    const [enabled, setEnabled] = useState(false);
    useEffect(() => {
        const animation = requestAnimationFrame(() => setEnabled(true));
        return () => {
            cancelAnimationFrame(animation);
            setEnabled(false);
        };
    }, []);
    if (!enabled) {
        return null;
    }
    return <Droppable {...props}>{children}</Droppable>;
};

const Column: React.FC<ColumnProps> = ({ col: { list, id } }) => {
    console.log(list);
    console.log(id);
    // console.log(col);
    
    return (
        <StrictModeDroppable droppableId={id}>
            {provided => (
                <div className='StyledColumn'>
                    <h2>{id}</h2>
                    <div className='StyledList' 
                        {...provided.droppableProps} 
                        ref={provided.innerRef}
                    >
                        {list.map((text: any, index: any) => (
                            <>
                                <>{console.log(text)}</>
                                <>{console.log(index)}</>
                                <Item key={text.title+index} text={text} index={index} />
                            </>
                        ))}
                        {provided.placeholder}
                    </div>
                </div>
            )}
        </StrictModeDroppable>
    )
}

export default Column
