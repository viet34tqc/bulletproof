import Authorization from '@/components/Authorization/Authorization';
import Spinner from '@/components/Spinner/Spinner';
import { useAuth } from '@/context/AuthContext';
import { POLICIES } from '@/core/authorization';
import { User } from '@/features/Protected/types/User';
import { formatDate } from '@/utils/format';
import { ArchiveIcon } from '@heroicons/react/outline';
import { useGetComments } from '../api/getComments';
import DeleteCommentButton from './DeleteCommentButton';

const CommentList = ({ discussionId }: { discussionId: string }) => {
	const { user } = useAuth();
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
		<ul className="grid gap-3">
			{comments.map(comment => (
				<li className="flex justify-between shadow p-4 bg-white items-start">
					<div>
						<p className="font-medium text-sm mb-8">
							{formatDate(comment.createdAt)}
						</p>
						<p>{comment.body}</p>
					</div>
					<Authorization
						policyCheck={POLICIES['comment:delete'](user as User, comment)}
					>
						<DeleteCommentButton id={comment.id} discussionId={discussionId} />
					</Authorization>
				</li>
			))}
		</ul>
	);
};

export default CommentList;
