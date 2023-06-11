import { makeAutoObservable } from "mobx";
import ButtonModel from "../button/button-model";

export default class ControlWithButtonsModel {
    value = '';
    leftButtons = [] as Array<ButtonModel>;
    rightButtons = [] as Array<ButtonModel>;
    
    constructor() {
        makeAutoObservable(this);
    }
}