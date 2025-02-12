

const HeaderCard = ({children, className, id}) => {
  return (
    <h1 className={`py-4 px-4 flex align-middle justify-start lg:text-6xl md:text-4xl text-2xl ${className}`} id={id}>
        {children}
    </h1>
  )
}

export default HeaderCard