import Card from "../components/card/Card"

export default function ListCard () {
    
    const ListProduct  = [
        {
            id:1,
            img: "//petiza-store-demo.myshopify.com/cdn/shop/products/5.jpg?v=1590736662",
            name:"Rocco Classic",
            price:"$25.00",
            subPrice:"$26.00",
            desc:""
            
        },
        {
            id:2,
            img: "//petiza-store-demo.myshopify.com/cdn/shop/products/6.jpg?v=1590736725",
            name:"Royal Canin Exigent Cats Video",
            price:"$23.00",
            subPrice:"$26.00",
            desc:""
        },
        {
            id:3,
            img: "//petiza-store-demo.myshopify.com/cdn/shop/products/9.jpg?v=1590737537",
            name:"Pet bowl Affiliate",
            price:"$15.00",
            subPrice:"$26.00",
            desc:""
        },
        {
            id:4,
            img: "//petiza-store-demo.myshopify.com/cdn/shop/products/4.jpg?v=1590736466",
            name:"Pedigree Dentastix",
            price:"$19.00",
            subPrice:"$20.00",
            desc:""
        },
        {
            id:5,
            img: "//petiza-store-demo.myshopify.com/cdn/shop/products/13_8055f5c0-b07f-437f-be4e-370cafc69852.jpg?v=1590737261",
            name:"Pet food Variable",
            price:"$34.00",
            subPrice:"$26.00",
            desc:""
        },
        {
            id:6,
            img: "//petiza-store-demo.myshopify.com/cdn/shop/products/10.1_d66c7abd-c596-41ba-bc6b-c6cac9cf4f65.jpg?v=1590737384",
            name:"Royal Canin Exigent Cats",
            price:"$24.00",
            subPrice:"$25.00",
            desc:""
        },
        {
            id:7,
            img: "//petiza-store-demo.myshopify.com/cdn/shop/products/7.jpg?v=1590736751",
            name:"Royal Canin Exigent Cats",
            price:"$40.00",
            subPrice:"$26.00",
            desc:""
        },
        {
            id:8,
            img: "//petiza-store-demo.myshopify.com/cdn/shop/products/1.jpg?v=1590736181",
            name:"Almo Nature Daily Boosted Sale",
            price:"$12.00",
            subPrice:"$13.00",
            desc:""
        },
        {
            id:9,
            img: "//petiza-store-demo.myshopify.com/cdn/shop/products/2.jpg?v=1590736434",
            name:"Norwegian Forest Cat",
            price:"$35.00",
            subPrice:"$26.00",
            desc:""
        },
        {
            id:10,
            img: "//petiza-store-demo.myshopify.com/cdn/shop/products/9.1.jpg?v=1590734761",
            name:"Royal Canin Maxi 5+",
            price:"$22.00",
            subPrice:"$26.00",
            desc:""
        },
        {
            id:11,
            img: "//petiza-store-demo.myshopify.com/cdn/shop/products/6.1.jpg?v=1590736861",
            name:"Royal Canin Maxi Adult",
            price:"$19.00",
            subPrice:"$26.00",
            desc:""
        },
        {
            id:12,
            img: "//petiza-store-demo.myshopify.com/cdn/shop/products/15.jpg?v=1590736915",
            name:"Royal Canin Medium Simple",
            price:"$29.00",
            subPrice:"$26.00",
            desc:""
        },
        {
            id:13,
            img: "//petiza-store-demo.myshopify.com/cdn/shop/products/5.jpg?v=1590736662",
            name:"Rocco Classic",
            price:"$25.00",
            subPrice:"$26.00",
            desc:""
        },
    ]
    
    console.log(ListProduct);
    
    
    return (
        <div>
            {}
            <Card ListProduct={ListProduct}/>
        </div>
    )
}
