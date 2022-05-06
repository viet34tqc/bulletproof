import { useAuth } from '@/context/AuthContext';

const Dashboard = () => {
	const { user } = useAuth();
	return (
		<div className="child:mb-3">
			<h1>Dashboard</h1>
			<p>
				Welcome &nbsp;
				<strong>
					{user?.lastName} {user?.firstName}
				</strong>
			</p>
			<p>
				Your role is: <strong>{user?.role}</strong>
			</p>
			<p className="font-semibold">In this application you can:</p>
			{user?.role === 'ADMIN' && (
				<ul className="my-4 list-inside list-disc">
					<li>Create discussions</li>
					<li>Edit discussions</li>
					<li>Delete discussions</li>
					<li>Comment on discussions</li>
					<li>Delete all comments</li>
				</ul>
			)}
		</div>
	);
};

export default Dashboard;
