import Button from '@/components/Button/Button';
import TextareaField from '@/components/Form/TextareaField';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { useCreateComment } from '../api/createComment';
import { DiscussionValues } from './DiscussionForm';

export interface CommentValues {
	body: string;
}

const schema = yup.object({
	body: yup.string(),
});

const CommentForm = ({
	setIsOpen,
	discussionId,
}: {
	setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
	discussionId: string;
}) => {
	const createComment = useCreateComment(discussionId);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<DiscussionValues>({
		resolver: yupResolver(schema),
	});

	const onSubmit = async (data: CommentValues) => {
		createComment.mutate(
			{
				body: data.body,
				discussionId,
			},
			{
				onSuccess() {
					setIsOpen && setIsOpen(false);
					toast('Successfully update');
				},
				onError: (error: any) => {
					toast(error.response.data.message);
				},
			}
		);
	};

	return (
		<form
			className="child:mt-8 child:text-sm"
			onSubmit={handleSubmit(onSubmit)}
		>
			<TextareaField
				label="Body"
				error={errors?.body?.message}
				registration={register('body')}
			/>
			<Button type="submit" size="sm" isLoading={createComment.isLoading}>
				Create
			</Button>
		</form>
	);
};

export default CommentForm;
