import Image from "next/image"
const CompanyLogos = () => {
    return (
        <div className='container mx-auto sm:mt-20 sm:grid sm:grid-flow-col sm:grid-cols-6 sm:grid-gap-1 sm:mx-auto justify-center items-center min-w-screen flex mb-10 mt-10'>
        <div className=''>
            <Image width={125} height={125} src='/misc/acer.png' />
        </div>
        <div className=''>
            <Image width={125} height={125} src='/misc/Keurig.png' />
        </div>
        <div className=''>
            <Image width={125} height={125} src='/misc/lg.png' />
        </div>
        <div className=''>
            <Image width={125} height={125} src='/misc/Nespresso.png' />
        </div>
        <div className=''>
            <Image width={125} height={125} src='/misc/phillips.png' />
        </div>
            <div className=''>
            <Image width={125} height={125} src='/misc/vizio.png' />
            </div>
            
        </div>
    )
}

export default CompanyLogos