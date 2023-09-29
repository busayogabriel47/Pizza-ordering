import styles from '../../styles/Order.module.css';
import Image from 'next/image';


import React from 'react'

const status = 0

const Order = () => {

    const statusClass = (index) => {
        if(index-status < 1) return styles.done
        if(index-status === 1) return styles.inProgress;
        if(index-status > 1) return styles.undone
    } 

  return (
    <div className={`${styles.order_wrapper} container-fluid`}>
            <div className='row'>
                <div className='col-12 col-md-8'>
                    <table class="table">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Customer</th>
                            <th>Address</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <span className={styles.name}>129837819237</span>
                            </td>
                            <td>
                                <span className={styles.extra}>
                                    John Doe
                                </span>
                            </td>
                            <td>
                                <span className={styles.price}>
                                    Elton st. 212-33 LA
                                </span>
                            </td>
                            <td>
                                <span className={styles.quantity}>
                                    $79.80
                                </span>
                            </td>
                        </tr>                       
                        
                    </tbody>
                </table> 

                {/* Pay Delivery*/}
                <div className={`${styles.payDel_wrap} d-flex`}>
                    <div className={statusClass(0)}>
                        <Image src="/images/pay.png" width={50} height={50} alt=""/>
                        <span>Payment</span>
                        <div className={styles.check}>
                            <i class="fa-solid fa-check"></i>
                        </div>
                    </div>

                    <div className={statusClass(1)}>
                        <Image src="/images/preparing.PNG" width={50} height={50} alt=""/>
                        <span>Preparing</span>
                        <div className={styles.check}>
                            <i class="fa-solid fa-check"></i>
                        </div>
                    </div>

                    <div className={statusClass(2)}>
                        <Image src="/images/bike-delivery.PNG" width={50} height={50} alt=""/>
                        <span>On the way</span>
                        <div className={styles.check}>
                            <i class="fa-solid fa-check"></i>
                        </div>
                    </div>

                    <div className={statusClass(3)}>
                        <Image src="/images/delivered.PNG" width={50} height={50} alt=""/>
                        <span>On the way</span>
                        <div className={styles.check}>
                            <i class="fa-solid fa-check"></i>
                        </div>
                    </div>
                </div> 

                </div>
                <div className='col-12 col-md-4'>
                <div className={styles.addToCart}>
                        <div className={styles.addToCart_wrap}>
                            <h2 className={styles.title}>CART TOTAL</h2>

                            <div className={styles.total_text}>
                            <b className={`${styles.total_title}`}>Subtotal:</b> $79.60
                            </div>

                            <div className={styles.total_text}>
                            <b className={`${styles.total_title}`}>Discount:</b> $79.60
                            </div>

                            <div className={styles.total_text}>
                            <b className={`${styles.total_title}`}>Total:</b> $79.60
                            </div>

                            <button className={`${styles.button} pizza_btn mt-5`}>PAY</button>
                        </div>
                </div>
                </div>
            </div>
    </div>
  )
}

export default Order