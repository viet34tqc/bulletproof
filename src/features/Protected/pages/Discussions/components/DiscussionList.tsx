import Authorization from '@/components/Authorization/Authorization';
import { Link } from '@/components/Link/Link';
import Spinner from '@/components/Spinner/Spinner';
import Table from '@/components/Table/Table';
import { ROLES } from '@/core/authorization';
import { formatDate } from '@/utils/format';
import { useGetDiscussions } from '../api/getDiscussions';
import { Discussion } from '../types/discussion';
import DeleteDiscussionButton from './DeleteDiscussionButton';

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
						return <>{formatDate(createdAt)}</>;
					},
				},
				{
					name: '',
					field: 'id',
					Cell({ entry: { id } }) {
						return <Link to={`./${id}`}>View</Link>;
					},
				},
				{
					name: '',
					field: 'id',
					Cell({ entry: { id } }) {
						return (
							<Authorization allowedRoles={[ROLES.ADMIN]}>
								<DeleteDiscussionButton id={id} />
							</Authorization>
						);
					},
				},
			]}
		/>
	);
};

export default DiscussionList;
