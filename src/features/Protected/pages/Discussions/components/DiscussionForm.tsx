import Button from '@/components/Button/Button';
import InputField from '@/components/Form/InputField';
import TextareaField from '@/components/Form/TextareaField';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { useCreateDiscussion } from '../api/createDiscussion';

export interface DiscussionValues {
	title: string;
	body: string;
}

const schema = yup.object({
	title: yup.string().required(),
	body: yup.string(),
});

const DiscussionForm = ({
	setIsOpen,
}: {
	setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const createDiscussion = useCreateDiscussion();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<DiscussionValues>({
		resolver: yupResolver(schema),
	});

	const onSubmit = async (data: DiscussionValues) => {
		createDiscussion.mutate(data, {
			onSuccess() {
				setIsOpen && setIsOpen(false);
				toast('Successfully update');
			},
			onError: (error: any) => {
				toast(error.response.data.message);
			},
		});
	};
	return (
		<form
			className="child:mt-8 child:text-sm"
			onSubmit={handleSubmit(onSubmit)}
		>
			<InputField
				label="Title"
				error={errors?.title?.message}
				registration={register('title')}
			/>

			<TextareaField
				label="Body"
				error={errors?.body?.message}
				registration={register('body')}
			/>
			<Button type="submit" size="sm" isLoading={createDiscussion.isLoading}>
				Create
			</Button>
		</form>
	);
};

export default DiscussionForm;
