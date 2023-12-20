import React from 'react'
import MainLayout from '../../components/MainLayout'
import Breadcrumbs from '../../components/Breadcrumbs'
import { images } from '../../constants'
import { Link } from 'react-router-dom'
import SuggestedPosts from './container/SuggestedPosts'
import CommentsContainer from '../../components/comments/CommentsContainer'
import SocialShareButtons from '../../components/SocialShareButtons'

const breadCrumbsData = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Blog',
        link: '/blog'
    },
    {
        name: 'Article Title',
        link: '/blog/1'
    }

]

const postsData = [
    {
        _id: 1,
        image: images.Post1,
        title: 'Future of Work',
        createdAt: "2023-01-28T15:35:53.607+0000"
    },
    {
        _id: 2,
        image: images.Post2,
        title: 'Future of Work',
        createdAt: "2023-01-28T15:35:53.607+0000"
    },
    {
        _id: 3,
        image: images.Post3,
        title: 'Future of Work',
        createdAt: "2023-01-28T15:35:53.607+0000"
    },
    {
        _id: 4,
        image: images.Post3,
        title: 'Future of Work',
        createdAt: "2023-01-28T15:35:53.607+0000"
    },
]

const tagsData = [
    "Medical",
    "Lifestyle",
    "Food",
    "Diet",
    "Fitness",
    "Health",
    "Education",
    "Technology",
];

const ArticleDetailPage = () => {
    return (
        <MainLayout>
            <section className='container mx-auto max-w-5xl flex flex-col lg:flex-row px-5 py-5 lg:gap-x-20 lg:items-start'>
                <article className='flex-1'>
                    <Breadcrumbs data={breadCrumbsData} />
                    <img src={images.Post1} alt="post 1" className='rounded-xl w-full' />
                    <Link to='/blog?category=selectedCategory' className='text-amber-700 text-sm font-roboto inline-block mt-4 md:text-base'>
                        EDUCATION
                    </Link>
                    <h1 className='text-xl font-medium mt-4 font-roboto text-amber-900 md:text-[26px]'>Online Education taking sharp turns</h1>
                    <div className='mt-4 text-amber-600'>
                        <p className='leading-7'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>

                    </div>
                    <CommentsContainer className="mt-10" loggedUserId="a" />
                </article>
                <div>
                    <SuggestedPosts
                        header="Latest Articles"
                        posts={postsData}
                        tags={tagsData}
                        className="mt - 8 lg:mt-0 lg:max-w-xs"
                    />
                    <div className='mt-7'>
                        <h2 className='font-roboto font-medium text-amber-900 mb-4 md:text-xl'>Share on:</h2>
                        <SocialShareButtons
                            url={encodeURI("https://ananyamohapatra.netlify.app/")}
                            title={encodeURIComponent("Portfolio Website")} />
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}

export default ArticleDetailPage