

import Image from 'next/image';
import React from 'react';
import GoBackButton from './buttons/GoBackButton';
        const ComingSoon = ({ text }) => {
            return (
                <div className='min-h-[100vh] w-full flex justify-start items-center flex-col mx-auto px-4'>
                   <img src="https://firebasestorage.googleapis.com/v0/b/jeca360-2024.appspot.com/o/comingSoon.png?alt=media&token=89e8cb5e-3207-41aa-8189-cfd5e7c992e9"/>
                   <p className="text-[3rem] py-10 font-bold bg-clip-text  bg-gradient-to-b from-gray-400 via-gray-500 to-gray-600 text-transparent">
                    {text ? text : 'Coming Soon'}
                </p>
                <GoBackButton/>
                </div>
            );
        };

        export default ComingSoon;

