import { ButtonHTMLAttributes, FC } from 'react';
import './Button.scss'

interface IBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    // typeBtn?: string,
    typeBtn?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'],
    children?: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    className: string,
    // type?: string
    // eventBtn:
}

const Button: FC<IBtnProps> = ({children, className, onClick, typeBtn}) => {
    return ( 
        <>
            <button type={typeBtn} className={className} onClick={onClick}>{children}</button>
        </>
    );
}
 
export default Button;