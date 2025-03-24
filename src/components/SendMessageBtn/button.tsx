import './button.css';

export const SendMessageBtn = () => {
    return (
        <button className="form-btn" type="submit" disabled data-form-btn>
              <img src="./src/assets/images/icon-plane.svg" alt="paper plane icon" width="20" />
              <span>Send Message</span>
        </button>
    )
}