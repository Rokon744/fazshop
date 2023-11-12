import React from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../Context';

const CartItem = ({ id, info, price, amount, image, totalPrice }) => {
    const { removeItem, increaseDecrease } = useGlobalContext()
    return (
        <tbody key={id}>
            <tr>
                <td className='w-[140px]'>
                    <img className='w-[125px]' src={image} alt="" />
                </td>
                <td className='w-[250px] hover:text-[#f50963]'><Link to={`/product-details/${id}`}>{info}</Link></td>
                <td>${price}</td>
                <td>
                    <div className='border space-x-3 w-[50%] m-auto p-3 wish-table-btn'>
                        <button onClick={()=>increaseDecrease(id, 'dec')} className='hover:text-[#f50963]'><FaMinus /></button>
                        <span>{amount}</span>
                        <button onClick={() => increaseDecrease(id, 'inc')} className='hover:text-[#f50963]'><FaPlus /></button>
                    </div>
                </td>
                <td>${totalPrice? totalPrice.toFixed(2): price}</td>
                <td>
                    <button onClick={() => removeItem(id)} className='text-[25px]'><i className="fa fa-times" aria-hidden="true"></i></button>
                </td>
            </tr>
        </tbody>
    )
}

export default CartItem
