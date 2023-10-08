/* eslint-disable react/no-unescaped-entities */
import Link from "next/link"
import Image from "next/image"

const FAQ = () => {
    return (
        <div className="container mt-3 mx-auto md:px-6 bg-white p-10 rounded-md">
        
        <section className="mb-2">
            <div className="grid gap-4 md:grid-cols-2 sm:min-w-0">
            <div className="mb-6 md:mb-0 justify-center ">
                <h2 className="mb-6 text-3xl font-bold">Frequently asked questions</h2>

                <p className="text-neutral-500 dark:text-black">
                Didnt find your answer in the FAQ?
                <Link href="/#calender"
                    className="text-blue-500 transition duration-300 hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"> Contact
                    our sales team</Link>.
                </p>
                <div className="hidden md:block">
                    <div className='p-3 mb-20 mx-auto'>
                        <Image width={500} height={500} src='/misc/faq-2.jpg' alt='light bulb ecommerce business' className='mx-auto my-auto w-full h-auto' priority/>
                    </div>
                    <div className='p-3 border-8 border-orange-300 w-96 mx-auto'>
                        <Image width={400} height={500} src='/misc/faq.jpg' alt='Frequently asked questions ecommerce business' className='mx-auto my-auto w-full h-auto' priority/>
                    </div>
                    <div className=' p-3 mt-20 border-8 border-green-500 max-w-max mx-auto'>
                        <Image width={400} height={500} src='/misc/success.jpg' alt='plan for success ecommerce business' className='mx-auto my-auto w-full h-auto' priority/>
                    </div>
                </div>
            </div>

            <div className="mb-6 md:mb-0">
                <p className="mb-4 font-bold">How long does it take until my store is running?</p>
                <p className="mb-12 text-neutral-500 dark:text-gray-700">
                Typically, it takes about a month for your store to become operational and for your initial inventory purchase to be sent to your FBA account. Full scaling to maximize inventory purchasing power usually takes 3-6 months.
                </p>

                <p className="mb-4 font-bold">Is this a truly passive business?</p>
                <p className="mb-12 text-neutral-500 dark:text-gray-700">
                On average, clients spend only 3-6 hours per month on this business. Your main responsibilities are managing Amazon/Walmart payouts, and maintaining available capital for inventory purchases.
                </p>

                <p className="mb-4 font-bold">
                Do you have your own warehouses? Is this an American operation?
                </p>
                <p className="mb-12 text-neutral-500 dark:text-gray-700">
                Yes, we operate a mix of our own warehouses and utilize third parties in Florida and California. We also have a third office with backend support in and outside the US. We source inventory from various locations in the US and distribute it from our warehouses to our partner Store's FBA / Arbitrage accounts.
                </p>
                <p className="mb-4 font-bold">
                Why don't you just open up a bunch of digital stores?
                </p>
                <p className="mb-12 text-neutral-500 dark:text-gray-700">
                Amazon allows only one seller per household.. They track IP addresses to ensure this is upheld. The other reason is Capital reasons. We utilize our clients' capital to enable them to buy wholesale items at a discount, sell on Amazon, and then reinvest a percentage for scaling operations and sourcing better product deals.
                </p>
                <p className="mb-4 font-bold">
                Realistically, what can I expect to earn from my partner store?
                </p>
                <p className="mb-12 text-neutral-500 dark:text-gray-700">
                Typically, our partner stores generate monthly returns around 20% of their total revenue after the profit split, once the store is fully scaled. The more inventory you purchase, the higher your potential earnings, with profit margins remaining constant. Successful partners often have more capital and effective credit and cash flow management.

                </p>
                <p className="mb-4 font-bold">
                Is the AMZ Market Over-Saturated?
                </p>
                <p className="mb-12 text-neutral-500 dark:text-gray-700">
                No, the Amazon marketplace is not over-saturated nor is e-commerce in general. Amazon has 4 million seller accounts compared to 200 million Prime subscribers, with $502.19 billion in revenue on Amazon in 2022. Third-party sellers constitute 50% of Amazon's total sales, indicating ample opportunities for growth.
                </p>
                
            </div>
            </div>
        </section>
        
        </div>

    )
}

export default FAQ