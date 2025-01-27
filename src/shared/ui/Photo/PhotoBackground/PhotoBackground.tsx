import React from 'react';
import { View } from 'react-native';
import Svg, { Path, Mask, G, type NumberProp } from 'react-native-svg';
import { DEFAULT_DIMENSIONS, styles } from './PhotoBackground.styles';

export type PhotoBackgroundProps = Partial<{
  width: NumberProp;
  height: NumberProp;
}>;

export const PhotoBackground = ({
  width = DEFAULT_DIMENSIONS.WIDTH,
  height = DEFAULT_DIMENSIONS.HEIGHT,
}: PhotoBackgroundProps) => {
  return (
    <View style={styles.container}>
      <Svg width={width} height={height} viewBox="0 0 290 100" fill="none">
        <Path fill="#fff" d="M0 0h290v100H0z" />
        <Path
          fill="#CBD7F4"
          fillRule="evenodd"
          d="M173.136 31h-28.429c-.956 0-1.757.723-1.854 1.674l-1.501 14.634H128.58a1.397 1.397 0 0 0 0 2.796h12.485l-.334 3.261h-14.48a1.398 1.398 0 1 0 0 2.796h14.193l-.287 2.795h-6.917a1.398 1.398 0 1 0 0 2.796h6.631l-.287 2.796h-22.186a1.398 1.398 0 1 0 0 2.796h52.811c.965 0 1.77-.737 1.856-1.698l2.927-32.616a1.864 1.864 0 0 0-1.856-2.03Z"
          clipRule="evenodd"
        />
        <Path
          fill="#F8FAFF"
          d="m144.366 53.67 1.539-17.706a1.864 1.864 0 0 1 1.857-1.702h22.118c1.093 0 1.952.936 1.857 2.025l-1.54 17.706a1.864 1.864 0 0 1-1.857 1.702h-22.118a1.863 1.863 0 0 1-1.856-2.025Z"
        />
        <Path
          fill="#CBD7F4"
          fillRule="evenodd"
          d="M121.125 48.706c0-.772.626-1.398 1.398-1.398h1.864a1.398 1.398 0 1 1 0 2.796h-1.864a1.398 1.398 0 0 1-1.398-1.398Z"
          clipRule="evenodd"
        />
        <Path
          fill="#B7C4E4"
          d="m150.552 38.598-4.474 3.086c-.458.316-.751.82-.799 1.374l-.915 10.613a1.863 1.863 0 0 0 1.857 2.024h22.167c.947 0 1.743-.71 1.852-1.65l.413-3.579a1.865 1.865 0 0 0-.459-1.452l-3.884-4.369a1.863 1.863 0 0 0-2.529-.239l-3.101 2.385a1.864 1.864 0 0 1-2.687-.443l-4.832-7.25a1.864 1.864 0 0 0-2.609-.5Z"
        />
        <Path
          fill="#F8D94F"
          d="M163.526 39.387a1.864 1.864 0 1 1-3.727 0 1.864 1.864 0 0 1 3.727 0Z"
        />
        <Path
          fill="#CBD7F4"
          fillRule="evenodd"
          d="M121.125 60.354c0-.772.626-1.398 1.398-1.398h6.523a1.398 1.398 0 0 1 0 2.796h-6.523a1.398 1.398 0 0 1-1.398-1.398Z"
          clipRule="evenodd"
        />
        <Path
          fill="#EFF3FD"
          d="m79.678 63.544 2.952 2.953L72.496 76.63l-2.953-2.953zm-10.725 3.638 2.953 2.953-2.953 2.953L66 70.135z"
        />
        <Mask
          id="a"
          width={290}
          height={100}
          x={0}
          y={0}
          maskUnits="userSpaceOnUse"
        >
          <Path fill="#fff" d="M0 0h290v100H0z" />
        </Mask>
        <G fill="#EFF3FD" mask="url(#a)">
          <Path d="M47.928-7.693 55.684.064l-26.62 26.62-7.756-7.757zM19.756 1.864l7.756 7.756-7.756 7.756L12 9.62zm266.922 84.679 2.953 2.953-10.134 10.134-2.953-2.953zm-10.725 3.639 2.953 2.953-2.953 2.953L273 93.135zm13.725-79.639 2.953 2.953-10.134 10.134-2.953-2.953zm-10.725 3.639 2.953 2.953-2.953 2.953L276 17.135zM25.927 91.307l7.756 7.756-26.62 26.62-7.756-7.757z" />
        </G>
        <Path
          fill="#EFF3FD"
          d="m243.927 42.307 7.756 7.756-26.62 26.62-7.756-7.756zm-28.171 9.557 7.756 7.756-7.756 7.756L208 59.62z"
        />
      </Svg>
    </View>
  );
};