import './form_input.scss'
const FormInput = ({label, inputOptions}) =>{
    return (
        <div className='group'>
            <label className={`${inputOptions.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
            <input className="form-input" {...inputOptions}/>
        </div>
    )
}
export default FormInput;