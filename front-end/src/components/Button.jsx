/* eslint-disable react/prop-types */
function Button({ text }) {
  return (
    <button className="border   border-white font-poppins font-normal cursor-pointer text-[16px] text-white rounded-lg p-1.5">
      {text}
    </button>
  );
}

export default Button;
