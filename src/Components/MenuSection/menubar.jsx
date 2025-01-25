import { useEffect , useState} from "react";
import styles from './menubar.module.css';

const Menubar = ( ) => {
    const [foodItems,setFoodItems] = useState([]);

    const getMenu = () => {
        fetch("https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json")
    .then((res) => res.json())
    .then((data) => {setFoodItems(data);                     
    })
    }

    useEffect(()=>{
        getMenu();
    },[])
    
    return(
        <>
        <h3 style={{color: "white"}} className={styles.menu}>Menu</h3>
           <div className={styles.menu}>
           
                {foodItems.map((foodItem, key) => {

                return <div className={styles.cards} key={key}>
                            <img 
                            src='https://plus.unsplash.com/premium_photo-1684534125661-614f59f16f2e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                            // src={foodItem.imgSrc} 
                            alt={foodItem.name} id={foodItem.id} />

                            <div className={styles.textCards}>
                                <div>
                                    <p style={{fontWeight: "bold"}}>{foodItem.name}</p>
                                    <p>{foodItem.price}/-</p>
                                </div>
                                <button style={{backgroundColor:"#363a43" , color:"white" , border:"none" , height: "30px" , width: "30px", borderRadius: "5px", fontSize:"20px", paddingBottom:"10px"}}>+</button>
                            </div>
                        </div>
            })}
           </div>           
        </>
    )
}

export default Menubar;