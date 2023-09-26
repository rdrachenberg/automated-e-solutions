import Image from "next/image";

export const ShoppingLogos = () => {
    return (
        <div className='max-w-lg'>
            <Image src={'/misc/shopping-carts.png'} width={500} height={500} alt='shopping cart logos'/>
        </div>
    )
}