import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, ReactElement, useState } from 'react';
import Button from '../Button/Button';

interface ConfirmationDialogProps {
	triggerButton: ReactElement;
	confirmButton: ReactElement;
	title: string;
	children: React.ReactNode;
}

const ConfirmationDialog = ({
	title,
	triggerButton,
	confirmButton,
	children,
}: ConfirmationDialogProps) => {
	// I want to use the useReducer here to toggle, however clicking outside the panel triggers toggle function 2 times.
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
						enter="ease-out duration-300"
						enterFrom="opacity-0 scale-95"
						enterTo="opacity-100 scale-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100 scale-100"
						leaveTo="opacity-0 scale-95"
					>
						<div className="fixed inset-0 overflow-y-auto">
							<div className="flex min-h-full items-center justify-center p-4 text-center">
								<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
									<Dialog.Title
										as="h3"
										className="text-lg font-medium leading-6 text-gray-900"
									>
										{title}
									</Dialog.Title>

									<div className="mt-2">
										<p className="text-sm text-gray-500">{children}</p>
									</div>

									<div className="mt-4 flex space-x-2 justify-end">
										<Button
											type="button"
											variant="inverse"
											className="w-full inline-flex justify-center rounded-md border focus:ring-1 focus:ring-offset-1 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
											onClick={() => setIsOpen(false)}
										>
											Cancel
										</Button>
										{confirmButton}
									</div>
								</Dialog.Panel>
							</div>
						</div>
					</Transition.Child>
				</Dialog>
			</Transition>
		</>
	);
};

export default ConfirmationDialog;
