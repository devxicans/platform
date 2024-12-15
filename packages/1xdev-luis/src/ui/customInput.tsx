type inputProps = {
  label: string;
  type: string;
  id: string;
  placeholder: string;
  value?: string;
}

export const CustomInput = ({label, type, id, placeholder, value}: inputProps) => {
  return(
    <div>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} placeholder={placeholder} value={value}/>
    </div>
  )
}


