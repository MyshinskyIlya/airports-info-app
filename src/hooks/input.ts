import { ChangeEvent, useState } from "react";

interface InputReturn {
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const useInput = (initialValue = ""): InputReturn => {
    const [value, setValue] = useState("");

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return {
        value,
        onChange,
    };
};
