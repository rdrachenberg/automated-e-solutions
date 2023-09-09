/* eslint-disable react/no-unescaped-entities */
import Link from "next/link"
import Image from "next/image"

const FAQ = () => {
    return (
        <div className="container mt-3 mx-auto md:px-6 bg-white p-10 rounded-md">
        
        <section className="mb-2">
            <div className="grid gap-4 md:grid-cols-2">
            <div className="mb-6 md:mb-0">
                <h2 className="mb-6 text-3xl font-bold">Frequently asked questions</h2>

                <p className="text-neutral-500 dark:text-neutral-300">
                Didnt find your answer in the FAQ?
                <Link href="/#calender"
                    className="text-primary transition duration-300 hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"> Contact
                    our sales team</Link>.
                </p>
                <div className='p-3 mb-20 mx-auto'>
                    <Image width={500} height={500} src='/misc/faq-2.jpg'/>
                </div>
                <div className='p-3 border-8 border-orange-300 w-96 mx-auto'>
                    <Image width={400} height={500} src='/misc/faq.jpg'/>
                </div>
                <div className=' p-3 mt-20 border-8 border-green-500 max-w-max mx-auto'>
                    <Image width={400} height={500} src='/misc/success.jpg'/>
                </div>
            </div>

            <div className="mb-6 md:mb-0">
                <p className="mb-4 font-bold">How long does it take until my store is running?</p>
                <p className="mb-12 text-neutral-500 dark:text-neutral-300">
                It usually takes a month before your store is running and your first inventory purchase is sent into your FBA account at which point you'll begin to see sales. It takes 3-6 months until your Store scales to it's full operating potential and maximizes your desired level of Inventory Purchasing Power.
                </p>

                <p className="mb-4 font-bold">Is this a truly passive business?</p>
                <p className="mb-12 text-neutral-500 dark:text-neutral-300">
                Based upon our experience, an average client spends 3-6 hours per month on this business. At the end of the day, it is your store and it is your asset. Your main responsibility will be to purchase more inventory, and make sure your collecting amazon payouts and paying off your inventory purchases.
                </p>

                <p className="mb-4 font-bold">
                Do you have your worn warehouses? Is this an American operation?
                </p>
                <p className="mb-12 text-neutral-500 dark:text-neutral-300">
                Yes and Yes. Most of our operation is done in house in our warehouses in Florida and California. We have a third office with backend support outside the US as well. We source inventory from brands, distributors, and wholesalers across the U.S. and disperse this inventory from our warehouses to our partner Store's FBA accounts.
                </p>
                <p className="mb-4 font-bold">
                Why dont you just open up a bunch of digital stores?
                </p>
                <p className="mb-12 text-neutral-500 dark:text-neutral-300">
                Amazon only allows 1 Seller per household. They track IP addresses to ensure this is upheld. Capital reasons and economy of scale. We leverage client's capital to allow them to buy wholesale items from us at a discount and sell on Amazon; then we take a percentage of that and are able to scale the operations further and source better product deals for all of our partners. We aggressively pursue arbitrage opportunities that presnet themsleves allowing us to maximize capital efficiency and ultimatly your ROI. 
                </p>
                <p className="mb-4 font-bold">
                Realistically, what can I expect to earn from my partner store??
                </p>
                <p className="mb-12 text-neutral-500 dark:text-neutral-300">
                Typical monthly returns for our partner stores range from 10%-15% of their store's total revenue after the profit split (once the store has been scaled and running at full capacity). So the more inventory you purchase to send into your store, the more you can expect to earn from a revenue perspective and with the margins remaining the same, you'll also make more profit.Ultimately, our partners who do the best, have more capital to deploy and are better organized in securing and managing their business's lines of credit and cash flow.

                </p>
                <p className="mb-4 font-bold">
                Is the AMZ Market Over-Saturated?
                </p>
                <p className="mb-12 text-neutral-500 dark:text-neutral-300">
                No - for the marketplace to be saturated there would have to be more sellers than buyers on Amazon on a month-to-month basis. There are 4M seller accounts vs 200M Prime Subscribers. Amazon did $502.19B in 2022. 3rd Party sellers make up 50% of Amazon’s total sales.
                </p>
                
            </div>
            </div>
        </section>
        
        </div>

    )
}

export default FAQ