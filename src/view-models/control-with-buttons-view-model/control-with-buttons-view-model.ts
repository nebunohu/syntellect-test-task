import { makeAutoObservable } from "mobx";
import ControlWithButtonsModel from "../../models/control-with-buttons/control-with-buttons-model";
import ButtonModel from "../../models/button/button-model";

export class ControlWithButtonsViewModel {
    model = new ControlWithButtonsModel();

    constructor({ leftButtons, rightButtons }: {
        leftButtons?: Array<ButtonModel>,
        rightButtons?: Array<ButtonModel>,
    }) {
        makeAutoObservable(this);
        if (leftButtons) this.model.leftButtons = leftButtons;
        if (rightButtons) this.model.rightButtons = rightButtons;
    };

    setInputValue(value: string) {
        this.model.value = value;
    };
};