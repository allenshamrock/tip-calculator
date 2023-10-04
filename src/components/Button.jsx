/* eslint-disable react/prop-types */
const Button = ({children,classname,onClick}) => {
  return <button className={`btn ${classname}`} onClick={onClick}
  >{children}</button>;
};

export default Button;
