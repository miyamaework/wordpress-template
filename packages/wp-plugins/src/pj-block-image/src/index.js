import { registerBlockType } from '@wordpress/blocks';

import Edit from './edit';

registerBlockType('pj-block/pj-block-image', {
  edit: Edit,
  save: () => null,
});
