import { ChangeEvent} from "react"

interface inputBoxProps{
    label : string,
    placeholder: string,
    type : string
    onChange : (e: ChangeEvent<HTMLInputElement>) => void
} 

const InputBox : React.FC<inputBoxProps> = ({label  , placeholder , type , onChange}) =>
{
    return(
        <div className="py-2">
             <label htmlFor={label} className="font-bold">{label}</label>
            <input
                id={label}
                type={type}
                placeholder={placeholder}
                className="border rounded-md  px-2 py-2 w-full"
                onChange={onChange}
            />
        </div>
    )
}

export default InputBox