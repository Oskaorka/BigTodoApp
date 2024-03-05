export interface IInputForm {
    // target: any;
    htmlFor: string,
    tileLabel : string,
    id: string,
    type: string,
    name: string,
    placeholder: string,
    onChange: any,
    // onChange:() => void,
    value: string
}

const InputForm = ({
    htmlFor,
    tileLabel,
    id,
    type,
    name,
    placeholder,
    onChange,
    value
}:IInputForm &  React.InputHTMLAttributes<HTMLInputElement>) => {
    return ( 
        <>
            <label htmlFor={htmlFor}>{tileLabel}</label>
            <input 
                id={id} 
                type={type} 
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                value={value || ''}
            />
        </>
    );
}
 
export default InputForm;