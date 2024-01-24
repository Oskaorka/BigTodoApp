import { ButtonHTMLAttributes, FC } from 'react';
import './Button.scss'

interface IBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    // typeBtn?: string,
    children?: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    className: string
    // eventBtn:
}

const Button: FC<IBtnProps> = ({children, className, onClick}) => {
    return ( 
        <div>
            <button className={className} onClick={onClick}>{children}</button>
        </div>
    );
}
 
export default Button;