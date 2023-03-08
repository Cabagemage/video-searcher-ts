---
to: ui/<%= Name %>/<%= Name %>.stories.tsx
---
import <%= Name %> from "./index"
import React, { useState } from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

/*
У каждого компонента должен быть свой stories, так как storybook упрощает
взаимодействие с имеющейся в проекте кодовой базой.
*/

export default {
	component: <%= Name %>,
	title: "ui/<%= Name %>",
} as ComponentMeta<typeof <%= Name %>>;


const Template: ComponentStory<typeof <%= Name %>> = (args) => {
	return <<%= Name %> {...args} />
};