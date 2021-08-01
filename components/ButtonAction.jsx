import React from 'react';
import Image from 'next/image'
import Link from 'next/link'

const ButtonAction = ({ icon, link = '/' }) => {
    return (
        <Link href={link}>
            <button className='btn mr-1' style={{ background: '#F3F6F9', borderRadius: '6px' }}>
                <Image alt='button-action' src={`/assets/icon/${icon}`} width={18} height={18} />
            </button>
        </Link>
    )
}

export default ButtonAction