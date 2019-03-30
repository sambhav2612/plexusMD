import { h, Component } from 'preact';
import style from './style.less';

export default class Button extends Component {
    render(props) {
        return (
            <button 
                class={style.buttonContainer} 
                style={{
                    backgroundColor: this.props.bodyColor,
                    color: this.props.textColor,
                }}
            >
                {props.children}
            </button>
        );
    }
}