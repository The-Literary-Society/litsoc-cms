import React from 'react'
import { FaSquareFacebook, FaXTwitter, FaSquareReddit, FaSquareWhatsapp } from "react-icons/fa6";

const SocialShareButtons = ({ url, title }) => {
    return (
        <div className='w-full flex justify-between'>
            <a target='_blank' rel='noreferrer' href={`https://www.facebook.com/dialog/share?app_id=1724925267986886&display=popup&href=${url}`}>
                <FaSquareFacebook className='text-[#3b5998] w-12 h-auto' />
            </a>
            <a target='_blank' rel='noreferrer' href={`https://twitter.com/intent/tweet?url=${url}`}>
                <FaXTwitter className='text-[#14171A] w-12 h-auto' />
            </a>
            <a target='_blank' rel='noreferrer' href={`https://www.reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`}>
                <FaSquareReddit className='text-[#ff4500] w-12 h-auto' />
            </a>
            <a target='_blank' rel='noreferrer' href={`https://api.whatsapp.com/send/?text=${url}`}
      >
                <FaSquareWhatsapp className='text-[#25d366] w-12 h-auto' />
            </a>
        </div>
    )
}

export default SocialShareButtons