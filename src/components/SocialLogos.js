import Image from "next/image"
import Link from "next/link";

const SocialLogos = () => {
    return (
        <div className='container mx-auto mt-1 justify-center items-center min-w-screen flex mb-1 '>
            <Link href={'https://www.youtube.com/@Aecomsolution/videos'} target='_blank'>
                <div className='p-2 sm:p-6'>
                    <Image width={125} height={125} src='/misc/youtube.png' alt='youtube company logo' style={{ width: '100%', height: 'auto' }} className='rounded-full max-h-14'/>
                </div>
            </Link>
            <Link href={'/'} target='_blank'>
                <div className='p-2 sm:p-6'>
                    <Image width={125} height={125} src='/misc/instagram.png' alt='instagram company logo' style={{ width: '100%', height: 'auto' }} className='rounded-full max-h-14'/>
                </div>
            </Link>
            <Link href={'/'} target='_blank'>
                <div className='p-2 sm:p-6'>
                    <Image width={125} height={125} src='/misc/facebook.png' alt='facebook company logo' style={{ width: '100%', height: 'auto' }} className='rounded-full max-h-14'/>
                </div>
            </Link>
            <Link href={'https://www.tiktok.com/@automatedecominvestments?lang=en'} target='_blank'>
                <div className='p-2 sm:p-6'>
                    <Image width={125} height={125} src='/misc/tik-tok.png' alt='tiktok company logo' style={{ width: '100%', height: 'auto' }} className='rounded-full max-h-14'/>
                </div>
            </Link>
        </div>
    )
}

export default SocialLogos