

const Button=({children,type,formik,className,FormsBtn})=>{
  
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
        <button type={type} className={className}>
        {children}
        </button>
        )
        }
      </>
    )
    
}
export default Button