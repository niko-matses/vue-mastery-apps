var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        description: 'These are the dryest socks and they keep your feet warm too',
        image: './assets/vmSocks-green-onWhite.jpg',
        inventory: 8,
        onSale: true,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        sizes: ["small", "medium", "large"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green"
            },
            {
                variantId: 2235,
                variantColor: "blue"
            }
        ]
    }
})