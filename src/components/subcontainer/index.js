//TODO: add props to make like and bookmark buttons dynamic

import { h, Component } from 'preact';
import style from './style.less';

import Button from '../Button';

export default class SubContainer extends Component {
    render() {
        return (
            <div>
                <div class={style.subLeftContainer}>
                    <h3>A career in IBD: Prospects and Challenges</h3>
                    <h4>523 VIDEO VIEWS - 9 LIKES - 19 SHARES</h4>
                    <div class={style.shareVideoContainer}>
                        <Button textColor='white' bodyColor='green'>WhatsApp</Button>
                        <Button textColor='white' bodyColor='blue'>Facebook</Button>
                        <Button textColor='black' bodyColor='cyan'>Twitter</Button>
                        <Button textColor='white' bodyColor='grey'>Email</Button>
                        <Button textColor='white' bodyColor='red'>+ More</Button>
                    </div>
                </div>
                <div class={style.subRightContainer}>
                    <Button textColor='white' bodyColor='green'>Like</Button>
                    <Button>Bookmark</Button>   
                </div>
            </div>
        );
    }
}