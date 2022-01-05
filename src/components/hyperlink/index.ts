import styled from 'styled-components'
import { PathOctoTail, octoTailAnimated } from '../svg'

export const Hyperlink = styled.a`
	color: ${({ color }) => color || 'white'};

	&:hover ${PathOctoTail} {
		animation-name: ${octoTailAnimated};
		animation-duration: 560ms;
		animation-timing-function: ease-in-out;
	}
`