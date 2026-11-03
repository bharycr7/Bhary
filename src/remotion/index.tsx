import {Composition,registerRoot} from 'remotion';
import {ProjectFilm} from './ProjectFilm';
const Root=()=> <Composition id="AexvionProductFilm" component={ProjectFilm} durationInFrames={360} fps={30} width={1280} height={720} defaultProps={{slug:'aexvion'}}/>;
registerRoot(Root);
