import Button from '@/components/Button/Button';
import InputField from '@/components/Form/InputField';
import TextareaField from '@/components/Form/TextareaField';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { useCreateDiscussion } from '../api/createDiscussion';
import {
	updateDiscussionDTO,
	useUpdateDiscussion,
} from '../api/updateDiscussion';
import { Discussion } from '../types/discussion';

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
	discussion,
}: {
	setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
	discussion?: Discussion;
}) => {
	const createDiscussion = useCreateDiscussion();
	const updateDiscussion = useUpdateDiscussion();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<DiscussionValues>({
		resolver: yupResolver(schema),
		defaultValues: discussion && {
			title: discussion.title,
			body: discussion.body,
		},
	});

	const handleCreate = (data: DiscussionValues) => {
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

	const handleUpdate = ({ data, id }: updateDiscussionDTO) => {
		updateDiscussion.mutate(
			{ data, id },
			{
				onSuccess() {
					setIsOpen && setIsOpen(false);
					toast('Discussion updated');
				},
				onError: (error: any) => {
					toast(error.response.data.message);
				},
			}
		);
	};

	const onSubmit = async (data: DiscussionValues) => {
		discussion ? handleUpdate({ data, id: discussion.id }) : handleCreate(data);
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
			<Button
				type="submit"
				size="sm"
				isLoading={
					discussion ? updateDiscussion.isLoading : createDiscussion.isLoading
				}
			>
				{discussion ? 'Update' : 'Create'}
			</Button>
		</form>
	);
};

export default DiscussionForm;
