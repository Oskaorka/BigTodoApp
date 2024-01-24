import { ITodos } from 'app/redux/reducers/data';
import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
// import Item from '../Item/Item'
// import { styled } from '../stiches.config'

interface ColumnProps {
  col: {
    id: string
    list: string[]
    // className?: string|any
    className?: IListStyle[]
    // list: ITodos | any
  }
}
interface IListStyle {
  col: {
    backgroundColor: string,
    borderRadius: number,
    padding: string,
    display: number,
    flexDirection: string,
    flexGrow: number,
    marginTop: number
    // list: ITodos | any
  }
}

// const StyledColumn = styled('div', {
//     padding: '24px 16px',
//     display: 'flex',
//     flexDirection: 'column',
//     marginTop: 8,

//     h2: {
//         margin: 0,
//         padding: '0 16px'
//     }
// })

// const ListStyle = {
//     backgroundColor: '#ddd',
//     borderRadius: 8,
//     padding: 16,
//     display: 'flex',
//     flexDirection: 'column',
//     flexGrow: 1,
//     marginTop: 8
// }
// const StyledList = styled('div', {
//     backgroundColor: '#ddd',
//     borderRadius: 8,
//     padding: 16,
//     display: 'flex',
//     flexDirection: 'column',
//     flexGrow: 1,
//     marginTop: 8
// })

// const Column: React.FC<ColumnProps> = ({ col: { list, id } }) => {
//     console.log(list);
//     console.log(id);
    
//     return (
//         <Droppable droppableId={id}>
//             {(provided) => (
//                 <div className='ColumnStyle'>
//                     <h2>{id}</h2>
//                     <div {...provided.droppableProps} ref={provided.innerRef}>
//                         {list.map((text, index) => (
//                             <Item key={text} text={text} index={index} />
//                         ))}
//                         {provided.placeholder}
//                     </div>
//                 </div>
//             )}
//         </Droppable>
//     )
// }

// export default Column