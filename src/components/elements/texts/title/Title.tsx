import React from 'react';
import { Text } from 'react-native';

interface ITitle {
	text: React.ReactNode
	style: ''
}

export const Title = ({text}: ITitle) => {
	return (
		<Text>{text}</Text>
	);
};