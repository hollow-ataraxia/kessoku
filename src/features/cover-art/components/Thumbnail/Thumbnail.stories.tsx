import type {Meta, StoryObj} from '@storybook/react'
import {Provider} from 'react-redux'
import {store} from '#features/cover-art/tests/utils/redux-store.ts'
import CoverThumbnail from './Thumbnail.tsx'

type Story = StoryObj<typeof CoverThumbnail>

const meta: Meta<typeof CoverThumbnail> = {
	title: 'cover-art/Thumbnail',
	component: CoverThumbnail
}
export default meta

export const _default: Story = {
	decorators: [Story => <Provider store={store}>{<Story />}</Provider>],
	args: {
		id: 'd6a16714-4b56-4da6-bd41-1129b272f862',
		index: 0
	}
}
