import { h } from 'preact';
import style from './style.less';

import VideoFeed from '../VideoFeed';
import SubContainer from '../subcontainer';

export default () => {
	return (
		<div class={style.container}>
			<div class={style.videofeed}>
				<VideoFeed url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
			</div>
			<div>
				<SubContainer />
			</div>
		</div>
	);
};
