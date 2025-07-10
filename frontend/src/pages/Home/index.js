import { Navbar } from "../../components/Navbar";
import { useEffect , useState } from "react" ;
import { getAllProducts } from "../../api/getAllProducts";
import { ProductCard } from "../../components/ProductCard";
import { getAllCategories } from "../../api/getAllCategories";
import { getProductsByCategory } from "../../utils/getProductsByCategory";

export const Home = () => {

    const [products , setProducts] = useState([]) ;
    const [categories , setCategories] = useState([]) ;
    const [selectedCategory , setSelectedCategory] = useState("All") ; 
    useEffect(() => {
        (async () => {
            const products = await getAllProducts() ;
            const categories = await getAllCategories() ;
            setProducts(products) ; 
            const updatedCategories = [{id : '1a' , name: 'All'} , ...categories] 
            setCategories(updatedCategories) ;
        })()
    }, []);

    const onCategoryClick = (category) => {
        setSelectedCategory(category) ;  
    }

    const filterByCategories = getProductsByCategory(products , selectedCategory) ;
    return (
        <>
            <Navbar />
            <main className="pt-8">
                <div className="flex gap-4 justify-center mb-4">
                    {
                        categories?.length > 0 && categories.map(category => <div className="bg-green-400 font-semibold 
                            rounded-full p-1 hover:cursor-pointer" onClick = {() => onCategoryClick(category.name)}>{category.name}</div>)
                    }
                </div>
                <div className="flex flex-wrap gap-8 justigy-center">
                    {
                        filterByCategories?.length > 0 ? filterByCategories.map(product => <ProductCard key={product.id} product={product} />)
                        : <h2>No products found. Please try with another category</h2>
                    }
                </div>
            </main>
        </>
    )
}