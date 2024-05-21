import {coverArtApi} from '@features/cover-art/image.api.ts'
import {CoverThumbnail} from '@features/cover-art/index.ts'
import {configureStore} from '@reduxjs/toolkit'
import type {Meta, StoryObj} from '@storybook/react'
import {Provider} from 'react-redux'
import {Modal} from './Modal.tsx'

type Story = StoryObj<typeof Modal>

const store = configureStore({
	reducer: {
		[coverArtApi.reducerPath]: coverArtApi.reducer
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(coverArtApi.middleware)
})

const meta: Meta<typeof Modal> = {
	component: Modal
}

export const _default: Story = {
	decorators: [Story => <Provider store={store}>{<Story />}</Provider>],
	args: {
		children: (
			<div>
				<pre>
					<h3>
						Hoshimachi Suisei!" "It's your shooting star, your diamond in the
						rough, idol VTuber
					</h3>
				</pre>

				<CoverThumbnail id="8785ae5d-d591-4b85-86dc-e1f0594ff2e3" />
				<CoverThumbnail id="1b2cfca5-6f22-416b-87b3-73ab70a796af" />
				<CoverThumbnail id="4cb9755f-d871-40d9-9304-72d5f6530ced" />
			</div>
		)
	}
}

export default meta
