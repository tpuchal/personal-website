import Image from "next/image"

const Footer = () => {
  return (
    <footer id="contact" className="flex justify-evenly items-center px-24 py-10 bg-gray-500 mx-8 mt-10 border-2 border-green-500">
        <span>tpuchal 2025</span>
        <span>Find me on: </span>
        <a href="https://github.com/tpuchal"><Image src='/github-icon-1.svg' height={0} width={0} alt="github" style={{height: '50px', width: 'auto'}}></Image></a>
        <a href="https://www.linkedin.com/in/tomasz-puchalski-b17599165/"><Image src='/linkedin-icon-2.svg' height={0} width={0} alt="github" style={{height: '50px', width: 'auto'}}></Image></a>
        <a href="mailto:galeon-yeti-0h@icloud.com"><Image src='/email-svgrepo-com.svg' height={0} width={0} alt="github" style={{height: '50px', width: 'auto'}}></Image></a>
    </footer>
  )
}

export default Footer