import React from 'react'
import Image from 'next/image'
import styles from "../src/styles/Home.module.css"
import Link from 'next/link'


const PizzaList = ({pizzaList}) => {
  return (
    <div>
         {/* Popular Dishes*/}
         <div className={`${styles.popular} row`}>
              <div className={`${styles.section_tag} col-12 col-md-12`}>
                        <h6 className={styles.outline}>Popular Dishes</h6>
                        <h4>Browse our Menu</h4>
              </div>

              {pizzaList.map(pizza=> (
                        <>
                        <div className={`${styles.dishes_card} col-12 col-md-4`}>
                            <div key={pizza._id} className={styles.cardbody}>
                               <Link href={`/product/${pizza._id}`} passHref>
                                    <Image src={pizza.img} alt="..." width="340" height="340"/>
                               </Link> 
                                <div>
                                <h5>{pizza.title} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span className={styles.pizza_price}>${pizza.prices[0]}</span></h5>
                                <div className={`${styles.rating} py-3`}> 
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <p>{pizza.desc}</p>
                                    <Link href={`/product/${pizza._id}`}>
                                        <button className={`${styles.pizza_btn} my-3`}>
                                        <i className="fa-solid fa-cart-shopping"></i> &nbsp;
                                        ORDER NOW
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </>
              )

              )}
            

          </div>
    </div>
  )
}

export default PizzaList