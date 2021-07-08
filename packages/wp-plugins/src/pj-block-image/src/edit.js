import { useBlockProps, MediaUpload } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import { ServerSideRender } from '@wordpress/editor';

import './editor.scss';

/**
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 * @param {String} props.name - ブロックの識別子
 * @param {Number} attributes.mediaId - 保存されたメディアID
 * @return {WPElement} Element to render.
 */
const Edit = ({ name, attributes: { mediaId = 0, preview = false }, setAttributes }) => {
  /**
   * メディアライブラリを開くボタンをレンダリングする関数
   * @param {Function} open
   */
  const getImageButton = (open) => (
    <Button onClick={open} isPrimary>
      画像追加
    </Button>
  );

  /**
   * 設定した画像をリセットする
   */
  const removeMedia = () => {
    setAttributes({
      mediaId: 0,
    });
  };

  /**
   * 選択された画像を保存する
   * @param {WPMediaObject} media
   */
  const onSelectImage = (media) => {
    setAttributes({
      mediaId: media.id,
    });
  };

  return (
    <div {...useBlockProps()}>
      <div className="cpa-adminBlockImage">
        <div className="cpa-adminBlockImage_buttonGroup">
          <MediaUpload
            allowedTypes={['image']}
            render={({ open }) => getImageButton(open)}
            value={mediaId}
            onSelect={onSelectImage}
          />
          {mediaId !== 0 && (
            <Button className="removeImage" isDestructive isLink onClick={removeMedia}>
              画像を削除
            </Button>
          )}
        </div>
        <ServerSideRender attributes={{ mediaId, preview }} block={name} className="cpa-adminBlockImage_imageWrapper" />
      </div>
    </div>
  );
};

export default Edit;
