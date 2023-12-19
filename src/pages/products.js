import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import style from '../styles/Product.module.css'
import styles from '../styles/Home.module.css'
import Filter from '../../components/filter';
import axios from 'axios';
import Add from '../../components/Add'
import AddButton from '../../components/AddButton'


const Products = ({pizzaList, admin}) => {
const [close, setClose] = useState(true);

  return (
    
    <div className='container-fluid'>


         {/* Pizza page*/}
         <div className={`${style.product} row`}>

             {/* filter/sorting */}
            <Filter />

            {/* Admin create pizza button*/}
            {admin && <AddButton setClose={setClose}/>}
            
              {!close && <Add setClose={setClose}/>}
              
            {pizzaList.map((pizza)=> (
              <>
                    <div className={`${styles.dishes_card} col-12 col-md-4`}>
                    <div className={styles.cardbody}>
                        <Link href={`/product/${pizza._id}`}>
                            <Image src={pizza.img} alt="..." width="300" height="300"/>
                        </Link>
                        <div>
                          <h5>{pizza.title} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span className={styles.pizza_price}>$65.00</span></h5>
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
            ))}

          </div>
    </div>
  )
}

//Fetch all Pizzas
export const getServerSideProps = async(ctx) => {
const myCookie = ctx.req?.cookies || "";

let admin = false;

if(myCookie.token === process.env.TOKEN){
  admin = true;
}
  
  const res = await axios.get("https://pizza-ordering-anno.onrender.com/api/products")
  return{
    props: {
      pizzaList: res.data,
      admin
    }
  }
}

export default Products