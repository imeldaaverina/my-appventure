

const Input = ({ label, name, type, onChange, onBlur, placeholder, dataTestId }) => {
  return (
    <label htmlFor={name} className="block w-full mb-3">
      <div className="font-normal text-sm mb-1">{label}</div>
      <input 
      type={type} 
      name={name} 
      className="focus:ring-0 block focus:outline-none border-b text-black text-sm w-full p-1 px-3 mb-2 rounded-b-lg" 
      placeholder={placeholder} 
      onChange={onChange} 
      onBlur={onBlur} 
      data-testid={dataTestId} 
      />
    </label>
  );
};

export default Input;
