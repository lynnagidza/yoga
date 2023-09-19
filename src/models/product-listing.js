const products = [
    // Birthday
    {
        id: 1,
        name: 'Vibrant Celebration',
        category: 'birthday',
        description: 'Celebrate your special day with this beautiful birthday card.',
        description2: 'This elegantly designed card features a vibrant and colorful front cover that instantly brightens the recipient\'s day. Inside, you\'ll find a heartfelt message that expresses your warmest wishes and a blank space for you to add a personal touch. Whether it\'s for a family member, a friend, or a loved one, this birthday card is a perfect way to convey your joy and best wishes on their special occasion.',
        customizationOptions: {
            message: 'Personalize the inside message with your own heartfelt words.',
            envelopeColor: 'Choose from a range of envelope colors to match your style, from classic white to cheerful pastels.',
            addPhoto: 'Include a cherished photo to make the card even more special.'
        },
        price: 5.99,
        imageUrl: 'https://th.bing.com/th/id/OIG.O8QEUO9rtRazS.8laqk3?w=270&h=270&c=6&r=0&o=5&pid=ImgGn',
    },
    {
        id: 2,
        name: 'Joyful Wishes',
        category: 'birthday',
        description: 'Wishing you a fantastic birthday filled with joy and happiness.',
        description2: 'Send warm birthday wishes with this delightful card. It features a cheerful design that captures the spirit of celebration. Inside, you can pen your own heartfelt message to make the recipient\'s day even more special.',
        customizationOptions: {
            message: 'Customize the inside message with your own words of joy and happiness.',
            envelopeColor: 'Select an envelope color that matches the card\'s vibrant design.',
        },
        price: 4.99,
        imageUrl: 'https://hotpotmedia.s3.us-east-2.amazonaws.com/8-7pT5e1u4FzNwZv2.png?nc=1',
    },
    {
        id: 3,
        name: 'Unique You',
        category: 'birthday',
        description: 'May your birthday be as special as you are!',
        description2: 'Celebrate the uniqueness of your loved one with this special birthday card. The card\'s design is a reflection of the recipient\'s individuality and importance. Inside, you can add a personalized message to make them feel truly cherished.',
        customizationOptions: {
            message: 'Craft a heartfelt message that speaks to the recipient\'s uniqueness.',
            envelopeColor: 'Choose an envelope color that resonates with the card\'s theme, making it an even more memorable gift.',
        },
        price: 6.99,
        imageUrl: 'https://th.bing.com/th/id/OIG.1Ak0l1T7HR_nTlI7ROfM?w=270&h=270&c=6&r=0&o=5&pid=ImgGn',
    },
    {
        id: 4,
        name: 'Warm Wishes',
        category: 'birthday',
        description: 'Sending warm wishes on your birthday.',
        description2: 'Share your heartfelt wishes with this elegant birthday card. Its classic design and warm message make it the perfect choice to convey your best regards on this special day.',
        customizationOptions: {
            message: 'Customize the inside message to add a personal touch.',
            envelopeColor: 'Select an envelope color that complements the card\'s timeless design.',
        },
        price: 5.49,
        imageUrl: 'https://th.bing.com/th/id/OIG.rl207yO4rxPBlFMJDHkO?w=270&h=270&c=6&r=0&o=5&pid=ImgGn',
    },
    {
        id: 5,
        name: 'Magical Birthday',
        category: 'birthday',
        description: 'Make a wish and blow out the candles!',
        description2: 'Bring a touch of birthday magic with this delightful card. The whimsical design and cheerful message are sure to put a smile on the recipient\'s face. Inside, you can add your own message to make it even more magical.',
        customizationOptions: {
            message: 'Add your own wishes and make the card truly enchanting.',
            envelopeColor: 'Choose an envelope color that matches the card\'s joyful spirit.',
        },
        price: 4.99,
        imageUrl: 'https://th.bing.com/th/id/OIG.csJuE1hnf7FvAVvJwvX7?w=270&h=270&c=6&r=0&o=5&pid=ImgGn',
    },
    {
        id: 6,
        name: 'Wisdom and Growth',
        category: 'birthday',
        description: 'Another year older, another year wiser!',
        description2: 'Celebrate the journey of life with this insightful birthday card. Its design reflects the wisdom that comes with age. Inside, you can add your own message to commemorate another year of growth and experiences.',
        customizationOptions: {
            message: 'Craft a message that acknowledges the recipient\'s growth and wisdom.',
            envelopeColor: 'Select an envelope color that complements the card\'s reflective theme.',
        },
        price: 5.99,
        imageUrl: 'https://th.bing.com/th/id/OIG.Pn4UB9SyycPCYBKUiEZL?w=270&h=270&c=6&r=0&o=5&pid=ImgGn',
    },
    {
        id: 7,
        name: 'Hug and Birthday Wishes',
        category: 'birthday',
        description: 'A big birthday hug from me to you!',
        description2: 'Send warm birthday wishes with this adorable card. The cute design and loving message convey your affectionate hugs and best wishes. Inside, you can add a personal message to make it even more heartfelt.',
        customizationOptions: {
            message: 'Personalize the card with your own loving message and warm wishes.',
            envelopeColor: 'Choose an envelope color that enhances the card\'s cuddly appeal.',
        },
        price: 6.49,
        imageUrl: 'https://th.bing.com/th/id/OIG.oxgScRMl8qBdyofvk6Wj?w=270&h=270&c=6&r=0&o=5&pid=ImgGn',
    },
    {
        id: 8,
        name: 'Laughter and Fun',
        category: 'birthday',
        description: 'May your day be filled with laughter and fun.',
        description2: 'Wish someone a day of joy and laughter with this fun-filled birthday card. Its design is all about spreading happiness. Inside, you can add your own message to make the recipient smile even wider.',
        customizationOptions: {
            message: 'Craft a message that brings out the laughter and joy in the recipient.',
            envelopeColor: 'Select an envelope color that complements the card\'s cheerful theme.',
        },
        price: 5.99,
        imageUrl: 'https://hotpotmedia.s3.us-east-2.amazonaws.com/8-eJn7BJMM22rAnAH.png?nc=1',
    },
    // Congratulations
    {
        id: 9,
        name: 'Elegant Achievement',
        category: 'congratulations',
        description: 'Celebrate your achievements with this beautiful congratulations card.',
        description2: 'Mark a momentous occasion with this elegant congratulations card. Its design exudes sophistication and pride in one\'s accomplishments. Inside, you can add a personalized message to convey your warmest congratulations.',
        customizationOptions: {
            message: 'Customize the inside message with your own words of pride and admiration.',
            foilEmbellishments: 'Add a touch of luxury with optional foil accents in gold, silver, or rose gold.',
            envelopeDesign: 'Select from a variety of envelope designs to make your card stand out.'
        },
        price: 6.99,
        imageUrl: 'https://hotpotmedia.s3.us-east-2.amazonaws.com/8-rP9rzNM7DwlqCUd.png?nc=1',
    },
    {
        id: 10,
        name: 'Success and Happiness',
        category: 'congratulations',
        description: 'Wishing you continued success and happiness.',
        description2: 'Extend your best wishes with this stylish congratulations card. Its design reflects the spirit of success and happiness. Inside, you can include your own message to express your hopes for the recipient\'s bright future.',
        customizationOptions: {
            message: 'Craft a personalized message that celebrates the recipient\'s achievements.',
            foilEmbellishments: 'Choose optional foil accents to make the card shine even brighter.',
            envelopeDesign: 'Select an envelope design that complements the card\'s style.'
        },
        price: 5.99,
        imageUrl: 'https://hotpotmedia.s3.us-east-2.amazonaws.com/8-kEdUex5meYFYrPN.png?nc=1',
    },
    {
        id: 11,
        name: 'Kindergarten Graduation',
        category: 'congratulations',
        description: 'Kindergarten done and dusted!',
        description2: 'Celebrate a milestone with this cheerful congratulations card. It captures the excitement of completing kindergarten and moving on to new adventures. Inside, you can add your own message to congratulate the young graduate.',
        customizationOptions: {
            message: 'Personalize the inside message with words of encouragement and celebration.',
            envelopeColor: 'Select an envelope color that matches the card\'s youthful enthusiasm.',
        },
        price: 5.99,
        imageUrl: 'https://th.bing.com/th/id/OIG.gcCEx3sp8v25Ai8APcA_?w=270&h=270&c=6&r=0&o=5&pid=ImgGn',
    },
    {
        id: 12,
        name: 'Engagement Blessings',
        category: 'congratulations',
        description: 'Congratulations on your engagement. This new journey is going to be great.',
        description2: 'Mark the beginning of a beautiful journey with this heartfelt congratulations card. Its design embodies the love and promise of an engagement. Inside, you can add a personal message to celebrate this special moment with the happy couple.',
        customizationOptions: {
            message: 'Craft a message that conveys your best wishes and excitement for their future together.',
            foilEmbellishments: 'Choose optional foil accents to add a touch of elegance to the card.',
            envelopeDesign: 'Select an envelope design that complements the card\'s romantic theme.'
        },
        price: 5.99,
        imageUrl: 'https://th.bing.com/th/id/OIG.QLzbfYh5DvSSZ4ldZ_Sa?w=270&h=270&c=6&r=0&o=5&pid=ImgGn',
    },
    // Gratitude
    {
        id: 13,
        name: 'Heartfelt Thanks',
        category: 'gratitude',
        description: 'Express your thanks with this heartfelt gratitude card.',
        description2: 'Share your heartfelt thanks with this sincere gratitude card. Its design reflects your deep appreciation and gratitude in a simple yet touching way. Inside, you\'ll find a blank space for you to write your personal message of thanks, whether it\'s for a kind gesture, a thoughtful gift, or simply to express your gratitude to someone special.',
        customizationOptions: {
            message: 'Personalize the inside message with your own words of gratitude and appreciation.',
            fontStyle: 'Choose from a selection of fonts to add a personal touch to your message.',
            envelopeColor: 'Select an envelope color that complements the card\'s design, from soft pastels to earthy tones.'
        },
        price: 4.99,
        imageUrl: 'https://hotpotmedia.s3.us-east-2.amazonaws.com/8-STQeLMI2685rPkG.png?nc=1',
    },
    {
        id: 14,
        name: 'Peaceful Appreciation',
        category: 'gratitude',
        description: 'Sending warm thanks and appreciation your way.',
        description2: 'Express your thanks with this heartfelt gratitude card. This card is designed to convey your deep appreciation and gratitude in a simple yet touching way. The front of the card features a serene and calming design that sets a peaceful tone. Inside, you\'ll find a blank space for you to write your personal message of thanks, whether it\'s for a kind gesture, a thoughtful gift, or simply to express your gratitude to someone special.',
        customizationOptions: {
            message: 'Personalize the inside message with your own words of gratitude and appreciation.',
            fontStyle: 'Choose from a selection of fonts to add a personal touch to your message.',
            envelopeColor: 'Select an envelope color that complements the card\'s design, from soft pastels to earthy tones.'
        },
        price: 5.49,
        imageUrl: 'https://hotpotmedia.s3.us-east-2.amazonaws.com/8-bOILEbdUCJoKEIe.png?nc=1',
    },
];

module.exports = products;
