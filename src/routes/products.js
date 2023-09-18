const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const category = req.query.category;
    const products = [
        // Birthday
        {
            id: 1,
            name: 'Birthday Card 1',
            category: 'birthday',
            description: 'Celebrate your special day with this beautiful birthday card.',
            price: 5.99,
            imageUrl: 'https://th.bing.com/th/id/OIG.O8QEUO9rtRazS.8laqk3?w=270&h=270&c=6&r=0&o=5&pid=ImgGn',
        },
        {
            id: 2,
            name: 'Birthday Card 2',
            category: 'birthday',
            description: 'Wishing you a fantastic birthday filled with joy and happiness.',
            price: 4.99,
            imageUrl: 'https://hotpotmedia.s3.us-east-2.amazonaws.com/8-7pT5e1u4FzNwZv2.png?nc=1',
        },
        {
            id: 3,
            name: 'Birthday Card 3',
            category: 'birthday',
            description: 'May your birthday be as special as you are!',
            price: 6.99,
            imageUrl: 'https://th.bing.com/th/id/OIG.1Ak0l1T7HR_nTlI7ROfM?w=270&h=270&c=6&r=0&o=5&pid=ImgGn',
        },
        {
            id: 4,
            name: 'Birthday Card 4',
            category: 'birthday',
            description: 'Sending warm wishes on your birthday.',
            price: 5.49,
            imageUrl: 'https://th.bing.com/th/id/OIG.rl207yO4rxPBlFMJDHkO?w=270&h=270&c=6&r=0&o=5&pid=ImgGn',
        },
        {
            id: 5,
            name: 'Birthday Card 5',
            category: 'birthday',
            description: 'Make a wish and blow out the candles!',
            price: 4.99,
            imageUrl: 'https://th.bing.com/th/id/OIG.csJuE1hnf7FvAVvJwvX7?w=270&h=270&c=6&r=0&o=5&pid=ImgGn',
        },
        {
            id: 6,
            name: 'Birthday Card 6',
            category: 'birthday',
            description: 'Another year older, another year wiser!',
            price: 5.99,
            imageUrl: 'https://th.bing.com/th/id/OIG.Pn4UB9SyycPCYBKUiEZL?w=270&h=270&c=6&r=0&o=5&pid=ImgGn',
        },
        {
            id: 7,
            name: 'Birthday Card 7',
            category: 'birthday',
            description: 'A big birthday hug from me to you!',
            price: 6.49,
            imageUrl: 'https://th.bing.com/th/id/OIG.oxgScRMl8qBdyofvk6Wj?w=270&h=270&c=6&r=0&o=5&pid=ImgGn',
        },
        {
            id: 8,
            name: 'Birthday Card 8',
            category: 'birthday',
            description: 'May your day be filled with laughter and fun.',
            price: 5.99,
            imageUrl: 'https://hotpotmedia.s3.us-east-2.amazonaws.com/8-eJn7BJMM22rAnAH.png?nc=1',
        },
        // Congratulations
        {
            id: 9,
            name: 'Congratulations Card 1',
            category: 'congratulations',
            description: 'Celebrate your achievements with this beautiful congratulations card.',
            price: 6.99,
            imageUrl: 'https://hotpotmedia.s3.us-east-2.amazonaws.com/8-rP9rzNM7DwlqCUd.png?nc=1',
        },
        {
            id: 10,
            name: 'Congratulations Card 2',
            category: 'congratulations',
            description: 'Wishing you continued success and happiness.',
            price: 5.99,
            imageUrl: 'https://hotpotmedia.s3.us-east-2.amazonaws.com/8-kEdUex5meYFYrPN.png?nc=1',
        },
        {
            id: 11,
            name: 'Congratulations Card 3',
            category: 'congratulations',
            description: 'Kindergarten done and dusted!',
            price: 5.99,
            imageUrl: 'https://th.bing.com/th/id/OIG.gcCEx3sp8v25Ai8APcA_?w=270&h=270&c=6&r=0&o=5&pid=ImgGn',
        },
        {
            id: 12,
            name: 'Congratulations Card 4',
            category: 'congratulations',
            description: 'Congratulations on your engagement. This new journey is going to be great.',
            price: 5.99,
            imageUrl: 'https://th.bing.com/th/id/OIG.QLzbfYh5DvSSZ4ldZ_Sa?w=270&h=270&c=6&r=0&o=5&pid=ImgGn',
        },
        // Gratitude
        {
            id: 13,
            name: 'Gratitude Card 1',
            category: 'gratitude',
            description: 'Express your thanks with this heartfelt gratitude card.',
            price: 4.99,
            imageUrl: 'https://hotpotmedia.s3.us-east-2.amazonaws.com/8-STQeLMI2685rPkG.png?nc=1',
        },
        {
            id: 14,
            name: 'Gratitude Card 2',
            category: 'gratitude',
            description: 'Sending warm thanks and appreciation your way.',
            price: 5.49,
            imageUrl: 'https://hotpotmedia.s3.us-east-2.amazonaws.com/8-bOILEbdUCJoKEIe.png?nc=1',
        },
    ];    

    const groupedProducts = {};

    products.forEach(product => {
        const productCategory = product.category;
        if (!groupedProducts[productCategory]) {
            groupedProducts[productCategory] = [];
        }
        groupedProducts[productCategory].push(product);
    });

    const sectionsToRender = category && category !== 'all' ? [category] : Object.keys(groupedProducts);

    res.render('products', { groupedProducts, sectionsToRender, selectedCategory: category });
});

module.exports = router;
