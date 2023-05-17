import React from 'react'
import './home.scss'
import Title from '../component/all_title'
import Navbar from '../component/navBar'
import BlogList from '../component/blogList'

function renderBanner(){
    return(
        <section className='banner'>
            <div className='banner_cover'>
                <h4>MUNGU NI PENDO SASA INADUMU: </h4>
                <p>IMANI, MATUMAINI, UPENDO</p>
                <h6>1 wakorinto 13:13</h6>
            </div>
        </section>
    )
}

var servitor = [
    {
        id:1,
        nom:'Paki'
    },
    {
        id:2,
        nom:'Mama Espe'
    },
    {
        id:3,
        nom:'Desire Batechi'
    },
    {
        id:4,
        nom:'Moses kahiro'
    },
    {
        id:5,
        nom:'Martin Lufua'
    },
    {
        id:6,
        nom:'Eldad Bindu'
    },
    {
        id:7,
        nom:'Uwezo Masonga'
    },
    {
        id:8,
        nom:'Narcisse Lukonge'
    },
    {
        id:9,
        nom:'Gladis Bubala'
    },
    {
        id:10,
        nom:'Gueord Kikuni'
    },
    {
        id:11,
        nom:'Papa Core'
    },
    {
        id:12,
        nom:'Da Roze'
    },
    {
        id:13,
        nom:'MA carine'
    }
]

//6 blog but 4
var blog=[
    {
        id:1,
        photo:'../assets/1.jpg',
        title:'A Dieu toute puissance fansdfnksadkfjksdjfks',
        author:'Zendaya Wilko',
        picture:'../assets/3.jpg',
        resumes:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore libero dolores minima earum illum itaque, quidem ut, cum laudantium, molestias praesentium neque perferendis natus porro ad accusamus magnam mollitia corrupti!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi omnis nulla consequatur ratione illo velit esse, quam beatae ex, at possimus odit et earum. Ad quas dolores reprehenderit soluta explicabo. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum quasi deleniti numquam a? Sed deserunt veniam, fugiat, beatae saepe sunt obcaecati ducimus iusto illum ex autem esse, accusantium unde accusamus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quis officia facere veniam provident, debitis quos est. Cumque repudiandae nostrum dolorem, sapiente nihil eius facilis, illum quam, a minima ratione!'
    },
    {
        id:2,
        photo:'../assets/2.jpg',
        title:'A Dieu toute puissance',
        author:'Zendaya Wilko',
        picture:'../assets/4.jpg',
        resumes:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore libero dolores minima earum illum itaque, quidem ut, cum laudantium, molestias praesentium neque perferendis natus porro ad accusamus magnam mollitia corrupti!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi omnis nulla consequatur ratione illo velit esse, quam beatae ex, at possimus odit et earum. Ad quas dolores reprehenderit soluta explicabo. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum quasi deleniti numquam a? Sed deserunt veniam, fugiat, beatae saepe sunt obcaecati ducimus iusto illum ex autem esse, accusantium unde accusamus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quis officia facere veniam provident, debitis quos est. Cumque repudiandae nostrum dolorem, sapiente nihil eius facilis, illum quam, a minima ratione!'
    },
    {
        id:3,
        photo:'../assets/4.jpg',
        title:'A Dieu toute puissance',
        author:'Zendaya Wilko',
        picture:'../assets/5.jpg',
        resumes:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore libero dolores minima earum illum itaque, quidem ut, cum laudantium, molestias praesentium neque perferendis natus porro ad accusamus magnam mollitia corrupti!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi omnis nulla consequatur ratione illo velit esse, quam beatae ex, at possimus odit et earum. Ad quas dolores reprehenderit soluta explicabo. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum quasi deleniti numquam a? Sed deserunt veniam, fugiat, beatae saepe sunt obcaecati ducimus iusto illum ex autem esse, accusantium unde accusamus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quis officia facere veniam provident, debitis quos est. Cumque repudiandae nostrum dolorem, sapiente nihil eius facilis, illum quam, a minima ratione!'
    },
    {
        id:4,
        photo:'../assets/3.jpg',
        title:'A Dieu toute puissance',
        author:'Zendaya Wilko',
        picture:'../assets/chancy.jpg',
        resumes:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore libero dolores minima earum illum itaque, quidem ut, cum laudantium, molestias praesentium neque perferendis natus porro ad accusamus magnam mollitia corrupti!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi omnis nulla consequatur ratione illo velit esse, quam beatae ex, at possimus odit et earum. Ad quas dolores reprehenderit soluta explicabo. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum quasi deleniti numquam a? Sed deserunt veniam, fugiat, beatae saepe sunt obcaecati ducimus iusto illum ex autem esse, accusantium unde accusamus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quis officia facere veniam provident, debitis quos est. Cumque repudiandae nostrum dolorem, sapiente nihil eius facilis, illum quam, a minima ratione!'
    },
    {
        id:5,
        photo:'../assets/10.jpg',
        title:'A Dieu toute puissance',
        author:'Zendaya Wilko',
        picture:'../assets/7.jpg',
        resumes:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore libero dolores minima earum illum itaque, quidem ut, cum laudantium, molestias praesentium neque perferendis natus porro ad accusamus magnam mollitia corrupti!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi omnis nulla consequatur ratione illo velit esse, quam beatae ex, at possimus odit et earum. Ad quas dolores reprehenderit soluta explicabo. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum quasi deleniti numquam a? Sed deserunt veniam, fugiat, beatae saepe sunt obcaecati ducimus iusto illum ex autem esse, accusantium unde accusamus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quis officia facere veniam provident, debitis quos est. Cumque repudiandae nostrum dolorem, sapiente nihil eius facilis, illum quam, a minima ratione!'
    },
    {
        id:6,
        photo:'../assets/6.jpg',
        title:'A Dieu toute puissance',
        author:'Zendaya Wilko',
        picture:'../assets/8.jpg',
        resumes:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore libero dolores minima earum illum itaque, quidem ut, cum laudantium, molestias praesentium neque perferendis natus porro ad accusamus magnam mollitia corrupti!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi omnis nulla consequatur ratione illo velit esse, quam beatae ex, at possimus odit et earum. Ad quas dolores reprehenderit soluta explicabo. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum quasi deleniti numquam a? Sed deserunt veniam, fugiat, beatae saepe sunt obcaecati ducimus iusto illum ex autem esse, accusantium unde accusamus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quis officia facere veniam provident, debitis quos est. Cumque repudiandae nostrum dolorem, sapiente nihil eius facilis, illum quam, a minima ratione!'
    }
]
console.log(blog)

function renderServitor(){
    return(
        <div className='carousel'>
            <ul className='list-servitor'>
            {
                servitor.map((serv,index)=>{
                    return(
                        <li key={serv.index}>{serv.nom}</li>
                    )
                })
               
            }
            </ul>
        </div>
    )
}

function Home() {
    
    return (
        <>
            {/* {navBar()} */}
            <Navbar />
            {renderBanner()}
            <Title text={'PROGRAM LA JUMA'} />

            <Title text={'MAUBIRI'} />

            <Title text={'VIJANA'} />

            <Title text={'ECODIM'} />

            <Title text={'BLOG'} />
            <BlogList items={blog}/>

            <Title text={'WATUMISHI'} />
            {renderServitor()}
        </>
    )
}
//Pluziers est une chaine d'information ancree (centree) sur le business, sur le  climat d'affaires A Goma.
//un medias d'actu en ligne qui vise a informer le media sur ce qui se passe a Goma dans les affaire.
export default Home