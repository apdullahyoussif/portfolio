/** @format */
'use client';
import Image from 'next/image';
import { IoMdClose } from 'react-icons/io';

const Modal = ({ selectedCert, onClose }) => {
	return (
		<div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
			<div className='bg-white p-4 rounded-lg relative'>
				<button  aria-label="Icon Sertificate Button" 
					onClick={onClose}
					className='absolute h-12 top-2 right-2 bg-red-500 text-white px-2 py-1 rounded'>
					<IoMdClose />
				</button>

				<>
					<Image
						src={selectedCert.image}
						alt={selectedCert.name}
						width={350}
						height={400}
						priority
						className={`w-full h-full object-contain `}
					/>
					<h3 className='text-lg font-bold mt-4'>{selectedCert.name}</h3>
				</>
			</div>
		</div>
	);
};

export default Modal;
