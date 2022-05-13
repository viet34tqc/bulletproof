import createDOMPurify from 'dompurify';
const DOMPurify = createDOMPurify(window);

const PurifyHTML = ({ value }: { value: string | Node }) => {
	return (
		<div
			className="p-2 w-full prose prose-indigo"
			dangerouslySetInnerHTML={{
				__html: DOMPurify.sanitize(value),
			}}
		/>
	);
};

export default PurifyHTML;
