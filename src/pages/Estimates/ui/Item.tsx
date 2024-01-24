import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

interface ItemProps {
  text: string|any
  index: number
}

const Item: React.FC<ItemProps> = ({ text, index }) => {
    const {title}: any = text;
    return (
        <Draggable draggableId={text} index={index}>
            {provided => (
                <div className='StyledItem'
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    {title}
                </div>
            )}
        </Draggable>
    )
}

export default Item
