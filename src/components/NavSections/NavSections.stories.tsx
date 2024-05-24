import type {Meta, StoryObj} from '@storybook/react'
import type {CSSProperties} from 'react'
import NavSections from './NavSections'

type Story = StoryObj<typeof NavSections>

const meta: Meta<typeof NavSections> = {
	title: 'NavSections',
	component: NavSections,
	args: {children: []}
}

export default meta

const item: CSSProperties = {
	width: '200px',
	height: '200px',
	backgroundColor: 'beige',
	color: 'black',
	textAlign: 'center'
}

export const _default: Story = {
	render() {
		return (
			<div style={{maxWidth: '700px', margin: 'auto'}}>
				<NavSections>
					<div style={item}>1</div>
					<div style={item}>2</div>
					<div style={item}>3</div>
					<div style={item}>4</div>
					<div style={item}>5</div>
					<div style={item}>6</div>
					<div style={item}>7</div>
					<div style={item}>8</div>
				</NavSections>
			</div>
		)
	}
}
