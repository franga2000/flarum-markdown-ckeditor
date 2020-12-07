import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials'
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote'
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock'
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageInsert from '@ckeditor/ckeditor5-image/src/imageinsert';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import GFMDataProcessor from '@ckeditor/ckeditor5-markdown-gfm/src/gfmdataprocessor';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';

function Markdown( editor ) {
	editor.data.processor = new GFMDataProcessor( editor.editing.view.document );
}

export default class MarkdownEditor extends ClassicEditorBase { }

// Plugins to include in the build
MarkdownEditor.builtinPlugins = [
	Essentials,
	Markdown,
	Autoformat,
	Bold,
	Italic,
	Underline,
	Strikethrough,
	CodeBlock,
	BlockQuote,
	Heading,
	Image,
	ImageStyle,
	ImageToolbar,
	ImageInsert,
	Link,
	List,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar
];

// Editor configuration
MarkdownEditor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'|',
			'bold',
			'italic',
			'underline',
			'strikethrough',
			'|',
			'link',
			'bulletedList',
			'numberedList',
			'|',
			'imageInsert',
			'blockQuote',
			'insertTable',
			'codeBlock',
			'|',
			'undo',
			'redo'
		]
	},
	image: {
		toolbar: [
			'imageStyle:full',
			'imageStyle:side',
			'|',
			'imageTextAlternative'
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells'
		]
	},
	language: 'en'
};
