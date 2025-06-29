import { HorizontalProductCard } from "../../components/HorizontalProductCard";
import { Navbar } from "../../components/Navbar";
import { useCart } from "../../context/cart-context";
import { PriceDetails } from "../../components/PriceDetails";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
    const { cart } = useCart();

    const navigate = useNavigate() ;
    return (
        <>
            <Navbar />
            <main className="flex flex-col items-center pt-6 ">
                {
                    cart?.length > 0 ? (
                        <>
                        <h2 className="text-3xl">My Cart</h2>
                <div className="flex gap-8">
                    <div className="flex flex-col pt-4 gap-4">
                        {
                            cart?.length > 0 && cart.map(product => <HorizontalProductCard key={product.id} product={product} />)
                        }
                    </div>
                    <div>
                    <PriceDetails />
                    </div>
                </div>
                        </>
                        
                    ) : <div>
                        <h2 className="text-3xl">Cart Empty</h2>
                        <p className="text-[rgb(20 83 45)] underline hover:cursor-pointer" onClick = {() => navigate('/')}>Click to add items to the cart</p>
                    </div>
                }
            </main>
        </>
    )
}