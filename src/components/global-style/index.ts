import styled, {css} from "styled-components"

export interface GlobalStyleProps {
	direction?: string
}

export const GlobalStyle = styled.div<GlobalStyleProps>`
	position: fixed;

	${(props) => {
		switch (props.direction) {
			case 'right':
				return css`
					right: 0px;
				`

			case 'left':
				return css`
					left: 0px;
					transform: scale(-1, 1);
				`

			default:
				return css`
					right: 0px;
				`
		}
	}}
`