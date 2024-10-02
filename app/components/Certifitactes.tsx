/** @format */
'use client';
import { SetStateAction, useState } from 'react';
import { motion } from 'framer-motion';
import Title from '../ui/titleSections';
import { certificates } from '../lib/Data'; 
import Image from 'next/image';
import Modal from '../ui/certificates'; 

export default function Certificates() {
	const [selectedCert, setSelectedCert] = useState(null);

	const openCertificate = (cert: SetStateAction<null>) => {
		setSelectedCert(cert);
	};

	const closeModal = () => {
		setSelectedCert(null);
	};

	return (
		<section className='py-16 bg-gray-100 dark:bg-gray-900'>
			<div className='container mx-auto text-center'>
				<Title text='Certificates' />
				<div className='grid grid-cols-2 md:grid-cols-5 gap-4'>
					{certificates.map((cert) => (
						<motion.div
							key={cert.id}
							whileHover={{ scale: 1.05 }}
							onClick={() => openCertificate(cert as unknown as SetStateAction<null>)}
							className='cursor-pointer p-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg'>
							<Image
								src={cert.image}
								alt={cert.name}
								width={300}
								height={300}
								priority 
								className='w-full h-32 object-cover rounded'
							/>
							<h3 className='mt-2 text-gray-800 dark:text-white'>{cert.name}</h3>
						</motion.div>
					))}
				</div>
			</div>

			{selectedCert && (
				<Modal
					selectedCert={selectedCert}
					onClose={closeModal}
				/>
			)}
		</section>
	);
}
