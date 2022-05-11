import Spinner from '@/components/Spinner/Spinner';
import Table from '@/components/Table/Table';
import { Link } from 'react-router-dom';
import { useGetDiscussions } from '../api/getDiscussions';
import { Discussion } from '../types/discussion';

const DiscussionList = () => {
	const { data: discussions, isLoading } = useGetDiscussions();

	if (isLoading) {
		return (
			<div className="w-full h-48 flex justify-center items-center">
				<Spinner size="lg" />
			</div>
		);
	}

	if (!discussions) return null;

	return (
		<Table<Discussion>
			data={discussions}
			columns={[
				{
					name: 'Title',
					field: 'title',
				},
				{
					name: 'Created At',
					field: 'createdAt',
					Cell({ entry: { createdAt } }) {
						return <span>{createdAt}</span>;
					},
				},
				{
					name: '',
					field: 'id',
					Cell({ entry: { id } }) {
						return <Link to={`./${id}`}>View</Link>;
					},
				},
			]}
		/>
	);
};

export default DiscussionList;
