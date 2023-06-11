export default class ButtonModel {
    title = '';
    onClick: (({
        setInputValue,
        value,
    } : {
        setInputValue: (value: string) => void;
        value: string;
    }) => void) | undefined = undefined;

    constructor(
        title: string,
        onClick?: (({
            setInputValue,
            value,
        } : {
            setInputValue: (value: string) => void;
            value: string;
        }) => void),
    ) {
        this.title = title;
        this.onClick = onClick;
    };
};