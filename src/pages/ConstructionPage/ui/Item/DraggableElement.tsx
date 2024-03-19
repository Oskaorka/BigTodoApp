/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useState } from 'react';
import { Droppable, DroppableProps } from 'react-beautiful-dnd';
import ListItem from './Item';

// type ComponentType = {
//   prefix: string;
//   elements: Array<string>;
// };

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

const isEmpty = (x:any) => !Object.keys(x || {}).length;
// const DraggableElement = ({ prefix:any, elements }: ComponentType) => {
const DraggableElement = ({ prefix, elements, deleteTask }: any) => {
    return (
        <div className="droppable">
            <h5>{prefix}</h5>
            <StrictModeDroppable droppableId={prefix}>
                {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                        {!isEmpty(elements) && elements.map((item: any, index: number) => (
                            <ListItem 
                                key={item.id}
                                item={item}
                                index={index}
                                deleteTask={deleteTask}
                            />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </StrictModeDroppable>
        </div>
    );
};

export default DraggableElement;