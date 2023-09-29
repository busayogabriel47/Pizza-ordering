import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Product.module.css'

const SingleProducts = () => {

const pizza = {
  id: 1,
  img: "/images/product1.jpg",
  title: "Shrimp foods",
  price: [19.3, 20.4, 30.5],
  desc: "All the Lorem Ipsum generators on to Internet tend to repeat"
}


  return (
    <div className='container-fluid'>
        <div className={`${styles.single_product} row`}>
              <div className='col-12 col-md-6'>
                  <div className={styles.single_itemOne}>
                    <Image src={pizza.img} width={720} height={650} alt=''/>
                  </div>
              </div>
              <div className='col-12 col-md-6 mt-5'>
                  <div className={styles.single_itemTwo}>
                    <h1>Shrimp Pizza</h1>
                   <p className={`${styles.singPrice}`}>$35.00 &#160;&#160;
                   <span className={`${styles.review}`}>8 Reviews</span></p> 

                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Semper sagittis dolor aliquet quam feugiat nisi a ultrices feugiat. 
                    Viverra facilisi turpis eget tempor. Mattis risus amet euismod eleifend.
                    </p>


                    <p>Category: <span>Chicken, Launch, Pizza, Burger</span></p>
                    <p>Tags: <span>Healthy, Organic, Chicken, Sauce</span></p>
                  </div>

                  {/* Choose Pizza Size*/}
                  <div className={`${styles.sizes_container} mt-5`}>
                        <h5>Choose Pizza Size</h5>
                        <div className={styles.sizes}>
                            <div className={styles.size}>
                                <Image src="/images/pizza-1.png" alt='' width={40} height={40}/>
                                <span className={styles.number}>Small</span>
                            </div> 
                            <div className={styles.size}>
                                <Image src="/images/pizza-1.png" alt='' width={60} height={60}/>
                                <span className={styles.number}>Medium</span>
                            </div> 
                            <div className={styles.size}>
                                <Image src="/images/pizza-1.png" alt='' width={80} height={80}/>
                                <span className={styles.number}>Large</span>
                            </div>
                        </div> 
                  </div>

                  {/* Choose additional ingredient*/}
                  <div className={`${styles.ingredients_container} mt-5`}>
                        <h5>Choose additional ingredients</h5>
                        <div className={styles.ingredients_wrap}>
                            <div className={styles.ingredients}>
                                <input 
                                className={styles.checkbox}
                                type='checkbox' 
                                id='double' 
                                name='double'/>
                                <label htmlFor='double'>Double ingredients</label>
                            </div> 
                            <div className={styles.ingredients}>
                                <input 
                                className={styles.checkbox}
                                type='checkbox' 
                                id='garlic' 
                                name='garlic'/>
                                <label htmlFor='garlic'>Garlic Sauce</label>
                            </div>

                            <div className={styles.ingredients}>
                                <input 
                                className={styles.checkbox}
                                type='checkbox' 
                                id='Spicy' 
                                name='Spicy'/>
                                <label htmlFor='Spicy'>Spicy Sauce</label>
                            </div> 
                        </div>
                  </div>


                  <div className={`${styles.select} d-flex mt-5`}>
                          <select class="form-select" aria-label="Default select example">
                               <option selected>Default Sorting</option>
                                <option value="1">One</option>
                              <option value="2">Two</option>
                                <option value="3">Three</option>
                          </select>

                          <button class={`${styles.filter_btn} btn`} type="button" data-bs-toggle="offcanvas" data-bs-target="#pizzaFilter" aria-controls="pizzaFilter">
                                ADD TO CART
                          </button>

                          <i class="fa-regular fa-heart"></i>
                  </div>

                  

              </div>
        </div>
    </div>
  )
}

export default SingleProducts