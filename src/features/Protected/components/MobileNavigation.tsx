import { Dialog, Transition } from '@headlessui/react';
import { MenuAlt2Icon, XIcon } from '@heroicons/react/outline';
import React, { Fragment, useState } from 'react';
import SidebarNavigation from './SidebarNavigation';

const MobileNavigation = () => {
	// I want to use the useReducer here to toggle, however clicking outside the panel triggers toggle function 2 times.
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="block sm:none">
			<button
				onClick={() => setIsOpen(true)}
				className="px-4 border-r h-[100%] border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
			>
				<span className="sr-only">Open sidebar</span>
				<MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
			</button>

			<Transition appear show={isOpen} as={Fragment}>
				<Dialog
					as="div"
					className="relative z-10"
					onClose={() => setIsOpen(false)}
				>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-50" />
					</Transition.Child>

					<Transition.Child
						as={Fragment}
						enter="transform transition ease-in-out duration-300 sm:duration-300"
						enterFrom="translate-x-[-100%]"
						enterTo="translate-x-0"
						leave="transform transition ease-in-out duration-300 sm:duration-300"
						leaveFrom="translate-x-0"
						leaveTo="translate-x-[-100%]"
					>
						<div className="fixed inset-y-0 h-screen">
							<Dialog.Panel className="w-[300px] max-w-full h-full transform overflow-hidden shadow-xl transition-all">
								<aside className="flex flex-col min-h-screen">
									<div className="text-center p-4 bg-gray-900 font-[32px] text-white">
										Bullet
									</div>
									<div className="bg-gray-800 py-4 px-2 flex-1">
										<SidebarNavigation />
									</div>
								</aside>
							</Dialog.Panel>

							<div className="absolute top-0 right-0 -mr-12 pt-2">
								<button
									className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
									onClick={() => setIsOpen(false)}
								>
									<span className="sr-only">Close sidebar</span>
									<XIcon className="h-6 w-6 text-white" aria-hidden="true" />
								</button>
							</div>
						</div>
					</Transition.Child>
				</Dialog>
			</Transition>
		</div>
	);
};

export default MobileNavigation;
