//Order page
import React, {useState} from 'react'
import styles from '../../styles/Admin.module.css'
import Image from 'next/image'
import axios from 'axios'


const Adminpage = ({orders, products}) => {

    const [pizzaList, setPizzaList] = useState(products)
    const [orderList, setOrderList] = useState(orders)
    const status = ["preparing", "On the way", "delivered"]

    //Delete product on admin page
    const handleDelete = async (id) => {
        try{
            const res = await axios.delete('https://pizza-ordering-anno.onrender.com/api/products/' + id)
            setPizzaList(pizzaList.filter(pizza=> pizza._id !== id))
        }catch(err){
            console.log(err)
        }
    }


    //Change order status
    const handleStatus = async (id) => {

        const item = orderList.filter(order=> order._id === id)[0]
        const currentStatus = item.status

        try {
            const res = await axios.put("https://pizza-ordering-anno.onrender.com/api/orders/" + id, 
            {status: currentStatus + 1})
            setOrderList([
                res.data,
                ...orderList.filter(order=> order._id === id)
            ])
        } catch (error) {
            
        }
    }

  return (
    <div className='container-fluid'>
        <div className={`${styles.admin} row`}>
            <div className={`${styles.pizza_list} col-12 col-md-6`}>
                <h3 className={styles.title}>Products</h3>
                <table class="table">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Id</th>
                                    <th>Title</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            
                                {pizzaList.map((product)=> (
                                        <tbody key={product._id}>
                                            <tr>
                                                <td>
                                                    <Image 
                                                    src={product.img} 
                                                    alt="" 
                                                    width="80"
                                                    height="80"/>
                                                </td>
                                                <td>{product._id.slice(0, 6)}...</td>
                                                <td>{product.title}</td>
                                                <td>${product.prices[0]}</td>
                                                <td>
                                                    <button 
                                                    className={styles.edit}
                                                    onClick={()=> handleDelete()}
                                                    >Edit</button>
                                                    <button 
                                                    className={styles.delete}
                                                    onClick={()=> handleDelete(product._id)}
                                                    >Delete</button>
                                                </td>

                                            </tr>
                                        </tbody>
                                ))}                       
                                
                        </table>
                </div>
                <div className='col-12 col-md-6'>
                    <h3 className={styles.title}>Orders</h3>
                    <table class="table">
                        <thead>
                                <tr>
                                        <th>Id</th>
                                        <th>Customer</th>
                                        <th>Total</th>
                                        <th>Payment</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                            {orderList.map(order=> (
                                <tbody key={order._id}>
                                <tr>
                                    <td>
                                        {order._id.slice(0, 6)}...
                                    </td>
                                    <td>{order.customer}</td>
                                    <td>${order.total}</td>
                                    <td>{order.method === 0 ? <span>cash</span> : <span>paid</span>}</td>
                                    <td>{status[order.status]}</td>
                                    <td>
                                        <button 
                                        className={styles.edit}
                                        onClick={()=> handleStatus(order._id)}
                                        >Next Stage</button>
                                    </td>

                                </tr>                       
                                
                        </tbody>
                            ))}
                    </table>
                </div>
        </div>
    </div>
  )
}


export const getServerSideProps = async (ctx) => {
const myCookie = ctx.req?.cookies || "";    

if(myCookie.token !== process.env.TOKEN){
    return {
        redirect: {
            destination: "/admin/login",
            permanent: false
        }
    }
}



    const productRes = await axios.get("https://pizza-ordering-anno.onrender.com/api/products");
    const orderRes = await axios.get("https://pizza-ordering-anno.onrender.com/api/orders");

    return{
        props:{
            orders: orderRes.data,
            products: productRes.data
        }
    }
}

export default Adminpage