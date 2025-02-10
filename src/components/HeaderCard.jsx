

const HeaderCard = ({children, className}) => {
  return (
    <h1 className={`py-4 px-4 flex align-middle justify-start text-6xl ${className}`}>
        {children}
    </h1>
  )
}

export default HeaderCard