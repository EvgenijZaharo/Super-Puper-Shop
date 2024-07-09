import productsData from '@/lib/bd.json';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/Components/ui/card.tsx";
import { Button } from "@/Components/ui/button.tsx";
import useStore from "@/store/store.ts";
import ChangerQty from "@/Components/ChangerQty.tsx";
import { Cart } from "@/Components/Cart.tsx";
import { User } from "@/Components/User.tsx";

const ProductsList = () => {
    const addProduct = useStore((state) => state.addProduct);
    const cartProducts = useStore((state) => state.products);

    return (
        <main className="space-y-2 dark h-screen bg-background max-w-sm mx-auto mt-2">
            <div className="flex justify-between">
                <User />
                <Cart />
            </div>
            <h1 className="text-2xl">Товары :</h1>
            <div className="space-y-2">
                {productsData.map((product) => (
                    <Card key={product.id}>
                        <div className="flex items-center p-4">
                            {product.src && (
                                <img src={product.src} alt={product.title} className="w-16 h-20 mr-4 object-cover rounded" />
                            )}
                            <div className="flex flex-col flex-grow">
                                <CardHeader className="p-0">
                                    <CardTitle>{product.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="p-0">
                                    {product.price} BYN
                                </CardContent>
                                <CardFooter className="p-0 mt-2">
                                    {cartProducts.find((item) => item.id === product.id) ? (
                                        <ChangerQty productId={product.id} />
                                    ) : (
                                        <Button onClick={() => addProduct(product)} variant="default">
                                            В корзину
                                        </Button>
                                    )}
                                </CardFooter>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </main>
    );
};

export default ProductsList;
