import React, { useEffect, useState } from 'react'
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { couponVoucher } from '../Data';


const HomeCoupon = () => {
    const [copied, setCopied] = useState(couponVoucher)
    const calculateTimeLeft = () => {
        let year = 2023;
        const difference = new Date(`${year}-10-1`) - new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    const copyTextBtn = ({ ind, season }) => {
        navigator.clipboard.writeText(season)
        const upItem = couponVoucher.map((item, id) => {
            if (id === ind) {
                return {
                    ...item,
                    select: item.select = true
                }
            }
            if(!item.select){
                setTimeout(() => {
                    const upItem = couponVoucher.map((item, id) => {
                        if(item.select){
                            return {...item, select: item.select= false}
                        }
                        return item
                    })
                    setCopied(upItem)
                }, 3000);
            }
            return item
        })
        setCopied(upItem)
    }

    
    useEffect(() => {
        setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
    });
    return (
        <section className='home-coupon md:mx-24 mb-10'>
            <div className="home-coupon-center grid xl:grid-cols-2 max-lg:space-y-4">
                {
                    copied.map((item, ind) => {
                        const { season, persen, year, image } = item
                        return <div key={ind} className="coupon-card p-5 border max-md:mx-auto m-5 max-md:space-y-5 md:flex items-center justify-between">
                            <div className="coupon-image flex justify-center items-center">
                                <a href="#"><img width='120px' className='h-[120px] mr-3' src={image} alt="" /></a>
                                <div className="coupon-date">
                                    <h4 className='text-[17px] font-semibold'>{season} Gift Voucher</h4>
                                    <h4 className='font-semibold' ><span className='text-[#ff2400]'>{persen}%</span> Off</h4>
                                    <div className="date-details flex space-x-4 text-[12px]">
                                        <span>{timeLeft.days}
                                            <p>DAY</p>
                                        </span>
                                        <span>{timeLeft.hours}
                                            <p>HRS</p>
                                        </span>
                                        <span>{timeLeft.minutes}
                                            <p>MIN</p>
                                        </span>
                                        <span>{timeLeft.seconds}
                                            <p>SEC</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="coupon-copy">
                                <h4 className='text-[14px] flex items-center space-x-1'>Coupon <span className='ml-1 text-green-900'>Active</span><span><AiOutlineInfoCircle /></span></h4>
                                <button onClick={() => { copyTextBtn({ ind, season }) }} className='px-10 py-2 bg-[rgba(0,128,128,.1)] font-semibold uppercase text-[15px] text-teal-900'>{item.select ? <span className='capitalize'>copied!</span> : season}</button>
                            </div>
                        </div>
                    })
                }
            </div>
        </section>
    )
}

export default HomeCoupon
