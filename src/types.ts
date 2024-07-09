export type Store = UserSlice & CartSlice;

export type Product = {
    id: number;
    title: string;
    price: number;
    src: string;
}

export type CardProduct = Product & { qty: number };

export type Props = { productId: number };

export  type CartState = {
    products: CardProduct[];
    total: number;
};

type CartAction = {
    addProduct: (product: Product) => void;
    removeProduct: (productID: number) => void;
    incQty: (productID: number) => void;
    decQty: (productID: number) => void;
    getProductById: (productID: number) => CardProduct | undefined;
    setTotal: (total: number) => void;
    reset: () => void;
};
export type CartSlice = CartState & CartAction;

export type UserActions = {
    setAddress: (address: string) => void;
    setName: (name: string) => void;
    setUserName: (email: string) => void;
    fetchUser: () => Promise<void>;
};

export type UserSlice = UserState & UserActions;

export  type UserState = {
    userName: string;
    fullName: string;
    age: number;
    address: string;
};