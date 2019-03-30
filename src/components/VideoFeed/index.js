import { h, Component } from 'preact';
import ReactPlayer from 'react-player';
import style from './style.less';

export default class VideoFeed extends Component {
    render(props, state) {
        return (
            <div class={style.videoParentContainer}>
                <div class={style.videoChildContainer}>
                    <ReactPlayer
                        url = {props.url}
                        playing = {false}
                        loop = {false}
                        width = {1000}
                        height = {500}
                        pip = {true}
                    />
                </div>
            </div>
        );
    }
}