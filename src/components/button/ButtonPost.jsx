const ButtonPost = ({ type, label, disabled }) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className="flex justify-center items-center text-xs opacity-100 bg-[#457275] w-20 px-2 h-6 text-white p-0.5 rounded"
    >
      {label}
    </button>
  );
};

export default ButtonPost;
