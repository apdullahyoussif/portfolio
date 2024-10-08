/** @format */

import React from 'react';

const FormattingContent = () => {
	return (
		<div className='absolute bg-gray-100 dark:bg-gray-700 dark:text-gray-200 border border-gray-300 p-4 rounded-lg shadow-md w-72 z-10'>
			<h3 className='font-bold mb-2'>Formatting Content Instructions:</h3>
			<ul className='list-decimal list-inside text-sm'>
				<li>
					<strong># for Titles:</strong>
					<br />
					Use the `#` symbol at the beginning of the line to create a title.
					<br />
					Example: <code># This is a Title</code>
				</li>

				<li>
					<strong>&gt; for Blockquotes:</strong>
					<br />
					Use the `&gt;` symbol at the beginning of the line to create a
					blockquote.
					<br />
					Example: <code>&gt; This is a note or a quote</code>
				</li>
				<li>
					<strong>` for Code Blocks: `</strong>
					<br />
					Use triple backticks <code>`</code> before and after a code block.
					<br />
					Example: <br />
					<code>
						`<br />
						const x = 10;
						<br />
						console.log(x);
						<br />`
					</code>
				</li>
				<li>
					<strong>Normal Tex :</strong>
					<br />
					Simply start typing on a new line without adding any symbols to write
					regular text.
					<br />
					Example:
					<code>This is a regular text without any special formatting.</code>
				</li>
			</ul>
		</div>
	);
};

export default FormattingContent;
