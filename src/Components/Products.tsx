import React from 'react';
import { Button } from "@/Components/ui/button.tsx";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/Components/ui/card.tsx";
import { Trash2 } from "lucide-react";
import ChangerQty from "@/Components/ChangerQty.tsx";
import { CardProduct } from "@/types";

interface ProductListProps {
    products: CardProduct[];
    removeProduct: (productID: number) => void;
}

const Products: React.FC<ProductListProps> = ({ products, removeProduct }) => {
    return (
        <div className="space-y-2">
            {products.map((product) => (
                <Card className="flex flex-col" key={product.id}>
                    <CardHeader className="flex flex-row items-center gap-2">
                        {product.src && (
                            <img src={product.src} alt={product.title} className="w-16 h-16" />
                        )}
                        <CardTitle>{product.title}</CardTitle>
                        <Button
                            onClick={() => removeProduct(product.id)}
                            size="icon"
                            variant="destructive">
                            <Trash2 />
                        </Button>
                    </CardHeader>
                    <CardContent>{product.price} BYN</CardContent>
                    <CardFooter>
                        <ChangerQty productId={product.id} />
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
};

export default Products;
