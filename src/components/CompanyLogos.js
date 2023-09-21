import Image from "next/image"
const CompanyLogos = () => {
    return (
        <div className='container mx-auto mt-10 sm:grid sm:grid-flow-col sm:grid-cols-6 sm:grid-gap-4 sm:mx-auto items-center min-w-screen flex mb-10'>
            <div className='p-2 sm:p-6'>
                <Image width={125} height={125} src='/misc/acer.png' alt='acer comany logo' style={{ width: '100%', height: 'auto' }}/>
            </div>
            <div className='p-2 sm:p-6'>
                <Image width={125} height={125} src='/misc/Keurig.png' alt='keurig comany logo' style={{ width: '100%', height: 'auto' }}/>
            </div>
            <div className='p-2 sm:p-6'>
                <Image width={125} height={125} src='/misc/lg.png' alt='lg comany logo' style={{ width: '100%', height: 'auto' }}/>
            </div>
            <div className='p-2 sm:p-6'>
                <Image width={125} height={125} src='/misc/Nespresso.png' alt='nespresso comany logo' style={{ width: '100%', height: 'auto' }}/>
            </div>
            <div className='p-2 sm:p-6'>
                <Image width={125} height={125} src='/misc/phillips.png' alt='phillips comany logo' style={{ width: '100%', height: 'auto' }}/>
            </div>
            <div className='p-2 sm:p-6'>
                <Image width={125} height={125} src='/misc/vizio.png' alt='vizio comany logo' style={{ width: '100%', height: 'auto' }}/>
            </div>
        </div>
    )
}

export default CompanyLogos