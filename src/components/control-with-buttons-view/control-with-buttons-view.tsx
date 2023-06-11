import { FC } from "react";
import ButtonModel from "../../models/button/button-model";
import ButtonsContainer from "../buttons-container/buttons-container";
import styles from './control-with-buttons-view.module.css';

type ControlWithButtonsViewProps = {
    value: string;
    leftButtons: Array<ButtonModel>;
    rightButtons: Array<ButtonModel>;
    setInputValue: (value: string) => void;
}

const ControlWithButtonsView: FC<ControlWithButtonsViewProps> = ({
    value,
    setInputValue,
    leftButtons,
    rightButtons,
}) => {
    return (
        <div
            className={`${styles.wrapper}`}
        >
            {!!leftButtons.length && (
                <ButtonsContainer
                    buttons={leftButtons}
                    setInputValue={setInputValue}
                    value={value}
                />
            )}
            <input
                value={value}
                onChange={(e) => setInputValue(e.target.value)}
            />
            {!!rightButtons.length && (
                <ButtonsContainer
                    buttons={rightButtons}
                    setInputValue={setInputValue}
                    value={value}
                />
            )}
        </div>
    );
}

export default ControlWithButtonsView;