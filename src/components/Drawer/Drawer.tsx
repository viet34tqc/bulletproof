import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import React, { Fragment, ReactElement, useState } from 'react';

interface DrawerProps {
	triggerButton: ReactElement;
	title: string;
	children: ReactElement;
}

const Drawer = ({ title, triggerButton, children }: DrawerProps) => {
	// I want to use the useReducer here to toggle, however the clicking outside the panel trigger toggle function 2 times.
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			{React.cloneElement(triggerButton, { onClick: () => setIsOpen(true) })}
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
						enterFrom="translate-x-full"
						enterTo="translate-x-0"
						leave="transform transition ease-in-out duration-300 sm:duration-300"
						leaveFrom="translate-x-0"
						leaveTo="translate-x-full"
					>
						<div className="fixed inset-y-0 right-0 pl-10 h-screen">
							<Dialog.Panel className="w-[36rem] max-w-full h-full transform overflow-hidden bg-white p-6 text-left shadow-xl transition-all">
								<header className="flex justify-between">
									<Dialog.Title
										as="h3"
										className="text-lg font-medium leading-6 text-gray-900"
									>
										{title}
									</Dialog.Title>
									<button
										className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
										onClick={() => setIsOpen(false)}
									>
										<span className="sr-only">Close panel</span>
										<XIcon className="h-6 w-6" aria-hidden="true" />
									</button>
								</header>

								<div className="mt-2">
									{React.cloneElement(children, { setIsOpen })}
								</div>
							</Dialog.Panel>
						</div>
					</Transition.Child>
				</Dialog>
			</Transition>
		</>
	);
};

export default Drawer;
