import { FC } from "react";
import ButtonModel from "../../models/button/button-model";
import styles from './buttons-comtainer.module.css';

type ButtonsContainerProps = {
    buttons: Array<ButtonModel>;
    setInputValue: (value: string) => void;
    value: string;
};

const ButtonsContainer: FC<ButtonsContainerProps> = ({
    buttons,
    setInputValue,
    value,
}) => {
    return (
        <div
            className={`${styles.wrapper}`}
        >
            {buttons.map((button) => (
                <button
                    onClick={() => {
                        if (button.onClick !== undefined) button.onClick({
                            setInputValue,
                            value,
                        });
                    }}
                >
                    {button.title}
                </button>
            ))}
        </div>
    );
};

export default ButtonsContainer;