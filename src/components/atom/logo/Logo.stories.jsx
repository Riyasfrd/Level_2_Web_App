import {Logo} from './Logo';

const style = {
    background: '#000000',
    padding: '20px',
    width: 280,
    display: 'flex',
    justifyContent: 'center',
};

export default {
    title: 'component/atom/Logo',
    component: Logo,
    decorators: [(Story) => <div style={style}>{Story()}</div>],
    tags: ['autodocs'],
};

export const Default = () => <Logo />;

//in here we need to use .jsx because we are using JSX syntax <div>
//