
import "./TchatArea.scss"
import imageButton from '../../../assets/img/send.png';

function TchatArea() {




    return (

        <div className="Container-textArea">
            <div className="TextArea"></div>
            <div className="InputArea">
                <input type="text" value="" placeholder="Send a message"></input>
                <button type="submit" className="ImageButton">
                    <img src={imageButton} alt="Button Image" />
                </button>
            </div>
        </div>

    )

}

export default TchatArea