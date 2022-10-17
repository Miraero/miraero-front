import { atom } from "recoil";

export const userDataState = atom({
    key: "userDataState",
    default: {
        currentStep: false,
        font: "1",
        letterType: "1",
    },
});
