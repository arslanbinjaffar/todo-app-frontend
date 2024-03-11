import  { FC, ChangeEvent } from 'react';

interface Props {
    type: string; 
    id: string
    name:string
    placeholder: string;
    className: string;
    value?: string | boolean; // Union type for value
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    required:boolean
}

const Input: FC<Props> = ({id,name,required, className, placeholder, type, value, onChange }) => {
    return (
        <>
            {type !== 'checkbox' && (
                <input
                    name={name}
                    id={id}
                    type={type}
                    className={className}
                    placeholder={placeholder}
                    value={value as string}
                    onChange={onChange}
                    required={required}
                />
            )}
            {type === 'checkbox' && (
                <input
                name={name}
                id={id}
                    type={type}
                    className={className}
            
                    checked={value as boolean}
                    onChange={onChange}
                />
            )}
        </>
    );
}

export default Input;
