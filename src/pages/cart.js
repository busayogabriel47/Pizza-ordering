import React from 'react'
import styles from '../styles/Cart.module.css'
import Image from 'next/image'

const Cart = () => {
  return (
    <div className={`${styles.add_container} container-fluid`}>
        <div className={styles.table}>
            <table class="table">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Extra</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <Image src="/images/pizza-1.png" alt="" width={100} height={100} />
                        </td>
                        <td>
                            <span className={styles.name}>CORALZO</span>
                        </td>
                        <td>
                            <span className={styles.extra}>
                                Double ingredient, spicy sauce
                            </span>
                        </td>
                        <td>
                            <span className={styles.price}>
                                $19.90
                            </span>
                        </td>
                        <td>
                            <span className={styles.quantity}>
                                2
                            </span>
                        </td>
                        <td>
                            <span className={styles.total}>
                                $39.80
                            </span>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <Image src="/images/pizza-1.png" alt="" width={100} height={100} />
                        </td>
                        <td>
                            <span className={styles.name}>CORALZO</span>
                        </td>
                        <td>
                            <span className={styles.extra}>
                                Double ingredient, spicy sauce
                            </span>
                        </td>
                        <td>
                            <span className={styles.price}>
                                $19.90
                            </span>
                        </td>
                        <td>
                            <span className={styles.quantity}>
                                2
                            </span>
                        </td>
                        <td>
                            <span className={styles.total}>
                                $39.80
                            </span>
                        </td>
                    </tr>

                    
                    
                </tbody>
            </table>
        </div>

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

                    <button className={`${styles.button} pizza_btn mt-5`}>CHECKOUT NOW!</button>
                </div>
        </div>
    </div>
  )
}

export default Cart