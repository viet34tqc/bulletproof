import Button from '@/components/Button/Button';
import Drawer from '@/components/Drawer/Drawer';
import PurifyHTML from '@/components/PurifyHTML/PurifyHTML';
import Spinner from '@/components/Spinner/Spinner';
import { formatDate } from '@/utils/format';
import { PencilAltIcon } from '@heroicons/react/outline';
import { useParams } from 'react-router-dom';
import { useGetDiscussion } from '../api/getDiscussion';
import CommentForm from '../components/CommentForm';
import CommentList from '../components/CommentList';
import DiscussionForm from '../components/DiscussionForm';

const SingleDiscussion = () => {
	const { id } = useParams();
	const { data: discussion, isLoading } = useGetDiscussion(id as string);

	if (isLoading) {
		return (
			<div className="w-full h-48 flex justify-center items-center">
				<Spinner size="lg" />
			</div>
		);
	}

	if (!discussion) return null;

	return (
		<>
			<header>
				<h1 className="mb-2">{discussion.title}</h1>
				<p className="text-xs font-semibold">
					{formatDate(discussion.createdAt)}
				</p>
			</header>

			<div className="flex justify-end mb-8">
				<div className="flex justify-end mb-4">
					<Drawer
						title="Update discussion"
						triggerButton={
							<Button className="text-[14px]">
								<PencilAltIcon width="14" />
								Update discussion
							</Button>
						}
					>
						<DiscussionForm discussion={discussion} />
					</Drawer>
				</div>
			</div>

			<div className="bg-white shadow overflow-hidden sm:rounded-lg mb-[64px]">
				<div className="px-4 py-5 sm:px-6">
					<div className="mt-1 max-w-2xl text-sm text-gray-800">
						<PurifyHTML value={discussion.body} />
					</div>
				</div>
			</div>

			<div className="flex justify-between">
				<strong className="mb-4">Comments</strong>
				<div className="flex justify-end mb-4">
					<Drawer
						title="Create comment"
						triggerButton={
							<Button className="text-[14px]">
								<span>+</span>
								Create Comment
							</Button>
						}
					>
						<CommentForm discussionId={id as string} />
					</Drawer>
				</div>
			</div>

			<CommentList discussionId={id as string} />
		</>
	);
};

export default SingleDiscussion;
