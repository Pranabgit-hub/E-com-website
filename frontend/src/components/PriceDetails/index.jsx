import { useCart } from "../../context/cart-context"
import { findTotalProductPrice } from "../../utils/findTotalProductPrice";
import { useNavigate } from "react-router-dom";

export const PriceDetails = () => {

    const { cart } = useCart();
    const navigate = useNavigate() ;
    const totalCartAmount = findTotalProductPrice(cart);
    const deliveryCharge = 49;

    // const loadScript = (src) => {
    //     return new Promise(resolve => {
    //         const script = document.createElement("script");
    //         script.src = src;
    //         script.onload = () => resolve(true);
    //         script.onerror = () => resolve(false);
    //         document.body.appendChild(script);
    //     });
    // };

    // const displayRazorpay = async () => {
    //     await loadScript("https://checkout.razorpay.com/v1/checkout.js");

    //     const options = {
    //         key: "rzp_test_VSdp7X3K39GwBK",
    //         amount: (totalCartAmount + deliveryCharge) * 100,
    //         currency: "INR",
    //         name: "Shop It",
    //         description: "Thank you for shopping with us.",
    //         image: "https://therightfit.netlify.app/assets/The%20Right%20Fit-logos.jpeg",
    //         handler: ({ payment_id }) => {
    //             navigate("/");
    //         }
    //     }

    //     const paymentObject = new window.Razorpay(options);
    //     paymentObject.open();
    // }

    return (
        <div className="w-[400px] bg-[#fafafa] p-4">
            <p className="text-2xl border-b p-2">Price Details</p>
            <div className="flex flex-col gap-5 border-b p-2">
                <div className="flex">
                    <p>Price ({cart.length}) items</p>
                    <p className="ml-auto">Rs. {totalCartAmount}</p>
                </div>
                <div className="flex">
                    <p>Delivery Charge</p>
                    <p className="ml-auto">Rs. {deliveryCharge}</p>
                </div>
            </div>
            <div className="flex border-b p-2">
                <p>Total Amount</p>
                <p className="ml-auto">Rs. {totalCartAmount + deliveryCharge}</p>
            </div>
            <div className="p-2">
                <button className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor 
                btn-margin">PLACE ORDER</button>
            </div>
        </div>
    )
}