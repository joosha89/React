const defaultState = {
    items: JSON.parse(localStorage.getItem("items")) || []
};

const Cart = (state = defaultState) => {
    return (
        <>
            console.log(items);
        </>
    );

}
export default Cart;