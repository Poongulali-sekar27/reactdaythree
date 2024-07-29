import React,{ useState } from 'react'
import TopBar from './components/TopBar'
import Product from './components/Product'

function App() {
    let data = [{
        name :"TwinBird Bracelet",
        price : "$680",
        image : "https://adornachennai.com/cdn/shop/products/image_3ecc851e-3edb-4a9d-86ac-9d8833e20ec6_740x.jpg?v=1668259671"
    },{
        name :"Lotus Bloom Kemp Short Set",
        price : "$2700",
        image : "https://adornachennai.com/cdn/shop/products/image_de10a17c-a3fd-49a1-841f-b7da0b7508b9_1024x1024@2x.jpg?v=1664775736"
    },{
        name :"Kundan Jadau Tear Drop Earings",
        price : "$2080",
        image : "https://adornachennai.com/cdn/shop/files/019DFE3B-2F2E-4C8E-A6A6-05C3EED217A5_360x.jpg?v=1716114489"
    },{
        name :"Kemp Tear Drop Rice Anklets",
        price : "$1450",
        image : "https://adornachennai.com/cdn/shop/products/image_b8d0bcd8-3422-41bc-8066-d9c0ae04ce5b_360x.jpg?v=1670353109"
    },{
        name :"Matte AD Peacock Temple Hipbelt",
        price : "$3300",
        image : "https://adornachennai.com/cdn/shop/files/pragathi_pj_1721807111_3419088325897097224_389399963_360x.jpg?v=1721807968"
    }
]
    let [cart,setCart] = useState(0)
  return <>

    <TopBar cart={cart}/>
        <header className="bg-dark py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">

                    <h1 className="display-4 fw-bolder">Shop in style</h1>
                    <p className="lead fw-normal text-white-50 mb-0">With this shop homepage template</p>
                </div>
            </div>
        </header>

        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                {data.map((e,i)=>{
                    return<Product data={e} key={i} cart={cart} setCart={setCart}/>
                })}
                </div>
            </div>
        </section>
  </>           
}          

export default App