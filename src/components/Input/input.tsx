import './input.css';

export const Input = ({ placeholder , name }) => {
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