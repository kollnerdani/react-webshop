import { Group, Input, FormInputLabel } from "./form_input.style";

const FormInput = ({label, inputOptions}) =>{
    return (
        <Group>
            <FormInputLabel shrink={inputOptions.value.length}>{label}</FormInputLabel>
            <Input {...inputOptions}/>
        </Group>
    )
}
export default FormInput;