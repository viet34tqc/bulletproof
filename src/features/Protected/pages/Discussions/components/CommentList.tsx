import Spinner from '@/components/Spinner/Spinner';
import { formatDate } from '@/utils/format';
import { ArchiveIcon } from '@heroicons/react/outline';
import { useGetComments } from '../api/getComments';
import { Comment } from '../types/comment';

const CommentList = ({ discussionId }: { discussionId: string }) => {
	const { data: comments, isLoading } = useGetComments(discussionId);

	if (isLoading) {
		return (
			<div className="w-full h-48 flex justify-center items-center">
				<Spinner size="lg" />
			</div>
		);
	}

	if (!comments?.length)
		return (
			<div
				role="list"
				aria-label="comments"
				className="bg-white text-gray-500 h-40 flex justify-center items-center flex-col"
			>
				<ArchiveIcon className="h-10 w-10" />
				<h4>No Comments Found</h4>
			</div>
		);

	return (
		<ul>
			{comments.map(comment => (
				<CommentItem key={comment.id} comment={comment} />
			))}
		</ul>
	);
};

const CommentItem = ({ comment }: { comment: Comment }) => {
	return (
		<li className="flex justify-between shadow p-4 bg-white">
			<div>
				<p className="font-medium text-sm mb-8">
					{formatDate(comment.createdAt)}
				</p>
				<p>comment.body</p>
			</div>
		</li>
	);
};

export default CommentList;
