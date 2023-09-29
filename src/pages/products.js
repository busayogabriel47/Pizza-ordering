import React from 'react'
import Image from 'next/image'
import style from '../styles/Product.module.css'
import styles from '../styles/Home.module.css'
import Filter from '../../components/filter'


const Products = () => {
  return (
    
    <div className='container-fluid'>


         {/* Pizza page*/}
         <div className={`${style.product} row`}>

             {/* filter/sorting */}
            <Filter/>
              
            <div className={`${styles.dishes_card} col-12 col-md-4`}>
                <div className={styles.cardbody}>
                    <Image src="/images/product1.jpg" alt="..." width="300" height="300"/>
                    <div>
                      <h5>Seafood pizza &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span className={styles.pizza_price}>$65.00</span></h5>
                     <div className={`${styles.rating} py-3`}> 
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                      </div>
                      <p>All the Lorem Ipsum generators on to Internet tend to repeat</p>
                        <button className={`${styles.pizza_btn} my-3`}>
                        <i className="fa-solid fa-cart-shopping"></i> &nbsp;
                        ORDER NOW
                        </button>

                    </div>
                  </div>
              </div>

              <div className={`${styles.dishes_card} col-12 col-md-4`}>
                <div className={styles.cardbody}>
                    <Image src="/images/product2.jpg" alt="..." width="300" height="300"/>
                    <div>
                      <h5>Seafood pizza &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span className={styles.pizza_price}>$65.00</span></h5>
                      <div className={`${styles.rating} py-3`}> 
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                      </div>
                      <p>All the Lorem Ipsum generators on to Internet tend to repeat</p>
                        <button className={`${styles.pizza_btn} my-3`}>
                        <i className="fa-solid fa-cart-shopping"></i> &nbsp;
                        ORDER NOW
                        </button>
                    </div>
                  </div>
              </div>

              <div className={`${styles.dishes_card} col-12 col-md-4`}>
                <div className={styles.cardbody}>
                    <Image src="/images/product3.jpg" alt="..." width="300" height="300"/>
                    <div>
                      <h5>Seafood pizza &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span className={styles.pizza_price}>$65.00</span></h5>
                      <div className={`${styles.rating} py-3`}> 
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                      </div>
                      <p>All the Lorem Ipsum generators on to Internet tend to repeat</p>
                        <button className={`${styles.pizza_btn} my-3`}>
                        <i className="fa-solid fa-cart-shopping"></i> &nbsp;
                        ORDER NOW
                        </button>
                    </div>
                  </div>
              </div>

          </div>
    </div>
  )
}

export default Products