import { Button } from './Button';

export default {
    title: 'component/Atom/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        buttonTitle: {
            description: 'Title of the button (String)',
        },
        buttonType: {
            description: 'Type of the button primary | secondary',
        },
    },
};

export const PrimaryButton = {
    args: {
        buttonTitle: 'Click Me',
    },
};
export const SecondaryButton = {
        args: {
            buttonTitle: 'Click Me',
            buttonType: 'button__secondary',
        },
};
