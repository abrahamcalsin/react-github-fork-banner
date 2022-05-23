import React from 'react'
import { Meta, Story } from '@storybook/react'

import { GithubForkBanner, GithubForkBannerProps } from '../src/components/github-fork-banner'

const meta: Meta = {
  title: 'React Github Fork Banner',
  component: GithubForkBanner,
}

export default meta

const Template: Story<GithubForkBannerProps> = args => <GithubForkBanner {...args} />

export const Default = Template.bind({})

Default.args = {}
