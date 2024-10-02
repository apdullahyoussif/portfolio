import React from 'react';
import DownloadCV from '../lib/DownloadCV';

			
const ButtonDownload = () => {
	return (
		<div>
			<button
				type='button'
				className='py-2.5  px-6 text-sm bg-indigo-500 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700'>
				<DownloadCV/>
			</button>
		</div>
	);
};

export default ButtonDownload;