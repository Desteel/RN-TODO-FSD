import React from 'react';
import { View } from 'react-native';
import { launchCamera } from 'shared/lib';
import { Photo } from 'shared/ui/Photo';
import { Button } from 'shared/ui/buttons';
import { styles } from './PhotoField.styles';

export type PhotoFieldProps = {
  photoSrc: string | null;
  onChange: (photoSrc: string | null) => void;
};

export const PhotoField = ({ photoSrc, onChange }: PhotoFieldProps) => {
  return (
    <View>
      <Photo src={photoSrc || undefined} />
      <Button
        size="md"
        type="secondary"
        title="+ Add photo"
        onPress={async () => {
          const assets = await launchCamera();
          if (assets) {
            const [{ uri }] = assets;
            onChange(uri || null);
          }
        }}
        buttonBoxStyle={styles.photoButton}
      />
    </View>
  );
};
