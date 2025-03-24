import './input.css';

interface InputProps {
    placeholder: string;
    name: string;
}

export const Input = (props: InputProps) => {
    const { placeholder, name} = props
    return (
        <input
        placeholder={placeholder}
        type="text"
        className="form-input"
        name={name}
        required
        />
    )
}

