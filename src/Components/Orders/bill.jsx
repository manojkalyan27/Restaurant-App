import { useEffect } from "react"

const Bill = () => {
   

    const takeOrder = () =>{
        return new Promise((res,rej) => {
            setTimeout(()=>{
                res({ orders : ["burger1","burger2","burger3" ]})
            },2500)

        }).then((data) => {
            return new Promise((res, rej) => {
                setTimeout(()=>{
                res({...data, order_status:true, paid:false})
            },1500)
        })
        }).then((data2)=>{
            return new Promise((res, rej) => {
                setTimeout(()=>{
                res({...data2, order_status:true, paid:true})
            },1000)
        })
        }).then((data3)=>{
            alert("Thankyou for eating with us today!");
            // console.log(data3.orders);
        }).catch((error)=>{
            error(error, "Error")
        })
    } 

    useEffect(()=>{
        takeOrder();
    },[])
    return(
        <>
           <button onClick={takeOrder} style={{marginLeft: "600px", marginTop:"20px", borderRadius:"5px", padding: "20px" , color:"white" , border:"none", backgroundColor:"#FBA500"}}>Checkout</button>
        </>
    )
}

export default Bill;