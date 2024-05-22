import {useArgs} from '@storybook/preview-api'
import type {Meta, StoryObj} from '@storybook/react'
import {Modal} from './Modal.tsx'

type Story = StoryObj<typeof Modal>

const meta: Meta<typeof Modal> = {
	title: 'musicbrainz/Modal',
	component: Modal,
	args: {
		isOpen: true,
		children: (
			<div>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
				reprehenderit suscipit esse aliquam sapiente officiis repellat in
				delectus, ab voluptates! In asperiores error rem neque. Molestias ab
				autem eius incidunt! Lorem ipsum dolor sit amet consectetur adipisicing
				elit. Sed voluptates odit, asperiores recusandae earum similique
				sapiente vero quasi id. Pariatur voluptas explicabo necessitatibus
				consectetur sapiente provident exercitationem, deserunt ratione animi!
			</div>
		)
	}
}

export default meta

export const _default: Story = {
	render: args => {
		const [{isOpen}, updateArgs] = useArgs<typeof args>()

		return (
			<Modal isOpen={!!isOpen} close={() => updateArgs({isOpen: false})}>
				{args.children}
			</Modal>
		)
	}
}
