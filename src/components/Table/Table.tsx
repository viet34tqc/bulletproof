import { ArchiveIcon } from '@heroicons/react/outline';
import React, { ReactElement } from 'react';

type TableColumnProps<Entry> = {
	name: string;
	field: keyof Entry;
	Cell?: ({ entry }: { entry: Entry }) => ReactElement;
};

type TableProps<Entry> = {
	data: Entry[];
	columns: TableColumnProps<Entry>[];
};

// If you're in a .tsx file you cannot just write <T>, use <T,> or <T extends>
const Table = <Entry extends { id: string }>({
	data,
	columns,
}: TableProps<Entry>) => {
	if (!data?.length) {
		return (
			<div className="bg-white text-gray-500 h-80 flex justify-center items-center flex-col">
				<ArchiveIcon className="h-16 w-16" />
				<p>No Entries Found</p>
			</div>
		);
	}

	return (
		<div className="shadow overflow-auto border-gray-200 sm:rounded-lg">
			<table className="w-full divide-y divide-gray-200">
				<thead className="bg-gray-50">
					<tr>
						{columns.map(col => (
							<th
								key={col.name}
								className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
							>
								{col.name}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data.map((entry, entryIndex) => (
						<tr
							key={entry.id + entryIndex}
							className={entryIndex % 2 === 0 ? 'bg-white' : 'bg-gray-100'}
						>
							{columns.map(({ Cell, field, name }, columnIndex) => (
								<td
									key={name + columnIndex}
									className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
								>
									{Cell ? (
										<Cell entry={entry} />
									) : (
										(entry[field] as unknown as string) // We have to apply type for entry[field] because TS cannot understand the Entry type
									)}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
