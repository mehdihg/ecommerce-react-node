

const Button=({children,type,formik,className,FormsBtn,onClick})=>{
  
    return(
      <>
        {FormsBtn ?
        (
        <button type={type} className={className} disabled={formik.isValue}>
        {children}
        </button>
        )
        :
        (
        <button type={type} className={className} onClick={onClick}>
        {children}
        </button>
        )
        }
      </>
    )
    
}
export default Button