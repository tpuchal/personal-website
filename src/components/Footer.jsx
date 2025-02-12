import Image from "next/image"

const Footer = () => {
  return (
    <footer id="contact" className="flex flex-col lg:flex-row lg:items-center lg:px-20 h-[300px] items-start justify-between border-2 border-green-500 bg-gray-700 mx-2 md:mx-8 my-2 py-2 px-8">
        <div className="w-full flex justify-center items-center">
          <span className="">tpuchal 2025</span>
        </div>
        <span>Find me on: </span>
        <a href="https://github.com/tpuchal"><Image src='/github-icon-1.svg' height={0} width={0} alt="github" style={{height: '50px', width: 'auto'}}></Image></a>
        <a href="https://www.linkedin.com/in/tomasz-puchalski-b17599165/"><Image src='/linkedin-icon-2.svg' height={0} width={0} alt="github" style={{height: '50px', width: 'auto'}}></Image></a>
        <a href="mailto:galeon-yeti-0h@icloud.com"><Image src='/email-svgrepo-com.svg' height={0} width={0} alt="github" style={{height: '50px', width: 'auto'}}></Image></a>
    </footer>
  )
}

export default Footer